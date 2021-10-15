---
title: Element.closest()
slug: Web/API/Element/closest
tags:
  - API
  - DOM
  - Element
  - Méthodes
translation_of: Web/API/Element/closest
---
{{APIRef('Shadow DOM')}}

La méthode **`Element.closest()`** renvoie l'ancêtre le plus proche de l'élément courant (ou l'élément courant) qui correspond aux sélecteurs passés comme paramètres. S'il n'existe pas de tel ancêtre, la méthode renvoie `null`.

## Syntaxe

    var elt = element.closest(selecteurs);

### Paramètres

- `selecteurs`
  - : Une chaîne {{domxref("DOMString")}} qui contient une liste de sélecteurs tels que `"p:hover, .toto + q"`

### Valeur de retour

L'élément ({{domxref("Element")}}) qui est le plus proche ancêtre de l'élément courant et qui correspond aux sélecteurs décrits dans le paramètres ou {{jsxref("null")}} s'il n'y en a aucun.

### Exceptions

- {{exception("SyntaxError")}} sera levée si `selecteurs` n'est pas une liste de sélecteurs valide.

## Exemples

### HTML

```html
<article>
  <div id="div-01">Here is div-01
    <div id="div-02">Here is div-02
      <div id="div-03">Here is div-03</div>
    </div>
  </div>
</article>
```

### JavaScript

```js
var el = document.getElementById('div-03');

var r1 = el.closest("#div-02");
// Renvoie l'élément avec l'identifiant id=div-02

var r2 = el.closest("div div");
// Renvoie le plus proche ancêtre qui est un div
// dans un div. Ici, c'est div-03 lui-même.

var r3 = el.closest("article > div");
// Renvoie le plus proche ancêtre qui est un div
// et dont l'élément parent est article. Ici c'est
// div-01.

var r4 = el.closest(":not(div)");
// Renvoie le plus proche ancêtre qui n'est pas un
// div. Dans ce cas, c'est l'élément article.
```

## Polyfill

Pour les navigateurs qui ne prennent pas en charge `Element.closest()` mais qui permettent d'utiliser `element.matches()` (ou un équivalent préfixé, à partir d'IE9+), on peut utiliser le polyfill suivant :

```js
if (!Element.prototype.matches)
    Element.prototype.matches = Element.prototype.msMatchesSelector ||
                                Element.prototype.webkitMatchesSelector;

if (!Element.prototype.closest)
    Element.prototype.closest = function(s) {
        var el = this;
        if (!document.documentElement.contains(el)) return null;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType == 1);
        return null;
    };
```

Cependant, si vous avez besoin de supporter IE 8, vous pouvez utiliser la prothèse suivante qui marchera, mais beaucoup plus lentement. Elle ne supporte que les sélecteurs CSS 2.1 dans IE 8, et peut causer de gros pics de latence dans les sites web :

```js
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest =
  function(s) {
    var matches = (this.document || this.ownerDocument).querySelectorAll(s),
        i,
        el = this;
    do {
      i = matches.length;
      while (--i >= 0 && matches.item(i) !== el) {};
    } while ((i < 0) && (el = el.parentElement));
    return el;
  };
}
```

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName('DOM WHATWG', '#dom-element-closest', 'Element.closest()')}} | {{Spec2('DOM WHATWG')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Element.closest")}}

### Notes de compatibilité

- Dans Edge `document.createElement(tagName).closest(tagName)` retournera `null` si l'élément n'est pas attaché au DOM au préalable.

## Voir aussi

- L'interface {{domxref("Element")}}
- [La syntaxe pour les sélecteurs](/fr/Apprendre/CSS/Les_bases/Les_sélecteurs)
- Autres méthodes utilisant des sélecteurs: {{domxref("element.querySelector()")}} et {{domxref("element.matches()")}}.
