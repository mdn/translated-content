---
title: autofocus
slug: Web/HTML/Global_attributes/autofocus
---

{{HTMLSidebar("Global_attributes")}}

[L'attribut global](/fr/docs/Web/HTML/Global_attributes) **`autofocus`** est un attribut booléen indiquant qu'un élément devrait recevoir le focus au chargement de la page ou lorsque l'élément {{HTMLElement("dialog")}} dont il fait éventuellement partie est affiché.

```html
<input name="q" autofocus />
```

L'attribut `autofocus` ne devrait pas être placé sur plus d'un élément au sein du document. S'il est placé sur plusieurs éléments, c'est le premier qui recevra le focus.

> **Note :** L'attribut `autofocus` s'applique à tous les éléments, et pas seulement aux contrôles de formulaires. Par exemple, il peut être utilisé sur une zone [contenteditable](/fr/docs/Web/HTML/Global_attributes/contenteditable).

## Remarques sur l'accessibilité de la fonctionnalité

Le fait de placer automatiquement le focus sur un élément de formulaire peut poser des difficultés aux personnes utilisant des technologies d'assistance telles que les lecteurs d'écrans et les personnes portant un handicap cognitif. Lorsque l'attribut `autofocus` est assigné, les lecteurs d'écrans vont « téléporter » le visiteur sur l'élément de formulaire sans pouvoir l'avertir au préalable.

Concernant l'accessibilité, l'attribut `autofocus` doit être utilisé avec précaution. Placer automatiquement le focus sur un élément de formulaire peut déclencher un défilement intempestif de la page lors de son chargement. Le focus peut aussi déclencher l'ouverture intempestive du clavier virtuel sur les appareils tactiles. Enfin, il faut noter que comme les lecteurs d'écrans annoncent le libellé d'un élément de formulaire recevant le focus, aucun autre élément placé avant le libellé ne sera lu par l'outil d'assistance. D'ailleurs, les personnes utilisant un appareil disposant d'un petit écran perdront également le contexte fourni par les éléments situés au-dessus de l'élément de formulaire recevant le focus.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
