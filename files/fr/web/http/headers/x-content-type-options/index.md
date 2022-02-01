---
title: X-Content-Type-Options
slug: Web/HTTP/Headers/X-Content-Type-Options
tags:
  - En-tête HTTP
  - En-tête de réponse
  - HTTP
  - Réponse
translation_of: Web/HTTP/Headers/X-Content-Type-Options
---
L'entête **`X-Content-Type-Options`** est un marqueur utilisé par le serveur pour indiquer que les [types MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types) annoncés dans les en-têtes {{HTTPHeader("Content-Type")}} ne doivent pas être modifiés ou et suivis. Cela permet de se détacher du sniffing de type [MIME](https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_types#MIME_sniffing), ou, en d'autres termes, c'est une façon de dire que les webmasters savaient ce qu'ils faisaient.

Cet en-tête a été introduit par Microsoft dans IE 8 comme un moyen pour les webmasters de bloquer le reniflement de contenu qui se passait et pouvait transformer les types MIME non exécutables en types MIME exécutables. Depuis, d'autres navigateurs l'ont introduit, même si leurs algorithmes de reniflage MIME étaient moins agressifs.

À partir de Firefox 72, la désactivation du reniflement MIME est également appliqué aux documents de premier niveau si un {{HTTPHeader("Content-type")}} est fourni. Les pages web HTML qui sont servies avec un type MIME différent de `text/html`, peuvent alors être juste téléchargées au lieu d'êtres rendues (interprétées et affichées par le navigateur). Assurez vous de valoriser correctement ces 2 en-têtes.

Les testeurs de sécurité du site s'attendent généralement à ce que cet en-tête soit défini.

> **Note :** `X-Content-Type-Options` ne s'appliquent qu'au [blocage des demandes par `nosniff`](https://fetch.spec.whatwg.org/#should-response-to-request-be-blocked-due-to-nosniff?) pour les [destinations de demandes](https://fetch.spec.whatwg.org/#concept-request-destination) de  "`script`" et "`style`". Il permet également le [blocage en lecture croisé (CORB)](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md#what-types-of-content-are-protected-by-corb) pour les fichiers HTML, TXT, JSON, et XML (à l'exception des images SVG `image/svg+xml`).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Header type</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>Non</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    X-Content-Type-Options: nosniff

## Directives

- `nosniff`

  - : Bloque une requête si la destination de la requête est de type

    - "`style`" et le MIME n'est pas de type `text/css`, ou
    - "`script`" et le MIME n'est pas de type [JavaScript MIME type](https://html.spec.whatwg.org/multipage/scripting.html#javascript-mime-type)

    Permet le blocage de la lecture croisée pour les types MIME

    - `text/html`
    - `text/plain`
    - `text/json`, `application/json` ou tout autre type avec une extension JSON: `*/*+json`
    - `text/xml`, `application/xml` ou tout autre type avec une extension XML: `*/*+xml` (hors `image/svg+xml`)

## Caractéristiques

| Caractéristique                                                                                                              | Statut                   | Commentaire         |
| ---------------------------------------------------------------------------------------------------------------------------- | ------------------------ | ------------------- |
| {{SpecName("Fetch", "#x-content-type-options-header", "X-Content-Type-Options definition")}} | {{Spec2("Fetch")}} | Définition initiale |

## Browser compatibility

{{Compat("http.headers.X-Content-Type-Options")}}

## Voir aussi

- {{HTTPHeader("Content-Type")}}
- La [définition originale](https://blogs.msdn.microsoft.com/ie/2008/09/02/ie8-security-part-vi-beta-2-update/) de X-Content-Type-Options par Microsoft.
- L'[Outil Obserservatoire Mozilla](https://observatory.mozilla.org/) teste la configuration (y compris en-tête) des sites Web pour la sécurité et la sûreté.
- [Atténuer les attaques MIME Confusion dans Firefox.](https://blog.mozilla.org/security/2016/08/26/mitigating-mime-confusion-attacks-in-firefox/)
- [Blocage de la lecture croisée (CORB)](https://fetch.spec.whatwg.org/#corb)
- [Google Docs CORB explicatif](https://chromium.googlesource.com/chromium/src/+/master/services/network/cross_origin_read_blocking_explainer.md)
