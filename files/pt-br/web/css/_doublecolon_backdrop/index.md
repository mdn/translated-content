---
title: "::backdrop"
slug: Web/CSS/::backdrop
---

{{CSSRef}} {{SeeCompatTable}}

Cada elemento na [camada superior](https://fullscreen.spec.whatwg.org/#top-layer) de uma pilha de elementos possui um {{Cssxref("pseudo-elementos", "pseudo-elemento")}} _`::backdrop`_. Esse pseudo-elemento é uma caixa renderizada imediatamente abaixo do elemento superior (e acima do elemento logo abaixo desse elemento, caso exista algum), dentro da camada superior.

> **Nota:** O pseudo-elemento `::backdrop` pode ser utilizado para criar um pano de fundo que esconde o conteúdo por trás de um elemento posicionado no topo de uma pilha de elementos. Por exemplo, para o elemento que é mostrado em tela cheia conforme descrito nessa especificação.

Ele não herda de nenhum elemento e também não é herdado. Não há restrição de propriedades que podem ser aplicadas a esse pseudo-elemento.

## Especificações

| Especificação                                                          | Status                  | Comentário        |
| ---------------------------------------------------------------------- | ----------------------- | ----------------- |
| {{SpecName('Fullscreen', '#::backdrop-pseudo-element', '::backdrop')}} | {{Spec2('Fullscreen')}} | Definição inicial |

## Copatibilidade com navegadores

{{Compat("css.selectors.backdrop")}}

## Veja também

- {{cssxref(":fullscreen")}}
- {{HTMLElement("dialog")}}
