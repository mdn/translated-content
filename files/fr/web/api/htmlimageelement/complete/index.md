---
title: "HTMLImageElement : propriété complete"
short-title: complete
slug: Web/API/HTMLImageElement/complete
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

L'attribut en lecture seule **`complete`** de l'interface {{domxref("HTMLImageElement")}} est un booléen qui indique si l'image a été complètement chargée ou non.

## Valeur

Un booléen qui vaut `true` si l'image a été complètement chargée, sinon la valeur est `false`.

L'image est considérée comme complètement chargée si l'une des conditions suivantes est remplie&nbsp;:

- Ni l'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/img#src) ni l'attribut [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset) ne sont spécifiés.
- L'attribut `srcset` est absent et l'attribut `src`, bien que spécifié, est une chaîne vide (`""`).
- La ressource image a été entièrement récupérée et a été mise en file d'attente pour le rendu/la composition.
- L'élément image a déjà déterminé que l'image est totalement disponible et prête à être utilisée.
- L'image est «&nbsp;cassée&nbsp;»&nbsp;: c'est-à-dire que le chargement a échoué à cause d'une erreur ou parce que le chargement des images est désactivé.

À noter&nbsp;: comme l'image peut être reçue de façon asynchrone, la valeur de `complete` peut changer pendant l'exécution de votre script.

## Exemples

Imaginons une application de galerie photo qui permet d'ouvrir des images dans un mode «&nbsp;lightbox&nbsp;» pour un meilleur affichage et l'édition de l'image. Ces photos peuvent être très volumineuses, donc vous ne souhaitez pas attendre leur chargement&nbsp;: votre code utilise `async`/`await` pour charger les images en arrière-plan.

Supposons que vous ayez d'autres fonctionnalités qui ne doivent s'exécuter que lorsque l'image est complètement chargée, comme une commande de suppression des yeux rouges dans la lightbox. Idéalement, cette commande ne devrait même pas être exécutée si l'image n'est pas totalement chargée, mais pour plus de fiabilité, vous vérifiez ce cas.

La fonction `fixRedEyeCommand()`, appelée par le bouton de suppression des yeux rouges, vérifie la valeur de la propriété `complete` de l'image de la lightbox avant d'agir. Cela est illustré dans le code ci-dessous.

```js
let lightboxElem = document.querySelector("#lightbox");
let lightboxImgElem = lightboxElem.querySelector("img");
let lightboxControlsElem = lightboxElem.querySelector(".toolbar");

async function loadImage(url, elem) {
  return new Promise((resolve, reject) => {
    elem.onload = () => resolve(elem);
    elem.onerror = reject;
    elem.src = url;
  });
}

async function lightBox(url) {
  lightboxElem.style.display = "block";
  await loadImage("https://some-site.net/huge-image.jpg", lightboxImgElem);
  lightboxControlsElem.disabled = false;
}

// …

function fixRedEyeCommand() {
  if (lightboxElem.style.display === "block" && lightboxImgElem.complete) {
    fixRedEye(lightboxImgElem);
  } else {
    /* impossible de commencer tant que l'image n'est pas complètement chargée */
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
