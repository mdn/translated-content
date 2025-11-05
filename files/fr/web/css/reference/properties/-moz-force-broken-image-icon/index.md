---
title: -moz-force-broken-image-icon
slug: Web/CSS/Reference/Properties/-moz-force-broken-image-icon
original_slug: Web/CSS/-moz-force-broken-image-icon
---

{{Non-standard_header}}{{Deprecated_Header}}

La propriété **`-moz-force-broken-image-icon`** est une propriété CSS non-standard. Lorsqu'elle vaut `1`, elle permet de forcer l'affichage d'une icône d'image brisée même si l'image possède un attribut {{HTMLElement("img","<code>alt</code>","#attr-alt")}}. Lorsqu'elle vaut `0`, l'image est utilisée de façon normale et n'affichera que l'attribut `alt`.

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

- {{cssxref("&lt;integer&gt;")}}
  - : Une valeur de 1 indique qu'une icône d'image brisée est affichée même si l'image possède un attribut {{HTMLElement("img", "<code>alt</code>", "#attr-alt")}}. `0` indique que seul l'attribut `alt` doit être affiché.

    > [!NOTE]
    > Même si la valeur est `1`, l'attribut `alt` sera affiché. Voir ci-après.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntaxRaw(`-moz-force-broken-image-icon = <integer>`)}}

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
<img src="/lien/vers/image/cassée.png" alt="Un lien vers une image cassée" />
```

### Résultat

{{EmbedLiveSample('Exemples','125','125','/files/4619/broken%20image%20link.png')}}

> [!NOTE]
> Si `-moz-force-broken-image-icon` a la valeur `1` et que ni la hauteur ni largeur de l'image ne sont spécifiées alors l'image ne sera pas affichée et l'attribut `alt` sera masqué.

## Notes

- Cette propriété ne fonctionne que sur les navigateurs basés sur Gecko.
- L'usage de cette propriété n'est pas recommandée. Une propriété _alt_ adéquate devrait être utilisé.

## Spécifications

Cette propriété ne fait partie d'aucun standard.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [bug Firefox 58646](https://bugzil.la/58646)
