---
title: Node.localName
slug: Web/API/Element/localName
---

{{APIRef("DOM")}}

Свойство **`Node.localName`** только для чтения, возвращает локальную часть полного имени этого узла.

## Синтаксис

```
name = element.localName
```

- `name` это локальное имя в виде строки (для уточнения деталей смотрите [Notes](#notes) ниже)

## Пример

(Должен быть обработан с XML типом содержимого, таким как `text/xml` или `application/xhtml+xml`.)

```xml
<html xmlns="http://www.w3.org/1999/xhtml"
      xmlns:svg="http://www.w3.org/2000/svg">
<head>
  <script type="application/javascript"><![CDATA[
  function test() {
    var text = document.getElementById('text');
    var circle = document.getElementById('circle');

    text.value = "<svg:circle> has:\n" +
                 "localName = '" + circle.localName + "'\n" +
                 "namespaceURI = '" + circle.namespaceURI + "'";
  }
  ]]></script>
</head>
<body onload="test()">
  <svg:svg version="1.1"
    width="100px" height="100px"
    viewBox="0 0 100 100">
    <svg:circle cx="50" cy="50" r="30" style="fill:#aaa" id="circle"/>
  </svg:svg>
  <textarea id="text" rows="4" cols="55"/>
</body>
</html>
```

## Примечания

Локальное имя узла, является полным именем узла, которое идёт после двоеточия. Полное имя, как правило, используется как часть пространства имён для конкретных XML документов. Например, полное имя `ecomm:partners`, `partners` это локальное имя и `ecomm` это префикс:

```xml
<ecomm:business id="soda_shop" type="brick_n_mortar" xmlns:ecomm="http://example.com/ecomm">
  <ecomm:partners>
    <ecomm:partner id="1001">Tony's Syrup Warehouse
    </ecomm:partner>
  </ecomm:partner>
</ecomm:business>
```

> **Примечание:** В Gecko 1.9.2 и ранее, свойство возвращает версию локального имени в верхнем регистре для HTML-элементов в HTML DOMs (в отличии от XHTML элементов в XML DOMs). В более поздних версиях, в соответствии с HTML5, свойство возвращает, в случае внутреннего хранилища DOM, в нижнем регистре для HTML-элементов в HTML DOMs и XHTML элементов в XML DOMs. {{domxref("element.tagName","tagName")}} свойство продолжает возвращать в верхнем регистре для HTML-элементов в HTML DOMs.

Для узла другого [типа](/ru/docs/DOM/Node.nodeType) отличного от `ELEMENT_NODE` и `ATTRIBUTE_NODE` `localName` всегда `null`.

## Спецификации

- [DOM Level 2 Core: Node.localName](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-NodeNSLocalN)
- [DOM Level 3 Core: Node.localName](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-NodeNSLocalN)

## Смотрите также

- {{domxref("Node.namespaceURI")}}
