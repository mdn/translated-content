---
title: Authentification HTTP
slug: Web/HTTP/Authentication
translation_of: Web/HTTP/Authentication
---
{{HTTPSidebar}}

HTTP fournit la structure permettant le contrôle d'accès ainsi que l'authentification. Le schéma d'authentification HTTP le plus courant est « l'_authentification basique_ » (« _Basic authentication_ » en anglais). Cette page a pour but de présenter ce schéma d'authentification, et montre comment l'utiliser pour restreindre l'accès à votre serveur.

## La structure d'authentification HTTP

La [RFC 7235](https://tools.ietf.org/html/rfc7235) définit la structure d'authentification HTTP qui est utilisable par un serveur pour [défier](/fr/docs/Glossary/challenge) une requête d'un client, et inversement par un client pour fournir des informations d'authentification à un serveur.

Le fonctionnement du défi/réponse se déroule ainsi :

1.  Le serveur répond à un client avec un statut [`401`](/fr/docs/Web/HTTP/Status/401) (« Unauthorized ») et fournit l'information permettant l'autorisation via un en-tête de réponse [`WWW-Authenticate`](/fr/docs/Web/HTTP/Headers/WWW-Authenticate) contenant au moins un défi.
2.  Le client désirant s'authentifier peut ensuite le faire en incluant un en-tête de requête [`Authorization`](/fr/docs/Web/HTTP/Headers/Authorization) contenant ses identifiants.
3.  Très souvent, le client va demander à l'utilisateur un mot de passe et ensuite envoyer la requête au serveur en incluant cette information dans l'en-tête `Authorization`.

![Un diagramme de séquence illustrant les messages HTTP entre un client et la ligne de vie du serveur](HTTPAuth.png)

Dans le cadre d'une authentification basique comme montré dans l'image ci-dessus, les échanges **doivent** s'effectuer au travers d'une connection HTTPS (TLS) afin d'être sécurisée.

### Authentification par procuration

Le même mécanisme de défi et réponse peut être utilisée pour _l'authentification par procuration_ (« _Proxy authentication_ » en anglais). Dans ce cas, c'est un système de procuration intermédiaire qui requiert l'authentification. Comme les deux authentifications (celle de la ressource et celle du système de procuration) peuvent coexister, un autre jeu d'en-têtes et de codes de réponses HTTP est nécessaire. Dans le cadre des systèmes de procuration, le code HTTP de défi est [`407`](/fr/docs/Web/HTTP/Status/407) (« Proxy Authentication Required »), l'en-tête de réponse [`Proxy-Authenticate`](/fr/docs/Web/HTTP/Headers/Proxy-Authenticate) contient au moins un défi applicable au système de procuration et l'en-tête de requête [`Proxy-Authorization`](/fr/docs/Web/HTTP/Headers/Proxy-Authorization) est utilisé pour fournir les identifiants au serveur de procuration.

### Accès interdit

Si un serveur de procuration reçoit des identifiants valides ne permettant pas d'avoir accès à une ressource donnée, le serveur doit répondre avec un code de réponse [`403`](/fr/docs/Web/HTTP/Status/403) (« Forbidden »). Dans ce cas, à l'inverse des codes [`401`](/fr/docs/Web/HTTP/Status/401) (« Unauthorized ») ou [`407`](/fr/docs/Web/HTTP/Status/407) (« Proxy Authentication Required »), l'authentification n'est pas possible pour cet utilisateur.

### Authentification des images multi-origines

Une faille de sécurité potentielle qui a été récemment corrigée par les navigateurs est l'authentification des images multi-origines. À partir de [Firefox 59](/fr/docs/Mozilla/Firefox/Releases/59) et versions ultérieures, les images chargées depuis des origines différentes du site courant ne sont plus en mesure de déclencher l'ouverture d'une fenêtre de dialogue ([bug 1423146](https://bugzilla.mozilla.org/show_bug.cgi?id=1423146)) demandant l'authentification HTTP, empêchant ainsi le vol d'identifiants utilisateurs si des personnes mal-intentionnées étaient en mesure d'embarquer une image aléatoire dans une page.

### Encodage de caractère de l'authentification HTTP

Les navigateurs utilisent l'encodage de caractère `utf-8` pour les noms d'utilisateur ainsi que les mots de passe. Firefox utilisait auparavant l'encodage `ISO-8859-1`, mais l'a remplacé par `utf-8` afin de s'aligner avec les autres navigateurs et ainsi éviter les potentiels problèmes, comme décrit dans le [bug 1419658](https://bugzilla.mozilla.org/show_bug.cgi?id=1419658).

### En-têtes WWW-Authenticate et Proxy-Authenticate

Les en-têtes de réponse [`WWW-Authenticate`](/fr/docs/Web/HTTP/Headers/WWW-Authenticate) et [`Proxy-Authenticate`](/fr/docs/Web/HTTP/Headers/Proxy-Authenticate) définissent le schéma d'authentification devant être utilisée pour accéder à une ressource, afin que le client désirant y accéder puisse savoir comment fournir les identifiants.

La syntaxe pour ces en-têtes est la suivante :

```html
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Ici, `<type>` est le schéma d'authentification (« Basic » est le plus courant des schémas, et est présenté [ici](#basic_authentication_scheme)). Le `realm` (« _domaine_ » en français) est utilisé pour décrire la « zone » protégée, ou pour indiquer la portée de la protection. Cela pourrait être un message, par exemple « Accès au site de pré-production », pour que l'utilisateur puisse savoir à quel espace il est en train d'accéder.

### En-têtes Authorization et Proxy-Authorization

Les en-têtes de requête [`Authorization`](/fr/docs/Web/HTTP/Headers/Authorization) et [`Proxy-Authorization`](/fr/docs/Web/HTTP/Headers/Proxy-Authorization) contiennent les identifiants pour authentifier un client avec un serveur (de procuration). Ici, le type est encore une fois nécessaire, suivi par les identifiants, qui peuvent être encodés voire encryptés selon le schéma d'authentification utilisé.

```html
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

### Schéma d'authentification

La structure d'authentification HTTP est utilisée par plusieurs schémas d'authentification. Ils diffèrent de par leur niveau de sécurité ainsi que par leur disponibilité dans les systèmes client ou serveur.

Le plus commun est le schéma d'authentification « Basique » (« Basic » en anglais), qui est présenté plus en détail ci-dessous. IANA maintient une [liste des schémas d'authentification](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), mais ils y en a d'autres fournit par des services d'hébergement comme Amazon AWS. Les schémas communs sont :

- Basic
  - : Voir [RFC 7617](https://tools.ietf.org/html/rfc7617), identifiants encodés en base64. Voir ci-dessous pour plus de détails.
- Bearer
  - : Voir [RFC 6750](https://tools.ietf.org/html/rfc6750), jetons _bearer_ (« porteur » en français) pour accéder à des ressources protégées par OAuth 2.0.
- Digest
  - : Voir [RFC 7616](https://tools.ietf.org/html/rfc7616), Firefox n'est compatible qu'avec le chiffrement md5, voir [bug 472823](https://bugzilla.mozilla.org/show_bug.cgi?id=472823) pour la compatibilité avec le chiffrement SHA.
- HOBA
  - : Voir [RFC 7486](https://tools.ietf.org/html/rfc7486), **H**TTP **O**rigin-**B**ound **A**uthentication, basé sur une signature digitale.
- Mutual
  - : Voir [draft-ietf-httpauth-mutual](https://tools.ietf.org/html/draft-ietf-httpauth-mutual-11).
- AWS4-HMAC-SHA256
  - : Voir la [Documentation AWS](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html).

## Schéma d'authentification basique

Le schéma d'authentification « basique » est défini dans la [RFC 7617](https://tools.ietf.org/html/rfc7617), et transmet les identifiants via des ensembles ID_utilisateur/mot_de_passe, encodés avec base64.

### Sécurité de l'authentification basique

Étant donné que l'ID utilisateur et le mot de passe transitent sur le réseau en clair (base64 étant un encodage réversible), le schéma d'authentification basique n'est pas sécurisé. C'est pourquoi HTTPS / TLS doivent être utilisés avec ce type d'authentification. Sans cela, ce schéma **ne doit pas** être utilisé pour protéger des informations sensibles.

### Restreindre l'accès avec Apache et l'authentification basique

Pour protéger avec un mot de passe un répertoire sur un serveur Apache, vous aurez besoin d'utiliser un ou plusieurs fichiers `.htaccess` et `.htpasswd`.

Le fichier `.htaccess` ressemble à ceci :

    AuthType Basic
    AuthName "Accès au site de pré-production"
    AuthUserFile /chemin/vers/.htpasswd
    Require valid-user

Le fichier `.htaccess` fait référence à un fichier `.htpasswd` dans lequel chaque ligne contient un nom d'utilisateur et un mot de passe séparés par deux-points (« : »). Vous ne pouvez pas déchiffrer les mots de passe à l'intérieur, car ils sont [chiffrées](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) (en md5 en l'occurrence). Vous pouvez tout à fait nommer votre fichier `.htpasswd` différemment si vous le désirez, mais gardez en tête que ce fichier ne doit pas être accessible à quiconque (Apache est normalement configuré pour empêcher l'accès aux fichiers `.ht*`).

    aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
    user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/

### Restreindre l'accès avec nginx et l'authentification basique

Pour nginx, vous aurez besoin de spécifier une zone ou emplacement (_location_ en anglais) à protéger, ainsi que la directive `auth_basic` définissant le nom de cette zone. La directive `auth_basic_user_file` fait référence à un fichier .htpasswd contenant les identifiants utilisateurs encryptés, exactement comme dans l'exemple avec Apache ci-dessus.

    location /status {
      auth_basic           "Access to the staging site";
      auth_basic_user_file /etc/apache2/.htpasswd;
    }

### Accès avec identifiants dans l'URL

Beaucoup de clients permettent d'éviter la fenêtre de dialogue demandant les identifiants en utilisant une URL contenant le nom d'utilisateur ainsi que le mot de passe comme suit :

```plain example-bad
https://utilisateur:password@www.example.com/
```

**L'utilisation de ces URLs est dépréciée**. Dans Chrome, la partie `username:password@` dans les URLs est même [retirée pour des raisons de sécurité](https://bugs.chromium.org/p/chromium/issues/detail?id=82250#c7). Dans Firefox, le site est testé afin de savoir s'il requiert ou non l'authentification et si ce n'est pas le cas, Firefox va avertir l'utilisateur avec une fenêtre de dialogue « Vous êtes sur le point de vous connecter au site "www\.example.com" avec le nom d'utilisateur "username", mais le site ne requiert pas d'authentification. Ceci pourrait être une tentative pour vous piéger. »

## Voir aussi

- L'entête [`WWW-Authenticate`](/fr/docs/Web/HTTP/Headers/WWW-Authenticate)
- L'entête [`Authorization`](/fr/docs/Web/HTTP/Headers/Authorization)
- L'entête [`Proxy-Authorization`](/fr/docs/Web/HTTP/Headers/Proxy-Authorization)
- L'entête [`Proxy-Authenticate`](/fr/docs/Web/HTTP/Headers/Proxy-Authenticate)
- Les codes de statut : [`401`](/fr/docs/Web/HTTP/Status/401), [`403`](/fr/docs/Web/HTTP/Status/403) et [`407`](/fr/docs/Web/HTTP/Status/407)
