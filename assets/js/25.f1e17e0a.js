(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{294:function(e,t,r){"use strict";r.r(t);var o=r(13),a=Object(o.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"itlwm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#itlwm"}},[e._v("#")]),e._v(" itlwm")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("itlwm")])]),e._v(" is an open source Intel Wi-Fi project for macOS, the vast majority of code is ported from OpenBSD and some contents are based on "),t("code",[e._v("iwlwifi")]),e._v(" from Linux.")]),e._v(" "),t("h2",{attrs:{id:"download"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#download"}},[e._v("#")]),e._v(" Download")]),e._v(" "),t("p",[t("em",[t("strong",[e._v("itlwm")])]),e._v(" contains two Kernel Extensions: "),t("strong",[t("code",[e._v("itlwm.kext")])]),e._v(" and "),t("strong",[t("code",[e._v("AirportItlwm.kext")])]),e._v("; they are both distributed on the project's GitHub Release Page.")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"https://github.com/OpenIntelWireless/itlwm/releases/latest",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Download Page"),t("OutboundLink")],1)])]),e._v(" "),t("h2",{attrs:{id:"compatibility"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#compatibility"}},[e._v("#")]),e._v(" Compatibility")]),e._v(" "),t("p",[e._v("Visit "),t("RouterLink",{attrs:{to:"/itlwm/Compat.html"}},[e._v("Compatibility")]),e._v(" for more information")],1),e._v(" "),t("h2",{attrs:{id:"questions-and-issues"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#questions-and-issues"}},[e._v("#")]),e._v(" Questions and Issues")]),e._v(" "),t("p",[e._v("Check out our "),t("RouterLink",{attrs:{to:"/itlwm/FAQ.html"}},[e._v("FAQ Page")]),e._v(" for more info.")],1),e._v(" "),t("p",[e._v("If you have other questions or feedback, feel free to "),t("a",{attrs:{href:"https://gitter.im/OpenIntelWireless/itlwm?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge",target:"_blank",rel:"noopener noreferrer"}},[t("img",{attrs:{src:"https://badges.gitter.im/OpenIntelWireless/itlwm.svg",alt:"Join the chat at https://gitter.im/OpenIntelWireless/itlwm"}}),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("Before opening a GitHub Issue, you're recommended to reconfirm it with us on "),t("a",{attrs:{href:"https://gitter.im/OpenIntelWireless/itlwm",target:"_blank",rel:"noopener noreferrer"}},[e._v("Gitter"),t("OutboundLink")],1),e._v(" and follow our "),t("RouterLink",{attrs:{to:"/General/Issues.html"}},[e._v("GitHub Issues Guide Line")]),e._v(".")],1),e._v(" "),t("h2",{attrs:{id:"background"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#background"}},[e._v("#")]),e._v(" Background")]),e._v(" "),t("blockquote",[t("p",[e._v("Written by zxystd on March 1, 2020")]),e._v(" "),t("p",[e._v("Translated by Bat.bat & stevezhengshiqi, improved by s0ullight")])]),e._v(" "),t("p",[e._v("It has been exactly three and a half months since I released the Intel Bluetooth Firmware Uploader Kext, and I truly appreciate everyone who supports me. I began using MacOS half a year ago. Without having a solid understanding of IOKit, I tried my best to move forward and things might be wrong. I did this with full caution and passion for Hackintosh.")]),e._v(" "),t("p",[e._v("People who follow me should know I have another Intel Wi-Fi Kext Repository "),t("a",{attrs:{href:"https://github.com/zxystd/AppleIntelWifiAdapter",target:"_blank",rel:"noopener noreferrer"}},[e._v("AppleIntelWifiAdapter"),t("OutboundLink")],1),e._v(" which is based on Linux's iwlwifi code; so far the Kext can upload firmware for Intel Wi-Fi cards of "),t("code",[e._v("3")]),e._v(", "),t("code",[e._v("7")]),e._v(", "),t("code",[e._v("8")]),e._v(", "),t("code",[e._v("9")]),e._v(", "),t("code",[e._v("ax")]),e._v(" series and do simple "),t("code",[e._v("RX")]),e._v(" & "),t("code",[e._v("TX")]),e._v(" I/O. Because the integrated "),t("code",[e._v("80211")]),e._v(" ported from OpenBSD in that project has so many things that require testing, I came up with the idea of porting the entire iwm driver from OpenBSD. This repo is the result. Since I ported Linux drivers before, the porting progress is extremely smooth this time. It only took half a day to port the entire code and then I spent roughly one month to tweak it.")]),e._v(" "),t("p",[t("strong",[e._v("Now, Intel Wi-Fi Cards are finally able to access the Internet!")])]),e._v(" "),t("p",[e._v("Don't be misled by "),t("code",[e._v("Ethernet")]),e._v(" shown in System Preferences. The reason is that I didn't use Apple's closed source "),t("code",[e._v("IO80211Family")]),e._v(", but rather spoofed the hardware as an Ethernet device, just like USB Wi-Fi cards.")]),e._v(" "),t("p",[e._v("I decided to open source the code. "),t("strong",[e._v("Anyone can view my code and modify it, but whoever you are, you have to inform me of the content you modified and keep the copyright information in the code, thank you very much!")])]),e._v(" "),t("p",[e._v('I will keep making progress. Everyone should keep a positive attitude and believe in the immense power of the Open Source community, the power from China, and the World. So far I\'ve taken a big step. Not only has my theory been proven to be correct, but also made into a reality. WE NEED TO BREAK THE STEREOTYPE OF "GIVE UP IN INTEL!"')]),e._v(" "),t("h2",{attrs:{id:"development-status"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#development-status"}},[e._v("#")]),e._v(" Development Status")]),e._v(" "),t("p",[e._v("Visit "),t("a",{attrs:{href:"https://github.com/OpenIntelWireless/itlwm/projects",target:"_blank",rel:"noopener noreferrer"}},[e._v("Projects"),t("OutboundLink")],1),e._v(" for more information")]),e._v(" "),t("h2",{attrs:{id:"supported-devices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#supported-devices"}},[e._v("#")]),e._v(" Supported Devices")]),e._v(" "),t("p",[t("RouterLink",{attrs:{to:"/itlwm/FAQ.html#Compatibility"}},[e._v("Read our docs")])],1),e._v(" "),t("h2",{attrs:{id:"credit"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#credit"}},[e._v("#")]),e._v(" Credit")]),e._v(" "),t("p",[e._v("Visit "),t("a",{attrs:{href:"https://github.com/OpenIntelWireless/itlwm#credit",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Readme"),t("OutboundLink")],1),e._v(" for more information")]),e._v(" "),t("h2",{attrs:{id:"acknowledge"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#acknowledge"}},[e._v("#")]),e._v(" Acknowledge")]),e._v(" "),t("p",[e._v("Visit "),t("a",{attrs:{href:"https://github.com/OpenIntelWireless/itlwm#acknowledge",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Readme"),t("OutboundLink")],1),e._v(" for more information")])])}),[],!1,null,null,null);t.default=a.exports}}]);