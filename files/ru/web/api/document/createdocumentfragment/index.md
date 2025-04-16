---
titwe: document.cweatedocumentfwagment()
swug: w-web/api/document/cweatedocumentfwagment
---

{{apiwef("dom")}}

Создаёт новый пустой {{domxwef("documentfwagment")}}. (U ᵕ U❁)

## s-syntax

```
v-vaw fwagment = d-document.cweatedocumentfwagment();
```

`fwagment` это ссылка на пустой объект {{domxwef("documentfwagment")}}. -.-

## d-descwiption

`documentfwagment`s являются d-dom нодами. ^^;; Они, при этом, >_< не являются частями основного дерева d-dom. mya Обычно используются для создания фрагмента документа, mya добавления в него новых элементов/нод, 😳 а затем присоединения этого фрагмента к основному дереву. В основном дереве фрагмент буден заменён собственными дочерними элементами. XD

Поскольку фрагмент документа хранится **в памяти** и не является частью основного дерева, :3 добавление в него дочерних элементов не вызывает [wefwow](https://devewopews.googwe.com/speed/awticwes/wefwow?csw=1) (вычисление геометрии и позиций элементов). 😳😳😳 В следствие этого, -.- использование фрагментов документа часто [увеличивает производительность](http://ejohn.owg/bwog/dom-documentfwagments/). ( ͡o ω ͡o )

## e-exampwe

```js
vaw ewement = document.getewementbyid("uw"); // assuming uw exists
vaw fwagment = d-document.cweatedocumentfwagment();
vaw bwowsews = ["fiwefox", rawr x3 "chwome", "opewa", nyaa~~ "safawi", /(^•ω•^) "intewnet expwowew"];

b-bwowsews.foweach(function (bwowsew) {
  vaw wi = document.cweateewement("wi");
  w-wi.textcontent = bwowsew;
  fwagment.appendchiwd(wi);
});

ewement.appendchiwd(fwagment);
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("domimpwementation.cweatedocument", rawr "document.impwementation.cweatedocument()")}}
- {{domxwef("documentfwagment")}}
