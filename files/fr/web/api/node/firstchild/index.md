---
title: element.firstChild
slug: Web/API/Node/firstChild
tags:
  - API
  - DOM
  - Enfant
  - Noeuds
  - Propriété
translation_of: Web/API/Node/firstChild
---
{{APIRef("DOM")}}

La propriété en lecture seule **`Node.firstChild` r**envoie le premier nœud enfant de l'arbre ou `null` s'il n'en a pas. Si le noeud est un `Document` , il renvoie le premier noeud de la liste de ses enfants directs.

## Syntaxe

    var childNode = node.firstChild;

## Exemple

Cet exemple montre l'utilisation de `firstChild` et la manière dont les nœuds d'espaces peuvent interférer.

```html
<p id="para-01">
  <span>Premier span</span>
</p>

<script type="text/javascript">
  var p01 = document.getElementById('para-01');
  alert(p01.firstChild.nodeName)
</script>
```

Dans le code ci-dessus, la [console](/fr/docs/Web/API/Console) affichera « #text » car un nœud texte a été inséré pour préserver les blancs entre la fin des balises ouvrantes \<p> et \<span>. **Tout** [espace](/fr/docs/Gestion_des_espaces_dans_le_DOM) provoquera l'insertion d'un nœud `#text` , qu'il s'agisse d'un simple espace ou de plusieurs, de retours à la ligne, tabulations, etc.

Un autre nœud `#text` est inséré entre les balises de fermeture \</span> et \</p>.

Si ces espaces sont retirés du code source, les nœuds `#text` n'apparaîtront plus et l'élément span deviendra le premier enfant du paragraphe.

```html
<p id="para-01"><span>Premier span</span></p>

<script type="text/javascript">
  var p01 = document.getElementById('para-01');
  alert(p01.firstChild.nodeName)
</script>
```

À présent, l'alerte affichera « SPAN ».

Pour éviter le problème avec `node.firstChild`  renvoyant des noeuds `#text` ou `#comment`,  {{domxref("ParentNode.firstElementChild")}}  peut être utilisé pour renvoyer seulement le premier noeud élément. Toutefois,  `node.firstElementChild` nécessite un "shim" pour Internet Explorer 9 et antérieurs.

## Spécification

| Spécification                                                                                        | Statut                           | Commentaire         |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName('DOM WHATWG', '#dom-node-firstchild', 'Node.firstChild')}}         | {{Spec2('DOM WHATWG')}} | Pas de changement   |
| {{SpecName('DOM3 Core', 'core.html#ID-169727388', 'Node.firstChild')}}         | {{Spec2('DOM3 Core')}}     | Pas de changement   |
| {{SpecName('DOM2 Core', 'core.html#ID-169727388', 'Node.firstChild')}}         | {{Spec2('DOM2 Core')}}     | Pas de changement   |
| {{SpecName('DOM1', 'level-one-core.html#ID-169727388', 'Node.firstChild')}} | {{Spec2('DOM1')}}         | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Node.firstChild")}}
