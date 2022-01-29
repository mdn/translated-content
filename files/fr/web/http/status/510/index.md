---
title: 510 Not Extended
slug: Web/HTTP/Status/510
translation_of: Web/HTTP/Status/510
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`510 Not Extended`** est envoyé dans le contexte du «&nbsp;<i lang="en">HTTP Extension Framework</i>&nbsp;», defini dans la [RFC 2774](https://tools.ietf.org/html/rfc2774).

Dans cette spécification, un client peut envoyer une demande qui contient une déclaration d'extension et qui décrit l'extension à utiliser. Si le serveur reçoit une telle demande, mais que les extensions décrites ne sont pas prises en charge pour la requête, alors, le serveur répond avec le code de statut 510.

## Statut

```
510 Not Extended
```

## Spécifications

| Spécification                                            | Titre                                                          |
| -------------------------------------------------------- | -------------------------------------------------------------- |
| [RFC 2774, section 7: 510 Not Extended](https://datatracker.ietf.org/doc/html/rfc2774#section-7) | Cadre pour les extensions HTTP (<i lang="en">An HTTP Extension Framework</i>) |
