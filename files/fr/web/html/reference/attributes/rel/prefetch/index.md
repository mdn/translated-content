---
title: rel="prefetch"
slug: Web/HTML/Reference/Attributes/rel/prefetch
original_slug: Web/HTML/Attributes/rel/prefetch
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Le mot-clé **`prefetch`** pour l'attribut [`rel`](/fr/docs/Web/HTML/Reference/Elements/link#rel) de l'élément {{HTMLElement("link")}} indique au navigateur que l'utilisateur·ice aura probablement besoin de la ressource cible lors de navigations futures. Le navigateur peut donc améliorer l'expérience en récupérant et en mettant en cache la ressource de façon anticipée. `<link rel="prefetch">` est utilisé pour les ressources de navigation internes au site ou pour les sous-ressources utilisées par des pages du même site.

Le résultat est conservé dans le cache HTTP sur le disque. Cela le rend utile pour précharger des sous-ressources, même si elles ne sont pas utilisées par la page courante. Vous pouvez aussi l'utiliser pour précharger le prochain document que l'utilisateur·ice est susceptible de visiter sur le site. Cependant, il faut faire attention aux en-têtes — certains en-têtes [Cache-Control](/fr/docs/Web/HTTP/Reference/Headers/Cache-Control) peuvent empêcher le préchargement (par exemple `no-cache` ou `no-store`).

> [!NOTE]
> En raison de ces limitations, il est conseillé d'utiliser l'[API Speculation Rules](/fr/docs/Web/API/Speculation_Rules_API) pour le préchargement de documents lorsque cela est possible.

`<link rel="prefetch">` est fonctionnellement équivalent à un appel {{DOMxRef("Window.fetch", "fetch()")}} avec l'option `priority: "low"`, sauf que le préchargement aura généralement une priorité encore plus faible, et la requête inclura l'en-tête [`Sec-Purpose: prefetch`](/fr/docs/Web/HTTP/Reference/Headers/Sec-Purpose). En général, les navigateurs donnent une priorité plus faible aux ressources préchargées qu'à celles préchargées via [`<link rel="preload">`](/fr/docs/Web/HTML/Reference/Attributes/rel/preload) — la page courante est plus importante que la suivante.

La requête de récupération pour une opération `prefetch` inclut l'en-tête HTTP [`Sec-Purpose: prefetch`](/fr/docs/Web/HTTP/Reference/Headers/Sec-Purpose). Un serveur peut utiliser cet en-tête pour modifier les délais d'expiration du cache ou effectuer un traitement particulier.
La requête inclut aussi l'en-tête {{HTTPHeader("Sec-Fetch-Dest")}} avec la valeur `empty`.

L'en-tête {{HTTPHeader("Accept")}} de la requête correspond à celui utilisé pour les requêtes de navigation normales. Cela permet au navigateur de retrouver les ressources mises en cache lors de la navigation.

## Exemples

### Préchargement basique

```js
<link rel="prefetch" href="main.js" />
```

### Préchargement de navigation et de sous-ressources

Le préchargement peut servir à récupérer à la fois des fichiers HTML et des sous-ressources pour une navigation future. Un cas courant est d'avoir une page d'accueil qui précharge des ressources plus «&nbsp;lourdes&nbsp;» utilisées par le reste du site.

```html
<link rel="prefetch" href="/app/style.css" />
<link rel="prefetch" href="/landing-page" />
```

### Effets du partitionnement du cache

De nombreux navigateurs mettent désormais en œuvre une forme de [partitionnement du cache](https://developer.chrome.com/blog/http-cache-partitioning?hl=fr), ce qui rend `<link rel="prefetch">` inutile pour les ressources destinées à être utilisées par différents sites principaux. Cela inclut le document principal lors d'une navigation inter-sites. Par exemple, le préchargement suivant&nbsp;:

```html
<link rel="prefetch" href="https://actu.exemple/article" />
```

Ne sera pas accessible depuis `https://agregateur.exemple/`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Chargement spéculatif](/fr/docs/Web/Performance/Guides/Speculative_loading) pour une comparaison entre `<link rel="prefetch">` et d'autres fonctionnalités d'amélioration des performances.
