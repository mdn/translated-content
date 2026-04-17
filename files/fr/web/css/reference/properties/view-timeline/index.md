---
title: view-timeline
slug: Web/CSS/Reference/Properties/view-timeline
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`view-timeline`** définit le nom, l'axe et les valeurs d'encart d'une [chronologie de progression de la vue nommée](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologie_de_progression_de_la_vue_nommée).

## Propriétés constitutives

Cette propriété est une propriété raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("view-timeline-axis")}}
- {{CSSxRef("view-timeline-inset")}}
- {{CSSxRef("view-timeline-name")}}

## Syntaxe

```css
/* Un composant */
view-timeline: none;
view-timeline: --nom_personnalise_de_la_chronologie;

/* Deux composants */
view-timeline: --nom_personnalise_de_la_chronologie block;
view-timeline: --nom_personnalise_de_la_chronologie y;
view-timeline: none inline;
view-timeline: none x;

/* Trois composants */
view-timeline: --nom_personnalise_de_la_chronologie block auto;
view-timeline: --nom_personnalise_de_la_chronologie block 20% 200px;

/* Valeurs globales */
view-timeline: inherit;
view-timeline: initial;
view-timeline: revert;
view-timeline: revert-layer;
view-timeline: unset;
```

### Valeurs

- `<view-timeline-name>`
  - : Voir {{CSSxRef("view-timeline-name")}}. La valeur par défaut est `none`.
- `<view-timeline-inset>`
  - : Voir {{CSSxRef("view-timeline-inset")}}. La valeur par défaut est `auto`.
- `<view-timeline-axis>`
  - : Voir {{CSSxRef("view-timeline-axis")}}. La valeur par défaut est `block`.

### Description

La propriété raccourcie `view-timeline` définit une _chronologie de progression de la vue nommée_, qui progresse en fonction des changements de visibilité d'un élément (le _sujet_) à l'intérieur d'un élément défilable (<i lang="en">scroller</i>). La propriété `view-timeline` est définie sur le sujet. Si l'élément scroller ne déborde pas de son conteneur dans la dimension de l'axe ou si le débordement est masqué ou coupé, aucune chronologie de progression de défilement ne sera créée.

La visibilité du sujet à l'intérieur du scroller est suivie — par défaut, la chronologie est à `0%` lorsque le sujet est d'abord visible à un bord du scroller et à `100%` lorsqu'il atteint le bord opposé.

La propriété `view-timeline` peut contenir trois valeurs constitutives&nbsp;: un nom pour la chronologie de progression de la vue nommée, une valeur d'axe de défilement et jusqu'à deux valeurs d'encart de la chronologie.
Si une seule valeur est déclarée, cette valeur est le `view-timeline-name`. Le nom est ensuite référencé dans une déclaration {{CSSxRef("animation-timeline")}} pour indiquer l'élément qui sera animé au fur et à mesure de la progression de la chronologie. Il peut s'agir de l'élément sujet, mais ce n'est pas obligatoire — vous pouvez animer un élément différent pendant que le sujet se déplace dans la zone de défilement.

La propriété raccourcie `view-timeline` peut être appliquée à un élément conteneur pour définir une combinaison des valeurs `<view-timeline-name>`, `<view-timeline-inset>` et `<view-timeline-axis>`. Au moins une valeur doit être définie. Si toutes les valeurs sont définies, l'ordre doit être `<view-timeline-name>` suivi de `<view-timeline-axis>` et/ou `<view-timeline-inset>`.

Les noms définis dans le composant `<view-timeline-name>` doivent être une liste de valeurs {{CSSxRef("dashed-ident")}} séparées par des virgules (ce qui signifie qu'elles doivent commencer par `--`) ou le mot-clé `none`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer une chronologie de progression de la vue nommée

Une chronologie de progression de la vue nommée `--reveler-sujet` est définie en utilisant la propriété `view-timeline` sur un élément sujet avec une `class` de `animation`.
Cela est ensuite défini comme la chronologie pour le même élément en utilisant `animation-timeline: --reveler-sujet`. Le résultat est que l'élément sujet s'anime lorsqu'il se déplace vers le haut à travers le document au fur et à mesure du défilement.

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

L'élément `<div>` avec la classe `sujet` reçoit également une classe `animation` — c'est ici que `view-timeline` est défini pour créer une chronologie de progression de la vue nommée. Il reçoit également un nom `animation-timeline` avec la même valeur pour déclarer que cet élément sera animé au fur et à mesure que la chronologie de progression de la vue avance.

Enfin, une animation est définie sur l'élément qui anime son opacité et son échelle, ce qui lui permet de s'estomper et de grandir au fur et à mesure qu'il se déplace vers le haut du défileur.

```css
.animation {
  view-timeline: --reveler-sujet block;
  animation-timeline: --reveler-sujet;

  animation-name: appear;
  animation-fill-mode: both;
  animation-duration: 1ms; /* Firefox nécessite ça pour appliquer l'animation */
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

```css hidden
@layer no-support {
  @supports not (view-timeline: none) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété `view-timeline`.";
      background-color: wheat;
      display: block;
      text-align: center;
      padding: 1em;
    }
  }
}
```

#### Résultat

Faites défiler pour voir l'élément sujet être animé.

{{EmbedLiveSample("Créer une chronologie de progression de la vue nommée", "100%", 480)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("animation-timeline")}}
- Les propriétés {{CSSxRef("view-timeline-axis")}}, {{CSSxRef("view-timeline-inset")}}, {{CSSxRef("view-timeline-name")}}
- La fonction {{CSSxRef("animation-timeline/view", "view()")}}
- [Guide&nbsp;: Chronologie de progression de la vue nommée CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologie_de_progression_de_la_vue_nommée)
- [Animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
