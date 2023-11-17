---
title: Прямая и обратная обработка XML
slug: Web/Guide/Parsing_and_serializing_XML
---

Иногда возникает необходимость в обработке {{Glossary("XML")}} и в последующей конвертации в древо {{Glossary("DOM")}}. Или наоборот, необходимо перевести древо DOM в XML. В этой статье рассмотрим объекты платформы web для обработки XML.

- {{domxref("XMLSerializer")}}
  - : Сериализует деревья DOM, преобразуя их в строки, содержащие XML.
- {{domxref("DOMParser")}}
  - : Создаёт дерево DOM, анализируя строку, содержащую XML, возвращая {{domxref ("XMLDocument")}} или {{domxref ("Document")}} в зависимости от входящих данных.
- {{domxref("XMLHttpRequest")}}
  - : Загружает контент из URL-адреса; Содержимое XML возвращается как объект XML {{domxref ("Document")}} с деревом DOM, построенным из самого XML.
- [XPath](/ru/docs/Web/XPath)
  - : Технология создания строк, содержащих адреса для определённых частей документа XML, и поиска узлов XML на основе этих адресов.

## Создание XML-документа

Использование одного из следующих подходов для создания XML-документа (который является экземпляром {{domxref ("Document")}}.

### Parsing строк в дерево DOM

В этом примере фрагмент XML в строке преобразуется в дерево DOM с помощью {{domxref ("DOMParser")}}:

```js
var sMyString = '<a id="a"><b id="b">hey!</b></a>';
var oParser = new DOMParser();
var oDOM = oParser.parseFromString(sMyString, "application/xml");
// print the name of the root element or error message
console.log(
  oDOM.documentElement.nodeName == "parsererror"
    ? "error while parsing"
    : oDOM.documentElement.nodeName,
);
```

### Parsing URL-addressable ресурсов в дерево DOM

#### Использование XMLHttpRequest

Вот пример кода, который считывает и анализирует XML-файл с URL-адресом в дереве DOM:

```js
var xhr = new XMLHttpRequest();
xhr.onload = function () {
  dump(xhr.responseXML.documentElement.nodeName);
};
xhr.onerror = function () {
  dump("Error while getting XML.");
};
xhr.open("GET", "example.xml");
xhr.responseType = "document";
xhr.send();
```

Значение, возвращаемое в поле {{domxref ("XMLHttpRequest.responseXML", "responseXML")}} объекта xhr, является {{domxref ("Document")}}, созданным путём синтаксического анализа XML.

Если документ представляет собой {{Glossary ("HTML")}}, приведённый выше код вернёт {{domxref ("Document")}}. Если документ XML, результирующий объект на самом деле является {{domxref ("XMLDocument")}}. Эти два типа по существу одинаковы; разница в основном историческая, хотя дифференциация имеет также некоторые практические преимущества.

> **Примечание:** Примечание: на самом деле существует интерфейс {{domxref ("HTMLDocument")}}, но это не обязательно независимый тип. В некоторых браузерах это так, а в других это просто псевдоним для интерфейса документа.

## Сериализация XML-документа

Имея {{domxref ("Document")}}, вы можете сериализовать дерево DOM документа обратно в XML с помощью метода {{domxref ("XMLSerializer.serializeToString ()")}}.

Используйте следующие подходы для сериализации содержимого XML-документа, созданного в предыдущем разделе.

### Serializing DOM trees to strings

Сначала создайте дерево DOM, как описано в разделе Как создать дерево DOM. В качестве альтернативы используйте дерево DOM, полученное из {{domxref ("XMLHttpRequest")}}.

Чтобы сериализовать документ дерева DOM в текст XML, вызовите {{domxref ("XMLSerializer.serializeToString ()")}}:

```js
var oSerializer = new XMLSerializer();
var sXML = oSerializer.serializeToString(doc);
```

### Serializing HTML documents

Если у вас есть модель DOM в виде HTML-документа, вы можете сериализовать её с помощью serializeToString (), но есть более простой вариант: просто используйте свойство {{domxref ("Element.innerHTML")}} (если вам нужны только потомки указанный узел) или свойство {{domxref ("Element.outerHTML")}}, если вам нужен узел и все его потомки.

```js
var docHTML = document.documentElement.innerHTML;
```

В результате docHTML представляет собой {{domxref ("DOMString")}}, содержащий HTML-код содержимого документа; то есть содержимое элемента {{HTMLElement ("body")}}.

Вы можете получить HTML, соответствующий \<body> и его потомкам, с помощью этого кода:

```js
var docHTML = document.documentElement.outerHTML;
```

## See also

- [XPath](/en/XPath)
- {{domxref("XMLHttpRequest")}}
- {{domxref("Document")}}, {{domxref("XMLDocument")}}, and {{domxref("HTMLDocument")}}
