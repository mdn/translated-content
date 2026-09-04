---
title: En-tête Access-Control-Allow-Credentials
short-title: Access-Control-Allow-Credentials
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Credentials
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Access-Control-Allow-Credentials`** indique aux navigateurs si le serveur autorise l'inclusion de justificatifs dans les requêtes HTTP inter-origines.

Les justificatifs incluent les cookies, les certificats client {{Glossary("TLS", "Transport Layer Security (TLS)")}}, ou les en-têtes d'authentification contenant un nom d'utilisateur·ice et un mot de passe.
Par défaut, ces justificatifs ne sont pas envoyés dans les requêtes inter-origines, et le faire peut rendre un site vulnérable aux attaques de {{Glossary("CSRF", "Cross-Site Request Forgery (CSRF)")}}.

Un client peut demander l'inclusion de justificatifs dans les requêtes inter-sites de plusieurs façons&nbsp;:

- En utilisant {{DOMxRef("Window/fetch", "fetch()")}}, en définissant l'option [`credentials`](/fr/docs/Web/API/RequestInit#credentials) à `"include"`.
- En utilisant {{DOMxRef("XMLHttpRequest")}}, en définissant la propriété {{DOMxRef("XMLHttpRequest.withCredentials")}} à `true`.
- En utilisant {{DOMxRef("EventSource()")}}, en définissant la propriété {{DOMxRef("EventSource.withCredentials")}} à `true`.

Lorsque des justificatifs sont inclus&nbsp;:

- Pour les requêtes {{Glossary("Preflight_request", "préliminaires")}}&nbsp;: la requête préliminaire n'inclut pas de justificatifs.
  Si la réponse du serveur à la requête préliminaire définit l'en-tête `Access-Control-Allow-Credentials` à `true`, alors la requête réelle inclura les justificatifs&nbsp;; sinon, le navigateur signale une erreur réseau.
- Pour les requêtes non préliminaires&nbsp;: la requête inclura les justificatifs, et si la réponse du serveur ne définit pas l'en-tête `Access-Control-Allow-Credentials` à `true`, le navigateur signale une erreur réseau.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Access-Control-Allow-Credentials: true
```

## Directives

- `true`
  - : Le serveur autorise l'inclusion de justificatifs dans les requêtes HTTP inter-origines.
    C'est la seule valeur valide pour cet en-tête et elle est sensible à la casse.
    Si vous n'avez pas besoin de justificatifs, omettez complètement cet en-tête au lieu de définir sa valeur à `false`.

## Exemples

Autoriser les justificatifs&nbsp;:

```http
Access-Control-Allow-Credentials: true
```

Utilisation de {{DOMxRef("Window/fetch", "fetch()")}} avec justificatifs&nbsp;:

```js
fetch(url, {
  credentials: "include",
});
```

Utilisation de {{DOMxRef("XMLHttpRequest")}} avec justificatifs&nbsp;:

```js
const xhr = new XMLHttpRequest();
xhr.open("GET", "http://example.com/", true);
xhr.withCredentials = true;
xhr.send(null);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("XMLHttpRequest.withCredentials")}}
- La méthode {{DOMxRef("Request.Request()", "Request()")}}
