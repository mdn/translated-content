---
title: additive-symbols
slug: Web/CSS/Reference/At-rules/@counter-style/additive-symbols
original_slug: Web/CSS/@counter-style/additive-symbols
l10n:
  sourceCommit: 9944f7b12ef1a6aecd54d4b2f0c188a82fdeaaf0
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`additive-symbols`** de la règle {{cssxref('@counter-style')}} est utilisé pour spécifier les symboles du compteur lorsque la valeur du descripteur {{cssxref('@counter-style/system', 'system')}} de `@counter-style` est définie sur `additive`. Le système additif permet de construire des systèmes de numérotation à valeur de signe (<i lang="en">sign-value numbering</i>) comme les chiffres romains.

## Syntaxe

```css
/* Élément unique */
additive-symbols: 3 "*";

/* Liste d'éléments séparés par des virgules */
additive-symbols:
  3 "0",
  2 "\2E\20",
  1 url("symbol.png");

/* Compteur binaire */
additive-symbols:
  2 "1",
  1 "0";

/* Compteur étrusque (civilisation de l'Italie antique) */
additive-symbols:
  100 "𐌟",
  50 "𐌣",
  10 "𐌢",
  5 "𐌡",
  1 "𐌠";
```

### Valeurs

Ce descripteur accepte une liste de _tuples additifs_ (ensemble d'éléments) séparés par des virgules, chaque tuple étant composé des deux valeurs suivantes séparées par un espace&nbsp;:

- {{cssxref("integer")}}
  - : Un entier positif ou nul qui indique le poids entier associé au symbole du tuple.

- [`<symbol>`](/fr/docs/Web/CSS/Reference/At-rules/@counter-style/symbols#symbol)
  - : Spécifie le symbole du compteur à utiliser pour la valeur de poids définie par l'entier associé du tuple.

> [!NOTE]
> Les tuples additifs doivent être spécifiés dans l'ordre décroissant des poids&nbsp;; sinon, la déclaration du descripteur n'est pas valide et sera ignorée.

## Description

Le descripteur `additive-symbols` définit une liste de _tuples additifs_ séparés par des virgules. Chaque tuple additif contient un entier positif ou nul et un symbole de compteur, séparés par un espace. Pour être valide, la liste doit être dans l'ordre décroissant des entiers. L'entier et le symbole sont concaténés pour former le symbole du compteur.

Lorsque la valeur du descripteur `system` est `cyclic`, `numeric`, `alphabetic`, `symbolic` ou `fixed`, utilisez le descripteur {{cssxref('symbols')}} à la place de `additive-symbols`.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Spécification des symboles additifs

#### HTML

Dans cet exemple, {{cssxref("@counter-style/system","system: additive")}} avec les valeurs du descripteur `additive-symbols` spécifie comment les nombres doivent être représentés en chiffres romains. La valeur de chaque élément {{HTMLElement("li")}} de la liste est convertie en chiffre romain selon les règles définies dans {{cssxref("@counter-style")}}.

```html
<ul>
  <li>Un</li>
  <li>Deux</li>
  <li>Trois</li>
  <li>Quatre</li>
  <li>Cinq</li>
  <li value="109">109</li>
  <li>110</li>
</ul>
```

#### CSS

```css
@counter-style uppercase-roman {
  system: additive;
  additive-symbols:
    1000 M,
    900 CM,
    500 D,
    400 CD,
    100 C,
    90 XC,
    50 L,
    40 XL,
    10 X,
    9 IX,
    5 V,
    4 IV,
    1 I;
}

ul {
  list-style: uppercase-roman;
  padding-left: 5em;
}
```

#### Résultat

{{ EmbedLiveSample('Specifying_additive_symbols') }}

Pour l'élément de liste ayant la valeur `109`, le chiffre `C` représente `100` et `IX` représente `9`. Cela génère le compteur `CIX` pour l'élément de liste `109`. L'élément suivant reçoit automatiquement la valeur `110`. Le chiffre romain `CX` est obtenu à partir de `C` pour `100` et `X` pour `10`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Descripteurs de {{cssxref("@counter-style")}}&nbsp;: {{cssxref("@counter-style/system","system")}}, {{cssxref("@counter-style/symbols", "symbols")}}, {{cssxref("@counter-style/negative", "negative")}}, {{cssxref("@counter-style/prefix", "prefix")}}, {{cssxref("@counter-style/suffix", "suffix")}}, {{cssxref("@counter-style/range", "range")}}, {{cssxref("@counter-style/pad", "pad")}}, {{cssxref("@counter-style/speak-as", "speak-as")}} et {{cssxref("@counter-style/fallback", "fallback")}}
- Propriétés de style de liste&nbsp;: {{Cssxref("list-style")}}, {{Cssxref("list-style-image")}}, {{Cssxref("list-style-position")}}
- La fonction {{cssxref("symbols", "symbols()")}} pour créer des styles de compteur anonymes.
- Le module de [styles de compteur CSS](/fr/docs/Web/CSS/Guides/Counter_styles)
