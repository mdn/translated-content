---
title: Descripteur de règle CSS `pad`
short-title: pad
slug: Web/CSS/Reference/At-rules/@counter-style/pad
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`pad`** de la règle {{CSSxRef("@counter-style")}} permet de définir une longueur minimale pour les représentations des marqueurs.

## Syntaxe

```css
pad: 3 "0";
pad: "+" 5;
```

### Valeurs

Ce descripteur accepte les deux valeurs suivantes, séparées par un espace et pouvant être définies dans n'importe quel ordre&nbsp;:

- {{CSSxRef("integer")}}
  - : Spécifie la longueur minimale que toutes les représentations de marqueur doivent atteindre. La valeur doit être positive ou nulle. Pour le descripteur `pad`, cette valeur est aussi appelée _longueur de remplissage_.

- [`<symbol>`](/fr/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#symbol)
  - : Spécifie le symbole à utiliser pour le remplissage si la longueur minimale définie par `<integer>` n'est pas atteinte. Pour le descripteur `pad`, cette valeur est aussi appelée _symbole de remplissage_.

## Description

Utilisez le descripteur `pad` lorsque vous souhaitez que les représentations des marqueurs aient une longueur minimale. Si une représentation de marqueur est plus courte que la longueur de remplissage définie, elle sera complétée avec le symbole de remplissage indiqué. Les représentations de marqueur plus longues que la longueur minimale sont affichées sans remplissage supplémentaire.

Le descripteur `pad` prend un `<integer>` pour la longueur minimale du marqueur et un `<symbol>` pour le remplissage. Un cas d'utilisation courant du descripteur `pad` est lorsque vous souhaitez qu'une liste commence la numérotation par `01`, puis `02`, `03`, `04`, etc., au lieu de simplement `1`, `2`, `3`, `4`. En définissant le descripteur `pad` comme `pad: 2 "0"` dans ce cas, le navigateur garantit que le compteur fait au moins deux caractères et ajoute un remplissage avec `0` pour atteindre la longueur minimale de deux caractères si nécessaire. Les compteurs qui ont déjà deux caractères ou plus dans cet exemple seront affichés normalement, sans remplissage.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Remplissage d'un compteur

Cet exemple étend le système `decimal` {{CSSxRef("@counter-style/system","system")}} pour créer un compteur d'au moins trois caractères, en complétant les compteurs plus courts avec `0` pour atteindre cette longueur minimale. Un descripteur {{CSSxRef("@counter-style/suffix", "suffix")}} a été ajouté pour rendre le résultat plus lisible.

#### HTML

```html
<ul>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li value="40">Quarante</li>
  <li>Quarante et un</li>
  <li value="200">Deux cents</li>
  <li value="3000">Trois mille</li>
  <li>et ainsi de suite</li>
</ul>
```

#### CSS

```css
@counter-style pad-example {
  system: extends decimal;
  suffix: ": ";
  pad: 3 "0";
}

ul {
  list-style: pad-example;
}
```

#### Résultat

{{ EmbedLiveSample("Remplissage d'un compteur", 100, 200) }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les descripteurs de {{CSSxRef("@counter-style")}}&nbsp;: {{CSSxRef("@counter-style/system","system")}}, {{CSSxRef("@counter-style/symbols", "symbols")}}, {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}}, {{CSSxRef("@counter-style/negative", "negative")}}, {{CSSxRef("@counter-style/prefix", "prefix")}}, {{CSSxRef("@counter-style/suffix", "suffix")}}, {{CSSxRef("@counter-style/range", "range")}}, {{CSSxRef("@counter-style/speak-as", "speak-as")}} et {{CSSxRef("@counter-style/fallback", "fallback")}}
- Propriétés de style de liste&nbsp;: {{CSSxRef("list-style")}}, {{CSSxRef("list-style-image")}}, {{CSSxRef("list-style-position")}}
- La fonction {{CSSxRef("symbols", "symbols()")}} pour créer des styles de compteur anonymes.
- Le module de [styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module de [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
