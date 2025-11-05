---
title: ::-webkit-meter-even-less-good-value
slug: Web/CSS/Reference/Selectors/::-webkit-meter-even-less-good-value
original_slug: Web/CSS/::-webkit-meter-even-less-good-value
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{Non-standard_header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-webkit-meter-even-less-good-value`** est une [extension de WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions) qui met en forme l'élément {{HTMLElement("meter")}} lorsque les attributs `value` et `optimum` se situent en dehors de la plage basse-haute, mais dans des zones opposées. À titre d'illustration, cela s'applique lorsque `value` < `low` < `high` < `optimum` ou `value` > `high` > `low` > `optimum`.

Rouge est la couleur par défaut.

## Syntaxe

```css
::-webkit-meter-even-less-good-value {
  /* ... */
}
```

## Exemples

### HTML

```html
Normal&nbsp;:
<meter min="0" max="10" low="3" high="7" optimum="8" value="2">
  Score 2/10
</meter>
<br />
Mis en forme&nbsp;:
<meter id="styled" min="0" max="10" low="3" high="7" optimum="8" value="2">
  Score 2/10
</meter>
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

#styled::-webkit-meter-even-less-good-value {
  background: linear-gradient(
    to bottom,
    #ff7777,
    #990000 45%,
    #990000 55%,
    #ff7777
  );
  height: 100%;
  box-sizing: border-box;
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

Les pseudo-éléments utilisés par WebKit/Blink pour mettre en forme les autres parties d'un élément {{htmlelement("meter")}}&nbsp;:

- {{cssxref("::-webkit-meter-inner-element")}}
- {{cssxref("::-webkit-meter-bar")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
- {{cssxref("::-webkit-meter-suboptimum-value")}}
