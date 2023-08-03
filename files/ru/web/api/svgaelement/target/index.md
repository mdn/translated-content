---
title: SVGAElement.target
slug: Web/API/SVGAElement/target
---

{{APIRef("SVGAElement")}}

{{SeeCompatTable}}

Свойство **`SVGAElement.target`** только для чтения. {{domxref("SVGAElement")}} возвращает объект {{domxref("SVGAnimatedString")}}, указывающий часть целевого окна, фрейма, панели, в которой откроется при активации ссылки.

Это свойство используется, когда существует множество возможных целей для конечного ресурса, например, когда родительский документ является документом HTML или HTML-документом multi-frame.

## Синтаксис

```
myLink.target = 'value';
```

### Значение

{{Domxref ("SVGAnimatedString")}}, укажет конечную цель ресурса для открытия документа при активации ссылки.
Примеры значений можно найти [здесь](https://www.w3.org/TR/2011/REC-SVG11-20110816/linking.html#AElementTargetAttribute).

## Пример

Код взят из [«Пример кода SVGAElement»](/ru/docs/Web/API/SVGAElement#Example).

```js
...
var linkRef = document.querySelector('a');
linkRef.target ='_blank';
...
```

## Характеристики

{{Specifications}}

## Browser compatibility

{{Compat}}

## Смотрите также

- {{SVGAttr("target")}}
