---
title: "-webkit-line-clamp"
slug: Web/CSS/-webkit-line-clamp
---

{{CSSRef}}

La propriété CSS **`-webkit-line-clamp`** permet de limiter l'affichage du contenu d'un bloc à un nombre donné de lignes.

Cette propriété fonctionne uniquement si {{cssxref("display")}} vaut `-webkit-box` ou `-webkit-inline-box` et si {{cssxref("-webkit-box-orient")}} vaut `vertical`.

Dans la plupart des cas, on utilisera également {{cssxref("overflow")}} avec la valeur `hidden`, afin de masquer le contenu qui dépasse (plutôt que d'afficher une ellipse en dehors de la boîte).

Lorsqu'on applique ce style à une ancre, la troncature pourra intervenir au milieu du texte (et pas nécessairement à la fin).

> **Note :** Au départ, cette propriété était implémentée dans WebKit avec quelques problèmes. Elle a été standardisée à des fins de support pour les sites historiques. Le module de spécification [CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/#propdef--webkit-line-clamp) définit également une propriété {{cssxref("line-clamp")}} qui doit remplacer `-webkit-line-clamp`.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
-webkit-line-clamp: none;

/* Valeurs entières */
/* Type <integer> */
-webkit-line-clamp: 3;
-webkit-line-clamp: 10;

/* Valeurs globales */
-webkit-line-clamp: inherit;
-webkit-line-clamp: initial;
-webkit-line-clamp: unset;
```

- `none`
  - : Cette valeur indique que le contenu ne sera pas rogné.
- {{cssxref("integer")}}
  - : Cette valeur indique le nombre de lignes après lequel tronquer le contenu. Cette valeur doit être supérieure à 0.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<p>
  Dans cet exemple <code>-webkit-line-clamp</code> vaut <code>3</code>, ce qui
  signifie que le texte sera rogné après trois lignes. Une ellipse sera affichée
  au n ellipsis will be shown at the point where the text is clamped.
</p>
```

### CSS

```css
p {
  width: 300px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", "100")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Line Clampin' (Truncating Multiple Line Text)](https://css-tricks.com/line-clampin/)
- {{cssxref("line-clamp")}}
