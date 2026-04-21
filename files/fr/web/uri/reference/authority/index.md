---
title: Autorité d'une URI
short-title: Autorité
slug: Web/URI/Reference/Authority
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

L'**autorité** d'une URI est la section qui vient après le [schéma](/fr/docs/Web/URI/Reference/Schemes) et avant le chemin. Elle peut comporter jusqu'à trois parties&nbsp;: les informations utilisateur, l'hôte et le port.

## Syntaxe

```url
host
host:port
user@host
user@host:port
```

- `host`
  - : L'_hôte_ est généralement le nom de domaine ou l'adresse IP du serveur hébergeant la ressource. Le nom de domaine est résolu en adresse IP via le {{Glossary("DNS", "système de noms de domaine")}}.
- `port` {{Optional_Inline}}
  - : Le _port_ est un nombre qui indique le port sur lequel le serveur écoute les requêtes. Il est optionnel et vaut par défaut 80 pour HTTP et 443 pour HTTPS. D'autres schémas peuvent définir leur propre valeur par défaut ou le rendre obligatoire.
- `user` {{Optional_Inline}}
  - : L'_utilisateur_ est optionnel et sert à l'authentification. Il est rarement utilisé dans les URI web.

    > [!WARNING]
    > Il est déconseillé de fournir des informations utilisateur directement dans les URLs HTTP, car cela peut exposer des informations sensibles. Utilisez plutôt d'autres méthodes comme l'authentification HTTP ou les cookies de session. Parfois, des sites de phishing trompent les utilisateur·ice·s en affichant des URLs trompeuses dont la partie «&nbsp;utilisateur&nbsp;» ressemble à un nom de domaine, ce qu'on appelle une [attaque par URL sémantique <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Semantic_URL_attack).

## Description

Considérez l'URL suivante&nbsp;:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

L'autorité dans ce cas est `www.example.com:80`, composée du nom d'hôte (spécifiquement un nom de domaine) et d'un port.

![Nom de domaine](mdn-url-domain@x2.png)

`www.example.com` est le _nom d'hôte_ de l'URI, indiquant quel serveur Web est sollicité. Ici, on utilise un nom de domaine, mais il est aussi possible d'utiliser une {{Glossary("IP address", "adresse IP")}} de l'hôte.
Comme les adresses IP sont moins pratiques et plus difficiles à retenir, il est plus courant d'utiliser un nom de domaine, sauf si le serveur n'en possède pas.

![Port](mdn-url-port@x2.png)

`:80` est le _port_ de l'URL, indiquant la «&nbsp;porte&nbsp;» technique utilisée pour accéder aux ressources sur le serveur web. Il est généralement omis si le serveur web utilise les ports standards du protocole HTTP (80 pour HTTP et 443 pour HTTPS) pour donner accès à ses ressources. Sinon, il est obligatoire.

## Exemples

- `https://developer.mozilla.org`
  - : L'hôte est `developer.mozilla.org`. Le port n'est pas défini mais sera par défaut 443 si l'accès se fait via `https:`.
- `http://localhost:8080`
  - : L'hôte est `localhost` et le port est `8080`. `localhost` est un nom d'hôte spécial que le navigateur résout à l'adresse locale `127.0.0.1`.
- `postgresql://postgres:admin123@db:5432`
  - : L'hôte est `db`, et le port est `5432`. On précise aussi un utilisateur `postgres` et son mot de passe `admin123`. Cela peut servir à se connecter à une base PostgreSQL.
- `https://cnn.example.com&story=breaking_news@10.0.0.1`
  - : Une URL trompeuse qui semble pointer vers un site de confiance. Cependant, le nom d'hôte est `10.0.0.1`, et la partie `cnn.example.com&story=breaking_news` est l'«&nbsp;utilisateur&nbsp;».

## Spécifications

{{Specifications}}

## Voir aussi

- [URIs](/fr/docs/Web/URI)
- [Choisir entre les URLs avec ou sans www](/fr/docs/Web/URI/Guides/Choosing_between_www_and_non-www_URLs)
