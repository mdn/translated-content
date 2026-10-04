---
title: En-tête Timing-Allow-Origin
short-title: Timing-Allow-Origin
slug: Web/HTTP/Reference/Headers/Timing-Allow-Origin
l10n:
  sourceCommit: 7f6778934020a9b5b82b4dd8ca79a99bc9950c2a
---

{{Glossary("response Header", "L'en-tête de réponse")}} HTTP **`Timing-Allow-Origin`** définit les origines qui sont autorisées à voir les valeurs des attributs récupérés avec les fonctionnalités de [l'API Resource Timing](/fr/docs/Web/API/Performance_API/Resource_timing), qui sont autrement signalées comme nulles en raison des restrictions inter-origine.

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
Timing-Allow-Origin: *
Timing-Allow-Origin: <origin>, …, <originN>
```

## Directives

- `*` (joker)
  - : Toute origine peut voir les ressources de temporisation.
- `<origin>`
  - : Définit une URI qui peut voir les ressources de temporisation. Vous pouvez définir plusieurs origines, séparées par des virgules.

## Exemples

### Utiliser `Timing-Allow-Origin`

Pour permettre à n'importe quelle ressource de voir les ressources de temporisation&nbsp;:

```http
Timing-Allow-Origin: *
```

Pour permettre à `https://developer.mozilla.org` de voir les ressources de temporisation, vous pouvez définir&nbsp;:

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Resource Timing](/fr/docs/Web/API/Performance_API/Resource_timing)
- L'en-tête {{HTTPHeader("Server-Timing")}}
- L'en-tête {{HTTPHeader("Vary")}}
