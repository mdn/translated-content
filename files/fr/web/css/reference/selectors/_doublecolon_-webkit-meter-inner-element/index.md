---
title: ::-webkit-meter-inner-element
slug: Web/CSS/Reference/Selectors/::-webkit-meter-inner-element
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{Non-standard_Header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-webkit-meter-inner-element`** est une [extension de WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions) qui permet de sélectionner et appliquer des styles à l'élément conteneur externe d'un élément {{HTMLElement("meter")}}. C'est une balise supplémentaire pour afficher l'élément `<meter>` en lecture seule.

## Syntaxe

```css
::-webkit-meter-inner-element {
  /* ... */
}
```

## Exemples

### HTML

```html
Normal&nbsp;: <meter min="0" max="10" value="6">Score 6/10</meter>
<br />
Mis en forme&nbsp;:
<meter id="styled" min="0" max="10" value="6">Score 6/10</meter>
```

### CSS

```css
body {
  font-family: monospace;
}

.safari meter {
  /* Réinitialiser l'apparence par défaut pour Safari uniquement */
  /* La classe .safari est ajoutée via JavaScript */
  -webkit-appearance: none;
}

#styled::-webkit-meter-inner-element {
  -webkit-appearance: inherit;
  box-sizing: inherit;
  border: 1px dashed #aaaaaa;
}
```

### JavaScript

```js
// Safari veut que les éléments <meter> aient une `appearance` de `none` pour un
// style personnalisé utilisant les sélecteurs `::-webkit-meter-*`, mais
// `appearance: none` casse le rendu sur Chrome.
// Par conséquent, nous devons vérifier si le navigateur est basé sur Safari.

const is_safari =
  navigator.userAgent.includes("AppleWebKit/") &&
  !navigator.userAgent.includes("Chrome/");

if (is_safari) {
  document.body.classList.add("safari");
}
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', 50)}}

## Spécifications

Ce pseudo-élément ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

Les pseudo-éléments utilisés par WebKit/Blink pour mettre en forme les autres parties d'un élément {{HTMLElement("meter")}}&nbsp;:

- {{CSSxRef("::-webkit-meter-bar")}}
- {{CSSxRef("::-webkit-meter-even-less-good-value")}}
- {{CSSxRef("::-webkit-meter-optimum-value")}}
- {{CSSxRef("::-webkit-meter-suboptimum-value")}}
