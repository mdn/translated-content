---
title: view-timeline-inset
slug: Web/CSS/Reference/Properties/view-timeline-inset
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`view-timeline-inset`** est utilisée pour définir une ou deux valeurs représentant un ajustement de la position de la zone d'affichage de défilement (voir {{Glossary("Scroll container", "Conteneur de défilement")}} pour plus de détails) dans lequel l'élément sujet d'une animation de _chronologie de progression de la vue nommée_ est considéré comme visible. En d'autres termes, cela permet de définir des valeurs d'encart (ou de retrait) de début et/ou de fin qui décalent la position de la chronologie.

Cela peut être combiné avec ou utilisé à la place de {{CSSxRef("animation-range")}} et de ses propriétés raccourcies, qui peuvent être utilisées pour définir la plage d'attachement d'une animation le long de sa chronologie.
Voir [Animations CSS pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations) pour plus de détails.

> [!NOTE]
> Si l'élément défilant ne déborde pas de son conteneur dans la dimension de l'axe ou si le débordement est masqué ou coupé, aucune chronologie de progression de défilement ne sera créée.

Les propriétés `view-timeline-inset`, {{CSSxRef("view-timeline-axis")}} et {{CSSxRef("view-timeline-name")}} peuvent également être définies en utilisant la propriété raccourcie {{CSSxRef("view-timeline")}}.

## Syntaxe

```css
/* Une valeur */
view-timeline-inset: auto;
view-timeline-inset: 200px;
view-timeline-inset: 20%;

/* Deux valeurs */
view-timeline-inset: 20% auto;
view-timeline-inset: auto 200px;
view-timeline-inset: 20% 200px;
```

### Valeurs

Les valeurs autorisées pour `view-timeline-inset` sont&nbsp;:

- `auto`
  - : Si défini, le {{CSSxRef("scroll-padding")}} correspondant (ou la valeur longue équivalente) pour ce bord du conteneur de défilement est utilisé. Si cela n'est pas défini (ou défini sur `auto`), la valeur sera généralement 0, bien que certains agents utilisateurs puissent utiliser des heuristiques pour déterminer une valeur par défaut différente si nécessaire.
- {{CSSxRef("length-percentage")}}
  - : Toute valeur valide de `<length-percentage>` est acceptée comme valeur d'encart/retrait.
    - Si la valeur est positive, la position du début/fin de l'animation sera déplacée à l'intérieur du conteneur de défilement de la longueur ou du pourcentage défini.
    - Si la valeur est négative, la position du début/fin de l'animation sera déplacée à l'extérieur du conteneur de défilement de la longueur ou du pourcentage défini, c'est-à-dire que l'animation commencera avant que l'élément n'apparaisse dans le conteneur de défilement, ou se terminera après qu'il ait quitté le conteneur de défilement.

Si deux valeurs sont fournies, la première valeur représente l'encart/retrait de début dans l'axe pertinent (où l'animation commence) et la deuxième valeur représente l'encart/retrait de fin (où l'animation se termine). Si une seule valeur est fournie, l'encart/retrait de début et de fin est défini sur la même valeur.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer une chronologie de progression de vue nommée avec encart

Une chronologie de progression de vue nommée `--reveler-sujet` est définie en utilisant la propriété `view-timeline` sur un élément sujet avec une `class` de `animation`.
Cela est ensuite défini comme la chronologie pour le même élément en utilisant `animation-timeline: --reveler-sujet;`. Le résultat est que l'élément sujet s'anime lorsqu'il se déplace vers le haut à travers le document lors du défilement.

Une déclaration `view-timeline-inset` est également définie pour que l'animation commence plus tard que prévu et se termine plus tôt.

#### HTML

Le HTML pour l'exemple est montré ci-dessous.

```html
<div class="contenu">
  <h1>Contenu</h1>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Risus quis varius quam
    quisque id. Et ligula ullamcorper malesuada proin libero nunc consequat
    interdum varius. Elit ullamcorper dignissim cras tincidunt lobortis feugiat
    vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras. A erat nam at lectus urna
    duis convallis convallis. Nibh ipsum consequat nisl vel pretium lectus.
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="sujet animation"></div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris. Risus quis varius quam quisque id diam
    vel quam elementum. Nibh praesent tristique magna sit amet purus gravida
    quis. Duis ultricies lacus sed turpis tincidunt id aliquet. In egestas erat
    imperdiet sed euismod nisi. Eget egestas purus viverra accumsan in nisl nisi
    scelerisque. Netus et malesuada fames ac.
  </p>
</div>
```

#### CSS

L'élément `sujet` et son élément contenant `contenu` sont mis en forme de manière minimale, et le contenu textuel reçoit quelques réglages de police de base&nbsp;:

```css
.sujet {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.contenu {
  width: 75%;
  max-width: 800px;
  margin: 0 auto;
}

p,
h1 {
  font-family: "Helvetica", "Arial", sans-serif;
}

h1 {
  font-size: 3rem;
}

p {
  font-size: 1.5rem;
  line-height: 1.5;
}
```

L'élément `<div>` avec la classe `sujet` reçoit également une classe `animation` — c'est ici que `view-timeline` est défini pour créer une chronologie de progression de vue nommée. Nous lui donnons également une déclaration `view-timeline-inset` pour que l'animation commence plus tard que prévu et se termine plus tôt. Il reçoit également un nom `animation-timeline` avec la même valeur pour déclarer que cet élément sera animé au fur et à mesure de la progression de la chronologie de progression de vue.

Enfin, une animation est définie sur l'élément qui anime son opacité et son échelle, ce qui lui permet de s'estomper et de grandir à mesure qu'il se déplace vers le haut du défileur.

```css
.animation {
  view-timeline: --reveler-sujet block;
  view-timeline-inset: 70% -100px;
  animation-timeline: --reveler-sujet;

  animation-name: appear;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox nécessite cela pour appliquer l'animation */
}

@keyframes appear {
  from {
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    opacity: 1;
    transform: scaleX(1);
  }
}
```

#### Résultat

Faites défiler pour voir l'élément sujet être animé.

{{EmbedLiveSample("Créer une chronologie de progression de vue nommée avec encart", "100%", 480)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("animation-timeline")}}
- La propriété {{CSSxRef("timeline-scope")}}
- Les propriétés {{CSSxRef("view-timeline")}}, {{CSSxRef("view-timeline-axis")}}, {{CSSxRef("view-timeline-name")}}
- [Animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
