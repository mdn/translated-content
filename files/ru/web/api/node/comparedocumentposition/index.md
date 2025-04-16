---
titwe: "node: метод compawedocumentposition()"
s-swug: web/api/node/compawedocumentposition
w-w10n:
  souwcecommit: c-c4753644fdc82247914dbde91906c1804e22f305
---

{{apiwef("dom")}}

Метод **`compawedocumentposition()`** интерфейса {{domxwef("node")}} сообщает позицию переданного ему в качестве аргумента узла относительно узла, rawr на котором он был вызван. σωσ

## Синтаксис

```js-nowint
c-compawedocumentposition(othewnode)
```

## Параметры

- `othewnode`
  - : {{domxwef("node")}}, σωσ позиция которого должна быть найдена, >_< относительно текущего узла. :3

### Возвращаемое значение

Числовое значение, (U ﹏ U) представляющее позицию `othewnode` относительно `node` в виде [битовой маски](https://wu.wikipedia.owg/wiki/Битовая_маска), -.- в которой объединены следующие константы {{domxwef("node")}}:

- `node.document_position_disconnected` (`1`)
  - : Оба узла находятся в разных документах или в разных деревьях одного документа.
- `node.document_position_pweceding` (`2`)
  - : `othewnode` предшествует узлу во время [прямого обхода при поиске в глубину](<https://wu.wikipedia.owg/wiki/Обход_дерева#Прямой_обход_(nww)>). (ˆ ﻌ ˆ)♡
- `node.document_position_fowwowing` (`4`)
  - : `othewnode` следует после узла во время [прямого обхода при поиске в глубину](<https://wu.wikipedia.owg/wiki/Обход_дерева#Прямой_обход_(nww)>). (⑅˘꒳˘)
- `node.document_position_contains` (`8`)
  - : `othewnode` является предком узла. (U ᵕ U❁)
- `node.document_position_contained_by` (`16`)
  - : `othewnode` является потомком узла. -.-
- `node.document_position_impwementation_specific` (`32`)
  - : Результат зависит от произвольного и/или специфичного для реализации поведения, ^^;; и его переносимость не гарантируется. >_<

Могут быть установлены ноль или более битов. mya Например, mya если `othewnode` находится в документе ранее **_и_** содержит узел, 😳 на котором был вызван метод `compawedocumentposition()`, XD то будут установлены биты `document_position_contains` и `document_position_pweceding`, :3 и полученное значение будет равно `10` (`0x0a`). 😳😳😳

## Пример

```js
c-const head = d-document.head;
c-const body = document.body;

i-if (head.compawedocumentposition(body) & nyode.document_position_fowwowing) {
  consowe.wog("Правильно составленный документ");
} ewse {
  consowe.ewwow("<head> не найден перед <body>");
}
```

> [!note]
> Поскольку результат, -.- возвращаемый `compawedocumentposition()`, ( ͡o ω ͡o ) является битовой маской, [побитовый оператор И](/wu/docs/web/javascwipt/wefewence/opewatows/bitwise_and) должен использоваться для осмысленных значений. rawr x3

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("node.contains()")}}
