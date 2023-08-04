---
title: animation
slug: Web/CSS/animation
---

{{CSSRef}}

A propriedade [CSS](/pt-BR/docs/Web/CSS) [abreviada](/pt-BR/docs/Web/CSS/Shorthand_properties) **`animation`**, aplica uma animação entre estilos. É uma abreviação de {{cssxref("animation-name")}}, {{cssxref("animation-duration")}}, {{cssxref("animation-timing-function")}}, {{cssxref("animation-delay")}}, {{cssxref("animation-iteration-count")}}, {{cssxref("animation-direction")}}, {{cssxref("animation-fill-mode")}}, e {{cssxref("animation-play-state")}}.

{{EmbedInteractiveExample("pages/css/animation.html")}}

## Propriedades constituintes

Esta propriedade é uma abreviação para as seguintes propriedades CSS:

- [`animation-delay`](/pt-BR/docs/Web/CSS/animation-delay)
- [`animation-direction`](/pt-BR/docs/Web/CSS/animation-direction)
- [`animation-duration`](/pt-BR/docs/Web/CSS/animation-duration)
- [`animation-fill-mode`](/pt-BR/docs/Web/CSS/animation-fill-mode)
- [`animation-iteration-count`](/pt-BR/docs/Web/CSS/animation-iteration-count)
- [`animation-name`](/pt-BR/docs/Web/CSS/animation-name)
- [`animation-play-state`](/pt-BR/docs/Web/CSS/animation-play-state)
- [`animation-timing-function`](/pt-BR/docs/Web/CSS/animation-timing-function)

## Sintaxe

```css
/* @keyframes duration | easing-function | delay |
iteration-count | direction | fill-mode | play-state | name */
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* @keyframes duration | easing-function | delay | name */
animation: 3s linear 1s slidein;

/* two animations */
animation:
  3s linear slidein,
  3s ease-out 5s slideout;
```

A propriedade `animation` é especificada como uma ou mais animações separadas por vírgulas.

Cada animação individual é especificada como:

- zero, uma ou duas ocorrências do valor {{cssxref("&lt;time&gt;")}}

- zero ou uma ocorrência dos seguintes valores:

  - {{cssxref("animation", "&lt;single-easing-function&gt;", "#single-easing-function")}}
  - {{cssxref("animation", "&lt;single-animation-iteration-count&gt;", "#single-animation-iteration-count")}}
  - {{cssxref("animation", "&lt;single-animation-direction&gt;", "#single-animation-direction")}}
  - {{cssxref("animation", "&lt;single-animation-fill-mode&gt;", "#single-animation-fill-mode")}}
  - {{cssxref("animation", "&lt;single-animation-play-state&gt;", "#single-animation-play-state")}}

- um nome opcional para a animação que pode ser `none`, um {{cssxref("&lt;custom-ident&gt;")}} ou uma {{cssxref("&lt;string&gt;")}}

### Valores

- `<single-easing-function>`
  - : Determina o tipo de transição. O valor deve ser um dos disponíveis em {{cssxref("easing-function")}}.
- `<single-animation-iteration-count>`
  - : O número de vezes que a animação é reproduzida. O valor deve ser um dos disponíveis em {{cssxref("animation-iteration-count")}}.
- `<single-animation-direction>`
  - : A direção em que a animação é reproduzida. O valor deve ser um dos disponíveis em {{cssxref("animation-direction")}}.
- `<single-animation-fill-mode>`
  - : Determina como os estilos devem ser aplicados no alvo da animação antes e depois de sua execução. O valor deve ser um dos disponíveis em {{cssxref("animation-fill-mode")}}.
- `<single-animation-play-state>`
  - : Determina se a animação está sendo reproduzida ou não. O valor deve ser um dos disponíveis em {{cssxref("animation-play-state")}}.

## Descrição

A ordem dos valores de tempo dentro de cada definição de animação é importante: o primeiro valor que pode ser analisado como {{cssxref("&lt;time&gt;")}} é atribuído ao {{cssxref("animation-duration")}} , e o segundo é atribuído a {{cssxref("animation-delay")}}.

A ordem de outros valores dentro de cada definição de animação também é importante para distinguir um valor {{cssxref("animation-name")}} de outros valores. Se um valor na abreviação `animation` puder ser analisado como um valor para uma propriedade de animação diferente de `animation-name`, o valor será aplicado a essa propriedade primeiro e não a `animation-name`. Por esta razão, a prática recomendada é especificar um valor para `animation-name` como o último valor em uma lista de valores ao usar a abreviação `animation`; isso é válido mesmo quando você especifica várias animações separadas por vírgula usando a abreviação `animation`.

Um valor `animation-name` não precisa ser declarado na propriedade abreviada `animation`. Se nenhum nome existir, não haverá animação para aplicar em nenhuma das propriedades.

Quando o valor `animation-duration` é omitido da propriedade abreviada `animation`, o valor padrão dessa propriedade é `0s`. Nesse caso, a animação ainda ocorrerá (o [`animationStart`](/pt-BR/docs/Web/API/Element/animationstart_event) e [`animationEnd`](/pt-BR/docs/Web/API/ Element/animationend_event) eventos serão acionados), mas nenhuma animação será visível.

## Preocupações com acessibilidade

A animação piscando e piscando pode ser problemática para pessoas com problemas cognitivos, como o Transtorno de Déficit de Atenção e Hiperatividade (TDAH). Além disso, certos tipos de movimento podem ser um gatilho para distúrbios vestibulares, epilepsia e enxaqueca e sensibilidade escotópica.

Considere fornecer um mecanismo para pausar ou desabilitar a animação, bem como usar a [Consulta de mídia de movimento reduzido](/pt-BR/docs/Web/CSS/@media/prefers-reduced-motion) para criar uma experiência complementar para usuários que têm expressou uma preferência por experiências animadas reduzidas.

- [Projetando uma animação na Web mais segura para sensibilidade ao movimento · Um artigo separado](https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity/)
- [Uma introdução à consulta de mídia de movimento reduzido | CSS-Tricks](https://css-tricks.com/introduction-reduced-motion-media-query/)
- [Design responsivo para movimento | WebKit](https://webkit.org/blog/7551/responsive-design-for-motion/)
- [MDN Understanding WCAG, Diretriz 2.2 explicações](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Operable#guideline_2.2_%e2%80%94_enough_time_provide_users_enough_time_to_read_and_use_content)
- [Entendendo o Critério de Sucesso 2.2.2 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html)

## Definição formal

{{cssinfo}}

## Sintaxe formal

{{csssyntax}}

## Exemplos

> **Nota:** A animação das propriedades do [CSS Box Model](/pt-BR/docs/Web/CSS/CSS_Box_Model) não é recomendada. A animação de qualquer propriedade de box model é inerentemente para a CPU; considere animar a propriedade [transform](/pt-BR/docs/Web/CSS/transform).

### Nascer do Sol

Aqui animamos um sol amarelo em um céu azul claro. O sol nasce
para o centro da viewport e depois desaparece de vista.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden; /* esconde qualquer parte do sol abaixo do horizonte */
  background-color: lightblue;
  display: flex;
  justify-content: center; /* centraliza o sol ao fundo */
}

.sun {
  background-color: yellow;
  border-radius: 50%; /* cria um fundo circular */
  height: 100vh; /* torna o sol do tamanho da viewport */
  aspect-ratio: 1 / 1;
  animation: 4s linear 0s infinite alternate sun-rise;
}

@keyframes sun-rise {
  from {
    /* empurra o sol para além da janela de visualização */
    transform: translateY(110vh);
  }
  to {
    /* retorna o sol à sua posição padrão */
    transform: translateY(0);
  }
}
```

{{EmbedLiveSample('Sun_Rise')}}

### Animando Múltiplas Propriedades

Adicionando à animação do sol no exemplo anterior, adicionamos uma segunda animação mudando a cor do sol conforme ele nasce e se põe. O sol começa vermelho escuro quando está abaixo do horizonte e muda para laranja brilhante quando atinge o topo.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  animation: 4s linear 0s infinite alternate animating-multiple-properties;
}

/* é possível animar várias propriedades em uma única animação */
@keyframes animating-multiple-properties {
  from {
    transform: translateY(110vh);
    background-color: red;
    filter: brightness(75%);
  }
  to {
    transform: translateY(0);
    background-color: orange;
    /* propriedades não definidas, ou seja, 'filtro' reverterá para os valores padrão */
  }
}
```

{{EmbedLiveSample('Animating Multiple Properties')}}

### Aplicando Múltiplas Animações

Aqui está um sol que nasce e se põe sobre um fundo azul claro. O sol
gira gradualmente através de um arco-íris de cores. O tempo do sol, posição e cor são independentes.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  /* várias animações são separadas por vírgulas, os parâmetros de cada animação são definidos independentemente */
  animation:
    4s linear 0s infinite alternate rise,
    24s linear 0s infinite psychedelic;
}

@keyframes rise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes psychedelic {
  from {
    filter: hue-rotate(0deg);
  }
  to {
    filter: hue-rotate(360deg);
  }
}
```

{{EmbedLiveSample('Applying Multiple Animations')}}

### Animações Múltiplas em Cascata

Aqui está um sol amarelo sobre um fundo azul claro. O sol salta entre as
lados esquerdo e direito da viewport. O sol permanece na janela de visualização mesmo
embora uma animação de ascensão seja definida. A propriedade de transformação da animação de subida
é 'substituído' pela animação de salto.

```html
<div class="sun"></div>
```

```css
:root {
  overflow: hidden;
  background-color: lightblue;
  display: flex;
  justify-content: center;
}

.sun {
  background-color: yellow;
  border-radius: 50%;
  height: 100vh;
  aspect-ratio: 1 / 1;
  /*
    as animações declaradas posteriormente na cascata substituirão as
    propriedades de animações declaradas anteriormente
  */
  /* bounce 'substitui' a transformação definida por ascensão, portanto, o sol só se move horizontalmente */
  animation:
    4s linear 0s infinite alternate rise,
    4s linear 0s infinite alternate bounce;
}

@keyframes rise {
  from {
    transform: translateY(110vh);
  }
  to {
    transform: translateY(0);
  }
}

@keyframes bounce {
  from {
    transform: translateX(-50vw);
  }
  to {
    transform: translateX(50vw);
  }
}
```

{{EmbedLiveSample('Cascading Multiple Animations')}}

Veja [Usando animações CSS](/pt-BR/docs/Web/CSS/CSS_Animations/Using_CSS_animations#examples) para exemplos adicionais.

## Especificações

{{Specifications}}

## Compatiblidade com navegadores

{{Compat}}

## Veja também

- [Usando animações CSS](/pt-BR/docs/Web/CSS/CSS_Animations/Using_CSS_animations)
- API JavaScript {{domxref("AnimationEvent")}}
