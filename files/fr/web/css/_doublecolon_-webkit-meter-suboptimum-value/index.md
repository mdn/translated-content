---
title: ::-webkit-meter-suboptimum-value
slug: Web/CSS/::-webkit-meter-suboptimum-value
l10n:
  sourceCommit: e82803beedb7f1d8a8e918c1071752f18e1e3f28
---

{{Non-standard_header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-webkit-meter-suboptimum-value`** est une [extension de WebKit](/fr/docs/Web/CSS/WebKit_Extensions) qui donne une couleur jaune à l'élément {{HTMLElement("meter")}} lorsque la valeur de l'attribut est en dehors de l'intervalle haut des valeurs.

Jaune est la couleur par défaut.

## Syntaxe

```css
::-webkit-meter-suboptimum-value {
  /* ... */
}
```

## Exemples

### HTML

```html
Normal&nbsp;:
<meter min="0" max="10" low="3" high="7" optimum="6" value="2">
  Score 2/10
</meter>
<br />
Mis en forme&nbsp;:
<meter id="styled" min="0" max="10" low="3" high="7" optimum="6" value="2">
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

#styled::-webkit-meter-suboptimum-value {
  background: linear-gradient(
    to bottom,
    #ffff77,
    #999900 45%,
    #999900 55%,
    #ffff77
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
- {{cssxref("::-webkit-meter-even-less-good-value")}}
- {{cssxref("::-webkit-meter-optimum-value")}}
