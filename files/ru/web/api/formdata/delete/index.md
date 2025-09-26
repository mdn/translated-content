---
title: FormData.delete()
slug: Web/API/FormData/delete
---

{{AvailableInWorkers}}

{{APIRef("XMLHttpRequest API")}}

Метод **`delete()`** интерфейса {{domxref("FormData")}} удаляет ключ и его значение(-ия) из объекта `FormData`.

## Синтаксис

```js
formData.delete(name);
```

### Параметры

- `name`
  - : Имя ключа для удаления.

### Возвращает

Нет.

## Пример

Следующий код создаёт объект `FormData` и заполняет его парами "ключ"/"значение" из формы:

```js
var formData = new FormData(myForm);
```

Вы можете удалить пару "ключ"/"значение" используя `delete()`:

```js
formData.delete("username");
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/ru/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Using FormData objects](/ru/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects)
- {{HTMLElement("Form")}}
