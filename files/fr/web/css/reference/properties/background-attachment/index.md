---
title: background-attachment
slug: Web/CSS/Reference/Properties/background-attachment
l10n:
  sourceCommit: d35f07a74f76374a6d98aa07b0b42e79322b02ec
---

La propriété [CSS](/fr/docs/Web/CSS) **`background-attachment`** définit si la position d'une image d'arrière-plan est fixe par rapport à la {{Glossary("viewport", "zone d'affichage")}}, ou si elle défile avec son bloc englobant.

{{InteractiveExample("Démonstration CSS&nbsp;: background-attachment")}}

```css interactive-example-choice
background-attachment: scroll;
```

```css interactive-example-choice
background-attachment: fixed;
```

```css interactive-example-choice
background-attachment: local;
```

```css interactive-example-choice
background-attachment: fixed, scroll;
```

```css interactive-example-choice
background-attachment: scroll, fixed;
```

```html interactive-example
<section id="default-example">
  <div id="example-element">
    <p>
      D'ici à là<br />
      de là à ici,<br />
      Des choses amusantes<br />
      Sont partout.
    </p>
    <p>--Dr. Seuss</p>
  </div>
</section>
```

```css interactive-example
body {
  overflow: scroll;
}

#default-example {
  height: 600px;
}

#example-element {
  max-width: 20rem;
  height: 100%;
  background:
    url("/shared-assets/images/examples/lizard.png") right 3rem top 1rem / 15rem
      no-repeat,
    url("/shared-assets/images/examples/moon.jpg") center / 10rem;
  font-size: 1.2rem;
  font-weight: bolder;
  overflow: auto;
  padding: 20px;
  color: red;
  text-shadow:
    0 0 0.5rem black,
    0 0 0.5rem black;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
background-attachment: scroll;
background-attachment: fixed;
background-attachment: local;

/* Valeurs globales */
background-attachment: inherit;
background-attachment: initial;
background-attachment: revert;
background-attachment: unset;
```

La propriété `background-attachment` est définie avec un ou plusieurs mots-clés de la liste suivante, séparés par des virgules.

### Valeurs

- `fixed`
  - : Ce mot-clé indique que l'arrière-plan est fixe par rapport à la zone d'affichage (<i lang="en">viewport</i> en anglais). Même si un élément dispose d'un mécanisme de défilement, l'arrière-plan ne se déplace pas avec l'élément. Si cette valeur est définie, la propriété {{CSSxRef("background-origin")}} est ignorée.
- `local`
  - : Ce mot-clé indique que l'arrière-plan se déplace avec le contenu de l'élément associé. Ainsi, si l'élément défile, l'arrière-plan défilera avec. Les zones de positionnement et de dessin de l'arrière-plan sont relatives à la zone de l'élément plutôt qu'au cadre extérieur.
- `scroll`
  - : Ce mot-clé indique que l'arrière-plan est fixé par rapport au contenu de l'élément (il ne défile pas avec) mais est rattaché à la bordure de l'élément.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Exemple simple

#### HTML

Nous incluons une liste non ordonnée ({{HTMLElement("ul")}}) avec quelques éléments de liste ({{HTMLElement("li")}}).

```html
<ul>
  <li>Un poisson</li>
  <li>Deux poissons</li>
  <li>Poisson rouge</li>
  <li>Poisson bleu</li>
  <li>Poisson noir</li>
  <li>Poisson bleu</li>
  <li>Vieux poisson</li>
  <li>Nouveau poisson.</li>
  <li>Celui-ci a une petite étoile.</li>
  <li>Celui-ci a une petite voiture.</li>
  <li>Dis&nbsp;! Quel lot</li>
  <li>De poissons il y a.</li>
</ul>
```

#### CSS

Nous définissons une image de fond ({{CSSxRef("background-image")}}) et réglons la propriété `background-attachment` sur `fixed`. Nous incluons également une {{CSSxRef("height")}}, une {{CSSxRef("width")}} et un débordement ({{CSSxRef("overflow")}}) pour garantir que l'élément défile.

```css
ul {
  background-image: url("star-solid.gif");
  background-attachment: fixed;

  width: 300px;
  height: 70px;
  overflow: scroll;
}
```

#### Résultat

{{EmbedLiveSample("Exemple simple")}}

Notez comment l'arrière-plan reste fixe par rapport à la zone d'affichage de la liste lorsque vous faites défiler le texte débordant.

### Gestion de plusieurs arrière-plans

Cette propriété prend en charge plusieurs images d'arrière-plan. Vous pouvez définir une valeur `<attachment>` différente pour chaque image, séparées par des virgules. Chaque image est associée au type `<attachment>` correspondant, de la première à la dernière.

#### HTML

Nous incluons tout le poème de Dr. Seuss.

```html
<div>
  <ul>
    <li>Un poisson</li>
    <li>Deux poissons</li>
    <li>Poisson rouge</li>
    <li>Poisson bleu</li>
    <li>Poisson noir</li>
    <li>Poisson bleu</li>
    <li>Vieux poisson</li>
    <li>Nouveau poisson.</li>
    <li>Celui-ci a une petite étoile.</li>
    <li>Celui-ci a une petite voiture.</li>
    <li>Dis&nbsp;! Quel lot</li>
    <li>De poissons il y a.</li>
    <li>Oui. Certains sont rouges. Et certains sont bleus.</li>
    <li>Certains sont vieux. Et certains sont nouveaux.</li>
    <li>Certains sont tristes.</li>
    <li>Et certains sont joyeux.</li>
    <li>Et certains sont très, très mauvais.</li>
    <li>Pourquoi sont-ils</li>
    <li>Tristes et joyeux et mauvais&nbsp;?</li>
    <li>Je ne sais pas.</li>
    <li>Allez demander à votre père.</li>
    <li>Certains sont maigres.</li>
    <li>Et certains sont gros.</li>
    <li>Le gros a</li>
    <li>Un chapeau jaune.</li>
    <li>De là à ici, d'ici à là,</li>
    <li>Des choses amusantes</li>
    <li>Sont partout.</li>
  </ul>
  <p>--Dr. Seuss</p>
</div>
```

#### CSS

Nous incluons une {{CSSxRef("height")}}, une {{CSSxRef("width")}} et un {{CSSxRef("overflow")}} sur le parent {{HTMLElement("div")}} pour garantir que le contenu défile.

Nous définissons deux images d'arrière-plan séparées par des virgules sur la liste, et réglons la propriété `background-attachment` sur `fixed, scroll`, ce qui signifie que la première image d'arrière-plan sera `fixed` et la seconde sera `scroll`. Nous réglons la propriété {{CSSxRef("background-repeat")}} pour que les deux images d'arrière-plan se répètent verticalement, en les séparant avec la propriété {{CSSxRef("background-position")}}.

```css
div {
  width: 300px;
  height: 200px;
  overflow: scroll;
}
ul {
  background-image: url("star-solid.gif"), url("star-transparent.gif");
  background-attachment: fixed, scroll;
  background-repeat: repeat-y;
  background-position:
    0 0,
    100px 0;
}
```

#### Résultat

{{EmbedLiveSample("Gestion de plusieurs arrière-plans")}}

Notez comment la première image d'arrière-plan est fixe par rapport à la zone d'affichage tandis que la seconde image d'arrière-plan est fixe par rapport à la liste.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres propriétés CSS {{CSSxRef("background")}}&nbsp;:
  - {{CSSxRef("background-clip")}}
  - {{CSSxRef("background-color")}}
  - {{CSSxRef("background-image")}}
  - {{CSSxRef("background-origin")}}
  - {{CSSxRef("background-position")}}
  - {{CSSxRef("background-repeat")}}
  - {{CSSxRef("background-size")}}
- [Utiliser plusieurs arrière-plans](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
- Le module [de fond et de bordures CSS](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders)
