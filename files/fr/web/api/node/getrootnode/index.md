---
title: Node.getRootNode()
slug: Web/API/Node/getRootNode
tags:
  - API
  - DOM
  - Méthodes
  - Noeuds
  - Racine
translation_of: Web/API/Node/getRootNode
---
{{APIRef("DOM")}}

La méthode **`getRootNode()`** de l'interface {{domxref("Node")}} renvoie le contexte de la racine de l'objet, qui peut optionnellement inclure la racine "shadow" si elle est disponible.

## Syntaxe

    var root = node.getRootNode(options)

### Paramètres

- options {{optional_inline}}

  - : Un objet qui définit les options pour obtenir le noeud racine. Les options disponibles sont :

    - `composed` : un {{jsxref('Boolean')}} (_booléen_) qui indique si la racine shadow doit être retournée (`false` (_faux_) par défaut) ou un noeud racine au-delà de la racine shadow (`true`).

### Retourne

Une interface {{domxref('Node')}}.

## Exemple

Le premier exemple retourne une référence au noeud HTML/document lorsqu'il est exécuté dans les navigateurs de support :

```js
rootNode = node.getRootNode();
```

Cet exemple plus complexe montre la différence entre retourner une racine normale et une racine qui inclut la racine shadow (voir le [code source complet](<https://github.com/jserz/js_piece/blob/master/DOM/Node/getRootNode()/demo/getRootNode.html>)):

```html
<!-- source: https://github.com/jserz/js_piece/blob/master/DOM/Node/getRootNode()/demo/getRootNode.html -->
<div class="js-parent">
    <div class="js-child"></div>
</div>
<div class="js-shadowHost"></div>
<script>
    // work on Chrome 54+，Opera41+

    var parent = document.querySelector('.js-parent'),
        child = document.querySelector('.js-child'),
        shadowHost = document.querySelector('.js-shadowHost');

    console.log(parent.getRootNode().nodeName); // #document
    console.log(child.getRootNode().nodeName); // #document

    // create a ShadowRoot
    var shadowRoot = shadowHost.attachShadow({mode:'open'});
    shadowRoot.innerHTML = '<style>div{background:#2bb8aa;}</style>'
        + '<div class="js-shadowChild">content</div>';
    var shadowChild = shadowRoot.querySelector('.js-shadowChild');

    // The default value of composed is false
    console.log(shadowChild.getRootNode() === shadowRoot); // true
    console.log(shadowChild.getRootNode({composed:false}) === shadowRoot); // true
    console.log(shadowChild.getRootNode({composed:true}).nodeName); // #document
</script>
```

## Spécifications

| Spécification                                                                            | Statut                           | Commentaire          |
| ---------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG','#dom-node-getrootnode','getRootNode()')}} | {{Spec2('DOM WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Node.getRootNode")}}
