---
title: "Permissions-Policy : directive deferred-fetch-minimal"
short-title: deferred-fetch-minimal
slug: Web/HTTP/Reference/Headers/Permissions-Policy/deferred-fetch-minimal
l10n:
  sourceCommit: 8c1bc8d99fc8301fbbe874f6dcf8d41a9f4fe5fb
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`deferred-fetch-minimal`** {{HTTPHeader("Permissions-Policy")}} fait partie de [l'API Fetch](/fr/docs/Web/API/Fetch_API).

Cette directive, ainsi que {{HTTPHeader("Permissions-Policy/deferred-fetch", "deferred-fetch")}}, détermine comment la limite globale de quota de 640KiB est répartie entre l'origine de niveau supérieur et ses sous-cadres inter-origines. Par défaut, l'origine de niveau supérieur se voit accorder 512KiB, et chaque sous-cadre inter-origine se voit accorder 8KiB sur les 128KiB restants. La politique de permissions `deferred-fetch-minimal` peut également bloquer toutes les origines&nbsp;; cela réallouera la limite partagée de128 KiB au quota de niveau supérieur, lui donnant accès à la limite complète de 640KiB.

Voir [les quotas de `fetchLater()`](/fr/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) pour plus de détails et d'exemples.

## Syntaxe

```http
Permissions-policy: deferred-fetch-minimal=*
Permissions-policy: deferred-fetch-minimal=()
Permissions-policy: deferred-fetch-minimal=(self)
Permissions-policy: deferred-fetch-minimal=(<url-list>)
```

- `<url-list>`
  - : Une liste d'origines séparées par des espaces qui sont autorisées à utiliser le quota secondaire de 128KiB (avec un maximum de 8KiB par sous-cadre).

Un cadre de niveau supérieur avec la permission `deferred-fetch-minimal` définie sur `self` ou `()` ne permet pas du tout l'utilisation du quota partagé par défaut de 128KiB par les sous-cadres inter-origines. À la place, le quota de 128KiB pour les sous-cadres est ajouté à son quota normal.

## Règle par défaut

La liste d'autorisation par défaut pour `deferred-fetch-minimal` est `*`.

## Exemples

Voir [les quotas de `fetchLater()`](/fr/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) pour plus d'exemples.

### Utiliser le quota minimal

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
```

1. Un sous-cadre de `b.com` reçoit 64KiB lors de sa création, à partir de la limite de 512KiB du cadre de niveau supérieur.
2. Un sous-cadre de `c.com` n'est pas listé et reçoit donc 8KiB lors de sa création à partir de la limite partagée de 128KiB.
3. 15 autres sous-cadres reçoivent 8KiB lors de leur création (similaire à `c.com`, et un autre sous-cadre de `c.com` reçoit également un autre quota de 8KiB).
4. Le sous-cadre suivant ne se voit accorder aucun quota.
5. Si l'un des sous-cadres est supprimé, ses récupérations différées seront envoyées.
6. Le sous-cadre suivant reçoit un quota de 8KiB, car un quota est à nouveau disponible.

## Révoquer le quota minimal avec des exceptions

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=()
```

1. Un sous-cadre de `b.com` reçoit 64KiB lors de sa création.
2. Un sous-cadre de `c.com` ne reçoit aucun quota lors de sa création.
3. Le document de niveau supérieur et ses descendants de même origine peuvent utiliser jusqu'à 640KiB, mais cela est réduit à 574KiB si un sous-cadre de `b.com` est créé.

## Révoquer complètement le quota minimal sans exceptions

```http
Permissions-Policy: deferred-fetch-minimal=()
```

1. Le document de niveau supérieur et ses descendants de même origine peuvent utiliser jusqu'à 640KiB.
2. Les sous-cadres ne se voient attribuer aucun quota et ne peuvent pas utiliser `fetchLater()`.

## Restreindre le quota minimal aux origines nommées

```http
Permissions-Policy: deferred-fetch=(self "https://b.com")
Permissions-Policy: deferred-fetch-minimal=("https://c.com")
```

1. Un sous-cadre de `b.com` reçoit 64KiB lors de sa création.
2. Un sous-cadre de `c.com` reçoit 8KiB lors de sa création.
3. Un sous-cadre de `d.com` ne reçoit aucun quota lors de sa création.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Fetch](/fr/docs/Web/API/Fetch_API)
- La méthode API {{DOMxRef("window.fetchLater()")}}
- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
