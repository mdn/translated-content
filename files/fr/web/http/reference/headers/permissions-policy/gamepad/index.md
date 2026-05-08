---
title: "Permissions-Policy : directive gamepad"
short-title: gamepad
slug: Web/HTTP/Reference/Headers/Permissions-Policy/gamepad
l10n:
  sourceCommit: 527d0001797dff2707921a4fb20a3441e20321d5
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`gamepad`** contrôle si le document actuel est autorisé à utiliser [l'API Gamepad](/fr/docs/Web/API/Gamepad_API).

Plus précisément, lorsqu'une politique définie bloque l'utilisation de cette fonctionnalité, les appels à {{DOMxRef('Navigator.getGamepads()')}} lèvent une `SecurityError` de l'objet {{DOMxRef('DOMException')}}. De plus, les évènements {{DOMxRef("Window.gamepadconnected_event", "gamepadconnected")}} et {{DOMxRef("Window.gamepaddisconnected_event", "gamepaddisconnected")}} ne seront pas déclenchés.

## Syntaxe

```http
Permissions-Policy: gamepad=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation est accordée pour utiliser la fonctionnalité. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisation par défaut pour `gamepad` est `*`.

## Exemples

### Exemple général

SecureCorp Inc. souhaite désactiver l'API Gamepad dans tous les contextes de navigation sauf pour sa propre origine et celles dont l'origine est `https://exemple.com`.
Elle peut le faire en envoyant l'en-tête de réponse HTTP suivant pour définir une politique de permissions&nbsp;:

```http
Permissions-Policy: gamepad=(self "https://exemple.com")
```

### Avec un élément \<iframe>

FastCorp Inc. souhaite désactiver `gamepad` pour tous les cadres enfants inter-origines, sauf pour un `<iframe>` spécifique.
Elle peut le faire en envoyant l'en-tête de réponse HTTP suivant pour définir une politique de permissions&nbsp;:

```http
Permissions-Policy: gamepad=(self)
```

Ensuite, incluez un attribut {{HTMLElement("iframe", "allow", "#attributs")}} sur l'élément `<iframe>`&nbsp;:

```html
<iframe src="https://autre.com/game" allow="gamepad"></iframe>
```

Les attributs des cadres intégrés peuvent activer sélectivement des fonctionnalités dans certains cadres, et pas dans d'autres, même si ces cadres contiennent des documents de la même origine.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
