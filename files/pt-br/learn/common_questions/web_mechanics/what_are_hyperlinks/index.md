---
title: O que são hyperlinks?
slug: Learn/Common_questions/Web_mechanics/What_are_hyperlinks
---

Neste artigo, veremos o que são hiperlinks e por que eles são importantes.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré requisitos:</th>
      <td>
        Você deve saber
        <a href="/en-US/Learn/How_the_Internet_works"
          >como a Internet funciona </a
        >e estar familiarizado com<a
          href="/pt-BR/docs/Learn/page_vs_site_vs_server_vs_search_engine"
        >
          a diferença entre uma página da web, um site, um servidor da web e um
          mecanismo de pesquisa</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Aprenda sobre links na Web e por que eles são importantes.</td>
    </tr>
  </tbody>
</table>

## Sumário

Hyperlinks, geralmente chamados de links, são um conceito fundamental da Web. Para explicar o que são links, precisamos voltar ao básico da arquitetura da Web.

Em 1989, Tim Berners-Lee, o inventor da Web, falou sobre os três pilares sobre os quais a Web se sustenta:

1. "URL", um sistema de endereços que mantém o controle de documentos da Web;
2. "HTTP", um protocolo de transferência para encontrar documentos ao receber seus URLs;
3. "HTML", um formato de documento que permite incorporar _hyperlinks;_

Como você pode ver nos três pilares, tudo na Web gira em torno de documentos e como acessá-los. O propósito original da Web era fornecer uma maneira fácil de acessar, ler e navegar por documentos de texto. Desde então, a Web evoluiu para fornecer acesso a imagens, vídeos e dados binários, mas essas melhorias dificilmente mudaram os três pilares.

Antes da Web, era muito difícil acessar documentos e passar de um para outro. Por serem legíveis por humanos, os URLs já tornaram as coisas mais fáceis, mas é difícil digitar um URL longo sempre que você deseja acessar um documento. Foi aqui que os hiperlinks revolucionaram tudo. Os links podem correlacionar qualquer string de texto com um URL, de forma que o usuário possa acessar instantaneamente o documento de destino ativando o link.

Os links se destacam do texto ao redor por serem sublinhados e em azul. Toque ou clique em um link para ativá-lo ou, se usar um teclado, pressione Tab até que o link esteja em foco e pressione Enter ou a barra de espaço.

![Example of a basic display and effect of a link in a web page](link-1.png)

Os links são o avanço que tornou a Web tão útil e bem-sucedida. No restante deste artigo, discutiremos os vários tipos de links e sua importância para o design moderno da Web.

## Mergulho Profundo

Como dissemos, um link é uma string de texto ligada a uma URL e usamos links para permitir um salto fácil de um documento para outro. Dito isso, existem algumas nuances que vale a pena considerar:

### Tipos de links

- Link interno
  - : Um link entre duas páginas da web, em que ambas as páginas pertencem ao mesmo site, é chamado de link interno. Sem links internos, não existe site (a menos, é claro, que seja um site de uma página).
- Link externo
  - : Um link de sua página da web para a página de outra pessoa. Sem links externos, não há Web, pois a Web é uma rede de páginas da web. Use links externos para fornecer informações além do conteúdo disponível em sua página da web.
- Links de entrada
  - : Um link da página de outra pessoa para o seu site. É o oposto de um link externo. Observe que você não precisa vincular de volta quando alguém se vincula ao seu site.

Ao construir um site, concentre-se nos links internos, pois eles tornam seu site utilizável. Encontre um bom equilíbrio entre ter muitos links e poucos. Falaremos sobre como projetar a navegação do site em outro artigo, mas como regra, sempre que você adicionar uma nova página da web, certifique-se de que pelo menos uma das outras páginas tenha um link para essa nova página. Por outro lado, se seu site tiver mais de dez páginas, é contraproducente vincular a todas as páginas a partir de todas as outras.

Quando você está começando, não precisa se preocupar tanto com links externos e recebidos, mas eles são muito importantes se você deseja que os mecanismos de pesquisa encontrem seu site (veja abaixo para mais detalhes).

### Âncoras

Muitos links unem duas páginas da web. **Âncoras** amarrar duas seções de um documento. Quando você segue um link que aponta para uma âncora, seu navegador salta para outra parte do documento atual em vez de carregar um novo documento. No entanto, você cria e usa âncoras da mesma forma que outros links.

![Example of a basic display and effect of an anchor in a web page](link-2.png)

### Links e Mecanismos de pesquisa

Os links são importantes tanto para os usuários quanto para os mecanismos de pesquisa. Sempre que os mecanismos de pesquisa rastreiam uma página da web, eles indexam o site seguindo os links disponíveis na página. Os mecanismos de pesquisa não apenas seguem os links para descobrir as várias páginas do site, mas também usam o texto visível do link para determinar quais consultas de pesquisa são apropriadas para chegar à página da web de destino.

Os links influenciam a rapidez com que um mecanismo de pesquisa se vincula ao seu site. O problema é que é difícil medir as atividades dos mecanismos de pesquisa. As empresas desejam naturalmente que seus sites tenham uma classificação elevada nos resultados de pesquisa. Sabemos o seguinte sobre como os mecanismos de pesquisa determinam a classificação de um site:

- O _texto visível_ de um link influencia quais consultas de pesquisa encontrarão um determinado URL.
- Quanto mais _links de entrada_ uma página da web pode mostrar, melhor ela se classifica nos resultados de pesquisa.
- _Links externos_ influenciam a classificação de pesquisa das páginas da web de origem e de destino, mas não está claro quanto.

[SEO](http://en.wikipedia.org/wiki/Search_engine_optimization) (search engine optimization) é o estudo de como fazer com que os sites tenham uma classificação elevada nos resultados de pesquisa. Melhorar o uso de links em um site é uma técnica de SEO útil.

## Próximos Passos

Agora você vai querer configurar algumas páginas da web com links.

- Para obter mais informações teóricas, aprenda sobre [URLs e sua estrutura](/pt-BR/docs/Learn/Common_questions/What_is_a_URL), já que cada link aponta para um URL.
- Quer algo um pouco mais prático? O [Criando hyperlinks](/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks) _(em inglês)_, artigo da nossa [Introdução ao HTML](/pt-BR/docs/Learn/HTML/Introduction_to_HTML) _(em inglês)_, explica como implementar links em detalhes.
