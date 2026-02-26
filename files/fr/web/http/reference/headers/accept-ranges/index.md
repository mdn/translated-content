---
title: En-tête Accept-Ranges
short-title: Accept-Ranges
slug: Web/HTTP/Reference/Headers/Accept-Ranges
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Accept-Ranges`** est utilisé par le serveur pour indiquer sa prise en charge des [requêtes de plage](/fr/docs/Web/HTTP/Guides/Range_requests), permettant aux clients de demander une partie ou plusieurs parties d'une ressource.
La valeur de cet en-tête indique l'unité qui peut être utilisée pour définir une plage.

Par exemple, une réponse avec un en-tête `Accept-Ranges` indique que le serveur est capable de _reprendre_ un téléchargement interrompu au lieu que le client doive recommencer le transfert en entier.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Accept-Ranges: <range-unit>
Accept-Ranges: none
```

## Directives

- `<range-unit>`
  - : L'unité de plage que le serveur prend en charge, bien que `bytes` soit la seule unité de plage formellement définie par {{RFC("7233")}}.
    Les unités de plage sont enregistrées dans le [registre des unités de plage HTTP <sup>(angl.)</sup>](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units).
- `none`
  - : Aucune unité de plage n'est prise en charge.
    Cela équivaut à omettre l'en-tête et est donc rarement utilisé.
    Cette valeur était utilisée dans les anciens navigateurs pour désactiver ou supprimer les boutons de pause dans le gestionnaire de téléchargement si les serveurs ne prenaient pas en charge les requêtes de plage.

## Exemples

```http
Accept-Ranges: bytes
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide sur les requêtes de plage HTTP](/fr/docs/Web/HTTP/Guides/Range_requests)
- [Guide sur les requêtes conditionnelles HTTP](/fr/docs/Web/HTTP/Guides/Conditional_requests)
- Les en-têtes de requête {{HTTPHeader("Range")}}, {{HTTPHeader("If-Range")}}
- [Registre IANA des unités de plage HTTP <sup>(angl.)</sup>](https://www.iana.org/assignments/http-parameters/http-parameters.xhtml#range-units)
