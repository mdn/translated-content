---
title: <li>
slug: Web/HTML/Element/li
---

## Resumo

O **_elemento_** **_HTML_ `<li>`** (ou a Lista dos Itens de um elemento HTML) é usado para representar um item que faz parte de uma lista. Este item deve estar contido em um elemento pai: uma lista ordenada ({{HTMLElement("ol")}}), uma lista desordenada ({{HTMLElement("ul")}}) , ou um menu ({{HTMLElement("menu")}}) e representa uma única entidade dessa lista. Em menus e listas desordenadas a relação de itens é exibida, normalmente, usando pontos de marcação (as bolinhas). Em listas ordenadas eles são, comumente, mostrados com algum contador ascendente - como um número, ou letra - à sua esquerda.

- _[Categorias de conteúdo](/pt-BR/docs/Web/HTML/Content_categories)_ Nenhuma.
- _Conteúdo permitido_ [Flutuantes](/pt-BR/docs/Web/HTML/Content_categories#Flow_content).
- _Omissão de etiquetas (tags)_ A etiqueta de fim pode ser omitida se esta for imediatamente seguida por um outro elemento {{HTMLElement("li")}}, ou se não houver mais conteúdo no seu elemento pai.
- _Elementos pai permitidos_ Um elemento {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, ou {{HTMLElement("menu")}}. Embora seja um uso incomum, o obsoleto {{HTMLElement("dir")}} pode ser pai, também.
- _Interface DOM_ {{domxref("HTMLLIElement")}}

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("value")}}

  - : Este atributo de número inteiro indica o valor ordinal atual do item na lista, definido pelo elemento {{HTMLElement("ol")}}. O único valor possível para este atributo é um número, ainda que a lista seja exibida com algarismos romanos, ou letras. A lista de itens que virá em seguida continuará a ser numerada a partir desta posição. O atributo **value** não tem significado para listas desordenadas ({{HTMLElement("ul")}}), nem para menus ({{HTMLElement("menu")}}).

    > **Nota:** Este atributo, abandonado na HTML4, foi reintroduzido na HTML5.

    > **Nota:** Antes de Gecko 9.0, os valores negativos eram, incorretamente, convertidos a 0. A partir de Gecko 9.0 todos os valores inteiros são analisados corretamente.

- {{htmlattrdef("type")}} {{Deprecated_inline}}

  - : A característica deste atributo é indicar o tipo de numeração:

    - `a`: letras minúsculas
    - `A`: letras maiúsculas
    - `i`: algarismos romanos minúsculos
    - `I`: algarismos romanos maiúsculos
    - `1`: números

    Este tipo substitui o utilizado pelo seu elemento pai {{HTMLElement("ol")}}, qualquer que seja.

    > **Note:** **Nota de utilização:** Este atributo foi preterido. Em seu lugar use a propriedade CSS {{cssxref("list-style-type")}}.

## Exemplos

```html
<ol>
  <li>primeiro item</li>
  <li>segundo item</li>
  <li>terceiro item</li>
</ol>
```

A saída HTML acima será:

1. primeiro item
2. segundo item
3. terceiro item

```html
<ul>
  <li>primeiro item</li>
  <li>segundo item</li>
  <li>terceiro item</li>
</ul>
```

- primeiro item
- segundo item
- terceiro item

Para exemplos mais detalhados veja as páginas [\<ol>](/pt-BR/docs/Web/HTML/Element/ol#Examples) e [\<ul>](/pt-BR/docs/Web/HTML/Element/ul#Examples).

## Especificações

| Especificação                                                                     | Estado                   | Observação |
| --------------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG', 'grouping-content.html#the-li-element', '&lt;li&gt;')}} | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C', 'the-li-element.html#the-li-element', '&lt;li&gt;')}}     | {{Spec2('HTML5 W3C')}}   |            |
| {{SpecName('HTML4.01', 'lists.html#h-10.2', '&lt;li&gt;')}}                       | {{Spec2('HTML4.01')}}    |            |

## Compatibilidade com navegadores

{{Compat("html.elements.li")}}

## Veja também

- Outros elementos HTML parentes: {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}} e o obsoleto {{HTMLElement("dir")}};
- Propriedades CSS que podem ser úteis, especialmente para dar um charme ao elemento`<li>`:

  - a propriedade {{cssxref("list-style")}}, para escolher a maneira como os posicionamentos serão exibidos,
  - [contadores CSS](/pt-BR/docs/Web/Guide/CSS/Counters) para controlar listas aninhadas complexas,
  - a propriedade {{cssxref("margin")}}, para controlar a indentação dos itens da lista.

{{HTMLSidebar}}
