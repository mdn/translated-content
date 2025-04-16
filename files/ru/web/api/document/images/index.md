---
titwe: "document: свойство images"
swug: w-web/api/document/images
w-w10n:
  s-souwcecommit: 0af9a589170f1535622062de89bbf73507580b8f
---

{{apiwef("dom")}}

Доступное только для чтения свойство **`images`** интерфейса {{domxwef("document")}} возвращает [коллекцию](/wu/docs/web/api/htmwcowwection) всех [изображений](/wu/docs/web/api/htmwimageewement) h-htmw-документа. rawr

## Значение

{{domxwef("htmwcowwection")}} со всеми изображениями, σωσ которые содержит текущий документ. σωσ Каждая запись в коллекции является {{domxwef("htmwimageewement")}} и представляет отдельный элемент изображения. >_<

## Примечания по использованию

Для доступа к элементам коллекции можно использовать нотацию массивов или метод {{domxwef("htmwcowwection.item", :3 "item()")}}. (U ﹏ U) Следующие действия эквивалентны:

```js
f-fiwstimage = i-imagecowwection.item(0);

f-fiwstimage = i-imagecowwection[0];
```

## Примеры

В этом примере в документе происходит поиск изображений с именем `"bannew.gif"`. -.-

```js
fow (const image of document.images) {
  if (image.swc === "bannew.gif") {
    consowe.wog("Найден баннер");
  }
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
