---
title: Introdução ao uso de XPath em JavaScript
slug: Web/XML/XPath/Guides/Introduction_to_using_XPath_in_JavaScript
l10n:
  sourceCommit: b6f343538eac4a803943b4e99b0c0545b372645a
---

Este documento descreve a interface para usar [XPath](/pt-BR/docs/Web/XML/XPath) em JavaScript.
A principal interface para usar XPath é a função [evaluate](/pt-BR/docs/Web/API/Document/evaluate) do objeto [document](/pt-BR/docs/Web/API/Document).

## document.evaluate()

Este método avalia expressões [XPath](/pt-BR/docs/Web/XML/XPath) em documentos baseados em [XML](/pt-BR/docs/Glossary/XML) (incluindo documentos HTML) e retorna um objeto [`XPathResult`](/pt-BR/docs/Web/API/XPathResult), que pode ser um único nó ou um conjunto de nós. A documentação existente para este método está em [document.evaluate](/pt-BR/docs/Web/API/Document/evaluate), mas é bastante escassa para nossas necessidades no momento; um exame mais abrangente será fornecido abaixo.

```js
const xpathResult = document.evaluate(
  xpathExpression,
  contextNode,
  namespaceResolver,
  resultType,
  result,
);
```

### Parâmetros

O método [`evaluate()`](/pt-BR/docs/Web/API/Document/evaluate) recebe um total de cinco parâmetros:

- `xpathExpression`: Uma string contendo a expressão XPath a ser avaliada.
- `contextNode`: Um nó no documento em relação ao qual a `xpathExpression` deve ser avaliada, incluindo todos os seus nós filhos. O nó [document](/pt-BR/docs/Web/API/Document) é o mais comumente utilizado.
- `namespaceResolver`: Uma função que receberá quaisquer prefixos de namespace contidos em `xpathExpression` e retornará uma string representando o URI do namespace associado a esse prefixo. Isso permite a conversão entre os prefixos usados nas expressões XPath e os possivelmente diferentes prefixos usados no documento. A função pode ser:
  - Um {{domxref("Node")}}, que fornece um método {{domxref("Node.lookupNamespaceURI")}} que resolve o prefixo do namespace.
  - `null`, que pode ser usado para documentos HTML ou quando nenhum prefixo de namespace é usado. Observe que, se a `xpathExpression` contiver um prefixo de namespace, isso resultará em um `DOMException` sendo lançado com o código `NAMESPACE_ERR`.
  - Uma função personalizada definida pelo usuário. Consulte a seção [Usando um Namespace Resolver Definido pelo Usuário](#implementando_um_namespace_resolver_definido_pelo_usuário) no apêndice para detalhes.

- `resultType`: Uma [constante](#constantes_definidas_pelo_xpathresult) que especifica o tipo de resultado desejado a ser retornado como resultado da avaliação. A constante mais comumente passada é `XPathResult.ANY_TYPE`, que retornará os resultados da expressão XPath como o tipo mais natural. Existe uma seção no apêndice que contém uma lista completa das [constantes disponíveis](#constantes_definidas_pelo_xpathresult). Elas são explicadas abaixo na seção "[Especificando o Tipo de Retorno](#especificando_o_tipo_de_retorno)."
- `result`: Se um objeto `XPathResult` existente for especificado, ele será reutilizado para retornar os resultados. Especificar `null` criará um novo objeto `XPathResult`.

### Valor de retorno

Retorna um objeto {{domxref("XPathResult")}} do tipo [especificado](#especificando_o_tipo_de_retorno) no parâmetro `resultType`.

### Implementando um Namespace Resolver Padrão

Usamos o objeto [`document`](/pt-BR/docs/Web/API/Document) como um namespace resolver.

```js
const nsResolver =
  contextNode.ownerDocument === null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement;
```

E depois passamos `document.evaluate`, a variável `nsResolver` como o parâmetro `namespaceResolver`.

Nota: XPath define QNames sem prefixo para corresponder apenas a elementos no namespace nulo. Não há maneira em XPath de capturar o namespace padrão como aplicado a uma referência de elemento regular (por exemplo, `p[@id='_my-id']` para `xmlns='http://www.w3.org/1999/xhtml'`). Para corresponder elementos padrão em um namespace não nulo, você deve fazer referência a um elemento específico usando uma forma como `['namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']` ([esta abordagem](#usando_funções_xpath_para_referenciar_elementos_com_namespace_padrão) funciona bem para XPaths dinâmicos onde os namespaces podem não ser conhecidos) ou usar testes de nome com prefixo e criar um namespace resolver mapeando o prefixo para o namespace. Leia mais sobre [como criar um namespace resolver definido pelo usuário](#implementando_um_namespace_resolver_definido_pelo_usuário), se desejar adotar a última abordagem.

## Descrição

Adapta qualquer nó DOM para resolver namespaces de forma que uma expressão [XPath](/pt-BR/docs/Web/XML/XPath) possa ser facilmente avaliada em relação ao contexto do nó onde ela apareceu no documento. Este adaptador funciona como o método DOM Level 3 `lookupNamespaceURI` em nós ao resolver o `namespaceURI` a partir de um determinado prefixo usando as informações atuais disponíveis na hierarquia do nó no momento em que `lookupNamespaceURI` é chamado. Também resolve corretamente o prefixo implícito `xml`.

### Especificando o Tipo de Retorno

A variável retornada `xpathResult` de `document.evaluate` pode ser composta por nós individuais ([tipos simples](#tipos_simples)) ou uma coleção de nós ([tipos de conjunto de nós](#tipos_de_conjunto_de_nós)).

#### Tipos Simples

Quando o tipo de resultado desejado em `resultType` é especificado como:

- `NUMBER_TYPE` - um double
- `STRING_TYPE` - uma string
- `BOOLEAN_TYPE` - um boolean

Obtemos o valor retornado da expressão acessando as seguintes propriedades respectivamente do objeto `XPathResult`.

- `numberValue`
- `stringValue`
- `booleanValue`

##### Exemplo

O seguinte usa a expressão XPath [`count(//p)`](/pt-BR/docs/Web/XML/XPath/Reference/Functions/count) para obter o número de elementos `<p>` em um documento HTML:

```js
const paragraphCount = document.evaluate(
  "count(//p)",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);

console.log(
  `This document contains ${paragraphCount.numberValue} paragraph elements.`,
);
```

Embora o JavaScript nos permita converter o número em uma string para exibição, a interface XPath não converterá automaticamente o resultado numérico se a propriedade `stringValue` for solicitada, então o seguinte código **não** funcionará:

```js
const paragraphCount = document.evaluate(
  "count(//p)",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);

console.log(
  `This document contains ${paragraphCount.stringValue} paragraph elements.`,
);
```

Em vez disso, retornará uma exceção com o código `NS_DOM_TYPE_ERROR`.

#### Tipos de Conjunto de Nós

O objeto `XPathResult` permite que conjuntos de nós sejam retornados em 3 tipos principais diferentes:

- [Iteradores](#iteradores)
- [Snapshots](#snapshots)
- [Primeiros Nós](#primeiro_nó)

##### Iteradores

Quando o tipo de resultado especificado no parâmetro `resultType` é:

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

O objeto `XPathResult` retornado é um conjunto de nós dos nós correspondentes que se comportará como um iterador, permitindo-nos acessar os nós individuais contidos usando o método `iterateNext()` do `XPathResult`.

Após iterarmos sobre todos os nós correspondentes individuais, `iterateNext()` retornará `null`.

Observe, no entanto, que se o documento for modificado (a árvore do documento for alterada) entre as iterações, isso invalidará a iteração e a propriedade `invalidIteratorState` do `XPathResult` será definida como `true`, e uma exceção `NS_ERROR_DOM_INVALID_STATE_ERR` será lançada.

```js
const iterator = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
  null,
);

try {
  let thisNode = iterator.iterateNext();

  while (thisNode) {
    console.log(thisNode.textContent);
    thisNode = iterator.iterateNext();
  }
} catch (e) {
  console.error(`Error: Document tree modified during iteration ${e}`);
}
```

##### Snapshots

Quando o tipo de resultado especificado no parâmetro `resultType` é:

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

O objeto `XPathResult` retornado é um conjunto de nós estático dos nós correspondentes, o que nos permite acessar cada nó através do método `snapshotItem(itemNumber)` do objeto `XPathResult`, onde `itemNumber` é o índice do nó a ser recuperado. O número total de nós contidos pode ser acessado através da propriedade `snapshotLength`.

Os snapshots não mudam com mutações do documento, então, ao contrário dos iteradores, o snapshot não se torna inválido, mas pode não corresponder ao documento atual; por exemplo, os nós podem ter sido movidos, pode conter nós que não existem mais ou novos nós podem ter sido adicionados.

```js
const nodesSnapshot = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null,
);

for (let i = 0; i < nodesSnapshot.snapshotLength; i++) {
  console.log(nodesSnapshot.snapshotItem(i).textContent);
}
```

##### Primeiro Nó

Quando o tipo de resultado especificado no parâmetro `resultType` é:

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

O objeto `XPathResult` retornado é apenas o primeiro nó encontrado que correspondeu à expressão XPath. Isso pode ser acessado através da propriedade `singleNodeValue` do objeto `XPathResult`. Isso será `null` se o conjunto de nós estiver vazio.

Observe que, para o subtipo não ordenado, o único nó retornado pode não ser o primeiro na ordem do documento, mas para o subtipo ordenado você tem a garantia de obter o primeiro nó correspondente na ordem do documento.

```js
const firstPhoneNumber = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null,
);

console.log(
  `The first phone number found is ${firstPhoneNumber.singleNodeValue.textContent}`,
);
```

#### A Constante ANY_TYPE

Quando o tipo de resultado no parâmetro `resultType` é especificado como `ANY_TYPE`, o objeto `XPathResult` retornado será qualquer tipo que resulte naturalmente da avaliação da expressão.

Pode ser qualquer um dos tipos simples (`NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE`), **mas**, se o tipo de resultado retornado for um conjunto de nós, ele será **apenas** um `UNORDERED_NODE_ITERATOR_TYPE`.

Para determinar esse tipo após a avaliação, usamos a propriedade `resultType` do objeto `XPathResult`. Os valores de [constante](#constantes_definidas_pelo_xpathresult) desta propriedade são definidos no apêndice.

## Exemplos

### Em um Documento HTML

O código a seguir deve ser colocado em qualquer fragmento JavaScript dentro ou vinculado ao documento HTML em relação ao qual a expressão XPath deve ser avaliada.

Para extrair todos os elementos de título `<h2>` em um documento HTML usando XPath, a `xpathExpression` é `"//h2"`. Onde `//` é o Operador de Descida Recursiva que corresponde a elementos com o nodeName `h2` em qualquer lugar na árvore do documento. O código completo para isso é: link para documento introdutório de xpath

```js
const headings = document.evaluate(
  "//h2",
  document,
  null,
  XPathResult.ANY_TYPE,
  null,
);
```

Observe que, como o HTML não possui namespaces, passamos `null` para o parâmetro `namespaceResolver`.

Como desejamos pesquisar no documento inteiro pelos títulos, usamos o próprio objeto [document](/pt-BR/docs/Web/API/Document) como o `contextNode`.

O resultado desta expressão é um objeto `XPathResult`. Se desejarmos saber o tipo de resultado retornado, podemos avaliar a propriedade `resultType` do objeto retornado. Neste caso, isso avaliará para `4`, um `UNORDERED_NODE_ITERATOR_TYPE`. Este é o tipo de retorno padrão quando o resultado da expressão XPath é um conjunto de nós. Ele fornece acesso a um único nó por vez e pode não retornar nós em uma ordem específica. Para acessar os nós retornados, usamos o método `iterateNext()` do objeto retornado:

```js
let thisHeading = headings.iterateNext();

let alertText = "Level 2 headings in this document are:\n";

while (thisHeading) {
  alertText += `${thisHeading.textContent}\n`;
  thisHeading = headings.iterateNext();
}
```

Depois de iterar para um nó, temos acesso a todas as interfaces DOM padrão naquele nó. Após iterar por todos os elementos `h2` retornados de nossa expressão, quaisquer outras chamadas a `iterateNext()` retornarão `null`.

## Apêndice

### Implementando um Namespace Resolver Definido pelo Usuário

Este é um exemplo apenas para ilustração. Esta função precisará receber prefixos de namespace da `xpathExpression` e retornar o URI que corresponde a esse prefixo. Por exemplo, a expressão:

```plain
'//xhtml:td/mathml:math'
```

selecionará todas as expressões [MathML](/pt-BR/docs/Web/MathML) que são filhas de elementos de célula de dados de tabela (X)HTML.

Para associar o prefixo `mathml:` com o URI de namespace `http://www.w3.org/1998/Math/MathML` e `xhtml:` com o URI `http://www.w3.org/1999/xhtml`, fornecemos uma função:

```js
function nsResolver(prefix) {
  const ns = {
    xhtml: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
  };
  return ns[prefix] || null;
}
```

Nossa chamada para `document.evaluate` ficaria assim:

```js
document.evaluate(
  "//xhtml:td/mathml:math",
  document,
  nsResolver,
  XPathResult.ANY_TYPE,
  null,
);
```

### Implementando um namespace padrão para documentos XML

Conforme observado em [Implementando um Namespace Resolver Padrão](#implementando_um_namespace_resolver_padrão) anteriormente, o resolver padrão não lida com o namespace padrão para documentos XML. Por exemplo, com este documento:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<feed xmlns="http://www.w3.org/2005/Atom">
    <entry />
    <entry />
    <entry />
</feed>
```

`doc.evaluate('//entry', doc, nsResolver, XPathResult.ANY_TYPE, null)` retornará um conjunto vazio, onde `nsResolver` é qualquer `Node`. Passar um resolver `null` também não funciona melhor.

Uma possível solução alternativa é criar um resolver personalizado que retorne o namespace padrão correto (o namespace Atom neste caso). Observe que você ainda precisa usar algum prefixo de namespace em sua expressão XPath, para que a função do resolver possa alterá-lo para o namespace necessário. Por exemplo:

```js
function resolver() {
  return "http://www.w3.org/2005/Atom";
}
doc.evaluate("//myns:entry", doc, resolver, XPathResult.ANY_TYPE, null);
```

Observe que um resolver mais complexo será necessário se o documento usar múltiplos namespaces.

Uma abordagem que pode funcionar melhor (e permitir que os namespaces não sejam conhecidos com antecedência) é descrita na próxima seção.

### Usando funções XPath para referenciar elementos com namespace padrão

Outra abordagem para corresponder elementos padrão em um namespace não nulo (e uma que funciona bem para expressões XPath dinâmicas onde os namespaces podem não ser conhecidos) envolve referenciar um elemento específico usando uma forma como `[namespace-uri()='http://www.w3.org/1999/xhtml' and name()='p' and @id='_my-id']`. Isso contorna o problema de uma consulta XPath não conseguir detectar o namespace padrão em um elemento rotulado regularmente.

### Obtendo elementos e atributos com namespace específico independentemente do prefixo

Se alguém deseja fornecer flexibilidade em namespaces (como pretendido) sem necessariamente exigir que um prefixo específico seja usado ao encontrar um elemento ou atributo com namespace, deve-se usar técnicas especiais.

Embora se possa adaptar a abordagem na seção acima para testar elementos com namespace independentemente do prefixo escolhido (usando [`local-name()`](/pt-BR/docs/Web/XML/XPath/Reference/Functions/local-name) em combinação com [`namespace-uri()`](/pt-BR/docs/Web/XML/XPath/Reference/Functions/namespace-uri) em vez de [`name()`](/pt-BR/docs/Web/XML/XPath/Reference/Functions/name)), uma situação mais desafiadora ocorre se alguém deseja capturar um elemento com um atributo específico com namespace em um predicado (dada a ausência de variáveis independentes de implementação no XPath 1.0).

Por exemplo, alguém pode tentar (incorretamente) capturar um elemento com um atributo com namespace da seguinte forma: `const xpathLink = someElements[local-name(@*)="href" and namespace-uri(@*)='http://www.w3.org/1999/xlink'];`

Isso poderia capturar inadvertidamente alguns elementos se um de seus atributos existisse com um nome local de `href`, mas fosse um atributo diferente que tivesse o namespace alvo (XLink) (em vez de [`@href`](/pt-BR/docs/Web/XML/XPath/Reference/Axes#attribute)).

Para capturar com precisão elementos com o atributo XLink `@href` (sem também ser limitado a prefixos predefinidos em um namespace resolver), pode-se obtê-los da seguinte forma:

```js
const xpathEls =
  'someElements[@*[local-name() = "href" and namespace-uri() = "http://www.w3.org/1999/xlink"]]'; // Captura elementos com qualquer atributo único que tenha tanto o nome local 'href' quanto o namespace XLink
const thisLevel = xml.evaluate(xpathEls, xml, null, XPathResult.ANY_TYPE, null);
let thisItemEl = thisLevel.iterateNext();
```

#### Constantes Definidas pelo XPathResult

| Constante de Tipo de Resultado Definida | Valor | Descrição                                                                                                                                                                                                               |
| --------------------------------------- | ----- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| ANY_TYPE                                | 0     | Um conjunto de resultados contendo qualquer tipo que naturalmente resulte da avaliação da expressão. Observe que, se o resultado for um conjunto de nós, então UNORDERED_NODE_ITERATOR_TYPE é sempre o tipo resultante. |
| NUMBER_TYPE                             | 1     | Um resultado contendo um único número. Isso é útil, por exemplo, em uma expressão XPath usando a função `count()`.                                                                                                      |
| STRING_TYPE                             | 2     | Um resultado contendo uma única string.                                                                                                                                                                                 |
| BOOLEAN_TYPE                            | 3     | Um resultado contendo um único valor booleano. Isso é útil, por exemplo, em uma expressão XPath usando a função `not()`.                                                                                                |
| UNORDERED_NODE_ITERATOR_TYPE            | 4     | Um conjunto de nós de resultado contendo todos os nós que correspondem à expressão. Os nós podem não estar necessariamente na mesma ordem em que aparecem no documento.                                                 |
| ORDERED_NODE_ITERATOR_TYPE              | 5     | Um conjunto de nós de resultado contendo todos os nós que correspondem à expressão. Os nós no conjunto de resultados estão na mesma ordem em que aparecem no documento.                                                 |
| UNORDERED_NODE_SNAPSHOT_TYPE            | 6     | Um conjunto de nós de resultado contendo snapshots de todos os nós que correspondem à expressão. Os nós podem não estar necessariamente na mesma ordem em que aparecem no documento.                                    |
| ORDERED_NODE_SNAPSHOT_TYPE              | 7     | Um conjunto de nós de resultado contendo snapshots de todos os nós que correspondem à expressão. Os nós no conjunto de resultados estão na mesma ordem em que aparecem no documento.                                    |
| ANY_UNORDERED_NODE_TYPE                 | 8     | Um conjunto de nós de resultado contendo qualquer nó único que corresponda à expressão. O nó não é necessariamente o primeiro nó no documento que corresponde à expressão.                                              |
| FIRST_ORDERED_NODE_TYPE                 | 9     | Um conjunto de nós de resultado contendo o primeiro nó no documento que corresponde à expressão.                                                                                                                        |

## Veja também

- [XPath](/pt-BR/docs/Web/XML/XPath)
- [XML Path Language](https://www.xml.com/pub/a/2000/08/holman/index.html?page=2#xpath-info) de _[What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/)_ por G. Ken Holman

## Informações do Documento Original

- Baseado em um documento original de James Graham.
- Outros contribuidores: James Thompson.
