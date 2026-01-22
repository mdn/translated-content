---
title: "HTMLElement : propriété lang"
short-title: lang
slug: Web/API/HTMLElement/lang
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

{{APIRef("HTML DOM")}}

La propriété **`lang`** de l'interface {{DOMxRef("HTMLElement")}} indique la langue de base des valeurs d'attribut et du contenu textuel d'un élément, sous la forme d'une {{Glossary("BCP 47 language tag", "étiquette de langue BCP 47")}}. Elle reflète l'attribut [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang) de l'élément&nbsp;; l'attribut `xml:lang` n'a aucun effet sur cette propriété.

Notez que si l'attribut `lang` n'est pas précisé, l'élément peut tout de même hériter de la langue de son parent. Cependant, cette langue héritée n'est pas reflétée par la valeur de cette propriété.

## Valeur

Une chaîne de caractères. Les exemples courants sont «&nbsp;en&nbsp;» pour anglais, «&nbsp;ja&nbsp;» pour japonais, «&nbsp;es&nbsp;» pour espagnol, etc. Si non précisé, la valeur est une chaîne vide.

## Exemples

```js
// ce bout de code compare la langue de base et
// redirige vers une autre URL suivant la langue
if (document.documentElement.lang === "en") {
  window.location.href = "Some_document.html.en";
} else if (document.documentElement.lang === "ru") {
  window.location.href = "Some_document.html.ru";
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
