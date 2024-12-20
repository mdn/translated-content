---
title: inert
slug: Web/HTML/Global_attributes/inert
l10n:
  sourceCommit: 25b12ef8da856416af63a9c443e13d8f0adbca0a
---

{{HTMLSidebar("Global_attributes")}}

[L'attribut universel](/fr/docs/Web/HTML/Global_attributes) **`inert`** est un attribut booléen indiquant au navigateur d'ignorer l'élément en termes d'interactivité. Avec l'attribut `inert`, tous les descendants de l'élément (comme les boîtes modales créées avec [`<dialog>`](/fr/docs/Web/HTML/Element/dialog)) sont ignorés ainsi. L'attribut `inert` indique également qu'il faut ignorer les évènements déclenchés par l'utilisatrice ou l'utilisateur, que ce soit ceux liés au focus ou provenant d'outils d'assistance.

`inert` aura les effets suivants&nbsp;:

- Empêche le déclenchement de l'évènement [`click`](/fr/docs/Web/API/Element/click_event) lorsque la personne clique sur l'élément.
- Empêche le déclenchement de l'évènement [`focus`](/fr/docs/Web/API/Element/focus_event) en empêchant que l'élément reçoive le focus.
- Masque l'élément et son contenu des outils de l'assistance en le retirant de l'arbre d'accessibilité.

```html
<body inert>
  <!-- contenu -->
</body>
```

L'attribut `inert` peut être ajouté à des sections de contenu qui ne devraient pas être interactives. Lorsqu'un élément est inerte, ses descendants le sont également et les éléments normalement interactifs comme les liens, les boutons et les contrôles de formulaire sont désactivés, car ils ne peuvent pas recevoir de clic ou de focus.

L'attribut `inert` peut également être placé sur des éléments masqués ou en dehors de l'écran. En effet, un tel élément (avec ses descendants) est retiré de la navigation au clavier et de l'arbre d'accessibilité.

> [!NOTE]
> Bien qu'`inert` soit un attribut universel qui puisse être appliqué à n'importe quel élément, on l'utilisera généralement pour des sections de contenu. Pour neutraliser des contrôles de façon individuelle, mieux vaudra utiliser l'attribut HTML [`disabled`](/fr/docs/Web/HTML/Attributes/disabled) et la pseudo-classe CSS [`:disabled`](/fr/docs/Web/CSS/:disabled).

## Accessibilité

Par défaut, il n'existe pas de méthode visuelle pour indiquer qu'un élément (avec ses descendants) est inerte. Il faut donc indiquer clairement les parties actives et celles qui sont inertes.

Lorsqu'on fournira des indications visuelles et non-visuelles à propos de cette inertie, il faudra se rappeler que la zone d'affichage peut ne contenir qu'une partie du contenu (les personnes peuvent avoir zoomé, ou avoir un handicap visuel par exemple). Si une section est inerte et n'est pas marquée comme telle, cela pourra être source de frustration et représenter une mauvaise ergonomie.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément [`<dialog>`](/fr/docs/Web/HTML/Element/dialog)
- La propriété [`HTMLElement.inert`](/fr/docs/Web/API/HTMLElement/inert) du DOM
- [Une introduction à `inert` (en anglais)](https://web.dev/articles/inert?hl=zh-tw)
- [L'attribut `inert` arrive enfin sur le Web (en anglais)](https://www.stefanjudis.com/blog/the-inert-attribute-is-finally-coming-to-the-web/)
