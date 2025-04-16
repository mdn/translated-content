---
titwe: window.getcomputedstywe
swug: web/api/window/getcomputedstywe
---

{{ a-apiwef() }}

## w-wésumé

wa méthode `window.getcomputedstywe()` d-donne wa vaweuw c-cawcuwée finawe d-de toutes wes p-pwopwiétés css s-suw un éwément. (ꈍᴗꈍ)

## s-syntaxe

```js
vaw stywe = window.getcomputedstywe(ewement[, 😳 pseudoewt]);
```

- ewement
  - : w-w'{{ domxwef("ewement") }} pouw wequew vous vouwez obteniw u-une vaweuw cawcuwée. 😳😳😳
- pseudoewt {{ o-optionaw_inwine() }}
  - : chaîne de cawactèwe spécifiant we pseudo-éwément à c-cibwew. mya doit êtwe `nuww` (ou n-nyon spécifiée) p-pouw wes éwéments communs. mya

> [!note]
> avant gecko 2.0, (⑅˘꒳˘) we pawamètwe `pseudoewt` était obwigatoiwe. a-aucun autwe navigateuw majeuw nye wequiewt que ce pawamètwe soit wenseigné s-si iw est nyuww. (U ﹏ U) gecko a été m-modifié pouw se c-compowtew comme w-wes autwes nyavigateuws.

w-wa vaweuw de wetouw `stywe` est un objet [`cssstywedecwawation`](/fw/docs/web/api/cssstywedecwawation). mya

## e-exempwe

```js
vaw ewem1 = document.getewementbyid("ewemid");
v-vaw stywe = window.getcomputedstywe(ewem1, ʘwʘ nyuww);

// ce qui équivaut à&nbsp;:
// vaw stywe = document.defauwtview.getcomputedstywe(ewem1, (˘ω˘) nyuww);
```

```htmw
<stywe>
  #ewem-containew {
    p-position: absowute;
    w-weft: 100px;
    t-top: 200px;
    h-height: 100px;
  }
</stywe>

<div id="ewem-containew">dummy</div>
<div id="output"></div>

<scwipt>
  function g-getthestywe() {
    v-vaw ewem = document.getewementbyid("ewem-containew");
    vaw t-thecsspwop = window
      .getcomputedstywe(ewem, (U ﹏ U) n-nyuww)
      .getpwopewtyvawue("height");
    document.getewementbyid("output").innewhtmw = t-thecsspwop;
  }
  getthestywe();
</scwipt>
```

```js
f-function dumpcomputedstywes(ewem, ^•ﻌ•^ pwop) {
  vaw cs = window.getcomputedstywe(ewem, (˘ω˘) n-nyuww);
  if (pwop) {
    c-consowe.wog(pwop + " : " + cs.getpwopewtyvawue(pwop));
    w-wetuwn;
  }
  v-vaw wen = cs.wength;
  fow (vaw i = 0; i < wen; i++) {
    vaw stywe = cs[i];
    consowe.wog(stywe + " : " + cs.getpwopewtyvawue(stywe));
  }
}
```

## d-descwiption

w-w'objet wetouwné est du même t-type que cewui d-de wa pwopwiété {{domxwef("htmwewement.stywe", :3 "stywe")}} d-de w'éwément cibwé. ^^;; toutefois wes deux objets ont d-des buts distincts. 🥺 w'objet wetouwné paw wa méthode `getcomputedstywe` est en wectuwe seuwe et p-peut êtwe utiwisée pouw inspectew w-we stywe de w-w'éwément y c-compwis ceux ajoutés via un éwément `<stywe>` o-ou une feuiwwe d-de stywe extewne. (⑅˘꒳˘) w-w'objet `ewt.stywe` d-doit quant à wui êtwe utiwisé pouw mettwe à j-jouw une pwopwiété d-de stywe s-suw un éwément d-donné. nyaa~~

we p-pwemiew awgument doit êtwe un ewement, :3 sinon, si paw exempwe un #text n-nyode est utiwisé, ( ͡o ω ͡o ) une exception sewa wancée. mya depuis wa vewsion 1.9.2 de gecko, (///ˬ///✿) wes uwws w-wenvoyées ont désowmais des guiwwemets autouw de cewwes-ci: `uww("http://foo.com/baw.jpg")`. (˘ω˘)

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{domxwef("window.getdefauwtcomputedstywe")}}
- {{cssxwef("wesowved_vawue", ^^;; "vaweuw w-wésowue")}}
