---
title: Document.getElementsByName()
slug: Web/API/Document/getElementsByName
---

{{APIRef("DOM")}}

Метод **`getElementsByName()`** объекта {{domxref("Document")}} возвращает коллекцию {{domxref("NodeList")}} элементов с заданным {{domxref("element.name","name")}}.

## Синтаксис

```
var elements = document.getElementsByName(name);
```

- _elements_ — это живая {{domxref("NodeList")}} коллекция. То есть, она автоматически обновляется, когда элементы с таким же `name` добавляются/удаляются из документа.
- _name _— это значение поля `name` элемента(элементов).

## Пример

```html
<!doctype html>
<html lang="en">
  <title>Example: using document.getElementsByName</title>

  <input type="hidden" name="up" />
  <input type="hidden" name="down" />

  <script>
    var up_names = document.getElementsByName("up");
    console.log(up_names[0].tagName); // displays "INPUT"
  </script>
</html>
```

## Notes

The {{domxref("element.name","name")}} attribute can only be applied in (X)HTML documents.

The returned {{domxref("NodeList")}} Collection contains _all_ elements with the given `name`, such as {{htmlelement("meta")}}, {{htmlelement("object")}}, and even elements which do not support the `name` attribute at all.

> **Предупреждение:** The **getElementsByName** method works differently in IE10 and below. There, `getElementsByName()` also returns elements that have an [`id` attribute](/ru/docs/Web/HTML/Global_attributes/id) with the specified value. Be careful not to use the same string as both a `name` and an `id`.

> **Предупреждение:** The **getElementsByName** method works differently in IE. There, `getElementsByName()` does not return all elements which may not have a `name` attribute (such as `<span>`).

> **Предупреждение:** Both IE and Edge return an {{domxref("HTMLCollection")}}, not a {{domxref("NodeList")}}

## Specifications

{{Specifications}}

## Browser compatibility

{{Compat}}

## See also

- {{domxref("document.getElementById()")}} to return a reference to an element by its unique `id`
- {{domxref("document.getElementsByTagName()")}} to return references to elements with the same [tag name](/ru/docs/Web/API/Element/tagName)
- {{domxref("document.querySelector()")}} to return references to elements via CSS selectors like `'div.myclass'`
