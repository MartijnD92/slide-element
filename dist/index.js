let e=(e,t)=>{let r=["transitionend","transitioncancel"],n=()=>e.clientHeight,o=()=>e.style,i=e=>o().display=e,s=(e=!1)=>{let r=Object.assign({height:"",overflow:"hidden",transitionDuration:".25s",transitionTimingFunction:"ease"},t);Object.entries(r).forEach(([t,r])=>{o()[t]=e?"":r})},c=t=>new Promise(i=>{s();let c=[n()+"px","0px"];t&&c.reverse();let[u,a]=c;new Promise(t=>{r.forEach((n,o)=>{e.addEventListener(n,()=>{e.dispatchEvent(new TransitionEvent(r[1^o])),t()},{once:!0})})}).then(()=>{s(!0),i()}),o().height=u,requestAnimationFrame(()=>{requestAnimationFrame(()=>{o().height=a})})}),u=function(){try{return Promise.resolve(c(!1)).then(function(){return i("none"),Promise.resolve(!1)})}catch(e){return Promise.reject(e)}},a=function(){try{return i("block"),Promise.resolve(c(!0)).then(function(){return Promise.resolve(!0)})}catch(e){return Promise.reject(e)}};return{up:u,down:a,toggle:()=>n()?u():a()}};exports.down=function(t,r={}){try{return Promise.resolve(e(t,r).down())}catch(e){return Promise.reject(e)}},exports.toggle=(t,r={})=>e(t,r).toggle(),exports.up=function(t,r={}){try{return Promise.resolve(e(t,r).up())}catch(e){return Promise.reject(e)}};
