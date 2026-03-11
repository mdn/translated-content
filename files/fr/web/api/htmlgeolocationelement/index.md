---
title: HTMLGeolocationElement
slug: Web/API/HTMLGeolocationElement
l10n:
  sourceCommit: 3712f845b54b2754b2b550c7d7dca18f0277c0ad
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

L'interface **`HTMLGeolocationElement`** de [l'API DOM HTML](/fr/docs/Web/API/HTML_DOM_API) représente l'élément {{HTMLElement("geolocation")}} et donne accès à ses propriétés et évènements.

Cet élément est basé sur l'interface parente {{DOMxRef("HTMLElement")}}, dont il hérite des propriétés et méthodes.

> [!NOTE]
> L'élément `<geolocation>` et l'interface `HTMLGeolocationElement` permettent à l'utilisateur·ice de partager ses données de localisation avec la page de façon plus cohérente et intuitive que l'ancienne [API de géolocalisation](/fr/docs/Web/API/Geolocation_API).

{{InheritanceDiagram}}

## Constructeur

- {{DOMxRef("HTMLGeolocationElement.HTMLGeolocationElement", "HTMLGeolocationElement()")}} {{Experimental_Inline}}
  - : Crée une nouvelle instance de l'objet `HTMLGeolocationElement`. Notez que ce constructeur n'est pas appelé directement, mais via une méthode DOM telle que {{DOMxRef("Document.createElement()")}}.

## Propriétés d'instance

_Hérite également des propriétés de son interface parente, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLGeolocationElement.autolocate", "autolocate")}} {{Experimental_Inline}}
  - : Une valeur booléenne indiquant si le navigateur doit demander immédiatement les données de localisation lorsque l'élément `<geolocation>` est affiché, à condition que l'autorisation ait été accordée auparavant. Reflète la valeur de l'attribut [`autolocate`](/fr/docs/Web/HTML/Reference/Elements/geolocation#autolocate) de l'élément `<geolocation>`.
- {{DOMxRef("HTMLGeolocationElement.error", "error")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Un objet {{DOMxRef("GeolocationPositionError")}} représentant les informations d'erreur en cas d'échec de récupération des données.
- {{DOMxRef("HTMLGeolocationElement.initialPermissionStatus", "initialPermissionStatus")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Une valeur énumérée représentant l'état d'autorisation pour la fonctionnalité de géolocalisation lors du premier chargement de la page.
- {{DOMxRef("HTMLGeolocationElement.invalidReason", "invalidReason")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Une valeur énumérée représentant la raison pour laquelle l'élément `<geolocation>` est invalide ([bloqué](/fr/docs/Web/HTML/Reference/Elements/geolocation#blocage_de_geolocation)), le cas échéant.
- {{DOMxRef("HTMLGeolocationElement.isValid", "isValid")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Une valeur booléenne indiquant si l'élément `<geolocation>` est valide ou invalide (bloqué).
- {{DOMxRef("HTMLGeolocationElement.permissionStatus", "permissionStatus")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Une chaîne de caractères représentant l'état actuel d'autorisation pour la fonctionnalité de géolocalisation.
- {{DOMxRef("HTMLGeolocationElement.position", "position")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Un objet {{DOMxRef("GeolocationPosition")}} représentant la position de l'utilisateur·ice en cas de récupération réussie des données de localisation.
- {{DOMxRef("HTMLGeolocationElement.watch", "watch")}} {{Experimental_Inline}}
  - : Une valeur booléenne indiquant si le navigateur doit mettre à jour en continu les données de localisation de l'utilisateur·ice à chaque changement de position de l'appareil, ou ne les récupérer qu'une seule fois. Reflète la valeur de l'attribut [`watch`](/fr/docs/Web/HTML/Reference/Elements/geolocation#watch) de l'élément `<geolocation>`.

## Méthodes d'instance

_Hérite également des méthodes de son interface parente, {{DOMxRef("HTMLElement")}}._

## Évènements

_Hérite également des évènements de son interface parente, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLGeolocationElement.location_event", "location")}} {{Experimental_Inline}}
  - : Déclenché chaque fois que le navigateur reçoit des données de localisation, ou des informations d'erreur lorsque la demande de données de localisation a échoué.
- {{DOMxRef("HTMLGeolocationElement.promptaction_event", "promptaction")}} {{Experimental_Inline}}
  - : Déclenché chaque fois que l'utilisateur·ice active l'élément `<geolocation>` et sélectionne une option dans la boîte de dialogue qui s'affiche, soit pour accorder soit pour refuser l'autorisation de géolocalisation.
- {{DOMxRef("HTMLGeolocationElement.promptdismiss_event", "promptdismiss")}} {{Experimental_Inline}}
  - : Déclenché chaque fois que l'utilisateur·ice active l'élément `<geolocation>` et ferme la boîte de dialogue qui s'affiche, en appuyant sur le bouton «&nbsp;fermer&nbsp;» ou la touche <kbd>Échap</kbd>.
- {{DOMxRef("HTMLGeolocationElement.validationstatuschange_event", "validationstatuschange")}} {{Experimental_Inline}}
  - : Déclenché chaque fois que la valeur {{DOMxRef("HTMLGeolocationElement.isValid", "isValid")}} de l'élément `<geolocation>` change.

## Description

L'interface `HTMLGeolocationElement` représente l'élément HTML {{HTMLElement("geolocation")}}, qui crée un contrôle interactif permettant à l'utilisateur·ice de partager ses données de localisation avec la page.

Lorsque l'utilisateur·ice active le contrôle, une boîte de dialogue s'affiche pour demander l'autorisation de partager ses données de localisation. Si l'autorisation est accordée, le navigateur tente de récupérer les données de localisation de l'utilisateur·ice en utilisant l'API de géolocalisation en arrière-plan.

Par défaut, le navigateur demande les données de localisation une seule fois, comme si la méthode {{DOMxRef("Geolocation.getCurrentPosition()")}} était appelée. Cependant, si l'attribut [`watch`](/fr/docs/Web/HTML/Reference/Elements/geolocation#watch) est défini sur `true`, le navigateur met à jour les données à chaque changement de position de l'appareil, comme si {{DOMxRef("Geolocation.watchPosition()")}} était appelée.

Lorsque la demande de données aboutit, l'évènement {{DOMxRef("HTMLGeolocationElement.location_event", "location")}} est déclenché, ce qui permet de réagir, par exemple en récupérant les données et en affichant la localisation sur une carte.

- Si les données de localisation sont récupérées avec succès, elles sont disponibles dans la propriété {{DOMxRef("HTMLGeolocationElement.position")}}, qui contient un objet {{DOMxRef("GeolocationPosition")}}.
- Si la récupération des données échoue, les informations d'erreur sont disponibles dans la propriété {{DOMxRef("HTMLGeolocationElement.error")}}, qui contient un objet {{DOMxRef("GeolocationPositionError")}}.

Les évènements {{DOMxRef("HTMLGeolocationElement.promptaction_event", "promptaction")}} et {{DOMxRef("HTMLGeolocationElement.promptdismiss_event", "promptdismiss")}} permettent de réagir aux interactions de l'utilisateur·ice avec la boîte de dialogue `<geolocation>`, par exemple pour lui demander de faire un autre choix si l'accès aux données a été refusé.

Lorsqu'un [bloqueur](/fr/docs/Web/HTML/Reference/Elements/geolocation#blocage_de_geolocation) est actif sur un élément {{HTMLElement("geolocation")}}, il est empêché de fonctionner (invalide), temporairement ou définitivement selon la raison. Vous pouvez vérifier s'il est invalide en consultant la propriété {{DOMxRef("HTMLGeolocationElement.isValid")}}. Vous pouvez aussi obtenir la raison de l'invalidité via la propriété {{DOMxRef("HTMLGeolocationElement.invalidReason")}} — voir cette page pour la liste complète des raisons possibles.

## Exemples

### Exemple simple

Pour des exemples minimaux utilisant l'élément `<geolocation>` et l'objet associé `HTMLGeolocationElement` pour retourner des données de localisation, consultez notre [exemple simple <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/geolocation-element/basic-example/) ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-example)) et [exemple simple avec suivi <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/geolocation-element/basic-watch-example/) ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/geolocation-element/basic-watch-example)).

Voir la page de référence [`<geolocation>`](/fr/docs/Web/HTML/Reference/Elements/geolocation#exemple_simple_dutilisation) pour un guide détaillé.

### Exemple de carte intégrée

Cet exemple utilise l'élément `<geolocation>` pour récupérer votre position actuelle, qui est affichée sur une carte rendue avec [Leaflet JS <sup>(angl.)</sup>](https://leafletjs.com/). L'exemple utilise également un élément `<button>` classique pour récupérer les données de localisation dans les navigateurs qui ne prennent pas en charge `<geolocation>`.

#### HTML

Nous incluons un élément `<geolocation>` avec l'attribut `autolocate` afin que le navigateur tente de récupérer automatiquement les données de localisation, à condition que l'autorisation ait été accordée auparavant. À l'intérieur de l'élément `<geolocation>`, nous imbriquons un bouton de secours {{HTMLElement("button")}}, qui sera affiché dans les navigateurs ne prenant pas en charge `<geolocation>` pour permettre la demande de localisation.

```html
<geolocation autolocate>
  <button id="fallback">Use location</button>
</geolocation>
```

Ensuite, nous incluons un élément HTML {{HTMLElement("p")}} pour afficher les messages d'état et les erreurs.

```html
<p id="status">Status:</p>
```

Enfin, nous incluons un élément HTML {{HTMLElement("div")}} pour afficher la carte.

```html
<div id="map"></div>
```

#### JavaScript

Dans notre script, nous commençons par récupérer une référence vers l'élément `<p>` d'état&nbsp;:

```js
const statusElem = document.querySelector("#status");
```

Ensuite, nous détectons si l'élément `<geolocation>` est pris en charge en testant `typeof HTMLGeolocationElement === "function"`&nbsp;:

```js
if (typeof HTMLGeolocationElement === "function") {
  // <geolocation> is supported
} else {
  // <geolocation> is not supported; use fallback button
}
```

Si `<geolocation>` est pris en charge, le bloc `if` s'exécute. Il commence par récupérer une référence vers l'élément `<geolocation>`&nbsp;:

```js
const geo = document.querySelector("geolocation");
```

Ensuite, nous ajoutons un écouteur d'évènement {{DOMxRef("HTMLGeolocationElement.location_event", "location")}} à l'objet `HTMLGeolocationElement` obtenu, pour détecter quand la demande de localisation est retournée. Si les données sont retournées avec succès, nous y accédons via la propriété {{DOMxRef("HTMLGeolocationElement.position")}}, et récupérons les valeurs de latitude et longitude. Nous les affichons dans la console, puis les traçons sur la carte en les passant à la fonction `drawMap()` (que nous définirons plus tard) avec une référence vers l'objet `HTMLGeolocationElement`. Si la demande échoue, nous accédons à l'erreur via la propriété {{DOMxRef("HTMLGeolocationElement.error")}} et affichons le message d'erreur dans la console.

```js
geo.addEventListener("location", () => {
  if (geo.position) {
    console.log(
      `${geo.position.coords.latitude},${geo.position.coords.longitude}`,
    );
    drawMap(geo.position.coords.latitude, geo.position.coords.longitude, geo);
  } else if (geo.error) {
    console.log(geo.error.message);
  }
});
```

Ensuite, nous ajoutons les écouteurs d'évènements {{DOMxRef("HTMLGeolocationElement.promptdismiss_event", "promptdismiss")}} et {{DOMxRef("HTMLGeolocationElement.promptaction_event", "promptaction")}} à l'objet `HTMLGeolocationElement` obtenu. Ceux-ci permettent d'exécuter des fonctions en réponse à la fermeture de la boîte de dialogue `<geolocation>` ou au choix d'une option dans la boîte de dialogue.

```js
geo.addEventListener("promptdismiss", notifyUserRetrySelection);
geo.addEventListener("promptaction", notifyUserGrantPermission);
```

Enfin, pour le bloc `if`, nous définissons les fonctions `notifyUserRetrySelection()` et `notifyUserGrantPermission()` référencées dans les deux écouteurs précédents. La première affiche un message dans le paragraphe d'état pour demander à l'utilisateur·ice d'appuyer à nouveau sur le bouton et d'autoriser la localisation, car dans ce cas, il faudra toujours réessayer. La seconde utilise la propriété {{DOMxRef("HTMLGeolocationElement.permissionStatus")}} pour vérifier si le statut d'autorisation est `denied` ou `prompt` et, le cas échéant, nous demandons à l'utilisateur·ice d'appuyer à nouveau sur le bouton et d'autoriser la localisation. Il n'est pas nécessaire de le demander si l'autorisation a déjà été accordée.

```js
function notifyUserRetrySelection() {
  statusElem.textContent =
    'Veuillez appuyer à nouveau sur le bouton "Utiliser la localisation" et autoriser la localisation pour ce site.';
}

function notifyUserGrantPermission() {
  if (geo.permissionStatus === "denied" || geo.permissionStatus === "prompt") {
    statusElem.textContent =
      'Veuillez appuyer à nouveau sur le bouton "Utiliser la localisation" et autoriser la localisation pour ce site.';
  }
}
```

Si `<geolocation>` n'est pas pris en charge, le bloc `else` s'exécute. Il commence par récupérer une référence vers l'élément `<button>` de secours&nbsp;:

```js
const fallback = document.querySelector("#fallback");
```

Ensuite, nous ajoutons un gestionnaire d'évènement `click` à l'objet `HTMLButtonElement` obtenu. À l'intérieur, nous utilisons un appel à {{DOMxRef("Geolocation.getCurrentPosition()")}} pour émuler les cas de succès et d'échec du chemin de code `HTMLGeolocationElement`. Le résultat est le même — nous traçons les données de localisation sur la carte en les passant à la fonction `drawMap()` (avec une référence vers l'objet `HTMLButtonElement`), ou affichons le message d'erreur dans le paragraphe d'état.

```js
fallback.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      drawMap(position.coords.latitude, position.coords.longitude, fallback);
    },
    (error) => {
      statusElem.textContent += `${error.message}, `;
    },
  );
});
```

La dernière étape consiste à définir la fonction `drawMap()`, qui prend les données de latitude et longitude en arguments, ainsi qu'une référence vers le bouton qui a déclenché la commande. Le corps de la fonction utilise le code de [Leaflet JS <sup>(angl.)</sup>](https://leafletjs.com/) (voir le [Guide de démarrage rapide <sup>(angl.)</sup>](https://leafletjs.com/examples/quick-start/)) pour afficher la position de l'utilisateur·ice sur la carte, affiche un message de succès dans le paragraphe d'état, et masque le bouton. La dernière étape est une simplification pour éviter que le code ne produise une erreur si l'utilisateur·ice appuie à nouveau sur le bouton après le succès.

```js
function drawMap(lat, long, btn) {
  const map = L.map("map").setView([lat, long], 13);
  L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);
  const marker = L.marker([lat, long]).addTo(map);

  statusElem.textContent = "Carte tracée avec succès.";
  btn.style.display = "none";
}
```

#### Résultat

Voir ce code [en direct <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/geolocation-element/embedded-map/) ([code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/geolocation-element/embedded-map)). Essayez d'afficher les démos dans un navigateur pris en charge et un navigateur non pris en charge si possible, et notez la différence dans le flux de la boîte de dialogue d'autorisation lorsque vous autorisez l'utilisation de `geolocation`.

Essayez également ce qui suit&nbsp;:

- Après avoir autorisé la permission `geolocation` et vu la carte s'afficher, essayez de révoquer cette autorisation en utilisant les contrôles du navigateur disponibles, puis actualisez la page pour réinitialiser l'exemple.
- Essayez maintenant de refuser la permission d'utiliser `geolocation` ou de fermer la boîte de dialogue d'autorisation, et notez comment les écouteurs d'évènements `promptdismiss` et `promptaction` que nous avons configurés plus tôt affichent un message dans le paragraphe d'état pour aider l'utilisateur·ice à utiliser la page.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("geolocation")}}
- La [politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy) {{HTTPHeader("Permissions-Policy/geolocation", "geolocation")}}
- [L'API Geolocation](/fr/docs/Web/API/Geolocation_API)
- [L'API Permissions](/fr/docs/Web/API/Permissions_API)
- [Présentation de l'élément HTML `<geolocation>`](https://developer.chrome.com/blog/geolocation-html-element) sur developer.chrome.com (2026)
