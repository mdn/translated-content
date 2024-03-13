---
title: grid
slug: Web/CSS/@media/grid
---

{{CSSRef}}

**`grid`** est une caractéristique média CSS (cf {{cssxref("@media")}}) dont la valeur est un booléen qui indique si l'appareil d'affichage fonctionne grâce à une grille (ex. un terminal ou un appareil qui ne dispose que d'une police à chasse fixe) ou grâce à une matrice d'affichage (avec des pixels « classiques »).

La plupart des ordinateurs actuels possèdent des écrans matriciels. Parmi les appareils qui utilisent un affichage en grille, on trouve les appareils qui n'affichent que du texte dans un terminal ou des téléphones simples avec une seule police fixe.

## Syntaxe

La caractéristique `grid` est une valeur booléenne (`0` ou `1`) (type {{cssxref("&lt;mq-boolean&gt;")}}) qui indique si l'appareil d'affichage fonctionne selon une grille.

## Exemples

### HTML

```html
<p class="unknown">
  Impossible de savoir si l'affichage fonctionne sur une grille. :-(
</p>
<p class="bitmap">L'appareil dispose d'un affichage matriciel.</p>
<p class="grid">L'appareil utilise une grille pour l'affichage !</p>
```

### CSS

```css
:not(.unknown) {
  color: lightgray;
}

@media (grid: 0) {
  .unknown {
    color: lightgray;
  }

  .bitmap {
    color: red;
    text-transform: uppercase;
  }
}

@media (grid: 1) {
  .unknown {
    color: lightgray;
  }

  .grid {
    color: black;
    text-transform: uppercase;
  }
}
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
