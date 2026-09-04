---
title: En-tête ETag
short-title: ETag
slug: Web/HTTP/Reference/Headers/ETag
l10n:
  sourceCommit: 099a15b4234071958980dcae0e122a7145fdbdfa
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`ETag`** (balise d'entité) est un identifiant pour une version spécifique d'une ressource.
Il permet aux [caches](/fr/docs/Web/HTTP/Guides/Caching) d'être plus efficaces et d'économiser de la bande passante, car un serveur web n'a pas besoin de renvoyer une réponse complète si le contenu n'a pas changé.
De plus, les ETag aident à éviter que des mises à jour simultanées d'une ressource ne s'écrasent mutuellement ([«&nbsp;collisions en vol&nbsp;»](#évitement_des_collisions_en_vol)).

Si la ressource à une URL donnée change, une nouvelle valeur `ETag` _doit_ être générée.
Une comparaison de ces valeurs permet de déterminer si deux représentations d'une ressource sont identiques.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}, {{Glossary("Representation header", "En-tête de représentation")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
ETag: W/"<etag_value>"
ETag: "<etag_value>"
```

## Directives

- `W/` {{Optional_Inline}}
  - : `'W/'` (sensible à la casse) indique qu'un [validateur faible](/fr/docs/Web/HTTP/Guides/Conditional_requests#validation_faible) est utilisé.
    Les validateurs faibles sont faciles à générer, mais ils sont beaucoup moins utiles pour les comparaisons.
    Les validateurs forts sont idéaux pour les comparaisons, mais ils peuvent être très difficiles à générer efficacement.
    Les valeurs `Etag` faibles de deux représentations des mêmes ressources peuvent être sémantiquement équivalentes, mais ne pas être identiques octet par octet.
    Cela signifie que les ETag faibles empêchent la mise en cache lorsque des [requêtes de plages d'octets](/fr/docs/Web/HTTP/Reference/Headers/Accept-Ranges) sont utilisées, mais les ETag forts permettent toujours la mise en cache des requêtes de plage.
- `<etag_value>`
  - : Balises d'entité représentant d'une façon unique les ressources demandées. Elles sont consituées d'une chaîne de caractères ASCII placés entre apostrophes doubles (comme `"675af34563dc-tr34"`).
    La méthode par laquelle les valeurs `ETag` sont générées n'est pas définie.
    Souvent, un hachage du contenu, un hachage de l'horodatage de la dernière modification, ou seulement un numéro de révision est utilisé.
    Par exemple, MDN utilise un hachage de chiffres hexadécimaux du contenu du wiki.

## Exemples

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Évitement des collisions en vol

A l'aide des en-têtes `ETag` et {{HTTPHeader("If-Match")}}, vous pouvez détecter les collisions d'édition en vol (conflits).

Par exemple, lors de l'édition de MDN, le contenu actuel du wiki est haché et placé dans un `Etag` dans la réponse&nbsp;:

```http
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Lors de la sauvegarde des modifications d'une page wiki ("post" des données), la requête {{HTTPMethod("POST")}} contiendra l'en-tête {{HTTPHeader("If-Match")}} contenant les valeurs ETag par rapport auxquelles vérifier la péremption.

```http
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Si les hachages ne correspondent pas, cela signifie que le document a été modifié entre-temps, et une erreur {{HTTPStatus("412", "412 Precondition Failed")}} est déclenchée.

### Mise en cache des ressources inchangées

Un autre cas d'utilisation typique de l'en-tête `ETag` est de mettre en cache les ressources qui sont inchangées.
Si un utilisateur visite à nouveau une URL donnée (qui a un ensemble d'`ETag`), et qu'elle est _périmée_, c'est à dire, trop ancienne pour être considérée comme utilisable, le client enverra en même temps la valeur de son `ETag` dans un champ d'en-tête {{HTTPHeader("If-None-Match")}}&nbsp;:

```http
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Le serveur comparera l'`ETag` du client (envoyé avec `If-None-Match`) à l'`ETag` de sa version en cours de la ressource, et si les deux valeurs correspondent (c'est-à-dire que la ressource n'a pas changé), le serveur renverra un statut {{HTTPStatus("304", "304 Not Modified")}}, sans aucun corps, qui indiquera au client que sa version mise en cache de la réponse est toujours bonne à utiliser (_actuelle_).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les en-têtes {{HTTPHeader("If-Match")}}, {{HTTPHeader("If-None-Match")}}
- Les codes de statut de réponse {{HTTPStatus("304", "304 Not Modified")}}, {{HTTPStatus("412", "412 Precondition Failed")}}
- [Note W3C&nbsp;: Édition du Web — Détecter le problème de mise à jour perdue avec la réservation non exclusive <sup>(angl.)</sup>](https://www.w3.org/1999/04/Editing/)
