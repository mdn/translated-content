---
title: "Permissions-Policy : directive language-model"
short-title: language-model
slug: Web/HTTP/Reference/Headers/Permissions-Policy/language-model
l10n:
  sourceCommit: 7a2016c1eec26048dce86e8af0b2127395db7f46
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive `language-model` contrôle l'accès à [l'API Prompt](/fr/docs/Web/API/Prompt_API).

Spécifiquement, lorsque une politique définie bloque l'utilisation, la méthode statique {{DOMxRef("LanguageModel.availability_static", "LanguageModel.availability()")}} retourne `unavailable`, et toute tentative d'appel d'autres méthodes `LanguageModel` échoue avec une {{DOMxRef("DOMException")}} `NotAllowedError`.

## Syntaxe

```http
Permissions-Policy: language-model=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Politique par défaut

La liste d'autorisations par défaut pour `language-model` est `self`. Le contexte de navigation de premier niveau et les cadres intégrés de même origine ont par défaut accès à l'API Prompt.

## Exemples

### Utilisation simple

SecureCorp Inc. souhaite interdire `language-model` dans toutes les cadres intégrés inter-origines, sauf celles dont l'origine est `https://example.com`. Elle peut le faire en envoyant l'en-tête de réponse HTTP suivant pour définir une politique de permissions&nbsp;:

```http
Permissions-Policy: language-model=(self "https://example.com")
```

SecureCorp Inc. doit également inclure un attribut `{{HTMLElement("iframe#attributs","allow")}}` sur chaque élément HTML `<iframe>` où `language-model` doit être autorisé&nbsp;:

```html
<iframe src="https://example.com/blue" allow="language-model"></iframe>
```

> [!NOTE]
> La spécification de l'en-tête `Permissions-Policy` de cette manière interdit `language-model` pour d'autres origines, même si elles sont autorisées par l'attribut `allow` de l'élément `<iframe>`.

### Utiliser la politique par défaut

Si une liste d'autorisations pour `language-model` n'est pas définie par un en-tête de réponse `Permissions-Policy`, les agents utilisateurs appliquent la liste d'autorisations par défaut `self`. Dans ce mode, `language-model` est automatiquement autorisé dans le contexte de navigation de premier niveau et les cadres intégrés de même origine, mais pas dans les cadres intégrés inter-origines.

Pour autoriser `language-model` dans un cadre intégré inter-origines, incluez un attribut `{{HTMLElement("iframe#attributs","allow")}}` sur l'élément `<iframe>`&nbsp;:

```html
<iframe src="https://other.com/blue" allow="language-model"></iframe>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
