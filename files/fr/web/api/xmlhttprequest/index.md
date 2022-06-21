---
title: XMLHttpRequest
slug: Web/API/XMLHttpRequest
tags:
  - AJAX
  - API
  - HTTP
  - Interface
  - Reference
  - Web
  - XMLHttpRequest
translation_of: Web/API/XMLHttpRequest
---
{{DefaultAPISidebar("XMLHttpRequest")}}

Les objets `XMLHttpRequest` (XHR) permettent d'interagir avec des serveurs. On peut récupérer des données à partir d'une URL sans avoir à rafraîchir complètement la page. Cela permet à une page web d'être mise à jour sans perturber les actions de l'utilisateur.

`XMLHttpRequest` est beaucoup utilisé par l'approche {{Glossary("AJAX")}}.

{{InheritanceDiagram(650, 150)}}

Malgré son nom, `XMLHttpRequest` peut être utilisé afin de récupérer tout type de données et pas uniquement du XML.

Si vos opérations de communication nécessitent l'échange d'évènements ou de messages avec un serveur, pensez à utiliser [les évènements serveur](/fr/docs/Web/API/Server-sent_events) via l'interface {{domxref("EventSource")}}. Pour une communication bidirectionnelle complète, les [WebSockets](/fr/docs/Web/API/WebSockets_API) peuvent être une meilleure alternative.

## Constructeur

- {{domxref("XMLHttpRequest.XMLHttpRequest", "XMLHttpRequest()")}}
  - : Le constructeur initialise un objet `XMLHttpRequest`. Il doit être appelé avant toute autre méthode.

## Propriétés

_Cette interface hérite également des propriétés de {{domxref("XMLHttpRequestEventTarget")}} et de {{domxref("EventTarget")}}._

- {{domxref("XMLHttpRequest.onreadystatechange")}}
  - : Un gestionnaire d'évènement ({{event("Event_handlers", "event handler")}}) invoqué à chaque fois que l'attribut `readyState` change.
- {{domxref("XMLHttpRequest.readyState")}} {{readonlyinline}}
  - : L'état de la requête sous la forme d'un `unsigned short`.
- {{domxref("XMLHttpRequest.response")}} {{readonlyinline}}
  - : Un objet {{jsxref("ArrayBuffer")}}, {{domxref("Blob")}}, {{domxref("Document")}}, un objet JavaScript ou une chaîne de caractères ({{domxref("DOMString")}}) selon la valeur de {{domxref("XMLHttpRequest.responseType")}}. Cet objet contient le corps de la réponse.
- {{domxref("XMLHttpRequest.responseText")}} {{readonlyinline}}
  - : Une chaîne de caractères {{domxref("DOMString")}} qui contient la réponse à la requête sous forme de texte ou la valeur `null` si la requête a échoué ou n'a pas encore été envoyée.
- {{domxref("XMLHttpRequest.responseType")}}
  - : Une valeur parmi une liste qui définit le type de réponse.
- {{domxref("XMLHttpRequest.responseURL")}} {{readonlyinline}}
  - : L'URL sérialisée de la réponse ou la chaîne vide si l'URL est nulle.
- {{domxref("XMLHttpRequest.responseXML")}} {{readonlyinline}}
  - : Un objet {{domxref("Document")}} qui contient la réponse de la requête ou `null` si la requête a échoué, qu'elle n'a pas encore été envoyée ou qu'elle ne peut pas être analysée comme XML ou HTML. Cette propriété n'est pas disponible dans les _workers_.
- {{domxref("XMLHttpRequest.status")}} {{readonlyinline}}
  - : Une valeur numérique `unsigned short` qui décrit le statut de la réponse à la requête.
- {{domxref("XMLHttpRequest.statusText")}} {{readonlyinline}}
  - : Une chaîne {{domxref("DOMString")}} qui contient la chaîne de caractères / réponse renvoyée par le serveur HTTP. À la différence de {{domxref("XMLHttpRequest.status")}}, tout le texte du statut est inclus ("`200 OK`" plutôt que "`200`" par exemple).

> **Note :** Selon la spécification HTTP/2 ([voir 8.1.2.4](https://http2.github.io/http2-spec/#rfc.section.8.1.2.4) [Response Pseudo-Header Fields](https://http2.github.io/http2-spec/#HttpResponse)), HTTP/2 ne définit pas de méthode pour porter la version ou la raison/phrase incluse dans la ligne de statut HTTP/1.1.

- {{domxref("XMLHttpRequest.timeout")}}
  - : Un entier `unsigned long` qui représente le nombre de millisecondes qu'une requête peut prendre avant d'être terminée automatiquement.
- {{domxref("XMLHttpRequestEventTarget.ontimeout")}}
  - : Un gestionnaire d'évènement ({{event("Event_handlers", "event handler")}}) appelé lorsque la requête a expiré.
- {{domxref("XMLHttpRequest.upload")}} {{readonlyinline}}
  - : Un objet {{domxref("XMLHttpRequestUpload")}} qui représente le processus d'_upload_.
- {{domxref("XMLHttpRequest.withCredentials")}}
  - : Un booléen ({{domxref("Boolean")}}) qui indique si des requêtes `Access-Control` d'origines différentes peuvent être effectuées avec des informations d'authentification telles que des cookies ou des en-têtes d'autorisation.

### Propriétés non-standard

- {{domxref("XMLHttpRequest.channel")}}{{ReadOnlyInline}}
  - : Un objet `nsIChannel`. Le canal à utiliser par l'objet lorsqu'il effectue la requête.
- {{domxref("XMLHttpRequest.mozAnon")}}{{ReadOnlyInline}}
  - : Un booléen. S'il est vrai, la requête sera envoyée sans cookie ou en-tête d'autorisation.
- {{domxref("XMLHttpRequest.mozSystem")}}{{ReadOnlyInline}}
  - : Un booléen. S'il est vrai, la politique d'origine unique ne sera pas vérifiée pour la requête.
- {{domxref("XMLHttpRequest.mozBackgroundRequest")}}
  - : Un booléen qui indique si l'objet représente une requête de service en arrière-plan.
- {{domxref("XMLHttpRequest.mozResponseArrayBuffer")}} {{deprecated_inline}}{{ReadOnlyInline}}
  - : Un objet {{jsxref("ArrayBuffer")}} qui est la réponse à la requête sous la forme d'un tableau typé JavaScript.
- {{domxref("XMLHttpRequest.multipart")}} {{deprecated_inline}}
  - : **Cette fonctionnalité spécifique à Gecko a été retirée avec Firefox/Gecko 22.** Veuillez utiliser [les évènements serveurs](/fr/docs/Web/API/Server-sent_events) ou [les web sockets](/fr/docs/Web/API/WebSockets_API) ou encore la propriété `responseText` des évènements de progression.

### Gestionnaires d'évènement

Le gestionnaire `onreadystatechange`, comme propriété des instances `XMLHttpRequest`, est pris en charge par l'ensemble des navigateurs.

D'autres gestionnaires d'évènements ont également été implémentés dans différents navigateurs (`onload`, `onerror`, `onprogress`, etc.). Voir le guide [Manipuler XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest).

La plupart des navigateurs récents gère également les évènements via la méthode {{domxref("EventTarget.addEventListener", "addEventListener()")}} (en plus des méthodes  `on*`).

## Méthodes

- {{domxref("XMLHttpRequest.abort()")}}
  - : Interrompt la requête si elle a déjà été envoyée.
- {{domxref("XMLHttpRequest.getAllResponseHeaders()")}}
  - : Renvoie, via une chaîne de caractères, l'ensemble des en-têtes de la réponse, séparés par {{Glossary("CRLF")}} ou la valeur `null` si aucune réponse n'a été reçue.
- {{domxref("XMLHttpRequest.getResponseHeader()")}}
  - : Renvoie la chaîne de caractères contenant le texte de l'en-tête voulue ou `null` si aucune des réponse n'a été reçue ou si l'en-tête n'existe pas dans la réponse.
- {{domxref("XMLHttpRequest.open()")}}
  - : Initialise une requête. Cette méthode doit être utilisée par du code JavaScript.
- {{domxref("XMLHttpRequest.overrideMimeType()")}}
  - : Surcharge le type MIME renvoyé par le serveur.
- {{domxref("XMLHttpRequest.send()")}}
  - : Envoie la requête. Si la requête est asynchrone (le comportement par défaut), la méthode renvoie un résultat dès que la requête est envoyée.
- {{domxref("XMLHttpRequest.setRequestHeader()")}}
  - : Définit la valeur d'un en-tête de requête HTTP. Cette méthode doit être appelée après `open()` mais avant`send()`.

### Méthodes non-standard

- {{domxref("XMLHttpRequest.init()")}}
  - : Initialise l'objet depuis pour une utilisation depuis du code C++.

> **Attention :** Cette méthode ne doit pas être appelée depuis du code JavaScript.

- {{domxref("XMLHttpRequest.openRequest()")}}
  - : Initialise une requête depuis du code natif. Voir la méthode [`open()`](</en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIXMLHttpRequest#open()>) ci-avant pour initialiser une requête de façon standard en JavaSCript.
- {{domxref("XMLHttpRequest.sendAsBinary()")}}{{deprecated_inline()}}
  - : Une variante de `send()` afin d'envoyer des données binaires.

## Évènements

- {{domxref("XMLHttpRequest/abort_event", "abort")}}
  - : Se déclenche lorsqu'une requête a été interrompue (par exemple via {{domxref("XMLHttpRequest.abort()")}}). Le gestionnaire
    {{domxref("XMLHttpRequestEventTarget/onabort", "onabort")}} est également disponible.
- {{domxref("XMLHttpRequest/error_event", "error")}}
  - : Se déclenche lorsqu'une requête a rencontré une erreur.
    Le gestionnaire {{domxref("XMLHttpRequestEventTarget/onerror", "onerror")}} est également disponible.
- {{domxref("XMLHttpRequest/load_event", "load")}}
  - : Se déclenche lorsqu'une transaction {{domxref("XMLHttpRequest")}} se termine correctement. Le gestionnaire {{domxref("XMLHttpRequestEventTarget/onload", "onload")}} est également disponible.
- {{domxref("XMLHttpRequest/loadend_event", "loadend")}}
  - : Se déclenche lorsqu'une requête est terminée (avec une erreur ou non). Quand elle a réussi, l'évènement a lieu après {{domxref("XMLHttpRequest/load_event", "load")}}). Quand elle a échoué, l'évènement survient après {{domxref("XMLHttpRequest/error_event", "error")}}).
    Le gestionnaire {{domxref("XMLHttpRequestEventTarget/onloadend", "onloadend")}} est également disponible.
- {{domxref("XMLHttpRequest/loadstart_event", "loadstart")}}
  - : Se déclenche lorsqu'une requête commence à charger des données.
    Le gestionnaire {{domxref("XMLHttpRequestEventTarget/onloadstart", "onloadstart")}} est également disponible.
- {{domxref("XMLHttpRequest/progress_event", "progress")}}
  - : Se déclenche périodiquement lorsqu'une requête reçoit des données supplémentaires. Le gestionnaire {{domxref("XMLHttpRequestEventTarget/onprogress", "onprogress")}} est également disponible.
- {{domxref("XMLHttpRequest/timeout_event", "timeout")}}
  - : Se déclenche lorsque la progression est terminée du fait de l'expiration de la durée limite. Le gestionnaire {{domxref("XMLHttpRequestEventTarget/ontimeout", "ontimeout")}} est également disponible.

## Spécifications

| Spécification                            | État                                 | Commentaires                                |
| ---------------------------------------- | ------------------------------------ | ------------------------------------------- |
| {{SpecName('XMLHttpRequest')}} | {{Spec2('XMLHttpRequest')}} | Standard évolutif, version la plus récente. |

## Compatibilité des navigateurs

{{Compat("api.XMLHttpRequest")}}

## Voir aussi

- {{domxref("XMLSerializer")}} : sérialiser un arbre DOM en XML
- Les tutoriels MDN sur `XMLHttpRequest`:

  - [Introduction à AJAX](/fr/docs/Web/Guide/AJAX/Premiers_pas)
  - [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest/Utiliser_XMLHttpRequest)
  - [Manipuler le HTML avec XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest/HTML_in_XMLHttpRequest)
  - [L'API Fetch](/fr/docs/Web/API/Fetch_API)

- [HTML5 Rocks — Nouvelles astuces avec XMLHttpRequest2 (en anglais)](https://www.html5rocks.com/en/tutorials/file/xhr2/)
