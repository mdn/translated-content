---
title: Clipboard API
slug: Web/API/Clipboard_API
---

{{DefaultAPISidebar("Clipboard API")}}**Clipboard API** предоставляет возможность реагировать на команды буфера обмена (вырезать, копировать и вставить), а также выполнять асинхронные чтение/запись в системный буфер обмена. Доступ к содержимому буфера обмена осуществляется через [Permissions API](/ru/docs/Web/API/Permissions_API): `clipboard-write` (разрешение на запись) в буфер обмена автоматически предоставляется страницам, когда они находятся на активной вкладке. Для `clipboard-read` (чтение из буфера обмена) должно быть запрошено разрешение пользователя. Можно сделать запрос на разрешение, попытавшись прочитать данные из буфера обмена.

API предназначен заменить {{domxref("document.execCommand()")}} в качестве способа для доступа к буферу обмена.

## Доступ к буферу обмена

Вместо создания объекта буфера посредством инициализации экземпляра, вы получаете доступ к системному буферу обмена через глобальный {{domxref("Navigator.clipboard")}}:

```js
navigator.clipboard
  .readText()
  .then(
    (clipText) => (document.querySelector(".editor").innerText += clipText),
  );
```

Этот фрагмент извлекает текст из буфера обмена и добавляет его к первому элементу, найденному с помощью `editor` (редактора) классов. Этот код безопасен, поскольку {{domxref("Clipboard.readText", "readText()")}} (и {{domxref("Clipboard.read", "read()")}}, если на то пошло) возвращает пустую строку, если в буфере обмена нет текста.

## Интерфейсы

- {{domxref("Clipboard")}} {{securecontext_inline}}
  - : Предоставляет интерфейс для чтения/записи текста и данных в системный буфер обмена. В спецификации называется 'Async Clipboard API (API асинхронного буфера обмена)'.
- {{domxref("ClipboardEvent")}} {{securecontext_inline}}
  - : Представляет события, содержащие информацию, относящуюся к модификации буфера обмена, а именно {{domxref("Element/cut_event", "cut")}}, {{domxref("Element/copy_event", "copy")}} и {{domxref("Element/paste_event", "paste")}} события. В спецификации называется 'Clipboard Event API (API событий буфера обмена)'.
- {{domxref("ClipboardItem")}} {{securecontext_inline}}
  - : Представляет единый формат элемента, используемый при чтении или записи данных.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [Async Clipboard API demo on Glitch](https://async-clipboard-api.glitch.me/) (Демонстрация API асинхронного буфера на Glitch)
- [Image support for Async Clipboard article](https://web.dev/image-support-for-async-clipboard/) (Поддержка изображений в асинхронном буфере обмена)
- [Permissions API](/ru/docs/Web/API/Permissions_API)
- [Using the Permissions API](/ru/docs/Web/API/Permissions_API/Using_the_Permissions_API)
