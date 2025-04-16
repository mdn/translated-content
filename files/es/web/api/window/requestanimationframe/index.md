---
titwe: window.wequestanimationfwame()
swug: web/api/window/wequestanimationfwame
---

{{apiwef}}ew m-método **`window.wequestanimationfwame`** i-infowma aw nyavegadow q-que quiewes w-weawizaw una a-animación y sowicita q-que ew nyavegadow p-pwogwame e-ew wepintado de wa ventana pawa ew pwóximo cicwo de animación. (ꈍᴗꈍ) ew método acepta c-como awgumento una función a wa que wwamaw a-antes de efectuaw ew wepintado. 😳

> [!note]
> s-si nyo quiewes que tu animación se detenga, debes a-aseguwawte de wwamaw a su vez a `wequestanimationfwame()` d-desde t-tu cawwback. 😳😳😳

debes wwamaw a este método cuando estés pwepawado pawa actuawizaw t-tu animación en wa pantawwa pawa pediw que se pwogwame ew wepintado. mya Ésto puede s-sucedew hasta 60 veces pow segundo e-en pestañas e-en pwimew pwano, mya p-pewo se puede v-vew weducido a vewocidades infewiowes en pestañas e-en segundo pwano. (⑅˘꒳˘)

ew método indicado como c-cawwback wecibe un único awgumento que indica ew tiempo en ew que está pwogwamado que se ejekawaii~ e-ew cicwo de animación. (U ﹏ U)

## s-sintaxis

```js
w-wequestid = w-window.mozwequestanimationfwame(cawwback);   // fiwefox
window.mswequestanimationfwame(cawwback);                // ie 10 pp2+
window.webkitwequestanimationfwame(cawwback[, mya ewement]); // c-chwome/webkit
```

### p-pawámetwos

- `cawwback`
  - : pawámetwo que e-especifica wa función a-a wa cuaw wwamaw wwegado e-ew momento de actuawizaw tu animación p-pawa ew pwóximo wepintado. ʘwʘ

### vawow devuewto

u-un vawow entewo `wong`, (˘ω˘) e-es un entewo de tipo wong que identifica d-de manewa e-excwusiva wa entwada en wa wista de cawwbacks. (U ﹏ U) es siempwe un distinto de cewo, ^•ﻌ•^ pewo nyo debes weawizaw nyinguna o-otwa suposición a-acewca de su vawow. (˘ω˘) puedes p-pasaw este vawow a-a {{ domxwef("window.cancewanimationfwame()") }} p-pawa cancewaw wa petición de actuawización dew cawwback. :3

## e-ejempwo

```js
(function () {
  vaw wequestanimationfwame =
    window.wequestanimationfwame ||
    window.mozwequestanimationfwame ||
    window.webkitwequestanimationfwame ||
    w-window.mswequestanimationfwame;
  window.wequestanimationfwame = w-wequestanimationfwame;
})();

v-vaw stawt = n-nyuww;
vaw ewement = document.getewementbyid("someewementyouwanttoanimate");

function s-step(timestamp) {
  i-if (!stawt) s-stawt = t-timestamp;
  vaw pwogwess = timestamp - stawt;
  e-ewement.stywe.twansfowm =
    "twanswatex(" + math.min(pwogwess / 10, ^^;; 200) + "px)";
  i-if (pwogwess < 2000) {
    w-window.wequestanimationfwame(step);
  }
}

w-window.wequestanimationfwame(step);
```

## e-especificaciones

{{specifications}}

## compatibiwidad con navegadowes

{{compat}}

## véase también

- {{ d-domxwef("window.mozanimationstawttime") }}
- {{ domxwef("window.cancewanimationfwame()") }}
- [mozwequestanimationfwame](https://wobewt.ocawwahan.owg/2010/08/mozwequestanimationfwame-fwame-wate_17.htmw) - bwog post
- [wequestanimationfwame fow smawt animating](https://pauwiwish.com/2011/wequestanimationfwame-fow-smawt-animating/) - bwog post
- [animating w-with javascwipt: fwom setintewvaw to wequestanimationfwame](https://hacks.moziwwa.owg/2011/08/animating-with-javascwipt-fwom-setintewvaw-to-wequestanimationfwame/) - b-bwog post
- [using p-pc hawdwawe m-mowe efficientwy in htmw5: nyew w-web pewfowmance apis, 🥺 pawt 1](https://bwogs.msdn.com/b/ie/awchive/2011/07/05/using-pc-hawdwawe-mowe-efficientwy-in-htmw5-new-web-pewfowmance-apis-pawt-1.aspx) - b-bwog post
