---
title: En-tête Device-Memory
short-title: Device-Memory
slug: Web/HTTP/Reference/Headers/Device-Memory
l10n:
  sourceCommit: b304d8d3c870fba028df550a51f5b4258ab3ac08
---

{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> L'en-tête `Device-Memory` a été standardisé sous le nom {{HTTPHeader("Sec-CH-Device-Memory")}} et ce nouveau nom est désormais privilégié.

L'{{Glossary("request header", "en-tête de requête")}} HTTP **`Device-Memory`** est utilisé dans les [indications client pour les appareils](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_lappareil) pour indiquer la quantité approximative de mémoire RAM disponible sur l'appareil client, en gigaoctets.
L'en-tête fait partie de {{DOMxRef("Device Memory API", "l'API Device Memory", "", "nocode")}}.

Les indications client ne sont accessibles que sur des origines sécurisées.
Un serveur doit activer la réception de l'en-tête `Device-Memory` envoyé par le client, en envoyant d'abord l'en-tête de réponse {{HTTPHeader("Accept-CH")}}.
Les serveurs qui activent l'indication client `Device-Memory` la spécifient généralement aussi dans l'en-tête {{HTTPHeader("Vary")}} pour informer les caches que le serveur peut envoyer différentes réponses selon la valeur de l'en-tête dans une requête.

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
Device-Memory: <number>
```

## Directives

- `<number>`
  - : Quantité approximative de mémoire RAM de l'appareil.

    La quantité de mémoire RAM de l'appareil peut être utilisée comme une variable de {{Glossary("fingerprinting", "prise d'empreinte")}}, donc les valeurs de l'en-tête sont volontairement grossières pour réduire le risque d'utilisation abusive.
    Les valeurs ne sont rapportées qu'en puissances de deux, et sont limitées à une valeur minimale et maximale définie par l'implémentation.
    Ces bornes peuvent évoluer au fil du temps (voir [tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs)).

    Par exemple, si un navigateur ne rapporte pas en dessous de `2` ou au-dessus de `32`, alors la valeur sera l'une des suivantes&nbsp;: `2`, `4`, `8`, `16`, `32`.

## Exemples

Le serveur doit d'abord activer la réception de l'en-tête `Device-Memory` en envoyant l'en-tête de réponse {{HTTPHeader("Accept-CH")}} contenant `Device-Memory`&nbsp;:

```http
Accept-CH: Device-Memory
```

Ensuite, lors des requêtes suivantes, le client peut renvoyer l'en-tête `Device-Memory`&nbsp;:

```http
Device-Memory: 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience des développeur·euse·s avec les indications client User-Agent](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints?hl=fr)
- {{DOMxRef("Device Memory API", "L'API Device Memory", "", "nocode")}}
- La propriété API {{DOMxRef("Navigator.deviceMemory")}}
- La propriété API {{DOMxRef("WorkerNavigator.deviceMemory")}}
- Indications client pour les appareils et images adaptatives&nbsp;:
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Sec-CH-Width")}}
  - {{HTTPHeader("DPR")}} {{Deprecated_Inline}}
  - {{HTTPHeader("Content-DPR")}} {{Deprecated_Inline}}
  - {{HTTPHeader("Viewport-Width")}} {{Deprecated_Inline}}
  - {{HTTPHeader("Width")}} {{Deprecated_Inline}}
- L'en-tête {{HTTPHeader("Accept-CH")}}
- [Mise en cache HTTP&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et {{HTTPHeader("Vary")}}
