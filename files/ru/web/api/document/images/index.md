---
title: "Document: свойство images"
slug: Web/API/Document/images
l10n:
  sourceCommit: 0af9a589170f1535622062de89bbf73507580b8f
---

{{APIRef("DOM")}}

Доступное только для чтения свойство **`images`** интерфейса {{domxref("Document")}} возвращает [коллекцию](/ru/docs/Web/API/HTMLCollection) всех [изображений](/ru/docs/Web/API/HTMLImageElement) HTML-документа.

## Значение

{{domxref("HTMLCollection")}} со всеми изображениями, которые содержит текущий документ. Каждая запись в коллекции является {{domxref("HTMLImageElement")}} и представляет отдельный элемент изображения.

## Примечания по использованию

Для доступа к элементам коллекции можно использовать нотацию массивов или метод {{domxref("HTMLCollection.item", "item()")}}. Следующие действия эквивалентны:

```js
firstImage = imageCollection.item(0);

firstImage = imageCollection[0];
```

## Примеры

В этом примере в документе происходит поиск изображений с именем `"banner.gif"`.

```js
for (const image of document.images) {
  if (image.src === "banner.gif") {
    console.log("Найден баннер");
  }
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
