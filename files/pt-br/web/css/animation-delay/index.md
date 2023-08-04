---
title: animation-delay
slug: Web/CSS/animation-delay
---

{{CSSRef}}

A propriedade CSS **`animation-delay`** especifíca quando uma animação deve começar. Você pode começar a animação no futuro, imediatamente ou desde o início, ou imediatamente e parcialmente através do ciclo de animação.

```css
/* Uma animação */
animation-delay: 3s;
animation-delay: 0s;
animation-delay: -1500ms;

/* Várias animações */
animation-delay: 2.1s, 480ms;
```

Muitas vezes é conveniente usar a propriedade abreviada {{cssxref("animation")}} para definir todas as propriedades de animação de uma só vez.

{{cssinfo}}

## Sintaxe

### Valores

- `{{cssxref("&lt;time&gt;")}}`

  - : O deslocamento do tempo, a partir do momento em que a animação é aplicada ao elemento, no qual a animação deve começar. Isso pode ser especificado em segundos (`s`) ou milesegundos or milliseconds (`ms`). A unidade é necessaria.

    Um valor positivo indica que a animação deve começar após o período de especificação ter decorrido. O valor de `0s`, que é o padrão, incida que a animação deve começar desde que foi aplicada.

    Um valor negativo faz com que a animação comece imediatamente, mas parcialmente através do seu ciclo. Por exemplo, se você específicar `-1s` como tempo da animation-delay , a animação vai começar imediatamente, mas começará 1 segundo na sequência de animação. Se você específicar um valor negativo para a animation-delay, mas o valor inicial é implícito, o valor inicial é retirado do momento em que a animação é aplicada ao elemento.

> **Nota:** Quando você especifica vários valores separados por vírgula em uma propriedade `animation-*` , eles serão atribuídos às animações especificadas na propriedade {{cssxref("animation-name")}} em diferentes modos, dependendo de quantos existam. Para mais informações veja [Setting multiple animation property values](/pt-BR/docs/Web/CSS/CSS_Animations/Using_CSS_animations#Setting_multiple_animation_property_values).

### Sintaxe formal

{{csssyntax}}

## Exemplos

Veja [CSS animations](/pt-BR/docs/CSS/CSS_animations) para exemplos.

## Especificação

| Especificação                                                          | Status                       | Comentário         |
| ---------------------------------------------------------------------- | ---------------------------- | ------------------ |
| {{SpecName('CSS3 Animations', '#animation-delay', 'animation-delay')}} | {{Spec2('CSS3 Animations')}} | Definição inicial. |

## Compatibilidade com os browsers

{{Compat("css.properties.animation-delay")}}

## Veja também

- [Using CSS animations](/pt-BR/docs/CSS/Tutorials/Using_CSS_animations)
- JavaScript {{domxref("AnimationEvent")}} API
