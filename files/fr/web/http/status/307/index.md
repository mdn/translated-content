---
title: 307 Temporary Redirect
slug: Web/HTTP/Status/307
translation_of: Web/HTTP/Status/307
browser-compat: http.status.307
---
{{HTTPSidebar}}

Le code de statut de réponse de redirection **`307 Temporary Redirect`** indique que la ressource demandée est temporairement déplacée vers l'URL contenue dans l'en-tête [`Location`](/fr/docs/Web/HTTP/Headers/Location). Un navigateur redirige vers cette page mais les moteurs de recherche ne mettent pas à jour leurs liens vers la ressource (en termes de référencement, cela indique que le flux de référencement n'est pas envoyé vers la nouvelle URL).

La méthode et le corps de la requête originale sont réutilisés pour réaliser la requête redirigée. Si vous souhaitez que la méthode utilisée soit changée [`GET`](/fr/docs/Web/HTTP/Methods/GET), il faut alors utiliser le code [`303 See Other`](/fr/docs/Web/HTTP/Status/303) à la place. Ceci s'avère utile lorsqu'on souhaite donner une réponse à une méthode [`PUT`](/fr/docs/Web/HTTP/Methods/PUT) et que cette réponse n'est pas la ressource téléversée mais un message de confirmation (par exemple, «&nbsp;Vous avez téléversé avec succès XYZ&nbsp;»).

La seule différence entre le code `307` et le code [`302`](/fr/docs/Web/HTTP/Status/302) réside dans le fait que le statut `307` garantit que la méthode et le corps ne seront pas modifiés lorsque la requête redirigée aura lieu. Avec `302`, quelques anciens clients changent, incorrectement, la méthode vers [`GET`](/fr/docs/Web/HTTP/Methods/GET)&nbsp;: ce comportement, avec les méthodes différentes de `GET` et `302`, est imprédictible sur le Web. En revanche; celui de `307` est bien prédictible. Pour la requête `GET`, leurs comportements respectifs sont identiques.

## Statut

```
307 Temporary Redirect
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`302 Found`](/fr/docs/Web/HTTP/Status/302), l'équivalent de ce code de statut, mais qui peut modifier la méthode utilisée lorsqu'il ne s'agit pas d'un [`GET`](/fr/docs/Web/HTTP/Methods/GET).
- [`303 See Other`](/fr/docs/Web/HTTP/Status/303), une redirection temporaire qui change la méthode utilisée en [`GET`](/fr/docs/Web/HTTP/Methods/GET).
- [`301 Moved Permanently`](/fr/docs/Web/HTTP/Status/301), la redirection permanente.
