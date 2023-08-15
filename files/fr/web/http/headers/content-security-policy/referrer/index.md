---
title: "CSP: referrer"
slug: Web/HTTP/Headers/Content-Security-Policy/referrer
---

{{HTTPSidebar}} {{deprecated_header}}

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`referrer`** spécifie des informations dans l'en-tête HTTP {{HTTPHeader("Referer")}} (avec un seul r) pour les liens externes d'une page. Cette API est dépréciée et supprimée des navigateurs.

> **Note :** Utilisez plutôt l'en-tête HTTP {{HTTPHeader("Referrer-Policy")}}.

## Syntaxe

Soit cet en-tête CSP :

```
Content-Security-Policy: referrer <referrer-policy>;
```

Où `<referrer-policy>` peut être une valeur parmi :

- "no-referrer"
  - : L'en-tête HTTP {{HTTPHeader("Referer")}} sera omise. Aucune information de référent ne sera envoyée avec les requêtes.
- "none-when-downgrade"
  - : C'est le comportement par défaut des agents d'utilisateur si la directive n'est pas spécifiée. L'origine est envoyée comme référent pour une destination a priori aussi bien sécurisée (HTTP vers HTTP ou HTTPS vers HTTPS), mais n'est pas envoyée vers une destination qui l'est moins (HTTPS vers HTTP).
- "origin"
  - : Envoie l'origine du document comme référent dans tous les cas.
    Le document `https://example.com/page.html` enverra `https://example.com/` comme référent.
- "origin-when-cross-origin" / "origin-when-crossorigin"
  - : Envoie une URL complète pour les requêtes vers la même origine, mais seulement l'origin du document dans les autres cas.
- "unsafe-url"
  - : Envoie une URL complète (excepté ses paramètres) lors de réalisation d'une requête vers la même origine ou une autre origine. Cette règle divulguera les origines et adresses des ressources protégées par TLS à des origines non sécurisées. Considérez avec précaution les conséquences de cette configuration.

## Exemples

```
Content-Security-Policy: referrer "none";
```

## Spécifications

Cette fonctionnalité ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}} header
- {{HTTPHeader("Referer")}} header
