---
title: overrideContext()
slug: Mozilla/Add-ons/WebExtensions/API/menus/overrideContext
tags:
  - API
  - Add-ons
  - Create
  - Extensions
  - Method
  - WebExtensions
  - contextMenus
translation_of: Mozilla/Add-ons/WebExtensions/API/menus/overrideContext
---
{{AddonSidebar}}

Masquer tous les éléments de menu par défaut de Firefox en faveur d'un menu contextuel personnalisé.

La méthode overrideContext permet d'afficher les éléments de menu correspondants de cette extension à la place du menu par défaut. Cette méthode doit être appelée à partir d'un gestionnaire d'événements DOM 'contextmenu', et ne s'applique qu'au menu qui s'ouvre après cet événement.

Pour appeler cette méthode, votre extension doit avoir la permission `menus.overrideContext`.

## Syntaxe

```js
browser.menus.overrideContext(
  contextOptions // object
)
```

### Paramètres

- `contextOptions`

  - : `object`. Options sur la façon dont les menus contextuels seront remplacés.

    - `showDefaults` {{optional_inline}}
      - : `boolean`. S'il faut également inclure les éléments de menu par défaut dans le menu.
    - `context` {{optional_inline}}
      - : `string`. Le ContextType à surcharger, pour autoriser les éléments de menu d'autres extensions dans le menu. Actuellement, seuls `'bookmark'` et `'tab'` sont supportés. `showDefaults` ne peut pas être utilisé avec cette option.
    - `bookmarkId` {{optional_inline}}
      - : `string`. Requis lorsque le contexte est `'bookmark'`. Nécessite la permission 'bookmark'.
    - `tabId` {{optional_inline}}
      - : `integer`. Requis lorsque le contexte est `'tab'`. Nécessite la permission 'tabs'.
