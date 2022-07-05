---
title: tabs.moveInSuccession()
slug: Mozilla/Add-ons/WebExtensions/API/tabs/moveInSuccession
tags:
  - API
  - Add-ons
  - Extensions
  - Method
  - Reference
  - WebExtensions
  - onglets
  - tabs
translation_of: Mozilla/Add-ons/WebExtensions/API/tabs/moveInSuccession
---
{{AddonSidebar()}}

Modifie la relation de succession pour un groupe d'onglets.

Using the {{WebExtAPIRef('tabs')}} API, a tab can be assigned a _successor_ tab in the same window. If tab B is the successor of tab A, and tab A is closed while it is the active tab, tab B will be activated next. If tab A doesn't have a successor, then the browser is free to determine which tab to activate next. If tab B is the successor of tab A, then tab A is called a _predecessor_ of tab B. A tab can have at most one successor, but it can have any number of predecessors. A tab cannot take itself or a tab in a different window as a successor.

All tabs start out with no successor; tabs only get a successor if assigned one by a WebExtension. However, the browser must not orphan a tab in a succession relationship with other tabs, if possible: if tab B is the successor of tab A, and tab C is the successor of tab B, and B is closed (or moved to another window), then tab A will take tab C as its successor. Preventing C from being orphaned in this way is called _moving a tab_ (B) _from its line of succession_.

`tabs.moveInSuccession()` takes an array of tab IDs, and moves all of those tabs from their lines of succession. It then makes each tab the successor of the previous tab in the array, forming a chain. It can optionally set the successor of the last tab in the chain to an anchor tab, which is _not_ moved from its line of succession. Additional options can control whether the tab chain is "prepended" or "appended" to the anchor tab, and whether the operation acts like a linked-list insert.

While the successor tab can be assigned with {{WebExtAPIRef('tabs.update()')}}, it is often desirable to use `tabs.moveInSuccession()` to change successors, even if only a single tab is having its successor assigned. The difference is that `browser.tabs.moveInSuccession([a], b)` moves tab `a` from its line of succession, so any predecessors of `a` will adopt `a`'s previous successor; whereas if `browser.tabs.update(a, {successorTabId: b})` is used instead, tab `a` may continue to be the successor of other tabs, which could be unexpected. Another advantage of `tabs.moveInSuccession()` is that all of the succession changes happen atomically, without having to worry about races between calls to {{WebExtAPIRef('tabs.update()')}} and {{WebExtAPIRef('tabs.get()')}} and other operations like the user closing a tab.

## Syntaxe

```js
browser.tabs.moveInSuccession([1, 3, 5, 7, 2, 9], 4, {insert:true})
```

### Paramètres

- `tabIds`
  - : `array` of `integer`. Un tableau d'`ID`s. L'ordre des éléments dans le tableau définit la relation des onglets. Tout `ID` d'onglet invalide, ou l'`ID` d'onglet correspondant à des onglets qui ne sont pas dans la même fenêtre que `tabId` (ou le premier onglet du tableau, si  `tabId` est omis), sera ignoré - ils conserveront leurs successeurs et prédécesseurs actuels.
- `tabId` {{optional_inline}}
  - : `integer.` L'`ID` de l'onglet qui succédera au dernier onglet du tableau `tabIds`. Si cet `ID` est invalide ou {{WebExtAPIRef('tabs.TAB_ID_NONE')}}, le dernier onglet n'aura pas de successeur. Par défaut {{WebExtAPIRef('tabs.TAB_ID_NONE')}}.
- `options` {{optional_inline}}

  - : `object`.

    - `append` {{optional_inline}}
      - : `boolean`. Détermine s'il faut déplacer les onglets dans les `tabIds` avant ou après `tabId` dans la succession. Si `false`, les onglets sont déplacés avant `tabId`, si `true`, les onglets sont déplacés après `tabId`. Par défaut à `false`.
    - `insert` {{optional_inline}}
      - : `boolean`. Détermine s'il faut lier les prédécesseurs ou successeurs actuels (selon `options.append`) de `tabId`à l'autre côté de la chaîne après son ajout ou son ajout. Si true, l'un des événements suivants se produit : si `options.append` est `false`, le premier onglet du tableau est défini comme successeur de tout prédécesseur actuel de  `tabId`; Si `options.append` est `true`, le successeur actuel de tabId est défini comme le successeur du dernier onglet du tableau. La valeur par défaut est `false`.

## Compatibilité du navigateur

{{Compat("webextensions.api.tabs.moveInSuccession", 10)}}
