---
title: ":invalid"
slug: Web/CSS/:invalid
---

{{CSSRef}}

A [pseudo-classe CSS](/pt-BR/docs/Web/CSS/Pseudo-classes) **`:invalid`** representa qualquer elemento {{HTMLElement("input")}} ou {{HTMLElement("form")}} cujo conteúdo não esteja [válido](/pt-BR/docs/Web/Guide/HTML/HTML5/Constraint_validation).

```css
/* Seleciona todos os inputs inválidos */
input:invalid {
  background-color: pink;
}
```

Essa pseudo-classe é útil para usuário identificar quais campos foram preenchidos incorretamente.

## Sintaxe

{{csssyntax}}

## Exemplo

Esse exemplo apresenta um simples formulário onde a cor verde realça um input válido e a cor vermelha realça um input inválido.

### HTML

```html
<form>
  <label for="url_input">Adicione uma URL:</label>
  <input type="url" id="url_input" />
  <br />
  <br />
  <label for="email_input">Adicione um endereço de email:</label>
  <input type="email" id="email_input" required />
</form>
```

### CSS

```css
input:invalid {
  background-color: #ffdddd;
}

form:invalid {
  border: 5px solid #ffdddd;
}

input:valid {
  background-color: #ddffdd;
}

form:valid {
  border: 5px solid #ddffdd;
}

input:required {
  border-color: #800000;
  border-width: 3px;
}

input:required:invalid {
  border-color: #c00000;
}
```

### Resultado

{{EmbedLiveSample('Exemplo', 600, 120)}}

## Notas

### Radio buttons

Se algum radio button de um grupo possuir o atributo `required`, a pseudo-classe `:invalid` é aplicada a todos se nenhum deles for selecionado. (Radio buttons agrupados compartilham o mesmo valor pelo atributo `name`.)

### Gecko defaults

Por padrão, Gecko não aplica o estilo para a pseudo-classe `:invalid`. Entretanto, pode-se aplicar um estilo (um "brilho" vermelho usando a propriedade {{Cssxref("box-shadow")}}) à pseudo-classe {{cssxref(":-moz-ui-invalid")}}, que são um conjunto que se aplicam como o `:invalid`.

Você pode desabilitar o "brilho" usando o CSS a seguir, ou substituir completamente para alterar a aparência dos campos inválidos:

```css
:invalid {
  box-shadow: none;
}

:-moz-submit-invalid {
  box-shadow: none;
}

:-moz-ui-invalid {
  box-shadow: none;
}
```

## Especificações

| Especificação                                                   | Status                      | Comentário                                            |
| --------------------------------------------------------------- | --------------------------- | ----------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#selector-invalid', ':invalid')}}    | {{Spec2('HTML WHATWG')}}    | Nenhuma alteração.                                    |
| {{SpecName('HTML5 W3C', '#selector-invalid', ':invalid')}}      | {{Spec2('HTML5 W3C')}}      | Define a semântica do HTML e validação de restrições. |
| {{SpecName('CSS4 Selectors', '#validity-pseudos', ':invalid')}} | {{Spec2('CSS4 Selectors')}} | Definição inicial.                                    |

## Compatibilidade com navegadores

{{Compat("css.selectors.invalid")}}

## Veja também

- Outras pseudo-classes relacionadas com validações: {{ cssxref(":required") }}, {{ cssxref(":optional") }}, {{ cssxref(":valid") }}
- Mozilla pseudo-classes relacionadas: {{cssxref(":-moz-ui-invalid")}}, {{cssxref(":-moz-submit-invalid")}}
- [Form data validation](/pt-BR/docs/Learn/HTML/Forms/Form_validation)
