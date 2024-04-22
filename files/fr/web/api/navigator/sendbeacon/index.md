---
title: Navigator.sendBeacon()
slug: Web/API/Navigator/sendBeacon
---

{{APIRef("HTML DOM")}}

La méthode **`navigator.sendBeacon()`** peut être utilisée pour transférer une petite quantité de données de façon asynchrone via {{Glossary("HTTP")}} vers un serveur web.

## Syntaxe

```js
navigator.sendBeacon(url, donnees);
```

### Paramètres

- `url`
  - : Le paramètre `url` indique l'URL résolue à laquelle les `donnees` seront transmises.

<!---->

- `donnees`
  - : Le paramètre `donnees` est un objet {{domxref("ArrayBufferView")}}, {{domxref("Blob")}}, {{domxref("DOMString")}}, ou {{domxref("FormData")}} qui contient les données à transmettre.

### Valeurs de retour

La méthode **`sendBeacon()`** retourne `true` (vrai) si l'agent utilisateur est en mesure de mettre en file les données à transférer avec succès. Sinon, la méthode retourne `false` (faux).

## Description

Cette méthode répond aux besoins de certains codes analytiques ou de diagnostic qui tentent d'envoyer des données à un serveur web avant le déchargement (_unloading_) du document. Envoyer les données plus tôt pourrait résulter en une opportunité manquée de récolter des données. Toutefois, s'assurer que les données ont été envoyées pendant le déchargement du document est quelque chose qui a traditionnellement été difficile pour les développeurs, car les agents utilisateur ignorent généralement les requêtes {{domxref("XMLHttpRequest")}} faites à l'intérieur d'un gestionnaire d'événements [`unload`](/fr/docs/Web/API/Window/unload_event).

Afin de résoudre ce problème, les codes analytiques ou de diagnostic faisaient historiquement appel à une requête `XMLHttpRequest` synchrone dans un gestionnaire d'événements `unload` ou [`beforeunload`](/fr/docs/Web/API/Window/beforeunload_event) pour soumettre les données. La requête `XMLHttpRequest` synchrone bloque le processus de déchargement du document, ce qui à son tour fait paraître la navigation plus lente. Il n'y a rien que la page suivante peut faire pour éviter cette perception d'une mauvaise performance de chargement de page, et le résultat est que l'utilisateur perçoit la nouvelle page web comme étant lente à se charger, même si le vrai problème provient de la page précédente.

Il y a des techniques de contournement qui ont été utilisées pour s'assurer que ce type de données est transmis. Une technique de ce genre est de retarder le déchargement de la page pour soumettre les données en créant un élément {{HTMLElement("img")}} et en mettant son attribut `src` dans le gestionnaire de déchargement. Puisque la plupart des agents utilisateur vont retarder le déchargement afin de compléter le chargement de l'image en attente, les données peuvent être transmises durant le déchargement. Une autre technique est de créer une boucle de no-op (aucune opération) pour plusieurs secondes à l'intérieur du gestionnaire de déchargement, afin de retarder le déchargement et soumettre les données au serveur.

Non seulement ces techniques représentent-elles de mauvais patrons de programmation, certaines d'entre elles sont peu fiables, et elles résultent toutes en une perception d'une mauvaise performance de chargement de page pour la prochaine navigation.

L'exemple suivant montre un code analytique théorique qui tente de soumettre des données à un serveur en utilisant une requête `XMLHttpRequest` synchrone dans un gestionnaire de déchargement. Cela résulte en un délai pour le déchargement de la page.

```js
window.addEventListener("unload", enregistrerDonnees, false);

function enregistrerDonnees() {
  var client = new XMLHttpRequest();
  client.open("POST", "/log", false); // Le troisième paramètre indique une synchronisation xhr
  client.setRequestHeader("Content-Type", "text/plain;charset=UTF-8");
  client.send(donneesAnalytiques);
}
```

C'est là qu'entre en jeu **`sendBeacon()`**. En utilisant la méthode `sendBeacon()`, les données sont transmises de façon asynchrone au serveur web lorsque l'Agent Utilisateur a l'opportunité de le faire, sans retarder le déchargement ou affecter la performance de la navigation suivante. Cela résoud tous les problèmes avec la soumission de données analytiques : les données sont envoyées de façon fiable, asynchrone, et cela n'impacte pas le chargement de la page suivante. De plus, ce code est en fait plus simple à écrire que n'importe quelle de ces autres techniques!

L'exemple suivant montre un patron de code analytique théorique qui soumet des données à un serveur en utilisant la méthode `sendBeacon()`.

```js
window.addEventListener("unload", enregistrerDonnees, false);

function enregistrerDonnees() {
  navigator.sendBeacon("/log", donneesAnalytiques);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("navigator", "navigator")}}
- {{domxref("WorkerNavigator.sendBeacon()")}} (Utilisation de `sendBeacon()` dans des _workers_)
