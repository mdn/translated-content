---
title: 409 Conflict
slug: Web/HTTP/Status/409
---

{{HTTPSidebar}}

Le code de statut de réponse **`409 Conflict`** indique que la requête entre en conflit avec l'état actuel du serveur.

Les conflits se produisent généralement en réponse à une requête [`PUT`](/fr/docs/Web/HTTP/Methods/PUT). Par exemple, vous pouvez obtenir une réponse 409 lorsque vous téléversez un fichier qui est plus vieux que celui déjà présent sur le serveur, ce qui entraine un conflit de contrôle de version.

## Statut

```
409 Conflict
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`PUT`](/fr/docs/Web/HTTP/Methods/PUT)
