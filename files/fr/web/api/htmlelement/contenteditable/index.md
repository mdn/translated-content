---
title: HTMLElement.contentEditable
slug: Web/API/HTMLElement/contentEditable
---

{{APIRef("HTML DOM")}}

La propriété **`HTMLElement.contentEditable`** est utilisée pour indiquer si un élément HTML est ou non éditable. Cet attribut peut avoir 3 valeurs&nbsp;:

- `"true"` _(vrai)_ indique que l'élément est éditable.
- `"false"` _(faux)_ indique que l'élément ne sera pas éditable.
- `"inherit"` _(hérité)_ indique que l'élément héritera de l'état editable de son parent.

Vous pouvez utiliser la propriété {{domxref("HTMLElement.isContentEditable")}} pour tester la valeur de la propriété {{domxref("Boolean")}}.

## Syntaxe

```js
editable = element.contentEditable;
element.contentEditable = "true";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Contenu editable](/fr/docs/Web/HTML/Contenu_editable)
- {{domxref("HTMLElement.isContentEditable")}}
- L'attribut global [`contenteditable`](/fr/docs/Web/HTML/Attributs_universels/contenteditable) .
