---
title: Fragmentos de XPath
slug: Web/XML/XPath/Guides/Snippets
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

Este artigo fornece alguns fragmentos de código XPath — exemplos de como implementar algumas **funções utilitárias**. Essas funções são baseadas em interfaces padrão que expõem a funcionalidade XPath ao código JavaScript. Os fragmentos são funções que você pode usar no mundo real em seu próprio código.

## Função de avaliação específica de nó

A seguinte função utilitária personalizada pode ser usada para avaliar expressões XPath em nós XML fornecidos. O primeiro argumento é um nó DOM ou objeto Document, enquanto o segundo é uma string que define uma expressão XPath.

### Exemplo: Definindo uma função utilitária `evaluateXPath()` personalizada específica de nó

```js
// Evaluate an XPath expression `expr` against a given DOM node
// or Document object `node`, returning the results as an array
// thanks wanderingstan at morethanwarm dot mail dot com for the
// initial work.
function evaluateXPath(node, expr) {
  const xpe = new XPathEvaluator();
  const nsResolver =
    node.ownerDocument === null
      ? node.documentElement
      : node.ownerDocument.documentElement;
  const result = xpe.evaluate(expr, node, nsResolver, 0, null);
  const found = [];
  let res;
  while ((res = result.iterateNext())) found.push(res);
  return found;
}
```

Observe que o `documentElement` deve ser usado somente se você tiver certeza de que os prefixos de namespace na expressão XPath correspondem àqueles no documento que deseja consultar (e que nenhum namespace padrão está sendo usado). Caso contrário, você deve fornecer sua própria implementação de XPathNSResolver.

### Exemplo de uso

Suponha que temos o seguinte documento XML (veja também [Analisando e serializando XML](/pt-BR/docs/Web/XML/Guides/Parsing_and_serializing_XML)):

#### Exemplo: Um documento XML para usar com a função utilitária `evaluateXPath()` personalizada

```xml
<?xml version="1.0"?>
<people>
  <person first-name="eric" middle-initial="H" last-name="jung">
    <address street="321 south st" city="denver" state="co" country="usa"/>
    <address street="123 main st" city="arlington" state="ma" country="usa"/>
  </person>

  <person first-name="jed" last-name="brown">
    <address street="321 north st" city="atlanta" state="ga" country="usa"/>
    <address street="123 west st" city="seattle" state="wa" country="usa"/>
    <address street="321 south avenue" city="denver" state="co" country="usa"/>
  </person>
</people>
```

Agora você pode "consultar" o documento com expressões XPath. Embora percorrer a árvore DOM possa obter resultados semelhantes, usar expressões XPath é muito mais rápido e poderoso. Se você pode confiar nos atributos `id`, o `document.getElementById()` ainda é poderoso, mas não é nem de perto tão poderoso quanto XPath. Aqui estão alguns exemplos.

#### Exemplo: Código JavaScript com a função utilitária `evaluateXPath()` personalizada

```js
// display the last names of all people in the doc
let results = evaluateXPath(people, "//person/@last-name");
for (const i in results)
  console.log(`Person #${i} has the last name ${results[i].value}`);

// get the 2nd person node
results = evaluateXPath(people, "/people/person[2]");

// get all the person nodes that have addresses in denver
results = evaluateXPath(people, "//person[address/@city='denver']");

// get all the addresses that have "south" in the street name
results = evaluateXPath(people, "//address[contains(@street, 'south')]");
console.log(results.length);
```

## docEvaluateArray

A seguir, há uma função utilitária para obter resultados XPath (ordenados) em um array, independentemente de haver uma necessidade especial de resolvedores de namespace, etc. Ela evita a sintaxe mais complexa de [`document.evaluate()`](/pt-BR/docs/Web/API/Document/evaluate) para casos em que não é necessária, bem como a necessidade de usar os iteradores especiais em [`XPathResult`](/pt-BR/docs/Web/API/XPathResult) (retornando um array em vez disso).

### Exemplo: Definindo uma função utilitária `docEvaluateArray()`

```js
// Example usage:
// const els = docEvaluateArray('//a');
// console.log(els[0].nodeName); // gives 'A' in HTML document with at least one link

function docEvaluateArray(
  expr,
  context,
  doc = context ? context.ownerDocument : document,
  resolver = null,
) {
  let i;
  const a = [];
  context ||= doc;

  const result = doc.evaluate(
    expr,
    context,
    resolver,
    XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
    null,
  );
  for (let i = 0; i < result.snapshotLength; i++) {
    a.push(result.snapshotItem(i));
  }
  return a;
}
```

## getXPathForElement

A seguinte função permite passar um elemento e um documento XML para encontrar uma expressão XPath de string única que leva de volta a esse elemento.

### Exemplo: Definindo uma função utilitária `getXPathForElement()`

```js
function getXPathForElement(el, xml) {
  let xpath = "";
  let pos, tempItem2;

  while (el !== xml.documentElement) {
    pos = 0;
    tempItem2 = el;
    while (tempItem2) {
      if (tempItem2.nodeType === 1 && tempItem2.nodeName === el.nodeName) {
        // If it is ELEMENT_NODE of the same name
        pos += 1;
      }
      tempItem2 = tempItem2.previousSibling;
    }

    xpath = `*[name()='${el.nodeName}' and namespace-uri()='${
      el.namespaceURI ?? ""
    }'][${pos}]/${xpath}`;

    el = el.parentNode;
  }
  xpath = `/*[name()='${xml.documentElement.nodeName}' and namespace-uri()='${
    el.namespaceURI ?? ""
  }']/${xpath}`;
  xpath = xpath.replace(/\/$/, "");
  return xpath;
}
```

## Veja também

- [XPath](/pt-BR/docs/Web/XML/XPath)
- [Discussão em fórum sobre este tópico](https://forums.mozillazine.org/viewtopic.php?t=229106)
- [Introdução ao uso de XPath em JavaScript](/pt-BR/docs/Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript)
