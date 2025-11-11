---
title: Attributs universels
slug: Web/HTML/Reference/Global_attributes
original_slug: Web/HTML/Global_attributes
l10n:
  sourceCommit: 1e1ac4b84b46ef34e901e22ee94e97cc749a4b3a
---

Les **attributs universels** sont des attributs communs à l'ensemble des éléments HTML. Ces attributs peuvent donc être ajoutés sur tous les éléments (dans certains cas, les attributs n'auront aucun effet).

Les attributs universels peuvent être définis sur tous [les éléments HTML](/fr/docs/Web/HTML/Reference/Elements), _y compris pour les éléments non définis dans le standard_. Autrement dit, les éléments non-standards doivent pouvoir accepter ces attributs. Cela permettra au navigateur de les gérer selon certains des aspects de la spécification. Par exemple, pour un navigateur conforme, un élément `<toto hidden>...</toto>` sera masqué bien que `<toto>` ne soit pas un élément HTML valide.

En plus des attributs universels HTML, il existe également les attributs universels suivants&nbsp;:

- `xml:lang` et `xml:base` — ceux-ci sont hérités des spécifications XHTML et sont obsolètes, mais conservés pour des raisons de compatibilité.
- L'attribut ARIA [`role`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles) et les multiples états et propriétés [`aria-*`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes), utilisés pour garantir l'accessibilité.
- Les [attributs de gestionnaire d'événements](#liste_des_attributs_globaux_de_gestionnaire_dévénements) listés ci-dessous.

## Liste des attributs universels

- [`accesskey`](/fr/docs/Web/HTML/Reference/Global_attributes/accesskey)
  - : Fournit une indication pour générer un raccourci clavier pour l'élément courant. Cet attribut se compose d'une liste de caractères séparés par des espaces. Le navigateur doit utiliser le premier caractère qui existe selon la disposition du clavier utilisée.
- [`anchor`](/fr/docs/Web/HTML/Reference/Global_attributes/anchor) {{Non-standard_Inline}}
  - : Associe un élément positionné à un élément d'ancre. La valeur de l'attribut correspond à l'[`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) de l'élément auquel vous souhaitez ancrer l'élément positionné. L'élément peut alors être positionné [en utilisant le positionnement d'ancre CSS](/fr/docs/Web/CSS/CSS_anchor_positioning/Using).
- [`autocapitalize`](/fr/docs/Web/HTML/Reference/Global_attributes/autocapitalize)
  - : Contrôle si le texte saisi est automatiquement mis en majuscule et, si oui, de quelle manière.
- [`autocorrect`](/fr/docs/Web/HTML/Reference/Global_attributes/autocorrect)
  - : Contrôle si le texte saisi est automatiquement corrigé pour les fautes d'orthographe.
    Cela peut être appliqué aux éléments ayant du texte éditable sauf pour les éléments HTML {{HTMLElement("input")}} avec l'attribut&nbsp;: [`type="password"`](/fr/docs/Web/HTML/Reference/Elements/input/password), [`type="email"`](/fr/docs/Web/HTML/Reference/Elements/input/email) ou [`type="url"`](/fr/docs/Web/HTML/Reference/Elements/input/url).
- [`autofocus`](/fr/docs/Web/HTML/Reference/Global_attributes/autofocus)
  - : Indique qu'un élément est sélectionné au chargement de la page, ou dès que l'élément HTML {{HTMLElement("dialog")}} auquel il appartient est affiché. Cet attribut est un booléen, initialement à false.
- [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class)
  - : Une liste de classes séparées par des espaces pour l'élément. Les classes permettent au CSS et à JavaScript de sélectionner et d'accéder à des éléments spécifiques via les [sélecteurs de classe](/fr/docs/Web/CSS/Reference/Selectors/Class_selectors) ou des fonctions comme la méthode {{DOMxRef("Document.getElementsByClassName()")}}.
- [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable)
  - : Un attribut {{Glossary("Enumerated", "énuméré")}} qui indique si l'élément est éditable par l'utilisateur·ice. Si c'est le cas, le navigateur modifie son interface pour permettre l'édition. L'attribut doit prendre l'une des valeurs suivantes&nbsp;:
    - `true` ou la chaîne de caractères vide, ce qui indique que l'élément est éditable&nbsp;;
    - `false`, ce qui indique que l'élément n'est pas éditable.
    - `plaintext-only`, ce qui indique que le texte brut de l'élément est éditable, mais la mise en forme enrichie est désactivée.

- [`data-*`](/fr/docs/Web/HTML/Reference/Global_attributes/data-*)
  - : Forme une classe d'attributs, appelés attributs de données personnalisés, qui permettent d'échanger des informations propriétaires entre le [HTML](/fr/docs/Web/HTML) et sa représentation {{Glossary("DOM")}} pouvant être utilisée par des scripts. Toutes ces données personnalisées sont accessibles via l'interface {{DOMxRef("HTMLElement")}} de l'élément sur lequel l'attribut est défini. La propriété {{DOMxRef("HTMLElement.dataset")}} permet d'y accéder.
- [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir)
  - : Un attribut {{Glossary("Enumerated", "énuméré")}} qui indique la direction du texte de l'élément. Il peut avoir les valeurs suivantes&nbsp;:
    - `ltr`, qui signifie _de gauche à droite_ et doit être utilisé pour les langues écrites de gauche à droite (comme le français)&nbsp;;
    - `rtl`, qui signifie _de droite à gauche_ et doit être utilisé pour les langues écrites de droite à gauche (comme l'arabe)&nbsp;;
    - `auto`, qui laisse l'agent utilisateur décider. Il utilise un algorithme basique en analysant les caractères de l'élément jusqu'à trouver un caractère avec une forte direction, puis applique cette direction à l'ensemble de l'élément.

- [`draggable`](/fr/docs/Web/HTML/Reference/Global_attributes/draggable)
  - : Un attribut {{Glossary("Enumerated", "énuméré")}} qui indique si l'élément peut être glissé/déposé grâce à l'[API de glisser-déposer](/fr/docs/Web/API/HTML_Drag_and_Drop_API). Il peut avoir les valeurs suivantes&nbsp;:
    - `true`, ce qui indique que l'élément peut être glissé/déposé
    - `false`, ce qui indique que l'élément ne peut pas être glissé/déposé.

- [`enterkeyhint`](/fr/docs/Web/HTML/Reference/Global_attributes/enterkeyhint)
  - : Indique quelle étiquette d'action (ou icône) présenter pour la touche Entrée sur les claviers virtuels.
- [`exportparts`](/fr/docs/Web/HTML/Reference/Global_attributes/exportparts)
  - : Utilisé pour exporter de façon transitive des parties d'ombre (<i lang="en">shadow parts</i> en anglais) d'un arbre imbriqué vers un arbre réel.
- [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Un attribut {{Glossary("Enumerated", "énuméré")}} qui indique que l'élément n'est pas encore, ou n'est plus, _pertinent_. Par exemple, il peut être utilisé pour masquer des éléments de la page qui ne peuvent pas être utilisés tant que la procédure de connexion n'est pas terminée. Le navigateur n'affichera pas ces éléments. Cet attribut ne doit pas être utilisé pour masquer du contenu qui pourrait légitimement être affiché.
- [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id)
  - : Définit un identifiant (<abbr>ID</abbr>) qui doit être unique dans tout le document. Il sert à identifier l'élément lors de la création de liens (avec un identifiant de fragment), de scripts ou de mise en forme (avec le CSS).
- [`inert`](/fr/docs/Web/HTML/Reference/Global_attributes/inert)
  - : Un booléen qui fait que le navigateur ignore les événements d'entrée utilisateur pour l'élément. Utile lorsque des événements de clic sont présents.
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
  - : Les propriétés qui ne sont pas des descendants d'un élément avec l'attribut `itemscope` peuvent être associées à l'objet via un `itemref`. Il fournit une liste d'identifiants d'éléments (pas d'`itemid`) avec des propriétés supplémentaires ailleurs dans le document.
- [`itemscope`](/fr/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - : `itemscope` fonctionne généralement avec [`itemtype`](/fr/docs/Web/HTML/Reference/Global_attributes/itemtype) pour indiquer que le HTML contenu dans un bloc concerne un objet particulier. `itemscope` crée l'objet et définit la portée de l'`itemtype` associée. `itemtype` est une URL valide d'un vocabulaire (comme [schema.org](https://schema.org/)) qui décrit l'objet et le contexte de ses propriétés.
- [`itemtype`](/fr/docs/Web/HTML/Reference/Global_attributes/itemtype)
  - : Définit l'<abbr title="Uniform Resource Locator">URL</abbr> du vocabulaire qui sera utilisé pour définir les `itemprop` (propriétés d'objet) dans la structure de données. [`itemscope`](/fr/docs/Web/HTML/Reference/Global_attributes/itemscope) est utilisé pour définir la portée où le vocabulaire défini par `itemtype` sera actif.
- [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang)
  - : Aide à définir la langue d'un élément&nbsp;: la langue dans laquelle les éléments non éditables sont écrits, ou la langue dans laquelle les éléments éditables doivent être écrits par l'utilisateur·ice. L'attribut doit contenir une valeur valide {{Glossary("BCP 47 language tag", "de balise de langue BCP 47")}}. `xml:lang` est prioritaire sur celui-ci.
- [`nonce`](/fr/docs/Web/HTML/Reference/Global_attributes/nonce)
  - : Un nombre unique («&nbsp;nonce&nbsp;», pour <i lang="en">number used once</i> en anglais) qui peut être utilisé par la [politique de sécurité du contenu](/fr/docs/Web/HTTP/Guides/CSP) pour déterminer si une requête donnée sera autorisée ou non.
- [`part`](/fr/docs/Web/HTML/Reference/Global_attributes/part)
  - : Une liste de noms de parties séparés par des espaces pour l'élément. Les noms de parties permettent au CSS de cibler et de mettre en forme des éléments spécifiques dans un arbre d'ombre (<i lang="en">shadow tree</i> en anglais) via le pseudo-élément {{CSSxRef("::part")}}.
- [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover)
  - : Utilisé pour désigner un élément comme élément popover (voir l'{{DOMxRef("Popover API", "API Popover", "", "nocode")}}). Les éléments popover sont masqués via `display: none` jusqu'à ce qu'ils soient ouverts via un élément déclencheur/contrôle (par exemple, un `<button>` ou `<input type="button">` avec l'attribut [`popovertarget`](/fr/docs/Web/HTML/Reference/Elements/button#popovertarget)) ou un appel à {{DOMxRef("HTMLElement.showPopover()")}}.
- [`role`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : Les rôles définissent la signification sémantique du contenu, permettant aux lecteurs d'écran et autres outils de présenter et de prendre en charge l'interaction avec un objet d'une manière cohérente avec les attentes des utilisateur·ice·s pour ce type d'objet. Les rôles sont ajoutés aux éléments HTML via `role="role_type"`, où `role_type` est le nom d'un rôle dans la spécification ARIA.
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
    - une _valeur négative_ signifie que l'élément doit être sélectionnable, mais ne doit pas être accessible via la navigation séquentielle au clavier&nbsp;;
    - `0` signifie que l'élément doit être sélectionnable et accessible via la navigation séquentielle au clavier, mais son ordre relatif est défini par la convention de la plateforme&nbsp;;
    - une _valeur positive_ signifie que l'élément doit être sélectionnable et accessible via la navigation séquentielle au clavier&nbsp;; l'ordre dans lequel les éléments sont sélectionnés est la valeur croissante de [`tabindex`](/fr/docs/Web/HTML/Reference/Global_attributes/tabindex). Si plusieurs éléments partagent la même valeur de tabindex, leur ordre relatif suit leur position dans le document.

- [`title`](/fr/docs/Web/HTML/Reference/Global_attributes/title)
  - : Contient un texte représentant une information de conseil liée à l'élément auquel il appartient. Une telle information peut généralement, mais pas nécessairement, être présentée à l'utilisateur·ice sous forme d'infobulle.
- [`translate`](/fr/docs/Web/HTML/Reference/Global_attributes/translate)
  - : Un attribut énuméré utilisé pour définir si les valeurs des attributs et les valeurs des nœuds enfants de type {{DOMxRef("Text")}} doivent être traduites lorsque la page est localisée, ou laissées inchangées. Il peut avoir les valeurs suivantes&nbsp;:
    - une chaîne de caractères vide ou `yes`, ce qui indique que l'élément sera traduit.
    - `no`, ce qui indique que l'élément ne sera pas traduit.

- [`virtualkeyboardpolicy`](/fr/docs/Web/HTML/Reference/Global_attributes/virtualkeyboardpolicy) {{Experimental_Inline}}
  - : Un attribut {{Glossary("Enumerated", "énuméré")}} utilisé pour contrôler le comportement du clavier virtuel à l'écran sur des appareils tels que les tablettes, téléphones mobiles ou autres appareils où un clavier matériel peut ne pas être disponible pour les éléments dont le contenu est éditable (par exemple, il s'agit d'un élément HTML {{HTMLElement("input")}} ou {{HTMLElement("textarea")}}, ou d'un élément avec l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) activé).
    - `auto` ou une chaîne de caractères vide, ce qui affiche automatiquement le clavier virtuel lorsque l'élément est sélectionné ou tapé.
    - `manual`, ce qui dissocie la sélection et le tap sur l'élément de l'état du clavier virtuel.

- [`writingsuggestions`](/fr/docs/Web/HTML/Reference/Global_attributes/writingsuggestions)
  - : Un attribut {{Glossary("Enumerated", "énuméré")}} qui indique si les suggestions d'écriture fournies par le navigateur doivent être activées ou non pour l'élément.
    - `false`, ce qui désactive les suggestions d'écriture du navigateur.
    - `true` ou une chaîne de caractères vide, ce qui active les suggestions d'écriture.

## Liste des attributs globaux de gestionnaire d'événements

Les attributs HTML de gestionnaire d'événements sont déconseillés&nbsp;: voir la [référence des attributs HTML](/fr/docs/Web/HTML/Reference/Attributes#event_handler_attributes) pour leur fonctionnement.

Bien que les attributs listés ci-dessous s'appliquent à tous les éléments, ils ne sont pas utiles sur tous les éléments. Par exemple, l'attribut HTML `onvolumechange` est accepté par tous les éléments et attache un écouteur d'événement pour `volumechange`, mais seuls les éléments média recevront un événement `volumechange` déclenché par le navigateur. Pour les autres éléments, vous pouvez uniquement utiliser {{DOMxRef("EventTarget.dispatchEvent()")}} pour déclencher manuellement un tel événement. [Certains attributs](/fr/docs/Web/HTML/Reference/Elements/body#event_attributes) peuvent être spécifiés sur {{HTMLElement("body")}}, mais ils écouteront alors les événements sur `window`.

- [`onabort`](/fr/docs/Web/API/HTMLMediaElement/abort_event)
- [`onanimationcancel`](/fr/docs/Web/API/Element/animationcancel_event)
- [`onanimationend`](/fr/docs/Web/API/Element/animationend_event)
- [`onanimationiteration`](/fr/docs/Web/API/Element/animationiteration_event)
- [`onanimationstart`](/fr/docs/Web/API/Element/animationstart_event)
- [`onauxclick`](/fr/docs/Web/API/Element/auxclick_event)
- [`onbeforeinput`](/fr/docs/Web/API/Element/beforeinput_event)
- [`onbeforematch`](/fr/docs/Web/API/Element/beforematch_event)
- [`onbeforetoggle`](/fr/docs/Web/API/HTMLElement/beforetoggle_event)
- [`onblur`](/fr/docs/Web/API/Element/blur_event)
- [`oncancel`](/fr/docs/Web/API/HTMLInputElement/cancel_event)
- [`oncanplay`](/fr/docs/Web/API/HTMLMediaElement/canplay_event)
- [`oncanplaythrough`](/fr/docs/Web/API/HTMLMediaElement/canplaythrough_event)
- [`onchange`](/fr/docs/Web/API/HTMLElement/change_event)
- [`onclick`](/fr/docs/Web/API/Element/click_event)
- [`onclose`](/fr/docs/Web/API/HTMLDialogElement/close_event)
- [`oncommand`](/fr/docs/Web/API/HTMLElement/command_event)
- [`oncontentvisibilityautostatechange`](/fr/docs/Web/API/Element/contentvisibilityautostatechange_event)
- [`oncontextlost`](/fr/docs/Web/API/HTMLCanvasElement/contextlost_event)
- [`oncontextmenu`](/fr/docs/Web/API/Element/contextmenu_event)
- [`oncontextrestored`](/fr/docs/Web/API/HTMLCanvasElement/contextrestored_event)
- [`oncopy`](/fr/docs/Web/API/Element/copy_event)
- [`oncuechange`](/fr/docs/Web/API/HTMLTrackElement/cuechange_event)
- [`oncut`](/fr/docs/Web/API/Element/cut_event)
- [`ondblclick`](/fr/docs/Web/API/Element/dblclick_event)
- [`ondrag`](/fr/docs/Web/API/HTMLElement/drag_event)
- [`ondragend`](/fr/docs/Web/API/HTMLElement/dragend_event)
- [`ondragenter`](/fr/docs/Web/API/HTMLElement/dragenter_event)
- [`ondragleave`](/fr/docs/Web/API/HTMLElement/dragleave_event)
- [`ondragover`](/fr/docs/Web/API/HTMLElement/dragover_event)
- [`ondragstart`](/fr/docs/Web/API/HTMLElement/dragstart_event)
- [`ondrop`](/fr/docs/Web/API/HTMLElement/drop_event)
- [`ondurationchange`](/fr/docs/Web/API/HTMLMediaElement/durationchange_event)
- [`onemptied`](/fr/docs/Web/API/HTMLMediaElement/emptied_event)
- [`onended`](/fr/docs/Web/API/HTMLMediaElement/ended_event)
- [`onerror`](/fr/docs/Web/API/HTMLElement/error_event)
- [`onfocus`](/fr/docs/Web/API/Element/focus_event)
- [`onfocusin`](/fr/docs/Web/API/Element/focusin_event)
- [`onfocusout`](/fr/docs/Web/API/Element/focusout_event)
- [`onformdata`](/fr/docs/Web/API/HTMLFormElement/formdata_event)
- [`onfullscreenchange`](/fr/docs/Web/API/Element/fullscreenchange_event)
- [`onfullscreenerror`](/fr/docs/Web/API/Element/fullscreenerror_event)
- [`ongesturechange`](/fr/docs/Web/API/Element/gesturechange_event) {{Non-standard_Inline}}
- [`ongestureend`](/fr/docs/Web/API/Element/gestureend_event) {{Non-standard_Inline}}
- [`ongesturestart`](/fr/docs/Web/API/Element/gesturestart_event) {{Non-standard_Inline}}
- [`ongotpointercapture`](/fr/docs/Web/API/Element/gotpointercapture_event)
- [`oninput`](/fr/docs/Web/API/Element/input_event)
- [`oninvalid`](/fr/docs/Web/API/HTMLInputElement/invalid_event)
- [`onkeydown`](/fr/docs/Web/API/Element/keydown_event)
- [`onkeypress`](/fr/docs/Web/API/Element/keypress_event) {{Deprecated_Inline}}
- [`onkeyup`](/fr/docs/Web/API/Element/keyup_event)
- [`onload`](/fr/docs/Web/API/HTMLElement/load_event)
- [`onloadeddata`](/fr/docs/Web/API/HTMLMediaElement/loadeddata_event)
- [`onloadedmetadata`](/fr/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
- [`onloadstart`](/fr/docs/Web/API/HTMLMediaElement/loadstart_event)
- [`onlostpointercapture`](/fr/docs/Web/API/Element/lostpointercapture_event)
- [`onmousedown`](/fr/docs/Web/API/Element/mousedown_event)
- [`onmouseenter`](/fr/docs/Web/API/Element/mouseenter_event)
- [`onmouseleave`](/fr/docs/Web/API/Element/mouseleave_event)
- [`onmousemove`](/fr/docs/Web/API/Element/mousemove_event)
- [`onmouseout`](/fr/docs/Web/API/Element/mouseout_event)
- [`onmouseover`](/fr/docs/Web/API/Element/mouseover_event)
- [`onmouseup`](/fr/docs/Web/API/Element/mouseup_event)
- [`onmousewheel`](/fr/docs/Web/API/Element/mousewheel_event) {{Deprecated_Inline}} {{Non-standard_Inline}}
- [`onpaste`](/fr/docs/Web/API/Element/paste_event)
- [`onpause`](/fr/docs/Web/API/HTMLMediaElement/pause_event)
- [`onplay`](/fr/docs/Web/API/HTMLMediaElement/play_event)
- [`onplaying`](/fr/docs/Web/API/HTMLMediaElement/playing_event)
- [`onpointercancel`](/fr/docs/Web/API/Element/pointercancel_event)
- [`onpointerdown`](/fr/docs/Web/API/Element/pointerdown_event)
- [`onpointerenter`](/fr/docs/Web/API/Element/pointerenter_event)
- [`onpointerleave`](/fr/docs/Web/API/Element/pointerleave_event)
- [`onpointermove`](/fr/docs/Web/API/Element/pointermove_event)
- [`onpointerout`](/fr/docs/Web/API/Element/pointerout_event)
- [`onpointerover`](/fr/docs/Web/API/Element/pointerover_event)
- [`onpointerrawupdate`](/fr/docs/Web/API/Element/pointerrawupdate_event)
- [`onpointerup`](/fr/docs/Web/API/Element/pointerup_event)
- [`onprogress`](/fr/docs/Web/API/HTMLMediaElement/progress_event)
- [`onratechange`](/fr/docs/Web/API/HTMLMediaElement/ratechange_event)
- [`onreset`](/fr/docs/Web/API/HTMLFormElement/reset_event)
- [`onresize`](/fr/docs/Web/API/HTMLVideoElement/resize_event)
- [`onscroll`](/fr/docs/Web/API/Element/scroll_event)
- [`onscrollend`](/fr/docs/Web/API/Element/scrollend_event)
- [`onscrollsnapchange`](/fr/docs/Web/API/Element/scrollsnapchange_event) {{Experimental_Inline}}
- [`onscrollsnapchanging`](/fr/docs/Web/API/Element/scrollsnapchanging_event) {{Experimental_Inline}}
- [`onsecuritypolicyviolation`](/fr/docs/Web/API/Element/securitypolicyviolation_event)
- [`onseeked`](/fr/docs/Web/API/HTMLMediaElement/seeked_event)
- [`onseeking`](/fr/docs/Web/API/HTMLMediaElement/seeking_event)
- [`onselect`](/fr/docs/Web/API/HTMLInputElement/select_event)
- [`onselectionchange`](/fr/docs/Web/API/HTMLInputElement/selectionchange_event)
- [`onselectstart`](/fr/docs/Web/API/Node/selectstart_event)
- [`onslotchange`](/fr/docs/Web/API/HTMLSlotElement/slotchange_event)
- [`onstalled`](/fr/docs/Web/API/HTMLMediaElement/stalled_event)
- [`onsubmit`](/fr/docs/Web/API/HTMLFormElement/submit_event)
- [`onsuspend`](/fr/docs/Web/API/HTMLMediaElement/suspend_event)
- [`ontimeupdate`](/fr/docs/Web/API/HTMLMediaElement/timeupdate_event)
- [`ontoggle`](/fr/docs/Web/API/HTMLElement/toggle_event)
- [`ontouchcancel`](/fr/docs/Web/API/Element/touchcancel_event)
- [`ontouchend`](/fr/docs/Web/API/Element/touchend_event)
- [`ontouchmove`](/fr/docs/Web/API/Element/touchmove_event)
- [`ontouchstart`](/fr/docs/Web/API/Element/touchstart_event)
- [`ontransitioncancel`](/fr/docs/Web/API/Element/transitioncancel_event)
- [`ontransitionend`](/fr/docs/Web/API/Element/transitionend_event)
- [`ontransitionrun`](/fr/docs/Web/API/Element/transitionrun_event)
- [`ontransitionstart`](/fr/docs/Web/API/Element/transitionstart_event)
- [`onvolumechange`](/fr/docs/Web/API/HTMLMediaElement/volumechange_event)
- [`onwaiting`](/fr/docs/Web/API/HTMLMediaElement/waiting_event)
- [`onwebkitmouseforcechanged`](/fr/docs/Web/API/Element/webkitmouseforcechanged_event) {{Non-standard_Inline}}
- [`onwebkitmouseforcedown`](/fr/docs/Web/API/Element/webkitmouseforcedown_event) {{Non-standard_Inline}}
- [`onwebkitmouseforceup`](/fr/docs/Web/API/Element/webkitmouseforceup_event) {{Non-standard_Inline}}
- [`onwebkitmouseforcewillbegin`](/fr/docs/Web/API/Element/webkitmouseforcewillbegin_event) {{Non-standard_Inline}}
- [`onwheel`](/fr/docs/Web/API/Element/wheel_event)

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les interfaces {{DOMxRef("Element")}} qui permet de manipuler la plupart des attributs globaux.
