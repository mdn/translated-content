---
title: perspective
slug: Web/CSS/perspective
---

{{CSSRef}}

La propriété **`perspective`** détermine la distance entre le plan d'équation z = 0 et la position de l'utilisateur afin de donner une perspective aux objets positionnés dans l'espace 3D. Chaque élément pour lequel la côte (z) est positif sera plus grand et chaque élément pour lequel z est négatif apparaîtra plus petit. La force de cet effet est déterminée par la valeur de cette propriété.

{{EmbedInteractiveExample("pages/css/perspective.html")}}

Les parties des éléments 3D qui se situent derrière l'utilisateur (c'est-à-dire ceux pour lesquels leur coordonnée en z est plus grande que la valeur de la propriété `perspective`) ne sont pas dessiné.

Par défaut, le point de fuite est placé au centre de l'élément mais il peut être déplacé grâce à la propriété {{cssxref("perspective-origin")}}.

Si on utilise cette propriété avec une valeur différente de `0` ou `none`, cela créera un nouveau [contexte d'empilement](/fr/docs/Web/CSS/Comprendre_z-index/L'empilement_de_couches). Et l'objet joue alors le rôle de bloc englobant pour les éléments qu'il contient et qui ont `position: fixed` ou `position: absolute`

## Syntaxe

```css
/* Valeur avec un mot-clé */
perspective: none;

/* Valeurs de longueur */
/* Type <length>       */
perspective: 20px;
perspective: 3.5em;

/* Valeurs globales */
perspective: inherit;
perspective: initial;
perspective: unset;
```

### Valeurs

- `none`
  - : Un mot-clé qui indique qu'on n'applique aucune perspective.
- `<length>`
  - : Une longueur (une valeur de type {{cssxref("&lt;length&gt;")}}) qui indique la distance entre l'utilisateur et le plan d'équation z = 0. Elle est utilisée pour appliquer une perspective à l'élément et à son contenu. Si elle vaut `0` ou qu'elle est négative, aucune transformation de perspective ne sera appliquée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Trois cubes

#### HTML

```html
<table>
  <tbody>
    <tr>
      <th><code>perspective: 250px;</code></th>
      <th><code>perspective: 350px;</code></th>
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
      <th><code>perspective: 500px;</code></th>
      <th><code>perspective: 650px;</code></th>
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

#### CSS

```css
/* Des classes pour les différentes valeurs */
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

/* On définit le div pour le conteneur, */
/* le cube, ainsi qu'une face générique */
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

/* On définit chaque face en fonction de sa direction */
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

/* On améliore légèrement le tableau */
th,
p,
td {
  background-color: #eeeeee;
  padding: 10px;
  font-family: sans-serif;
  text-align: left;
}
```

#### Résultat

{{EmbedLiveSample('Trois_cubes', 660, 700)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser les transformations CSS](/fr/docs/Web/CSS/CSS_Transforms/Utilisation_des_transformations_CSS)
