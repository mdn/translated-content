---
title: <dashed-ident>
slug: Web/CSS/dashed-ident
l10n:
  sourceCommit: 70285e396b5c97675e90b85d573be42078e0168e
---

Le [type de données](/fr/docs/Web/CSS/CSS_values_and_units/CSS_data_types) [CSS](/fr/docs/Web/CSS) **`<dashed-ident>`** désigne une chaîne de caractères arbitraire utilisée comme {{glossary("identifier", "identifiant")}}.

## Syntaxe

La syntaxe de `<dashed-ident>` est similaire à celle des identifiants CSS (comme les noms de propriétés), à l'exception près qu'elle est [sensible à la casse](https://fr.wikipedia.org/wiki/Sensibilit%C3%A9_%C3%A0_la_casse). Elle commence par deux tirets, suivis de l'identifiant défini par l'utilisateur·ice.

Le double tiret au début permet de les identifier facilement lors de la lecture d'un bloc de code CSS et aide à éviter les conflits de noms avec les mots-clés CSS standards.

Comme pour [`<custom-ident>`](/fr/docs/Web/CSS/custom-ident), les `<dashed-ident>` sont définis par l'utilisateur·ice, mais contrairement à `<custom-ident>`, [CSS](/fr/docs/Web/CSS) ne définira jamais de `<dashed-ident>`.

## Exemples

### Utilisation avec les propriétés personnalisées CSS

Lorsque `<dashed-ident>` est utilisé avec les [propriétés personnalisées CSS](/fr/docs/Web/CSS/CSS_cascading_variables/Using_CSS_custom_properties), la propriété est d'abord déclarée puis utilisée dans une [fonction CSS `var()`](/fr/docs/Web/CSS/var).

```css
html {
  --primary-color: red;
  --secondary-color: blue;
  --tertiary-color: green;
}

h1,
h4 {
  color: var(--primary-color);
}

h2,
h5 {
  color: var(--secondary-color);
}

h3,
h6 {
  color: var(--tertiary-color);
}
```

### Utilisation avec `@color-profile`

Lorsque `<dashed-ident>` est utilisé avec la règle at [`@color-profile`](/fr/docs/Web/CSS/@color-profile), la règle est d'abord déclarée puis utilisée dans une [fonction CSS `color()`](/fr/docs/Web/CSS/color_value/color).

```css
@color-profile --my-color-profile {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--my-color-profile 0% 70% 20% 0%);
}
```

### Utilisation avec `@font-palette-values`

Lorsque `<dashed-ident>` est utilisé avec la règle at [`@font-palette-values`](/fr/docs/Web/CSS/@font-palette-values), la règle est d'abord déclarée puis utilisée comme valeur pour la propriété [`font-palette`](/fr/docs/Web/CSS/font-palette).

```css
@font-palette-values --my-palette {
  font-family: Bixa;
  base-palette: 1;
  override-colors: 0 red;
}

h1,
h2,
h3,
h4 {
  font-palette: --my-palette;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

_Ce type n'est pas un véritable type mais un type de commodité utilisé pour simplifier la définition d'autres syntaxes CSS&nbsp;; il n'existe donc pas d'informations de compatibilité des navigateurs pour celui-ci._

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;ident&gt;")}}
- Le type de donnée {{CSSxRef("&lt;custom-ident&gt;")}}
