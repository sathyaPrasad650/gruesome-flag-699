export function Navbar() {
    return (
        <div style={{ height: "191px" }}>
            <div style={{ height: "52px", backgroundColor: "#f3f3f3" }}>

            </div>
            <div style={{ display: "flex" }}>
                <div style={{ display: "flex", borderBottom: "2px solid gray", width: '223px', justifyContent: "space-between", marginLeft: "153px", height: "28px", marginTop: "40px" }}>
                    <i style={{ color: "#ff75ba", paddingTop: "5px" }} className="fa-solid fa-magnifying-glass"></i>
                    <input style={{ border: "none", width: "191px" }} type="text" placeholder="Search SEPHORA" />
                </div>
                <div style={{ width: "738px" }}>
                    <img style={{ height: "100px", width: "233px" }} src="https://cdn07.nnnow.com/web-images/master/navtree_metaData/59b2657be4b0e6b6e16a9180/1548053082431/se.png" alt="" />
                </div>
                <div style={{ display: 'flex', marginTop: "40px", marginLeft: "40px" }}>
                    <div style={{ height: "36px", width: "60px", color: "#ff75ba" }}>
                        <i className="fa-solid fa-circle-user"></i>
                    </div>
                    <div style={{ height: "36px", width: "60px", color: "#ff75ba" }}>
                        <i className="fa-solid fa-heart"></i>
                    </div>
                    <div style={{ height: "36px", width: "60px", color: "#ff75ba", display: "flex" }}>
                        <i style={{ paddingTop: "5px", paddingRight: "5px", paddingLeft: "3px" }} className="fa-solid fa-bag-shopping"></i>
                        <p style={{ color: "black" }}>Login</p>
                    </div>
                </div>
            </div>
            <div style={{ height: "44px", display: "flex", justifyContent: "space-between", margin: "auto", width: "70%", marginBottom: "20px" }}>
                <div style={{ padding: "5px" }}><p style={{ fontSize: "16px", fontWeight: "800" }}>SALE</p></div>
                <div className="makeUp" style={{ padding: "5px" }}><p style={{ fontSize: "16px", fontWeight: "800" }}>MAKEUP</p></div>
                <div className="contain" style={{ paddingLeft: "200px", paddingTop: "30px" }} >
                    <div style={{ display: "flex" }}>
                        <div style={{ lineHeight: "10px", textAlign: "left", paddingRight: "50px" }}>
                            <p className="topLine">FACE</p>
                            <p className="bottomLine">Foundation</p>
                            <p className="bottomLine">BB & CC Cream</p>
                            <p className="bottomLine">Concealer</p>
                            <p className="bottomLine">Face Primer</p>
                            <p className="bottomLine">Highlighter</p>
                            <p className="bottomLine">Face Brushes</p>
                            <p className="bottomLine">Makeup Palette</p>
                        </div>
                        <div style={{ lineHeight: "10px", textAlign: "left", paddingRight: "50px" }}>
                            <p className="topLine">EYE</p>
                            <p>Eye Palettes</p>
                            <p>Mascara</p>
                            <p>EyeLiner</p>
                            <p>Eyebrow</p>
                            <p>Eyeshadow</p>
                            <p>Eye Primer</p>
                            <p>Eye Brushes</p>
                            <p>Contact Lenses</p>
                        </div>
                        <div style={{ lineHeight: "10px", textAlign: "left", paddingRight: "50px" }}>
                            <p className="topLine">LIP</p>
                            <p>Lipstick</p>
                            <p>Lip Stain</p>
                            <p>Lip Gloss</p>
                            <p>Lip Liner</p>
                            <p>Lip Balm & Treatment</p>
                            <p>Lip Brushes</p>
                        </div>
                        <div style={{ lineHeight: "10px", textAlign: "left", paddingRight: "50px" }}>
                            <p className="topLine">CHEEK</p>
                            <p>Blush</p>
                            <p>Brinzer</p>
                            <p>Highlighter</p>
                            <p>Face Oils</p>
                        </div>
                        <div style={{ lineHeight: "10px", textAlign: "left", paddingRight: "50px" }}>
                            <p className="topLine">NAIL MAKEUP</p>
                            <p>Nail Polish</p>
                            <p>Nail Care</p>
                            <p>Manicure & Pedicure Tools</p>
                        </div>
                    </div>
                    <div style={{ display: "flex" }}>
                        <div style={{ lineHeight: "10px", textAlign: "left", paddingRight: "50px" }}>
                            <p className="topLine">MAKEUP ACCESSORIES</p>
                            <p>Tweezers & Eyebrow Tools</p>
                            <p>Makeup Removers</p>
                            <p>Sponges & Applicators</p>
                            <p>Makeup Bags & Travel Cases</p>
                        </div>
                        <div style={{ lineHeight: "10px", textAlign: "left", paddingRight: "50px" }}>
                            <p className="topLine">VEGAN</p>
                            <p>Eye</p>
                            <p>Face</p>
                        </div>
                    </div>
                </div>
                <div style={{ padding: "5px" }}><p style={{ fontSize: "16px", fontWeight: "800" }}>SKINCARE</p></div>
                <div style={{ padding: "5px" }}><p style={{ fontSize: "16px", fontWeight: "800" }}>FRAGRANCE</p></div>
                <div style={{ padding: "5px" }}><p style={{ fontSize: "16px", fontWeight: "800" }}>HAIRCARE</p></div>
                <div style={{ padding: "5px" }}><p style={{ fontSize: "16px", fontWeight: "800" }}>TOOLS & BRUSHES</p></div>
                <div style={{ padding: "5px" }}><p style={{ fontSize: "16px", fontWeight: "800" }}>BRANDS</p></div>
            </div>
        </div >
    )
}


// // JS part
// var container = document.querySelector(".contain");

// var makeUp = document.querySelector(".makeUp");
// makeUp.addEventListener("click", makeUpFn);

// function makeUpFn() {
//     console.log('s')
//     container.classList.toggle("contain-height");
// }