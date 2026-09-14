---
title: "HTMLMediaElement : propriété loading"
short-title: loading
slug: Web/API/HTMLMediaElement/loading
l10n:
  sourceCommit: 3d7c7d4e151ff1b578bef4eff10c201b761a9d7d
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

La propriété **`loading`** de l'interface {{DOMxRef("HTMLMediaElement")}} fournit un indice au navigateur sur la manière de gérer le chargement des médias qui se trouvent actuellement en dehors de la {{Glossary("visual viewport", "zone d'affichage visuel")}} de la fenêtre. Cela permet d'optimiser le chargement du contenu du document en reportant le chargement des médias jusqu'à ce qu'ils soient réellement nécessaires, plutôt que de les charger immédiatement lors du chargement initial de la page. Elle reflète l'attribut de contenu [`loading`](/fr/docs/Web/HTML/Reference/Elements/audio#loading) de l'élément `<audio>` ou l'attribut de contenu [`loading`](/fr/docs/Web/HTML/Reference/Elements/video#loading) de l'élément `<video>`.

## Valeur

Une chaîne de caractères dont la valeur est soit `eager`, soit `lazy`. Pour leur signification, voir la référence HTML [`<audio loading>`](/fr/docs/Web/HTML/Reference/Elements/audio#loading) ou [`<video loading>`](/fr/docs/Web/HTML/Reference/Elements/video#loading).

## Exemples

### Utilisation simple

La fonction `ajouterVideoDansListe()` ci-dessous ajoute une miniature de vidéo à une liste d'éléments, en utilisant le chargement paresseux pour éviter de charger la vidéo depuis le réseau tant qu'elle n'est pas réellement nécessaire.

```js
function ajouterVideoDansListe(url) {
  const liste = document.querySelector("div.video-list");

  const nouvelObjet = document.createElement("div");
  nouvelObjet.className = "video-item";

  const nouvelleVideo = document.createElement("video");

  // Chargement paresseux si pris en charge
  if ("loading" in HTMLVideoElement.prototype) {
    nouvelleVideo.loading = "lazy";
  } else {
    // Si le chargement paresseux natif n'est pas pris en charge, vous
    // pouvez envisager des alternatives, bien que cela puisse convenir
    // comme amélioration progressive.
  }

  nouvelleVideo.width = 320;
  nouvelleVideo.height = 240;
  nouvelleVideo.src = url;

  nouvelObjet.appendChild(nouvelleVideo);
  liste.appendChild(nouvelObjet);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("audio")}}
- L'élément HTML {{HTMLElement("video")}}
- [Performance Web](/fr/docs/Learn_web_development/Extensions/Performance) dans la zone d'apprentissage MDN
- [Chargement paresseux](/fr/docs/Web/Performance/Guides/Lazy_loading) dans le guide de performance web MDN
