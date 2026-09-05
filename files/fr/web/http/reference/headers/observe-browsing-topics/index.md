---
title: En-tête Observe-Browsing-Topics
short-title: Observe-Browsing-Topics
slug: Web/HTTP/Reference/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{Non-standard_Header}}

> [!WARNING]
> Cette fonctionnalité est actuellement contestée par deux éditeurs de navigateurs. Voir la section [Positions des standards](/fr/docs/Web/API/Topics_API#standards_positions) pour les détails de l'opposition.

{{Glossary("response header", "L'en‑tête de réponse")}} HTTP **`Observe-Browsing-Topics`** sert à marquer comme observés des sujets d'intérêt déduits de l'URL du site appelant (c'est-à-dire le site dans lequel la technologie publicitaire est intégrée avec un {{HTMLElement("iframe")}}) dans la réponse à une requête générée par une fonction qui active l'API Topics. Le navigateur utilise ensuite ces sujets pour calculer les sujets principaux pour l'utilisateur·ice courant·e lors des époques suivantes.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en‑tête</th>
      <td>{{Glossary("Response header", "En‑tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Observe-Browsing-Topics: ?1
```

### Directives

- `?1`
  - : Une séquence de caractères déclarant que des sujets d'intérêt déduits de l'URL du site appelant (c'est-à-dire le site où le `<iframe>` de la technologie publicitaire est intégré) sont marqués comme observés. Le navigateur utilise ensuite ces sujets pour calculer les sujets d'intérêt d'un·e utilisateur·ice pour les époques futures.

## Spécifications

Cette fonctionnalité ne fait pas partie d'une norme officielle, bien qu'elle soit définie dans le [Brouillon de proposition non officiel de l'API Topics <sup>(angl.)</sup>](https://patcg-individual-drafts.github.io/topics/).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Topics](/fr/docs/Web/API/Topics_API)
