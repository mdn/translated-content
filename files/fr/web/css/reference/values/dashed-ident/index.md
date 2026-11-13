---
title: Type CSS `<dashed-ident>`
short-title: <dashed-ident>
slug: Web/CSS/Reference/Values/dashed-ident
l10n:
  sourceCommit: 35cd8b781219157e42b289364754cff862c2dd1a
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<dashed-ident>`** est un {{CSSxRef("&lt;custom-ident&gt;")}} sensible à la casse commençant par deux tirets et désigne une chaîne de caractères arbitraire utilisée comme {{Glossary("identifier", "identifiant")}}.

## Syntaxe

La syntaxe de `<dashed-ident>` est similaire à celle des identifiants CSS (comme les noms de propriétés), à l'exception près qu'elle est sensible à la casse. Il s'agit d'un identifiant défini par l'utilisateur·ice précédé de deux tirets (`--`).

Le double tiret au début permet de les identifier facilement lors de la lecture d'un bloc de code CSS et aide à éviter les conflits de noms avec les mots-clés CSS standards.

Comme pour {{CSSxRef("&lt;custom-ident&gt;")}}, les `<dashed-ident>` sont définis par l'utilisateur·ice. Cependant, certains `<custom-ident>` sont définis par le langage CSS lui-même&nbsp;; les `<dashed-ident>` ne sont jamais définis dans CSS.

## Exemples

### Utiliser les propriétés personnalisées CSS

Lorsqu'un `<dashed-ident>` est utilisé comme une [propriété personnalisée CSS](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), la propriété est d'abord déclarée, puis le `<dashed-ident>` est utilisé dans une [fonction CSS `var()`](/fr/docs/Web/CSS/Reference/Values/var).

```css
html {
  --couleur-primaire: red;
  --couleur-secondaire: blue;
  --couleur-tertiaire: green;
}

h1,
h4 {
  color: var(--couleur-primaire);
}

h2,
h5 {
  color: var(--couleur-secondaire);
}

h3,
h6 {
  color: var(--couleur-tertiaire);
}
```

### Utiliser `@color-profile`

Lorsqu'un `<dashed-ident>` est utilisé avec la règle {{CSSxRef("@color-profile")}}, la règle est d'abord déclarée, puis le `<dashed-ident>` est utilisé dans une [fonction CSS `color()`](/fr/docs/Web/CSS/Reference/Values/color_value/color).

```css
@color-profile --mon-profil-couleur {
  src: url("https://example.org/SWOP2006_Coated5v2.icc");
}

.header {
  background-color: color(--mon-profil-couleur 0% 70% 20% 0%);
}
```

### Utiliser `@font-palette-values`

Lorsqu'un `<dashed-ident>` est utilisé avec la règle {{CSSxRef("@font-palette-values")}}, la règle est d'abord déclarée, puis le `<dashed-ident>` est utilisé comme valeur pour la propriété {{CSSxRef("font-palette")}}.

```css
@font-palette-values --ma-palette {
  font-family: Bixa;
  base-palette: 1;
  override-colors: 0 red;
}

h1,
h2,
h3,
h4 {
  font-palette: --ma-palette;
}
```

### Utiliser `env()` et `param()`

Lorsqu'un `<dashed-ident>` est utilisé dans une ressource externe dans une fonction CSS {{CSSxRef("env")}}, il peut être mis à jour en utilisant la fonction CSS {{CSSxRef("param")}}.

```svg
<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path fill="env(--couleur, black)" d="..." />
</svg>
```

```css
path:hover {
  link-parameters: param(--couleur, tomato);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

_Ce type n'est pas un véritable type mais un type de commodité utilisé pour simplifier la définition d'autres syntaxes CSS&nbsp;; il n'existe donc pas d'informations de compatibilité des navigateurs pour celui-ci._

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;ident&gt;")}}
- Le type de donnée {{CSSxRef("&lt;custom-ident&gt;")}}
