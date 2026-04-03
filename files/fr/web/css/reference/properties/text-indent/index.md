---
title: text-indent
slug: Web/CSS/Reference/Properties/text-indent
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`text-indent`** définit la longueur de l'espace vide (indentation) qui est placé avant les lignes de texte dans un bloc.

{{InteractiveExample("Démonstration CSS&nbsp;: text-indent")}}

```css interactive-example-choice
text-indent: 0;
```

```css interactive-example-choice
text-indent: 30%;
```

```css interactive-example-choice
text-indent: -3em;
```

```css interactive-example-choice
text-indent: 3em each-line;
```

```css interactive-example-choice
text-indent: 3em hanging;
```

```css interactive-example-choice
text-indent: 3em hanging each-line;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>
      Ce texte est contenu dans un seul paragraphe. Ce paragraphe comporte deux
      phrases.
    </p>
    <p>
      Ceci est un nouveau paragraphe. Il y a un élément de saut de ligne
      <code>&lt;br&gt;</code> après cette phrase.<br />Le voici&nbsp;! Remarquez
      comment cela affecte l'indentation.
    </p>
  </div>
</section>
```

```css interactive-example
section {
  font-size: 1.25em;
  background-color: darkslateblue;
  align-items: start;
}

#example-element {
  text-align: left;
  margin-left: 3em;
  background-color: slateblue;
  color: white;
}
```

L'espacement horizontal est par rapport au bord gauche (ou droit, pour les mises en page de droite à gauche) de la boîte de contenu de l'élément de niveau bloc contenant.

## Syntaxe

```css
/* Valeurs de type <length> */
text-indent: 3mm;
text-indent: 40px;

/* Valeurs de type <percentage> relative à la largeur du bloc englobant */
text-indent: 15%;

/* Valeurs avec un mot-clé */
text-indent: 5em each-line;
text-indent: 5em hanging;
text-indent: 5em hanging each-line;

/* Valeurs globales */
text-indent: inherit;
text-indent: initial;
text-indent: revert;
text-indent: revert-layer;
text-indent: unset;
```

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : L'indentation est définie de façon absolue avec une longueur ({{CSSxRef("&lt;length&gt;")}}). On peut utiliser des valeurs négatives. Voir la page sur {{CSSxRef("&lt;length&gt;")}} pour les différentes unités possibles.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : L'indentation est un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) de la largeur du bloc englobant.
- `each-line`
  - : L'indentation affecte la première ligne du conteneur de bloc ainsi que chaque ligne après un _saut de ligne forcé_, mais n'affecte pas les lignes après un _retour à la ligne automatique_.
- `hanging`
  - : Inverse les lignes indentées. Toutes les lignes _sauf_ la première seront indentées.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Indentation simple

#### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
```

#### CSS

```css
p {
  text-indent: 5em;
  background: powderblue;
}
```

### Résultat

{{EmbedLiveSample("Indentation simple", "100%", "100%") }}

### Ignorer l'indentation sur le premier paragraphe

Une pratique typographique courante lorsque l'indentation des paragraphes est présente consiste à ignorer l'indentation pour le premier paragraphe. Comme l'indique _The Chicago Manual of Style_, «&nbsp;la première ligne de texte suivant un sous-titre peut commencer à gauche ou être indentée selon l'indentation habituelle du paragraphe&nbsp;».

Traiter le premier paragraphe différemment des paragraphes suivants peut se faire en utilisant le [combinateur de voisins directs](/fr/docs/Web/CSS/Reference/Selectors/Next-sibling_combinator), comme dans l'exemple suivant&nbsp;:

#### HTML

```html
<h2>Lorem ipsum</h2>

<p>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu
  venenatis quam. Vivamus euismod eleifend metus vitae pharetra. In vel tempor
  metus. Donec dapibus feugiat euismod. Vivamus interdum tellus dolor. Vivamus
  blandit eros et imperdiet auctor. Mauris sapien nunc, condimentum a efficitur
  non, elementum ac sapien. Cras consequat turpis non augue ullamcorper, sit
  amet porttitor dui interdum.
</p>

<p>
  Sed laoreet luctus erat at rutrum. Proin velit metus, luctus in sapien in,
  tincidunt mattis ex. Praesent venenatis orci at sagittis eleifend. Nulla
  facilisi. In feugiat vehicula magna iaculis vehicula. Nulla suscipit tempor
  odio a semper. Donec vitae dapibus ipsum. Donec libero purus, convallis eu
  efficitur id, pulvinar elementum diam. Maecenas mollis blandit placerat. Ut
  gravida pellentesque nunc, in eleifend ante convallis sit amet.
</p>

<h2>Donec ullamcorper elit nisl</h2>

<p>
  Donec ullamcorper elit nisl, sagittis bibendum massa gravida in. Fusce tempor
  in ante gravida iaculis. Integer posuere tempor metus. Vestibulum lacinia,
  nunc et dictum viverra, urna massa aliquam tellus, id mollis sem velit
  vestibulum nulla. Pellentesque habitant morbi tristique senectus et netus et
  malesuada fames ac turpis egestas. Donec vulputate leo ut iaculis ultrices.
  Cras egestas rhoncus lorem. Nunc blandit tempus lectus, rutrum hendrerit orci
  eleifend id. Ut at quam velit.
</p>

<p>
  Aenean rutrum tempor ligula, at luctus ligula auctor vestibulum. Sed
  sollicitudin velit in leo fringilla sollicitudin. Proin eu gravida arcu. Nam
  iaculis malesuada massa, eget aliquet turpis sagittis sed. Sed mollis tellus
  ac dui ullamcorper, nec lobortis diam pellentesque. Quisque dapibus accumsan
  libero, sed euismod ipsum ullamcorper sed.
</p>
```

#### CSS

```css
p {
  text-align: justify;
  margin: 1em 0 0 0;
}
p + p {
  text-indent: 2em;
  margin: 0;
}
```

#### Résultat

{{EmbedLiveSample("Ignorer l'indentation sur le premier paragraphe", "", 500)}}

### Indentation proportionnelle

#### HTML

```html
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
<p>
  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
  nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
</p>
```

#### CSS

```css
p {
  text-indent: 30%;
  background: plum;
}
```

#### Résultat

{{EmbedLiveSample("Indentation proportionnelle", "100%", "100%")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre la mise en forme du HTML avec CSS](/fr/docs/Learn_web_development/Core/Styling_basics)
- Propriétés CSS associées&nbsp;:
  - {{CSSxRef("text-justify")}}
  - {{CSSxRef("text-orientation")}}
  - {{CSSxRef("text-overflow")}}
  - {{CSSxRef("text-rendering")}}
  - {{CSSxRef("text-transform")}}
  - {{CSSxRef("hanging-punctuation")}}
- Le module [de décoration de texte CSS](/fr/docs/Web/CSS/Guides/Text_decoration)
- Le module [de texte CSS](/fr/docs/Web/CSS/Guides/Text)
