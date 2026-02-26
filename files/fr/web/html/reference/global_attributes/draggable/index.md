---
title: "Attribut HTML universel : draggable"
short-title: draggable
slug: Web/HTML/Reference/Global_attributes/draggable
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`draggable`** est un attribut {{Glossary("Enumerated", "énuméré")}} qui indique si l'élément peut être déplacé, soit par le comportement natif du navigateur, soit via [l'API HTML Drag and Drop](/fr/docs/Web/API/HTML_Drag_and_Drop_API).

L'attribut `draggable` peut être appliqué aux éléments relevant strictement de [l'espace de noms HTML](/fr/docs/Glossary/Namespace), ce qui signifie qu'il ne peut pas être appliqué aux [SVG](/fr/docs/Web/SVG).
Pour plus d'informations sur l'apparence et le rôle des déclarations d'espace de noms, voir [Introduction aux espaces de noms](/fr/docs/Web/SVG/Guides/Namespaces_crash_course).

`draggable` peut prendre les valeurs suivantes&nbsp;:

- `true`&nbsp;: l'élément peut être déplacé.
- `false`&nbsp;: l'élément ne peut pas être déplacé.

> [!WARNING]
> Cet attribut est _{{Glossary("Enumerated", "énuméré")}}_ et non _booléen_. Une valeur `true` ou `false` est obligatoire, et la forme abrégée comme `<img draggable>` est interdite. L'utilisation correcte est `<img draggable="true">`.

Si cet attribut n'est pas défini, sa valeur par défaut est `auto`, ce qui signifie que le comportement de glisser‑déposer est celui par défaut du navigateur&nbsp;: seules les sélections de texte, les images et les liens peuvent être déplacés. Pour les autres éléments, l'évènement {{DOMxRef('HTMLElement.dragstart_event', 'ondragstart')}} doit être défini pour que le glisser‑déposer fonctionne, comme montré dans cet [exemple complet](/fr/docs/Web/API/HTML_Drag_and_Drop_API/Drag_operations).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
