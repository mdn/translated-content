---
title: 100 Continue
slug: Web/HTTP/Status/100
translation_of: Web/HTTP/Status/100
browser-compat: http.status.100
---
{{HTTPSidebar}}

Le code de statut de réponse HTTP **`100 Continue`** indique que, jusqu'à présent, tout est normal (OK) et que le client doit poursuivre avec la requête ou l'ignorer si celle-ci est déjà finie.

Afin que le serveur vérifie les en-têtes de la requête, un client doit envoyer [`Expect`](/fr/docs/Web/HTTP/Headers/Expect)&nbsp;: `100-continue` comme en-tête dans la requête initiale et recevoir le code de statut `100 Continue` comme réponse avant d'envoyer le corps de la requête.

## Statut

```
100 Continue
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Expect`](/fr/docs/Web/HTTP/Headers/Expect)
- [`417`](/fr/docs/Web/HTTP/Status/417)