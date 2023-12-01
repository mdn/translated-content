---
title: Les sprites CSS
slug: Web/CSS/CSS_images/Implementing_image_sprites_in_CSS
---

{{CSSRef}}

Les _sprites_ sont utilisées dans de nombreuses applications web où de multiples images sont utilisées. Au lieu d'avoir une image par fichier, on économise de la bande passante et de la mémoire en les envoyant toute dans le même fichier, ainsi, le nombre de requêtes HTTP diminue. On utilise alors `background-position` pour choisir l'image qu'on souhaite utiliser.

> **Note :** Avec HTTP/2, il peut être plus judicieux d'utiliser de nombreuses « petites » requêtes.

## Implémentation

Supposons qu'une image est affichée pour chaque élement de la classe `toolbtn` :

```css
.toolbtn {
  background: url("myfile.png");
  display: inline-block;
  height: 20px;
  width: 20px;
}
```

Une position peut être ajoutée avec les valeurs x et y après {{cssxref("url()")}} pour décaler l'image de fond ({{cssxref("background")}}). Cela fonctionne aussi avec {{cssxref("background-position")}}. Par exemple :

```css
#btn1 {
  background-position: -20px 0px;
}

#btn2 {
  background-position: -40px 0px;
}
```

L'élément avec l'ID « btn1 » bouge vers la gauche de 20 pixels et l'élément avec l'ID « btn2 » vers la gauche de 40 pixels (en présumant que ces deux éléments aient aussi la classe `toolbtn`).

De la même manière, vous pouvez faire un effet de transition au survol :

```css
#btn:hover {
  background-position: <pixels shifted right>px <pixels shifted down>px;
}
```

## Voir aussi

- [Une démonstration sur CSS Tricks](https://css-tricks.com/snippets/css/perfect-css-sprite-sliding-doors-button/)
