---
title: contrast-color()
slug: Web/CSS/Reference/Values/color_value/contrast-color
original_slug: Web/CSS/color_value/contrast-color
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

{{SeeCompatTable}}

La [fonction de type `<color>`](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_de_couleur) [CSS](/fr/docs/Web/CSS) **`contrast-color()`** prend une valeur {{cssxref("color_value","couleur")}} et retourne une couleur contrastée [garantie <sup>(angl.)</sup>](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum).

`contrast-color()` permet, par exemple, de définir une couleur de texte et de générer automatiquement une couleur d'arrière‑plan contrastée, ou l'inverse. Il évite le besoin de maintenir des paires de couleurs fond/texte.

## Syntaxe

```css
contrast-color(red)
contrast-color(var(--backgroundColor))
```

### Paramètres

- `color`
  - : Toute valeur {{cssxref("&lt;color&gt;")}} valide.

### Valeur de retour

Une couleur nommée ({{cssxref("named-color")}})&nbsp;: `white` ou `black`.

## Description

La fonction `contrast-color()` retourne la valeur `white` ou `black`, selon celle qui offre le plus grand contraste avec la couleur d'entrée. Si `white` et `black` ont le même contraste avec la couleur d'entrée, `white` est retournée.

> [!WARNING]
> Il n'y a aucune garantie que les valeurs retournées par la fonction `contrast-color()` produisent un résultat accessible. Les couleurs de fond moyennes n'offrent généralement pas un contraste suffisant. Il est donc recommandé d'utiliser des couleurs claires ou foncées avec la fonction `contrast-color()`.

## Exemples

### Exemple : texte contrasté pour un bouton

Dans l'exemple suivant, le navigateur applique automatiquement une couleur contrastée au texte de l'élément {{htmlelement("button")}} de soumission lorsque vous changez sa couleur d'arrière‑plan.

```html hidden
<label>
  Sélectionnez la couleur d'arrière‑plan du bouton&nbsp;:
  <input type="color" id="colorPicker" value="#660066" />
</label>
<br />
<button>Envoyer</button>
```

```css
:root {
  --button-color: lightblue;
}

button {
  background-color: var(--button-color);

  /* Définir automatiquement une couleur de texte contrastée */
  color: contrast-color(var(--button-color));
}
```

```css hidden
body {
  padding: 1rem;
}

button {
  margin: 3rem;
  padding: 1rem;
  width: 150px;
  font-size: 2rem;
  border-radius: 1rem;
}

@supports not (color: contrast-color(red)) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la fonction contrast-color().";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
  }

  body > * {
    display: none;
  }
}
```

```js hidden
const colorPicker = document.getElementById("colorPicker");
const root = document.documentElement;

function updateColor(color) {
  root.style.setProperty("--button-color", colorPicker.value);
}

colorPicker.addEventListener("change", updateColor);
updateColor();
```

{{EmbedLiveSample("exemple_texte_contrasté_pour_un_bouton", "", 250)}}

### Exemple : mode clair et sombre

Dans l'exemple suivant, la [requête média](/fr/docs/Web/CSS/Guides/Media_queries/Using) [`prefers-color-scheme`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme) est utilisée pour définir une couleur d'arrière‑plan selon les préférences du système d'exploitation ou du navigateur. La fonction `contrast-color()` est utilisée pour définir automatiquement la couleur du texte.

Essayez de changer le mode sombre ou clair du navigateur ou du système pour voir l'effet.

```html hidden
<pre>
    Q&nbsp;: Comment CSS transforme‑t‑il la lumière en énergie&nbsp;?
  R&nbsp;: Avec <a href="/fr/docs/Web/CSS/font-synthesis">font-synthesis</a>.
</pre>
```

```css
:root {
  --background-color: navy;
}

@media (prefers-color-scheme: light) {
  :root {
    --background-color: wheat;
  }
}

body,
a {
  background-color: var(--background-color);
  color: contrast-color(var(--background-color));
}
```

```css hidden
body {
  padding: 2rem;
  font-size: 1.2rem;
}

pre {
  margin-top: 3rem;
}

@supports not (color: contrast-color(red)) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la fonction contrast-color().";
    background-color: wheat;
    display: block;
    width: 100%;
    text-align: center;
  }

  body {
    background-color: white;
  }

  body > * {
    display: none;
  }
}
```

{{EmbedLiveSample("exemple_mode_clair_et_sombre", "", 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction CSS {{CSSXref("filter-function/contrast", "contrast()")}}
- Le module des [couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- [Propriétés personnalisées CSS](/fr/docs/Web/CSS/Reference/Properties/--*) et {{cssxref("var")}}
- Les fonctionnalités {{cssxref("@media")}} [`prefers-contrast`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) et [`prefers-color-scheme`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme)
- [WCAG&nbsp;: contraste des couleurs](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Comment laisser le navigateur choisir une couleur contrastée en CSS <sup>(angl.)</sup>](https://webkit.org/blog/16929/contrast-color/) sur webkit.org (2025)
- [WebAIM Contrast Checker <sup>(angl.)</sup>](https://webaim.org/resources/contrastchecker/) sur webaim.org (2025)
