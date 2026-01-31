---
title: Schémas URI
short-title: Schéma
slug: Web/URI/Reference/Schemes
l10n:
  sourceCommit: 44373c3805ba65db7542af75b664dc6fdce2aec0
---

Le **schéma** d'une URI est la première partie de l'URI, avant le caractère `:`.
Il indique quel protocole le navigateur doit utiliser pour récupérer la ressource.
Le schéma peut influencer la façon dont le reste de l'URI est structurée et interprétée.

## Syntaxe

```url
protocol:
```

- `protocol`
  - : Une séquence de caractères qui identifie le protocole à utiliser.
    Elle ne doit contenir que des caractères alphanumériques ainsi que les caractères `+`, `-` et `.`.
    Les schémas courants sont :
    - [`blob`](/fr/docs/Web/URI/Reference/Schemes/blob)
      - : Binary Large Object&nbsp;; un pointeur vers un grand objet en mémoire
    - [`data`](/fr/docs/Web/URI/Reference/Schemes/data)
      - : Données directement intégrées dans l'URL
    - `file`
      - : Noms de fichiers spécifiques à l'hôte
    - `ftp`
      - : {{Glossary("FTP","Protocole de transfert de fichiers")}}
    - `http` / `https`
      - : [Protocole de transfert hypertexte](/fr/docs/Web/HTTP) (et connexions sécurisées)
    - [`javascript`](/fr/docs/Web/URI/Reference/Schemes/javascript)
      - : Code JavaScript intégré dans l'URL
    - `mailto`
      - : Adresse de courrier électronique
    - [`resource`](/fr/docs/Web/URI/Reference/Schemes/resource) {{Non-standard_Inline}}
      - : Pour Firefox et les extensions Firefox afin de charger des ressources internes
    - `ssh`
      - : Shell sécurisé
    - `tel`
      - : Téléphone
    - [`urn`](/fr/docs/Web/URI/Reference/Schemes/urn)
      - : Noms de ressources uniformes
    - `view-source`
      - : Code source de la ressource
    - `ws` / `wss`
      - : [Connexions WebSocket](/fr/docs/Web/API/WebSockets_API) (et connexions sécurisées)

## Description

Considérez l'URL suivante&nbsp;:

```url
http://www.example.com:80/path/to/myfile.html?key1=value1&key2=value2#SomewhereInTheDocument
```

`http` est le _schéma_ de l'URL, indiquant quel protocole le navigateur doit utiliser. Il s'agit généralement du protocole HTTP ou de sa version sécurisée, HTTPS. Le Web requiert `http` ou `https`, mais les navigateurs peuvent ouvrir des URI avec d'autres schémas, comme ceux qui commencent par `mailto:` (pour ouvrir un client de messagerie) ou `ftp:` (transferts de fichiers).

Lorsque vous utilisez des URLs dans du contenu {{Glossary("HTML")}}, vous n'utilisez généralement que quelques-uns de ces schémas. Lorsqu'il s'agit de sous-ressources — c'est-à-dire des fichiers chargés dans le cadre d'un document plus large — vous ne devez utiliser que les schémas HTTP et HTTPS. De plus en plus, les navigateurs retirent la prise en charge du FTP pour charger des sous-ressources, pour des raisons de sécurité.

Le FTP reste acceptable au niveau supérieur (par exemple, saisi directement dans la barre d'adresse du navigateur ou comme cible d'un lien), bien que certains navigateurs puissent déléguer le chargement du contenu FTP à une autre application.

## Exemples

### Différents schémas d'URI

L'exemple suivant montre différents formats d'URI selon le schéma utilisé.

```url
tel:+1-816-555-1212
git@github.com:mdn/browser-compat-data.git
ftp://example.org/resource.txt
urn:isbn:9780141036144
mailto:help@supercyberhelpdesk.info
```

## Spécifications

{{Specifications}}

## Voir aussi

- [URIs](/fr/docs/Web/URI)
- [URLs de données](/fr/docs/Web/URI/Reference/Schemes/data)
- [URLs de ressources](/fr/docs/Web/URI/Reference/Schemes/resource)
- [Liste IANA des schémas URI <sup>(angl.)</sup>](https://www.iana.org/assignments/uri-schemes/uri-schemes.xhtml)
