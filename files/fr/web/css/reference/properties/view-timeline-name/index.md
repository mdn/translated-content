---
title: Propriété CSS `view-timeline-name`
short-title: view-timeline-name
slug: Web/CSS/Reference/Properties/view-timeline-name
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propéiété [CSS](/fr/docs/Web/CSS) **`view-timeline-name`** définit les noms d'un ou plusieurs [chronomètres de progression de vue nommés](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologie_de_progression_de_la_vue_nommée) associés à l'élément.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
view-timeline-name: none;

/* Identifiant personnalisé */
view-timeline-name: --nom_personnalise_de_la_chronologie;

/* Identifiants multiples */
view-timeline-name: --premier_nom_de_chronologie, --autre_nom_de_chronologie;

/* Valeurs globales */
view-timeline-name: inherit;
view-timeline-name: initial;
view-timeline-name: revert;
view-timeline-name: revert-layer;
view-timeline-name: unset;
```

### Valeurs

- `none`
  - : Indique que la chronologie n'a pas de nom. C'est la valeur par défaut.
- `<dashed-ident>`
  - : Définit une liste séparée par des virgules d'identifiants de nom personnalisés {{CSSxRef("&lt;dashed-ident&gt;")}}. Toutes les valeurs `<dashed-ident>` doivent commencer par `--`, ce qui permet d'éviter les conflits de noms avec les mots-clés CSS standard.

## Description

La propriété `view-timeline-name` est utilisée pour définir le nom d'une [chronologie de progression de vue](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologie_de_progression_de_la_vue). Une chronologie de progression de vue progresse en fonction du changement de visibilité d'un élément, appelé le _sujet_, à l'intérieur d'un élément défilable, appelé le _défileur_. La propriété `view-timeline-name` est définie sur le sujet. Vous pouvez également définir `view-timeline-name` en utilisant la propriété raccourcie {{CSSxRef("view-timeline")}}.

Si l'élément défilable nommé du sujet ne déborde pas de son conteneur dans la [dimension de l'axe](/fr/docs/Web/CSS/Reference/Properties/view-timeline-axis) ou si le débordement est masqué ou coupé, aucune chronologie de progression de défilement ne sera créée.

Une fois créé, les valeurs de nom `<dashed-ident>` définies peuvent être référencées dans les déclarations {{CSSxRef("animation-timeline")}} pour indiquer l'élément qui sera animé au fur et à mesure de la progression de la chronologie.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Créer une chronologie de progression de vue nommée

Une chronologie de progression de vue nommée `--reveler-sujet` est définie en utilisant la propriété `view-timeline-name` sur un élément sujet avec une `class` de `animation`.
Cela est ensuite défini comme la chronologie pour le même élément en utilisant `animation-timeline: --reveler-sujet;`. Le résultat est que l'élément sujet s'anime au fur et à mesure qu'il se déplace vers le haut du document lors du défilement.

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

Le `<div>` avec la classe `sujet` reçoit également une classe `animation` — c'est ici que `view-timeline-name` est défini pour créer une chronologie de progression de vue nommée. Il reçoit également un nom `animation-timeline` avec la même valeur pour déclarer que cet élément sera animé au fur et à mesure de la progression de la chronologie de progression de la vue.

Enfin, une animation est définie sur l'élément qui anime son opacité et son échelle, ce qui lui permet de s'estomper et de grandir à mesure qu'il se déplace vers le haut du défileur.

```css
.animation {
  view-timeline-name: --reveler-sujet;
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

```css hidden
@layer no-support {
  @supports not (view-timeline-name: none) {
    body::before {
      content: "Votre navigateur ne prend pas en charge la propriété `view-timeline-name`.";
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

{{EmbedLiveSample("Créer une chronologie de progression de vue nommée", "100%", 480)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("animation-timeline")}}
- La propriété {{CSSxRef("view-timeline")}}
- [Guide&nbsp;: Chronologie de progression de la vue nommée CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#chronologie_de_progression_de_la_vue_nommée)
- Le module [des animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
- Le module [des animations CSS](/fr/docs/Web/CSS/Guides/Animations)
