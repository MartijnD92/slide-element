!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(exports):"function"==typeof define&&define.amd?define(["exports"],t):t((e||self).SlideElement={})}(this,function(e){let t=(e,t)=>{let n=["transitionend","transitioncancel"],r=()=>e.clientHeight,o=()=>e.style,i=e=>o().display=e,s=(e=!1)=>{let n=Object.assign({height:"",overflow:"hidden",transitionDuration:".25s",transitionTimingFunction:"ease"},t);Object.entries(n).forEach(([t,n])=>{o()[t]=e?"":n})},c=t=>new Promise(i=>{s();let c=[r()+"px","0px"];t&&c.reverse();let[u,l]=c;new Promise(t=>{n.forEach((r,o)=>{e.addEventListener(r,i=>{e.dispatchEvent(new TransitionEvent(i.type==r?n[o^=1]:r)),t()},{once:!0})})}).then(()=>{s(!0),i()}),o().height=u,requestAnimationFrame(()=>{requestAnimationFrame(()=>{o().height=l})})}),u=function(){try{return Promise.resolve(c(!1)).then(function(){return i("none"),Promise.resolve(!1)})}catch(e){return Promise.reject(e)}},l=function(){try{return i("block"),Promise.resolve(c(!0)).then(function(){return Promise.resolve(!0)})}catch(e){return Promise.reject(e)}};return{up:u,down:l,toggle:()=>r()?u():l()}};e.down=function(e,n={}){try{return Promise.resolve(t(e,n).down())}catch(e){return Promise.reject(e)}},e.toggle=(e,n={})=>t(e,n).toggle(),e.up=function(e,n={}){try{return Promise.resolve(t(e,n).up())}catch(e){return Promise.reject(e)}}});
