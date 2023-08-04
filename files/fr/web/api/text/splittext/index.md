---
title: Text.splitText()
slug: Web/API/Text/splitText
---

{{apiref("DOM")}}

La méthode **`Text.splitText()`** sépare le nœud {{domxref("Text")}} en deux nœuds au niveau de l'indice spécifié, et conserve les deux nœuds dans l'arbre en tant que voisins.

Après la séparation, le nœud actuel contient tout le texte jusqu'à l'indice spécifié, et un nœud nouvellement créé du même type contient le texte restant. Le nœud nouvellement créé est retourné à l'appelant. Si le nœud original avait un parent, le nouveau nœud est inséré en tant que voisin suivant du nœud original. Si l'indice est égal à la longueur du nœud original, le nœud nouvellement créé ne contient pas de données.

Des nœuds texte séparés peuvent être concaténés en utilisant la méthode {{domxref("Node.normalize()")}}.

Une {{domxref("DOMException")}} avec la valeur `INDEX_SIZE_ERR` est levée si l'indice spécifié est négatif ou est supérieur au nombre d'unités 16-bit dans le texte du nœud&nbsp;; une {{domxref("DOMException")}} avec la valeur `NO_MODIFICATION_ALLOWED_ERR` est levée si le nœud est en lecture seule.

## Syntaxe

```js
noeudRemplacant = noeudTexte.splitText(indice);
```

## Exemple

Dans cet exemple, le nœud texte d'un {{HTMLElement("p")}} est séparé en deux nœuds texte et un {{HTMLElement("span")}} est inséré entre les deux.

```html
<body>
  <p id="p">foobar</p>

  <script type="text/javascript">
    var p = document.getElementById("p");
    var noeudTexte = p.firstChild;

    // coupe entre foo et bar
    var noeudRemplacant = noeudTexte.splitText(3);

    // crée un span avec ' contenu du span '
    var span = document.createElement("span");
    span.appendChild(document.createTextNode(" contenu du span "));

    // ajoute le span avant 'bar'
    p.insertBefore(span, noeudRemplacant);

    // le résultat est <p id="p">foo<span> contenu du span </span>bar</p>
  </script>
</body>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{domxref("Text")}} à laquelle cette méthode appartient.
- La méthode opposée&nbsp;: {{domxref("Node.normalize")}}.
