---
title: En-tête Access-Control-Allow-Origin
short-title: Access-Control-Allow-Origin
slug: Web/HTTP/Reference/Headers/Access-Control-Allow-Origin
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Access-Control-Allow-Origin`** indique si la réponse peut être partagée avec le code demandeur provenant de l'{{Glossary("origin", "origine")}} donnée.

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
Access-Control-Allow-Origin: *
Access-Control-Allow-Origin: <origin>
Access-Control-Allow-Origin: null
```

## Directives

- `*` (joker)
  - : Le code demandeur de n'importe quelle origine est autorisé à accéder à la ressource.
    Pour les requêtes _sans justificatifs_, la valeur littérale `*` peut être définie comme joker.
    Tenter d'utiliser le joker avec des justificatifs [entraîne une erreur](/fr/docs/Web/HTTP/Guides/CORS/Errors/CORSNotSupportingCredentials).
- `<origin>`
  - : Définit une seule origine. Si le serveur prend en charge des clients de plusieurs origines, il doit retourner l'origine pour le client spécifique qui fait la demande.
- `null`
  - : Définit l'origine «&nbsp;null&nbsp;».
    > [!NOTE]
    > La valeur `null` ne doit pas être utilisée. Il peut sembler sûr de retourner `Access-Control-Allow-Origin: "null"`&nbsp;; cependant, l'origine des ressources qui utilisent un schéma non hiérarchique (comme `data:` ou `file:`) et des documents isolés est sérialisée en `null`.
    > De nombreux navigateurs accorderont à ces documents l'accès à une réponse avec un en-tête `Access-Control-Allow-Origin: null`, et n'importe quelle origine peut créer un document hostile avec une origine `null`.
    > Par conséquent, la valeur `null` pour l'en-tête `Access-Control-Allow-Origin` doit être évitée.

## Exemples

Pour permettre à n'importe quelle ressource d'accéder à vos ressources, vous pouvez indiquer&nbsp;:

```http
Access-Control-Allow-Origin: *
```

Pour permettre `https://developer.mozilla.org` d'accéder à vos ressources, vous pouvez indiquer&nbsp;:

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
```

Limiter les valeurs possibles d'`Access-Control-Allow-Origin` à un ensemble d'origines autorisées nécessite du code côté serveur pour vérifier la valeur de l'en-tête de requête {{HTTPHeader("Origin")}}, la comparer à une liste d'origines autorisées, puis, si la valeur de {{HTTPHeader("Origin")}} est dans la liste, définir la valeur d'`Access-Control-Allow-Origin` sur la même valeur que celle de {{HTTPHeader("Origin")}}.

### CORS et le cache

Si le serveur envoie une réponse avec une valeur d'`Access-Control-Allow-Origin` contenant une origine explicite (plutôt que le joker `*`), la réponse doit également inclure un en-tête de réponse {{HTTPHeader("Vary")}} avec la valeur `Origin` — pour indiquer aux navigateurs que les réponses du serveur peuvent différer selon la valeur de l'en-tête de requête `Origin`.

```http
Access-Control-Allow-Origin: https://developer.mozilla.org
Vary: Origin
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Origin")}}
- L'en-tête HTTP {{HTTPHeader("Vary")}}
- [Partage de ressources entre origines (CORS)](/fr/docs/Web/HTTP/Guides/CORS)
- L'en-tête HTTP {{HTTPHeader("Cross-Origin-Resource-Policy")}}
