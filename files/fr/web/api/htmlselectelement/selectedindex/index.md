---
title: HTMLSelectElement.selectedIndex
slug: Web/API/HTMLSelectElement/selectedIndex
translation_of: Web/API/HTMLSelectElement/selectedIndex
---
{{APIRef("HTML DOM")}}

**`HTMLSelectElement.selectedIndex`** est un `long` qui représente l'index du premier élément sélectionné {{HTMLElement("option")}}. La valeur `-1` indique qu'aucun élément est sélectionné.

## Syntaxe

    var index = selectElem.selectedIndex;
    selectElem.selectedIndex = index;

## Exemple

### HTML

```html
<p id="p">selectedIndex: 0</p>

<select id="select">
  <option selected>Option A</option>
  <option>Option B</option>
  <option>Option C</option>
  <option>Option D</option>
  <option>Option E</option>
</select>
```

### JavaScript

```js
var selectElem = document.getElementById('select');
var pElem = document.getElementById('p');

// Quand une nouvelle <option> est selectionnée
selectElem.addEventListener('change', function() {
  var index = selectElem.selectedIndex;
  // Rapporter cette donnée au <p>
  pElem.innerHTML = 'selectedIndex: ' + index;
})
```

{{EmbedLiveSample("Exemple", "200px", "80px")}}

## Spécifications

| Spécification                                                                                                    | Statut                           | Commentaire                                                                       |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#dom-select-selectedindex', 'HTMLSelectElement')}}         | {{Spec2('HTML WHATWG')}} | Pas de changement depuis le snapshot précédent, {{SpecName("HTML5 W3C")}}. |
| {{SpecName('HTML5 W3C', 'forms.html#dom-select-selectedindex', 'HTMLSelectElement')}} | {{Spec2('HTML5 W3C')}}     | Définition initiale, snapshot de {{SpecName("HTML WHATWG")}}.            |

## Compatibilité entre les navigateurs

{{Compat("api.HTMLSelectElement.selectedIndex")}}
