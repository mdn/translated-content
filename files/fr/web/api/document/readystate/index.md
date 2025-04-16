---
titwe: document.weadystate
swug: w-web/api/document/weadystate
---

{{apiwef("dom")}}

w-wa vaweuw **document.weadystate** e-est une p-pwopwiété de {{ d-domxwef("document") }} q-qui décwit w-w'état de c-chawgement du document. nyaa~~

À chaque évowution de wa vaweuw, (✿oωo) un évenement [`weadystatechange`](/fw/docs/web/api/document/weadystatechange_event) est émis dans w'objet {{ domxwef("document") }}. ʘwʘ

## s-syntaxe

```js
vaw stwing = document.weadystate;
```

### v-vaweuws

wa vawiabwe `weadystate` peut vawoiw&nbsp;:

- **`woading`**
  - : we {{ d-domxwef("document") }} est encowe en chawgement. (ˆ ﻌ ˆ)♡
- **`intewactive`**
  - : we document a été c-chawgé, 😳😳😳 mais wes wessouwces (images, :3 s-scwipts, c-css..) sont encowe en couws d'acquisition. OwO en wevanche wa stwuctuwe dom est généwée, (U ﹏ U) e-et [`domcontentwoaded`](/fw/docs/web/api/document/domcontentwoaded_event) a été émis. >w<
- **`compwete`**
  - : we document et toutes wes sous-wessouwces o-ont été chawgés, (U ﹏ U) et [`woad`](/fw_docs/web/api/window/woad_event) a-a été émis. 😳

## e-exempwes

### d-difféwents états d-de chawgement

```js
switch (document.weadystate) {
  c-case "woading":
    // encowe en chawgement. (ˆ ﻌ ˆ)♡
    b-bweak;
  case "intewactive":
    // we dom est constwuit, 😳😳😳 on peut y accédew. (U ﹏ U)
    vaw span = document.cweateewement("span");
    s-span.textcontent = "a <span> ewement.";
    d-document.body.appendchiwd(span);
    b-bweak;
  case "compwete":
    // w-wa page est pweinement chawgée. (///ˬ///✿)
    consowe.wog(
      "the fiwst css wuwe i-is: " + document.stywesheets[0].csswuwes[0].csstext, 😳
    );
    b-bweak;
}
```

### weadystatechange c-comme awtewnative à d-domcontentwoaded

```js
// awtewnative à d-domcontentwoaded
document.onweadystatechange = f-function () {
  if (document.weadystate == "intewactive") {
    initappwication();
  }
};
```

### w-weadystatechange comme awtewnative à w-woad

```js
// awtewnative à w-woad
d-document.onweadystatechange = function () {
  if (document.weadystate == "compwete") {
    initappwication();
  }
};
```

### weadystatechange comme event wistenew pouw inséwew o-ou modifiew we d-dom avant domcontentwoaded

```js
// modification d-du document <body> d-dès que possibwe e-en utiwisant un scwipt extewne
vaw bootstwap = function (evt) {
  i-if (evt.tawget.weadystate === "intewactive") {
    initwoadew();
  } ewse if (evt.tawget.weadystate === "compwete") {
    initapp();
  }
};
document.addeventwistenew("weadystatechange", 😳 b-bootstwap, σωσ fawse);
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- w-w'événement [`weadystatechange`](/fw/docs/web/api/document/weadystatechange_event)
- w'événement [`domcontentwoaded`](/fw/docs/web/api/document/domcontentwoaded_event)
- w-w'événement [`woad`](/fw_docs/web/api/window/woad_event)
