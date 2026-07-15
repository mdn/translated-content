---
title: "Element : propriété ariaOwnsElements"
short-title: ariaOwnsElements
slug: Web/API/Element/ariaOwnsElements
l10n:
  sourceCommit: fbee1ad6d6add1319ce3e8e977033385a915c635
---

{{APIRef("DOM")}}

La propriété **`ariaOwnsElements`** de l'interface {{DOMxRef("Element")}} est un tableau contenant l'élément (ou les éléments) qui définit une relation visuelle, fonctionnelle ou contextuelle entre un élément parent auquel elle est appliquée et ses éléments enfants.
C'est utilisé lorsque la hiérarchie DOM ne peut pas être utilisée pour représenter la relation, et qu'elle n'est autrement pas disponible pour les technologies d'assistance.

Le sujet [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) contient des informations supplémentaires sur la manière dont l'attribut et la propriété doivent être utilisés.

## Valeur

Un tableau de sous-classes de {{DOMxRef("HTMLElement")}}.

Lorsqu'elle est lue, le tableau retourné est statique et en lecture seule.
Lorsqu'elle est écrite, le tableau assigné est copié&nbsp;: les modifications ultérieures du tableau n'affectent pas la valeur de la propriété.

## Description

La propriété est une alternative flexible à l'utilisation de l'attribut [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) pour indiquer la propriété d'un élément.
Contrairement à `aria-owns`, les éléments assignés à cette propriété n'ont pas besoin d'avoir un attribut [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id).

La propriété reflète l'attribut [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-owns) de l'élément lorsqu'il est défini, mais uniquement pour les valeurs de référence `id` répertoriées qui correspondent à des éléments valides dans la portée.
Si la propriété est définie, l'attribut correspondant est effacé.
Pour plus d'informations sur les références d'éléments réfléchis et la portée, voir [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchis) dans le guide _Réflexion des attributs_.

## Exemples

### Obtenir l'élément possédé

Cet exemple montre comment l'attribut et la propriété `aria-owns` sont utilisés.

Le code définit un menu et son sous-menu associé dans des éléments HTML {{HTMLElement("div")}} séparés et non imbriqués.
Comme ces éléments ne sont pas imbriqués, la relation de propriété entre le menu et le sous-menu n'est pas capturée par le DOM.
Ici, nous fournissons cette information aux outils d'accessibilité en utilisant l'attribut `aria-owns`, mais nous pourrions également le faire en utilisant la propriété réfléchie.

Notez que nous pourrions construire un menu où le sous-menu était imbriqué&nbsp;: l'exemple est _fabriqué_ pour faciliter la démonstration d'un cas où la relation doit être définie.

#### HTML

Le HTML définit des éléments {{HTMLElement("div")}} pour le menu, avec `id=menuParent` et le sous-menu avec `id="sousMenu1"`.
Nous avons ajouté un `<div>` entre les deux juste pour rendre encore plus évident qu'il n'y a pas de modèle de propriété directe défini dans le DOM.

Le menu parent `<div>` inclut l'attribut `aria-owns="sousMenu1"` pour créer cette relation de propriété.

```html
<div class="menu" id="menuParent" role="menubar" aria-owns="sousMenu1">
  Menu de niveau supérieur (survoler)
</div>

<div>Un autre élément</div>

<div class="sous-menu" id="sousMenu1" role="menu">
  <a href="#" role="menuitem">Élément de menu 1</a>
  <a href="#" role="menuitem">Élément de menu 2</a>
  <a href="#" role="menuitem">Élément de menu 3</a>
</div>
```

#### CSS

Le CSS met en forme le menu et le sous-menu, et affiche le sous-menu lorsque le menu est survolé.

```css
.menu {
  position: relative;
  display: inline-block;
  color: purple;
}

.sous-menu {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 6px 14px 0px rgb(0 0 0 / 0.2);
  z-index: 1;
  top: 20px;
  left: 0;
}

.menu:hover ~ .sous-menu {
  display: block;
}

.sous-menu a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.sous-menu a:hover {
  background-color: #f1f1f1;
}
```

```html hidden
<pre id="journal"></pre>
```

```css hidden
#journal {
  height: 80px;
  overflow: scroll;
  padding: 0.5rem;
  margin: 5px;
  border: 1px solid black;
}
```

#### JavaScript

Le code vérifie d'abord si `ariaOwnsElements` est pris en charge.
Si c'est le cas, nous enregistrons l'attribut, les éléments dans la propriété et la valeur `id` pour chaque élément.

```js hidden
const elementJournal = document.querySelector("#journal");
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

```js
// Feature test for ariaOwnsElements
if ("ariaOwnsElements" in Element.prototype) {
  const menuParent = document.querySelector("#menuParent");
  journaliser(
    `menuParent.getAttribute(): ${menuParent.getAttribute("aria-owns")}`,
  );
  journaliser(`menuParent.ariaOwnsElements: ${menuParent.ariaOwnsElements}`);
  menuParent.ariaOwnsElements?.forEach((elem) => {
    journaliser(`  id: ${elem.id}`);
  });
} else {
  journaliser(
    "element.ariaOwnsElements: n'est pas pris en charge par le navigateur",
  );
}
```

#### Résultat

Le résultat de l'exécution du code est montré ci-dessous.
Le journal montre que la relation définie à l'aide de l'attribut `aria-owns` est reflétée dans la propriété `ariaOwnsElements` (les éléments du tableau correspondent aux références des éléments de l'attribut).

{{EmbedLiveSample("Obtenir l'élément possédé", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut ARIA [`aria-owns`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-flowto)
- La propriété {{DOMxRef("ElementInternals.ariaOwnsElements")}}
- [Références d'éléments réfléchis](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes#références_déléments_réfléchis) dans le guide _Réflexion des attributs_.
