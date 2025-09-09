---
title: 302 Found
slug: Web/HTTP/Reference/Status/302
original_slug: Web/HTTP/Status/302
---

Le code de statut de réponse de redirection **`302 Found`** indique que la ressource est temporairement déplacée vers l'URL contenue dans l'en-tête [`Location`](/fr/docs/Web/HTTP/Reference/Headers/Location). Un navigateur redirige vers cette page, mais les moteurs de recherche ne mettent pas à jour leurs liens vers la ressource (en termes de référencement, cela indique que le flux de référencement n'est pas envoyé vers la nouvelle URL).

Même si la spécification impose que la méthode et le corps ne soient pas altérés lors d'une redirection, tous les agents utilisateurs ne s'y conforment pas et il est toujours possible de trouver des logiciels bogués sur ce point. Il est donc recommandé d'utiliser le code `302` uniquement comme réponse à une méthode [`GET`](/fr/docs/Web/HTTP/Reference/Methods/GET) ou [`HEAD`](/fr/docs/Web/HTTP/Reference/Methods/HEAD) et d'utiliser le code [`307 Temporary Redirect`](/fr/docs/Web/HTTP/Reference/Status/307) à la place puisque le changement de méthode est explicitement interdit dans ce cas.

Si vous souhaitez que la méthode utilisée soit changée en [`GET`](/fr/docs/Web/HTTP/Reference/Methods/GET), vous pouvez utiliser [`303 See Other`](/fr/docs/Web/HTTP/Reference/Status/303) à la place. Ceci s'avère utile lorsqu'on souhaite donner une réponse à une méthode [`PUT`](/fr/docs/Web/HTTP/Reference/Methods/PUT) qui n'est pas la ressource téléversée, mais plutôt un message de confirmation (par exemple, «&nbsp;Vous avez téléversé avec succès XYZ&nbsp;»).

## Statut

```
302 Found
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`307 Temporary Redirect`](/fr/docs/Web/HTTP/Reference/Status/307), l'équivalent de ce code de statut, mais qui ne change jamais la méthode utilisée.
- [`303 See Other`](/fr/docs/Web/HTTP/Reference/Status/303), une redirection temporaire qui change la méthode utilisée par [`GET`](/fr/docs/Web/HTTP/Reference/Methods/GET).
- [`301 Moved Permanently`](/fr/docs/Web/HTTP/Reference/Status/301), la redirection permanente.
