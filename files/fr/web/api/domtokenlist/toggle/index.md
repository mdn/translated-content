---
title: DOMTokenList.toggle()
slug: Web/API/DOMTokenList/toggle
tags:
  - API
  - Basculement
  - DOM
  - Listes
  - Méthodes
translation_of: Web/API/DOMTokenList/toggle
---
{{APIRef("DOM")}}

La méthode **`toggle()`** (_bascule_) de l'interface {{domxref("DOMTokenList")}} supprime une marque (_token)_ donnée de la liste et renvoie `false` (_faux_). Si _token_ n'existe pas, il est ajouté et la fonction renvoie `true`.

## Syntaxe

    tokenList.toggle(token, force);

### Paramètres

- token
  - : Une {{domxref("DOMString")}} (_chaîne de caractères_) représentant la marque que l'on veut activer.
- force {{optional_inline}}
  - : Un {{domxref("Boolean")}} (_booléen_) qui, si inclus, transforme la bascule (toggle) en opération unique. Si elle est définie `false` (_faux_), la marque sera seulement supprimée et aucun ajout ne suivra. Si elle est définie `true` (_vrai_), la marque sera seulement ajoutée et pas supprimée après.

### Valeur retournée

Un {{domxref("Boolean")}} (_booléen_) — `false` (_faux_) si la marque n'est pas dans la liste après l'appel ou `true` (_vrai_) si elle y est.

## Exemples

Dans l'exemple suivant, nous récupérons la liste des classes définies dans un élément {{htmlelement("span")}} en tant que `DOMTokenList` en utilisant {{domxref("Element.classList")}}. Nous remplaçons alors une marque dans la liste et écrivons la liste dans le {{domxref("Node.textContent")}} du `<span>`.

D'abord, le HTML :

```html
<span class="a b">classList is 'a b'</span>
```

Maintenant le JavaScript :

```js
var span = document.querySelector("span");
var classes = span.classList;
span.onclick = function() {
  var result = classes.toggle("c");
  if(result) {
    span.textContent = "'c' added; classList is now '" + classes + "'.";
  } else {
    span.textContent = "'c' removed; classList is now '" + classes + "'.";
  }
}
```

La sortie ressemble à ceci :

{{ EmbedLiveSample('Examples', '100%', 60) }}

## Spécifications

| Spécification                                                                        | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG','#dom-domtokenlist-toggle','toggle()')}} | {{Spec2('DOM WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.DOMTokenList.toggle")}}
