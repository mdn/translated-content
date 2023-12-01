---
title: 414 URI Too Long
slug: Web/HTTP/Status/414
---

{{HTTPSidebar}}

Le code de statut de réponse HTTP **`414 URI Too Long`** indique que l'URI demandée par le client est plus longue que ce que le serveur est disposé à interpréter.

Il existe quelques rares cas de figure pour lesquels cela peut se produire&nbsp;:

- Un client a mal converti une requête [`POST`](/fr/docs/Web/HTTP/Methods/POST) vers une requête [`GET`](/fr/docs/Web/HTTP/Methods/GET) qui contient de nombreuses informations,
- Un client est descendu dans une boucle de redirection (par exemple, un URI de redirection qui pointe vers un suffixe de lui-même),
- Un serveur est sous le coup d'une attaque par un client qui tente d'exploiter des failles de sécurité potentielles.

## Statut

```
414 URI Too Long
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [URI](/fr/docs/Glossary/URI)
