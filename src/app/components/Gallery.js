import React from 'react';
import firebaseApp from '../firebase.js';
// import { Modal } from 'react-bootstrap';

export class Gallery extends React.Component {
  constructor() {
    super();
    this.state = {
      url: "",
      show: false,
      allUrls: [],
      galleryCol1Urls: [],
      galleryCol2Urls: []
    };
  } 

  componentDidMount() {
    // read all tournaments from firebase
    var database = firebaseApp.database();
    var galleryAll = database.ref().child('gallery-all');
    var tempUrls = [];
    galleryAll.once('value', snap => {
        snap.val().map( (obj) => {
            tempUrls.push(obj.url);
        });    
        var half = Math.floor((tempUrls.length)/2);
        this.setState({
          galleryCol1Urls: tempUrls.splice(0,half),
          galleryCol2Urls: tempUrls.splice(0)
        });
    });
  }

  // showModal(obj) {
  //   this.setState({show: true});
  //   this.setState({url: obj});
  // }

  // hideModal() {
  //   this.setState({show: false});
  // }

  render() {
      const col1List = this.state.galleryCol1Urls.map( (obj) => {
          return (
            <a className="pv2 db no-underline black">
              {/*<img className="db w-100" src={obj} onClick={() => this.showModal(obj)} />*/}
              <img className="db w-100" src={obj}/>
            </a>
          );
      })

     const col2List = this.state.galleryCol2Urls.map( (obj) => {
          return (
            <a className="pv2 db no-underline black"><img className="db w-100" src={obj} /></a>
          );
      })  

      // const imgModal = (
      //   <Modal show={this.state.show} onHide={() => this.hideModal()} backdrop dialogClassName="">
      //       <Modal.Body>
      //         <img className="db w-100" src={this.state.url} />
      //       </Modal.Body>
      //   </Modal> 
      // );

      return (
        <div className="gallery-section">
          <h2 className="tc f3 fw3 bg-white o-90 forrest-green">Gallery</h2>
          <main className="cf pa2">
            <div className="fl w-100 w-50-ns ph2">
              { col1List }
            </div>
            <div className="fl w-100 w-50-ns ph2">
              { col2List }
            </div>
            {/* imgModal */}
          </main>
        </div>
    );
  }
}