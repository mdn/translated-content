---
title: ":enabled"
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

| Specification                                                  | Status                      | Comment                                                     |
| -------------------------------------------------------------- | --------------------------- | ----------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#selector-enabled', ':enabled')}}   | {{Spec2('HTML WHATWG')}}    | No change.                                                  |
| {{SpecName('HTML5 W3C', '#selector-enabled', ':enabled')}}     | {{Spec2('HTML5 W3C')}}      | Defines the semantics for HTML and forms.                   |
| {{SpecName('CSS4 Selectors', '#enableddisabled', ':enabled')}} | {{Spec2('CSS4 Selectors')}} | No change.                                                  |
| {{SpecName('CSS3 Basic UI', '#pseudo-classes', ':enabled')}}   | {{Spec2('CSS3 Basic UI')}}  | Links to Selectors Level 3.                                 |
| {{SpecName('CSS3 Selectors', '#enableddisabled', ':enabled')}} | {{Spec2('CSS3 Selectors')}} | Defines the pseudo-class, but not the associated semantics. |

## Compatibilidade com navegadores

{{Compat("css.selectors.enabled")}}

## See also

- {{Cssxref(":disabled")}}
