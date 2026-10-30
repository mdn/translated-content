---
title: En-tête Width
short-title: Width
slug: Web/HTTP/Reference/Headers/Width
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> L'en-tête `Width` a été standardisé sous le nom {{HTTPHeader("Sec-CH-Width")}} et le nouveau nom est désormais privilégié.

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Width`** est une [indication du client sur l'appareil](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_lappareil) qui indique la largeur souhaitée de la ressource en pixels physiques — la taille intrinsèque d'une image. La valeur en pixels fournie est un nombre arrondi à l'entier supérieur le plus proche (c'est-à-dire la valeur plafond).

Cette indication n'est envoyée que pour les requêtes d'images.

Cette indication permet au client de demander une ressource optimale à la fois pour l'écran et la mise en page&nbsp;: en tenant compte à la fois de la largeur de l'écran corrigée en fonction de la densité et de la taille extrinsèque de l'image dans la mise en page.

Si la largeur souhaitée de la ressource n'est pas connue au moment de la requête ou si la ressource n'a pas de largeur d'affichage, le champ d'en-tête `Width` peut être omis.
Si l'en-tête `Width` apparaît plus d'une fois dans un message, la dernière occurrence est utilisée.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Request header", "En-tête de requête")}},
        <a href="/fr/docs/Web/HTTP/Guides/Client_hints">Indications du client</a>
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
Width: <number>
```

## Directives

- `<number>`
  - : La largeur de la ressource en pixels physiques, arrondie à l'entier supérieur le plus proche.

## Exemples

Le serveur doit d'abord s'inscrire pour recevoir l'en-tête `Width` en envoyant l'en-tête de réponse {{HTTPHeader("Accept-CH")}} contenant `Width`.

```http
Accept-CH: Width
```

Dans les requêtes d'images suivantes, le client peut retourner l'en-tête `Width`&nbsp;:

```http
Width: 1920
```

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Appareils et indications du client pour les images adaptatives
  - {{HTTPHeader("Sec-CH-Width")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
- L'en-tête {{HTTPHeader("Accept-CH")}}
- [Mise en cache HTTP&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et l'en-tête {{HTTPHeader("Vary")}}
- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience des développeur·euse·s avec les Indications du client d'agent utilisateur <sup>(angl.)</sup>](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
