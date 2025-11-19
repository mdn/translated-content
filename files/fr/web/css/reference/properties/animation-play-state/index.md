---
title: animation-play-state
slug: Web/CSS/Reference/Properties/animation-play-state
original_slug: Web/CSS/animation-play-state
---

{{CSSRef}}

La propriété **`animation-play-state`** définit si une animation est en cours d'exécution ou si elle est en pause.

{{InteractiveExample("CSS Demo: animation-play-state")}}

```css interactive-example-choice
animation-play-state: paused;
```

```css interactive-example-choice
animation-play-state: running;
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div class="animating" id="example-element"></div>
</section>
```

```css interactive-example
#example-element {
  background-color: #1766aa;
  color: white;
  margin: auto;
  margin-left: 0;
  border: 5px solid #333;
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

.animating {
  animation-name: slide;
  animation-duration: 3s;
  animation-timing-function: ease-in;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

@keyframes slide {
  from {
    background-color: orange;
    color: black;
    margin-left: 0;
  }
  to {
    background-color: orange;
    color: black;
    margin-left: 80%;
  }
}
```

Lorsqu'on reprend une animation en pause, celle-ci reprendra où elle avait été interrompue (elle ne recommencera pas depuis le début de la séquence).

## Syntaxe

```css
/* On a une seule animation */
animation-play-state: running;
animation-play-state: paused;

/* On gère plusieurs animations */
/* avec des valeurs respectives */
animation-play-state: paused, running, running;

/* Valeurs globales */
animation-play-state: inherit;
animation-play-state: initial;
animation-play-state: unset;
```

### Valeurs

- `running`
  - : L'animation est en cours.
- `paused`
  - : L'animation est en pause.

> [!NOTE]
> Lorsqu'on utilise plusieurs valeurs, séparées par des virgules, pour une propriété `animation-*`, elles seront respectivement affectées aux animations définies par {{cssxref("animation-name")}}. Pour plus d'informations, voir : [paramétrer les valeurs des propriétés pour plusieurs animations](/fr/docs/Web/CSS/Guides/Animations/Using).

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

.arret {
  animation-play-state: paused;
}

.encours {
  animation-play-state: running;
}

@keyframes glissement {
  from {
    margin-left: 100%;
    width: 200%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
```

### HTML

```html
<p class="arret">
  La Chenille et Alice se considérèrent un instant en silence. Enfin la Chenille
  sortit le houka de sa bouche, et lui adressa la parole d’une voix endormie et
  traînante.
</p>

<p class="encours">
  Alice, un peu irritée du parler bref de la Chenille, se redressa de toute sa
  hauteur.
</p>
```

### Résultat

{{EmbedLiveSample("Exemples","300","200")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Manipuler les animations CSS](/fr/docs/Web/CSS/Guides/Animations/Using)
- {{domxref("AnimationEvent", "AnimationEvent")}}
