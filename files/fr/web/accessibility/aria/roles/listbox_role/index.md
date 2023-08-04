---
title: Utiliser le rôle listbox
slug: Web/Accessibility/ARIA/Roles/listbox_role
---

### Description

Cette technique présente l'utilisation du rôle [listbox](http://www.w3.org/TR/wai-aria/roles#listbox) et décrit les effets produits sur les navigateurs et les technologies d'assistance.

Le rôle `listbox` est utilisé pour identifier un élément qui crée une liste à partir de laquelle un utilisateur peut sélectionner un ou plusieurs éléments statiques et peut contenir des images, contrairement à l'élément HTML {{ HTMLElement("select") }}. Lorsque ce rôle est ajouté à un élément, le navigateur émettra un événement accessible `listbox` aux produits de technologie d'assistance qui pourront alors le notifier à l'utilisateur.

Chaque entrée de la boîte liste devrait avoir un rôle d'[option](http://www.w3.org/TR/2010/WD-wai-aria-20100916/roles#option) et devrait être une descendante de la boîte liste dans l'arbre DOM. Si une ou plusieurs entrées ne sont pas des descendantes de la boîte liste dans le DOM, référez-vous aux [Bonnes pratiques ARIA](http://www.w3.org/TR/wai-aria-practices/#listbox_div) pour obtenir plus de détails sur les propriétés additionnelles qui doivent être définies.

Lorsqu'on navigue entre les différents éléments d'une liste, le premier élément de la liste sera sélectionné par défaut en l'absence de sélection existante. Les flèches haut et bas permettent de naviguer dans la liste, et appuyer sur <kbd>Maj+Flèche haut/bas</kbd> déplacera et développera la sélection. Saisir un ou plusieurs lettres permet de naviguer dans la liste des éléments (une seule et même lettre positionnera la sélection sur chacun des éléments qui commence par elle, plusieurs lettres placeront la sélection sur le premier élément commençant par la chaîne). Si l'élément courant est associé à un menu contextuel, <kbd>Maj+F10</kbd> affichera ce menu. Si les éléments de la liste peuvent être cochés, <kbd>Espace</kbd> peut être utilisée pour basculer l'état de la [checkboxes](http://www.w3.org/TR/wai-aria-practices/#checkbox). Pour les éléments de liste sélectionnables, <kbd>Espace</kbd> bascule l'état de sélection, <kbd>Maj+Espace</kbd> peut être utilisé pour sélection des éléments contigus, <kbd>Ctrl+Flèche</kbd> déplace le curseur sans sélectionner d'élément, et <kbd>Ctrl+Espace</kbd> peut être utilisé pour sélectionner des éléments non-contigus. Il est recommandé d'utiliser une case à cocher, un lien ou tout autre méthode pour permettre la sélection de tous les éléments, et <kbd>Ctrl+A</kbd> peut être utilisé comme raccourci pour cela.

### Effets possibles sur les agents utilisateurs et les technologies d'assistance

Lorsque le rôle `listbox` est ajouté à un élément, ou qu'un tel élément devient visible, l'agent utilisateur devrait suivre les étapes suivantes&nbsp;:

- Présenter l'élément comme ayant un rôle d'alerte à l'API d'accessibilité du système d'exploitation. Alternativement, s'il est un enfant de ou s'il appartient à une boîte combinée [combobox](http://www.w3.org/TR/wai-aria/roles#combobox), présenter l'élément comme un [menu](http://www.w3.org/TR/wai-aria/roles#menu)&nbsp;;
- Déclencher un événement liste (ou dans les cas spéciaux, un événement menu) accessible à l'aide l'API d'accessibilité du système d'exploitation si elle le prend en charge.

Les technologies d'assistance devraient être à l'écoute de tels événements et les notifier à l'utilisateur en conséquence&nbsp;:

- Les lecteurs d'écran devraient annoncer le label et le rôle de la boîte liste lorsqu'elle obtient le focus. Si un élément de la liste obtient le focus, il devrait être annoncé après, suivi par une indication de la position de l'élément dans la liste si le lecteur d'écran prend en charge cette fonction. Lorsque le focus se déplace dans la liste, le lecteur d'écran devrait annoncer les éléments de la liste appropriés.
- Les loupes d'écran devraient agrandir la boîte liste.

> **Note :** il existe plusieurs points de vue sur la façon dont les technologies d'assistance devraient traiter cette technique. L'information fournie ci-dessus est l'une de ces opinions et n'est pas normative.

### Exemples

#### Exemple 1&nbsp;: une liste de sélection simple qui utilise l'attribut `aria-activedescendant`

L'extrait de code ci-dessous montre comment le rôle `listbox` est ajouté directement dans le code source HTML&nbsp;:

```html
<div
  role="listbox"
  tabindex="0"
  id="listbox1"
  onclick="return listItemClick(event);"
  onkeydown="return listItemKeyEvent(event);"
  onkeypress="return listItemKeyEvent(event);"
  onfocus="this.className='focus';"
  onblur="this.className='blur';"
  aria-activedescendant="listbox1-1">
  <div role="option" id="listbox1-1" class="selected">Vert</div>
  <div role="option" id="listbox1-2">Orange</div>
  <div role="option" id="listbox1-3">Rouge</div>
  <div role="option" id="listbox1-4">Bleu</div>
  <div role="option" id="listbox1-5">Violet</div>
  <div role="option" id="listbox1-6">Pervenche</div>
</div>
```

Voir l'[exemple](http://codetalks.org/source/widgets/listbox/listbox.html) CodeTalks pour plus de détails.

#### Exemples concrets

- <https://www.w3.org/TR/wai-aria-practices/examples/listbox/listbox.html>

### Notes

- Pour être accessible au clavier, les développeurs doivent [gérer le focus](http://www.w3.org/TR/wai-aria/roles#option) de chaque descendant de ce rôle.
- Il est recommandé aux développeurs d'utiliser différents styles pour la sélection lorsque la liste n'a pas le focus, par exemple, une sélection inactive est parfois affichée avec une couleur d'arrière-plan plus claire.
- Si la boîte liste ne fait pas partie d'un autre composant, il faut définir sa propriété [`aria-labelledby`](http://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-labelledby).
- Si une ou plusieurs entrées ne sont pas des descendants DOM de la boîte liste, il faudra définir des propriétés `aria-*` supplémentaires (voir [Bonnes pratiques ARIA](http://www.w3.org/TR/wai-aria-practices/#listbox_div)).
- S'il existe une bonne raison pour [étendre](http://www.w3.org/TR/wai-aria/states_and_properties#aria-expanded) la boîte liste, le rôle [combobox](http://www.w3.org/TR/wai-aria/roles#combobox) peut être plus approprié.

### Attributs ARIA utilisés

- [listbox](http://www.w3.org/TR/wai-aria/roles#listbox)

### Techniques ARIA connexes

- Rôle [combobox](http://www.w3.org/TR/wai-aria/roles#combobox).

### Autres ressources

- Bonnes pratiques ARIA – Listbox&nbsp;: [#listbox_div](http://www.w3.org/TR/wai-aria-practices/#listbox_div)
- Le modèle de rôles ARIA – Listbox&nbsp;: [#listbox](http://www.w3.org/TR/wai-aria/roles#listbox)
