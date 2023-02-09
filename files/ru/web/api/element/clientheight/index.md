---
title: Element.clientHeight
slug: Web/API/Element/clientHeight
translation_of: Web/API/Element/clientHeight
---

{{ APIRef("DOM") }}

**`Element.clientHeight`** - свойство, доступное только для чтения. Для элементов без CSS-стилей, или элементов каркаса строчной разметки - значение равно нулю. Для остальных элементов - значение равно внутренней высоте элемента в пикселах, включая пространство между содержимым элемента и его границей (padding), но исключая высоту полосы горизонтальной прокрутки, и ширину отступа от границы элемента до родительского элемента (margin).

Значение `clientHeight` может быть вычислено по формуле CSS `height` + CSS `padding` - высота горизонтального скролла (если присутствует).

> **Примечание:** При вычислении значения свойства, результат округляется до ближайшего целого. Если требуется дробное значение, используйте {{ domxref("element.getBoundingClientRect()") }}.

## Синтаксис

```
var h = element.clientHeight;
```

`h` - целочисленное значение высоты элемента в пикселях.

## Пример

![Image:Dimensions-client.png](/@api/deki/files/185/=Dimensions-client.png)

## Спецификация

| Спецификация                                                                                     | Статус                           | Примечание |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ---------- |
| {{SpecName('CSSOM View', '#dom-element-clientheight', 'clientHeight')}} | {{Spec2('CSSOM View')}} |            |

### К сведению

Свойство `clientHeight` впервые было представлено в объектной модели Internet Explorer.

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- {{domxref("HTMLElement.offsetHeight")}}
- {{domxref("Element.scrollHeight")}}
- [Determining the dimensions of elements](/ru/docs/Determining_the_dimensions_of_elements)
