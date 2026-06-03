---
title: En-tête Content-Digest
short-title: Content-Digest
slug: Web/HTTP/Reference/Headers/Content-Digest
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

L'en-tête HTTP **`Content-Digest`** {{Glossary("request header", "en-tête de requête")}} et {{Glossary("response header", "en-tête de réponse")}} fournit un {{Glossary("hash function", "digest")}} calculé à l'aide d'un algorithme de hachage appliqué au contenu du message.
Un·e destinataire peut utiliser `Content-Digest` pour valider le contenu du message HTTP à des fins d'intégrité.

Le champ {{HTTPHeader("Want-Content-Digest")}} permet à un·e expéditeur·ice de demander `Content-Digest` en précisant ses préférences d'algorithme de hachage.
Un condensé de contenu diffère selon {{HTTPHeader("Content-Encoding")}} et {{HTTPHeader("Content-Range")}}, mais pas selon {{HTTPHeader("Transfer-Encoding")}}.

Dans certains cas, un {{HTTPHeader("Repr-Digest")}} peut être utilisé pour valider l'intégrité de messages partiels ou multiparties par rapport à la représentation complète.
Par exemple, dans [les requêtes de plage](/fr/docs/Web/HTTP/Guides/Range_requests), `Repr-Digest` aura toujours la même valeur si seules les plages d'octets demandées diffèrent, tandis que le condensé de contenu sera différent pour chaque partie.
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

## Directives

- `<digest-algorithm>`
  - : L'algorithme utilisé pour créer un condensé du contenu du message.
    Seuls deux algorithmes de condensé enregistrés sont considérés comme sûrs&nbsp;: `sha-512` et `sha-256`.
    Les algorithmes de condensé enregistrés non sûrs (anciens) sont&nbsp;: `md5`, `sha` (SHA-1), `unixsum`, `unixcksum`, `adler` (ADLER32) et `crc32c`.
- `<digest-value>`
  - : Le condensé en octets du contenu du message à l'aide de `<digest-algorithm>`.
    Le choix de l'algorithme de condensé détermine également l'encodage à utiliser&nbsp;: `sha-512` et `sha-256` utilisent l'encodage {{Glossary("base64")}}, tandis que certains anciens algorithmes de condensé comme `unixsum` utilisent un entier décimal.
    Contrairement aux premiers brouillons de la spécification, les octets du condensé encodés en base64 standard sont entourés de deux-points (`:`, ASCII 0x3A) dans le cadre de la [syntaxe de dictionnaire](https://www.rfc-editor.org/rfc/rfc8941#name-byte-sequences).

## Description

Un en-tête `Digest` était défini dans les spécifications précédentes, mais il s'est avéré problématique car la portée de ce à quoi le condensé s'appliquait n'était pas claire.
Plus précisément, il était difficile de distinguer si un condensé s'appliquait à l'ensemble de la représentation de la ressource ou au contenu spécifique d'un message HTTP.
Ainsi, deux en-têtes distincts ont été définis (`Content-Digest` et `Repr-Digest`) pour transmettre respectivement les condensés du contenu du message HTTP et de la représentation de la ressource.

## Exemples

### Requête d'un agent utilisateur pour un `Content-Digest` SHA-256

Dans l'exemple suivant, un agent utilisateur demande un condensé du contenu du message avec une préférence pour SHA-256, suivi de SHA-1 avec une préférence inférieure&nbsp;:

```http
GET /items/123 HTTP/1.1
Host: example.com
Want-Content-Digest: sha-256=10, sha=3
```

Le serveur répond avec un `Content-Digest` du contenu du message utilisant l'algorithme SHA-256&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"bonjour": "le monde"}
```

### Valeurs identiques de `Content-Digest` et `Repr-Digest`

Un agent utilisateur demande une ressource sans champ `Want-Content-Digest`&nbsp;:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

Le serveur est configuré pour envoyer des en-têtes de condensé non sollicités dans les réponses.
Les champs `Repr-Digest` et `Content-Digest` ont des valeurs identiques car ils utilisent le même algorithme, et dans ce cas, l'ensemble de la ressource est envoyé dans un seul message&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 19
Content-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:

{"bonjour": "le monde"}
```

### Valeurs différentes de `Content-Digest` et `Repr-Digest`

Si la même requête est répétée comme dans l'exemple précédent, mais utilise la méthode {{HTTPMethod("HEAD")}} au lieu de {{HTTPMethod("GET")}}, les champs `Repr-Digest` et `Content-Digest` seront différents&nbsp;:

```http
GET /items/123 HTTP/1.1
Host: example.com
```

La valeur de `Repr-Digest` sera la même qu'avant, mais il n'y a pas de corps de message, donc un `Content-Digest` différent sera envoyé par le serveur&nbsp;:

```http
HTTP/1.1 200 OK
Content-Type: application/json
Content-Digest: sha-256=:47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=:
Repr-Digest: sha-256=:RK/0qy18MlBSVnWgjwz6lZEWjP/lF5HF9bvEF8FabDg=:
```

### Agent utilisateur envoyant un `Content-Digest` dans les requêtes

Dans l'exemple suivant, un agent utilisateur envoie un condensé du contenu du message en utilisant SHA-512.
Il envoie à la fois un `Content-Digest` et un `Repr-Digest`, qui diffèrent l'un de l'autre à cause de `Content-Encoding`&nbsp;:

```http
POST /bank_transfer HTTP/1.1
Host: example.com
Content-Encoding: zstd
Content-Digest: sha-512=:ABC…=:
Repr-Digest: sha-512=:DEF…=:

{
 "recipient": "Alex",
 "amount": 900000000
}
```

Le serveur peut calculer un condensé du contenu qu'il a reçu et comparer le résultat avec les en-têtes `Content-Digest` ou `Repr-Digest` pour valider l'intégrité du message.
Dans des requêtes comme l'exemple ci-dessus, le `Repr-Digest` est plus utile au serveur car il est calculé sur la représentation décodée et sera plus cohérent dans différents scénarios.

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
