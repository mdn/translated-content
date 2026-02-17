---
title: En-tête Range
short-title: Range
slug: Web/HTTP/Reference/Headers/Range
l10n:
  sourceCommit: ca1647a3e2b77cdf9df220244998f25b86629048
---

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Range`** indique la partie d'une ressource que le serveur doit retourner.
Plusieurs parties peuvent être demandées en même temps dans un seul en-tête `Range`, et le serveur peut renvoyer ces plages dans un document multipartie.
Si le serveur renvoie des plages, il utilise le code d'état {{HTTPStatus("206", "206 Partial Content")}} pour la réponse.
Si les plages sont invalides, le serveur retourne l'erreur {{HTTPStatus("416", "416 Range Not Satisfiable")}}.

Un serveur qui ne prend pas en charge les requêtes de plage peut ignorer l'en-tête `Range` et retourner la ressource entière avec un code d'état {{HTTPStatus("200")}}.
Les anciens navigateurs utilisaient un en-tête de réponse {{HTTPHeader("Accept-Ranges", "Accept-Ranges: none")}} pour désactiver des fonctionnalités comme «&nbsp;pause&nbsp;» ou «&nbsp;reprendre&nbsp;» dans les gestionnaires de téléchargement, mais comme le fait qu'un serveur ignore l'en-tête `Range` a la même signification que de répondre avec `Accept-Ranges: none`, cet en-tête est rarement utilisé de cette manière.

Actuellement, seules les [unités `bytes` sont enregistrées <sup>(angl.)</sup>](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units), ce sont des _décalages_ (indexés à partir de zéro et inclusifs).
Si les données demandées ont un [codage de contenu](/fr/docs/Web/HTTP/Reference/Headers/Content-Encoding) appliqué, chaque plage d'octets représente la séquence d'octets encodés, et non les octets obtenus après décodage.

L'en-tête est un [en-tête de requête autorisé par CORS](/fr/docs/Glossary/CORS-safelisted_request_header) lorsque la directive spécifie une seule plage d'octets.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Range: <unit>=<range-start>-
Range: <unit>=<range-start>-<range-end>
Range: <unit>=<range-start>-<range-end>, …, <range-startN>-<range-endN>
Range: <unit>=-<suffix-length>
```

## Directives

- `<unit>`
  - : L'unité dans laquelle les plages sont définies. Actuellement, seule l'unité `bytes` est enregistrée.
- `<range-start>`
  - : Un entier dans l'unité donnée indiquant la position de début de la plage demandée.
- `<range-end>`
  - : Un entier dans l'unité donnée indiquant la position de fin de la plage demandée. Cette valeur est optionnelle et, si elle est omise, la fin de la ressource est utilisée comme fin de la plage.
- `<suffix-length>`
  - : Un entier indiquant le nombre d'unités à la fin de la ressource à retourner.

## Exemples

Les exemples suivants montrent comment effectuer des requêtes en utilisant l'en-tête `Range` pour des requêtes autorisées par CORS, et pour demander plusieurs plages.
D'autres exemples sont disponibles dans le guide [Requêtes de plage HTTP](/fr/docs/Web/HTTP/Guides/Range_requests).

### Plages d'octets uniques et requêtes autorisées par CORS

L'en-tête `Range` est un [en-tête de requête autorisé par CORS](/fr/docs/Glossary/CORS-safelisted_request_header) lorsque la valeur est une seule plage d'octets.
Cela signifie qu'il peut être utilisé dans des requêtes inter-origines sans déclencher de [pré-vérification](/fr/docs/Glossary/Preflight_request), ce qui est utile pour demander des médias et reprendre des téléchargements.

L'exemple suivant demande les 500 premiers octets d'une ressource&nbsp;:

```http
Range: bytes=0-499
```

Pour demander les 500 octets suivants&nbsp;:

```http
Range: bytes=500-999
```

Omettre la position de fin demande toutes les unités restantes de la ressource, ainsi les 100 derniers octets d'une ressource de 1000 octets peuvent être demandés avec&nbsp;:

```http
Range: bytes=900-
```

Sinon, si la taille d'une ressource est inconnue, les `n` derniers octets peuvent être demandés en utilisant une plage suffixe de `-n`&nbsp;:

```http
Range: bytes=-100
```

### Demander plusieurs plages

Pour une ressource d'une longueur de 10 000 octets, l'exemple suivant demande trois plages distinctes&nbsp;; `200`-`999` (800 octets), `2000`-`2499` (500 octets), et enfin `9500-`.
La valeur de spécification de plage `9500-` omet une position de fin ce qui indique que tous les octets à partir de 9500 font partie de la troisième plage (500 octets).

```http
Range: bytes=200-999, 2000-2499, 9500-
```

Cet exemple demande les 500 premiers et les 500 derniers octets du fichier.
La requête peut être rejetée par le serveur si ces plages se chevauchent (par exemple, si la ressource demandée fait moins de 1000 octets).

```http
Range: bytes=0-499, -500
```

### Vérifier si un serveur prend en charge les requêtes de plage

La commande curl suivante effectue une requête {{HTTPMethod("HEAD")}} pour une image&nbsp;:

```bash
curl -v --http1.1 -I https://i.imgur.com/z4d4kWk.jpg
# ou en utilisant la méthode OPTIONS :
# curl -v --http1.1 -X OPTIONS https://i.imgur.com/z4d4kWk.jpg
```

Ceci donne la requête HTTP suivante&nbsp;:

```http
HEAD /z4d4kWk.jpg HTTP/1.1
Host: i.imgur.com
User-Agent: curl/8.7.1
Accept: */*
```

Le serveur répond avec un code `200`, et l'en-tête `Accept-Ranges: bytes` est présent (certains en-têtes sont omis pour la clarté)&nbsp;:

```http
HTTP/1.1 200 OK
Connection: keep-alive
Content-Length: 146515
Content-Type: image/jpeg
…
Accept-Ranges: bytes
```

### Récupérer une plage depuis une URL `blob`

L'URL [`blob:`](/fr/docs/Web/URI/Reference/Schemes/blob) prend également en charge les requêtes de plage en utilisant [`fetch()`](/fr/docs/Web/API/Window/fetch).

```js
const blob = new Blob(["Hello, world!"], { type: "text/plain" });
const url = URL.createObjectURL(blob);
fetch(url, {
  headers: {
    Range: "bytes=7-11",
  },
})
  .then((response) => response.text())
  .then((text) => console.log(text)); // "world"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête conditionnel {{HTTPHeader("If-Range")}}
- L'en-tête de réponse {{HTTPHeader("Content-Range")}}
- L'en-tête {{HTTPHeader("Content-Type")}}
- L'en-tête {{HTTPHeader("Accept-Ranges")}}
- Le code de statut {{HTTPStatus("206", "206 Partial Content")}}
- Le code de statut {{HTTPStatus("416", "416 Range Not Satisfiable")}}
- Le guide [des requêtes de plage HTTP](/fr/docs/Web/HTTP/Guides/Range_requests)
- L'entrée de glossaire {{Glossary("CORS-safelisted_request_header", "En-tête de requête autorisé par CORS")}}
