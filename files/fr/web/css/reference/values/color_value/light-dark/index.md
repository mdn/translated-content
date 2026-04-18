---
title: light-dark()
slug: Web/CSS/Reference/Values/color_value/light-dark
l10n:
  sourceCommit: f07826b83e8d2af50d69e3ff28c527d4ef572c19
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`light-dark()`** accepte deux couleurs ou deux images et retourne une couleur ou une image en fonction du schéma de couleurs actif, sans avoir besoin d'une [fonctionnalité média](/fr/docs/Web/CSS/Guides/Media_queries/Using#cibler_des_types_de_média) [`prefers-color-scheme`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme).

## Syntaxe

```css
/* Valeur de couleurs nommées */
light-dark(
  black,
  white
);

/* Valeurs de couleurs RGB */
light-dark(
  rgb(0 0 0),
  rgb(255 255 255)
);

/* Valeurs d'URL d'image */
light-dark(
  url("light-icon.png"),
  url("dark-icon.png")
);

/* Valeurs de dégradés linéaires */
light-dark(
  linear-gradient(135deg, ghostwhite 20%, tomato),
  linear-gradient(45deg, darkslategray 20%, gold)
);

/* Propriétés personnalisées */
light-dark(
  var(--light),
  var(--dark)
);
```

### Valeurs

La fonction `light-dark()` a deux formes&nbsp;:

- Accepte deux valeurs `<color>`&nbsp;:
  - `<color>` (clair)
    - : La valeur {{CSSxRef("&lt;color&gt;")}} utilisée lorsque le {{CSSxRef("color-scheme")}} vaut `light` ou qu'aucune préférence n'est définie.
  - `<color>` (sombre)
    - : La valeur {{CSSxRef("&lt;color&gt;")}} utilisée lorsque le {{CSSxRef("color-scheme")}} vaut `dark`.
- Accepte deux valeurs `<image>`&nbsp;:
  - `<image>` (clair)
    - : La valeur {{CSSxRef("&lt;image&gt;")}} utilisée lorsque le {{CSSxRef("color-scheme")}} vaut `light` ou qu'aucune préférence n'est définie.
  - `<image>` (sombre)
    - : La valeur {{CSSxRef("&lt;image&gt;")}} utilisée lorsque le {{CSSxRef("color-scheme")}} vaut `dark`.
  - `none`
    - : Le mot-clé `none` produit une image entièrement transparente sans taille naturelle.

## Description

Les utilisateur·ice·s peuvent indiquer leur préférence de schéma de couleurs avec les paramètres de leur système d'exploitation (par exemple, mode clair ou sombre) ou les paramètres de leur agent utilisateur. La fonction `light-dark()` permet de fournir soit deux valeurs de couleur où toute valeur `<color>` est acceptée, soit deux valeurs d'image où toute valeur `<image>` est acceptée. La fonction `light-dark()` retourne la première valeur si le schéma de couleurs utilisé est `light` ou si aucune préférence n'est définie, et la deuxième valeur si le schéma de couleurs utilisé est `dark`.

Pour activer la prise en charge de la fonction de couleur `light-dark()`, la propriété {{CSSxRef("color-scheme")}} doit avoir une valeur de `light dark`, généralement définie sur la [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) {{CSSxRef(":root")}}.

```css
:root {
  color-scheme: light dark;
}
body {
  color: light-dark(#333b3c, #efefec);
  background-color: light-dark(#efedea, #223a2c);
}
```

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir des couleurs selon le thème

Par défaut dans les navigateurs qui la prennent en charge, la couleur retournée par la fonction de couleur `light-dark()` dépend de la préférence de l'utilisateur·rice définie dans les paramètres du système d'exploitation (par exemple, mode clair ou sombre) ou dans les réglages de l'agent utilisateur. Vous pouvez aussi modifier ce réglage dans les {{Glossary("developer tools", "outils de développement")}} du navigateur.

#### HTML

On inclut trois sections pour cibler les couleurs claires, sombres et celles sélectionnées selon la préférence de l'utilisateur·rice.

```html
<h1>La fonction CSS <code>light-dark()</code></h1>
<section>
  <h2>Automatique</h2>
  <p>Cette section réagit au réglage du système ou de l'agent utilisateur.</p>
</section>
<section class="light">
  <h2>Clair</h2>
  <p>Cette section sera claire grâce à <code>color-scheme: light;</code>.</p>
</section>
<section class="dark">
  <h2>Sombre</h2>
  <p>Cette section sera sombre grâce à <code>color-scheme: dark;</code>.</p>
</section>
```

#### CSS

On définit des couleurs pour les thèmes clair et sombre, puis on définit aussi `color-scheme` sur `:root` pour activer la fonction `light-dark()` sur tout le document.

```css-nolint
:root {
  /* doit être défini pour basculer entre clair et sombre */
  color-scheme: light dark;

  --light-bg: ghostwhite;
  --light-color: darkslategray;
  --light-code: tomato;

  --dark-bg: darkslategray;
  --dark-color: ghostwhite;
  --dark-code: gold;
}
* {
  background-color: light-dark(var(--light-bg), var(--dark-bg));
  color: light-dark(var(--light-color), var(--dark-color));
}
code {
  color: light-dark(var(--light-code), var(--dark-code));
}
```

En plus d'activer la fonction `light-dark()`, la propriété `color-scheme` permet d'outrepasser le thème de l'utilisateur·rice pour certaines sections du document. Forcer une section à n'utiliser qu'un thème clair ou sombre se fait en définissant la propriété `color-scheme` à `light` ou `dark`.

> [!NOTE]
> Cela ne devrait généralement pas être fait, c'est uniquement à titre de démonstration. Si l'utilisateur·rice a exprimé une préférence, il ne faut généralement pas la surcharger.

```css
.light {
  /* force le thème clair */
  color-scheme: light;
}
.dark {
  /* force le thème sombre */
  color-scheme: dark;
}
```

```css hidden
section {
  padding: 0.8rem;
}
```

#### Résultat

{{EmbedLiveSample("Définir des couleurs selon le thème", "100%", 500)}}

### Définir un arrière-plan en dégradé en fonction du thème

Cet exemple utilise le même code HTML que l'exemple précédent mais inclut un `<div>` au lieu d'un `<p>`.

```html hidden
<h1>La fonction CSS <code>light-dark()</code> avec des images</h1>
<p class="supports">
  Votre navigateur ne prend pas en charge <code>light-dark()</code> avec des
  images.
</p>
<div class="wrapper">
  <section>
    <h2>Automatique</h2>
    <div></div>
  </section>
  <section class="light">
    <h2>Clair</h2>
    <div></div>
  </section>
  <section class="dark">
    <h2>Sombre</h2>
    <div></div>
  </section>
</div>
```

#### CSS

```css-nolint hidden
:root {
  /* doit être défini pour basculer entre clair et sombre */
  color-scheme: light dark;

  --light-bg: ghostwhite;
  --light-color: darkslategray;
  --light-code: tomato;

  --dark-bg: darkslategray;
  --dark-color: ghostwhite;
  --dark-code: gold;
}
* {
  background-color: light-dark(var(--light-bg), var(--dark-bg));
  color: light-dark(var(--light-color), var(--dark-color));
}
.wrapper {
  display: flex;
  justify-content: space-around;
  padding: 0.8rem;
}
.light {
  /* force le thème clair */
  color-scheme: light;
}
.dark {
  /* force le thème sombre */
  color-scheme: dark;
}
section {
  width: 25%;
  padding: 5px;
  color: light-dark(
    var(--light-code),
    var(--dark-code)
  );
  border: 2px solid light-dark(var(--light-code), var(--dark-code));
}
@supports (background-image: light-dark(url("light.png"), url("dark.png"))) {
  .supports {display:none;}
}
```

Tout d'abord, nous définissons des valeurs `linear-gradient()` pour les thèmes clair et sombre en tant que propriétés personnalisées.

```css
:root {
  /* dégradés clair et sombre */
  --light-grad: linear-gradient(135deg, var(--light-bg) 20%, var(--light-code));
  --dark-grad: linear-gradient(45deg, var(--dark-bg) 30%, var(--dark-code));
}
```

```css hidden
section div {
  width: 80%;
  aspect-ratio: 1/1;
  margin: auto;
  border: 1px solid light-dark(var(--light-code), var(--dark-code));
}
@supports not (
  background-image: light-dark(url("light.png"), url("dark.png"))
) {
  section div {
    width: 60%;
  }
}
```

Ensuite, nous utilisons les propriétés personnalisées avec `light-dark()` pour définir la propriété `background-image` en fonction du thème actif.

```css-nolint
section div {
  background-image: light-dark(
    var(--light-grad),
    var(--dark-grad)
  );
}
```

#### Résultat

{{EmbedLiveSample("Définir un arrière-plan en dégradé en fonction du thème", "100%", 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("color-scheme")}}
- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- Le type de donnée {{CSSxRef("&lt;image&gt;")}}
- Le module [des couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- La fonctionnalité {{CSSxRef("@media")}} [`prefers-contrast`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast)
- La fonction [`contrast()`](/fr/docs/Web/CSS/Reference/Values/filter-function/contrast)
- [WCAG&nbsp;: contraste des couleurs](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Propriétés personnalisées CSS](/fr/docs/Web/CSS/Reference/Properties/--*) et {{CSSxRef("var")}}
