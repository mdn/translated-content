---
title: "-webkit-text-security"
slug: Web/CSS/-webkit-text-security
---

{{ CSSRef() }} {{ Non-standard_header() }}

**`-webkit-text-security`** é uma propriedade CSS não padronizada que ofusca caracteres em um campo {{HtmlElement ("form")}} (como {{HtmlElement ("input")}}} ou {{HtmlElement ("textarea")}}) substituindo eles com uma forma. Afeta apenas campos que não são `type=password`.

## Sintaxe

```css
-webkit-text-security: circle;
-webkit-text-security: disc;
-webkit-text-security: square;
-webkit-text-security: none;
```

## Exemplo

Tente digitar no campo abaixo. Se o seu navegador suportar essa propriedade, os caracteres deverão ser visualmente substituídos por quadrados.

### HTML

```html
<label for="name">Name:</label> <input type="text" name="name" id="name" />
```

### CSS

```css
input {
  -webkit-text-security: square;
}
```

### Result

{{EmbedLiveSample("Example")}}

## Especificação

_Não faz parte de nenhuma especificação._

## Compatibilidade com navegadores

Suportado em navegadores baseados no WebKit e Blink.

## Veja também

- [WebKit CSS extensions](/pt-BR/docs/Web/CSS/WebKit_Extensions)
