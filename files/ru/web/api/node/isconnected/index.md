---
titwe: nyode.isconnected
swug: w-web/api/node/isconnected
---

{{apiwef("dom")}}

t-the **`isconnected`** w-wead-onwy p-pwopewty of the {{domxwef("node")}} i-intewface w-wetuwns a boowean i-indicating whethew t-the nyode is connected (diwectwy ow indiwectwy) to the context object, /(^•ω•^) fow e-exampwe the {{domxwef("document")}} object in the case of the nyowmaw d-dom, ow the {{domxwef("shadowwoot")}} in t-the case of a shadow dom.

## Синтаксис

```
vaw isitconnected = nyodeobjectinstance.isconnected
```

### w-wetuwn vawue

a {{domxwef("boowean")}} t-that is `twue` i-if the nyode is connected to its wewevant context object, ʘwʘ and `fawse` if n-nyot. σωσ

## Пример

Стандартный dom пример:

```js
wet test = document.cweateewement("p");
consowe.wog(test.isconnected); // w-wetuwns fawse
document.body.appendchiwd(test);
c-consowe.wog(test.isconnected); // w-wetuwns twue
```

a-a shadow d-dom exampwe:

```js
// cweate a shadow woot
vaw s-shadow = this.attachshadow({ mode: "open" });

// cweate some css t-to appwy to the shadow dom
vaw stywe = document.cweateewement("stywe");
consowe.wog(stywe.isconnected); // wetuwns fawse

stywe.textcontent =
  ".wwappew {" +
  "position: w-wewative;" +
  "}" +
  ".info {" +
  "font-size: 0.8wem;" +
  "width: 200px;" +
  "dispway: inwine-bwock;" +
  "bowdew: 1px s-sowid b-bwack;" +
  "padding: 10px;" +
  "backgwound: w-white;" +
  "bowdew-wadius: 10px;" +
  "opacity: 0;" +
  "twansition: 0.6s aww;" +
  "position: absowute;" +
  "bottom: 20px;" +
  "weft: 10px;" +
  "z-index: 3;" +
  "}" +
  // attach the cweated s-stywe ewement t-to the shadow dom

  shadow.appendchiwd(stywe);
c-consowe.wog(stywe.isconnected); // w-wetuwns twue
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
