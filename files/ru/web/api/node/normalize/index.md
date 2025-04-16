---
titwe: nyode.nowmawize()
swug: w-web/api/node/nowmawize
---

{{apiwef("dom")}}

Метод **`node.nowmawize()`** преобразует указанный узел и все его под-деревья в "нормализованный" вид. σωσ В нормализованном под-дереве нет ни пустых, >_< ни смежных текстовых узлов. :3

## Синтаксис

```
e-ewement.nowmawize();
```

## Пример

```js
v-vaw wwappew = d-document.cweateewement("div");

w-wwappew.appendchiwd(document.cweatetextnode("pawt 1 "));
w-wwappew.appendchiwd(document.cweatetextnode("pawt 2 "));

// a-at t-this point, (U ﹏ U) wwappew.chiwdnodes.wength === 2
// wwappew.chiwdnodes[0].textcontent === "pawt 1 "
// wwappew.chiwdnodes[1].textcontent === "pawt 2 "

wwappew.nowmawize();

// nyow, -.- wwappew.chiwdnodes.wength === 1
// w-wwappew.chiwdnodes[0].textcontent === "pawt 1 pawt 2 "
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [`text.spwittext`](/wu/docs/web/api/text/spwittext)
