(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{23:function(e,t,a){},27:function(e,t,a){e.exports=a(45)},32:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},44:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(16),c=a.n(s),i=a(3),l=a(4),o=a(6),m=a(5),u=a(7),p=a(13),h=a(12),g=a(48),d=a(47),E=(a(32),function(){return r.a.createElement("div",{id:"nav",className:"header"},r.a.createElement("nav",null,r.a.createElement("ul",null,r.a.createElement(p.b,{to:"/projects"},r.a.createElement("li",null,"PROJECTS")),r.a.createElement(p.b,{to:"/research"},r.a.createElement("li",null,"RESEARCH")),r.a.createElement(p.b,{to:"/about"},r.a.createElement("li",null,"ABOUT")),r.a.createElement(p.b,{exact:!0,to:"/"},r.a.createElement("li",null,"HOME")))))}),b=a(20),k=a.n(b),f=(a(38),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={typing:!0,i:0,words:["Student","Developer","Researcher","Huang Fellow","NULL"],styles:["duke","dev","research","huang","NULL"]},a.done=function(){a.setState({i:a.state.i+1}),a.state.i==a.state.words.length-1&&a.setState({i:0}),a.setState({typing:!1},(function(){a.setState({typing:!0})}))},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"home"},r.a.createElement("div",{className:"col1"},r.a.createElement("div",{className:"hname"},"Raymond Chen"),r.a.createElement("div",{className:["typer",this.state.styles[this.state.i]].join(" ")},this.state.typing?r.a.createElement(k.a,{startDelay:500,onTypingDone:this.done},this.state.words[this.state.i],r.a.createElement(k.a.Backspace,{count:this.state.words[this.state.i].length,delay:1500})):""),r.a.createElement("div",{className:"hdesc"},r.a.createElement("span",{style:{color:"rgba(255, 255, 255, 0.8)"}},"at")," Duke University")),r.a.createElement("div",{className:"links"},r.a.createElement("div",{className:"row"},r.a.createElement("a",{href:"https://github.com/raymondhechen",target:"_blank"},r.a.createElement("img",{className:"icon",src:"/images/github.svg"})),r.a.createElement("a",{href:"https://www.linkedin.com/in/raymondhechen/",target:"_blank"},r.a.createElement("img",{className:"icon",src:"/images/linkedin.svg"}))),r.a.createElement("div",{className:"row"},r.a.createElement("a",{href:"/assets/resume.pdf",target:"_blank"},r.a.createElement("img",{className:"icon",src:"/images/resume.svg"})),r.a.createElement("a",{href:"mailto:rc284@duke.edu",target:"_blank"},r.a.createElement("img",{className:"icon",src:"/images/mail.svg"})))))}},{key:"componentDidMount",value:function(){document.body.style.backgroundColor="black"}}]),t}(n.Component)),y=(a(39),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){this.props.text2;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",{href:this.props.link,target:"_blank"},r.a.createElement("img",{className:"icon",src:this.props.img}))),r.a.createElement("div",null,r.a.createElement("div",{className:"text1"},r.a.createElement("span",null,this.props.text1),r.a.createElement("br",null),r.a.createElement("span",{className:"text2"},this.props.text2),r.a.createElement("br",null),r.a.createElement("span",{className:"text3"},this.props.text3))))}}]),t}(n.Component)),v=(a(40),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"desc"},r.a.createElement("h1",null,"Hey!"),r.a.createElement("p",null,"I'm a second-year Trinity student and Huang Fellow at Duke University from New Jersey. Academically, computer science, statistics, software engineering, and data science are my main focuses, although I'm also interested in business and medicine. Outside the classroom, I am passionate about design, photography, and astronomy. I am also a badminton player with over a decade of international competitive experience. Feel free to contact me with any comments or questions!")),r.a.createElement("div",{className:"Aflex"},r.a.createElement("div",{className:"edu"},r.a.createElement("h1",null,"Education"),r.a.createElement(y,{link:"https://www.duke.edu",img:"/images/duke.png",text1:"Duke University",text2:"B.S. Computer Science",text3:"2022"}),r.a.createElement(y,{link:"https://www.pingry.org",img:"/images/pingry.jpg",text1:"Pingry School",text2:"High School Diploma",text3:"2018"})),r.a.createElement("div",{className:"exp"},r.a.createElement("h1",null,"Experience"),r.a.createElement(y,{link:"https://www.dukeimpact.org/",img:"/images/diig.jpeg",text1:"Project Manager",text2:"Duke Impact Investing Group",text3:"2020"}),r.a.createElement(y,{link:"https://hackduke.org",img:"/images/hackduke.png",text1:"Developer",text2:"HackDuke Planning Committee",text3:"2020"}),r.a.createElement(y,{link:"https://pearsonlab.github.io",img:"/images/pearson.png",text1:"Software Engineering Intern",text2:"Pearson Lab",text3:"2019"})),r.a.createElement("div",{className:"extra"},r.a.createElement("h1",null,"Others"),r.a.createElement(y,{link:"https://dukethecube.com/",img:"/images/cube.png",text1:"Member",text2:"The Cube",text3:"2020"}),r.a.createElement(y,{link:"https://scienceandsociety.duke.edu/learn/undergraduate-programs/huang-fellows-program",img:"/images/huang.png",text1:"Huang Fellow",text2:"Duke Science & Society",text3:"2019"}))),r.a.createElement("div",{className:"footer"}))}},{key:"componentDidMount",value:function(){document.body.style.backgroundColor="rgb(0, 128, 255)"}}]),t}(n.Component)),x=(a(41),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"image"},r.a.createElement("img",{className:"pic",src:this.props.img})),r.a.createElement("div",{className:"text"},r.a.createElement("div",{className:"inText"},r.a.createElement("span",{className:"inText2"},this.props.text1),r.a.createElement("br",null),this.props.text2,r.a.createElement("br",null),this.props.text3),r.a.createElement("div",{className:"cardlinks"},this.props.linkA&&r.a.createElement("a",{href:this.props.linkA,target:"_blank"},r.a.createElement("img",{className:"icon",src:"/images/pdf.svg"})),this.props.linkP&&r.a.createElement("a",{href:this.props.linkP,target:"_blank"},r.a.createElement("img",{className:"icon",src:"/images/poster.svg"})),this.props.linkG&&r.a.createElement("a",{href:this.props.linkG,target:"_blank"},r.a.createElement("img",{className:"icon",src:"/images/github.svg"})),this.props.linkW&&r.a.createElement("a",{href:this.props.linkW,target:"_blank"},r.a.createElement("img",{className:"icon",src:"/images/world.svg"})))))}}]),t}(n.Component)),j=(a(23),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"flex"},r.a.createElement(x,{img:"/images/research6.png",text1:"Calcium Imaging Real Time Analysis Platform",text2:"Pearson Lab, Duke University",text3:"2019",linkA:"/assets/research6_abstract.pdf",linkP:"/assets/research6.pdf",linkG:"https://github.com/raymondhechen/improv",linkW:"https://pearsonlab.github.io"}),r.a.createElement(x,{img:"/images/research5.jpg",text1:"Effects of Bcl2L12 on Melanoma using Zebrafish",text2:"IRT, Pingry School",text3:"2018",linkP:"/assets/research5.pdf",linkW:"https://www.pingry.org"}),r.a.createElement(x,{img:"/images/research4.jpg",text1:"Spatiotemporal Sequence Learning in Mouse V1",text2:"Gavornik Lab, Boston University",text3:"2017",linkA:"/assets/research4_abstract.pdf",linkP:"/assets/research4.pdf",linkW:"https://gavorniklab.bu.edu"}),r.a.createElement(x,{img:"/images/research3.jpg",text1:"Studying p53 Knockout Glioblastoma in Mice",text2:"Zhu Lab, Children's National",text3:"2016",linkW:"https://zhulab.wordpress.com"}),r.a.createElement(x,{img:"/images/research2.jpg",text1:"Isolating and Analyzing Duckweed Genes",text2:"Waksman, Rutgers University",text3:"2016",linkA:"/assets/research2_abstract.pdf",linkP:"/assets/research2.pdf",linkW:"https://www.waksman.rutgers.edu"}),r.a.createElement(x,{img:"/images/research1.jpg",text1:"Analysis and Modeling of the FadR Protein",text2:"Kull Lab, Dartmouth University",text3:"2015",linkA:"/assets/research1_abstract.pdf",linkP:"/assets/research1.pdf",linkW:"https://sites.dartmouth.edu/kull_lab"})),r.a.createElement("div",{className:"footer"}))}},{key:"componentDidMount",value:function(){document.body.style.backgroundColor="rgb(63, 194, 139)"}}]),t}(n.Component)),w=function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"flex"},r.a.createElement(x,{img:"/images/project3.jpg",text1:"Yeet",text2:"Messaging Mobile App",text3:"2020",linkW:"/projects"}),r.a.createElement(x,{img:"/images/project2.png",text1:"ShuttleRank",text2:"Web App for Duke Badminton",text3:"2019",linkW:"http://rank.dukebadminton.org",linkG:"https://github.com/raymondhechen/badrank"}),r.a.createElement(x,{img:"/images/project1.jpeg",text1:"Portfolio",text2:"Personal Website",text3:"2018",linkW:"https://www.raymondhechen.com",linkG:"https://github.com/raymondhechen/raymondhechen.github.io"})),r.a.createElement("div",{className:"footer"}))}},{key:"componentDidMount",value:function(){document.body.style.backgroundColor="#e65461"}}]),t}(n.Component),N=(a(42),function(){return r.a.createElement("div",{className:"p404"},r.a.createElement("h1",null,"404"))}),O=(a(43),a(44),function(e){function t(){return Object(i.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(E,null),r.a.createElement(h.a,{render:function(e){var t=e.location;return r.a.createElement(g.a,null,r.a.createElement(d.a,{key:t.key,appear:!0,classNames:"fade",timeout:{enter:300,exit:0}},r.a.createElement(h.c,{location:t},r.a.createElement(h.a,{exact:!0,path:"/",component:f}),r.a.createElement(h.a,{path:"/about",component:v}),r.a.createElement(h.a,{path:"/research",component:j}),r.a.createElement(h.a,{path:"/projects",component:w}),r.a.createElement(h.a,{component:N}))))}}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[27,1,2]]]);
//# sourceMappingURL=main.d19c03f3.chunk.js.map