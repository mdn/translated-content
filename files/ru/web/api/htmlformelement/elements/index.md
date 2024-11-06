---
title: "HTMLFormElement: свойство elements"
slug: Web/API/HTMLFormElement/elements
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{APIRef("HTML DOM")}}

Свойство **`elements`** интерфейса {{domxref("HTMLFormElement")}} возвращает список {{domxref("HTMLFormControlsCollection")}}, содержащий все элементы управления {{HTMLElement("form")}}.

Для получения только количества элементов управления формы можно использовать свойство {{domxref("HTMLFormElement.length")}}.

Для получения доступа к определенному элементу управления в возвращаемой коллекции используйте индекс или атрибуты `name` и `id`.

До HTML 5 возвращаемым объектом был {{domxref("HTMLCollection")}}, на котором основан `HTMLFormControlsCollection`.

> [!NOTE]
> Аналогичным образом можно получить список всех форм, содержащихся в документе, используя свойство документа {{domxref("Document.forms", "forms")}}.

## Значение

{{domxref("HTMLFormControlsCollection")}}, которое содержит все элементы управления, не являющиеся изображениями.
Это «живой» список, если у формы добавляются или удаляются элементы, то список обновляется.

Элементы управления в возвращаемом списке расположены в порядке, в котором они появляются в форме, после предварительного порядка обхода дерева в глубину. Это называется **порядок дерева**.

Возвращаются только следующе элементы:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}} (за исключением элементов, у которых атрибут [`type`](/ru/docs/Web/HTML/Element/input#type) равен `"image"`, по историческим причинам)
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

## Примеры

### Простой пример синтаксиса

В этом примере мы получаем список элементов управления формы, а также доступ к его членам по индексу, имени или идентификатору.

```html
<form id="my-form">
  <label>
    Username:
    <input type="text" name="username" />
  </label>
  <label>
    Full name:
    <input type="text" name="full-name" />
  </label>
  <label>
    Password:
    <input type="password" name="password" />
  </label>
</form>
```

```js
const inputs = document.getElementById("my-form").elements;
const inputByIndex = inputs[0];
const inputByName = inputs["username"];
```

### Доступ к элементам управления

В этом примере мы получаем список элементов формы, а затем выполняем поиск элементов {{HTMLElement("input")}} c типом {{HTMLElement("input/text")}}, чтобы обработать их.

```js
const inputs = document.getElementById("my-form").elements;

// Получаем элементы формы
for (let i = 0; i < inputs.length; i++) {
  if (inputs[i].nodeName === "INPUT" && inputs[i].type === "text") {
    // Изменяем значение
    inputs[i].value.toLocaleUpperCase();
  }
}
```

### Отключение элементов управления

```js
const inputs = document.getElementById("my-form").elements;

// Получаем элементы формы
for (let i = 0; i < inputs.length; i++) {
  // Отключаем все элементы формы
  inputs[i].setAttribute("disabled", "");
}
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
