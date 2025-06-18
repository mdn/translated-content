---
title: FormData.get()
slug: Web/API/FormData/get
---

{{AvailableInWorkers}}

{{APIRef("XMLHttpRequest API")}}

Метод get() из интерфейса {{domxref("FormData")}} возвращает первое значение, связанное с переданным ключом из объекта FormData. Если вы ожидаете множественные значения и хотите получить их все, используйте метод getAll().

## Синтаксис

```
formData.get(name);
```

### Параметры

- `name`
  - : {{domxref("USVString")}} строка, являющаяся именем ключа, значение которого вы хотите получить.

### Возвращаемое значение

Значение из {{domxref("FormDataEntryValue")}}.

## Пример

Следующий код создаёт пустой объект `FormData`:

```js
var formData = new FormData();
```

Если мы добавим два значения `username,` используя {{domxref("FormData.append")}}:

```js
formData.append("username", "Борис");
formData.append("username", "Кирилл");
```

То метод `get()` вернёт только первое добавленное значение `username`:

```js
formData.get("username"); // Вернёт "Борис"
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("XMLHTTPRequest")}}
- [Использование XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Использование FormData objects](/ru/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
