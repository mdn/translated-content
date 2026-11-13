---
title: "Node : propriété firstChild"
short-title: firstChild
slug: Web/API/Node/firstChild
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("DOM")}}

La propriété en lecture seule **`firstChild`** de l'interface {{DOMxRef("Node")}} retourne le premier nœud enfant de l'arbre, ou `null` si le nœud n'a pas d'enfants.

Si le nœud est un objet {{DOMxRef("Document")}}, cette propriété retourne le premier nœud de la liste de ses enfants directs.

> [!NOTE]
> Cette propriété retourne tout type de nœud qui est le premier enfant de celui-ci.
> Il peut s'agir d'un nœud {{DOMxRef("Text")}} ou {{DOMxRef("Comment")}}.
> Si vous souhaitez obtenir le premier élément ({{DOMxRef("Element")}}) qui est un enfant d'un autre élément, utilisez {{DOMxRef("Element.firstElementChild")}}.

## Valeur

Un objet {{DOMxRef("Node")}}, ou `null` s'il n'y en a pas.

## Exemples

Cet exemple montre l'utilisation de `firstChild` et la manière dont les nœuds d'espaces peuvent interférer en utilisant cette propriété.

```html
<p id="para-01">
  <span>Premier span</span>
</p>
```

```js
const p01 = document.getElementById("para-01");
console.log(p01.firstChild.nodeName);
```

Dans l'exemple ci-dessus, la console affiche «&nbsp;#text&nbsp;», car un nœud texte est inséré pour préserver les espaces entre la fin des balises ouvrantes `<p>` et `<span>`. **Tout** [espace](/fr/docs/Web/CSS/Guides/Text/Whitespace#travailler_avec_les_espaces_dans_le_dom) provoque l'insertion d'un nœud `#text`, qu'il s'agisse d'un simple espace ou de plusieurs, de retours à la ligne, tabulations, etc.

Un autre nœud `#text` est inséré entre les balises de fermeture `</span>` et `</p>`.

Si ces espaces sont retirés du code source, les nœuds `#text` ne sont pas insérés et l'élément span devient le premier enfant du paragraphe.

```html
<p id="para-01"><span>Premier span</span></p>
```

```js
const p01 = document.getElementById("para-01");
console.log(p01.firstChild.nodeName);
```

À présent, l'alerte affiche «&nbsp;SPAN&nbsp;».

Pour éviter le problème avec `node.firstChild` renvoyant des nœuds `#text` ou `#comment`, {{DOMxRef("Element.firstElementChild")}} peut être utilisé pour renvoyer uniquement le premier nœud élément.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.firstElementChild")}}
- La propriété {{DOMxRef("Node.lastChild")}}
