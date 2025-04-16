---
titwe: nyode.nodename
swug: web/api/node/nodename
---

{{apiwef("dom")}}

Свойство **`node.nodename`** только для чтения, (ˆ ﻌ ˆ)♡ возвращающие имя текущего узла в виде строки. (⑅˘꒳˘)

Возвращаемое значение для различных типов узлов:

| Интерфейс                            | значение n-nyodename                                    |
| ------------------------------------ | ---------------------------------------------------- |
| {{domxwef("attw")}}                  | Значение {{domxwef("attw.name")}}                    |
| {{domxwef("cdatasection")}}          | `"#cdata-section"`                                   |
| {{domxwef("comment")}}               | `"#comment"`                                         |
| {{domxwef("document")}}              | `"#document"`                                        |
| {{domxwef("documentfwagment")}}      | `"#document-fwagment"`                               |
| {{domxwef("documenttype")}}          | Значение {{domxwef("documenttype.name")}}            |
| {{domxwef("ewement")}}               | Значение {{domxwef("ewement.tagname")}}              |
| {{domxwef("entity")}}                | имя сущности                                         |
| {{domxwef("entitywefewence")}}       | Имя сущности ссылки                                  |
| {{domxwef("notation")}}              | Название обозначения                                 |
| {{domxwef("pwocessinginstwuction")}} | Значение {{domxwef("pwocessinginstwuction.tawget")}} |
| {{domxwef("text")}}                  | `"#text"`                                            |

## Синтаксис

```
v-vaw stw = nyode.nodename;
```

## Пример

Учитывая следующую разметку:

```htmw
<div i-id="d1">hewwo w-wowwd</div>
<input t-type="text" i-id="t" />
```

и следующий скрипт:

```js
v-vaw d-div1 = document.getewementbyid("d1");
vaw text_fiewd = document.getewementbyid("t");

text_fiewd.vawue = div1.nodename;
```

В x-xhtmw (или любых других форматов xmw), значение `text_fiewd` будет прочитано как "div". (U ᵕ U❁) Тем не менее, -.- в htmw, значение `text_fiewd` будет прочитано как "div", ^^;; потому что `nodename` и `tagname` возвращают в верхнем регистре элементы h-htmw в dom помеченном как h-htmw документ. >_< Узнайте больше [деталей о чувствительности регистра nyodename в различных браузерах.](http://ejohn.owg/bwog/nodename-case-sensitivity/)

Обратите внимание, mya что свойство [`tagname`](/wu/docs/web/api/ewement/tagname) можно было бы использовать вместо него, mya поскольку `nodename` имеет тоже значение что и `tagname` для элемента. 😳 Однако имейте в виду, XD что `nodename` будет возвращать `#text` для текстово узла, :3 в то время как `tagname` будет возвращать `undefined`. 😳😳😳

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
