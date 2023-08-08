---
title: element.nextSibling
slug: Web/API/Node/nextSibling
---

{{APIRef("DOM")}}

La propriété en lecture seule **`Node.nextSibling`** renvoie le nœud (`node`) suivant immédiatement le nœud spécifié dans la liste des enfants ( {{domxref("Node.childNodes","childNodes")}}) de son nœud parent, ou `null` si le nœud spécifié est le dernier dans cette liste.

## Syntaxe

```js
nextNode = node.nextSibling;
```

## Notes

Les navigateurs basés sur Gecko insèrent des nœuds texte dans un document pour représenter des espaces
vides dans le balisage source. Par conséquent, un nœud obtenu par exemple via [`Node.firstChild`](/fr/docs/Web/API/Node/firstChild) ou
[`Node.previousSibling`](/fr/docs/Web/API/Node/previousSibling "{{APIRef("DOM")}}") peut faire référence à un nœud texte contenant des espaces plutôt qu'au véritable élément
que l'auteur comptait obtenir.

Consultez [Gestion des espaces dans le DOM](/fr/docs/Gestion_des_espaces_dans_le_DOM)
et [_Why are some Text nodes empty?_
dans la FAQ DOM 3 du W3C](http://www.w3.org/DOM/faq.html#emptytext) pour plus d'informations.

{{domxref("Element.nextElementSibling")}} peut être utilisé pour obtenir l'élément suivant en ignorant les noeuds d'espace.

## Exemple

```html
<div id="div-01">Here is div-01</div>
<div id="div-02">Here is div-02</div>

<script type="text/javascript">
  var el = document.getElementById("div-01").nextSibling,
    i = 1;

  console.log("Siblings of div-01:");

  while (el) {
    console.log(i + ". " + el.nodeName);
    el = el.nextSibling;
    i++;
  }
</script>

<!--
  Ce qui suit est écrit sur la console pendant le chargement:

     Siblings of div-01

      1. #text
      2. DIV
      3. #text
      4. SCRIPT

-->
```

Dans cet exemple, on peut voir que des nœuds `#text` sont insérés dans le DOM là où des espaces se trouvent dans le code source entre les balises (c'est-à-dire après la balise de fermeture d'un élément et avant la balise d'ouverture du suivant). Aucun espace n'est créé entre les éléments insérés par l'instruction `document.write` .

L'inclusion possible de nœuds textes dans le DOM doit être prise en compte pour le parcours du DOM à l'aide de `nextSibling`. Consultez les ressources dans la section Notes .

## Spécification

- [DOM Level 1 Core: nextSibling](http://www.w3.org/TR/REC-DOM-Level-1/level-one-core.html#attribute-nextSibling) — [traduction](http://xmlfr.org/w3c/TR/REC-DOM-Level-1/level-one-core.html#attribute-nextSibling) (non normative)
- [DOM Level 2 Core: nextSibling](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-6AC54C2F) — [traduction](http://www.yoyodesign.org/doc/w3c/dom2/core/core.html#ID-6AC54C2F) (non normative)

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

{{domxref("Element.nextElementSibling")}}
