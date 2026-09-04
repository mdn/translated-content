---
title: "HTMLTextAreaElement : méthode select()"
short-title: select()
slug: Web/API/HTMLTextAreaElement/select
l10n:
  sourceCommit: b921b8d779314f2098a1669d8269b36107ecfbb1
---

{{APIRef("HTML DOM")}}

La méthode **`select()`** de l'interface {{DOMxRef("HTMLTextAreaElement")}} sélectionne l'intégralité du contenu de l'élément HTML {{HTMLElement("textarea")}}. De plus, l'évènement {{DOMxRef("HTMLTextAreaElement.select_event", "select")}} est déclenché. La méthode `select()` ne prend aucun paramètre et ne retourne aucune valeur.

## Syntaxe

```js-nolint
select()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

```js
const textarea = document.getElementById("text-box");
textarea.select();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
- L'évènement {{DOMxRef("HTMLTextAreaElement/select_event", "select")}}
- L'écouteur d'évènement {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}
- Le pseudo-élément CSS {{CSSxRef("::selection")}}
