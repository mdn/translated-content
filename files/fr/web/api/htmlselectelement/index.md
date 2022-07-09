---
title: HTMLSelectElement
slug: Web/API/HTMLSelectElement
translation_of: Web/API/HTMLSelectElement
---
{{ APIRef("HTML DOM") }}

L'interface **`HTMLSelectElement`** représente un élément HTML {{HTMLElement("select")}}. Cet élément partage aussi toute les propriétés et méthodes des autres elements HTML via l'interface {{ domxref("HTMLElement") }}.

{{InheritanceDiagram(600, 120)}}

## Propriétés

_Cette interface hérite des propriétés de {{domxref("HTMLElement")}}, de {{domxref("Element")}} et de {{domxref("Node")}}._

- {{domxref("HTMLSelectElement.autofocus")}}
  - : Un {{jsxref("Boolean")}} reflétant l'attribut HTML {{htmlattrxref("autofocus", "select")}} qui indique si le contrôle doit bénéficier d'une priorité d'entrée au chargement de la page, à moins que l'utilisateur ne passe outre, par exemple en saisissant un autre contrôle. Cet attribut ne peut être spécifié que pour un seul élément associé à un formulaire dans un document.
- {{domxref("HTMLSelectElement.disabled")}}
  - : Un {{jsxref("Boolean")}} reflétant l'attribut {{htmlattrxref("disabled", "select")}} qui indique si le contrôle est désactivé. S'il est désactivé, il n'accepte pas les clics.
- {{domxref("HTMLSelectElement.form")}} {{ReadOnlyInline}}
  - : Un {{domxref("HTMLFormElement")}} référençant le formulaire auquel cet élément est associé. Si l'élément n'est pas associé à un élément {{HTMLElement("form")}}, il retourne `null`.
- {{domxref("HTMLSelectElement.labels")}} {{ReadOnlyInline}}
  - : Une {{domxref("NodeList")}} d'éléments {{HTMLElement("label")}} associés à l'élément.
- {{domxref("HTMLSelectElement.length")}}
  - : Un `unsigned long`, le nombre d'éléments {{HTMLElement("option")}} dans cet élément `select`.
- {{domxref("HTMLSelectElement.multiple")}}
  - : Un {{jsxref("Boolean")}} reflétant l'attribut {{htmlattrxref("multiple", "select")}} qui indique si plusieurs éléments peuvent être sélectionnés.
- {{domxref("HTMLSelectElement.name")}}
  - : Une chaîne de caratères {{domxref("DOMString")}} reflétant l'attribut HTML {{htmlattrxref("name", "select")}} contenant le nom de ce contrôle utilisé par les serveurs et les fonctions de recherche DOM.
- {{domxref("HTMLSelectElement.options")}} {{ReadOnlyInline}}
  - : Une {{domxref("HTMLOptionsCollection")}} représentant l'ensemble des {{HTMLElement("option")}} ({{domxref("HTMLOptionElement")}}) contenus par cet élément.
- {{domxref("HTMLSelectElement.required")}}
  - : Un {{jsxref("Boolean")}} reflétant l'attribut {{htmlattrxref("required", "select")}} qui indique si l'utilisateur doit sélectionner une valeur avant de soumettre le formulaire.
- {{domxref("HTMLSelectElement.selectedIndex")}}
  - : Un `long` reflétant l'indice du premier élément {{HTMLElement("option")}} sélectionné. La valeur `-1` indique qu'aucun élément n'est sélectionné.
- {{domxref("HTMLSelectElement.selectedOptions")}} {{ReadOnlyInline}}
  - : Une {{domxref("HTMLCollection")}} représentant l'ensemble des éléments {{HTMLElement("option")}} qui sont sélectionnés.
- {{domxref("HTMLSelectElement.size")}}
  - : Un `long` reflétant l'attribut {{htmlattrxref("size", "select")}} attribut HTML, qui contient le nombre d'éléments visibles dans le contrôle. La valeur par défaut est 1, sauf si `multiple` est `true`, auquel cas elle est de 4.
- {{domxref("HTMLSelectElement.type")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères {{domxref("DOMString")}} représentant le type du contrôle de formulaire. Lorsque `multiple` est `true`, il renvoie `"select-multiple"` ; sinon, il renvoie `"select-one"`.
- {{domxref("HTMLSelectElement.validationMessage")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères {{domxref("DOMString")}} représentant un message localisé qui décrit les contraintes de validation que le contrôle ne satisfait pas (le cas échéant). Cet attribut est la chaîne vide si le contrôle n'est pas un candidat à la validation des contraintes (`willValidate` est faux), ou s'il satisfait à ses contraintes.
- {{domxref("HTMLSelectElement.validity")}} {{ReadOnlyInline}}
  - : Un {{domxref("ValidityState")}} reflétant l'état de validité dans lequel se trouve ce contrôle.
- {{domxref("HTMLSelectElement.value")}}
  - : Une chapine de caractères {{domxref("DOMString")}} reflétant la valeur du contrôle de formulaire. Renvoie la propriété `value` du premier élément d'option sélectionné s'il y en a un, sinon la chaîne vide.
- {{domxref("HTMLSelectElement.willValidate")}} {{ReadOnlyInline}}
  - : Un {{jsxref("Boolean")}} qui indique si le bouton est un candidat à la validation des contraintes. Il vaut `false` si des conditions l'empêchent de bénéficier de la validation par contrainte.

## Méthodes

_Cette interface hérite des méthodes de {{domxref("HTMLElement")}}, et de {{domxref("Element")}} et {{domxref("Node")}}._

- {{domxref("HTMLSelectElement.add()")}}
  - : Ajoute un élément à la collection d'éléments `option` pour cet élément `select`.
- {{domxref("HTMLSelectElement.blur()")}} {{deprecated_inline}}
  - : Supprime le focus d'entrée de cet élément. _Cette méthode est maintenant mise en œuvre sur {{domxref("HTMLElement")}}._.
- {{domxref("HTMLSelectElement.checkValidity()")}}
  - : Vérifie si l'élément a des contraintes et s'il les satisfait. Si l'élément ne respecte pas ses contraintes, le navigateur déclenche un événement {{domxref("HTMLInputElement/invalid_event", "invalid")}} annulable sur l'élément (et retourne `false`).
- {{domxref("HTMLSelectElement.focus()")}} {{deprecated_inline}}
  - : Donne le focus d'entrée à cet élément. _Cette méthode est maintenant mise en œuvre sur {{domxref("HTMLElement")}}_.
- {{domxref("HTMLSelectElement.item()")}}
  - : Obtient un élément de la collection d'options de l'élément {{HTMLElement("select")}}. Vous pouvez également accéder à un élément en spécifiant l'index entre des parenthèses ou des crochets de style tableau, sans appeler cette méthode explicitement.
- {{domxref("HTMLSelectElement.namedItem()")}}
  - : Obtient l'élément dans la collection d'options avec le nom spécifié. La chaîne de nom peut correspondre soit au `id`, soit à l'attribut `name` d'un nœud d'option. Vous pouvez également accéder à un élément en spécifiant le nom entre des crochets de style tableau ou des parenthèses, sans appeler cette méthode explicitement.
- {{domxref("HTMLSelectElement.remove()")}}
  - : Supprime l'élément à l'indice spécifié de la collection d'options pour cet élément `select`.
- {{domxref("HTMLSelectElement.reportValidity()")}}
  - : Cette méthode signale à l'utilisateur les problèmes liés aux contraintes sur l'élément, le cas échéant. S'il y a des problèmes, elle déclenche un événement {{domxref("HTMLInputElement/invalid_event", "invalid")}} annulable sur l'élément, et retourne `false` ; s'il n'y a pas de problèmes, elle retourne `true`.
- {{domxref("HTMLSelectElement.setCustomValidity()")}}
  - : Définit le message de validation personnalisé pour l'élément de sélection au message spécifié. Utilisez la chaîne vide pour indiquer que l'élément n'a _pas_ d'erreur de validité personnalisée.

## Événements

Écoutez ces événements en utilisant {{domxref("EventTarget/addEventListener", "addEventListener()")}} ou en affectant un écouteur d'événements à la propriété `oneventname` de cette interface :

- Événement {{domxref("HTMLElement/input_event", "input")}}
  - : S'active lorsque la `valeur` d'un élément {{HTMLElement("input")}}, {{HTMLElement("select")}} ou {{HTMLElement("textarea")}} a été modifiée.

## Exemple

### Obtenir des informations sur l'option sélectionnée

```js
/* en supposant que nous ayons le HTML suivant
<select id='s'>
    <option>Premier</option>
    <option selected>Deuxième</option>
    <option>Troisième</option>
</select>
*/

const select = document.getElementById('s');

// renvoie l'index de l'option sélectionnée
console.log(select.selectedIndex); // 1

// retourne la valeur de l'option sélectionnée
console.log(select.options[select.selectedIndex].value) // Deuxième
```

Une meilleure façon de suivre les modifications apportées à la sélection de l'utilisateur consiste à surveiller l'événement {{domxref("HTMLElement/change_event", "change")}} qui se produit sur le `<select>`. Cela vous indiquera quand la valeur change, et vous pourrez alors mettre à jour ce dont vous avez besoin. Voir [l'exemple fourni](/fr/docs/Web/API/HTMLElement/change_event#select_element) dans la documentation de l'événement `change` pour plus de détails.

## Spécifications

| Spécification                                                                                            | Statut                           | Commentaire                                                                                                                                                                                                                                                                                                                                         |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', '#htmlselectelement', 'HTMLSelectElement')}}             | {{Spec2('HTML WHATWG')}} | Ajoute la propriété `autocomplete` et la méthode `reportValidity()`.                                                                                                                                                                                                                                                                                |
| {{SpecName('HTML5 W3C', 'forms.html#htmlselectelement', 'HTMLSelectElement')}} | {{Spec2('HTML5 W3C')}}     | Ajoute les propriétés `autofocus`, `form`, `required`, `labels`, `selectedOptions`, `willValidate`, `validity` et `validationMessage`. La propriété `tabindex` et les méthodes `blur()` et `focus()` ont été déplacées vers {{domxref("HTMLElement")}}. Les méthodes `item()`, `namedItem()`, `checkValidity()` et `setCustomValidity()`. |
| {{SpecName('DOM2 HTML', 'html.html#ID-94282980', 'HTMLSelectElement')}}         | {{Spec2('DOM2 HTML')}}     | `options` retourne désormais un {{domxref("HTMLOptionsCollection")}}. `length` retourne désormais un `unsigned long`.                                                                                                                                                                                                                   |
| {{SpecName('DOM1', 'level-one-html.html#ID-94282980', 'HTMLSelectElement')}}     | {{Spec2('DOM1')}}         | Définition initiale.                                                                                                                                                                                                                                                                                                                                |

## Compatibilité des navigateurs

{{Compat("api.HTMLSelectElement")}}

## Voir aussi

- L'élément HTML {{HTMLElement("select")}}, qui implémente cette interface.
