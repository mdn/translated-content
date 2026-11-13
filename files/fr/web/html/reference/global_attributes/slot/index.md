---
title: "Attribut HTML universel : `slot`"
short-title: slot
slug: Web/HTML/Reference/Global_attributes/slot
l10n:
  sourceCommit: 9c70c6ff09189cad43d40e241fbd2fe67349c3c2
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`slot`** assigne un emplacement dans un [DOM d'ombre](/fr/docs/Web/API/Web_components/Using_shadow_DOM) de l'arbe d'ombre d'un élément&nbsp;: Un élément avec un attribut `slot` est assigné à un emplacement créé par l'élément {{HTMLElement("slot")}} dont la valeur de l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/slot#name) correspond à celle de l'attribut `slot`. Vous pouvez avoir plusieurs éléments assignés au même emplacement en utilisant le même nom de slot. Les éléments sans attribut `slot` sont assignés à l'emplacement non nommé, si celui-ci existe.

Pour des exemples d'application, consulter le guide [Utiliser les modèles (<i lang="en">templates</i>) et les emplacements (<i lang="en">slots</i>)](/fr/docs/Web/API/Web_components/Using_templates_and_slots).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- L'élément {{HTMLElement("slot")}}
- L'élément {{HTMLElement("template")}}
- Le pseudo-élément CSS {{CSSxRef("::slotted")}}
- Le module [de portée CSS](/fr/docs/Web/CSS/Guides/Scoping)
- [Les composants Web](/fr/docs/Web/API/Web_components)
