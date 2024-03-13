---
title: Element
slug: Web/API/Element
---

{{ APIRef("DOM") }}

Интерфейс **`Element`** представляет собой один из объектов в {{domxref("Document")}}. Этот интерфейс описывает методы и свойства, общие для всех видов элементов. Конкретные модели поведения описаны в интерфейсах, которые наследуют от `Element`, и добавляют дополнительную функциональность.

Например, интерфейс {{domxref("HTMLElement")}} является базовым интерфейсом для HTML-элементов, в то время как интерфейс {{domxref("SVGElement")}} является основой для всех SVG-элементов.

Языки, находящиеся вне области веб-платформы, также используют его. Например, `XUL` — через `интерфейс XULElement`.

{{InheritanceDiagram}}

## Свойства

_Наследует свойства от родительского узла {{domxref("Node")}} и от собственного родителя {{domxref("EventTarget")}} и реализует свойства {{domxref("ParentNode")}}, {{domxref("ChildNode")}}, {{domxref("NonDocumentTypeChildNode")}},_ and {{domxref("Animatable")}}.

- {{ domxref("Element.assignedSlot")}} {{experimental_inline}} {{readOnlyInline}}
  - : Возвращает {{domxref("HTMLSlotElement")}} интерфейс, связанный с элементом.
- {{ domxref("Element.attributes") }} {{readOnlyInline}}
  - : Возвращает {{ domxref("NamedNodeMap") }}, в котором перечислены все атрибуты связанные с элементом.
- {{ domxref("Element.classList") }} {{readOnlyInline}}
  - : Возвращает {{ domxref("DOMTokenList") }} содержащий список атрибутов класса.
- {{ domxref("ParentNode.childElementCount") }}
  - : Это {{jsxref("Number")}} представляющее число дочерних узлов, представленных в элементе.
- {{ domxref("ParentNode.children") }}
  - : Is a live {{ domxref("HTMLCollection") }}, содержащая все дочерние элементы, в виде коллекции.
- {{ domxref("Element.className") }}
  - : Это {{domxref("DOMString")}}, представляющая класс элемента.
- {{ domxref("Element.clientHeight") }} {{experimental_inline}} {{readOnlyInline}}
  - : Возвращает {{jsxref("Number")}}, представляющее внутреннюю высоту элемента.
- {{ domxref("Element.clientLeft") }} {{experimental_inline}} {{readOnlyInline}}
  - : Возвращает {{jsxref("Number")}}, представляющее ширину левой границы элемента.
- {{ domxref("Element.clientTop") }} {{experimental_inline}} {{readOnlyInline}}
  - : Возвращает {{jsxref("Number")}}, представляющее ширину верхней границы элемента.
- {{ domxref("Element.clientWidth") }} {{experimental_inline}} {{readOnlyInline}}
  - : Возвращает {{jsxref("Number")}}, представляющее внутреннюю ширину элемента.
- {{ domxref("ParentNode.firstElementChild") }}
  - : Возвращает {{ domxref("Element") }}, первый дочерний элемент элемента или `null`, если у элемента нет дочерних элементов.
- {{ domxref("Element.id") }}
  - : Возвращает {{domxref("DOMString")}}, представляющий идентификатор (Id) элемента.
- {{ domxref("Element.innerHTML") }} {{experimental_inline}}
  - : Является {{domxref("DOMString")}}, представляющей разметку контента элемента.
- {{domxref("Element.namespaceURI")}} {{readonlyInline}}

  - : Пространство имён URI элемента или null, если это не пространство имён.

    > **Примечание:** В Firefox версии 3.5 и ранее, HTML-элементы не находятся в пространстве имён. В более поздних версиях, HTML-элементы находятся в пространстве имён [`http://www.w3.org/1999/xhtml`](http://www.w3.org/1999/xhtml) как в деревьях HTML, так и XML.

- {{ domxref("ParentNode.lastElementChild") }}
  - : Является {{ domxref("Element") }}, последним непосредственным дочерним элементом данного элемента, или `null`, если у элемента нет дочерних элементов.
- {{ domxref("NonDocumentTypeChildNode.nextElementSibling") }}
  - : Является {{ domxref("Element") }}, элементом, непосредственно следующим за данным в древе, или `null`, если соседний элемент отсутствует.
- {{ domxref("Element.outerHTML") }} {{experimental_inline}}
  - : Является {{domxref("DOMString")}}, представляющей разметку элемента, включая его контент. При использовании в качестве сеттера заменяет элемент узлами, структурированными из указанной строки.
- {{ domxref("NonDocumentTypeChildNode.previousElementSibling") }}
  - : Является {{ domxref("Element") }}, элементом, непосредственно предшествующим в древе данному, или `null`, если соседний элемент отсутствует.
- {{ domxref("Element.scrollHeight") }} {{experimental_inline}} {{readOnlyInline}}
  - : Возвращает {{jsxref("Number")}}, представляющее высоту прокрутки элемента.
- {{ domxref("Element.scrollLeft") }} {{experimental_inline}}
  - : Является {{jsxref("Number")}}, представляющим количество пикселей, на которые контент элемента прокручен влево.
- {{ domxref("Element.scrollLeftMax") }} {{non-standard_inline}} {{readOnlyInline}}
  - : Возвращает {{jsxref("Number")}}, представляющее максимально возможное количество пикселей, на которые можно прокрутить контент элемента влево.
- {{ domxref("Element.scrollTop") }} {{experimental_inline}}
  - : Является {{jsxref("Number")}}, представляющим количество пикселей, на которые контент элемента прокручен от верха.
- {{ domxref("Element.scrollTopMax") }} {{non-standard_inline}} {{readOnlyInline}}
  - : Возвращает {{jsxref("Number")}}, представляющее максимально возможное количество пикселей, на которые можно прокрутить контент элемента от верха.
- {{ domxref("Element.scrollWidth") }} {{experimental_inline}} {{readOnlyInline}}
  - : Возвращает {{jsxref("Number")}}, представляющее ширину прокрутки элемента.
- {{domxref("Element.shadowRoot") }} {{experimental_inline}} {{readOnlyInline}}
  - : ...
- {{ domxref("Element.tagName") }} {{readOnlyInline}}
  - : Возвращает {{domxref("String")}} с именем тега указанного элемента.
- {{ domxref("Element.undoManager")}} {{experimental_inline}} {{readOnlyInline}}
  - : Returns the {{domxref("UndoManager")}} associated with the element.
- {{ domxref("Element.undoScope")}} {{experimental_inline}}
  - : Представляет собой {{jsxref("Boolean")}}, указывающим, является элемент undo scope host, или нет.

> **Примечание:** В DOM3 `namespaceURI`, `localName` и `prefix` определялись в интерфейсе {{domxref("Node")}}. В DOM4 они были перенесены в `Element`.
>
> Данное изменение поддерживается в Chrome начиная с версии 46.0 и в Firefox с версии 48.0.

### Обработчики событий

- {{ domxref("Element.ongotpointercapture") }}
  - : Возвращает обработчик событий для событий типа {{event("gotpointercapture")}}.
- {{ domxref("Element.onlostpointercapture") }}
  - : Возвращает обработчик событий для событий типа {{event("lostpointercapture")}}.

#### Устаревшие обработчики событий

- {{ domxref("Element.onwheel") }} {{ non-standard_inline() }}
  - : Возвращает код обработчика для события `wheel`.
    **Сейчас реализован в {{domxref("GlobalEventHandlers.onwheel", "GlobalEventHandlers")}}.**

## Методы

_Наследует методы от своих родителей {{domxref("Node")}}, и своего собственного родителя {{domxref("EventTarget")}}_, и реализует методы {{domxref("ParentNode")}}, {{domxref("ChildNode")}}_, {{domxref("NonDocumentTypeChildNode")}},_ _и {{domxref("Animatable")}}._

- {{ domxref("EventTarget.addEventListener()") }}
  - : Регистрирует обработчик событий для определённого типа событий в элементе.
- {{ domxref("Element.closest()")}} {{experimental_inline}}
  - : Возвращает {{domxref("Element")}}, потомка этого элемента (или сам этот элемент), который является ближайшим предком элементов, выбранных селекторами, указанными в параметре.
- {{ domxref("Element.createShadowRoot()")}} {{experimental_inline}}
  - : …
- {{ domxref("EventTarget.dispatchEvent()") }}
  - : Отправляет событие для этого узла в DOM и возвращает {{jsxref("Boolean")}}, который указывает, что по крайней мере один обработчик не отменил его.
- {{domxref("Element.find()")}}{{experimental_inline}}
  - : ...
- {{domxref("Element.findAll()")}}{{experimental_inline}}
  - : ...
- {{domxref("Animatable.getAnimationPlayers()")}} {{experimental_inline}}
  - : …
- {{ domxref("Element.getAttribute()") }}
  - : Извлекает значение именованного атрибута из текущего узла и возвращает его в виде{{jsxref("Object")}}.
- {{ domxref("Element.getAttributeNS()") }}
  - : Извлекает значение атрибута с указанным именем и пространством имён из текущего узла и возвращает его как {{jsxref("Object")}}.
- {{ domxref("Element.getAttributeNode()") }}
  - : Извлекает представление узла именованного атрибута из текущего узла и возвращает его в виде {{ domxref("Attr") }}.
- {{ domxref("Element.getAttributeNodeNS()") }}
  - : Извлекает представление узла атрибута с указанным именем и пространством имён из текущего узла и возвращает его в виде {{ domxref("Attr") }}.
- {{ domxref("Element.getBoundingClientRect()") }} {{experimental_inline}}
  - : ...
- {{ domxref("Element.getClientRects()") }} {{experimental_inline}} TYPE of returnvalue????
  - : Returns a collection of rectangles that indicate the bounding rectangles for each line of text in a client.
- {{domxref("Element.getDestinationInsertionPoints()")}} {{experimental_inline}}
  - : …
- {{ domxref("Element.getElementsByClassName()") }}
  - : Возвращает коллекцию {{ domxref ("HTMLCollection")}}, которая содержит все элементы, у которых название класса совпадает с тем, что заданно в параметрах функции.
- {{ domxref("Element.getElementsByTagName()") }}
  - : Возвращает коллекцию {{ domxref ("HTMLCollection")}}, которая содержит все элементы, у которых название тега совпадает с тем, что заданно в параметрах функции.
- {{ domxref("Element.getElementsByTagNameNS()") }}
  - : Возвращает коллекцию {{ domxref ("HTMLCollection")}}, которая содержит все элементы, у которых название тега и пространства имён совпадает с тем, что заданно в параметрах функции.
- {{ domxref("Element.hasAttribute()") }}
  - : Возвращает {{jsxref("Boolean")}}, указывающее, имеет элемент определённый атрибут, или нет.
- {{ domxref("Element.hasAttributeNS()") }}
  - : Возвращает {{jsxref("Boolean")}}, указывающий, имеет элемент определённый атрибут в определённом пространстве имён, или нет.
- {{ domxref("Element.insertAdjacentHTML") }} {{experimental_inline}}
  - : Анализирует текст как HTML или XML и вставляет полученные узлы в указанную позицию дерева элементов.
- {{ domxref("Element.matches()") }} {{experimental_inline}}
  - : Возвращает {{jsxref ("Boolean")}}, указывающий, будет ли элемент выбран указанной строкой селектора.
- {{ domxref("Element.querySelector()") }}
  - : Возвращает первый {{DOMxRef ("Node")}}, который соответствует указанной строке селектора элемента.
- {{ domxref("Element.querySelectorAll") }}
  - : Возвращает список {{DOMxRef ("NodeList")}} узлов, которые соответствуют указанной строке селектора элемента.
- {{ domxref("Element.releasePointerCapture")}} {{experimental_inline}}
  - : Позволяет понять, имеет ли элемент с указанным ID захват указателя для указателя
- {{domxref("ChildNode.remove()")}}
  - : Удаляет элемент из списка дочерних элементов родительского элемента.
- {{ domxref("Element.removeAttribute()") }}
  - : Удаляет именованный атрибут из текущего узла.
- {{ domxref("Element.removeAttributeNS()") }}
  - : Удаляет атрибут с указанным именем и пространством имён, из текущего узла.
- {{ domxref("Element.removeAttributeNode()") }}
  - : Удаляет представление узла именованного атрибута из текущего узла.
- {{ domxref("EventTarget.removeEventListener()") }}
  - : Удаляет обработчик событий из элемента.
- {{ domxref("Element.requestFullscreen()") }} {{experimental_inline}}
  - : Асинхронно запрашивает браузер, чтобы сделать элемент полноэкранным.
- {{ domxref("Element.requestPointerLock()")}} {{experimental_inline}}
  - : Позволяет асинхронно запрашивать блокировку указателя для данного элемента.

<!---->

- {{ domxref("Element.scrollIntoView()") }} {{experimental_inline}}
  - : Прокручивает страницу до тех пор, пока элемент не попадёт в представление.
- {{ domxref("Element.setAttribute()") }}
  - : Устанавливает значение именованного атрибута из текущей узла.
- {{ domxref("Element.setAttributeNS()") }}
  - : Устанавливает значение атрибута с определённым именем и пространством имён из текущей узла.
- {{ domxref("Element.setAttributeNode()") }}
  - : Задаёт представление узла именованного атрибута из текущего узла.
- {{ domxref("Element.setAttributeNodeNS()") }}
  - : Установите представление узла атрибута с указанным именем и пространством имён из текущего узла.
- {{ domxref("Element.setCapture()") }} {{non-standard_inline}}
  - : Настройка захвата событий мыши, перенаправление всех событий мыши на этот элемент.
- {{domxref("Element.setPointerCapture()")}}
  - : Определяет указанный элемент как цель захвата будущих событий указателя.

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
