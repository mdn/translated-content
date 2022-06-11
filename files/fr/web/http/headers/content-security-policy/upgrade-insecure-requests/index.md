---
title: 'CSP: upgrade-insecure-requests'
slug: Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Reference
  - Security
  - Sécurité
  - Upgrade
  - request
  - requête
  - upgrade-insecure-requests
translation_of: Web/HTTP/Headers/Content-Security-Policy/upgrade-insecure-requests
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`upgrade-insecure-requests`** informe l'agent utilisateur de traiter toutes les URL non sécurisées d'un site (servies avec HTTP) comme si elles avaient été remplacées par des URL sécurisées (servies avec HTTPS). Cette directive est prévue pour les sites web ayant un grand nombre d'URL non sécurisées héritées du passé et qui ont besoin d'être récrites.

> **Note :** La directive `upgrade-insecure-requests` est évaluée avant la directive {{CSP("block-all-mixed-content")}} et si cette elle est définie, cette dernière est effectivement ignorée. Il est recommendé de ne définir que l'une des deux directives mais non les deux, à moins que vous souhaitiez forcer HTTPS sur les anciens navigateurs qui ne le font pas après une redirection vers HTTP.

The `upgrade-insecure-requests` directive will not ensure that users visiting your site via links on third-party sites will be upgraded to HTTPS for the top-level navigation and thus does not replace the {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}) header, which should still be set with an appropriate `max-age` to ensure that users are not subject to SSL stripping attacks.

## Syntaxe

    Content-Security-Policy: upgrade-insecure-requests;

## Exemples

Soit cet en-tête CSP :

    Content-Security-Policy: upgrade-insecure-requests;

Et cette balise meta :

```html
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```

Avec cet en-tête défini sur le domaine example.com voulant migrer d'HTTP à HTTPS, les requêtes pour des ressources non sécurisées et non navigationnelles sont automatiquement converties (qu'elles soient internes ou externes).

```html
<img src="http://example.com/image.png">
<img src="http://not-example.com/image.png">
```

Ces URL seront récrites avant que la requête soit envoyée, signifiant qu'aucune requête non sécurisée ne sera envoyée. Notez que si la ressource demandée n'est pas actuellement disponible via HTTPS, la requête échouera sans se rabattre sur HTTP.

```html
<img src="https://example.com/image.png">
<img src="https://not-example.com/image.png">
```

Les conversions navigationnelles vers des ressources externes amènent un risque significatif de dysfonctionnement étant donné que des requêtes peuvent n'être pas converties, par exemple celles-ci :

```html
<a href="https://example.com/">Home</a>
<a href="http://not-example.com/">Home</a>
```

### Identifier des requêtes non sécurisées

À l'aide de l'en-tête {{HTTPHeader("Content-Security-Policy-Report-Only")}} et de la directive {{CSP("report-uri")}}, vous pouvez mettre en place une stratégie de rapportage de violations sans bloquage conjointement à une stratégie de conversion comme :

    Content-Security-Policy: upgrade-insecure-requests; default-src https:
    Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint

De cette manière, vous convertirez toujours les requêtes non sécurisées sur votre site sécurisé mais la stratégie de rapportage identifiera les requêtes non sécurisées et les rapportera à l'adresse fournie.

## Spécifications

| Spécification                                                                                                    | Statut                                               | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------- | -------------------- |
| {{specName("Upgrade Insecure Requests", "#delivery", "upgrade-insecure-requests")}} | {{Spec2('Upgrade Insecure Requests')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("http.headers.csp.Content-Security-Policy.upgrade-insecure-requests")}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Upgrade-Insecure-Requests")}} header
- {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}) header
- {{CSP("block-all-mixed-content")}}
- [Mixed content](/en-US/docs/Web/Security/Mixed_content)
