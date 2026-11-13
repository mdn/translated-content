---
title: "Raison : L'authentification n'est pas prise en charge si l'en-tête CORS « Access-Control-Allow-Origin » est « * »"
slug: Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Raison

```plain
Raison : L'authentification n'est pas prise en charge si l'en-tête CORS « Access-Control-Allow-Origin » est « * »
```

En anglais&nbsp;:

```plain
Reason: Credential is not supported if the CORS header 'Access-Control-Allow-Origin' is '*'
```

## Quel est le problème ?

La requête {{Glossary("CORS")}} a été tentée avec le drapeau des informations d'identification activé, mais le serveur est configuré en utilisant le caractère générique (`"*"`) comme valeur de {{HTTPHeader("Access-Control-Allow-Origin")}}, ce qui n'autorise pas l'utilisation des informations d'identification.

Pour corriger ce problème côté client, assurez-vous que la valeur du drapeau des informations d'identification est `false` lors de l'émission de votre requête CORS.

- Si vous utilisez [l'API Fetch](/fr/docs/Web/API/Fetch_API), assurez-vous que {{DOMxRef("Request.credentials")}} est `"omit"`.
- Si la requête est émise en utilisant {{DOMxRef("XMLHttpRequest")}}, assurez-vous de ne pas définir {{DOMxRef("XMLHttpRequest.withCredentials", "withCredentials")}} sur `true`.
- Si vous utilisez [les évènements envoyés par le serveur](/fr/docs/Web/API/Server-sent_events), assurez-vous que {{DOMxRef("EventSource.withCredentials")}} est `false` (c'est la valeur par défaut).

Si, en revanche, vous devez ajuster le comportement du serveur, vous devez modifier la valeur de `Access-Control-Allow-Origin` pour accorder l'accès à l'origine à partir de laquelle le client est chargé.

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- L'entrée du glossaire {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
