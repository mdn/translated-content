---
title: API XMLHttpRequest
slug: Web/API/XMLHttpRequest_API
l10n:
  sourceCommit: 0cc63ce1d7f43eb98746a908a9aba68ef6a36f7b
---

{{DefaultAPISidebar("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

**L'API XMLHttpRequest** permet aux applications web de faire des requêtes HTTP aux serveurs web et de recevoir les réponses de manière programmatique en utilisant JavaScript. Cela permet à un site web de mettre à jour seulement une partie d'une page avec des données provenant du serveur, plutôt que de devoir naviguer vers une toute nouvelle page. Cette pratique est également parfois connue sous le nom de {{Glossary("AJAX")}}.

[L'API Fetch](/fr/docs/Web/API/Fetch_API) est le remplacement plus flexible et puissant de l'API XMLHttpRequest. L'API Fetch utilise {{JSxRef("Promise", "les promesses", "", 1)}} au lieu des évènements pour gérer les réponses asynchrones, s'intègre bien avec les [service workers](/fr/docs/Web/API/Service_Worker_API), et prend en charge des aspects avancés du HTTP tels que [CORS](/fr/docs/Web/HTTP/Guides/CORS). Pour ces raisons, l'API Fetch est généralement utilisée dans les applications web modernes à la place de {{DOMxRef("XMLHttpRequest")}}.

## Concepts et utilisation

L'interface centrale de l'API XMLHttpRequest est {{DOMxRef("XMLHttpRequest")}}. Pour effectuer une requête HTTP&nbsp;:

1. Créer une nouvelle instance de `XMLHttpRequest` en appelant son {{DOMxRef("XMLHttpRequest.XMLHttpRequest", "constructeur", "", "nocode")}}.
2. L'initialiser en appelant {{DOMxRef("XMLHttpRequest.open()")}}. À ce stade, vous fournissez l'URL pour la requête, la [méthode HTTP](/fr/docs/Web/HTTP/Reference/Methods) à utiliser, et éventuellement, un nom d'utilisateur·ice et un mot de passe.
3. Attacher des gestionnaires d'évènements pour obtenir le résultat de la requête. Par exemple, l'évènement {{DOMxRef("XMLHttpRequestEventTarget/load_event", "load")}} est déclenché lorsque la requête s'est terminée avec succès, et l'évènement {{DOMxRef("XMLHttpRequestEventTarget/error_event", "error")}} est déclenché dans diverses conditions d'erreur.
4. Envoyer la requête en appelant {{DOMxRef("XMLHttpRequest.send()")}}.

Pour un guide détaillé de l'API XMLHttpRequest, voir [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

## Interfaces

- {{DOMxRef("FormData")}}
  - : Un objet représentant les champs et les valeurs d'un formulaire ({{HTMLElement("form")}}), qui peut être envoyé à un serveur en utilisant {{DOMxRef("XMLHttpRequest")}} ou {{DOMxRef("Window/fetch", "fetch()")}}.
- {{DOMxRef("ProgressEvent")}}
  - : Une sous-classe de {{DOMxRef("Event")}} qui est transmise à l'évènement {{DOMxRef("XMLHttpRequestEventTarget/progress_event", "progress")}}, et qui contient des informations sur la progression de la requête.
- {{DOMxRef("XMLHttpRequest")}}
  - : Représente une seule requête HTTP.
- {{DOMxRef("XMLHttpRequestEventTarget")}}
  - : Une superclasse à la fois de {{DOMxRef("XMLHttpRequest")}} et de {{DOMxRef("XMLHttpRequestUpload")}}, définissant les évènements disponibles dans ces deux interfaces.
- {{DOMxRef("XMLHttpRequestUpload")}}
  - : Représente le processus de téléversement pour une requête HTTP. Fournit des évènements permettant au code de suivre la progression d'un téléversement.

## Exemples

### Récupérer les données JSON depuis le serveur

Dans cet exemple, nous récupérons un fichier JSON depuis `https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json`, en ajoutant des écouteurs d'évènements pour montrer la progression de la requête.

#### HTML

```html
<div class="controles">
  <button class="xhr" type="button">Cliquez pour démarrer XHR</button>
</div>

<textarea readonly class="journal-event"></textarea>
```

```css hidden
.journal-event {
  width: 25rem;
  height: 5rem;
  border: 1px solid black;
  margin: 0.5rem;
  padding: 0.2rem;
}

button {
  width: 12rem;
  margin: 0.5rem;
}
```

#### JavaScript

```js
const boutonXHR = document.querySelector(".xhr");
const journal = document.querySelector(".journal-event");
const url =
  "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json";

function gererEvent(e) {
  journal.textContent = `${journal.textContent}${e.type} : ${e.loaded} octets transférés\n`;
}

function ajouterEcouteur(xhr) {
  xhr.addEventListener("loadstart", gererEvent);
  xhr.addEventListener("load", gererEvent);
  xhr.addEventListener("loadend", gererEvent);
  xhr.addEventListener("progress", gererEvent);
  xhr.addEventListener("error", gererEvent);
  xhr.addEventListener("abort", gererEvent);
}

boutonXHR.addEventListener("click", () => {
  journal.textContent = "";

  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  ajouterEcouteur(xhr);
  xhr.send();
});
```

#### Résultat

{{EmbedLiveSample("Récupérer les données JSON depuis le serveur")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
