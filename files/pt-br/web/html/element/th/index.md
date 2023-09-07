---
title: <th>
slug: Web/HTML/Element/th
---

{{HTMLSidebar}}

O **elemento HTML `<th>`** define uma célula cabeçalho do grupo de células de sua tabela. A exatidão natural deste grupo é definida pelos atributos [`scope`](/pt-BR/docs/Web/HTML/Element/th#scope) e [`headers`](/pt-BR/docs/Web/HTML/Element/th#headers).

{{EmbedInteractiveExample("pages/tabbed/th.html","tabbed-taller")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/Web/Guide/HTML/Content_categories"
          >Categorias do conteúdo</a
        >
      </th>
      <td>Nenhuma.</td>
    </tr>
    <tr>
      <th scope="row">Conteúdo permitido</th>
      <td>
        <a href="/pt-BR/docs/Web/Guide/HTML/Content_categories#Flow_content"
          >Conteúdo de fluxo</a
        >, mas sem descendentes de cabeçalho, rodapé, conteúdo de seção ou
        conteúdo de cabeçalho.
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de tag</th>
      <td>
        A tag de abertura é obrigatória.<br />A tag de fechamento pode ser
        omitida, se for imediatamente seguido por um
        {{HTMLElement("th")}}, {{HTMLElement("td")}} ou se não
        houver mais dados em seu elemento pai.
      </td>
    </tr>
    <tr>
      <th scope="row">Elemento pai</th>
      <td>Um elemento {{HTMLElement("tr")}}.</td>
    </tr>
    <tr>
      <th scope="row">Funções ARIA permitidas</th>
      <td>Qualquer</td>
    </tr>
    <tr>
      <th scope="row">DOM interface</th>
      <td>{{domxref("HTMLTableHeaderCellElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Esse elemento inclui os [atributos globais](/pt-BR/docs/Web/HTML/Global_attributes).

- {{htmlattrdef("abbr")}}
  - : Este atributo contém uma breve descrição do conteúdo da célula. Alguns usuários-agentes, como leitores, pode apresentar essa descrição antes do próprio conteúdo.
- {{htmlattrdef("colspan")}}
  - : Este atributo contém um valor inteiro não negativo que indica quantas colunas a célula ocupará. Valor padrão `1`. Valores acima de 1000 são considerados incorretos e serão modificados para o valor padrão `1`.
- {{htmlattrdef("headers")}}
  - : Este atributo contém uma lista de palavras separadas por espaço, cada uma correspondendo ao atributo **id** dos elementos {{HTMLElement("th")}} que se aplicam a este elemento.
- {{htmlattrdef("rowspan")}}
  - : Este atributo contém um valor inteiro não negativo que indica quantas linhas a célula estende. Valor padrão `1`. Se seu valor é definido como `0`, ele se estende até o final da tabela ({{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot")}}, mesmo que implicitamente definido), que a célula pertence. Não é possível colocar valores superiores a 65534.
- {{htmlattrdef("scope")}}

  - : Este atributo define as células a que o cabeçalho (definido no elemento {{HTMLElement("th")}}) se relaciona.
    Possíveis valores:

    - `row`: O cabeçalho se relaciona com todas as células da linha a que pertence.
    - `col`: O cabeçalho se relaciona com todas as células da coluna a que pertence.
    - `rowgroup`: O cabeçalho pertence a um grupo de linhas e se relaciona com todas as suas células. Essas células podem ser colocadas à direita ou à esquerda do cabeçalho, dependendo do valor do atributo [`dir`](/pt-BR/docs/Web/HTML/Global_attributes/dir) no elemento {{HTMLElement("table")}}.
    - `colgroup`: O cabeçalho pertence a um grupo de colgroup e se relaciona com todas as suas células.
    - `auto`

    O valor padrão quando este atributo não é especificado é `auto`.

### Atributos depreciados

- {{htmlattrdef("align")}}

  - : Este atributo especifica como o alinhamento horizontal do conteúdo da célula será tratado.

    Possíveis valores:

    - `left`: O conteúdo é alinhado a esquerda da célula.
    - `center`: O conteúdo é centralizado da célula.
    - `right`: O conteúdo é alinhado a direita da célula.
    - `justify` (somente com texto): O conteúdo é estendido dentro da célula para cobrir toda a sua largura.
    - `char` (somente com texto): O conteúdo está alinhado a um caractere dentro do elemento `<th>` com deslocamento mínimo. Esse caractere é definido pelos atributos [`char`](/pt-BR/docs/Web/HTML/Element/th#char) e [`charoff`](/pt-BR/docs/Web/HTML/Element/th#charoff).

    O valor padrão quando não especificado é `left`.

    > **Note:**Não use esse atributo, pois ele está obsoleto no padrão mais recente.- Para alcançar o mesmo efeito que os valores `left`, `center`, `right` ou `justify`, aplique a propriedade CSS {{cssxref("text-align")}} no elemento.
    >
    > - Para alcançar o mesmo efeito que os valor `char`, atribue a {{cssxref("text-align")}} o mesmo valor que você usaria para [`char`](/pt-BR/docs/Web/HTML/Element/th#char). {{unimplemented_inline}} no CSS3.

- {{htmlattrdef("axis")}}

  - : Este atributo contém uma lista de palavras separadas por espaço. Cada palavra é o `id` de um grupo de células às quais este cabeçalho se aplica.

    > **Note:** Não use esse atributo, pois ele está obsoleto no padrão mais recente: use o atributo [`scope`](/pt-BR/docs/Web/HTML/Element/th#scope).

- {{htmlattrdef("bgcolor")}} {{Non-standard_inline}}

  - : Esse atributo define a cor de fundo de cada célula na coluna. Ele consiste de 6 digitos hexadecimais definidos pelo [sRGB](https://www.w3.org/Graphics/Color/sRGB) com o prefixo '#. Nesse atributo pode ser usado dezesseis cores predefinidas:

    |     | `black` = "#000000"   |     | `green` = "#008000"  |
    | --- | --------------------- | --- | -------------------- |
    |     | `silver` = "#C0C0C0"  |     | `lime` = "#00FF00"   |
    |     | `gray` = "#808080"    |     | `olive` = "#808000"  |
    |     | `white` = "#FFFFFF"   |     | `yellow` = "#FFFF00" |
    |     | `maroon` = "#800000"  |     | `navy` = "#000080"   |
    |     | `red` = "#FF0000"     |     | `blue` = "#0000FF"   |
    |     | `purple` = "#800080"  |     | `teal` = "#008080"   |
    |     | `fuchsia` = "#FF00FF" |     | `aqua` = "#00FFFF"   |

    > **Note:** Não use esse atributo como padrão pois não é implementado em algumas versões do Microsoft Internet Explorer: O elemento {{HTMLElement("th")}} deve ser estilizado usando [CSS](/pt-BR/docs/Web/CSS). Para criar um efeito semelhante, use a propriedade {{cssxref("background-color")}} do [CSS](/pt-BR/docs/Web/CSS).

- {{htmlattrdef("char")}}

  - : O conteúdo da célula está alinhado a um caractere. Os valores típicos incluem um ponto (.) para alinhar números ou valores monetários. Se [`align`](/pt-BR/docs/Web/HTML/Element/th#align) não está definido no `char`, o atributo é ignorado.

    > **Note:** Não use esse atributo, pois ele está obsoleto no padrão mais recente. Para obter o mesmo efeito, você pode especificar o caractere como o primeiro valor da propriedade {{cssxref("text-align")}}, {{unimplemented_inline}} no CSS3.

- {{htmlattrdef("charoff")}}

  - : Este atributo é usado para mudar os dados da coluna para a direita do caractere especificado pelo atributo **char**. Seu valor especifica o comprimento desse deslocamento.

    > **Note:**Não use esse atributo, pois ele está obsoleto no padrão mais recente.

- {{htmlattrdef("height")}} {{Deprecated_inline}}

  - : Esse atributo é usado para definir uma altura recomendada da célula.

    > **Note:**Não use esse atributo, pois ele está obsoleto no padrão mais recente: use a propriedade CSS {{cssxref("height")}}.

- {{htmlattrdef("valign")}}

  - : Esse atributo especifica como o texto é alinhado verticalmente na célula.

    Possíveis valores:

    - `baseline`: Posiciona o texto próximo à parte inferior da célula e o alinha ao [roda pé](https://en.wikipedia.org/wiki/Baseline_%28typography%29). Se os caracteres não descerem abaixo da linha de base, o valor da linha de base alcançará o mesmo efeito que `bottom`.
    - `bottom`: Posiciona o texto próximo à parte inferior da célula.
    - `middle`: Centraliza o texto na célula.
    - `top`: Posiciona o texto próximo à parte superior da célula.

    > **Note:** Não use esse atributo, pois ele está obsoleto no padrão mais recente: use a propriedade CSS {{cssxref("vertical-align")}}.

- {{htmlattrdef("width")}} {{Deprecated_inline}}

  - : Este atributo é usado para definir uma largura de célula recomendada. Espaço adicional pode ser adicionado com as propriedades {{domxref("HTMLTableElement.cellSpacing", "cellspacing")}} e {{domxref("HTMLTableElement.cellPadding", "cellpadding")}}, e a largura do elemento {{HTMLElement("col")}} pode criar largura extra. Mas, se a largura de uma coluna for muito estreita para mostrar uma célula específica corretamente, ela será ampliada quando exibida.

    > **Note:** Não use esse atributo, pois ele está obsoleto no padrão mais recente: use a propriedade CSS {{cssxref("width")}}.

## Exemplos

Veja {{HTMLElement("table")}} para mais elementos `<th>`.

## Especificações

| Especificações                                                            | Estados                  | Comentário |
| ------------------------------------------------------------------------- | ------------------------ | ---------- |
| {{SpecName('HTML WHATWG','tables.html#the-th-element','th element')}}     | {{Spec2('HTML WHATWG')}} |            |
| {{SpecName('HTML5 W3C','tabular-data.html#the-th-element','th element')}} | {{Spec2('HTML5 W3C')}}   |            |

## Compatibilidade com navegadores

{{Compat("html.elements.th")}}

## Veja mais

- Outros elementos HTML relacionados: {{HTMLElement("caption")}}, {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}.
