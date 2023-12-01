---
title: width
slug: Web/CSS/@media/width
---

{{CSSRef}}

**`width`** est une caractéristique média CSS (cf. {{cssxref("@media")}}) qui permet d'appliquer des styles différents en fonction de la largeur de la zone d'affichage (_viewport_) ou de la largeur de la page (pour [les média paginés](/fr/docs/Web/CSS/Média_paginés)). La largeur est exprimée comme une longueur CSS (type {{cssxref("&lt;length&gt;")}}.

## Syntaxe

**`width`** est une valeur décrivant la largeur d'affichage, les versions préfixées **`min-width`** et **`max-width`** peuvent également être utilisées afin de décrire la largeur minimale (resp. la largeur maximale).

```css
/* Largeur exacte */
@media (width: 300px) {
}

/* Un viewport avec une largeur minimale */
@media (min-width: 50em) {
}

/* Un viewport avec une largeur maximale */
@media (max-width: 1000px) {
}
```

## Exemples

### HTML

```html
<div>
  Observez cet élément lorsque vous redimensionnez la largeur du viewport.
</div>
```

### CSS

```css
/* Largeur exacte */
@media (width: 360px) {
  div {
    color: red;
  }
}

/* Largeur minimale */
@media (min-width: 35rem) {
  div {
    background: yellow;
  }
}

/* Largeur maximale */
@media (max-width: 50rem) {
  div {
    border: 2px solid blue;
  }
}
```

### Résultat

{{EmbedLiveSample('Exemples','90%')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
