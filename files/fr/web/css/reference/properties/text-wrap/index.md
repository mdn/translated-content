---
title: text-wrap
slug: Web/CSS/Reference/Properties/text-wrap
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`text-wrap`** contrôle la manière dont le texte à l'intérieur d'un élément est enveloppé. Les différentes valeurs offrent&nbsp;:

- Améliorations typographiques, par exemple des longueurs de ligne plus équilibrées pour les titres coupés.
- Une manière de désactiver complètement le retour à la ligne du texte.

{{InteractiveExample("Démonstration CSS&nbsp;: text-wrap")}}

```css interactive-example-choice
text-wrap: wrap;
```

```css interactive-example-choice
text-wrap: nowrap;
```

```css interactive-example-choice
text-wrap: balance;
```

```css interactive-example-choice
text-wrap: pretty;
```

```css interactive-example-choice
text-wrap: stable;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="whole-content-wrapper">
    <p>Éditez le texte dans la boîte&nbsp;:</p>
    <div class="transition-all" id="example-element">
      <p contenteditable>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem aut
        cum eum id quos est.
      </p>
    </div>
  </div>
</section>
```

```css interactive-example
.whole-content-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

#example-element {
  border: 1px solid #c5c5c5;
  width: 250px;
}
```

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("text-wrap-mode")}}
- {{CSSxRef("text-wrap-style")}}

## Syntaxe

```css
/* Valeurs avec un mot-clé */
text-wrap: wrap;
text-wrap: nowrap;
text-wrap: balance;
text-wrap: pretty;
text-wrap: stable;

/* Valeurs globales */
text-wrap: inherit;
text-wrap: initial;
text-wrap: revert;
text-wrap: revert-layer;
text-wrap: unset;
```

La propriété `text-wrap` est définie comme un mot-clé unique choisi parmi la liste des valeurs ci-dessous.

### Valeurs

- `wrap`
  - : Le texte est renvoyé à la ligne aux caractères appropriés (par exemple les espaces, dans les langues comme l'anglais qui utilisent des séparateurs d'espaces) pour minimiser le débordement. C'est la valeur par défaut.
- `nowrap`
  - : Le texte ne se renvoie pas à la ligne. Il débordera de son élément conteneur plutôt que de passer à une nouvelle ligne.
- `balance`
  - : Le texte est renvoyé à la ligne de manière à équilibrer au mieux le nombre de caractères sur chaque ligne, améliorant ainsi la qualité de la mise en page et la lisibilité. Comme le comptage des caractères et leur équilibrage sur plusieurs lignes est coûteux en termes de calcul, cette valeur n'est prise en charge que pour les blocs de texte couvrant un nombre limité de lignes (six ou moins pour Chromium et dix ou moins pour Firefox).
- `pretty`
  - : Produit le même comportement que `wrap`, sauf que l'agent utilisateur utilisera un algorithme plus lent qui privilégie une meilleure mise en page par rapport à la vitesse. Cela est destiné au corps du texte où une bonne typographie est privilégiée par rapport aux performances (par exemple, lorsque le nombre de [orphelins](/fr/docs/Web/CSS/Reference/Properties/orphans) doit être réduit au minimum).
- `stable`
  - : Produit le même comportement que `wrap`, sauf que lorsque l'utilisateur·ice modifie le contenu, les lignes qui précèdent celles qu'il modifie restent statiques plutôt que de réorganiser tout le bloc de texte.

## Description

Il existe deux façons pour le texte de s'écouler sur plusieurs lignes au sein d'un bloc de contenu, comme un paragraphe ({{HTMLElement("p")}}) ou des titres ({{HTMLElement("heading_elements","&lt;h1&gt; à &lt;h6&gt;")}}). Il s'agit des _sauts de ligne forcés_, contrôlés par l'utilisateur·ice, et des _sauts de ligne souples_, contrôlés par le navigateur. La propriété `text-wrap` peut être utilisée pour indiquer au navigateur comment gérer les _sauts de ligne souples_.

La valeur que vous choisissez pour `text-wrap` dépend du nombre de lignes de texte que vous prévoyez de mettre en forme, si le texte est `contenteditable`, et si vous devez privilégier l'apparence ou les performances.

Lorsque le contenu à mettre en forme sera limité à un petit nombre de lignes, comme les titres, les légendes et les citations, `text-wrap: balance` peut être ajouté pour équilibrer le nombre de caractères sur chaque ligne, améliorant ainsi la qualité de la mise en page et la lisibilité. Comme les navigateurs limitent le nombre de lignes impactées par cette propriété, l'impact de cette valeur sur les performances est négligeable.

Pour les sections de texte plus longues, `text-wrap: pretty` peut être utilisé. Notez que `pretty` a un effet négatif sur les performances, il ne doit donc être utilisé que pour les blocs de texte plus longs lorsque la mise en page est plus importante que la vitesse.

La valeur `stable` améliore l'expérience utilisateur lorsqu'elle est utilisée sur du contenu qui est [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable). Cette valeur garantit que, lorsque l'utilisateur·ice modifie le texte, les lignes précédentes dans la zone en cours de modification restent stables.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Comparer les valeurs de retour à la ligne de base

#### HTML

```html
<h2 class="wrap" contenteditable="true">
  Le comportement par défaut&nbsp;; le texte dans le titre se renvoie
  «&nbsp;normalement&nbsp;» à la ligne
</h2>

<h2 class="nowrap" contenteditable="true">
  Dans ce cas, le texte dans le titre ne se renvoie pas à la ligne et déborde du
  conteneur
</h2>

<h2 class="balance" contenteditable="true">
  Dans ce cas, le texte dans le titre est joliment équilibré sur plusieurs
  lignes
</h2>
```

### CSS

```css
.wrap {
  text-wrap: wrap;
}

.nowrap {
  text-wrap: nowrap;
}

.balance {
  text-wrap: balance;
}

h2 {
  font-size: 2rem;
  font-family: sans-serif;
}
```

#### Résultat

Le texte dans l'exemple est modifiable. Changez le texte, en ajoutant des mots longs, pour voir comment les différentes longueurs de lignes et de mots impactent le retour à la ligne.

{{EmbedLiveSample("Exemples", "100%", 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("white-space")}}
- La propriété {{CSSxRef("white-space-collapse")}}
- Le module [de texte CSS](/fr/docs/Web/CSS/Guides/Text)
- [`text-wrap: balance` CSS <sup>(angl.)</sup>](https://developer.chrome.com/docs/css-ui/css-text-wrap-balance) sur developer.chrome.com (2023)
- [`text-wrap: pretty` CSS <sup>(angl.)</sup>](https://developer.chrome.com/blog/css-text-wrap-pretty/) sur developer.chrome.com (2023)
- [Équilibrer la typographie japonaise et coréenne <sup>(angl.)</sup>](https://ryelle.codes/2025/04/typography-troubles-balancing-in-japanese-korean/) par Kelly Choyce-Dwan (2025)
