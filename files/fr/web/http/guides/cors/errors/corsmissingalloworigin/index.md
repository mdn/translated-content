---
title: "Raison : L'en-tête CORS « Access-Control-Allow-Origin » est manquant"
slug: Web/HTTP/Guides/CORS/Errors/CORSMissingAllowOrigin
l10n:
  sourceCommit: 92396cf8979e107c3ac42c2b9fc382013ea1c234
---

## Raison

```http
Raison : L'en-tête CORS « Access-Control-Allow-Origin » est manquant
```

En anglais&nbsp;:

```http
Reason: CORS header 'Access-Control-Allow-Origin' missing
```

## Quel est le problème ?

La réponse à la requête {{Glossary("CORS")}} est dépourvue de l'en-tête requis {{HTTPHeader("Access-Control-Allow-Origin")}}, qui est utilisé pour déterminer si la ressource peut ou non être accessible par le contenu opérant dans l'origine actuelle.

Si le serveur est sous votre contrôle, ajoutez l'origine du site demandeur à l'ensemble des domaines autorisés en l'ajoutant à la valeur de l'en-tête `Access-Control-Allow-Origin`.

Par exemple, pour permettre à un site situé à `https://example.com` d'accéder à la ressource en utilisant CORS, l'en-tête doit être&nbsp;:

```http
Access-Control-Allow-Origin: https://example.com
```

Vous pouvez également configurer un site pour permettre à n'importe quel site d'y accéder en utilisant le caractère générique `*`. Vous ne devez utiliser cela que pour les API publiques. Les API privées ne doivent jamais utiliser `*` et doivent plutôt avoir un ou plusieurs domaines spécifiques définis. De plus, le caractère générique ne fonctionne que pour les requêtes effectuées avec l'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) défini sur `anonymous`, et il empêche l'envoi de justificatifs comme les cookies dans les requêtes.

```http
Access-Control-Allow-Origin: *
```

> [!WARNING]
> Utiliser le caractère générique pour permettre à tous les sites d'accéder à une API privée est une mauvaise idée.

Pour permettre à n'importe quel site d'effectuer des requêtes CORS _sans_ utiliser le caractère générique `*` (par exemple, pour activer l'envoi de justificatifs), votre serveur doit lire la valeur de l'en-tête `Origin` de la requête et utiliser cette valeur pour définir `Access-Control-Allow-Origin`, et doit également définir un en-tête `Vary: Origin` pour indiquer que certains en-têtes sont définis dynamiquement en fonction de l'origine.

## Exemples pour les serveurs web courants

La directive exacte pour définir les en-têtes dépend de votre serveur web.

Dans les exemples ci-dessous,

Dans **Apache** ([documentation <sup>(angl.)</sup>](https://httpd.apache.org/docs/2.4/mod/mod_headers.html#header)), ajoutez une ligne telle que la suivante à la configuration du serveur (dans la section `<Directory>`, `<Location>`, `<Files>` ou `<VirtualHost>` appropriée). La configuration se trouve généralement dans un fichier `.conf` (`httpd.conf` et `apache.conf` sont des noms courants pour ceux-ci), ou dans un fichier `.htaccess`&nbsp;:

```apacheconf
Header set Access-Control-Allow-Origin 'https://example.com'
```

Dans **Nginx** ([documentation <sup>(angl.)</sup>](https://nginx.org/en/docs/http/ngx_http_headers_module.html#add_header)), la commande pour configurer cet en-tête est&nbsp;:

```nginx
add_header 'Access-Control-Allow-Origin' 'https://example.com' always;
```

## Si vous ne contrôlez pas le serveur

Si le serveur distant n'est pas sous votre contrôle et n'inclut pas l'en-tête `Access-Control-Allow-Origin`, vous ne pouvez pas corriger cette erreur côté serveur. Envisagez ces alternatives&nbsp;:

- Passez votre requête en tant que [requête simple](/fr/docs/Web/HTTP/Guides/CORS#simple_requests) pour éviter de déclencher un pré-vol, si le serveur gère les requêtes inter-origines simples.
- Si vous n'avez pas besoin de lire la réponse, utilisez [`mode: "no-cors"`](/fr/docs/Web/API/Request/mode) dans votre appel `fetch()`. La réponse est opaque (illisible), mais la requête réussit.
- Acheminez la requête avec un serveur mandataire que vous contrôlez, qui récupère la ressource et la retourne avec les en-têtes CORS appropriés.

Consultez [les considérations côté client](/fr/docs/Web/HTTP/Guides/CORS/Errors#considérations_côté_client) pour plus de détails.

## Voir aussi

- [Les erreurs CORS](/fr/docs/Web/HTTP/Guides/CORS/Errors)
- L'entrée du glossaire {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/Guides/CORS)
