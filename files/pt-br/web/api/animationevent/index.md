---
title: AnimationEvent
slug: Web/API/AnimationEvent
---

{{SeeCompatTable}}{{APIRef("Web Animations API")}}

A interface **`AnimationEvent`** representa eventos provendo informações relacionadas a [animações](/pt-BR/docs/Web/Guide/CSS/Using_CSS_animations/).

`{{InheritanceDiagram}}`

## Propriedades

_Também propriedades herdadas pelo pai `{{domxref("Event")}}`_.

- `{{domxref("AnimationEvent.animationName")}} {{readonlyInline}}`
  - : O {{domxref("DOMString")}} contém o valor do {{cssxref("animation-name")}} propriedade CSS associada com a transição.
- `{{domxref("AnimationEvent.elapsedTime")}} {{readonlyInline}}`
  - : `É um ponto flutuante` dado pela quantidade de tempo que a animação está rodando, em segundos, quando esse evento termina, excluindo o tempo em que animação esteve pausada. Para o evento `"animationstart"`, `elapsedTime` é `0.0` a não ser que haja um valor negativo para `{{cssxref("animation-delay")}}`, nesse caso o evento terminará com `elapsedTime` contendo `(-1 * delay )`.
- `{{domxref("AnimationEvent.pseudoElement")}} {{readonlyInline}}`
  - : Um `{{domxref("DOMString")}}` começa com `'::'`, contendo o nome do [pseudo-elemento](/pt-BR/docs/Web/CSS/Pseudo-elements) onde a animação roda. Se a animação não rodar no pseudo-elemento mas no elemento, então teremos um _string_ vazio `' '`.

## Constructores

- `{{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}}`
  - : Cria um evento `AnimationEvent` com os dados parâmetros.

## Métodos

_Também herda métodos do pai `{{domxref("Event")}}`_.

- `{{domxref("AnimationEvent.initAnimationEvent()")}} {{non-standard_inline}}{{deprecated_inline}}`
  - : Inicializa um `AnimationEvent` criado usando diminuído {{domxref("Document.createEvent()", "Document.createEvent(\"AnimationEvent\")")}} método.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Usando animações CSS](/pt-BR/docs/CSS/Using_CSS_animations)
