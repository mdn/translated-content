---
title: Element.closest()
slug: Web/API/Element/closest
translation_of: Web/API/Element/closest
browser-compat: api.Element.closest
---
{{APIRef('DOM')}}

La méthode **`closest()`** traverse [l'élément](/fr/docs/Web/API/Element) courant et ses parents (en direction de la racine) jusqu'à trouver un nœud qui correspond aux sélecteurs exprimés par la chaîne de caractères passée en argument. Elle renverra l'élément ou l'ancêtre le plus proche qui correspond. Si aucun élément ne correspond, la méthode renvoie `null`.

## Syntaxe

```js
closest(selecteurs)
```

### Paramètres

- `selecteurs`
  - : Une chaîne de caractères contenant une liste de sélecteurs. Par exemple `p:hover, .toto + q`.

### Valeur de retour

L'élément ([`Element`](/fr/docs/Web/API/Element)) qui est l'ancêtre le plus proche de l'élément courant et qui correspond aux sélecteurs. S'il n'y en a aucun, ce sera `null`.

### Exceptions

Une exception [`SyntaxError`](/fr/docs/Web/API/DOMException#syntaxerror) est levée si la chaîne de caractères `selecteurs` n'est pas une liste de sélecteurs valide.

## Exemples

### HTML

```html
<article>
  <div id="div-01">Voici div-01
    <div id="div-02">Voici div-02
      <div id="div-03">Voici div-03</div>
    </div>
  </div>
</article>
```

### JavaScript

```js
const el = document.getElementById('div-03');

const r1 = el.closest('#div-02');
// Renvoie l'élément avec l'identifiant div-02

const r2 = el.closest('div div');
// Renvoie le plus proche ancêtre qui est un div dans un div
// Ici, c'est div-03 lui-même

const r3 = el.closest('article > div');
// Renvoie le plus proche ancêtre qui est un div et qui a un
// article parent, il s'agit ici de div-01

const r4 = el.closest(':not(div)');
// Renvoie le plus proche ancêtre qui n'est pas un div,
// c'est l'article englobant
```

## Prothèse d'émulation (<i lang="en">polyfill</i>)

Pour les navigateurs qui ne prennent pas en charge `Element.closest()`, mais qui implémentent `element.matches()` (ou un équivalent préfixé comme IE9+), il est possible d'implémenter une prothèse&nbsp;:

```js
if (!Element.prototype.matches) {
  Element.prototype.matches =
    Element.prototype.msMatchesSelector ||
    Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function(s) {
    var el = this;

    do {
      if (Element.prototype.matches.call(el, s)) return el;
      el = el.parentElement || el.parentNode;
    } while (el !== null && el.nodeType === 1);
    return null;
  };
}
```

Si la prise en charge d'IE8 est nécessaire, le fragment de code qui suit fera l'affaire (lentement mais sûrement). Toutefois, il ne prend en charge que les sélecteurs CSS 2.1 pour IE8 et entraînera une importante baisse de performance pour les sites web en production.

```js
if (window.Element && !Element.prototype.closest) {
  Element.prototype.closest = function(s) {
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

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

### Notes de compatibilité

- Pour Edge 15-18, `document.createElement(tagName).closest(tagName)` renverra `null` si l'élément n'est pas d'abord connecté (directement ou indirectement) à l'objet de contexte, par exemple l'objet [`Document`](/fr/docs/Web/API/Document) dans le cas du DOM classique.

## Voir aussi

- L'interface [`Element`](/fr/docs/Web/API/Element)
- [La syntaxe des sélecteurs CSS](/fr/docs/Learn/CSS/Building_blocks/Selectors)
- Les autres méthodes qui utilisent des sélecteurs en argument&nbsp;:
  - [`element.querySelector()`](/fr/docs/Web/API/Element/querySelector)
  - [`element.matches()`](/fr/docs/Web/API/Element/matches)
