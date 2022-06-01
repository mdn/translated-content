---
title: tabindex
slug: Web/HTML/Global_attributes/tabindex
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/tabindex
original_slug: Web/HTML/Attributs_universels/tabindex
---
{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`tabindex`** est un entier indiquant si l'élément peut capturer le focus et si c'est le cas, dans quel ordre il le capture lors de la navigation au clavier (généralement à l'aide de la touche <kbd>Tab</kbd>). Si plusieurs éléments partagent la même valeur d'attribut **`tabindex`**, leur ordre sera calculé en fonction de leur position dans le document.

{{EmbedInteractiveExample("pages/tabbed/attribute-tabindex.html","tabbed-standard")}}

Cet attribut peut prendre l'une des valeurs suivantes :

- Une valeur négative : l'élément peut capturer le focus mais ne peut pas être atteint via la navigation au clavier ;

  > **Note :** Cette valeur peut être utile lorsqu'on a un contenu situé en dehors de l'écran qui doit apparaître lors d'un évènement donné. Il ne sera pas possible d'y passer le focus au clavier mais on pourra le faire avec [la méthode `focus()`](/fr/docs/Web/API/HTMLElement/focus).

- `0` : l'élément peut capturer le focus et être atteint via la navigation au clavier, cependant son ordre relatif est défini par la plateforme, généralement selon l'ordre des éléments du DOM ;

  > **Attention :** Le positionnement CSS n'aura pas d'impact sur le `taborder`. Le positionnement n'a qu'un impact visuel, l'ordre des tabulations correspond à l'ordre du DOM.

- Une valeur positive : l'élément peut capturer le focus et peut être atteint via la navigation au clavier, l'ordre relatif dans la navigation est défini par la valeur de l'attribut. Les navigations seront parcourues dans l'ordre croissant.

  > **Attention :** Il n'est pas recommandé de fournir des valeurs positives pour les éléments car cela peut être source de confusion, notamment pour les personnes qui utilisent des technologies d'assistance. Il est préférable d'organiser les éléments dans un ordre correct au niveau du DOM.

Si on utilise l'attribut `tabindex` sur un élément {{HTMLElement("div")}}, on ne pourra pas naviguer dans le contenu de cet élément avec les flèches du clavier, sauf si `tabindex` est également utilisé sur le contenu. Pour observer ce comportement, vous pouvez utiliser [cet exemple JSFiddle](https://jsfiddle.net/jainakshay/0b2q4Lgv/).

> **Note :** La valeur maximale pour `tabindex` est fixée à 32767 par HTML4. Sa valeur par défaut est 0 pour les éléments qui peuvent recevoir le focus et -1 pour les autres.

## Exemples

### HTML

```html
<button tabindex="1">Un bouton</button>
<textarea>Saisir un texte</textarea>
<button tabindex="0">Un autre bouton</button>
<button tabindex="1">Et un troisième</button>
```

### Résultat

{{EmbedLiveSample("Exemples","200","300")}}

## Accessibilité

Il faut éviter d'utiliser l'attribut `tabindex` avec du contenu [non-interactif](/fr/docs/Web/Guide/HTML/Catégories_de_contenu#Contenu_interactif) si on souhaite uniquement rendre cet élément accessible au clavier (par exemple en voulant utiliser un élément {{HTMLElement("div")}} plutôt qu'un élément {{HTMLElement("button")}}).

Les composants rendus interactifs par cette méthode ne feront pas partie de l'[arbre d'accessibilité](/fr/Apprendre/a11y/What_is_accessibility#Accessibility_APIs) et ne pourront pas être analysés par les technologies d'assistance. Le contenu devrait être décrit sémantiquement avec des éléments interactifs ({{HTMLElement("a")}}, {{HTMLElement("button")}}, {{HTMLElement("details")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}}, etc.). En effet, ces éléments disposent nativement de rôles et d'états qui peuvent être utilisées par les API d'accessibilité (il faut sinon les gérer via [ARIA](/fr/docs/Accessibilité/ARIA)).

- [Utiliser l'attribut `tabindex`|_The Paciello Group_ (en anglais)](https://developer.paciellogroup.com/blog/2014/08/using-the-tabindex-attribute/)

## Spécifications

| Spécification                                                                                        | État                             | Commentaires                                                                                                                                                                                                                                    |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "interaction.html#attr-tabindex", "tabindex")}}     | {{Spec2('HTML WHATWG')}} | Aucune modification depuis la dernière dérivation, {{SpecName('HTML5.1')}}                                                                                                                                                             |
| {{SpecName('HTML5.1', "editing.html#the-tabindex-attribute", "tabindex")}} | {{Spec2('HTML5.1')}}     | Dérivée de {{SpecName('HTML WHATWG')}}, aucune modification depuis {{SpecName('HTML5 W3C')}}                                                                                                                                    |
| {{SpecName('HTML5 W3C', "editing.html#attr-tabindex", "tabindex")}}             | {{Spec2('HTML5 W3C')}}     | Dérivée de {{SpecName('HTML WHATWG')}}. À partir de {{SpecName("HTML4.01")}}, l'attribut est désormais supporté sur tous les éléments, c'est un attribut global à part entière.                                                |
| {{SpecName('HTML4.01', 'interact/forms.html#adef-tabindex', 'tabindex')}}     | {{Spec2('HTML4.01')}}     | Attribut uniquement supporté sur {{HTMLElement("a")}}, {{HTMLElement("area")}}, {{HTMLElement("button")}}, {{HTMLElement("object")}}, {{HTMLElement("select")}}, et {{HTMLElement("textarea")}}. |

## Compatibilité des navigateurs

{{Compat("html.global_attributes.tabindex")}}

## Voir aussi

- La propriété {{domxref("HTMLElement.tabIndex")}} qui reflète cet attribut.
- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
- [Ce billet en anglais sur l'accessibilité et `tabindex`](https://adrianroselli.com/2014/11/dont-use-tabindex-greater-than-0.html) écrit par Adrian Roselli
- [`Document.hasFocus()`](/fr/docs/Web/API/Document/hasFocus)
