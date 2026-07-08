---
title: Transport du dictionnaire de compression
slug: Web/HTTP/Guides/Compression_dictionary_transport
l10n:
  sourceCommit: 07fe6a6cf8e1961eec54a77e680ba385611a249e
---

{{SeeCompatTable}}

Le **Transport du dictionnaire de compression** est un moyen d'utiliser un dictionnaire de compression partagé pour réduire considérablement la taille des réponses HTTP.

## Vue d'ensemble

Les algorithmes de compression sont utilisés dans HTTP pour réduire la taille des ressources téléchargées sur le réseau, réduisant ainsi le coût de la bande passante et le temps nécessaire pour charger les pages. Les algorithmes de compression HTTP sans perte fonctionnent en trouvant des redondances dans la source&nbsp;: par exemple, des endroits où du texte comme la chaîne de caractères `"function"` est répété. Ils incluent ensuite une seule copie de la chaîne de caractères redondante et remplacent les occurrences de celle-ci dans la ressource par des références à cette copie. Comme les références sont plus courtes que la chaîne de caractères, la version compressée est plus courte.

> [!NOTE]
> Une tentative précédente de cette technologie s'appelait SDCH (Shared Dictionary Compression for HTTP), mais elle n'a jamais été largement supportée et a été supprimée en 2017. Le Transport du dictionnaire de compression est une implémentation mieux définie et plus robuste, avec un consensus industriel plus large.

Par exemple, prenez ce JavaScript&nbsp;:

```js
function a() {
  console.log("Bonjour le monde !");
}

function b() {
  console.log("Je suis ici");
}
```

Cela pourrait être compressé en remplaçant les chaînes de caractères répétées par des références à un emplacement précédent et au nombre de caractères, comme ceci&nbsp;:

```plain
function a() {
  console.log("Bonjour le monde !");
}

[0:9]b[10:20]Je suis ici[42:46]
```

Dans cet exemple, `[0:9]` fait référence à la copie des 9 caractères à partir du caractère 0. Notez qu'il s'agit d'un exemple simplifié pour démontrer le concept et que les algorithmes réels sont plus complexes que cela.

Les clients peuvent ensuite inverser la compression après le téléchargement pour recréer la ressource originale non compressée.

### Dictionnaires de compression

Les algorithmes comme {{Glossary("Brotli compression", "Compression Brotli")}} et {{Glossary("Zstandard compression", "Compression Zstandard")}} atteignent une efficacité encore plus grande en permettant l'utilisation de dictionnaires de chaînes de caractères couramment rencontrées, de sorte que vous n'avez pas besoin de copies de celles-ci dans la ressource compressée. Ces algorithmes sont livrés avec un dictionnaire par défaut prédéfini qui est utilisé lors de la compression des réponses HTTP.

Le transport du dictionnaire de compression s'appuie sur cela en vous permettant de fournir votre propre dictionnaire, ce qui est particulièrement applicable à un ensemble spécifique de ressources. L'algorithme de compression peut alors s'y référer comme source d'octets lors de la compression et de la décompression de la ressource.

En supposant que les références de l'exemple précédent soient incluses dans ce dictionnaire commun, cela pourrait être encore réduit à ceci&nbsp;:

```plain
[d0:9]a[d10:20]Bonjour le monde![d42:46]
[d0:9]b[d10:20]Je suis ici[d42:46]
```

Le dictionnaire peut être soit une ressource distincte qui n'est requise que pour le transport du dictionnaire de compression, soit une ressource dont le site Web a besoin de toute façon.

Par exemple, supposons que votre site Web utilise une bibliothèque JavaScript. Vous chargeriez généralement une version spécifique de la bibliothèque et pourriez inclure le nom de la version dans le nom de la bibliothèque, comme `<script src="ma-bibliotheque.v1.js">`. Lorsque le navigateur charge votre page, il récupère une copie de la bibliothèque en tant que sous-ressource.

Si vous mettez ensuite à jour vers la version v2 de la bibliothèque, la majeure partie du code de la bibliothèque est probablement restée la même. Ainsi, les sites peuvent réduire considérablement la taille du téléchargement pour `ma-bibliotheque.v2.js` en indiquant au navigateur d'utiliser `ma-bibliotheque.v1.js` comme dictionnaire de compression pour `ma-bibliotheque.v2.js`. Toutes les chaînes communes entre v1 et v2 n'ont donc pas besoin d'être incluses dans le téléchargement de v2, car le navigateur les possède déjà. La majeure partie de la taille du téléchargement de `ma-bibliotheque.v2.js` correspond alors simplement au delta entre les deux versions.

Le transport du dictionnaire de compression peut atteindre un ordre de grandeur de compression supérieur à celui de la compression utilisant un dictionnaire intégré par défaut&nbsp;: voir [Exemples de transport de dictionnaire de compression <sup>(angl.)</sup>](https://github.com/WICG/compression-dictionary-transport/blob/main/examples.md) pour quelques résultats réels.

## Format du dictionnaire

Un dictionnaire de compression ne suit aucun format spécifique, ni n'a de {{Glossary("MIME type", "type MIME")}} spécifique. Ce sont des fichiers ordinaires qui peuvent être utilisés dans la compression d'autres fichiers ayant un contenu similaire.

Les versions précédentes des fichiers ont généralement beaucoup de contenu similaire, ce qui en fait d'excellents dictionnaires.
Utiliser une version précédente d'un fichier comme dictionnaire permet à l'algorithme de compression de référencer efficacement tout le contenu inchangé et de ne capturer que les différences relativement petites dans la nouvelle version. Cette approche est appelée compression delta.

Une autre approche consiste à lister les chaînes communes (par exemple vos modèles HTML) dans un nouveau fichier `dictionnaire.txt` afin qu'il puisse être utilisé pour compresser les pages HTML du site Web. Vous pouvez optimiser cela davantage en utilisant des outils spécialisés, par exemple [le générateur de dictionnaire de Brotli <sup>(angl.)</sup>](https://github.com/google/brotli/blob/master/research/dictionary_generator.cc), qui réduit les dictionnaires à leur taille minimale avec un chevauchement minimal.

Les dictionnaires peuvent également être utilisés pour compresser efficacement les formats binaires. Par exemple, les fichiers binaires [WASM](/fr/docs/WebAssembly) sont de grandes ressources qui peuvent également bénéficier de la compression delta.

## Ressource existante comme dictionnaire

Pour utiliser une ressource comme dictionnaire, le serveur doit inclure l'en-tête {{HTTPHeader("Use-As-Dictionary")}} dans la réponse qui fournit la ressource&nbsp;:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

La valeur de cet en-tête indique les ressources qui peuvent utiliser cette ressource comme dictionnaire&nbsp;: dans ce cas, cela inclut toutes les ressources dont les URL correspondent au [modèle](/fr/docs/Web/API/URL_Pattern_API) donné.

Lorsqu'une ressource est ensuite demandée et correspond au modèle donné (par exemple, `app.v2.js`), la requête inclut un hachage SHA-256 du dictionnaire disponible dans l'en-tête {{HTTPHeader("Available-Dictionary")}}, ainsi que les valeurs `dcb` et/ou `dcz` dans l'en-tête {{HTTPHeader("Accept-Encoding")}} (pour la compression delta utilisant Brotli ou ZStandard selon le cas)&nbsp;:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
```

Le serveur peut alors répondre avec une réponse encodée de manière appropriée en utilisant l'encodage de contenu choisi indiqué dans l'en-tête {{HTTPHeader("Content-Encoding")}}&nbsp;:

```http
Content-Encoding: dcb
```

Si la réponse est mise en cache, elle doit inclure un en-tête {{HTTPHeader("Vary")}} pour empêcher les caches de servir des ressources compressées avec un dictionnaire à des clients qui ne les prennent pas en charge ou de servir la réponse compressée avec le mauvais dictionnaire&nbsp;:

```http
Vary: accept-encoding, available-dictionary
```

Un `id` optionnel peut également être fourni dans l'en-tête {{HTTPHeader("Use-As-Dictionary")}}, afin de permettre au serveur de trouver plus facilement le fichier de dictionnaire s'il ne stocke pas le dictionnaire par le hachage&nbsp;:

```http
Use-As-Dictionary: match="/js/app.*.js", id="dictionary-12345"
```

Si c'est fourni, la valeur est envoyée dans les futures requêtes dans l'en-tête {{HTTPHeader("Dictionary-ID")}}&nbsp;:

```http
Accept-Encoding: gzip, br, zstd, dcb, dcz
Available-Dictionary: :pZGm1Av0IEBKARczz7exkNYsZb8LzaMrV7J32a2fFG4=:
Dictionary-ID: "dictionary-12345"
```

Le serveur doit toujours vérifier le hachage de l'en-tête `Available-Dictionary` — le `Dictionary-ID` est une information supplémentaire pour le serveur afin d'identifier le dictionnaire, mais ne remplace pas la nécessité de l'en-tête `Available-Dictionary`.

## Dictionnaire séparé

Un document HTML peut également fournir un dictionnaire de compression au navigateur qui n'est pas une ressource que le navigateur télécharge de toute façon avec un élément tel qu'un {{HTMLElement("script")}}. Il existe deux méthodes pour le faire&nbsp;:

- Inclure un élément HTML {{HTMLElement("link")}} dont l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Attributes/rel) est défini sur `compression-dictionary`&nbsp;:

  ```html
  <link rel="compression-dictionary" href="/dictionnaire.dat" />
  ```

- Référencer le dictionnaire en utilisant l'en-tête {{HTTPHeader("Link")}}&nbsp;:

  ```http
  Link: </dictionnaire.dat>; rel="compression-dictionary"
  ```

Ce dictionnaire est ensuite téléchargé par le navigateur pendant les périodes d'inactivité, et cette réponse doit inclure l'en-tête {{HTTPHeader("Use-As-Dictionary")}}&nbsp;:

```http
Use-As-Dictionary: match="/js/app.*.js"
```

À partir de là, le processus est similaire à l'exemple précédent lorsqu'une ressource correspondante est demandée.

## Créer des réponses compressées avec dictionnaire

Les réponses compressées avec dictionnaire peuvent utiliser soit les algorithmes Brotli, soit ZStandard, avec deux exigences supplémentaires&nbsp;: elles doivent également inclure un en-tête magique et un hachage de dictionnaire intégré.

Les ressources compressées avec dictionnaire peuvent être créées dynamiquement, mais pour les ressources statiques, il peut être préférable de les créer à l'avance lors de la compilation. Lors de l'utilisation de versions précédentes comme dictionnaires, il faut décider combien de versions delta-compressées créer — pour la dernière version uniquement, ou pour les X dernières versions pour une certaine valeur de X.

Étant donné un fichier de dictionnaire nommé `dictionnaire.txt` et un fichier à compresser nommé `data.txt`, la commande Bash suivante compresse le fichier en utilisant Brotli, produisant un fichier compressé nommé `data.txt.dcb`&nbsp;:

```bash
echo -en '\xffDCB' > data.txt.dcb && \
openssl dgst -sha256 -binary dictionnaire.txt >> data.txt.dcb && \
brotli --stdout -D dictionnaire.txt data.txt >> data.txt.dcb
```

Étant donné les mêmes fichiers d'entrée, la commande Bash suivante compresse le fichier en utilisant ZStandard, produisant un fichier compressé nommé `data.txt.dcz`&nbsp;:

```bash
echo -en '\x5e\x2a\x4d\x18\x20\x00\x00\x00' > data.txt.dcz && \
openssl dgst -sha256 -binary dictionnaire.txt >> data.txt.dcz && \
zstd -D dictionnaire.txt -f -o tmp.zstd data.txt && \
cat tmp.zstd >> data.txt.dcz
```

Notez que vous avez besoin de {{Glossary("OpenSSL")}} installé localement ainsi que de Brotli ou ZStandard.

## Restrictions

Les algorithmes de compression sont exposés à des risques d'attaques de sécurité, il existe donc un certain nombre de restrictions pour le Transport de Dictionnaire de Compression, notamment&nbsp;:

- Les dictionnaires doivent être de la même origine que la ressource utilisant le dictionnaire.
- Les ressources compressées avec dictionnaire doivent être de la même origine que l'origine du document, ou suivre les règles de [CORS](/fr/docs/Web/HTTP/Guides/CORS), et donc être demandées avec l'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) et servies avec un en-tête {{HTTPHeader("Access-Control-Allow-Origin")}} approprié.
- Les dictionnaires sont soumis à la partition habituelle du cache HTTP et ne peuvent donc pas être partagés entre les origines, même s'ils téléchargent les mêmes ressources. Le dictionnaire doit être téléchargé à nouveau pour chaque origine.

De plus, les dictionnaires pourraient eux-mêmes devenir des vecteurs de suivi, de sorte que les navigateurs peuvent restreindre cette fonctionnalité lorsque les cookies sont désactivés ou lorsque d'autres protections de confidentialité supplémentaires sont activées.

Comme pour les autres ressources, si un site Web utilise l'en-tête {{HTTPHeader("Content-Security-Policy")}}, le dictionnaire de compression doit être une source autorisée afin qu'il puisse être chargé.
En particulier, lors du chargement d'un [dictionnaire séparé](#dictionnaire_séparé) en utilisant [`<link rel="compression-dictionary">`](/fr/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary), la directive `connect-src` (ou `default-src`, si `connect-src` n'est pas définie) doit autoriser l'emplacement du dictionnaire.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Termes du glossaire&nbsp;:
  - {{Glossary("Brotli compression", "Compression Brotli")}}
  - {{Glossary("Zstandard compression", "Compression Zstandard")}}
- [`<link rel="compression-dictionary">`](/fr/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary)
- L'en-tête {{HTTPHeader("Accept-encoding")}}
- L'en-tête {{HTTPHeader("Content-encoding")}}
- L'en-tête {{HTTPHeader("Available-Dictionary")}}
- L'en-tête {{HTTPHeader("Dictionary-ID")}}
- L'en-tête {{HTTPHeader("Use-As-Dictionary")}}
- [RFC 9842&nbsp;: Transport de dictionnaire de compression <sup>(angl.)</sup>](https://www.rfc-editor.org/info/rfc9842)
- [Ressources pour le transport de dictionnaire de compression <sup>(angl.)</sup>](https://use-as-dictionary.com/)
