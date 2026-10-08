---
title: En-tête Server
short-title: Server
slug: Web/HTTP/Reference/Headers/Server
l10n:
  sourceCommit: 13ef67a4ffbdb929415dfa1b3d65ab1aa9ebe5da
---

{{Glossary("response header", "L'en-tête de réponse")}} HTTP **`Server`** décrit le logiciel utilisé par le serveur d'origine qui a traité la requête et généré une réponse.

Les avantages de la publicité du type et de la version du serveur par cet en-tête sont qu'elle aide à l'analyse et à l'identification de la prévalence de problèmes d'interopérabilité spécifiques.
Historiquement, les clients ont utilisé les informations sur la version du serveur pour éviter les limitations connues, telles que le support incohérent des [requêtes de plage](/fr/docs/Web/HTTP/Guides/Range_requests) dans des versions spécifiques des logiciels.

> [!WARNING]
> La présence de cet en-tête dans les réponses, en particulier lorsqu'il contient des détails d'implémentation précis sur le logiciel du serveur, peut faciliter la détection de vulnérabilités connues.

Trop de détails dans l'en-tête `Server` n'est pas conseillé pour des raisons de latence de réponse et pour la raison de sécurité mentionnée ci-dessus.
Il est discutable de savoir si masquer les informations dans cet en-tête apporte beaucoup d'avantages, car il est possible d'identifier le logiciel du serveur par d'autres moyens.
En général, une approche plus robuste de la sécurité du serveur consiste à s'assurer que le logiciel est régulièrement mis à jour ou corrigé contre les vulnérabilités connues.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'entête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Server: <product>
```

## Directives

- `<product>`
  - : Le nom du logiciel ou du produit qui a traité la requête.
    Généralement dans un format similaire à {{HTTPHeader("User-Agent")}}.

## Exemples

```http
Server: Apache/2.4.1 (Unix)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Allow")}}
- [L'observatoire HTTP](/fr/observatory)
- [Prévenir la divulgation d'informations avec les en-têtes HTTP <sup>(angl.)</sup>](https://owasp.github.io/www-project-secure-headers/best-practices/#prevent-information-disclosure-via-http-headers) - Projet de sécurité des en-têtes OWASP
