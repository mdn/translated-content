---
title: window.getComputedStyle
slug: Web/API/Window/getComputedStyle
translation_of: Web/API/Window/getComputedStyle
---
{{ ApiRef() }}

## Résumé

La méthode `window.getComputedStyle()` donne la valeur calculée finale de toutes les propriétés CSS sur un élément.

## Syntaxe

    var style = window.getComputedStyle(element[, pseudoElt]);

- element
  - : L’{{ domxref("Element") }} pour lequel vous voulez obtenir une valeur calculée.
- pseudoElt {{ optional_inline() }}
  - : Chaîne de caractère spécifiant le pseudo-élément à cibler. Doit être `null` (ou non spécifiée) pour les éléments communs.

> **Note :** Avant Gecko 2.0 {{ geckoRelease("2.0") }}, le paramètre `pseudoElt` était obligatoire. Aucun autre navigateur majeur ne requiert que ce paramètre soit renseigné si il est null. Gecko a été modifié pour se comporter comme les autres navigateurs.

La valeur de retour `style` est un objet [`CSSStyleDeclaration`](/en/DOM/CSSStyleDeclaration).

## Exemple

```js
var elem1 = document.getElementById("elemId");
var style = window.getComputedStyle(elem1, null);

// Ce qui équivaut à&nbsp;:
// var style = document.defaultView.getComputedStyle(elem1, null);
```

```html
<style>
 #elem-container{
   position: absolute;
   left:     100px;
   top:      200px;
   height:   100px;
 }
</style>

<div id="elem-container">dummy</div>
<div id="output"></div>

<script>
  function getTheStyle(){
    var elem = document.getElementById("elem-container");
    var theCSSprop = window.getComputedStyle(elem,null).getPropertyValue("height");
    document.getElementById("output").innerHTML = theCSSprop;
   }
  getTheStyle();
</script>
```

```js
function dumpComputedStyles(elem,prop) {

  var cs = window.getComputedStyle(elem,null);
  if (prop) {
    console.log(prop+" : "+cs.getPropertyValue(prop));
    return;
  }
  var len = cs.length;
  for (var i=0;i<len;i++) {

    var style = cs[i];
    console.log(style+" : "+cs.getPropertyValue(style));
  }

}
```

## Description

L'objet retourné est du même type que celui de la propriété {{domxref("HTMLElement.style", "style")}} de l'élément ciblé. Toutefois les deux objets ont des buts distincts. L'objet retourné par la méthode `getComputedStyle` est en lecture seule et peut être utilisée pour inspecter le style de l'élément y compris ceux ajoutés via un élément `<style>` ou une feuille de style externe. L'objet `elt.style` doit quant à lui être utilisé pour mettre à jour une propriété de style sur un élément donné.

Le premier argument doit être un Element, sinon, si par exemple un #text Node est utilisé, une exception sera lancée. Depuis la version 1.9.2 de Gecko {{geckoRelease("1.9.2")}}, les URLs renvoyées ont désormais des guillemets autour de celles-ci: `url("http://foo.com/bar.jpg")`.

## Spécification

| Spécification                                                                                                            | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName("CSSOM", "#dom-window-getcomputedstyle", "getComputedStyle()")}}                     | {{Spec2("CSSOM")}}         |                      |
| {{SpecName("DOM2 Style", "#CSS-CSSview-getComputedStyle",
        "getComputedStyle()")}} | {{Spec2("DOM2 Style")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Window.getComputedStyle")}}

## Voir aussi

- {{domxref("window.getDefaultComputedStyle")}}
- {{cssxref("resolved_value", "Valeur résolue")}}
