---
title: CDATASection
slug: Web/API/CDATASection
---

{{APIRef("DOM")}}

Интерфейс **`CDATASection`** представляет собой раздел CDATA, который может быть использован внутри XML для добавления extended групп "незакавыченного" текста. Символы `<` and `&` не нуждаются в кавычках, как внутри раздела CDATA.

В XML, раздел CDATA выглядит так:

```
<![CDATA[  ... ]]>
```

Например:

```xml
<foo>Here is a CDATA section: <![CDATA[  < > & ]]> with all kinds of unescaped text. </foo>
```

Единственная последовательность (символов), не разрешённая внутри раздела CDATA - это сами символы закрытия раздела CDATA:

```xml
<![CDATA[  ]]> will cause an error   ]]>
```

Заметьте, что разделы CDATA не следует использовать внутри HTML; они работают только в XML.

{{InheritanceDiagram(600,120)}}

## Свойства

_Этот интерфейс не имеет специфических свойств и наследует родительские свойства {{domxref("Text")}}._

## Методы

_This interface has no specific methods and наследует родительские методы {{domxref("Text")}}._

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
