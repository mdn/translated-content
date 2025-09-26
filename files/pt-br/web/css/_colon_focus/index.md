---
title: :focus
slug: Web/CSS/:focus
---

{{CSSRef}}

## Resumo

A [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) `:focus` do CSS é aplicada quando um elemento recebe foco, o que pode ocorrer quando o usuário seleciona o elemento utilizando o teclado ou ativando o mesmo com o mouse (ex: um campo de um formulário).

A pseudo classe é aplicada apenas ao elemento focado, e não aos seus elementos ascendentes, como ocorre com {{ Cssxref(":checked") }} e {{ Cssxref(":enabled") }} e diferentemente de {{ Cssxref(":active") }} ou {{ Cssxref(":hover") }}.

## Sintaxe

```
elemento:focus { ... }
```

## Exemplos

```css
.nome:focus {
  color: red;
}

.sobrenome:focus {
  color: lime;
}
```

```html
<input class="nome" value="Esse elemento ficará vermelho quando focado" />
<input
  class="sobrenome"
  value="Esse elemento ficará verde-limão quando focado" />
```

{{ EmbedLiveSample('Exemplos', '', '', '', 'Web/CSS/:focus') }}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
