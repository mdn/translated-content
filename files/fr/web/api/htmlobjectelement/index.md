---
title: HTMLObjectElement
slug: Web/API/HTMLObjectElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLObjectElement`** fournit des propriétés et méthodes spécifiques (en plus de celles de l'interface {{DOMxRef("HTMLElement")}} héritées) pour manipuler la présentation et la mise en page de l'élément HTML {{HTMLElement("object")}}, qui représente des ressources externes.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite des propriétés de son parent, {{DOMxRef("HTMLElement")}}._

- `HTMLObjectElement.align` {{Deprecated_Inline}}
  - : Une chaîne de caractères représentant une propriété énumérée indiquant l'alignement du contenu de l'élément par rapport au contexte environnant. Les valeurs possibles sont `"left"`, `"right"`, `"justify"` et `"center"`.
- `HTMLObjectElement.archive` {{Deprecated_Inline}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`archive`](/fr/docs/Web/HTML/Reference/Elements/object#archive), contenant une liste d'archives pour les ressources de cet objet.
- `HTMLObjectElement.border` {{Deprecated_Inline}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`border`](/fr/docs/Web/HTML/Reference/Elements/object#border), définissant la largeur de la bordure autour de l'objet.
- `HTMLObjectElement.code` {{Deprecated_Inline}}
  - : Une chaîne de caractères représentant le nom d'un fichier de classe d'applet, contenant soit la sous-classe de l'applet, soit le chemin d'accès à la classe, y compris le fichier de classe lui-même.
- `HTMLObjectElement.codeBase` {{Deprecated_Inline}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`codebase`](/fr/docs/Web/HTML/Reference/Elements/object#codebase), définissant le chemin de base à utiliser pour résoudre les URI relatives.
- `HTMLObjectElement.codeType` {{Deprecated_Inline}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`codetype`](/fr/docs/Web/HTML/Reference/Elements/object#codetype), définissant le type de contenu des données.
- {{DOMxRef("HTMLObjectElement.contentDocument")}} {{ReadOnlyInline}}
  - : Retourne un {{DOMxRef("Document")}} représentant le document actif du contexte de navigation imbriqué de l'élément object, ou `null`.
- {{DOMxRef("HTMLObjectElement.contentWindow")}} {{ReadOnlyInline}}
  - : Retourne un {{Glossary("WindowProxy")}} représentant la fenêtre du contexte de navigation imbriqué de l'élément object, ou `null`.
- {{DOMxRef("HTMLObjectElement.data")}}
  - : Retourne une chaîne de caractères reflétant l'attribut HTML [`data`](/fr/docs/Web/HTML/Reference/Elements/object#data), définissant l'adresse des données de la ressource.
- `HTMLObjectElement.declare` {{Deprecated_Inline}}
  - : Une valeur booléenne reflétant l'attribut HTML [`declare`](/fr/docs/Web/HTML/Reference/Elements/object#declare), définissant qu'il s'agit d'une déclaration et non d'une instanciation de l'objet.
- {{DOMxRef("HTMLObjectElement.form")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("HTMLFormElement")}} représentant le formulaire propriétaire de l'élément `object`, ou `null` s'il n'y en a pas.
- {{DOMxRef("HTMLObjectElement.height")}}
  - : Retourne une chaîne de caractères reflétant l'attribut HTML [`height`](/fr/docs/Web/HTML/Reference/Elements/object#height), définissant la hauteur affichée de la ressource en pixels CSS.
- `HTMLObjectElement.hspace` {{Deprecated_Inline}}
  - : Un entier `long` représentant l'espace horizontal en pixels autour du contrôle.
- {{DOMxRef("HTMLObjectElement.name")}}
  - : Retourne une chaîne de caractères reflétant l'attribut HTML [`name`](/fr/docs/Web/HTML/Reference/Elements/object#name), définissant le nom du contexte de navigation.
- `HTMLObjectElement.standby` {{Deprecated_Inline}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`standby`](/fr/docs/Web/HTML/Reference/Elements/object#standby), définissant un message à afficher pendant le chargement de l'objet.
- {{DOMxRef("HTMLObjectElement.type")}}
  - : Retourne une chaîne de caractères reflétant l'attribut HTML [`type`](/fr/docs/Web/HTML/Reference/Elements/object#type), définissant le type MIME de la ressource.
- {{DOMxRef("HTMLObjectElement.useMap")}} {{Deprecated_Inline}}
  - : Retourne une chaîne de caractères reflétant l'attribut HTML [`usemap`](/fr/docs/Web/HTML/Reference/Elements/object#usemap), définissant un élément {{HTMLElement("map")}} à utiliser.
- {{DOMxRef("HTMLObjectElement.validationMessage")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères représentant un message localisé décrivant les contraintes de validation non satisfaites (le cas échéant). Chaîne vide si le contrôle n'est pas candidat à la validation de contraintes (`willValidate` est `false`), ou s'il satisfait ses contraintes.
- {{DOMxRef("HTMLObjectElement.validity")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("ValidityState")}} avec les états de validité de cet élément.
- `HTMLObjectElement.vspace` {{Deprecated_Inline}}
  - : Un entier `long` représentant l'espace vertical en pixels autour du contrôle.
- {{DOMxRef("HTMLObjectElement.width")}}
  - : Retourne une chaîne de caractères reflétant l'attribut HTML [`width`](/fr/docs/Web/HTML/Reference/Elements/object#width), définissant la largeur affichée de la ressource en pixels CSS.
- {{DOMxRef("HTMLObjectElement.willValidate")}} {{ReadOnlyInline}}
  - : Retourne une valeur booléenne définissant si l'élément est candidat à la validation de contraintes. Toujours `false` pour les objets `HTMLObjectElement`.

## Méthodes d'instance

_Hérite des méthodes de son parent, {{DOMxRef("HTMLElement")}}._

- {{DOMxRef("HTMLObjectElement.checkValidity()")}}
  - : Retourne toujours `true` car les éléments {{HTMLElement("object")}} ne sont jamais candidats à la validation de contraintes.
- {{DOMxRef("HTMLObjectElement.getSVGDocument()")}}
  - : Retourne le SVG embarqué comme un {{DOMxRef("Document")}}.
- {{DOMxRef("HTMLObjectElement.reportValidity()")}}
  - : Retourne toujours `true` car les éléments {{HTMLElement("object")}} ne sont jamais candidats à la validation de contraintes.
- {{DOMxRef("HTMLObjectElement.setCustomValidity()")}}
  - : Définit un message de validité personnalisé pour l'élément. Si ce message n'est pas une chaîne vide, l'élément présente une erreur de validité personnalisée et n'est pas valide.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML qui implémente cette interface&nbsp;: {{HTMLElement("object")}}
