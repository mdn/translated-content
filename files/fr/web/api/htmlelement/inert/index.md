---
title: "HTMLElement : propriété inert"
short-title: inert
slug: Web/API/HTMLElement/inert
l10n:
  sourceCommit: 3ff38e7687b65e43fe821a904ff52778312b8d36
---

{{APIRef("HTML DOM")}}

La propriété **`inert`** de {{DOMxRef("HTMLElement")}} reflète la valeur de l'attribut [`inert`](/fr/docs/Web/HTML/Reference/Global_attributes/inert) de l'élément. Il s'agit d'une valeur booléenne qui, lorsqu'elle est présente, fait en sorte que le navigateur «&nbsp;ignore&nbsp;» les évènements de saisie utilisateur pour l'élément, y compris les évènements de sélection et ceux des technologies d'assistance. Le navigateur peut aussi ignorer la recherche dans la page et la sélection de texte dans l'élément. Cela peut être utile lors de la création d'interfaces utilisateur comme des modales où l'on souhaite «&nbsp;piéger&nbsp;» la sélection à l'intérieur de la modale lorsqu'elle est visible.

Notez que si l'attribut `inert` n'est pas défini, l'élément peut tout de même hériter de l'inertie de son parent. Cependant, cette inertie héritée n'est pas reflétée par la valeur de cette propriété. Définir explicitement la propriété à `false` ne peut pas annuler l'inertie héritée du parent.

## Valeur

Un booléen qui vaut `true` si l'élément est inerte&nbsp;; sinon, la valeur est `false`.

## Exemples

### HTML

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

### CSS

```css
[inert] > * {
  opacity: 0.5;
}
```

{{EmbedLiveSample('Exemples', 560, 200)}}

> [!NOTE]
> Cet attribut, à lui seul, ne provoque aucun changement visuel du contenu tel qu'il est affiché dans le navigateur. Dans l'exemple ci-dessus, du CSS a été appliqué pour que tout descendant direct d'un élément avec l'attribut inert soit affiché semi-opaque.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'attribut universel&nbsp;: `inert`](/fr/docs/Web/HTML/Reference/Global_attributes/inert)
- La propriété {{DOMxRef("HTMLInputElement.disabled", "disabled")}}
- L'élément HTML {{HTMLElement("dialog")}}
- La propriété CSS {{CSSxRef("interactivity")}}
