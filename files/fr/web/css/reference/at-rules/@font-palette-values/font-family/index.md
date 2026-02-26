---
title: font-family
slug: Web/CSS/Reference/At-rules/@font-palette-values/font-family
l10n:
  sourceCommit: 0b926fc3e79782401461d389fc9f17d522b39ed3
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`font-family`** de la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{CSSxRef("@font-palette-values")}} est utilisé pour spécifier à quelle famille de police les valeurs de palette doivent s'appliquer. Cette valeur doit correspondre exactement à celle utilisée lors de la définition de la propriété CSS {{CSSxRef("font-family")}}.

## Syntaxe

```css
@font-palette-values --Dark-mode {
  font-family: "Bungee Spice";
  /* autres paramètres de palette qui suivent */
}
```

Les autres valeurs de palette qui suivent ne s'appliquent qu'à la famille de police spécifiée. Vous pouvez créer des [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{CSSxRef("@font-palette-values")}} pour d'autres familles de police en utilisant le même {{CSSxRef("dashed-ident", "&lt;dashed-ident&gt;")}}. Cela signifie que si vous avez plusieurs polices couleur, vous pouvez utiliser le même identifiant pour chacune.

### Valeurs

- `<family-name>`
  - : Définit le nom de la [famille de police](/fr/docs/Web/CSS/Reference/Properties/font-family).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utiliser des noms de famille identiques

Dans cet exemple, lorsque le descripteur `font-family` est utilisé dans la règle [@font-palette-values](/fr/docs/Web/CSS/Reference/At-rules/@font-palette-values), la même valeur est utilisée pour la propriété `font-family` que lors de sa déclaration.

#### HTML

```html
<h2>C'est épicé</h2>
<h2 class="extra-spicy">C'est très épicé&nbsp;!</h2>
```

#### CSS

```css
@import "https://fonts.googleapis.com/css2?family=Bungee+Spice";
@font-palette-values --bungee-extra-spicy {
  font-family: "Bungee Spice";
  override-colors:
    0 darkred,
    1 red;
}

h2 {
  font-family: "Bungee Spice", fantasy;
}

h2.extra-spicy {
  font-palette: --bungee-extra-spicy;
}
```

#### Résultat

{{EmbedLiveSample("utiliser_des_noms_de_famille_identiques")}}

### Utiliser le même identifiant de palette pour plusieurs familles de police

Dans cet exemple, deux règles [@font-palette-values](/fr/docs/Web/CSS/Reference/At-rules/@font-palette-values) sont définies pour deux familles de police, mais les deux utilisent le même identifiant dashed-ident, `--Dark Mode`. Cela permet d'appliquer la propriété [font-palette](/fr/docs/Web/CSS/font-palette) à plusieurs éléments (`h1` et `h2` ici) en même temps. C'est utile si vous souhaitez adapter les couleurs des polices à l'identité visuelle de votre site.

```css
@font-palette-values --Dark-Mode {
  font-family: "Bungee Spice";
  /* paramètres de palette pour Bungee Spice */
}

@font-palette-values --Dark-Mode {
  font-family: Bixa;
  /* paramètres de palette pour Bixa */
}

h1,
h2 {
  font-palette: --Dark-Mode;
}

h1 {
  font-family: "Bungee Spice", fantasy;
}

h2 {
  font-family: Bixa, fantasy;
}
```

## Specifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le descripteur {{CSSxRef("@font-face/font-family", "font-family")}}
- La règle {{CSSxRef("@font-palette-values", "@font-palette-values")}}
- Le descripteur {{CSSxRef("@font-palette-values/override-colors", "override-colors")}}
- La propriété {{CSSxRef("font-palette")}}
- La propriété API {{DOMxRef("CSSFontPaletteValuesRule.fontFamily")}}
