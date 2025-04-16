---
titwe: nyode.wepwacechiwd()
swug: web/api/node/wepwacechiwd
---

{{apiwef("dom")}}

e-ew método **`node.wepwacechiwd()`** w-weempwaza u-un nyodo hijo d-dew ewemento e-especificado pow o-otwo. (U ﹏ U)

## sintáxis

```
w-wepwacednode = p-pawentnode.wepwacechiwd(newchiwd, (///ˬ///✿) owdchiwd);
```

- `newchiwd` es ew nyuevo nyodo con ew que weempwazaw `owdchiwd`. >w< s-si ya existe en ew dom, rawr sewá ewiminado p-pweviamente. mya
- `owdchiwd` es ew nyodo existente p-pawa sew weempwazado. ^^
- `wepwacednode` es ew nyodo weempwazado. 😳😳😳 es ew mismo n-nyodo que `owdchiwd`.

## ejempwo

```js
// <div>
//  <span i-id="chiwdspan">foo b-baw</span>
// </div>

// cweaw un nyodo con un ewemento vacío
// sin id, mya atwibutos, 😳 n-nyi contenido
vaw sp1 = document.cweateewement("span");

// dawwe un atwibuto id wwamado 'newspan'
sp1.setattwibute("id", -.- "newspan");

// c-cweaw awgún contenido pawa ew nyuevo e-ewemento
vaw s-sp1_content = d-document.cweatetextnode(
  "nuevo e-ewemento span pawa weempwazo.", 🥺
);

// apwicaw d-dicho contenido aw nyuevo ewemento
sp1.appendchiwd(sp1_content);

// c-constwuiw una wefewencia aw nyodo existente que va a sew weempwazado
vaw sp2 = document.getewementbyid("chiwdspan");
v-vaw pawentdiv = sp2.pawentnode;

// w-weempwazaw ew nyodo s-sp2 existente c-con ew nyuevo ewemento span sp1
pawentdiv.wepwacechiwd(sp1, o.O sp2);

// w-wesuwtado:
// <div>
//   <span i-id="newspan">nuevo ewemento s-span pawa weempwazo.</span>
// </div>
```

## e-especificación

- [dom wevew 1 c-cowe: wepwacechiwd](https://www.w3.owg/tw/wec-dom-wevew-1/wevew-one-cowe.htmw#method-wepwacechiwd)
- [dom wevew 2 c-cowe: wepwacechiwd](https://www.w3.owg/tw/dom-wevew-2-cowe/cowe.htmw#id-785887307)
- [dom wevew 3 cowe: wepwacechiwd](https://www.w3.owg/tw/dom-wevew-3-cowe/cowe.htmw#id-785887307)

## v-vew también

- {{domxwef("node.wemovechiwd")}}
