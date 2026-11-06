import { useSyncExternalStore } from "react";
import { createFileRoute } from "@tanstack/react-router";
import capturedCSS from "../styles/site.css?raw";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [{ title: "Commodity Spread Trading Analytics Platform" }] }),
  staticData: { importedDocument: { html: { "lang": "en-US" }, body: { "className": "VfPpkd-Sx9Kwc-XuHpsb-pGuBYc", "dir": "ltr", "id": "yDmH0d" } } },
  component: Index,
});

function Index() {
  const isMobile = useSyncExternalStore(subscribeMobile, () => matchMedia("(max-width: 767px)").matches, () => false);
  return (
    <>
      <style>{capturedCSS}</style>
      <div tabIndex={0} aria-hidden="true" />
      <div aria-hidden="true" {...({ jscontroller: "pc62j", jsmodel: "iTeaXe", jsaction: "rcuQ6b:WYd;GvneHb:og1FDd;vbaUQc:uAM5ec;" } as any)}>
        <div {...({ jscontroller: "X4BaPc", jsaction: "rcuQ6b:WYd;o6xM5b:Pg9eo;HuL2Hd:mHeCvf;VMhF5:FFYy5e;sk3Qmb:HI1Mdd;JIbuQc:rSzFEd(z2EeY),aSaF6e(ilzYPe);" } as any)}>
          <div {...({ jscontroller: "o1L5Wb", jsmodel: "fNFZH", jsaction: "Pe9H6d:cZFEp;O0t7nc:cC5KLb;WyADff:AQk9Jb;WMZaJ:VsGN3;hJluRd:UADL7b;zuqEgd:HI9w0;tr6QDd:Y8aXB;MxH79b:xDkBfb;JIbuQc:SPXMTb(uxAMZ),LjG1Ed(a6mxbb);BNPLhd:TbIyBd;fGqJod:Tb1xee;", jsname: "G0jgYd" } as any)}>
            <div className="p9b27 fixed transition-opacity duration-180 -z-10" {...({ jsname: "gYwusb" } as any)} />
            <div role="banner" {...({ jscontroller: "RrXLpc", jsname: "XeeWQc", jsaction: "keydown:uiKYid(OH0EC);rcuQ6b:WYd;zuqEgd:ufqpf;JIbuQc:XfTnxb(lfEfFf),AlTiYc(GeGHKb),AlTiYc(m1xNUe),zZlNMe(pZn8Oc);YqO5N:ELcyfe;" } as any)}>
              <div className="BuY5Fd left-0 fixed top-0 z-110 [transition:opacity_0.18s,height_0.18s_step-end]" {...({ jsname: "bF1uUb", jsaction: "click:xVuwSc;" } as any)} />
              <div className="TbNlJb fixed right-0 top-0 z-110 [transition:opacity_0.18s,width_0.18s,height_0.18s_step-start,visibility_0.18s_step-start,box-shadow_0.3s]" {...({ jsname: "MVsrn" } as any)}>
                <div className="mUbCce fKz7Od h3nfre M9Bg4d" role="button" aria-label="Back to site" aria-disabled="false" tabIndex={0} data-tooltip="Back to site" {...({ jscontroller: "VXdfxd", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;", jsshadow: "", jsname: "GeGHKb" } as any)}>
                  <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                  <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                    <span className="Ce1Y1c" style={{ top: "-12px" }}>
                      <svg className="V4YR2c text-site-import-border fill-current" viewBox="0 0 24 24" {...({ focusable: "false" } as any)}>
                        <path d="M0 0h24v24H0z" fill="none" />
                        <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                      </svg>
                    </span>
                  </span>
                </div>
                <div className="E2UJ5 max-w-[720px] relative" style={{ marginLeft: "408px", width: "720px" }} data-site-import-responsive="61" {...({ jsname: "M6JdT" } as any)}>
                  <div className="rFrNMe b7AJhc text-site-import-foreground max-w-[720px] outline-none select-none [-webkit-tap-highlight-color:transparent] [@media_only_screen_and_(max-width:479px)]:min-w-[300px]" aria-expanded="true" {...({ jscontroller: "pxq3x", jsaction: "clickonly:KjsqPd; focus:Jt1EX; blur:fpfTEe; input:Lg5SV", jsshadow: "", jsname: "OH0EC" } as any)}>
                    <div className="aCsJod oJeWuf relative">
                      <div className="aXBtI relative top-[14px]">
                        <span className="A37UZe qgcB3c box-border leading-[24px] relative" {...({ jsslot: "" } as any)}>
                          <div className="mUbCce fKz7Od i3PoXe M9Bg4d" role="button" aria-label="Search" aria-disabled="false" tabIndex={0} data-tooltip="Search" {...({ jscontroller: "VXdfxd", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;", jsshadow: "", jsname: "lfEfFf" } as any)}>
                            <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                            <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                              <span className="Ce1Y1c" style={{ top: "-12px" }}>
                                <svg className="vu8Pwe text-[#5e5e5e] fill-current" viewBox="0 0 24 24" {...({ focusable: "false" } as any)}>
                                  <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                                  <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                              </span>
                            </span>
                          </div>
                          <div className="EmVfjc SKShhf relative" {...({ jscontroller: "qAKInc", jsaction: "animationend:kWijWc;dyRcpb:dyRcpb", jsname: "aZ2wEe" } as any)}>
                            <div className="Cg7hO absolute" aria-live="assertive" {...({ jsname: "vyyg5" } as any)} />
                            <div className="xu46lf" {...({ jsname: "Hxlbvc" } as any)}>
                              <div className="ir3uv uWlRce absolute">
                                <div className="xq3j6 ERcjC relative">
                                  <div className="X6jHbb inset-0 absolute" />
                                </div>
                                <div className="HBnAAc left-[45%] absolute top-0">
                                  <div className="X6jHbb inset-0 left-[-450%]! absolute" />
                                </div>
                                <div className="xq3j6 dj3yTd relative">
                                  <div className="X6jHbb inset-0 left-[-100%]! absolute" />
                                </div>
                              </div>
                              <div className="ir3uv GFoASc absolute">
                                <div className="xq3j6 ERcjC relative">
                                  <div className="X6jHbb inset-0 absolute" />
                                </div>
                                <div className="HBnAAc left-[45%] absolute top-0">
                                  <div className="X6jHbb inset-0 left-[-450%]! absolute" />
                                </div>
                                <div className="xq3j6 dj3yTd relative">
                                  <div className="X6jHbb inset-0 left-[-100%]! absolute" />
                                </div>
                              </div>
                              <div className="ir3uv WpeOqd absolute">
                                <div className="xq3j6 ERcjC relative">
                                  <div className="X6jHbb inset-0 absolute" />
                                </div>
                                <div className="HBnAAc left-[45%] absolute top-0">
                                  <div className="X6jHbb inset-0 left-[-450%]! absolute" />
                                </div>
                                <div className="xq3j6 dj3yTd relative">
                                  <div className="X6jHbb inset-0 left-[-100%]! absolute" />
                                </div>
                              </div>
                              <div className="ir3uv rHV3jf absolute">
                                <div className="xq3j6 ERcjC relative">
                                  <div className="X6jHbb inset-0 absolute" />
                                </div>
                                <div className="HBnAAc left-[45%] absolute top-0">
                                  <div className="X6jHbb inset-0 left-[-450%]! absolute" />
                                </div>
                                <div className="xq3j6 dj3yTd relative">
                                  <div className="X6jHbb inset-0 left-[-100%]! absolute" />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="mUbCce fKz7Od JyJRXe M9Bg4d" role="button" aria-label="Back to site" aria-disabled="false" tabIndex={0} data-tooltip="Back to site" {...({ jscontroller: "VXdfxd", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;", jsshadow: "", jsname: "m1xNUe" } as any)}>
                            <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                            <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                              <span className="Ce1Y1c" style={{ top: "-12px" }}>
                                <svg className="V4YR2c text-site-import-border fill-current" viewBox="0 0 24 24" {...({ focusable: "false" } as any)}>
                                  <path d="M0 0h24v24H0z" fill="none" />
                                  <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
                                </svg>
                              </span>
                            </span>
                          </div>
                        </span>
                        <div className="Xb9hP grow shrink min-w-[0%] relative">
                          <input className={"whsOnd zHQkBf grow shrink min-w-[0%] outline-none text-ellipsis z-0 [&[disabled]]:text-[#00000061]"} type="search" autoComplete="off" tabIndex={0} aria-label="Search this site" defaultValue="" aria-disabled="false" autoFocus role="combobox" {...({ jsname: "YPqjbf" } as any)} />
                          <div className="ndJi5d snByac text-[#0000008a] left-0 max-w-full absolute text-ellipsis top-[2px] whitespace-nowrap [font:400_16px_Roboto,RobotoDraft,Helvetica,Arial,sans-serif]" aria-hidden="true" {...({ jsname: "LwH6nd" } as any)}>Search this site</div>
                        </div>
                        <span className="A37UZe sxyYjd box-border leading-[24px] relative" {...({ jsslot: "" } as any)}>
                          <div className="mUbCce fKz7Od Kk06A M9Bg4d" style={{ display: "none" }} role="button" aria-label="Clear search" aria-disabled="false" tabIndex={0} data-tooltip="Clear search" {...({ jscontroller: "VXdfxd", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;", jsshadow: "", jsname: "pZn8Oc" } as any)}>
                            <div className="VTBa7b" {...({ jsname: "ksKsZd" } as any)} />
                            <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                              <span className="Ce1Y1c" style={{ top: "-12px" }}>
                                <svg className="fAUEUd text-[#5e5e5e] fill-current" viewBox="0 0 24 24" {...({ focusable: "false" } as any)}>
                                  <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                                  <path d="M0 0h24v24H0z" fill="none" />
                                </svg>
                              </span>
                            </span>
                          </div>
                        </span>
                        <div className="i9lrp mIZh1c" />
                        <div className="OabDMe cXrdqd bottom-[-2px] left-0 absolute" {...({ jsname: "XmnwAc" } as any)} />
                      </div>
                    </div>
                    <div className="LXRPh">
                      <div className="ovnfwe" {...({ jsname: "ty6ygf" } as any)} />
                    </div>
                  </div>
                  <div className="InHK7 relative top-[0.5px]" {...({ jsname: "aN0umc" } as any)}>
                    <div className={"GG9xTc items-center [&:focus]:cursor-pointer [&:focus]:[outline:rgb(227,227,227)_solid_0.1px] [&:hover]:cursor-pointer [&:hover]:[outline:rgb(227,227,227)_solid_0.1px]"} tabIndex={0} aria-label="Embedded Files" {...({ jsaction: "click:wTqBkf;", jsname: "e7EaC" } as any)}>
                      <svg className="vu8Pwe KYLCw text-[#5e5e5e] fill-current" viewBox="0 0 24 24" {...({ focusable: "false" } as any)}>
                        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                        <path d="M0 0h24v24H0z" fill="none" />
                      </svg>
                      <span className="text-[#474747] font-[family-name:Roboto,Arial,sans-serif] text-[16px] font-normal tracking-[0.2px] leading-[20px]">Embedded Files</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div {...({ jsname: "tiN4bf" } as any)}>
            <div className="bKy5e left-0 absolute right-0 top-0 z-90">
              <div className="rrJNTc justify-between" tabIndex={-1}>
                <div className="VfPpkd-dgl2Hf-ppHlrf-sM5MNb">
                  <button className={"VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-dgl2Hf LjDxcd LQeN7 WsSUlf items-center box-border justify-center tracking-[0.0107143em] min-w-[64px] outline-none relative no-underline select-none align-middle [-webkit-tap-highlight-color:rgba(0,0,0,0)] [will-change:transform,opacity] [&:active]:outline-none"} tabIndex={0} {...({ jscontroller: "soHxf", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;mlnRJb:fLiPzd;", jsname: "z2EeY" } as any)}>
                    <div className="VfPpkd-Jh9lGc box-content" />
                    <div className="VfPpkd-J1Ukfc-LhBDec box-content" />
                    <div className="VfPpkd-RLmnJb left-0 absolute right-0 top-1/2" />
                    <span className="VfPpkd-vQzf8d relative" {...({ jsname: "V67aGc" } as any)}>Skip to main content</span>
                  </button>
                </div>
                <div className="VfPpkd-dgl2Hf-ppHlrf-sM5MNb">
                  <button className={"VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-dgl2Hf LjDxcd LQeN7 WsSUlf items-center box-border justify-center tracking-[0.0107143em] min-w-[64px] outline-none relative no-underline select-none align-middle [-webkit-tap-highlight-color:rgba(0,0,0,0)] [will-change:transform,opacity] [&:active]:outline-none"} tabIndex={0} {...({ jscontroller: "soHxf", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;mlnRJb:fLiPzd;", jsname: "ilzYPe" } as any)}>
                    <div className="VfPpkd-Jh9lGc box-content" />
                    <div className="VfPpkd-J1Ukfc-LhBDec box-content" />
                    <div className="VfPpkd-RLmnJb left-0 absolute right-0 top-1/2" />
                    <span className="VfPpkd-vQzf8d relative" {...({ jsname: "V67aGc" } as any)}>Skip to navigation</span>
                  </button>
                </div>
              </div>
            </div>
            <div className="M63kCb fixed -z-10" />
            <div>
              <div className="fktJzd AKpWA fOU46b G9Qloe XeSM4 flex-col" data-site-import-carousel-root="0" {...({ jsname: "UzWXSb", jscontroller: "Md9ENb", jsaction: "gsiSmd:Ffcznf;yj5fUd:cpPetb;HNXL3:q0Vyke;e2SXKd:IPDu5e;BdXpgd:nhk7K;rcuQ6b:WYd;" } as any)}>
                <header id="atIdViewHeader">
                  <div style={{ position: "fixed", width: "100%", zIndex: "100" }}>
                    <div id="docs-banner-container">
                      <div id="docs-banners">
                        <div id="HB1eCd-mzNpsf-r8s4j-ORHb" />
                        <div id="HB1eCd-TZk80d-r8s4j-ORHb" aria-live="assertive" aria-atomic="true" />
                        <div id="HB1eCd-Vkfede-rJCtOc-b3rLgd-ORHb" aria-live="assertive" aria-atomic="true" />
                      </div>
                      <div className="flex-[0_0_0px]" />
                    </div>
                  </div>
                  <div className="G8QRnc K5Zlne" {...({ jsname: "WA9qLc", jscontroller: "RQOkef", jsaction: "rcuQ6b:ywL4Jf;VbOlFf:ywL4Jf;FaOgy:ywL4Jf; keydown:Hq2uPe; wheel:Ut4Ahc;" } as any)}>
                    <div className="VLoccc K5Zlne ELAV1d left-0 fixed top-0 whitespace-nowrap z-20 [transition:opacity_0.5s,padding-left_0.125s]" {...({ jsname: "rtFGi" } as any)}>
                      <div className="Pvc6xe min-w-full table-fixed">
                        <div className="TlfmSc text-[#000000cc] font-[family-name:Lato,sans-serif] font-light leading-[1.333] max-w-[380px] text-ellipsis whitespace-nowrap" {...({ jsname: "I8J07e" } as any)}>
                          <a className="GAuSPc" href="?" {...({ jsname: "jIujaf" } as any)}>
                            <span className="QTKDff leading-none outline-none no-underline text-ellipsis align-middle">Commodity Spread Trading Analytics Platform</span>
                          </a>
                        </div>
                      </div>
                      <div className="zDUgLc inset-0 absolute transition-opacity duration-125 -z-10" {...({ jsname: "mADGA" } as any)} />
                    </div>
                  </div>
                </header>
                <div className="RCETm kz4BIe Tw5Lhf" tabIndex={-1} dir="ltr" {...({ jsname: "ZBtY8b" } as any)}>
                  <div className="DUndBc">
                    <div className="Pe0Cwb GMX0Ib" {...({ jscontroller: "VYKRW", jsaction: "rcuQ6b:rcuQ6b;" } as any)}>
                      <div className="WIdY2d M1aSXe leading-0 relative">
                        <div style={{ paddingTop: "52.7148%" }} {...({ jsname: "WXxXjd" } as any)} />
                        <div className="YMEQtf inset-0 absolute">
                          <div style={{ backgroundColor: "rgb(13, 17, 23)" }} {...({ jsname: "jkaScf", jscontroller: "szRU7e", jsaction: "rcuQ6b:WYd;" } as any)}>
                            <div className="EmVfjc qs41qe left-[calc(50%_-_14px)] absolute top-[calc(50%_-_14px)] z-60" style={{ display: "none" }} data-active="true" {...({ jscontroller: "qAKInc", jsaction: "animationend:kWijWc;dyRcpb:dyRcpb", jsname: "Hy6Uif" } as any)}>
                              <div className="Cg7hO absolute" aria-live="assertive" {...({ jsname: "vyyg5" } as any)} />
                              <div className="xu46lf" {...({ jsname: "Hxlbvc" } as any)}>
                                <div className="ir3uv uWlRce absolute">
                                  <div className="xq3j6 ERcjC relative">
                                    <div className="X6jHbb inset-0 absolute" />
                                  </div>
                                  <div className="HBnAAc left-[45%] absolute top-0">
                                    <div className="X6jHbb inset-0 left-[-450%]! absolute" />
                                  </div>
                                  <div className="xq3j6 dj3yTd relative">
                                    <div className="X6jHbb inset-0 left-[-100%]! absolute" />
                                  </div>
                                </div>
                                <div className="ir3uv GFoASc absolute">
                                  <div className="xq3j6 ERcjC relative">
                                    <div className="X6jHbb inset-0 absolute" />
                                  </div>
                                  <div className="HBnAAc left-[45%] absolute top-0">
                                    <div className="X6jHbb inset-0 left-[-450%]! absolute" />
                                  </div>
                                  <div className="xq3j6 dj3yTd relative">
                                    <div className="X6jHbb inset-0 left-[-100%]! absolute" />
                                  </div>
                                </div>
                                <div className="ir3uv WpeOqd absolute">
                                  <div className="xq3j6 ERcjC relative">
                                    <div className="X6jHbb inset-0 absolute" />
                                  </div>
                                  <div className="HBnAAc left-[45%] absolute top-0">
                                    <div className="X6jHbb inset-0 left-[-450%]! absolute" />
                                  </div>
                                  <div className="xq3j6 dj3yTd relative">
                                    <div className="X6jHbb inset-0 left-[-100%]! absolute" />
                                  </div>
                                </div>
                                <div className="ir3uv rHV3jf absolute">
                                  <div className="xq3j6 ERcjC relative">
                                    <div className="X6jHbb inset-0 absolute" />
                                  </div>
                                  <div className="HBnAAc left-[45%] absolute top-0">
                                    <div className="X6jHbb inset-0 left-[-450%]! absolute" />
                                  </div>
                                  <div className="xq3j6 dj3yTd relative">
                                    <div className="X6jHbb inset-0 left-[-100%]! absolute" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            <iframe className="YMEQtf inset-0 absolute" style={{ backgroundColor: "rgb(13, 17, 23)", width: "100%", height: "100%", border: 0 }} id="content_0" title="QuantSpread – Commodity Spread Trading Analytics" src="/embed/quantspread.html" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={isMobile ? "dZA9kd" : "dZA9kd ynRLnc"} {...({ jscontroller: "j1RDQb", jsaction: "rcuQ6b:rcuQ6b;MxH79b:JdcaS;FaOgy:XuHpsb;" } as any)}>
                  <div className="JRtysb WzwrXb I12f0b K2mXPb zXBiaf ynRLnc" role="button" aria-label="Site actions" aria-disabled="false" tabIndex={0} aria-haspopup="true" aria-expanded="false" id="ow11" {...({ jscontroller: "iSvg6e", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;;keydown:I481le;", jsshadow: "", jsname: "Bg3gkf", __is_owner: "true" } as any)}>
                    <div className="NWlf3e" {...({ jsname: "ksKsZd" } as any)} />
                    <span className="MhXXcc oJeWuf" {...({ jsslot: "" } as any)}>
                      <span className="Lw7GHd snByac">
                        <svg className="NMm5M" width="24" height="24" viewBox="0 0 24 24" {...({ focusable: "false" } as any)}>
                          <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
                        </svg>
                      </span>
                    </span>
                  </div>
                </div>
                <div className={isMobile ? "LqzjUe ynRLnc" : "LqzjUe"} {...({ jscontroller: "j1RDQb", jsaction: "focusin:gBxDVb(srlkmf); focusout:zvXhGb(srlkmf); click:ro2KTd(psdQ5e);JIbuQc:DSypkd(Bg3gkf);MxH79b:JdcaS;rcuQ6b:rcuQ6b;" } as any)}>
                  <div className="Q0cSn" {...({ jsname: "psdQ5e" } as any)} />
                  <div className="hBW7Hb" {...({ jsname: "bN97Pc" } as any)}>
                    <div className="mUbCce fKz7Od kpPxtd QMuaBc M9Bg4d" role="button" aria-label="Site actions" aria-disabled="false" tabIndex={-1} aria-hidden="true" {...({ jscontroller: "VXdfxd", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc(preventDefault=true); touchcancel:JMtRjd;", jsshadow: "", jsname: "Bg3gkf" } as any)}>
                      <div className="VTBa7b" style={{ top: "-816px", left: "-22px", width: "28px", height: "28px" }} {...({ jsname: "ksKsZd" } as any)} />
                      <span className="xjKiLb" {...({ jsslot: "" } as any)}>
                        <span className="Ce1Y1c" style={{ top: "-12px" }}>
                          <svg className="NMm5M" width="24" height="24" viewBox="0 0 24 24" {...({ focusable: "false" } as any)}>
                            <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
                          </svg>
                        </span>
                      </span>
                    </div>
                    <div className="hUphyc" {...({ jsname: "srlkmf" } as any)}>
                      <div className="YkaBSd">
                        <div className="iBkmkf"><span>Page updated</span> <span className="dji00c" tabIndex={0} role="contentinfo" aria-label="Page last updated 2 days ago" {...({ jsname: "CFIm1b", jsaction: "AHmuwe:eGiyHb; mouseover:eGiyHb;" } as any)}>2 days ago</span></div>
                      </div>
                      <div className="YkaBSd" {...({ jsaction: "click:Toy3n;" } as any)}>
                        <div className="kpPxtd J7BuEb" role="button" aria-disabled="false" tabIndex={0} {...({ jsshadow: "", jsname: "V2zOu" } as any)}>Google Sites</div>
                      </div>
                      <div className="YkaBSd" {...({ jscontroller: "HYv29e", jsaction: "click:dQ6O0c;" } as any)}>
                        <div className="kpPxtd J7BuEb" role="button" aria-label="Report abuse" aria-disabled="false" tabIndex={0} {...({ jsshadow: "" } as any)}>Report abuse</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" {...({ jscontroller: "YV8yqd", jsaction: "rcuQ6b:npT2md" } as any)} />
      <div style={{ position: "absolute", left: "0px", top: "-1px", zIndex: "-2", opacity: "0", height: "1px", width: "1px", overflow: "hidden" }} id="docs-aria-speakable" role="region" aria-live="assertive" aria-atomic="true" aria-hidden="false" />
      <div hidden style={{ display: "none" }} className="VfPpkd-Sx9Kwc cC1eCc VfPpkd-Sx9Kwc-OWXEXe-FNFY6c items-center box-border justify-center left-0 fixed top-0 z-2001" {...({ jsshadow: "", jscontroller: "ZakeSe", jsaction: "jSjncc:FNFY6c;eUpBOd:pRhyN;OD2uJd:LSNysb;FBWqge:XzoRjc;PfPQGe:E9dKsb;KTLxtc:pXwq6c;r2ouV:FNFY6c;N4OFW:E9dKsb;G25Qzf:pXwq6c;JIbuQc:KY1IRb; clickonly: npT2md; mousedown: npT2md; keydown:KY1IRb; transitionend:H9K8kb;jgecHd:.CLIENT;ltBi9b:.CLIENT;", jsname: "jQ3kje" } as any)}>
        <div tabIndex={0} aria-hidden="true" {...({ jsaction: "focus:.CLIENT" } as any)} />
        <div className="VfPpkd-wzTsW items-center box-border flex-row justify-around">
          <div className="VfPpkd-P5QLlc flex-col grow-0 shrink-0 max-h-[calc(100%_-_32px)] min-w-[280px]" aria-modal="true" role="dialog" tabIndex={-1} aria-labelledby="c0">
            <span className="VfPpkd-BFbNVe-bF1uUb NZp2ef left-0 absolute top-0 [transition:opacity_0.28s_cubic-bezier(0.4,0,0.2,1)]" aria-hidden="true" />
            <h2 className="VfPpkd-k2Wrsb box-border text-[#3c4043] shrink-0 tracking-[0.00625em] leading-6 relative [text-decoration:var(--mdc-typography-headline6-text-decoration,inherit)] [text-transform:var(--mdc-typography-headline6-text-transform,inherit)]" id="c0" {...({ jsname: "r4nke" } as any)}>
              <span {...({ jsname: "MdSI6d" } as any)}>Report abuse</span>
            </h2>
            <div className="VfPpkd-cnG4Wd antialiased box-border text-[#5f6368] grow font-[family-name:Roboto,Arial,sans-serif] text-[0.875rem] font-normal tracking-[0.0142857em] leading-5 [text-decoration:var(--mdc-typography-body1-text-decoration,inherit)] [text-transform:var(--mdc-typography-body1-text-transform,inherit)]" {...({ jsslot: "", jsname: "rZHESd" } as any)}>What would you like to report?</div>
            <div className="VfPpkd-T0kwCb items-center box-border shrink-0 flex-wrap justify-end relative">
              <span className="NwiZ9b">
                <div className="VfPpkd-dgl2Hf-ppHlrf-sM5MNb">
                  <button className={"VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-MV7yeb VfPpkd-LgbsSe-OWXEXe-dgl2Hf b9hyVd DuMIQc LQeN7 items-center box-border justify-center tracking-[0.0107143em] min-w-[64px] outline-none relative no-underline select-none align-middle [-webkit-tap-highlight-color:rgba(0,0,0,0)] [transition:border_0.28s_cubic-bezier(0.4,0,0.2,1),box-shadow_0.28s_cubic-bezier(0.4,0,0.2,1)] [will-change:transform,opacity] [&:active]:outline-none"} {...({ jscontroller: "soHxf", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;mlnRJb:fLiPzd;", jsname: "KlPfKd" } as any)}>
                    <span className="VfPpkd-BFbNVe-bF1uUb NZp2ef left-0 absolute top-0 [transition:opacity_0.28s_cubic-bezier(0.4,0,0.2,1)]" aria-hidden="true" />
                    <div className="VfPpkd-Jh9lGc box-content" />
                    <div className="VfPpkd-J1Ukfc-LhBDec box-content" />
                    <div className="VfPpkd-RLmnJb left-0 absolute right-0 top-[-6px]" />
                    <span className="VfPpkd-vQzf8d relative" {...({ jsname: "V67aGc" } as any)}>Entire site</span>
                  </button>
                </div>
                <div className="VfPpkd-dgl2Hf-ppHlrf-sM5MNb">
                  <button className={"VfPpkd-LgbsSe VfPpkd-LgbsSe-OWXEXe-MV7yeb VfPpkd-LgbsSe-OWXEXe-dgl2Hf b9hyVd DuMIQc LQeN7 items-center box-border justify-center tracking-[0.0107143em] min-w-[64px] outline-none relative no-underline select-none align-middle [-webkit-tap-highlight-color:rgba(0,0,0,0)] [transition:border_0.28s_cubic-bezier(0.4,0,0.2,1),box-shadow_0.28s_cubic-bezier(0.4,0,0.2,1)] [will-change:transform,opacity] [&:active]:outline-none"} {...({ jscontroller: "soHxf", jsaction: "click:cOuCgd; mousedown:UX7yZ; mouseup:lbsD7e; mouseenter:tfO1Yc; mouseleave:JywGue; touchstart:p6p2H; touchmove:FwuNnf; touchend:yfqBxc; touchcancel:JMtRjd; focus:AHmuwe; blur:O22p3e; contextmenu:mg9Pef;mlnRJb:fLiPzd;", jsname: "zHku5b" } as any)}>
                    <span className="VfPpkd-BFbNVe-bF1uUb NZp2ef left-0 absolute top-0 [transition:opacity_0.28s_cubic-bezier(0.4,0,0.2,1)]" aria-hidden="true" />
                    <div className="VfPpkd-Jh9lGc box-content" />
                    <div className="VfPpkd-J1Ukfc-LhBDec box-content" />
                    <div className="VfPpkd-RLmnJb left-0 absolute right-0 top-[-6px]" />
                    <span className="VfPpkd-vQzf8d relative" {...({ jsname: "V67aGc" } as any)}>Current page</span>
                  </button>
                </div>
              </span>
            </div>
          </div>
        </div>
        <div className="VfPpkd-IE5DDf items-center box-border justify-center left-0 fixed top-0 -z-1" {...({ jsname: "GGAcbc", jsaction: "click:KY1IRb" } as any)} />
        <div tabIndex={0} aria-hidden="true" {...({ jsaction: "focus:.CLIENT" } as any)} />
      </div>
      <div tabIndex={0} aria-hidden="true" />
    </>
  );
}

function subscribeMobile(onChange: () => void) {
  const query = matchMedia("(max-width: 767px)");
  query.addEventListener("change", onChange);
  return () => query.removeEventListener("change", onChange);
}
