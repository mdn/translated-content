---
title: light-dark()
slug: Web/CSS/Reference/Values/color_value/light-dark
original_slug: Web/CSS/color_value/light-dark
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

La [fonction de type `<color>`](/fr/docs/Web/CSS/Reference/Values/Functions#les_fonctions_de_couleur) [CSS](/fr/docs/Web/CSS) **`light-dark()`** permet de définir deux couleurs pour une propriété&nbsp;: elle retourne l'une des deux couleurs selon que le·a développeur·euse a défini un thème clair ou sombre, ou que l'utilisateur·rice a choisi un thème clair ou sombre, sans avoir besoin d'encapsuler les couleurs dans une requête [media feature](/fr/docs/Web/CSS/Guides/Media_queries/Using#cibler_des_types_de_média) [`prefers-color-scheme`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-color-scheme).
Les utilisateur·ice·s peuvent indiquer leur préférence de thème via les réglages de leur système d'exploitation (par exemple, mode clair ou sombre) ou de leur agent utilisateur. La fonction `light-dark()` permet de fournir deux valeurs de couleur, toute valeur `<color>` étant acceptée. La fonction CSS `light-dark()` retourne la première valeur si la préférence de l'utilisateur·rice est «&nbsp;clair&nbsp;» ou si aucune préférence n'est définie, et la seconde si la préférence est «&nbsp;sombre&nbsp;».

Pour activer la prise en charge de la fonction `light-dark()`, la propriété {{CSSXref("color-scheme")}} doit avoir la valeur `light dark`, généralement définie sur la pseudo-classe {{CSSXref(":root")}}.

```css
:root {
  color-scheme: light dark;
}
body {
  color: light-dark(#333b3c, #efefec);
  background-color: light-dark(#efedea, #223a2c);
}
```

## Syntaxe

```css
/* Couleurs nommées */
color: light-dark(black, white);

/* Couleurs RGB */
color: light-dark(rgb(0 0 0), rgb(255 255 255));

/* Variables personnalisées */
color: light-dark(var(--light), var(--dark));
```

### Valeurs

Notation fonctionnelle&nbsp;: `light-dark(couleur-claire, couleur-sombre)`

- `couleur-claire`
  - : Une valeur {{CSSXref("&lt;color&gt;")}} à utiliser pour {{CSSXref("color-scheme")}} clair.

- `couleur-sombre`
  - : Une valeur {{CSSXref("&lt;color&gt;")}} à utiliser pour {{CSSXref("color-scheme")}} sombre.

## Syntaxe formelle

{{CSSSyntax}}

## Exemple

### Définir des couleurs selon le thème

Par défaut dans les navigateurs qui la prennent en charge, la couleur retournée par la fonction de couleur `light-dark()` dépend de la préférence de l'utilisateur·rice définie dans les paramètres du système d'exploitation (par exemple, mode clair ou sombre) ou dans les réglages de l'agent utilisateur. Vous pouvez aussi modifier ce réglage dans les {{glossary("developer tools", "outils de développement")}} du navigateur.

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

{{EmbedLiveSample("définir_des_couleurs_selon_le_thème", "100%", 500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSXref("color-scheme")}}
- Le type de donnée {{CSSXref("&lt;color&gt;")}}
- [Module CSS colors](/fr/docs/Web/CSS/Guides/Colors)
- La propriété [`prefers-contrast`](/fr/docs/Web/CSS/Reference/At-rules/@media/prefers-contrast) de {{cssxref("@media")}}
- La fonction [`contrast()`](/fr/docs/Web/CSS/Reference/Values/filter-function/contrast)
- [WCAG&nbsp;: contraste des couleurs](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast)
- [Propriétés personnalisées CSS](/fr/docs/Web/CSS/Reference/Properties/--*) et {{cssxref("var")}}
