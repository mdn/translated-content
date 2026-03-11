---
title: :target-after
slug: Web/CSS/Reference/Selectors/:target-after
l10n:
  sourceCommit: 9dbcd91284ec1ec64c4d8b343c3770880dd25129
---

{{SeeCompatTable}}

La [pseudo-classe](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes) [CSS](/fr/docs/Web/CSS) **`:target-after`** sélectionne les marqueurs de défilement qui viennent _après_ le marqueur de défilement actif (celui qui correspond actuellement à {{CSSxRef(":target-current")}}) dans un groupe de marqueurs de défilement. Vous pouvez utiliser ce sélecteur pour styliser les éléments de navigation qui viennent après la position de navigation actuelle dans un groupe de marqueurs de défilement.

> [!NOTE]
> La pseudo-classe `:target-after` n'est valide que sur les pseudo-éléments {{CSSxRef("::scroll-marker")}} et les éléments qui ont été désignés comme marqueurs de défilement via la propriété {{CSSxRef("scroll-target-group")}}.

## Syntaxe

```css-nolint
:target-after {
  /* ... */
}
```

## Exemples

### Mettre en forme les éléments de navigation avant et après le marqueur de défilement actif

Dans cet exemple, nous utilisons les pseudo-classes {{CSSxRef(":target-before")}} et `:target-after` pour mettre en évidence les marqueurs de défilement avant et après celui actif, indiquant les éléments que l'utilisateur·ice a déjà consultés et ceux qui restent à venir.

#### HTML

Le balisage contient un tableau de contenu créé en utilisant une liste ordonnée ({{HTMLElement("ol")}}/{{HTMLElement("li")}}) et des éléments HTML {{HTMLElement("a")}}. Cela est suivi par une série d'éléments HTML {{HTMLElement("section")}} contenant du contenu.

```html
<nav id="toc">
  <ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#ch1">Chapitre 1</a></li>
    <li><a href="#ch2">Chapitre 2</a></li>
    <li><a href="#ch3">Chapitre 3</a></li>
    <li><a href="#ch4">Chapitre 4</a></li>
  </ol>
</nav>
<section id="intro" class="chapter">
  <h1>Prose du siècle</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</section>
<section id="ch1" class="chapter">
  <h2>Chapitre 1</h2>

  <!-- ... -->
</section>
<section id="ch2" class="chapter">
  <h2>Chapitre 2</h2>

  <!-- ... -->
</section>

<!-- ... -->
```

```html hidden live-sample___targeting-before-and-after
<nav id="toc">
  <ol>
    <li><a href="#intro">Introduction</a></li>
    <li><a href="#ch1">Chapitre 1</a></li>
    <li><a href="#ch2">Chapitre 2</a></li>
    <li><a href="#ch3">Chapitre 3</a></li>
    <li><a href="#ch4">Chapitre 4</a></li>
  </ol>
</nav>
<section id="intro" class="chapter">
  <h1>Mon histoire</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
</section>
<section id="ch1" class="chapter">
  <h2>Chapitre 1</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
  <p>
    Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada
    ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed
    est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus
    tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies
    lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis
    vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque
    penatibus et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</section>
<section id="ch2" class="chapter">
  <h2>Chapitre 2</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
</section>
<section id="ch3" class="chapter">
  <h2>Chapitre 3</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
</section>
<section id="ch4" class="chapter">
  <h2>Chapitre 4</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus
    aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci,
    pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at
    ultricies tellus laoreet sit amet.
  </p>
  <p>
    Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet
    orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare
    ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat.
    Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra
    congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus
    varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.
  </p>
</section>
```

#### CSS

Nous avons défini `scroll-target-group: auto` sur le `<ol>` pour le transformer en conteneur de groupe de marqueurs de défilement et laisser le navigateur déterminer quel élément `<a>` est le marqueur de défilement actif à un moment donné (c'est-à-dire quelle cible de lien est actuellement visible). Nous stylons ensuite la pseudo-classe `:target-current` avec une {{CSSxRef("color")}} `red` afin qu'elle se démarque clairement.

```css hidden live-sample___targeting-before-and-after
body {
  font: 1.2em / 1.5 system-ui;
  width: 50%;
  max-width: 700px;
  margin: 0 auto;
}

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
}

section {
  padding-top: 60px;
}

a {
  color: black;
  text-decoration: none;
}

a:hover,
a:focus {
  text-decoration: underline;
}

ol {
  display: flex;
  width: 100%;
  justify-content: space-around;
  list-style-type: none;
  padding: 20px 0;
  margin: 0;
  background: white;
}

@supports not selector(:target-after) {
  body::before {
    content: "Votre navigateur ne prend pas en charge les pseudo-classes :target-before et :target-after.";
    color: black;
    background-color: #ffcd33;
    text-align: center;
    padding: 1rem;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1;
  }
}
```

```css live-sample___targeting-before-and-after
ol {
  scroll-target-group: auto;
}

:target-current {
  color: red;
}
```

Enfin, nous utilisons la pseudo-classe `:target-before` pour mettre en forme tous les éléments `<a>` avant le marqueur de défilement actif avec une couleur grise et un texte barré, afin de les faire apparaître comme complétés/terminés, et nous utilisons la pseudo-classe `:target-after` pour mettre en forme tous les éléments `<a>` après le marqueur de défilement actif avec un soulignement lumineux.

```css live-sample___targeting-before-and-after
a:target-before {
  color: gray;
  text-decoration: line-through;
}

a:target-after {
  text-decoration: underline orange 2px;
}
```

#### Résultat

Essayez de naviguer soit en cliquant sur les liens, soit en faisant défiler la page. Dans les deux cas, vous verrez que la couleur du texte rouge se déplace entre les liens pour correspondre à la section actuellement visible. Les liens avant et après le lien rouge actuel se mettent également à jour pour utiliser les styles définis dans les règles `a:target-before` et `a:target-after`.

{{EmbedLiveSample("targeting-before-and-after", "100%", 500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("scroll-marker-group")}}
- La propriété {{CSSxRef("scroll-target-group")}}
- Les pseudo-classes {{CSSxRef(":target-current")}}, {{CSSxRef(":target-before")}}
- Le pseudo-élément {{CSSxRef("::scroll-marker")}}
- Le pseudo-élément {{CSSxRef("::scroll-marker-group")}}
- [Créer des carrousels CSS](/fr/docs/Web/CSS/Guides/Overflow/Carousels)
- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- [Galerie de carrousels CSS <sup>(angl.)</sup>](https://chrome.dev/carousel/) sur chrome.dev (2025)
