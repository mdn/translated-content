---
title: font-palette
slug: Web/CSS/Reference/Properties/font-palette
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-palette`** permet de définir l'une des nombreuses palettes contenues dans une [police de couleur <sup>(angl.)</sup>](https://www.colorfonts.wtf/) qu'un agent utilisateur peut utiliser pour la police. Les utilisateur·ice·s peuvent aussi modifier les valeurs d'une palette ou créer une nouvelle palette en utilisant la règle {{CSSxRef("@font-palette-values")}}.

> [!NOTE]
> Une palette `font-palette` est prioritaire lors de la coloration d'une police. La propriété {{CSSxRef("color")}} ne remplacera pas une palette de police, même si elle est définie avec {{CSSxRef("important", "!important")}}.

## Syntaxe

```css
/* Utilisation d'une palette définie par la police */
font-palette: normal;

/* Utilisation d'une palette définie par l'utilisateur */
font-palette: --one;

/* Création d'une nouvelle palette en mélangeant deux autres */
font-palette: palette-mix(in lch, --blue, --yellow);
```

### Valeurs

- `normal`
  - : Définit la palette de couleurs par défaut ou la coloration par défaut des glyphes (définie par le·la créateur·ice de la police) à utiliser pour la police. Avec ce réglage, la palette à l'index 0 de la police est utilisée.
- `light`
  - : Définit la première palette de la police qui correspond à «&nbsp;clair&nbsp;» à utiliser pour la police. Certaines polices contiennent des métadonnées qui identifient une palette comme adaptée à un fond clair (proche du blanc). Si la police ne possède pas ces métadonnées, la valeur `light` agit comme `normal`.
- `dark`
  - : Définit la première palette de la police qui correspond à «&nbsp;sombre&nbsp;» à utiliser pour la police. Certaines polices contiennent des métadonnées qui identifient une palette comme adaptée à un fond sombre (proche du noir). Si la police ne possède pas ces métadonnées, la valeur agit comme `normal`.
- `<palette-identifier>`
  - : Permet de définir vos propres valeurs pour la palette de police en utilisant la règle {{CSSxRef("@font-palette-values")}}. Cette valeur est définie au format {{CSSxRef("&lt;dashed-ident&gt;")}}.
- {{CSSxRef("font-palette/palette-mix", "palette-mix()")}} {{Experimental_Inline}}
  - : Crée une nouvelle valeur `font-palette` en mélangeant deux valeurs `font-palette` selon des pourcentages définis et des méthodes d'interpolation de couleurs.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir une palette sombre

Cet exemple permet d'utiliser la première palette marquée comme _sombre_ (fonctionne mieux sur un fond proche du noir) par le·la créateur·ice de la police.

```css
@media (prefers-color-scheme: dark) {
  .banner {
    font-palette: dark;
  }
}
```

### Animer entre deux palettes

Cet exemple montre comment animer les changements de valeur `font-palette` pour créer une animation fluide de la police.

#### HTML

Le HTML contient un seul paragraphe de texte à animer&nbsp;:

```html
<p>animation<br />color-palette</p>
```

#### CSS

Dans le CSS, on importe une [police de couleur <sup>(angl.)</sup>](https://www.colorfonts.wtf/) appelée [Nabla <sup>(angl.)</sup>](https://nabla.typearture.com/) depuis [Google Fonts <sup>(angl.)</sup>](https://fonts.google.com/?coloronly=true), et on définit deux valeurs personnalisées `font-palette` avec la règle {{CSSxRef("@font-palette-values")}}. On crée ensuite {{CSSxRef("@keyframes")}} pour animer entre ces deux palettes et appliquer cette animation au paragraphe.

```css
@import "https://fonts.googleapis.com/css2?family=Nabla&display=swap";

@font-palette-values --blue-nabla {
  font-family: "Nabla";
  base-palette: 2; /* c'est la palette bleue de Nabla */
}

@font-palette-values --grey-nabla {
  font-family: "Nabla";
  base-palette: 3; /* c'est la palette grise de Nabla */
}

@keyframes animate-palette {
  from {
    font-palette: --grey-nabla;
  }

  to {
    font-palette: --blue-nabla;
  }
}

p {
  font-family: "Nabla", fantasy;
  font-size: 5rem;
  margin: 0;
  text-align: center;
  animation: animate-palette 4s infinite alternate linear;
}
```

#### Résultat

Le résultat ressemble à ceci&nbsp;:

{{EmbedLiveSample("Animer entre deux palettes", "100%", 300)}}

> [!NOTE]
> Les navigateurs qui implémentent encore l'animation `font-palette` discrète basculeront entre les deux palettes au lieu d'animer en douceur.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction {{CSSxRef("font-palette/palette-mix","palette-mix()")}}
- La règle {{CSSxRef("@font-palette-values")}}
- Le descripteur {{CSSxRef("@font-palette-values/base-palette", "base-palette")}}
- Le descripteur {{CSSxRef("@font-palette-values/font-family", "font-family")}}
- Le descripteur {{CSSxRef("@font-palette-values/override-colors", "override-colors")}}
