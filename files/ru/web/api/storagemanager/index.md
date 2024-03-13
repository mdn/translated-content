---
title: StorageManager
slug: Web/API/StorageManager
---

{{securecontext_header}}{{SeeCompatTable}}{{APIRef("Storage")}}

**`StorageManager`** является частью [Storage API](/ru/docs/Web/API/Storage_API) и предоставляет интерфейс для управления правами на хранение данных и для получения объёма данных, доступного для хранения. Доступ к интерфейсу можно получить через {{domxref("navigator.storage")}} или через {{domxref("WorkerNavigator.storage")}}.

## Методы

- {{domxref("StorageManager.estimate()")}} {{securecontext_inline}}
  - : Возвращает объект {{domxref("StorageEstimate")}}, который содержит используемый и максимальный объем данных (квоту) для вашего сайта.
- {{domxref("StorageManager.persist()")}} {{securecontext_inline}}
  - : Возвращает {{jsxref('Promise')}}, который принимает значение `true` в случае, когда браузер имеет возможность хранить данные вашего сайта.
- {{domxref("StorageManager.persisted()")}} {{securecontext_inline}}
  - : Возвращает {{jsxref('Promise')}}, который принимает значение `true` в случае, когда сайт получил возможность хранить данные в браузере.

## Спецификация

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
