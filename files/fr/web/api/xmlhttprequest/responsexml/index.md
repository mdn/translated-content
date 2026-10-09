---
title: "XMLHttpRequest : propriété responseXML"
short-title: responseXML
slug: Web/API/XMLHttpRequest/responseXML
l10n:
  sourceCommit: 4d9320f9857fb80fef5f3fe78e3d09b06eb0ebbd
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La propriété en lecture seule **`responseXML`** de l'interface {{DOMxRef("XMLHttpRequest")}} retourne un {{DOMxRef("Document")}} contenant le HTML ou le XML récupéré par la requête&nbsp;; ou `null` si la requête a échoué, n'a pas encore été envoyée, ou si les données ne peuvent pas être analysées en tant que XML ou HTML.

> [!NOTE]
> Le nom `responseXML` est un vestige de l'historique de cette propriété&nbsp;; il fonctionne à la fois pour le HTML et le XML.

Généralement, la réponse est analysée comme `"text/xml"`. Si la {{DOMxRef("XMLHttpRequest.responseType", "responseType")}} est définie sur `"document"` et que la requête a été effectuée de manière asynchrone, la réponse est alors analysée comme `"text/html"`. `responseXML` est `null` pour tout autre type de données, ainsi que pour les [URL `data:`](/fr/docs/Web/URI/Reference/Schemes/data).

Si le serveur ne définit pas l'en-tête {{HTTPHeader("Content-Type")}} comme `"text/xml"` ou `"application/xml"`, vous pouvez utiliser {{DOMxRef("XMLHttpRequest.overrideMimeType()")}} pour l'analyser comme XML de toute façon.

Cette propriété n'est pas disponible pour les workers.

## Valeur

Un objet {{DOMxRef("Document")}} obtenu en analysant le XML ou le HTML reçu à l'aide de {{DOMxRef("XMLHttpRequest")}}, ou `null` si aucune donnée n'a été reçue ou si les données ne sont pas au format XML/HTML.

### Exceptions

- `InvalidStateError` {{DOMxRef("DOMException")}}
  - : Levée si la {{DOMxRef("XMLHttpRequest.responseType", "responseType")}} n'est ni `document` ni une chaîne de caractères vide.

## Exemples

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "/server");

// Si défini, responseType doit être une chaîne de caractères vide ou « document »
xhr.responseType = "document";

// Force la réponse à être analysée comme XML
xhr.overrideMimeType("text/xml");

xhr.onload = () => {
  if (xhr.readyState === xhr.DONE && xhr.status === 200) {
    console.log(xhr.response, xhr.responseXML);
  }
};

xhr.send();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("XMLHttpRequest")}}
- La propriété {{DOMxRef("XMLHttpRequest.response")}}
- La propriété {{DOMxRef("XMLHttpRequest.responseType")}}
- [Analyser et sérialiser le XML](/fr/docs/Web/XML/Guides/Parsing_and_serializing_XML)
- Analyser le XML en un arbre DOM&nbsp;: {{DOMxRef("DOMParser")}}
- Sérialiser un arbre DOM en XML&nbsp;: {{DOMxRef("XMLSerializer")}} (plus précisément, la
  méthode {{DOMxRef("XMLSerializer.serializeToString", "serializeToString()")}})
