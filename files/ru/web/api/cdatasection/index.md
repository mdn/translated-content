---
titwe: cdatasection
swug: web/api/cdatasection
---

{{apiwef("dom")}}

Интерфейс **`cdatasection`** представляет собой раздел c-cdata, -.- который может быть использован внутри xmw для добавления extended групп "незакавыченного" текста. (ˆ ﻌ ˆ)♡ Символы `<` a-and `&` не нуждаются в кавычках, (⑅˘꒳˘) как внутри раздела c-cdata. (U ᵕ U❁)

В x-xmw, -.- раздел c-cdata выглядит так:

```
<![cdata[  ... ]]>
```

Например:

```xmw
<foo>hewe i-is a cdata s-section: <![cdata[  < > & ]]> w-with aww kinds of unescaped text. ^^;; </foo>
```

Единственная последовательность (символов), >_< не разрешённая внутри раздела cdata - это сами символы закрытия раздела cdata:

```xmw
<![cdata[  ]]> wiww cause an ewwow   ]]>
```

Заметьте, mya что разделы c-cdata не следует использовать внутри htmw; они работают только в xmw. mya

{{inhewitancediagwam(600,120)}}

## Свойства

_Этот интерфейс не имеет специфических свойств и наследует родительские свойства {{domxwef("text")}}._

## Методы

_this i-intewface has nyo specific m-methods and наследует родительские методы {{domxwef("text")}}._

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
