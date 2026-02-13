---
title: En-tête DPR
short-title: DPR
slug: Web/HTTP/Reference/Headers/DPR
l10n:
  sourceCommit: 013f3148c4e85038bd961c984e357da703d315e3
---

{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> L'en-tête `DPR` a été standardisé sous le nom {{HTTPHeader("Sec-CH-DPR")}} et ce nouveau nom est désormais privilégié.

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`DPR`** fournit des [indications client pour les appareils](/fr/docs/Web/HTTP/Guides/Client_hints) concernant le ratio de pixels de l'appareil client (DPR).
Ce ratio correspond au nombre de pixels physiques de l'appareil pour chaque {{Glossary("CSS pixel", "pixel CSS")}}.

Cette indication est utile pour sélectionner les sources d'images qui correspondent le mieux à la densité de pixels d'un écran.
Cela est similaire au rôle joué par les descripteurs `x` dans l'attribut [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset) de `<img>`, permettant aux agents utilisateur de sélectionner une image préférée.

Si un serveur utilise l'indication `DPR` pour choisir la ressource envoyée dans une réponse, la réponse doit inclure l'en-tête {{HTTPHeader("Content-DPR")}}.
Le client doit utiliser la valeur de `Content-DPR` pour la mise en page si elle diffère de la valeur de l'en-tête `DPR` de la requête.

Si l'en-tête `DPR` apparaît plusieurs fois dans un message, la dernière occurrence est utilisée.

Les serveurs qui activent l'indication client `DPR` la spécifient généralement aussi dans l'en-tête {{HTTPHeader("Vary")}} pour informer les caches que le serveur peut envoyer différentes réponses selon la valeur de l'en-tête dans une requête.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        <a href="/fr/docs/Web/HTTP/Guides/Client_hints">indication client</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
DPR: <number>
```

## Directives

- `<number>`
  - : Le ratio de pixels de l'appareil client.

## Exemples

Le serveur doit d'abord activer la réception de l'en-tête `DPR` en envoyant l'en-tête de réponse {{HTTPHeader("Accept-CH")}} contenant la directive `DPR`&nbsp;:

```http
Accept-CH: DPR
```

Ensuite, lors des requêtes suivantes, le client peut envoyer l'en-tête `DPR` au serveur&nbsp;:

```http
DPR: 2.0
```

Si une requête avec l'en-tête `DPR` (comme ci-dessus) concerne une ressource image, alors la réponse du serveur doit inclure l'en-tête {{HTTPHeader("Content-DPR")}}&nbsp;:

```http
Content-DPR: 2.0
```

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Indications client pour les appareils et images adaptatives&nbsp;:
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Sec-CH-Width")}}
  - {{HTTPHeader("Content-DPR")}} {{Deprecated_Inline}}
  - {{HTTPHeader("Device-Memory")}} {{Deprecated_Inline}}
  - {{HTTPHeader("Viewport-Width")}} {{Deprecated_Inline}}
  - {{HTTPHeader("Width")}} {{Deprecated_Inline}}
- L'en-tête {{HTTPHeader("Accept-CH")}}
- [Mise en cache HTTP Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et {{HTTPHeader("Vary")}}
- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience des développeur·euse·s avec les indications client User-Agent](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints?hl=fr)
