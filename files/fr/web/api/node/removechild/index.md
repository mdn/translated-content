---
title: element.removeChild
slug: Web/API/Node/removeChild
tags:
  - API
  - DOM
  - Enfant
  - Méthodes
  - Noeuds
  - Suppression
translation_of: Web/API/Node/removeChild
---
{{ ApiRef("DOM") }}

La méthode **`Node.removeChild()`** retire un nœud enfant de l'arbre DOM et retourne le nœud retiré.

## Syntaxe

    var oldChild = node.removeChild(child);
    OR
    node.removeChild(child);

- `child` est le nœud enfant à retirer du DOM.
- `node` est le nœud parent de `child`.
- `oldchild` conserve une référence au nœud enfant retiré. `oldchild` === `child`.

Le nœud enfant retiré existe toujours en mémoire, mais ne fait plus partie du DOM. Avec la première syntaxe, il est possible de réutiliser ultérieurement dans le code le nœud retiré, à l'aide de la référence à l'objet `ancienEnfant`_._

Avec la seconde forme montrée en exemple, aucune référence à l'objet `ancienEnfant` n'est conservée ; ainsi, en supposant que votre code n'a conservé nulle part ailleurs cette référence à ce nœud, il devient immédiatement inutilisable et irrécupérable, et sera en général [automatiquement supprimé](/fr/docs/Web/JavaScript/Gestion_de_la_m%C3%A9moire) de la mémoire après un court moment.

Si `child` n'est pas un enfant du nœud `element`, la méthode provoque une exception. Une exception sera aussi lancée dans le cas où le nœud `child` est bien un enfant du nœud `element` au moment de l'appel à la méthode, mais qu'il a été retiré par un gestionnaire d'évènement invoqué dans la cadre d'une tentative de suppression du nœud `element` (comme `blur`).

La méthode peut lever une exception de deux façons :

1.  Si `enfant` était bien un enfant de element et qu'il existe donc dans le DOM, mais qu'il a déjà été retiré, la méthode provoque l'exception suivante :`​​`
    `Uncaught NotFoundError: Failed to execute 'removeChild' on 'element': The node to be removed is not a child of this node`.
2.  si l'`enfant` n'existe pas dans le DOM de la page, la méthode provoque l'exception suivante :
    `Uncaught TypeError: Failed to execute 'removeChild' on 'element': parameter 1 is not of type 'Node'.`

## Exemples

```html
<!--Sample HTML code-->
<div id="top" align="center"> </div>

<script type="text/javascript">
      var top = document.getElementById("top");
      var nested = document.getElementById("nested");

      var garbage = top.removeChild(nested);    //Cas test 2: la méthode lance l'exception (2)

</script>

<!--Sample HTML code-->
<div id="top" align="center">
 <div id="nested"></div>
</div>

<script type="text/javascript">
      var top = document.getElementById("top");
      var nested = document.getElementById("nested");

      var garbage = top.removeChild(nested); // Ce premier appel supprime correctement le noeud

      // ......
      garbage = top.removeChild(nested);   // Cas test 1 : la méthode dans le second appel ici, lance l'exception (1)

</script>
```

```html
<!--Sample HTML code-->

<div id="top" align="center">
  <div id="nested"></div>
</div>
```

```js
// Supprime un élément spécifié quand son noeud parent est connu
var d = document.getElementById("top");
var d_nested = document.getElementById("nested");
var throwawayNode = d.removeChild(d_nested);
```

```js
// Supprime un élément spécifié sans avoir à spécifier son noeud parent
var node = document.getElementById("nested");
if (node.parentNode) {
  node.parentNode.removeChild(node);
}
```

```js
// Supprime tous les enfant d'un élément
var element = document.getElementById("top");
while (element.firstChild) {
  element.removeChild(element.firstChild);
}
```

## Spécifications

- [DOM Level 1 Core: removeChild](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#method-removeChild) — [traduction en français](http://xmlfr.org/w3c/TR/REC-DOM-Level-1/level-one-core.html#method-removeChild) (non normative)
- [DOM Level 2 Core: removeChild](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1734834066) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2/core/core.html#ID-1734834066) (non normative)
- [DOM Level 3 Core: removeChild](http://www.w3.org/TR/DOM-Level-3-Core/core.html#ID-1734834066)

## Voir aussi

- {{domxref("Node.replaceChild")}}
- {{domxref("Node.parentNode")}}
- {{domxref("ChildNode.remove")}}
