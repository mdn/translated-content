---
title: URLSearchParams.delete()
slug: Web/API/URLSearchParams/delete
---

{{ApiRef("URL API")}}

Метод **`delete()`** интерфейса {{domxref("URLSearchParams")}} удаляет все указанные параметры и все связанные с ним значения из списка найденных параметров.

{{availableinworkers}}

## Синтаксис

```
URLSearchParams.delete(name)
```

### Параметры

- name
  - : Название удаляемого параметра.

### Возвращаемое значение

Void

## Примеры

```js
let url = new URL("https://example.com?foo=1&bar=2&foo=3");
let params = new URLSearchParams(url.search.slice(1));

// Удалить параметр foo.
params.delete("foo"); //Строка запроса теперь: 'bar=2'
```

## Спецификация

{{Specifications}}

## Совместимые браузеры

{{Compat}}
