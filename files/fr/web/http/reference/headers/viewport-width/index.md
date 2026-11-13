---
title: En-tête Viewport-Width
short-title: Viewport-Width
slug: Web/HTTP/Reference/Headers/Viewport-Width
l10n:
  sourceCommit: ca6052779ddca9f6d99665f12c39aa2d85d85733
---

{{SecureContext_Header}}{{Non-standard_Header}}

> [!WARNING]
> L'en-tête `Viewport-Width` a été standardisé en tant que {{HTTPHeader("Sec-CH-Viewport-Width")}} et le nouveau nom est désormais privilégié.

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Viewport-Width`** est une [indication du client sur l'appareil](/fr/docs/Web/HTTP/Guides/Client_hints) qui fournit la largeur de la zone d'affichage du client en {{Glossary("CSS pixel", "pixels CSS")}}.
La valeur est arrondie à l'entier supérieur le plus proche (c'est-à-dire la valeur plafond).

Cette indication peut être utilisée avec d'autres indications spécifiques à l'écran pour fournir des images optimisées pour une taille d'écran spécifique, ou pour omettre les ressources qui ne sont pas nécessaires pour une largeur d'écran particulière.
Si l'en-tête `Viewport-Width` apparaît plus d'une fois dans un message, la dernière occurrence est utilisée.

Un serveur doit s'inscrire pour recevoir l'en-tête `Viewport-Width` de la part du client, en envoyant l'en-tête de réponse {{HTTPHeader("Accept-CH")}}.
Les serveurs qui s'inscrivent définissent généralement également cet en-tête dans l'en-tête {{HTTPHeader("Vary")}}, qui informe les caches que le serveur peut envoyer des réponses différentes en fonction de la valeur de l'en-tête dans une requête.

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
Viewport-Width: <number>
```

## Directives

- `<number>`
  - : La largeur de la zone d'affichage de l'utilisateur·ice en {{Glossary("CSS pixel", "pixels CSS")}}, arrondie à l'entier supérieur le plus proche.

## Exemples

### Utiliser `Viewport-Width`

Un serveur doit d'abord s'inscrire pour recevoir l'en-tête `Viewport-Width` en envoyant l'en-tête de réponse {{HTTPHeader("Accept-CH")}} contenant la directive `Viewport-Width`.

```http
Accept-CH: Viewport-Width
```

Dans les requêtes suivantes, le client peut envoyer l'en-tête `Viewport-Width`&nbsp;:

```http
Viewport-Width: 320
```

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience des développeur·euse·s avec les Indications du client d'agent utilisateur <sup>(angl.)</sup>](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Appareils et indications du client pour les images adaptatives
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Width")}}
  - {{HTTPHeader("DPR")}} {{Deprecated_Inline}}
  - {{HTTPHeader("Content-DPR")}} {{Deprecated_Inline}}
  - {{HTTPHeader("Device-Memory")}} {{Deprecated_Inline}}
  - {{HTTPHeader("Width")}} {{Deprecated_Inline}}
- L'en-tête {{HTTPHeader("Accept-CH")}}
- [Mise en cache HTTP&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et l'en-tête {{HTTPHeader("Vary")}}
