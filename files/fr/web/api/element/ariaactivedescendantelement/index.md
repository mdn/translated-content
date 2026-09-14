---
title: "Element : propriété ariaActiveDescendantElement"
short-title: ariaActiveDescendantElement
slug: Web/API/Element/ariaActiveDescendantElement
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

{{APIRef("DOM")}}

La propriété **`ariaActiveDescendantElement`** de l'interface {{DOMxRef("Element")}} représente l'élément actif actuel lorsque la sélection est sur un composant [`composite`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/composite_role), [`combobox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role), [`textbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/textbox_role), [`group`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role), ou [`application`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role).

Le sujet [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) contient des informations supplémentaires sur la manière dont l'attribut et la propriété doivent être utilisés.

## Value

Une sous-classe de l'objet {{DOMxRef("HTMLElement")}} qui représente le descendant actif, ou `null` s'il n'y a pas de descendant actif.

## Description

La propriété est une alternative flexible à l'utilisation de l'attribut [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant).
Contrairement à `aria-activedescendant`, l'élément affecté à cette propriété n'a pas besoin d'avoir un attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id).

La propriété reflète l'attribut [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant) de l'élément lorsqu'il est défini, mais uniquement pour les valeurs de `id` de référence qui correspondent à des éléments valides dans la portée.
Si la propriété est définie, l'attribut correspondant est effacé.
Pour plus d'informations sur les références d'éléments réfléchis et la portée, voir [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchies) dans le guide _Réflexion des attributs_.

## Exemples

### Obtenir le descendant actif

Cet exemple montre comment utiliser `ariaActiveDescendantElement` pour obtenir le descendant actif actuel.

#### HTML

Le HTML définit une liste de boîtes de sélection pour différents types de rues, composée d'un élément HTML {{HTMLElement("div")}} avec le rôle [`listbox`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role) et des éléments `<div>` imbriqués pour chaque option.
Le descendant actif est initialement défini sur l'élément avec un `id` de `avenue` en utilisant `aria-activedescendant`.

```html
<div id="typeRue" role="listbox" aria-activedescendant="avenue">
  <div>Rue</div>
  <div id="avenue">Avenue</div>
  <div>Allée</div>
</div>
```

```html hidden
<pre id="journal"></pre>
```

```css hidden
#journal {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Le code ci-dessous vérifie d'abord si `ariaActiveDescendantElement` est pris en charge.
Si la propriété est prise en charge, le code enregistre ensuite la valeur de `aria-activedescendant` (un `id` de l'élément référencé) en utilisant {{DOMxRef("Element.getAttribute()")}}, l'élément de la propriété et le contenu textuel de l'élément.

```js hidden
const elementJournal = document.querySelector("#journal");
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

```js
// Feature test for ariaActiveDescendantElement
if ("ariaActiveDescendantElement" in Element.prototype) {
  journaliser(
    `getAttribute(): ${typeRue.getAttribute("aria-activedescendant")}`,
  );
  journaliser(
    `ariaActiveDescendantElement: ${typeRue.ariaActiveDescendantElement}`,
  );
  journaliser(
    `text: ${typeRue.ariaActiveDescendantElement?.textContent.trim()}`,
  );
} else {
  journaliser(
    "ariaActiveDescendantElement n'est pas pris en charge par le navigateur",
  );
}
```

#### Résultat

Le journal ci-dessous montre la sortie du code ci-dessus.
La valeur retournée par la propriété `aria-activedescendant` doit être `"avenue"`, l'élément associé doit être un élément `HTMLDivElement`, et le texte de cet élément doit être `Avenue`.

{{EmbedLiveSample("Obtenir le descendant actif", "100%", 190)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut ARIA [`aria-activedescendant`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-activedescendant)
- La propriété {{DOMxRef("ElementInternals.ariaActiveDescendantElement")}}
- [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchis) dans le guide _Réflexion des attributs_.
