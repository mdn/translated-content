---
title: HTMLSelectElement
slug: Web/API/HTMLSelectElement
l10n:
  sourceCommit: b2c8dcdae36907a87d1d1b9393ca4a35ebc765d6
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLSelectElement`** représente un élément HTML {{HTMLElement("select")}}. Cet élément partage aussi toute les propriétés et méthodes des autres elements HTML via l'interface {{DOMxRef("HTMLElement")}}.

{{InheritanceDiagram}}

## Propriétés d'instance

_Cette interface hérite des propriétés de {{DOMxRef("HTMLElement")}}, de {{DOMxRef("Element")}} et de {{DOMxRef("Node")}}._

- {{DOMxRef("HTMLSelectElement.autocomplete")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`autocomplete`](/fr/docs/Web/HTML/Reference/Elements/select#autocomplete), qui indique si la valeur du contrôle peut être automatiquement complétée par le navigateur.
- {{DOMxRef("HTMLSelectElement.disabled")}}
  - : Un booléen reflétant l'attribut HTML [`disabled`](/fr/docs/Web/HTML/Reference/Elements/select#disabled) qui indique si le contrôle est désactivé. S'il est désactivé, il n'accepte pas les clics.
- {{DOMxRef("HTMLSelectElement.form")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("HTMLFormElement")}} référençant le formulaire auquel cet élément est associé. Si l'élément n'est pas associé à un élément HTML {{HTMLElement("form")}}, il retourne `null`.
- {{DOMxRef("HTMLSelectElement.labels")}} {{ReadOnlyInline}}
  - : Un noeud ({{DOMxRef("NodeList")}}) d'éléments HTML {{HTMLElement("label")}} associés à l'élément.
- {{DOMxRef("HTMLSelectElement.length")}}
  - : Un `unsigned long`. Le nombre d'éléments HTML {{HTMLElement("option")}} dans cet élément `select`.
- {{DOMxRef("HTMLSelectElement.multiple")}}
  - : Un booléen reflétant l'attribut HTML [`multiple`](/fr/docs/Web/HTML/Reference/Elements/select#multiple) qui indique si plusieurs éléments peuvent être sélectionnés.
- {{DOMxRef("HTMLSelectElement.name")}}
  - : Une chaîne de caratères reflétant l'attribut HTML [`name`](/fr/docs/Web/HTML/Reference/Elements/select#name) contenant le nom de ce contrôle utilisé par les serveurs et les fonctions de recherche DOM.
- {{DOMxRef("HTMLSelectElement.options")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("HTMLOptionsCollection")}} représentant l'ensemble des {{HTMLElement("option")}} ({{DOMxRef("HTMLOptionElement")}}) contenus par cet élément.
- {{DOMxRef("HTMLSelectElement.required")}}
  - : Un booléen reflétant l'attribut HTML [`required`](/fr/docs/Web/HTML/Reference/Elements/select#required) qui indique si l'utilisateur·ice doit sélectionner une valeur avant de soumettre le formulaire.
- {{DOMxRef("HTMLSelectElement.selectedIndex")}}
  - : Un `long` reflétant l'indice du premier élément HTML {{HTMLElement("option")}} sélectionné. La valeur `-1` indique qu'aucun élément n'est sélectionné.
- {{DOMxRef("HTMLSelectElement.selectedOptions")}} {{ReadOnlyInline}}
  - : Une collection d'éléments ({{DOMxRef("HTMLCollection")}}) représentant l'ensemble des éléments HTML {{HTMLElement("option")}} qui sont sélectionnés.
- {{DOMxRef("HTMLSelectElement.size")}}
  - : Un `long` reflétant l'attribut HTML [`size`](/fr/docs/Web/HTML/Reference/Elements/select#size) attribut HTML, qui contient le nombre d'éléments visibles dans le contrôle. La valeur par défaut est 1, sauf si `multiple` est `true`, auquel cas elle est de 4.
- {{DOMxRef("HTMLSelectElement.type")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères représentant le type du contrôle de formulaire. Lorsque `multiple` est `true`, il retourne `"select-multiple"`&nbsp;; sinon, il retourne `"select-one"`.
- {{DOMxRef("HTMLSelectElement.validationMessage")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères représentant un message localisé qui décrit les contraintes de validation que le contrôle ne satisfait pas (le cas échéant). Cet attribut est la chaîne vide si le contrôle n'est pas un candidat à la validation des contraintes (`willValidate` est faux), ou s'il satisfait à ses contraintes.
- {{DOMxRef("HTMLSelectElement.validity")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("ValidityState")}} reflétant l'état de validité dans lequel se trouve ce contrôle.
- {{DOMxRef("HTMLSelectElement.value")}}
  - : Une chaîne de caractères reflétant la valeur du contrôle de formulaire. Renvoie la propriété `value` du premier élément d'option sélectionné s'il y en a un, sinon la chaîne vide.
- {{DOMxRef("HTMLSelectElement.willValidate")}} {{ReadOnlyInline}}
  - : Un booléen qui indique si le bouton est un candidat à la validation des contraintes. Il vaut `false` si des conditions l'empêchent de bénéficier de la validation par contrainte.

## Méthodes d'instance

_Cette interface hérite des méthodes de {{DOMxRef("HTMLElement")}}, et de {{DOMxRef("Element")}} et {{DOMxRef("Node")}}._

- {{DOMxRef("HTMLSelectElement.add()")}}
  - : Ajoute un élément à la collection d'éléments `option` pour cet élément `select`.
- {{DOMxRef("HTMLSelectElement.checkValidity()")}}
  - : Vérifie si l'élément a des contraintes et s'il les satisfait. Si l'élément ne respecte pas ses contraintes, le navigateur déclenche un évènement {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}} annulable sur l'élément (et retourne `false`).
- {{DOMxRef("HTMLSelectElement.item()")}}
  - : Obtient un élément de la collection d'options de l'élément {{HTMLElement("select")}}. Vous pouvez également accéder à un élément en spécifiant l'index entre des parenthèses ou des crochets de style tableau, sans appeler cette méthode explicitement.
- {{DOMxRef("HTMLSelectElement.namedItem()")}}
  - : Obtient l'élément dans la collection d'options avec le nom spécifié. La chaîne de nom peut correspondre soit au `id`, soit à l'attribut `name` d'un nœud d'option. Vous pouvez également accéder à un élément en spécifiant le nom entre des crochets de style tableau ou des parenthèses, sans appeler cette méthode explicitement.
- {{DOMxRef("HTMLSelectElement.remove()")}}
  - : Supprime l'élément à l'indice spécifié de la collection d'options pour cet élément `select`.
- {{DOMxRef("HTMLSelectElement.reportValidity()")}}
  - : Cette méthode signale à l'utilisateur·ice les problèmes liés aux contraintes sur l'élément, le cas échéant. S'il y a des problèmes, elle déclenche un évènement {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}} annulable sur l'élément, et retourne `false` ; s'il n'y a pas de problèmes, elle retourne `true`.
- {{DOMxRef("HTMLSelectElement.setCustomValidity()")}}
  - : Définit le message de validation personnalisé pour l'élément de sélection au message spécifié. Utilisez la chaîne vide pour indiquer que l'élément n'a _pas_ d'erreur de validité personnalisée.
- {{DOMxRef("HTMLSelectElement.showPicker()")}}
  - : Affiche le sélecteur d'options.

## Évènements

_Cette interface hérite des évènements de {{DOMxRef("HTMLElement")}}, ainsi que de {{DOMxRef("Element")}} et {{DOMxRef("Node")}}._

Écoutez ces évènements en utilisant {{DOMxRef("EventTarget/addEventListener", "addEventListener()")}} ou en affectant un écouteur d'évènement à la propriété `oneventname` de cette interface&nbsp;:

- Évènement {{DOMxRef("HTMLElement/change_event", "change")}}
  - : Se déclenche lorsque l'utilisateur·ice sélectionne une option.
- Évènement {{DOMxRef("HTMLElement/input_event", "input")}}
  - : S'active lorsque la `valeur` d'un élément {{HTMLElement("input")}}, {{HTMLElement("select")}} ou {{HTMLElement("textarea")}} a été modifiée.

## Exemples

### Obtenir des informations sur l'option sélectionnée

```js
/* en supposant que nous ayons le HTML suivant
<select id='s'>
    <option>Premier</option>
    <option selected>Deuxième</option>
    <option>Troisième</option>
</select>
*/

const select = document.getElementById("s");

// renvoie l'index de l'option sélectionnée
console.log(select.selectedIndex); // 1

// retourne la valeur de l'option sélectionnée
console.log(select.options[select.selectedIndex].value); // Deuxième
```

Une meilleure façon de suivre les modifications apportées à la sélection de l'utilisateur consiste à surveiller l'évènement {{DOMxRef("HTMLElement/change_event", "change")}} qui se produit sur le `<select>`. Cela vous indiquera quand la valeur change, et vous pourrez alors mettre à jour ce dont vous avez besoin. Voir [l'exemple fourni](/fr/docs/Web/API/HTMLElement/change_event#avec_un_élément_select) dans la documentation de l'évènement `change` pour plus de détails.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("select")}}, qui implémente cette interface.
