---
title: 'Raison : l’en-tête CORS « Access-Control-Allow-Origin » est manquant.'
slug: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
translation_of: Web/HTTP/CORS/Errors/CORSMissingAllowOrigin
original_slug: Web/HTTP/CORS/Errors/CORSAllowOriginManquant
---
{{HTTPSidebar}}

## Symptomes

     Raison : l’en-tête CORS « Access-Control-Allow-Origin » est manquant.

## Quel est le problème ?

La réponse à la requête {{Glossary("CORS")}} ne contient pas l'en-tête requis {{HTTPHeader("Access-Control-Allow-Origin")}}, dont la fonction est de déterminer si le domaine à l'origine de la requête est autorisé à accéder à cette ressource.

Si vous avez le contrôle du serveur, vous pouvez ajouter l'origine de la requête à la liste des domaines autorisés à accéder aux ressources du serveur en l'ajoutant aux valeurs de l'en-tête `Access-Control-Allow-Origin`.

Par exemple, pour autoriser le site https\://amazing.site à accéder aux resources avec CORS, le header doit être comme suit :

    Access-Control-Allow-Origin: https://amazing.site

Vous pouvez aussi configurer le serveur pour autoriser tous les domaines à accéder aux ressources avec le caractère générique `*`. Ceci ne devrait être utilisé que pour des APIs publiques. Les APIs privées ne devraient jamais utiliser `*`, et devraient à la place utiliser un domaine ou un ensemble de domaines. De plus, l'astérisque ne fonctionne que pour les requêtes avec l'attribut {{htmlattrxref("crossorigin")}} ayant comme valeur `anonymous`.

    Access-Control-Allow-Origin: *

> **Attention :** Autoriser n'importe quel site à accéder à une API privée est une mauvaise idée.

Pour autoriser n'importe quel site à faire des requêtes CORS _sans_ utiliser le caractère générique `*` (par exemple, pour fournir des authentifiants), votre serveur doit lire la valeur de l'entête `Origin` de la requête et l'utiliser dans `Access-Control-Allow-Origin`, tout en ajoutant une entête `Vary: Origin` pour indiquer que certaines entêtes sont définies dynamiquement selon leur origine.

L'instruction exacte pour définir les entêtes dépend de votre serveur Web. Par exemple, avec Apache, ajouter (dans la section `<Directory>`, `<Location>`, `<Files>`, ou `<VirtualHost>` appropriée) la ligne ci-dessous au fichier de configuration. Le fichier de configuration est en général un `.conf` (`httpd.conf` et `apache.conf` sont les noms les plus communs) ou un fichier nommé `.htaccess`.

    Header set Access-Control-Allow-Origin 'origin-list'

Avec Nginx, la commande pour créer l'en-tête est :

    add_header 'Access-Control-Allow-Origin' 'origin-list'

## Voir aussi

- [Erreurs CORS](/fr/docs/Web/HTTP/CORS/Errors)
- Glossaire: {{Glossary("CORS")}}
- [Introduction au CORS](/fr/docs/Web/HTTP/CORS)
