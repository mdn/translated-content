---
title: "Raison : l'en-tête CORS « Access-Control-Allow-Origin » est manquant"
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
translation_of: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
original_slug: Web/HTTP/CORS/Errors/CORSAllowOriginManquant
---
{{HTTPSidebar}}

## Message

```http
Raison : l'en-tête CORS « Access-Control-Allow-Origin » est manquant
```

En anglais&nbsp;:

```http
Reason: CORS header 'Access-Control-Allow-Origin' missing
```

## Quel est le problème&nbsp;?

La réponse à la requête [CORS](/fr/docs/Glossary/CORS) ne contient pas l'en-tête requis [`Access-Control-Allow-Origin`](/fr/docs/Web/HTTP/Headers/Access-Control-Allow-Origin), dont la fonction est de déterminer si le domaine à l'origine de la requête est autorisé à accéder à cette ressource.

Si vous avez le contrôle du serveur, vous pouvez ajouter l'origine de la requête à la liste des domaines autorisés à accéder aux ressources du serveur en l'ajoutant aux valeurs de l'en-tête `Access-Control-Allow-Origin`.

Par exemple, pour autoriser le site `https://amazing.site` à accéder aux ressources avec CORS, l'en-tête doit être comme suit&nbsp;:

```http
Access-Control-Allow-Origin: https://amazing.site
```

Vous pouvez aussi configurer le serveur pour autoriser tous les domaines à accéder aux ressources avec le caractère générique `*`. Ceci ne devrait être utilisé que pour des API publiques. Les API privées ne devraient jamais utiliser `*`, et devraient à la place utiliser un domaine ou un ensemble de domaines. De plus, l'astérisque ne fonctionne que pour les requêtes ayant `anonymous` comme valeur pour l'attribut [`crossorigin`](/fr/docs/Web/HTML/Attributes/crossorigin)&nbsp;; il empêche également l'envoi d'identifiants (par exemple des cookies) dans une requête.

```http
Access-Control-Allow-Origin: *
```

> **Attention :** Autoriser n'importe quel site à accéder à une API privée est une mauvaise idée.

Pour autoriser n'importe quel site à faire des requêtes CORS _sans_ utiliser le caractère générique `*` (par exemple, pour fournir des authentifiants), votre serveur doit lire la valeur de l'en-tête `Origin` de la requête et l'utiliser dans `Access-Control-Allow-Origin`, tout en ajoutant un en-tête `Vary: Origin` pour indiquer que certains en-têtes sont définis dynamiquement selon leur origine.

L'instruction exacte pour définir les en-têtes dépend de votre serveur web. Par exemple, dans Apache, ajoutez une ligne comme celle qui suit à la configuration du serveur (dans la section appropriée `<Directory>`, `<Location>`, `<Files>`, ou `<VirtualHost>`). La configuration se trouve généralement dans un fichier `.conf` (`httpd.conf` et `apache.conf` sont des noms couramment attribués à ces fichiers) ou dans un fichier `.htaccess`.

```
Header set Access-Control-Allow-Origin 'origin-list'
```

Avec Nginx, la commande pour mettre en place cet en-tête est&nbsp;:

```
add_header 'Access-Control-Allow-Origin' 'origin-list'
```

## Voir aussi

- [Les erreurs relatives au CORS](/fr/docs/Web/HTTP/CORS/Errors)
- Glossaire&nbsp;: [CORS](/fr/docs/Glossary/CORS)
- [Introduction au CORS](/fr/docs/Web/HTTP/CORS)
