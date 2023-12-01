---
title: HTMLElement
slug: Web/API/HTMLElement
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLElement`** représente n'importe quel élément [HTML](/fr/docs/Web/HTML). Certains éléments implémentent directement cette interface tandis que d'autres implémentent une interface qui hérite de celle-ci.

{{InheritanceDiagram}}

## Propriétés

_Hérite des propriétés de son parent, [`Element`](/fr/docs/Web/API/Element), et implémente celles du mixin [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers)._

- [`HTMLElement.accessKey`](/fr/docs/Web/API/HTMLElement/accessKey)
  - : Une chaîne de caractères qui représente la touche d'accès affecté à l'élément.
- [`HTMLElement.accessKeyLabel`](/fr/docs/Web/API/HTMLElement/accessKeyLabel) {{ReadOnlyInline}}
  - : Renvoie une chaîne de caractères contenant la touche d'accès affectée à l'élément.
- [`HTMLElement.attributeStyleMap`](/fr/docs/Web/API/HTMLElement/attributeStyleMap) {{ReadOnlyInline}}
  - : Un objet [`StylePropertyMap`](/fr/docs/Web/API/StylePropertyMap) qui représente les déclarations contenues dans l'attribut [`style`](/fr/docs/Web/HTML/Global_attributes#attr-style) de l'élément.
- [`HTMLElement.contentEditable`](/fr/docs/Web/API/HTMLElement/contentEditable)
  - : Une chaîne de caractères qui, si elle vaut `true` indique que l'élément est éditable et qui, si elle vaut `false` indique que l'élément n'est pas éditable.
- [`HTMLElement.isContentEditable`](/fr/docs/Web/API/HTMLElement/isContentEditable) {{ReadOnlyInline}}
  - : Renvoie une valeur booléenne indiquant si le contenu de l'élément peut être édité.
- [`HTMLElement.contextMenu`](/fr/docs/Web/API/HTMLElement/contextMenu) {{Deprecated_Inline}}
  - : Un objet [`HTMLMenuElement`](/fr/docs/Web/API/HTMLMenuElement) qui représente le menu contextuel associé à l'élément. Il peut valoir `null`.
- [`HTMLElement.dataset`](/fr/docs/Web/API/HTMLElement/dataset) {{ReadOnlyInline}}
  - : Renvoie un objet [`DOMStringMap`](/fr/docs/Web/API/DOMStringMap) avec lequel il est possible de lire et d'écrire [les attributs de données spécifiques](/fr/docs/Learn/HTML/Howto/Use_data_attributes) (`data-*`).
- [`HTMLElement.dir`](/fr/docs/Web/API/HTMLElement/dir)
  - : Une chaîne de caractères reflétant l'attribut universel `dir` et qui représente le sens d'écriture de l'élément. Les valeurs possibles sont `"ltr"` (gauche à droite), `"rtl"` (droite à gauche), et `"auto"`.
- [`HTMLElement.draggable`](/fr/docs/Web/API/HTMLElement/draggable)
  - : Une valeur booléenne indiquant si l'élément peut être déplacé.
- [`HTMLElement.enterkeyhint`](/fr/docs/Web/API/HTMLElement/enterkeyhint)
  - : Une chaîne de caractères qui définit le libellé (ou l'icône) à présenter comme libellé d'action pour la touche <kbd>Entrée</kdb> des claviers virtuels.
- [`HTMLElement.hidden`](/fr/docs/Web/API/HTMLElement/hidden)
  - : Une valeur booléenne indiquant si l'élément est caché.
- [`HTMLElement.inert`](/fr/docs/Web/API/HTMLElement/inert)
  - : Une valeur booléenne indiquant si l'agent utilisateur doit agir comme si le nœud donné était absent en ce qui concerne les évènements d'interaction, les recherches de texte dans la page, et la sélection de texte.
- [`HTMLElement.innerText`](/fr/docs/Web/API/HTMLElement/innerText)
  - : Représente le contenu du texte rendu d'un nœud et de ses descendants. Comme accesseur, il approxime le texte qu'une personne aurait en surlignant le contenu de l'élément avec le curseur et en copiant ceci dans un presse-papier. Comme mutateur, il remplace le contenu à l'intérieur de l'élément sélectionné, convertissant tout saut de ligne en élément [`<br>`](/fr/docs/Web/HTML/Element/br).
- [`HTMLElement.lang`](/fr/docs/Web/API/HTMLElement/lang)
  - : Une chaîne de caractères représentant la langue du contenu, du texte et des attributs d'un élément.
- [`HTMLElement.noModule`](/fr/docs/Web/API/HTMLElement/noModule)
  - : Une valeur booléenne indiquant si un script d'import peut être exécuté par les agents utilisateur qui prennent en charge les modules de script.
- [`HTMLElement.nonce`](/fr/docs/Web/API/HTMLElement/nonce)
  - : Renvoie le nonce cryptographique utilisé par la politique de sécurité du contenu afin de déterminer si le traitement d'une récupération de ressource est autorisé.
- [`HTMLElement.offsetHeight`](/fr/docs/Web/API/HTMLElement/offsetHeight) {{ReadOnlyInline}}
  - : Renvoie une valeur numérique `double` contenant la hauteur de l'élément, relativement à la disposition.
- [`HTMLElement.offsetLeft`](/fr/docs/Web/API/HTMLElement/offsetLeft) {{ReadOnlyInline}}
  - : Renvoie une valeur numérique `double` indiquant la distance entre la bordure gauche de cet élément et la bordure gauche de son élément `offsetParent`.
- [`HTMLElement.offsetParent`](/fr/docs/Web/API/HTMLElement/offsetParent) {{ReadOnlyInline}}
  - : Un objet [`Element`](/fr/docs/Web/API/Element) représentant l'élément de référence par rapport auquel tous les calculs de décalage sont effectués.
- [`HTMLElement.offsetTop`](/fr/docs/Web/API/HTMLElement/offsetTop) {{ReadOnlyInline}}
  - : Renvoie une valeur numérique `double`, indiquant la distance entre la bordure haute de cet élément et la bordure haute de son élément `offsetParent`.
- [`HTMLElement.offsetWidth`](/fr/docs/Web/API/HTMLElement/offsetWidth) {{ReadOnlyInline}}
  - : Renvoie une valeur numérique `double` contenant la largeur de l'élément, relativement à la disposition.
- [`HTMLElement.outerText`](/fr/docs/Web/API/HTMLElement/outerText)
  - : Représente le texte rendu du contenu d'un nœud et de ses descendants. Comme accesseur, il se comporte comme [`HTMLElement.innerText`](/fr/docs/Web/API/HTMLElement/innerText) (il représente le contenu texte d'un élément et de ses descendants). Comme mutateur, il remplace le nœud sélectionné et son contenu avec la valeur fournie, convertissant au passage tout saut de ligne en éléments [`<br>`](/fr/docs/Web/HTML/Element/br).
- [`HTMLElement.properties`](/fr/docs/Web/API/HTMLElement/properties) {{Experimental_Inline}}{{ReadOnlyInline}}
  - : Renvoi un objet [`HTMLPropertiesCollection`](/fr/docs/Web/API/HTMLPropertiesCollection).
- [`HTMLElement.spellcheck`](/fr/docs/Web/API/HTMLElement/spellcheck)
  - : Une valeur booléenne reflétant l'attribut HTML [`spellcheck`](/fr/docs/Web/HTML/Global_attributes/spellcheck). Cette propriété est présente sur tous les éléments HTML même si elle n'a pas d'effet pour tous.
- [`HTMLElement.style`](/fr/docs/Web/API/HTMLElement/style)
  - : Un objet [`CSSStyleDeclaration`](/fr/docs/Web/API/CSSStyleDeclaration) qui représente les déclarations contenues dans l'attribut [`style`](/fr/docs/Web/HTML/Global_attributes#attr-style) de l'élément.
- [`HTMLElement.tabIndex`](/fr/docs/Web/API/HTMLElement/tabIndex)
  - : Une valeur numérique `long` représentant la position de l'élément dans l'ordre de tabulation.
- [`HTMLElement.title`](/fr/docs/Web/API/HTMLElement/title)
  - : Une chaîne de caractères contenant le texte apparaissant dans la bulle d'information affichée lorsque la souris survole l'élément.
- [`HTMLElement.translate`](/fr/docs/Web/API/HTMLElement/translate) {{Experimental_Inline}}
  - : Une valeur booléenne représentant la traduction.

### Gestionnaires d'évènements

La plupart des propriétés pour la gestion d'évènements, de la forme `onXYZ`, sont définies par l'interface [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers) et implémentées par `HTMLElement`. Voici les gestionnaires d'évènements spécifiques à `HTMLElement`.

- [`TouchEventHandlers.ontouchstart`](/fr/docs/Web/API/TouchEventHandlers/ontouchstart) {{Non-standard_Inline}}
  - : Renvoie le code de gestion d'évènement pour l'évènement [`touchstart`](/fr/docs/Web/API/Element/touchstart_event).
- [`TouchEventHandlers.ontouchend`](/fr/docs/Web/API/TouchEventHandlers/ontouchend) {{Non-standard_Inline}}
  - : Renvoie le code de gestion d'évènement pour l'évènement [`touchend`](/fr/docs/Web/API/Element/touchend_event).
- [`TouchEventHandlers.ontouchmove`](/fr/docs/Web/API/TouchEventHandlers/ontouchmove) {{Non-standard_Inline}}
  - : Renvoie le code de gestion d'évènement pour l'évènement [`touchmove`](/fr/docs/Web/API/Element/touchmove_event).
- [`TouchEventHandlers.ontouchcancel`](/fr/docs/Web/API/TouchEventHandlers/ontouchcancel) {{Non-standard_Inline}}
  - : Renvoie le code de gestion d'évènement pour l'évènement [`touchcancel`](/fr/docs/Web/API/Element/touchcancel_event).

## Méthodes

_Hérite des méthodes de son parent, [`Element`](/fr/docs/Web/API/Element), et implémente celles du mixin [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers)._

- [`HTMLElement.attachInternals()`](/fr/docs/Web/API/HTMLElement/attachInternals) {{Experimental_Inline}}
  - : Renvoie un objet [`ElementInternals`](/fr/docs/Web/API/ElementInternals) et active la participation d'un élément personnalisé aux formulaires HTML.
- [`HTMLElement.blur()`](/fr/docs/Web/API/HTMLElement/blur)
  - : Retire le focus clavier de l'élément qui a le focus.
- [`HTMLElement.click()`](/fr/docs/Web/API/HTMLElement/click)
  - : Envoie un évènement de clic de souris à l'élément.
- [`HTMLElement.focus()`](/fr/docs/Web/API/HTMLElement/focus)
  - : Passe le focus clavier à l'élément courant.

## Évènements

On écoutera ces évènements à l'aide de `addEventListener()` ou en affectant un gestionnaire d'évènement à la propriété `onnomevenement` de cette interface.

- [`copy`](/fr/docs/Web/API/HTMLElement/copy_event)
  - : Déclenché lorsque l'utilisatrice ou l'utilisateur initie une action de copier via l'interface du navigateur.
- [`cut`](/fr/docs/Web/API/HTMLElement/cut_event)
  - : Déclenché lorsque l'utilisatrice ou l'utilisateur initie une action de couper via l'interface du navigateur.
- [`paste`](/fr/docs/Web/API/HTMLElement/paste_event)
  - : Déclenché lorsque l'utilisatrice ou l'utilisateur initie une action de coller via l'interface du navigateur.
- [`invalid`](/fr/docs/Web/API/HTMLInputElement/invalid_event)
  - : Déclenché lorsqu'un élément ne respecte pas les contraintes pendant la validation de contrainte. Également disponible via la propriété [`onvalid`](/fr/docs/Web/API/GlobalEventHandlers/oninvalid).

### Évènements relatifs aux animations

- [`animationcancel`](/fr/docs/Web/API/HTMLElement/animationcancel_event)
  - : Déclenché lorsqu'une animation se termine de manière inattendue. Également disponible via la propriété [`onanimationcancel`](/fr/docs/Web/API/GlobalEventHandlers/onanimationcancel).
- [`animationend`](/fr/docs/Web/API/HTMLElement/animationend_event)
  - : Déclenché lorsqu'une animation se termine normalement. Également disponible via la propriété [`onanimationend`](/fr/docs/Web/API/GlobalEventHandlers/onanimationend).
- [`animationiteration`](/fr/docs/Web/API/HTMLElement/animationiteration_event)
  - : Déclenché lorsqu'une itération d'une animation est terminée. Également disponible via la propriété [`onanimationiteration`](/fr/docs/Web/API/GlobalEventHandlers/onanimationiteration).
- [`animationstart`](/fr/docs/Web/API/HTMLElement/animationstart_event)
  - : Déclenché lorsqu'une animation démarre. Également disponible via la propriété [`onanimationstart`](/fr/docs/Web/API/GlobalEventHandlers/onanimationstart).

### Évènements de saisie

- [`beforeinput`](/fr/docs/Web/API/HTMLElement/beforeinput_event)
  - : Déclenché lorsque la valeur d'un élément [`<input>`](/fr/docs/Web/HTML/Element/Input), [`<select>`](/fr/docs/Web/HTML/Element/select), ou [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) est sur le point d'être modifiée.
- [`input`](/fr/docs/Web/API/HTMLElement/input_event)
  - : Déclenché lorsque la valeur d'un élément [`<input>`](/fr/docs/Web/HTML/Element/Input), [`<select>`](/fr/docs/Web/HTML/Element/select), ou [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) a été modifiée. Également disponible via la propriété [`oninput`](/fr/docs/Web/API/GlobalEventHandlers/oninput).
- [`change`](/fr/docs/Web/API/HTMLElement/change_event)
  - : Déclenché lorsque la valeur d'un élément [`<input>`](/fr/docs/Web/HTML/Element/Input), [`<select>`](/fr/docs/Web/HTML/Element/select), ou [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) a été modifiée et validée par l'utilisatrice ou l'utilisateur. À la différence de l'évènement [`input`](/fr/docs/Web/API/HTMLElement/input_event), l'évènement `change` n'est pas nécessairement déclenché pour chaque altération de la valeur de l'élément.

### Évènements de pointeur

- [`gotpointercapture`](/fr/docs/Web/API/HTMLElement/gotpointercapture_event)
  - : Déclenché lorsqu'un élément capture un pointeur à l'aide de [`setPointerCapture()`](/fr/docs/Web/API/Element/setPointerCapture). Également disponible via la propriété [`ongotpointercapture`](/fr/docs/Web/API/GlobalEventHandlers/ongotpointercapture).
- [`lostpointercapture`](/fr/docs/Web/API/HTMLElement/lostpointercapture_event)
  - : Déclenché lorsqu'un [pointeur capturé](/fr/docs/Web/API/Pointer_events#pointer_capture) est relâché. Également disponible via la propriété [`onlostpointercapture`](/fr/docs/Web/API/GlobalEventHandlers/onlostpointercapture).
- [`pointercancel`](/fr/docs/Web/API/HTMLElement/pointercancel_event)
  - : Déclenché lorsqu'un évènement de pointeur est annulé. Également disponible via la propriété [`onpointercancel`](/fr/docs/Web/API/GlobalEventHandlers/onpointercancel).
- [`pointerdown`](/fr/docs/Web/API/HTMLElement/pointerdown_event)
  - : Déclenché lorsqu'un pointeur devient actif. Également disponible via la propriété [`onpointerdown`](/fr/docs/Web/API/GlobalEventHandlers/onpointerdown).
- [`pointerenter`](/fr/docs/Web/API/HTMLElement/pointerenter_event)
  - : Déclenché lorsqu'un pointeur est déplacé dans la zone de contact d'un élément ou d'un de ses descendants. Également disponible via la propriété [`onpointerenter`](/fr/docs/Web/API/GlobalEventHandlers/onpointerenter).
- [`pointerleave`](/fr/docs/Web/API/HTMLElement/pointerleave_event)
  - : Déclenché lorsqu'un pointeur est déplacé en dehors de la zone de contact d'un élément. Également disponible via la propriété [`onpointerleave`](/fr/docs/Web/API/GlobalEventHandlers/onpointerleave).
- [`pointermove`](/fr/docs/Web/API/HTMLElement/pointermove_event)
  - : Déclenché lorsqu'un pointeur change de coordonnées. Également disponible via la propriété [`onpointermove`](/fr/docs/Web/API/GlobalEventHandlers/onpointermove).
- [`pointerout`](/fr/docs/Web/API/HTMLElement/pointerout_event)
  - : Déclenché lorsqu'un pointeur est déplacé en dehors de la zone de contact d'un élément (entre autres). Également disponible via la propriété [`onpointerout`](/fr/docs/Web/API/GlobalEventHandlers/onpointerout).
- [`pointerover`](/fr/docs/Web/API/HTMLElement/pointerover_event)
  - : Déclenché lorsqu'un pointeur est déplacé à l'intérieur de la zone de contact d'un élément. Également disponible via la propriété [`onpointerover`](/fr/docs/Web/API/GlobalEventHandlers/onpointerover).
- [`pointerup`](/fr/docs/Web/API/HTMLElement/pointerup_event)
  - : Déclenché lorsqu'un pointeur n'est plus actif. Également disponible via la propriété [`onpointerup`](/fr/docs/Web/API/GlobalEventHandlers/onpointerup).

### Évènements de transition

- [`transitioncancel`](/fr/docs/Web/API/HTMLElement/transitioncancel_event)
  - : Déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) est annulée. Également disponible via la propriété [`ontransitioncancel`](/fr/docs/Web/API/GlobalEventHandlers/ontransitioncancel).
- [`transitionend`](/fr/docs/Web/API/HTMLElement/transitionend_event)
  - : Déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) est terminée. Également disponible via la propriété [`ontransitionend`](/fr/docs/Web/API/GlobalEventHandlers/ontransitionend).
- [`transitionrun`](/fr/docs/Web/API/HTMLElement/transitionrun_event)
  - : Déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) est initialement créée. Également disponible via la propriété [`ontransitionrun`](/fr/docs/Web/API/GlobalEventHandlers/ontransitionrun).
- [`transitionstart`](/fr/docs/Web/API/HTMLElement/transitionstart_event)
  - : Déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) a effectivement démarré. Également disponible via la propriété [`ontransitionstart`](/fr/docs/Web/API/GlobalEventHandlers/ontransitionstart).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element`](/fr/docs/Web/API/Element)
