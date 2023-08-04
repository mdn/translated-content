---
title: draggable
slug: Web/HTML/Global_attributes/draggable
---

{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`draggable`** est un attribut à valeur contrainte qui indique si l'élément peut être déplacé avec la souris dans un geste de glisser-déposer lorsqu'on utilise l'API _[Drag & Drop](/fr/docs/Web/API/API_HTML_Drag_and_Drop)_ ou les fonctionnalités natives du navigateur. Les valeurs autorisées pour cet attribut sont les suivantes :

- `true` : qui indique que l'élément peut être déplacé à la souris
- `false` : qui indique que l'élément ne peut pas être déplacé à la souris

Si l'attribut n'est pas défini, la valeur par défaut sera `auto` : le comportement de l'élément sera celui spécifié par défaut par le navigateur.

Cet attribut est un attribut à valeur contrainte, ce n'est pas un attribut booléen. Il faut donc utiliser une valeur explicite `true` ou `false`. La notation raccourcie `<img draggable>` (utilisant uniquement le nom de l'attribut) ne fonctionnera pas :

```html example-bad
<label draggable>Label exemple</label>
```

En revanche, on pourra correctement utiliser :

```html example-good
<label draggable="true">Label exemple</label>
```

Par défaut, seules les sélections de texte, les images et les liens peuvent être déplacés à la souris. Pour les autres éléments, il faudra définir le gestionnaire d'événements pour {{domxref('GlobalEventHandlers.ondragstart','ondragstart')}} afin de faire fonctionner le glisser-déposer. Cela est illustré [dans cet exemple](/fr/docs/Glisser_et_déposer/Opérations_de_glissement).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
