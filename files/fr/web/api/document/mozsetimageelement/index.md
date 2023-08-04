---
title: Document.mozSetImageElement()
slug: Web/API/Document/mozSetImageElement
---

{{ ApiRef("DOM") }}{{ non-standard_header() }}

Change l'élément utilisé comme arrière-plan CSS par un arrière-plan avec un ID d'élément d'arrière-plan donné.

## Syntaxe

```js
document.mozSetImageElement(imageElementId, imageElement);
```

### Paramètres

- `imageElementId` est une chaîne de caractères indiquant le nom d'un élément qui a été spécifié comme une image d'arrière-plan en utilisant la fonction CSS {{ cssxref("-moz-element") }}.
- `imageElement` est le nouvel élément à utiliser comme arrière-plan correspondant à cette chaîne d'élément image. Spécifiez `null` pour supprimer l'élément d'arrière-plan.

## Exemple

Cet exemple change l'arrière-plan d'un bloc {{ HTMLElement("div") }} chaque fois que l'utilisateur clique sur le bloc.

[Vue de cet exemple en direct](/samples/domref/mozSetImageElement.html).

```html
<style type="text/css">
  #mybox {
    background-image: -moz-element(#canvasbg);
    text-align: center;
    width: 400px;
    height: 400px;
    cursor: pointer;
  }
</style>
```

Le CSS défini par le bloc {{ HTMLElement("style") }} ci-dessus est utilisé par notre {{ HTMLElement("div") }} pour afficher un élément, ayant l'id "canvasbg", en arrière-plan.

```js
var c = 0x00;
function clicked() {
  var canvas = document.createElement("canvas");
  canvas.setAttribute("width", 100);
  canvas.setAttribute("height", 100);

  var ctx = canvas.getContext("2d");
  ctx.fillStyle = "#" + c.toString(16) + "0000";
  ctx.fillRect(25, 25, 75, 75);

  c += 0x11;
  if (c > 0xff) {
    c = 0x00;
  }

  document.mozSetImageElement("canvasbg", canvas);
}
```

Le code ici est appelé chaque fois que l'utilisateur clique sur l'élément {{ HTMLElement("div") }}. Il crée un nouveau {{ HTMLElement("canvas") }} avec la largeur et la hauteur définies à 100 pixels et le dessine dans un carré de 50 par 50 pixels. Chaque fois que la fonction est appelée, le carré est d'une couleur différente (sa composante rouge est augmentée à chaque fois), donc chaque fois que l'utilisateur clique sur l'élément, le fond est plus lumineux et rempli d'un motif plus lumineux de carreaux rouges.

Une fois le canvas dessiné, `document.mozSetImageElement()` est appelée pour définir l'arrière-plan de tout CSS en utilisant l'ID "canvasbg" comme ID d'élément d'arrière-plan pour être notre nouveau canvas.

## Spécifications

Ne fait partie d'aucune spécification.

## Voir aussi

- {{ cssxref("-moz-element") }}
