---
title: ":out-of-range"
slug: Web/CSS/:out-of-range
---

{{CSSRef}}

A [pseudo classe](/pt-BR/docs/CSS/Pseudo-classes) de [CSS](/pt-BR/docs/Web/CSS) **`:out-of-range`** representa um elemento de {{htmlelement("entrada")}} cujo valor atual esta fora dos limites especificados pelo [`min`](/pt-BR/docs/Web/HTML/Element/entrada#min) e [`max`](/pt-BR/docs/Web/HTML/Element/entrada#max) atributos

```css
/* Selecione qualquer <entrada>, mas somente quando estiver dentros dos
 limites especificados, e quando este valor estiver fora deste limite */
input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
}
```

Essa pseudo classe é muito útil por dar ao usuario uma indicacão visual de que o valor atual esta fora dos limites permitidos

> **Nota:** Esta pseudo classe se aplica somente a elementos que tem (ou podem ter) uma limitacao. Na falta dessa de algo como essa limitacao, o elemento nao tera como ficar "in-range"(dentro dos limites) ou "out-of-range" (fora dos limites).

## Sintaxe

{{csssyntax}}

## Exemplo

### HTML

```html
<form action="" id="form1">
  <p>Valores entre 1 e 10 são validos.</p>
  <ul>
    <li>
      <input
        id="value1"
        name="value1"
        type="number"
        placeholder="1 to 10"
        min="1"
        max="10"
        value="12" />
      <label for="value1">Seu valor está </label>
    </li>
  </ul>
</form>
```

### CSS

```css
li {
  list-style: none;
  margin-bottom: 1em;
}

input {
  border: 1px solid black;
}

input:in-range {
  background-color: rgba(0, 255, 0, 0.25);
}

input:out-of-range {
  background-color: rgba(255, 0, 0, 0.25);
  border: 2px solid red;
}

input:in-range + label::after {
  content: "dentro dos limites.";
}

input:out-of-range + label::after {
  content: "Fora dos limites!";
}
```

### Resultado

{{EmbedLiveSample('Example', 600, 140)}}

## Specifications

| Specification                                                                        | Status                      | Comment                                                        |
| ------------------------------------------------------------------------------------ | --------------------------- | -------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'scripting.html#selector-out-of-range', ':out-of-range')}} | {{Spec2('HTML WHATWG')}}    | Define quando `:out-of-range` se iguala aos elementos em HTML. |
| {{SpecName('CSS4 Selectors', '#out-of-range-pseudo', ':out-of-range')}}              | {{Spec2('CSS4 Selectors')}} | Definicao inicial.                                             |

## Compatibilidade com navegadores

{{Compat("css.selectors.out-of-range")}}

## See also

- {{cssxref(":in-range")}}
- [Form data validation](/pt-BR/docs/Learn/HTML/Forms/Form_validation)
