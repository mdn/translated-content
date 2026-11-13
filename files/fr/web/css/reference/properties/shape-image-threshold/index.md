---
title: Propriété CSS `shape-image-threshold`
short-title: shape-image-threshold
slug: Web/CSS/Reference/Properties/shape-image-threshold
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`shape-image-threshold`** définit le seuil du canal alpha utilisé pour extraire la forme à partir d'une image en tant que valeur pour {{CSSxRef("shape-outside")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: shape-image-threshold")}}

```css interactive-example-choice
shape-outside: linear-gradient(
  50deg,
  rgb(77 26 103),
  transparent 80%,
  transparent
);
shape-image-threshold: 0.2;
```

```css interactive-example-choice
shape-outside: linear-gradient(
  50deg,
  rgb(77 26 103),
  transparent 80%,
  transparent
);
shape-image-threshold: 0.4;
```

```css interactive-example-choice
shape-outside: linear-gradient(
  50deg,
  rgb(77 26 103),
  transparent 80%,
  transparent
);
shape-image-threshold: 0.6;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="example-container">
    <div class="transition-all" id="example-element"></div>
    Nous avions convenu, mon compagnon et moi, que je devrais passer le voir
    chez lui, après le dîner, pas plus tard que onze heures. Ce jeune Français
    athlétique appartient à un petit groupe de sportifs parisiens, qui se sont
    adonnés au «&nbsp;ballon&nbsp;» comme passe-temps. Après avoir épuisé toutes
    les sensations que l'on peut trouver dans les sports ordinaires, même celles
    de «&nbsp;l'automobile&nbsp;» à toute vitesse, les membres de «&nbsp;l'Aéro
    Club&nbsp;» recherchent maintenant dans les airs, où ils se livrent à toutes
    sortes d'exploits audacieux, l'excitation nerveuse qu'ils ont cessé de
    trouver sur terre.
  </div>
</section>
```

```css interactive-example
.example-container {
  text-align: left;
  padding: 20px;
}

#example-element {
  float: left;
  width: 150px;
  height: 150px;
  margin: 20px;
  background-image: linear-gradient(
    50deg,
    rgb(77 26 103),
    transparent 80%,
    transparent
  );
}
```

Touts les pixels dont la composante alpha est supérieure à ce seuil seront retenus pour délimiter les contours de la formes. Une valeur de `0.5` indiquera par exemple qu'on prend la forme qui englobe tous les pixels dont l'opacité est supérieure à 50%.

## Syntaxe

```css
/* Valeurs de type <number> */
shape-image-threshold: 0.7;

/* Valeurs globales */
shape-image-threshold: inherit;
shape-image-threshold: initial;
shape-image-threshold: revert;
shape-image-threshold: revert-layer;
shape-image-threshold: unset;
```

### Valeurs

- {{CSSxRef("&lt;alpha-value&gt;")}}
  - : Définit le seuil utilisé pour extraire une forme à partir d'une image. La forme est définie par les pixels dont la valeur du canal alpha est supérieure au seuil. Les valeurs en dehors de l'intervalle 0.0 (totalement transparent) à 1.0 (totalement opaque) sont ramenées dans cet intervalle.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Aligner le texte sur un dégradé

Cet exemple crée un bloc {{HTMLElement("div")}} avec une image d'arrière-plan en dégradé. Le dégradé est établi comme une forme CSS à l'aide de `shape-outside`, de sorte que les pixels du dégradé qui sont au moins à 20 % opaques (c'est-à-dire ceux dont la composante alpha est supérieure à 0,2) sont considérés comme faisant partie de la forme.

#### HTML

```html
<div id="gradient-shape"></div>

<p>
  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vel at commodi
  voluptates enim, distinctio officia. Saepe optio accusamus doloribus sint
  facilis itaque ab nulla, dolor molestiae assumenda cum sit placeat adipisci,
  libero quae nihil porro debitis laboriosam inventore animi impedit nostrum
  nesciunt quisquam expedita! Dolores consectetur iure atque a mollitia dicta
  repudiandae illum exercitationem aliquam repellendus ipsum porro modi, id nemo
  eligendi, architecto ratione quibusdam iusto nisi soluta? Totam inventore ea
  eum sed velit et eligendi suscipit accusamus iusto dolore, at provident eius
  alias maxime pariatur non deleniti ipsum sequi rem eveniet laboriosam magni
  expedita?
</p>
```

#### CSS

```css
#gradient-shape {
  width: 150px;
  height: 150px;
  float: left;
  background-image: linear-gradient(30deg, black, transparent 80%, transparent);
  shape-outside: linear-gradient(30deg, black, transparent 80%, transparent);
  shape-image-threshold: 0.2;
}
```

La forme est établie ici en utilisant {{CSSxRef("background-image")}} avec un dégradé linéaire plutôt qu'un fichier image. Le même dégradé est également utilisé comme image à partir de laquelle la forme est dérivée pour établir la zone de flottement, en utilisant la propriété {{CSSxRef("shape-outside")}}.

Le seuil d'opacité de 20 % pour considérer les pixels du dégradé comme faisant partie de la forme est ensuite établi en utilisant `shape-image-threshold` avec une valeur de `0.2`.

#### Résultat

{{EmbedLiveSample("Aligner le texte sur un dégradé", 600, 230)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les formes CSS](/fr/docs/Web/CSS/Guides/Shapes)
- [Un aperçu des formes CSS](/fr/docs/Web/CSS/Guides/Shapes/Overview)
- Le type de donnée {{CSSxRef("&lt;basic-shape&gt;")}}
- La propriété {{CSSxRef("shape-outside")}}
- La propriété {{CSSxRef("shape-margin")}}
