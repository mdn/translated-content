---
title: <generic-family>
slug: Web/CSS/Reference/Values/generic-family
original_slug: Web/CSS/generic-family
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<generic-family>`** représente les mots-clés des familles de polices génériques utilisés dans la propriété abrégée {{CSSxRef("font")}} et la propriété longue {{CSSxRef("font-family")}}. Le `<generic-family>` désigne une ou plusieurs polices installées localement appartenant à cette catégorie.

## Syntaxe

### Valeurs

Le type de donnée {{Glossary("enumerated", "énuméré")}} `<generic-family>` se définit à l'aide de l'une des valeurs listées ci-dessous&nbsp;:

- `serif`
  - : Une «&nbsp;serif&nbsp;» est une petite ligne ou un empattement ajouté à l'extrémité d'un trait principal d'une lettre. Dans les polices à empattement, les glyphes présentent des terminaisons, des extrémités évasées ou effilées. Exemples&nbsp;: Lucida Bright, Lucida Fax, Palatino, Palatino Linotype, Palladio et URW Palladio.

- `sans-serif`
  - : Police sans empattement&nbsp;: les glyphes ont des extrémités simples, sans ornement. Exemples&nbsp;: Open Sans, Fira Sans, Lucida Sans, Lucida Sans Unicode, Trebuchet MS, Liberation Sans et Nimbus Sans L.

- `monospace`
  - : Tous les glyphes ont la même largeur fixe. Exemples&nbsp;: Fira Mono, DejaVu Sans Mono, Menlo, Consolas, Liberation Mono, Monaco et Lucida Console.

- `cursive`
  - : Les glyphes des polices cursives utilisent généralement un style manuscrit ou calligraphié, et le résultat ressemble davantage à une écriture à la main (stylo ou pinceau) qu'à une composition imprimée. CSS utilise le terme «&nbsp;cursive&nbsp;» pour toute police manuscrite, y compris celles sans liaison entre les lettres. Exemples&nbsp;: Brush Script MT, Brush Script Std, Lucida Calligraphy, Lucida Handwriting et Apple Chancery.

- `fantasy`
  - : Les polices «&nbsp;fantasy&nbsp;» sont principalement décoratives et proposent des représentations ludiques des caractères. Exemples&nbsp;: Papyrus, Herculanum, Party LET, Curlz MT, Harrington et Comic Sans MS.

- `system-ui`
  - : Les glyphes sont issus de la police d'interface utilisateur par défaut de la plateforme. Cette famille générique existe car les traditions typographiques varient beaucoup selon les régions et certains systèmes ne correspondent à aucune autre famille.
    > [!NOTE]
    > Comme son nom l'indique, `system-ui` vise à donner aux éléments d'interface l'apparence d'applications natives, et non à composer de longs paragraphes. Cela peut rendre la police affichée peu adaptée pour certain·e·s utilisateur·ice·s&nbsp;: par exemple, la police CJK par défaut de Windows peut mal afficher les caractères latins, et l'attribut `lang` peut ne pas avoir d'effet. Certains systèmes n'autorisent pas la personnalisation de `system-ui`, alors que les navigateurs permettent généralement de personnaliser la famille `sans-serif`. Pour de longs paragraphes, préférez `sans-serif` ou une autre famille non-UI.

- `ui-serif`
  - : Police à empattement par défaut de l'interface utilisateur. Voir la définition de `serif` ci-dessus.

- `ui-sans-serif`
  - : Police sans empattement par défaut de l'interface utilisateur. Voir la définition de `sans-serif` ci-dessus.

- `ui-monospace`
  - : Police à chasse fixe par défaut de l'interface utilisateur. Voir la définition de `monospace` ci-dessus.

- `ui-rounded`
  - : Police d'interface utilisateur par défaut avec des formes arrondies.

- `math`
  - : Polices pour l'affichage des expressions mathématiques (exposants, indices, crochets sur plusieurs lignes, expressions imbriquées, glyphes à double barre pour des significations distinctes, etc.).

- `fangsong`
  - : Style particulier de caractères chinois, intermédiaire entre la forme Song à empattement et la forme Kai cursive. Ce style est souvent utilisé pour les documents officiels.

## Syntaxe formelle

{{CSSSyntaxRaw(`<generic-family> = serif | sans-serif | monospace | cursive | fantasy | system-ui | ui-serif | ui-sans-serif | ui-monospace | ui-rounded | math | fangsong`)}}

## Exemples

Cet exemple démontre plusieurs des valeurs énumérées `<generic-family>` pour la propriété {{CSSxRef("font-family")}}.

### HTML

```html
<ul>
  <li class="serif">serif</li>
  <li class="sans-serif">sans-serif</li>
  <li class="monospace">monospace</li>
  <li class="cursive">cursive</li>
  <li class="fantasy">fantasy</li>
  <li class="system-ui">system-ui</li>
</ul>
```

### CSS

```css
ul {
  font-size: 1.5rem;
  line-height: 2;
}
.serif {
  font-family: serif;
}
.sans-serif {
  font-family: sans-serif;
}
.monospace {
  font-family: monospace;
}
.cursive {
  font-family: cursive;
}
.fantasy {
  font-family: fantasy;
}
.system-ui {
  font-family: system-ui;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 500, 355)}}

## Spécifications

{{Specifications}}

## Voir aussi

- Propriétés utilisant ce type de donnée&nbsp;: {{CSSxRef("font-family")}} et {{CSSxRef("font")}}
- Le module des [polices CSS](/fr/docs/Web/CSS/Guides/Fonts)
