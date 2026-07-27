---
title: "Element : propriété ariaLabelledByElements"
short-title: ariaLabelledByElements
slug: Web/API/Element/ariaLabelledByElements
l10n:
  sourceCommit: 2f20bc484496536ba975dc33d9af4e4fb6b9413b
---

{{APIRef("DOM")}}

La propriété **`ariaLabelledByElements`** de l'interface {{DOMxRef("Element")}} est un tableau contenant l'élément (ou les éléments) qui fournit un nom accessible pour l'élément auquel elle est appliquée.

La propriété reflète [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) (dans certaines circonstances) et est également destinée à fournir une étiquette pour les éléments qui n'ont pas de méthode standard pour définir leur nom accessible.
La principale différence est que la propriété peut être utilisée pour fournir du texte de l'étiquette à partir d'éléments qui n'ont pas un `id`, et elle prend le pas sur toutes les autres méthodes de définition de l'étiquette ARIA.

## Valeur

Un tableau d'éléments.
Le texte interne de ces éléments peut être joint avec des espaces pour obtenir le nom accessible.

Lorsqu'elle est lue, le tableau retourné est statique et en lecture seule.
Lorsqu'elle est écrite, le tableau assigné est copié&nbsp;: les modifications ultérieures du tableau n'affectent pas la valeur de la propriété.

## Description

La propriété est une alternative flexible à l'utilisation de l'attribut [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) pour définir le nom accessible.
Contrairement à `aria-labelledby`, les éléments assignés à cette propriété n'ont pas besoin d'avoir un attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id).

Par exemple, cela peut être utilisé pour étiqueter un élément conteneur, tel qu'un {{HTMLElement("div")}} ou un {{HTMLElement("span")}} (à condition qu'il ait été attribué un [rôle ARIA approprié](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby#rôles_associés)).
La propriété prend le pas sur les autres mécanismes de fourniture d'un nom accessible pour les éléments, et peut donc également être utilisée pour fournir un nom aux éléments qui l'obtiendraient normalement à partir de leur contenu interne ou d'un élément associé tel qu'une étiquette.

La propriété reflète l'attribut [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) de l'élément lorsqu'il est défini, mais uniquement pour les valeurs de référence `id` répertoriées qui correspondent à des éléments valides dans la portée.
Si la propriété est définie, l'attribut correspondant est effacé.
Pour plus d'informations sur les références d'éléments réfléchis et la portée, voir [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#référence_déléments_réfléchis) dans le guide _Réflexion des attributs_.

Voir l'attributs ARIA [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) pour des informations supplémentaires sur la manière dont l'attribut et la propriété doivent être utilisés.

## Exemples

### Obtenir le nom accessible

Cet exemple montre comment `ariaLabelledByElements` peut être utilisé pour obtenir un label ARIA défini à l'aide de `aria-labelledby`.

#### HTML

Le HTML définit deux éléments HTML {{HTMLElement("span")}} et référence leurs identifiants dans l'attribut `aria-labelledby` d'un {{HTMLElement("input")}}.
Le nom accessible de l'élément `<input>` est la concaténation du texte interne des deux éléments référencés, séparés par un espace.

```html
<span id="etiquette_1">Nom de la rue</span>
<input aria-labelledby="etiquette_1 etiquette_2" />
<span id="etiquette_2">
  (juste le nom, pas «&nbsp;Rue&nbsp;» ou «&nbsp;Route&nbsp;» ou
  «&nbsp;Place&nbsp;»)
</span>
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

Le code ci-dessous enregistre d'abord la valeur de l'attribut `aria-labelledby` à partir de {{DOMxRef("Element.getAttribute()")}} (une chaîne de caractères répertoriant les valeurs `id` des éléments référencés).
Il vérifie ensuite si `ariaLabelledByElements` est pris en charge, et si c'est le cas, enregistre sa valeur.
Enfin, il retourne la chaîne de caractères accessible, calculée en parcourant les éléments et en concaténant leur texte interne.

```js hidden
const elementJournal = document.querySelector("#journal");
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

```js
const elementSaisie = document.querySelector("input");
journaliser(
  `aria-labelledby: ${elementSaisie.getAttribute("aria-labelledby")}`,
);
// Test de fonctionnalité pour ariaLabelledByElements
if ("ariaLabelledByElements" in Element.prototype) {
  // Obtenir ariaLabelledByElements
  const elementsEtiquette = elementSaisie.ariaLabelledByElements;
  journaliser(`ariaLabelledByElements: ${elementsEtiquette}`);

  // Journaliser le texte interne des éléments pour obtenir le nom accessible
  const texte = elementsEtiquette.map((e) => e.textContent.trim()).join(" ");
  journaliser(`Nom accessible: ${texte.trim()}`);
} else {
  journaliser(
    "element.ariaLabelledByElements: n'est pas pris en charge par le navigateur",
  );
}
```

#### Résultat

Le journal ci-dessous montre les références d'éléments d'origine, les éléments associés/retournés et le nom accessible.
Notez que l'exemple ne fait rien avec le texte saisi dans le `<input>` du nom de la rue.

{{EmbedLiveSample("Obtenir le nom accessible", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut ARIA [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby)
- La propriété {{DOMxRef("ElementInternals.ariaLabelledByElements")}}
- [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchis) dans le guide _Réflexion des attributs_.
