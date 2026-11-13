---
title: En-tête Sec-CH-Viewport-Height
short-title: Sec-CH-Viewport-Height
slug: Web/HTTP/Reference/Headers/Sec-CH-Viewport-Height
l10n:
  sourceCommit: 423161782178b119c64cd0b41bff8df20dc84a56
---

{{SecureContext_Header}}{{SeeCompatTable}}

{{Glossary("request header", "L'en-tête de requête")}} HTTP **`Sec-CH-Viewport-Height`** est une [indication du client sur l'appareil](/fr/docs/Web/HTTP/Guides/Client_hints#indications_du_client_sur_lappareil) qui fournit la hauteur de la fenêtre de visualisation du client en {{Glossary("CSS pixel", "pixels CSS")}}.
La valeur est arrondie à l'entier supérieur le plus proche (c'est-à-dire la valeur plafond).

Cette indication peut être utilisée avec d'autres indications spécifiques à l'écran pour fournir des images optimisées pour une taille d'écran spécifique, ou pour omettre les ressources qui ne sont pas nécessaires pour une hauteur d'écran particulière.
Si l'en-tête `Sec-CH-Viewport-Height` apparaît plus d'une fois dans un message, la dernière occurrence est utilisée.

Un serveur doit s'inscrire pour recevoir l'en-tête `Sec-CH-Viewport-Height` de la part du client, en envoyant l'en-tête de réponse {{HTTPHeader("Accept-CH")}}.
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
Sec-CH-Viewport-Height: <number>
```

## Directives

- `<number>`
  - : La hauteur de la zone d'affichage de l'utilisateur·ice en {{Glossary("CSS pixel", "pixels CSS")}}, arrondie à l'entier supérieur le plus proche.

## Exemples

### Utiliser `Sec-CH-Viewport-Height`

Un serveur doit d'abord s'inscrire pour recevoir l'en-tête `Sec-CH-Viewport-Height` en envoyant l'en-tête de réponse {{HTTPHeader("Accept-CH")}} contenant la directive `Sec-CH-Viewport-Height`.

```http
Accept-CH: Sec-CH-Viewport-Height
```

Dans les requêtes suivantes, le client peut envoyer l'en-tête `Sec-CH-Viewport-Height`&nbsp;:

```http
Sec-CH-Viewport-Height: 480
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience des développeur·euse·s avec les indications du client de l'agent utilisateur <sup>(angl.)</sup>](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints) (developer.chrome.com)
- Indications du client pour les appareils et les images adaptatives
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
- L'en-tête {{HTTPHeader("Accept-CH")}}
- [Mise en cache HTTP&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et l'en-tête {{HTTPHeader("Vary")}}
