---
title: -moz-force-broken-image-icon
slug: Web/CSS/Reference/Properties/-moz-force-broken-image-icon
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{Non-standard_Header}}{{Deprecated_Header}}

La propriété [CSS](/fr/docs/Web/CSS) étendue **`-moz-force-broken-image-icon`** permet d'afficher l'icône d'image brisée même lorsqu'une image brisée possède un attribut `alt`.

## Syntaxe

```css
-moz-force-broken-image-icon: 1;
-moz-force-broken-image-icon: 0;

/* Valeurs globales */
-moz-force-broken-image-icon: inherit;
-moz-force-broken-image-icon: initial;
-moz-force-broken-image-icon: revert;
-moz-force-broken-image-icon: revert-layer;
-moz-force-broken-image-icon: unset;
```

### Valeurs

- {{CSSxRef("&lt;integer&gt;")}}
  - : Une valeur de 1 indique qu'une icône d'image brisée est affichée même si l'image possède un attribut {{HTMLElement("img", "<code>alt</code>", "#alt")}}. `0` indique que seul l'attribut `alt` doit être affiché.

> [!NOTE]
> Même si la valeur est `1`, l'attribut `alt` sera affiché. Voir ci-après.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-moz-force-broken-image-icon = <integer>`)}}

## Exemples

### HTML

```html
<img src="/lien/vers/image/cassée.png" alt="Un lien vers une image cassée" />
```

### CSS

```css
img {
  -moz-force-broken-image-icon: 1;
  height: 100px;
  width: 100px;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 125, 125)}}

> [!NOTE]
> Le texte alternatif peut ne pas être visible si `-moz-force-broken-image-icon` a la valeur `1` et que l'image n'a pas (ou a une valeur trop faible pour) `height` ou `width`.

## Notes

- Cette propriété ne fonctionne que sur les navigateurs basés sur Gecko.
- L'usage de cette propriété n'est pas recommandée. Une propriété `alt` adéquate devrait être utilisée.

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Boggue Firefox 58646 <sup>(angl.)</sup>](https://bugzil.la/58646)
