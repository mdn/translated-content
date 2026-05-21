---
title: "Permissions-Policy : directive window-management"
short-title: window-management
slug: Web/HTTP/Reference/Headers/Permissions-Policy/window-management
l10n:
  sourceCommit: ad5b5e31f81795d692e66dadb7818ba8b220ad15
---

{{SeeCompatTable}}

L'en-tête HTTP {{HTTPHeader("Permissions-Policy")}} avec la directive **`window-management`** contrôle si le document actuel est autorisé à utiliser [l'API Window Management](/fr/docs/Web/API/Window_Management_API) pour gérer les fenêtres sur plusieurs écrans.

Lorsque cette politique interdit l'utilisation de l'API&nbsp;:

- La promesse ({{JSxRef("Promise")}}) retournée par la méthode {{DOMxRef("Window.getScreenDetails()")}} est rejetée avec une exception `NotAllowedError`.
- La propriété {{DOMxRef("Screen.isExtended", "Window.screen.isExtended")}} retourne toujours `false`.

## Syntaxe

```http
Permissions-Policy: window-management=<allowlist>;
```

- `<allowlist>`
  - : Une liste d'origines pour lesquelles l'autorisation d'utiliser la fonctionnalité est accordée. Voir [`Permissions-Policy` > Syntaxe](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy#syntaxe) pour plus de détails.

## Règle par défaut

La liste d'autorisations par défaut pour `window-management` est `self`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'API Window Management](/fr/docs/Web/API/Window_Management_API)
- L'en-tête {{HTTPHeader("Permissions-Policy")}}
- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
