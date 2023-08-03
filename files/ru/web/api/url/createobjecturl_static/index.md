---
title: URL.createObjectURL()
slug: Web/API/URL/createObjectURL_static
---

{{ApiRef("URL")}}{{SeeCompatTable}}

## Определение

**`URL.createObjectURL()`** - статический метод, который создаёт {{domxref("DOMString")}}, содержащий URL с указанием на объект, заданный как параметр. Время жизни URL связано с {{domxref("document")}} окна в котором он был создан. Новый URL объект может представлять собой {{domxref("File")}} объект или {{domxref("Blob")}} объект.

{{AvailableInWorkers}}

## Синтаксис

```
objectURL = URL.createObjectURL(blob);
```

## Параметры

- _blob_
  - : Объект типа {{domxref("File")}} или {{domxref("Blob")}} для которого создаётся URL объект.

## Пример

Смотрите [Using object URLs to display images](/ru/docs/Using_files_from_web_applications#Example_Using_object_URLs_to_display_images).

## Примечания

При каждом вызове `createObjectURL()`, создаётся новый URL объект, даже если он уже был ранее создан для того же самого объекта. Память для каждого из них нужно освобождать с помощью {{domxref("URL.revokeObjectURL()")}}, в том случае, если они больше не нужны. Браузер сделает это автоматически с выгрузкой объекта, тем не менее в целях оптимизации производительности и использования памяти, следует принудительно выгружать их по возможности.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{domxref("URL.revokeObjectURL()")}}
- [Using files from web applications](/ru/docs/Using_files_from_web_applications)
