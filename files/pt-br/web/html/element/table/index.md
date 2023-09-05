---
title: "<table>: O elemento Table"
slug: Web/HTML/Element/table
---

{{HTMLSidebar}}

O elemento **`<table>`** [HTML](/pt-BR/docs/Web/HTML) representa dados tabulares — isto é, informações apresentadas em uma tabela bidimensional composta por linhas e colunas de células contendo dados .

{{EmbedInteractiveExample("pages/tabbed/table.html","tabbed-standard")}}

## Contexto de uso

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/pt-BR/docs/Web/HTML/Content_categories"
          >Categoria de conteúdo</a
        >
      </th>
      <td>
        <a href="/pt-BR/docs/HTML/Content_categories#Flow_content"
          >Fluxo de conteúdo</a
        >
      </td>
    </tr>
    <tr>
      <td scope="row">Conteúdo permitido</td>
      <td>
        Nesta ordem:
        <ol>
          <li>um elemento {{HTMLElement("caption")}} opcional,</li>
          <li>zero ou mais {{HTMLElement("colgroup")}} elementos,</li>
          <li>um elemento {{HTMLElement("thead")}} opcional,</li>
          <li>
            uma das duas alternativas:
            <ul>
              <li>zero ou mais elementos {{HTMLElement("tbody")}}</li>
              <li>um ou mais elementos {{HTMLElement("tr")}}</li>
            </ul>
          </li>
          <li>um elemento {{HTMLElement("tfoot")}} opcional</li>
        </ol>
      </td>
    </tr>
    <tr>
      <th scope="row">Omissão de tag</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Elementos pais permitidos</th>
      <td>Qualquer elemento que aceite fluxo de conteúdo</td>
    </tr>
    <tr>
      <th scope="row">Função ARIA implícita</th>
      <td>
        <code
          ><a href="/pt-BR/docs/Web/Accessibility/ARIA/Roles/Table_Role"
            >table</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Permitted ARIA roles</th>
      <td>Any</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLTableElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

### Atributos depreciados

- `align` {{Deprecated_inline}}

  - : Este atributo [enumerado](/pt-BR/docs/Glossary/Enumerated) indica como a tabela deve ser alinhada dentro do documento que a contém. Pode ter os seguintes valores:

    - `left`: a tabela é exibida no lado esquerdo do documento;
    - `center`: a tabela é exibida no centro do documento;
    - `right`: a tabela é exibida no lado direito do documento.

    Defina {{cssxref("margin-left")}} e {{cssxref("margin-right")}} como `auto` ou {{cssxref("margin")}} como `0 auto` para obter um efeito que é semelhante ao atributo align.

- `bgcolor` {{Deprecated_inline}}

  - : A cor de fundo da tabela. É um [código RGB hexadecimal de 6 dígitos](/pt-BR/docs/Web/CSS/hex-color), prefixado por um '`#`'. Uma das [palavras-chave de cor] predefinidas (/pt-BR/docs/Web/CSS/named-color) também pode ser usada.

    Para obter um efeito semelhante, use a propriedade CSS {{cssxref("background-color")}}.

- `border` {{Deprecated_inline}}

  - : Este atributo inteiro define, em pixels, o tamanho do quadro ao redor da tabela. Se definido como 0, o atributo [`frame`](#frame) é definido como void.

    Para obter um efeito semelhante, use a propriedade abreviada CSS {{cssxref("border")}}.

- `cellpadding` {{Deprecated_inline}}

  - : Este atributo define o espaço entre o conteúdo de uma célula e sua borda, exibida ou não. Se o comprimento do preenchimento da célula for definido em pixels, esse espaço de tamanho de pixel será aplicado a todos os quatro lados do conteúdo da célula. Se o comprimento for definido usando um valor percentual, o conteúdo será centralizado e o espaço vertical total (superior e inferior) representará este valor. O mesmo vale para o espaço horizontal total (esquerda e direita).

    Para obter um efeito semelhante, aplique a propriedade {{cssxref("border-collapse")}} ao elemento `<table>`, com seu valor definido para recolher, e a propriedade {{cssxref("padding")}} aos elementos {{HTMLElement("td")}}.

- `cellspacing` {{Deprecated_inline}}

  - : Este atributo define o tamanho do espaço entre duas células em um valor percentual ou pixels. O atributo é aplicado horizontal e verticalmente, ao espaço entre o topo da tabela e as células da primeira linha, a esquerda da tabela e a primeira coluna, a direita da tabela e a última coluna e a parte inferior da tabela e a última linha.

    Para obter um efeito semelhante, aplique a propriedade {{cssxref("border-spacing")}} ao elemento `<table>`. `border-spacing` não tem nenhum efeito se {{cssxref("border-collapse")}} estiver definido para recolher.

- `frame` {{Deprecated_inline}}

  - : Este atributo enumerado define qual lado do quadro ao redor da tabela deve ser exibido.

    Para obter um efeito semelhante, use as propriedades {{cssxref("border-style")}} e {{cssxref("border-width")}}.

- `rules` {{Deprecated_inline}}

  - : Este atributo enumerado define onde as rules, ou seja, as linhas, devem aparecer em uma tabela. Pode ter os seguintes valores:

    - `none`, que indica que nenhuma regra será exibida; é o valor padrão;
    - `groups`, que fará com que as regras sejam exibidas entre os grupos de linhas (definidas por {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} e {{HTMLElement("tfoot") }} elementos) e entre grupos de colunas (definidos apenas pelos elementos {{HTMLElement("col")}} e {{HTMLElement("colgroup")}});
    - `rows`, que fará com que as regras sejam exibidas entre as linhas;
    - `cols`, que fará com que as regras sejam exibidas entre as colunas;
    - `all`, que fará com que as regras sejam exibidas entre linhas e colunas.

    Para obter um efeito semelhante, aplique a propriedade {{cssxref("border")}} ao apropriado {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, {{HTMLElement("tfoot ")}}, {{HTMLElement("col")}}, ou {{HTMLElement("colgroup")}} elementos.

- `summary` {{Deprecated_inline}}
  - : Este atributo define um texto alternativo que resume o conteúdo da tabela. Use o elemento {{htmlelement("caption")}} em vez disso.
- `width` {{Deprecated_inline}}
  - : Este atributo define a largura da tabela. Em vez disso, use a propriedade CSS {{cssxref("width")}}.

## Exemplos

### Table simples

```html
<table>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>
```

#### Resultado

{{EmbedLiveSample('Simple_table', '100%', '100')}}

### Outros exemplos simples

```html
<p>Tabela simples com cabeçalho</p>
<table>
  <tr>
    <th>First name</th>
    <th>Last name</th>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
  </tr>
  <tr>
    <td>Jane</td>
    <td>Doe</td>
  </tr>
</table>

<p>Tabela com thead, tfoot, e tbody</p>
<table>
  <thead>
    <tr>
      <th>Header content 1</th>
      <th>Header content 2</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Body content 1</td>
      <td>Body content 2</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td>Footer content 1</td>
      <td>Footer content 2</td>
    </tr>
  </tfoot>
</table>

<p>Tabela com colgroup</p>
<table>
  <colgroup span="4"></colgroup>
  <tr>
    <th>Countries</th>
    <th>Capitals</th>
    <th>Population</th>
    <th>Language</th>
  </tr>
  <tr>
    <td>USA</td>
    <td>Washington, D.C.</td>
    <td>309 million</td>
    <td>English</td>
  </tr>
  <tr>
    <td>Sweden</td>
    <td>Stockholm</td>
    <td>9 million</td>
    <td>Swedish</td>
  </tr>
</table>

<p>Tabela com colgroup e col</p>
<table>
  <colgroup>
    <col style="background-color: #0f0" />
    <col span="2" />
  </colgroup>
  <tr>
    <th>Lime</th>
    <th>Lemon</th>
    <th>Orange</th>
  </tr>
  <tr>
    <td>Green</td>
    <td>Yellow</td>
    <td>Orange</td>
  </tr>
</table>

<p>Tabela simples com caption</p>
<table>
  <caption>
    Awesome caption
  </caption>
  <tr>
    <td>Awesome data</td>
  </tr>
</table>
```

```css hidden
table {
  border-collapse: collapse;
  border-spacing: 0px;
}
table,
th,
td {
  padding: 5px;
  border: 1px solid black;
}
```

#### Resultado

{{EmbedLiveSample('Further_simple_examples', '100%', '700')}}

### Ordenação de tabela

#### Ordenando as linhas da tabela

Não há métodos nativos para classificar as linhas (elementos [`<tr>`](/pt-BR/docs/Web/HTML/Element/tr)) de uma tabela HTML. Mas usando [`Array.prototype.slice()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/slice), [`Array.prototype.sort()`](/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/sort), [`Node.removeChild()`](/pt-BR/docs/Web/API/Node/removeChild) e [`Node.appendChild()`](/pt-BR/docs/Web/API/Node/appendChild), você pode implementar sua própria função `sort()` para classificar uma [`HTMLCollection`](/pt-BR/docs/Web/API/HTMLCollection) de elementos `<tr>`.

No exemplo abaixo, você pode ver tal exemplo. Estamos anexando-o ao elemento \<tbody> para que ele classifique as células da tabela em ordem crescente de valor e atualize a exibição para se adequar.

##### HTML

```html
<table>
  <tbody>
    <tr>
      <td>3</td>
    </tr>
    <tr>
      <td>2</td>
    </tr>
    <tr>
      <td>1</td>
    </tr>
  </tbody>
</table>
```

##### JavaScript

```js
HTMLTableSectionElement.prototype.sort = function (cb) {
  Array.from(this.rows)
    .sort(cb)
    .forEach((e) => this.appendChild(this.removeChild(e)));
};

document
  .querySelector("table")
  .tBodies[0].sort((a, b) => a.textContent.localeCompare(b.textContent));
```

##### Resultado

{{EmbedLiveSample('Sorting_table_rows', '100%', '100')}}

#### Ordenando as linhas com um clique no elemento th

O exemplo a seguir adiciona um manipulador de eventos a cada elemento `<th>` de cada `<table>` no `document`; ele ordena todas as linhas do `<tbody>`, baseando a ordenação nas células `td` contidas nas linhas.

> **Nota:** Esta solução assume que os elementos `<td>` são preenchidos por texto bruto sem elementos descendentes.

##### HTML

```html
<table>
  <thead>
    <tr>
      <th>Números</th>
      <th>Letras</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>3</td>
      <td>A</td>
    </tr>
    <tr>
      <td>2</td>
      <td>B</td>
    </tr>
    <tr>
      <td>1</td>
      <td>C</td>
    </tr>
  </tbody>
</table>
```

##### JavaScript

```js
const allTables = document.querySelectorAll("table");

for (const table of allTables) {
  const tBody = table.tBodies[0];
  const rows = Array.from(tBody.rows);
  const headerCells = table.tHead.rows[0].cells;

  for (const th of headerCells) {
    const cellIndex = th.cellIndex;

    th.addEventListener("click", () => {
      rows.sort((tr1, tr2) => {
        const tr1Text = tr1.cells[cellIndex].textContent;
        const tr2Text = tr2.cells[cellIndex].textContent;
        return tr1Text.localeCompare(tr2Text);
      });

      tBody.append(...rows);
    });
  }
}
```

##### Resultado

{{EmbedLiveSample('Sorting_rows_with_a_click_on_the_th_element', '100%', '100')}}

### Exibindo tabelas grandes em espaços pequenos

Um problema comum com tabelas na web é que elas não funcionam muito bem nativamente em telas pequenas quando a quantidade de conteúdo é grande, e a maneira de torná-las roláveis não é óbvia, especialmente quando a marcação pode vir de um CMS e não pode ser modificado para ter um wrapper.

Este exemplo fornece uma maneira de exibir tabelas em espaços pequenos. Ocultamos o conteúdo HTML porque ele é muito grande e não há nada de extraordinário nele. O CSS é mais útil para inspecionar neste exemplo.

```html hidden
<table>
  <thead>
    <tr>
      <th>1<sup>3</sup> equals:
      <th>2<sup>3</sup> equals:
      <th>3<sup>3</sup> equals:
      <th>4<sup>3</sup> equals:
      <th>5<sup>3</sup> equals:
      <th>6<sup>3</sup> equals:
      <th>7<sup>3</sup> equals:
  <tbody>
    <tr>
      <td>row 1: 1
      <td>row 1: 8
      <td>row 1: 27
      <td>row 1: 64
      <td>row 1: 125
      <td>row 1: 216
      <td>row 1: 343
    <tr>
      <td>row 2: 1
      <td>row 2: 8
      <td>row 2: 27
      <td>row 2: 64
      <td>row 2: 125
      <td>row 2: 216
      <td>row 2: 343
    <tr>
      <td>row 3: 1
      <td>row 3: 8
      <td>row 3: 27
      <td>row 3: 64
      <td>row 3: 125
      <td>row 3: 216
      <td>row 3: 343
    <tr>
      <td>row 4: 1
      <td>row 4: 8
      <td>row 4: 27
      <td>row 4: 64
      <td>row 4: 125
      <td>row 4: 216
      <td>row 4: 343
    <tr>
      <td>row 5: 1
      <td>row 5: 8
      <td>row 5: 27
      <td>row 5: 64
      <td>row 5: 125
      <td>row 5: 216
      <td>row 5: 343
    <tr>
      <td>row 6: 1
      <td>row 6: 8
      <td>row 6: 27
      <td>row 6: 64
      <td>row 6: 125
      <td>row 6: 216
      <td>row 6: 343
    <tr>
      <td>row 7: 1
      <td>row 7: 8
      <td>row 7: 27
      <td>row 7: 64
      <td>row 7: 125
      <td>row 7: 216
      <td>row 7: 343
    <tr>
      <td>row 8: 1
      <td>row 8: 8
      <td>row 8: 27
      <td>row 8: 64
      <td>row 8: 125
      <td>row 8: 216
      <td>row 8: 343
    <tr>
      <td>row 9: 1
      <td>row 9: 8
      <td>row 9: 27
      <td>row 9: 64
      <td>row 9: 125
      <td>row 9: 216
      <td>row 9: 343
    <tr>
      <td>row 10: 1
      <td>row 10: 8
      <td>row 10: 27
      <td>row 10: 64
      <td>row 10: 125
      <td>row 10: 216
      <td>row 10: 343
    <tr>
      <td>row 11: 1
      <td>row 11: 8
      <td>row 11: 27
      <td>row 11: 64
      <td>row 11: 125
      <td>row 11: 216
      <td>row 11: 343
    <tr>
      <td>row 12: 1
      <td>row 12: 8
      <td>row 12: 27
      <td>row 12: 64
      <td>row 12: 125
      <td>row 12: 216
      <td>row 12: 343
    <tr>
      <td>row 13: 1
      <td>row 13: 8
      <td>row 13: 27
      <td>row 13: 64
      <td>row 13: 125
      <td>row 13: 216
      <td>row 13: 343
    <tr>
      <td>row 14: 1
      <td>row 14: 8
      <td>row 14: 27
      <td>row 14: 64
      <td>row 14: 125
      <td>row 14: 216
      <td>row 14: 343
    <tr>
      <td>row 15: 1
      <td>row 15: 8
      <td>row 15: 27
      <td>row 15: 64
      <td>row 15: 125
      <td>row 15: 216
      <td>row 15: 343
    <tr>
      <td>row 16: 1
      <td>row 16: 8
      <td>row 16: 27
      <td>row 16: 64
      <td>row 16: 125
      <td>row 16: 216
      <td>row 16: 343
    <tr>
      <td>row 17: 1
      <td>row 17: 8
      <td>row 17: 27
      <td>row 17: 64
      <td>row 17: 125
      <td>row 17: 216
      <td>row 17: 343
    <tr>
      <td>row 18: 1
      <td>row 18: 8
      <td>row 18: 27
      <td>row 18: 64
      <td>row 18: 125
      <td>row 18: 216
      <td>row 18: 343
    <tr>
      <td>row 19: 1
      <td>row 19: 8
      <td>row 19: 27
      <td>row 19: 64
      <td>row 19: 125
      <td>row 19: 216
      <td>row 19: 343
    <tr>
      <td>row 20: 1
      <td>row 20: 8
      <td>row 20: 27
      <td>row 20: 64
      <td>row 20: 125
      <td>row 20: 216
      <td>row 20: 343
</table>
```

Ao observar esses estilos, você notará que a propriedade {{cssxref("display")}} da tabela foi definida como `block`. Embora isso permita a rolagem, a tabela perde um pouco de sua integridade e as células da tabela tentam se tornar o menor possível. Para atenuar esse problema, definimos {{cssxref("white-space")}} como `nowrap` no `<tbody>`. No entanto, não fazemos isso para o `<thead>` para evitar que títulos longos forcem as colunas a serem mais largas do que o necessário para exibir os dados.

Para manter os cabeçalhos da tabela na página durante a rolagem para baixo, definimos {{cssxref("position")}} para fixar nos elementos `<th>`. Observe que **não** definimos {{cssxref("border-collapse")}} como `collapse`, pois se o fizermos, o cabeçalho não pode ser separado corretamente do restante da tabela.

```css
table,
th,
td {
  border: 1px solid;
}

table {
  width: 100%;
  max-width: 400px;
  height: 240px;
  margin: 0 auto;
  display: block;
  overflow-x: auto;
  border-spacing: 0;
}

tbody {
  white-space: nowrap;
}

th,
td {
  padding: 5px 10px;
  border-top-width: 0;
  border-left-width: 0;
}

th {
  position: sticky;
  top: 0;
  background: #fff;
  vertical-align: bottom;
}

th:last-child,
td:last-child {
  border-right-width: 0;
}

tr:last-child td {
  border-bottom-width: 0;
}
```

#### Resultado

{{EmbedLiveSample('Displaying_large_tables_in_small_spaces', '100%', 240)}}

## Preocupações com acessibilidade

### Legendas

Ao fornecer um elemento {{HTMLElement("caption")}} cujo valor descreve de forma clara e concisa o propósito da tabela, ele ajuda as pessoas a decidirem se precisam ler o restante do conteúdo da tabela ou ignorá-lo.

Isso ajuda as pessoas a navegar com o auxílio de tecnologia assistiva, como um leitor de tela, pessoas com problemas de visão subnormal e pessoas com problemas cognitivos.

- [MDN Adicionando uma legenda à sua tabela com \<caption>](/pt-BR/docs/Learn/HTML/Tables/Advanced#adding_a_caption_to_your_table_with_caption)
- [Legenda e resumo • Tabelas • Tutoriais de acessibilidade na Web do W3C WAI](https://www.w3.org/WAI/tutorials/tables/caption-summary/)

### Escopo de linhas e colunas

O atributo [`scope`](/pt-BR/docs/Web/HTML/Element/th#scope) em elementos de cabeçalho é redundante em contextos simples, porque o escopo é inferido. No entanto, algumas tecnologias assistivas podem não obter inferências corretas, portanto, especificar o escopo do cabeçalho pode melhorar a experiência do usuário. Em tabelas complexas, o escopo pode ser especificado para fornecer as informações necessárias sobre as células relacionadas a um cabeçalho.

#### Examples

```html
<table>
  <caption>
    Nomes das cores e valores
  </caption>
  <tbody>
    <tr>
      <th scope="col">Nome</th>
      <th scope="col">HEX</th>
      <th scope="col">HSLa</th>
      <th scope="col">RGBa</th>
    </tr>
    <tr>
      <th scope="row">Teal</th>
      <td><code>#51F6F6</code></td>
      <td><code>hsl(180 90% 64% / 1)</code></td>
      <td><code>rgb(81 246 246 / 1)</code></td>
    </tr>
    <tr>
      <th scope="row">Goldenrod</th>
      <td><code>#F6BC57</code></td>
      <td><code>hsl(38 90% 65% / 1)</code></td>
      <td><code>rgba(246 188 87 / 1)</code></td>
    </tr>
  </tbody>
</table>
```

##### Resultado

{{EmbedLiveSample('Scoping_rows_and_columns')}}

Fornecer uma declaração de `scope="col"` em um elemento {{HTMLElement("th")}} ajudará a descrever que a célula está no topo de uma coluna. Fornecer uma declaração de `scope="row"` em um elemento {{HTMLElement("th")}} ajudará a descrever que a célula é a primeira em uma linha.

- [Tabelas MDN para usuários com deficiência visual](/pt-BR/docs/Learn/HTML/Tables/Advanced#tables_for_visually_impaired_users)
- [Tabelas com dois cabeçalhos • Tabelas • Tutoriais de acessibilidade na Web do W3C WAI](https://www.w3.org/WAI/tutorials/tables/two-headers/)
- [Tabelas com cabeçalhos irregulares • Tabelas • Tutoriais de acessibilidade na Web W3C WAI](https://www.w3.org/WAI/tutorials/tables/irregular/)
- [H63: Usando o atributo scope para associar células de cabeçalho e células de dados em tabelas de dados | Técnicas W3C para WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H63.html)

### Tabelas complicadas

A tecnologia assistiva, como leitores de tela, pode ter dificuldade em analisar tabelas que são tão complexas que as células de cabeçalho não podem ser associadas de maneira estritamente horizontal ou vertical. Isso é normalmente indicado pela presença de [`colspan`](/pt-BR/docs/Web/HTML/Element/td#colspan) e [`rowspan`](/pt-BR/docs/Web/HTML/ Element/td#rowspan).

Idealmente, considere maneiras alternativas de apresentar o conteúdo da tabela, incluindo dividi-la em uma coleção de tabelas relacionadas menores que não precisam depender do uso dos atributos `colspan` e `rowspan`. Além de ajudar as pessoas que usam tecnologia assistiva a entender o conteúdo da tabela, isso também pode beneficiar pessoas com problemas cognitivos que podem ter dificuldade em entender as associações que o layout da tabela está descrevendo.

Se a tabela não puder ser separada, use uma combinação de [`id`](/pt-BR/docs/Web/HTML/Global_attributes#id) e [`headers`](/pt-BR/docs/Web/ HTML/Element/td#headers) para associar programaticamente cada célula da tabela aos cabeçalhos aos quais a célula está associada.

- [Tabelas MDN para usuários com deficiência visual](/pt-BR/docs/Learn/HTML/Tables/Advanced#tables_for_visually_impaired_users)
- [Tabelas com cabeçalhos de vários níveis • Tabelas • Tutoriais de acessibilidade na Web do W3C WAI](https://www.w3.org/WAI/tutorials/tables/multi-level/)
- [H43: Usando os atributos id e headers para associar células de dados com células de cabeçalho em tabelas de dados | Técnicas para W3C WCAG 2.0](https://www.w3.org/TR/WCAG20-TECHS/H43.html)

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Tutorial de tabela de dados HTML](/pt-BR/docs/Learn/HTML/Tables)
- Propriedades CSS que podem ser especialmente úteis para estilizar o elemento `<table>`:

  - {{cssxref("width")}} para controlar a largura da tabela;
  - {{cssxref("border")}}, {{cssxref("border-style")}}, {{cssxref("border-color")}}, {{cssxref("border-width")}} , {{cssxref("border-collapse")}}, {{cssxref("border-spacing")}} para controlar o aspecto das bordas das células, réguas e moldura;
  - {{cssxref("margin")}} e {{cssxref("padding")}} para estilizar o conteúdo da célula individual;
  - {{cssxref("text-align")}} e {{cssxref("vertical-align")}} para definir o alinhamento do texto e do conteúdo da célula.
