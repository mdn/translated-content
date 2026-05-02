---
title: "Permissions-Policy : directive bluetooth"
short-title: bluetooth
slug: Web/HTTP/Reference/Headers/Permissions-Policy/bluetooth
l10n:
  sourceCommit: 63c77c01567e7f6e46955ecfc2e380198f0d835c
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`bluetooth`** contrôle si le document courant est autorisé à utiliser [l'API Web Bluetooth](/fr/docs/Web/API/Web_Bluetooth_API).

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les méthodes de l'objet {{DOMxRef("Bluetooth")}} retourné par {{DOMxRef("Navigator.bluetooth")}} bloqueront l'accès&nbsp;:

- {{DOMxRef("Bluetooth.getAvailability()")}} retourne toujours une promesse ({{JSxRef("Promise")}}) résolue avec une valeur de `false`.
- {{DOMxRef("Bluetooth.getDevices()")}} rejette sa promesse ({{JSxRef("Promise")}}) retournée avec une `SecurityError` de l'objet {{DOMxRef("DOMException")}}.
- {{DOMxRef("Bluetooth.requestDevice()")}} rejette sa promesse ({{JSxRef("Promise")}}) retournée avec une `SecurityError` de l'objet {{DOMxRef("DOMException")}}.

## Syntaxe

```http
Permissions-Policy: bluetooth=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles la permission est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `bluetooth` est `self`. Le contexte de navigation de premier niveau et les cadres intégrés de même origine sont autorisés à accéder à la fonctionnalité `bluetooth` par défaut.

## Exemples

### Utilisation simple

SecureCorp Inc. souhaite interdire l'utilisation de `bluetooth` dans toutes les cadres intégrés inter-origines, sauf celles dont l'origine est `https://exemple.com`. Elle peut le faire en envoyant l'en-tête HTTP suivant pour définir une politique de permissions&nbsp;:

```http
Permissions-Policy: bluetooth=(self "https://exemple.com")
```

SecureCorp Inc. doit également inclure un attribut {{HTMLElement('iframe', 'allow', '#attributs')}} sur chaque élément `<iframe>` où `bluetooth` doit être autorisé&nbsp;:

```html
<iframe src="https://exemple.com/blue" allow="bluetooth"></iframe>
```

> [!NOTE]
> La spécification de l'en-tête `Permissions-Policy` de cette manière interdit l'utilisation de `bluetooth` pour d'autres origines, même si elles sont autorisées par l'attribut `allow` de l'élément `<iframe>`.

### Utiliser la politique par défaut

Si une liste d'autorisation pour `bluetooth` n'est pas définie par un en-tête de réponse `Permissions-Policy`, les agents utilisateurs appliqueront la liste d'autorisation par défaut `self`. Dans ce mode, `bluetooth` est automatiquement autorisé dans le contexte de navigation de premier niveau et les cadres intégrés de même origine, mais pas dans les cadres intégrés inter-origines.

Pour autoriser `bluetooth` dans un cadre intégré inter-origine, incluez un attribut {{HTMLElement('iframe','allow','#attributs')}} sur l'élément `<iframe>`&nbsp;:

```html
<iframe src="https://autre.com/blue" allow="bluetooth"></iframe>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
