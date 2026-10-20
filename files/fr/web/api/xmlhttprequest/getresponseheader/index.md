---
title: "XMLHttpRequest : méthode getResponseHeader()"
short-title: getResponseHeader()
slug: Web/API/XMLHttpRequest/getResponseHeader
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("XMLHttpRequest API")}}{{AvailableInWorkers("window_and_worker_except_service")}}

La méthode **`getResponseHeader()`** de l'interface {{DOMxRef("XMLHttpRequest")}} retourne la chaîne de caractères contenant le texte de la valeur d'un en-tête particulier.

Si plusieurs en-têtes de réponse ont le même nom, leurs valeurs sont retournées sous forme d'une seule chaîne de caractères concaténée, chaque valeur étant séparée de la précédente par une paire de virgule et d'espace. La méthode `getResponseHeader()` retourne la valeur sous forme de séquence d'octets UTF.

> [!NOTE]
> La recherche du nom de l'en-tête est insensible à la casse.

Si vous avez besoin d'obtenir la chaîne de caractères brute de tous les en-têtes, utilisez la méthode {{DOMxRef("XMLHttpRequest.getAllResponseHeaders", "getAllResponseHeaders()")}}, qui retourne l'intégralité de la chaîne de caractères d'en-têtes brute.

## Syntaxe

```js-nolint
getResponseHeader(headerName)
```

### Paramètres

- `headerName`
  - : Une chaîne de caractères indiquant le nom de l'en-tête dont vous souhaitez obtenir la valeur sous forme de texte.

### Valeur de retour

Une chaîne de caractères représentant la valeur de l'en-tête sous forme de texte, ou `null` si la réponse n'a pas encore été reçue ou si l'en-tête n'existe pas dans la réponse.

## Exemples

Dans cet exemple, une requête est créée et envoyée, et un gestionnaire pour l'évènement {{DOMxRef("XMLHttpRequest/readystatechange_event", "readystatechange")}} est établi pour vérifier le {{DOMxRef("XMLHttpRequest.readyState", "readyState")}} afin d'indiquer que les en-têtes ont été reçus&nbsp;; lorsque c'est le cas, la valeur de l'en-tête {{HTTPHeader("Content-Type")}} est récupérée. Si le `Content-Type` n'est pas la valeur souhaitée, la requête {{DOMxRef("XMLHttpRequest")}} est annulée en appelant {{DOMxRef("XMLHttpRequest.abort", "abort()")}}.

```js
const client = new XMLHttpRequest();
client.open("GET", "les-licornes-sont-geniales.txt", true);
client.send();

client.onreadystatechange = () => {
  if (client.readyState === client.HEADERS_RECEIVED) {
    const typeContenu = client.getResponseHeader("Content-Type");
    if (typeContenu !== monTypeAttendu) {
      client.abort();
    }
  }
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser XMLHttpRequest](/fr/docs/Web/API/XMLHttpRequest_API/Using_XMLHttpRequest)
- [Les en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- La méthode {{DOMxRef("XMLHttpRequest.getAllResponseHeaders", "getAllResponseHeaders()")}}
- La propriété {{DOMxRef("XMLHttpRequest.response", "response")}}
- Définir les en-têtes de requête&nbsp;: {{DOMxRef("XMLHttpRequest.setRequestHeader", "setRequestHeader()")}}
