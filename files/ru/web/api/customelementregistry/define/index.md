---
title: Document.registerElement()
slug: Web/API/CustomElementRegistry/define
---

{{APIRef("DOM")}}

Метод **`Document.registerElement()`** регистрирует новый кастомный элемент ([custom element](/ru/docs/Web/Web_Components/Custom_Elements)) в браузере и возвращает конструктор для этого нового элемента.

> **Примечание:** Это экспериментальная технология. Браузер который вы используете должен поддерживать Веб Компоненты (Web Components). Смотри больше: [Enabling Web Components in Firefox](/ru/docs/Web/Web_Components#Enabling_Web_Components_in_Firefox).

> **Примечание:** Устарело. Используйте интерфейс [CustomElementRegistry](/ru/docs/Web/API/CustomElementRegistry) и его метод [define()](/ru/docs/Web/API/CustomElementRegistry/define), чтобы зарегистрировать новый Тег.

## Syntax

```
var constructor = document.registerElement(tag-name, options);
```

### Parameters

- _tag-name_
  - : Имя кастомного элемента. Имя должно содержать символ дефиса (-), например: `my-tag`.
- _options {{optional_inline}}_
  - : An object that names the prototype to base the custom element on, and an existing tag to extend. Both of these are optional.

## Example

Here is a very simple example:

```js
var Mytag = document.registerElement("my-tag");
```

Now the new tag is registered in the browser. The `Mytag` variable holds a constructor that you can use to create a `my-tag` element in the document as follows:

```js
document.body.appendChild(new Mytag());
```

This inserts an empty `my-tag` element that will be visible if you use the browser's developer tools. It will not be visible if you use the browser's view source capability. And it won't be visible in the browser unless you add some content to the tag. Here is one way to add content to the new tag:

```js
var mytag = document.getElementsByTagName("my-tag")[0];
mytag.textContent = "I am a my-tag element.";
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Метод [CustomElementRegistry.define](/ru/docs/Web/API/CustomElementRegistry/define)
