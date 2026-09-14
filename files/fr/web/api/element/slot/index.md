---
title: "Element : propriété slot"
short-title: slot
slug: Web/API/Element/slot
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("Shadow DOM")}}

La propriété **`slot`** de l'interface {{DOMxRef("Element")}} retourne le nom de l'emplacement du DOM d'ombre dans lequel l'élément est inséré.

Un emplacement est un espace réservé à l'intérieur d'un [composant web](/fr/docs/Web/API/Web_components) que les utilisateur·ice·s peuvent remplir avec leur propre balisage (voir [Utiliser les modèles et les emplacements](/fr/docs/Web/API/Web_components/Using_templates_and_slots) pour plus d'informations).

## Valeur

Une chaîne de caractères.

## Exemples

Dans notre [exemple simple-template <sup>(angl.)</sup>](https://github.com/mdn/web-components-examples/tree/main/simple-template) ([voir en direct <sup>(angl.)</sup>](https://mdn.github.io/web-components-examples/simple-template/)), nous créons un exemple trivial d'élément personnalisé appelé `<mon-paragraphe>` dans lequel une racine d'ombre est attachée puis remplie avec le contenu d'un modèle qui contient un emplacement nommé `mon-texte`.

Lorsque `<mon-paragraphe>` est utilisé dans le document, l'emplacement est rempli par un élément pouvant être placé dans un emplacement en l'incluant à l'intérieur de l'élément avec un attribut [`slot`](/fr/docs/Web/HTML/Reference/Global_attributes/slot) ayant pour valeur `mon-texte`. Voici un tel exemple&nbsp;:

```html
<mon-paragraphe>
  <span slot="mon-texte">C'est un texte différent !</span>
</mon-paragraphe>
```

Dans notre fichier JavaScript, nous obtenons une référence à l'élément HTML {{HTMLElement("span")}} montré ci-dessus, puis enregistrons une référence au nom de l'élément `<slot>` correspondant.

```js
let spanDansEmplacement = document.querySelector("mon-paragraphe span");
console.log(spanDansEmplacement.slot); // affiche 'mon-texte'
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
