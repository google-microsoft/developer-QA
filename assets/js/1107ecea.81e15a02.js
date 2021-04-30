(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{70:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return s})),n.d(t,"default",(function(){return c}));var r=n(3),a=(n(0),n(96));const o={id:"git",title:"git\u5e38\u89c1\u95ee\u9898",sidebar_label:"git\u5e38\u89c1\u95ee\u9898",slug:"/app-info/git"},i={unversionedId:"app-info/git/git",id:"app-info/git/git",isDocsHomePage:!1,title:"git\u5e38\u89c1\u95ee\u9898",description:"1.\u4e3a\u7279\u5b9a\u7684respo\u6307\u5b9assh-key:",source:"@site/docs/app-info/git/readme.md",sourceDirName:"app-info/git",slug:"/app-info/git",permalink:"/developer-QA/docs/app-info/git",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/app-info/git/readme.md",version:"current",lastUpdatedAt:1618241287,formattedLastUpdatedAt:"4/12/2021",sidebar_label:"git\u5e38\u89c1\u95ee\u9898",frontMatter:{id:"git",title:"git\u5e38\u89c1\u95ee\u9898",sidebar_label:"git\u5e38\u89c1\u95ee\u9898",slug:"/app-info/git"},sidebar:"docs",previous:{title:"docker\u5e38\u89c1\u95ee\u9898",permalink:"/developer-QA/docs/os-info/docker"},next:{title:"nginx\u5e38\u89c1\u95ee\u9898",permalink:"/developer-QA/docs/app-info/nginx"}},s=[{value:"<strong>1.</strong>\u4e3a\u7279\u5b9a\u7684<strong>respo</strong>\u6307\u5b9a<strong>ssh-key:</strong>",id:"1\u4e3a\u7279\u5b9a\u7684respo\u6307\u5b9assh-key",children:[]},{value:"<strong>2.</strong>\u4e3a<strong>ls</strong>\u683c\u5f0f\u8f93\u51fa<strong>:</strong>",id:"2\u4e3als\u683c\u5f0f\u8f93\u51fa",children:[]},{value:"3.\u5b89\u88c5gitlab compose",id:"3\u5b89\u88c5gitlab-compose",children:[]}],l={toc:s};function c({components:e,...t}){return Object(a.b)("wrapper",Object(r.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(a.b)("h3",{id:"1\u4e3a\u7279\u5b9a\u7684respo\u6307\u5b9assh-key"},Object(a.b)("strong",{parentName:"h3"},"1."),"\u4e3a\u7279\u5b9a\u7684",Object(a.b)("strong",{parentName:"h3"},"respo"),"\u6307\u5b9a",Object(a.b)("strong",{parentName:"h3"},"ssh-key:")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'git config core.sshCommand "ssh -i ~/.ssh/oswaldgong1988 -F /dev/null"\n\ngit config core.sshCommand "ssh -i ~/.ssh/frontremoto111 -F /dev/null"\n')),Object(a.b)("h3",{id:"2\u4e3als\u683c\u5f0f\u8f93\u51fa"},Object(a.b)("strong",{parentName:"h3"},"2."),"\u4e3a",Object(a.b)("strong",{parentName:"h3"},"ls"),"\u683c\u5f0f\u8f93\u51fa",Object(a.b)("strong",{parentName:"h3"},":")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'array=($(ls))\n\nprintf "%s\\n\u683c\u5f0f\u5206\u9694\u8f93\u5165\u201d "${array[@]}"\n')),Object(a.b)("p",null,"3.\u8bbe\u7f6e\u5f53\u524d\u9879\u76eegit\u7528\u6237\u540d"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},'git config user.name "os"\n')),Object(a.b)("h3",{id:"3\u5b89\u88c5gitlab-compose"},"3.\u5b89\u88c5gitlab compose"),Object(a.b)("p",null,"\u914d\u7f6e\u4e00\u4e2a\u73af\u5883\u53d8\u91cf$GITLAB_HOME"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$GITLAB_HOME\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"$GITLAB_HOME\n")),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"version: \"3.9\"\nservices:\n  gitlab_2:\n    container_name: gitlab_2\n    image: 'gitlab/gitlab-ee:latest'\n    restart: always\n    hostname: 'gitlab_2'\n    environment:\n      GITLAB_OMNIBUS_CONFIG: |\n        #http\n        external_url 'http://jp.liuzhen.vip/gitlab/'\n\n        # Fill in the connection details for database.yml\n        gitlab_rails['db_adapter'] = \"postgresql\"\n        gitlab_rails['db_encoding'] = \"utf8\"\n        gitlab_rails['db_host'] = \"$GITLAB_POSTGRES_HOST\"\n        gitlab_rails['db_port'] = 15432\n        gitlab_rails['db_database'] = \"postgres\"\n        gitlab_rails['db_username'] = \"postgres\"\n        gitlab_rails['db_password'] = \"fp5rQzMf\"\n\n        #Disable the built-in Postgres\n        postgresql['enable'] = false\n        #postgresql ['ssl'] = \"off\"\n\n        #Disable the built-in redis\n        redis['enable'] = false\n        gitlab_rails['redis_host'] = \"$GITLAB_REDIS_HOST\"\n        gitlab_rails['redis_port'] = 16379\n\n    ports:\n      - '30020:80'\n      - '30021:443'\n      - '30022:22'\n    volumes:\n      - '$GITLAB_HOME/config:/etc/gitlab'\n      - '$GITLAB_HOME/logs:/var/log/gitlab'\n      - '$GITLAB_HOME/data:/var/opt/gitlab'\n")))}c.isMDXComponent=!0},96:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),b=p(n),d=r,u=b["".concat(i,".").concat(d)]||b[d]||g[d]||o;return n?a.a.createElement(u,s(s({ref:t},c),{},{components:n})):a.a.createElement(u,s({ref:t},c))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);