---
title: "Permissions-Policy : directive deferred-fetch"
short-title: deferred-fetch
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch
l10n:
  sourceCommit: 8c1bc8d99fc8301fbbe874f6dcf8d41a9f4fe5fb
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`deferred-fetch`** fait partie de [l'API Fetch](/fr/docs/Web/API/Fetch_API).

Cette directive, ainsi que {{HTTPHeader("Permissions-Policy/deferred-fetch-minimal", "deferred-fetch-minimal")}}, détermine comment la limite globale de quota de 640KiB est répartie entre l'origine de niveau supérieur et ses sous-cadres inter-origines. Par défaut, l'origine de niveau supérieur se voit accorder 512KiB, et chaque sous-cadre inter-origine se voit accorder 8KiB sur les 128KiB restants. La politique de permissions `deferred-fetch` peut permettre aux origines des sous-cadres de se voir accorder un quota plus important de 64KiB sur le quota de 512KiB de l'origine de niveau supérieur, au lieu du quota minimal de 8KiB qu'elles recevraient autrement par défaut.

Voir [les quotas de `fetchLater()`](/fr/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) pour plus de détails et d'exemples.

## Syntaxe

```http
Permissions-policy: deferred-fetch=(self)
Permissions-policy: deferred-fetch=(self <url-list>)
Permissions-policy: deferred-fetch=(<url-list>)
```

- `<url-list>`
  - : Une liste d'origines séparées par des espaces (chacune étant entre guillemets) auxquelles un quota plus élevé de 64KiB est accordé, prélevé sur le quota principal du parent. Le quota de 64KiB est pris au moment de la création du sous-cadre.

Un sous-cadre inter-origine peut accorder `deferred-fetch` à l'un de ses descendants inter-origines, en déléguant l'intégralité de son quota. Cela ne fonctionne que si aucun quota n'est actuellement utilisé.

Les vérifications de la politique de permissions ne sont pas discernables des vérifications de quota. Appeler `fetchLater()` générera une `QuotaExceededError` à la fois si le quota est réellement dépassé et si le quota a été restreint pour cette origine avec une politique de permissions.

## Règle par défaut

La liste d'autorisation par défaut pour `deferred-fetch` est `self`.

## Exemples

Voir [les quotas de `fetchLater()`](/fr/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) pour plus d'exemples.

### Utiliser le quota minimal

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Un sous-cadre de `b.com` reçoit 64KiB lors de sa création, à partir de la limite de 512KiB de l'origine de niveau supérieur.
2. Un sous-cadre de `c.com` n'est pas listé et reçoit donc 8KiB lors de sa création à partir de la limite partagée de 128KiB.
3. 15 autres sous-cadres d'origines différentes reçoivent 8KiB lors de leur création (similaire à `c.com`).
4. Le sous-cadre suivant ne se voit accorder aucun quota.
5. Si l'un des sous-cadres est supprimé, ses récupérations différées seront envoyées.
6. Le sous-cadre suivant reçoit un quota de 8KiB, car un quota est à nouveau disponible.

## Révoquer complètement le quota minimal

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Un sous-cadre de `b.com` reçoit 64KiB lors de sa création.
2. Un sous-cadre de `c.com` ne reçoit aucun quota lors de sa création.
3. Le document de niveau supérieur et ses descendants de même origine peuvent utiliser jusqu'à 640KiB, mais cela est réduit à 574KiB si un sous-cadre de `b.com` est créé.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
- La méthode API {{DOMxRef("window.fetchLater()")}}
- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
