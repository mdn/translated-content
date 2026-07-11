---
title: "Element : propriété ariaFlowToElements"
short-title: ariaFlowToElements
slug: Web/API/Element/ariaFlowToElements
l10n:
  sourceCommit: 6bed868c7b75c4c3ca3721fa8ed6c6ad2f41262b
---

{{APIRef("DOM")}}

La propriété **`ariaFlowToElements`** de l'interface {{DOMxRef("Element")}} est un tableau contenant l'élément (ou les éléments) qui fournit un ordre de lecture alternatif du contenu, remplaçant l'ordre de lecture par défaut général à la discrétion de l'utilisateur·ice.
Si un seul élément est fourni, il s'agit de l'élément suivant dans l'ordre de lecture.
Si plusieurs éléments sont fournis, chaque élément représente un chemin possible qui doit être proposé à l'utilisateur·ice pour sélection.

Le sujet [`aria-flowto`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) contient des informations supplémentaires sur la manière dont l'attribut et la propriété doivent être utilisés.

## Valeur

Un tableau de sous-classes de {{DOMxRef("HTMLElement")}}.

Lorsqu'elle est lue, le tableau retourné est statique et en lecture seule.
Lorsqu'elle est écrite, le tableau assigné est copié&nbsp;: les modifications ultérieures du tableau n'affectent pas la valeur de la propriété.

## Description

La propriété est une alternative flexible à l'utilisation de l'attribut [`aria-flowto`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) pour définir un ordre de lecture alternatif.
Contrairement à `aria-flowto`, les éléments assignés à cette propriété n'ont pas besoin d'avoir un attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id).

La propriété reflète l'attribut [`aria-flowto`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto) de l'élément lorsqu'il est défini, mais uniquement pour les valeurs de référence `id` répertoriées qui correspondent à des éléments valides dans la portée.
Si la propriété est définie, l'attribut correspondant est alors effacé.
Pour plus d'informations sur les références d'éléments réfléchis et la portée, voir [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchis) dans le guide _Réflexion des attributs_.

## Exemples

### Obtenir le flux vers l'élément

Cet exemple montre le flux normal à travers trois éléments `section1`, `section2`, `section3` dans l'ordre, et un ordre alternatif qui saute de `section1` à `section3`, puis revient.
Notez que l'exemple est illustratif sauf si vous utilisez des outils d'accessibilité&nbsp;: nous ne suivons pas réellement ce chemin alternatif.

#### HTML

Le HTML définit trois éléments {{HTMLElement("div")}} qui définissent des sections, avec une classe `"section"`, et des valeurs `id`&nbsp;: `section1`, `section2` et `section3`.
Chaque section a un flux normal défini par son ordre, commençant par `section1` et se terminant par `section3`.
Un flux alternatif est défini dans les sections 1 et 3 en utilisant l'attribut `aria-flowto`.

```html hidden
<pre id="journal"></pre>
```

```css hidden
#journal {
  height: 200px;
  overflow: scroll;
  padding: 0.5rem;
  margin: 5px;
  border: 1px solid black;
}
```

```html
<div id="section1" class="section" aria-flowto="section3">
  <h2>Section 1</h2>
  <p>
    Première section dans le flux normal. La section 3 est un flux alternatif.
  </p>
  <a href="#section2">Aller à la section 2 (flux normal)</a>
</div>

<div id="section2" class="section">
  <h2>Section 2</h2>
  <p>Deuxième section dans le flux normal.</p>
  <a href="#section3">Aller à la section 3 (flux normal)</a>
</div>

<div id="section3" class="section" aria-flowto="section1">
  <h2>Section 3</h2>
  <p>
    Troisième section dans le flux normal (fin du flux). La section 1 est un
    flux alternatif.
  </p>
</div>
```

#### JavaScript

Le code vérifie d'abord si `ariaFlowToElements` est pris en charge, et si c'est le cas, il enregistre sa valeur.
Il parcourt ensuite les sections, en enregistrant un `id` de la section, la valeur de l'attribut `aria-flowto` et la valeur de la propriété `ariaFlowToElements`.

```js hidden
const elementJournal = document.querySelector("#journal");
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

```js
// Test de fonctionnalité pour ariaFlowToElements
if ("ariaFlowToElements" in Element.prototype) {
  const sections = document.querySelectorAll(".section");
  sections.forEach((elementDivSection) => {
    journaliser(`${elementDivSection.id}`);
    journaliser(
      ` aria-flowto: ${elementDivSection.getAttribute("aria-flowto")}`,
    );
    journaliser(" ariaFlowToElements:");
    // Obtenir les ids de chacun des éléments dans le tableau
    elementDivSection.ariaFlowToElements?.forEach((elem) => {
      journaliser(`  id: ${elem.id}`);
    });
  });
} else {
  journaliser(
    "element.ariaFlowToElements: n'est pas pris en charge par le navigateur",
  );
}
```

#### Résultat

Le journal ci-dessous montre chacune des sections (identifiées par `id`) et les identifiants des éléments de flux vers lesquels elles peuvent pointer, tels que sélectionnés par les outils d'accessibilité.
Nous notons ici que l'attribut et la propriété identifient les mêmes éléments de flux vers.

{{EmbedLiveSample("Obtenir le flux vers l'élément", "100%", 570)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut ARIA [`aria-flowto`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- La propriété {{DOMxRef("ElementInternals.ariaFlowToElements")}}
- [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#reflected_element_references) dans le guide _Réflexion des attributs_.
