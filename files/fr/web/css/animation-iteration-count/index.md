---
title: animation-iteration-count
slug: Web/CSS/animation-iteration-count
---

{{CSSRef}}

La propriété **`animation-iteration-count`** indique le nombre de cycles utilisés pour répéter une animation avant que celle-ci s'arrête.

Si plusieurs valeurs sont indiquées, à chaque lancement de l'animation, c'est la valeur suivante de la liste qui est utilisée. Lorsqu'on arrive à la fin de la liste, on reprend avec la première valeur de la liste.

{{EmbedInteractiveExample("pages/css/animation-iteration-count.html")}}

Généralement, on utilisera la propriété raccourcie {{cssxref("animation")}} afin de définir toutes les propriétés relatives à une animation.

## Syntaxe

```css
/* Valeur avec un mot-clé */
animation-iteration-count: infinite;

/* Valeur avec une quantité */
/* Type <number>            */
animation-iteration-count: 3;
animation-iteration-count: 2.3;

/* Gestion de plusieurs animations */
animation-iteration-count: 2, 0, infinite;
```

La propriété `animation-iteration-count` est définie avec une ou plusieurs valeurs, parmi la liste suivante, séparées par des virgules.

### Valeurs

- `infinite`
  - : L'animation sera répétée à l'infini. Dans ce mode d'animation infinie, cette valeur est considérée de la même manière qu'une valeur paire par la propriété **`animation-direction`**.
- `<number>`
  - : Le nombre de répétitions pour l'animation. La valeur par défaut est `1` (elle n'est exécutée qu'une seule fois). Les valeurs négatives sont considérées comme invalides. Il est possible d'utiliser des valeurs qui ne sont pas entières pour indiquer des fragments d'un cycle (ainsi `0.5` indiquera une moitié du cycle de l'animation).

> **Note :** Lorsqu'on utilise plusieurs valeurs, séparées par des virgules, pour une propriété `animation-*`, selon leur quantité, elles seront différemment affectées aux animations définies par {{cssxref("animation-name")}}. Pour plus d'informations, voir : paramétrer [les valeurs des propriétés pour plusieurs animations](/fr/docs/Web/CSS/Animations_CSS/Utiliser_les_animations_CSS).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### CSS

```css
p {
  animation-duration: 3s;
  animation-name: glissement;
  animation-iteration-count: infinite;
}

.infini {
  animation-iteration-count: infinite;
}

.dix {
  animation-iteration-count: 10;
}

@keyframes glissement {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

### HTML

```html
<p class="infini">
  La Chenille et Alice se considérèrent un instant en silence. Enfin la Chenille
  sortit le houka de sa bouche, et lui adressa la parole d’une voix endormie et
  traînante.
</p>

<p class="dix">
  Voyons si je me souviendrai de tout ce que je savais&nbsp;: quatre fois cinq
  font douze, quatre fois six font treize, quatre fois sept font — je
  n’arriverai jamais à vingt de ce train-là.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","300","300")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/CSS_Animations/Utiliser_les_animations_CSS)
- {{domxref("AnimationEvent", "AnimationEvent")}}
