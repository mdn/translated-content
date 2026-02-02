---
title: animation-range
slug: Web/CSS/Reference/Properties/animation-range
l10n:
  sourceCommit: a397ab763a6686a4056af755e4da32ac735b9fa5
---

{{SeeCompatTable}}

La [propriété raccourcie](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties) [CSS](/fr/docs/Web/CSS) **`animation-range`** est utilisée pour définir le début et la fin de la plage d'attachement d'une animation le long de sa chronologie, c'est-à-dire à quel endroit de la chronologie une animation commencera et se terminera.

## Propriétés constitutives

Cette propriété est une forme raccourcie pour les propriétés CSS suivantes&nbsp;:

- {{CSSxRef("animation-range-start")}}
- {{CSSxRef("animation-range-end")}}

## Syntaxe

```css
/* Valeur de début de plage uniquement*/
/* Syntaxe à une seule valeur */
animation-range: normal;
animation-range: 20%;
animation-range: 100px;
animation-range: cover;
animation-range: contain;
/* Syntaxe à deux valeurs */
animation-range: cover 20%;
animation-range: contain 100px;

/* Valeurs de début et de fin de plage */
/* Syntaxe à deux valeurs */
animation-range: normal 25%;
animation-range: 25% normal;
animation-range: 25% 50%;
animation-range: entry exit;
/* Syntaxe à trois valeurs */
animation-range: cover cover 200px;
animation-range: 10% exit 90%;
animation-range: entry 10% 90%;
/* Syntaxe à quatre valeurs */
animation-range: cover 0% cover 200px;
animation-range: entry 10% exit 100%;

/* Valeurs globales */
animation-range: inherit;
animation-range: initial;
animation-range: revert;
animation-range: revert-layer;
animation-range: unset;
```

La propriété raccourcie `animation-range` est définie comme une ou plusieurs plages d'animation simples, séparées par des virgules. Chaque plage d'animation est définie par une à quatre valeurs séparées par des espaces, composées de valeurs `<timeline-range-name>`, de valeurs `<length-percentage>`, et/ou du mot-clé `normal`.

### Values

- `<animation-range-start>`
  - : Le mot-clé `normal`, une valeur `<length-percentage>`, un {{CSSxRef("timeline-range-name")}}, ou une paire `<timeline-range-name> <length-percentage>`, représentant {{CSSxRef("animation-range-start")}}. Si un `<timeline-range-name>` est défini sans `<length-percentage>`, la valeur `<length-percentage>` par défaut est `0%`.
- `<animation-range-end>`
  - : Le mot-clé `normal`, une valeur `<length-percentage>`, un `<timeline-range-name>`, ou une paire `<timeline-range-name> <length-percentage>`, représentant {{CSSxRef("animation-range-end")}}. Si un `<timeline-range-name>` est défini sans `<length-percentage>`, la valeur `<length-percentage>` par défaut est `100%`.

## Description

La propriété raccourcie `animation-range` définit les valeurs de `animation-range-start` et `animation-range-end`, déterminant où, le long de la chronologie de l'animation, l'animation commencera et se terminera. Par défaut, les styles définis dans une animation par images-clés ne sont appliqués à un élément que lorsque cet élément est animé. Le moment où une animation par images-clés est appliquée à un élément dépend de la chronologie de cette animation. Par défaut, les animations ne sont appliquées qu'entre le début et la fin de la plage de la chronologie. Pour appliquer l'animation en dehors de cette plage, définissez {{CSSxRef("animation-fill-mode")}} sur `backwards`, `forwards` ou `both`. Ces trois valeurs de `animation-fill-mode` appliquent respectivement les styles de la première image-clé jusqu'au début de la plage, les styles de la dernière image-clé après la fin de l'animation, ou les deux avant et après.

La zone {{Glossary("Scroll container", "conteneur de défilement")}} appelée plage de visibilité de la progression de la vue est la zone à l'intérieur de laquelle l'élément sujet d'une animation [vue progression nommée](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timelines#afficher_la_chronologie_de_progression) est considérée comme visible. Par défaut, il s'agit de toute la plage du scrollport, mais elle peut être ajustée à l'aide de la propriété {{CSSxRef("view-timeline-inset")}}.

Si deux valeurs sont définies comme composants de la propriété `<animation-range>`, elles seront interprétées dans l'ordre `<animation-range-start>` puis `<animation-range-end>`. La valeur de chaque composant est soit le mot-clé `normal`, une {{CSSxRef("length-percentage")}}, ou un {{CSSxRef("timeline-range-name")}} éventuellement suivi d'une `<length-percentage>`. Ces valeurs sont séparées par des espaces. `normal` équivaut à `0%` pour le début et à `100%` pour la fin. Définir `normal` avec une `<length-percentage>` pour le début ou la fin de la plage est invalide.

### Définir le début de plage et définir la fin par défaut

Lorsque vous définissez uniquement le `<animation-range-start>`, soit en définissant une seule {{CSSxRef("length-percentage")}}, une seule {{CSSxRef("timeline-range-name")}}, ou le mot-clé `normal`, ou en définissant un seul `<timeline-range-name>` suivi d'une seule `<length-percentage>`, la valeur calculée de `<animation-range-end>` suit des règles spécifiques&nbsp;:

Si la valeur est une seule `<length-percentage>` ou le mot-clé `normal`, cette valeur définit le `<animation-range-start>` et le `<animation-range-end>` est implicitement défini sur `normal`. Par exemple&nbsp;:

- `animation-range: 20%;` est équivalent à `animation-range-start: 20%; animation-range-end: normal;`
- `animation-range: normal;` est équivalent à `animation-range-start: 0%; animation-range-end: 100%;`

Si la valeur est une seule {{CSSxRef("timeline-range-name")}} (sans `<length-percentage>` qui suit), ce nom de plage de chronologie est appliqué à la fois à `<animation-range-start>` et `<animation-range-end>`, et les plages de `0%` et `100%` respectivement sont implicites. Par exemple&nbsp;:

- `animation-range: contain;` est équivalent à `animation-range-start: contain 0%; animation-range-end: contain 100%;`
- `animation-range: cover;` est équivalent à `animation-range-start: cover 0%; animation-range-end: cover 100%;`

Si la valeur est un seul `<timeline-range-name>` suivi d'une seule `<length-percentage>`, dans cet ordre, la paire définit le `<animation-range-start>`, et le `<timeline-range-name>` défini est appliqué à `<animation-range-end>` à `100%`. Par exemple&nbsp;:

- `animation-range: cover 20%;` est équivalent à `animation-range-start: cover 20%; animation-range-end: cover 100%;`
- `animation-range: contain 100px;` est équivalent à `animation-range-start: contain 100px; animation-range-end: contain 100%;`

### Définir explicitement le début et la fin de plage avec deux valeurs

Si deux valeurs ou plus sont incluses dans votre déclaration `animation-range` et que les valeurs ne sont pas un seul `<timeline-range-name>` suivi d'une `<length-percentage>`, alors `<animation-range-start>` et `<animation-range-end>` sont explicitement définis.

Si vous incluez deux valeurs et que la première valeur est le mot-clé `normal` ou une `<length-percentage>`, cette valeur définit le `<animation-range-start>`, et la seconde valeur définit le `<animation-range-end>`. Par exemple&nbsp;:

- `animation-range: normal 25%;` est équivalent à `animation-range-start: 0%; animation-range-end: 25%;`
- `animation-range: 25% 50%;` est équivalent à `animation-range-start: 25%; animation-range-end: 50%;`
- `animation-range: 25% contain;` est équivalent à `animation-range-start: 25%; animation-range-end: contain 100%;`
- `animation-range: 25% normal;` est équivalent à `animation-range-start: 25%; animation-range-end: 100%;`

### Plusieurs animations

Lorsque vous définissez des plages pour plusieurs animations, la propriété raccourcie `animation-range` est définie comme une ou plusieurs plages d'animation simples, séparées par des virgules. Chaque plage d'animation est appliquée aux animations dans l'ordre dans lequel les {{CSSxRef("animation-name")}} apparaissent. Dans les situations où le nombre d'animations et le nombre de valeurs de la propriété `animation-range` ne correspondent pas, si le nombre de valeurs `animation-range` est supérieur au nombre d'animations, les plages supplémentaires sont ignorées. Si le nombre d'animations est supérieur au nombre de plages, la liste des valeurs `animation-range` est répétée jusqu'à ce qu'il y ait une plage correspondante pour chaque animation. Par exemple, si l'on définit `animation-range: 25% 75%, normal;`, la plage d'animation de toutes les animations impaires sera `25% 75%` et celle de toutes les animations paires sera `0% 100%`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de la propriété `animation-range`

Dans cet exemple, nous réduisons la durée de l'animation de défilement de progression de vue en utilisant la propriété `animation-range` pour décaler le début et la fin de l'animation, et nous montrons l'effet de la propriété {{CSSxRef("animation-fill-mode")}} sur des chronologies d'animation raccourcies.

#### HTML

Au milieu d'un bloc de texte, nous incluons un élément que nous allons animer. Nous ajoutons beaucoup de texte pour nous assurer que notre contenu déborde de son conteneur, mais cela est masqué pour plus de clarté.
Nous incluons également une case à cocher pour activer ou désactiver la propriété {{CSSxRef("animation-fill-mode")}}, afin de montrer son effet sur des chronologies d'animation raccourcies. Ceci est également masqué.

```html-nolint hidden
<div class="content">
  <h1>Content</h1>

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
```

```html
<div class="animatedElement"></div>
```

```html-nolint hidden
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
  <label>
    <input type="checkbox" /> Ajouter <code>animation-fill-mode: both;</code>
  </label>
</div>
```

#### CSS

Nous définissons une animation qui anime l'opacité, l'échelle et la couleur de fond d'un élément, ce qui le fait apparaître progressivement, grandir et changer de couleur au fur et à mesure de l'animation. Nous appliquons cette animation à `animatedElement` avec la propriété raccourcie {{CSSxRef("animation")}}.

Une chronologie de progression de vue est créée en définissant la fonction {{CSSxRef("animation-timeline/view", "view()")}} comme valeur de la propriété {{CSSxRef("animation-timeline")}} sur notre `animatedElement`. Le résultat est que l'élément s'anime lorsqu'il se déplace vers le haut dans le document lors du défilement. Nous déclarons la propriété `animation-timeline` après la propriété raccourcie, car cette dernière la réinitialise.

Enfin, une déclaration `animation-range` est définie pour que l'animation commence plus tard que prévu et se termine plus tôt.

```css
.animatedElement {
  background-color: deeppink;
  animation: appear 1ms linear;
  animation-timeline: view();
  animation-range: entry 10% exit -25%;
}

@keyframes appear {
  from {
    background-color: rebeccapurple;
    opacity: 0;
    transform: scaleX(0);
  }

  to {
    background-color: darkturquoise;
    opacity: 0.75;
    transform: scaleX(0.75);
  }
}
```

Nous incluons également un style conditionnel&nbsp;: lorsque la case à cocher est activée, la propriété `animation-fill-mode` est appliquée à l'élément animé&nbsp;:

```css
:has(:checked) .animatedElement {
  animation-fill-mode: both;
}
```

Les autres styles sont masqués pour plus de clarté.

```css hidden
.animatedElement {
  width: 300px;
  height: 200px;
  margin: 0 auto;
  background-color: deeppink;
}

:has(:checked) .animatedElement {
  animation-fill-mode: both;
}

.content {
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
@supports not (animation-range: normal) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété 'animation-range'.";
    background-color: wheat;
    display: block;
    text-align: center;
    padding: 1rem 0;
  }
}
```

#### Résultat

Faites défiler pour voir l'élément animé.

{{EmbedLiveSample("Exemples", "100%", 480)}}

Remarquez que les valeurs de propriété de `from`, ou `0%`, d'étape ne sont pas appliquées à l'élément animé tant que le bord supérieur du bloc n'est pas à `10%` au-delà du bord inférieur du conteneur&nbsp;; il est alors en taille réelle, totalement opaque et magenta. À ce moment-là, l'animation est appliquée et il est mis en forme avec les valeurs définies par le sélecteur de `0%` [sélecteur d'étape](/fr/docs/Web/CSS/Reference/Selectors/Keyframe_selectors). Lorsque `animation-range-end` est atteint, à 25% du haut du conteneur de défilement, il revient à son style d'origine.

En général, il est conseillé de définir `animation-fill-mode: both` lors de la création d'[animations pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations). Le retour à l'état par défaut se produit car nous n'avons pas défini la propriété {{CSSxRef("animation-fill-mode")}} sur l'élément, qui peut être utilisée pour appliquer les styles d'une animation à un élément avant et après l'exécution de l'animation. Nous avons initialement omis la propriété dans cet exemple pour mieux visualiser les effets de `animation-range`.

Cochez la case pour appliquer la propriété `animation-fill-mode` à l'élément animé puis faites défiler à nouveau&nbsp;: les styles d'animation devraient maintenant être appliqués en continu.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("animation-timeline")}}
- La propriété {{CSSxRef("animation-range-end")}}
- La propriété {{CSSxRef("animation-range-start")}}
- La propriété {{CSSxRef("scroll-timeline")}}
- La propriété {{CSSxRef("timeline-scope")}}
- La propriété {{CSSxRef("view-timeline-inset")}}
- La propriété {{CSSxRef("animation-fill-mode")}}
- Le module [des animations pilotées par le défilement CSS](/fr/docs/Web/CSS/Guides/Scroll-driven_animations)
- [View timeline range visualizer](https://scroll-driven-animations.style/tools/view-timeline/ranges/)
