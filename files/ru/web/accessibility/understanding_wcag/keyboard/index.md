---
title: Русский
slug: Web/Accessibility/Understanding_WCAG/Keyboard
---

Чтобы веб-страница была полностью доступной, она должна быть управляема кем-то, кто использует только клавиатуру для доступа к ней и управления ею. Сюда входят пользователи программ чтения с экрана, но также могут быть пользователи, у которых есть проблемы с использованием указывающего устройства, такого как мышь или трекбол, или у которых мышь не работает в данный момент, или которые просто предпочитают использовать клавиатуру для ввода, когда это возможно.

Фокусируемые элементы должны иметь интерактивную семантику

Если элемент можно сфокусировать с помощью клавиатуры, он должен быть интерактивным; то есть пользователь должен иметь возможность что-то сделать с ним и произвести какое-либо изменение (например, активировать ссылку или изменить параметр).

> **Примечание:** One important exception to this rule is if the element has `role="document"` applied to it, **inside** an interactive context (such as `role="application"`). In such a case, focusing the nested document is the only way of returning assistive technology to a non-interactive state (often called "browse mode").

Most interactive elements are focusable by default; you can make an element focusable by adding a `tabindex=0` attribute value to it. However, you should only add `tabindex` if you have also made the element interactive, for example, by defining appropriate event handlers keyboard events.

### See also

- [tabindex](/ru/docs/Web/HTML/Global_attributes/tabindex) global HTML attribute
- Global event handlers: [onkeydown](/ru/docs/Web/API/GlobalEventHandlers/onkeydown)
- Global event handlers: [onkeyup](/ru/docs/Web/API/GlobalEventHandlers/onkeyup)

## Avoid using `tabindex` attribute greater than zero

The `tabindex` attribute indicates that an element is focusable using the keyboard. A value of zero indicates that the element is part of the default focus order, which is based on the ordering of elements in the HTML document. A positive value puts the element ahead of those in the default ordering; elements with positive values are focused in the order of their `tabindex` values (1, then 2, then 3, etc.).

This creates confusion for keyboard-only users when the focus order differs from the logical order of the page. A better strategy is to structure the HTML document so that focusable elements are in a logical order, without the need to re-order them with positive `tabindex` values.

### See also

- [tabindex](/ru/docs/Web/HTML/Global_attributes/tabindex) global HTML attribute
- [Understanding focus order](https://www.w3.org/WAI/WCAG21/Understanding/focus-order.html)
- [Don't use tabindex greater than 0](http://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html)

## Clickable elements must be focusable and should have interactive semantics

If an element can be clicked with a pointing device, such as a mouse, then it should also be focusable using the keyboard, and the user should be able to do something by interacting with it.

An element is clickable if it has an `onclick` event handler defined. You can make it focusable by adding a `tabindex=0` attribute value to it. You can make it operable with the keyboard by defining an `onkeydown` event handler; in most cases, the action taken by event handler should be the same for both types of events.

### See also

- [tabindex](/ru/docs/Web/HTML/Global_attributes/tabindex) global HTML attribute
- Global event handlers: [onkeydown](/ru/docs/Web/API/GlobalEventHandlers/onkeydown)
- Global event handlers: [onkeyup](/ru/docs/Web/API/GlobalEventHandlers/onkeyup)

## Interactive elements must be able to be activated using a keyboard

If the user can interact with an element using touch or a pointing device, then the element should also support interacting using the keyboard. That is, if you have defined event handlers for touch or click events, you should also define them for keyboard events. The keyboard event handlers should enable the effectively the same interaction as the touch or click handlers.

### See also

- Global event handlers: [onkeydown](/ru/docs/Web/API/GlobalEventHandlers/onkeydown)
- Global event handlers: [onkeyup](/ru/docs/Web/API/GlobalEventHandlers/onkeyup)

## Interactive elements must be focusable

If the user can interact with an element (for example, using touch or a pointing device), then it should be focusable using the keyboard. You can make it focusable by adding a `tabindex=0` attribute value to it. That will add the element to the list of elements that can be focused by pressing the <kbd>Tab</kbd> key, in the sequence of such elements as defined in the HTML document.

### See also

- [tabindex](/ru/docs/Web/HTML/Global_attributes/tabindex) global HTML attribute

## Focusable element must have focus styling

Any element that can receive keyboard focus should have visible styling that indicates when the element is focused. You can do this with the [`:focus`](/ru/docs/Web/CSS/:focus) CSS pseudo-class.

Standard focusable elements such as links and input fields are given special styling by the browser by default, so you might not need to specify focus styling for such elements, unless you want the focus styling to be more distinctive.

If you create your own focusable components, be sure that you also define focus styling for them.

### See also

- [Using CSS to change the presentation of a UI component when it receives focus](https://www.w3.org/WAI/WCAG21/Techniques/css/C15.html)
