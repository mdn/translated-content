---
title: Intensivo de Namespaces
slug: Web/SVG/Namespaces_Crash_Course
---

Como um dialeto [XML](/pt-BR/docs/Glossario/XML), o [SVG](/pt-BR/docs/Web/SVG) tem _namespace_. É importante entender o conceito de _[namespaces](/pt-BR/docs/Web/SVG/Intensivo_de_Namespaces)_ e como eles são usados se você planeja criar seu próprio conteúdo em SVG. Versões de visualizadores SVG prévias ao lançamento do Firefox 1.5 infelizmente deu pouca atenção aos _namespaces_ mas eles são essenciais para dialetos multi-XML suportando agentes de usuários como navegadores baseados em [Gecko](/pt-BR/docs/Mozilla/Gecko) que devem ser muito rigorosos. Tome um tempo para entender _namespaces_ agora e irá te privar de muita dor de cabeça no futuro.

### Experiência

Tem sido uma longa meta do W3C para fazer possível para diferentes tipos de conteúdo baseado em XML ser misturado no mesmo arquivo XML. Por exemplo, SVG e [MathML](/pt-BR/docs/Web/MathML) podem ser incorporados diretamente em um documento cientificamente baseado em XHTML. Ser apto de misturar tipos de conteúdo como este tem muitas vantagens, mas também requeriu problemas reais para serem resolvidos.

Naturalmente, cada dialeto XML define o significado de um nome de tag de marcação descrito em sua especificação. O problema em misturar conteúdo de diferentes dialetos XML em um único documento XML é que as tags definidas por um dialeto podem ter o mesmo nome que as tags definidas por outro. Por exemplo, ambos XHTML e SVG tem uma tag `<title>`. Como o software deveria distinguir entre os dois? Na verdade, como o software conta quando o conteúdo XML é algo que ele conhece sobre, e não somente um arquivo XML sem significado contendo nomes de tags arbitrárias desconhecidas para ele?

Contrário à opinição popular, a resposta para esta pergunta não é "ele pode dizer pela declaração `DOCTYPE`". DTD's não foram feitos com conteúdo misto levado em consideração, e tentativas passadas de criar DTD's de conteúdo misto são hoje consideradas de terem falhado. O XML, e alguns dialetos XML (incluindo SVG), não requerem uma declaração `DOCTYPE`, e SVG 1.2 nem terá um. O fato que declarações `DOCTYPE` (usualmente) combinam o conteúdo em arquivos de tipo de conteúdo únicos é uma mera coincidência. Os DTDs são somente para validação, não para identificação de conteúdo. Softwared que enganam e identificam conteúdo XML usando sua declaração `DOCTYPE` causam dano.

A resposta real para a pergunta é que um conteúdo XML conta para o software qual dialeto os nomes de tag pertencem ao dar "declarações de _namespaces_" para as tags.

### Declarando _namespaces_

O que estas declarações de _namespace_ parecem, e onde elas vão? Aqui vai um exemplo curto.

```
<svg xmlns="https://www.w3.org/2000/svg">
  <!-- mais tags aqui -->
</svg>
```

A declaração de _namespace_ é fornecida por um atributo `xmlns`. Este atributo diz que a tag `<svg>` e suas tags filhas pertencem a qualquer dialeto XML que tem o nome de _namespace_ 'http\://www\.w3.org/2000/svg' que é, com certeza, SVG. Note a declaração de _namespace_ somente precisa ser ser fornecida de uma vez em uma tag raiz. A declaração define o _namespace padrão_, então o software sabe que todas as tags descendentes de tags `<svg>` também pertencem ao mesmo _namespace_. Softwares conferem para ver se eles reconhecem o nome de _namespace_ para determinar se eles sabem como lidar com a marcação.

Note que nomes de _namespace_ são somente strings, então o fato que o nome de _namespace_ SVG também parece com um URI não é importante. URI's são comumente usadas porque eles são únicos, a intenção não é para "linkar" em algum lugar. (Na verdade URI's são usadas tão frequentemente que o termo "URI de _namespace_" é comumente usado ao invés de "nome de namespace".)

#### Redeclarando o _namespace_ padrão

Se todos os descendentes da tag raiz também são definidos para estarem presentes no _namespace_ padrão, como você mistura conteúdo de outro _namespace_? Fácil. Você apenas redefine o _namespace_ padrão. Aqui vai um exemplo simples.

```
<html xmlns="https://www.w3.org/1999/xhtml">
  <body>
    <!-- algumas tags XHTML aqui -->
    <svg xmlns="https://www.w3.org/2000/svg" width="300px" height="200px">
      <!-- algumas tags SVG aqui -->
    </svg>
    <!-- algumas tags XHTML aqui -->
  </body>
</html>
```

Neste exemplo o atributo `xmlns` na tag raíz `<html>` declara o _namespace_ padrão para ser XHTML. Como um resultado, ela e todas as tags filhas são interpretadas pelo software como pertencente ao XHTML, exceto para a tag `<svg>`. A tag `<svg>` tem seu próprio atributo `xmlns`, e ao redeclarar o _namespace_ padrão, isto conta para o software que a tag `<svg>` e suas descendentes (a menos que elas também redeclarem o _namespace_ padrão) pertencem ao SVG.

Viu? _Namespaces_ não são tão difíceis.

#### Declarando prefixos de _namespaces_

Dialetos XML não somente definem suas próprias tags, mas também seus próprios atributos. Por padrão, atributos não tem um _namespace_, e são conhecidos somente por ser únicos porque aparecem em um elemento que por si só tem um nome único. No entanto, algumas vezes é necessário definir atributos para que eles possam ser reusados em diferentes elementos e ainda sim serem considerados como sendo do mesmo atributo, independente do elemento com o qual eles são usados. Um exemplo muito bom disto é o atributo `href` definido pela especificação XLink. Este atributo é usado comumente por outros dialetos XML como um meio de conectar a recursos externos. Mas como você conta para o software qual dialeto o atributo pertence, neste caso XLink? Considere o exemplo seguinte.

```
<svg xmlns="https://www.w3.org/2000/svg"
     xmlns:xlink="https://www.w3.org/1999/xlink">
  <script xlink:href="o-script-mais-legal.js" type="text/ecmascript"/>
</svg>
```

Este exemplo tem o atributo de aparência bastante incomum `xmlns:xlink`. Como você pode ter adivinhado da primeira parte 'xmlns', esta é outra declaração de _namespace_. Contudo, ao invés de definir o _namespace_ padrão, esta declaração de _namespace_ define o namespace para alguma coisa chamada como "prefixo _namespace_". Neste caso, nós escolhemos usar o prefixo `xlink` (a segunda parte) uma vez que o prefixo será usado para contar ao software sobre os atributos que pertencem ao XLink.

Como seus nomes sugerem, prefixos de _namespace_ são usados para prefixar nomes de atributos e nomes de tags. Isto é feito colocando o prefixo de _namespace_ e dois pontos antes do nomes de atributo como mostrado na tag `<script>` no exemplo acima. Isto conta para o software que aquele atributo particular pertence ao _namespace_ atribuído ao prefixo de _namespace_ (XLink), e é um atribuído que pode ser usado com o mesmo significado em outras tags.

Note que é um erro de XML usar um prefixo que não foi ligado au um nome de _namespace_. A ligação criada pelo atributo `xmlns:xlink` no exemplo acima é absolutamente essencial se o atributo `xlink:href` não é para para causar um erro. Este atributo XLink é também frequentemente usado no SVG nas tags `<a>`, `<use>` e `<image>`, dentre outros, então é uma boa idéia sempre incluir a declaração XLink em seus documentos.

Aparte, é útil saber que prefixos podem também ser usados para names de tags. Isto conta para o software que aquela tag em particular (não a tag filha) pertence ao _namespace_ ligado ao prefixo. Saber disso irá te poupar de confusão se você se deparar com uma marcação como a do exemplo seguinte:

```
<html xmlns="https://www.w3.org/1999/xhtml"
      xmlns:svg="https://www.w3.org/2000/svg">
  <body>
    <h1>SVG incorporado inline no XHTML</h1>
    <svg:svg width="300px" height="200px">
      <svg:circle cx="150" cy="100" r="50" fill="#ff0000"/>
    </svg:svg>
  </body>
</html>
```

Note que pelo prefixo de _namespace_ ser usado para a tag `<svg:svg>` e seu filho `<svg:circle>`, não foi necessário redeclarar o _namespace_ padrão. Em geral, é melhor redeclarar o _namespace_ padrão ao invés de prefixar muitas tags desta forma.

### _Scripting_ em XML com _namespaces_

_Namespaces_ não afetam somente a marcação, mas também o _scripting_. Se você escreve scripts para XML com _namespace_, como SVG, continue lendo.

A recomendação [DOM Level 1](https://www.w3.org/TR/REC-DOM-Level-1/) foi criado antes da recomendação _[original Namespaces in XML](https://www.w3.org/TR/REC-xml-names/)_ ser lançada; assim sendo, DOM1 não está ciente de _namespaces_. Isto causa problemas para XML com namespaces, como SVG. Para resolver estes problemas, a recomendação [DOM Level 2 Core](https://www.w3.org/TR/DOM-Level-2-Core/) adicionou equivalentes cientes do _namespace_ de todos os métodos aplicáveis do DOM Nível 1. Quando estiver _scripting_ em SVG, é _[importante usar os métodos cientes de namespace](https://www.w3.org/TR/DOM-Level-2-Core/core.html#Namespaces-Considerations)_. A tabela abaixo lista os métodos DOM1 que não devem ser usados em SVG, junto com seus equivalentes em DOM2 que devem ser usados ao invés.

| DOM1 (não use)                                                                                                | DOM2 (use estes!)                                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [createAttribute](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createAttribute)           | [createAttributeNS](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrAttrNS)                                                                                               |
| [createElement](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-createElement)               | [createElementNS](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-DocCrElNS)                                                                                                   |
| [getAttributeNode](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttributeNode)         | [getAttributeNodeNS](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAtNodeNS)                                                                                            |
| [getAttribute](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getAttribute)                 | [getAttributeNS](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAttrNS)                                                                                                  |
| [getElementsByTagName](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getElementsByTagName) | [getElementsByTagNameNS](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getElBTNNS) (também [added to Element](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-A6C90942)) |
| [getNamedItem](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-getNamedItem)                 | [getNamedItemNS](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-getNamedItemNS)                                                                                               |
| [hasAttribute](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#)                                    | [hasAttributeNS](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttrNS)                                                                                                  |
| [removeAttribute](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeAttribute)           | [removeAttributeNS](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElRemAtNS)                                                                                                 |
| [removeNamedItem](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeNamedItem)           | [removeNamedItemNS](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-removeNamedItemNS)                                                                                         |
| [setAttribute](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttribute)                 | [setAttributeNS](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAttrNS)                                                                                                  |
| [setAttributeNode](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setAttributeNode)         | [setAttributeNodeNS](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElSetAtNodeNS)                                                                                            |
| [setNamedItem](https://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-setNamedItem)                 | [setNamedItemNS](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-setNamedItemNS)                                                                                               |

O primeiro argumento para todos os métodos cientes de _namespace_ em DOM2 devem ser nomes de _namespace_ (também conhecidos como _namespace_ URI) do elemento ou atributo em questão. Para **elementos** SVG isto é 'http\://www\.w3.org/2000/svg'. Contudo, note cuidadosamente: as recomendações _[Namespaces in XML 1.1](https://www.w3.org/TR/xml-names11/#defaulting)_ declara que o nome de _namespace_ para atributos sem um prefixo não tem um valor. Em outras palavras, states that the _namespace_ name for attributes without a prefix does not have a value. In other words, embora os atributos pertencem ao namespace da tag, você não usa o nome de namespace da tag. Em vez disso, **você deve usar nulo como nome de _namespace_ para atributos não qualificados(sem prefixos)**. Então, para criar um _elemento_ SVG `rect` usando `document.createElementNS()`, você deve escrever:

```javascript
document.createElementNS("https://www.w3.org/2000/svg", "rect");
```

Mas para recuperar o valor de atributo `x` em um elemento SVG `rect`, você deve escrever:

```javascript
rect.getAttributeNS(null, "x");
```

Note que isto não é o caso para atributos _com_ um prefixo de _namespace_ (atributos que não pertencem ao mesmo dialeto XML como a tag). Atributos como o `xlink:href` requerem o nome de _namespace_ que foi designado para aquele prefixo (`https://www.w3.org/1999/xlink` para XLink). Consequentemente para pegar o valor do atributo `xlink:href` de um elemento `<a>` em SVG você deveria escrever:

```javascript
elt.getAttributeNS("https://www.w3.org/1999/xlink", "href");
```

Para definir atributos que tem um _namespace_, é recomendado (mas não requerido) que você também inclua seus prefixos no segundo argumento para que o DOM possa, depois, ser facilmente convertido depois para XML (se, por exemplo você quer enviá-los de volta para o servidor). Por exemplo:

```javascript
elt.setAttributeNS(
  "https://www.w3.org/1999/xlink",
  "xlink:href",
  "otherdoc.svg",
);
```

Como um exemplo final, aqui está a demonstração de como você deveria criar um elemento `<image>` dinamicamente usando script:

```javascript
var SVG_NS = "https://www.w3.org/2000/svg";
var XLink_NS = "https://www.w3.org/1999/xlink";
var image = document.createElementNS(SVG_NS, "image");
image.setAttributeNS(null, "width", "100");
image.setAttributeNS(null, "height", "100");
image.setAttributeNS(XLink_NS, "xlink:href", "flower.png");
```

### Conclusão

Tenha certeza que você sempre declara os _namespaces_ que você usa em seus arquivos XML. Se você não usar, softwares como Firefox não reconhecerão seus conteúdos e irão simplesmente mostrar a marcação XML ou informar o usuário que há um erro no XML. É uma boa idéia usar um template que inclui todas as declarações de _namespace_ comumente usadas ao criar novos arquivos SVG. Se você não tem um ainda, faça um começando com o seguinte código:

```
<svg xmlns="https://www.w3.org/2000/svg"
     xmlns:xlink="https://www.w3.org/1999/xlink">
</svg>
```

Mesmo que você não use todos aqueles _namespaces_ em um documento, não há dano ao incluir declarações de _namespace_. Isto pode te privar de alguns erros irritantes se você acabar adicionando conteúdo de um dos _namespaces_ não usados em datas posteriores.

### Um exemplo completo

Para um exemplo completo, veja _[SVG: Namespaces Crash Course: Example](/pt-BR/docs/Web/SVG/Namespaces_Crash_Course/Example)_.
