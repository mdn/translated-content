---
title: text-indent
slug: Web/CSS/Reference/Properties/text-indent
l10n:
  sourceCommit: 8d521c461c52730012ec7a06c36841e44ca98090
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

## Syntaxe

```css
/* Valeurs de type <length-percentage> */
text-indent: 3mm;
text-indent: 40px;
text-indent: 15%;

/* Valeurs avec un mot-clé */
text-indent: 5em each-line;
text-indent: 5vb hanging;
text-indent: 5% hanging each-line;

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
  - : L'indentation est un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}). Le pourcentage est relatif à la largeur du bloc englobant.
- `each-line`
  - : L'indentation affecte la première ligne du conteneur de bloc ainsi que chaque ligne après un _saut de ligne forcé_, mais n'affecte pas les lignes après un _retour à la ligne automatique_.
- `hanging`
  - : Inverse les lignes indentées. Toutes les lignes _sauf_ la première seront indentées.

## Description

La propriété [CSS](/fr/docs/Web/CSS) **`text-indent`** définit la longueur de l'espace vide (indentation) qui est placé avant les lignes de texte dans un conteneur de bloc. L'indentation définie par la propriété se produit au niveau du bord de début en ligne de la boîte de contenu. La valeur est un {{CSSxRef("&lt;length-percentage&gt;")}}, éventuellement avec un ou les deux mots-clés `each-line` et/ou `hanging`. La valeur initiale est `0`.

Les valeurs en pourcentage sont relatives à la taille intérieure de l'axe en ligne du conteneur de bloc, qui est la dimension de la zone de contenu uniquement, excluant le remplissage et la bordure du conteneur.

La propriété `<length-percentage>` peut prendre une valeur positive ou négative. Une valeur négative crée un retrait égal à la valeur absolue correspondante à la valeur positive de `<length-percentage>`. Une valeur négative repousse effectivement le texte d'une distance égale à la valeur, mais dans la direction opposée. Par exemple, `text-indent: 3%;` indente la première ligne de texte, en ajoutant un espace blanc correspondant à 3% de la taille intérieure du conteneur avant le texte, repoussant ainsi la première ligne de contenu vers la fin de la ligne. Définir `text-indent: -3%` décale la première ligne de texte vers l'extérieur, repoussant le début de la première ligne de texte de 3% de la taille intérieure du conteneur au-delà du début de la zone de contenu, dans le remplissage et la bordure, ce qui peut entraîner un débordement du conteneur.

Une valeur négative est différente de l'ajout du mot-clé `hanging` à une valeur positive. En continuant avec le même exemple, `text-indent: 3% hanging` n'annule pas l'indentation de la première ligne de texte. Au contraire, elle indente toutes les lignes de texte _sauf_ la première ligne, de 3% de la taille intérieure du conteneur.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple démontre l'utilisation de base de la propriété `text-indent`.

#### HTML

Nous incluons deux paragraphes de texte.

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

Nous utilisons la propriété `text-indent` pour indenter la première ligne de chaque paragraphe de `5em`.

```css
p {
  text-indent: 5em;
  background: powderblue;
}
```

### Résultat

{{EmbedLiveSample("Utilisation simple", "100%", "100%")}}

### Indentation proportionnelle

En utilisant le même HTML que dans l'exemple précédent, nous démontrons ici l'utilisation des valeurs en pourcentage et comment les valeurs en pourcentage sont relatives à la zone de contenu de l'élément dans la direction en ligne.

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

Nous définissons la propriété `text-indent` sur une valeur en pourcentage. Nous avons également ajouté un remplissage et des rayures verticales pour mieux évaluer la taille de l'indentation par rapport au modèle de boîte de l'élément.

```css
p {
  text-indent: 30%;
  padding: 30px;
  background-image: repeating-linear-gradient(
    to right,
    transparent 0 9.5%,
    #dedede 9.5% 10%
  );
  background: plum;
}
```

#### Résultat

{{EmbedLiveSample("Indentation proportionnelle", "100%", "100%")}}

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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriétés CSS associées&nbsp;:
  - {{CSSxRef("text-justify")}}
  - {{CSSxRef("text-orientation")}}
  - {{CSSxRef("text-overflow")}}
  - {{CSSxRef("text-rendering")}}
  - {{CSSxRef("text-transform")}}
  - {{CSSxRef("hanging-punctuation")}}
- Le module [de décoration de texte CSS](/fr/docs/Web/CSS/Guides/Text_decoration)
- Le module [de texte CSS](/fr/docs/Web/CSS/Guides/Text)
- [Apprendre la mise en forme du HTML avec CSS](/fr/docs/Learn_web_development/Core/Styling_basics)
