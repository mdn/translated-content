---
title: "Raison : Échec du canal de pré-validation CORS"
slug: Web/HTTP/Guides/CORS/Errors/CORSPreflightDidNotSucceed
l10n:
  sourceCommit: 92396cf8979e107c3ac42c2b9fc382013ea1c234
---

## Raison

```plain
Raison : Échec du canal de pré-validation CORS
```

En anglais&nbsp;:

```plain
Reason: CORS preflight channel did not succeed
```

## Quel est le problème ?

La requête {{Glossary("CORS")}} nécessite une pré-validation, mais celle-ci n'a pas pu être effectuée. Il y a plusieurs raisons pour lesquelles la pré-validation peut échouer&nbsp;:

- Une requête inter-site a déjà été effectuée et a déjà réalisé une pré-validation, et il n'est pas permis de refaire la pré-validation. Assurez-vous que votre code ne pré-valide qu'une seule fois par connexion.
- La requête de pré-validation a subi une erreur réseau de tout type qui peut normalement se produire.

Si le serveur n'est pas sous votre contrôle, consultez [les considérations côté client](/fr/docs/Web/HTTP/Guides/CORS/Errors#considérations_côté_client) pour des approches alternatives.

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- L'entrée du glossaire {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
