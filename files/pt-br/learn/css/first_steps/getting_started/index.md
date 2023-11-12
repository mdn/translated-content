---
title: Iniciando com CSS
slug: Learn/CSS/First_steps/Getting_started
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}

Neste artigo iremos pegar um simples documento HTML e aplicar o CSS nele, aprendendo algumas coisas práticas sobre a linguagem no decorrer do processo.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row"><strong>pré-requisito</strong>s:</th>
      <td>
        <p>
          Conhecimento básico sobre computador,
          <a
            href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
            >softwares básicos instalados</a
          >, conhecimento básico de
          <a
            href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
            >como trabalhar com arquivos</a
          >, e conhecimento básico sobre HTML (estude
          <a
            href="https://developer.mozilla.org/pt-BR/docs/Learn/HTML/Introduction_to_HTML"
            >Introdução ao HTML</a
          >.)
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender os fundamentos que vinculam um documento CSS a um arquivo HTML,
        e ser capaz de estilizar um texto simples com CSS.
      </td>
    </tr>
  </tbody>
</table>

## Iniciando com algum HTML

Nosso ponto de partida e um documento HTML. Você pode copiar o código abaixo se desejar trabalhar no seu próprio computador. Salve-o como `index.html` em uma pasta, no seu computador.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Getting started with CSS</title>
  </head>

  <body>
    <h1>I am a level one heading</h1>

    <p>
      This is a paragraph of text. In the text is a
      <span>span element</span> and also a
      <a href="http://example.com">link</a>.
    </p>

    <p>
      This is the second paragraph. It contains an <em>emphasized</em> element.
    </p>

    <ul>
      <li>Item one</li>
      <li>Item two</li>
      <li>Item <em>three</em></li>
    </ul>
  </body>
</html>
```

> **Nota:** **Observação**: Se você está lendo isso em um dispositivo móvel ou em um ambiente onde não possa criar arquivos, não se preocupe — editores de código ao vivo estão disponíveis abaixo para permitir que você escreva o código de exemplo aqui, nesta página.

## Adicionando CSS para o nosso documento

A primeira coisa que precisamos fazer é falar para o HTML que temos algumas regras CSS que desejamos usar. Há três formas diferentes de aplicar CSS a um documento HTML que você normalmente vai encontrar, contudo, por enquanto, iremos olhar para o mais habitual e útil – vincular o CSS a partir do cabeçalho do seu documento.

Crie um arquivo na mesma pasta em que se encontra o seu documento HTML e salve-o como `style.css`. A extensão `.css` nos informa que se trata de um arquivo CSS.

Para ligar o `style.css` ao `index.html` adicione a seguinte linha em algum lugar dentro do {{htmlelement("head")}} do documento HTML:

```html
<link rel="stylesheet" href="styles.css" />
```

Este {{htmlelement("link")}} elemento diz ao navegador que temos uma folha de estilo, usando o atributo `rel`, e a localização desse arquivo como o valor do atributo `href`. Você pode testar se esse CSS funciona adicionando regras ao `styles.css`. Usando o seu editor de código, adicione as linhas seguintes ao seu arquivo CSS:

```css
h1 {
  color: red;
}
```

Salve os seus arquivos HTML e CSS e atualize a página no seu navegador. O nível de cabeçalho um, no topo do documento, deve estar agora em vermelho. Se tudo estiver correto, parabéns! - Você teve sucesso ao aplicar CSS a um documento HTML. Se nada aconteceu, observe cuidadosamente se você digitou tudo certo.

Você pode continuar trabalhando no `styles.css` localmente, ou pode usar nosso editor interativo abaixo pra continuar com este tutorial. O editor interativo age como se o CSS no primeiro painel estivesse vinculado ao documento HTML, assim como fizemos com o documento acima.

## Estilizando elementos HTML

Fazendo o nosso cabeçalho ficar vermelho, demonstramos que podemos pegar e estilizar um elemento HTML. Fazemos isso especificando um seletor de elemento — Isto é, um seletor que combina diretamente com o nome do elemento HTML. Para especificar todos os parágrafos no documento, você usaria o seletor `p`. Para tornar todos os parágragos verdes, você usaria:

```css
p {
  color: green;
}
```

Você pode especificar múltiplos seletores, separando-os com virgula. Se eu quero que todos os parágrafos e todos os itens da lista se tornem verdes, então minha regra se parecerá com isto:

```css
p,
li {
  color: green;
}
```

Experimente isso no editor interativo abaixo (edit the code boxes), ou no seu arquivo CSS local.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started1.html", '100%', 900)}}

## Alterando o comportamento padrão dos elementos

Quando olhamos para um documento HTML bem marcado, até algo tão simples como o nosso exemplo, podemos ver como o navegador está tornando o HTML legível adicionando algum estilo padrão. Títulos são grandes e em negritos, nossa lista possui marcadores. Isso acontece porque navegadores tem uma folha de estilo interna contendo estilo padrão, a qual eles aplicam para toda a página por padrão; sem eles, todo o texto seria executado em conjunto e teríamos que estilizar tudo do princípio. Todos os modernos navegadores mostram conteúdo HTML por padrão, da mesma maneira.

Contudo, você frequentemente irá desejar algo diferente do que foi escolhido pelo navegador. Isso pode ser feito simplesmente escolhendo o elemento HTML que você quer mudar, e usando uma regra CSS para alterar a forma como ele se parece. Um bom exemplo é o nosso `<ul>`, uma lista não ordenada. Ele tem uma lista marcada, e, se decido não escolher essa marcação, posso removê-los fazendo assim:

```css
li {
  list-style-type: none;
}
```

Experimente adicionar isto ao seu CSS agora.

A propriedade `list-style-type` é uma boa propriedade para se ver no MDN para ver quais valores são suportados. Dê uma olhada na página para [`list-style-type`](/pt-BR/docs/Web/CSS/list-style-type) e encontrará um exemplo interativo no topo da página para experimentar alguns valores diferentes nele, todos os valores permitidos são detalhados mais abaixo na página.

Olhando para essa página você descobrirá que, além de remover a marcação da lista, que você também pode alterá-los — Teste mudá-los para marcação quadrada, usando valores de `square`.

## Incluindo uma classe

Até agora, temos estilizado elementos baseado em seus nomes HTML. isto funciona enquanto você desejar que todos os elementos desse tipo, no seu documento, se pareçam o mesmo. Na maioria das vezes, isso não é o caso, e, então, você precisará encontrar uma maneira de selecionar um subconjunto de elementos sem alterar os outros. A maneira mais comum de fazer isso é adicionar uma classe ao seu elemento HTML e especificar essa classe.

No seu documento HTML, adicione um [atributo de classe](/pt-BR/docs/Web/HTML/Global_attributes/class) ao segundo item da lista. Sua lista se parecerá, agora, assim:

```html
<ul>
  <li>Item one</li>
  <li class="special">Item two</li>
  <li>Item <em>three</em></li>
</ul>
```

No seu CSS, você pode especificar a classe `special` criando um seletor que inicia com um caractere de ponto final. Adicione o seguinte código ao seu arquivo CSS:

```css
.special {
  color: orange;
  font-weight: bold;
}
```

Salve e recarregue a página no navegador, para visualizar o resultado.

Você pode aplicar a classe `special` para qualquer elemento na sua página que desejar ter a mesma aparência o item dessa lista. Por exemplo, pode-se querer que o `<span>`, no parágrafo, também se torne laranja e em negrito. Experimente adicionar uma `class` de `special` a ele, em seguida, recarregue a sua página e veja o que acontece.

Algumas vezes, verá regras com um seletor que lista o seletor do elemento HTML junto com uma classe:

```css
li.special {
  color: orange;
  font-weight: bold;
}
```

Essa sintaxe significa "pegue qualquer elemento`li` que tenha uma classe `special`". Se você fizesse isso, não seria mais possível aplicar a classe a um `<span>` ou outro elemento, simplesmente adicionando a classe a ele; você teria que adicionar esse elemento à lista de seletores, assim:

```css
li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```

Como pode imaginar, algumas classes podem ser aplicadas a muitos elementos e você não quer ter que editar seu CSS a cada vez que algo novo precisar assumir esse estilo. Portanto, as vezes é melhor ignorar o elemento e simplesmente se referir à classe, a menos que você queira criar algumas regras especiais para um elemento em particular, e, talvez, queira ter certeza que eles não serão aplicados aos outros.

## Estilizando coisas baseadas em sua localização no documento

Há momentos quando você desejará que algo se pareça diferente, baseado onde ele está no documento. Existem vários seletores que podem lhe ajudar aqui, mas, por enquanto, iremos olhar apenas alguns. No nosso documento estão dois elementos `<em>` — um dentro de um parágrafo e o outro dentro do item de lista. Para selecionar apenas um `<em>` aninhado dentro de um elemento `<li>` posso usar um seletor chamado **combinador descendente**, a qual simplesmente, assume a forma de um espaço entre dois outros seletores.

Adicione a seguinte regra a sua folha de estilo.

```css
li em {
  color: rebeccapurple;
}
```

Este seletor selecionará qualquer elemento `<em>` que está dentro (um descendente de) um `<li>`. Deste modo, no seu documento de exemplo, você deve achar que o `<em>` no terceiro item da lista agora está roxo, mas o que está dentro do parágrafo permanece inalterado.

Outra coisa que você pode gostar de experimentar é estilizar um parágrafo quando ele vem diretamente após um título no mesmo nível de hierarquia no HTML. Para isso, coloque um `+` (um **combinador irmão adjacente**) entre os seletores.

Experimente adicionar esta regra à sua folha de estilo também:

```css
h1 + p {
  font-size: 200%;
}
```

O exemplo ativo abaixo inclui as duas regras acima. Verifique adicionando uma regra para tornar um span vermelho, se ele está dentro de um parágrafo. Você saberá se fez certo quando o span no primeiro parágrafo ficar vermelho, mas o do primeiro item da lista não mudar de cor.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started2.html", '100%', 1100)}}

> **Nota:** **Observação**: Como pode ver, CSS nos dá várias maneiras de especificar elementos, e temos somente arranhado a superfície até agora! Analisaremos adequadamente todos esses seletores e muitos outros, nos nossos artigos [Seletores](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors) posteriormente neste curso.

## Estilizando coisas baseadas no estado

O tipo final de estilo, que vamos dar uma olhada neste tutorial, é a habilidade de estilizar coisas com base em seu estado. Um exemplo direto disso é quando estilizamos links. Quando aplicamos um estilo a um link, precisamos especificar o elemento [`<a>`](/pt-BR/docs/Web/HTML/Element/a) (âncora). Isto possui diferentes estados, dependendo se ele foi visitado, se não foi visitado, se o mouse está passando por ele, se foi teclado ou no processo de ser clicado (ativado). Você pode usar CSS para especificar estes diferentes estados — o CSS abaixo estiliza links não visitados com a cor rosa e links visitados com a cor verde.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Você pode alterar a aparência do link quando o usuário passa o mouse sobre ele. Por exemplo, removendo o sublinhado, o que é realizado na próxima regra:

```css
a:hover {
  text-decoration: none;
}
```

No exemplo ativo abaixo, você pode brincar com diferentes valores para os vários estados do link. Adicionei as regras acima, e agora perceba que a cor rosa é bastante clara e difícil de ler. — porque não mudar isso para uma cor melhor? Pode deixá-los em negrito?

{{EmbedGHLiveSample("css-examples/learn/getting-started/started3.html", '100%', 900)}}

Removemos o sublinhado do nosso link ao passar o mouse. Pode-se remover os sublinhados de todos os estados de um link. Vale lembrar, no entanto, que em um site real, você deseja garantir que os visitantes saibam que um link é um link. Deixar o sublinhado no lugar pode ser uma pista importante para as pessoas perceberem que é possível clicar em algum texto dentro de um parágrafo — esse é o comportamento ao qual estão acostumados. Como tudo em CSS, existe o potencial de tornar o documento menos acessível com suas alterações — procuraremos destacar possíveis armadilhas em locais apropriados.

> **Nota:** **Observação**: Você verá frequentemente menção de [acessibilidade](/pt-BR/docs/Learn/Accessibility) nessas lições e no MDN. Quando falamos sobre acessibilidade, estamos nos referindo aos requerimentos para a nossa página web ser compreensível e utilizável por todos.
>
> Seu visitante pode muito bem estar em um computador com um mouse defeituoso, ou um dispositivo móvel com uma tela sensível ao toque. Ou eles podem estar usando um leitor de tela, que lê o conteúdo do documento, ou podem precisar de muito texto grande, ou estar navegando no site apenas usando o teclado.
>
> Um documento HTML simples é geralmente acessível a todos — Ao começar a estilizar esse documento, é importante que você não o rone menos acessível.

## Combinando seletores e combinadores

Vale ressaltar que você pode combinar vários seletores e combinadores. Até agora, vimos assim:

```css
/* selects any <span> that is inside a <p>, which is inside an <article>  */
article p span { ... }

/* selects any <p> that comes directly after a <ul>, which comes directly after an <h1>  */
h1 + ul + p { ... }
```

Você pode combinar multiplos tipos juntos, também. Experimente acrescentar o seguinte código:

```css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Isso estilizará qualquer elemento com a classe `special`, a qual está dentro de um `<p>`, que vem logo após um `<h1>`, que, por sua vez, está dentro de um `<body>`. Ufa!

No HTML original que forncemos, o único elemento estilizado é `<span class="special">`.

Não se preocupe se isto parece complicado no momento — em breve, você começará a entender como escreve mais CSS.

## Empacotando

Neste tutorial, demos uma olhada na quantidade de maneiras as quais pode-se estilizar um documento usando CSS. Estaremos desenvolvendo esse conhecimento ao longo da caminhada através das Lições. No entanto, agora, você já sabe o suficiente para estilizar o texto, aplicar CSS com base em diferentes maneiras de especificar elementos no documento e procurar propriedades e valores na documentação do MDN.

Na próxima lição, veremos como o CSS é estruturado.

{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}
