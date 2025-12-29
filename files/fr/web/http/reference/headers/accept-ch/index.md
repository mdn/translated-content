---
title: En-tête Accept-CH
short-title: Accept-CH
slug: Web/HTTP/Reference/Headers/Accept-CH
l10n:
  sourceCommit: 013f3148c4e85038bd961c984e357da703d315e3
---

{{SecureContext_Header}}

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Accept-CH`** peut être défini par un serveur pour indiquer quels en-têtes de [suggestion client](/fr/docs/Web/HTTP/Guides/Client_hints) doivent être inclus par le client dans les requêtes suivantes.
Pour garantir que les suggestions client sont envoyées de manière fiable, l'en-tête `Accept-CH` doit être conservé pour toutes les requêtes sécurisées.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "En-tête de réponse sûr pour le CORS")}}
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Accept-CH: <client-hints-headers>

// En-têtes de suggestion client séparés par des virgules
Accept-CH: <ch-header-one>, <ch-header-two>
```

## Exemples

### En-têtes de réponse de suggestion client

Les en-têtes de réponse suivants indiquent que le serveur accepte `Sec-CH-Viewport-Width` et `Sec-CH-Width` comme [suggestions client de l'appareil](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_lappareil) dans les requêtes suivantes.
L'en-tête {{HTTPHeader("Vary")}} indique quelles valeurs ont été utilisées pour [faire varier la réponse](/fr/docs/Web/HTTP/Guides/Client_hints#mise_en_cache_et_indications_du_client) en fonction des suggestions client acceptées.

```http
Accept-CH: Sec-CH-Viewport-Width, Sec-CH-Width
Vary: Sec-CH-Viewport-Width, Sec-CH-Width
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête HTTP {{HTTPHeader("Vary")}}
