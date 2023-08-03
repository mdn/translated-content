---
title: FormData.delete()
slug: Web/API/FormData/delete
---

{{APIRef("XMLHttpRequest")}}

Метод **`delete()`** интерфейса {{domxref("FormData")}} удаляет ключ и его значение(-ия) из объекта `FormData`.

> **Примечание:** Этот метод доступен в [Web Workers](/ru/docs/Web/API/Web_Workers_API).

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

## See also

- {{domxref("XMLHTTPRequest")}}
- [Using XMLHttpRequest](/ru/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest)
- [Using FormData objects](/ru/docs/DOM/XMLHttpRequest/FormData/Using_FormData_Objects)
- {{HTMLElement("Form")}}
