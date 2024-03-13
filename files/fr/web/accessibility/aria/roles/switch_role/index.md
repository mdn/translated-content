---
title: Utilisation du groupe switch
slug: Web/Accessibility/ARIA/Roles/switch_role
---

Le rôle ARIA switch est très similaire au [role checkbox](/fr/docs/Accessibilité/ARIA/Techniques_ARIA/Utiliser_le_role_checkbox), à la sémantique près — il a deux états représentant on/off, au lieu de checked/unchecked.

Extrait des [spécifications ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/#switch)&nbsp;: l'attribut `aria-checked` d'un `switch` indique si l'entrée est activée (`true`) ou désactivée (`false`). La valeur `mixed` n'est pas supportée, et les agents utilisateurs _DOIVENT_ la traiter comme équivalente à `false` pour ce rôle.
