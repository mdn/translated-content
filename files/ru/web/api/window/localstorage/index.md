---
title: Window.localStorage
slug: Web/API/Window/localStorage
---

{{APIRef("Web Storage API")}}

Свойство **`localStorage`** позволяет получить доступ к {{domxref("Storage")}} объекту. `localStorage` аналогично свойству [`sessionStorage`](/ru/docs/Web/API/Window.sessionStorage). Разница только в том, что свойство `sessionStorage` хранит данные в течение сеанса (до закрытия браузера), в отличие от данных, находящихся в свойстве `localStorage`, которые не имеют ограничений по времени хранения и могут быть удалены только с помощью JavaScript.

Следует отметить, что данные, сохранённые как в `localStorage`, так и в `sessionStorage`, являться специфичными для протокола страницы.

Ключи и значения **всегда строки** (так же, как и объекты, целочисленные ключи автоматически будут преобразованы в строки).

## Синтаксис

```js
myStorage = window.localStorage;
```

### Значение

Объект {{DOMxRef("Storage")}}, который используется для доступа к текущему локальному хранилищу.

### Исключения

- `SecurityError`
  - : Запрос к хранилищу нарушает разрешение политик, либо источник для хранения [не является корректной комбинацией схема/хост/порт](/ru/docs/Web/Security/Same-origin_policy#Definition_of_an_origin) (такое может произойти, если источником для хранения является `file:` или `data:` схемы, например). Как ещё один пример появления ошибки, пользователь через конфигурацию браузера запретил хранение данных для некоторых источников.

## Пример

Следующий код показывает пример доступа к локальному объекту {{DOMxRef("Storage")}} для текущего домена и добавляет данные в него с помощью {{DOMxRef("Storage.setItem()")}}.

```js
localStorage.setItem("myCat", "Tom");
```

Считывать данные из localStorage для определённого ключа, можно следующим образом:

```js
let cat = localStorage.getItem("myCat");
```

Удалять данные можно так:

```js
localStorage.removeItem("myCat"); // вернёт undefined
```

Для удаления всех записей, то есть полной очистки `localStorage`, используйте:

```js
localStorage.clear();
```

> **Примечание:** Пожалуйста, обратитесь к статье [Using the Web Storage API](/ru/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API) для более подробных примеров.

## Спецификации

{{Specifications}}

## Поддержка браузерами

{{Compat}}

Все браузеры имеют различный уровень объёма для `localStorage` и `sessionStorage`. Здесь [подробное описание объёма хранилищ для разных браузеров](http://dev-test.nemikor.com/web-storage/support-test/).

## Смотрите также

- [Использование Web Storage API](/ru/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- Локальное хранилище с [Window.localStorage](/ru/docs/Web/API/Web_Storage_API/Local_storage)
- {{DOMxRef("Window.sessionStorage")}}
