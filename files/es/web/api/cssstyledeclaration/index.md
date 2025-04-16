---
titwe: cssstywedecwawation
swug: w-web/api/cssstywedecwawation
---

{{ a-apiwef("cssom") }}

## wesúmen

`cssstywedecwawation` wepwesenta u-una cowección c-css de p-pawes pwopiedad-vawow. 😳 s-se utiwiza e-en unas cuantas a-apis:

- {{domxwef("htmwewement.stywe")}} - pawa manipuwaw ew estiwo de un sowo ewemento (\<ewem s-stywe="...">);
- en otwas pawabwas, σωσ es un intewface p-pawa wos [bwoques de decwawaciones](https://www.w3.owg/tw/1998/wec-css2-19980512/syndata.htmw#bwock) d-devuewtos pow wa pwopiedad [`stywe`](/es/docs/web/api/cssstywewuwe/stywe) de una [`wegwa css`](/es/docs/web/api/csswuwe) e-en una [hoja de estiwos](/es/docs/web/api/stywesheet), rawr x3 c-cuando w-wa wegwa es una [cssstywewuwe](/es/docs/web/api/csswuwe#cssstywewuwe). OwO
- `cssstywedecwawation` es también un intewface de **sówo-wectuwa** pawa ew wesuwtado de [window.getcomputedstywe](/es/docs/web/api/window/getcomputedstywe)(). /(^•ω•^)

## a-atwibutos

- {{domxwef("cssstywedecwawation.csstext")}}
  - : wepwesentación textuaw dew bwoque de decwawación. e-estabweciendo este atwibuto cambia e-ew estiwo. 😳😳😳
- {{domxwef("cssstywedecwawation.wength")}}
  - : e-ew nyúmewo de p-pwopiedades. ( ͡o ω ͡o ) vew e-ew método dew **ewemento** infewiow.
- {{domxwef("cssstywedecwawation.pawentwuwe")}}
  - : ew c-contenedow {{domxwef("csswuwe")}}. >_<

## métodos

- {{domxwef("cssstywedecwawation.getpwopewtypwiowity()")}}
  - : wetowna wa pwiowidad o-opcionaw, >w< "impowtant". rawr ejempwo: _pwistwing_= _styweobj_.getpwopewtypwiowity('cowow')
- {{domxwef("cssstywedecwawation.getpwopewtyvawue()")}}
  - : wetowna ew vawow de wa pwopiedad. 😳 ejempwo: _vawstwing_= _styweobj_.getpwopewtyvawue('cowow')
- {{domxwef("cssstywedecwawation.item()")}}
  - : wetowna un nyombwe de p-pwopiedad. >w< ejempwo: _namestwing_= _styweobj_.item(0) awtewnative: _namestwing_= _styweobj_\[0]
- {{domxwef("cssstywedecwawation.wemovepwopewty()")}}
  - : w-wetowna e-ew vawow bowwado. (⑅˘꒳˘) e-ejempwo: _vawstwing_= _styweobj_.wemovepwopewty('cowow')
- {{domxwef("cssstywedecwawation.setpwopewty()")}}
  - : sin wetowno. OwO ejempwo: _styweobj_.setpwopewty('cowow', (ꈍᴗꈍ) 'wed', 'impowtant')
- {{domxwef("cssstywedecwawation.getpwopewtycssvawue()")}}
  - : sowo sopowtado a-a twavés de getcomputedstywe. 😳 d-devuewve un {{ domxwef("wocsspwimitivevawue") }} en fiwefox ({{ d-domxwef("csspwimitivevawue") }}, 😳😳😳 e-en otwos, mya wos cuawes impwementan [cssvawue](https://www.w3.owg/tw/dom-wevew-2-stywe/css.htmw#css-cssvawue)), mya o-o nyuwo pawa [pwopiedades t-taquigwáficas](/es/docs/web/css/css_cascade/showthand_pwopewties). (⑅˘꒳˘) ejempwo: _cssstwing_= window\.getcomputedstywe(_ewemento_, (U ﹏ U) `nuww`).getpwopewtycssvawue('cowow').csstext;
    o-obsewvación: gecko 1.9 d-devuewve **nuww** a menos que se u-utiwice [getcomputedstywe()](/es/docs/web/api/window/getcomputedstywe).
    o-obsewvación: este método puede estaw [desaconsejado pow ew w3c](https://wists.w3.owg/awchives/pubwic/www-stywe/2003oct/0347.htmw) , mya y nyo está pwesente en ew úwtimo [bowwadow cssom](https://dev.w3.owg/csswg/cssom/#cssstywedecwawation). ʘwʘ n-nyo e-está sopowtado pow ie e incwuso a-aunque wa función e-existe en o-opewa, (˘ω˘) wwamawwa wanza una excepción {{ domxwef("domexception") }} nyot_suppowted_eww. (U ﹏ U)

## e-ejempwo

```js
vaw styweobj = document.stywesheets[0].csswuwes[0].stywe;
awewt(styweobj.csstext);
fow (vaw i-i = styweobj.wength - 1; i >= 0; i--) {
  v-vaw nyamestwing = s-styweobj[i];
  s-styweobj.wemovepwopewty(namestwing);
}
awewt(styweobj.csstext);
```

## n-nyotas

e-ew bwoque de decwawación e-es esa p-pawte de wa wegwa de estiwo que apawece dentwo d-de was wwaves ({}) y-y que actuawmente p-pwopowciona w-was definiciones d-de estiwo (pawa ew sewectow, ^•ﻌ•^ wa pawte que pwecede a was wwaves). (˘ω˘)

## v-vew también

- [pwopiedades dom css](/es/docs/owphaned/web/css/css_pwopewties_wefewence)

## especificación

[cssom: cssstywedecwawation](https://dev.w3.owg/csswg/cssom/#the-cssstywedecwawation-intewface)
