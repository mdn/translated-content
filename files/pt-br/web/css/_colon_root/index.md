---
title: ":root"
slug: Web/CSS/:root
---

{{CSSRef}}

A [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) [CSS](/pt-BR/docs/Web/CSS) **`:root`** se equipara à raiz de uma árvore, que por sua vez representa o documento. Aplicado ao HTML, `:root` representa o elemento {{HTMLElement("html")}} e é idêntico ao seletor `html`, exceto que sua [especificidade](/pt-BR/docs/Web/CSS/Specificity) é mais alta.

```css
/* Seleciona o elemento raiz do documento:
   <html> no caso do HTML */
:root {
  background: yellow;
}
```

## Sintaxe

```
:root
```

## Exemplos

### Declarando variáveis CSS globais

O`:root` pode ser útil para declarar uma [variável CSS](/pt-BR/docs/Web/CSS/Using_CSS_custom_properties) global:

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTMLElement("html")}}
- {{domxref("Document.rootElement")}}
- {{domxref("Node.getRootNode()")}}
- {{domxref("Element.shadowRoot")}}
- {{domxref("ShadowRoot")}}
