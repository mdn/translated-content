---
title: Element.getElementsByTagNameNS()
slug: Web/API/Element/getElementsByTagNameNS
tags:
  - API
  - DOM
  - Element
  - Méthode
  - Reference
translation_of: Web/API/Element/getElementsByTagNameNS
---
{{APIRef("DOM")}}

La méthode **`Element.getElementsByTagNameNS()`** renvoie un objet {{domxref("HTMLCollection")}} avec le nom de balise donné appartenant à l'espace de noms donné. Elle est semblable à la méthode {{Domxref("Document.getElementsByTagNameNS")}} mais cette dernière recherche sur l'ensemble du document tandis que `getElementsByTagNameNS()` recherche parmi les descendants de l'élément courant.

## Syntaxe

    elements = element.getElementsByTagNameNS(namespaceURI,localName);

### Paramètres

- `namespaceURI`
  - : L'URI de l'espace de noms des éléments à rechercher (cf. [`namespaceURI`](/fr/docs/Web/API/Element/namespaceURI)). Par exemple, si vous recherchez des éléments XHTML, utilisez l'URI d'espace de noms XHTML, `http://www.w3.org/1999/xhtml`.
- `localName`
  - : Le nom local des éléments à rechercher ou la valeur spéciale `"*"` (correspondant à tous les éléments). Voir {{domxref("Node.localName")}}.

### Valeur de retour

Une collection {{domxref("HTMLCollection")}} des éléments trouvés, dans l'ordre d'apparition dans l'arbre du DOM.

## Exemples

```js
// vérifie l'alignement d'une série de cellules d'un tableau dans un document XHTML.
var table = document.getElementById("forecast-table");
var cells = table.getElementsByTagNameNS("http://www.w3.org/1999/xhtml", "td");
for (var i = 0; i < cells.length; i++) {
  var axis = cells[i].getAttribute("axis");
  if (axis == "year") {
    // saisit les données
  }
}
```

## Spécifications

| Spécification                                                                                                                            | État                             | Commentaires                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#dom-element-getelementsbytagnamens', 'Element.getElementsByTagNameNS()')}} | {{Spec2('DOM WHATWG')}} | Modification du type de la valeur de retour : passage de {{domxref("NodeList")}} à {{domxref("HTMLCollection")}}. |
| {{SpecName('DOM3 Core', 'core.html#ID-A6C90942', 'Element.getElementsByTagNameNS()')}}                     | {{Spec2('DOM3 Core')}}     | Aucune modification depuis {{SpecName('DOM2 Core')}}.                                                                          |
| {{SpecName('DOM2 Core', 'core.html#ID-A6C90942', 'Element.getElementsByTagNameNS()')}}                     | {{Spec2('DOM2 Core')}}     | Définition initiale.                                                                                                                  |

## Compatibilité des navigateurs

{{Compat("api.Element.getElementsByTagNameNS")}}
