---
title: Qual a diferença entre página web, site, servidor web e mecanismo de busca?
slug: Learn/Common_questions/Web_mechanics/Pages_sites_servers_and_search_engines
---

Neste artigo, iremos apresentar diversos conceitos relacionados à Web: páginas web, sites, servidores web e mecanismos de busca. Estes termos são confundidos frequentemente por iniciantes na web, ou são empregados de forma incorreta. Vamos aprender o que cada um significa!

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Você deverá conhecer
        <a
          href="https://developer.mozilla.org/pt-BR/docs/Learn/Common_questions/Como_a_internet_funciona"
          >como a Internet funciona</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Tornar o leitor apto a descrever as diferenças entre uma página web, um
        site, um servidor web e um mecanismo de busca.
      </td>
    </tr>
  </tbody>
</table>

## Sumário

Como qualquer outra área do conhecimento, a web possui um grande número de jargões. Não se preocupe, nós não iremos te sobrecarregar com todos eles (temos um [glossário](/pt-BR/docs/Glossario) se você estiver curioso). Todavia, existem alguns termos básicos que você precisa conhecer inicialmente, já que você sempre ouvirá estas expressões enquanto estiver lendo sobre o assunto. É muito fácil confundir tais termos ocasionalmente, uma vez que eles se referem a funcionalidades relacionadas porém diferentes. Na verdade, às vezes você verá esses termos mal utilizados nos noticiários e em outros lugares, portanto, misturá-los é compreensível.

Cobriremos esses termos e tecnologias com mais detalhes à medida que exploramos mais, mas essas definições rápidas serão um ótimos começo para você:

- página web
  - : Um documento que pode ser mostrado em um navegador web como Firefox, Google Chrome, Opera, Microsoft Internet Explorer ou Edge, ou Safari da Apple. Tais documentos também podem ser referenciados apenas por "páginas".
- site
  - : Um conjunto de páginas web agrupadas juntas e geralmente conectadas juntas de diversas formas. Também conhecido como "web site" ou simplesmente "site".
- servidor web
  - : Um computador que hospeda um site na Internet.
- mecanismo de busca
  - : Um serviço da web que te auxilia a encontrar outras páginas da web, como o Google, o Bing, o Yahoo ou o DuckDuckGo. Os motores de busca são normalmente acessados através de um navegador da web (por exemplo, você pode realizar pesquisas em mecanismos de busca diretamente na barra de endereços do Firefox, Chrome, etc.) ou através de uma página da web (por exemplo, [bing.com](https://www.bing.com/) ou [duckduckgo.com](https://duckduckgo.com/)).

Vamos ver uma analogia simples - uma biblioteca pública. Isto é o que você geralmente faria ao visitar uma biblioteca:

1. Procura no índice de buscas e verifica o título do livro que você deseja.
2. Anota o número de catálogo do livro desejado.
3. Se dirige à seção particular que contém o livro, encontra o número catalográfico correto, e então apanha o livro.

Comparemos a biblioteca com um servidor web:

- A biblioteca é como um servidor web. Ela possui muitas seções, tal qual um servidor hospedando múltiplos websites.
- As diferentes seções (Ciências, Matemática, História, etc.) na biblioteca são como os sites. Cada seção é como um único site (duas seções não conterão os mesmos livros).
- Os livros em cada seção correspondem às páginas web. Um website pode conter diversas páginas, por exemplo, na seção de Ciências (o site) terá livros sobre calor, som, termodinâmica, estática, etc. (as páginas web). As páginas da web podem ser encontradas em um local exclusivo (URL).
- O índice de buscas é como o mecanismo de busca. Cada livro possui sua própria localização exclusiva na biblioteca (dois livros não podem ser armazenados no mesmo local), o que é especificado pelo código catalográfico.

## Aprendizado ativo

_Ainda não há nenhum aprendizado ativo. [Por favor, considere fazer uma contribuição](/pt-BR/docs/MDN/Primeiros_Passos)._

## Imersão a Fundo

Bem, então vamos escavar um pouco mais a fundo sobre estes quatro termos, em como se inter-relacionam e por qual motivo são, ocasionalmente, confundidos entre si.

### Página web

Uma **página web** é simplesmente um documento que é renderizado ("mostrado") por um [navegador](/pt-BR/docs/Glossario/Navegador). Tais documentos são escritos com uso da linguagem {{Glossary("HTML")}} (a qual iremos ver em maiores detalhes em [outros artigos](/pt-BR/docs/Web/HTML)). Uma página web pode possuir uma variedade de diferentes tipos de recursos incorporados a ela, como:

- _informação de estilo_ — controlando como a página se apresenta e se comporta (_look-and-feel_)
- _scripts_ — os quais são responsáveis por adicionar interatividade à página
- _mídia_ — imagens, sons e vídeos.

> **Nota:**Navegadores também são capazes de renderizar outros documentos, como arquivos {{Glossary("PDF")}} ou imagens, porém o termo **página web** se refere especificamente a documentos HTML. Todavia, usaremos apenas o termo **documento**.

Todas as páginas web disponíveis na web são alcançáveis através de um único endereço. Para acessar uma página, basta digitar seu endereço na barra de endereços do seu navegador:

![Example of a web page address in the browser address bar](web-page.jpg)

### Site

Um _site_ é um conjunto de páginas web vinculadas (mais os recursos associados a elas) que compartilham um único nome de domínio. Cada página web de um dado website provê links explícitos - na maior parte do tempo na forma de texto clicável - que possibilitam a um usuário mover-se de uma página do website à outra.

Para acessar um website, digite o nome de domínio na barra de endereço do seu navegador, e então o navegador irá mostrar a página web principal daquele website, ou a _homepage_ (casualmente referenciada como "a _home_").

![Example of a web site domain name in the browser address bar](web-site.jpg)

Os conceitos de página web e de website são especialmente fáceis de se confundir quando um _website_ possui apenas uma _página web_. Websites com esta característica são ocasionalmente chamados de _websites de página única_ (_single-page website_).

### Servidor web

Um _servidor_ _web_ nada mais é que um computador hospedando um ou mais _websites_. "Hospedar" significa que todas as _páginas web_ e seus arquivos auxiliares estão disponíveis a partir daquele computador. O _servidor web_ enviará qualquer _página web_ a partir do _website_ que está hospedado nele para o navegador de qualquer usuário que o tenha requisitado (feito uma _requisição_).

Não confunda _websites_ e _servidores_. Por exemplo, caso você ouça alguém dizer: "Meu website não está respondendo", isto atualmente significa que o _servidor web_ não está respondendo, logo o _website_ encontra-se indisponível. Mais importante, uma vez que um único servidor web é capaz de hospedar múltiplos _websites_, o termo _servidor web_ nunca deve ser empregado para se referir a um website, uma vez que isso pode provocar uma grande confusão. Em nosso exemplo anterior, caso disséssemos: "Meu servidor web não está respondendo", significaria que todos os websites hospedados naquele servidor específico encontrariam-se indisponíveis.

### Mecanismos de Pesquisa

Mecanismos de pesquisa são uma fonte comum de confusão na web. Um mecanismo de pesquisa é um tipo especial de website que auxilia usuários a encontrar páginas web de _outros_ websites.

Há um número abundante destas ferramentas: [Google](https://www.google.com/), [Bing](https://www.bing.com/), [Yandex](https://www.yandex.com/), [DuckDuckGo](https://duckduckgo.com/) e diversos outros. Alguns são genéricos, outros especializam-se em tópicos específicos. Utilize qualquer um de sua preferência.

Muitos iniciantes na web confundem mecanismos de pesquisa e navegadores. Tornemos tudo mais claro: um **navegador** é uma aplicação de software que recupera e renderiza páginas web; um **mecanismo de pesquisa** é um website que ajuda pessoas a encontrarem páginas web de outros websites. A confusão ocorre porque, da primeira vez que alguém executa um navegador, este mostra uma página inicial de um mecanismo de pesquisa. Este comportamento faz sentido, pois, evidentemente, a primeira coisa que você deseja fazer com um navegador é encontrar uma página web para renderizar. Não confunda a infraestrutura (neste caso, o navegador) com o serviço (aqui representado pelo mecanismo de pesquisa). A distinção irá ajudá-lo muito, mas mesmo alguns profissionais tendem a falar de forma mais informal, portanto não se preocupe com isso.

Aqui há uma instância do Firefox mostrando uma caixa de pesquisa do Google como sua página inicial padrão:

![Example of Firefox nightly displaying a custom Google page as default](search-engine.jpg)

## Próximos passos

- Escavando a fundo: [O que é um servidor web](/pt-BR/docs/Learn/What_is_a_web_server)
- Veja como páginas web são vinculadas dentro de um website: [Entendendo links na web](/pt-BR/docs/Learn/Common_questions/What_are_hyperlinks)
