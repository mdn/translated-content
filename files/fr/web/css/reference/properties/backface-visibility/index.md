---
title: backface-visibility
slug: Web/CSS/Reference/Properties/backface-visibility
l10n:
  sourceCommit: 46a4425d4b7160129fd4c8d0f684ccd0617326b7
---

La propriété [CSS](/fr/docs/Web/CSS) **`backface-visibility`** définit si la face arrière d'un élément est visible lorsqu'elle est tournée vers l'utilisateur·ice.

La face arrière d'un élément est l'image miroir de sa face avant. Bien qu'elle soit invisible en 2D, la face arrière peut devenir visible lorsqu'une transformation entraîne la rotation de l'élément dans l'espace 3D. (Cette propriété n'a aucun effet sur les transformations 2D, qui ne produisent pas de perspective.)

{{InteractiveExample("Démonstration CSS&nbsp;: backface-visibility")}}

```css interactive-example-choice
backface-visibility: visible;
```

```css interactive-example-choice
backface-visibility: hidden;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">
    <div class="face front">1</div>
    <div class="face back">2</div>
    <div class="face right">3</div>
    <div class="face bottom">6</div>
  </div>
</section>
```

```css interactive-example
#default-example {
  background: linear-gradient(skyblue, khaki);
}

#example-element {
  width: 100px;
  height: 100px;
  perspective: 550px;
  perspective-origin: 220% 220%;
  transform-style: preserve-3d;
}

.face {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: absolute;
  backface-visibility: inherit;
  background: rgb(0 0 0 / 0.4);
  font-size: 60px;
  color: white;
}

.front {
  transform: translateZ(50px);
}

.back {
  background: rgb(230 0 0);
  color: white;
  transform: rotateY(180deg) translateZ(50px);
}

.right {
  background: rgb(0 0 0 / 0.6);
  transform: rotateY(90deg) translateZ(50px);
}

.bottom {
  background: rgb(0 0 0 / 0.6);
  transform: rotateX(-90deg) translateZ(50px);
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
backface-visibility: visible;
backface-visibility: hidden;

/* Valeurs globales */
backface-visibility: inherit;
backface-visibility: initial;
backface-visibility: revert;
backface-visibility: revert-layer;
backface-visibility: unset;
```

La propriété `backface-visibility` est définie avec l'un des mots-clés suivants.

### Valeurs

- `visible`
  - : Ce mot-clé indique que la face arrière est visible lorsqu'elle est tournée vers l'utilisateur·ice.
- `hidden`
  - : Ce mot-clé indique que la face arrière est cachée, rendant l'élément invisible lorsqu'il est tourné dos à l'utilisateur·ice.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Cube avec des faces transparentes et opaques

Dans cet exemple, on dessine un cube avec des faces transparentes.

#### HTML

```html
<table>
  <tbody>
    <tr>
      <th><code>backface-visibility: visible;</code></th>
      <th><code>backface-visibility: hidden;</code></th>
    </tr>
    <tr>
      <td>
        <div class="conteneur">
          <div class="cube showbf">
            <div class="face avant">1</div>
            <div class="face arrière">2</div>
            <div class="face droite">3</div>
            <div class="face gauche">4</div>
            <div class="face dessus">5</div>
            <div class="face dessous">6</div>
          </div>
        </div>
        <p>
          Comme toutes les faces sont partiellement transparentes, les faces
          arrière (2, 4, 5) sont visibles à travers les faces avant (1, 3, 6).
        </p>
      </td>
      <td>
        <div class="conteneur">
          <div class="cube hidebf">
            <div class="face avant">1</div>
            <div class="face arrière">2</div>
            <div class="face droite">3</div>
            <div class="face gauche">4</div>
            <div class="face dessus">5</div>
            <div class="face dessous">6</div>
          </div>
        </div>
        <p>Les trois faces arrière (2, 4, 5) sont cachées.</p>
      </td>
    </tr>
  </tbody>
</table>
```

#### CSS

```css
/* Des classes utilitaires pour afficher ou
   masquer les faces arrières du cube */
.hidebf div {
  backface-visibility: hidden;
}

.showbf div {
  backface-visibility: visible;
}

/* On définit les règles pour le conteneur, */
/* le cube et une face quelconque */
.conteneur {
  width: 150px;
  height: 150px;
  margin: 75px 0 0 75px;
  border: none;
}

.cube {
  width: 100%;
  height: 100%;
  perspective: 550px;
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

/* On définit chacune des faces */
.avant {
  background: rgb(0 0 0 / 30%);
  transform: translateZ(50px);
}

.arrière {
  background: lime;
  color: black;
  transform: rotateY(180deg) translateZ(50px);
}

.droite {
  background: rgb(196 0 0 / 70%);
  transform: rotateY(90deg) translateZ(50px);
}

.gauche {
  background: rgb(0 0 196 / 70%);
  transform: rotateY(-90deg) translateZ(50px);
}

.dessus {
  background: rgb(196 196 0 / 70%);
  transform: rotateX(90deg) translateZ(50px);
}

.dessous {
  background: rgb(196 0 196 / 70%);
  transform: rotateX(-90deg) translateZ(50px);
}

/* On améliore le rendu du tableau */
th,
p,
td {
  background-color: #eeeeee;
  margin: 0px;
  padding: 6px;
  font-family: sans-serif;
  text-align: left;
}
```

#### Résultat

{{EmbedLiveSample("Cube avec des faces transparentes et opaques", "100%", 360)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/Guides/Transforms/Using)
