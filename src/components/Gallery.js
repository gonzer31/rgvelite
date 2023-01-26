import React, { useEffect, useState } from 'react';
import { getDatabase, ref, child, get } from 'firebase/database';
import firebaseApp from '../firebase.js';
import Media from 'react-media';
var _ = require('lodash');

/**
* Split an array into n subarrays (or columns)
* @param  {Array} flatArray Doesn't necessarily have to be flat, but this func only works 1 level deep
* @param  {Number} numCols   The desired number of columns
* @return {Array}
*/
export function splitArray(flatArray, numCols) {
  const maxColLength = Math.ceil(flatArray.length / numCols)
  const nestedArray = _.chunk(flatArray, maxColLength)
  let newArray = []
  for (var i = 0; i < numCols; i++) {
    newArray[i] = nestedArray[i] || []
  }
  return newArray
}

export default function Gallery() {
  const [galleryCol1Urls, setGalleryCol1Urls] = useState([]);
  const [galleryCol2AUrls, setGalleryCol2AUrls] = useState([]);
  const [galleryCol2BUrls, setGalleryCol2BUrls] = useState([]);
  const [galleryCol3Urls, setGalleryCol3Urls] = useState([]);
  useEffect(() => {
    // read all pics from firebase
    const dbRef = ref(getDatabase(firebaseApp));
    get(child(dbRef, 'gallery-all')).then((snapshot) => {
      if (snapshot.exists()) {
        let tempUrls = snapshot.val().map(obj=> obj.url);
        let b1 = []
        let b2 = []
        let b3 = []
        while (tempUrls.length > 0) {
          b1.push(tempUrls.shift());
          b2.push(tempUrls.shift());
          b3.push(tempUrls.shift());
        }
        let b2split = splitArray(b2, 2);
        setGalleryCol1Urls(b1);
        setGalleryCol2AUrls(b2split[0]);
        setGalleryCol2BUrls(b2split[1]);
        setGalleryCol3Urls(b3);
      } else {
        console.log("No data available");
      }
    }).catch((error) => {
      console.error(error);
    });
  }, [])

  const col1List = galleryCol1Urls.map(obj => (
    <a key={obj} className="pv2 db no-underline black"><img className="db w-100" src={obj} /></a>
  ));

  const col2AList = galleryCol2AUrls.map((obj) => (
    <a key={obj} className="pv2 db no-underline black"><img className="db w-100" src={obj} /></a>
  ));

  const col2BList = galleryCol2BUrls.map((obj) => (
    <a key={obj} className="pv2 db no-underline black"><img className="db w-100" src={obj} /></a>
  ));

  const col3List = galleryCol3Urls.map(obj => (
    <a key={obj} className="pv2 db no-underline black"><img className="db w-100" src={obj} /></a>
  ));

  return (
    <div className="gallery-section">
      <h2 className="tc f3 fw3 bg-white o-90 forrest-green">Gallery</h2>
      <main className="cf pa2">
        {/* small */}
        <Media query={{ maxWidth: "30em" }}>
          <div>
            <div className="fl w-100 ph2">
              {col1List.concat(col2AList)}
            </div>
            <div className="fl w-100 ph2">
              {col2BList.concat(col3List)}
            </div>
          </div>
        </Media>
        {/* medium */}
        <Media query={{ minWidth: "30em", maxWidth: "60em" }}>
          <div>
            <div className="fl w-50 ph2">
              {col1List.concat(col2AList)}
            </div>
            <div className="fl w-50 ph2">
              {col2BList.concat(col3List)}
            </div>
          </div>
        </Media>
        {/* large */}
        <Media query={{ minWidth: "60em" }}>
          <div>
            <div className="fl w-third ph2">
              {col1List}
            </div>
            <div className="fl w-third ph2">
              {col2AList.concat(col2BList)}
            </div>
            <div className="fl w-third ph2">
              {col3List}
            </div>
          </div>
        </Media>
      </main>
    </div>
  );
}
