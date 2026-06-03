---
title: En-tête Sec-CH-DPR
short-title: Sec-CH-DPR
slug: Web/HTTP/Reference/Headers/Sec-CH-DPR
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

{{SecureContext_Header}}{{SeeCompatTable}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-CH-DPR`** fournit des [indications du client pour les appareils](/fr/docs/Web/HTTP/Guides/Client_hints) concernant le ratio de pixels de l'appareil client (DPR).
Ce ratio est le nombre de pixels physiques de l'appareil correspondant à chaque {{Glossary("CSS pixel", "pixel CSS")}}.

L'indice est utile lors de la sélection des sources d'image qui correspondent le mieux à la densité de pixels d'un écran.
Cela est similaire au rôle joué par les descripteurs `x` dans l'attribut `<img>` [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset) pour permettre aux agents utilisateurs de sélectionner une image préférée.

Si l'en-tête `Sec-CH-DPR` apparaît plus d'une fois dans un message, la dernière occurrence est utilisée.

Les serveurs qui s'inscrivent pour l'indice client `Sec-CH-DPR` le définissent généralement également dans l'en-tête {{HTTPHeader("Vary")}} pour informer les caches que le serveur peut envoyer des réponses différentes en fonction de la valeur de l'en-tête dans une requête.

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
Sec-CH-DPR: <number>
```

## Directives

- `<number>`
  - : Le ratio de pixels de l'appareil client.

## Exemples

Un serveur doit d'abord s'inscrire pour recevoir l'en-tête `Sec-CH-DPR` en envoyant l'en-tête de réponse {{HTTPHeader("Accept-CH")}} contenant la directive `Sec-CH-DPR`.

```http
Accept-CH: Sec-CH-DPR
```

Ensuite, lors des requêtes suivantes, le client peut envoyer l'en-tête `Sec-CH-DPR` au serveur&nbsp;:

```http
Sec-CH-DPR: 2.0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Indications du client pour les appareils et les images réactives
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("DPR")}} {{Deprecated_Inline}}
- L'en-tête {{HTTPHeader("Accept-CH")}}
- [HTTP Caching&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et l'en-tête {{HTTPHeader("Vary")}}
- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience des développeur·euse·s avec les indications de l'agent utilisateur du client <sup>(angl.)</sup>](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) sur developer.chrome.com
