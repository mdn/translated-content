---
title: ":indeterminate"
slug: Web/CSS/:indeterminate
---

{{CSSRef}}

La [pseudo-classe](/fr/docs/Web/CSS/Pseudo-classes) **`:indeterminate`** permet de cibler un élément de formulaire dont l'état est indéterminé.

```css
/* Cible n'importe quel élément <input> */
/* dans un état indéterminé */
input:indeterminate {
  background: lime;
}
```

Cela inclut :

- un élément [`<input type="checkbox">`](/fr/docs/Web/HTML/Element/input/checkbox) dont la propriété du DOM `indeterminate` est fixée à `true` via du code JavaScript
- des éléments [`<input type="radio">`](/fr/docs/Web/HTML/Element/input/radio) dont tous les boutons radio du groupe sont décochés
- des éléments {{HTMLElement("progress")}} dans un état indéterminé.

## Syntaxe

{{csssyntax}}

## Exemples

### Case à cocher et bouton radio

#### CSS

```css
input,
span {
  background: red;
}

:indeterminate,
:indeterminate + label {
  background: lime;
}
```

#### HTML

```html
<div>
  <input type="checkbox" id="checkbox" />
  <label for="checkbox">L'arrière-plan devrait être vert.</label>
</div>
<div>
  <input type="radio" id="radio" />
  <label for="radio">L'arrière-plan devrait être vert.</label>
</div>
```

#### JavaScript

```js
var inputs = document.getElementsByTagName("input");
for (var i = 0; i < inputs.length; i++) {
  inputs[i].indeterminate = true;
}
```

#### Résultat

{{EmbedLiveSample('Case_à_cocher_et_bouton_radio', '100%', 50)}}

### Élément `progress`

#### CSS

```css
progress:indeterminate {
  opacity: 0.5;
  box-shadow: 0 0 2px 1px red;
}
```

#### HTML

```html
<progress />
```

#### Résultat

{{EmbedLiveSample('Élément_progress', '100%', 30)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
