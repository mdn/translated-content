---
title: ":focus-within"
slug: Web/CSS/:focus-within
---

{{CSSRef}}

A [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) [CSS](/pt-BR/docs/Web/CSS) **`:focus-within`** representa um elemento que recebeu o foco ou contém um elemento que recebeu o foco. Em outras palavras, isto representa um elemento que é correspondido por si só pela pseudo-classe {{cssxref(":focus")}} ou tem um descendente que é correspondido por `:focus`. (Isto inclui descendentes em [shadow trees](/pt-BR/docs/Web/Web_Components/Shadow_DOM).)

```css
/* Seleciona uma <div> quando um de seus descendentes é focado */
div:focus-within {
  background: cyan;
}
```

Este seletor é útil, pegando um exemplo comum, para destacar um todo {{htmlElement("form")}} container quando o usuário focar em um de seus campos {{htmlElement("input")}}.

## Sintaxe

{{csssyntax}}

## Exemplo

Neste exemplo, o formulário receberá estilos de coloração especiais quando o input de texto recebe o foco

### HTML

```html
<p>Tente digitar neste formulário.</p>

<form>
  <label for="given_name">Given Name:</label>
  <input id="given_name" type="text" />
  <br />
  <label for="family_name">Family Name:</label>
  <input id="family_name" type="text" />
</form>
```

### CSS

```css
form {
  border: 1px solid;
  color: gray;
  padding: 4px;
}

form:focus-within {
  background: #ff8;
  color: black;
}

input {
  margin: 4px;
}
```

### Resultado

{{EmbedLiveSample("Exemplo", 500, 150)}}

## Especificações

| Especificação                                                               | Status                      | Comentário          |
| --------------------------------------------------------------------------- | --------------------------- | ------------------- |
| {{SpecName("CSS4 Selectors", "#the-focus-within-pseudo", ":focus-within")}} | {{Spec2("CSS4 Selectors")}} | Initial definition. |

## Compatibilidade com navegadores

{{Compat("css.selectors.focus-within")}}

## Veja também

- {{cssxref(":focus")}}
