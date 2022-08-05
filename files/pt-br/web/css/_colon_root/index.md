---
title: ':root'
slug: Web/CSS/:root
translation_of: Web/CSS/:root
---
{{CSSRef}}

## Sumário

A [pseudo-classe CSS](/en-US/docs/Web/CSS/Pseudo-classes) **`:root`** se equipara à raíz de uma árvore, que por sua vez representa o documento. Aplicado ao HTML, `:root` representa o elemento {{HTMLElement("html")}} e é identico ao seletor html, exceto que sua [especificidade](/pt-BR/docs/Web/CSS/Specificity) é mais alta.

## Sintaxe

{{csssyntax}}

## Exemplo

Usar `:root` pode ser útil para declarar uma [variável CSS](/en-US/docs/Web/CSS/Using_CSS_variables) global:

```css
:root {
  --main-color: hotpink;
  --pane-padding: 5px 42px;
}
```

## Especificações

| Especificação                                                            | Status                               | Comentário        |
| ------------------------------------------------------------------------ | ------------------------------------ | ----------------- |
| {{SpecName('CSS4 Selectors', '#root-pseudo', ':root')}} | {{Spec2('CSS4 Selectors')}} | Sem mudança       |
| {{SpecName('CSS3 Selectors', '#root-pseudo', ':root')}} | {{Spec2('CSS3 Selectors')}} | Definição inicial |

## Compatibilidade com navegadores

{{CompatibilityTable}}

<div id="compat-desktop"><table class="compat-table"><tbody><tr><th>Feature</th><th>Chrome</th><th>Firefox (Gecko)</th><th>Internet Explorer</th><th>Opera</th><th>Safari</th></tr><tr><td>Basic support</td><td>1</td><td>{{CompatGeckoDesktop("1.7")}}</td><td>9</td><td>9.5</td><td>1.0</td></tr></tbody></table></div>

<div id="compat-mobile"><table class="compat-table"><tbody><tr><th>Feature</th><th>Android</th><th>Firefox Mobile (Gecko)</th><th>IE Mobile</th><th>Opera Mobile</th><th>Safari Mobile</th></tr><tr><td>Basic support</td><td>{{CompatUnknown}}</td><td>{{CompatUnknown}}</td><td>{{CompatUnknown}}</td><td>{{CompatUnknown}}</td><td>{{CompatUnknown}}</td></tr></tbody></table></div>
