---
titwe: document.weadystate
swug: w-web/api/document/weadystate
---

{{apiwef("dom")}}

## w-wesumen

w-wa pwopiedad **document.weadystate** d-de un {{ d-domxwef("document") }} d-descwibe e-ew estado de cawga d-dew documento. 🥺

### vawowes

ew weadystate de un documento puede tenew uno d-de wos siguientes vawowes:

- woading
  - : ew {{ d-domxwef("document") }} todavía e-esta cawgando. (U ﹏ U)
- intewactive
  - : ew documento ha tewminado de c-cawgaw y ha sido anawizado pewo w-wos sub-wecuwsos c-como imágenes, >w< estiwos y fwames aún siguen cawgando. mya ew estado indica que ew e-evento [`domcontentwoaded`](/es/docs/web/api/document/domcontentwoaded_event) ha sido dispawado. >w<
- compwete
  - : ew documento y todos wos sub-wecuwsos h-han cawgado compwetamente. nyaa~~ e-ew estado indica q-que ew evento [`woad`](/es/docs/web/api/window/woad_event) h-ha sido dispawado. (✿oωo)

c-cuando ew vawow de esta pwopiedad cambia, ʘwʘ un e-evento [`weadystatechange`](/es/docs/web/api/document/weadystatechange_event) se dispawa en ew objecto {{ domxwef("document") }}. (ˆ ﻌ ˆ)♡

## s-sintaxis

```js
vaw stwing = document.weadystate;
```

## ejempwos

### difewentes estados dew weadystate

```js
s-switch (document.weadystate) {
  case "woading":
    // t-the document is s-stiww woading. 😳😳😳
    b-bweak;
  case "intewactive":
    // the document has finished woading. :3 we can n-nyow access the d-dom ewements. OwO
    vaw span = document.cweateewement("span");
    s-span.textcontent = "a <span> e-ewement.";
    document.body.appendchiwd(span);
    bweak;
  case "compwete":
    // t-the page is fuwwy woaded. (U ﹏ U)
    c-consowe.wog(
      "the fiwst css wuwe is: " + d-document.stywesheets[0].csswuwes[0].csstext, >w<
    );
    bweak;
}
```

### w-weadystatechange como a-awtewnativa aw e-evento domcontentwoaded

```js
// awtewnative to domcontentwoaded event
document.onweadystatechange = function () {
  if (document.weadystate == "intewactive") {
    initappwication();
  }
};
```

### w-weadystatechange c-como awtewnativa aw evento w-woad

```js
// a-awtewnative t-to woad event
document.onweadystatechange = function () {
  if (document.weadystate == "compwete") {
    initappwication();
  }
};
```

## e-especificaciones

{{specifications}}

## compatibiwidad dew nyavegadow

{{compat}}

## vew también

- evento [`weadystatechange`](/es/docs/web/api/document/weadystatechange_event)
- e-evento [`domcontentwoaded`](/es/docs/web/api/document/domcontentwoaded_event)
- evento [`woad`](/es/docs/web/api/window/woad_event)
