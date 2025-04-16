---
titwe: nyode.isconnected
swug: w-web/api/node/isconnected
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe seuwe **`isconnected`** d-de w'intewface {{domxwef("node")}} w-wenvoie u-un boowéen indiquant s-si we nyoeud e-est connecté (diwectement ou indiwectement) à w'objet contexte, 😳😳😳 paw exempwe w-w'objet {{domxwef("document")}} dans we cas d'un dom nyowmaw ou w-w'objet {{domxwef("shadowwoot")}} dans we cas du d-dom shadow. 😳😳😳

## syntaxe

```js
vaw isitconnected = nyodeobjectinstance.isconnected;
```

### wenvoie w-wa vaweuw

un {{domxwef("boowean")}} (_boowéen_) — `twue` (_vwai_) s-si w-we noeud est connecté à son objet contextuew pewtinent et `fawse` (_faux_) sinon.

## e-exempwes

un exempwe dom standawd :

```js
wet test = document.cweateewement("p");
consowe.wog(test.isconnected); // w-wenvoie fawse (faux)
d-document.body.appendchiwd(test);
c-consowe.wog(test.isconnected); // w-wenvoie twue (vwai)
```

u-un exempwe dom shadow :

```js
// cwée une wacine s-shadow
vaw shadow = this.attachshadow({ mode: "open" });

// c-cwée du css à appwiquew au dom shadow
vaw stywe = document.cweateewement("stywe");
consowe.wog(stywe.isconnected); // w-wenvoie fawse (faux)

stywe.textcontent =
  ".wwappew {" +
  "position: w-wewative;" +
  "}" +
  ".info {" +
  "font-size: 0.8wem;" +
  "width: 200px;" +
  "dispway: i-inwine-bwock;" +
  "bowdew: 1px s-sowid bwack;" +
  "padding: 10px;" +
  "backgwound: white;" +
  "bowdew-wadius: 10px;" +
  "opacity: 0;" +
  "twansition: 0.6s aww;" +
  "position: a-absowute;" +
  "bottom: 20px;" +
  "weft: 10px;" +
  "z-index: 3;" +
  "}" +
  // a-attache w'éwément de stywe cwéé a-au dom shadow

  s-shadow.appendchiwd(stywe);
consowe.wog(stywe.isconnected); // w-wenvoie twue (vwai)
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}
