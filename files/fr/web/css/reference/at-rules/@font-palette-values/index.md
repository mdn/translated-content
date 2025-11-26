---
title: "@font-palette-values"
slug: Web/CSS/Reference/At-rules/@font-palette-values
original_slug: Web/CSS/@font-palette-values
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@font-palette-values`** permet de personnaliser les valeurs par défaut de la [palette de police](/fr/docs/Web/CSS/font-palette) créée par le·la créateur·ice de la police.

## Syntaxe

```css
@font-palette-values --identifier {
  font-family: Bixa;
}
.my-class {
  font-palette: --identifier;
}
```

La valeur [&lt;dashed-ident&gt;](/fr/docs/Web/CSS/Reference/Values/dashed-ident) est un identifiant défini par l'utilisateur·rice qui, bien qu'il ressemble à une [propriété personnalisée CSS](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), se comporte différemment et n'est pas utilisé dans une [fonction CSS var()](/fr/docs/Web/CSS/Reference/Values/var).

### Descripteurs

- {{cssxref("@font-palette-values/base-palette", "base-palette")}}
  - : Définit le nom ou l'index de la palette de base, créée par le·la créateur·ice de la police, à utiliser.
- {{cssxref("@font-palette-values/font-family", "font-family")}}
  - : Définit le nom de la famille de police à laquelle cette palette peut être appliquée. Un nom de `font-family` est requis pour que la règle `@font-palette-values` soit valide.
- {{cssxref("@font-palette-values/override-colors", "override-colors")}}
  - : Définit les couleurs de la palette de base à remplacer.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Remplacer les couleurs d'une palette existante

Cet exemple montre comment modifier certaines ou toutes les couleurs d'une police couleur.

#### HTML

```html
<p>couleurs par défaut</p>
<p class="alternate">couleurs alternatives</p>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Bungee+Spice";
p {
  font-family: "Bungee Spice", fantasy;
  font-size: 2rem;
}
@font-palette-values --Alternate {
  font-family: "Bungee Spice";
  override-colors:
    0 #00ffbb,
    1 #007744;
}
.alternate {
  font-palette: --Alternate;
}
```

#### Résultat

Lorsque vous remplacez les couleurs de la palette normale ou de la palette de base à l'index 0, il n'est pas nécessaire de déclarer quelle palette de base utiliser. Cela ne doit être fait que si vous remplacez une autre palette de base. Si vous remplacez toutes les couleurs, il n'est pas non plus nécessaire de spécifier la palette de base à utiliser.

{{EmbedLiveSample("remplacer_les_couleurs_dune_palette_existante")}}

## Specifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{cssxref("font-palette", "font-palette")}}
- Le descripteur {{cssxref("@font-palette-values/font-family", "font-family")}}
- Le descripteur {{cssxref("@font-palette-values/base-palette", "base-palette")}}
- Le descripteur {{cssxref("@font-palette-values/override-colors", "override-colors")}}
- {{domxref("CSSFontPaletteValuesRule")}}
