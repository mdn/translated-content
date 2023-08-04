---
title: 303 See Other
slug: Web/HTTP/Status/303
---

{{HTTPSidebar}}

Le code de statut de réponse de redirection **`303 See Other`**, généralement renvoyé comme résultat d'une opération [`PUT`](/fr/docs/Web/HTTP/Methods/PUT) ou [`POST`](/fr/docs/Web/HTTP/Methods/POST), indique que la redirection ne fait pas le lien vers la ressource nouvellement téléversée mais vers une autre page (par exemple une page de confirmation ou qui affiche l'avancement du téléversement). La méthode utilisée pour afficher la page redirigée est toujours [`GET`](/fr/docs/Web/HTTP/Methods/GET).

## Statut

```
303 See Other
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`302 Found`](/fr/docs/Web/HTTP/Status/302), la redirection temporaire.
- [`307 Temporary Redirect`](/fr/docs/Web/HTTP/Status/307), l'équivalent de ce code de statut, mais qui ne change jamais la méthode utilisée.
