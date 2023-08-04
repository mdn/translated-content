---
title: ":focus"
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

## Especificação

| Especificação                                                                         | Estado                      | Comentário                  |
| ------------------------------------------------------------------------------------- | --------------------------- | --------------------------- |
| {{SpecName('HTML WHATWG', 'scripting.html#selector-focus', ':focus')}}                | {{Spec2('HTML WHATWG')}}    | Define a semântica no HTML. |
| {{SpecName('CSS4 Selectors', '#focus-pseudo', ':focus')}}                             | {{Spec2('CSS4 Selectors')}} | Nenhuma modificação.        |
| {{SpecName('CSS3 Selectors', '#the-user-action-pseudo-classes-hover-act', ':focus')}} | {{Spec2('CSS3 Selectors')}} | Nenhuma modificação.        |
| {{SpecName('CSS2.1', 'selector.html#dynamic-pseudo-classes', ':focus')}}              | {{Spec2('CSS2.1')}}         | Definição inicial.          |

## Compatibilidade com navegadores

{{Compat("css.selectors.focus")}}
