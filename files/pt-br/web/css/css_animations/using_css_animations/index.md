---
title: Usando animações CSS
slug: Web/CSS/CSS_animations/Using_CSS_animations
---

{{SeeCompatTable}}{{CSSRef}}

Animações CSS tornam possível animar transições de um estilo CSS para outro. Animações se consistem de dois componentes: um estilo descrevendo a animação e um set de keyframes que indicam o estado final e inicial do estilo CSS da animação, bem como possíveis waypoints intermediários ao longo do caminho.

Existem três vantagens chave para animações CSS além das técnicas tradicionais de animação dirigidas por script:

1. São de fácil utilização para animações simples; você pode criá-las sem mesmo ter que conhecer JavaScript.
2. As animações executam bem, mesmo sobre moderada carga do sistema. Animações simples podem normalmente ser executadas precariamente em JavaScript (a não ser que sejam bem feitas). A ferramenta de renderização pode usar frame-skipping e outras técnicas para manter a performance o mais estável possível.
3. Deixando o navegador controlar a sequência de animação permite ao navegador otimizar a performance e eficiência em, por exemplo, reduzir a frequência de update de animações correndo em abas que não estão visíveis no momento.

## Configurando a animação

Para criar uma sequência de animação CSS, você estiliza o elemento que deseja animar com a propriedade {{ cssxref("animation") }} ou suas sub-propriedades. Isso permite que você configure a sincronização da animação, bem como outros detalhes de como a de como a sequência de animação deveria progredir. Isso **não** configura a aparência atual da animação, que é feita usando a regra com parênteses (at-rule) {{ cssxref("@keyframes") }} como descrito em [Defining the animation sequence using keyframes](#defining_the_animation_sequence_using_keyframes) abaixo.

As sub-propriedades da propriedade {{cssxref("animation")}} são:

- {{ cssxref("animation-delay") }}
  - : Configura o delay entre o tempo em que o elemento é carregado e o inicio da sequência de animação.
- {{ cssxref("animation-direction") }}
  - : Configura se a animação deve ou nao alternar a direção em cada execução durante a sequência ou voltar ao ponto inicial e se repetir.
- {{ cssxref("animation-duration") }}
  - : Configura o tempo que uma animação deveria levar para completar um ciclo.
- {{ cssxref("animation-iteration-count") }}
  - : Configura o numero de vezes que uma animação deveria se repetir; você pode especificar infinito para repetir a animação indefinidamente.
- {{ cssxref("animation-name") }}
  - : Especifica o nome da regra com parênteses (at-rule) {{ cssxref("@keyframes") }} at-rule descrevendo os keyframes da animação.
- {{ cssxref("animation-play-state") }}
  - : Permite voce pausar e resumir a sequência da animação.
- {{ cssxref("animation-timing-function") }}
  - : Configura a sincronização da animação; que é, como a animação transita por keyframes, por estabilizar curvas de aceleração.
- {{ cssxref("animation-fill-mode") }}
  - : Configura que valores são aplicados pela animação antes e depois de se executar.

## Definindo a sequência de animação usando keyframes

Uma vez que você configurou a sincronização da animação, você precisa definir a aparência da animação. Isso é feito por estabelecer duas ou mais keyframes usando a regra com parênteses (at-rule) {{cssxref("@keyframes")}}. Cada keyframe descreve como o elemento animado deveria se renderizar a um tempo dado durante a sequência de animação.

Como a sincronização da animação é definida por um estilo CSS que configura a animação, keyframes usam uma {{cssxref("percentage")}} para indicar o tempo durante a sequência de animação que eles fazem parte. 0% indica o primeiro momento da sequência de animação, enquanto 100% indica o estado final da animação. Esses dois tempos devem ser especificados para que o navegador então saiba onde a animação deve começar e parar; por serem tão importantes, esses dois tempos tem expressões equivalentes especiais: from e to.

Você pode opcionalmente incluir keyframes adicionais que descrevem passos intermediários ao longo do caminho do ponto inicial ao ponto final da animação.

## Exemplos

> **Nota:** Os exemplos aqui não usam nenhum prefixo nas propriedades de animação CSS. Navegadores mais antigos podem precisar de prefixos; os exemplos ao vivo que você pode clicar pra ver em seu navegadores também incluem as versões prefixadas -webkit.

### Fazendo o texto deslizar através da janela do navegador

Esse exemplo simples estiliza o elemento {{HTMLElement("p")}} onde o elemento então desliza para dentro vindo de fora da lateral direita da janela do navegador.

Perceba que animações como essa podem fazer com que a página se torne mais larga que a janela do navegador. Para evitar esse problema coloque o elemento a ser animado dentro de um container, e atribua {{cssxref("overflow")}}`:hidden` ao container.

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

O estilo para o elemento {{ HTMLElement("p") }} aqui especifica que a animação deveria levar 3 segundos para executar do início ao fim, usando a propriedade {{cssxref("animation-duration")}}, e que o nome da regra com parênteses (at-rule){{cssxref("@keyframes")}} definindo os keyframes para a sequência de animação é nomeado por "slidein".

Se quiséssemos quaisquer estilização customizada no elemento {{ HTMLElement("p") }} para aparecer em navegadores que não suportam animações CSS, incluiríamos aqui também; no entanto, nesse caso não queremos nenhuma estilização customizada a não ser o efeito da animação.

Os keyframes são definidos utilizando-se as regras{{cssxref("@keyframes") }}. Neste caso, utilizamos apenas dois keyframes. O primeiro ocorre no progresso de 0% (ou seja, o primeiro keyframe da animação, através do pseudônimo from). Nesta etapa, configuramos a margem esquerda do elemento para ser 100% - quer dizer, como a margem está à esquerda e com valor 100%, o elemento irá se deslocar para o seu limite, ou seja, para a parte direita – e sua largura será de 300%, ou seja, 3 vezes a largura do seu tamanho original. Isto faz com que o elemento, em seu primeiro frame da animação, seja "empurrado" para fora do limite da parte direita da janela do navegador.

O segundo (e último) keyframe ocorre na etapa 100% do progresso (ou seja, o último keyframe da animação, através do pseudônimo to). A margem esquerda está com valor de 0% e a largura do elemento está com valor de 100%. Isto resulta na animação do elemento {{ HTMLElement("p") }}, que entra gradativamente na área de conteúdo até atingir uma margem esquerda de 0%.

```html
<p>
  A Lagarta e Alice olharam-se por algum tempo em silêncio: finalmente, a
  Lagarta tirou o narguilé da boca e dirigiu-se a ela com uma voz lânguida e
  sonolenta.
</p>
```

{{EmbedLiveSample("Making_text_slide_across_the_browser_window","100%","250")}}

### Adicionando outro keyframe

Vamos adicionar outro keyframe à animação do exemplo anterior. Digamos que nós queremos que o tamanho da fonte aumente durante o movimento da direita para a esquerda por um determinado momento, e que depois ele reduzisse ao seu tamanho original. Você precisaria simplesmente adicionar este keyframe:

```css
75% {
  font-size: 300%;
  margin-left: 25%;
  width: 150%;
}
```

O código completo fica da seguinte forma:

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html
<p>
  A Lagarta e Alice olharam-se por algum tempo em silêncio: finalmente, a
  Lagarta tirou o narguilé da boca e dirigiu-se a ela com uma voz lânguida e
  sonolenta.
</p>
```

Isso indica ao navegador que até atingir a etapa 75% do progresso da sequência da animação o elemento deve ter 25% no valor da sua margem esquerda e sua largura deve ser de 150%.

{{EmbedLiveSample("Adding_another_keyframe","100%","250")}}

### Faça repetir-se

Para fazer a animação se repetir, simplesmente use a propriedade{{ cssxref("animation-iteration-count") }} para indicar a quantidade de vezes que a animação deve se repetir. Neste caso, vamos usar `infinite` para que a animação se repita indefinidamente:

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}
```

Adicionando ao código existente:

```css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html
<p>
  A Lagarta e Alice olharam-se por algum tempo em silêncio: finalmente, a
  Lagarta tirou o narguilé da boca e dirigiu-se a ela com uma voz lânguida e
  sonolenta.
</p>
```

{{EmbedLiveSample("Repeating_the_animation","100%","250")}}

### Fazendo a animação se mover para trás e para frente

Com o exemplo anterior, fizemos a animação se repetir, mas é muito estranho tê-la pulando lá do início toda vez que a animação inicia. O que nós realmente queremos é que a animação se mova para trás e para frente por toda tela. Isso é facilmente realizado se adicionarmos o valor alternate à propriedade {{cssxref("animation-direction")}}:

```css
p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
```

```css
@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

```html
<p>
  A Lagarta e Alice olharam-se por algum tempo em silêncio: finalmente, a
  Lagarta tirou o narguilé da boca e dirigiu-se a ela com uma voz lânguida e
  sonolenta.
</p>
```

{{EmbedLiveSample("Making_the_animation_move_back_and_forth","100%","250")}}

### Usando eventos de animação

Você pode ter controle adicional sobre animações — como também informações úteis sobre elas — através do uso de eventos de animação. Esses eventos, representados pelo objeto {{ domxref("event/AnimationEvent", "AnimationEvent") }} , podem ser usados para detectar quando animações iniciam, terminam, e começam uma nova iteração. Cada evento inclui o tempo no qual ele ocorreu como também o nome da animação que lançou o evento.

Nós vamos modificar o exemplo de deslizamento de texto para gerar alguma informação sobre cada evento de animação quando ele ocorrer, para que possamos perceber como eles funcionam.

#### Adicionando o CSS

Nós começamos criando o CSS para a animação. Essa animação vai durar por 3 segundos, se chamar "slidein", repetir 3 vezes, e alternar a direção cada vez. No {{ cssxref("@keyframes") }}, a largura (width) e a margem esquerda (margin-left) são manipulados para fazer o elemento deslizar na tela.

```css
.slidein {
  -moz-animation-duration: 3s;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -moz-animation-name: slidein;
  -webkit-animation-name: slidein;
  animation-name: slidein;
  -moz-animation-iteration-count: 3;
  -webkit-animation-iteration-count: 3;
  animation-iteration-count: 3;
  -moz-animation-direction: alternate;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

@-moz-keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

@-webkit-keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

#### Adicionando animação a lista de eventos

Nós vamos usar o código JavaScript para escutar todos três possíveis eventos de animação. Esse código configura nossos escutadores de evento; nós o chamamos quando o documento é primeiramente carregado para configurar as coisas.

```js
var e = document.getElementById("watchme");
e.addEventListener("animationstart", listener, false);
e.addEventListener("animationend", listener, false);
e.addEventListener("animationiteration", listener, false);

e.className = "slidein";
```

Isso é simplesmente código padrão; você pode ter detalhes sobre como ele funciona na documentação para {{ domxref("element.addEventListener()") }}. A última coisa que este código faz é atribuir a classe no elemento o qual estaremos animando para "deslizar" (slidein); nós fazemos isso para iniciar a animação.

Por que? Porque o evento `animationstart` dispara assim que a animação começa, e no nosso caso, isso acontece antes do nosso código rodar. Então nós mesmos vamos iniciar a animação através de atribuição da classe do elemento para o estilo que é animado depois do ocorrido.

#### Recebendo os eventos

Os eventos são entregues à função `listener()`, a qual é mostrada abaixo.

```js
function listener(e) {
  var l = document.createElement("li");
  switch (e.type) {
    case "animationstart":
      l.innerHTML = "Started: elapsed time is " + e.elapsedTime;
      break;
    case "animationend":
      l.innerHTML = "Ended: elapsed time is " + e.elapsedTime;
      break;
    case "animationiteration":
      l.innerHTML = "New loop started at time " + e.elapsedTime;
      break;
  }
  document.getElementById("output").appendChild(l);
}
```

Esse código também é bem simples. Ele simplemente olha no {{ domxref("event.type") }} para determinar qual tipo de evento de animação ocorreu, então adiciona uma nota apropriada no {{ HTMLElement("ul") }} (lista não ordenada) que estamos usando para logar esses eventos.

A saída, quando tudo foi dito e feito, parece com algo assim:

- Started: elapsed time is 0
- New loop started at time 3.01200008392334
- New loop started at time 6.00600004196167
- Ended: elapsed time is 9.234000205993652

Perceba que os tempos são bem próximos, mas não exatamente iguais, àqueles esperados dado o tempo estabelecido quando a animação foi configurada. Perceba também que após a ultima iteração da animação, o evento `animationiteration` não é enviado; ao invés disso, o evento `animationend` é enviado.

#### O HTML

Apenas por questão de completude, aqui está o HTML que exibe o conteúdo da pagina, incluindo a lista na qual o script insere informação sobre os eventos recebidos:

```html
<h1 id="watchme">Veja-me mover</h1>
<p>
  Este exemplo mostra como usar animações CSS para fazer o elemento
  <code>h1</code>
  se mover pela página
</p>
<p>
  Além disso, emitimos algum texto sempre que um evento de animação dispara,
  para que você possa vê-los em ação.
</p>
<ul id="output"></ul>
```

{{EmbedLiveSample('Using_animation_events', '600', '300')}}

## Veja também

- {{ domxref("AnimationEvent", "AnimationEvent") }}
- [Detectando suporte de animação CSS](/pt-BR/CSS/CSS_animations/Detecting_CSS_animation_support)
