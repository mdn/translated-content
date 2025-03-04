---
title: Conceitos básicos de layout de grade
slug: Web/CSS/CSS_grid_layout/Basic_concepts_of_grid_layout
l10n:
  sourceCommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{CSSRef}}

O [layout de grade CSS](/pt-BR/docs/Web/CSS/CSS_grid_layout) introduz um sistema de grade bidimensional ao CSS. As grades podem ser usadas para dispor áreas maiores da página ou pequenos elementos da interface da pessoa usuária. Este artigo apresenta o layout de grade CSS e a nova terminologia que faz parte da especificação Layout de Grade CSS Nível 1. Os recursos mostrados nesta visão geral serão então explicados em maiores detalhes nas demais seções deste guia.

## O que é uma grade?

Uma grade é um conjunto de linhas horizontais e verticais que se cruzam definindo colunas e linhas. Elementos podem ser colocados na grade dentro dessas linhas e colunas. O layout de grade CSS tem os seguintes recursos:

### Tamanhos de trilha fixos e flexíveis

Você pode criar uma grade com tamanhos de trilha fixos – usando pixels, por exemplo. Isso define a grade com os pixels especificados que cabem no layout desejado. Você também pode criar uma grade com tamanhos flexíveis com porcentagens ou com a unidade `fr` criada para essa finalidade.

### Posicionamento de itens

Você pode posicionar itens na grade com precisão usando números de linha, nomes ou selecionando uma área da grade. A grade também contém um algoritmo para controlar o posicionamento de itens que não possuem uma posição explícita na grade.

### Criação de trilhas adicionais para armazenar conteúdo

Você pode definir uma grade explícita com um layout de grade. A especificação do layout de grade é flexível o suficiente para adicionar linhas e colunas adicionais quando necessário. Recursos como adicionar "quantas colunas couberem em um contêiner" estão incluídos.

### Controle de alinhamento

A grade contém recursos de alinhamento para que possamos controlar como os itens se alinham uma vez colocados em uma área da grade e como toda a grade é alinhada.

### Controle de conteúdo sobreposto

Mais de um item podem ser posicionados em uma célula ou área da grade e eles podem se sobrepor parcialmente. Essa disposição em camadas pode então ser controlada com a propriedade {{cssxref("z-index")}}.

A grade é uma especificação poderosa que, quando combinada com outras partes do CSS, como [flexbox](/pt-BR/docs/Web/CSS/CSS_flexible_box_layout), pode ajudar você a criar layouts que antes eram impossíveis de construir com CSS. Tudo começa criando uma grade no seu **contêiner de grade**.

## Contêiner de grade

Criamos um _contêiner de grade_ declarando `display: grid` ou `display: inline-grid` em um elemento. Assim que fazemos isso, todos os _filhos diretos_ desse elemento se tornam _itens de grade_.

Neste exemplo, temos um elemento div contentor com uma classe wrapper e, dentro, há cinco elementos filhos.

```html
<div class="wrapper">
  <div>One</div>
  <div>Two</div>
  <div>Three</div>
  <div>Four</div>
  <div>Five</div>
</div>
```

Vamos tornar o `.wrapper` um contêiner de grade.

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
```

{{ EmbedLiveSample('The_Grid_container', '200', '330') }}

Todos os elementos filhos diretos agora são itens de grade. Em um navegador web, você não verá nenhuma diferença em relação a como esses itens eram exibidos antes de transformá-los em uma grade, pois a grade criou uma grade de coluna única para os itens. Neste ponto, você pode achar útil trabalhar com o [Inspetor de Grade](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html), disponível como parte das Ferramentas da Pessoa Desenvolvedora do Firefox. Se você visualizar este exemplo no Firefox e inspecionar a grade, verá um pequeno ícone ao lado do valor `grid`. Clique nele e a grade neste elemento será sobreposta na janela do navegador.

![Usando o marcador de grade nas Ferramentas da Pessoa Desenvolvedora para visualizar uma grade](1-grid-inspector.png)

Conforme você aprende e então trabalha com o layout de grade CSS, esta ferramenta lhe dará uma ideia melhor do que está acontecendo com suas grades visualmente.

Se quisermos começar a tornar isso mais parecido com uma grade, precisamos adicionar trilhas de coluna.

## Trilhas de grade

Definimos linhas e colunas em nossa grade com as propriedades {{cssxref("grid-template-rows")}} e {{cssxref("grid-template-columns")}}. Elas definem as trilhas de grade. Uma _trilha de grade_ é o espaço entre quaisquer duas linhas adjacentes na grade. A imagem abaixo mostra uma trilha destacada – esta é a trilha da primeira linha em nossa grade.

![Uma caixa com 3 itens de grade. Acima dos três itens há uma área verde-clara sólida que é a trilha.](1_grid_track.png)

As trilhas de grade são definidas na grade explícita usando as propriedades `grid-template-columns` e `grid-template-rows` ou as propriedades abreviadas `grid` ou `grid-template`. As trilhas também são criadas na grade implícita posicionando um item de grade fora das trilhas criadas na grade explícita.

### Exemplo básico

Podemos incrementar o nosso exemplo anterior adicionando a propriedade `grid-template-columns` e, em seguida, definindo o tamanho das trilhas de coluna.

Agora criamos uma grade com três trilhas de coluna de 200 pixels de largura. Os itens filhos serão dispostos nesta grade, um em cada célula da grade.

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
```

{{ EmbedLiveSample('Basic_example', '610', '140') }}

### A unidade `fr`

As trilhas podem ser definidas usando qualquer unidade de comprimento. A grade também introduz uma unidade de comprimento adicional para nos ajudar a criar trilhas de grade flexíveis. A nova unidade `fr` representa uma fração do espaço disponível no contêiner da grade. A definição de grade a seguir cria três trilhas de largura igual que aumentam e diminuem de acordo com o espaço disponível.

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
```

{{ EmbedLiveSample('The_fr_unit', '220', '140') }}

### Tamanhos desiguais

No próximo exemplo, criamos uma definição com uma trilha de `2fr` e depois duas trilhas de `1fr`. O espaço disponível é dividido em quatro. Duas partes são dadas à primeira trilha e uma parte para cada uma das duas trilhas seguintes.

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
  grid-template-columns: 2fr 1fr 1fr;
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
```

{{ EmbedLiveSample('Unequal_sizes', '220', '140') }}

### Misturando tamanhos flexíveis e absolutos

Neste último exemplo, misturamos trilhas de tamanho absoluto com unidades `fr`. A primeira trilha tem 500 pixels, então a largura fixa é retirada do espaço disponível. O espaço restante é dividido em três e atribuído em proporção às duas trilhas flexíveis.

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
  grid-template-columns: 500px 1fr 2fr;
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
```

{{ EmbedLiveSample('Mixing_flexible_and_absolute_sizes', '220', '140') }}

### Listagens de trilhas com a notação repeat()

Grades grandes com muitas trilhas podem usar a notação `repeat()` para repetir toda ou uma seção da listagem de trilhas. Por exemplo, a definição da grade:

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

A notação de repetição pode ser usada para uma parte da listagem de trilhas. No próximo exemplo, criamos uma grade com uma trilha inicial de 20 pixels, depois uma seção de repetição de 6 trilhas de `1fr`, e por fim uma trilha final de 20 pixels.

```css
.wrapper {
  display: grid;
  grid-template-columns: 20px repeat(6, 1fr) 20px;
}
```

A notação de repetição recebe a listagem de trilhas e a usa para criar um padrão de repetição de trilhas. No próximo exemplo, nossa grade consistirá de 10 trilhas, uma trilha de `1fr` e, em seguida, uma trilha de `2fr`. Este padrão será repetido cinco vezes.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(5, 1fr 2fr);
}
```

### Grades implícitas e explícitas

Ao criar nossa grade de exemplo, definimos especificamente nossas trilhas de coluna com a propriedade {{cssxref("grid-template-columns")}}, mas a grade também criou linhas por conta própria. Essas linhas são parte da grade implícita. Enquanto a grade explícita consiste em quaisquer linhas e colunas definidas com {{cssxref("grid-template-columns")}} ou {{cssxref("grid-template-rows")}}.

Se você colocar algo fora da grade definida — ou devido à quantidade de conteúdo, mais trilhas de grade forem necessárias — então a grade cria linhas e colunas na grade implícita. Essas trilhas serão dimensionadas automaticamente por padrão, fazendo com que seu tamanho seja baseado no conteúdo que está dentro delas.

Você também pode definir um tamanho padrão para trilhas criadas na grade implícita com as propriedades {{cssxref("grid-auto-rows")}} e {{cssxref("grid-auto-columns")}}.

No exemplo abaixo, usamos `grid-auto-rows` para garantir que as trilhas criadas na grade implícita tenham 200 pixels de altura.

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
```

{{ EmbedLiveSample('The_implicit_and_explicit_grid', '230', '450') }}

### Dimensionamento de trilha e minmax

Ao configurar uma grade explícita ou definir o dimensionamento para linhas ou colunas criadas automaticamente, podemos querer dar às trilhas um tamanho mínimo, mas também garantir que elas se expandam para o tamanho necessário do conteúdo adicionado. Por exemplo, podemos querer que nossas linhas nunca colapsem para menos de 100 pixels, mas se o nosso conteúdo se estender até 300 pixels de altura, então gostaríamos que a linha se estendesse para essa altura.

A grade tem uma solução para isso com a função {{cssxref("minmax", "minmax()")}}. No próximo exemplo, estamos usando `minmax()` no valor de {{cssxref("grid-auto-rows")}}. Isso significa que as linhas criadas automaticamente terão no mínimo 100 pixels de altura e no máximo `auto`. Usar `auto` significa que o tamanho observará o tamanho do conteúdo e se estenderá para dar espaço para o item mais alto em uma célula, nesta linha.

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

{{ EmbedLiveSample('Track_sizing_and_minmax', '240', '470') }}

## Linhas de grade

Devemos notar que quando definimos uma grade, definimos as trilhas da grade, não as linhas. A grade então nos dá linhas numeradas para usar ao posicionar itens. Em nossa grade de três colunas e duas linhas, temos quatro linhas de coluna.

![Diagrama mostrando linhas de grade numeradas.](1_diagram_numbered_grid_lines.png)

As linhas são numeradas de acordo com a forma de escrita do documento. Em um idioma da esquerda para a direita, a linha 1 fica no lado esquerdo da grade. Em um idioma da direita para a esquerda, fica no lado direito da grade. As linhas também podem ser nomeadas, e veremos como fazer isso em um guia posterior desta série.

### Posicionando itens em relação às linhas

Exploraremos o posicionamento baseado em linhas em detalhes em um artigo posterior. O exemplo a seguir demonstra como fazer isso de uma forma simples. Ao posicionar um item, focamos a linha — em vez da trilha.

No exemplo a seguir, estamos posicionando os dois primeiros itens em nossa grade de trilha de três colunas, usando as propriedades {{cssxref("grid-column-start")}}, {{cssxref("grid-column-end")}}, {{cssxref("grid-row-start")}} e {{cssxref("grid-row-end")}}. Trabalhando da esquerda para a direita, o primeiro item é posicionado em relação à linha da coluna 1 e se estende até a linha da coluna 4, que no nosso caso é a linha mais à direita na grade. Ele começa na linha da linha 1 e termina na linha da linha 3, portanto, abrangendo duas trilhas de linha.

O segundo item começa na linha da coluna 1 da grade e abrange uma trilha. Este é o padrão, então não precisamos especificar a linha final. Ele também abrange duas trilhas de linha da linha 3 até a linha 5. Os outros itens serão colocados em espaços vazios na grade.

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
```

{{ EmbedLiveSample('Positioning_items_against_lines', '230', '450') }}

> [!NOTE]
> Não se esqueça que você pode usar o [Inspetor de Grade](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html) nas Ferramentas da Pessoa Desenvolvedora do Firefox para ver como os itens são posicionados em relação às linhas da grade.

### Atalhos de posicionamento de linha

Os valores longos usados acima podem ser compactados em uma linha para colunas com {{cssxref("grid-column")}} e uma linha para linhas com {{cssxref("grid-row")}}. O exemplo a seguir resultaria no mesmo posicionamento do código anterior, mas com muito menos CSS. O valor antes do caractere de barra (`/`) é a linha inicial, o valor após é a linha final.

Você pode omitir o valor final se a área abranger apenas uma trilha.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 100px;
}

.box1 {
  grid-column: 1 / 4;
  grid-row: 1 / 3;
}

.box2 {
  grid-column: 1;
  grid-row: 3 / 5;
}
```

## Células de grade

Uma _célula de grade_ é a menor unidade em uma grade. Conceitualmente, é como uma célula de tabela. Como vimos em nossos exemplos anteriores, uma vez que uma grade é definida como pai, os itens filhos serão organizados cada um em uma célula da grade definida. Na imagem abaixo, temos destacada a primeira célula da grade.

![A primeira célula da grade destacada](1_grid_cell.png)

## Áreas de grade

Os itens podem abranger uma ou mais células, tanto por linha quanto por coluna, e isso cria uma _área de grade_. As áreas de grade devem ser retangulares – não é possível criar uma área em forma de L, por exemplo. A área de grade destacada abrange duas trilhas de linha e duas de coluna.

![Uma área de grade](1_grid_area.png)

## Calhas

_Calhas_ ou _becos_ entre células de grade podem ser criados usando as propriedades {{cssxref("column-gap")}} e {{cssxref("row-gap")}}, ou a forma resumida {{cssxref("gap")}}. No exemplo abaixo, estamos criando uma lacuna de 10 pixels entre colunas e uma lacuna de `1em` entre linhas.

```css
.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 10px;
  row-gap: 1em;
}
```

> [!NOTE]
> Quando a grade foi lançada em navegadores, {{cssxref("column-gap")}}, {{cssxref("row-gap")}} e {{cssxref("gap")}} eram prefixados com o prefixo `grid-` como `grid-column-gap`, `grid-row-gap` e `grid-gap`, respectivamente.
>
> Todos os navegadores agora suportam valores não prefixados, no entanto, as versões prefixadas serão mantidas como apelidos, tornando-as seguras para uso.

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
  column-gap: 10px;
  row-gap: 1em;
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
```

{{ EmbedLiveSample('Gutters') }}

Qualquer espaço usado por lacunas será contabilizado antes que o espaço seja atribuído às trilhas de comprimento flexível `fr`, e as lacunas agem para fins de dimensionamento como uma trilha de grade normal, no entanto, você não pode colocar nada em uma lacuna. Em termos de posicionamento baseado em linha, a lacuna age como uma linha grossa.

## Grades aninhadas

Um item de grade pode se tornar um contêiner de grade. No exemplo a seguir, temos a grade de três colunas que criamos anteriormente, com nossos dois itens posicionados. Neste caso, o primeiro item tem alguns subitens. Como esses itens não são filhos diretos da grade, eles não participam do layout da grade e, portanto, são exibidos em um fluxo normal de documento.

![Grade aninhada em um fluxo](1_nested_grids_in_flow.png)

### Aninhamento sem subgrade

Se definirmos `box1` como `display: grid`, poderemos dar a ela uma definição de trilha e ela também se tornará uma grade. Os itens então são dispostos nessa nova grade.

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

```css
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  gap: 3px;
  background-color: #fff4e6;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}

.box {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}

.box1 {
  grid-column: 1 / 4;
}

.nested {
  border: 2px solid #ffec99;
  border-radius: 5px;
  background-color: #fff9db;
  padding: 1em;
}
```

{{ EmbedLiveSample('Nesting_without_subgrid', '600', '340') }}

Neste caso, a grade aninhada não tem relação com o pai. Como você pode ver no exemplo, ela não herdou o {{cssxref("gap")}} do pai e as linhas na grade aninhada não estão alinhadas às linhas na grade pai.

### Subgrade

Além das grades comuns, a _subgrade_ nos permite criar grades aninhadas que usam a definição de trilha da grade pai.

Para usá-las, editamos o exemplo de grade aninhada acima para alterar a definição de trilha de `grid-template-columns: repeat(3, 1fr)`, para `grid-template-columns: subgrid`. A grade aninhada então usa as trilhas da grade pai para dispor os itens.

```css
.box1 {
  grid-column-start: 1;
  grid-column-end: 4;
  grid-row-start: 1;
  grid-row-end: 3;
  display: grid;
  grid-template-columns: subgrid;
}
```

## Sobreposição de itens com z-index

Itens de grade podem ocupar a mesma célula e, neste caso, podemos usar a propriedade {{cssxref("z-index")}} para controlar a ordem em que os itens sobrepostos são empilhados.

### Sobreposição sem z-index

Se retornarmos ao nosso exemplo com itens posicionados por número de linha, podemos alterá-lo para fazer dois itens se sobreporem.

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
```

{{ EmbedLiveSample('Overlapping_without_z-index', '230', '460') }}

O item `box2` agora está sobrepondo `box1`, ele é exibido no topo, pois vem depois na ordem do código.

### Controlando a ordem

Podemos controlar a ordem em que os itens são empilhados usando a propriedade `z-index` - assim como itens posicionados. Se dermos a `box2` um `z-index` menor que `box1`, ele será exibido abaixo de `box1` na pilha.

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
```

{{ EmbedLiveSample('Controlling_the_order', '230', '460') }}

## Próximos passos

Neste artigo, demos uma olhada rápida nas possibilidades dos layouts de grade. Explore e brinque com os exemplos de código e, em seguida, passe para [a próxima parte deste guia](/pt-BR/docs/Web/CSS/CSS_grid_layout/Relationship_of_grid_layout_with_other_layout_methods), onde realmente começaremos a nos aprofundar nos detalhes do layout de grade CSS.
