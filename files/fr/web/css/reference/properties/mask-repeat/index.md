---
title: mask-repeat
slug: Web/CSS/Reference/Properties/mask-repeat
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-repeat`** définit la façon dont les images de masque sont répétées. Une image de masque peut être répétée horizontalement, verticalement, dans les deux directions ou pas du tout.

## Syntaxe

```css
/* Syntaxe avec une valeur */
mask-repeat: repeat-x;
mask-repeat: repeat-y;
mask-repeat: repeat;
mask-repeat: space;
mask-repeat: round;
mask-repeat: no-repeat;

/* Syntaxe avec deux valeurs : horizontal | vertical */
mask-repeat: repeat space;
mask-repeat: repeat repeat;
mask-repeat: round space;
mask-repeat: no-repeat round;

/* Plusieurs valeurs */
mask-repeat:
  space round,
  no-repeat;
mask-repeat:
  round repeat,
  space,
  repeat-x;

/* Valeurs globales */
mask-repeat: inherit;
mask-repeat: initial;
mask-repeat: revert;
mask-repeat: revert-layer;
mask-repeat: unset;
```

### Valeurs

La propriété `mask-repeat` est une liste séparée par des virgules de deux valeurs `<repeat-style>`, la première valeur `<repeat-style>` étant la valeur de répétition horizontale et la deuxième valeur étant la valeur de répétition verticale, ou un mot-clé unique qui est un raccourci pour deux valeurs `<repeat-style>`.

#### Valeurs `<repeat-style>`

Les valeurs `<repeat-style>` incluent&nbsp;:

- `repeat`
  - : L'image est répétée autant de fois que nécessaire pour couvrir toute la zone de peinture du masque. Les images de masque le long des bords sont découpées lorsque la taille de la [boîte d'origine du masque](/fr/docs/Web/CSS/Reference/Properties/mask-origin) n'est pas un multiple exact de la taille de l'image du masque.

- `space`
  - : L'image du masque est répétée autant de fois que possible sans être découpée. Si la taille de l'origine de l'élément est au moins deux fois supérieure à la taille de l'image du masque dans la dimension associée, la propriété {{CSSxRef("mask-position")}} est ignorée et les première et dernière images sont positionnées aux bords du conteneur de l'origine du masque. Si la boîte d'origine du masque n'est pas un multiple exact de la taille de l'image du masque, l'espace blanc est réparti uniformément entre les images de masque répétées.

    Si la taille de la boîte d'origine est inférieure à deux fois la taille de l'image du masque dans la dimension donnée, une seule image de masque peut être affichée. Dans ce cas, l'image est positionnée comme défini par la propriété `mask-position`, qui par défaut est `0% 0%`. L'image du masque ne sera découpée que si l'image du masque est plus grande que la boîte d'origine du masque.

- `round`
  - : L'image du masque est répétée autant de fois que possible dans ses dimensions d'origine. Si la taille de la boîte d'origine du masque n'est pas un multiple exact de la taille de l'image du masque, toutes les images du masque seront redimensionnées, [rétrécies ou étirées](#répétitions_arrondies) pour s'assurer qu'aucune répétition n'est découpée.

- `no-repeat`
  - : L'image du masque n'est pas répétée (et donc la zone de peinture du masque ne sera pas nécessairement entièrement couverte). La position de l'image du masque non répétée est définie par la propriété CSS {{CSSxRef("mask-position")}}.

#### Valeurs raccourcies

La syntaxe à une valeur est un raccourci pour la syntaxe complète à deux valeurs&nbsp;:

<table class="standard-table">
  <thead>
    <tr>
      <th>Valeur unique</th>
      <th>Équivalent à deux valeurs</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>repeat-x</code></td>
      <td><code>repeat no-repeat</code></td>
    </tr>
    <tr>
      <td><code>repeat-y</code></td>
      <td><code>no-repeat repeat</code></td>
    </tr>
    <tr>
      <td><code>repeat</code></td>
      <td><code>repeat repeat</code></td>
    </tr>
    <tr>
      <td><code>space</code></td>
      <td><code>space space</code></td>
    </tr>
    <tr>
      <td><code>round</code></td>
      <td><code>round round</code></td>
    </tr>
    <tr>
      <td><code>no-repeat</code></td>
      <td><code>no-repeat no-repeat</code></td>
    </tr>
  </tbody>
</table>

- `repeat-x`
  - : L'équivalent de `repeat no-repeat`. L'image est répétée dans la direction horizontale autant de fois que nécessaire pour couvrir la largeur de la zone de peinture du masque. Les images de masque le long des bords droit ou gauche, ou les deux selon la valeur de {{CSSxRef("mask-position")}}, seront découpées si la largeur de la boîte d'origine du masque n'est pas un multiple exact de la largeur de l'image du masque.

- `repeat-y`
  - : L'équivalent de `no-repeat repeat`. L'image est répétée dans la direction verticale autant de fois que nécessaire pour couvrir la hauteur de la zone de peinture du masque. Les images de masque le long des bords supérieur ou inférieur, ou les deux selon la valeur de {{CSSxRef("mask-position")}}, seront découpées si la hauteur de la boîte d'origine du masque n'est pas un multiple exact de la hauteur de l'image du masque.

## Description

La propriété `mask-repeat` accepte une paire de valeurs séparées par des virgules ou une [valeur raccourcie](#valeurs_raccourcies). Dans la syntaxe à deux valeurs, la première valeur représente le comportement de répétition horizontal et la deuxième valeur représente le comportement vertical.

### Valeurs multiples

Chaque valeur de `mask-repeat` dans cette liste séparée par des virgules s'applique à un calque de masque distinct. Un élément peut avoir plusieurs calques de masque appliqués. Le nombre de calques est déterminé par le nombre de valeurs séparées par des virgules dans la valeur de la propriété {{CSSxRef("mask-image")}} (même si une valeur est `none`). Chaque valeur de `mask-repeat` est associée aux valeurs de `mask-image`, dans l'ordre. Si le nombre de valeurs dans les deux propriétés diffère, les valeurs excédentaires de `mask-repeat` sont ignorées, ou, si `mask-repeat` a moins de valeurs que `mask-image`, les valeurs de `mask-repeat` sont répétées.

### Taille et positionnement

La valeur de la propriété `mask-repeat` définit comment les images de masque sont répétées après avoir été [dimensionnées](/fr/docs/Web/CSS/Reference/Properties/mask-size) et [positionnées](/fr/docs/Web/CSS/Reference/Properties/mask-position). La première répétition (et éventuellement la seule) de l'image de masque est positionnée par la propriété {{CSSxRef("mask-position")}}, qui par défaut est `0% 0%`, le coin supérieur gauche de la boîte d'origine. La taille est définie par la propriété {{CSSxRef("mask-size")}}, qui par défaut est `auto`. Les positions des masques répétés sont basées sur cette instance initiale du masque.

### Découpage

Les images de masque ne se répètent pas mais seront découpées si la taille de l'image de masque est plus grande que la boîte d'origine, sauf dans le cas de `round`, où un seul masque sera redimensionné pour s'adapter à la boîte d'origine.

Avec les valeurs `repeat`, les images de masque peuvent être découpées au bord de la boîte d'origine si la dimension (largeur ou hauteur) de la boîte n'est pas un multiple exact de celle du masque.

### Rapport d'aspect

Par défaut, les images de masque conservent le rapport d'aspect défini par la propriété {{CSSxRef("mask-size")}} ou leur rapport d'aspect par défaut si `mask-size` est défini par défaut ou explicitement sur `auto`. Seul le cas de la valeur `round` dans les deux directions peut entraîner une distorsion du rapport d'aspect du masque.

Si `round` est défini dans les deux directions, les images de masque répétées résultantes correspondront au rapport d'aspect de la boîte d'origine. Comme les images de masque sont redimensionnées pour s'adapter, elles peuvent être déformées, garantissant que les images de masque ne sont pas découpées. Si `round` est défini dans une seule dimension, le rapport d'aspect de la taille du masque est respecté.

### Répétitions arrondies

Dans le cas de `round`, les images de masque sont agrandies ou réduites pour s'adapter à la zone de positionnement un nombre entier de fois. La taille du masque augmente ou diminue pour s'adapter au nombre entier le plus proche de masques, avec un minimum d'un masque.

Les dimensions rendues du masque sont la taille de la boîte d'origine divisée par le nombre d'itérations de masques dans cette dimension, les itérations étant un entier supérieur à zéro. Le nombre d'itérations est&nbsp;: `X' = D / round(D / X)` où `D` est la largeur ou la hauteur, et `round()` est une fonction qui retourne l'entier le plus proche supérieur à zéro.

Par exemple, si `mask-repeat` est défini sur `round` et que `mask-size` définit le masque à `40px` de large, lorsque la boîte d'origine est présente (plus grande que `0px` de large) mais inférieure à `60px` de large, il y aura une seule itération qui représente 100% de la largeur de cette boîte. Si la boîte fait au moins `60px` de large mais moins de `100px` de large, il y aura deux itérations qui représentent chacune 50% de la boîte. De 100px à 140px, trois masques s'adapteront le long de l'axe horizontal. Ces masques de «&nbsp;`40px` de large&nbsp;» ne feront `40px` de large que si la boîte d'origine est un multiple exact de `40px`.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Cet exemple montre comment définir la propriété `mask-repeat` pour un seul masque.

#### HTML

Notre HTML inclut un élément HTML {{HTMLElement("div")}} de base&nbsp;:

```html
<div></div>
```

#### CSS

Nous définissons un carré de `250px` avec un dégradé du rouge au bleu et une étoile de `100px` sur `100px` comme image de masque. Nous utilisons la propriété `mask-repeat`, en définissant `round` pour la direction horizontale et `space` pour la valeur verticale.

```css
div {
  width: 250px;
  height: 250px;
  background-image: linear-gradient(red, blue);

  mask-image: url("/shared-assets/images/examples/mask-star.svg");
  mask-size: 100px 100px;

  mask-repeat: round space;
}
```

#### Résultats

{{EmbedLiveSample("Utilisation simple", "", 300)}}

Avec `space` et `round` sur une image de masque plus petite que la boîte d'origine, le masque n'est pas découpé. La valeur `round` déforme plutôt l'étoile pour éviter le découpage et l'espace blanc, tandis que `space` maintient le rapport d'aspect de l'étoile, mais ajoute de l'espace si nécessaire entre les masques.

### Itérations arrondies

En utilisant le même HTML et CSS, cette démonstration inclut un curseur qui modifie la largeur du conteneur pour montrer comment, avec `round`, les masques vont grandir à mesure que l'espace le permet jusqu'à ce qu'une autre itération du masque s'adapte, ou rétrécir jusqu'à ce que le nombre d'itérations ne convienne plus.

```html hidden
<div></div>
<label
  >width: <span></span><br />
  <input type="range" min="0" max="400" value="250" id="width" />
</label>
```

```css hidden
div {
  width: 250px;
  height: 250px;
  background-image: linear-gradient(red, blue);

  mask-image: url("/shared-assets/images/examples/mask-star.svg");
  mask-size: 100px 100px;

  mask-repeat: round space;
}
input {
  clear: both;
  width: 90%;
}
```

```js hidden
const div = document.querySelector("div");
const range = document.getElementById("width");
const output = document.querySelector("span");

range.addEventListener("change", () => {
  const value = `${range.value}px`;
  output.innerText = value;
  div.style.width = value;
});
```

{{EmbedLiveSample("Itérations arrondies", "", 300)}}

Le masque est défini comme ayant une largeur de `100px`. Il y a une seule étoile lorsque la boîte d'origine a une largeur de `1px` à `149px`, deux étoiles de `150px` à `249px`, trois étoiles de `250px` à `349px`, et ainsi de suite.

### Les valeurs raccourcies

Cet exemple montre toutes les valeurs raccourcies (mot-clé unique) de `mask-repeat`.

#### HTML

Nous incluons plusieurs éléments HTML {{HTMLElement("section")}} chacun contenant un `<div>`, chacun avec un nom de classe différent.

```html
<section class="repeat">
  <div></div>
</section>
<section class="space">
  <div></div>
</section>
<section class="round">
  <div></div>
</section>
<section class="no-repeat">
  <div></div>
</section>
<section class="repeat-x">
  <div></div>
</section>
<section class="repeat-y">
  <div></div>
</section>
```

#### CSS

Nous donnons à chaque `<div>` le même CSS, sauf pour la valeur `mask-repeat`, que nous faisons correspondre au nom de classe de leur parent. Nous définissons une taille de masque, en plaçant l'image de masque initiale en bas à droite, ce qui signifie que tout découpage se produira sur les masques les plus en haut et à gauche, sur leurs côtés supérieur et gauche.

```css
div {
  width: 180px;
  height: 180px;
  background-image: linear-gradient(red, blue);

  mask-image: url("/shared-assets/images/examples/mask-star.svg");

  mask-size: 50px 50px;
  mask-position: bottom right;
}

.repeat div {
  mask-repeat: repeat;
}
.space div {
  mask-repeat: space;
}
.round div {
  mask-repeat: round;
}
.no-repeat div {
  mask-repeat: no-repeat;
}
.repeat-x div {
  mask-repeat: repeat-x;
}
.repeat-y div {
  mask-repeat: repeat-y;
}
```

Nous affichons le nom de la classe en utilisant du contenu généré.

```css
section::before {
  content: attr(class);
  display: block;
  text-align: center;
  border-bottom: 1px solid;
}
```

```css hidden
body {
  display: flex;
  flex-flow: row wrap;
  gap: 10px;
}
section {
  border: 1px solid;
}
```

#### Résultats

{{EmbedLiveSample("Les valeurs raccourcies", "", 450)}}

Le premier masque en forme d'étoile (et, dans le cas de `no-repeat`, le seul) est [dimensionné](/fr/docs/Web/CSS/Reference/Properties/mask-size) pour être de 50px par 50px, et [positionné](/fr/docs/Web/CSS/Reference/Properties/mask-position) en bas à droite de la zone de peinture, avec les étoiles répétées placées au-dessus et/ou à gauche de celle-ci, tout découpage se produisant sur les étoiles les plus en haut et à gauche. Notez que toutes les étoiles ont la même taille et la même forme, sauf pour `round`, où tous les masques ont été réduits à 45px x 45px pour s'adapter à quatre masques complets dans chaque direction. Si le conteneur avait été de 174px, il y aurait eu trois étoiles dans chaque direction, au lieu de quatre, et chaque étoile aurait été étirée.

### Plusieurs images de masque et répétitions

Vous pouvez définir un `<repeat-style>` différent pour chaque image de masque, séparé par des virgules&nbsp;:

```css
.extra-repeats {
  mask-image: url("mask1.png"), url("mask2.png");
  mask-repeat: repeat-x, repeat-y, space;
}
```

Chaque image est associée au style de répétition correspondant. Comme il y a plus de valeurs `mask-repeat` que de valeurs `mask-image`, les valeurs `mask-repeat` excédentaires sont ignorées.

```css
.missing-repeats {
  mask-image:
    url("mask1.png"), url("mask2.png"), url("mask3.png"), url("mask4.png");
  mask-repeat: repeat-x, repeat-y;
}
```

Chaque image est associée à un style de répétition correspondant. Comme il y a plus de valeurs `mask-image` que de valeurs `mask-repeat`, la valeur `mask-repeat` est répétée jusqu'à ce que chaque `mask-image` ait une valeur `mask-repeat` associée. Ici, les masques numérotés impairs se répètent le long de l'axe x, tandis que les masques numérotés pairs se répètent le long de l'axe y.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("background-repeat")}}
- La propriété {{CSSxRef("mask-border-repeat")}}
- [Introduction au masquage CSS](/fr/docs/Web/CSS/Guides/Masking/Introduction)
- [Les propriétés CSS `mask`](/fr/docs/Web/CSS/Guides/Masking/Mask_properties)
- [Déclarer plusieurs masques](/fr/docs/Web/CSS/Guides/Masking/Multiple_masks)
- Le module [de masquage CSS](/fr/docs/Web/CSS/Guides/Masking)
