---
title: "HTMLLabelElement : propriété control"
short-title: control
slug: Web/API/HTMLLabelElement/control
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`control`** de l'interface {{DOMxRef("HTMLLabelElement")}} retourne une référence vers le contrôle (sous la forme d'un objet de type {{DOMxRef("HTMLElement")}} ou l'un de ses dérivés) auquel l'élément HTML {{HTMLElement("label")}} est associé, ou `null` si le libellé n'est associé à aucun contrôle.

## Valeur

Un objet dérivé de {{DOMxRef("HTMLElement")}} représentant le contrôle auquel le {{HTMLElement("label")}} est associé, ou `null` si le libellé est seul.

> [!NOTE]
> Si cette propriété a une valeur et que {{DOMxRef("HTMLLabelElement.htmlFor")}} a une valeur, la propriété {{DOMxRef("HTMLLabelElement.htmlFor")}} doit référencer le même contrôle.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLLabelElement")}}
- L'interface {{DOMxRef("HTMLElement")}}
- L'élément HTML {{HTMLElement("label")}}
- [Guide des formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
