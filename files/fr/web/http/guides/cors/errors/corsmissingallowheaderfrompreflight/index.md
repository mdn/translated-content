---
title: "Raison : Jeton « xyz » manquant dans l'en-tête CORS « Access-Control-Allow-Headers » du canal de pré-validation CORS"
slug: Web/HTTP/Guides/CORS/Errors/CORSMissingAllowHeaderFromPreflight
l10n:
  sourceCommit: 92396cf8979e107c3ac42c2b9fc382013ea1c234
---

## Raison

```plain
Raison : jeton « xyz » manquant dans l'en-tête CORS « Access-Control-Allow-Headers » du canal de pré-validation CORS
```

En anglais&nbsp;:

```plain
Reason: missing token 'xyz' in CORS header 'Access-Control-Allow-Headers' from CORS preflight channel
```

## Quel est le problème ?

L'en-tête `Access-Control-Allow-Headers` est envoyé par le serveur pour informer le client des en-têtes qu'il prend en charge pour les requêtes {{Glossary("CORS")}}. La valeur de `Access-Control-Allow-Headers` doit être une liste d'en-têtes séparés par des virgules, tels que `X-Custom-Information` ou tout autre en-tête standard mais non basique (qui sont toujours autorisés).

Cette erreur se produit lorsqu'on tente de pré-valider un en-tête qui n'est pas expressément autorisé (c'est-à-dire qu'il n'est pas inclus dans la liste définie par l'en-tête `Access-Control-Allow-Headers` envoyé par le serveur). Pour résoudre ce problème, le serveur doit être mis à jour afin de permettre l'en-tête indiqué, ou vous devez éviter d'utiliser cet en-tête.

Si le serveur n'est pas sous votre contrôle, consultez [les considérations côté client](/fr/docs/Web/HTTP/Guides/CORS/Errors#considérations_côté_client) pour des approches alternatives.

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- L'entrée du glossaire {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
- [Les en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
