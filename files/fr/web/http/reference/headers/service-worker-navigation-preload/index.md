---
title: En-tête Service-Worker-Navigation-Preload
short-title: Service-Worker-Navigation-Preload
slug: Web/HTTP/Reference/Headers/Service-Worker-Navigation-Preload
l10n:
  sourceCommit: f0179562ad8e2a4dd1f0916c529792198d7e06b2
---

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Service-Worker-Navigation-Preload`** indique que la requête est le résultat d'une opération {{DOMxRef("Window/fetch", "fetch()")}} effectuée lors du préchargement de la navigation du <i lang="en">service worker</i>.
Il permet à un serveur de répondre avec une ressource différente de celle d'un `fetch()` normal.

Si une réponse différente peut résulter de la définition de cet en-tête, le serveur doit inclure un en-tête {{HTTPHeader("Vary", "Vary: Service-Worker-Navigation-Preload")}} dans les réponses afin de garantir que différentes réponses sont mises en cache.

Pour plus d'informations, voir {{DOMxRef("NavigationPreloadManager.setHeaderValue()")}} (et {{DOMxRef("NavigationPreloadManager")}}).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Request header", "En-tête de requête")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Service-Worker-Navigation-Preload: <value>
```

## Directives

- `<value>`
  - : Une valeur arbitraire qui indique quelles données doivent être envoyées dans la réponse à la requête de préchargement.
    La valeur par défaut est `true`.
    Elle peut être définie sur toute autre chaîne de caractères dans le <i lang="en">service worker</i>, en utilisant {{DOMxRef("NavigationPreloadManager.setHeaderValue()")}}.

## Exemples

### En-têtes de préchargement de navigation du service worker

L'en-tête de requête suivant est envoyé par défaut dans les requêtes de préchargement de navigation&nbsp;:

```http
Service-Worker-Navigation-Preload: true
```

Le <i lang="en">service worker</i> peut définir une valeur d'en-tête différente en utilisant {{DOMxRef("NavigationPreloadManager.setHeaderValue()")}}.
Par exemple, afin de demander qu'un fragment de la ressource demandée soit retourné au format JSON, la valeur peut être définie avec la chaîne de caractères `json_fragment1`.

```http
Service-Worker-Navigation-Preload: json_fragment1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Mise en cache HTTP&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et l'en-tête {{HTTPHeader("Vary")}}
- [L'API Service worker](/fr/docs/Web/API/Service_Worker_API)
