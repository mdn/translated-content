---
title: "Element : propriété ariaControlsElements"
short-title: ariaControlsElements
slug: Web/API/Element/ariaControlsElements
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("DOM")}}

La propriété **`ariaControlsElements`** de l'interface {{DOMxRef("Element")}} est un tableau contenant les éléments contrôlés par l'élément auquel elle est appliquée.
Par exemple, cela peut être défini sur une [boîte combinée](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/combobox_role) pour indiquer l'élément qu'elle affiche, ou sur une [`scrollbar`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role) pour indiquer l'ID de l'élément qu'elle contrôle.

Le sujet [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) contient des informations supplémentaires sur la manière dont l'attribut et la propriété doivent être utilisés.

## Valeur

Un tableau de sous-classes de {{DOMxRef("HTMLElement")}}, représentant les éléments contrôlés par cet élément.

Lorsqu'elle est lue, le tableau retourné est statique et en lecture seule.
Lorsqu'elle est écrite, le tableau attribué est copié&nbsp;: les modifications ultérieures du tableau n'affectent pas la valeur de la propriété.

## Description

La propriété est une alternative flexible à l'utilisation de l'attribut [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) pour définir les éléments contrôlés.
Contrairement à `aria-controls`, les éléments attribués à cette propriété n'ont pas besoin d'avoir un attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id).

La propriété reflète l'attribut [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls) lorsqu'il est défini, mais uniquement pour les valeurs de référence `id` répertoriées qui correspondent à des éléments valides dans la portée.
Si la propriété est définie, l'attribut correspondant est alors effacé.
Pour plus d'informations sur les références d'éléments réfléchis et la portée, voir [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchis) dans le guide _Réflexion des attributs_.

## Exemples

### Obtenir les éléments contrôlés

Cet exemple montre comment `ariaControlsElements` peut être utilisé pour obtenir les éléments contrôlés qui ont été définis à l'aide de `aria-controls`.

#### HTML

Le HTML définit d'abord un élément HTML {{HTMLElement("button")}} et deux éléments {{HTMLElement("div")}}, `panneau1` et `panneau2`, qu'il contrôle.
Les références aux panneaux contrôlés sont listées dans l'attribut `aria-controls` du bouton.

```html
<button
  id="boutonBascule"
  aria-controls="panneau1 panneau2"
  aria-expanded="false">
  Afficher les détails
</button>

<div class="panneau" id="panneau1" aria-hidden="true">
  <p>Panneau1 ouvert/fermé par le bouton.</p>
</div>

<div class="panneau" id="panneau2" aria-hidden="true">
  <p>Panneau2 ouvert/fermé par le bouton.</p>
</div>
```

```css
.panneau {
  display: none; /* Initialement caché */
  border: 1px solid #cccccc;
  padding: 5px;
  margin-top: 5px;
}
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

Le code configure d'abord les panneaux pour qu'ils puissent être ouverts ou cachés en fonction de l'attribut [`aria-expanded`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-expanded) du bouton.

```js hidden
const elementJournal = document.querySelector("#journal");
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

```js
const boutonBascule = document.querySelector("#boutonBascule");
const panneau1 = document.querySelector("#panneau1");
const panneau2 = document.querySelector("#panneau2");

boutonBascule.addEventListener("click", () => {
  const estEtendu = boutonBascule.getAttribute("aria-expanded") === "true";

  boutonBascule.setAttribute("aria-expanded", !estEtendu);
  panneau1.style.display = estEtendu ? "none" : "block";
  panneau1.setAttribute("aria-hidden", estEtendu); // true lorsque caché, false lorsqu'affiché.

  panneau2.style.display = estEtendu ? "none" : "block";
  panneau2.setAttribute("aria-hidden", estEtendu); // true lorsque caché, false lorsqu'affiché.
});
```

Ensuite, l'exemple obtient la valeur de l'attribut `aria-controls` avec {{DOMxRef("Element.getAttribute()")}} (une chaîne de caractères listant les valeurs `id` des éléments référencés).
Il vérifie ensuite si la propriété `ariaControlsElements` est prise en charge, et si c'est le cas, enregistre sa valeur.
Enfin, il retourne et enregistre le texte interne de chacun des éléments contrôlés.

```js
journaliser(`aria-controls: ${boutonBascule.getAttribute("aria-controls")}`);
// Test de fonctionnalité pour ariaControlsElements
if ("ariaControlsElements" in Element.prototype) {
  // Obtenir ariaControlsElements
  const elementsControles = boutonBascule.ariaControlsElements;
  journaliser(`ariaControlsElements: ${elementsControles}`);

  // Lister le texte interne de chacun des ariaControlsElements
  elementsControles.forEach((elementControle) => {
    journaliser(
      ` Texte de l'élément contrôlé : ${elementControle.textContent.trim()}`,
    );
  });
} else {
  journaliser(
    "element.ariaControlsElements: n'est pas pris en charge par le navigateur",
  );
}
```

#### Résultat

Cliquez sur le bouton ci-dessous pour afficher et masquer les panneaux.
Le journal affiche les références d'éléments d'origine, les éléments associés/retournés et le texte interne de chaque élément.

{{EmbedLiveSample("Obtenir les éléments contrôlés", "100%", 280)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut ARIA [`aria-controls`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-controls)
- La propriété {{DOMxRef("ElementInternals.ariaControlsElements")}}
- [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchis) dans le guide _Réflexion des attributs_
