---
title: Attributs universels
slug: Web/HTML/Reference/Global_attributes
l10n:
  sourceCommit: f398f522d05bb8bfe739ac2417b00712b7888494
---

Les **attributs universels** sont des attributs communs à l'ensemble des éléments HTML. Ces attributs peuvent donc être ajoutés sur tous les éléments (dans certains cas, les attributs n'ont aucun effet).

Les attributs universels peuvent être définis sur tous [les éléments HTML](/fr/docs/Web/HTML/Reference/Elements), _y compris pour les éléments non définis dans le standard_. Autrement dit, les éléments non-standards doivent pouvoir accepter ces attributs. Cela permet au navigateur de les gérer selon certains des aspects de la spécification. Par exemple, pour un navigateur conforme, un élément `<toto hidden>...</toto>` est masqué bien que `<toto>` ne soit pas un élément HTML valide.

En plus des attributs universels HTML, il existe également les attributs universels suivants&nbsp;:

- `xml:lang` et `xml:base` — ceux-ci sont hérités des spécifications XHTML et sont obsolètes, mais conservés pour des raisons de compatibilité.
- L'attribut ARIA [`role`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) et les multiples états et propriétés [`aria-*`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes), utilisés pour garantir l'accessibilité.
- Les [attributs de gestionnaire d'évènements](#liste_des_attributs_universels_de_gestionnaire_dévènements) listés ci-dessous.

## Liste des attributs universels

- [`accesskey`](/fr/docs/Web/HTML/Reference/Global_attributes/accesskey)
  - : Fournit une indication pour générer un raccourci clavier pour l'élément courant. Cet attribut se compose d'une liste de caractères séparés par des espaces. Le navigateur doit utiliser le premier caractère qui existe selon la disposition du clavier utilisée.
- [`anchor`](/fr/docs/Web/HTML/Reference/Global_attributes/anchor) {{Non-standard_Inline}}
  - : Associe un élément positionné à un élément d'ancre. La valeur de l'attribut correspond à un [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) de l'élément auquel vous souhaitez ancrer l'élément positionné. L'élément peut alors être positionné [en utilisant le positionnement d'ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using).
- [`autocapitalize`](/fr/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Contrôle si le texte saisi est automatiquement mis en majuscule et, si oui, de quelle manière.
- [`autocorrect`](/fr/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Contrôle si le texte saisi est automatiquement corrigé pour les fautes d'orthographe.
    Cela peut être appliqué aux éléments ayant du texte éditable sauf pour les éléments HTML {{HTMLElement("input")}} avec l'attribut&nbsp;: [`type="password"`](/fr/docs/Web/HTML/Reference/Elements/input/password), [`type="email"`](/fr/docs/Web/HTML/Reference/Elements/input/email) ou [`type="url"`](/fr/docs/Web/HTML/Reference/Elements/input/url).
- [`autofocus`](/fr/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Indique qu'un élément est sélectionné au chargement de la page, ou dès que l'élément HTML {{HTMLElement("dialog")}} auquel il appartient est affiché. Cet attribut est un booléen, initialement à false.
- [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class)
  - : Une liste de classes séparées par des espaces pour l'élément. Les classes permettent au CSS et à JavaScript de sélectionner et d'accéder à des éléments spécifiques avec les [sélecteurs de classe](/fr/docs/Web/CSS/Reference/Selectors/Class_selectors) ou des fonctions comme la méthode {{DOMxRef("Document.getElementsByClassName()")}}.
- [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable)
  - : Un attribut {{Glossary("Enumerated", "énuméré")}} qui indique si l'élément est éditable par l'utilisateur·ice. Si c'est le cas, le navigateur modifie son interface pour permettre l'édition. L'attribut doit prendre l'une des valeurs suivantes&nbsp;:
    - `true` ou la chaîne de caractères vide, ce qui indique que l'élément est éditable&nbsp;;
    - `false`, ce qui indique que l'élément n'est pas éditable.
    - `plaintext-only`, ce qui indique que le texte brut de l'élément est éditable, mais la mise en forme enrichie est désactivée.

- [`data-*`](/fr/docs/Web/HTML/Reference/Global_attributes/data-*)
  - : Forme une classe d'attributs, appelés attributs de données personnalisés, qui permettent d'échanger des informations propriétaires entre le [HTML](/fr/docs/Web/HTML) et sa représentation {{Glossary("DOM")}} pouvant être utilisée par des scripts. Toutes ces données personnalisées sont accessibles avec l'interface {{DOMxRef("HTMLElement")}} de l'élément sur lequel l'attribut est défini. La propriété {{DOMxRef("HTMLElement.dataset")}} permet d'y accéder.
- [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir)
  - : Un attribut {{Glossary("Enumerated", "énuméré")}} qui indique la direction du texte de l'élément. Il peut avoir les valeurs suivantes&nbsp;:
    - `ltr`, qui signifie _de gauche à droite_ et doit être utilisé pour les langues écrites de gauche à droite (comme le français)&nbsp;;
    - `rtl`, qui signifie _de droite à gauche_ et doit être utilisé pour les langues écrites de droite à gauche (comme l'arabe)&nbsp;;
    - `auto`, qui laisse l'agent utilisateur décider. Il utilise un algorithme basique en analysant les caractères de l'élément jusqu'à trouver un caractère avec une forte direction, puis applique cette direction à l'ensemble de l'élément.

- [`draggable`](/fr/docs/Web/HTML/Reference/Global_attributes/draggable)
  - : Un attribut {{Glossary("Enumerated", "énuméré")}} qui indique si l'élément peut être glissé/déposé grâce à [l'API de glisser-déposer](/fr/docs/Web/API/HTML_Drag_and_Drop_API). Il peut avoir les valeurs suivantes&nbsp;:
    - `true`, ce qui indique que l'élément peut être glissé/déposé
    - `false`, ce qui indique que l'élément ne peut pas être glissé/déposé.

- [`enterkeyhint`](/fr/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
  - : Indique quelle étiquette d'action (ou icône) présenter pour la touche Entrée sur les claviers virtuels.
- [`exportparts`](/fr/docs/Web/HTML/Reference/Global_attributes/exportparts)
  - : Utilisé pour exporter de façon transitive des parties d'ombre (<i lang="en">shadow parts</i> en anglais) d'un arbre imbriqué vers un arbre réel.
- [`headingoffset`](/fr/docs/Web/HTML/Reference/Global_attributes/headingoffset) {{Experimental_Inline}}
  - : Augmente le niveau de titre calculé des [éléments de titre](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) à l'intérieur de l'élément, sans modifier les éléments utilisés pour les écrire.
- [`headingreset`](/fr/docs/Web/HTML/Reference/Global_attributes/headingreset) {{Experimental_Inline}}
  - : Un attribut booléen qui empêche les valeurs `headingoffset` des éléments ancêtres de s'appliquer aux titres à l'intérieur de l'élément.
- [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Un attribut {{Glossary("Enumerated", "énuméré")}} qui indique que l'élément n'est pas encore, ou n'est plus, _pertinent_. Par exemple, il peut être utilisé pour masquer des éléments de la page qui ne peuvent pas être utilisés tant que la procédure de connexion n'est pas terminée. Le navigateur n'affiche pas ces éléments. Cet attribut ne doit pas être utilisé pour masquer du contenu qui peut légitimement être affiché.
- [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id)
  - : Définit un identifiant (<abbr>ID</abbr>) qui doit être unique dans tout le document. Il sert à identifier l'élément lors de la création de liens (avec un identifiant de fragment), de scripts ou de mise en forme (avec le CSS).
- [`inert`](/fr/docs/Web/HTML/Reference/Global_attributes/inert)
  - : Un booléen qui fait que le navigateur ignore les évènements d'entrée utilisateur·ice pour l'élément. Utile lorsque des évènements de clic sont présents.
- [`inputmode`](/fr/docs/Web/HTML/Reference/Global_attributes/inputmode)
  - : Fournit une indication au navigateur sur le type de configuration du clavier virtuel à utiliser lors de la modification de cet élément ou de son contenu. Principalement utilisé sur les éléments HTML {{HTMLElement("input")}}, mais utilisable sur n'importe quel élément en mode [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable).
- [`is`](/fr/docs/Web/HTML/Reference/Global_attributes/is)
  - : Permet de définir qu'un élément HTML standard doit se comporter comme un élément personnalisé natif enregistré (voir [Utiliser les éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements) pour plus de détails).

> [!NOTE]
> Les attributs `item*` font partie de la [fonctionnalité Microdata HTML WHATWG <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

- [`itemid`](/fr/docs/Web/HTML/Reference/Global_attributes/itemid)
  - : L'identifiant unique et global d'un objet.
- [`itemprop`](/fr/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - : Permet d'ajouter des propriétés à un objet. Chaque élément HTML peut avoir un attribut `itemprop` défini, où `itemprop` est une paire nom/valeur.
- [`itemref`](/fr/docs/Web/HTML/Reference/Global_attributes/itemref)
  - : Les propriétés qui ne sont pas des descendants d'un élément avec l'attribut `itemscope` peuvent être associées à l'objet avec un `itemref`. Il fournit une liste d'identifiants d'éléments (pas `itemid`) avec des propriétés supplémentaires ailleurs dans le document.
- [`itemscope`](/fr/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - : `itemscope` fonctionne généralement avec [`itemtype`](/fr/docs/Web/HTML/Reference/Global_attributes/itemtype) pour indiquer que le HTML contenu dans un bloc concerne un objet particulier. `itemscope` crée l'objet et définit la portée d'un `itemtype` associée. `itemtype` est une URL valide d'un vocabulaire (comme [schema.org](https://schema.org/)) qui décrit l'objet et le contexte de ses propriétés.
- [`itemtype`](/fr/docs/Web/HTML/Reference/Global_attributes/itemtype)
  - : Définit une <abbr title="Uniform Resource Locator">URL</abbr> du vocabulaire qui est utilisé pour définir les `itemprop` (propriétés d'objet) dans la structure de données. [`itemscope`](/fr/docs/Web/HTML/Reference/Global_attributes/itemscope) est utilisé pour définir la portée où le vocabulaire défini par `itemtype` est actif.
- [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang)
  - : Aide à définir la langue d'un élément&nbsp;: la langue dans laquelle les éléments non éditables sont écrits, ou la langue dans laquelle les éléments éditables doivent être écrits par l'utilisateur·ice. L'attribut doit contenir une valeur valide {{Glossary("BCP 47 language tag", "de balise de langue BCP 47")}}. `xml:lang` est prioritaire sur celui-ci.
- [`nonce`](/fr/docs/Web/HTML/Reference/Global_attributes/nonce)
  - : Un nombre unique («&nbsp;{{Glossary("nonce")}}&nbsp;» en anglais) qui peut être utilisé par la [politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP) pour déterminer si une requête donnée est autorisée ou non.
- [`part`](/fr/docs/Web/HTML/Reference/Global_attributes/part)
  - : Une liste de noms de parties séparés par des espaces pour l'élément. Les noms de parties permettent au CSS de cibler et de mettre en forme des éléments spécifiques dans un arbre d'ombre (<i lang="en">shadow tree</i> en anglais) avec le pseudo-élément CSS {{CSSxRef("::part")}}.
- [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Utilisé pour désigner un élément comme élément de fenêtre contextuelle (voir {{DOMxRef("Popover API", "l'API Popover", "", "nocode")}}). Les éléments de fenêtre contextuelle sont masqués avec `display: none` jusqu'à ce qu'ils soient ouverts avec un élément déclencheur/contrôle (par exemple, un `<button>` ou `<input type="button">` avec l'attribut [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget)) ou un appel à {{DOMxRef("HTMLElement.showPopover()")}}.
- [`role`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Les rôles définissent la signification sémantique du contenu, permettant aux lecteurs d'écran et autres outils de présenter et de prendre en charge l'interaction avec un objet d'une manière cohérente avec les attentes des utilisateur·ice·s pour ce type d'objet. Les rôles sont ajoutés aux éléments HTML avec `role="role_type"`, où `role_type` est le nom d'un rôle dans la spécification ARIA.
- [`slot`](/fr/docs/Web/HTML/Reference/Global_attributes/slot)
  - : Affecte un créneau dans un arbre DOM d'ombre (<i lang="en">shadow DOM</i> en anglais) à un élément&nbsp;: un élément avec l'attribut `slot` est affecté au créneau créé par l'élément HTML {{HTMLElement("slot")}} dont la valeur de l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/slot#name) correspond à la valeur de l'attribut `slot`.
- [`spellcheck`](/fr/docs/Web/HTML/Reference/Global_attributes/spellcheck)
  - : Un attribut {{Glossary("Enumerated", "énuméré")}} qui définit si l'élément peut être vérifié pour les fautes d'orthographe. Il peut avoir les valeurs suivantes&nbsp;:
    - une chaîne de caractères vide ou `true`, ce qui indique que l'élément doit, si possible, être vérifié pour les fautes d'orthographe&nbsp;;
    - `false`, ce qui indique que l'élément ne doit pas être vérifié pour les fautes d'orthographe.

- [`style`](/fr/docs/Web/HTML/Reference/Global_attributes/style)
  - : Contient les déclarations [CSS](/fr/docs/Web/CSS) à appliquer à l'élément. Il est recommandé de définir les styles dans un ou plusieurs fichiers séparés. Cet attribut et l'élément HTML {{HTMLElement("style")}} ont principalement pour but de permettre une mise en forme rapide, par exemple pour des tests.
- [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex)
  - : Un attribut entier qui indique si l'élément peut recevoir la sélection (<i lang="en">focus</i> en anglais), s'il doit participer à la navigation séquentielle au clavier, et si oui, à quelle position. Il peut prendre plusieurs valeurs&nbsp;:
    - une _valeur négative_ signifie que l'élément doit être sélectionnable, mais ne doit pas être accessible avec la navigation séquentielle au clavier&nbsp;;
    - `0` signifie que l'élément doit être sélectionnable et accessible avec la navigation séquentielle au clavier, mais son ordre relatif est défini par la convention de la plateforme&nbsp;;
    - une _valeur positive_ signifie que l'élément doit être sélectionnable et accessible avec la navigation séquentielle au clavier&nbsp;; l'ordre dans lequel les éléments sont sélectionnés est la valeur croissante de [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex). Si plusieurs éléments partagent la même valeur de tabindex, leur ordre relatif suit leur position dans le document.

- [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title)
  - : Contient un texte représentant une information de conseil liée à l'élément auquel il appartient. Une telle information peut généralement, mais pas nécessairement, être présentée à l'utilisateur·ice sous forme d'infobulle.
- [`translate`](/fr/docs/Web/HTML/Reference/Global_attributes/translate)
  - : Un attribut énuméré utilisé pour définir si les valeurs des attributs et les valeurs des nœuds enfants de type {{DOMxRef("Text")}} doivent être traduites lorsque la page est localisée, ou laissées inchangées. Il peut avoir les valeurs suivantes&nbsp;:
    - une chaîne de caractères vide ou `yes`, ce qui indique que l'élément est traduit.
    - `no`, ce qui indique que l'élément n'est pas traduit.

- [`virtualkeyboardpolicy`](/fr/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}
  - : Un attribut {{Glossary("Enumerated", "énuméré")}} utilisé pour contrôler le comportement du clavier virtuel à l'écran sur des appareils tels que les tablettes, téléphones mobiles ou autres appareils où un clavier matériel peut ne pas être disponible pour les éléments dont le contenu est éditable (par exemple, il s'agit d'un élément HTML {{HTMLElement("input")}} ou {{HTMLElement("textarea")}}, ou d'un élément avec l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) activé).
    - `auto` ou une chaîne de caractères vide, ce qui affiche automatiquement le clavier virtuel lorsque l'élément est sélectionné ou tapé.
    - `manual`, ce qui dissocie la sélection et le tap sur l'élément de l'état du clavier virtuel.

- [`writingsuggestions`](/fr/docs/Web/HTML/Reference/Global_attributes/writingsuggestions)
  - : Un attribut {{Glossary("Enumerated", "énuméré")}} qui indique si les suggestions d'écriture fournies par le navigateur doivent être activées ou non pour l'élément.
    - `false`, ce qui désactive les suggestions d'écriture du navigateur.
    - `true` ou une chaîne de caractères vide, ce qui active les suggestions d'écriture.

## Liste des attributs universels de gestionnaire d'évènements

Les attributs HTML de gestionnaire d'évènements sont déconseillés&nbsp;: voir la [référence des attributs HTML](/fr/docs/Web/HTML/Reference/Attributes#event_handler_attributes) pour leur fonctionnement.

Bien que les attributs listés ci-dessous s'appliquent à tous les éléments, ils ne sont pas utiles sur tous les éléments. Par exemple, l'attribut HTML `onvolumechange` est accepté par tous les éléments et attache un écouteur d'évènement pour `volumechange`, mais seuls les éléments média reçoivent un évènement `volumechange` déclenché par le navigateur. Pour les autres éléments, vous pouvez uniquement utiliser {{DOMxRef("EventTarget.dispatchEvent()")}} pour déclencher manuellement un tel évènement. [Certains attributs](/fr/docs/Web/HTML/Reference/Elements/body#event_attributes) peuvent être définis sur {{HTMLElement("body")}}, mais ils écoutent alors les évènements sur `window`.

- {{DOMxRef("HTMLMediaElement/abort_event", "onabort")}}
- {{DOMxRef("Element/animationcancel_event", "onanimationcancel")}}
- {{DOMxRef("Element/animationend_event", "onanimationend")}}
- {{DOMxRef("Element/animationiteration_event", "onanimationiteration")}}
- {{DOMxRef("Element/animationstart_event", "onanimationstart")}}
- {{DOMxRef("Element/auxclick_event", "onauxclick")}}
- {{DOMxRef("Element/beforeinput_event", "onbeforeinput")}}
- {{DOMxRef("Element/beforematch_event", "onbeforematch")}}
- {{DOMxRef("HTMLElement/beforetoggle_event", "onbeforetoggle")}}
- {{DOMxRef("Element/blur_event", "onblur")}}
- {{DOMxRef("HTMLInputElement/cancel_event", "oncancel")}}
- {{DOMxRef("HTMLMediaElement/canplay_event", "oncanplay")}}
- {{DOMxRef("HTMLMediaElement/canplaythrough_event", "oncanplaythrough")}}
- {{DOMxRef("HTMLElement/change_event", "onchange")}}
- {{DOMxRef("Element/click_event", "onclick")}}
- {{DOMxRef("HTMLDialogElement/close_event", "onclose")}}
- {{DOMxRef("HTMLElement/command_event", "oncommand")}}
- {{DOMxRef("Element/contentvisibilityautostatechange_event", "oncontentvisibilityautostatechange")}}
- {{DOMxRef("HTMLCanvasElement/contextlost_event", "oncontextlost")}}
- {{DOMxRef("Element/contextmenu_event", "oncontextmenu")}}
- {{DOMxRef("HTMLCanvasElement/contextrestored_event", "oncontextrestored")}}
- {{DOMxRef("Element/copy_event", "oncopy")}}
- {{DOMxRef("HTMLTrackElement/cuechange_event", "oncuechange")}}
- {{DOMxRef("Element/cut_event", "oncut")}}
- {{DOMxRef("Element/dblclick_event", "ondblclick")}}
- {{DOMxRef("HTMLElement/drag_event", "ondrag")}}
- {{DOMxRef("HTMLElement/dragend_event", "ondragend")}}
- {{DOMxRef("HTMLElement/dragenter_event", "ondragenter")}}
- {{DOMxRef("HTMLElement/dragleave_event", "ondragleave")}}
- {{DOMxRef("HTMLElement/dragover_event", "ondragover")}}
- {{DOMxRef("HTMLElement/dragstart_event", "ondragstart")}}
- {{DOMxRef("HTMLElement/drop_event", "ondrop")}}
- {{DOMxRef("HTMLMediaElement/durationchange_event", "ondurationchange")}}
- {{DOMxRef("HTMLMediaElement/emptied_event", "onemptied")}}
- {{DOMxRef("HTMLMediaElement/ended_event", "onended")}}
- {{DOMxRef("HTMLElement/error_event", "onerror")}}
- {{DOMxRef("Element/focus_event", "onfocus")}}
- {{DOMxRef("Element/focusin_event", "onfocusin")}}
- {{DOMxRef("Element/focusout_event", "onfocusout")}}
- {{DOMxRef("HTMLFormElement/formdata_event", "onformdata")}}
- {{DOMxRef("Element/fullscreenchange_event", "onfullscreenchange")}}
- {{DOMxRef("Element/fullscreenerror_event", "onfullscreenerror")}}
- {{DOMxRef("Element/gesturechange_event", "ongesturechange")}} {{Non-standard_Inline}}
- {{DOMxRef("Element/gestureend_event", "ongestureend")}} {{Non-standard_Inline}}
- {{DOMxRef("Element/gesturestart_event", "ongesturestart")}} {{Non-standard_Inline}}
- {{DOMxRef("Element/gotpointercapture_event", "ongotpointercapture")}}
- {{DOMxRef("Element/input_event", "oninput")}}
- {{DOMxRef("HTMLInputElement/invalid_event", "oninvalid")}}
- {{DOMxRef("Element/keydown_event", "onkeydown")}}
- {{DOMxRef("Element/keypress_event", "onkeypress")}} {{Deprecated_Inline}}
- {{DOMxRef("Element/keyup_event", "onkeyup")}}
- {{DOMxRef("HTMLElement/load_event", "onload")}}
- {{DOMxRef("HTMLMediaElement/loadeddata_event", "onloadeddata")}}
- {{DOMxRef("HTMLMediaElement/loadedmetadata_event", "onloadedmetadata")}}
- {{DOMxRef("HTMLMediaElement/loadstart_event", "onloadstart")}}
- {{DOMxRef("Element/lostpointercapture_event", "onlostpointercapture")}}
- {{DOMxRef("Element/mousedown_event", "onmousedown")}}
- {{DOMxRef("Element/mouseenter_event", "onmouseenter")}}
- {{DOMxRef("Element/mouseleave_event", "onmouseleave")}}
- {{DOMxRef("Element/mousemove_event", "onmousemove")}}
- {{DOMxRef("Element/mouseout_event", "onmouseout")}}
- {{DOMxRef("Element/mouseover_event", "onmouseover")}}
- {{DOMxRef("Element/mouseup_event", "onmouseup")}}
- {{DOMxRef("Element/mousewheel_event", "onmousewheel")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
- {{DOMxRef("Element/paste_event", "onpaste")}}
- {{DOMxRef("HTMLMediaElement/pause_event", "onpause")}}
- {{DOMxRef("HTMLMediaElement/play_event", "onplay")}}
- {{DOMxRef("HTMLMediaElement/playing_event", "onplaying")}}
- {{DOMxRef("Element/pointercancel_event", "onpointercancel")}}
- {{DOMxRef("Element/pointerdown_event", "onpointerdown")}}
- {{DOMxRef("Element/pointerenter_event", "onpointerenter")}}
- {{DOMxRef("Element/pointerleave_event", "onpointerleave")}}
- {{DOMxRef("Element/pointermove_event", "onpointermove")}}
- {{DOMxRef("Element/pointerout_event", "onpointerout")}}
- {{DOMxRef("Element/pointerover_event", "onpointerover")}}
- {{DOMxRef("Element/pointerrawupdate_event", "onpointerrawupdate")}}
- {{DOMxRef("Element/pointerup_event", "onpointerup")}}
- {{DOMxRef("HTMLMediaElement/progress_event", "onprogress")}}
- {{DOMxRef("HTMLMediaElement/ratechange_event", "onratechange")}}
- {{DOMxRef("HTMLFormElement/reset_event", "onreset")}}
- {{DOMxRef("HTMLVideoElement/resize_event", "onresize")}}
- {{DOMxRef("Element/scroll_event", "onscroll")}}
- {{DOMxRef("Element/scrollend_event", "onscrollend")}}
- {{DOMxRef("Element/scrollsnapchange_event", "onscrollsnapchange")}} {{Experimental_Inline}}
- {{DOMxRef("Element/scrollsnapchanging_event", "onscrollsnapchanging")}} {{Experimental_Inline}}
- {{DOMxRef("Element/securitypolicyviolation_event", "onsecuritypolicyviolation")}}
- {{DOMxRef("HTMLMediaElement/seeked_event", "onseeked")}}
- {{DOMxRef("HTMLMediaElement/seeking_event", "onseeking")}}
- {{DOMxRef("HTMLInputElement/select_event", "onselect")}}
- {{DOMxRef("HTMLInputElement/selectionchange_event", "onselectionchange")}}
- {{DOMxRef("Node/selectstart_event", "onselectstart")}}
- {{DOMxRef("HTMLSlotElement/slotchange_event", "onslotchange")}}
- {{DOMxRef("HTMLMediaElement/stalled_event", "onstalled")}}
- {{DOMxRef("HTMLFormElement/submit_event", "onsubmit")}}
- {{DOMxRef("HTMLMediaElement/suspend_event", "onsuspend")}}
- {{DOMxRef("HTMLMediaElement/timeupdate_event", "ontimeupdate")}}
- {{DOMxRef("HTMLElement/toggle_event", "ontoggle")}}
- {{DOMxRef("Element/touchcancel_event", "ontouchcancel")}}
- {{DOMxRef("Element/touchend_event", "ontouchend")}}
- {{DOMxRef("Element/touchmove_event", "ontouchmove")}}
- {{DOMxRef("Element/touchstart_event", "ontouchstart")}}
- {{DOMxRef("Element/transitioncancel_event", "ontransitioncancel")}}
- {{DOMxRef("Element/transitionend_event", "ontransitionend")}}
- {{DOMxRef("Element/transitionrun_event", "ontransitionrun")}}
- {{DOMxRef("Element/transitionstart_event", "ontransitionstart")}}
- {{DOMxRef("HTMLMediaElement/volumechange_event", "onvolumechange")}}
- {{DOMxRef("HTMLMediaElement/waiting_event", "onwaiting")}}
- {{DOMxRef("Element/webkitmouseforcechanged_event", "onwebkitmouseforcechanged")}} {{Non-standard_Inline}}
- {{DOMxRef("Element/webkitmouseforcedown_event", "onwebkitmouseforcedown")}} {{Non-standard_Inline}}
- {{DOMxRef("Element/webkitmouseforceup_event", "onwebkitmouseforceup")}} {{Non-standard_Inline}}
- {{DOMxRef("Element/webkitmouseforcewillbegin_event", "onwebkitmouseforcewillbegin")}} {{Non-standard_Inline}}
- {{DOMxRef("Element/wheel_event", "onwheel")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les interfaces {{DOMxRef("Element")}} qui permet de manipuler la plupart des attributs universels.
