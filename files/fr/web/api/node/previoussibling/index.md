---
title: "Node : propriété previousSibling"
short-title: previousSibling
slug: Web/API/Node/previousSibling
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

La propriété en lecture seule **`previousSibling`** de l'interface {{DOMxRef("Node")}} retourne le nœud précédant immédiatement le nœud défini dans la liste {{DOMxRef("Node.childNodes", "childNodes")}} de son parent, ou `null` si le nœud défini est le premier de cette liste.

> [!NOTE]
> Les navigateurs insèrent des nœuds texte dans un document pour représenter les espaces dans le balisage source.
> Par conséquent, un nœud obtenu par exemple avec {{DOMxRef("Node.firstChild")}} ou `Node.previousSibling` peut faire référence à un nœud texte contenant des espaces plutôt qu'au véritable élément que l'auteur·ice comptait obtenir.
>
> La section [Travailler avec les espaces blancs dans le DOM](/fr/docs/Web/CSS/Guides/Text/Whitespace#travailler_avec_des_espaces_blancs_dans_le_dom) contient plus d'informations sur ce comportement.
>
> Vous pouvez utiliser {{DOMxRef("Element.previousElementSibling", "previousElementSibling")}} pour obtenir le nœud élément précédent (en ignorant les nœuds texte et tout autre nœud non élément).
>
> Pour naviguer dans l'autre sens à travers la liste des nœuds enfants, utilisez {{DOMxRef("Node.nextSibling")}}.

## Valeur

Un objet {{DOMxRef("Node")}} représentant le nœud précédent du nœud actuel, ou `null` s'il n'y en a pas.

## Exemples

Les exemples suivants montrent comment `previousSibling` fonctionne avec et sans nœuds texte mélangés aux éléments.

### Premier exemple

Dans cet exemple, nous avons une série d'éléments HTML {{HTMLElement("span")}} directement adjacents les uns aux autres, sans espace entre eux.

```html
<span id="b0"></span><span id="b1"></span><span id="b2"></span>
```

```js
document.getElementById("b1").previousSibling; // <span id="b0">
document.getElementById("b2").previousSibling.id; // "b1"
```

### Second exemple

Dans cet exemple, il y a des nœuds texte d'espacement (sauts de ligne) entre les éléments HTML {{HTMLElement("span")}}.

```html
<span id="b0"></span>
<span id="b1"></span>
<span id="b2"></span>
```

```js
document.getElementById("b1").previousSibling; // #text
document.getElementById("b1").previousSibling.previousSibling; // <span id="b0">
document.getElementById("b2").previousSibling.previousSibling; // <span id="b1">
document.getElementById("b2").previousSibling; // #text
document.getElementById("b2").previousSibling.id; // undefined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Node.nextSibling")}}
- La propriété {{DOMxRef("Element.previousElementSibling")}}
