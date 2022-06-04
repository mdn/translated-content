---
title: Element.matches()
slug: Web/API/Element/matches
tags:
  - API
  - DOM
  - Selector
translation_of: Web/API/Element/matches
---
{{ APIRef("DOM") }}

La méthode **`element.matches()`** renvoie `true` lorsque l'élément peut être sélectionné par le sélecteur défini par la chaîne passée en paramètre&nbsp;; sinon, elle renvoie `false`.

> **Attention :** Certains navigateurs implémentent cette méthode sous le nom `matchesSelector()` non-standardisé et préfixé.

## Syntaxe

    var result = element.matches(selectorString);

- `result` contient la valeur retournée `true` ou `false`.
- `selectorString` est une chaîne définissant le sélecteur à tester sur l'élément.

## Exemple

```html
<ul id="birds">
  <li>perroquet amazone</li>
  <li class="endangered">aigle des Philippines</li>
  <li>pélican blanc</li>
</ul>

<script type="text/javascript">
  var birds = document.getElementsByTagName('li');

  for (var i = 0; i < birds.length; i++) {
    if (birds[i].matches('.endangered')) {
      console.log('Le - ' + birds[i].textContent + '- est en voie de disparition !');
    }
  }
</script>
```

Ce code affichera l'alerte "Le - aigle des Philippines - est en voie de disparition !" sur la console, puisque l'élèment possède l'attribut` class `de valeur `endangered`.

## Exceptions

- `SYNTAX_ERR`
  - : Lorsque la chaîne passée en paramêtre défini sélecteur invalide.

## Polyfill

Pour les navigateurs qui ne supportent pas `Element.matches()` ou `Element.matchesSelector()`, mais fournissent le support de `document.querySelectorAll()`, il existe un _polyfill_&nbsp;:

    if (!Element.prototype.matches) {
        Element.prototype.matches =
            Element.prototype.matchesSelector ||
            Element.prototype.mozMatchesSelector ||
            Element.prototype.msMatchesSelector ||
            Element.prototype.oMatchesSelector ||
            Element.prototype.webkitMatchesSelector ||
            function(s) {
                var matches = (this.document || this.ownerDocument).querySelectorAll(s),
                    i = matches.length;
                while (--i >= 0 && matches.item(i) !== this) {}
                return i > -1;
            };
    }

Cependant, étant donné la possibilité de prendre en charge les anciens navigateurs, les éléments suivants devraient suffire pour la plupart (sinon tous) des cas pratiques (c'est-à-dire le support IE9 +).

```html
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector;
}
```

## Spécification

| Spécification                                                                                            | Status                           |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-element-matches', 'Element.prototype.matches')}} | {{Spec2('DOM WHATWG')}} |

## Compatibilité des navigateurs

{{Compat("api.Element.matches")}}

## Voir aussi

- [La syntaxe des sélecteurs](/fr/Apprendre/CSS/Introduction_%C3%A0_CSS/Les_s%C3%A9lecteurs)
- autres méthodes qui utilisent les sélecteurs : {{domxref("element.querySelector()")}} et {{domxref("element.closest()")}}.
