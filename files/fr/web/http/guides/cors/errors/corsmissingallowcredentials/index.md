---
title: "Raison : « true » attendu dans l'en-tête CORS « Access-Control-Allow-Credentials »"
slug: Web/HTTP/Guides/CORS/Errors/CORSMissingAllowCredentials
l10n:
  sourceCommit: a8b5a77bb154e0c3a124fb4af441d11e4259836e
---

## Raison

```plain
Raison : « true » attendu dans l'en-tête CORS « Access-Control-Allow-Credentials »
```

En anglais&nbsp;:

```plain
Reason: expected 'true' in CORS header 'Access-Control-Allow-Credentials'
```

## Quel est le problème ?

La requête {{Glossary("CORS")}} exige que le serveur autorise l'utilisation des informations d'identification, mais la valeur de l'en-tête {{HTTPHeader("Access-Control-Allow-Credentials")}} du serveur n'est pas définie sur `true` pour permettre leur utilisation.

Pour résoudre ce problème côté client, modifiez le code pour ne pas demander l'utilisation des informations d'identification.

- Si vous utilisez [l'API Fetch](/fr/docs/Web/API/Fetch_API), assurez-vous que {{DOMxRef("Request.credentials")}} est `"omit"`.
- Si la requête est émise en utilisant {{DOMxRef("XMLHttpRequest")}}, assurez-vous de ne pas définir {{DOMxRef("XMLHttpRequest.withCredentials", "withCredentials")}} sur `true`.
- Si vous utilisez [les évènements envoyés par le serveur](/fr/docs/Web/API/Server-sent_events), assurez-vous que {{DOMxRef("EventSource.withCredentials")}} est `false` (c'est la valeur par défaut).

Pour éliminer cette erreur en modifiant la configuration du serveur, ajustez la configuration du serveur pour définir la valeur de l'en-tête `Access-Control-Allow-Credentials` sur `true`.

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- L'entrée du glossaire {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
