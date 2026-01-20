---
title: "Attribut HTML universel : writingsuggestions"
short-title: writingsuggestions
slug: Web/HTML/Reference/Global_attributes/writingsuggestions
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) {{Glossary("enumerated", "énuméré")}} **`writingsuggestions`** indique si les suggestions d'écriture fournies par le navigateur doivent être activées dans le cadre de l'élément ou non.

Certains navigateurs proposent des suggestions d'écriture aux utilisateur·ice·s qui saisissent du texte dans des champs éditables. Les suggestions apparaissent généralement sous forme de texte grisé positionné après le curseur, complétant la phrase de l'utilisateur·ice. Bien que cela puisse être utile, les développeur·euse·s peuvent souhaiter désactiver les suggestions d'écriture dans certains cas, par exemple lorsqu'il est proposé des suggestions spécifiques au site.

L'attribut `writingsuggestions` peut être défini sur des champs éditables tels que les éléments {{HTMLElement("input")}} ou {{HTMLElement("textarea")}}, ou sur d'autres éléments HTML pour contrôler le comportement des suggestions du navigateur sur des sections d'une page, ou sur l'ensemble de la page.

## Syntaxe

Dans les navigateurs qui les prennent en charge, les suggestions d'écriture sont activées par défaut. Pour les désactiver, définissez la valeur de l'attribut `writingsuggestions` sur `false`. Définir la valeur de l'attribut sur `true`, ou omettre la valeur, active les suggestions d'écriture.

Pour désactiver les suggestions d'écriture&nbsp;:

```html
<input type="text" writingsuggestions="false" />
```

Pour activer les suggestions d'écriture&nbsp;:

```html
<input type="text" />
<input type="text" writingsuggestions />
<input type="text" writingsuggestions="true" />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut [`autocomplete`](/fr/docs/Web/HTML/Reference/Attributes/autocomplete)
- L'attribut [`spellcheck`](/fr/docs/Web/HTML/Reference/Global_attributes/spellcheck)
- L'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable)
- L'élément {{HTMLElement("textarea")}}
- L'élément {{HTMLElement("input")}}
- L'élément {{HTMLElement("datalist")}} et l'attribut [`list`](/fr/docs/Web/HTML/Reference/Elements/input#list)
