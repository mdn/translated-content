---
title: rel="preconnect"
slug: Web/HTML/Reference/Attributes/rel/preconnect
original_slug: Web/HTML/Attributes/rel/preconnect
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Le mot-clé **`preconnect`** pour l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Elements/link#rel) de l'élément HTML {{HTMLElement("link")}} indique au navigateur que l'utilisateur·ice aura probablement besoin de ressources provenant de l'origine de la ressource cible. Le navigateur peut donc améliorer l'expérience en initiant de manière anticipée une connexion vers cette origine. Le préconnect permet d'accélérer les chargements futurs depuis une origine donnée en réalisant à l'avance tout ou partie de l'établissement de la connexion (DNS+TCP pour HTTP, et DNS+TCP+TLS pour les origines HTTPS).

`<link rel="preconnect">` apporte un bénéfice à toute future requête HTTP inter-origine, navigation ou sous-ressource. Il n'apporte aucun avantage pour les requêtes vers la même origine, car la connexion est déjà ouverte.

Si une page doit établir des connexions avec de nombreux domaines tiers, les préconnecter tous peut être contre-productif. L'indication `<link rel="preconnect">` doit être utilisée uniquement pour les connexions les plus critiques. Pour les autres, utilisez simplement [`<link rel="dns-prefetch">`](/fr/docs/Web/HTML/Reference/Attributes/rel/dns-prefetch) pour gagner du temps sur la première étape — la résolution DNS.

## Exemples

```html
<link rel="preconnect" href="https://example.com" />
```

Vous pouvez aussi utiliser le préconnect via l'en-tête HTTP [`Link`](/fr/docs/Web/HTTP/Reference/Headers/Link), par exemple&nbsp;:

```http
Link: <https://exemple.fr>; rel="preconnect"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Chargement spéculatif](/fr/docs/Web/Performance/Guides/Speculative_loading) pour une comparaison entre `<link rel="preconnect">` et d'autres fonctionnalités d'amélioration des performances.
