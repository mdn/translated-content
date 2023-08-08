---
title: Imagens no HTML
slug: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
---

{{LearnSidebar}}{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

No início a Web era somente texto, e era tedioso. Felizmente, não demorou muito para que a capacidade de incorporar imagens (e outros tipos de conteúdo mais interessantes) dentro das páginas da web fosse adicionada. Existem outros tipo de mídia para se considerar, mas é lógico começar com o humilde elemento {{htmlelement("img")}}, usado para inserir uma simples imagem em uma página web. Neste artigo, analisaremos como dominar seu uso, incluindo o básico, anotando-o com legendas usando o elemento {{htmlelement("figure")}}, e detalhando como ele se relaciona com imagens de fundo do CSS.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimento básico em informática,
        <a
          href="/pt-BR/docs/Aprender/Getting_started_with_the_web/instalando_programas_basicos"
          >Instalando os Programas Básicos</a
        >, conhecimento básico em
        <a
          href="/pt-BR/docs/Aprender/Getting_started_with_the_web/lidando_com_arquivos"
          >lidando com arquivos</a
        >, familiaridade com fundamentos do HTML (como abordado em
        <a href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Getting_started"
          >Iniciando com HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivos:</th>
      <td>
        Para aprender a incorporar imagens simples em HTML, anote-as com
        legendas e como as imagens HTML se relacionam às imagens de plano de
        fundo CSS.
      </td>
    </tr>
  </tbody>
</table>

## Como colocamos uma imagem numa página web?

Para colocar uma única imagem em uma página da web, usamos o elemento {{htmlelement("img")}}. Isso é um elemento vazio (quer dizer que não possui conteúdo de texto ou tag de fechamento) que requer no mínimo um atributo para ser útil — `src` (às vezes pronunciado como seu título completo, _source_). O atributo src contém um caminho apontando para a imagem que você deseja incorporar na página, que pode ser uma URL relativa ou absoluta, da mesma maneira que o valores de atributo `href` no elemento {{htmlelement("a")}}.

> **Nota:** Antes de continuar, você deveria ler [Um guia rápido sobre URLs e caminhos](/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks#A_quick_primer_on_URLs_and_paths) para refrescar sua memória sobre URL relativo e absoluto.

Por exemplo, se sua imagem for chamada `dinossauro.jpg`, e está no mesmo diretório de sua página HTML, você poderia inserir a imagem assim:

```html
<img src="dinossauro.jpg" />
```

Se a imagem estivesse em um subdiretório de `images`, que estivesse dentro do mesmo diretório da página HTML (que o Google recomenda para fins de indexição/{{glossary("SEO")}}), então você a incorporaria da seguinte maneira:

```html
<img src="images/dinossauro.jpg" />
```

E assim por diante.

> **Nota:** Os mecanismos de pesquisa também leem os nomes dos arquivos de imagem e os contam para o SEO. Portanto, dê à sua imagem um nome de arquivo descritivo; `dinosaur.jpg` é melhor que `img835.png`.

Você pode incorporar a imagem usando seu URL absoluto, por exemplo:

```html
<img src="https://www.example.com/images/dinosaur.jpg" />
```

Mas isso é inútil, pois apenas faz o navegador trabalhar mais, pesquisando o endereço IP do servidor DNS novamente, etc. Você quase sempre manterá as imagens do seu site no mesmo servidor que o HTML.

> **Aviso:** A maioria das imagens tem direitos autorais. Não exiba uma imagem em sua página da web, a menos que:
>
> 1\) você é o dono da imagem
> 2\) você recebeu permissão explícita e por escrito do proprietário da imagem, ou
> 3\) você tem ampla prova de que a imagem é, de fato, de domínio público.
>
> Violações de direitos autorais são ilegais e antiéticas. Além disso, **nunca** aponte seu atributo `src` para uma imagem hospedada no site de outra pessoa à qual você não tem permissão para vincular. Isso é chamado de "hotlinking". Mais uma vez, roubar a largura de banda de alguém é ilegal. Ele também torna a página mais lenta, deixando você sem controle sobre se a imagem é removida ou substituída por algo embaraçoso.

Nosso código acima nos daria o seguinte resultado:

![A basic image of a dinosaur, embedded in a browser, with Images in HTML written above it](basic-image.png)

> **Nota:** Elementos como {{htmlelement("img")}} e {{htmlelement("video")}} às vezes são chamados de elementos substituídos. Isso ocorre porque o conteúdo e o tamanho do elemento são definidos por um recurso externo (como uma imagem ou arquivo de vídeo), não pelo conteúdo do próprio elemento.

> **Nota:** Você pode encontrar o exemplo final desta seção [running on Github](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (Veja o [source code](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/images-in-html/index.html) também.)

### Texto alternativo

O próximo atributo que veremos é `alt`. Seu valor deve ser uma descrição textual da imagem, para uso em situações em que a imagem não pode ser vista/exibida ou leva muito tempo para renderizar devido a uma conexão lenta à Internet. Por exemplo, nosso código acima pode ser modificado da seguinte maneira:

```html
<img
  src="images/dinosaur.jpg"
  alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth" />
```

A maneira mais fácil de testar seu texto `alt` é digitar incorretamente seu nome de arquivo. Se, por exemplo, o nome da nossa imagem estivesse escrito `dinosooooor.jpg`, o navegador não exibiria a imagem, mas exibiria o texto alternativo:

![The Images in HTML title, but this time the dinosaur image is not displayed, and alt text is in its place.](alt-text.png)

Então, por que você veria ou precisaria de texto alternativo? Pode ser útil por vários motivos:

- O usuário é deficiente visual e usa um [leitor de tela](https://pt.wikipedia.org/wiki/Leitor_de_tela) para ler a web para eles. De fato, ter o texto alternativo disponível para descrever imagens é útil para a maioria dos usuários.
- Como descrito acima, você pode ter digitado o nome do arquivo ou caminho errado.
- O navegador não suporta o tipo de imagem. Algumas pessoas ainda usam navegadores somente de texto, como [Lynx](<https://pt.wikipedia.org/wiki/Lynx_(navegador_web)>), que alternativamente exibe o texto alternativo das imagens.
- Você pode fornecer texto para os mecanismos de pesquisa utilizarem. Por exemplo, os mecanismos de pesquisa podem corresponder o texto alternativo às consultas de pesquisa.
- Os usuários desativaram as imagens para reduzir o volume e as distrações de transferência de dados. Isso é especialmente comum em telefones celulares e em países onde a largura de banda é limitada e cara.

O que exatamente você deve escrever dentro do seu atributo `alt`? Depende do _por que_ a imagem está lá em primeiro lugar. Em outras palavras, o que você perde se sua imagem não aparecer:

- **Decoração.** Se a imagem é apenas decoração e não faz parte do conteúdo, adicione um espaço em branco `alt=""`. Por exemplo, um leitor de tela não perde tempo lendo conteúdo que não é essencial para o usuário. Imagens decorativas realmente não pertencem ao seu HTML. [CSS background images](#css_background_images) deve ser usado para inserir decoração, mas se for inevitável, `alt=""` é o melhor caminho a percorrer.
- **Conteúdo.** Se sua imagem fornecer informações significativas, forneça as mesmas informações em um _breve_ `alt` texto. Ou melhor ainda, no texto principal que todos podem ver. Não escreva redundante `alt` texto. O quão irritante seria para um usuário que enxerga se todos os parágrafos fossem escritos duas vezes no conteúdo principal? Se a imagem for descrita adequadamente pelo corpo do texto principal, você pode simplesmente usar `alt=""`.
- **Link.** Se você colocar uma imagem dentro das tags {{htmlelement("a")}}, para transformar uma imagem em um link, você ainda deve fornecer [links acessíveis](/pt-BR/docs/docs/Aprender/HTML/Introducao_ao_HTML/Criando_hyperlinks#Pr%C3%A1ticas_recomendadas). Nesses casos, você também pode escrevê-lo no mesmo elemento `<a>`, ou dentro do atributo `alt` da imagem. O que funcionar melhor no seu caso.
- **Texto.** Você não deve colocar seu texto em imagens. Se o cabeçalho principal precisar de uma sombra projetada, por exemplo, [use CSS](/pt-BR/docs/Web/CSS/text-shadow) para isso, em vez de colocar o texto em uma imagem. No entanto, se você _realmente não puder evitar fazer isso_, deve fornecer o texto dentro do atributo `alt`.

Essencialmente, a chave é oferecer uma experiência utilizável, mesmo quando as imagens não podem ser vistas. Isso garante que todos os usuários não estejam perdendo nenhum conteúdo. Tente desativar as imagens no seu navegador e veja como as coisas ficam. Você logo perceberá como o texto alternativo é útil se a imagem não puder ser vista.

> **Nota:** Para mais informações, consulte o nosso guia para [Textos alternativos](/pt-BR/docs/Learn/Accessibility/HTML#Alternativas_em_textos).

### Largura e altura

Você pode usar os atributos `width` e `height`, para especificar a largura e altura da sua imagem. Você pode encontrar a largura e a altura da sua imagem de várias maneiras. Por exemplo, no Mac, você pode usar <kbd>Cmd</kbd> + <kbd>I</kbd> para exibir as informações do arquivo de imagem. Voltando ao nosso exemplo, poderíamos fazer isso:

```html
<img
  src="images/dinosaur.jpg"
  alt="A cabeça e o tronco de um esqueleto de dinossauro;
          tem uma cabeça grande com dentes longos e afiados"
  width="400"
  height="341" />
```

Isso não resulta em muita diferença para a tela, em circunstâncias normais. Mas se a imagem não estiver sendo exibida, por exemplo, o usuário acabou de navegar para a página e a imagem ainda não foi carregada, você notará que o navegador está deixando um espaço para a imagem aparecer:

![The Images in HTML title, with dinosaur alt text, displayed inside a large box that results from width and height settings](alt-text-with-width-height.png)

É uma coisa boa a fazer, resultando no carregamento da página mais rápido e sem problemas.

No entanto, você não deve alterar o tamanho das suas imagens usando atributos HTML. Se você definir o tamanho da imagem muito grande, terá imagens granuladas, confusas ou muito pequenas e desperdiçando largura de banda ao fazer o download de uma imagem que não atenda às necessidades do usuário. A imagem também pode ficar distorcida, se você não mantiver a [proporção de tela](<Proporção de tela>). Você deve usar um editor de imagens para colocar sua imagem no tamanho correto antes de colocá-la em sua página da web.

> **Nota:** Se você precisar alterar o tamanho de uma imagem, use [CSS](/pt-BR/docs/Aprender/CSS) então.

### Títulos de imagem

Como [nos links](/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Criando_hyperlinks), você também pode adicionar o atributo `title` nas images, para fornecer mais informações de suporte, se necessário. No nosso exemplo, poderíamos fazer isso:

```html
<img
  src="images/dinosaur.jpg"
  alt="A cabeça e o tronco de um esqueleto de dinossauro;
          tem uma cabeça grande com dentes longos e afiados"
  width="400"
  height="341"
  title="Um T-Rex em exibição no Museu da Universidade de Manchester" />
```

Isso nos dá uma dica de ferramenta, assim como os títulos dos links:

![The dinosaur image, with a tooltip title on top of it that reads A T-Rex on display at the Manchester University Museum ](image-with-title.png)

Os títulos das imagens não são essenciais para incluir. Geralmente, é melhor incluir essas informações de suporte no texto principal do artigo, em vez de anexá-las à imagem. No entanto, eles são úteis em algumas circunstâncias; por exemplo, em uma galeria de imagens quando você não tem espaço para legendas.

### Aprendizado ativo: incorporando uma imagem

Agora é sua vez de jogar! Esta seção de aprendizado ativo o ajudará a executar com um simples exercício de incorporação. Você é fornecido com um básico {{htmlelement("img")}} tag; gostaríamos que você incorporasse a imagem localizada no seguinte URL:

```
https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg
```

Anteriormente, dissemos para nunca vincular as imagens a outros servidores, mas isso é apenas para fins de aprendizado; portanto, deixaremos você de fora dessa vez.

Também gostaríamos que você:

- Adicione algum texto alternativo e verifique se ele funciona incorretamente com o URL da imagem.
- Defina a imagem correta `width` e `height` (dica; isto é 200px largo e 171px altura), experimente outros valores para ver qual é o efeito.
- Defina um `title` na imagem.

Se você cometer um erro, sempre poderá redefini-lo usando o botão _Reset_. Se você realmente ficar preso, pressione o botão _Show solution_ para ver a resposta:

```html hidden
<h2>Input</h2>
<textarea id="code" class="input"><img></textarea>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 10em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function () {
  textarea.value =
    '<img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n     alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n     width="200"\n     height="171"\n     title="A T-Rex on display in the Manchester University Museum">';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 500) }}

## Anotar imagens com figuras e legendas de figuras

Por falar em legendas, existem várias maneiras de adicionar uma legenda para acompanhar sua imagem. Por exemplo, não haveria nada para impedi-lo de fazer isso:

```html
<div class="figure">
  <img
    src="images/dinosaur.jpg"
    alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
    width="400"
    height="341" />

  <p>A T-Rex on display in the Manchester University Museum.</p>
</div>
```

Está tudo bem. Isso contém o conteúdo que você precisa e é bem estiloso usando CSS. Mas há um problema aqui: não há nada que vincule semanticamente a imagem à sua legenda, o que pode causar problemas para os leitores de tela. Por exemplo, quando você tem 50 imagens e legendas, qual legenda combina com qual imagem?

Uma solução melhor, é usar os elementos do HTML5 {{htmlelement("figure")}} e {{htmlelement("figcaption")}}. Eles são criados exatamente para esse propósito: fornecer um contêiner semântico para figuras e vincular claramente a figura à legenda. Nosso exemplo acima, pode ser reescrito assim:

```
<figure>
  <img src="images/dinosaur.jpg"
       alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
       width="400"
       height="341">

  <figcaption>A T-Rex on display in the Manchester University Museum.</figcaption>
</figure>
```

O elemento {{htmlelement("figcaption")}} informa aos navegadores e à tecnologia de assistência que a legenda descreve o outro conteúdo do elemento {{htmlelement("figure")}}.

> **Nota:** Do ponto de vista da acessibilidade, legendas e [`alt`](/pt-BR/docs/Web/HTML/Element/img#alt) texto têm papéis distintos. As legendas beneficiam até as pessoas que podem ver a imagem, enquanto [`alt`](/pt-BR/docs/Web/HTML/Element/img#alt) texto fornece a mesma funcionalidade que uma imagem ausente. Portanto, legendas e `alt` texto não deve apenas dizer a mesma coisa, porque ambos aparecem quando a imagem desaparece. Tente desativar as imagens no seu navegador e veja como fica.

Uma figura não precisa ser uma imagem. É uma unidade de conteúdo independente que:

- Expressa seu significado de maneira compacta e fácil de entender.
- Pode ir em vários lugares no fluxo linear da página.
- Fornece informações essenciais de suporte ao texto principal.

Uma figura pode ser várias imagens, um trecho de código, áudio, vídeo, equações, uma tabela ou outra coisa.

### Aprendizado ativo: criando uma figura

Nesta seção de aprendizado ativo, gostaríamos que você pegasse o código finalizado da seção de aprendizado ativo anterior e o transformasse em uma figura:

- Envolve em um elemento {{htmlelement("figure")}}.
- Copie o texto do atributo `title`, remova o atributo `title`, e coloque o texto dentro de um elemento {{htmlelement("figcaption")}} abaixo da imagem.

Se você cometer um erro, sempre poderá redefini-lo usando o botão _Reset_. Se você realmente ficar preso, pressione o botão _Show solution_ para ver a resposta:

```html hidden
<h2>Input</h2>
<textarea id="code" class="input"></textarea>
<h2>Output</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 10em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function () {
  textarea.value =
    '<figure>\n  <img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n       alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n       width="200"\n       height="171">\n  <figcaption>A T-Rex on display in the Manchester University Museum</figcaption>\n</figure>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_2', 700, 500) }}

## Imagens de fundo CSS

Você também pode usar CSS para incorporar imagens em páginas da web (e JavaScript, mas isso é outra história). A propriedade {{cssxref("background-image")}} do CSS, e outras propriedades `background-*`, são usados para controlar o posicionamento da imagem de fundo. Por exemplo, para colocar uma imagem de plano de fundo em cada parágrafo de uma página, você pode fazer o seguinte:

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

A imagem incorporada resultante é sem dúvida mais fácil de posicionar e controlar do que as imagens HTML. Então, por que se preocupar com imagens HTML? Como sugerido acima, as imagens de plano de fundo CSS são apenas para decoração. Se você quiser adicionar algo bonito à sua página para melhorar o visual, tudo bem. No entanto, essas imagens não têm significado semântico. Eles não podem ter nenhum equivalente de texto, são invisíveis para os leitores de tela, etc. É hora das imagens HTML brilharem!

Resumindo: se uma imagem tiver significado, em termos de seu conteúdo, você deverá usar uma imagem HTML. Se uma imagem é puramente decorativa, você deve usar imagens de plano de fundo CSS.

> **Nota:** Você aprenderá muito mais sobre [CSS background images](/pt-BR/docs/Learn/CSS/Styling_boxes/Backgrounds) no nosso tópico de [CSS](/pt-BR/docs/Aprender/CSS).

É tudo por agora. Cobrimos imagens e legendas em detalhes. No próximo artigo, avançaremos, analisando como usar HTML para incorporar vídeo e áudio em páginas da web.

{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}
