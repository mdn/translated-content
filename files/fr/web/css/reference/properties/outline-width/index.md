---
title: outline-width
slug: Web/CSS/Reference/Properties/outline-width
original_slug: Web/CSS/outline-width
---

{{CSSRef}}

La propriété CSS **`outline-width`** est utilisée afin de définir l'épaisseur de la bordure (_outline_) d'un élément. Cette bordure est dessinée autour des éléments et délimite [la boîte de bordure](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model). Visuellement, cela permet de faire ressortir l'élément.

{{InteractiveExample("CSS Demo: outline-width")}}

```css interactive-example-choice
outline-width: 12px;
```

```css interactive-example-choice
outline-width: thin;
```

```css interactive-example-choice
outline-width: medium;
```

```css interactive-example-choice
outline-width: thick;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    This is a box with an outline around it.
  </div>
</section>
```

```css interactive-example
#example-element {
  outline: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot clé */
outline-width: thin;
outline-width: medium;
outline-width: thick;

/* Valeurs de longueur */
/* Type <length>       */
outline-width: 1px;
outline-width: 0.1em;

/* Valeurs globales */
outline-width: inherit;
```

### Valeurs

- `thin`
  - : La largeur appliquée dépendra de l'agent utilisateur. On attend une largeur fine. Généralement, pour les navigateurs de bureau comme Firefox, cela correspondra à `1px`.
- `medium`
  - : La largeur appliquée dépendra de l'agent utilisateur. On attend une largeur moyenne. Généralement, pour les navigateurs de bureau comme Firefox, cela correspondra à `3px`.
- `thick`
  - : La largeur appliquée dépendra de l'agent utilisateur. On attend une largeur de trait prononcée. Généralement, pour les navigateurs de bureau comme Firefox, cela correspondra à `5px`.
- `<length>`
  - : Voir la page sur le type {{cssxref("&lt;length&gt;")}} pour les différentes valeurs correspondantes.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<span id="thin">thin</span>
<span id="medium">medium</span>
<span id="thick">thick</span>
<span id="deuxpixels">2px</span>
<span id="unex">1ex</span>
<span id="deuxem">2em</span>
```

### CSS

```css
span {
  outline-style: solid;
  display: inline-block;
  margin: 20px;
}

#thin {
  outline-width: thin;
}

#medium {
  outline-width: medium;
}

#thick {
  outline-width: thick;
}

#deuxpixels {
  outline-width: 2px;
}

#unex {
  outline-width: 1ex;
}

#deuxem {
  outline-width: 2em;
}
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', '80')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
