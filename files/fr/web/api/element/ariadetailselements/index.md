---
title: "Element : propriété ariaDetailsElements"
short-title: ariaDetailsElements
slug: Web/API/Element/ariaDetailsElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

La propriété **`ariaDetailsElements`** de l'interface {{DOMxRef("Element")}} est un tableau contenant l'élément (ou les éléments) qui fournit des détails accessibles pour l'élément auquel elle est appliquée.
Les détails accessibles sont similaires à la description accessible (voir {{DOMxRef("Element.ariaDescribedByElements", "ariaDescribedByElements")}}), mais fournissent des informations plus détaillées.

Le sujet [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) contient des informations supplémentaires sur la manière dont l'attribut et la propriété doivent être utilisés.

## Valeur

Un tableau de sous-classes de {{DOMxRef("HTMLElement")}}.
Le texte interne de ces éléments peut être joint avec des espaces pour obtenir les détails accessibles.

Lorsqu'elle est lue, le tableau retourné est statique et en lecture seule.
Lorsqu'elle est écrite, le tableau assigné est copié&nbsp;: les modifications ultérieures du tableau n'affectent pas la valeur de la propriété.

## Description

La propriété est une alternative flexible à l'utilisation de l'attribut [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) pour définir les informations de détails accessibles.
Contrairement à `aria-details`, les éléments assignés à cette propriété n'ont pas besoin d'avoir un attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id).

La propriété reflète l'attribut [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) de l'élément lorsqu'il est défini, mais uniquement pour les valeurs de référence `id` listées qui correspondent à des éléments valides dans la portée.
Si la propriété est définie, l'attribut correspondant est alors effacé.
Pour plus d'informations sur les références d'éléments réfléchis et la portée, voir [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchis) dans le guide _Réflexion des attributs_.

## Exemples

### Obtenir les détails accessibles

Cet exemple montre comment `ariaDetailsElements` peut être utilisé pour obtenir les informations définies à l'aide de l'attribut `aria-details` en HTML.

#### HTML

Le HTML définit deux éléments HTML {{HTMLElement("span")}} et référence leurs identifiants dans l'attribut `aria-details` d'un {{HTMLElement("button")}}.

```html
<button aria-details="details1 details2">Bouton texte</button>
…
<span id="details1">Détails d'information 1 à propos de l'élément.</span>
<span id="details2">Détails d'information 2 à propos de l'élément.</span>
```

```html hidden
<pre id="journal"></pre>
```

```css hidden
#journal {
  height: 70px;
  overflow-x: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

Le code ci-dessous enregistre d'abord la valeur de l'attribut `aria-details` à partir de {{DOMxRef("Element.getAttribute()")}} (une chaîne de caractères listant les valeurs `id` des éléments référencés).
Il vérifie ensuite si `ariaDetailsElements` est pris en charge, et si c'est le cas, enregistre sa valeur.
Enfin, il retourne la chaîne de caractères accessible, calculée en itérant sur les éléments retournés et en concaténant leur texte interne.

```js hidden
const elementJournal = document.querySelector("#journal");
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

```js
const elementBouton = document.querySelector("button");
journaliser(`aria-details: ${elementBouton.getAttribute("aria-details")}`);
// Test de fonctionnalité pour ariaDetailsElements
if ("ariaDetailsElements" in Element.prototype) {
  // Obtenir ariaDetailsElements
  const elementsBouton = elementBouton.ariaDetailsElements;
  journaliser(`ariaDetailsElements: ${elementsBouton}`);

  // Détails accessibles à partir de ariaDetailsElements
  const texte = elementsBouton.map((e) => e.textContent.trim()).join(" ");
  journaliser(`Détails accessibles : ${texte.trim()}`);
} else {
  journaliser(
    "element.ariaDetailsElements: n'est pas pris en charge par le navigateur",
  );
}
```

#### Résultat

Le journal ci-dessous montre les références d'éléments d'origine, les éléments associés/retournés et les détails accessibles.

{{EmbedLiveSample("Obtenir les détails accessibles", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut ARIA [`aria-details`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details)
- La propriété {{DOMxRef("ElementInternals.ariaDetailsElements")}}
- [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_d'éléments_réfléchis) dans le guide _Réflexion des attributs_.
