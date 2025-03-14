---
title: :enabled
slug: Web/CSS/:enabled
---

{{CSSRef}}

A [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) [CSS](/pt-BR/docs/Web/CSS) **`:enabled`** representa qualquer elemento ativado. Um elemento é ativado se puder ser ativado (selecionado, clicado, digitado etc.) ou aceitar o foco. O elemento também possui um estado desativado, no qual não pode ser ativado nem aceitar foco.

```css
/* Seleciona qualquer <input> ativado */
input:enabled {
  color: blue;
}
```

## Sintaxe

{{csssyntax}}

## Exemplo

O exemplo a seguir torna a cor do texto e do botão `<input>` verde quando ativada e cinza quando desativada. Isso ajuda o usuário a entender quais elementos podem ser interagidos..

### HTML

```html
<form action="url_of_form">
  <label for="FirstField">First field (enabled):</label>
  <input type="text" id="FirstField" value="Lorem" /><br />

  <label for="SecondField">Second field (disabled):</label>
  <input type="text" id="SecondField" value="Ipsum" disabled="disabled" /><br />

  <input type="button" value="Submit" />
</form>
```

### CSS

```css
input:enabled {
  color: #2b2;
}

input:disabled {
  color: #aaa;
}
```

### Result

{{EmbedLiveSample("Example", 550, 95)}}

## Specifications

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## See also

- {{Cssxref(":disabled")}}
