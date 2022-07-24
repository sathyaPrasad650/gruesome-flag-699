import { BottomFooter, TopFooter } from "../Components/Footer";
import { Navbar } from "../Components/Navbar"
import "../Styles/HomePage.css"


export function HomePage() {
    return (
        <div>
            <Navbar />
            {/* Start -> Sliding images */}
            <div id="slidingWindow" style={{ marginTop: "30px", marginBottom: "60px" }}>
                <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-ride="carousel"
                >
                    <ol className="carousel-indicators">
                        <li
                            data-target="#carouselExampleIndicators"
                            data-slide-to="0"
                            className="active"
                        ></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img
                                className="d-block w-100 curve"
                                src="https://logan.nnnow.com/content/dam/nnnow-project/30-june-2022/se/SC_Topbanner_ExclusivelyatSephoradesktop.jpg"
                                alt=""
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                className="d-block w-100 curve"
                                src="https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/JuiceBeauty_Topbanner_KateHudsonmaskdesktop.jpg"
                                alt="Second slide"
                            />
                        </div>
                        <div className="carousel-item">
                            <img
                                className="d-block w-100 curve"
                                src="https://logan.nnnow.com/content/dam/nnnow-project/14-june-2022/se/Ikoo_HomepageBanner_1desktop.jpg"
                                alt="Third slide"
                            />
                        </div>
                    </div>
                    <a
                        className="carousel-control-prev"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="prev"
                    >
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a
                        className="carousel-control-next"
                        href="#carouselExampleIndicators"
                        role="button"
                        data-slide="next"
                    >
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>
            {/* End -> Sliding images*/}
            <div style={{ display: "flex", width: "75%", margin: "auto", justifyContent: "space-between", marginBottom: "40px" }}>
                <div style={{ backgroundColor: "black", color: "white", height: "68px", width: "179px", display: "inLine", alignItems: "center", padding: "18px" }}>
                    <p style={{ margin: "0px", fontSize: "19px", lineHeight: "22px" }}>STEALS & DEALS</p>
                </div>
                <div style={{ backgroundColor: "black", color: "white", height: "68px", width: "179px", display: "inLine", alignItems: "center", padding: "9px" }}>
                    <p style={{ margin: "0px", fontSize: "19px", lineHeight: "22px" }}>BEAUTY MINIS</p>
                    <p style={{ margin: "0px", fontSize: "19px", lineHeight: "22px" }}>UNDER 999</p>
                </div>
                <div style={{ backgroundColor: "black", color: "white", height: "68px", width: "179px", display: "inLine", alignItems: "center", padding: "9px" }}>
                    <p style={{ margin: "0px", fontSize: "19px", lineHeight: "22px" }}>EVERYDAY</p>
                    <p style={{ margin: "0px", fontSize: "19px", lineHeight: "22px" }}>ESSENTIALS</p>
                </div>
                <div style={{ backgroundColor: "black", color: "white", height: "68px", width: "179px", display: "inLine", alignItems: "center", padding: "18px" }}>
                    <p style={{ margin: "0px", fontSize: "19px", lineHeight: "22px" }}>TRENDING NOW</p>
                </div>
                <div style={{ backgroundColor: "black", color: "white", height: "68px", width: "179px", display: "inLine", alignItems: "center", padding: "18px" }}>
                    <p style={{ margin: "0px", fontSize: "19px", lineHeight: "22px" }}>EDITOR'S PICKS</p>
                </div>
                <div style={{ backgroundColor: "black", color: "white", height: "68px", width: "179px", display: "inLine", alignItems: "center", padding: "16px" }}>
                    <p style={{ margin: "0px", fontSize: "18px", lineHeight: "22px" }}>TOP FRAGRANCES</p>
                </div>
            </div>
            <div style={{ height: "88px" }}>
                <p className="FontLazyGirl">Just Landed</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    <p style={{ fontWeight: "700", marginBottom: "5px", textAlign: "right", paddingRight: "20px" }}>VIEW ALL</p>
                    {/* Start -> Small SlidingDiv */}
                    {/* End -> Small SlidingDiv */}
                </div>
                <div style={{}}>
                    <iframe width="593" height="329" src="https://www.youtube.com/embed/EwXIwhThqGI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    <p>Hanz de Fuko Claymation for ultimate hold in hair styling</p>
                </div>
            </div>
            <div style={{ height: "88px" }}>
                <p className="FontLazyGirl">Lazy Girl's BFFs</p>
            </div>
            <div>
                <img style={{ height: "404px", width: "388px", paddingLeft: "11px", paddingRight: "11px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_ContentP-Story_CreamyConcealers.jpg" alt="" />
                <img style={{ height: "404px", width: "388px", paddingLeft: "11px", paddingRight: "11px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_ContentP-Story_MagicalMascaras.jpg" alt="" />
                <img style={{ height: "404px", width: "388px", paddingLeft: "11px", paddingRight: "11px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/06-july-2022/Sephora_ContentP-Story_TrendingTints.jpg" alt="" />
            </div>
            <div>
                <img style={{ margin: "90px", height: "113px", width: "1208px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/22-march-2022/Loyalty_Strip_Desk.jpg" alt="" />
            </div>
            <div style={{ height: "88px" }}>
                <p className="FontLazyGirl">Everything On Sale</p>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div>
                    <p style={{ fontWeight: "700", marginBottom: "5px", textAlign: "right", paddingRight: "20px" }}>VIEW ALL</p>
                    {/* Start -> Big SlidingDiv */}
                    {/* End -> Big SlidingDiv */}
                </div>
            </div>
            <div style={{ height: "88px" }}>
                <p className="FontLazyGirl">Your Favorite Brands</p>
            </div>
            <div style={{ width: "75%", margin: "auto", display: "flex", justifyContent: "space-between" }}>
                <img style={{ height: "74px", width: "179px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/scdsk.jpeg" alt="" />
                <img style={{ height: "74px", width: "179px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/11-oct-2021-/12OCT21-TILE-MUFE(1).jpg" alt="" />
                <img style={{ height: "74px", width: "179px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/bendsk.jpg" alt="" />
                <img style={{ height: "74px", width: "179px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/05-jan-2022/TF_Logo(1).jpg" alt="" />
                <img style={{ height: "74px", width: "179px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/03-jan-2022/se/Lancome_Logo(1).jpeg" alt="" />
                <img style={{ height: "74px", width: "179px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/17-jan-2020/logo-dsk/HDdesk.jpg" alt="" />
            </div>

            <div>
                <div>
                    <img style={{ height: "238px", width: "388px", margin: "10px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_BigByDefinitionMascara.jpg" alt="" />
                    <img style={{ height: "238px", width: "388px", margin: "10px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/31-mar-2022/se/SC_NOTB_OutrageousPlumpLipgloss.jpg" alt="" />
                    <img style={{ height: "238px", width: "388px", margin: "10px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/14-june-2022/se/MUFE_NOTB_Ultrasettingpowderlaunch.jpg" alt="" />
                </div>
                <div >
                    <img style={{ height: "238px", width: "388px", margin: "10px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/20-july-2022/ABH_NOTB_liplinerpencil.jpg" alt="" />
                    <img style={{ height: "238px", width: "388px", margin: "10px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/04-june-2022/Juicebeauty_NOTB_KateHudsonmask.jpg" alt="" />
                    <img style={{ height: "238px", width: "388px", margin: "10px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/28-june-2022/Givenchy_NOTB.jpg" alt="" />

                </div>
            </div>
            <div style={{ display: "flex", justifyContent: "center", height: "483px" }}>
                <div>
                    <img style={{ width: "388px", height: "388px", margin: "10px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/23-march-2022/se-blog/Sephora_MakingaLook_BlogCoverTileOption02.jpg" alt="" />
                    <p style={{ fontSize: "20px", textAlign: "left", paddingLeft: "20px", margin: "0px" }}>MAKING A LOOK</p>
                    <p style={{ fontSize: "16px", textAlign: "left", paddingLeft: "20px", margin: "0px" }}>With Anaita Shroff Adajania</p>
                </div>

                <div>
                    <img style={{ width: "388px", height: "388px", margin: "10px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG3.jpg" alt="" />
                    <p style={{ fontSize: "20px", textAlign: "left", paddingLeft: "20px", margin: "0px" }}>7 MASKS</p>
                    <p style={{ fontSize: "16px", textAlign: "left", paddingLeft: "20px", margin: "0px" }}>that'll save your skin</p>
                </div>
                <div>
                    <img style={{ width: "388px", height: "388px", margin: "10px" }} src="https://logan.nnnow.com/content/dam/nnnow-project/24dec19/23DEC19_BLOG4.jpg" alt="" />
                    <p style={{ fontSize: "20px", textAlign: "left", paddingLeft: "20px", margin: "0px" }}>LONG LASTING MAKEUP?</p>
                    <p style={{ fontSize: "16px", textAlign: "left", paddingLeft: "20px", margin: "0px" }}>Here's how!</p>
                </div>
            </div>
            <TopFooter />
            <BottomFooter />
        </div >
    )
}







