(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{86:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return a})),r.d(t,"toc",(function(){return l})),r.d(t,"default",(function(){return d}));var n=r(3),o=r(7),c=(r(0),r(92)),i={id:"centos",title:"Centos\u5e38\u89c1\u95ee\u9898",sidebar_label:"Centos\u5e38\u89c1\u95ee\u9898",slug:"/os-info/centos"},a={unversionedId:"os-info/centos/centos",id:"os-info/centos/centos",isDocsHomePage:!1,title:"Centos\u5e38\u89c1\u95ee\u9898",description:"1.\u67e5\u770b\u7248\u672c",source:"@site/docs/os-info/centos/readme.md",slug:"/os-info/centos",permalink:"/developer-QA/docs/os-info/centos",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/os-info/centos/readme.md",version:"current",lastUpdatedAt:1617762922,formattedLastUpdatedAt:"4/7/2021",sidebar_label:"Centos\u5e38\u89c1\u95ee\u9898",sidebar:"docs",next:{title:"git\u5e38\u89c1\u95ee\u9898",permalink:"/developer-QA/docs/app-info/git"}},l=[{value:"1.\u67e5\u770b\u7248\u672c",id:"1\u67e5\u770b\u7248\u672c",children:[]},{value:"2.\u5b89\u88c5redis",id:"2\u5b89\u88c5redis",children:[{value:"(1).redis\u6253\u5f006379\u7aef\u53e3",id:"1redis\u6253\u5f006379\u7aef\u53e3",children:[]},{value:"(2).Redis\u542f\u52a8\u591a\u7aef\u53e3\u3001\u8fd0\u884c\u591a\u5b9e\u4f8b",id:"2redis\u542f\u52a8\u591a\u7aef\u53e3\u3001\u8fd0\u884c\u591a\u5b9e\u4f8b",children:[]}]}],s={toc:l};function d(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"1\u67e5\u770b\u7248\u672c"},"1.\u67e5\u770b\u7248\u672c"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"cat /etc/centos-release\n\n")),Object(c.b)("h2",{id:"2\u5b89\u88c5redis"},"2.\u5b89\u88c5redis"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"wget https://download.redis.io/releases/redis-6.2.1.tar.gz\ntar xzf redis-6.2.1.tar.gz\ncd redis-6.2.1\nmake\nmake install\n\nredis-server &\n\n")),Object(c.b)("p",null,"\u5982\u9047\u5230\u62a5\u9519\u4e00\u822c\u662fgcc\u592a\u65e7,\u66f4\u65b0\u4e00\u4e0b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"yum install gcc-c++ yum install gcc \n")),Object(c.b)("p",null,"\u7136\u540e\u91cd\u65b0\u89e3\u538b,\u91cd\u65b0make"),Object(c.b)("h3",{id:"1redis\u6253\u5f006379\u7aef\u53e3"},"(1).redis\u6253\u5f006379\u7aef\u53e3"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"firewall-cmd --zone=public --add-port=6379/tcp --permanent\n\nfirewall-cmd --reload\n\n")),Object(c.b)("h3",{id:"2redis\u542f\u52a8\u591a\u7aef\u53e3\u3001\u8fd0\u884c\u591a\u5b9e\u4f8b"},"(2).Redis\u542f\u52a8\u591a\u7aef\u53e3\u3001\u8fd0\u884c\u591a\u5b9e\u4f8b"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"redis-server --port 6380 & \n")),Object(c.b)("p",null,"\u9700\u8981\u542f\u52a8\u591a\u4e2aRedis\u5b9e\u4f8b\uff1a\n\u4e00\u53f0Redis\u670d\u52a1\u5668\uff0c\u5206\u6210\u591a\u4e2a\u8282\u70b9\uff0c\u6bcf\u4e2a\u8282\u70b9\u5206\u914d\u4e00\u4e2a\u7aef\u53e3\uff086380\uff0c6381\u2026\uff09\uff0c\u9ed8\u8ba4\u7aef\u53e3\u662f6379\u3002\n\u6bcf\u4e2a\u8282\u70b9\u5bf9\u5e94\u4e00\u4e2aRedis\u914d\u7f6e\u6587\u4ef6\uff0c\u5982\uff1a redis6380.conf\u3001redis6381.conf"),Object(c.b)("p",null,"#cp redis.confredis6380.conf"),Object(c.b)("p",null,"#vi redis6380.conf"),Object(c.b)("p",null,"pidfile : pidfile/var/run/redis/redis_6380.pid"),Object(c.b)("p",null,"port 6380"),Object(c.b)("p",null,"logfile : logfile/var/log/redis/redis_6380.log"),Object(c.b)("p",null,"rdbfile : dbfilenamedump_6380.rdb"))}d.isMDXComponent=!0},92:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),d=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=d(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(r),b=n,f=p["".concat(i,".").concat(b)]||p[b]||u[b]||c;return r?o.a.createElement(f,a(a({ref:t},s),{},{components:r})):o.a.createElement(f,a({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=b;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,i[1]=a;for(var s=2;s<c;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}b.displayName="MDXCreateElement"}}]);