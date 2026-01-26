---
title: HTMLElement
slug: Web/API/HTMLElement
l10n:
  sourceCommit: 7e14795a6ef2bf5e760c315ce64800dd1cd98c29
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLElement`** représente n'importe quel élément [HTML](/fr/docs/Web/HTML). Certains éléments implémentent directement cette interface tandis que d'autres implémentent une interface qui hérite de celle-ci.

{{InheritanceDiagram}}

## Propriétés d'instance

_Hérite également des propriétés de son parent, {{DOMxRef("Element")}}._

- {{DOMxRef("HTMLElement.accessKey")}}
  - : Une chaîne de caractères qui représente la touche d'accès affecté à l'élément.
- {{DOMxRef("HTMLElement.accessKeyLabel")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères contenant la touche d'accès affectée à l'élément.
- {{DOMxRef("HTMLElement.anchorElement")}} {{ReadOnlyInline}} {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Retourne une référence à l'élément d'ancrage de l'élément, ou `null` s'il n'en a pas.
- {{DOMxRef("HTMLElement.attributeStyleMap")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("StylePropertyMap")}} qui représente les déclarations contenues dans l'attribut [`style`](/fr/docs/Web/HTML/Reference/Global_attributes/style) de l'élément.
- {{DOMxRef("HTMLElement.autocapitalize")}}
  - : Une chaîne de caractères qui représente le comportement de capitalisation de l'élément pour la saisie de l'utilisateur·ice. Les valeurs valides sont&nbsp;: `none`, `off`, `on`, `characters`, `words`, `sentences`.
- {{DOMxRef("HTMLElement.autofocus")}}
  - : Un booléen reflétant l'attribut HTML universel [`autofocus`](/fr/docs/Web/HTML/Reference/Elements/select#autofocus), qui indique si le contrôle doit être sélectionné lors du chargement de la page, ou lorsque la boîte de dialogue ou la fenêtre contextuelle (<i lang="en">popover</i> en anglais) devient visible si défini dans un élément à l'intérieur d'éléments HTML {{HTMLElement("dialog")}} ou d'éléments dont l'attribut `popover` est défini.
- {{DOMxRef("HTMLElement.autocorrect")}}
  - : Un booléen qui représente si le texte saisi par l'utilisateur·ice doit être automatiquement corrigé.
    Cela reflète l'attribut HTML universel [`autocorrect`](/fr/docs/Web/HTML/Reference/Global_attributes/autocorrect).
- {{DOMxRef("HTMLElement.contentEditable")}}
  - : Une chaîne de caractères qui, si elle vaut `true` indique que l'élément est éditable et qui, si elle vaut `false` indique que l'élément n'est pas éditable.
- {{DOMxRef("HTMLElement.dataset")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("DOMStringMap")}} avec lequel il est possible de lire et d'écrire [les attributs de données spécifiques](/fr/docs/Web/HTML/How_to/Use_data_attributes) (`data-*`).
- {{DOMxRef("HTMLElement.dir")}}
  - : Une chaîne de caractères reflétant l'attribut universel `dir` et qui représente le sens d'écriture de l'élément. Les valeurs possibles sont `"ltr"` (gauche à droite), `"rtl"` (droite à gauche), et `"auto"`.
- {{DOMxRef("HTMLElement.draggable")}}
  - : Un booléen indiquant si l'élément peut être déplacé.
- {{DOMxRef("HTMLElement.editContext")}} {{Experimental_Inline}}
  - : Retourne l'objet {{DOMxRef("EditContext")}} associé à l'élément, ou `null` s'il n'y en a pas.
- [`HTMLElement.enterkeyhint`](/fr/docs/Web/API/HTMLElement/enterKeyHint)
  - : Une chaîne de caractères qui définit le libellé (ou l'icône) à présenter comme libellé d'action pour la touche <kbd>Entrée</kbd> des claviers virtuels.
- {{DOMxRef("HTMLElement.hidden")}}
  - : Une chaîne de caractères ou un booléen reflétant la valeur de l'attribut [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden) de l'élément.
- {{DOMxRef("HTMLElement.inert")}}
  - : Un booléen indiquant si l'agent utilisateur doit agir comme si le nœud donné était absent pour les évènements d'interaction, les recherches de texte dans la page («&nbsp;rechercher dans la page&nbsp;») et la sélection de texte.
- {{DOMxRef("HTMLElement.innerText")}}
  - : Représente le contenu texte rendu d'un nœud et de ses descendants.
    Comme accesseur, il approxime le texte qu'une personne obtiendrait en surlignant le contenu de l'élément avec le curseur puis en le copiant dans le presse-papier.
    Comme mutateur, il remplace le contenu à l'intérieur de l'élément sélectionné, convertissant tout saut de ligne en éléments HTML {{HTMLElement("br")}}.
- {{DOMxRef("HTMLElement.inputMode")}}
  - : Une chaîne de caractères reflétant la valeur de l'attribut [`inputmode`](/fr/docs/Web/HTML/Reference/Global_attributes/inputmode) de l'élément.
- {{DOMxRef("HTMLElement.isContentEditable")}} {{ReadOnlyInline}}
  - : Retourne un booléen indiquant si le contenu de l'élément peut être édité.
- {{DOMxRef("HTMLElement.lang")}}
  - : Une chaîne de caractères représentant la langue du contenu, du texte et des attributs d'un élément.
- {{DOMxRef("HTMLElement.nonce")}}
  - : Retourne le nombre cryptographique à usage unique utilisé par la politique de sécurité du contenu pour déterminer si une récupération de ressource donnée est autorisée.
- {{DOMxRef("HTMLElement.offsetHeight")}} {{ReadOnlyInline}}
  - : Retourne une valeur numérique `double` contenant la hauteur de l'élément, relativement à la disposition.
- {{DOMxRef("HTMLElement.offsetLeft")}} {{ReadOnlyInline}}
  - : Retourne une valeur numérique `double` indiquant la distance entre la bordure gauche de cet élément et la bordure gauche de son élément `offsetParent`.
- {{DOMxRef("HTMLElement.offsetParent")}} {{ReadOnlyInline}}
  - : Un objet {{DOMxRef("Element")}} représentant l'élément de référence par rapport auquel tous les calculs de décalage sont effectués.
- {{DOMxRef("HTMLElement.offsetTop")}} {{ReadOnlyInline}}
  - : Retourne une valeur numérique `double`, indiquant la distance entre la bordure haute de cet élément et la bordure haute de son élément `offsetParent`.
- {{DOMxRef("HTMLElement.offsetWidth")}} {{ReadOnlyInline}}
  - : Retourne une valeur numérique `double` contenant la largeur de l'élément, relativement à la disposition.
- {{DOMxRef("HTMLElement.outerText")}}
  - : Représente le contenu texte rendu d'un nœud et de ses descendants.
    Comme accesseur, il se comporte comme la propriété {{DOMxRef("HTMLElement.innerText")}} (il représente le contenu texte rendu d'un élément et de ses descendants).
    Comme mutateur, il remplace le nœud sélectionné et son contenu avec la valeur fournie, convertissant tout saut de ligne en éléments HTML {{HTMLElement("br")}}.
- {{DOMxRef("HTMLElement.popover")}}
  - : Obtient et définit l'état de la fenêtre contextuelle (<i lang="en">popover</i> en anglais) d'un élément via JavaScript (`"auto"`, `"hint"` ou `"manual"`), et peut être utilisé pour la détection de fonctionnalité. Reflète la valeur de l'attribut HTML universel [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover).
- {{DOMxRef("HTMLElement.spellcheck")}}
  - : Un booléen reflétant l'attribut HTML [`spellcheck`](/fr/docs/Web/HTML/Reference/Global_attributes/spellcheck). Cette propriété est présente sur tous les éléments HTML même si elle n'a pas d'effet pour tous.
- {{DOMxRef("HTMLElement.style")}}
  - : Un objet {{DOMxRef("CSSStyleDeclaration")}} qui représente les déclarations contenues dans l'attribut [`style`](/fr/docs/Web/HTML/Reference/Global_attributes/style) de l'élément.
- {{DOMxRef("HTMLElement.tabIndex")}}
  - : Une valeur numérique `long` représentant la position de l'élément dans l'ordre de tabulation.
- {{DOMxRef("HTMLElement.title")}}
  - : Une chaîne de caractères contenant le texte apparaissant dans la bulle d'information affichée lorsque la souris survole l'élément.
- {{DOMxRef("HTMLElement.translate")}}
  - : Un booléen représentant la traduction.
- {{DOMxRef("HTMLElement.virtualKeyboardPolicy")}} {{Experimental_Inline}}
  - : Une chaîne de caractères indiquant le comportement du clavier virtuel à l'écran sur les appareils tels que les tablettes, les téléphones mobiles ou d'autres appareils où un clavier matériel peut ne pas être disponible, si le contenu de l'élément est éditable (par exemple, s'il s'agit d'un élément HTML {{HTMLElement("input")}}, {{HTMLElement("textarea")}}, ou d'un élément dont l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) est défini).
- {{DOMxRef("HTMLElement.writingSuggestions")}}
  - : Une chaîne de caractères indiquant si les suggestions d'écriture fournies par le navigateur doivent être activées ou non dans le cadre de l'élément.

## Méthodes d'instance

_Hérite également des méthodes de son parent, {{DOMxRef("Element")}}._

- {{DOMxRef("HTMLElement.attachInternals()")}}
  - : Retourne un objet {{DOMxRef("ElementInternals")}} et active la participation d'un élément personnalisé aux formulaires HTML.
- {{DOMxRef("HTMLElement.blur()")}}
  - : Retire la sélection clavier de l'élément qui a la sélection.
- {{DOMxRef("HTMLElement.click()")}}
  - : Envoie un évènement de clic de souris à l'élément.
- {{DOMxRef("HTMLElement.focus()")}}
  - : Passe la sélection clavier à l'élément courant.
- {{DOMxRef("HTMLElement.hidePopover()")}}
  - : Masque un élément de fenêtre contextuelle (<i lang="en">popover</i> en anglais) en le retirant de la {{Glossary("top layer", "couche supérieure")}} et en lui appliquant le style `display: none`.
- {{DOMxRef("HTMLElement.showPopover()")}}
  - : Affiche un élément de fenêtre contextuelle (<i lang="en">popover</i> en anglais) en l'ajoutant à la {{Glossary("top layer", "couche supérieure")}} et en retirant `display: none;` de ses styles.
- {{DOMxRef("HTMLElement.togglePopover()")}}
  - : Bascule un élément de fenêtre contextuelle (<i lang="en">popover</i> en anglais) entre les états masqué et affiché.

## Évènements

Écoutez ces évènements en utilisant {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} ou en affectant un gestionnaire d'évènement à la propriété `onnomevenement` de cette interface.

_Hérite également des évènements de son parent, {{DOMxRef("Element")}}._

- {{DOMxRef("HTMLElement/change_event", "change")}}
  - : Déclenché lorsque la propriété `value` d'un élément {{HTMLElement("input")}}, {{HTMLElement("select")}} ou {{HTMLElement("textarea")}} a été modifiée et validée par l'utilisateur·ice. Contrairement à l'évènement {{DOMxRef("Element/input_event", "input")}}, l'évènement `change` n'est pas nécessairement déclenché pour chaque modification de la propriété `value` d'un élément.
- {{DOMxRef("HTMLElement/command_event", "command")}}
  - : Déclenché sur un élément contrôlé via un {{DOMxRef("HTMLButtonElement", "bouton")}} avec des valeurs valides pour {{DOMxRef("HTMLButtonElement.commandForElement", "commandForElement")}} et {{DOMxRef("HTMLButtonElement.command", "command")}}, chaque fois que le bouton est utilisé (par exemple, lors d'un clic).
- {{DOMxRef("HTMLElement/error_event", "error")}}
  - : Déclenché lorsqu'une ressource n'a pas pu être chargée ou ne peut pas être utilisée.
- {{DOMxRef("HTMLElement/load_event", "load")}}
  - : Déclenché pour les éléments contenant une ressource lorsque celle-ci a été chargée avec succès.

### Évènements de glisser-déposer

- {{DOMxRef("HTMLElement/drag_event", "drag")}}
  - : Déclenché lorsqu'un élément ou une sélection de texte est en train d'être déplacé.
- {{DOMxRef("HTMLElement/dragend_event", "dragend")}}
  - : Déclenché lorsqu'une opération de déplacement se termine (en relâchant un bouton de la souris ou en appuyant sur la touche <kbd>Échap</kbd>).
- {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}}
  - : Déclenché lorsqu'un élément ou une sélection de texte déplacé entre dans une cible de dépôt valide.
- {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}}
  - : Déclenché lorsqu'un élément ou une sélection de texte déplacé quitte une cible de dépôt valide.
- {{DOMxRef("HTMLElement/dragover_event", "dragover")}}
  - : Déclenché en continu lorsqu'un élément ou une sélection de texte est en train d'être déplacé et que le pointeur de la souris se trouve au‑dessus d'une cible de dépôt valide (toutes les 50 ms lorsque la souris ne bouge pas, sinon beaucoup plus rapidement, environ entre 5 ms (mouvement lent) et 1 ms (mouvement rapide)). Ce schéma de déclenchement est différent de {{DOMxRef("Element/mouseover_event", "mouseover")}}.
- {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}}
  - : Déclenché lorsque l'utilisateur·ice commence à déplacer un élément ou une sélection de texte.
- {{DOMxRef("HTMLElement/drop_event", "drop")}}
  - : Déclenché lorsqu'un élément ou une sélection de texte est déposé sur une cible de dépôt valide.

### Évènements d'initiateur d'intérêt

- {{DOMxRef("HTMLElement.interest_event", "interest")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Déclenché sur l'élément cible d'un [initiateur d'intérêt](/fr/docs/Web/API/Popover_API/Using_interest_invokers) lorsque l'intérêt est affiché, permettant d'exécuter du code en réponse.
- {{DOMxRef("HTMLElement.loseinterest_event", "loseinterest")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Déclenché sur l'élément cible d'un initiateur d'intérêt lorsque l'intérêt est perdu, permettant d'exécuter du code en réponse.

### Évènements de bascule

- {{DOMxRef("HTMLElement/beforetoggle_event", "beforetoggle")}}
  - : Déclenché lorsque l'élément est une [fenêtre contextuelle](/fr/docs/Web/API/Popover_API) ou {{HTMLElement("dialog")}}, avant qu'il ne soit masqué ou affiché.
- {{DOMxRef("HTMLElement/toggle_event", "toggle")}}
  - : Déclenché lorsque l'élément est une [fenêtre contextuelle](/fr/docs/Web/API/Popover_API), {{HTMLElement("dialog")}} ou {{HTMLElement("details")}}, juste après qu'il ait été masqué ou affiché.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("Element")}}
