---
title: backface-visibility
slug: Web/CSS/backface-visibility
---

{{CSSRef}}{{SeeCompatTable}}

La propriété **`backface-visibility`** indique si la face arrière d'un élément doit être visible lorsqu'elle est orientée vers l'utilisateur. La face arrière d'un élément est un arrière-plan transparent qui, lorsqu'il est visible, permet de voir un reflet symétrique de la face avant de l'élément.

{{EmbedInteractiveExample("pages/css/backface-visibility.html")}}

Dans certains cas, on souhaite que la face avant ne soit pas visible par transparence. Par exemple, si on souhaite simuler une carte à jouer qu'on retourne.

Cette propriété n'aura aucun effet tant que les transformations appliquées sont uniquement en 2D car aucun effet de perspective ne sera introduit.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
backface-visibility: visible;
backface-visibility: hidden;

/* Valeurs globales */
backface-visibility: inherit;
backface-visibility: initial;
backface-visibility: unset;
```

La propriété `backface-visibility` est définie avec l'un des mots-clés suivants.

### Valeurs

- `visible`
  - : Ce mot-clé indique que la face arrière est visible lorsqu'elle est tournée vers l'utilisateur. Cela permet d'obtenir un effet miroir sur la face avant.
- `hidden`
  - : Ce mot-clé indique que la face arrière n'est pas visible. La face avant est donc cachée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

Dans cet exemple, on dessine un cube avec des faces transparentes.

### CSS

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
.container {
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

### HTML

```html
<table>
  <tbody>
    <tr>
      <th><code>backface-visibility: visible;</code></th>
      <th><code>backface-visibility: hidden;</code></th>
    </tr>
    <tr>
      <td>
        <div class="container">
          <div class="cube showbf">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
        <p>
          Toutes les faces sont transparentes et les trois faces arrières sont
          visibles au travers des faces avant.
        </p>
      </td>
      <td>
        <div class="container">
          <div class="cube hidebf">
            <div class="face front">1</div>
            <div class="face back">2</div>
            <div class="face right">3</div>
            <div class="face left">4</div>
            <div class="face top">5</div>
            <div class="face bottom">6</div>
          </div>
        </div>
        <p>
          Aucune face n'est opaque mais les trois faces arrières sont désormais
          cachées.
        </p>
      </td>
    </tr>
  </tbody>
</table>
```

### Résultat

{{EmbedLiveSample('Exemples', '100%', 360)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/CSS_Transforms/Utilisation_des_transformations_CSS)
