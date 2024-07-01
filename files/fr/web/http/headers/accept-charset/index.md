---
title: Accept-Charset
slug: Web/HTTP/Headers/Accept-Charset
---

{{HTTPSidebar}}

L'en-tête HTTP de la requête **`Accept-Charset`** indique le jeu de caractères que le client est capable de comprendre. À l'aide de la [content negotiation](/fr/docs/Web/HTTP/Content_negotiation), le serveur sélectionne l'une des propositions, l'utilise et informe le client de son choix dans l'en-tête de réponse {{HTTPHeader ("Content-Type")}}. Les navigateurs ne définissent généralement pas cet en-tête car la valeur par défaut de chaque type de contenu est généralement correcte et sa transmission permettrait une empreinte digitale plus facile.

Si le serveur ne peut servir aucun jeu de caractères correspondant, il peut théoriquement renvoyer un code d'erreur {{HTTPStatus ("406")}} (non acceptable). Cependant, pour une meilleure expérience utilisateur, cela est rarement fait et le moyen le plus courant consiste à ignorer l'en-tête `Accept-Charset` dans ce cas.

> **Note :** Dans les premières versions de HTTP / 1.1, un jeu de caractères par défaut (ISO-8859-1) était défini. Ce n'est plus le cas et maintenant chaque type de contenu peut avoir sa propre valeur par défaut.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>yes</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Accept-Charset: <charset>

// Multiple types, weighted with the {{glossary("quality values", "quality value")}} syntax:
Accept-Charset: utf-8, iso-8859-1;q=0.5
```

## Les directives

- `<charset>`
  - : Un jeu de caractères comme utf-8 ou iso-8859-15.
- `*`
  - : Tout jeu de caractères non mentionné ailleurs dans l'en-tête; '\*' utilisé comme un joker.
- `;q=` (q-factor weighting)
  - : Toute valeur est placée dans un ordre de préférence exprimé à l'aide d'une valeur de qualité relative appelée _weight_.

## Examples

```
Accept-Charset: iso-8859-1

Accept-Charset: utf-8, iso-8859-1;q=0.5

Accept-Charset: utf-8, iso-8859-1;q=0.5, *;q=0.1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- HTTP [content negotiation](/fr/docs/Web/HTTP/Content_negotiation)
- Header avec le résultat de la négociation de contenu : {{HTTPHeader("Content-Type")}}
- Autres Header similaires : {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Language")}}, {{HTTPHeader("Accept")}}
