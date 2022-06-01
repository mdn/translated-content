---
title: 301 Moved Permanently
slug: Web/HTTP/Status/301
translation_of: Web/HTTP/Status/301
browser-compat: http.status.301
---
{{HTTPSidebar}}

Le code de statut de réponse de redirection **`301 Moved Permanently`** indique que la ressource a définitivement été déplacée à l'URL contenue dans l'en-tête [`Location`](/fr/docs/Web/HTTP/Headers/Location). Un navigateur redirigera vers cette page et les moteurs de recherche mettront à jour leurs liens vers la ressource.

> **Note :** Même si la spécification impose que la méthode et le corps ne soient pas altérés lors d'une redirection, tous les agents utilisateurs ne s'y conforment pas et il est possible de trouver des logiciels bogués sur ce point. Il est donc recommandé d'utiliser le code `301` uniquement pour répondre à une requête [`GET`](/fr/docs/Web/HTTP/Methods/GET) ou [`HEAD`](/fr/docs/Web/HTTP/Methods/HEAD), et de privilégier le code [`308 Permanent Redirect`](/fr/docs/Web/HTTP/Status/308) pour répondre à [`POST`](/fr/docs/Web/HTTP/Methods/POST) puisque le changement de méthode est explicitement interdit avec ce statut.

## Statut

```
301 Moved Permanently
```

## Exemple

### Requête du client

```
GET /index.php HTTP/1.1
Host: www.example.org
```

### Réponse du serveur

```
HTTP/1.1 301 Moved Permanently
Location: http://www.example.org/index.asp
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`308 Permanent Redirect`](/fr/docs/Web/HTTP/Status/308)
- [`302 Found`](/fr/docs/Web/HTTP/Status/302), la redirection temporaire.
