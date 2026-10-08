---
title: "XMLHttpRequest : propriété responseType"
short-title: responseType
slug: Web/API/XMLHttpRequest/responseType
l10n:
  sourceCommit: e561fa67af347b9770b359ba93e8579d2a540682
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La propriété **`responseType`** de l'interface {{DOMxRef("XMLHttpRequest")}} est une chaîne de caractères énumérée définissant le type de données contenues dans la réponse.

Cela permet également à l'auteur·ice de changer le type de réponse. Si une chaîne de caractères vide est définie comme valeur de `responseType`, la valeur par défaut `text` est utilisée.

## Valeur

Une chaîne de caractères qui définit le type de données contenues dans la réponse.
Cela peut prendre les valeurs suivantes&nbsp;:

- `""`
  - : Une chaîne de caractères vide pour `responseType` est équivalente à `"text"`, le type par défaut.
- `"arraybuffer"`
  - : La {{DOMxRef("XMLHttpRequest.response", "response")}} est un objet {{JSxRef("ArrayBuffer")}} JavaScript contenant des données binaires.
- `"blob"`
  - : La `response` est un objet {{DOMxRef("Blob")}} contenant les données binaires.
- `"document"`
  - : La `response` est un {{DOMxRef("Document")}} {{Glossary("HTML")}} ou un {{DOMxRef("XMLDocument")}} {{Glossary("XML")}}, selon le type MIME des données reçues. Voir [HTML dans XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest) pour en savoir plus sur l'utilisation de XHR pour récupérer du contenu HTML.
- `"json"`
  - : La `response` est un objet JavaScript créé en analysant le contenu des données reçues comme du {{Glossary("JSON")}}.
- `"text"`
  - : La `response` est un texte sous forme de chaîne de caractères.

> [!NOTE]
> Lors de la définition de `responseType` sur une valeur particulière, l'auteur·ice doit s'assurer que le serveur envoie réellement une réponse compatible avec ce format. Si le serveur retourne des données qui ne sont pas compatibles avec le `responseType` défini, la valeur de {{DOMxRef("XMLHttpRequest.response", "response")}} est `null`.

### Exceptions

- `InvalidAccessError` {{DOMxRef("DOMException")}}
  - : Une tentative a été faite pour changer la valeur de `responseType` sur un `XMLHttpRequest` qui est en mode synchrone mais pas dans un {{DOMxRef("Worker")}}. Pour plus de détails, voir [Restrictions XHR synchrones](#restrictions_xhr_synchrones) ci-dessous.

## Notes d'utilisation

### Restrictions XHR synchrones

Vous ne pouvez pas changer la valeur de `responseType` dans un `XMLHttpRequest` synchrone, sauf lorsque la requête appartient à un {{DOMxRef("Worker")}}.
Cette restriction est conçue en partie pour aider à garantir que les opérations synchrones ne sont pas utilisées pour de grandes transactions qui bloquent le thread principal du navigateur, ralentissant ainsi l'expérience utilisateur·ice.

Les requêtes XHR sont asynchrones par défaut&nbsp;; elles ne sont placées en mode synchrone qu'en passant `false` comme valeur du paramètre optionnel `async` lors de l'appel de {{DOMxRef("XMLHttpRequest.open", "open()")}}.

### Restrictions dans les Workers

Les tentatives de définition de la valeur de `responseType` sur `document` sont ignorées dans un {{DOMxRef("Worker")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [HTML dans XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/HTML_in_XMLHttpRequest)
- Les données de réponse&nbsp;: {{DOMxRef("XMLHttpRequest.response", "response")}},
  {{DOMxRef("XMLHttpRequest.responseText", "responseText")}} et
  {{DOMxRef("XMLHttpRequest.responseXML", "responseXML")}}
