---
title: Multimídia e Incorporação
slug: Learn/HTML/Multimedia_and_embedding
---

{{LearnSidebar}}

Nós vimos muito sobre texto até aqui nesse curso, mas a internet seria muito chata se usassemos apenas texto. Vamos começar a ver como fazer a internet criar vida, com conteúdo mais interessante! Esse módulo explora como usar HTML para incluir multimídia em sua pagina web,usando as diferentes formas de inclusão de imagens , e como adicionar video, audio, e até paginas da web inteiras.

## Pré-requisitos

Antes de iniciar esse módulo, você deve ter um conhecimento razoável de HTML, como previamente abrangido em [introdução a HTML](/pt-BR/docs/Learn/HTML/Introduction_to_HTML). Se você não estudou esse módulo (ou algo similar), estude-o primeiro e depois retorne!

> **Nota:** Se você está trabalhando em um computador/tablet/outro dispositivo onde você não tem a habilidade de criar seus próprios arquivos, você pode testar (maior parte) dos exemplos de códigos em um programa online para codar tais como [JSBin](http://jsbin.com/) ou [Thimble](https://thimble.mozilla.org/).

## Guias

Esse módulo contém os seguintes artigos, que vão passar por todos os fundamentos para inserir multimídia em páginas da web.

- [Imagens em HTML](/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
  - : Existem outros tipos de multimídia para considerar, porém é lógico começar com o modesto elemento {{htmlelement("img")}} , usado para inserir uma simples imagem em uma página da web. Nesse artigo vamos aprender a usar esse elemento com mais profundidade, incluindo os básicos, anotando com legendas usando {{htmlelement("figure")}} e como se relaciona com imagens de fundo em CSS.
- [Conteúdo em áudio e video](/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
  - : Agora nós iremos aprender como usar os elementos HTML5 {{htmlelement("video")}} e {{htmlelement("audio")}} , para inserir video e audio em nossa página; incluindo o basico, fornecendo acesso a diferentes tipos de arquivo para navegadores diferentes, adicionando legenda , e como adicionar alternativas para navegadores mais antigos.
- [De \<object> para \<iframe> — outras tecnologias incorporadas](/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
  - : A essa altura, nós gostariamos de avançar alguns passos sobre um conjunto de elementos que permitem você incorporar uma ampla variedade de tipos de conteúdo na suas páginas web: os elementos {{htmlelement("iframe")}}, {{htmlelement("embed")}} e {{htmlelement("object")}}. `<iframe>`s servem para incorporar outras páginas web, enquanto as outras duas permitem você incorporar PDFs, SVG, e até mesmo Flash — uma tecnologia cada vez menos presente, mas que ainda é possível você encontrar de forma quase regular.
- [Adicionando gráficos vetoriais à Web](/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
  - : Gráficos vetoriais podem ser muito úteis em determinadas situações. Diferente dos formatos comuns, como PNG/JPG, eles não sofrem distorção/pixelização quando o zoom é ampliado — podendo continuar com a mesma qualidade quando alterado em escala. Esse artigo irá introduzir a você o que são os gráficos vetoriais e como incluir o formato {{glossary("SVG")}} nas páginas web.
- [Imagens responsivas](/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
  - : Com a atual variedade de tipos de dispositivos capazes de navegar na web - de celulares móveis à computadores pessoais - um conceito essencial para dominar o mundo web moderno é o design responsivo. Este se refere à criação de páginas web que podem automaticamente mudar seus atributos para se adaptar a diferentes resoluções e tamanhos de tela. Isso será explorado em mais detalhes em um módulo CSS posterior, mas, por enquanto, iremos verificar as ferramentas HTML disponíveis para criar imagens responsivas, incluindo o elemento {{htmlelement("picture")}}.

## Testes de Conhecimentos

Os testes de conhecimentos a seguir vão avaliar seu aprendizado nos assuntos abaixo:

- [Página Inicial do Mozilla](/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
  - : Neste teste nós vamos avaliar seus conhecimentos quanto a algumas técnicas discutidas nos artigos desse módulo, devendo você adicionar imagens e videos numa divertida página inicial sobre o Mozilla!

## Veja também

- [Adicionando um hitmap no topo de uma imagem](/pt-BR/docs/Learn/HTML/Howto/Add_a_hit_map_on_top_of_an_image)
  - : Image maps consiste em um mecanismo que torna diferentes partes de uma imagem em uma forma de acesso para outros lugares ou coisas (pense em um mapa mundi que apresenta informações sobre o país em que você clicou em cima). Essa técnica pode ser útil as vezes.
- [Web literacy basics 2](https://teach.mozilla.org/activities/web-lit-basics-two/)
  - : An excellent Mozilla foundation course that explores and tests some of the skills talked about in the _Multimedia and embedding_ module. Dive deeper into the basics of composing webpages, designing for accessibility, sharing resources, using online media, and working open.
