---
title: Node.isSupported()
slug: conflicting/Web/API/Node
translation_of: Web/API/Node/isSupported
original_slug: Web/API/Node/isSupported
---

{{APIRef("DOM")}}{{obsolete_header}}

**`Node.isSupported()`** возвращает {{domxref("Boolean")}} флаг содержащий результат проверки реализует ли реализация DOM определённое свойство и поддерживается ли это свойство конкретным узлом.

## Синтаксис

```
boolValue = element.isSupported(feature, version)
```

### Параметры

- _feature_
  - : Это {{domxref("DOMString")}} содержащая имя свойства для проверки. Это тоже имя, которое может быть передано в метод `hasFeature` в [DOMImplementation](/en/DOM/document.implementation). Возможные значения определённые в спецификации ядра DOM перечислены в DOM Level 2 [соответствующий раздел](http://www.w3.org/TR/DOM-Level-2-Core/introduction.html#ID-Conformance).
- _version_
  - : Это {{domxref("DOMString")}} содержащая номер версии свойства для ис проверки.В DOM уровень 2, version 1, это строка `2.0`. если версия не указана, поддерживает любую версию свойства, вызывает метод и возвращает true.

## Пример

```html
<div id="doc">
</div>

<script>
 // Получить элемент и проверить поддерживает ли он модуль DOM2 HTML.
 var main = document.getElementById('doc');
 var output = main.isSupported('HTML', '2.0');
</script>
```

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- Принадлежит интерфейсу {{domxref("Node")}}.
