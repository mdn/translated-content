---
title: En-tête Observe-Browsing-Topics
short-title: Observe-Browsing-Topics
slug: Web/HTTP/Reference/Headers/Observe-Browsing-Topics
l10n:
  sourceCommit: e936e7271df947f25184a5ba8a21445bbd4d056c
---

{{Non-standard_Header}}{{Deprecated_Header}}

> [!WARNING]
> Cette fonctionnalité est actuellement contestée par deux éditeurs de navigateurs. Voir la section [Positions des standards](/fr/docs/Web/API/Topics_API#standards_positions) pour les détails de l'opposition.

L'{{Glossary("response header", "en‑tête de réponse")}} HTTP **`Observe-Browsing-Topics`** sert à marquer comme observés des sujets d'intérêt déduits de l'URL du site appelant (c'est-à-dire le site dans lequel la technologie publicitaire est intégrée via un {{HTMLElement("iframe")}}) dans la réponse à une requête générée par une [fonction qui active l'API Topics](/fr/docs/Web/API/Topics_API/Using#quelles_fonctionnalités_de_lapi_activent_lapi_topics). Le navigateur utilisera ensuite ces sujets pour calculer les sujets principaux pour l'utilisateur courant lors des époques suivantes.

Voir [Utilisation de l'API Topics](/fr/docs/Web/API/Topics_API/Using) pour plus de détails.

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
  - : Une séquence de caractères déclarant que des sujets d'intérêt déduits de l'URL du site appelant (c'est-à-dire le site où le `<iframe>` de la technologie publicitaire est intégré) sont marqués comme observés. Le navigateur utilisera ensuite ces sujets pour calculer les sujets d'intérêt d'un·e utilisateur·ice pour les époques futures.

## Spécifications

Cette fonctionnalité ne fait pas partie d'une norme officielle, bien qu'elle soit définie dans le [Brouillon de proposition non officiel de l'API Topics <sup>(angl.)</sup>](https://patcg-individual-drafts.github.io/topics/).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Topics](/fr/docs/Web/API/Topics_API)
