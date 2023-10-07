---
title: <ul>
slug: Web/HTML/Element/ul
---

O **elemento HTML`<ul>`** (ou _elemento_ _HTML de Lista desordenada_) representa uma lista de itens sem ordem rígida, isto é, uma coleção de itens que não trazem uma ordenação numérica e as suas posições, nessa lista, são irrelevantes. Caracteristicamente, os itens em uma lista desordenada são exibidos com um marcador que pode ter várias formas, como um ponto, um círculo, ou um quadrado. O tipo de marcador não é definido na descrição HTML da página, mas na CSS associada, utilizando a propriedade {{ cssxref("list-style-type") }}.

Não há nenhuma limitação para a profundidade e a imbricação das listas definidas com os elementos {{ HTMLElement("ol") }} e {{ HTMLElement("ul") }}.

> **Note:** **Nota sobre a utilização:** Ambos os elementos {{ HTMLElement("ol") }} e {{ HTMLElement("ul") }} representam uma lista de itens. São diferentes porque, com o elemento {{ HTMLElement("ol") }}, a ordenação tem significado. Como regra de ouro para determinar qual dos dois usar, tente mudar a posição dos itens na lista; caso a significação seja alterada, o elemento {{ HTMLElement("ol") }} deve ser utilizado mas, se não houver mudança, você pode aplicar {{ HTMLElement("ul") }}.

## Contexto de utilização

<table class="properties">
  <tbody>
    <tr>
      <td>
        <a href="/en/HTML/Content_categories"
          >Categorias de conteúdo</a
        >
      </td>
      <td>
        <a
          href="/en/HTML/Content_categories#flow_content"
          >Flutuantes</a
        >
      </td>
    </tr>
    <tr>
      <td>Conteúdo permitido</td>
      <td>
        zero ou mais<code> </code>{{ HTMLElement("li") }}<code
        > </code>elementos, eventualmente combinados com<code
        > </code>{{ HTMLElement("ol") }}<code> </code>e elementos<code
        > </code>{{ HTMLElement("ul") }}.
      </td>
    </tr>
    <tr>
      <td>Omissão de etiqueta (<em>Tag</em>)</td>
      <td>
        nenhuma, ambas as etiquetas - de início e de fim - são obrigatórias
      </td>
    </tr>
    <tr>
      <td>Elementos pai permitidos</td>
      <td>qualquer elemento que receba conteúdo flutuante</td>
    </tr>
    <tr>
      <td>Interface DOM</td>
      <td>{{domxref("HTMLUListElement")}}</td>
    </tr>
  </tbody>
</table>

## Atributos

Este elemento inclui os [atributos globais](/pt-BR/docs/HTML/Global_attributes).

- {{ htmlattrdef("compact") }}{{ Deprecated_inline() }}

  - : Este atributo booleano sugere que a lista será processada em um modelo compacto. A interpretação deste atributo depende do perfil de navegação (_user agent_) e não funciona em todos os navegadores.

    > **Note:** **Nota de utilização:** Não aplique este atributo, que foi preterido - o elemento {{ HTMLElement("ul") }} deve ser definido utilizando-se a folha de estilos [CSS](/pt-BR/CSS). Para dar um efeito similar ao atributo compacto, a propriedade [line-height](/pt-BR/CSS/line-height) (espaçamento), da [CSS](/pt-BR/CSS), pode ser utilizada com um valor de 80%.

- {{ htmlattrdef("type") }}{{ Deprecated_inline() }}

  - : Usados para estabelecer o tipo de marcador da lista. Os valores definidos durante a [HTML3.2](/pt-BR/HTML3.2) e a versão de transição de [HTML 4.0/4.01](/pt-BR/HTML4.01), são:

    - `círculo`,
    - `disco`,
    - e `quadrado`.

    Um quarto tipo de marcação está definido na interface _WebTV_, mas nem todos os navegadores o acolhem: `triângulo.`

    Se não estiver presente e se nenhuma propriedade [CSS](/pt-BR/CSS) {{ cssxref("list-style-type") }} se aplicar ao elemento, o perfil de navegação decidirá qual tipo de marcador utilizar, dependendo do nível de aninhamento da lista.

    > **Note:** **Nota de utilização:** Não use este atributo, pois está ultrapassado; em seu lugar, utilize a propriedade [CSS](/pt-BR/CSS) {{ cssxref("list-style-type") }}.

## Exemplos

### Exemplo simples

```html
<ul>
  <li>primeiro item</li>
  <li>segundo item</li>
  <li>terceiro item</li>
</ul>
```

A HTML acima resulta em:

- primeiro item
- segundo item
- terceiro item

### Lista aninhada

```html
<ul>
  <li>primeiro item</li>
  <li>
    segundo item
    <!-- Observe que a tag de fechamento </li> não é colocada aqui! -->
    <ul>
      <li>segundo item primeiro subitem</li>
      <li>
        segundo item segundo subitem
        <!-- O mesmo para a segunda lista não ordenada aninhada (Same for the second nested unordered list)! -->
        <ul>
          <li>segundo item segundo subitem primeiro sub-subitem</li>
          <li>segundo item segundo subitem segundo sub-subitem</li>
          <li>segundo item segundo subitem terceiro sub-subitem</li>
        </ul>
      </li>
      <!-- A tag de fechamento </li>, que contém a terceira lista não ordenada (Closing </li> tag for the li that contains the third unordered list) -->
      <li>segundo item terceiro subitem</li>
    </ul>
  </li>
  <!-- Aqui entra a tag de fechamento </li> (Here is the closing </li> tag) -->
  <li>terceiro item</li>
</ul>
```

A saída HTML acima, é:

- primeiro item
- segundo item

  - segundo item primeiro subitem
  - segundo item segundo subitem

    - segundo item segundo subitem primeiro sub-subitem
    - segundo item segundo subitem segundo sub-subitem
    - segundo item segundo subitem terceiro sub-subitem

  - segundo item terceiro subitem

- terceiro item

### \<ul> e \<ol> aninhados

```html
<ul>
  <li>primeiro item</li>
  <li>
    segundo item
    <!-- Observe, a tag de fechamento </li> não é colocada aqui! (Look, the closing </li> tag is not placed here!) -->
    <ol>
      <li>segundo item primeiro subitem</li>
      <li>segundo item segundo subitem</li>
      <li>segundo item terceiro subitem</li>
    </ol>
  </li>
  <!-- Aqui está a tag de fechamento </li> (Here is the closing </li> tag) -->
  <li>terceiro item</li>
</ul>
```

A saída HTML acima será:

- primeiro item
- segundo item

  1. segundo item primeiro subitem
  2. segundo item segundo subitem
  3. segundo item terceiro subitem

- terceiro item

## Veja também

- Outros elementos HTML relacionados à lista: {{ HTMLElement("ol") }}, {{ HTMLElement("li") }}, {{ HTMLElement("menu") }} e o obsoleto {{ HTMLElement("dir") }};
- Propriedades CSS que podem ser especialmente úteis para determinar o modelo do elemento \<ul>:

  - a propriedade [list-style](/pt-BR/CSS/list-style), conveniente para escolher a maneira como os ordinais serão mostrados,
  - [CSS counters](/pt-BR/CSS_Counters), eficientes para guiar listas complexas aninhadas,
  - a propriedade [line-height](/pt-BR/CSS/line-height), válida para simular o atributo ultrapassado [`compact`](/pt-BR/docs/Web/HTML/Element/ul#compact),
  - a propriedade [margin](/pt-BR/CSS/margin), proveitosa para controlar a indentação da lista.

{{ HTMLSidebar }}
