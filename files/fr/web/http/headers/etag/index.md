---
title: ETag
slug: Web/HTTP/Headers/ETag
---

{{HTTPSidebar}}

L'en-tête de réponse `ETag` HTTP est un identifiant pour une version spécifique d'une ressource. Il permet aux caches d'être plus efficaces et d'économiser de la bande passante, du fait que le serveur Web n'a pas besoin d'envoyer une réponse complète si le contenu n'a pas changé. Sinon, si le contenu a changé, les etags sont utiles pour empêcher les mises à jour simultanées d'une ressource de s'écraser mutuellement ("collisions en vol").

Si la ressource à une URL donnée change, une nouvelle valeur `Etag` doit être générée. Les Etags sont donc similaires aux empreintes digitales et elles peuvent également être utilisées à des fins de suivi par certains serveurs. Une comparaison entre elles permet de déterminer rapidement si deux représentations d'une ressource sont identiques, mais un serveur de suivi peut également leur imposer de persister indéfiniment.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'entête</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
ETag: W/"<etag_value>"
ETag: "<etag_value>"
```

## Directives

- `W/` {{optional_inline}}
  - : `'W/'` (sensible à la casse) indique qu'un validateur faible est utilisé. Les validateurs faibles sont faciles à générer, mais ils sont beaucoup moins utiles pour les comparaisons. Les validateurs forts sont idéaux pour les comparaisons, mais ils peuvent être très difficiles à générer efficacement. Les valeurs `Etag` faibles de deux représentations des mêmes ressources peuvent être sémantiquement équivalentes, mais ne pas être identiques octet par octet.
- **"\<etag_value>**"
  - : Balises d'entité représentant d'une façon unique les ressources demandées. Elles sont consituées d'une chaîne de caractères ASCII placés entre apostrophes doubles (comme `"675af34563dc-tr34"`). La méthode par laquelle les valeurs `ETag` sont générées n'est pas spécifiée. Souvent, un hachage du contenu, un hachage de l'horodatage de la dernière modification, ou seulement un numéro de révision est utilisé. Par exemple, MDN utilise un hachage de chiffres hexadécimaux du contenu du wiki.

## Exemples

```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
ETag: W/"0815"
```

### Évitement des collisions en vol

A l'aide des en-têtes `ETag` et {{HTTPHeader("If-Match")}}, vous pouvez détecter les collisions d'édition en vol.

Par exemple, lors de l'édition de MDN, le contenu actuel du wiki est haché et placé dans un `Etag` dans la réponse :

```
ETag: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Lors de la sauvegarde des modifications d'une page wiki ("post" des données), la requête {{HTTPMethod("POST")}} contiendra l'en-tête {{HTTPHeader("If-Match")}} contenant les valeurs ETag par rapport auxquelles vérifier la péremption.

```
If-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Si les hachages ne correspondent pas, cela signifie que le document a été modifié entre-temps, et une erreur {{HTTPStatus("412")}} `Precondition Failed` est déclenchée.

### Mise en cache des ressources inchangées

Un autre cas d'utilisation typique de l'en-tête `ETag` est de mettre en cache les ressources qui sont inchangées. Si un utilisateur visite à nouveau une URL donnée (qui a un ensemble d'`ETag`), et qu'elle est _périmée_, c'est à dire, trop ancienne pour être considérée comme utilisable, le client enverra en même temps la valeur de son `ETag` dans un champ d'en-tête {{HTTPHeader("If-None-Match")}} :

```
If-None-Match: "33a64df551425fcc55e4d42a148795d9f25f89d4"
```

Le serveur comparera l'`ETag` du client (envoyé avec `If-None-Match`) à l'`ETag` de sa version en cours de la ressource, et si les deux valeurs correspondent (c'est-à-dire que la ressource n'a pas changé), le serveur renverra un statut {{HTTPStatus( "304")}} Not Modified, sans aucun corps, qui indiquera au client que sa version mise en cache de la réponse est toujours bonne à utiliser (actuelle).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("If-Match")}}
- {{HTTPHeader("If-None-Match")}}
- {{HTTPStatus("304")}} `Not Modified`
- {{HTTPStatus("412")}} `Precondition Failed`
- [W3C Note: Editing the Web – Detecting the Lost Update Problem Using Unreserved Checkout](https://www.w3.org/1999/04/Editing/)
