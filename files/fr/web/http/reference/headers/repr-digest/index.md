---
title: En-tête Repr-Digest
short-title: Repr-Digest
slug: Web/HTTP/Reference/Headers/Repr-Digest
l10n:
  sourceCommit: e5a63f8d002dcac9654be79bd03bfda262dd4d89
---

L'HTTP{{Glossary("Request header", "en-tête de requête")}} et {{Glossary("Response header", "de réponse")}} **`Repr-Digest`** fournit une {{Glossary("hash function", "fonction de hachage")}} de la représentation sélectionnée de la ressource cible.
Il peut être utilisé pour valider l'intégrité de l'ensemble de la représentation sélectionnée une fois qu'elle a été reçue et reconstituée.

La _représentation sélectionnée_ est le format spécifique d'une ressource choisi par [négociation de contenu](/fr/docs/Web/HTTP/Guides/Content_negotiation).
Les détails concernant la représentation peuvent être déterminés à partir des {{Glossary("Representation header", "en-têtes de représentation")}}, tels que {{HTTPHeader("Content-Language")}}, {{HTTPHeader("Content-Type")}} et {{HTTPHeader("Content-Encoding")}}.

Le digest de représentation s'applique à l'ensemble de la représentation plutôt qu'à l'encodage ou au découpage en tranches des messages utilisés pour l'envoyer.
Un {{HTTPHeader("Content-Digest")}} s'applique au contenu d'un message HTTP spécifique et a des valeurs différentes en fonction des {{HTTPHeader("Content-Encoding")}} et {{HTTPHeader("Content-Range")}} de chaque message.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}, {{Glossary("Response header", "En-tête de réponse")}}, {{Glossary("Representation header", "En-tête de représentation")}}</td>
    </tr>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Repr-Digest: <digest-algorithm>=<digest-value>

// Plusieurs algorithmes de digest
Repr-Digest: <digest-algorithm>=<digest-value>,…,<digest-algorithmN>=<digest-valueN>
```

`Repr-Digest` est un _dictionnaire de champ structuré_ ({{RFC("9651", "Structured Field Values for HTTP")}}), dont les clés sont `<digest-algorithm>` et les valeurs `<digest-value>`.

## Directives

- `<digest-algorithm>`
  - : L'algorithme utilisé pour créer un digest de la représentation.
    Seuls deux algorithmes de digest enregistrés sont considérés sûrs&nbsp;: `sha-512` et `sha-256`.
    Les algorithmes de digest enregistrés non sécurisés (hérités) sont&nbsp;: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) et `crc32c`.
- `<digest-value>`
  - : Le digest de l'ensemble des données de la représentation sélectionnée (voir la [section 8.1 de la spécification sur la sémantique HTTP <sup>(angl.)</sup>](https://www.rfc-editor.org/info/rfc9110/#section-8.1)) utilisant `<digest-algorithm>`, encodé en {{Glossary("base64")}} et entouré de deux-points (`:`, ASCII 0x3A). Cet encodage est appelé une [séquence d'octets <sup>(angl.)</sup>](https://www.rfc-editor.org/info/rfc9651/#name-byte-sequences) dans la spécification.

## Exemples

Dans tous les exemples, les points d'accès sont configurés pour envoyer des en-têtes de digest non sollicités. Les champs {{HTTPHeader("Want-Content-Digest")}} et {{HTTPHeader("Want-Repr-Digest")}} peuvent éventuellement être utilisés par un expéditeur pour demander un `Content-Digest` ou un `Repr-Digest`, ainsi que ses préférences d'algorithme de hachage.

### Utiliser un `Repr-Digest` SHA-256 dans une réponse

Un agent utilisateur demande une ressource&nbsp;:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Le serveur répond avec un `Repr-Digest` de la représentation utilisant l'algorithme SHA-256.
Le digest est calculé sur les octets exacts de la représentation, `{"salut": "mdn"}` (16 octets, sans inclure explicitement de saut de ligne final)&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"salut": "mdn"}
```

### Obtenir des valeurs `Content-Digest` et `Repr-Digest` identiques

Un agent utilisateur demande une ressource&nbsp;:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Le serveur répond avec un `Content-Digest` et un `Repr-Digest` du contenu du message utilisant l'algorithme SHA-256.
Les champs `Repr-Digest` et `Content-Digest` ont des valeurs identiques, car ils sont calculés avec le même algorithme sur les mêmes octets, `{"salut": "mdn"}` (16 octets), et dans ce cas la représentation entière est envoyée dans un seul message&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Content-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"salut": "mdn"}
```

### Obtenir des valeurs `Content-Digest` et `Repr-Digest` différentes

Un agent utilisateur demande seulement une partie d'une ressource en utilisant une [requête de plage](/fr/docs/Web/HTTP/Guides/Range_requests)&nbsp;:

```http
GET /items/123 HTTP/1.1
Host: example.com
Range: bytes=0-7
```

Le serveur retourne une réponse {{HTTPStatus("206", "206 Partial Content")}} contenant uniquement les octets demandés, `{"salut"` (8 octets), comme contenu du message.
`Content-Digest` couvre uniquement ces octets, tandis que `Repr-Digest` couvre toujours la représentation entière, `{"salut": "mdn"}` (16 octets)&nbsp;: les deux valeurs diffèrent donc&nbsp;:

```http
HTTP/1.1 206 Partial Content
Content-Type: application/json
Content-Range: bytes 0-7/16
Content-Digest: sha-256=:pKQv0IAKChzGfyfxu5TNqcnvxIzaG4XICf6NQnB1YhY=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### Calculer le digest d'une représentation encodée avec gzip

Dans cette requête, le client utilise l'en-tête {{HTTPHeader("Accept-Encoding")}} pour indiquer qu'il accepte la compression gzip&nbsp;:

```http
GET /items/123 HTTP/1.1
Host: example.com
Accept-Encoding: gzip
```

La réponse du serveur inclut l'en-tête {{HTTPHeader("Content-Encoding")}}, indiquant que les octets du message proviennent de la représentation gzip de la ressource.

Le digest est calculé sur les octets encodés avec gzip plutôt que sur le texte original non encodé.
Ici, le corps JSON de 16 octets `{"salut": "mdn"}` est compressé avec gzip pour former une représentation de 36 octets, et `Content-Digest` et `Repr-Digest` sont calculés sur ces 36 octets (présentés ici en hexadécimal pour faciliter la lecture)&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Encoding: gzip
Content-Length: 36
Content-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
Repr-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:

1F 8B 08 00 00 00 00 00 02 FF AB 56 CA 48 CD C9 C9 57 B2 52 50 CA 4D C9 53 AA 05 00 35 D8 1D 91 10 00 00 00
```

### Gérer l'absence de contenu avec `Repr-Digest`

Si la même ressource est demandée avec la méthode {{HTTPMethod("HEAD")}} plutôt qu'avec {{HTTPMethod("GET")}}, la réponse ne contient aucun contenu&nbsp;:

```http
HEAD /items/123 HTTP/1.1
Host: example.com
```

La valeur `Repr-Digest` est la même que précédemment, car elle s'applique toujours à la représentation complète, `{"salut": "mdn"}`.
Cependant, le serveur n'envoie aucun contenu dans la réponse et peut omettre l'en-tête `Content-Digest`&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

Plutôt que d'omettre `Content-Digest` en l'absence de contenu, un serveur peut le calculer explicitement sur une chaîne de caractères vide.
Selon la [section 6.3 de la RFC 9530 <sup>(angl.)</sup>](https://www.rfc-editor.org/info/rfc9530/#section-6.3), cela permet à un destinataire, notamment lorsque le digest est couvert par une signature de message HTTP, de vérifier qu'aucun contenu n'a été ajouté ou supprimé, plutôt que de vérifier uniquement que l'en-tête a été omis&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### Envoyer des digests dans les requêtes avec un agent utilisateur

Dans l'exemple suivant, un agent utilisateur envoie un digest du contenu du message en utilisant SHA-512.
Le digest est calculé sur les octets exacts du corps du message, `{"recipient":"Alex","amount":900000000}` (39 octets, sans inclure explicitement de saut de ligne final).
Comme la représentation entière est envoyée dans cette requête unique, `Content-Digest` et `Repr-Digest` ont la même valeur&nbsp;:

```http
POST /bank_transfer HTTP/1.1
Host: example.com
Content-Type: application/json
Content-Length: 39
Content-Digest: sha-512=:PlrIZYU3M76B30wGsL0h6O79BoxHTdAG+RnMPjOyECTSJCN/KnYdOrSCCWjxV3ckkyvdRmZ52//M3WbehCXcPw==:
Repr-Digest: sha-512=:PlrIZYU3M76B30wGsL0h6O79BoxHTdAG+RnMPjOyECTSJCN/KnYdOrSCCWjxV3ckkyvdRmZ52//M3WbehCXcPw==:

{"recipient":"Alex","amount":900000000}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Cet en-tête n'a pas d'intégration définie par la spécification au niveau des navigateurs (la section «&nbsp;compatibilité des navigateurs&nbsp;» ne s'applique pas).
Les développeur·euse·s peuvent définir et récupérer des en-têtes HTTP en utilisant `fetch()` pour fournir un comportement d'implémentation propre à l'application.

## Voir aussi

- Les en-têtes {{HTTPHeader("Content-Digest")}}, {{HTTPHeader("Want-Content-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}}
- L'en-tête {{HTTPHeader("ETag")}}
- L'en-tête {{HTTPHeader("Content-Encoding")}}
- [Signatures numériques pour les API <sup>(angl.)</sup>](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) guide SDK utilisant des `Content-Digest` pour des signatures numériques dans des appels HTTP (developer.ebay.com)
