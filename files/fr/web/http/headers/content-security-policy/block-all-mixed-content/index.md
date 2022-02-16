---
title: 'CSP: block-all-mixed-content'
slug: Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content
tags:
  - CSP
  - Content-Security-Policy
  - Directive
  - HTTP
  - Mixed Content
  - Reference
  - Security
  - Sécurité
  - block-all-mixed-content
translation_of: Web/HTTP/Headers/Content-Security-Policy/block-all-mixed-content
---
{{HTTPSidebar}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`block-all-mixed-content`** bloque le chargement de ressources via HTTP lorsque la page utilise HTTPS.

Toutes les requêtes vers des [contenus mixtes](/fr/docs/Sécurité/MixedContent) sont alors bloquées, y compris les ressources actives et passives. Cela s'applique aussi aux documents {{HTMLElement("iframe")}}, assurant que la page est complètement protégée contre les contenus mixtes.

> **Note :** La directive {{CSP("upgrade-insecure-requests")}} est évaluée avant `block-all-mixed-content`. Si elle est définie, alors `block-all-mixed-content` n'est pas nécessaire, à moins que vous souhaitiez forcer HTTPS sur les anciens navigateurs qui ne le font pas après une redirection vers HTTP.

## Syntaxe

    Content-Security-Policy: block-all-mixed-content;

## Exemples

    Content-Security-Policy: block-all-mixed-content;

    <meta http-equiv="Content-Security-Policy" content="block-all-mixed-content">

Pour interdire l'usage de HTTP de manière plus fine, vous pouvez aussi configurer individuellement chaque directive sur `https:`. Par exemple, pour interdire les images HTTP non sécurisées :

    Content-Security-Policy: img-src https:

## Spécifications

| Specification                                                                                                    | Statut                               | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ | -------------------- |
| {{specName("Mixed Content", "#block-all-mixed-content", "block-all-mixed-content")}} | {{Spec2('Mixed Content')}} | Définition initiale. |

## Compatibilités navigateurs

{{Compat("http.headers.csp.block-all-mixed-content")}}

## Voir également

- {{HTTPHeader("Content-Security-Policy")}}
- {{CSP("upgrade-insecure-requests")}}
- [Mixed content](/en-US/docs/Web/Security/Mixed_content)
