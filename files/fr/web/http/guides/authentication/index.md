---
title: Authentification HTTP
slug: Web/HTTP/Guides/Authentication
l10n:
  sourceCommit: 3a50bf634f24f832d97e3e2add4a4633ab255217
---

Le HTTP fournit un cadre général pour le contrôle d'accès et l'authentification.
Cette page est une introduction au cadre HTTP pour l'authentification et montre comment restreindre l'accès à votre serveur en utilisant le schéma "Basic" HTTP.

## La structure d'authentification HTTP

Le RFC {{RFC("7235")}} définit le cadre d'authentification HTTP, qui peut être utilisé par un serveur pour {{Glossary("challenge", "défier")}} une requête client, et par un client pour fournir des informations d'authentification.

Le flux de défi et de réponse fonctionne comme suit&nbsp;:

1. Le serveur répond à un client avec un statut de réponse {{HTTPStatus("401")}} (Non autorisé) et fournit des informations sur la manière de s'autoriser avec un en-tête de réponse {{HTTPHeader("WWW-Authenticate")}} contenant au moins un défi.
2. Un client qui souhaite s'authentifier auprès du serveur peut alors le faire en incluant un en-tête de requête {{HTTPHeader("Authorization")}} avec les informations d'identification.
3. Habituellement, un client présente une invite de mot de passe à l'utilisateur·ice, puis émet la requête en incluant l'en-tête `Authorization` correct.

![Un diagramme de séquence illustrant les messages HTTP entre un client et une ligne de vie de serveur.](https://mdn.github.io/shared-assets/images/diagrams/http/authentication/basic-auth.svg)

Le flux de messages général ci-dessus est le même pour la plupart (sinon tous) des [schémas d'authentification](#schéma_dauthentification).
Les informations contenues dans les en-têtes et leur mode de codage changent bel et bien&nbsp;!

> [!WARNING]
> Le schéma d'authentification «&nbsp;basique&nbsp;» utilisé dans le diagramme ci-dessus envoie les informations d'identification encodées mais non chiffrées.
> Cela serait complètement insecure à moins que l'échange ne se fasse sur une connexion sécurisée (HTTPS/TLS).

### Authentification par procuration

Le même mécanisme de défi-réponse peut être utilisé pour _l'authentification par procuration_.
Comme l'authentification des ressources et l'authentification par procuration peuvent coexister, un autre jeu d'en-têtes et de codes de réponse est nécessaire. Dans le cas des proxys, le code de statut de défi est {{HTTPStatus("407")}} (Proxy Authentication Required), l'en-tête de réponse {{HTTPHeader("Proxy-Authenticate")}} contient au moins un défi applicable au mandataire, et l'en-tête de requête {{HTTPHeader("Proxy-Authorization")}} est utilisé pour fournir les informations d'identification au serveur mandataire.

### Accès interdit

Si un serveur (ou un serveur mandataire) reçoit des identifiants _invalides_, il doit répondre avec un code de statut {{HTTPStatus("401")}} `Unauthorized` ou avec un code de statut {{HTTPStatus("407")}} `Proxy Authentication Required`, et l'utilisateur·ice peut envoyer une nouvelle requête ou remplacer le champ d'en-tête {{HTTPHeader("Authorization")}}.

Si un serveur (ou un serveur mandataire) reçoit des identifiants valides mais _inappropriés_ pour accéder à une ressource donnée, le serveur doit répondre avec le code de statut {{HTTPStatus("403")}} `Forbidden`. Contrairement aux codes {{HTTPStatus("401")}} `Unauthorized` ou {{HTTPStatus("407")}} `Proxy Authentication Required`, l'authentification est impossible pour cet·te utilisateur·ice et les navigateurs ne proposent pas une nouvelle tentative.

Dans tous les cas, le serveur peut préférer retourner un code de statut {{HTTPStatus("404")}} `Not Found`, afin de masquer l'existence de la page à un·e utilisateur·ice sans privilèges adéquats ou non correctement authentifié.

### Authentification des images multi-origines

Une faille de sécurité potentielle qui a été récemment corrigée par les navigateurs est l'authentification des images multi-origines. À partir de [Firefox 59](/fr/docs/Mozilla/Firefox/Releases/59) et versions ultérieures, les images chargées depuis des origines différentes du site courant ne sont plus en mesure de déclencher l'ouverture d'une fenêtre de dialogue ([bogue Firefox 1423146 <sup>(angl.)</sup>](https://bugzil.la/1423146)) demandant l'authentification HTTP, empêchant ainsi le vol d'identifiants utilisateur·ice·s si des personnes mal-intentionnées étaient en mesure d'embarquer une image aléatoire dans une page.

### Encodage de caractère de l'authentification HTTP

Les navigateurs utilisent l'encodage `utf-8` pour les noms des utilisateur·ice·s et les mots de passe.

Firefox utilisait `ISO-8859-1`, mais a changé pour `utf-8` afin de s'aligner avec les autres navigateurs et ainsi éviter les potentiels problèmes, comme décrit dans le [bogue Firefox 1419658 <sup>(angl.)</sup>](https://bugzil.la/1419658).

### En-têtes `WWW-Authenticate` et `Proxy-Authenticate`

Les en-têtes de réponse {{HTTPHeader("WWW-Authenticate")}} et {{HTTPHeader("Proxy-Authenticate")}} définissent le schéma d'authentification devant être utilisée pour accéder à une ressource, afin que le client désirant y accéder puisse savoir comment fournir les identifiants.

La syntaxe pour ces en-têtes est la suivante&nbsp;:

```http
WWW-Authenticate: <type> realm=<realm>
Proxy-Authenticate: <type> realm=<realm>
```

Ici, `<type>` est le schéma d'authentification («&nbsp;Basic&nbsp;» est le plus courant des schémas, et est [présenté ci-dessous](#schéma_dauthentification_basique)). Le `realm` («&nbsp;_domaine_&nbsp;» en français) est utilisé pour décrire la zone protégée ou pour indiquer la portée de la protection. Cela pourrait être un message, par exemple «&nbsp;Accès au site de pré-production&nbsp;», pour que l'utilisateur·ice puisse savoir à quel espace il est en train d'accéder.

### En-têtes `Authorization` et `Proxy-Authorization`

Les en-têtes de requêtes {{HTTPHeader("Authorization")}} et {{HTTPHeader("Proxy-Authorization")}} contiennent les informations d'identification pour authentifier un agent utilisateur auprès d'un serveur (ou mandataire). Ici, le `<type>` est de nouveau nécessaire, suivi des informations d'identification, qui peuvent être encodées ou chiffrées en fonction du schéma d'authentification utilisé.

```http
Authorization: <type> <credentials>
Proxy-Authorization: <type> <credentials>
```

### Schéma d'authentification

Le cadre général de l'authentification HTTP est la base de plusieurs schémas d'authentification.

IANA maintient une [liste des schémas d'authentification <sup>(angl.)</sup>](https://www.iana.org/assignments/http-authschemes/http-authschemes.xhtml), mais il existe d'autres schémas proposés par des services d'hébergement, tels qu'Amazon AWS.

Certains schémas d'authentification courants incluent&nbsp;:

- **Basic**
  - : Voir {{RFC(7617)}}, identifiants encodés en base64. Plus d'informations ci-dessous.
- **Bearer**
  - : Voir {{RFC(6750)}}, jetons d'accès pour les ressources protégées par OAuth 2.0
- **Digest**
  - : Voir {{RFC(7616)}}. Firefox 93 et versions ultérieures prennent en charge l'algorithme SHA-256. Les versions précédentes ne prennent en charge que le hachage MD5 (non recommandé).
- **HOBA**
  - : Voir {{RFC(7486)}}, Section 3, **H**TTP **O**rigin-**B**ound **A**uthentication, basé sur des signatures numériques
- **Mutual**
  - : Voir {{RFC(8120)}}
- **Negotiate** / **NTLM**
  - : Voir [RFC4599 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc4559)
- **VAPID**
  - : Voir {{RFC(8292)}}
- **SCRAM**
  - : Voir {{RFC(7804)}}
- **AWS4-HMAC-SHA256**
  - : Voir [la documentation AWS <sup>(angl.)</sup>](https://docs.aws.amazon.com/AmazonS3/latest/API/sigv4-auth-using-authorization-header.html). Ce schéma est utilisé pour l'authentification des serveurs AWS3.

Les schémas peuvent différer en termes de sécurité et de disponibilité dans les logiciels clients ou serveurs.

Le schéma d'authentification «&nbsp;Basic&nbsp;» offre une sécurité très faible, mais est largement supporté et facile à configurer.
Il est présenté plus en détail ci-dessous.

## Schéma d'authentification basique

Le schéma d'authentification «&nbsp;basique&nbsp;» est défini dans la {{RFC(7617)}}, et transmet les identifiants par des ensembles ID/mot_de_passe, encodés avec base64.

### Sécurité de l'authentification basique

Comme l'ID utilisateur·ice et le mot de passe transitent sur le réseau en clair (ils sont encodés en base64, mais le base64 est un encodage réversible), le schéma d'authentification basique n'est pas sécurisé.
HTTPS/TLS doit être utilisé avec l'authentification basique pour éviter l'interception des identifiants.

De plus, les sites qui utilisent l'authentification HTTP basique sont particulièrement vulnérables aux attaques de [falsification de requête intersites (CSRF)](/fr/docs/Glossary/CSRF), car les identifiants utilisateur·ice sont envoyés dans toutes les requêtes, quel que soit l'origine (ce qui diffère des mécanismes d'authentification basés sur les cookies, car les cookies sont généralement bloqués dans les requêtes intersites).
Les sites doivent toujours utiliser les requêtes `POST` lors de la modification des données et inclure des [jetons CSRF](/fr/docs/Web/Security/Attacks/CSRF).

Sans ces améliorations de sécurité, l'authentification basique ne doit pas être utilisée pour protéger des informations sensibles ou précieuses.

### Restreindre l'accès avec Apache et l'authentification basique

Pour protéger avec un mot de passe un répertoire sur un serveur Apache, vous avez besoin d'utiliser un ou plusieurs fichiers `.htaccess` et `.htpasswd`.

Le fichier `.htaccess` ressemble à ceci&nbsp;:

```apacheconf
AuthType Basic
AuthName "Accès au site de pré-production"
AuthUserFile /path/to/.htpasswd
Require valid-user
```

Le fichier `.htaccess` fait référence à un fichier `.htpasswd` dans lequel chaque ligne se compose d'un nom d'utilisateur·ice et d'un mot de passe séparés par un deux-points (`:`). Vous ne pouvez pas voir les mots de passe réels, car ils sont [hachés <sup>(angl.)</sup>](https://httpd.apache.org/docs/2.4/misc/password_encryptions.html) (en utilisant un hachage basé sur MD5, dans ce cas). Notez que vous pouvez nommer votre fichier `.htpasswd` différemment si vous le souhaitez, mais gardez à l'esprit que ce fichier ne doit être accessible à personne. (Apache est généralement configuré pour empêcher l'accès aux fichiers `.ht*`).

```apacheconf
aladdin:$apr1$ZjTqBB3f$IF9gdYAGlMrs2fuINjHsz.
user2:$apr1$O04r.y2H$/vEkesPhVInBByJUkXitA/
```

### Restreindre l'accès avec nginx et l'authentification basique

Pour Nginx, vous devez définir un emplacement que vous allez protéger et la directive `auth_basic` qui fournit le nom de la zone protégée par mot de passe.
La directive `auth_basic_user_file` pointe ensuite vers un fichier `.htpasswd` contenant les identifiants utilisateur·ice chiffrés, comme dans l'exemple Apache ci-dessus.

```apacheconf
location /status {
    auth_basic           "Accès au site de pré-production";
    auth_basic_user_file /etc/apache2/.htpasswd;
}
```

### Accès avec identifiants dans l'URL

Historiquement, certains sites permettaient de se connecter en utilisant une URL encodée contenant le nom d'utilisateur·ice et le mot de passe comme suit&nbsp;:

```plain example-bad
https://pseudo:motdepasse@www.example.com/
```

Cette syntaxe n'est plus autorisée dans les navigateurs modernes&nbsp;; le nom d'utilisateur·ice et le mot de passe sont supprimés de la requête avant qu'elle ne soit envoyée.

## Voir aussi

- L'en-tête {{HTTPHeader("WWW-Authenticate")}}
- L'en-tête {{HTTPHeader("Authorization")}}
- L'en-tête {{HTTPHeader("Proxy-Authorization")}}
- L'en-tête {{HTTPHeader("Proxy-Authenticate")}}
- Les codes de statut {{HTTPStatus("401")}}, {{HTTPStatus("403")}}, {{HTTPStatus("407")}}
- [Les bonnes pratiques de sécurité HTTP](/fr/docs/Web/Security)
