---
title: "Raison : CORS désactivé"
slug: Web/HTTP/CORS/Errors/CORSDisabled
---

{{HTTPSidebar}}

## Raison

```http
Reason: CORS disabled
(Raison : CORS désactivé)
```

## Quel est le problème ?

Une requête HTTP nécessitant le [CORS](/fr/docs/Glossary/CORS) a été tentée, mais le CORS est désactivé sur le navigateur de l'utilisateur. Lorsque cela se produit, l'utilisateur doit réactiver CORS dans le navigateur.

Pour Firefox, la préférence qui désactive le CORS est `content.cors.disable`. Définir cette préférence avec `true` désactive le CORS. Dans ce cas, les requêtes CORS échoueront toujours avec cette erreur.

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/CORS/Errors)
- Le terme [CORS](/fr/docs/Glossary/CORS) sur le glossaire
- [Introduction au CORS](/fr/docs/Web/HTTP/CORS)
