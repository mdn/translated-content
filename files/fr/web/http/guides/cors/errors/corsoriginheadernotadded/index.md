---
title: "Raison : L'en-tête CORS « Origin » ne peut pas être ajouté"
slug: Web/HTTP/Guides/CORS/Errors/CORSOriginHeaderNotAdded
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

## Raison

```plain
Raison : L'en-tête CORS « Origin » ne peut pas être ajouté
```

En anglais&nbsp;:

```plain
Reason: CORS header 'Origin' cannot be added
```

## Quel est le problème ?

{{Glossary("user agent", "L'agent utilisateur")}} n'a pas pu ajouter l'en-tête requis {{HTTPHeader("Origin")}} à la requête {{Glossary("HTTP")}}. Toutes les requêtes CORS doivent avoir un en-tête `Origin`.

Cela peut se produire si le code JavaScript s'exécute avec des privilèges accrus lui permettant d'accéder au contenu de plusieurs domaines, par exemple.

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- L'entrée du glossaire {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
