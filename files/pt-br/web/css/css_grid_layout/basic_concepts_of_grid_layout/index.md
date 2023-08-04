---
title: Conceitos básicos de Grid Layout
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
---

[CSS Grid Layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout) introduz um sistema bi-dimensional de grid (literalmente "grades") para CSS. Grids podem ser usados para o design de layouts de grandes seções de uma webpage, assim como de pequenos elementos de interface. Esse artigo apresenta o CSS Grid Layout e a terminologia que é parte da especificação CSS Grid Layout Level 1. As funcionalidades demonstradas neste resumo serão posteriormente explicadas em maiores detalhes nas demais seções desse guia.

## O que é grid?

Grid é uma malha formada pela interseção de um conjunto de linhas horizontais e um conjunto de linhas verticais – um dos conjuntos define colunas e outro linhas. Dentro de um grid, respeitando-se a configuração criada pelas suas linhas, pode-se inserir elementos da marcação. As CSS grid layout preveem as seguintes funcionalidades:

### Dimensões fixas ou flexíveis

Você pode criar grids com dimensões fixas – por exemplo: definindo dimensões em pixels. Ou criar grids com dimensões flexíveis definindo-as com uso de porcentagem ou da nova unidade CSS `fr` criada para esse propósito.

### Posicionamento de itens

Você pode posicionar com precisão itens de uma página usando o número que define uma linha do grid, usando nomes ou ainda fazendo referência a uma determinada região do grid. Existe ainda um algorítmo de controle do posicionamento de itens da página que não possuem uma posição capaz de ser explícitamente definida no grid.

### Criação de grids adicionais

Além da possibilidade de se criar um grid inicial para o layout a Especificação prevê também a possibilidade de se adicionar linhas e colunas para layoutar conteúdos adicionados fora do grid inicial. Funcionalidades tal como adicionar "tantas colunas quanto necessárias em um grid container existente" são previstas nas Especificações.

### Alinhamento

Estão previstas funcionalidades de alinhamento que possibilitam controlar o alinhamento dos itens de uma página posicionados no grid e também o alinhamento do próprio grid como um todo.

### Controle sobre conteúdos sobrepostos

Em uma célula do grid podem ser posicionados mais de um item da página e também é possível que se defina sobreposição parcial de áreas. Esse controle de layers é feito com uso de {{cssxref("z-index")}}.

CSS Grid Layout é uma poderosa especificação que se for combinada com outras partes do CSS, tal como [flexbox](/pt-BR/docs/Web/CSS/CSS_Flexible_Box_Layout), possibilita a criação de layouts que até então eram impossíveis de serem criados com CSS. Tudo começa com a criação de um grid dentro de um **grid container**.

## Grid container

Cria-se um _grid container_ com as declarações CSS `display: grid` ou `display: inline-grid` para um elemento da marcação. Assim declarando, todos os elementos _filhos diretos_ daquele container se transformam em _grid items_.

No exemplo mostrado a seguir um elemento div container ao qual foi atribuída a classe wrapper contém cinco elementos filhos.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Façamos de `.wrapper` um grid container.

```css
.wrapper {
  display: grid;
}
```

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('The_Grid_container', '200', '330') }}

Todos os elementos filhos diretos agora são grid items. Observando a renderização em um navegador web você não notará nenhuma diferença em relação a renderização já conhecida de um elemento container com seus cinco elementos filhos, pois no exemplo foi criado um grid constítuido de uma única coluna para acomodar os elementos filhos. A partir desse ponto você pode achar mais útil trabalhar no _Firefox Developer Edition_, que possui o [Grid Inspector](/pt-BR/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts) disponÍvel como parte das Ferramentas do desenvolvedor. Se você ver este exemplo no Firefox e inspecionar o Grid, você verá um pequeno ícone ao lado do valor Grid (na propiedade _display_ do elemento container). Clique nele e o Grid neste elemento será sobreposto na janela do navegador.

![Using the Grid Highlighter in DevTools to view a grid](1-grid-inspector.png)

À medida que você aprende e depois trabalha com _CSS Grid Layout_, esta ferramenta lhe dará uma idéia melhor do que está acontecendo com suas _Grids_ visualmente.

Se nós queremos começar a fazer isso parecer mais com os _Grids layouts_ , nós precisamos adicionar _collumn tracks_.

## Grid Tracks

Nós definimos linhas e colunas no nosso grid com as propriedades {{cssxref("grid-template-columns")}} e {{cssxref("grid-template-rows")}}. Isso define o grid tracks. Um _grid track_ é o espaço entre duas linhas em um grid. Na imagem abaixo você pode ver um track highlighter – o track na primeira linha do nosso grid.

![](1_grid_track.png)

Posso adicionar ao exemplo anterior a propriedade `grid-template-columns`, depois definir o tamanho da column tracks.

Agora criei um grid com três colunas fixas de 200px. Os itens filhos serão dispostos nessa grade, um em cada célula da grade.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 200px 200px 200px;
}
```

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('grid_first', '610', '140') }}

### A unidade `fr`

Nas propriedades de grid podem ser utilizadas quaisquer unidades de medida. Para nos ajudar a criar layouts flexíveis utilizando o grid, foi criada uma unidade nova. A unidade `fr` representa uma fração do espaço disponível no container do grid. A próxima definição de grid cria três espaços com tamanhos iguais que aumentam e diminuem de acordo com o espaço disponível.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('fr_unit_ls', '220', '180') }}

No próximo exemplo, criamos um container `.wrapper com uma coluna de 2fr` e duas colunas de `1fr`. Portanto, o espaço disponível será dividido em quatro partes. Duas partes serão para a primeira coluna e uma parte para cada um das próximas duas colunas.

```css
.wrapper {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
}
```

Nesse exemplo final, nós misturamos unidades de medida fixa com as de fração. A primeira coluna tem `500px`, que será fixa. O espaço disponível restante será dividido em três partes, sendo uma parte para a segunda coluna e mais duas partes para a terceira coluna.

```css
.wrapper {
  display: grid;
  grid-template-columns: 500px 1fr 2fr;
}
```

### Track listings com a notação `repeat()`

Grids grandes, com muitas tracks podem usar a notação `repeat()` para repetir todas ou uma seção de track listing. Por exemplo a definição de grid a seguir:

```css
.wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}
```

Também pode ser escrita como:

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

A notação repeat ( ) pode ser usada apenas para uma parte da track listing. No próximo exemplo estou criando um grid com uma coluna inicial de 20-pixels, repetindo uma sessão de 6 colunas de `1fr`, e por fim uma coluna de 20-pixels.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

A notação Repeat tem como parâmetro um track listing, sendo assim você pode usá-lo para criar um padrão de repetição de tracks. Neste exemplo meu grid terá 10 tracks, uma trilha de `1fr` seguida por uma trilha de `2fr` , repetida cinco vezes.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### O grid implícito e explícito

Ao criar nosso grid de exempo definimos nossa coluna de trilhas com a propriedade {{cssxref("grid-template-columns")}}, mas adicionalmente deixamos o grid criar as linhas necessárias para qualquer outro conteúdo. Estas linhas são criadas no grid implícito. O grid explícito é constituído por linhas e colunas que você define com {{cssxref("grid-template-columns")}} e {{cssxref("grid-template-rows")}}. Se você posicionar algo fora do grid definido, ou caso devido à quantidado de conteúdo mais trilhas de grid sejam necessárias, o grid então cria linhas e colunas no grid implícito. Estas trilhas serão seu tamanho definido automaticamente por padrão, resultando em seu tamanho ser basedo no conteúdo que elas contém.

Você também pode definir o tamanho do conjunto para trilhas criadas na grid implícita com as propriedades {{cssxref("grid-auto-rows")}} e {{cssxref("grid-auto-columns")}}.

No exemplo abaixo usamos `grid-auto-rows` para garantir que as trilhas criadas na grid implícita tem 200 pixels de altura.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 200px;
}
```

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('The_implicit_and_explicit_grid', '210', '410') }}

### Track sizing and `minmax()`

Quando criando um grid explícito ou definindo o tamanho para as colunas e linha serem criadas automáticamente podemos querer dar um tamanho minimo para os tracks, mas assegure que eles expandam para o tamanho necessário do conteúdo adicionado. Por exemplo eu gostaria que as minhas linhas nunca colapsem para um tamanho menor que 100 pixels, mas se o meu conteúdo aumentar até 300 pixels de altura eu gostaria que a linha aumentasse para essa mesma altura.

Grid tem uma solução para isso com a função {{cssxref("minmax", "minmax()")}}. No próximo exemplo estou usando `minmax()` no valor de {{cssxref("grid-auto-rows")}}. Automaticamente as linhas criadas terão uma altura mínima de 100 pixels, e a máxima de `auto`. Usar `auto` significa que o tamanho vai olhar para o conteúdo e, assim, esticar para que a linha tenha o espaço necessário.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: minmax(100px, auto);
}
```

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>
    Two
    <p>I have some more content in.</p>

    <p>This makes me taller than 100 pixels.</p>
  </div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

{{ EmbedLiveSample('Track_sizing_and_minmax()', '230', '490') }}

## Linhas de grid

Devemos observar que quando definimos um grid definimos as trilhas do grid, não as linhas. O grid então nos devolve linhas numeradas para usarmos ao posicionar itens. Em nossa grid de 3 colunas por duas linhas, temos quatro linhas de colunas.

![Diagram showing numbered grid lines.](1_diagram_numbered_grid_lines.png)

Linhas são numeradas de acordo a forma de escrita do documento. Em uma linguagem da esquerda para a direita, a linha 1 está à esquerda do grid. Em uma linguagem da direita para a esquerda, ela está no lado direito do grid. Linhas também podem ser nomeadas, e veremos como fazer isso em um guia posterior nessa série.

### Posicionando itens contra linhas

Exploraremos posicionamento de itens baseado em linhas em um artigo posterior. O exemplo a seguir mostra como fazer isso de forma simples. Quando posicionar um item, focamos a linha - ao invés do rastro.

Nesse exemplo eu estou posicionando os primeiros dois itens do nosso grid de três colunas, usando as propriedades {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} e {{cssxref("grid-row-end")}}. Da esquerda para a direita, o primeiro item é posicionado contra a linha da coluna 1, e vai até a linha da coluna 4, que no nosso caso é a linha do extremo direito do grid. Começa na linha 1 e termina na linha 3, tendo uma expansão de duas linhas.

O segundo item inicia na linha da coluna 1, e expande uma linha. Esse é o padrão, então não preciso especificar a linha final. Também vai da linha 3 a linha 5. Os outros itens serão posicionados de acordo com espaço disponível no grid.

```html
<div class="wrapper">
  <div class="box1">One</div>
  <div class="box2">Two</div>
  <div class="box3">Three</div>
  <div class="box4">Four</div>
  <div class="box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box2 {
  grid-column-start: 1;
  grid-row-start: 3;
  grid-row-end: 5;
}
```

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('Positioning_items_against_lines', '220', '410') }}

Não esqueça que o [Grid Inspector](/pt-BR/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts) pode ser usado no Firefox Developer Tools para ver como os itens estão posicionados no grid.

## Células do grid

Uma célula de grid é a menor unidade em um grid. Conceitualmente é como se fosse uma célula de tabela. Como vimos em nossos exemplos anteriores, uma vez que o grid é definido como o pai os itens filhos serão organizados cada um em uma célula do grid definido. Na imagem abaixo, temos destacado a primeira célula do grid.

![The first cell of the grid highlighted](1_grid_cell.png)

## Áreas do grid

Itens podem se espalhar por uma ou mais células ambas entre linhas ou colunas, e isto cria uma _área de grid._ Áreas de grid devem ser retangulares – não é possível criar uma área em L por exemplo. A área destacada se espalha por duas trilhas de linhas e duas trilhas de colunas.

![A grid area](1_grid_area.png)

## Gutters

_Gutters_ ou _alleys_ (espaçamentos ou separadores) entre células do grid podem ser criadas usando a propriedade {{cssxref("grid-column-gap")}} e {{cssxref("grid-row-gap")}} ou de forma resumida {{cssxref("grid-gap")}}. No exemplo abaixo, criamos um espaço vazio de 10 pixels entre colunas e um espaço vazio de `1em` entre linhas.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
}
```

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
.wrapper > div {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('Gutters') }}

Qualquer espaço utilizado entre espaços vazios ou _gaps_ deverá ser considerado antes do espaço ser designado para as trilhas de tamanho flexível `fr` , e _gaps_ agem para propósitos de tamanho como uma trilha de grid normal, entretanto você não pode colocar coisa alguma em um _gap_ Em termos de posicionamento baseado em linhas, o _gap_ age como uma linha preenchida (_fat line_).

## Aninhando grids

Um item de grid pode se tornar um container de grid. No exemplo a seguir, temos o grid de três colunas criadas anteriormente, com nossos dois itens posicionados. Neste caso o primeiro item possui dois sub itens. Como estes itens não são filhos diretos do grid eles não participam no layout do grid e dessa forma são exibidos no fluxo normal do documento.

```html
<div class="wrapper">
  <div class="box box1">
    <div class="nested">a</div>
    <div class="nested">b</div>
    <div class="nested">c</div>
  </div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

![Nested grid in flow](1_nested_grids_in_flow.png)

Se definimos `box1` como `display: grid` podemos dar uma definição de tracks e ela também se tornará uma grid. Os itens então são dispostos nesse novo grid.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('nesting', '600', '410') }}

Nesse caso o grid aninhado não possui relação com o pai. Como é possível perceber no exemplo ele não herdou o {{cssxref("grid-gap")}} do pai e as linhas no grid aninhado não estão alinhadas com as linhas do grid pai.

### Subgrid

No nível das especificações do grid tem uma _feature_ chamada _subgrid_ que nos permitiria criar grids aninhados que usa aquilo que foi definido no grid pai.

> **Nota:** Subgrids ainda não foram implementados em nenhum browser, e as especificações são sujeitas a mudanças.

Na especificação atual, no exemplo acima editaríamos o grid aninhado usando `display: subgrid` ao invés de `display: grid`, e remover o que havia sido definido. O grid aninhado vai usar as propriedades definidas no pai para dispor os itens.

Note que o grid aninhado está nas duas dimensões — linhas e colunas. Não há garantia de que o grid implícito funcione com subgrid. Por isso é necessário que haja certeza de que o grid pai tem linhas e colunas suficientes para todos os sub itens.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: subgrid;
}
```

## Sobrepondo itens com `z-index`

Itens de uma mesma grade podem ocupar uma mesma célula. Se retornarmos ao nosso exemplo com itens dispostos pela linha, podemos fazer com que dois se sobreponham.

```html
<div class="wrapper">
  <div class="box box1">One</div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
}
.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
}
```

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('l_ex', '210', '410') }}

O container `box2` está sobrepondo `box1`, é renderizado acima pois vem depois na ordem.

### Manipulando a ordem

Podemos controlar a ordem na qual os itens irão empilhar-se usando a propriedade `z-index`. Se `box2` recebe um `z-index` menor que `box1` será mostrado abaixo de `box1`.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  z-index: 2;
}
.box2 {
  grid-column-start: 1;
  grid-row-start: 2;
  grid-row-end: 4;
  z-index: 1;
}
```

```html hidden
<div class="wrapper">
  <div class="box box1">One</div>
  <div class="box box2">Two</div>
  <div class="box box3">Three</div>
  <div class="box box4">Four</div>
  <div class="box box5">Five</div>
</div>
```

```css hidden
* {
  box-sizing: border-box;
}
.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
}
.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('Controlling_the_order', '210', '410') }}

## Próximos Passos

Nesse artigo abordamos um pouco da especificação do Grid Layout. Pratique com os exemplos propostos, depois disso passe para a próxima parte onde estudaremos mais a fundo o CSS Grid Layout.

1. [**CSS**](/pt-BR/docs/Web/CSS)
2. [**CSS Reference**](/pt-BR/docs/Web/CSS/Reference)
3. [CSS Grid Layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout)
4. **Guias**

   1. [Basics concepts of grid layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
   2. [Relationship to other layout methods](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout)
   3. [Line-based placement](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Line-based_Placement_with_CSS_Grid)
   4. [Grid template areas](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Grid_Template_Areas)
   5. [Layout using named grid lines](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Layout_using_Named_Grid_Lines)
   6. [Auto-placement in grid layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Auto-placement_in_CSS_Grid_Layout)
   7. [Box alignment in grid layout](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Box_Alignment_in_CSS_Grid_Layout)
   8. [Grids, logical values and writing modes](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid,_Logical_Values_and_Writing_Modes)
   9. [CSS Grid Layout and Accessibility](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_Layout_and_Accessibility)
   10. [CSS Grid Layout and Progressive Enhancement](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/CSS_Grid_and_Progressive_Enhancement)
   11. [Realizing common layouts using grids](/pt-BR/docs/Web/CSS/CSS_Grid_Layout/Realizing_common_layouts_using_CSS_Grid_Layout)

5. **Propriedades**

   1. [grid](/pt-BR/docs/Web/CSS/grid)
   2. [grid-area](/pt-BR/docs/Web/CSS/grid-area)
   3. [grid-auto-columns](/pt-BR/docs/Web/CSS/grid-auto-columns)
   4. [grid-auto-flow](/pt-BR/docs/Web/CSS/grid-auto-flow)
   5. [grid-auto-rows](/pt-BR/docs/Web/CSS/grid-auto-rows)
   6. [grid-column](/pt-BR/docs/Web/CSS/grid-column)
   7. [grid-column-end](/pt-BR/docs/Web/CSS/grid-column-end)
   8. [grid-column-gap](/pt-BR/docs/Web/CSS/grid-column-gap)
   9. [grid-column-start](/pt-BR/docs/Web/CSS/grid-column-start)
   10. [grid-gap](/pt-BR/docs/Web/CSS/grid-gap)
   11. [grid-row](/pt-BR/docs/Web/CSS/grid-row)
   12. [grid-row-end](/pt-BR/docs/Web/CSS/grid-row-end)
   13. [grid-row-gap](/pt-BR/docs/Web/CSS/grid-row-gap)
   14. [grid-row-start](/pt-BR/docs/Web/CSS/grid-row-start)
   15. [grid-template](/pt-BR/docs/Web/CSS/grid-template)
   16. [grid-template-areas](/pt-BR/docs/Web/CSS/grid-template-areas)
   17. [grid-template-colunms](/pt-BR/docs/Web/CSS/grid-template-columns)
   18. [grid-template-rows](/pt-BR/docs/Web/CSS/grid-template-rows)

6. **Glossário**

   1. [Grid lines](/pt-BR/docs/Glossary/Grid_lines)
   2. [Grid tracks](/pt-BR/docs/Glossary/Grid_tracks)
   3. [Grid cell](/pt-BR/docs/Glossary/Grid_cell)
   4. [Grid areas](/pt-BR/docs/Glossary/Grid_areas)
   5. [Gutters](/pt-BR/docs/Glossary/Gutters)
   6. [Grid row](/pt-BR/docs/Glossary/Grid_rows)
   7. [Grid column](/pt-BR/docs/Glossary/Grid_column)
