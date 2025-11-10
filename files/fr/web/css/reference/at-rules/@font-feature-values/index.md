---
title: "@font-feature-values"
slug: Web/CSS/Reference/At-rules/@font-feature-values
original_slug: Web/CSS/@font-feature-values
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@font-feature-values`** permet d'utiliser un nom commun dans la propriété {{cssxref("font-variant-alternates")}} pour des fonctionnalités activées différemment en OpenType. Cela peut simplifier votre CSS lorsque vous utilisez plusieurs polices.

La règle `@font-feature-values` peut être utilisée soit au début de votre CSS, soit à l'intérieur de n'importe quelle règle conditionnelle CSS.

## Syntaxe

```css
@font-feature-values Font Name {
  font-display: swap;
  @styleset {
    nice-style: 12;
  }
  @swash {
    fancy: 2;
  }
}
```

Chaque bloc `@font-feature-values` peut contenir une liste de blocs de valeurs de fonctionnalités (listés ci-dessous), ainsi que le descripteur {{cssxref("@font-feature-values/font-display", "font-display")}}.

### Blocs liés aux caractéristiques

- `@swash`
  - : Définit un nom de fonctionnalité utilisable avec la notation fonctionnelle {{cssxref("font-variant-alternates", "swash()", "#swash")}} de {{cssxref("font-variant-alternates")}}. Une définition de valeur de fonctionnalité swash n'accepte qu'une seule valeur&nbsp;: `ident1: 2` est valide, mais `ident2: 2 4` ne l'est pas.
- `@annotation`
  - : Définit un nom de fonctionnalité utilisable avec la notation fonctionnelle {{cssxref("font-variant-alternates", "annotation()", "#annotation")}} de {{cssxref("font-variant-alternates")}}. Une définition de valeur de fonctionnalité annotation n'accepte qu'une seule valeur&nbsp;: `ident1: 2` est valide, mais `ident2: 2 4` ne l'est pas.
- `@ornaments`
  - : Définit un nom de fonctionnalité utilisable avec la notation fonctionnelle {{cssxref("font-variant-alternates", "ornaments()", "#ornaments")}} de {{cssxref("font-variant-alternates")}}. Une définition de valeur de fonctionnalité ornaments n'accepte qu'une seule valeur&nbsp;: `ident1: 2` est valide, mais `ident2: 2 4` ne l'est pas.
- `@stylistic`
  - : Définit un nom de fonctionnalité utilisable avec la notation fonctionnelle {{cssxref("font-variant-alternates", "stylistic()", "#stylistic")}} de {{cssxref("font-variant-alternates")}}. Une définition de valeur de fonctionnalité stylistic n'accepte qu'une seule valeur&nbsp;: `ident1: 2` est valide, mais `ident2: 2 4` ne l'est pas.
- `@styleset`
  - : Définit un nom de fonctionnalité utilisable avec la notation fonctionnelle {{cssxref("font-variant-alternates", "styleset()", "#styleset")}} de {{cssxref("font-variant-alternates")}}. Une définition de valeur de fonctionnalité styleset accepte un nombre illimité de valeurs&nbsp;: `ident1: 2 4 12 1` correspond aux valeurs OpenType `ss02`, `ss04`, `ss12` et `ss01`. Les valeurs supérieures à `99` sont valides mais ne correspondent à aucune valeur OpenType et sont ignorées.
- `@character-variant`
  - : Définit un nom de fonctionnalité utilisable avec la notation fonctionnelle {{cssxref("font-variant-alternates", "character-variant()", "#character-variant")}} de {{cssxref("font-variant-alternates")}}. Une définition de valeur de fonctionnalité character-variant accepte une ou deux valeurs&nbsp;: `ident1: 3` correspond à `cv03=1`, et `ident2: 2 4` correspond à `cv02=4`, mais `ident2: 2 4 5` est invalide.

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Utiliser @styleset dans une règle @font-feature-values

```css
/* Règle pour « nice-style » dans Font One */
@font-feature-values Font One {
  @styleset {
    nice-style: 12;
  }
}

/* Règle pour « nice-style » dans Font Two */
@font-feature-values Font Two {
  @styleset {
    nice-style: 4;
  }
}

/* Appliquer les règles avec une seule déclaration */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
```

## Specifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{cssxref("font-variant-alternates")}} qui utilise les valeurs définies par cette règle.
