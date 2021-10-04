---
title: HTMLButtonElement
slug: Web/API/HTMLButtonElement
tags:
  - API
  - HTML DOM
  - Interface
  - Reference
  - TopicStub
translation_of: Web/API/HTMLButtonElement
---
{{APIRef("HTML DOM")}}

L'interface   **`HTMLButtonElement`**  fournit des propriétés et des méthodes (au-delà de l'interface d'objet {{HTMLElement ("button")}} dont elle dispose également par héritage) pour manipuler la présentation et la présentation des éléments de bouton.

{{InheritanceDiagram(600, 120)}}

## Propriétés

Hérite des propriétés de son parent,  *{{domxref("HTMLElement")}}.*

- {{domxref("HTMLButtonElement.accessKey")}}
  - : Est un {{domxref ("DOMString")}} indiquant la touche de clavier à caractère unique permettant d'accéder au bouton.
- {{domxref("HTMLButtonElement.autofocus")}}
  - : Est un {{domxref ("Boolean")}} indiquant si le contrôle doit avoir ou non le focus d'entrée lors du chargement de la page, sauf si l'utilisateur le remplace, par exemple en tapant un contrôle différent. Cet attribut est spécifié pour un seul élément associé à un formulaire dans un document.
- {{domxref("HTMLButtonElement.disabled")}}
  - : Est un {{domxref ("Boolean")}} indiquant si le contrôle est désactivé ou non, ce qui signifie qu'il n'accepte aucun clic .
- {{domxref("HTMLButtonElement.form")}} {{readonlyInline}}
  - : Est un {{domxref ("HTMLFormElement")}} reflétant le formulaire auquel ce bouton est associé. Si le bouton est un descendant d'un élément de formulaire, cet attribut est l'ID de cet élément de formulaire.
    Si le bouton n'est pas un descendant d'un élément de formulaire, l'attribut peut être l'identifiant de n'importe quel élément de formulaire dans le même document auquel il est lié, ou la valeur null si aucun élément ne correspond .
- {{domxref("HTMLButtonElement.formAction")}}
  - : Est un {{domxref ("DOMString")}} reflétant l'URI d'une ressource qui traite les informations soumises par le bouton. S'il est spécifié, cet attribut remplace l'attribut {{htmlattrxref ("action", "form")}} de l'élément {{HTMLElement ("form")}} à qui appartient cet élément.
- {{domxref("HTMLButtonElement.formEnctype")}}
  - : Est un {{domxref ("DOMString")}} reflétant le type de contenu utilisé pour soumettre le formulaire au serveur. S'il est spécifié, cet attribut remplace l'attribut {{htmlattrxref ("enctype", "form")}} de l'élément {{HTMLElement ("form")}} à qui appartient cet élément.
- {{domxref("HTMLButtonElement.formMethod")}}
  - : Est un {{domxref ("DOMChaine")}} reflétant la méthode HTTP que le navigateur utilise pour soumettre le formulaire. S'il est spécifié, cet attribut remplace l'attribut {{htmlattrxref ("méthode", "form")}} de l'élément {{HTMLElement ("form")}} à qui appartient cet élément.
- {{domxref("HTMLButtonElement.formNoValidate")}}
  - : Est un {{domxref ("Boolean")}} indiquant que le formulaire ne doit pas être validé lors de sa soumission. S'il est spécifié, cet attribut remplace l'attribut {{htmlattrxref ("novalidate", "form")}} de l'élément {{HTMLElement ("form")}} à qui appartient cet élément.
- {{domxref("HTMLButtonElement.formTarget")}}
  - : Est un {{domxref ("DOMChaîne")}} reflétant un nom ou un mot clé indiquant où afficher la réponse reçue après la soumission du formulaire. S'il est spécifié, cet attribut remplace l'attribut {{htmlattrxref ("target", "form")}} de l'élément {{HTMLElement ("form")}} à qui appartient cet élément.
- {{domxref("HTMLButtonElement.labels")}} {{readonlyInline}}
  - : Est un {{domxref ("NodeList")}} qui représente une liste d'éléments {{HTMLElement ("label")}} qui sont des étiquettes pour ce bouton.
- {{domxref("HTMLButtonElement.menu")}} {{experimental_inline}}
  - : Est-ce un {{domxref ("HTMLMenuElement")}} représentant l'élément de menu à afficher si le bouton est cliqué et de type = "menu".
- {{domxref("HTMLButtonElement.name")}}
  - : Est un {{domxref ("DOMString")}} représentant le nom de l'objet lorsqu'il est soumis avec un formulaire. {{HTMLVersionInline (5)}} Si spécifié, il ne doit pas s'agir d'une chaîne vide.
- {{domxref("HTMLButtonElement.tabIndex")}}
  - : Est un  `long` qui représente la position de cet élément dans l'ordre de tabulation .
- {{domxref("HTMLButtonElement.type")}}

  - : : Est un {{domxref ("DOMString")}} indiquant le comportement du bouton. C'est un attribut énuméré avec les valeurs possibles suivantes:

    - `"submit"`: Le bouton soumet le formulaire. Il s'agit de la valeur par défaut si l'attribut n'est pas spécifié, {{HTMLVersionInline (5)}} ou s'il est modifié dynamiquement en une valeur vide ou non valide.
    - `"reset"`: Le bouton réinitialise le formulaire.
    - `"button"`: Le bouton ne fait rien.
    - `"menu"`: Le bouton affiche un menu. {{experimental_inline}}

- {{domxref("HTMLButtonElement.validationMessage")}} {{readonlyInline}}
  - : Est un {{domxref ("DOMString")}} représentant le message localisé décrivant les contraintes de validation que le contrôle ne satisfait pas (le cas échéant). Cet attribut est la chaîne vide si le contrôle n'est pas candidat à la validation de contrainte (willValidate est false) ou s'il respecte ses contraintes.
- {{domxref("HTMLButtonElement.validity")}} {{readonlyInline}}
  - : Est un {{domxref ("ValidityState")}} représentant les états de validité dans lesquels se trouve ce bouton.
- {{domxref("HTMLButtonElement.value")}}
  - : Est un {{domxref ("DOMString")}} représentant la valeur de contrôle de formulaire actuelle du bouton.
- {{domxref("HTMLButtonElement.willValidate")}} {{readonlyInline}}
  - : Est un {{domxref ("Boolean")}} indiquant si le bouton est candidat à la validation de contrainte. Il est  `false` si des conditions l'empêchent de valider la contrainte .

## Les méthodes

Hérite des méthodes de son parent, {{domxref ("HTMLElement")}}.

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Nom</th>
      <th scope="col">Type de retour</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>checkValidity()</code></td>
      <td>{{domxref("Boolean")}}</td>
      <td><p>Non pris en charge pour les éléments de bouton.</p></td>
    </tr>
    <tr>
      <td>
        <p><code>setCustomValidity(in DOMString error)</code></p>
      </td>
      <td><code>void</code></td>
      <td>Non pris en charge pour les éléments de bouton.</td>
    </tr>
  </tbody>
</table>

Avec un navigateur basé sur Gecko, utilisez la pseudo-classe {{cssxref (": - moz-submit-invalid")}} pour styler les boutons de soumission en fonction de la validation d'un formulaire.

## Spécifications

| Spécification                                                                                                | Statut                           | Commentaire                                                                                                                                                                                                                                                                                                                                                                                                                                 |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "forms.html#the-button-element", "HTMLButtonElement")}} | {{Spec2('HTML WHATWG')}} | L'attribut suivant a été ajouté : `menu`. L'attribut  `type` peut prendre une valeur supplémentaire , `"menu"`.                                                                                                                                                                                                                                                                                                                             |
| {{SpecName('HTML5 W3C', "forms.html#the-button-element", "HTMLButtonElement")}}     | {{Spec2('HTML5 W3C')}}     | Les attributs  `tabindex` et `accesskey`,  sont maintenant définis sur {{domxref("HTMLElement")}}. Les attributs suivants ont été ajoutés : `autofocus`, `formAction`, `formEnctype`, `formMethod`, `formNoValidate`, `formTarget`, `labels`, `validity`, `validationMessage`, and `willValidate`. Les méthodes suivantes ont été ajoutées : `checkValidity()`, `setCustomValidity()`. The `type` attribute is no more read-only. |
| {{SpecName('DOM2 HTML', 'html.html#ID-34812697', 'HTMLButtonElement')}}             | {{Spec2('DOM2 HTML')}}     | Aucun changement de  {{SpecName("DOM1")}}.                                                                                                                                                                                                                                                                                                                                                                                          |
| {{SpecName('DOM1', 'level-one-html.html#ID-34812697', 'HTMLButtonElement')}}         | {{Spec2('DOM1')}}         | . Définition initiale                                                                                                                                                                                                                                                                                                                                                                                                                       |

## Compatibilité des navigateurs

{{Compat("api.HTMLButtonElement")}}

## Voir également

- Élément HTML implémentant cette interface : {{HTMLElement("button")}}
