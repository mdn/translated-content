---
title: Galeria de Imagens
slug: Learn/JavaScript/Building_blocks/Image_gallery
---

{{LearnSidebar}}{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

Agora que analisamos os blocos de construção fundamentais do JavaScript, testaremos seu conhecimento de loops, funções, condicionais e eventos, fazendo com que você crie um item bastante comum que você verá em muitos sites — uma galeria de imagens ativadas em JavaScript.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Antes de tentar esta avaliação, você já deve ter trabalhado em todos os
        artigos deste módulo.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Para testar a compreensão de loops, funções, condicionais e eventos de
        JavaScript.
      </td>
    </tr>
  </tbody>
</table>

## Ponto de partida

Para começar esta avaliação, você deve [pegar o arquivo ZIP](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/gallery/gallery-start.zip?raw=true) para o exemplo e descompactá-lo em algum lugar no seu computador.

> **Nota:** Como alternativa, você pode usar um site como o [JSBin](http://jsbin.com/) ou [Thimble](https://thimble.mozilla.org/) para fazer sua avaliação. Você pode colar o HTML, CSS e JavaScript em um desses editores on-line. Se o editor on-line que você está usando não tiver painéis JavaScript / CSS separados, sinta-se à vontade para colocar os elementos in-line `<script>` e `<style>` dentro da página HTML.

## Resumo do projeto

Você recebeu alguns recursos de HTML, CSS e imagem e algumas linhas de código JavaScript; você precisa escrever o JavaScript necessário para transformar isso em um programa de trabalho. O corpo do HTML se parece com isto:

```html
<h1>Image gallery example</h1>

<div class="full-img">
  <img class="displayed-img" src="images/pic1.jpg" />
  <div class="overlay"></div>
  <button class="dark">Darken</button>
</div>

<div class="thumb-bar"></div>
```

O exemplo é assim:

![](gallery.png)

As partes mais interessantes do arquivo CSS do exemplo:

- Absolutamente posicione os três elementos dentro do `full-img <div>` — o `<img>` no qual a imagem em tamanho normal é exibida, um `<div>` vazio que é dimensionado para ser do mesmo tamanho que o `<img>` e colocado sobre a parte superior (isso é usado para aplicar um efeito de escurecimento à imagem através de uma cor de fundo semitransparente) e um `<button>` que é usado para controlar o efeito de escurecimento.
- Defina a largura de qualquer imagem dentro da thumb-bar `thumb-bar <div>` (as chamadas imagens "thumbnail") para 20%, e flutue-as para a esquerda para que elas fiquem lado a lado em uma linha.

Seu JavaScript precisa:

- Faça um loop em todas as imagens e, para cada uma, insira um elemento `<img>` dentro do `thumb-bar <div>` que incorporará a imagem na página.
- Anexe um manipulador `onclick` para cada `<img>` dentro do `thumb-bar <div>` para que, quando clicados, a imagem correspondente seja exibida no elemento `displayed-img <img>`.
- Anexe um manipulador `onclick` ao `<button>` para que, ao ser clicado, um efeito de escurecimento seja aplicado à imagem em tamanho normal. Quando é clicado novamente, o efeito de escurecimento é removido novamente.

Para lhe dar mais uma ideia, dê uma olhada no [exemplo finalizado](http://mdn.github.io/learning-area/javascript/building-blocks/gallery/) (não espreite o código-fonte!)

## Passos para concluir

As seções a seguir descrevem o que você precisa fazer.

### Looping através das imagens

Já fornecemos a você linhas que armazenam uma referência à `thumb-bar <div>` dentro de uma variável chamada `thumbBar`, cria um novo elemento `<img>` define seu atributo `src` como um valor de espaço reservado `xxx`, e acrescenta essa nova `<img>` elemento dentro do `thumbBar`.

Você precisa:

1. Coloque a seção de código abaixo do comentário "Looping through images" dentro de um loop que percorre todas as 5 imagens — você só precisa percorrer cinco números, um representando cada imagem.
2. Em cada iteração de loop, substitua o valor de espaço reservado `xxx` por uma string que seja igual ao caminho para a imagem em cada caso. Estamos definindo o valor do atributo `src` para esse valor em cada caso. Tenha em mente que, em cada caso, a imagem está dentro do diretório de imagens e seu nome é `pic1.jpg`, `pic2.jpg`, etc.

### Adicionando um manipulador onclick a cada imagem em miniatura

Em cada iteração de loop, você precisa adicionar um manipulador `onclick` ao atual `newImage` — isso deve:

1. Encontre o valor do atributo `src` da imagem atual. Isto pode ser feito executando a função [`getAttribute()`](/pt-BR/docs/Web/API/Element/getAttribute) no `<img>` em cada caso e passando um parâmetro de `"src"` em cada caso. Mas como conseguir a imagem? O uso do `newImage.getAttribute()` não funcionará, pois o loop é concluído antes de os manipuladores de eventos serem aplicados; fazer desta forma resultaria no retorno do valor `src` do último `<img>` para todos os casos. Para resolver isso, tenha em mente que, no caso de cada manipulador de eventos, o `<img>` é o destino do manipulador. Que tal obter as informações do objeto de evento?
2. Rode uma função, passando o valor `src` retornado como um parâmetro. Você pode chamar essa função como quiser.
3. Esta função do manipulador de eventos deve definir o valor do atributo `src` do `displayed-img <img>` para o valor `src` passado como um parâmetro. Já fornecemos uma linha que armazena uma referência ao `<img>` relevante em uma variável chamada `displayedImg`. Note que queremos uma função nomeada definida aqui.

### Escrevendo um manipulador que executa o botão escurecer / clarear

Isso só deixa o nosso escurecer / clarear `<button>` — nós já fornecemos uma linha que armazena uma referência ao `<button>` em uma variável chamada `btn`. Você precisa adicionar um manipulador `onclick` que:

1. Verifica o nome da classe atual definido no `<button>` — você pode novamente fazer isso usando `getAttribute()`.
2. Se o nome da classe for `"dark"`, altera a classe `<button>` para `"light"` (usando [`setAttribute()`](/pt-BR/docs/Web/API/Element/setAttribute)), seu conteúdo de texto para "Lighten", e o {{cssxref("background-color")}} da sobreposição `<div>` para `"rgba(0,0,0,0.5)"`.
3. Se o nome da classe não for `"dark"`, a classe `<button>` será alterada para `"dark"`, o conteúdo de texto de volta para "Darken", e o {{cssxref("background-color")}} da sobreposição `<div>` para `"rgba(0,0,0,0)"`.

As linhas seguintes fornecem uma base para alcançar as mudanças estipuladas nos pontos 2 e 3 acima.

```js
btn.setAttribute("class", xxx);
btn.textContent = xxx;
overlay.style.backgroundColor = xxx;
```

## Dicas e sugestões

- Você não precisa editar o HTML ou CSS de forma alguma.

## Avaliação

Se você está seguindo esta avaliação como parte de um curso organizado, você deve poder dar seu trabalho ao seu professor / mentor para marcação. Se você é auto-didata, então pode obter o guia de marcação com bastante facilidade, perguntando no tópico de [discussão sobre este exercício](https://discourse.mozilla.org/t/image-gallery-assessment/24687), ou no canal [#mdn](irc://irc.mozilla.org/mdn) IRC da [Mozilla IRC](https://wiki.mozilla.org/IRC). Tente o exercício primeiro — não há nada a ganhar com a trapaça!

{{PreviousMenu("Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}
