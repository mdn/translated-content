---
title: saturate()
slug: Web/CSS/Reference/Values/filter-function/saturate
original_slug: Web/CSS/filter-function/saturate
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`saturate()`** permet d'accentuer ou de réduire la saturation d'une image. Le résultat de cette fonction est une valeur {{CSSxRef("&lt;filter-function&gt;")}}.

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
  - : Niveau de saturation, exprimé en nombre ({{CSSxRef("&lt;number&gt;")}}) ou en pourcentage ({{CSSxRef("&lt;percentage&gt;")}}). Une valeur inférieure à `100%` désature l'image, tandis qu'une valeur supérieure à `100%` la sursature. Une valeur de `0%` rend l'image totalement désaturée, tandis qu'une valeur de `100%` laisse l'image inchangée. La valeur initiale utilisée pour {{Glossary("interpolation", "l'interpolation")}} est `1`. La valeur par défaut est `1`.

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

Les autres fonctions {{CSSxRef("&lt;filter-function&gt;")}} pouvant être utilisées dans les valeurs des propriétés {{CSSxRef("filter")}} et {{CSSxRef("backdrop-filter")}} sont&nbsp;:

- {{CSSxRef("filter-function/blur", "blur()")}}
- {{CSSxRef("filter-function/brightness", "brightness()")}}
- {{CSSxRef("filter-function/contrast", "contrast()")}}
- {{CSSxRef("filter-function/drop-shadow", "drop-shadow()")}}
- {{CSSxRef("filter-function/grayscale", "grayscale()")}}
- {{CSSxRef("filter-function/hue-rotate", "hue-rotate()")}}
- {{CSSxRef("filter-function/invert", "invert()")}}
- {{CSSxRef("filter-function/opacity", "opacity()")}}
- {{CSSxRef("filter-function/sepia", "sepia()")}}
