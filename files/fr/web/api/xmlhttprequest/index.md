---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
l10n:
  sourceCommit: f6e66d18205c93fcaeb2ea9ad51541b5b4d7d2b1
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

Les objets `XMLHttpRequest` (XHR) permettent d'interagir avec des serveurs. On peut récupérer des données à partir d'une URL sans avoir à rafraîchir complètement la page. Cela permet à une page web d'être mise à jour sans perturber les actions de l'utilisatrice ou de l'utilisateur.

{{InheritanceDiagram}}

Malgré son nom, `XMLHttpRequest` peut être utilisé afin de récupérer tout type de données et pas uniquement du XML.

Si vos opérations de communication nécessitent l'échange d'évènements ou de messages avec un serveur, pensez à utiliser [les évènements serveur](/fr/docs/Web/API/Server-sent_events) via l'interface {{DOMxRef("EventSource")}}. Pour une communication bidirectionnelle complète, les [WebSockets](/fr/docs/Web/API/WebSockets_API) peuvent être une meilleure alternative.

## Constructeur

- {{DOMxRef("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}
  - : Le constructeur initialise un objet `XMLHttpRequest`. Il doit être appelé avant toute autre méthode.

## Propriétés d'instance

_Cette interface hérite également des propriétés de {{DOMxRef("XMLHttpRequestEventTarget")}} et de {{DOMxRef("EventTarget")}}._

- {{DOMxRef("XMLHttpRequest.readyState")}} {{ReadOnlyInline}}
  - : Retourne un nombre représentant l'état de la requête.
- {{DOMxRef("XMLHttpRequest.response")}} {{ReadOnlyInline}}
  - : Retourne un objet {{JSxRef("ArrayBuffer")}}, {{DOMxRef("Blob")}}, {{DOMxRef("Document")}}, un objet JavaScript ou une chaîne de caractères selon la valeur de {{DOMxRef("XMLHttpRequest.responseType")}}. Cet objet contient le corps de la réponse.
- {{DOMxRef("XMLHttpRequest.responseText")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères qui contient la réponse à la requête sous forme de texte ou la valeur `null` si la requête a échoué ou n'a pas encore été envoyée.
- {{DOMxRef("XMLHttpRequest.responseType")}}
  - : Retourne une valeur parmi une liste qui définit le type de réponse.
- {{DOMxRef("XMLHttpRequest.responseURL")}} {{ReadOnlyInline}}
  - : Retourne l'URL sérialisée de la réponse ou la chaîne vide si l'URL est nulle.
- {{DOMxRef("XMLHttpRequest.responseXML")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("Document")}} qui contient la réponse de la requête ou `null` si la requête a échoué, qu'elle n'a pas encore été envoyée ou qu'elle ne peut pas être analysée comme XML ou HTML. Cette propriété n'est pas disponible dans les [Web Workers](/fr/docs/Web/API/Web_Workers_API).
- {{DOMxRef("XMLHttpRequest.status")}} {{ReadOnlyInline}}
  - : Retourne le [code de statut de la réponse HTTP](/fr/docs/Web/HTTP/Reference/Status) de la requête.
- {{DOMxRef("XMLHttpRequest.statusText")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères qui contient la chaîne de caractères / réponse renvoyée par le serveur HTTP. À la différence de {{DOMxRef("XMLHttpRequest.status")}}, tout le texte du statut est inclus ("`200 OK`" plutôt que "`200`" par exemple).

> [!NOTE]
> Selon la spécification HTTP/2 {{RFC(7540, "Response Pseudo-Header Fields <sup>(angl.)</sup>", "8.1.2.4")}}, HTTP/2 ne définit pas de méthode pour porter la version ou la raison/phrase incluse dans la ligne de statut HTTP/1.1.

- {{DOMxRef("XMLHttpRequest.timeout")}}
  - : Le temps en millisecondes qu'une requête peut prendre avant d'être terminée automatiquement.
- {{DOMxRef("XMLHttpRequest.upload")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("XMLHttpRequestUpload")}} qui représente le processus de téléversement.
- {{DOMxRef("XMLHttpRequest.withCredentials")}}
  - : Retourne `true` si les requêtes `Access-Control` intersites doivent être effectuées en utilisant des informations d'identification telles que des cookies ou des en-têtes d'autorisation&nbsp;; sinon `false`.

### Propriétés non-standard

- {{DOMxRef("XMLHttpRequest.mozAnon")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Un booléen. S'il est vrai, la requête sera envoyée sans cookie ou en-tête d'autorisation.
- {{DOMxRef("XMLHttpRequest.mozSystem")}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Un booléen. S'il est vrai, la politique d'origine unique ne sera pas vérifiée pour la requête.

### Gestionnaires d'évènement

Le gestionnaire `onreadystatechange`, comme propriété des instances `XMLHttpRequest`, est pris en charge par l'ensemble des navigateurs.

D'autres gestionnaires d'évènements ont également été implémentés dans différents navigateurs (`onload`, `onerror`, `onprogress`, etc.). Voir le guide [Manipuler XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest).

La plupart des navigateurs récents gère également les évènements via la méthode {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} (en plus des méthodes `on*`).

## Méthodes d'instance

- {{DOMxRef("XMLHttpRequest.abort()")}}
  - : Interrompt la requête si elle a déjà été envoyée.
- {{DOMxRef("XMLHttpRequest.getAllResponseHeaders()")}}
  - : Retourne tous les en-têtes de réponse, séparés par {{Glossary("CRLF")}}, sous forme de chaîne de caractères, ou `null` si aucune réponse n'a été reçue.
- {{DOMxRef("XMLHttpRequest.getResponseHeader()")}}
  - : Retourne la chaîne de caractères contenant le texte de l'en-tête défini ou `null` si aucune des réponse n'a été reçue ou si l'en-tête n'existe pas dans la réponse.
- {{DOMxRef("XMLHttpRequest.open()")}}
  - : Initialise une requête.
- {{DOMxRef("XMLHttpRequest.overrideMimeType()")}}
  - : Surcharge le type MIME retourné par le serveur.
- {{DOMxRef("XMLHttpRequest.send()")}}
  - : Envoie la requête. Si la requête est asynchrone (le comportement par défaut), la méthode renvoie un résultat dès que la requête est envoyée.
- {{DOMxRef("XMLHttpRequest.setAttributionReporting()")}} {{SecureContext_Inline}} {{Deprecated_Inline}}
  - : Indique que vous souhaitez que la réponse de la requête puisse enregistrer une source d'attribution ou déclencher un évènement.
- {{DOMxRef("XMLHttpRequest.setPrivateToken()")}} {{Experimental_Inline}}
  - : Ajoute des informations de [jeton d'état privé](/fr/docs/Web/API/Private_State_Token_API/Using) à un appel `XMLHttpRequest`, pour initier des opérations de jeton d'état privé.
- {{DOMxRef("XMLHttpRequest.setRequestHeader()")}}
  - : Définit la valeur d'un en-tête de requête HTTP. Vous devez appeler `setRequestHeader()` après {{DOMxRef("XMLHttpRequest.open", "open()")}}, mais avant {{DOMxRef("XMLHttpRequest.send", "send()")}}.

## Évènements

_Cette interface hérite également des évènements de {{DOMxRef("XMLHttpRequestEventTarget")}}._

- {{DOMxRef("XMLHttpRequest/readystatechange_event", "readystatechange")}}
  - : Déclenché chaque fois que la propriété {{DOMxRef("XMLHttpRequest.readyState", "readyState")}} change.
    Disponible également via la propriété du gestionnaire d'évènements `onreadystatechange`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("XMLSerializer")}}&nbsp;: pour sérialiser un arbre DOM en XML
- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
