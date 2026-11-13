---
title: "Element : propriété shadowRoot"
short-title: shadowRoot
slug: Web/API/Element/shadowRoot
l10n:
  sourceCommit: 1099567e480ad28fa86729e02a9fa8fa4cea9331
---

{{APIRef("Shadow DOM")}}

La propriété en lecture seule `shadowRoot` de l'interface {{DOMxRef("Element")}} représente la racine d'ombre hébergée par l'élément.

Utilisez {{DOMxRef("Element.attachShadow()")}} pour ajouter une racine d'ombre (<i lang="en">shadow root</i> en anglais) à un élément existant.

## Valeur

Une instance d'objet {{DOMxRef("ShadowRoot")}}, ou `null` si la racine d'ombre associée a été attachée avec son {{DOMxRef("ShadowRoot.mode", "mode")}} défini sur `closed`. (Voir {{DOMxRef("Element.attachShadow()")}} pour plus de détails).

Certains éléments intégrés, tels que {{HTMLElement("input")}} et {{HTMLElement("img")}}, ont des racines d'ombre définies par l'agent utilisateur qui sont fermées pour le script. Par conséquent, leur propriété `shadowRoot` est toujours `null`.

## Exemples

Le fragment de code suivant est tiré de notre exemple [life-cycle-callbacks <sup>(angl.)</sup>](https://github.com/mdn/web-components-examples/tree/main/life-cycle-callbacks) ([voir en direct également <sup>(angl.)</sup>](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)), qui crée un élément qui affiche un carré d'une taille et d'une couleur définies dans les attributs de l'élément.

À l'intérieur de la définition de la classe de l'élément `<custom-square>`, nous incluons quelques callbacks du cycle de vie qui font appel à une fonction externe, `updateStyle()`, qui applique en réalité la taille et la couleur à l'élément. Vous voyez que nous lui passons `this` (l'élément personnalisé lui-même) en tant que paramètre.

```js
class Carre extends HTMLElement {
  connectedCallback() {
    console.log("Élément carré personnalisé ajouté à la page.");
    actualiserStyle(this);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log("Attributs de l'élément carré personnalisé modifiés.");
    actualiserStyle(this);
  }
}
```

Dans la fonction `actualiserStyle()` elle-même, nous obtenons une référence au DOM d'ombre (<i lang="en">shadow DOM</i> en anglais) en utilisant `Element.shadowRoot`. À partir de là, nous utilisons des techniques standard de parcours du DOM pour trouver l'élément HTML {{HTMLElement("style")}} à l'intérieur du DOM d'ombre, puis mettre à jour le CSS qu'il contient&nbsp;:

```js
function actualiserStyle(elem) {
  const ombre = elem.shadowRoot;
  const noeudsEnfant = Array.from(ombre.childNodes);

  noeudsEnfant.forEach((noeudEnfant) => {
    if (noeudEnfant.nodeName === "STYLE") {
      noeudEnfant.textContent = `
        div {
          width: ${elem.getAttribute("l")}px;
          height: ${elem.getAttribute("l")}px;
          background-color: ${elem.getAttribute("c")};
        }
      `;
    }
  });
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
