---
title: En-tête Content-Digest
short-title: Content-Digest
slug: Web/HTTP/Reference/Headers/Content-Digest
l10n:
  sourceCommit: b6de98eb9cd52ce7e37f22a340352f0af4c9d597
---

L'en-tête HTTP **`Content-Digest`** {{Glossary("request header", "en-tête de requête")}} et {{Glossary("response header", "en-tête de réponse")}} fournit un {{Glossary("hash function", "digest")}} calculé à l'aide d'un algorithme de hachage appliqué au contenu du message.
Un·e destinataire peut utiliser `Content-Digest` pour valider le contenu du message HTTP à des fins d'intégrité.

Le champ {{HTTPHeader("Want-Content-Digest")}} permet à un·e expéditeur·ice de demander `Content-Digest` en précisant ses préférences d'algorithme de hachage.
Un condensé de contenu diffère selon {{HTTPHeader("Content-Encoding")}} et {{HTTPHeader("Content-Range")}}, mais pas selon {{HTTPHeader("Transfer-Encoding")}}.

Dans certains cas, un {{HTTPHeader("Repr-Digest")}} peut être utilisé pour valider l'intégrité de messages partiels ou multi-parties par rapport à la représentation complète.
Par exemple, dans [les requêtes de plage](/fr/docs/Web/HTTP/Guides/Range_requests), `Repr-Digest` a toujours la même valeur si seules les plages d'octets demandées diffèrent, tandis que le condensé de contenu est différent pour chaque partie.
Pour cette raison, `Content-Digest` est identique à {{HTTPHeader("Repr-Digest")}} lorsqu'une représentation est envoyée dans un seul message.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        {{Glossary("Response header", "En-tête de réponse")}},
        {{Glossary("Representation header", "En-tête de représentation")}}
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-Digest: <digest-algorithm>=<digest-value>

// Plusieurs algorithmes de condensé
Content-Digest: <digest-algorithm>=<digest-value>,<digest-algorithm>=<digest-value>, …
```

`Content-Digest` est un _dictionnaire de champs structurés_ ({{RFC("9651", "Valeurs de champs structurés pour HTTP")}}), dont les clés sont `<digest-algorithm>` et les valeurs sont `<digest-value>`.

## Directives

- `<digest-algorithm>`
  - : L'algorithme utilisé pour créer un condensé du contenu du message.
    Seuls deux algorithmes de condensé enregistrés sont considérés comme sûrs&nbsp;: `sha-512` et `sha-256`.
    Les algorithmes de condensé enregistrés non sûrs (anciens) sont&nbsp;: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) et `crc32c`.
- `<digest-value>`
  - : Le condensé du contenu du message à l'aide de `<digest-algorithm>`, encodé en {{Glossary("base64")}} et entouré de deux-points (`:`, ASCII 0x3A). Cet encodage est appelé [séquence d'octets <sup>(angl.)</sup>](https://www.rfc-editor.org/info/rfc9651/#name-byte-sequences) dans la spécification.

## Exemples

Dans tous les exemples, les points de terminaison sont configurés pour envoyer des en-têtes de condensé non sollicités. Les champs {{HTTPHeader("Want-Content-Digest")}} et {{HTTPHeader("Want-Repr-Digest")}} peuvent éventuellement être utilisés par un expéditeur pour demander un `Content-Digest` ou `Repr-Digest` avec leurs préférences d'algorithme de hachage.

### Un `Content-Digest` SHA-256 dans une réponse

Un agent utilisateur demande une ressource&nbsp;:

```http
GET /items/123 HTTP/1.1
Host: example.com
Want-Content-Digest: sha-256=10, sha=3
```

Le serveur répond avec un `Content-Digest` du contenu du message utilisant l'algorithme SHA-256&nbsp;:
Le condensé est calculé sur les octets exacts du corps du message, `{"hello": "mdn"}` (16 octets, sans inclure explicitement de saut de ligne final)&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Content-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"hello": "mdn"}
```

### Valeurs identiques de `Content-Digest` et `Repr-Digest`

Un agent utilisateur demande une ressource&nbsp;:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Le serveur répond avec un `Content-Digest` et un `Repr-Digest` du contenu du message utilisant l'algorithme SHA-256&nbsp;:
Les champs `Repr-Digest` et `Content-Digest` ont des valeurs identiques, car ils sont calculés en utilisant le même algorithme sur les mêmes octets, `{"hello": "mdn"}` (16 octets), et dans ce cas, l'ensemble de la représentation est envoyé dans un seul message&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 16
Content-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:

{"hello": "mdn"}
```

### Valeurs différentes de `Content-Digest` et `Repr-Digest`

Un agent utilisateur demande uniquement une partie d'une ressource en utilisant une [requête de plage](/fr/docs/Web/HTTP/Guides/Range_requests)&nbsp;:

```http
GET /items/123 HTTP/1.1
Host: example.com
Range: bytes=0-7
```

Le serveur répond avec un {{HTTPStatus("206", "206 Partial Content")}} contenant uniquement les octets demandés, `{"hello"` (8 octets), comme contenu du message.
`Content-Digest` ne couvre que ces octets, tandis que `Repr-Digest` couvre toujours l'ensemble de la représentation, `{"hello": "mdn"}` (16 octets), donc les deux valeurs diffèrent&nbsp;:

```http
HTTP/1.1 206 Partial Content
Content-Type: application/json
Content-Range: bytes 0-7/16
Content-Digest: sha-256=:pKQv0IAKChzGfyfxu5TNqcnvxIzaG4XICf6NQnB1YhY=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### Condensé d'une représentation gzip-encodée

Dans cette requête, le client utilise l'en-tête {{HTTPHeader("Accept-Encoding")}} pour indiquer qu'il accepte la compression gzip&nbsp;:

```http
GET /items/123 HTTP/1.1
Host: example.com
Accept-Encoding: gzip
```

La réponse du serveur inclut l'en-tête {{HTTPHeader("Content-Encoding")}}, indiquant que les octets du message proviennent de la représentation gzip de la ressource.
Le condensé est calculé sur les octets gzip-encodés au lieu du texte original non encodé.
Ici, le corps JSON de 16 octets `{"hello": "mdn"}` est compressé en gzip pour obtenir une représentation de 36 octets, et `Content-Digest` et `Repr-Digest` sont calculés sur ces 36 octets (affichés ici en hexadécimal pour plus de lisibilité)&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Encoding: gzip
Content-Length: 36
Content-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
Repr-Digest: sha-256=:6Gx6u1ZhhahDLs06Zc6ZEqXxUy8RNjy18CaMucjKOFk=:
1F 8B 08 00 00 00 00 00 02 FF AB 56 CA 48 CD C9 C9 57 B2 52 50 CA 4D C9 53 AA 05 00 35 D8 1D 91 10 00 00 00
```

### Gestion de `Content-Digest` lorsqu'il n'y a pas de contenu

Si la même ressource est demandée avec une méthode {{HTTPMethod("HEAD")}} au lieu de {{HTTPMethod("GET")}}, la réponse ne contient aucun contenu&nbsp;:

```http
HEAD /items/123 HTTP/1.1
Host: example.com
```

La valeur de `Repr-Digest` est la même que précédemment, car elle s'applique toujours à l'ensemble de la représentation, `{"hello": "mdn"}`.
Cependant, le serveur n'envoie aucun contenu dans la réponse et peut omettre l'en-tête `Content-Digest`&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

Au lieu d'omettre `Content-Digest` lorsqu'il n'y a pas de contenu, un serveur peut le calculer explicitement sur une chaîne de caractères vide.
Selon la [Section 6.3 de la RFC 9530 <sup>(angl.)</sup>](https://www.rfc-editor.org/rfc/rfc9530.html#section-6.3), cela permet à un destinataire, en particulier lorsque le condensé est couvert par une signature de message HTTP, de vérifier qu'aucun contenu n'a été ajouté ou supprimé, plutôt que de se contenter de constater que l'en-tête a été omis&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:bMGjiT1wkArOzyB9ReAdpW51FV4mHlQygPXGp+TtzG4=:
```

### Agent utilisateur envoyant un condensé dans les requêtes

Dans l'exemple suivant, un agent utilisateur envoie un condensé du contenu du message en utilisant SHA-512.
Le condensé est calculé sur les octets exacts du corps du message, `{"recipient":"Alex","amount":900000000}` (39 octets, sans inclure explicitement un retour à la ligne final).
Comme l'ensemble de la représentation est envoyé dans cette seule requête, `Content-Digest` et `Repr-Digest` ont la même valeur&nbsp;:

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

Cet en-tête ne possède aucune intégration avec les navigateurs définie par la spécification («&nbsp;compatibilité des navigateurs&nbsp;» non applicable).
Les développeur·euse·s peuvent définir et obtenir des en-têtes HTTP à l'aide de `fetch()` afin de fournir un comportement spécifique à l'application.

## Voir aussi

- L'en-tête {{HTTPHeader("Want-Content-Digest")}} pour demander un condensé de contenu
- {{HTTPHeader("Repr-Digest")}}, {{HTTPHeader("Want-Repr-Digest")}} pour les en-têtes de condensé de représentation
- L'en-tête {{HTTPHeader("ETag")}}
- [Guide SDK sur les signatures numériques pour les API <sup>(angl.)</sup>](https://developer.ebay.com/develop/guides/digital-signatures-for-apis) utilise les `Content-Digest` pour les signatures numériques dans les appels HTTP (developer.ebay.com)
