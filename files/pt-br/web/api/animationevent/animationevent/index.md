---
title: AnimationEvent()
slug: Web/API/AnimationEvent/AnimationEvent
tags:
  - AnimationEvent
  - Apps
  - CSSOM
  - Experimental
  - Referencia
translation_of: Web/API/AnimationEvent/AnimationEvent
---
{{APIRef("Web Animations API")}}{{SeeCompatTable}}

`O construtor AnimationEvent()`retorna o recente criado {{domxref("AnimationEvent")}}, representando um evento em relação a animação.

## Síntaxe

```
animationEvent = new AnimationEvent(type, {animationName: aPropertyName,
                                           elapsedTime  : aFloat,
                                           pseudoElement: aPseudoElementName});
```

### Argumentos

_O construtor `AnimationEvent()`_ _também herda argumentos do {{domxref("Event.Event", "Event()")}}._

- `type`
  - : Um {{domxref("DOMString")}} representando o nome do tipo de `AnimationEvent`. É caso sensitivo e pode ser: `'animationstart'`, `'animationend'`, ou `'animationiteration'`.
- `animationName` {{optional_inline}}
  - : Um{{domxref("DOMString")}} contendo o valor do {{cssxref("animation-name")}} propriedade CSS associada com a transição. É por padrão `""`.
- `elapsedTime` {{optional_inline}}
  - : Um ponto flutuante dando a quantidade de tempo que a animação esteve rodando, em segundos, quando o evento termina, excluindo qualquer tempo que ela passou pausada. Para um evento `"animationstart"`, `elapsedTime` é `0.0` a não ser que haja um valor negativo para [`animation-delay`](/en-US/docs/Web/CSS/animation-delay), nesse caso o evento terminará com `elapsedTime contendo` `(-1 *`_delay_`)`. É por padrão `0.0`.
- `pseudoElement` {{optional_inline}}
  - : É um `{{domxref("DOMString")}}`, começando com`"::"`, contendo o nome do [pseudo-element](/pt-BR/docs/Web/CSS/Pseudo-elements) que a animação roda. Se a animação não roda em um pseudo-elementomas em um elemento, então temos um _string_ vazio `"" .`É por padrão `""`.

## Especificações

| Especificações                                                                                               | Estado                                   | Comentário          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------------------- | ------------------- |
| {{ SpecName('CSS3 Animations', '#AnimationEvent-interface', 'AnimationEvent()') }} | {{ Spec2('CSS3 Animations')}} | Initial definition. |

## Compatibilidade com navegadores

{{Compat("api.AnimationEvent.AnimationEvent")}}

## Veja também

- [Usando animações CSS](/pt-BR/docs/CSS/Using_CSS_animations).
- Tópicos relacionados a animação CSS, propriedades e regras: [`animation`](/en-US/docs/Web/CSS/animation), [`animation-delay`](/en-US/docs/Web/CSS/animation-delay), [`animation-direction`](/en-US/docs/Web/CSS/animation-direction), [`animation-duration`](/en-US/docs/Web/CSS/animation-duration), [`animation-fill-mode`](/en-US/docs/Web/CSS/animation-fill-mode), [`animation-iteration-count`](/en-US/docs/Web/CSS/animation-iteration-count), [`animation-name`](/en-US/docs/Web/CSS/animation-name), [`animation-play-state`](/en-US/docs/Web/CSS/animation-play-state), [`animation-timing-function`](/en-US/docs/Web/CSS/animation-timing-function), [`@keyframes`](/en-US/docs/Web/CSS/@keyframes)
- The {{domxref("AnimationEvent")}} interface it belongs to.
