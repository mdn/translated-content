---
title: webRequest.StreamFilter
slug: Mozilla/Add-ons/WebExtensions/API/webRequest/StreamFilter
---

{{AddonSidebar()}}

Un `StreamFilter` est un objet que vous pouvez utiliser pour surveiller et modifier les réponses HTTP.

Pour créer un `StreamFilter`, appelez {{WebExtAPIRef("webRequest.filterResponseData()")}}, en lui passant l'ID de la requête web que vous voulez filtrer.

Vous pouvez imaginer le filtre de flux entre la pile réseau et le moteur de rendu du navigateur. Le filtre passe les données de réponse HTTP au fur et à mesure qu'il est reçu du réseau, et peut examiner et modifier les données avant de les transmettre au moteur de rendu, où elles seront analysées et rendues.

Le filtre génère quatre événements différents :

- {{WebEXTAPIRef("webRequest.StreamFilter.onstart", "onstart")}} lorsque le filtre est sur le point de commencer à recevoir les données de réponse.
- {{WebEXTAPIRef("webRequest.StreamFilter.ondata", "ondata")}} lorsque des données de réponse ont été reçues par le filtre et sont disponibles pour être examinées ou modifiées.
- {{WebEXTAPIRef("webRequest.StreamFilter.onstop", "onstop")}} lorsque le filtre a fini de recevoir les données de réponse.
- {{WebEXTAPIRef("webRequest.StreamFilter.onerror", "onerror")}} si une erreur s'est produite lors de l'initialisation et de l'utilisation du filtre.

Vous pouvez écouter chaque événement en assignant une fonction d'écoute à son attribut :

```js
filter.onstart = (event) => {
  console.log("started");
};
```

Notez que la demande est bloquée pendant l'exécution de n'importe quel auditeur d'événement.

Le filtre fournit une fonction {{WebExtAPIRef("webRequest.StreamFilter.write()", "write()")}}. A tout moment à partir de l'événement `onstart`, vous pouvez utiliser cette fonction pour écrire des données dans le flux de sortie.

Si vous assignez des auditeurs à l'un des événements du filtre, alors toutes les données de réponse transmises au moteur de rendu seront fournies par les appels que vous faites pour `write()`: donc si vous ajoutez un auditeur mais n'appelez pas `write()`, alors la page rendue sera vide.

Une fois que vous avez terminé d'interagir avec la réponse, vous appelez l'un ou l'autre des éléments suivants :

- {{WebEXTAPIRef("webRequest.StreamFilter.disconnect()", "disconnect()")}} : Cela déconnecte le filtre de la requête, de sorte que le reste de la réponse est traité normalement.
- {{WebEXTAPIRef("webRequest.StreamFilter.close()", "close()")}}: Cela met fin à la demande, de sorte qu'aucune donnée de réponse supplémentaire ne sera traitée.

Le filtre fournit également des fonctions à {{WebEXTAPIRef("webRequest.StreamFilter.suspend()", "suspend()")}} et {{WebEXTAPIRef("webRequest.StreamFilter.resume()", "resume()")}} la requête.

## Méthodes

- {{WebExtAPIRef("webRequest.StreamFilter.close()")}}
  - : Ferme la demande.
- {{WebExtAPIRef("webRequest.StreamFilter.disconnect()")}}
  - : Déconnecte le filtre de la requête.
- {{WebExtAPIRef("webRequest.StreamFilter.resume()")}}
  - : Reprend le traitement de la demande.

<!---->

- {{WebExtAPIRef("webRequest.StreamFilter.suspend()")}}
  - : Suspend le traitement de la demande.
- {{WebExtAPIRef("webRequest.StreamFilter.write()")}}
  - : Écrit quelques données dans le flux de sortie.

## Propriétés

- {{WebExtAPIRef("webRequest.StreamFilter.ondata")}}
  - : Gestionnaire d'événements qui est appelé lorsque les données entrantes sont disponibles.
- {{WebExtAPIRef("webRequest.StreamFilter.onerror")}}
  - : Gestionnaire d'événements qui est appelé lorsqu'une erreur s'est produite.
- {{WebExtAPIRef("webRequest.StreamFilter.onstart")}}
  - : Gestionnaire d'événements qui est appelé lorsque le flux est sur le point de commencer à recevoir des données.
- {{WebExtAPIRef("webRequest.StreamFilter.onstop")}}
  - : Gestionnaire d'événements qui est appelé lorsque le flux n'a plus de données à livrer et qu'il s'est fermé.
- {{WebExtAPIRef("webRequest.StreamFilter.error")}}
  - : Quand {{WebExtAPIRef("webRequest.StreamFilter.onerror")}} est appelé, cela décrira l'erreur.
- {{WebExtAPIRef("webRequest.StreamFilter.status")}}
  - : Décrit l'état actuel du flux.

## Compatibilité des navigateurs

{{Compat}}

## Exemples

Ce code écoute pour `onstart`, `ondata` et `onstop`. Il enregistre simplement ces événements et les données de réponse elles-mêmes :

```js
function listener(details) {
  let filter = browser.webRequest.filterResponseData(details.requestId);

  filter.onstart = (event) => {
    console.log("started");
  };

  filter.ondata = (event) => {
    console.log(event.data);
    filter.write(event.data);
  };

  filter.onstop = (event) => {
    console.log("finished");
    filter.disconnect();
  };

  //return {}; // not needed
}

browser.webRequest.onBeforeRequest.addListener(
  listener,
  { urls: ["https://example.org/"], types: ["main_frame"] },
  ["blocking"],
);
```

{{WebExtExamples}}
