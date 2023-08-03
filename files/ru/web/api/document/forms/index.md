---
title: Document.forms
slug: Web/API/Document/forms
---

{{APIRef("DOM")}}

`forms` возвращает коллекцию ({{domxref("HTMLCollection")}}) форм в текущем документе

> **Примечание:** Точно также Вы можете получить список элементов выбранной формы, используя свойство {{domxref("HTMLFormElement.elements")}}.

## Синтаксис

```
collection = document.forms;
```

### Значение

Объект {{domxref("HTMLCollection")}} содержит все формы, имеющиеся на странице. Каждый элемент этой коллекции - это {{domxref("HTMLFormElement")}}, представленный отдельным тегом `<form>`.

Если на странице форм нет, тогда возвращённый результат будет пустым, а длина коллекции равна нулю.

## Примеры

### Получение информации с формы

```
<!DOCTYPE html>
<html lang="en">

<head>
<title>document.forms example</title>
</head>

<body>

<form id="robby">
  <input type="button" onclick="alert(document.forms[0].id);" value="robby's form" />
</form>

<form id="dave">
  <input type="button" onclick="alert(document.forms[1].id);" value="dave's form" />
</form>

<form id="paul">
  <input type="button" onclick="alert(document.forms[2].id);" value="paul's form" />
</form>

</body>
</html>
```

### Получение элемента формы

```
var selectForm = document.forms[index];
var selectFormElement = document.forms[index].elements[index];
```

### Обращение к форме по её имени

```
<!DOCTYPE html>
<html lang="en">
<head>
  <title>document.forms example</title>
</head>

<body>

<form name="login">
  <input name="email" type="email">
  <input name="password" type="password">
  <button type="submit">Log in</button>
</form>

<script>
  var loginForm = document.forms.login; // Or document.forms['login']
  loginForm.elements.email.placeholder = 'test@example.com';
  loginForm.elements.password.placeholder = 'password';
</script>
</body>
</html>
```

## Спецификации

{{Specifications}}

## Браузерная поддержка

{{Compat}}

## Смотрите также

- [HTML forms](/ru/docs/Learn/HTML/Forms)
- {{HTMLElement("form")}} и интерфейс {{domxref("HTMLFormElement")}}

{{APIRef("DOM")}}

-
