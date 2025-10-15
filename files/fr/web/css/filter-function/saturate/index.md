---
title: saturate()
slug: Web/CSS/filter-function/saturate
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

La [fonction](/fr/docs/Web/CSS/CSS_values_and_units/CSS_value_functions) [CSS](/fr/docs/Web/CSS) **`saturate()`** permet d'accentuer ou de réduire la saturation d'une image. Le résultat de cette fonction est une valeur {{cssxref("&lt;filter-function&gt;")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: saturate()")}}

```css interactive-example-choice
filter: saturate(1);
```

```css interactive-example-choice
filter: saturate(4);
```

```css interactive-example-choice
filter: saturate(50%);
```

```css interactive-example-choice
filter: saturate(0);
```

```html interactive-example
<section id="default-example">
  <img
    class="transition-all"
    id="example-element"
    src="/shared-assets/images/examples/firefox-logo.svg"
    width="200" />
</section>
```

## Syntaxe

```css
saturate(amount)
```

### Paramètres

- `amount` {{Optional_Inline}}
  - : Niveau de saturation, exprimé en nombre ({{cssxref("&lt;number&gt;")}}) ou en pourcentage ({{cssxref("&lt;percentage&gt;")}}). Une valeur inférieure à `100%` désature l'image, tandis qu'une valeur supérieure à `100%` la sursature. Une valeur de `0%` rend l'image totalement désaturée, tandis qu'une valeur de `100%` laisse l'image inchangée. La valeur initiale utilisée pour {{Glossary("interpolation", "l'interpolation")}} est `1`. La valeur par défaut est `1`.

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemples de valeurs correctes pour `saturate()`

```css
saturate(0);    /* Complètement sous-saturée */
saturate(.4);   /* Sous-saturée à 40% */
saturate()      /* Aucun effet */
saturate(100%);
saturate(200%); /* Saturation doublée */
```

### `saturate()` ne préserve pas la teinte ni la luminosité

Le diagramme ci-dessous compare deux dégradés de couleurs ayant `hsl(0 50% 50%)` comme point central&nbsp;: le premier est généré avec `saturate()`, le second utilise de vraies valeurs HSL. Remarquez que le dégradé obtenu avec `saturate()` présente des différences de teinte et de luminosité aux extrémités.

```html
<div>
  <p>Avec <code>saturate()</code></p>
  <div id="saturate"></div>
</div>
<div>
  <p>Avec <code>hsl()</code></p>
  <div id="hsl"></div>
</div>
```

```css hidden
#saturate,
#hsl {
  display: flex;
  margin: 1em 0;
}

#saturate div,
#hsl div {
  width: 2px;
  height: 100px;
}
```

```js
const saturate = document.getElementById("saturate");
const hsl = document.getElementById("hsl");

for (let i = 0; i <= 200; i++) {
  const div1 = document.createElement("div");
  div1.style.backgroundColor = `hsl(0 ${i / 2}% 50%)`;
  hsl.appendChild(div1);

  const div2 = document.createElement("div");
  div2.style.backgroundColor = "hsl(0 50% 50%)";
  div2.style.filter = `saturate(${i}%)`;
  saturate.appendChild(div2);
}
```

{{EmbedLiveSample("`saturate()` ne préserve pas la teinte ni la luminosité", "100%", 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

Les autres fonctions {{cssxref("&lt;filter-function&gt;")}} pouvant être utilisées dans les valeurs des propriétés {{cssxref("filter")}} et {{cssxref("backdrop-filter")}} sont&nbsp;:

- {{cssxref("filter-function/blur", "blur()")}}
- {{cssxref("filter-function/brightness", "brightness()")}}
- {{cssxref("filter-function/contrast", "contrast()")}}
- {{cssxref("filter-function/drop-shadow", "drop-shadow()")}}
- {{cssxref("filter-function/grayscale", "grayscale()")}}
- {{cssxref("filter-function/hue-rotate", "hue-rotate()")}}
- {{cssxref("filter-function/invert", "invert()")}}
- {{cssxref("filter-function/opacity", "opacity()")}}
- {{cssxref("filter-function/sepia", "sepia()")}}
