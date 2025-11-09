---
title: font-feature-settings
slug: Web/CSS/Reference/At-rules/@font-face/font-feature-settings
original_slug: Web/CSS/@font-face/font-feature-settings
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`font-feature-settings`** permet de définir les réglages initiaux à utiliser pour la police définie par la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{cssxref("@font-face")}}. Vous pouvez également utiliser ce descripteur pour contrôler les fonctionnalités typographiques de la police, telles que les ligatures, petites capitales et ornements, pour la police définie par `@font-face`. Les valeurs de ce descripteur sont identiques à celles de la propriété {{cssxref("font-feature-settings")}}, à l'exception des mots-clés globaux.

Ce descripteur définit les valeurs des fonctionnalités sur l'objet police dans la règle `@font-face` et non sur l'ensemble d'un élément, ainsi seuls certains glyphes d'un élément peuvent être rendus en utilisant ce descripteur.

## Syntaxe

```css
/* Utilise les réglages par défaut */
font-feature-settings: normal;

/* Définir des valeurs pour les balises de fonctionnalités OpenType */
font-feature-settings: "smcp";
font-feature-settings: "smcp" on;
font-feature-settings: "swsh" 2;
```

### Valeurs

Ce descripteur se spécifie soit par le mot-clé `normal`, soit par une liste de valeurs `<feature-tag-value>` séparées par des virgules. Lors du rendu du texte, la liste des valeurs OpenType `<feature-tag-value>` est transmise au moteur de mise en page pour activer ou désactiver des fonctionnalités de la police.

- `normal`
  - : Indique que le texte est mis en page avec les réglages par défaut de la police. C'est la valeur par défaut.
- `<feature-tag-value>`
  - : Représente un _tuple_ séparé par un espace composé d'un nom de balise et d'une valeur optionnelle.

    Le nom de balise est toujours une chaîne de caractères ({{cssxref("&lt;string&gt;")}}) de quatre caractères {{Glossary("ASCII")}}. Si le nom de balise comporte plus ou moins de caractères ou contient des caractères hors de l'intervalle `U+20` à `U+7E`, le descripteur est invalide.

    La valeur optionnelle peut être un entier positif ou le mot-clé `on` ou `off`. Les mots-clés `on` et `off` sont synonymes des valeurs `1` et `0` respectivement. Si aucune valeur n'est définie, la valeur par défaut est `1`. Pour les fonctionnalités OpenType non booléennes (par exemple, les [alternatives stylistiques <sup>(angl.)</sup>](https://learn.microsoft.com/fr-ca/typography/opentype/spec/features_pt#tag-salt)), la valeur indique le glyphe à sélectionner&nbsp;; pour les fonctionnalités booléennes, la valeur active ou désactive la fonctionnalité.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Activer les glyphes ornés avec la règle @font-face

Dans cet exemple, le nom de balise `swsh` et la valeur booléenne `1` sont utilisés comme valeur du descripteur `font-feature-settings` dans la règle `@font-face`.

#### HTML

```html
<p class="swash-off">Les ornements sont désactivés ici</p>
<p class="swash-on">Les ornements sont activés ici</p>
```

#### CSS

```css
@font-face {
  font-family: MonteCarlo;
  src: url("/shared-assets/fonts/monte-carlo/monte-carlo-regular.woff2");
}
@font-face {
  font-family: MonteCarlo2;
  src: url("/shared-assets/fonts/monte-carlo/monte-carlo-regular.woff2");
  font-feature-settings: "swsh" 1;
}
p {
  font-size: 3rem;
  margin: 0.7rem 3rem;
}
.swash-off {
  font-family: MonteCarlo, cursive;
}
.swash-on {
  font-family: MonteCarlo2, cursive;
}
```

#### Résultat

{{EmbedLiveSample("activer_les_glyphes_ornés_avec_la_règle_font-face", 0, 230)}}

La première ligne montre le design orné par défaut de la police [MonteCarlo <sup>(angl.)</sup>](https://github.com/googlefonts/monte-carlo), et la seconde ligne montre les glyphes par défaut remplacés par des glyphes [ornés <sup>(angl.)</sup>](https://learn.microsoft.com/fr-fr/typography/opentype/spec/features_pt#tag-swsh).

## Specifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Autres descripteurs `@font-face`&nbsp;: {{cssxref("@font-face/font-family", "font-family")}}, {{cssxref("@font-face/font-style", "font-style")}}, {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}, {{cssxref("@font-face/font-weight", "font-weight")}}, {{cssxref("@font-face/src", "src")}}
- Propriétés de police associées&nbsp;: {{cssxref("font-feature-settings")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variation-settings")}}
