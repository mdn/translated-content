---
title: "HTMLLabelElement : propriété form"
short-title: form
slug: Web/API/HTMLLabelElement/form
l10n:
  sourceCommit: 477aaf5fca949e2e0dedbfbdb626c93c0a0fea0f
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`form`** de l'interface {{DOMxRef("HTMLLabelElement")}} retourne un objet {{DOMxRef("HTMLFormElement")}} qui possède le {{DOMxRef("HTMLLabelElement.control", "control")}} associé à ce {{HTMLElement("label")}}, ou `null` si ce label n'est pas associé à un élément [étiquetable](/fr/docs/Web/HTML/Guides/Content_categories#labelable_éléments_étiquetables) [associé à un formulaire](/fr/docs/Web/HTML/Guides/Content_categories#contenu_associé_aux_formulaires) ({{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, ou [éléments personnalisés associés à un formulaire <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/custom-elements.html#form-associated-custom-element)) qui appartient à un formulaire.

Contrairement aux [éléments associés à un formulaire](/fr/docs/Web/HTML/Guides/Content_categories#contenu_associé_aux_formulaires), l'élément `<label>` n'a pas d'attribut [`form`](/fr/docs/Web/HTML/Reference/Attributes/form). Cette propriété ne reflète aucun attribut HTML, mais est simplement un raccourci pour `label.control.form`.

## Valeur

Un objet {{DOMxRef("HTMLFormElement")}} ou `null`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLLabelElement")}}
- La propriété {{DOMxRef("HTMLInputElement.form")}}
- L'interface {{DOMxRef("HTMLFormElement")}}
- L'élément HTML {{HTMLElement("label")}}
- [Guide des formulaires HTML](/fr/docs/Learn_web_development/Extensions/Forms)
