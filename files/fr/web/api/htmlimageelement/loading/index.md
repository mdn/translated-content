---
title: "HTMLImageElement : propriété loading"
short-title: loading
slug: Web/API/HTMLImageElement/loading
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`loading`** de l'interface {{domxref("HTMLImageElement")}} est une chaîne de caractères qui fournit une indication à l'{{Glossary("user agent", "agent utilisateur")}} sur la façon de gérer le chargement de l'image actuellement en dehors de la {{Glossary("visual viewport", "zone d'affichage visuelle")}} de la fenêtre.

Ceci aide à optimiser le chargement du contenu du document en reportant le chargement de l'image jusqu'à ce qu'elle soit censée être nécessaire, plutôt qu'immédiatement lors du chargement initial de la page.

## Valeur

Chaîne de caractères fournissant une indication à l'agent utilisateur sur la meilleure façon de planifier le chargement de l'image pour optimiser les performances de la page.
Les valeurs possibles sont&nbsp;:

- `eager`
  - : Comportement par défaut, `eager` indique au navigateur de charger l'image dès que l'élément HTML `<img>` est traité.
- `lazy`
  - : Indique à l'agent utilisateur de retarder le chargement de l'image jusqu'à ce que le navigateur estime qu'elle sera bientôt nécessaire.
    Par exemple, si l'utilisateur·ice fait défiler le document, une valeur de `lazy` fera que l'image ne sera chargée que peu de temps avant d'apparaître dans la {{Glossary("visual viewport", "zone d'affichage visuelle")}} de la fenêtre.

## Notes d'utilisation

### JavaScript doit être activé

Le chargement n'est différé que lorsque JavaScript est activé.
Ceci est une mesure anti-pistage, car si un agent utilisateur prenait en charge le chargement différé lorsque le script est désactivé, il serait toujours possible pour un site de suivre la position approximative de défilement d'un·e utilisateur·ice tout au long d'une session, en plaçant stratégiquement des images dans le balisage d'une page de sorte qu'un serveur puisse suivre combien d'images sont demandées et quand.

### Chronologie de l'événement load

L'événement {{domxref("Window.load_event", "load")}} est déclenché lorsque le document a été entièrement traité.
Lorsque les images sont chargées de manière anticipée (comportement par défaut), chaque image du document doit être récupérée avant que l'événement `load` puisse se déclencher.

En spécifiant la valeur `lazy` pour `loading`, vous empêchez l'image de retarder l'attribut `load` du temps nécessaire pour demander, récupérer et traiter l'image.

Les images dont l'attribut `loading` est défini sur `lazy` mais qui se trouvent dans la zone d'affichage visuelle immédiatement lors du chargement initial de la page sont chargées dès que la mise en page est connue, mais leur chargement ne retarde pas le déclenchement de l'événement `load`.
En d'autres termes, ces images ne sont pas chargées immédiatement lors du traitement de l'élément HTML `<img>`, mais sont tout de même chargées dans le cadre du chargement initial de la page.
Elles n'affectent simplement pas le moment du déclenchement de l'événement `load`.

Cela signifie que lorsque `load` se déclenche, il est possible que des images chargées paresseusement situées dans la zone d'affichage visuelle ne soient pas encore visibles.

### Éviter le déplacement des éléments lors du chargement différé des images

Lorsqu'une image dont le chargement a été différé par l'attribut `loading` défini sur `lazy` est finalement chargée, le navigateur détermine la taille finale de l'élément HTML {{HTMLElement("img")}} en fonction du style et de la taille intrinsèque de l'image, puis recalcule la mise en page du document si nécessaire pour mettre à jour la position des éléments en fonction de tout changement de taille effectué pour adapter l'image.

Pour éviter ce recalcul, vous devez explicitement spécifier la taille de présentation de l'image à l'aide des attributs [`width`](/fr/docs/Web/HTML/Reference/Elements/img#width) et [`height`](/fr/docs/Web/HTML/Reference/Elements/img#height) de l'élément image.
En établissant ainsi le {{Glossary("aspect ratio", "rapport d'aspect")}} intrinsèque, vous évitez que les éléments ne se déplacent pendant le chargement du document, ce qui peut être déconcertant ou gênant au mieux, et peut amener les utilisateur·ice·s à cliquer sur le mauvais élément au pire, selon le moment exact des chargements différés et des recalculs.

## Exemples

La fonction `addImageToList()` ci-dessous ajoute une miniature photo à une liste d'éléments, en utilisant le chargement différé pour éviter de charger l'image depuis le réseau tant qu'elle n'est pas réellement nécessaire.

```js
function addImageToList(url) {
  const list = document.querySelector("div.photo-list");

  let newItem = document.createElement("div");
  newItem.className = "photo-item";

  let newImg = document.createElement("img");
  newImg.loading = "lazy";
  newImg.width = 320;
  newImg.height = 240;
  newImg.src = url;

  newItem.appendChild(newImg);
  list.appendChild(newItem);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("img")}}
- [Performances web](/fr/docs/Learn_web_development/Extensions/Performance) dans la zone d'apprentissage MDN
- [Le chargement différé](/fr/docs/Web/Performance/Guides/Lazy_loading) dans le guide des performances web MDN
