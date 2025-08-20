"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([[280], {
    6379: function(e, t, a) {
        var s = a(7437)
          , l = a(29)
          , o = a.n(l)
          , r = a(2265)
          , i = a(7648)
          , n = a(9089);
        t.Z = () => {
            let[e,t] = (0,
            r.useState)(!1)
              , [a,l] = (0,
            r.useState)(!1);
            r.useEffect( () => {
                l(!0)
            }
            , []);
            let d = e => {
                e.preventDefault();
                let t = e.target.getAttribute("href").substring(1)
                  , a = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3
                      , s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 500
                      , l = document.getElementById(t);
                    if (!l) {
                        e > 0 && setTimeout( () => a(e - 1, s), s);
                        return
                    }
                    let o = 0;
                    o = "how-we-help" === t ? window.innerWidth <= 768 ? 1330 : 700 : "what-we-do" === t ? window.innerWidth <= 768 ? 400 : 290 : "who-we-are" === t ? window.innerWidth <= 768 ? 1e3 : 650 : "blogs" === t ? window.innerWidth <= 768 ? 900 : 500 : "contact" === t ? window.innerWidth <= 768 ? 900 : 500 : window.innerWidth <= 768 ? 100 : 200,
                    window.scrollTo({
                        top: l.offsetTop - o,
                        behavior: "smooth"
                    })
                };
                a()
            }
            ;
            return (0,
            s.jsxs)("footer", {
                className: "jsx-53ef5fd4e7ae751d bg-gradient-to-br from-[#1E2024] to-[#2A2D32] text-white mt-20 relative overflow-hidden",
                children: [(0,
                s.jsxs)("div", {
                    className: "jsx-53ef5fd4e7ae751d absolute inset-0 opacity-5",
                    children: [(0,
                    s.jsx)("div", {
                        className: "jsx-53ef5fd4e7ae751d absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
                    }), (0,
                    s.jsx)("div", {
                        className: "jsx-53ef5fd4e7ae751d absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "jsx-53ef5fd4e7ae751d bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 py-8 lg:py-12 px-4 relative overflow-hidden",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "jsx-53ef5fd4e7ae751d absolute inset-0 opacity-20",
                        children: [(0,
                        s.jsx)("div", {
                            className: "jsx-53ef5fd4e7ae751d absolute animate-pulse top-4 left-8 w-3 h-16 bg-white transform rotate-45 rounded-full"
                        }), (0,
                        s.jsx)("div", {
                            className: "jsx-53ef5fd4e7ae751d absolute animate-pulse delay-100 top-2 left-6 w-2 h-32 bg-white transform rotate-45 rounded-full"
                        }), (0,
                        s.jsx)("div", {
                            className: "jsx-53ef5fd4e7ae751d absolute animate-pulse delay-200 top-4 right-8 w-3 h-16 bg-white transform -rotate-45 rounded-full"
                        }), (0,
                        s.jsx)("div", {
                            className: "jsx-53ef5fd4e7ae751d absolute animate-pulse delay-300 top-2 right-6 w-2 h-32 bg-white transform -rotate-45 rounded-full"
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: "jsx-53ef5fd4e7ae751d container mx-auto text-center relative z-20",
                        children: (0,
                        s.jsxs)("div", {
                            className: "jsx-53ef5fd4e7ae751d " + "transition-all duration-1000 ".concat(a ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"),
                            children: [(0,
                            s.jsxs)("h2", {
                                className: "jsx-53ef5fd4e7ae751d text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white leading-tight",
                                children: ["Bring your vision to life with your very own", " ", (0,
                                s.jsx)("span", {
                                    className: "jsx-53ef5fd4e7ae751d bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent",
                                    children: "CodeNatin"
                                }), " ", "team."]
                            }), (0,
                            s.jsx)("p", {
                                className: "jsx-53ef5fd4e7ae751d text-lg sm:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto",
                                children: "Get started today and turn your ideas into powerful, well-designed digital solutions."
                            })]
                        })
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "jsx-53ef5fd4e7ae751d container mx-auto py-16 px-4 relative z-10",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "jsx-53ef5fd4e7ae751d grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "jsx-53ef5fd4e7ae751d " + "transition-all duration-1000 delay-200 ".concat(a ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"),
                            children: [(0,
                            s.jsxs)("div", {
                                className: "jsx-53ef5fd4e7ae751d mb-6",
                                children: [(0,
                                s.jsx)("h2", {
                                    className: "jsx-53ef5fd4e7ae751d text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2",
                                    children: "CodeNatin"
                                }), (0,
                                s.jsx)("div", {
                                    className: "jsx-53ef5fd4e7ae751d w-12 h-1 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                                })]
                            }), (0,
                            s.jsx)("p", {
                                className: "jsx-53ef5fd4e7ae751d text-gray-300 leading-relaxed text-lg",
                                children: "is a system development team focused on building scalable web and app solutions with clean design and smooth user experiences. We handle everything from UI/UX to full-stack development, helping businesses and startups grow through smart, modern tech."
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: "jsx-53ef5fd4e7ae751d " + "md:mx-auto transition-all duration-1000 delay-400 ".concat(a ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"),
                            children: [(0,
                            s.jsx)("h3", {
                                className: "jsx-53ef5fd4e7ae751d text-2xl font-bold mb-8 text-white",
                                children: "Quick Links"
                            }), (0,
                            s.jsx)("nav", {
                                className: "jsx-53ef5fd4e7ae751d",
                                children: (0,
                                s.jsx)("ul", {
                                    className: "jsx-53ef5fd4e7ae751d space-y-4",
                                    children: [{
                                        href: "#how-we-help",
                                        label: "How we help"
                                    }, {
                                        href: "#what-we-do",
                                        label: "What we do"
                                    }, {
                                        href: "#who-we-are",
                                        label: "Who we are"
                                    }, {
                                        href: "#blogs",
                                        label: "Blogs"
                                    }].map( (e, t) => (0,
                                    s.jsx)("li", {
                                        className: "jsx-53ef5fd4e7ae751d group",
                                        children: (0,
                                        s.jsxs)("a", {
                                            href: e.href,
                                            onClick: d,
                                            className: "jsx-53ef5fd4e7ae751d text-gray-300 hover:text-white transition-all duration-300 flex items-center group-hover:translate-x-2",
                                            children: [(0,
                                            s.jsx)("div", {
                                                className: "jsx-53ef5fd4e7ae751d w-2 h-2 bg-blue-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                            }), e.label, (0,
                                            s.jsx)("svg", {
                                                fill: "none",
                                                stroke: "currentColor",
                                                viewBox: "0 0 24 24",
                                                className: "jsx-53ef5fd4e7ae751d ml-2 w-4 h-4 transform group-hover:rotate-90 transition-transform duration-300",
                                                children: (0,
                                                s.jsx)("path", {
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    strokeWidth: "2",
                                                    d: "M9 5l7 7-7 7",
                                                    className: "jsx-53ef5fd4e7ae751d"
                                                })
                                            })]
                                        })
                                    }, t))
                                })
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: "jsx-53ef5fd4e7ae751d " + "transition-all duration-1000 delay-600 ".concat(a ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"),
                            children: [(0,
                            s.jsx)("h3", {
                                className: "jsx-53ef5fd4e7ae751d text-2xl font-bold mb-8 text-white",
                                children: "Connect with us"
                            }), (0,
                            s.jsxs)("div", {
                                className: "jsx-53ef5fd4e7ae751d flex space-x-4 mb-8",
                                children: [(0,
                                s.jsx)(i.default, {
                                    href: "https://www.facebook.com/CodeNatin/",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    "aria-label": "Facebook",
                                    className: "group",
                                    children: (0,
                                    s.jsx)("div", {
                                        className: "jsx-53ef5fd4e7ae751d bg-white hover:bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg",
                                        children: (0,
                                        s.jsx)(n.tBk, {
                                            className: "text-blue-600 text-xl group-hover:scale-110 transition-transform duration-300"
                                        })
                                    })
                                }), (0,
                                s.jsxs)("button", {
                                    onClick: () => {
                                        navigator.clipboard.writeText("codenatin@gmail.com").then( () => {
                                            t(!0),
                                            setTimeout( () => t(!1), 2e3)
                                        }
                                        ).catch(e => {
                                            console.error("Failed to copy: ", e)
                                        }
                                        )
                                    }
                                    ,
                                    "aria-label": "Copy Email",
                                    className: "jsx-53ef5fd4e7ae751d group relative",
                                    children: [(0,
                                    s.jsx)("div", {
                                        className: "jsx-53ef5fd4e7ae751d bg-white hover:bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg",
                                        children: e ? (0,
                                        s.jsx)(n.FJM, {
                                            className: "text-green-600 text-xl transition-all duration-300"
                                        }) : (0,
                                        s.jsx)(n.SRX, {
                                            className: "text-blue-600 text-xl group-hover:scale-110 transition-transform duration-300"
                                        })
                                    }), (0,
                                    s.jsxs)("div", {
                                        className: "jsx-53ef5fd4e7ae751d " + "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg transition-all duration-300 ".concat(e ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"),
                                        children: [e ? "Email copied!" : "Click to copy email", (0,
                                        s.jsx)("div", {
                                            className: "jsx-53ef5fd4e7ae751d absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"
                                        })]
                                    })]
                                })]
                            })]
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: "jsx-53ef5fd4e7ae751d " + "border-t border-gray-700/50 mt-16 pt-8 text-center transition-all duration-1000 delay-1000 ".concat(a ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"),
                        children: (0,
                        s.jsx)("p", {
                            className: "jsx-53ef5fd4e7ae751d text-gray-400 text-lg",
                            children: "\xa9 CodeNatin 2025. All rights reserved."
                        })
                    })]
                }), (0,
                s.jsx)(o(), {
                    id: "53ef5fd4e7ae751d",
                    children: "@-webkit-keyframes pulse{0%,100%{opacity:.3}50%{opacity:.6}}@-moz-keyframes pulse{0%,100%{opacity:.3}50%{opacity:.6}}@-o-keyframes pulse{0%,100%{opacity:.3}50%{opacity:.6}}@keyframes pulse{0%,100%{opacity:.3}50%{opacity:.6}}.animate-pulse.jsx-53ef5fd4e7ae751d{-webkit-animation:pulse 2s ease-in-out infinite;-moz-animation:pulse 2s ease-in-out infinite;-o-animation:pulse 2s ease-in-out infinite;animation:pulse 2s ease-in-out infinite}.delay-100.jsx-53ef5fd4e7ae751d{-webkit-animation-delay:.1s;-moz-animation-delay:.1s;-o-animation-delay:.1s;animation-delay:.1s}.delay-200.jsx-53ef5fd4e7ae751d{-webkit-animation-delay:.2s;-moz-animation-delay:.2s;-o-animation-delay:.2s;animation-delay:.2s}.delay-300.jsx-53ef5fd4e7ae751d{-webkit-animation-delay:.3s;-moz-animation-delay:.3s;-o-animation-delay:.3s;animation-delay:.3s}"
                })]
            })
        }
    },
    5661: function(e, t, a) {
        var s = a(7437)
          , l = a(2265)
          , o = a(3145)
          , r = a(7648);
        t.Z = () => {
            let[e,t] = (0,
            l.useState)(!1)
              , [a,i] = (0,
            l.useState)(!1);
            (0,
            l.useEffect)( () => {
                console.log("getyourteam section on load:", document.getElementById("getyourteam"));
                let e = () => {
                    i(window.scrollY > 50)
                }
                ;
                return window.addEventListener("scroll", e),
                () => window.removeEventListener("scroll", e)
            }
            , []);
            let n = e => {
                e.preventDefault();
                let t = e.target.closest("a");
                if (!t || !t.getAttribute("href")) {
                    console.error("No valid anchor found");
                    return
                }
                let a = t.getAttribute("href").substring(1);
                document.getElementById(a);
                let s = function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5
                      , t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1e3
                      , l = document.getElementById(a);
                    if (!l) {
                        e > 0 ? (console.warn("Target section not found for ID: ".concat(a, ". Retrying... (").concat(e, " attempts left)")),
                        setTimeout( () => s(e - 1, t), t)) : console.error("Target section not found for ID: ".concat(a, " after retries"));
                        return
                    }
                    let o = window.innerWidth <= 768 ? 120 : 140
                      , r = l.getBoundingClientRect()
                      , i = window.scrollY || window.pageYOffset
                      , n = r.top + i;
                    window.scrollTo({
                        top: n - o,
                        behavior: "smooth"
                    })
                };
                s()
            }
            ;
            return (0,
            s.jsxs)("div", {
                className: "fixed top-0 w-full z-50",
                children: [(0,
                s.jsx)("div", {
                    className: "w-full text-white py-2 px-4 sm:px-8 md:px-16 lg:px-40 transition-all duration-300 ".concat("bg-[#312B66]"),
                    children: (0,
                    s.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [(0,
                        s.jsxs)("div", {
                            className: "flex items-center space-x-6 text-sm",
                            children: [(0,
                            s.jsxs)("a", {
                                href: "mailto:codenatin@gmail.com",
                                className: "flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300",
                                children: [(0,
                                s.jsxs)("svg", {
                                    className: "w-4 h-4",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    children: [(0,
                                    s.jsx)("path", {
                                        d: "M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
                                    }), (0,
                                    s.jsx)("path", {
                                        d: "M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
                                    })]
                                }), (0,
                                s.jsx)("span", {
                                    className: "hidden sm:inline",
                                    children: "codenatin@gmail.com"
                                })]
                            }), (0,
                            s.jsxs)("a", {
                                href: "tel:956 312 7515 ",
                                className: "flex items-center space-x-2 hover:text-blue-400 transition-colors duration-300",
                                children: [(0,
                                s.jsx)("svg", {
                                    className: "w-4 h-4",
                                    fill: "currentColor",
                                    viewBox: "0 0 20 20",
                                    children: (0,
                                    s.jsx)("path", {
                                        d: "M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                                    })
                                }), (0,
                                s.jsx)("span", {
                                    className: "hidden sm:inline",
                                    children: "+63 956 312 7515"
                                })]
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: "flex items-center space-x-3",
                            children: [(0,
                            s.jsx)("a", {
                                href: "https://www.facebook.com/CodeNatin/",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "w-8 h-8 flex items-center justify-center bg-blue-600 hover:bg-blue-700 rounded transition-colors duration-300",
                                children: (0,
                                s.jsx)("svg", {
                                    className: "w-4 h-4 fill-white",
                                    viewBox: "0 0 24 24",
                                    children: (0,
                                    s.jsx)("path", {
                                        d: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                                    })
                                })
                            }), (0,
                            s.jsx)("a", {
                                href: "https://twitter.com",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "w-8 h-8 flex items-center justify-center bg-black hover:bg-gray-800 rounded transition-colors duration-300",
                                children: (0,
                                s.jsx)("svg", {
                                    className: "w-4 h-4 fill-white",
                                    viewBox: "0 0 24 24",
                                    children: (0,
                                    s.jsx)("path", {
                                        d: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"
                                    })
                                })
                            })]
                        })]
                    })
                }), (0,
                s.jsxs)("nav", {
                    className: "w-full flex justify-between items-center py-4 px-4 sm:px-8 md:px-16 lg:px-40 text-white transition-all duration-300 ".concat(a ? "bg-[#1E2024] border-b border-white/10" : "bg-[#1E2024]"),
                    children: [(0,
                    s.jsx)("div", {
                        className: "flex items-center",
                        children: (0,
                        s.jsx)(r.default, {
                            href: "/",
                            className: "group relative z-50",
                            children: (0,
                            s.jsx)(o.default, {
                                src: "/images/Logoo.png",
                                alt: "Codeneto",
                                width: 180,
                                height: 60,
                                priority: !0,
                                className: "h-[4vh] sm:h-[5vh] w-auto object-contain relative z-50 cursor-pointer transition-transform duration-300 group-hover:scale-105"
                            })
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: "hidden md:flex items-center space-x-2 lg:space-x-4 ml-auto",
                        children: [[{
                            label: "How We Help",
                            href: "#how-we-help"
                        }, {
                            label: "What We Do",
                            href: "#what-we-do"
                        }, {
                            label: "Who We Are",
                            href: "#who-we-are"
                        }, {
                            label: "Blogs",
                            href: "#blogs"
                        }].map(e => (0,
                        s.jsxs)("a", {
                            href: e.href,
                            className: "group relative flex items-center text-gray-300 hover:text-white font-light text-sm lg:text-base px-3 py-2 rounded-lg transition-all duration-300 hover:bg-white/5",
                            onClick: n,
                            children: [e.label, (0,
                            s.jsx)("svg", {
                                className: "ml-1 w-3 h-3 transition-transform duration-300 group-hover:translate-y-0.5",
                                fill: "none",
                                stroke: "currentColor",
                                viewBox: "0 0 24 24",
                                children: (0,
                                s.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M19 9l-7 7-7-7"
                                })
                            }), (0,
                            s.jsx)("span", {
                                className: "absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#5865F2] to-blue-400 transition-all duration-300 group-hover:w-full"
                            })]
                        }, e.href)), (0,
                        s.jsxs)("a", {
                            href: "#getyourteam",
                            className: "relative ml-4 bg-gradient-to-r from-[#5865F2] to-blue-500 hover:from-blue-500 hover:to-[#5865F2] py-2 px-6 rounded-full font-medium text-sm lg:text-base transition-all duration-300 hover:shadow-lg hover:shadow-[#5865F2]/25 hover:scale-105 active:scale-95",
                            onClick: n,
                            children: [(0,
                            s.jsx)("span", {
                                className: "relative z-10",
                                children: "Get your Team"
                            }), (0,
                            s.jsx)("div", {
                                className: "absolute inset-0 bg-gradient-to-r from-blue-500 to-[#5865F2] rounded-full opacity-0 transition-opacity duration-300 hover:opacity-100"
                            })]
                        })]
                    }), (0,
                    s.jsx)("button", {
                        className: "md:hidden relative w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300",
                        onClick: () => t(!e),
                        children: (0,
                        s.jsxs)("div", {
                            className: "w-6 h-5 relative flex flex-col justify-between",
                            children: [(0,
                            s.jsx)("span", {
                                className: "w-full h-0.5 bg-white transition-all duration-300 ".concat(e ? "rotate-45 translate-y-2" : "")
                            }), (0,
                            s.jsx)("span", {
                                className: "w-full h-0.5 bg-white transition-all duration-300 ".concat(e ? "opacity-0" : "")
                            }), (0,
                            s.jsx)("span", {
                                className: "w-full h-0.5 bg-white transition-all duration-300 ".concat(e ? "-rotate-45 -translate-y-2" : "")
                            })]
                        })
                    }), (0,
                    s.jsx)("div", {
                        className: "md:hidden absolute top-full left-0 right-0 bg-[#1E2024] border-b border-white/10 transition-all duration-300 z-40 ".concat(e ? "opacity-100 visible transform translate-y-0" : "opacity-0 invisible transform -translate-y-4"),
                        children: (0,
                        s.jsxs)("div", {
                            className: "p-6 flex flex-col gap-2",
                            children: [[{
                                label: "How We Help",
                                href: "#how-we-help"
                            }, {
                                label: "What We Do",
                                href: "#what-we-do"
                            }, {
                                label: "Who We Are",
                                href: "#who-we-are"
                            }, {
                                label: "Blogs",
                                href: "#blogs"
                            }].map( (a, l) => (0,
                            s.jsx)("a", {
                                href: a.href,
                                className: "text-gray-300 hover:text-white text-base py-3 px-4 rounded-lg hover:bg-white/5 transition-all duration-300 transform ".concat(e ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"),
                                style: {
                                    transitionDelay: "".concat(50 * l, "ms")
                                },
                                onClick: e => {
                                    n(e),
                                    t(!1)
                                }
                                ,
                                children: a.label
                            }, a.href)), (0,
                            s.jsx)("a", {
                                href: "#getyourteam",
                                className: "mt-4 bg-gradient-to-r from-[#5865F2] to-blue-500 hover:from-blue-500 hover:to-[#5865F2] py-3 px-6 rounded-full font-medium text-base text-center transition-all duration-300 hover:shadow-lg hover:shadow-[#5865F2]/25 transform ".concat(e ? "translate-x-0 opacity-100" : "translate-x-4 opacity-0"),
                                style: {
                                    transitionDelay: "200ms"
                                },
                                onClick: e => {
                                    n(e),
                                    t(!1)
                                }
                                ,
                                children: "Get your Team"
                            })]
                        })
                    }), e && (0,
                    s.jsx)("div", {
                        className: "md:hidden fixed top-0 left-0 right-0 bottom-0 bg-black/20 backdrop-blur-sm z-30",
                        style: {
                            top: "100%"
                        },
                        onClick: () => t(!1)
                    })]
                })]
            })
        }
    }
}]);
