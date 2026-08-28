---
title: Fonction CSS `alpha()`
short-title: alpha()
slug: Web/CSS/Reference/Values/color_value/alpha
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`alpha()`** prend une couleur ({{CSSxRef("color_value","color")}}) d'origine et retourne cette même couleur avec un canal alpha (transparence) modifié. Les composants de couleur de la couleur d'origine sont conservés inchangés. Le résultat est dans le même espace colorimétrique que la couleur d'origine.

## Syntaxe

```css
/* Remplace alpha par une valeur fixe */
alpha(from red / 50%)
alpha(from var(--my-color) / 80%)

/* Dérive alpha par rapport à l'alpha de la couleur d'origine */
alpha(from var(--my-color) / calc(alpha * 0.5))
```

### Paramètres

- `from <color>`
  - : La syntaxe de [la couleur relative](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors) consiste en le mot-clé `from` suivi de n'importe quelle valeur {{CSSxRef("&lt;color&gt;")}} valide, définissant la **couleur d'origine**. Les composants de couleur de la couleur d'origine sont conservés inchangés dans le résultat&nbsp;; seul le canal alpha est affecté.

- `/ <alpha-value>` {{Optional_Inline}}
  - : Une valeur {{CSSxRef("&lt;alpha-value&gt;")}} définissant le niveau alpha de la couleur de sortie. Il peut s'agir d'un nombre (`<number>`) compris entre `0` et `1`, d'un `<percentage>` compris entre `0%` et `100%`, ou d'une expression {{CSSxRef("calc()")}}. Dans cette valeur, le mot-clé **`alpha`** peut être utilisé pour faire référence au canal alpha de la couleur d'origine en tant que `<number>` (où `1.0` équivaut à `100%`). Si cet argument est omis, l'alpha de la couleur d'origine est utilisé tel quel.

### Valeur de retour

Une valeur de couleur dans le même espace colorimétrique que la couleur d'origine, avec des composants de couleur identiques et une valeur de canal alpha modifiée comme défini.

## Description

La fonction `alpha()` est une fonction de [couleur relative](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors) qui permet d'ajuster la transparence de n'importe quelle couleur sans réécrire ses autres composants. Cela est particulièrement utile lorsque vous avez besoin d'une variante semi-transparente d'un jeton de conception ou d'une couleur de propriété personnalisée, et que vous souhaitez la dériver automatiquement de l'original plutôt que de maintenir une valeur distincte.

Dans l'argument de la valeur alpha, le mot-clé de composant `alpha` correspond au canal alpha de la couleur d'origine en tant que nombre ({{CSSxRef("&lt;number&gt;")}}) dans la plage `[0, 1]`. Cela vous permet d'exprimer l'alpha de sortie par rapport à l'entrée, par exemple en le divisant par deux avec `calc(alpha * 0.5)`, ou en le limitant avec `clamp(0.2, alpha, 0.8)`.

Contrairement à la syntaxe générale des [couleurs relatives](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors) (par ex., `oklch(from ...)`), la fonction `alpha()` n'expose pas les mots-clés des canaux de couleur individuels de l'espace colorimétrique de la couleur d'origine. Elle ne s'occupe que du canal alpha, en conservant le reste de la couleur intact.

La valeur de retour est toujours dans le même espace colorimétrique que la couleur d'origine. Par exemple, si la couleur d'origine est une couleur [`oklch()`](/fr/docs/Web/CSS/Reference/Values/color_value/oklch), le résultat est également résolu en OKLCh, avec la même luminosité, chroma et teinte.

## Exemples

### Remplacer l'alpha d'une couleur

Dans cet exemple, nous définissons deux couleurs. La deuxième couleur est définie en passant la première couleur dans la fonction `alpha()`, en réglant son canal alpha à une valeur fixe de `80%` dans le processus. Les deux couleurs sont définies comme la {{CSSxRef("background-color")}} de deux éléments HTML {{HTMLElement("div")}} pour montrer la différence.

```html live-sample___replace-alpha
<div class="boite1">Origine</div>
<div class="boite2">Alpha fixe à 80%</div>
```

```css live-sample___replace-alpha
:root {
  --ma-couleur: oklch(60% 0.25 315 / 0.3);

  /* Même couleur, mais avec alpha réglé à 80% */
  --ma-couleur-80: alpha(from var(--ma-couleur) / 80%);
}

.boite1 {
  background-color: var(--ma-couleur);
}

.boite2 {
  background-color: var(--ma-couleur-80);
}
```

```css hidden live-sample___replace-alpha live-sample___derive-alpha
body {
  font-family: sans-serif;
  display: flex;
  gap: 10%;
  justify-content: center;
}

div {
  width: 40%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

{{EmbedLiveSample("replace-alpha", "100%", 100)}}

### Dériver une variante semi-transparente

Cet exemple est très similaire au précédent, sauf que cette fois, l'alpha de la deuxième couleur est calculé comme la moitié de l'alpha de la première couleur, en utilisant le mot-clé de composant `alpha` à l'intérieur d'une expression `calc()`.

```html live-sample___derive-alpha
<div class="boite1">Origine</div>
<div class="boite2">Alpha dérivée à 50%</div>
```

```css live-sample___derive-alpha
:root {
  --ma-couleur: oklch(60% 0.25 315 / 0.8);

  /* Réduire de moitié l'opacité de --ma-couleur */
  --ma-couleur-moitié-opacité: alpha(
    from var(--ma-couleur) / calc(alpha * 0.5)
  );
}

.boite1 {
  background-color: var(--ma-couleur);
}

.boite2 {
  background-color: var(--ma-couleur-moitié-opacité);
}
```

{{EmbedLiveSample("derive-alpha", "100%", 100)}}

### Faire disparaître une couleur au survol

Dans cet exemple, l'arrière-plan d'un élément disparaît à `40%` d'opacité au survol de {{CSSxRef(":hover")}}, tandis que la couleur elle-même reste la même.

```html live-sample___fade-on-hover
<button class="carte">Survolez-moi</button>
```

```css live-sample___fade-on-hover
:root {
  --marque: oklch(55% 0.22 270);
}

.carte {
  background-color: var(--marque);
  color: white;
  padding: 1rem 2rem;
  border: none;
  border-radius: 0.5rem;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background-color 0.3s;
}

.carte:hover {
  background-color: alpha(from var(--marque) / 40%);
}
```

```css hidden live-sample___fade-on-hover
body {
  padding: 2rem;
}
```

```css hidden live-sample___replace-alpha live-sample___derive-alpha live-sample___fade-on-hover
@supports not (color: alpha(from red / 50%)) {
  body::before {
    font-family: sans-serif;
    content: "Votre navigateur ne prend pas en charge la fonction CSS alpha().";
    background-color: wheat;
    padding: 1rem 0;
    text-align: center;

    z-index: 1;
    position: fixed;
    inset: 30% 0 auto;
  }
}
```

{{EmbedLiveSample("fade-on-hover", "100%", 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Type de donnée {{CSSxRef("&lt;color&gt;")}}
- Type de donnée {{CSSxRef("&lt;alpha-value&gt;")}}
- [Syntaxe des couleurs relatives](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors)
- Le module [des couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- [Les propriétés personnalisées CSS](/fr/docs/Web/CSS/Reference/Properties/--*) et la fonction {{CSSxRef("var()")}}
