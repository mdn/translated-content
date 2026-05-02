---
title: "Permissions-Policy : directive geolocation"
short-title: geolocation
slug: Web/HTTP/Reference/Headers/Permissions-Policy/geolocation
l10n:
  sourceCommit: 63c77c01567e7f6e46955ecfc2e380198f0d835c
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`geolocation`** contrôle si le document actuel est autorisé à utiliser l'interface {{DOMxRef('Geolocation')}}.

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les appels à {{DOMxRef('Geolocation.getCurrentPosition','getCurrentPosition()')}} et {{DOMxRef('Geolocation.watchPosition','watchPosition()')}} provoquent l'invocation des fonctions de rappel, de ces fonctions, avec un code {{DOMxRef('GeolocationPositionError')}} `PERMISSION_DENIED`.

## Syntaxe

```http
Permissions-Policy: geolocation=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `geolocation` est `self`. Le contexte de navigation de niveau supérieur et les cadres intégrés de même origine sont autorisés à accéder à la fonctionnalité `geolocation` par défaut.

## Exemples

### Utilisation simple

SecureCorp Inc. souhaite désactiver `geolocation` dans tous les cadres intégrés inter-origines, sauf pour ceux dont l'origine est `https://exemple.com`. Elle peut le faire en envoyant l'en-tête de réponse HTTP suivant pour définir une politique de permissions&nbsp;:

```http
Permissions-Policy: geolocation=(self "https://exemple.com")
```

SecureCorp Inc. doit également inclure un attribut {{HTMLElement("iframe", "allow", "#attributs")}} sur chaque élément `<iframe>` où `geolocation` doit être autorisé&nbsp;:

```html
<iframe src="https://exemple.com/map" allow="geolocation"></iframe>
```

> [!NOTE]
> Définir l'en-tête `Permissions-Policy` de cette manière désactive `geolocation` pour d'autres origines, même si elles sont autorisées par l'attribut `allow` de l'élément `<iframe>`.

### Utiliser la règle par défaut

Si une liste d'autorisation pour `geolocation` n'est pas définie par un en-tête de réponse `Permissions-Policy`, les agents utilisateurs appliqueront la liste d'autorisation par défaut `self`. Dans ce mode, `geolocation` est automatiquement autorisé dans le contexte de navigation de niveau supérieur et les cadres intégrés de même origine, mais pas dans les cadres intégrés inter-origines.

Pour autoriser `geolocation` dans un cadre intégré inter-origines, incluez un attribut {{HTMLElement("iframe", "allow", "#attributs")}} sur l'élément `<iframe>`&nbsp;:

```html
<iframe src="https://autre.com/store-locator" allow="geolocation"></iframe>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
