---
title: Accept-Language
slug: Web/HTTP/Headers/Accept-Language
---

{{HTTPSidebar}}

L'en-tête **`Accept-Language`** de la requête HTTP indique quelles sont les langues que le client est capable de comprendre, et quelle variante locale est préférée. En utilisant la [négociation de contenu](/fr-FR/docs/Web/HTTP/Content_negotiation), le serveur choisit alors l'une des propositions, l'utilise et informe le client de son choix par l'entête de réponse {{HTTPHeader("Content-Language")}}. Les navigateurs définissent les valeurs adéquates pour cet entête en fonction de la langue de leur interface utilisateur, et même si un utilisateur peut la changer, cela se produit rarement (et cela est vu d'un mauvais œil, dans la mesure où cela permet l'identification par empreinte numérique).

Cet en-tête est une indication destinée à être utilisée lorsque le serveur n'a aucun moyen de déterminer la langue d'une autre manière, comme une URL spécifique, qui est contrôlée par une décision explicite de l'utilisateur. Il est recommandé que le serveur ne passe jamais outre une décision explicite. Le contenu d'`Accept-Language` est souvent hors du contrôle de l'utilisateur (comme lors d'un voyage et de l'utilisation d'un cybercafé à l'étranger) ; l'utilisateur peut également vouloir visiter une page dans une langue que celle des paramètres régionaux de son interface utilisateur.

Si le serveur ne peut servir aucune langue qui corresponde, il peut théoriquement renvoyer un code d'erreur {{HTTPStatus ("406")}} (Not Acceptable). Mais, pour une meilleure expérience utilisateur, cela est rarement fait et la façon de faire la plus courante est d'ignorer l'en-tête `Accept-Language` dans ce cas.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("Simple header", "CORS-safelisted request-header")}}
      </th>
      <td>oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```
Accept-Language: <langue>
Accept-Language: <locale>
Accept-Language: *

// Type multiples, pondérés par la syntaxe {{glossary("quality values", "valeur de qualité")}} :
Accept-Language: fr-CH, fr;q=0.9, en;q=0.8, de;q=0.7, *;q=0.5
```

## Directives

- `<langue>`
  - : Une langue exprimée sous la forme de 2 ou 3 caractères.
- `<locale>`
  - : Une balise de langue complète. En plus de la langue elle-même, elle peut contenir des informations additionnelles après un`'-'`. L'information supplémentaire la plus courante est la variante de pays (telle que`'en-US'`) ou le type d'alphabet à utiliser (comme`'sr-Lat'`). D'autres variantes comme le type d'orthographe (`'de-DE-1996'`) ne sont pas habituellement utilisées dans le contexte de cet en-tête.
- `*`
  - : Toute langue ; `'*'` est utilisé comme un joker.
- `;q=` (pondération q-factor)
  - : Une quantité numérique donnant un ordre de préférence et qui utilise une [valeur de qualité](/fr/docs/Glossary/Quality_values) relative, appelée _poids_.

## Exemples

```
Accept-Language: de

Accept-Language: de-CH

Accept-Language: en-US,en;q=0.5
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- HTTP [négociation de contenu](/fr-FR/docs/Web/HTTP/Content_negotiation)
- En-tête avec le résultat de la négociation de contenu : {{HTTPHeader("Content-Language")}}
- Autres en-têtes similaires : {{HTTPHeader("TE")}}, {{HTTPHeader("Accept-Encoding")}}, {{HTTPHeader("Accept-Charset")}}, {{HTTPHeader("Accept")}}
