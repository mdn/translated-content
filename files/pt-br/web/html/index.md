---
title: "HTML: Linguagem de Marcação de Hipertexto"
slug: Web/HTML
---

{{HTMLSidebar}}

**HTML** (Linguagem de Marcação de HiperTexto) é o bloco de construção mais básico da web. Define o significado e a estrutura do conteúdo da web. Outras tecnologias além do HTML geralmente são usadas para descrever a aparência/apresentação ([CSS](/pt-BR/docs/Web/CSS)) ou a funcionalidade/comportamento ([JavaScript](/pt-BR/docs/Web/JavaScript)) de uma página da web.

"Hipertexto" refere-se aos _links_ que conectam páginas da Web entre si, seja dentro de um único site ou entre sites. Links são um aspecto fundamental da web. Ao carregar conteúdo na Internet e vinculá-lo a páginas criadas por outras pessoas, você se torna um participante ativo na world wide web.

O HTML usa "Marcação" para anotar texto, imagem e outros conteúdos para exibição em um navegador da Web. A marcação HTML inclui "elementos" especiais, como {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} e muitos outros.

Um elemento HTML é separado de outro texto em um documento por "tags", que consistem no nome do elemento entre "`<`" e "`>`". O nome de um elemento dentro de uma tag é insensível a maiúsculas e minúsculas. Isto é, pode ser escrito em maiúsculas, minúsculas ou um mistura. Por exemplo, a tag `<title>` pode ser escrita como `<Title>`, `<TITLE>` ou de qualquer outra forma.

Os artigos abaixo podem ajudá-lo a aprender mais sobre HTML.

- Introdução ao HTML

  Se você é novo no desenvolvimento web, não deixe de ler nosso artigo [O Básico do HTML](/pt-BR/docs/Aprender/Getting_started_with_the_web/HTML_basico) para aprender o que é HTML e como usá-lo.

- Tutoriais HTML

  Para artigos sobre como usar o HTML, assim como tutoriais e exemplos completos, confira nossa [Área de Aprendizado de HTML](/pt-BR/docs/Aprender/HTML).

- Referência do HTML

  Em nossa extensa seção de [Referência do HTML](/pt-BR/docs/Web/HTML/ReferenciaHTML), você encontrará os detalhes sobre cada elemento e atributo do HTML.

## Tutoriais para iniciantes

Nossa [Área de Aprendizado de HTML](/pt-BR/docs/Aprender/HTML) apresenta vários módulos que ensinam HTML desde o início — sem necessidade de conhecimento prévio.

- [Introdução ao HTML](/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML)
  - : Este módulo fornece uma base de conhecimento, permitindo que você acostume-se com os conceitos e sintaxes importantes, tais como aplicar HTML para texto, como criar _hyperlinks_ e como usar HTML para estruturar uma página web.
- [Multimídia e como incorporá-la](/pt-BR/docs/Learn/HTML/Multimedia_and_embedding)
  - : Este módulo explora como usar HTML para incluir multimídia em sua página web, incluindo as diferentes maneiras para incluir imagens, e como incorporar vídeos, áudios e até como colocar uma página inteira em outras páginas web.
- [Tabelas HTML](/pt-BR/docs/Learn/HTML/Tables)
  - : Representar dados tabulares em uma página web de maneira entendível e acessível pode ser um desafio. Este módulo cobre marcação tabular básica, junto com outras funcionalidades mais complexas como legendas e sumários.
- [Formulários HTML](/pt-BR/docs/Learn/HTML/Forms)
  - : Formulários são partes muito importantes na Web — proporcionam muitas das funcionalidades que você precisa para interagir em páginas web. Exemplos disso são registrar-se e conectar-se, enviar comentários, comprar produtos e muito mais. Este módulo lhe permite começar a criar as partes visíveis dos formulários, ou seja, as partes que os usuários interagem.
- [Usando HTML para resolver problemas comuns](/pt-BR/docs/Learn/HTML/Howto)
  - : Apresenta links para seções com conteúdo explicando como usar HTML para resolver problemas muito comuns, quando se cria uma página web: como trabalhar com títulos, agregar imagens ou vídeos, colocar ênfase em conteúdo, criar um formulário básico, etc.

## Tópicos avançados

- [Habilitando Imagem CORS](/pt-BR/docs/Web/HTML/CORS_enabled_image)
  - : O atributo [`crossorigin`](/pt-BR/docs/Web/HTML/Element/img#attr-crossorigin), em combinação com um cabeçalho [CORS](/pt-BR/docs/Glossary/CORS) adequado, permite definir imagens pelo elemento {{HTMLElement("img")}} para ser carregado de outras fontes em um elemento {{HTMLElement("canvas")}} como se estivessem sendo carregados da fonte atual.
- [Configuração de atributos CORS](/pt-BR/docs/Web/HTML/CORS_settings_attributes)
  - : Alguns elementos em HTML que suportam [CORS](/pt-BR/docs/HTTP/Access_control_CORS), como por exemplo o {{HTMLElement("img")}} ou {{HTMLElement("video")}}, têm o atributo `crossorigin` (a propriedade `crossOrigin`), que permite configurar as requisições CORS para os dados recebidos pelo elemento.
- [Gerenciamento de foco em HTML](/pt-BR/docs/Web/HTML/Focus_management_in_HTML)
  - : O atributo DOM [`activeElement`](/pt-BR/docs/Web/API/Document/activeElement) e o método DOM [`hasFocus()`](/pt-BR/docs/Web/API/Document/hasFocus) lhe ajudam a melhorar a interação entre o usuário e os elementos da página.
- [Tipos de conexões](/pt-BR/docs/Web/HTML/Link_types)
  - : Em HTML, vários tipos de links podem ser utilizados para realizar conexões entre documentos, como por exemplo [`<a>`](/pt-BR/docs/Web/HTML/Element/a), [`<area>`](/pt-BR/docs/Web/HTML/Element/area) e [`<link>`](/pt-BR/docs/Web/HTML/Element/link).
- [Formatos de arquivos suportados pelos elementos de áudio e vídeo em HTML](/pt-BR/docs/Web/HTML/Supported_media_formats)
  - : Os elementos [`<audio>`](/pt-BR/docs/Web/HTML/Element/audio) e [`<video>`](/pt-BR/docs/Web/HTML/Element/video) permitem que você reproduza áudios e vídeos no seu HTML. Estes elementos fornecem uma alternativa nativa de recursos do navegador, parecidos com a do Adobe Flash Player e outros plug-ins.
- [Usando o cachê de aplicação](/pt-BR/docs/Web/HTML/Using_the_application_cache)
  - : O cachê de aplicação tem como o objetivo executar a aplicação offline. Você pode usar a interface **Application Cache** (_AppCache_) para escolher elementos que o browser possa guardar, deixando-os disponíveis para usuários desconectados. As aplicações que forem armazenadas em cache podem ser utilizadas sem nenhum problema, mesmo que o usuário clique no botão de atualizar a página enquanto estiver offline.
- [Pré-carregando conteúdo com rel="preload"](/pt-BR/docs/Web/HTML/Preloading_content)
  - : O valor `preload` do atributo [`rel`](/pt-BR/docs/Web/HTML/Element/link#rel) do elemento {{htmlelement("link")}} permite que você escreva solicitações de busca declarativas em seu elemento {{htmlelement("head")}} do HTML, especificando recursos que suas páginas vão utilizar logo após o carregamento. Você também pode necessitar que estes recursos sejam pré-carregados ao início do ciclo de execução da página e depois que o mecanismo de renderização do navegador comece a agir. Isso garante que estarão disponíveis mais cedo e que seja menos provável que sua página seja bloqueada do processo de renderizar. Isso aumenta a performance da página. Este artigo oferece um guia básico de como `preload` funciona.

## Referências

- [Referência do HTML](/pt-BR/docs/Web/HTML/Reference)
  - : HTML é formado de **elementos**, onde cada um deles pode ser modificado por alguns **atributos**. Documentos HTML são interconectados através de [links](/pt-BR/docs/Web/HTML/Link_types).
- [Referência dos Elementos HTML](/pt-BR/docs/Web/HTML/Element)
  - : Navegue em uma lista com todos os elementos [HTML](/pt-BR/docs/Glossary/HTML).
- [Referência de atributos em HTML](/pt-BR/docs/Web/HTML/Attributes)
  - : Elementos em HTML possuem atributos. Estes configuram ou ajustam o funcionamento e o comportamento dos seus elementos de muitas maneiras.
- [Atributos Globais](/pt-BR/docs/Web/HTML/Global_attributes)
  - : Os atributos globais podem ser utilizados em todos os [elementos HTML](/pt-BR/docs/Web/HTML/Element), _mesmo aqueles que não são especificados como padrão_. Isso significa que qualquer elemento não padrão vai permitir estes atributos, mesmo que este retorne um documento HTML5 incompatível.
- [Elementos em linha](/pt-BR/docs/Web/HTML/Inline_elements) e [Elementos em nível de bloco](/pt-BR/docs/Web/HTML/Block-level_elements)
  - : Elementos HTML são normalmente elementos _inline_ (em linha) ou _block-level_ (em nível de bloco). Um elemento em linha ocupa somente o espaço limitado pelas tags que o definem. Um elemento em nível de bloco ocupa o espaço inteiro do elemento pai (container), portanto criando um bloco.
- [Tipos de Links](/pt-BR/docs/Web/HTML/Link_types)
  - : No HTML, vários tipos de links podem ser utilizados para estabelecer e definir o relacionamento entre dois documentos. Os tipos de elementos de link que podem ser incluídos são [`<a>`](/pt-BR/docs/Web/HTML/Element/a), [`<area>`](/pt-BR/docs/Web/HTML/Element/area) e [`<link>`](/pt-BR/docs/Web/HTML/Element/link).
- [Formatos de mídia suportados pelos elementos vídeo e áudio do HTML](/pt-BR/docs/Web/HTML/Supported_media_formats)
  - : Os elementos [`<audio>`](/pt-BR/docs/Web/HTML/Element/audio) e [`<video>`](/pt-BR/docs/Web/HTML/Element/video) permitem que você reproduza mídias de áudio e vídeo. Estes elementos fornecem uma alternativa nativa para o navegador reproduzir recursos similares aos encontrados no Adobe Flash e outros plug-ins.
- [Tipos de conteúdo HTML](/pt-BR/docs/Web/HTML/Kinds_of_HTML_content)
  - : O HTML é composto de uma grande diversidade de conteúdos, e cada um pode ser usado em certos contextos e não ser permitido em outros. Da mesma forma, cada um tem um conjunto de outras categorias de conteúdos que podem ou não serem usadas dentro deles. Este é um guia destas categorias.
- [Os Modos Quirks e o Modo Padrão](/pt-BR/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
  - : Informações sobre a história dos Modos _Quirks_ e o Modo padrão.

## Tópicos relacionados

- [Aplicando cores em elementos HTML usando CSS](/pt-BR/docs/Web/HTML/Applying_color)
  - : Este artigo mostra as principais formas de se usar CSS para adicionar cores ao seu conteúdo HTML, mostrando que partes dos documentos HTML podem ser coloridas e quais propriedades utilizar. Inclui exemplos e links para ferramentas de _palette-building_, entre outros.
