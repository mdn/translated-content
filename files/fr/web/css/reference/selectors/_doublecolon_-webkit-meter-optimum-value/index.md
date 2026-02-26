---
title: ::-webkit-meter-optimum-value
slug: Web/CSS/Reference/Selectors/::-webkit-meter-optimum-value
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{Non-standard_Header}}

Le [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) [CSS](/fr/docs/Web/CSS) **`::-webkit-meter-optimum-value`** est une [extension de WebKit](/fr/docs/Web/CSS/Reference/Webkit_extensions) qui permet de mettre en forme l'élément {{HTMLElement("meter")}} lorsque sa valeur se situe dans la plage basse-haute ou lorsque la valeur est équivalente à la valeur optimale.

Vert est la couleur par défaut.

## Syntaxe

```css
::-webkit-meter-optimum-value {
  /* ... */
}
```

## Exemples

### HTML

```html
Normal&nbsp;:
<meter min="0" max="10" low="3" high="7" optimum="6" value="6">
  Score 6/10
</meter>
<br />
Mis en forme&nbsp;:
<meter id="styled" min="0" max="10" low="3" high="7" optimum="6" value="6">
  Score 6/10
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

#styled::-webkit-meter-optimum-value {
  background: linear-gradient(
    to bottom,
    #77ff77,
    #009900 45%,
    #009900 55%,
    #77ff77
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

Les pseudo-éléments utilisés par WebKit/Blink pour mettre en forme les autres parties d'un élément {{HTMLElement("meter")}}&nbsp;:

- {{CSSxRef("::-webkit-meter-inner-element")}}
- {{CSSxRef("::-webkit-meter-bar")}}
- {{CSSxRef("::-webkit-meter-even-less-good-value")}}
- {{CSSxRef("::-webkit-meter-suboptimum-value")}}
