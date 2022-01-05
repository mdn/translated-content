---
title: Element.querySelector()
slug: Web/API/Element/querySelector
translation_of: Web/API/Element/querySelector
---
{{APIRef("DOM")}}

La méthode **`querySelector()`** de l'interface [`Element`](/fr/docs/Web/API/Element) renvoie le premier élément descendant de l'élément sur lequel elle est invoquée qui correspond au groupe de sélecteurs spécifié.

## Syntaxe

    element = baseElement.querySelector(selectors);

### Paramètres

- `selectors`
  - : est un groupe de [sélecteurs](/fr/docs/Learn/CSS/Building_blocks/Selectors) à faire correspondre aux éléments descendants du [`Element`](/fr/docs/Web/API/Element) `baseElement` ; cette syntaxe CSS doit être valide ou une exception SyntaxError se produit. Le premier élément trouvé correspondant à ce groupe de sélecteurs est renvoyé.

### Valeur retournée

Le premier élément descendant de `baseElement` qui correspond au groupe de `selectors` « sélecteurs » spécifié. La hiérarchie entière des éléments est considérée lors de la mise en correspondance, y compris ceux qui sont en dehors de l'ensemble des éléments, y compris `baseElement` et ses descendants ; En d'autres termes, les sélecteurs sont d'abord appliqués au document entier, et non à l'élément de base, pour générer une liste initiale d'éléments potentiels. Les éléments résultants sont ensuite examinés pour voir s'ils sont des descendants de `baseElement`. La première correspondance de ces éléments restants est renvoyée par la méthode `querySelector()`.

Si aucune correspondance n'est trouvée, la valeur retournée est `null`.

### Exceptions

- SyntaxError
  - : Les `selectors` spécifiés sont invalides.

## Exemple

Dans ce premier exemple, est retourné le premier élément [`<style>`](/fr/docs/Web/HTML/Element/style) dans le corps du document HTML qui, soit n'a pas de type, soit a le type `text/css`:

```js
var el = document.body.querySelector("style[type='text/css'], style:not([type])");
```

### La hiérarchie entière compte

Cet exemple montre que la hiérarchie du document entier est prise en compte lors de l'application des `selectors`, de sorte que les niveaux en dehors du `baseElement` spécifié sont toujours pris en compte lors de la recherche des correspondances.

#### HTML

```html
<div>
  <h5>Original content</h5>
  <p>
    inside paragraph
    <span>inside span</span>
    inside paragraph
  </p>
</div>
<div>
  <h5>Output</h5>
  <div id="output"></div>
</div>
```

#### JavaScript

```js
var baseElement = document.querySelector("p");
document.getElementById("output").innerHTML = (baseElement.querySelector("div span").innerHTML);
```

#### Résultat

Le résultat ressemble à ceci :

{{EmbedLiveSample('Exemple', '', 200)}}

### Plus d'exemples

Voir [`Document.querySelector()`](/fr/docs/Web/API/Document/querySelector) pour des exemples supplémentaires du format approprié pour les sélecteurs.

## Spécifications

| Spécification                                                                                            | Statut                                       | Commentaire |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ----------- |
| {{SpecName('DOM WHATWG','#dom-parentnode-queryselectorall','querySelector()')}} | {{Spec2('DOM WHATWG')}}             |             |
| {{SpecName('Selectors API Level 2','#queryselectorall','querySelectorAll()')}} | {{Spec2('Selectors API Level 2')}} |             |
| {{SpecName('Selectors API Level 1','#queryselectorall','querySelectorAll()')}} | {{Spec2('Selectors API Level 1')}} |             |

## Compatibilité des navigateurs

{{Compat("api.Element.querySelector")}}

## Voir aussi

- [Localisation des éléments DOM avec les sélecteurs](/fr/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- [Sélecteurs d'attribut](/fr/docs/Web/CSS/Attribute_selectors) dans le guide CSS
- [Sélecteurs d'attribut](/fr/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) dans la zone d'apprentissage MDN
- [`element.querySelectorAll()`](/fr/docs/Web/API/Element/querySelectorAll)
- [`document.querySelector()`](/fr/docs/Web/API/Document/querySelector) et [`Document.querySelectorAll()`](/fr/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/fr/docs/Web/API/DocumentFragment/querySelector) et [`DocumentFragment.querySelectorAll()`](/fr/docs/Web/API/DocumentFragment/querySelectorAll)
- [`ParentNode.querySelector()`](/fr/docs/Web/API/ParentNode/querySelector) et [`ParentNode.querySelectorAll()`](/fr/docs/Web/API/ParentNode/querySelectorAll)
- [Exemples de code pour querySelector](/en-US/docs/Archive/Add-ons/Code_snippets/QuerySelector) Archive en anglais
- Autres méthodes qui prennent des sélecteurs : [`element.closest()`](/fr/docs/Web/API/Element/closest) et [`element.matches()`](/fr/docs/Web/API/Element/matches).
