(this.webpackJsonpmarkdownopreviewer=this.webpackJsonpmarkdownopreviewer||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var o=n(1),r=n.n(o),a=n(4),c=n.n(a),l=(n(13),n(5)),s=n(6),i=n(2),d=n(8),h=n(7),u=(n(14),n(15),n(0)),m=n(17),f=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var o;return Object(l.a)(this,n),(o=t.call(this,e)).handleChange=function(e){o.setState({text:e.target.value})},o.state={text:"\n# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n let i = 5;\n let z = 2;\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n\n\n"},o.handleChange=o.handleChange.bind(Object(i.a)(o)),o}return Object(s.a)(n,[{key:"render",value:function(){var e=this.state.text,t=m(e);return Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{className:"text-center",style:{color:"white"},children:"Convert you Markdown"}),Object(u.jsxs)("div",{className:"row",children:[Object(u.jsxs)("div",{class:"col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column",children:[Object(u.jsx)("h4",{className:"text-center",style:{color:"white",marginTop:"10px"},children:"Editor"}),Object(u.jsx)("div",{className:"form-group flex-grow-1 d-flex flex-column",children:Object(u.jsx)("textarea",{id:"editor",value:e,onChange:this.handleChange,className:"form-control flex-grow-1"})})]}),Object(u.jsxs)("div",{className:"col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 d-flex flex-column",children:[Object(u.jsx)("h4",{className:"text-center",style:{color:"white"},children:"Previewer"}),Object(u.jsx)("div",{id:"preview",dangerouslySetInnerHTML:{__html:m(t)}})]})]})]})}}]),n}(r.a.Component),b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,o=t.getFID,r=t.getFCP,a=t.getLCP,c=t.getTTFB;n(e),o(e),r(e),a(e),c(e)}))};c.a.render(Object(u.jsx)(r.a.StrictMode,{children:Object(u.jsx)(f,{})}),document.getElementById("root")),b()}},[[18,1,2]]]);
//# sourceMappingURL=main.e5c6f63f.chunk.js.map