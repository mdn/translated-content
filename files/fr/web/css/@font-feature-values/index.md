---
title: "@font-feature-values"
slug: Web/CSS/@font-feature-values
---

{{CSSRef}}

La [règle @](/fr/docs/Web/CSS/At-rule) **`@font-feature-values`** permet aux auteurs d'utiliser un nom personnalisé dans une règle utilisant la propriété {{cssxref("font-variant-alternates")}} afin de régler finement les caractéristiques OpenType. Elle permet de simplifier les feuilles de style lorsqu'on utilise plusieurs polices.

```css
@font-feature-values Font One {
  /* On active la caractéristique nice-style
   sur Font One */
  @styleset {
    nice-style: 12;
  }
}

@font-feature-values Font Two {
  /* On active la caractéristique nice-style
   sur Font Two */
  @styleset {
    nice-style: 4;
  }
}

…
/* Indépendamment de la police */
.nice-look {
  font-variant-alternates: styleset(nice-style);
}
```

La règle @ `@font-feature-values` peut être utilisée au plus haut niveau d'une feuille de style et aussi au sein [d'un groupe de règles conditionnelles](/fr/docs/Web/CSS/At-rule).

## Syntaxe

### Blocs liés aux caractéristiques

- `@swash`
  - : Indique le nom d'une caractéristique qui fonctionnera avec la notation fonctionnelle {{cssxref("font-variant-alternates", "swash()", "#swash()")}}. Une telle caractéristique est définie avec une seule valeur : `ident1: 2` est valide alors que `ident2: 2 4` est invalide.
- `@annotation`
  - : Indique le nom d'une caractéristique qui fonctionnera avec la notation fonctionnelle {{cssxref("font-variant-alternates", "annotation()", "#annotation()")}}. Une telle caractéristique est définie avec une seule valeur : `ident1: 2` est valide alors que `ident2: 2 4` est invalide.
- `@ornaments`
  - : Indique le nom d'une caractéristique qui fonctionnera avec la notation fonctionnelle {{cssxref("font-variant-alternates", "ornaments()", "#ornaments()")}}. La caractéristique d'ornement est définie avec une seule valeur : `ident1: 2` est valide alors que `ident2: 2 4` est invalide.
- `@stylistic`
  - : Indique le nom d'une caractéristique qui fonctionnera avec la notation fonctionnelle {{cssxref("font-variant-alternates", "stylistic()", "#stylistic()")}}. Une telle caractéristique est définie avec une seule valeur : `ident1: 2` est valide alors que `ident2: 2 4` est invalide.
- `@styleset`
  - : Indique le nom d'une caractéristique qui fonctionnera avec la notation fonctionnelle {{cssxref("font-variant-alternates", "styleset()", "#styleset()")}}. Plusieurs valeurs peuvent être utilisées pour cette caractéristique : `ident1: 2 4 12 1` correspondra aux valeurs OpenType `ss02`, `ss04`, `ss12`, `ss01`. Les valeurs supérieures à `99` sont valides mais ne correspondent à aucune valeur OpenType et sont donc ignorées.
- `@character-variant`
  - : Indique le nom d'une caractéristique qui fonctionnera avec la notation fonctionnelle {{cssxref("font-variant-alternates", "character-variant()", "#character-variant()")}}. Pour cette définition, on peut utiliser une ou deux valeurs : `ident1: 2` correspond à `cv02=1` et `ident2: 2 4` correspond à `cv02)4`, en revanche `ident2: 2 4 5` est invalide.

### Syntaxe formelle

{{csssyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{cssxref("font-variant-alternates")}} qui utilise la valeur définie par cette règle @.
