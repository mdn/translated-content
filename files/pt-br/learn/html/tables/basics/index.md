---
title: HTML table basics
slug: Learn/HTML/Tables/Basics
translation_of: Learn/HTML/Tables/Basics
original_slug: Aprender/HTML/Tables/Basics
---
{{LearnSidebar}}{{NextMenu("Aprender/HTML/Tabelas/Avançado", "Aprender/HTML/Tabelas")}}

Este artigo é uma introdução às tabelas HTML, cobrindo o básico, como linhas e células, cabeçalhos, fazendo as células ocuparem várias colunas e linhas e como agrupar todas as células em uma coluna para fins de estilo.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Noções básicas de HTML (consulte
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >Introdução ao HTML</a
        >
        ).
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Para obter familiaridade básica com tabelas HTML.</td>
    </tr>
  </tbody>
</table>

## O que é uma tabela?

Uma tabela é um conjunto estruturado de dados composto de linhas e colunas (**dados tabulares**). Uma tabela permite consultar de forma rápida e fácil valores que indicam algum tipo de conexão entre diferentes tipos de dados, por exemplo, uma pessoa e sua idade, ou um dia da semana, ou os horários de uma piscina local.

![Uma tabela de amostra mostrando nomes e idades de algumas pessoas - Chris 38, Dennis 45, Sarah 29, Karen 47.](https://mdn.mozillademos.org/files/14583/numbers-table.png)

![Um cronograma de natação mostrando uma tabela de dados de amostra](https://mdn.mozillademos.org/files/14587/swimming-timetable.png)

As tabelas são muito comumente usadas na sociedade humana, e têm sido por muito tempo, como evidenciado por este documento do Censo dos EUA de 1800:

![Um documento de pergaminho muito antigo;  os dados não são facilmente legíveis, mas mostram claramente uma tabela de dados sendo usada.](https://mdn.mozillademos.org/files/14585/1800-census.jpg)

Portanto, não é de se admirar que os criadores do HTML tenham fornecido um meio de estruturar e apresentar dados tabulares na web.

### Como funciona uma tabela?

Tabelas possuem estrutura. As informações são facilmente interpretadas fazendo associações visuais entre os cabeçalhos de linha e coluna. Veja a tabela abaixo, por exemplo, e encontre um gigante gasoso Júpiter com 62 luas. Você pode encontrar a resposta associando os cabeçalhos de linha e coluna relevantes.

<table>
  <caption>
    Dados sobre os planetas do nosso sistema solar (fatos planetários retirados
    da
    <a href="http://nssdc.gsfc.nasa.gov/planetary/factsheet/"
      >Planilha Planetária da Nasa - Métrica</a
    >
    .
  </caption>
  <thead>
    <tr>
      <td colspan="2"></td>
      <th scope="col">Nome</th>
      <th scope="col">Massa (10 <sup>24</sup> kg)</th>
      <th scope="col">Diâmetro (km)</th>
      <th scope="col">Densidade (kg/m <sup>3</sup> )</th>
      <th scope="col">Gravidade (m/s<sup>2</sup>)</th>
      <th scope="col">Duração do dia (hours)</th>
      <th scope="col">Distancia do Sol (10<sup>6</sup>km)</th>
      <th scope="col">Temperatura Média (°C)</th>
      <th scope="col">Fases da Lua</th>
      <th scope="col">Anotações</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="2" rowspan="4" scope="rowgroup">Planetas Terrestres</th>
      <th scope="row">Mercúrio</th>
      <td>0.330</td>
      <td>4,879</td>
      <td>5427</td>
      <td>3.7</td>
      <td>4222.6</td>
      <td>57.9</td>
      <td>167</td>
      <td>0</td>
      <td>Proximidade do Sol</td>
    </tr>
    <tr>
      <th scope="row">Venus</th>
      <td>4.87</td>
      <td>12,104</td>
      <td>5243</td>
      <td>8.9</td>
      <td>2802.0</td>
      <td>108.2</td>
      <td>464</td>
      <td>0</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Terra</th>
      <td>5.97</td>
      <td>12,756</td>
      <td>5514</td>
      <td>9.8</td>
      <td>24.0</td>
      <td>149.6</td>
      <td>15</td>
      <td>1</td>
      <td>Nosso Planeta</td>
    </tr>
    <tr>
      <th scope="row">Marte</th>
      <td>0.642</td>
      <td>6,792</td>
      <td>3933</td>
      <td>3.7</td>
      <td>24.7</td>
      <td>227.9</td>
      <td>-65</td>
      <td>2</td>
      <td>O Planeta Vermelho</td>
    </tr>
    <tr>
      <th rowspan="4" scope="rowgroup">Planetas Jovianos</th>
      <th rowspan="2" scope="rowgroup">Gigantes Gasosos</th>
      <th scope="row">Jupiter</th>
      <td>1898</td>
      <td>142,984</td>
      <td>1326</td>
      <td>23.1</td>
      <td>9.9</td>
      <td>778.6</td>
      <td>-110</td>
      <td>67</td>
      <td>O Maior Planeta</td>
    </tr>
    <tr>
      <th scope="row">Saturno</th>
      <td>568</td>
      <td>120,536</td>
      <td>687</td>
      <td>9.0</td>
      <td>10.7</td>
      <td>1433.5</td>
      <td>-140</td>
      <td>62</td>
      <td></td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">Gigante de gelo</th>
      <th scope="row">Urano</th>
      <td>86.8</td>
      <td>51,118</td>
      <td>1271</td>
      <td>8.7</td>
      <td>17.2</td>
      <td>2872.5</td>
      <td>-195</td>
      <td>27</td>
      <td></td>
    </tr>
    <tr>
      <th scope="row">Netuno</th>
      <td>102</td>
      <td>49,528</td>
      <td>1638</td>
      <td>11.0</td>
      <td>16.1</td>
      <td>4495.1</td>
      <td>-200</td>
      <td>14</td>
      <td></td>
    </tr>
    <tr>
      <th colspan="2" scope="rowgroup">Planeta Anão</th>
      <th scope="row">Plutão</th>
      <td>0.0146</td>
      <td>2,370</td>
      <td>2095</td>
      <td>0.7</td>
      <td>153.3</td>
      <td>5906.4</td>
      <td>-225</td>
      <td>5</td>
      <td>
        Desconsiderado como planeta desde 2006, mas isto
        <a
          href="http://www.usatoday.com/story/tech/2014/10/02/pluto-planet-solar-system/16578959/"
          >permanece controverso</a
        >.
      </td>
    </tr>
  </tbody>
</table>

Quando criadas corretamente, até pessoas cegas podem interpretar dados tabulares em uma tabela HTML - uma tabela HTML bem sucedida deve melhorar a experiência tanto de usuários com deficiências visuais quanto daqueles capazes de ver

### Estilizando tabelas

Você também pode dar uma [neste exemplo real](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) no GitHub! Uma coisa que você perceberá é que essa tabela parece um pouco mais legível lá — isso ocorre porque a tabela que você vê acima nesta página tem o mínimo de estilização, enquanto a versão do GitHub tem um CSS expressivo aplicado.

Não se iluda; para que tabelas sejam de fato efetivas na web, você precisa fornecer algumas informações de estilo com [CSS](/pt-BR/docs/Learn/CSS), bem como uma boa estrutura sólida com HTML. Neste módulo nos iremos focar na parte do HTML; Para saber mais sobre a parte do CSS você deve visitar nosso [Estilizando Tabelas](/pt-BR/docs/Learn/CSS/Styling_boxes/Styling_tables) artigo depois que você finalizar este.

Nós não focaremos em CSS neste módulo, mas nós forneceremos uma mínima folha de estilo CSS para você usar que fará suas tabelas mais legíveis que o normalmente você teria sem nenhuma estilização. Você pode procurar a [folha de estilo aqui](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css), e você pode também procurar um [template HTML](https://github.com/mdn/learning-area/blob/master/html/tables/basic/blank-template.html) que aplica a folha de estilo — juntos eles serão um bom ponto de partida para serem implementados com tabelas HTML.

### Quando NÃO utilizar tabelas HTML?

HTML tables should be used for tabular data — this is what they are designed for. Unfortunately, a lot of people used to use HTML tables to lay out web pages, e.g. one row to contain the header, one row to contain the content columns, one row to contain the footer, etc. You can find more details and an example at [Page Layouts](/pt-BR/docs/Learn/Accessibility/HTML#Page_layouts) in our [Accessibility Learning Module](/pt-BR/docs/Learn/Accessibility). This was commonly used because CSS support across browsers used to be terrible; table layouts are much less common nowadays, but you might still see them in some corners of the web.

In short, using tables for layout rather than [CSS layout techniques](/pt-BR/docs/Learn/CSS/CSS_layout) is a bad idea. The main reasons are as follows:

1. **Layout tables reduce accessibility for visually impaired users**: [Screenreaders](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders), used by blind people, interpret the tags that exist in an HTML page and read out the contents to the user. Because tables are not the right tool for layout, and the markup is more complex than with CSS layout techniques, the screenreaders' output will be confusing to their users.
2. **Tables produce tag soup**: As mentioned above, table layouts generally involve more complex markup structures than proper layout techniques. This can result in the code being harder to write, maintain, and debug.
3. **Tables are not automatically responsive**: When you use proper layout containers (such as {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}}, or {{htmlelement("div")}}), their width defaults to 100% of their parent element. Tables on the other hand are sized according to their content by default, so extra measures are needed to get table layout styling to effectively work across a variety of devices.

## Active learning: Creating your first table

We've talked table theory enough, so, let's dive into a practical example and build up a simple table.

1. First of all, make a local copy of [blank-template.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/blank-template.html) and [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) in a new directory on your local machine.
2. The content of every table is enclosed by these two tags : **[`<table></table>`](/en-US/docs/Web/HTML/Element/table)**. Add these inside the body of your HTML.
3. The smallest container inside a table is a table cell, which is created by a **[`<td>`](/en-US/docs/Web/HTML/Element/td)** element ('td' stands for 'table data'). Add the following inside your table tags:

    ```html
    <td>Hi, I'm your first cell.</td>
    ```

4. If we want a row of four cells, we need to copy these tags three times. Update the contents of your table to look like so:

    ```html
    <td>Hi, I'm your first cell.</td>
    <td>I'm your second cell.</td>
    <td>I'm your third cell.</td>
    <td>I'm your fourth cell.</td>
    ```

As you will see, the cells are not placed underneath each other, rather they are automatically aligned with each other on the same row. Each `<td>` element creates a single cell and together they make up the first row. Every cell we add makes the row grow longer.

To stop this row from growing and start placing subsequent cells on a second row, we need to use the **[`<tr>`](/en-US/docs/Web/HTML/Element/tr)** element ('tr' stands for 'table row'). Let's investigate this now.

1. Place the four cells you've already created inside `<tr>` tags, like so:

    ```html
    <tr>
      <td>Hi, I'm your first cell.</td>
      <td>I'm your second cell.</td>
      <td>I'm your third cell.</td>
      <td>I'm your fourth cell.</td>
    </tr>
    ```

2. Now you've made one row, have a go at making one or two more — each row needs to be wrapped in an additional `<tr>` element, with each cell contained in a `<td>`.

This should result in a table that looks something like the following:

| Hi, I'm your first cell. | I'm your second cell. | I'm your third cell. | I'm your fourth cell. |
| ------------------------ | --------------------- | -------------------- | --------------------- |
| Second row, first cell.  | Cell 2.               | Cell 3.              | Cell 4.               |

> **Nota:** You can also find this on GitHub as [simple-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/simple-table.html) ([see it live also](http://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

## Adding headers with \<th> elements

Now let's turn our attention to table headers — special cells that go at the start of a row or column and define the type of data that row or column contains (as an example, see the "Person" and "Age" cells in the first example shown in this article). To illustrate why they are useful, have a look at the following table example. First the source code:

```html
<table>
  <tr>
    <td>&nbsp;</td>
    <td>Knocky</td>
    <td>Flor</td>
    <td>Ella</td>
    <td>Juan</td>
  </tr>
  <tr>
    <td>Breed</td>
    <td>Jack Russell</td>
    <td>Poodle</td>
    <td>Streetdog</td>
    <td>Cocker Spaniel</td>
  </tr>
  <tr>
    <td>Age</td>
    <td>16</td>
    <td>9</td>
    <td>10</td>
    <td>5</td>
  </tr>
  <tr>
    <td>Owner</td>
    <td>Mother-in-law</td>
    <td>Me</td>
    <td>Me</td>
    <td>Sister-in-law</td>
  </tr>
  <tr>
    <td>Eating Habits</td>
    <td>Eats everyone's leftovers</td>
    <td>Nibbles at food</td>
    <td>Hearty eater</td>
    <td>Will eat till he explodes</td>
  </tr>
</table>
```

Now the actual rendered table:

|               | Knocky                    | Flor            | Ella         | Juan                      |
| ------------- | ------------------------- | --------------- | ------------ | ------------------------- |
| Breed         | Jack Russell              | Poodle          | Streetdog    | Cocker Spaniel            |
| Age           | 16                        | 9               | 10           | 5                         |
| Owner         | Mother-in-law             | Me              | Me           | Sister-in-law             |
| Eating Habits | Eats everyone's leftovers | Nibbles at food | Hearty eater | Will eat till he explodes |

The problem here is that, while you can kind of make out what's going on, it is not as easy to cross reference data as it could be. If the column and row headings stood out in some way, it would be much better.

### Active learning: table headers

Let's have a go at improving this table.

1. First, make a local copy of our [dogs-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/dogs-table.html) and [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) files in a new directory on your local machine. The HTML contains the same Dogs example as you saw above.
2. To recognize the table headers as headers, both visually and semantically, you can use the **[`<th>`](/en-US/docs/Web/HTML/Element/th)** element ('th' stands for 'table header'). This works in exactly the same way as a `<td>`, except that it denotes a header, not a normal cell. Go into your HTML, and change all the `<td>` elements surrounding the table headers into `<th>` elements.
3. Save your HTML and load it in a browser, and you should see that the headers now look like headers.

> **Nota:** You can find our finished example at [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/dogs-table-fixed.html) on GitHub ([see it live also](http://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

### Why are headers useful?

We have already partially answered this question — it is easier to find the data you are looking for when the headers clearly stand out, and the design just generally looks better.

> **Nota:** Table headings come with some default styling — they are bold and centered even if you don't add your own styling to the table, to help them stand out.

Tables headers also have an added benefit — along with the `scope` attribute (which we'll learn about in the next article), they allow you to make tables more accessible by associating each header with all the data in the same row or column. Screenreaders are then able to read out a whole row or column of data at once, which is pretty useful.

## Allowing cells to span multiple rows and columns

Sometimes we want cells to span multiple rows or columns. Take the following simple example, which shows the names of common animals. In some cases, we want to show the names of the males and females next to the animal name. Sometimes we don't, and in such cases we just want the animal name to span the whole table.

The initial markup looks like this:

```html
<table>
  <tr>
    <th>Animals</th>
  </tr>
  <tr>
    <th>Hippopotamus</th>
  </tr>
  <tr>
    <th>Horse</th>
    <td>Mare</td>
  </tr>
  <tr>
    <td>Stallion</td>
  </tr>
  <tr>
    <th>Crocodile</th>
  </tr>
  <tr>
    <th>Chicken</th>
    <td>Hen</td>
  </tr>
  <tr>
    <td>Rooster</td>
  </tr>
</table>
```

But the output doesn't give us quite what we want:

| Animals      |      |
| ------------ | ---- |
| Hippopotamus |      |
| Horse        | Mare |
| Stallion     |      |
| Crocodile    |      |
| Chicken      | Hen  |
| Rooster      |      |

We need a way to get "Animals", "Hippopotamus", and "Crocodile" to span across two columns, and "Horse" and "Chicken" to span downwards over two rows. Fortunately, table headers and cells have the `colspan` and `rowspan` attributes, which allow us to do just those things. Both accept a unitless number value, which equals the number of rows or columns you want spanned. For example, `colspan="2"` makes a cell span two columns.

Let's use `colspan` and `rowspan` to improve this table.

1. First, make a local copy of our [animals-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/animals-table.html) and [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) files in a new directory on your local machine. The HTML contains the same animals example as you saw above.
2. Next, use `colspan` to make "Animals", "Hippopotamus", and "Crocodile" span across two columns.
3. Finally, use `rowspan` to make "Horse" and "Chicken" span across two rows.
4. Save and open your code in a browser to see the improvement.

> **Nota:** You can find our finished example at [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/animals-table-fixed.html) on GitHub ([see it live also](http://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## Providing common styling to columns

There is one last feature we'll tell you about in this article before we move on. HTML has a method of defining styling information for an entire column of data all in one place — the **[`<col>`](/en-US/docs/Web/HTML/Element/col)** and **[`<colgroup>`](/en-US/docs/Web/HTML/Element/colgroup)** elements. These exist because it can be a bit annoying and inefficient having to specify styling on columns — you generally have to specify your styling information on _every_ `<td>` or `<th>` in the column, or use a complex selector such as {{cssxref(":nth-child()")}}.

> **Nota:** Styling columns like this is [limited to a few properties](https://www.w3.org/TR/CSS22/tables.html#columns): [`border`](/en-US/docs/Web/CSS/border), [`background`](/en-US/docs/Web/CSS/background), [`width`](/en-US/docs/Web/CSS/width), and [`visibility`](/en-US/docs/Web/CSS/visibility). To set other properties you'll have to either style every `<td>` or `<th>` in the column, or use a complex selector such as {{cssxref(":nth-child()")}}.

Take the following simple example:

```html
<table>
  <tr>
    <th>Data 1</th>
    <th style="background-color: yellow">Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td style="background-color: yellow">Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td style="background-color: yellow">Jazz</td>
  </tr>
</table>
```

Which gives us the following result:

| Data 1   | Data 2 |
| -------- | ------ |
| Calcutta | Orange |
| Robots   | Jazz   |

This isn't ideal, as we have to repeat the styling information across all three cells in the column (we'd probably have a `class` set on all three in a real project and specify the styling in a separate stylesheet). Instead of doing this, we can specify the information once, on a `<col>` element. `<col>` elements are specified inside a `<colgroup>` container just below the opening `<table>` tag. We could create the same effect as we see above by specifying our table as follows:

```html
<table>
  <colgroup>
    <col>
    <col style="background-color: yellow">
  </colgroup>
  <tr>
    <th>Data 1</th>
    <th>Data 2</th>
  </tr>
  <tr>
    <td>Calcutta</td>
    <td>Orange</td>
  </tr>
  <tr>
    <td>Robots</td>
    <td>Jazz</td>
  </tr>
</table>
```

Effectively we are defining two "style columns", one specifying styling information for each column. We are not styling the first column, but we still have to include a blank `<col>` element — if we didn't, the styling would just be applied to the first column.

If we wanted to apply the styling information to both columns, we could just include one `<col>` element with a span attribute on it, like this:

```html
<colgroup>
  <col style="background-color: yellow" span="2">
</colgroup>
```

Just like `colspan` and `rowspan`, `span` takes a unitless number value that specifies the number of columns you want the styling to apply to.

### Active learning: colgroup and col

Now it's time to have a go yourself.

Below you can see the timetable of a languages teacher. On Friday she has a new class teaching Dutch all day, but she also teaches German for a few periods on Tuesday and Thursdays. She wants to highlight the columns containing the days she is teaching.

{{EmbedGHLiveSample("learning-area/html/tables/basic/timetable-fixed.html", '100%', 320)}}

Recreate the table by following the steps below.

1. First, make a local copy of our [timetable.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable.html) file in a new directory on your local machine. The HTML contains the same table you saw above, minus the column styling information.
2. Add a `<colgroup>` element at the top of the table, just underneath the `<table>` tag, in which you can add your `<col>` elements (see the remaining steps below).
3. The first two columns need to be left unstyled.
4. Add a background color to the third column. The value for your `style` attribute is `background-color:#97DB9A;`
5. Set a separate width on the fourth column. The value for your `style` attribute is `width: 42px;`
6. Add a background color to the fifth column. The value for your `style` attribute is `background-color: #97DB9A;`
7. Adicione uma cor de fundo diferente mais uma borda à sexta coluna, para indicar que este é um dia especial e ela está dando uma nova aula. Os valores do seu `style`atributo são`background-color:#DCC48E; border:4px solid #C1437A;`
8. Os últimos dois dias são dias livres, então apenas defina-os para nenhuma cor de fundo, mas uma largura definida; o valor do `style`atributo é`width: 42px;`

Veja como você segue com o exemplo. Se você tiver dúvidas ou quiser verificar seu trabalho, pode encontrar nossa versão no GitHub como [schedule-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable-fixed.html) ( [veja ao vivo também](http://mdn.github.io/learning-area/html/tables/basic/timetable-fixed.html) ).

## Resumo

Isso envolve o básico das tabelas HTML. No próximo artigo, veremos alguns recursos de mesa um pouco mais avançados e começaremos a pensar como eles são acessíveis para pessoas com deficiência visual.

{{NextMenu("Aprender/HTML/Tabelas/Avançado", "Aprender/HTML/Tabelas")}}

## Neste módulo

- [Noções básicas de tabela HTML](/pt-BR/docs/Learn/HTML/Tables/Basics)
- [Recursos avançados e acessibilidade da tabela HTML](/pt-BR/docs/Learn/HTML/Tables/Advanced)
- [Estruturação de dados do planeta](/pt-BR/docs/Learn/HTML/Tables/Structuring_planet_data)
