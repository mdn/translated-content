---
title: "Permissions-Policy : directive fullscreen"
short-title: fullscreen
slug: Web/HTTP/Reference/Headers/Permissions-Policy/fullscreen
l10n:
  sourceCommit: 63c77c01567e7f6e46955ecfc2e380198f0d835c
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`fullscreen`** contrôle si le document actuel est autorisé à utiliser {{DOMxRef('Element.requestFullscreen()')}}.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les appels à {{DOMxRef('Element.requestFullscreen', "requestFullscreen()")}} retournent une promesse ({{JSxRef('Promise')}}) qui sera rejetée avec une {{JSxRef('TypeError')}}.

> [!NOTE]
> Si cette directive (c'est-à-dire avec l'attribut `allow`) et l'attribut `allowfullscreen` sont présents sur un élément `<iframe>`, cette directive prend le pas.

## Syntaxe

```http
Permissions-Policy: fullscreen=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `fullscreen` est `self`. Le contexte de navigation de niveau supérieur et les cadres intégrés de même origine sont autorisés à accéder à la fonctionnalité `fullscreen` par défaut.

## Exemples

### Utilisation simple

SecureCorp Inc. souhaite interdire `fullscreen` dans tous les cadres intégrés inter-origines, sauf ceux dont l'origine est `https://exemple.com`. Elle peut le faire en envoyant l'en-tête de réponse HTTP suivant pour définir une politique de permissions&nbsp;:

```http
Permissions-Policy: fullscreen=(self "https://exemple.com")
```

SecureCorp Inc. doit également inclure un attribut {{HTMLElement("iframe", "allow", "#attributs")}} sur chaque élément `<iframe>` où `fullscreen` doit être autorisé&nbsp;:

```html
<iframe src="https://exemple.com/presentation" allow="fullscreen"></iframe>
```

> [!NOTE]
> Définir l'en-tête `Permissions-Policy` de cette manière interdit `fullscreen` pour d'autres origines, même si elles sont autorisées par l'attribut `allow` de l'élément `<iframe>`.

### Utiliser la règle par défaut

Si une liste d'autorisation pour `fullscreen` n'est pas définie par un en-tête de réponse `Permissions-Policy`, les agents utilisateurs appliqueront la liste d'autorisation par défaut `self`. Dans ce mode, `fullscreen` est automatiquement autorisé dans le contexte de navigation de niveau supérieur et les cadres intégrés de même origine, mais pas dans les cadres inter-origines.

Pour autoriser `fullscreen` dans un cadre inter-origines, incluez un attribut {{HTMLElement("iframe", "allow", "#attributs")}} sur l'élément `<iframe>`&nbsp;:

```html
<iframe src="https://autre.com/videoplayer" allow="fullscreen"></iframe>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
