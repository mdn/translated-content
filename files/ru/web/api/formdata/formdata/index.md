---
title: FormData()
slug: Web/API/FormData/FormData
---

{{APIRef("XMLHttpRequest")}}

Конструктор **`FormData()`** создаёт новые объект {{domxref("FormData")}}, если проще - HTML-форму**.**

## Синтаксис

```js
var formData = new FormData(form);
```

### Параметры

- `form` {{optional_inline}}
  - : Существующая HTML-форма, на основе которой будет создана новая. Если ничего не указано, будет создана пустая форма.

## Пример

```html
<form name="test">
  <input type="text" name="code" value="12345" />
  <input type="submit" value="Отправить" />
</form>
```

```js
var oldForm = document.forms.test,
  formData = new FormData(oldForm);
console.log(formData.get("code"), formData === oldForm);
```

### Методы

> **Примечание:** Подробнее о каждом методе можно прочитать, выбрав его в колонке слева.

Добавление нового текстового поля в форму:

```js
formData.append(name, value, filename);
```

Удаление элемента формы:

```js
formData.delete(name);
```

Получение значения элемента формы:

```js
formData.get(name);
```

Проверка на наличие определённого элемента формы:

```js
formData.has(name);
```

Изменение существующего элемента:

```js
formData.set(name, value, filename);
```

## Спецификация

{{Specifications}}

## Поддержка браузерами

{{Compat}}
