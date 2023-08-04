---
title: APIs web do lado cliente
slug: Learn/JavaScript/Client-side_web_APIs
---

{{LearnSidebar}}

Se você decidir usar JavaScript no lado do cliente para sites ou aplicativos, você rapidamente vai se deparar com as **APIs** - interfaces para manipular diferentes aspectos do navegador e do sistema operacional em que o site está sendo executado, ou mesmo dados de outros sites ou serviços. Neste módulo, descobriremos o que são APIs, e como usar algumas das APIs mais comuns, que serão úteis no seu trabalho de desenvolvimento.

## Pré-requisitos

Para tirar o máximo proveito deste módulo, é recomendável a leitura dos módulos anteriores de JavaScript da série ([Primeiros passos](/pt-BR/docs/Learn/JavaScript/First_steps), [Construindo blocos](/pt-BR/docs/Learn/JavaScript/Building_blocks), e [Objetos javaScript](/pt-BR/docs/Learn/JavaScript/Objects)). Esses módulos envolvem bastante uso de API simples, e não é facil escrever exemplos Javascript do lado do cliente sem eles. Aqui, subimos um nível, assumindo o conhecimento da linguagem core JavaScript e explorando as APIs comuns da Web com um pouco mais de detalhes.

Conhecimento básico de [HTML](/pt-BR/docs/Learn/HTML) e [CSS](/pt-BR/docs/Learn/CSS) serão utéis.

> **Nota:** **Notes** Se você estiver trabalhando de um dispositivo que não permita a criação de arquivos. Você pode tentar editar os arquivos em um editor online como [JSBin](http://jsbin.com/) ou [Thimble](https://thimble.mozilla.org/).

## Guias

- [Introdução a APIs para a web](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Introduction)
  - : Primeiro, vamos começar com apis de alto nível — o que elas são, como elas funcionam, quando usar no seu código, como elas são estruturadas? Nós veremos diferentes tipos de classses principais e o que elas são, e quais são as possibilidades de uso.
- [Manipulando documentos](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Manipulating_documents)
  - : Quando estiver codificando páginas da web ou aplicações, uma das coisas mais comuns que você irá fazer será manipular documentos da web de alguma forma. Normalmente isso é feito usando o Document Object Model (DOM), um conjunto de APIs para controlar o HTML e a informação sobre os estilos que usa fortemente o objeto {{domxref("Document")}}. Neste artigo vamos ver como usar o DOM em detalhes, juntamente com outras APIs interessantes que podem alterar seu ambiente de desenvolvimento de modos interessantes.
- [Buscando dados do servidor](/pt-BR/docs/)
  - : Outra tarefa muito comum em websites modernos e aplicações é recuperar dados individuais de um servidor para atualizar partes de uma página sem ter que recarregar uma página inteira novamente. Este aparentemente pequeno detalhe tem tido um impacto enorme sobre o desempenho e comportamento de websites, desse modo neste artigo, vamos explicar esse conceito, e observar as tecnologias que tornam isso possível, tais como {{domxref("XMLHttpRequest")}} e o [Fetch API](/pt-BR/docs/Web/API/Fetch_API).
- [Third party APIs](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Third_party_APIs)
  - : The APIs we've covered so far are built into the browser, but not all APIs are. Many large websites and services such as Google Maps, Twitter, Facebook, PayPal, etc. provide APIs allowing developers to make use of their data (e.g. displaying your twitter stream on your blog) or services (e.g. displaying custom Google Maps on your site, or using Facebook login to log in your users). This article looks at the difference between browser APIs and 3rd party APIs and shows some typical uses of the latter.
- [Drawing graphics](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
  - : The browser contains some very powerful graphics programming tools, from the Scalable Vector Graphics ([SVG](/pt-BR/docs/Web/SVG)) language, to APIs for drawing on HTML {{htmlelement("canvas")}} elements, (see [The Canvas API](/pt-BR/docs/Web/API/Canvas_API) and [WebGL](/pt-BR/docs/Web/API/WebGL_API)). Ths article provides an introduction to the Canvas API, and further resources to allow you to learn more.
- [Video and audio APIs](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Video_and_audio_APIs)
  - : HTML5 comes with elements for embedding rich media in documents — {{htmlelement("video")}} and {{htmlelement("audio")}} — which in turn come with their own APIs for controlling playback, seeking, etc. This article shows you how to do common tasks such as creating custom playback controls.
- [Client-side storage](/pt-BR/docs/Learn/JavaScript/Client-side_web_APIs/Client-side_storage)
  - : Modern web browsers feature a number of different technologies that allow you to store data related to web sites and retrieve it when necessary allowing you to persist data long term, save sites offline, and more. This article explains the very basics of how these work.
