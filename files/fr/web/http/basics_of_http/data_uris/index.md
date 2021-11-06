---
title: URLs de données
slug: Web/HTTP/Basics_of_HTTP/Data_URIs
tags:
  - Base64
  - Guide
  - HTTP
  - Intermédiaire
  - URL
translation_of: Web/HTTP/Basics_of_HTTP/Data_URIs
---
{{HTTPSidebar}}

**Les URLs de données**, les URLs préfixées par le schéma `data:`, permettent aux créateurs de contenu d'intégrer de petits fichiers dans des documents.

> **Note :** Les URLs de données sont traitées comme des origines opaques uniques par les navigateurs modernes, ainsi, contrairement aux autres objets classiques, ces URLs n'héritent pas des propriétés de l'objet ayant mené à cette URL.

## Syntaxe

Les URLs de données sont composées de quatre parties : un préfixe (`data:`), un type MIME indiquant le type de donnée, un jeton facultatif encodé en `base64` dans le cas où il n'est pas textuel ainsi que les données elles-mêmes :

    data:[<mediatype>][;base64],<data>

Le `mediatype` est une chaîne de type MIME, telle que `'image/jpeg'` pour un fichier image JPEG. Si le format MIME n'est pas spécifié, la valeur par défaut sera `text/plain;charset=US-ASCII`.

Si les données sont textuelles, vous pouvez simplement incorporer le texte (en utilisant les entités appropriées ou les échappements basés sur le type de document englobant). Sinon, vous pouvez spécifier `base64` pour intégrer des données binaires encodées en base64.

Quelques exemples :

- `data:,Hello%2C%20World!`
  - : Texte simple / Données brutes
- `data:text/plain;base64,SGVsbG8sIFdvcmxkIQ%3D%3D`
  - : Version encodée en base64 de ce qui précède
- `data:text/html,%3Ch1%3EHello%2C%20World!%3C%2Fh1%3E`
  - : Un document HTML avec `<h1>Hello, World!</h1>`
- `data:text/html,<script>alert('hi');</script>`
  - : Un document HTML exécutant une alerte JavaScript. Notez que la balise fermante du script est requise.

## Encodage des données au format base64

Il est possible de le faire très simplement via la ligne de commande `uuencode` pour les systèmes Linux et Mac OS X :

    uuencode -m infile remotename

Le paramètre `infile` est le nom du fichier que vous souhaitez encoder au format base64, `remotename` est le nom du fichier distant qui n'est pas réellement utilisé dans l'URL de type `data`.

Le résultat devrait ressembler à :

    begin-base64 664 test
    YSBzbGlnaHRseSBsb25nZXIgdGVzdCBmb3IgdGV2ZXIK
    ====

L'URL de donnée pourra ainsi utiliser la donnée encodée après l'en-tête.

### Dans une page web, via JavaScript

Les APIs web contiennent des méthodes pour encoder et décoder en base64 : [Décoder et encoder en base64](/fr/docs/Web/API/WindowBase64/Base64_encoding_and_decoding).

## Problèmes habituels

Cette section décrit les problèmes qui apparaissent fréquemment lors de la création et de l'utilisation des URLs de type `data`

    data:text/html,lots of text...<p><a name%3D"bottom">bottom</a>?arg=val

Cela représente une ressource HTML dont le contenu est le suivant :

    beaucoup de texte...<p><a name="bottom">bottom</a>?arg=val

- Syntaxe
  - : Le format pour les URLs de type `data` est très simple, mais il est aussi simple d'oublier la virgule qui précède le segment de données ou de mal encoder la donnée en base64.
- Mise en forme HTML
  - : Une URL de donnée expose un fichier dans un fichier, le fichier fourni peut éventuellement être bien plus gros que le fichier l'englobant. En tant qu'URL, une URL de donnée devrait pouvoir être mise en forme à l'aide de caractères d'espacement (retour chariot, tabulation ou espace), néanmoins, des limitations pratiques apparaissent lorsqu'il s'agit d'effectuer [l'encodage en base64](https://bugzilla.mozilla.org/show_bug.cgi?id=73026#c12).
- Limitations sur la longueur
  - : Bien que Firefox supporte les URLs de données ayant une taille virtuellement infinie, il est important de noter que les navigateurs ne sont pas obligés de supporter une longueur maximale de donnée. Ainsi dans Opera 11 les URLs ont une longueur maximale de 65535 caractères, limitant ainsi la longueur de la donnée utilisable dans les URLs de données à 65529 caractères si celle-ci est encodée.
- Absence de gestion d'erreur
  - : Les paramètres invalides dans le format MIME ou les coquilles lorsque l'on spécifie `'base64'`, sont ignorés mais aucune erreur n'est retournée.
- Aucun support des requêtes via l'URL, etc
  - : La donnée au sein de l'URL de donnée est opaque, ainsi toute tentative d'utiliser une chaîne de paramètres de recherche comme on le ferait avec une URL classique à l'aide de la syntaxe `<url>?parameter-data`) avec une URL de donnée ne ferait qu'inclure les paramètres de l'URL au sein de la donnée.
- Problèmes de sécurité
  - : De nombreux problèmes de sécurité (comme le phishing) ont été associés au URLs de donnés et du fait qu'elle puisse avoir un accès direct au navigateur. Afin de réduire l'impact de ces problèmes, la navigation à la racine via des URLs de données `data://` a été bloquée dans Firefox 59+ (en version finale, Nightly/Beta bloquent à partir de la version 58). Nous espérons voir d'autres navigateurs nous emboîter le pas prochainement. [Voir Blocking Top-Level Navigations to data URLs for Firefox 58](https://blog.mozilla.org/security/2017/11/27/blocking-top-level-navigations-data-urls-firefox-58/) pour plus de détails.

## Spécifications

| Spécification        | Titre                  |
| -------------------- | ---------------------- |
| {{RFC("2397")}} | Le schéma d'URL "data" |

## Compatibilité des navigateurs

{{compat("http.data-url")}}

## Voir_aussi

- [Décoder et encoder en base64](/fr/docs/Web/API/WindowBase64/Base64_encoding_and_decoding)
- {{domxref("WindowBase64.atob","atob()")}}
- {{domxref("WindowBase64.btoa","btoa()")}}
- [CSS `url()`](/fr/docs/Web/CSS/uri)
- [URI](/fr/docs/Glossary/URI)
