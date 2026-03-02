---
title: En-tête Content-DPR
short-title: Content-DPR
slug: Web/HTTP/Reference/Headers/Content-DPR
l10n:
  sourceCommit: 013f3148c4e85038bd961c984e357da703d315e3
---

{{Deprecated_Header}}{{SecureContext_Header}}{{Non-standard_Header}}

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Content-DPR`** est utilisé pour confirmer le rapport de pixels de l'appareil pour une _image_ (DPR) dans les requêtes où l'indication client {{HTTPHeader("DPR")}} de l'écran a été utilisée pour sélectionner une ressource image.

> [!NOTE]
> L'en-tête `Content-DPR` a été retiré de la spécification des indications client dans le [brouillon draft-ietf-httpbis-client-hints-07 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/draft-ietf-httpbis-client-hints-07).
> La spécification [Responsive Image Client Hints <sup>(angl.)</sup>](https://wicg.github.io/responsive-image-client-hints/) propose de remplacer cet en-tête en définissant la résolution/dimensions intrinsèques dans les métadonnées EXIF.

Si l'indication client `DPR` est utilisée pour sélectionner une image, le serveur doit spécifier `Content-DPR` dans la réponse.
Si la valeur de `Content-DPR` est différente de la valeur {{HTTPHeader("DPR")}} dans la requête (c'est-à-dire que le DPR de l'image n'est pas le même que celui de l'écran), le client doit utiliser `Content-DPR` pour déterminer la taille intrinsèque de l'image et l'échelle de l'image.

Si l'en-tête `Content-DPR` apparaît plusieurs fois dans un message, la dernière occurrence est utilisée.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>
        {{Glossary("Response header", "En-tête de réponse")}},
        <a href="/fr/docs/Web/HTTP/Guides/Client_hints">Indication client</a>
      </td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden request header", "En-tête de requête interdit")}}</th>
      <td>Non</td>
    </tr>
    <tr>
      <th scope="row">
        {{Glossary("CORS-safelisted response header", "En-tête de réponse autorisé CORS")}}
      </th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Content-DPR: <number>
```

## Directives

- `<number>`
  - : Le rapport de pixels de l'appareil pour l'image, calculé selon la formule suivante&nbsp;:
    Content-DPR = _Taille de la ressource image sélectionnée_ / (_Largeur_ / _DPR_)

## Exemples

Voir l'exemple de l'en-tête [`DPR`](/fr/docs/Web/HTTP/Reference/Headers/DPR#exemples).

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Indications client pour les appareils et images adaptatives
  - {{HTTPHeader("Sec-CH-Device-Memory")}}
  - {{HTTPHeader("Sec-CH-DPR")}}
  - {{HTTPHeader("Sec-CH-Viewport-Height")}}
  - {{HTTPHeader("Sec-CH-Viewport-Width")}}
- {{HTTPHeader("Accept-CH")}}
- [Mise en cache HTTP&nbsp;: Vary](/fr/docs/Web/HTTP/Guides/Caching#vary) et {{HTTPHeader("Vary")}}
- [Améliorer la confidentialité des utilisateur·ice·s et l'expérience développeur·euse avec les indications client User-Agent](https://developer.chrome.com/docs/privacy-security/user-agent-client-hints?hl=fr) sur developer.chrome.com (2020)
