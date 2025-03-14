---
title: orientation
slug: Web/CSS/@media/orientation
---

{{CSSRef}}

**`orientation`** est une caractéristique média CSS (cf. {{cssxref("@media")}}) qui peut être utilisée pour vérifier l'orientation de la zone d'affichage (_viewport_) (ou la boîte de la page pour les média paginés).

## Syntaxe

La caractéristique `orientation` se définit grâce à l'un des mots-clés suivants :

- `portrait`
  - : La zone d'affichage est en mode portrait (la hauteur est la plus grande dimension).
- `landscape`
  - : La zone d'affichage est en mode paysage (la largeur est la plus grande dimension).

## Exemples

### HTML

```html
<div>Boîte 1</div>
<div>Boîte 2</div>
<div>Boîte 3</div>
```

### CSS

```css
body {
  display: flex;
}

div {
  background: yellow;
}

@media (orientation: landscape) {
  body {
    flex-direction: row;
  }
}

@media (orientation: portrait) {
  body {
    flex-direction: column;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
