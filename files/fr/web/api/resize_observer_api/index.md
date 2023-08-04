---
title: Resize Observer API
slug: Web/API/Resize_Observer_API
---

{{DefaultAPISidebar("Resize Observer API")}}

L'API Resize Observer fournit un mécanisme performant par lequel du code peut surveiller les changements de dimensions d'un élément et un observateur recevoir des notifications chaque fois que les dimensions changent.

## Concepts et utilisation

Il y a une multitude de cas d'utilisation pour des techniques de _responsive design_ (et d'autres par ailleurs) qui répondent à des changements de dimensions d'un élément mais, avant, leur implantation était souvent amateures et parfois imparfaites.

Par exemple, les [media queries](/fr/docs/Web/CSS/Media_Queries) / {{domxref("window.matchMedia")}} sont un bon outil pour mettre à jour une mise en page à des points spécifiques quand la zone d'affichage change de dimensions, mais qu'en est-il si vous désirez changer la mise en page en réponse à un changement spécifique des dimensions d'un élément qui n'est pas le conteneur principal ?

Pour réaliser ceci, une solution limitée serait d'écouter les changements sur un type d'événement qui convienne à résoudre le problème et qui corresponde à l'élément dont les changements de dimensions vous intéresse (c'est-à-dire l'[événement resize](/fr/docs/Web/API/Window/resize_event) sur window), puis de calculer les nouvelles dimensions ou autres propriétés de l'élément après un redimensionnement au moyen de {{domxref("Element.getBoundingClientRect")}} ou de {{domxref("Window.getComputedStyle")}}, par exemple.

Une telle solution tend à ne fonctionner que pour des cas d'utilisation limités, causer des soucis de performance (continuellement appeler les méthodes évoquées ci-avant résulterait en une grosse baisse de performance), et souvent ne fonctionnera quand les dimensions de la fenêtre du navigateur ne sont pas changées.

L'API Resize Observer fournit une solution adaptée à résoudre exactement ces types de problèmes, et plus encore, en vous permettant d'observer aisément et de répondre à des changements dans les dimensions du content-box ou du border box d'un élément, et ce d'une manière performante. Elle fournit une solution en JavaScript au manque souvent dénoncé de [requêtes sur les éléments](https://www.xanthir.com/b4PR0) sur la plate-forme web.

Son utilisation est simple et presque identique aux autres observateurs tels que le [Performance Observer](/fr/docs/Web/API/PerformanceObserver) ou l'[Intersection Observer](/fr/docs/Web/API/Intersection_Observer_API). Il vous faut créer un nouvel objet {{domxref("ResizeObserver")}} en utilisant le constructeur [`ResizeObserver()`](/fr/docs/Web/API/ResizeObserver/ResizeObserver), puis utiliser {{domxref("ResizeObserver.observe()")}} pour le faire observer les changements de dimensions d'un élément spécifiques. Une fonction de rappel fournise au constructeur sera exécutée à chaque fois que les dimensions changent, fournissant un accès aux nouvelles dimensions et vous permettant de faire tous ce que vous souhaitez faire en réponse à ces changements.

## Interfaces

- {{domxref("ResizeObserver")}}
  - : fournit la possibilité d'enregistrer de nouveaux observateurs et de démarrer ou d'arrêter d'observer des éléments.
- {{domxref("ResizeObserverEntry")}}
  - : Décrit un unique élément qui a été redimensionné, identifiant l'élément et ses nouvelles dimensions.

## Exemples

Vous trouverez plusieurs exemples basiques sur notre dépôt GitHub :

- [resize-observer-border-radius.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-border-radius.html) ([voir la source](https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-border-radius.html)): Un exemple simple avec une boîte verte, dont les dimensions sont proportionnelles à celles de la fenêtre du navigateur. Quand les dimensions de la fenêtre changent, l'arrondissement des angles du carré changent en proportion à la taille du carré. Nous pourrions seulement implanter celà en utilisant {{cssxref("border-radius")}} avec une valeur en pourcentage, mais celà mène vite à des angles elliptiques non esthétiques, tandis que la solution ci-avant vous donne un carré aux angles agréables qui s'adaptent à la taille du carré.
- [resize-observer-text.html](https://mdn.github.io/dom-examples/resize-observer/resize-observer-text.html) ([voir la source](https://github.com/mdn/dom-examples/blob/master/resize-observer/resize-observer-text.html)): Ici, nous utilisations l'observateur de redimensionnement pour changer la {{cssxref("font-size")}} d'un en-tête et d'un paragraphe quand la `<div>` extérieure change de taille selon la valeur d'une jauge de sélection. Celà montre que vous pouvez répondre à des changement de dimensions d'un élément même s'ils n'ont rien en rapport avec la fenêtre du navigateur.

Le code suivra usuellement ce genre de modèle (tiré de resize-observer-border-radius.html):

```js
const resizeObserver = new ResizeObserver((entries) => {
  for (let entry of entries) {
    if (entry.contentBoxSize) {
      entry.target.style.borderRadius =
        Math.min(
          100,
          entry.contentBoxSize.inlineSize / 10 +
            entry.contentBoxSize.blockSize / 10,
        ) + "px";
    } else {
      entry.target.style.borderRadius =
        Math.min(
          100,
          entry.contentRect.width / 10 + entry.contentRect.height / 10,
        ) + "px";
    }
  }
});

resizeObserver.observe(document.querySelector("div"));
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [ResizeObserver: It's Like document.onresize for Elements](https://developers.google.com/web/updates/2016/10/resizeobserver)
