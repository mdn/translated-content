---
title: negative
slug: Web/CSS/Reference/At-rules/@counter-style/negative
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`negative`** de la règle {{CSSxRef("@counter-style")}} permet de définir comment les valeurs négatives du compteur sont représentées lors de la création de styles de compteur personnalisés. La valeur du descripteur `negative` définit les symboles à ajouter avant et après la représentation du compteur lorsque la valeur du compteur est négative.

## Syntaxe

```css
/* Une valeur <symbol> */
negative: "--"; /* Ajoute '--' avant si la valeur du compteur est négative */

/* Deux valeurs <symbol> */
negative: "(" ")"; /* Ajoute '(-' avant et ')' après si la valeur du compteur est négative */
```

### Valeurs

Le descripteur `negative` accepte jusqu'à deux valeurs [`<symbol>`](/fr/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#valeurs).

- `<symbol>`
  - : Si une seule valeur est définie, elle est ajoutée avant la représentation du compteur lorsque celui-ci est négatif. Si deux valeurs sont définies, la première est ajoutée avant et la seconde après la représentation du compteur lorsque celui-ci est négatif.

## Description

Si la valeur du compteur est négative, le `<symbol>` défini pour le descripteur `negative` est ajouté avant la représentation du compteur, remplaçant le `-` par défaut pour les valeurs négatives. Le second `<symbol>`, s'il est défini, est ajouté après la représentation du compteur.

Le descripteur `negative` est pertinent dans deux cas&nbsp;: si les styles de compteur ont la valeur `system` de `symbolic`, `alphabetic`, `numeric` ou `additive` et que le compteur est négatif&nbsp;; et si la valeur `system` est `extends` et que le style de compteur étendu utilise lui-même un signe négatif. Pour les systèmes qui ne prennent pas en charge les valeurs négatives, la spécification du descripteur `negative` n'a aucun effet et est ignorée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Rendu des compteurs négatifs

Cet exemple [étend](/fr/docs/Web/CSS/Reference/At-rules/@counter-style/system#extends) le style de liste [`decimal`](/fr/docs/Web/CSS/Reference/Properties/list-style-type#decimal). Le descripteur `negative` est utilisé pour ajouter `(-` et `)` avant et après les valeurs négatives du compteur.

#### HTML

```html
<ol start="-3">
  <li>Trois négatif</li>
  <li>Deux négatif</li>
  <li>Un négatif</li>
  <li>Zéro</li>
  <li>Un</li>
</ol>
```

#### CSS

```css
@counter-style neg {
  system: extends decimal;
  negative: "(-" ")";
  suffix: ": ";
}

ol {
  list-style: neg;
}
```

#### Résultat

{{EmbedLiveSample("Rendu des compteurs négatifs")}}

Le préfixe et le suffixe indiqués comme valeur du descripteur `negative` ne sont ajoutés au marqueur que lorsque la valeur du compteur est inférieure à zéro.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les descripteurs de {{CSSxRef("@counter-style")}}&nbsp;: {{CSSxRef("@counter-style/system","system")}}, {{CSSxRef("@counter-style/symbols", "symbols")}}, {{CSSxRef("@counter-style/additive-symbols", "additive-symbols")}}, {{CSSxRef("@counter-style/prefix", "prefix")}}, {{CSSxRef("@counter-style/suffix", "suffix")}}, {{CSSxRef("@counter-style/range", "range")}}, {{CSSxRef("@counter-style/pad", "pad")}}, {{CSSxRef("@counter-style/speak-as", "speak-as")}} et {{CSSxRef("@counter-style/fallback", "fallback")}}
- Propriétés de style de liste&nbsp;: {{CSSxRef("list-style")}}, {{CSSxRef("list-style-image")}}, {{CSSxRef("list-style-position")}}
- La fonction {{CSSxRef("symbols", "symbols()")}} pour créer des styles de compteur anonymes.
- Le module de [styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
- Le module de [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)
