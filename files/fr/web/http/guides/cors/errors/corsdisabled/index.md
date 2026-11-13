---
title: "Raison : CORS désactivé"
slug: Web/HTTP/Guides/CORS/Errors/CORSDisabled
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Raison

```plain
Raison : CORS désactivé
```

En anglais&nbsp;:

```plain
Reason: CORS disabled
```

## Quel est le problème ?

Une requête HTTP nécessitant le {{Glossary("CORS")}} a été tentée, mais le CORS est désactivé sur le navigateur de l'utilisateur·ice. Lorsque cela se produit, l'utilisateur·ice doit réactiver CORS dans le navigateur.

Pour Firefox, la préférence qui désactive le CORS est `content.cors.disable`. Définir cette préférence avec `true` désactive le CORS. Dans ce cas, les requêtes CORS échouent toujours avec cette erreur.

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- L'entrée du glossaire {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
