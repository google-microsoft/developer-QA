(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{83:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return i})),t.d(e,"metadata",(function(){return a})),t.d(e,"toc",(function(){return s})),t.d(e,"default",(function(){return l}));var r=t(3),o=(t(0),t(94));const i={id:"nginx",title:"nginx\u5e38\u89c1\u95ee\u9898",sidebar_label:"nginx\u5e38\u89c1\u95ee\u9898",slug:"/app-info/nginx"},a={unversionedId:"app-info/nginx/nginx",id:"app-info/nginx/nginx",isDocsHomePage:!1,title:"nginx\u5e38\u89c1\u95ee\u9898",description:"1. \u5b89\u88c5nginx",source:"@site/docs/app-info/nginx/nginx.md",slug:"/app-info/nginx",permalink:"/developer-QA/docs/app-info/nginx",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/app-info/nginx/nginx.md",version:"current",lastUpdatedAt:1618993252,formattedLastUpdatedAt:"4/21/2021",sidebar_label:"nginx\u5e38\u89c1\u95ee\u9898",sidebar:"docs",previous:{title:"git\u5e38\u89c1\u95ee\u9898",permalink:"/developer-QA/docs/app-info/git"},next:{title:"java\u5e38\u89c1\u8fd0\u7ef4\u95ee\u9898",permalink:"/developer-QA/docs/app-info/java"}},s=[{value:"1. \u5b89\u88c5nginx",id:"1-\u5b89\u88c5nginx",children:[]},{value:"2. centos7\u4e0b\u914d\u7f6enginx",id:"2-centos7\u4e0b\u914d\u7f6enginx",children:[]}],c={toc:s};function l({components:n,...e}){return Object(o.b)("wrapper",Object(r.a)({},c,e,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"1-\u5b89\u88c5nginx"},"1. \u5b89\u88c5nginx"),Object(o.b)("p",null,"To add NGINX yum repository, create a file named "),Object(o.b)("p",null,"/etc/yum.repos.d/nginx.repo"),Object(o.b)("p",null," and paste one of the configurations below:"),Object(o.b)("p",null,"CentOS:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"[nginx-stable]\nname=nginx stable repo\nbaseurl=http://nginx.org/packages/centos/$releasever/$basearch/\ngpgcheck=1\nenabled=1\ngpgkey=https://nginx.org/keys/nginx_signing.key\nmodule_hotfixes=true\n\n[nginx-mainline]\nname=nginx mainline repo\nbaseurl=http://nginx.org/packages/mainline/centos/$releasever/$basearch/\ngpgcheck=1\nenabled=0\ngpgkey=https://nginx.org/keys/nginx_signing.key\nmodule_hotfixes=true\n\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"then:\n\nyum install nginx\n\n\nif error\n\n yum-config-manager --disable epel\n\n")),Object(o.b)("h2",{id:"2-centos7\u4e0b\u914d\u7f6enginx"},"2. centos7\u4e0b\u914d\u7f6enginx"),Object(o.b)("p",null,"\u914d\u7f6e\u6587\u4ef6\u4e00\u822c\u5728:/etc/nginx/nginx.conf"),Object(o.b)("p",null,"\u5185\u5bb9\u5982:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},'\n# For more information on configuration, see:\n#   * Official English Documentation: http://nginx.org/en/docs/\n#   * Official Russian Documentation: http://nginx.org/ru/docs/\n\nuser nginx;\nworker_processes auto;\nerror_log /var/log/nginx/error.log;\npid /run/nginx.pid;\n\n# Load dynamic modules. See /usr/share/doc/nginx/README.dynamic.\ninclude /usr/share/nginx/modules/*.conf;\n\nevents {\n    worker_connections 1024;\n}\n\nhttp {\n    log_format  main  \'$remote_addr - $remote_user [$time_local] "$request" \'\n                      \'$status $body_bytes_sent "$http_referer" \'\n                      \'"$http_user_agent" "$http_x_forwarded_for"\';\n\n    access_log  /var/log/nginx/access.log  main;\n\n    sendfile            on;\n    tcp_nopush          on;\n    tcp_nodelay         on;\n    keepalive_timeout   65;\n    types_hash_max_size 2048;\n\n    include             /etc/nginx/mime.types;\n    default_type        application/octet-stream;\n\n    # Load modular configuration files from the /etc/nginx/conf.d directory.\n    # See http://nginx.org/en/docs/ngx_core_module.html#include\n    # for more information.\n    include /etc/nginx/conf.d/*.conf;\n\n   server {\n           listen       80;\n           server_name  localhost;\n\n        location / {\n               root /home/app/test/ruoyi-ui/dist;\n            try_files $uri $uri/ /index.html;\n               index  index.html index.htm;\n           }\n\n        location /prod-api/{\n            proxy_set_header Host $http_host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header REMOTE-HOST $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_pass http://localhost:8007/;\n        }\n\n           error_page   500 502 503 504  /50x.html;\n           location = /50x.html {\n               root   html;\n           }\n   }\n   server {\n           listen       1024;\n           server_name  localhost;\n\n        location / {\n               root /home/app/preferential-activities-frontend/questionnaire;\n            try_files $uri $uri/ /index.html;\n               index  index.html index.htm;\n           }\n\n        location /prod-api/{\n            proxy_set_header Host $http_host;\n            proxy_set_header X-Real-IP $remote_addr;\n            proxy_set_header REMOTE-HOST $remote_addr;\n            proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n            proxy_pass http://localhost:8007/;\n        }\n\n           error_page   500 502 503 504  /50x.html;\n           location = /50x.html {\n               root   html;\n           }\n   }\n# Settings for a TLS enabled server.\n#\n#    server {\n#        listen       443 ssl http2 default_server;\n#        listen       [::]:443 ssl http2 default_server;\n#        server_name  _;\n#        root         /usr/share/nginx/html;\n#\n#        ssl_certificate "/etc/pki/nginx/server.crt";\n#        ssl_certificate_key "/etc/pki/nginx/private/server.key";\n#        ssl_session_cache shared:SSL:1m;\n#        ssl_session_timeout  10m;\n#        ssl_ciphers HIGH:!aNULL:!MD5;\n#        ssl_prefer_server_ciphers on;\n#\n#        # Load configuration files for the default server block.\n#        include /etc/nginx/default.d/*.conf;\n#\n#        location / {\n#        }\n#\n#        error_page 404 /404.html;\n#        location = /404.html {\n#        }\n#\n#        error_page 500 502 503 504 /50x.html;\n#        location = /50x.html {\n#        }\n#    }\n\n}\n\n')))}l.isMDXComponent=!0},94:function(n,e,t){"use strict";t.d(e,"a",(function(){return d})),t.d(e,"b",(function(){return f}));var r=t(0),o=t.n(r);function i(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function a(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,r)}return t}function s(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?a(Object(t),!0).forEach((function(e){i(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function c(n,e){if(null==n)return{};var t,r,o=function(n,e){if(null==n)return{};var t,r,o={},i=Object.keys(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||(o[t]=n[t]);return o}(n,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);for(r=0;r<i.length;r++)t=i[r],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(o[t]=n[t])}return o}var l=o.a.createContext({}),p=function(n){var e=o.a.useContext(l),t=e;return n&&(t="function"==typeof n?n(e):s(s({},e),n)),t},d=function(n){var e=p(n.components);return o.a.createElement(l.Provider,{value:e},n.children)},u={inlineCode:"code",wrapper:function(n){var e=n.children;return o.a.createElement(o.a.Fragment,{},e)}},g=o.a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,i=n.originalType,a=n.parentName,l=c(n,["components","mdxType","originalType","parentName"]),d=p(t),g=r,f=d["".concat(a,".").concat(g)]||d[g]||u[g]||i;return t?o.a.createElement(f,s(s({ref:e},l),{},{components:t})):o.a.createElement(f,s({ref:e},l))}));function f(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var i=t.length,a=new Array(i);a[0]=g;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=n,s.mdxType="string"==typeof n?n:r,a[1]=s;for(var l=2;l<i;l++)a[l]=t[l];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,t)}g.displayName="MDXCreateElement"}}]);