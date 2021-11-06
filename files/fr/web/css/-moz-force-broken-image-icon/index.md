---
title: '-moz-force-broken-image-icon'
slug: Web/CSS/-moz-force-broken-image-icon
tags:
  - CSS
  - Non-standard
  - Propriété
  - Reference
translation_of: Web/CSS/-moz-force-broken-image-icon
---
{{Non-standard_header}}{{ CSSRef}}

La propriété **`-moz-force-broken-image-icon`** est une propriété CSS non-standard. Lorsqu'elle vaut `1`, elle permet de forcer l'affichage d'une icône d'image brisée même si l'image possède un attribut {{HTMLElement("img","<code>alt</code>","#attr-alt")}}. Lorsqu'elle vaut `0`, l'image est utilisée de façon normale et n'affichera que l'attribut `alt`.

## Syntaxe

### Valeurs

- {{cssxref("&lt;integer&gt;")}}

  - : Une valeur de 1 indique qu'une icône d'image brisée est affichée même si l'image possède un attribut {{HTMLElement("img", "<code>alt</code>", "#attr-alt")}}. `0` indique que seul l'attribut `alt` doit être affiché.

    > **Note :** Même si la valeur est `1`, l'attribut `alt` sera affiché. Voir ci-après.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
img {
  -moz-force-broken-image-icon: 1;
  height: 100px;
  width: 100px;
}
```

### HTML

```html
<img src='/lien/vers/image/cassée.png' alt='Un lien vers une image cassée'>
```

### Résultat

{{EmbedLiveSample('Exemples','125','125','/files/4619/broken%20image%20link.png')}}

> **Note :** Si `-moz-force-broken-image-icon` a la valeur `1` et que ni la hauteur ni largeur de l'image ne sont spécifiées alors l'image ne sera pas affichée et l'attribut `alt` sera masqué.

## Spécifications

Cette propriété est une propriété propriétaire liée à Mozilla/Gecko et ne fait partie d'aucune spécification.

{{cssinfo}}

## Notes

- Cette propriété ne fonctionne que sur les navigateurs basés sur Gecko.
- L'usage de cette propriété n'est pas recommandée. Une propriété _alt_ adéquate devrait être utilisé.

## Voir aussi

- {{Bug(58646)}}
