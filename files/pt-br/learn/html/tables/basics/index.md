---
title: HTML table basics
slug: Learn/HTML/Tables/Basics
---

{{LearnSidebar}}{{NextMenu("Aprender/HTML/Tabelas/Avançado", "Aprender/HTML/Tabelas")}}

Este artigo é uma introdução às tabelas HTML, cobrindo o básico, como linhas e células, cabeçalhos, fazendo as células ocuparem várias colunas e linhas e como agrupar todas as células em uma coluna para fins de estilo.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Noções básicas de HTML (consulte
        <a href="/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
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

![Uma tabela de amostra mostrando nomes e idades de algumas pessoas - Chris 38, Dennis 45, Sarah 29, Karen 47.](numbers-table.png)

![Um cronograma de natação mostrando uma tabela de dados de amostra](swimming-timetable.png)

As tabelas são muito comumente usadas na sociedade humana, e têm sido por muito tempo, como evidenciado por este documento do Censo dos EUA de 1800:

![Um documento de pergaminho muito antigo; os dados não são facilmente legíveis, mas mostram claramente uma tabela de dados sendo usada.](1800-census.jpg)

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

Quando criadas corretamente, até pessoas cegas podem interpretar dados tabulares em uma tabela HTML - uma tabela HTML bem sucedida deve melhorar a experiência tanto de usuários com deficiências visuais quanto daqueles capazes de ver.

### Estilizando tabelas

Você também pode dar uma olhada [neste exemplo real](https://mdn.github.io/learning-area/html/tables/assessment-finished/planets-data.html) no GitHub! Uma coisa que você perceberá é que essa tabela parece um pouco mais legível lá — isso ocorre porque a tabela que você vê acima nesta página tem o mínimo de estilização, enquanto a versão do GitHub tem um CSS expressivo aplicado.

Não se iluda; para que tabelas sejam de fato efetivas na web, você precisa fornecer algumas informações de estilo com [CSS](/pt-BR/docs/Learn/CSS), bem como uma boa estrutura sólida com HTML. Neste módulo nos iremos focar na parte do HTML; Para saber mais sobre a parte do CSS você deve visitar nosso artigo [Estilizando Tabelas](/pt-BR/docs/Learn/CSS/Styling_boxes/Styling_tables) depois que você finalizar este.

Nós não focaremos em CSS neste módulo, mas nós forneceremos uma mínima folha de estilo CSS para você usar que fará suas tabelas mais legíveis que o padrão que teria sem nenhuma estilização. Você pode procurar a [folha de estilo aqui](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css), e você pode também procurar um [template HTML](https://github.com/mdn/learning-area/blob/master/html/tables/basic/blank-template.html) que aplica a folha de estilo — juntos eles serão um bom ponto de partida para serem implementados com tabelas HTML.

### Quando NÃO utilizar tabelas HTML?

Tabelas HTML devem ser usadas para exibir dados tabulares - foram projetadas para isso. Infelizmente, muitas pessoas se acostumaram a usar tabelas HTML para diagramar páginas web, por exemplo, uma linha para conter o cabeçalho, outra linha para conter as colunas de conteúdo, uma linha para conter o rodapé, etc. Mais detalhes e um exemplo podem ser encontrados em [Page Layouts](/pt-BR/docs/Learn/Accessibility/HTML#Page_layouts) de nosso [Accessibility Learning Module](/pt-BR/docs/Learn/Accessibility). Isso era muito comum porque o suporte à CCS entre diferentes navegadores era muito ruim; tabelas sendo usadas para leiaute não são comuns nos dias de hoje mas ainda podem ser encontradas em alguns cantos da web.

Em resumo, usar tabelas para leiuate no lugar de usar [técnicas de leiaute CSS](/pt-BR/docs/Learn/CSS/CSS_layout) é uma péssima ideia. Os principais motivos são os seguintes:

1. **Tabelas usadas para leiuate reduzem a accessibilidade para usuários com deficiência visual**: [Leitores de tela](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders), usados por pessoas cegas, interpretam as tags que existem na página HTML e leem em voz alta os conteúdos para os usuários. Como as tabelas não são adequadas para leiaute, e a marcação é mais complexa que aquela feita com técnicas de leiuate de CSS, a leitura em voz alta resultante dos leitores de tela será confusa para os usuários.
2. **Tabelas produzem uma sopa de tags**: Como foi dito acima, tabelas usadas para leiaute geralmente envolvem estruturas de marcação mais complexas que as técnicas apropriadas para leiaute. Isso pode resultar em código mais difícil de escrever, de manter e de depurar.
3. **Tabelas não são automaticamente responsivas**: Quando usamos contêineres apropriados para fazer o leiuate (como as {{htmlelement("header")}}, {{htmlelement("section")}}, {{htmlelement("article")}}, ou {{htmlelement("div")}}), a largura por padrão é 100% da largura do elemento pai. Tabelas, no entanto, são dimensionadas por padrão de acordo com o seu conteúdo, de modo que medidas extras são necessárias para que as tabelas usadas para leiaute de estilos funcionem efetivamente entre os diversos dispositivos.

## Active learning: Criar sua primeira tabela

Falamos o suficiente sobre teoria de tabelas, então, vamos partir para um exemplo prático e construir uma tabela simples.

1. Antes de tudo, faça uma cópia local de [blank-template.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/blank-template.html) e [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) dentro de um novo diretório na sua máquina local.
2. O conteúdo de cada tabela fica contido entre as duas tags : **[`<table></table>`](/pt-BR/docs/Web/HTML/Element/table)**. Acrescente-as dentro da seção body de seu HTML.
3. O menor contêiner dentro de uma tabela é uma célula da tabela, que é criada por um elemento **[`<td>`](/pt-BR/docs/Web/HTML/Element/td)** ('td' significa 'dados da tabela'). Adicione as linhas seguintes dentro das tags da tabela:

   ```html
   <td>Hi, I'm your first cell.</td>
   ```

4. Se quisermos uma linha da tabela com quatro células, precisamos copiar essas tags três vezes. Altere o conteúdo da sua tabela para ficar dessa maneira:

   ```html
   <td>Hi, I'm your first cell.</td>
   <td>I'm your second cell.</td>
   <td>I'm your third cell.</td>
   <td>I'm your fourth cell.</td>
   ```

Como podemos ver, as células não são posicionadas uma abaixo da outra, em vez disso elas são automaticamente alinhadas umas com as outras na mesma linha. Cada elemento `<td>` cria uma única célula que juntas formam a primeira linha. Cada célula adicionada faz a linha crescer e se tornar mais longa.

Para evitar que a linha cresça e começar a posicionar células em uma segunda linha, precisamos usar o elemento **[`<tr>`](/pt-BR/docs/Web/HTML/Element/tr)** ('tr' significa 'linha da tabela'). Vamos investigar isso agora.

1. Coloque as quatro células recém criadas dentro das tags `<tr>` tags, dessa maneira:

   ```html
   <tr>
     <td>Hi, I'm your first cell.</td>
     <td>I'm your second cell.</td>
     <td>I'm your third cell.</td>
     <td>I'm your fourth cell.</td>
   </tr>
   ```

2. Agora que uma linha foi criada, vamos tentar criar mais uma ou duas linhas — cada linha precisa estar cercada por um elemento `<tr>`, com cada célula contida dentro de um elemento `<td>`.

Isso deve resultar em uma tabela que vai parecer com algo assim:

| Hi, I'm your first cell. | I'm your second cell. | I'm your third cell. | I'm your fourth cell. |
| ------------------------ | --------------------- | -------------------- | --------------------- |
| Second row, first cell.  | Cell 2.               | Cell 3.              | Cell 4.               |

> **Nota:** Você também pode encontrar esse código no GitHub em [simple-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/simple-table.html) ([veja ao vivo também](http://mdn.github.io/learning-area/html/tables/basic/simple-table.html)).

## Adicionar cabeçalhos com o elemento \<th>

Agora vamos voltar nossa atenção para os cabeçalhos das tabelas — células especiais que aparecem no início de uma linha ou coluna e definem o tipo de dado que a linha ou coluna contém (como exemplo, veja as células de "Person" e "Age" no primeiro exemplo mostrado nesse artigo). Para ilustrar como os cabeçalhos são úteis, dê uma olhada na seguinte tabela de exemplo. Primeiro o código fonte:

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

Agora veja como a tabela é exibida:

|               | Knocky                    | Flor            | Ella         | Juan                      |
| ------------- | ------------------------- | --------------- | ------------ | ------------------------- |
| Breed         | Jack Russell              | Poodle          | Streetdog    | Cocker Spaniel            |
| Age           | 16                        | 9               | 10           | 5                         |
| Owner         | Mother-in-law             | Me              | Me           | Sister-in-law             |
| Eating Habits | Eats everyone's leftovers | Nibbles at food | Hearty eater | Will eat till he explodes |

Aqui, o problema é que mesmo que possamos entender o que está acontecendo, não é tão fácil fazer uma referência cruzada dos dados, como poderia ser. Se os cabeçalhos das colunas e linhas se destacassem de alguma maneira, seria bem melhor.

### Aprendizado Ativo

Vamos tentar melhorar essa tabela.

1. Primeiro, faça uma cópia local dos arquivos [dogs-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/dogs-table.html) e [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) dentro de um novo diretório da sua máquina local. O HTML contém o mesmo exemplo de Dogs visto acima.
2. Para reconhecer os cabeçalhos de uma tabela como cabeçalhos, tanto visualmente como semanticamente, podemos usar o elemento **[`<th>`](/pt-BR/docs/Web/HTML/Element/th)** ('th' significa 'cabeçalho da tabela'). Ele funciona da mesma maneira que um `<td>`, exceto que denota um cabeçalho, e não uma célula normal. Abra o arquivo HTML, e mude todos os elementos `<td>` que envolvem os cabeçalhos das tabelas para o elemento `<th>`.
3. Salve o HTML e abra em um navegador, e veja que os cabeçalhos agora se parecem mais com cabeçalhos.

> **Nota:** Encontre esse exemplo pronto em [dogs-table-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/dogs-table-fixed.html) no GitHub ([veja ao vivo também](http://mdn.github.io/learning-area/html/tables/basic/dogs-table-fixed.html)).

### Por que os cabeçalhos são úteis?

Já respondemos parcialmente essa pergunta - fica mais fácil encontrar os dados que estamos procurando quando o cabeçalho se destaca claramente, e o design simplesmente aparece mais bonito.

> **Nota:** Cabeçalhos de tabelas têm alguns estilos padronizados — eles são fortes e centralizados mesmo que você não use nenhum estilo para a tabela, para ajudar a destacá-los.

Cabeçalhos de tabelas também têm um benefício extra - juntamente com o atributo `scope` (que vamos aprender no próximo artigo), eles permitem tornar as tabelas mais acessíveis associando cada cabeçalho com todos os dados em uma mesma linha ou coluna. Leitores de tela podem então ler em voz alta uma coluna ou linha inteira de dados de uma vez só, o que é muito mais útil.

## Permitir que células se estendam por múltiplas linhas ou colunas

Algumas vezes, queremos que as células se estendam para múltiplas linhas ou colunas. Veja esse simples exemplo a seguir, que mostra os nomes de animais comuns. Em alguns casos, queremos mostrar os nomes dos machos e fêmeas perto do nome do animal. Em outros não queremos isso, e nesse caso queremos que o nome do animal se extenda para a tabela inteira.

A marcação inicial se parece assim:

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

Mas o resultado final não é aquilo que queremos:

| Animals      |      |
| ------------ | ---- |
| Hippopotamus |      |
| Horse        | Mare |
| Stallion     |      |
| Crocodile    |      |
| Chicken      | Hen  |
| Rooster      |      |

Queremos uma maneira de fazer "Animals", "Hippopotamus", e "Crocodile" se estenderem por duas colunas, e "Horse" e "Chicken" se estenderem para baixo por duas linhas. Por sorte, os cabeçalhos das tabelas e células têm os atributos `colspan` e `rowspan`, que nos permite fazer esses ajustes. Ambos aceitam um valor de número sem unidade, que iguala o número de linhas e colunas que deseja estender. Por exemplo, `colspan="2"` faz com que uma célula se estender por duas colunas.

Vamos usar `colspan` e `rowspan` para melhorar essa tabela.

1. Primeiro, faça uma cópia local dos arquivos [animals-table.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/animals-table.html) and [minimal-table.css](https://github.com/mdn/learning-area/blob/master/html/tables/basic/minimal-table.css) e salve dentro de um novo diretório na sua máquina local. O arquivo HTML contém o mesmo exemplo de animais visto acima.
2. Em seguida, use `colspan` para fazer "Animals", "Hippopotamus", e "Crocodile" se estender por duas colunas.
3. Por fim, use `rowspan` para fazer "Horse" e "Chicken" se estender por duas linhas.
4. Salve e abra o código em um navegador para ver a melhoria.

> **Nota:** Encontre o exemplo pronto em [animals-table-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/animals-table-fixed.html) no GitHub ([veja ao vivo também](http://mdn.github.io/learning-area/html/tables/basic/animals-table-fixed.html)).

## Provendo estilos comuns para colunas

Existe uma última característica da qual vamos falar nesse artigo, antes de prosseguir. HTML tem um método de definir informação de estilo para uma coluna inteira de dados de uma só vez — o elemento **[`<col>`](/pt-BR/docs/Web/HTML/Element/col)** e **[`<colgroup>`](/pt-BR/docs/Web/HTML/Element/colgroup)**. Eles existem por que pode ser um pouco entediante e ineficiente ter de especificar o estilo de colunas - temos de especificar as informações de estilo para _cada_ `<td>` ou `<th>` da coluna, ou usar um seletor complexo como o {{cssxref(":nth-child()")}}.

> **Nota:** Estilizar colunas dessa maneira está [limitada para umas poucas propriedades](https://www.w3.org/TR/CSS22/tables.html#columns): [`border`](/pt-BR/docs/Web/CSS/border), [`background`](/pt-BR/docs/Web/CSS/background), [`width`](/pt-BR/docs/Web/CSS/width), e [`visibility`](/pt-BR/docs/Web/CSS/visibility). Para ajustar outras propriedades devemos aplicar o estilo para cada `<td>` ou `<th>` da coluna, ou usar um seletor complexo como um {{cssxref(":nth-child()")}}.

Veja o simples exemplo a seguir:

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

Que exibe o seguinte resultado:

| Data 1   | Data 2 |
| -------- | ------ |
| Calcutta | Orange |
| Robots   | Jazz   |

Não é o ideal, uma vez que temos de repetir os dados de estilo em todas as três células da coluna (provavelmente teríamos uma `class` configurada para as três células em um projeto de verdade e especificaríamos o estilo em uma folha de estilo separada). Em vez disso, podemos especificar a informação uma única vez, no elemento `<col>`. Os elementos `<col>` são especificados dentro de um contêiner `<colgroup>` abaixo da tag de abertura `<table>`. Podemos criar o mesmo efeito que vimos acima espeficando a tabela da seguinte maneira:

```html
<table>
  <colgroup>
    <col />
    <col style="background-color: yellow" />
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

De modo efetivo, estamos definindo duas "colunas de estilo", cada uma espeficando a informação de estilo para cada coluna. Não estamos estilizando a primeira coluna, mas ainda assim temos de incluir um elemento `<col>` vazio - do contrário, o estilo simplesmente seria aplicado para a primeira coluna.

Para aplicar as informações de estilo para as duas colunas, podemos incluir apenas um elemento `<col>` contendo um atributo span, dessa maneira:

```html
<colgroup>
  <col style="background-color: yellow" span="2" />
</colgroup>
```

Como `colspan` e `rowspan`, `span` aceita um valor de número sem unidade que especifica o número de colunas sobre as quais desejamos aplicar o estilo.

### Aprendizado ativo: colgroup e col

Agora é hora de tentar sozinho.

Abaixo encontram-se os horários de uma professora de línguas. Na sexta-feira ela tem uma nova aula ensinando holandês todos os dias, mas ela também ensina alemão alguns poucos períodos das terças-feiras e quintas-feiras. Ela quer destacar as colunas contendo os dias que têm aula.

{{EmbedGHLiveSample("learning-area/html/tables/basic/timetable-fixed.html", '100%', 320)}}

Recrie a tabela seguindo os passos abaixo.

1. Primeiro, faça uma cópia local do arquivo [timetable.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable.html) dentro de um novo diretório na sua máquina local. O HTML contém a mesma tabela que viu acima, porém sem os dados de estilo.
2. Acrescente um elemento `<colgroup>` na parte superior da tabela, bem abaixo da tag `<table>`, dentro da qual você pode adicionar os elementos `<col>` (veja os passos que faltam abaixo).
3. As duas primeiras colunas devem ser deixadas sem nenhum estilo.
4. Adicione uma cor de fundo para a terceira coluna. O valor do atributo `style` é `background-color:#97DB9A;`
5. Ajuste uma largura diferente para a quarta coluna. O valor do atributo `style` é `width: 42px;`
6. Adicione uma cor de fundo para a quinta coluna. O valor do atributo `style` é `background-color: #97DB9A;`
7. Adicione uma cor de fundo diferente e uma borda para a sexta coluna, para indicar que este é um dia especial e ela está dando uma nova aula. Os valores dos atributos `style` são `background-color:#DCC48E; border:4px solid #C1437A;`
8. Os dois últimos dias são dias livres, então apenas ajuste para nenhuma cor de fundo, mas defina uma largura; o valor do atributo `style` é `width: 42px;`

Veja se consegue seguir o exemplo. Se você tiver dúvidas ou quiser verificar seu trabalho, pode encontrar nossa versão no GitHub como [schedule-fixed.html](https://github.com/mdn/learning-area/blob/master/html/tables/basic/timetable-fixed.html) ( [veja ao vivo também](http://mdn.github.io/learning-area/html/tables/basic/timetable-fixed.html) ).

## Resumo

Isso envolve o básico das tabelas HTML. No próximo artigo, veremos alguns recursos de mesa um pouco mais avançados e começaremos a pensar como eles são acessíveis para pessoas com deficiência visual.

{{NextMenu("Aprender/HTML/Tabelas/Avançado", "Aprender/HTML/Tabelas")}}

## Neste módulo

- [Noções básicas de tabela HTML](/pt-BR/docs/Learn/HTML/Tables/Basics)
- [Recursos avançados e acessibilidade da tabela HTML](/pt-BR/docs/Learn/HTML/Tables/Advanced)
- [Estruturação de dados do planeta](/pt-BR/docs/Learn/HTML/Tables/Structuring_planet_data)
