---
title: Element.createShadowRoot()
slug: Web/API/Element/shadowRoot
---

{{deprecated_header()}}

Используйте `Element.createShadowRoot` чтобы создать экземпляр [shadow DOM](/ru/docs/Web/Web_Components/Using_shadow_DOM). После создания shadow DOM, он всегда будет привязан к существующему элементу. После создания shadowDOM, элемент к которому он привязан будет называться Теневой корень ({{glossary("shadow root","shadowRoot")}}) .

> **Примечание:** This method has been deprecated in favor of [attachShadow](/ru/docs/Web/API/Element/attachShadow).

## Синтаксис

```
var shadowroot = element.createShadowRoot();
```

### Параметры

Отсутствуют

### Значение результата

Возвращает {{domxref("ShadowRoot")}}.

## Спецификация

Эта функция больше не определяется никакими спецификациями

## Совместимость браузеров

{{Compat}}
