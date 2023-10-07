---
title: contentStyleType
slug: Web/SVG/Attribute/contentStyleType
---

« [Página inicial de referência do atributo SVG](/pt-BR/SVG/Attribute)

Este atributo especifica a linguagem da folha de estilo do fragmento do documento especificado. O contentStyleType é definido no elemento {{ SVGElement("svg") }}. Caso não seja definido, o valor padrão assumido será `text/css`.

## Contexto de uso

| Categorias          | _Nenhuma_                                                                               |
| ------------------- | --------------------------------------------------------------------------------------- |
| Valor               | \<content-type>                                                                         |
| Animável?           | Não                                                                                     |
| Documento normativo | [SVG 1.1 (2ª Edição)](https://www.w3.org/TR/SVG/styling.html#ContentStyleTypeAttribute) |

Uma vez que o CSS é a única linguagem de folha de estilos amplamente implementada para estilização online, bem como já está definida como valor padrão se o `contentStyleType` não estiver definido, o atributo não é bem suportado em motores de renderização. Se outra linguagem de folha de estilos se tornar mais popular, ela não poderá utilizar o atributo {{ SVGAttr("style") }}, ao invés disso, poderá ser facilmente declarada qual a linguagem de estilo está sendo utilizada através do atributo type da `tag` {{ SVGElement("style") }}.

Portanto, a utilização de `contentStyleType` está obsoleto.

## Veja também

- {{ SVGElement("style") }}
- {{ SVGAttr("style") }}
