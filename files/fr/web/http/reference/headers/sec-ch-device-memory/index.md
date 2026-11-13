---
title: En-tête Sec-CH-Device-Memory
short-title: Sec-CH-Device-Memory
slug: Web/HTTP/Reference/Headers/Sec-CH-Device-Memory
l10n:
  sourceCommit: b304d8d3c870fba028df550a51f5b4258ab3ac08
---

{{SecureContext_Header}}{{SeeCompatTable}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-CH-Device-Memory`** est utilisé dans les [indices client pour les appareils](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_lappareil) pour indiquer la quantité approximative de RAM disponible sur l'appareil client, en gigaoctets.
L'en-tête fait partie de {{DOMxRef("Device Memory API", "l'API Device Memory", "", "nocode")}}.

Les indices client ne sont accessibles que sur des origines sécurisées.
Un serveur doit s'inscrire pour recevoir l'en-tête `Sec-CH-Device-Memory` du client, en envoyant d'abord l'en-tête de réponse {{HTTPHeader("Accept-CH")}}.
Les serveurs qui s'inscrivent pour l'indice client `Sec-CH-Device-Memory` le définissent généralement également dans l'en-tête {{HTTPHeader("Vary")}} pour informer les caches que le serveur peut envoyer des réponses différentes en fonction de la valeur de l'en-tête dans une requête.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        <a href="/fr/docs/Web/HTTP/Guides/Client_hints">Indication du client</a>
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
Sec-CH-Device-Memory: <number>
```

## Directives

- `<number>`
  - : La quantité approximative de RAM disponible sur l'appareil.

    La quantité de RAM disponible sur l'appareil peut être utilisée comme une variable {{Glossary("fingerprinting", "d'empreinte numérique")}}, donc les valeurs pour l'en-tête sont intentionnellement approximatives pour réduire le potentiel de mauvaise utilisation.
    Les valeurs ne sont rapportées qu'en puissances de deux, et sont limitées à une valeur minimale et maximale définies par l'implémentation.
    Ces limites peuvent changer au fil du temps (voir [tableau de compatibilité des navigateurs](#compatibilité_des_navigateurs)).

    Par exemple, si un navigateur ne rapporte pas de valeur inférieure à `2` ou supérieure à `32`, alors la valeur est l'une des suivantes&nbsp;: `2`, `4`, `8`, `16`, `32`.

## Exemples

Le serveur doit d'abord s'inscrire pour recevoir l'en-tête `Sec-CH-Device-Memory` en envoyant l'en-tête de réponse {{HTTPHeader("Accept-CH")}} contenant `Sec-CH-Device-Memory`&nbsp;:

```http
Accept-CH: Sec-CH-Device-Memory
```

Ensuite, lors des requêtes suivantes, le client peut renvoyer l'en-tête `Sec-CH-Device-Memory`&nbsp;:

```http
Sec-CH-Device-Memory: 1
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience des développeur·euse·s avec les indications de l'agent utilisateur du client <sup>(angl.)</sup>](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- {{DOMxRef("Device Memory API", "L'API Device Memory", "", "nocode")}}
- La propriété API {{DOMxRef("Navigator.deviceMemory")}}
- La propriété API {{DOMxRef("WorkerNavigator.deviceMemory")}}
- Indications du client pour les appareils et les images responsives
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Device-Memory")}} {{Deprecated_Inline}}
- L'en-tête {{HTTPHeader("Accept-CH")}}
- [HTTP Caching&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et l'en-tête {{HTTPHeader("Vary")}}
