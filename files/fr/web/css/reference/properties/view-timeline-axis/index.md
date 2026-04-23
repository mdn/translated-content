---
title: Propriété CSS `view-timeline-axis`
short-title: view-timeline-axis
slug: Web/CSS/Reference/Properties/view-timeline-axis
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`view-timeline-axis`** définit la direction de défilement à utiliser pour une [chronologie de progression de la vue nommée](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologie_de_progression_de_la_vue_nommée).

## Syntaxe

```css
/* Valeurs de propriété logiques */
view-timeline-axis: block;
view-timeline-axis: inline;

/* Valeurs de propriété physiques */
view-timeline-axis: y;
view-timeline-axis: x;

/* Valeurs globales */
view-timeline-axis: inherit;
view-timeline-axis: initial;
view-timeline-axis: revert;
view-timeline-axis: revert-layer;
view-timeline-axis: unset;
```

### Valeurs

- `<axis>`
  - : Définit la direction de défilement utilisée par la chronologie de progression de la vue. La valeur peut être l'un des mots-clés {{CSSxRef("axis")}}&nbsp;: `block`, `inline`, `x` ou `y`. La valeur par défaut est `block`.

## Description

La propriété `view-timeline-axis` définit la direction, ou `<axis>`, des [chronologies de progression de la vue nommées](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologie_de_progression_de_la_vue_nommée) qui sont basées sur la boîte de l'élément.

Par défaut, les animations CSS {{CSSxRef("@keyframes")}} progressent le long de la chronologie par défaut basée sur le temps. Lorsque vous définissez la progression de l'animation avec une chronologie de progression de la vue, `view-timeline-axis` définit la direction qui contrôle la progression de la chronologie.

Pour les chronologies de progression de la vue, la progression de l'animation le long des chronologies est basée sur la visibilité de l'élément, ou _sujet_. La propriété `view-timeline-axis` est définie sur le sujet.

Le sujet doit être imbriqué à l'intérieur d'un élément défilable. Si l'élément défilable ne déborde pas de son conteneur dans la dimension de l'axe ou si le débordement est masqué ou coupé, aucune chronologie de progression de défilement ne sera créée.

La propriété `view-timeline-axis`, ainsi que les propriétés {{CSSxRef("view-timeline-inset")}} et {{CSSxRef("view-timeline-name")}}, fait partie de la propriété raccourcie {{CSSxRef("view-timeline")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir l'axe de la chronologie de progression de la vue

Dans cet exemple, une chronologie de progression de la vue nommée `--reveler-sujet` est définie en utilisant la propriété `view-timeline-name` sur un élément sujet avec une classe «&nbsp;animation&nbsp;». Cette chronologie est ensuite appliquée à l'animation sur le même élément, en utilisant `animation-timeline: --reveler-sujet;`.

Pour démontrer l'effet de `view-timeline-axis`, une barre de défilement horizontale (non par défaut) est utilisée dans cet exemple pour piloter l'animation.

#### HTML

Le HTML pour l'exemple est montré ci-dessous.

```html
<div class="contenu">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua.
  </p>

  <p>
    Risus quis varius quam quisque id. Et ligula ullamcorper malesuada proin
    libero nunc consequat interdum varius. Elit ullamcorper dignissim cras
    tincidunt lobortis feugiat vivamus at augue.
  </p>

  <p>
    Dolor sed viverra ipsum nunc aliquet. Sed sed risus pretium quam vulputate
    dignissim. Tortor aliquam nulla facilisi cras.
  </p>

  <p>
    A erat nam at lectus urna duis convallis convallis. Nibh ipsum consequat
    nisl vel pretium lectus.
  </p>

  <p>
    Sagittis aliquam malesuada bibendum arcu vitae elementum. Malesuada bibendum
    arcu vitae elementum curabitur vitae nunc sed velit.
  </p>

  <div class="sujet animation"></div>

  <p>
    Adipiscing enim eu turpis egestas pretium aenean pharetra magna ac. Arcu
    cursus vitae congue mauris rhoncus aenean vel. Sit amet cursus sit amet
    dictum. Augue neque gravida in fermentum et. Gravida rutrum quisque non
    tellus orci ac auctor augue mauris.
  </p>
</div>
```

#### CSS

En CSS, nous définissons l'élément `sujet` comme source d'une chronologie de progression de la vue nommée `--reveler-sujet` avec la propriété `view-timeline-name`.
L'axe de défilement est défini par `view-timeline-axis: x;`. Nous incluons également `view-timeline-axis: horizontal;` pour les navigateurs qui prennent en charge les valeurs héritées non standard `horizontal` et `vertical`, au lieu de `x` et `y`.

L'ancêtre `contenu` est rendu défilant horizontalement en disposant son contenu avec `display: flex;` et `flex-flow: column wrap;`.

```css
.sujet {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

.contenu {
  width: 50%;
  height: 400px;
  margin-top: 30px;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
}

p {
  font-family: "Helvetica", "Arial", sans-serif;
}

p {
  font-size: 1.3rem;
  line-height: 1.4;
}

.animation {
  view-timeline-name: --reveler-sujet;
  view-timeline-axis: x;
  view-timeline-axis: horizontal;

  animation: appear 1ms linear both;
  animation-timeline: --reveler-sujet;
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
  body::before {
    display: block;
    text-align: center;
    padding: 1em;
  }
  @supports not (view-timeline-axis: inherit) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété `view-timeline-axis`.";
      background-color: wheat;
    }
  }
  @supports (view-timeline-axis: horizontal) {
    body::before {
      content: "Votre navigateur prend en charge les valeurs héritées pour la propriété `view-timeline-axis`.";
      background-color: yellow;
    }
  }
}
```

#### Résultat

Faites défiler la barre horizontale en bas pour voir l'élément sujet s'animer au fur et à mesure du défilement.

{{EmbedLiveSample("Définir l'axe de la chronologie de progression de la vue", "100%", 450)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("animation-timeline")}}
- Les propriétés {{CSSxRef("view-timeline")}}, {{CSSxRef("view-timeline-inset")}}, {{CSSxRef("view-timeline-name")}}
- La fonction {{CSSxRef("animation-timeline/view", "view()")}}
- [Guide&nbsp;: Chronologie de progression de la vue nommée CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologie_de_progression_de_la_vue_nommée)
- Le module [des animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
- Le module [des animations CSS](/fr/docs/Web/CSS/Guides/Animations)
