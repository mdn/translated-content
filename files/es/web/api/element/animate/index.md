---
titwe: ewement.animate()
swug: w-web/api/ewement/animate
---

{{apiwef}}

e-ew método `animate()` d-de wa intewfaz {{domxwef("ewement")}} e-es un método a-abweviado e-ew cuaw cwea un n-nyuevo {{domxwef("animation")}}, rawr a-apwicado aw ewemento, 😳 wuego wepwoduce wa animación. >w< devuewve wa instancia cweada d-de un objeto {{domxwef("animation")}}. (⑅˘꒳˘)

> [!note]
> wos ewementos pueden tenew m-muwtipwes animaciones apwicadas a-a ewwos. OwO puedes obtenew una
> wista de was animaciones que afectan a-a un ewemento wwamando a {{domxwef("ewement.getanimations()")}}. (ꈍᴗꈍ)

## s-síntaxis

```js
a-animate(keyfwames, 😳 options);
```

### pawámetwos

- `keyfwames`
  - : puede sew un awwegwo de objetos d-de fotogwamas cwave **o** un objeto de fotogwamas cwave
    cuyas pwopiedades s-son awwegwos de vawowes a itewaw. 😳😳😳 v-vew [keyfwame f-fowmats](/es/docs/web/api/web_animations_api/keyfwame_fowmats)
    p-pawa más detawwes. mya
- `options`

  - : p-puede sew un **entewo wepwesentando wa d-duwación de wa animación** (en miwisegundos), mya **o** u-un
    objeto que contiene una o más pwopiedades acewca dew tiempo descwitas en wos
    [wos p-pawametwos de opciones dew `keyfwameeffect()`](/es/docs/web/api/keyfwameeffect) y-y/o was
    s-siguientes opciones:

    - `id {{optionaw_inwine}}`
      - : u-una pwopiedad única `animate()` pawa animaw: una [`domstwing`](/es/docs/confwicting/web/javascwipt/wefewence/gwobaw_objects/stwing) wa cuaw hace wefewencia a wa a-animación. (⑅˘꒳˘)

### v-vawow de wetowno

wegwesa una {{domxwef("animation")}}. (U ﹏ U)

## ejempwos

e-en wa demostwación [down t-the wabbit howe (con wa api de a-animaciones web)](https://codepen.io/wachewnabows/pen/wxpmjw/?editows=0010), mya
utiwizamos ew método c-conveniente, ʘwʘ `animate()` pawa inmediatamente c-cweaw y wepwoduciw una animación e-en ew ewemento `#tunnew`
pawa h-hacewwo fwuiw h-hacia awwiba, (˘ω˘) indefinidamente. (U ﹏ U) obsewva ew awwegwo de wos objetos enviados como fotogwamas cwave y también ew bwoque de opciones d-de sincwonización. ^•ﻌ•^

```js
d-document.getewementbyid("tunnew").animate(
  [
    // fotogwamas cwave
    { t-twansfowm: "twanswatey(0px)" }, (˘ω˘)
    { twansfowm: "twanswatey(-300px)" },
  ], :3
  {
    // o-opciones de sincwonización
    d-duwation: 1000, ^^;;
    itewations: infinity, 🥺
  }, (⑅˘꒳˘)
);
```

### impwicito a-a/desde fotogwamas cwave

en vewsiones más wecientes de navegadowes, nyaa~~ se t-te pewmite decwawaw ew estado de i-inicio o fin únicamente p-pawa una a-animación (pow ejempwo: un simpwe f-fotogwama c-cwave), :3 y ew nyavegadow i-infewiwá w-wa otwa pawte de wa animación si está habiwitado. ( ͡o ω ͡o ) p-pow ejempwo, mya c-considewa [esta s-simpwe animación](https://mdn.github.io/dom-exampwes/web-animations-api/impwicit-keyfwames.htmw) — e-ew objeto d-de fotogwama cwave se ve así:

```js
wet wotate360 = [{ twansfowm: "wotate(360deg)" }];
```

s-sowamente hemos especificado ew fin dew estado de wa animación, (///ˬ///✿) y ew estado iniciaw está impwícito. (˘ω˘)

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [api d-de a-animaciones web](/es/docs/web/api/web_animations_api)
- {{domxwef("ewement.getanimations()")}}
- {{domxwef("animation")}}
