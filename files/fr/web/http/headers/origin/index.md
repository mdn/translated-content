---
title: Origin
slug: Web/HTTP/Headers/Origin
l10n:
  sourceCommit: 7fa992e30717e0b46b87385f16e174bcc36f45e3
---

{{HTTPSidebar}}

L'en-tête de requête **`Origin`** indique [l'origine](/fr/docs/Glossary/Origin) (c'est-à-dire le schéma, le nom d'hôte et le port) qui a _déclenché_ la requête.
Ainsi, si un agent utilisateur doit demander les ressources incluses dans une page ou récupérer les scripts exécutés sur cette page, l'origine de la page courante peut alors être incluse dans la requête.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td><a href="/fr/docs/Glossary/Request_header">En-tête de requête</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="/fr/docs/Glossary/Forbidden_header_name">Nom d'en-tête interdit</a></th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Origin: null
Origin: <schema>://<nomhote>
Origin: <schema>://<nomhote>:<port>
```

## Directives

- `null`
  - : L'origine doit être protégée pour des raisons de confidentialité ou il s'agit d'une _origine opaque_, telle que définie par la spécification HTML (les cas correspondants sont décrits dans la section [description](#description) ci-après).
- `<schema>`
  - : Le protocole utilisé. Il s'agit généralement de HTTP ou de HTTPS.
- `<nomhote>`
  - : Le nom de domaine ou l'adresse IP du serveur d'origine.
- `<port>` {{optional_inline}}
  - : Le numéro de port sur lequel écoute le serveur. Si aucun port n'est donné, c'est le port par défaut pour le protocole correspondant qui est utilisé (par exemple `443` pour une URL qui utiliserait le protocole HTTPS).

## Description

L'en-tête `Origin` est semblable à l'en-tête [`Referer`](/fr/docs/Web/HTTP/Headers/Referer), mais ne contient pas le chemin de la ressource et peut valoir `null`. On l'utilise pour fournir le «&nbsp;contexte de sécurité&nbsp;» de la requête d'origine, sauf dans les cas où l'information de l'origine est superflue ou sensible pour des questions de vie privée.

Au sens large, les agents utilisateurs envoient l'en-tête `Origin` avec les requêtes&nbsp;:

- [D'origines multiples](/fr/docs/Glossary/CORS) (<i lang="en">cross origin</i> en anglais).
- [De même origine](/fr/docs/Web/Security/Same-origin_policy), sauf pour les requêtes utilisant les méthodes [`GET`](/fr/docs/Web/HTTP/Methods/GET) ou [`HEAD`](/fr/docs/Web/HTTP/Methods/HEAD) (autrement dit, cet en-tête est utilisé pour les requêtes avec la méthode [`POST`](/fr/docs/Web/HTTP/Methods/POST), [`OPTIONS`](/fr/docs/Web/HTTP/Methods/OPTIONS), [`PUT`](/fr/docs/Web/HTTP/Methods/PUT), [`PATCH`](/fr/docs/Web/HTTP/Methods/PATCH), et [`DELETE`](/fr/docs/Web/HTTP/Methods/DELETE)).

Il existe certaines exceptions aux règles précédentes. Par exemple, lorsqu'une requête [`GET`](/fr/docs/Web/HTTP/Methods/GET) ou [`HEAD`](/fr/docs/Web/HTTP/Methods/HEAD) est effectuée en mode [`no-cors`](/fr/docs/Web/API/Request/mode#value), l'en-tête `Origin` ne sera pas ajouté.

L'en-tête `Origin` peut valoir `null` dans certains cas (la liste qui suit n'est pas exhaustive)&nbsp;:

- Le schéma de l'origine n'est pas `http`, `https`, `ftp`, `ws`, `wss`, ou `gopher` (y compris `blob`, `file` et `data`).
- La requête porte sur des médias d'origines multiples, par exemple via les éléments [`<img>`](/fr/docs/Web/HTML/Element/img), [`<video>`](/fr/docs/Web/HTML/Element/video) et [`<audio>`](/fr/docs/Web/HTML/Element/audio).
- Pour les documents créés via un programme à l'aide de [`createDocument()`](/fr/docs/Web/API/DOMImplementation/createDocument), ou générés à partir d'une URL `data:`, ou qui n'ont pas de contexte de navigation créateur.
- Pour les redirections entre les origines.
- Pour les éléments [`<iframe>`](/fr/docs/Web/HTML/Element/iframe) dont l'attribut `sandox` ne contient pas la valeur `allow-same-origin`.
- Pour les réponses qui sont des erreurs réseau.

> [!NOTE]
> Une liste plus détaillée de ces cas avec `null` est présentée sur Stack Overflow&nbsp;: [Quand les navigateurs envoient-ils l'en-tête `Origin`&nbsp;? Quand l'origine est-elle mise à `null`&nbsp;? (en anglais)](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)

## Exemples

```http
Origin: https://developer.mozilla.org
```

```http
Origin: https://developer.mozilla.org:80
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Host`](/fr/docs/Web/HTTP/Headers/Host)
- [`Referer`](/fr/docs/Web/HTTP/Headers/Referer)
- [Politique de même origine](/fr/docs/Web/Security/Same-origin_policy)
- [Quand les navigateurs envoient-ils l'en-tête `Origin`&nbsp;? Quand l'origine est-elle mise à `null`&nbsp;? (question Stack Overflow, en anglais)](https://stackoverflow.com/questions/42239643/when-do-browsers-send-the-origin-header-when-do-browsers-set-the-origin-to-null/42242802)
