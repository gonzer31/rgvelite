import React from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
import aboutPic from '../images/elite5-editweb.jpg'
import homeProgramsPic from '../images/beginners4-editweb.jpg'

const homeProgramsStyle = {
	background: `linear-gradient(to bottom, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.00), rgba(0, 0, 0, 0.00)), url(${homeProgramsPic}) center no-repeat`,
	backgroundSize: 'cover',
	height: '500px'
}

export default function Home() {
	return (
		<div className="home-section mw9 center">
			<div className="home-title bg-dark-gray">
				{
					isMobile ? <img className="home-video" src="https://firebasestorage.googleapis.com/v0/b/rgv-elite.appspot.com/o/gifs%2Fdrone_overhead_low_gif.gif?alt=media&token=b23e2c60-3f8e-4b96-a4bd-2104c9ad7a18" />
						:
						<video autoPlay loop muted playsInline className="home-video">
							<source src="https://firebasestorage.googleapis.com/v0/b/rgv-elite.appspot.com/o/videos%2Fdrone_overhead.MP4?alt=media&token=d68458c2-9a19-4864-8f7f-5cb9d0859d6d"
								type="video/mp4" />
							Your browser does not support the video tag.
						</video>
				}
				<div className="home-title-overlay pa5 pa6-ns">
					<h1 className="db f1 lh-solid tc fw3 mt0 pa0 white mb3">RGV Elite</h1>
					<h1 className="f3 lh-solid tc fw3 mv0 pa0 white">Tennis Academy</h1>
				</div>
			</div>


			<div className="home-about bg-near-white cf pa4 pa5-ns dt-l">
				<div className="home-about-overlay pr5-l dtc-l v-mid-l">
					<h1 className="db f1-ns f2 lh-solid tc tl-l fw3 mt2 pa0 prim-text">Forming excellent athletes and even better people</h1>
					<h1 className="f3-ns f4 fw3 tc tl-l sec-text">
						We have been developing athletes in the Rio Grande Valley since 2009.
						We have over a decade of international coaching experience, and our players
						stand in the state rankings, national rankings, and ITF rankings.
					</h1>
					<div className="tc tl-l mb0 pb4 pb0-l">
						<Link to={"/about-us"} className="custom-link mdl-typography--text-uppercase">
							LEARN MORE ABOUT US
							<i className="material-icons">chevron_right</i>
						</Link>
					</div>
				</div>
				<div className="dtc-l v-mid-l">
					<img itemProp="image" src={aboutPic} className="fl w-100 shadow-5-ns" />
				</div>
			</div>


			<div style={homeProgramsStyle} className="bg-near-white">
				<div className="home-programs-overlay pa4 pa5-ns">
					<h1 className="db f1-ns f2 lh-solid tl mt2 fw3 pa0 white">Programs</h1>
					<p className="f3-ns f4 fw3 tl white">
						We have programs for all ages and any experience level.
					</p>
					<div className="tl mb2">
						<Link to={"/programs"} className="custom-link mdl-typography--text-uppercase">
							VIEW OUR PROGRAMS
							<i className="material-icons">chevron_right</i>
						</Link>
					</div>
				</div>
			</div>

			{/* <div className="home-tournaments bg-near-white cf pa4 pa5-ns dt-l">
					<div className="home-about-overlay pr5-l dtc-l v-mid-l">
						<h1 className="db f1-ns f2 lh-solid tc tl-l fw3 mt2 pa0 prim-text">Tournaments</h1>
						<h1 className="f3-ns f4 fw3 tc tl-l sec-text">
							We encourage our players to measure their skills by competing in tournaments.
							It's the best way to know how much they have improved.
						</h1>
						<article className="cf">
							<div className="fl w-100 w-50-ns tc tl-l mb0 pb3 pb0-l">
								<Link to={"/tournaments"} className="custom-link mdl-typography--text-uppercase">
									FIND TOURNAMENTS
									<i className="material-icons">chevron_right</i>
								</Link>
							</div>
							<div className="fl w-100 w-50-ns tc tl-l mb0 pb4 pb0-l">
								<Link to={"/rankings"} className="custom-link mdl-typography--text-uppercase">
									FIND RANKINGS
									<i className="material-icons">chevron_right</i>
								</Link>
							</div>
						</article>
					</div>
					<div className="dtc-l v-mid-l">
						<img itemProp="image" src={"../images/challenger090917.jpg"} className="fl w-100 shadow-5-ns" />
					</div>
				</div> */}


			<div className="home-contact bg-white">
				<div className="home-contact-overlay pa4 pa5-ns">
					<h1 className="db f1-ns f2 lh-solid tc fw3 mt0 pa0 prim-text">Contact us</h1>
					<p className="f3-ns f4 fw3 tc sec-text">
						Let us know if you have any questions.
					</p>

					<div className="tl center mw7 mw9-l pt3-l">
						<article className="cf">
							<div className="fl w-100 w-50-l tc-l tl pv4 pv0-l">
								<div className="name-daniel">
									<i className="material-icons dib v-mid pr2">perm_identity</i>
									<h2 className="dib f5-contact f4-ns v-mid about-us-bold">Daniel De La Cruz</h2>
								</div>
								<div className="phone-daniel">
									<i className="material-icons dib v-mid green pr2">phone</i>
									<a href="tel:9567891144">
										<h2 itemProp="telephone" className="dib f5-contact f4-ns fw3 v-mid sec-text underline hover-orange-custom">(956) 789-1144</h2>
									</a>
								</div>
								<div className="email-daniel">
									<i className="material-icons dib v-mid blue pr2">email</i>
									<a href="mailto:danieldelacruz71@hotmail.com" target="_blank">
										<h2 itemProp="email" className="dib f5-contact f4-ns fw3 v-mid sec-text underline hover-orange-custom">danieldelacruz71@hotmail.com</h2>
									</a>
								</div>
							</div>

							<div className="fl w-100 w-50-l tc-l tl pb4 pb0-l">
								<div className="name-pancho">
									<i className="material-icons dib v-mid pr2">perm_identity</i>
									<h2 className="dib f5-contact f4-ns v-mid about-us-bold">Francisco Diaz</h2>
								</div>
								<div className="phone-pancho">
									<i className="material-icons dib v-mid green pr2">phone</i>
									<a href="tel:9562406058">
										<h2 className="dib f5-contact f4-ns fw3 v-mid sec-text underline hover-orange-custom">(956) 240-6058</h2>
									</a>
								</div>
								<div className="email-pancho">
									<i className="material-icons dib v-mid blue pr2">email</i>
									<a href="mailto:lepanche@hotmail.com" target="_blank">
										<h2 className="dib f5-contact f4-ns fw3 v-mid sec-text underline hover-orange-custom">lepanche@hotmail.com</h2>
									</a>
								</div>
							</div>
						</article>

						<div className="location tc-l pt4-l">
							<i className="material-icons dib v-mid red pr2">location_on</i>
							<a href="https://www.google.com/maps/place/Bentsen+Palm+Community+Park,+Inspiration+Rd,+Mission,+TX+78572/@26.1980166,-98.363231,16z/data=!3m1!4b1!4m5!3m4!1s0x8665a9cc9d416ddd:0xbc33ecd102bfb138!8m2!3d26.1948335!4d-98.3560799">
								<h2 className="dib f5-contact f4-ns fw3 v-mid pr2 sec-text underline hover-orange-custom">Bentsen Palm Community Park</h2>
							</a>
							<h2 itemProp="address" itemScope itemType="http://schema.org/PostalAddress" className="dib f5-contact f4-ns fw3 v-mid pad-small sec-text">
								<span itemProp="addressLocality">Mission</span>, <span itemProp="addressRegion">TX</span>
							</h2>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

}
