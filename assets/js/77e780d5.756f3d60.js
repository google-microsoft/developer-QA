(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{81:function(e,r,n){"use strict";n.r(r),n.d(r,"frontMatter",(function(){return c})),n.d(r,"metadata",(function(){return i})),n.d(r,"toc",(function(){return p})),n.d(r,"default",(function(){return s}));var t=n(3),a=n(7),o=(n(0),n(95)),c={id:"java",title:"java\u5e38\u89c1\u8fd0\u7ef4\u95ee\u9898",sidebar_label:"java\u5e38\u89c1\u8fd0\u7ef4\u95ee\u9898",slug:"/app-info/java"},i={unversionedId:"app-info/java/java",id:"app-info/java/java",isDocsHomePage:!1,title:"java\u5e38\u89c1\u8fd0\u7ef4\u95ee\u9898",description:"1.\u67e5\u627ejar\u7684\u8fdb\u7a0b\u5e76\u6740\u6389\u8fdb\u5ea6shell",source:"@site/docs/app-info/java/readme.md",sourceDirName:"app-info/java",slug:"/app-info/java",permalink:"/developer-QA/docs/app-info/java",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/app-info/java/readme.md",version:"current",lastUpdatedAt:1619357018,formattedLastUpdatedAt:"4/25/2021",sidebar_label:"java\u5e38\u89c1\u8fd0\u7ef4\u95ee\u9898",frontMatter:{id:"java",title:"java\u5e38\u89c1\u8fd0\u7ef4\u95ee\u9898",sidebar_label:"java\u5e38\u89c1\u8fd0\u7ef4\u95ee\u9898",slug:"/app-info/java"},sidebar:"docs",previous:{title:"nginx\u5e38\u89c1\u95ee\u9898",permalink:"/developer-QA/docs/app-info/nginx"},next:{title:"ruoyi\u5e38\u89c1\u8fd0\u7ef4\u95ee\u9898",permalink:"/developer-QA/docs/app-info/ruoyi"}},p=[{value:"1.\u67e5\u627ejar\u7684\u8fdb\u7a0b\u5e76\u6740\u6389\u8fdb\u5ea6shell",id:"1\u67e5\u627ejar\u7684\u8fdb\u7a0b\u5e76\u6740\u6389\u8fdb\u5ea6shell",children:[]},{value:"2.\u6253\u5305targ.gz\u538b\u7f29\u548c\u89e3\u538b\u547d\u4ee4",id:"2\u6253\u5305targgz\u538b\u7f29\u548c\u89e3\u538b\u547d\u4ee4",children:[]},{value:"3.\u4fee\u6539springboot\u542f\u52a8\u7aef\u53e3",id:"3\u4fee\u6539springboot\u542f\u52a8\u7aef\u53e3",children:[]},{value:"4.\u7ecf\u9a8c\u90e8\u7f72java\u7684\u811a\u672c",id:"4\u7ecf\u9a8c\u90e8\u7f72java\u7684\u811a\u672c",children:[]}],l={toc:p};function s(e){var r=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},l,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"1\u67e5\u627ejar\u7684\u8fdb\u7a0b\u5e76\u6740\u6389\u8fdb\u5ea6shell"},"1.\u67e5\u627ejar\u7684\u8fdb\u7a0b\u5e76\u6740\u6389\u8fdb\u5ea6shell"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},'p=`jcmd | grep test-admin.jar | cut -d " " -f 1`\n\nkill -9 $p\n')),Object(o.b)("h3",{id:"2\u6253\u5305targgz\u538b\u7f29\u548c\u89e3\u538b\u547d\u4ee4"},"2.\u6253\u5305targ.gz\u538b\u7f29\u548c\u89e3\u538b\u547d\u4ee4"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"\u538b\u7f29\ntar -zcvf develop-project.tar.gz dist\n\n\u89e3\u538b\ntar -zxvf develop-project.tar.gz\n\n")),Object(o.b)("h3",{id:"3\u4fee\u6539springboot\u542f\u52a8\u7aef\u53e3"},"3.\u4fee\u6539springboot\u542f\u52a8\u7aef\u53e3"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"idea\u8fd0\u884c\u914d\u7f6e\u4e0a,VM options\u4e0a\u52a0-Dserver.port=8006\n")),Object(o.b)("h3",{id:"4\u7ecf\u9a8c\u90e8\u7f72java\u7684\u811a\u672c"},"4.\u7ecf\u9a8c\u90e8\u7f72java\u7684\u811a\u672c"),Object(o.b)("p",null,"\u5982:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-markdown"},"\nssh -p 16070 root@localhost <<eeooff\n\nsh /home/work/server/server.sh\n\neeooff\n\n")),Object(o.b)("p",null,"server.sh \u5185\u5bb9:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"project=test-admin\n\ncd /home/work/project/server\n\ngit pull\n\nmvn clean package\n\nPID=$(cat /home/work/server/pid)\n\nkill -9 $PID\n\ncd /home/work/project/server/test-admin/target/\n\njava -jar -Dfile.encoding=UTF-8 $project.jar > /home/work/server/log 2>&1 &\n\necho $! > /home/work/server/pid\n\n\n")))}s.isMDXComponent=!0},95:function(e,r,n){"use strict";n.d(r,"a",(function(){return u})),n.d(r,"b",(function(){return j}));var t=n(0),a=n.n(t);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function c(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?c(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),s=function(e){var r=a.a.useContext(l),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},u=function(e){var r=s(e.components);return a.a.createElement(l.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return a.a.createElement(a.a.Fragment,{},r)}},b=a.a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=s(n),b=t,j=u["".concat(c,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(j,i(i({ref:r},l),{},{components:n})):a.a.createElement(j,i({ref:r},l))}));function j(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var o=n.length,c=new Array(o);c[0]=b;var i={};for(var p in r)hasOwnProperty.call(r,p)&&(i[p]=r[p]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);