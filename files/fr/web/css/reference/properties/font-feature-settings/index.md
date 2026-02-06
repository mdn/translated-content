---
title: font-feature-settings
slug: Web/CSS/Reference/Properties/font-feature-settings
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-feature-settings`** permet de contrôler les fonctionnalités typographiques des polices OpenType.

{{InteractiveExample("Démonstration CSS&nbsp;: font-feature-settings")}}

```css interactive-example-choice
font-feature-settings: normal;
```

```css interactive-example-choice
font-feature-settings: "liga" 0;
```

```css interactive-example-choice
font-feature-settings: "tnum";
```

```css interactive-example-choice
font-feature-settings: "smcp", "zero";
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>La difficulté des gauffres</p>
    <table>
      <tr>
        <td><span class="tabular">0O</span></td>
      </tr>
      <tr>
        <td><span class="tabular">3.14</span></td>
      </tr>
      <tr>
        <td><span class="tabular">2.71</span></td>
      </tr>
    </table>
  </div>
</section>
```

```css interactive-example
@font-face {
  font-family: "Fira Sans";
  src:
    local("FiraSans-Regular"),
    url("/shared-assets/fonts/FiraSans-Regular.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
}

section {
  font-family: "Fira Sans", sans-serif;
  margin-top: 10px;
  font-size: 1.5em;
}

#example-element table {
  margin-left: auto;
  margin-right: auto;
}

.tabular {
  border: 1px solid;
}
```

## Syntaxe

```css
/* On utilise le réglage par défaut */
font-feature-settings: normal;

/* On définit la valeur des étiquettes OpenType */
font-feature-settings: "smcp";
font-feature-settings: "smcp" on;
font-feature-settings: "swsh" 2;
font-feature-settings:
  "smcp",
  "swsh" 2;

/* Valeurs globales */
font-feature-settings: inherit;
font-feature-settings: initial;
font-feature-settings: revert;
font-feature-settings: revert-layer;
font-feature-settings: unset;
```

Dans la mesure du possible, les auteur·ice·s Web devraient plutôt utiliser la propriété raccourcie {{CSSxRef("font-variant")}} ou une propriété détaillée associée comme {{CSSxRef("font-variant-ligatures")}}, {{CSSxRef("font-variant-caps")}}, {{CSSxRef("font-variant-east-asian")}}, {{CSSxRef("font-variant-alternates")}}, {{CSSxRef("font-variant-numeric")}} ou {{CSSxRef("font-variant-position")}}.

Celles-ci donnent des résultats plus efficaces, prévisibles et compréhensibles que `font-feature-settings`, qui est une fonctionnalité de bas niveau conçue pour gérer des cas particuliers où il n'existe aucun autre moyen d'activer ou d'accéder à une fonctionnalité OpenType. En particulier, il ne faut pas utiliser `font-feature-settings` pour activer les petites capitales.

### Valeurs

Cette propriété se définit soit avec le mot-clé `normal`, soit avec une liste de valeurs `<feature-tag-value>` séparées par des virgules. Lors du rendu du texte, la liste des valeurs OpenType `<feature-tag-value>` est transmise au moteur de mise en page du texte pour activer ou désactiver des fonctionnalités de police.

- `normal`
  - : Indique que le texte est disposé en utilisant les réglages de police par défaut. Il s'agit de la valeur par défaut.
- `<feature-tag-value>`
  - : Représente une collection de valeurs (<i lang="en">tuple</i> en anglais) séparées par un espace, constitué d'un nom d'étiquette et d'une valeur optionnelle.

    Le nom d'étiquette est toujours une {{CSSxRef("&lt;string&gt;")}} de quatre caractères {{Glossary("ASCII")}}. Si le nom d'étiquette comporte plus ou moins de caractères ou s'il contient des caractères en dehors de l'intervalle de points de code `U+20` — `U+7E`, le descripteur est invalide.

    La valeur optionnelle peut être un entier positif ou le mot-clé `on` ou `off`. Les mots-clés `on` et `off` sont des synonymes respectifs des valeurs `1` et `0`. Si aucune valeur n'est définie, la valeur par défaut est `1`. Pour les fonctionnalités OpenType non booléennes (par exemple, [alternatives stylistiques](https://learn.microsoft.com/en-ca/typography/opentype/spec/features_pt#tag-salt)), la valeur implique qu'un glyphe particulier soit sélectionné&nbsp;; pour les fonctionnalités booléennes, la valeur active ou désactive la fonctionnalité.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Activer différentes fonctionnalités de police

```css
/* on utilise les glyphes alternatifs en small-cap */
.small-caps {
  font-feature-settings: "smcp" on;
}

/* on convertit les majuscules et minuscules en petites
   capitales */
.all-small-caps {
  font-feature-settings: "c2sc", "smcp";
}

/* on utilise les zéros barrés d'une barre oblique afin de
   les différencier de "O" */
.nice-zero {
  font-feature-settings: "zero";
}

/* on active les formes historiques */
.historical {
  font-feature-settings: "hist";
}

/* on désactive les ligatures communément utilisées */
.no-ligatures {
  font-feature-settings: "liga" 0;
}

/* on active les chiffres tabulaires (chasse fixe) */
td.tabular {
  font-feature-settings: "tnum";
}

/* on active les fractions automatiques */
.fractions {
  font-feature-settings: "frac";
}

/* on utilise le deuxième caractère de « swash » */
.swash {
  font-feature-settings: "swsh" 2;
}

/* On active l'ensemble stylistique 7 */
.fancy-style {
  font-family: "Gabriola", cursive;
  font-feature-settings: "ss07";
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le descripteur {{CSSxRef("@font-face/font-display", "font-display")}}
- Le descripteur {{CSSxRef("@font-face/font-family", "font-family")}}
- Le descripteur {{CSSxRef("@font-face/font-stretch", "font-stretch")}}
- Le descripteur {{CSSxRef("@font-face/font-style", "font-style")}}
- Le descripteur {{CSSxRef("@font-face/font-weight", "font-weight")}}
- Le descripteur {{CSSxRef("@font-face/font-variation-settings", "font-variation-settings")}}
- Le descripteur {{CSSxRef("@font-face/src", "src")}}
- Le descripteur {{CSSxRef("@font-face/unicode-range", "unicode-range")}}
- [La liste des fonctionnalités OpenType <sup>(angl.)</sup>](https://learn.microsoft.com/fr-fr/typography/opentype/spec/featurelist)
- [Utiliser la police entière <sup>(angl.)</sup>](https://sparanoid.com/lab/opentype-features/)
