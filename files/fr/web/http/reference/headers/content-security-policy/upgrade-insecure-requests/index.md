---
title: "Content-Security-Policy : directive upgrade-insecure-requests"
short-title: upgrade-insecure-requests
slug: Web/HTTP/Reference/Headers/Content-Security-Policy/upgrade-insecure-requests
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

La directive HTTP {{HTTPHeader("Content-Security-Policy")}} (CSP) **`upgrade-insecure-requests`** informe l'agent utilisateur de traiter toutes les URL non sécurisées d'un site (servies avec HTTP) comme si elles avaient été remplacées par des URL sécurisées (servies avec HTTPS). Cette directive est prévue pour les sites web ayant un grand nombre d'URL non sécurisées héritées du passé et qui ont besoin d'être récrites.

La directive `upgrade-insecure-requests` ne garantit pas que les utilisateur·ice·s accédant à votre site par le biais de liens sur des sites tiers verront leur connexion basculer vers HTTPS pour la navigation de premier niveau, et ne remplace donc pas l'en-tête {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}}), qui doit toujours être définie avec une valeur `max-age` appropriée afin de garantir que les utilisateur·ice·s ne soient pas exposés à des attaques de mise à nu du SSL.

## Syntaxe

```http
Content-Security-Policy: upgrade-insecure-requests;
```

## Exemples

### Utiliser l'en-tête HTTP

```http
Content-Security-Policy: upgrade-insecure-requests;
```

### Utiliser l'élément HTML `meta`

```html
<meta
  http-equiv="Content-Security-Policy"
  content="upgrade-insecure-requests" />
```

Avec cet en-tête défini sur le domaine exemple.com souhaitant migrer de HTTP vers HTTPS, les requêtes pour des ressources non sécurisées et qui ne peuvent pas avoir de navigation sécurisée sont automatiquement converties (qu'elles soient internes ou externes).

```html
<img src="http://exemple.com/image.png" />
<img src="http://hors-exemple.com/image.png" />
```

Ces URL seront réécrites avant que la requête ne soit effectuée, ce qui signifie qu'aucune requête non sécurisée n'atteindra le réseau. Notez que, si la ressource demandée n'est pas réellement disponible par HTTPS, la requête échouera sans aucun retour à HTTP.

```html
<img src="https://exemple.com/image.png" />
<img src="https://hors-exemple.com/image.png" />
```

Les mises à niveau de navigation vers des ressources tierces présentent un potentiel de rupture beaucoup plus élevé, elles ne sont donc pas mises à niveau&nbsp;:

```html
<a href="https://exemple.com/">Accueil</a>
<a href="http://hors-exemple.com/">Accueil</a>
```

### Identifier des requêtes non sécurisées

À l'aide de l'en-tête {{HTTPHeader("Content-Security-Policy-Report-Only")}} et de la directive {{CSP("report-uri")}}, vous pouvez mettre en place une stratégie de rapportage de violations sans bloquage conjointement à une stratégie de conversion comme&nbsp;:

```http
Content-Security-Policy: upgrade-insecure-requests; default-src https:
Content-Security-Policy-Report-Only: default-src https:; report-uri /endpoint
```

De cette manière, vous convertirez toujours les requêtes non sécurisées sur votre site sécurisé, mais la stratégie de rapportage identifiera les requêtes non sécurisées et les rapportera à l'adresse fournie.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- L'en-tête {{HTTPHeader("Upgrade-Insecure-Requests")}}
- L'en-tête {{HTTPHeader("Strict-Transport-Security")}} ({{Glossary("HSTS")}})
- La directive CSP {{CSP("block-all-mixed-content")}}
- [Contenu mixte](/fr/docs/Web/Security/Defenses/Mixed_content)
