---
title: "Element : propriété ariaDescribedByElements"
short-title: ariaDescribedByElements
slug: Web/API/Element/ariaDescribedByElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

La propriété **`ariaDescribedByElements`** de l'interface {{DOMxRef("Element")}} est un tableau contenant l'élément (ou les éléments) qui fournit une description accessible pour l'élément auquel elle est appliquée.
La description accessible est similaire à l'étiquette accessible (voir {{DOMxRef("Element/ariaLabelledByElements","ariaLabelledByElements")}}), mais fournit des informations plus détaillées.

Le sujet [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) contient des informations supplémentaires sur la manière dont l'attribut et la propriété doivent être utilisés.

## Valeur

Un tableau de sous-classes de {{DOMxRef("HTMLElement")}}.
Le texte interne de ces éléments peut être joint avec des espaces pour obtenir la description accessible.

Lorsqu'elle est lue, le tableau retourné est statique et en lecture seule.
Lorsqu'elle est écrite, le tableau attribué est copié&nbsp;: les modifications ultérieures du tableau n'affectent pas la valeur de la propriété.

## Description

La propriété est une alternative flexible à l'utilisation de l'attribut [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) pour définir la description accessible.
Contrairement à `aria-describedby`, les éléments attribués à cette propriété n'ont pas besoin d'avoir un attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id).

La propriété reflète l'attribut [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) de l'élément lorsqu'il est défini, mais uniquement pour les valeurs de référence `id` répertoriées qui correspondent à des éléments valides dans la portée.
Si la propriété est définie, l'attribut correspondant est alors effacé.
Pour plus d'informations sur les références d'éléments réfléchis et la portée, voir [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchis) dans le guide _Réflexion des attributs_.

## Exemples

### Obtenir la description accessible

Cet exemple montre comment `ariaDescribedByElements` peut être utilisé pour obtenir la description accessible définie à l'aide de `aria-describedby`.

#### HTML

Le HTML définit deux éléments {{HTMLElement("span")}} et référence leurs identifiants dans l'attribut `aria-describedby` d'un élément {{HTMLElement("button")}}.

```html
<button aria-describedby="desc-corbeille1 desc-corbeille2">
  Déplacer vers la corbeille
</button>
…
<span id="desc-corbeille1">
  La corbeille est définitivement supprimée après 30 jours.
</span>
<span id="desc-corbeille2">Sinon&nbsp;!</span>
```

```html hidden
<pre id="journal"></pre>
```

#### CSS

Ici nous allons simplement masquer les éléments `<span>` qui contiennent notre texte accessible.

```css
span {
  display: none;
}
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

Le code ci-dessous enregistre d'abord la valeur de l'attribut `aria-describedby` à partir de {{DOMxRef("Element.getAttribute()")}} (une chaîne de caractères listant les valeurs `id` des éléments référencés).
Il vérifie ensuite si `ariaDescribedByElements` est pris en charge, et si c'est le cas, enregistre sa valeur.
Enfin, il retourne la chaîne de caractères accessible, calculée en parcourant les éléments retournés et en concaténant leur texte interne.

```js hidden
const elementJournal = document.querySelector("#journal");
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

```js
const elementBouton = document.querySelector("button");
journaliser(
  `aria-describedby: ${elementBouton.getAttribute("aria-describedby")}`,
);
// Test de fonctionnalité pour ariaDescribedByElements
if ("ariaDescribedByElements" in Element.prototype) {
  // Obtenir ariaDescribedByElements
  const elementsDescribes = elementBouton.ariaDescribedByElements;
  journaliser(`ariaDescribedByElements: ${elementsDescribes}`);

  // Description accessible à partir des éléments
  const texte = elementsDescribes.map((e) => e.textContent.trim()).join(" ");
  journaliser(`Description accessible : ${texte.trim()}`);
} else {
  journaliser(
    "element.ariaDescribedByElements: n'est pas pris en charge par le navigateur",
  );
}
```

#### Résultat

Le journal ci-dessous montre les références d'éléments d'origine, les éléments associés/retournés et la description accessible.

{{EmbedLiveSample("Obtenir la description accessible", "100%", 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut ARIA [`aria-describedby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby)
- La propriété {{DOMxRef("ElementInternals.ariaDescribedByElements")}}
- [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchis) dans le guide _Réflexion des attributs_
