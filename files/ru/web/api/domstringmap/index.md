---
title: DOMStringMap
slug: Web/API/DOMStringMap
---

{{ APIRef("HTML DOM") }}

Used by the [`dataset`](/ru/docs/Web/HTML/Global_attributes#dataset) HTML attribute to represent data for custom attributes added to elements.

## Доступные методы

| `DOMString getDataAttr(in DOMString prop);`                |
| ---------------------------------------------------------- |
| `boolean hasDataAttr(in DOMString prop);`                  |
| `void removeDataAttr(in DOMString prop);`                  |
| `void removeProp(in nsIAtom attr);`                        |
| `void setDataAttr(in DOMString prop, in DOMString value);` |

## Методы

### hasDataAttr()

```
boolean hasDataAttr(
  in DOMString prop
);
```

#### Аргументы

- `prop`
  - : The property for which to check for the existence of a value.

#### Возвращаемое значение

`true` if the property exists; otherwise `false`.

### removeDataAttr()

```
void removeDataAttr(
  in DOMString prop
);
```

#### Parameters

- `prop`
  - : The property to remove from the data set.

### removeProp()

Removes the property from the dataset object. Used to update the dataset object when data-\* attribute has been removed from the element.

```
void removeProp(
  in nsIAtom attr
);
```

#### Parameters

- `attr`
  - : The property to remove from the dataset.

## Поддержка браузерами

{{Compat}}

## Смотрите также

- {{ domxref("HTMLElement.dataset") }}
- [`dataset`](/ru/docs/Web/HTML/Global_attributes#dataset)
