---
title: Element.animate()
slug: Web/API/Element/animate
---

{{APIRef('Web Animations')}} {{SeeCompatTable}}

Um {{domxref("Element")}} de interface do método **`animate()`** é um método de atalho o qual cria uma nova {{domxref("Animation")}}, e a aplica ao elemento, então executa a animação. Retorna a instância do objeto {{domxref("Animation")}} criado.

> **Nota:** Elementos podem ter múltiplas animações aplicadas a eles. Você pode obter uma lista de animações que afetam um elemento chamando {{domxref("Element.getAnimations()")}}.

## Syntax

```
var animation = element.animate(keyframes, options);
```

### Paramêtros

- `keyframes`
  - : An [Object formatted to represent a set of keyframes](/pt-BR/docs/Web/API/Web_Animations_API/Keyframe_Formats).
- `opções`

  - : Ou um inteiro representando a duração da animação (em milisegundos), ou um objeto contendo uma ou mais propriedades de tempo:

    - `id {{optional_inline}}`

      - : Um propriedade única á animate(): uma `DOMString` com a qual a animação é referenciada.

        {{Page("/pt-BR/docs/Web/API/Web_Animations_API/Animation_timing_properties", "Properties")}}

#### Opções Futuras

As seguintes opções atualmente não são embarcadas em nenhum lugar, porém serão adicionadas num futuro próximo.

- `composite {{optional_inline}}`

  - : Determina como os valores são combinados entre animações diferentes, separa animações que não especificam suas próprias operações de composição. Padrão para subtitituir.

    - Adiciona efeito de imposição e aditivação, onde cada iteração sucessiva é executada sobre a última. Por exemplo, com transform translateX(-200px) não sobreescreveria um valor anterior de rotate(20deg) mas resultaria em `translateX(-200px) rotate(20deg)`.
    - accumulate é similar porém um pouco mais inteligente: blur(2) e blur(5) se tornam blur(7), não blur(2) blur(5).
    - replace sobreescreve o valor anterior com um novo.

- `iterationComposite {{optional_inline}}`
  - : Determines how values build from iteration to iteration in this animation. Can be set to `accumulate` or `replace` (see above). Defaults to `replace`.
- `spacing {{optional_inline}}`

  - : Determina como quadros-chaves sem deslocamento temporal devem ser distribuidos durante a duração da animação. Padrão para distribute.

    - distribuir quadro-chaves de posição de forma que a diferença de deslocamento entre quadros-chaves subsequentes seja igual, distribuirá igualmente os quadros-chaves no decorrer do tempo de execução.
    - `paced` positions keyframes so that the distance between subsequent values of a specified paced property are equal, that is to say, keyframes are spaced further apart the greater the difference in their property values.

    ![](https://w3c.github.io/web-animations/img/spacing-distribute.svg) ![ ](https://w3c.github.io/web-animations/img/spacing-paced.svg)

### Valor de retorno

Retorna uma {{domxref("Animation")}}.

## Exemplo

Na demonstração [Down the Rabbit Hole (with the Web Animation API)](https://codepen.io/rachelnabors/pen/rxpmJL/?editors=0010), nós usamos o método conveniente animate() para imediamente criar e executar uma animação no elemento #tunnel para faze-lo fluir em direção superior, infinitamente.
Note o array de quadros-chave passado e também o bloco de opções de temporização.

```js
document.getElementById("tunnel").animate(
  [
    // keyframes
    { transform: "translateY(0px)" },
    { transform: "translateY(-300px)" },
  ],
  {
    // timing options
    duration: 1000,
    iterations: Infinity,
  },
);
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja Também

- [Web Animations API](/pt-BR/docs/Web/API/Web_Animations_API)
- {{domxref("Element.getAnimations()")}}
- {{domxref("Animation")}}
