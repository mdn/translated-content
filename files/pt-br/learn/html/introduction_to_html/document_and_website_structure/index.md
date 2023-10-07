---
title: Estrutura de documento e sites
slug: Learn/HTML/Introduction_to_HTML/Document_and_website_structure
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}Além de definir as partes individuais de sua página (como "um parágrafo" ou "uma imagem"),

o {{glossary("HTML")}} também conta com vários elementos de nível de bloco usados para definir as áreas de seu site (como "o cabeçalho", "o menu de navegação", "a coluna de conteúdo príncipal"). Este artigo explora como planejar uma estrutura básica de website, e escrever o HTML para representar essa estrutura.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pre-requisitos:</th>
      <td>
        <p>
          Familiaridade básica com HTML, como mostrado em
          <a href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Getting_started"
            >Iniciando com HTML</a
          >. Formatação de texto HTML, como mostrado em
          <a
            href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Fundamentos_textuais_HTML"
            >Fundamentos do texto em HTML</a
          >. O funcionamento de hiperlinks, como visto em
          <a
            href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Criando_hyperlinks"
            >Criando hyperlinks</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        <p dir="ltr" id="tw-target-text">
          Aprenda a estruturar seu documento usando tags semânticas e como
          elaborar a estrutura de um site simples.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Seções básicas de um documento

As páginas da web podem e serão muito diferentes umas das outras, mas todas tendem a compartilhar componentes padrão semelhantes, a menos que a página exiba um vídeo ou um jogo em tela cheia, seja parte de algum tipo de projeto de arte ou seja mal estruturada:

- cabeçalho (header)
  - : Normalmente, uma grande faixa na parte superior com um grande título e / ou logotipo. É aí que as principais informações comuns sobre um site geralmente ficam de uma página para outra.
- barra de navegação
  - : Links para as principais seções do site; geralmente representado por botões de menu, links ou guias. Como o cabeçalho, esse conteúdo geralmente permanece consistente de uma página para outra - ter uma navegação inconsistente em seu site levará a usuários confusos e frustrados. Muitos web designers consideram a barra de navegação parte do cabeçalho em vez de um componente individual, mas isso não é um requisito; na verdade, alguns também argumentam que ter os dois separados é melhor para acessibilidade, já que os leitores de tela podem ler melhor os dois recursos se estiverem separados.
- conteúdo principal
  - : Uma grande área no centro que contém a maior parte do conteúdo exclusivo de uma determinada página da Web, por exemplo, o vídeo que você deseja assistir ou a história principal que você está lendo ou o mapa que deseja visualizar ou as manchetes de notícias, etc. Esta é a única parte do site que definitivamente irá variar de página para página!
- barra lateral (sidebar)
  - : Algumas informações periféricas, links, cotações, anúncios etc. Geralmente, isso é contextual ao conteúdo principal (por exemplo, em uma página de um artigo de notícias, a barra lateral pode conter a biografia do autor ou links para artigos relacionados), mas há também casos em que você encontrará alguns elementos recorrentes como um sistema de navegação secundário.
- rodapé (footer)
  - : Uma faixa na parte inferior da página que geralmente contém letras pequenas, avisos de direitos autorais ou informações de contato. É um lugar para colocar informações comuns (como o cabeçalho), mas geralmente essas informações não são críticas ou secundárias ao próprio site. O rodapé também é usado às vezes para fins de {{Glossary ("SEO")}}, fornecendo links para acesso rápido a conteúdo popular. Um "site típico" poderia ser colocado assim:

![a simple website structure example featuring a main heading, navigation menu, main content, side bar, and footer.](sample-website.png)

## HTML para estruturar conteúdo

O exemplo simples mostrado acima não é bonito, mas é perfeitamente aceitável para ilustrar um exemplo típico de layout de website. Alguns sites têm mais colunas, algumas são bem mais complexas, mas você tem a ideia. Com o CSS certo, você poderia usar praticamente todos os elementos para agrupar as diferentes seções e fazer com que parecesse como você queria, mas como discutido anteriormente, precisamos respeitar a semântica e **usar o elemento certo para o trabalho certo.**

Isso ocorre porque os visuais não contam toda a história. Usamos cor e tamanho de fonte para chamar a atenção dos usuários para as partes mais úteis do conteúdo, como o menu de navegação e links relacionados, mas sobre pessoas com deficiência visual, por exemplo, que podem não encontrar conceitos como "rosa" e "grande". fonte "muito útil?

> **Nota:** Nota: as pessoas daltônicas representam cerca de 4% da população mundial ou, em outras palavras, aproximadamente 1 em cada 12 homens e 1 em cada 200 mulheres são daltônicas. Cegos e deficientes visuais representam cerca de 4-5% da população mundial (em 2012 havia 285 milhões de pessoas no mundo, enquanto a população total era de cerca de 7 bilhões).

Em seu código HTML, você pode marcar seções de conteúdo com base em sua funcionalidade. Você pode usar elementos que representam as seções de conteúdo descritas acima sem ambigüidade, e tecnologias assistivas, como leitores de tela, podem reconhecer esses elementos e ajudar com tarefas como "localizar a navegação principal". "ou" encontre o conteúdo principal. " Como mencionamos anteriormente no curso, há um número de [consequências de não usar a estrutura de elemento e semâtica certas para o trabalho certo.](/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Fundamentos_textuais_HTML#Por_que_precisamos_de_estrutura)

Para implementar essa marcação semântica, o HTML fornece tags dedicadas que você pode usar para representar essas seções, por exemplo:

- **cabeçalho**: {{htmlelement("header")}}.
- **barra de navegação:** {{htmlelement("nav")}}.
- **conteúdo principal:** {{htmlelement("main")}}, com várias subseções de conteúdo representadas por {{HTMLElement("article")}}, {{htmlelement("section")}}, e elementos {{htmlelement("div")}}.
- **rodapé:** {{htmlelement("footer")}}.

### Aprendizagem ativa: explorando o código para o nosso exemplo

Nosso exemplo visto acima é representado pelo seguinte código (você também pode [encontrar o exemplo em nosso repositório GitHub](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/document_and_website_structure/index.html)). Gostaríamos que você olhasse o exemplo acima e, em seguida, examine a listagem abaixo para ver quais partes compõem a seção do visual.

```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />

    <title>My page title</title>
    <link
      href="https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300|Sonsie+One"
      rel="stylesheet"
      type="text/css" />
    <link rel="stylesheet" href="style.css" />

    <!-- as três linhas abaixo são uma correção para que elementos semânticos HTML5 funcionem em versões antigas do Internet Explorer-->
    <!--[if lt IE 9]>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/html5shiv/3.7.3/html5shiv.js"></script>
    <![endif]-->
  </head>

  <body>
    <!-- Esse é o cabeçalho (header) principal que vai ser usado em todas as páginas do nosso website -->

    <header>
      <h1>Header</h1>
    </header>

    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Our team</a></li>
        <li><a href="#">Projects</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <!-- Um formulário de pesquisa é uma outra maneira não linear comum de navegar por um site. -->

      <form>
        <input type="search" name="q" placeholder="Search query" />
        <input type="submit" value="Go!" />
      </form>
    </nav>

    <!-- Esse é o conteúdo principal da nossa página -->
    <main>
      <!-- Contém um artigo -->
      <article>
        <h2>Article heading</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam
          lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam
          viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent
          et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt
          congue enim, ut porta lorem lacinia consectetur.
        </p>

        <h3>Subsection</h3>

        <p>
          Donec ut librero sed accu vehicula ultricies a non tortor. Lorem ipsum
          dolor sit amet, consectetur adipisicing elit. Aenean ut gravida lorem.
          Ut turpis felis, pulvinar a semper sed, adipiscing id dolor.
        </p>

        <p>
          Pelientesque auctor nisi id magna consequat sagittis. Curabitur
          dapibus, enim sit amet elit pharetra tincidunt feugiat nist imperdiet.
          Ut convallis libero in urna ultrices accumsan. Donec sed odio eros.
        </p>

        <h3>Another subsection</h3>

        <p>
          Donec viverra mi quis quam pulvinar at malesuada arcu rhoncus. Cum
          soclis natoque penatibus et manis dis parturient montes, nascetur
          ridiculus mus. In rutrum accumsan ultricies. Mauris vitae nisi at sem
          facilisis semper ac in est.
        </p>

        <p>
          Vivamus fermentum semper porta. Nunc diam velit, adipscing ut
          tristique vitae sagittis vel odio. Maecenas convallis ullamcorper
          ultricied. Curabitur ornare, ligula semper consectetur sagittis, nisi
          diam iaculis velit, is fringille sem nunc vet mi.
        </p>
      </article>

      <!-- O contéudo do elemento aside pode ser aninhado dentro do conteúdo do elemento main -->
      <aside>
        <h2>Related</h2>

        <ul>
          <li><a href="#">Oh I do like to be beside the seaside</a></li>
          <li><a href="#">Oh I do like to be beside the sea</a></li>
          <li><a href="#">Although in the North of England</a></li>
          <li><a href="#">It never stops raining</a></li>
          <li><a href="#">Oh well...</a></li>
        </ul>
      </aside>
    </main>

    <!-- Esse é o rodapé principal que vai ser usado em todas as páginas do nosso website -->

    <footer>
      <p>©Copyright 2050 by nobody. All rights reversed.</p>
    </footer>
  </body>
</html>
```

Reserve um tempo para examinar o código e entendê-lo - os comentários dentro do código também devem ajudá-lo a entendê-lo. Não estamos pedindo que você faça muito mais neste artigo, porque a chave para entender o layout do documento é escrever uma estrutura HTML sólida e, em seguida, defini-la com CSS. Nós vamos aguardar isso até que você comece a estudar o CSS layout como parte do tópico do estudo de CSS.

## Elementos de layout do HTML em mais detalhes

É bom entender o significado geral de todos os elementos de seção do HTML em detalhes - isso é algo em que você trabalhará gradualmente ao começar a obter mais experiência com o desenvolvimento web. Você pode encontrar muitos detalhes lendo o nosso [Elementos HTML](/pt-BR/docs/Web/HTML/Element). Para agora, estes são as principais definições que você deve tentar entender:

- {{HTMLElement('main')}} é para o conteúdo único dessa página.Use \<main> apenas uma vez por página, e o coloca diretamente dentro do {{HTMLElement('body')}}. Não é ideal aninhar ele dentro de qualquer outro elemento senão o elemento \<body>.
- {{HTMLElement('article')}} inclui um bloco de conteúdo relacionado o qual faz sentido por si só, sem o restante da página (por exemplo, uma postagem singular dum blog).
- {{HTMLElement('section')}} é similar com \<article>, mas ele é mais para agrupar uma única parte de página que constitui em um único pedaço de funcionalidade (por exemplo, um minimapa, ou um conjunto de manchetes e resumo). É considerado boa prática começar cada seção com um [título](/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Fundamentos_textuais_HTML); observe também que você pode dividir um \<article>s em diferentes \<section>s, ou \<section>s em diferentes \<article>s, dependendo do contexto.
- {{HTMLElement('aside')}} é para conteúdo que não está relacionados diretamente com os conteúdos principais, mas que podem providenciar informações complementares a esses (entradas de glossários, biografia do autor, links relacionados, etc.).
- {{HTMLElement('header')}} representa um grupo de conteúdo introdutório. Se ele for um elemento filho do {{HTMLElement('body')}}, Ele é um header global da página do site, mas se for um elemento filho de um {{HTMLElement('article')}} ou {{HTMLElement('section')}}, é definido como um header específico para essa seção ( tenta não confundir isso com [títulos e cabeçalhos](/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/The_head_metadata_in_HTML#Adicionando_um_título)).
- {{HTMLElement('nav')}} contém a funcionalidade principal de navegação da página. Links secundários, etc., não iria na navegação
- {{HTMLElement('footer')}} representa um grupo de conteúdo final da página.

### Elementos de layout não-semânticos

Às vezes, você se depara numa situação em que não consegue encontrar um elemento semântico ideal para agrupar alguns itens ou agrupar algum conteúdo. Nesses momentos, convém agrupar um conjunto de elementos para afetá-los todos como uma única entidade com alguns {{glossary("CSS")}} ou {{glossary("JavaScript")}}. Para casos como esses, HTML oferece os elementos {{HTMLElement("div")}} e {{HTMLElement("span")}}. Você deve usá-los preferencialmente com um atributo [`class`](/pt-BR/docs/Web/HTML/Global_attributes#class) adequado, para fornecer a eles algum tipo de rótulo para que possam ser facilmente referenciados.

{{HTMLElement("span")}} é um elemento não-semântico embutido, que você deve usar apenas se não conseguir pensar em um elemento de texto semântico melhor para agrupar seu conteúdo ou se não quiser adicionar um significado específico. Por exemplo:

```html
<p>
  O rei voltou bêbado para o quarto às 01:00, a cerveja não fez nada para
  ajudá-lo enquanto ele cambaleando pela porta
  <span class="editor-note"
    >[Nota do editor: Neste ponto da peça, as luzes devem estar baixas]</span
  >.
</p>
```

Nesse caso, a nota do editor deve meramente fornecer orientação extra para o diretor da peça; não é suposto ter um significado semântico extra. Para usuários observador, talvez o CSS fosse usado para distanciar a nota um pouco do texto principal.

{{HTMLElement("div")}} é um elemento não semântico no nível de bloco, que você deve usar apenas se não conseguir pensar em um elemento de bloco semântico melhor para usar ou se não quiser adicionar um significado específico. Por exemplo, imagine um widget de carrinho de compras que você poderia escolher a qualquer momento durante o seu tempo em um site de comércio eletrônico:

```html
<div class="carrinho-de-compras">
  <h2>Carrinho de compras</h2>
  <ul>
    <li>
      <p>
        <a href=""><strong>Brincos de prata</strong></a
        >: $99.95.
      </p>
      <img src="../products/3333-0985/thumb.png" alt="Brincos de prata" />
    </li>
    <li>...</li>
  </ul>
  <p>Preço total: $237.89</p>
</div>
```

Este não é realmente um `<aside>`, pois não está necessariamente relacionado ao conteúdo principal da página (você deseja visualizá-lo de qualquer lugar). Nem sequer garante particularmente o uso de uma `<section>`, pois não faz parte do conteúdo principal da página. Portanto, um \<div> é bom neste caso. Incluímos um cabeçalho como orientação para ajudar os usuários de leitores de tela a encontrá-lo.

> **Aviso:** Divs são tão convenientes de usar que é fácil usá-los demais. Como eles não carregam valor semântico, eles apenas confundem seu código HTML. Tome cuidado para usá-los somente quando não houver uma solução semântica melhor e tente reduzir ao mínimo o uso deles, caso contrário, será difícil atualizar e manter seus documentos.

### Quebras de linha e regras horizontais

Dois elementos que você ocasionalmente vai usar e desejerá conhecer são {{htmlelement("br")}} e {{htmlelement("hr")}}:

`<br>` cria uma quebra de linha em um parágrafo; é a única maneira de forçar uma estrutura rígida em uma situação em que você deseja uma série de linhas curtas fixas, como em um endereço postal ou um poema. Por exemplo:

```html
<p>
  Era uma vez um homem chamado O'Dell<br />
  Que adorava escrever HTML<br />
  Mas sua estrutura era ruim, sua semântica era triste<br />
  e sua marcação não leu muito bem.
</p>
```

Sem os elementos `<br>`, o parágrafo seria apenas renderizado em uma longa linha (como dissemos anteriormente no curso, o HTML ignora a maioria dos espaços em branco); com elementos `<br>` no código, a marcação é renderizada assim

Era uma vez um homem chamado O'Dell
Que adorava escrever HTML
Mas sua estrutura era ruim, sua semântica era triste
e sua marcação não leu muito bem.

Elementos `<hr>` criam uma regra horizontal no documento que indica uma alteração temática no texto (como uma alteração no tópico ou na cena). Visualmente, apenas se parece com uma linha horizontal. Como um exemplo:

```
<p>Ron foi apoiado em um canto pelas feras inferiores saqueadores. Assustado, mas determinado a proteger seus amigos, ele levantou a varinha e se preparou para a batalha, esperando que seu pedido de socorro tivesse passado.</p>
<hr>
<p>Enquanto isso, Harry estava sentado em casa, olhando para sua declaração de realeza e ponderando quando a próxima série sairia, quando uma carta de socorro encantada voou pela janela e aterrissou em seu colo. Ele leu-o nebuloso e suspirou; "é melhor voltar ao trabalho então", ele pensou.</p>
```

Seria renderizado assim:

Ron foi apoiado em um canto pelas feras inferiores saqueadores. Assustado, mas determinado a proteger seus amigos, ele levantou a varinha e se preparou para a batalha, esperando que seu pedido de socorro tivesse passado.

---

Enquanto isso, Harry estava sentado em casa, olhando para sua declaração de realeza e ponderando quando a próxima série sairia, quando uma carta de socorro encantada voou pela janela e aterrissou em seu colo. Ele leu-o nebuloso e suspirou; "é melhor voltar ao trabalho então", ele pensou.

## Planejando um simples website

Depois de planejar o conteúdo de uma página da Web simples, o próximo passo lógico é tentar descobrir qual conteúdo você deseja colocar em um site inteiro, quais páginas você precisa e como elas devem ser organizadas e vinculadas umas às outras. para a melhor experiência de usuário possível. Isso é chamado {{glossary("Information architecture")}}. Em um site grande e complexo, é possível planejar muito esse processo, mas para um site simples de poucas páginas, isso pode ser bastante simples e divertido!

1. Lembre-se de que você terá alguns elementos comuns à maioria das páginas (se não todas), como o menu de navegação e o conteúdo do rodapé. Se seu site é para uma empresa, por exemplo, é uma boa ideia ter suas informações de contato disponíveis no rodapé de cada página. Anote o que você deseja que seja comum a todas as páginas.![the common features of the travel site to go on every page: title and logo, contact, copyright, terms and conditions, language chooser, accessibility policy](common-features.png)
2. Em seguida, desenhe um esboço de como a estrutura de cada página deve parecer (pode parecer com nosso site simples acima). Observe o que cada bloco será.![A simple diagram of a sample site structure, with a header, main content area, two optional sidebars, and footer](site-structure.png)
3. Agora, faça um brainstorm de todos os outros conteúdos (comuns a todas as páginas) que você deseja ter no seu site - escreva uma grande lista.![A long list of all the features that we could put on our travel site, from searching, to special offers and country-specific info](feature-list.png)
4. Em seguida, tente classificar todos esses itens de conteúdo em grupos, para ter uma idéia de quais partes podem viver juntas em páginas diferentes. Isso é muito semelhante a uma técnica chamada {{glossary("Card sorting")}}.![The items that should appear on a holiday site sorted into 5 categories: Search, Specials, Country-specific info, Search results, and Buy things](card-sorting.png)
5. Agora, tente esboçar um mapa do site aproximado - faça um balão para cada página do seu site e desenhe linhas para mostrar o fluxo de trabalho típico entre as páginas. A página inicial provavelmente estará no centro e terá um link para a maioria, senão todas as outras; a maioria das páginas em um site pequeno deve estar disponível na navegação principal, embora haja exceções. Você também pode incluir notas sobre como as coisas podem ser apresentadas.![A map of the site showing the homepage, country page, search results, specials page, checkout, and buy page](site-map.png)

### Aprendizado ativo: crie seu próprio mapa do site

Tente realizar o exercício acima para um site de sua própria criação. Sobre o que você gostaria de criar um site?

> **Nota:** Salve seu trabalho em algum lugar; você pode precisar mais tarde.

## Resumo

Nesse ponto, você deve ter uma idéia melhor sobre como estruturar uma página / site. No último artigo deste módulo, estudaremos como depurar HTML.

## Ver também

- [Seções e estruturas de um documento HTML5](/pt-BR/docs/Sections_and_Outlines_of_an_HTML5_document): Guia avançado para elementos semânticos do HTML5 e o algoritmo de estrutura de tópicos do HTML5.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Advanced_text_formatting", "Learn/HTML/Introduction_to_HTML/Debugging_HTML", "Learn/HTML/Introduction_to_HTML")}}
