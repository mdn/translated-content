---
title: Indications élémentaires pour les formulaires
slug: conflicting/Web/Accessibility/ARIA_64707ba1917a56654679cbe273e2f4ea
tags:
  - ARIA
  - Accessibilité
  - Formulaire
translation_of: Web/Accessibility/ARIA/forms/Basic_form_hints
original_slug: Web/Accessibility/ARIA/forms/Basic_form_hints
---
## Labels de formulaire

Lors de l’implémentation de formulaires à l’aide d’éléments de formulaire HTML classiques, il est important de fournir des labels pour les contrôles et d’associer explicitement un label avec son contrôle. Lorsqu’un utilisateur de lecteur d’écran navigue sur une page, le lecteur d’écran décrit les contrôles de formulaire&nbsp;; mais sans association directe entre un contrôle et son label, le lecteur d’écran n’a aucun moyen de savoir quel est le label correspondant.

L’exemple ci-dessous montre un formulaire basique avec des labels. Remarquez que chaque élément {{ HTMLElement("input") }} possède un `id`, et chaque élément {{ HTMLElement("label") }} a un attribut `for` indiquant l’`id` de l’{{ HTMLElement("input") }} associé.

_Exemple 1. Formulaire basique avec labels_

```html
<form>
  <ul>
    <li>
      <input id="vin-1" type="checkbox" value="riesling"/>
      <label for="vin-1">Berg Rottland Riesling</label>
    </li>
    <li>
      <input id="vin-2" type="checkbox" value="weissbergunder"/>
      <label for="vin-2">Weissbergunder</label>
    </li>
    <li>
      <input id="vin-3" type="checkbox" value="pinot-grigio"/>
      <label for="vin-3">Pinot Grigio</label>
    </li>
    <li>
      <input id="vin-4" type="checkbox" value="gewurztraminer"/>
      <label for="vin-4">Gewürztraminer</label>
    </li>
  </ul>
</form>
```

## Labelliser avec ARIA

L’élément HTML {{ HTMLElement("label") }} est approprié pour les éléments liés aux formulaires, mais de nombreux contrôles de formulaires sont implémentés sous forme de composants JavaScript dynamiques et utilisent les éléments {{ HTMLElement("div") }} ou {{ HTMLElement("span") }}. [WAI-ARIA](http://www.w3.org/WAI/intro/aria.php), la spécification **Accessible Rich Internet Applications** (Applications Internet Riches Accessibles) de la [Web Accessibility Initiative](http://www.w3.org/WAI/) (Initiative pour l’Accessibilité du web) du W3C, fournit l’attribut [`aria-labelledby`](http://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-labelledby) dans ces cas de figure.

L’exemple ci-dessous montre un groupe de boutons radio implémenté à l’aide d’une liste non-ordonnée. Remarquez, à la ligne 3, que l’attribut `aria-labelledby` de l’élément {{ HTMLElement("ul") }} est défini comme «&nbsp;rg1_label&nbsp;», et est identique à l’`id` de l’élément {{ HTMLElement("h3") }} de la ligne 1, qui sert de label au groupe de boutons radio.

_Exemple 2. Un groupe de boutons radio implémenté à l’aide d’une liste non-ordonnée_

```html
<h3 id="rg1_label">Options du déjeuner</h3>

<ul class="radiogroup" id="rg1"  role="radiogroup" aria-labelledby="rg1_label">
  <li id="r1"  tabindex="-1" role="radio" aria-checked="false">
    <img role="presentation" src="radio-unchecked.gif" /> Thaï
  </li>
  <li id="r2"  tabindex="-1" role="radio"  aria-checked="false">
    <img role="presentation" src="radio-unchecked.gif" /> Subway
  </li>
  <li id="r3"   tabindex="0" role="radio" aria-checked="true">
    <img role="presentation" src="radio-checked.gif" /> Libanais
  </li>
</ul>
```

## Décrire avec ARIA

Les contrôles de formulaire peuvent parfois avoir une description qui leur est associée, en plus du label. ARIA fournit l’attribut [`aria-describedby`](http://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-describedby) pour associer directement une description à un contrôle donné.

L’exemple ci-dessous montre un élément {{ HTMLElement("button") }} décrit par une phrase contenue dans un élément {{ HTMLElement("div") }} séparé. L’attribut `aria-describedby` du {{ HTMLElement("button") }} fait référence à l’`id` de l’élément {{ HTMLElement("div") }}.

_Exemple 3. Un bouton décrit par un élément séparé._

```html
<button aria-describedby="descriptionRevert">Annuler</button>
<div id="descriptionRevert">L’annulation supprimera toutes les modifications
                    intervenues depuis le dernier enregistrement.</div>
```

(Notez que l’attribut `aria-describedby` est utilisé de différentes façons, en plus des contrôles de formulaires.)

## Champs obligatoires et invalides

Les développeur Web utilisent souvant des éléments de présentation visuels pour indiquer les champs obligatoires ou invalides, mais les technologies d’assistance ne peuvent pas toujours déduire ces informations à partir de la présentation. ARIA fournit des attributs pour indiquer l’obligation de renseigner un contrôle de formulaire ou la validité de son contenu&nbsp;:

- La propriété [`aria-required`](http://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-required) peut être appliquée à un élément de formulaire pour indiquer à une technologie d’assistance qu’il est obligatoire pour compléter le formulaire.
- L’état [`aria-invalid`](http://www.w3.org/TR/2010/WD-wai-aria-20100916/states_and_properties#aria-invalid) peut être programmatiquement appliquée pour indiquer à une technologie d’assistance quel champ contient des données incorrectes, afin que l’utilisateur sache qu’il a saisi des données invalides.

L’exemple ci-dessous montre un formulaire simple avec 3 champs. Aux lignes 4 et 12, les attributs `aria-required` sont définis à `true` (en plus de l’astérisque en début de champ) indiquant que le nom et l’adresse électronique sont obligatoires. La seconde partie de l’exemple est un snippet JavaScript qui valide le format de l’adresse électronique et qui définit l’attribut `aria-invalid` du champ «&nbsp;Courriel&nbsp;» (ligne 12 du code HTML) selon le résultat (en plus de la modification de la présentation de l’élément).

_Exemple 4a. Un formulaire avec des champs obligatoires._

```html
<form>
  <div>
    <label for="nom">* Nom&nbsp;:</label>
    <input type="text" value="nom" id="nom" aria-required="true"/>
  </div>
  <div>
    <label for="telephone">Téléphone&nbsp;:</label>
    <input type="text" value="telephone" id="telephone" aria-required="false"/>
  </div>
  <div>
    <label for="courriel">* Courriel&nbsp;:</label>
    <input type="text" value="courriel" id="courriel" aria-required="true"/>
  </div>
</form>
```

_Exemple 4b. Portion d’un script qui valide une entrée de formulaire._

```js
var validate = function () {
  var emailElement = document.getElementById(emailFieldId);
  var valid = emailValid(formData.email); // retourne true si valide, false dans le cas contraire

  emailElement.setAttribute("aria-invalid", !valid);
  setElementBorderColour(emailElement, valid); // colore la bordure en rouge sur le second argument est false
};
```

## Fournir des messages d’erreur utiles

Découvrez comment utiliser [les alertes ARIA pour améliorer les formulaires](/fr/docs/Accessibilité/ARIA/formulaires/Alertes).

Pour plus de conseils sur l’utilisation d’ARIA et l’accessibilité des formulaires, consultez le document [WAI-ARIA Authoring Practices](http://www.w3.org/TR/wai-aria-practices/).
