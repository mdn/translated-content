---
title: Utilisation des transformations CSS
slug: Web/CSS/CSS_Transforms/Using_CSS_transforms
translation_of: Web/CSS/CSS_Transforms/Using_CSS_transforms
original_slug: Web/CSS/CSS_Transforms/Utilisation_des_transformations_CSS
---
{{CSSRef}}

En modifiant l'espace des coordonnées, les **transformations CSS** permettent de changer la forme et la position d'un contenu donner sans perturber le flux normal du document.

Elles sont implémentées en utilisant un ensemble de propriétés CSS qui permettent d'appliquer des transformations linéaires affines aux éléments HTML. Ces transformations incluent la rotation, l'inclinaison, l'homothétie, et la translation à la fois dans le plan (2D) et dans l'espace (3D).

> **Attention :** Seuls les éléments positionnés selon [le modèle de boîtes](/fr/docs/Web/CSS/CSS_Box_Model) peuvent être transformés. Pour simplifier, on peut se souvenir que tout élément avec `display: block` est positionné selon le modèle de boîtes.

## Propriétés des transformations CSS

Deux propriétés majeures sont utilisées pour définir les transformations CSS&nbsp;: [`transform`](/fr/docs/Web/CSS/transform) et [`transform-origin`](/fr/docs/Web/CSS/transform-origin).

- [`transform-origin`](/fr/docs/Web/CSS/transform-origin)
  - : Spécifie la position de l'origine. Par défaut, celle-ci est au centre de l'élément et peut être déplacée. Elle est utilisée par de nombreuses transformations, comme les rotations, les homothéties ou l'inclinaison, qui nécessitent un point spécifique comme paramètre.
- [`transform`](/fr/docs/Web/CSS/transform)
  - : Spécifie la transformation à appliquer à l'élément. Il s'agit d'une liste de transformations séparées par des espaces, qui sont appliquées les unes après les autres, avec une opération de composition. Les transformations qui sont composées entre elles sont appliquées dans l'ordre, de droite à gauche.

## Exemples

Voici une version originale du logo MDN&nbsp;:

![Logo de MDN](logo.png)

### Rotation

Ici, on le tourne de 90 degrés depuis le coin inférieur gauche&nbsp;:

```html
<img style="transform: rotate(90deg);
            transform-origin: bottom left;"
     src="logo.png">
```

{{EmbedLiveSample('', 'auto', 250)}}

### Distorsion et translation

Ici, on applique une distorsion de 10 degrés et on translate l'image de 150 pixels sur l'axe des abscisses&nbsp;:

```html
<img style="transform: skewx(10deg) translatex(150px);
            transform-origin: bottom left;"
     src="logo.png">
```

{{EmbedLiveSample('')}}

## Propriétés CSS spécifiques à la 3D

Réaliser des transformations CSS dans l'espace en trois dimensions est un petit peu plus complexe. Il faut d'abord définir l'espace 3D en lui donnant une perspective, puis il faut configurer le comportement des éléments en deux dimensions dans cet espace.

### La perspective

Le premier élément à définir est la _perspective_. Cela se fait grâce à la propriété [`perspective`](/fr/docs/Web/CSS/perspective). La perspective est ce qui donne l'impression de troisième dimension. Plus les éléments sont loin de l'observateur, plus ils seront petits.

#### Définir la perspective

Cet exemple illustre un cube avec une perspective placée à différentes positions. La vitesse à laquelle le cube se réduit en profondeur est définie avec la propriété [`perspective`](/fr/docs/Web/CSS/perspective). Plus cette valeur est petite, plus la perspective est profonde.

##### HTML

Le fragment HTML qui suit crée quatre copies de la même boîte, chacune ayant une perspective différente.

```html
<table>
  <tbody>
    <tr>
      <th><code>perspective: 250px;</code>
      </th>
      <th><code>perspective: 350px;</code>
      </th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube pers250">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pers350">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
    <tr>
      <th><code>perspective: 500px;</code>
      </th>
      <th><code>perspective: 650px;</code>
      </th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube pers500">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
      <td>
        <div class="container">
          <div class="cube pers650">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

##### CSS

Ce fragment de code CSS utilise des classes pour chacune des perspectives et d'autres pour la boîte englobante, le cube et chacune de ses faces.

```css
/* Classes pour les différentes valeurs de perspective */
.pers250 {
  perspective: 250px;
}

.pers350 {
  perspective: 350px;
}

.pers500 {
  perspective: 500px;
}

.pers650 {
  perspective: 650px;
}

/* Définition du conteneur, du cube et d'une face */
.container {
  width: 200px;
  height: 200px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  backface-visibility: visible;
  perspective-origin: 150% 150%;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* On définit chaque face selon sa direction */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}

.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}

.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}

.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}

.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

/* Et on rend le tableau un peu plus joli */
th, p, td {
  background-color: #EEEEEE;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
}
```

##### Résultat

{{EmbedLiveSample('', 660, 710)}}

Le deuxième élément qu'il faut configurer est la position de la personne qui observe le contenu. Cela se fait grâce à la propriété [`perspective-origin`](/fr/docs/Web/CSS/perspective-origin). Par défaut, la perspective est centrée sur l'axe d'observation, ce qui n'est pas toujours pertinent.

#### Modifier l'origine de la perspective

Dans cet exemple, on illustre les valeurs les plus communes `perspective-origin` avec différents cubes.

##### HTML

```html
<section>

<figure>
  <figcaption><code>perspective-origin: top left;</code></figcaption>
    <div class="container">
     <div class="cube potl">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
     </div>
    </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: top;</code></figcaption>
   <div class="container">
    <div class="cube potm">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: top right;</code></figcaption>
  <div class="container">
    <div class="cube potr">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: left;</code></figcaption>
  <div class="container">
    <div class="cube poml">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: 50% 50%;</code></figcaption>
  <div class="container">
    <div class="cube pomm">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: right;</code></figcaption>
  <div class="container">
    <div class="cube pomr">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: bottom left;</code></figcaption>
  <div class="container">
    <div class="cube pobl">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: bottom;</code></figcaption>
  <div class="container">
    <div class="cube pobm">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: bottom right;</code></figcaption>
  <div class="container">
    <div class="cube pobr">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: -200% -200%;</code></figcaption>
  <div class="container">
    <div class="cube po200200neg">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: 200% 200%;</code></figcaption>
  <div class="container">
    <div class="cube po200200pos">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

<figure>
  <figcaption><code>perspective-origin: 200% -200%;</code></figcaption>
  <div class="container">
    <div class="cube po200200">
      <div class="face front">1</div>
      <div class="face back">2</div>
      <div class="face right">3</div>
      <div class="face left">4</div>
      <div class="face top">5</div>
      <div class="face bottom">6</div>
    </div>
  </div>
</figure>

</section>
```

##### CSS

```css
/* Les valeurs de perspective-origin pour chaque exemple */
.potl {
  perspective-origin: top left;
}
.potm {
  perspective-origin: top;
}
.potr {
  perspective-origin: top right;
}
.poml {
  perspective-origin: left;
}
.pomm {
  perspective-origin: 50% 50%;
}
.pomr {
  perspective-origin: right;
}
.pobl {
  perspective-origin: bottom left;
}
.pobm {
  perspective-origin: bottom;
}
.pobr {
  perspective-origin: bottom right;
}
.po200200neg {
  perspective-origin: -200% -200%;
}
.po200200pos {
  perspective-origin: 200% 200%;
}
.po200200 {
  perspective-origin: 200% -200%;
}

/* On définit le conteneur, le cube et une face */
.container {
  width: 100px;
  height: 100px;
  margin: 24px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  backface-visibility: visible;
  perspective: 300px;
  transform-style: preserve-3d;
}

.face {
  display: block;
  position: absolute;
  width: 100px;
  height: 100px;
  border: none;
  line-height: 100px;
  font-family: sans-serif;
  font-size: 60px;
  color: white;
  text-align: center;
}

/* On définit chaque face selon sa direction */
.front {
  background: rgba(0, 0, 0, 0.3);
  transform: translateZ(50px);
}
.back {
  background: rgba(0, 255, 0, 1);
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}
.right {
  background: rgba(196, 0, 0, 0.7);
  transform: rotateY(90deg) translateZ(50px);
}
.left {
  background: rgba(0, 0, 196, 0.7);
  transform: rotateY(-90deg) translateZ(50px);
}
.top {
  background: rgba(196, 196, 0, 0.7);
  transform: rotateX(90deg) translateZ(50px);
}
.bottom {
  background: rgba(196, 0, 196, 0.7);
  transform: rotateX(-90deg) translateZ(50px);
}

/* On agence le tout de façon plus agréable */
section {
  background-color: #EEE;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
```

##### Résultat

{{EmbedLiveSample('', '100%', 700)}}

Une fois que cela est fait, on peut manipuler l'élément dans l'espace en trois dimensions.

## Voir aussi

- [Utiliser `deviceorientation` avec les transformations 3D](/fr/docs/Web/Guide/Events/Using_device_orientation_with_3D_transforms)
- [Une introduction aux transformations CSS, un billet de David DeSandro (en anglais)](https://desandro.github.com/3dtransforms/)
- [CSS <i lang="en">Transform playground</i> (outil en ligne qui permet de visualiser des transformations CSS)](https://css-transform.moro.es/)
