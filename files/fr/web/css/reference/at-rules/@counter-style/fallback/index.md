---
title: Descripteur de règle CSS `fallback`
short-title: fallback
slug: Web/CSS/Reference/At-rules/@counter-style/fallback
l10n:
  sourceCommit: f0094356d3acb19475dde45508dfeac6abf596db
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`fallback`** de la règle {{CSSxRef("@counter-style")}} permet de définir un style de compteur de repli si le style de compteur défini ne peut pas créer de représentation pour une certaine valeur du compteur.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
fallback: lower-alpha;
fallback: custom-gangnam-style;
```

## Valeur

Ce descripteur accepte une seule valeur `<counter-style-name>`&nbsp;:

- [`<counter-style-name>`](/fr/docs/Web/CSS/Reference/At-rules/@counter-style#counter-style-name)
  - : Indique le nom du style de compteur à utiliser comme repli, soit le `<custom-ident>` sensible à la casse d'un style de compteur CSS personnalisé (sans guillemets), soit une valeur de propriété {{CSSxRef("list-style-type")}} insensible à la casse comme `decimal`, `disc`, etc.

Si la valeur est omise, le style de repli du compteur est `decimal` par défaut.

## Description

Le style de compteur fourni comme valeur du descripteur `fallback` est utilisé lorsqu'un descripteur {{CSSxRef('@counter-style/range', 'range')}} est défini pour un style de compteur&nbsp;: le style de repli est utilisé pour représenter toutes les valeurs en dehors de la plage. Le style de repli est aussi utilisé lorsque le système {{CSSxRef('@counter-style/system', 'system')}} est `fixed` et qu'il n'y a pas assez de symboles pour couvrir tous les éléments de la liste&nbsp;: le style de repli sert alors à représenter toutes les valeurs au-delà de la portée du système fixe. Dans ces deux cas, et à chaque fois que le compteur défini ne peut pas créer une valeur spécifique, le style de repli est utilisé.

Si le style de repli défini ne peut pas non plus construire une représentation, alors la valeur `fallback` de ce compteur de repli est utilisée. Si le style de repli du repli ne peut pas non plus construire une représentation, alors le repli du repli est utilisé, et ainsi de suite jusqu'à ce qu'un style de repli soit trouvé qui puisse construire la représentation du compteur. Si aucun style de repli ne peut construire une représentation — si un style de repli n'a pas de valeur `fallback` définie, ou si la valeur `fallback` n'est pas définie ou invalide — le style de repli par défaut est `decimal`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Spécification d'un style de compteur de repli

#### HTML

```html
<ul class="list">
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
</ul>
```

#### CSS

```css
@counter-style exemple-de-repli {
  system: fixed;
  symbols: "\24B6" "\24B7" "\24B8";
  fallback: upper-alpha;
}

.list {
  list-style: exemple-de-repli;
}
```

#### Résultat

{{EmbedLiveSample("Spécification d'un style de compteur de repli")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres descripteurs de {{CSSxRef("@counter-style")}}&nbsp;: {{CSSxRef("@counter-style/system","system")}}, {{CSSxRef("@counter-style/symbols", "symbols")}}, {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}}, {{CSSxRef("@counter-style/negative", "negative")}}, {{CSSxRef("@counter-style/prefix", "prefix")}}, {{CSSxRef("@counter-style/suffix", "suffix")}}, {{CSSxRef("@counter-style/range", "range")}}, {{CSSxRef("@counter-style/pad", "pad")}} et {{CSSxRef("@counter-style/speak-as", "speak-as")}}
- {{CSSxRef("list-style")}}, {{CSSxRef("list-style-image")}}, {{CSSxRef("list-style-position")}}
- {{CSSxRef("symbols", "symbols()")}}, la notation fonctionnelle qui permet de créer des styles de compteur anonymes.
