---
title: "<tfoot>: Elemento para o rodapé da tabela"
slug: Web/HTML/Element/tfoot
---

{{HTMLSidebar}}

O **`<tfoot>`** é um **elemento HTML** que define um conjunto de linhas as quais farão parte do rodapé de uma tabela HTML

{{EmbedInteractiveExample("pages/tabbed/tfoot.html","tabbed-taller")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/Web/Guide/HTML/Content_categories"
          >Categorias de conteúdo</a
        >
      </th>
      <td>Nenhum.</td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>Zero ou mais {{HTMLElement("tr")}} elementos.</td>
    </tr>
    <tr>
      <th scope="row">Omitir Tag</th>
      <td>
        Iniciar a tag é obrigatório. O fechamento da tag pode ser omitida caso
        não exista mais conteúdo no elemento pai
        {{HTMLElement("table")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Pais permitidos</th>
      <td>
        O elemento {{HTMLElement("table")}}. O
        {{HTMLElement("tfoot")}} deve aparecer depois de qualquer
        {{HTMLElement("caption")}},
        {{HTMLElement("colgroup")}}, {{HTMLElement("thead")}},
        {{HTMLElement("tbody")}}, ou elementos
        {{HTMLElement("tr")}}. Note que isso é requerido no HTML5.<br />
        O elemento {{HTMLElement("tfoot")}} não pode ser colocado depois
        de qualquer {{HTMLElement("tbody")}} e o elemento
        {{HTMLElement("tr")}}. Note que isso contradiz diretamento com as
        normas do HTML5.
      </td>
    </tr>
    <tr>
      <th scope="row">Papeis de ARIA permitidos</th>
      <td>Qualquer um</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLTableSectionElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("align")}} {{Deprecated_inline}}

  - : Estes atributos especificam como será o alinhamento horizontal de cada conteúdo da célula. Os possíveis valores são:

    - `left`, alinha o conteúdo do elemento a esquerda da célula
    - `center`, centraliza o conteúdo ao centro da célula
    - `right`, alinha o conteúdo do elemento a direita da célula
    - `justify`, insere espaços ao texto para que o mesmo fique centralizado na célula
    - `char`, alinha o texto em um alinhamento especial com um deslocamento mínimo definido pelos atributos [`char`](/pt-BR/docs/Web/HTML/Element/tbody#char) e [`charoff`](/pt-BR/docs/Web/HTML/Element/tbody#charoff) atributos {{unimplemented_inline("2212")}}.

    Se nenhum atributo for definido o valor `left` é passado por padrão

    > **Note:**Não use esse atributo o mesmo está obsoleto (não suportado) no último padrão.- Para obter os mesmo efeitos `left`, `center`, `right` ou `justify`, use a propriedade {{cssxref("text-align")}} do CSS.
    >
    > - Para obter o mesmo efeito no CSS3, você pode usar os valores [`char`](/pt-BR/docs/Web/HTML/Element/tfoot#char) com o valor de {{cssxref("text-align")}} propriedade {{unimplemented_inline}}.

- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}

  - : Este atributo define uma cor de fundo para cada célula da coluna. Cada um dos 6 dígitos define um código hexadecimal no [sRGB](https://www.w3.org/Graphics/Color/sRGB), prefixado pelo '#'. Um desses nomes de cores predefinidos também podem ser usado:

    |     | `black` = "#000000"   |     | `green` = "#008000"  |
    | --- | --------------------- | --- | -------------------- |
    |     | `silver` = "#C0C0C0"  |     | `lime` = "#00FF00"   |
    |     | `gray` = "#808080"    |     | `olive` = "#808000"  |
    |     | `white` = "#FFFFFF"   |     | `yellow` = "#FFFF00" |
    |     | `maroon` = "#800000"  |     | `navy` = "#000080"   |
    |     | `red` = "#FF0000"     |     | `blue` = "#0000FF"   |
    |     | `purple` = "#800080"  |     | `teal` = "#008080"   |
    |     | `fuchsia` = "#FF00FF" |     | `aqua` = "#00FFFF"   |

    > **Note:** Não use este atributo, como não é mais padrão ele não foi implementado em algumas versões do Microsoft Internet Explorer: o elemento {{HTMLElement("tfoot")}} pode ser estilizando com [CSS](/pt-BR/docs/Web/CSS). Para conseguir simular efeitos do atributo **bgcolor** use a propriedade {{cssxref("background-color")}} do [CSS](/pt-BR/docs/Web/CSS) , nos elementos {{HTMLElement("td")}} ou {{HTMLElement("th")}}.

- {{htmlattrdef("char")}} {{Deprecated_inline}}

  - : O elemento é usado para alinhar as células em uma columa. Valores típicos para isso inclui o periódico (.) quando se alinha valores monetários. Se [`align`](/pt-BR/docs/Web/HTML/Element/tfoot#align) não é definido para `char`, este atributo é ignorado

    > **Nota:** Não use esté atributo, ele é obsoleto (e não é mais suportado) desde da última versão padrão. Em vez disso use [`char`](/pt-BR/docs/Web/HTML/Element/tfoot#char) no CSS3, você pode usar o atributo [`char`](/pt-BR/docs/Web/HTML/Element/tfoot#char) com a propriedade {{cssxref("text-align")}}.

- {{htmlattrdef("charoff")}} {{Deprecated_inline}}

  - : O atributo é usado para indicar um número de caracteres para compensar os dados da coluna dos caracteres de alinhamento especificados pelo atributo **char**.

    > **Nota:** Não use esse atributo o mesmo está obsoleto (e não é mais suportado) na última versão padrão.

- {{htmlattrdef("valign")}} {{Deprecated_inline}}

  - : O atributo específico para o alinhamento do texto dentro de cada linha da célula do cabeçalho de uma tabela. Possíveis valores para esse atributo são:

    - `baseline`, coloca o texto o mais próximo possível da parte de baixo da célula, mas o alinha a [baseline](https://en.wikipedia.org/wiki/Baseline_%28typography%29) dos caracteres em vez do **bottom** deles. Caso os caracteres tenham todos os mesmo tamanho, eles terão o mesmo efeito que `bottom`.
    - `bottom`, coloca o texto o mais próximo possível da parte de baixo da célula;
    - `middle`, centraliza o texto na célula;
    - e `top`, coloca o texto o mais próximo possível do topo da célula.

    > **Nota:** Não use este atributo eles está obsoleto (e não é suportado) no último padrão: em vez disso use a propriedade {{cssxref("vertical-align")}} do CSS.

## Exemplos

Por favor veja a página {{HTMLElement("table")}} para exemplos sobre `<tfoot>`.

## Especificações

| Especificações                                                                  | Status                   | Comentários |
| ------------------------------------------------------------------------------- | ------------------------ | ----------- |
| {{SpecName('HTML WHATWG','tables.html#the-tfoot-element','tfoot element')}}     | {{Spec2('HTML WHATWG')}} |             |
| {{SpecName('HTML5 W3C','tabular-data.html#the-tfoot-element','tfoot element')}} | {{Spec2('HTML5 W3C')}}   |             |

## Compatibilidade com navegadores

{{Compat("html.elements.tfoot")}}

## Veja também

- Outros elemento HTML relacionados a tabela: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}};
- Propriedades CSS e pseudo-classes são especialmente úteis para estilizar elementos `<tfoot>`:

  - a pseudo-class {{cssxref(":nth-child")}} para definir o alinhamento nas células de uma coluna;
  - a propriedade {{cssxref("text-align")}} para alinar as células do conteúdo que tenham um memso caractere como '.'.
