---
title: "Attribut HTML universel : inert"
short-title: inert
slug: Web/HTML/Reference/Global_attributes/inert
l10n:
  sourceCommit: 7c28cd21b705e7b7664d53b4d7822469ea8e6e15
---

L'[attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`inert`** est un attribut booléen qui indique que l'élément et tous ses descendants dans l'arbre plat deviennent _inertes_. L'attribut `inert` peut être ajouté à des sections de contenu qui ne doivent pas être interactives. Lorsqu'un élément est inerte, lui et tous ses descendants, y compris les éléments normalement interactifs comme les liens, boutons et contrôles de formulaire, sont désactivés car ils ne peuvent pas recevoir la sélection ni être cliqués. L'attribut `inert` peut aussi être ajouté à des éléments qui doivent être hors écran ou masqués. Un élément inerte, ainsi que ses descendants, est retiré de l'ordre de tabulation et de l'arbre d'accessibilité.

Les {{HTMLElement("dialog")}} modaux générés avec [`showModal()`](/fr/docs/Web/API/HTMLDialogElement/showModal) échappent à l'inertie, ce qui signifie qu'ils n'héritent pas de l'inertie de leurs ancêtres, mais peuvent être rendus inertes si l'attribut `inert` leur est explicitement appliqué. Aucun autre élément ne peut échapper à l'inertie.

> [!NOTE]
> Bien que `inert` soit un attribut universel et puisse être appliqué à n'importe quel élément, il est généralement utilisé pour des sections de contenu. Pour rendre des contrôles individuels «&nbsp;inertes&nbsp;», il est préférable d'utiliser l'attribut [`disabled`](/fr/docs/Web/HTML/Reference/Attributes/disabled) avec les styles CSS {{CSSxRef(":disabled")}}.

Les éléments HTML inertes et leurs descendants dans l'arbre plat&nbsp;:

- Ne déclenchent pas d'évènements {{DOMxRef("Element/click_event", "click")}} lorsqu'on clique dessus.
- Ne peuvent pas recevoir la sélection et les évènements {{DOMxRef("Element/focus_event", "focus")}} ne peuvent pas être déclenchés sur eux.
- Ne sont pas trouvables avec la fonction de recherche dans la page du navigateur (aucun de leur contenu n'est trouvé ou mis en correspondance).
- Interdisent aux utilisateur·ice·s de sélectionner le texte contenu dans leur contenu — comme si on utilisait la propriété CSS {{CSSxRef("user-select")}} pour désactiver la sélection de texte.
- Ne peuvent pas voir leur contenu éditable modifié. Cela inclut, par exemple, le contenu des champs {{HTMLElement("input")}} textuels, et des éléments de texte avec [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) activé.
- Sont masqués des technologies d'assistance car ils sont exclus de l'arbre d'accessibilité.

Les fonctionnalités suivantes peuvent aussi être utilisées pour rendre un élément et ses descendants inertes&nbsp;:

- La propriété CSS {{CSSxRef("interactivity")}}.
- La propriété DOM {{DOMxRef("HTMLElement.inert")}}.

## Problèmes d'accessibilité

Faites très attention à l'accessibilité lorsque vous appliquez l'attribut `inert`. Par défaut, il n'existe aucun moyen visuel de savoir si un élément ou son sous-arbre est inerte. En tant que développeur·euse web, il est de votre responsabilité d'indiquer clairement quelles parties du contenu sont actives et lesquelles sont inertes.

En fournissant des indices visuels et non visuels sur l'inertie du contenu, gardez aussi à l'esprit que la zone d'affichage visuelle peut ne contenir que des sections de contenu. Les utilisateur·ice·s peuvent être zoomé·e·s sur une petite section de contenu, ou ne pas pouvoir voir le contenu du tout. Des sections inertes qui ne sont pas clairement inertes peuvent entraîner de la frustration et une mauvaise expérience utilisateur.

## Exemples

Dans cet exemple, le deuxième {{HTMLElement("div")}} et tous ses descendants sont rendus inertes grâce à l'attribut `inert`&nbsp;:

```html
<div>
  <label for="button1">Bouton 1</label>
  <button id="button1">Je ne suis pas inerte</button>
</div>
<div inert>
  <label for="button2">Bouton 2</label>
  <button id="button2">Je suis inerte</button>
</div>
```

{{ EmbedLiveSample("Exemples", 560, 200) }}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("dialog")}}
- La propriété DOM {{DOMxRef("HTMLElement.inert")}}
- La propriété CSS {{CSSxRef("interactivity")}}
