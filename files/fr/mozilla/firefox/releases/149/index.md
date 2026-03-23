---
title: Firefox 149 note de version pour les développeurs
short-title: Firefox 149
slug: Mozilla/Firefox/Releases/149
l10n:
  sourceCommit: 8a74d8feac267c1ddc37a4a8bc61e9aa8db75b12
---

Cet article présente les informations concernant les changements de Firefox 149 qui concernent les développeur·euse·s.
Firefox 149 est sorti le [24 mars 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=149).

## Changements pour les développeur·euse·s web

### HTML

- L'attribut universel [`popover`](/fr/docs/Web/HTML/Reference/Global_attributes/popover) prend désormais en charge la valeur [`hint`](/fr/docs/Web/HTML/Reference/Global_attributes/popover#hint). Les fenêtres contextuelles avec la valeur `hint` ne fermeront pas les fenêtres contextuelles `auto` lorsqu'elles sont affichées, mais fermeront les autres fenêtres contextuelles d'indice. ([bogue Firefox 1867743 <sup>(angl.)</sup>](https://bugzil.la/1867743)).

### MathML

- La propriété CSS [`font-family: math`](/fr/docs/Web/CSS/Reference/Properties/font-family#math) est désormais prise en charge et appliquée par défaut aux éléments {{MathMLElement('math')}}.
  Cela permet aux sites web d'utiliser une police mathématique appropriée et/ou MathML sans avoir à connaître les polices présentes sur le système d'exploitation sous-jacent. ([bogue Firefox 2014703 <sup>(angl.)</sup>](https://bugzil.la/2014703)).

### CSS

- La propriété CSS {{CSSxRef("shape-outside")}} prend désormais en charge la fonction {{CSSxRef("basic-shape/xywh", "xywh()")}} comme valeur. Cela permet de définir une forme autour de laquelle le contenu en ligne peut s'enrouler, en utilisant les distances par rapport aux bords gauche (`x`) et supérieur (`y`) du bloc contenant, ainsi qu'une largeur (`w`) et une hauteur (`h`). ([bogue Firefox 1983187 <sup>(angl.)</sup>](https://bugzil.la/1983187)).

- La propriété CSS {{CSSxRef("vertical-align")}} est désormais une propriété raccourcie pour les propriétés {{CSSxRef("alignment-baseline")}}, {{CSSxRef("baseline-shift")}} et {{CSSxRef("baseline-source")}}. ([bogue Firefox 1830771 <sup>(angl.)</sup>](https://bugzil.la/1830771)).

- La partie [`<container-query>`](/fr/docs/Web/CSS/Reference/At-rules/@container#container-query) de la [règle](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{CSSxRef("@container")}} est désormais optionnelle.
  Cela permet de faire correspondre des conteneurs uniquement en fonction de leurs noms.
  ([bogue Firefox 2016474 <sup>(angl.)</sup>](https://bugzil.la/2016474)).

### APIs

- Le paramètre [`options.resizeQuality`](/fr/docs/Web/API/Window/createImageBitmap#resizequality) est désormais pris en charge par {{DOMxRef("Window.createImageBitmap()")}} et {{DOMxRef("WorkerGlobalScope.createImageBitmap()")}}.
  De plus, les méthodes permettent désormais de définir à la fois les options de redimensionnement ([`options.resizeWidth`](/fr/docs/Web/API/Window/createImageBitmap#resizewidth) ou [`options.resizeHeight`](/fr/docs/Web/API/Window/createImageBitmap#resizeheight)) et les paramètres matriciels de l'image ([`sx`, `sy`, `sw`, et `sh`](/fr/docs/Web/API/Window/createImageBitmap#sx)) en même temps — auparavant, définir les deux retournait la matrice source non mise à l'échelle.
  ([bogue Firefox 2010125 <sup>(angl.)</sup>](https://bugzil.la/2010125)).

#### DOM

- La méthode [`HTMLSelectElement.showPicker()`](/fr/docs/Web/API/HTMLInputElement/showPicker#showpicker_pour_un_champ_dentrée_associé_à_une_datalist) est désormais prise en charge pour une liste d'options définie dans un {{HTMLElement("datalist")}}.
  Cela permet de lancer programmatiquement le sélecteur du navigateur pour un `<datalist>` lorsqu'il est déclenché par une interaction utilisateur·ice ([bogue Firefox 1998668 <sup>(angl.)</sup>](https://bugzil.la/1998668)).

- L'interface {{DOMxRef("CloseWatcher")}} est désormais prise en charge.
  Cela permet aux développeur·euse·s de créer des composants pouvant être fermés à l'aide de mécanismes natifs de l'appareil, tels que la touche <kbd>Esc</kbd> sur Windows ou la touche <kbd>Retour</kbd> sur Android, de la même manière que les composants intégrés tels que les [boîtes de dialogue](/fr/docs/Web/HTML/Reference/Elements/dialog) et les [fenêtres contextuelles](/fr/docs/Web/API/Popover_API).
  ([bogue Firefox 1966073 <sup>(angl.)</sup>](https://bugzil.la/1966073)).

- Les méthodes DOM permettent désormais une plus grande variété de caractères pour les noms d'éléments et d'attributs.
  Auparavant, les méthodes DOM étaient beaucoup plus restrictives, mais elles permettent désormais le même ensemble de caractères que le parseur HTML.
  Les méthodes concernées sont&nbsp;: {{DOMxRef("Document/createAttribute","createAttribute()")}}, {{DOMxRef("Document/createAttributeNS","createAttributeNS()")}}, {{DOMxRef("Document/createElement","createElement()")}} et {{DOMxRef("Document/createElementNS","createElementNS()")}} de l'interface {{DOMxRef("Document")}}, {{DOMxRef("Element/toggleAttribute","toggleAttribute()")}}, {{DOMxRef("Element/setAttribute","setAttribute()")}}, {{DOMxRef("Element/setAttributeNS","setAttributeNS()")}} de l'interface {{DOMxRef("Element")}}, {{DOMxRef("DOMImplementation/createDocument","createDocument()")}} de l'interface {{DOMxRef("DOMImplementation")}}, et {{DOMxRef("CustomElementRegistry/define","define()")}} et {{DOMxRef("CustomElementRegistry/whenDefined","whenDefined()")}} de l'interface {{DOMxRef("CustomElementRegistry/whenDefined","whenDefined()")}}.
  ([bogue Firefox 1773312 <sup>(angl.)</sup>](https://bugzil.la/1773312)).

#### Média, WebRTC et Web Audio

- La méthode {{DOMxRef("HTMLMediaElement.captureStream()")}} est désormais prise en charge.
  Elle retourne un objet qui diffuse la capture en temps réel du contenu de l'élément.
  Le flux peut être utilisé, par exemple, comme source pour une {{DOMxRef("RTCPeerConnection")}} WebRTC.
  Auparavant, `captureStream()` n'était disponible que sous la forme de la méthode non standard `mozCaptureStream()`.
  ([bogue Firefox 2017708 <sup>(angl.)</sup>](https://bugzil.la/2017708)).

- {{DOMxRef("MediaElementAudioSourceNode")}} respecte désormais le volume de l'élément multimédia lors de la capture audio pour tous les types de sources (comme l'exige la spécification).
  Auparavant, le réglage du volume de l'élément n'affectait pas l'audio capturé pour les sources {{DOMxRef("MediaStream")}}.
  ([bogue Firefox 2010427 <sup>(angl.)</sup>](https://bugzil.la/2010427)).

- La méthode {{DOMxRef("HTMLMediaElement.captureStream()", "HTMLMediaElement.mozCaptureStream()")}} capture désormais l'audio brut de la source sans appliquer le volume de l'élément multimédia, quel que soit le type de source que l'élément multimédia lit (comme l'exige la spécification).
  Avant ce changement, le volume de l'élément multimédia affectait le volume du flux capturé.
  ([bogue Firefox 2010427 <sup>(angl.)</sup>](https://bugzil.la/2010427)).

## Changements pour les développeur·euse·s d'extensions

- Ajout du support initial pour la vue fractionnée. Ce support couvre&nbsp;:
  - L'inclusion de l'ID de la vue fractionnée dans {{WebExtAPIRef("tabs.query")}}, {{WebExtAPIRef("tabs.onUpdated")}} et {{WebExtAPIRef("tabs.Tab")}}
  - La documentation du comportement lorsque {{WebExtAPIRef("tabs.move")}} ou {{WebExtAPIRef("tabs.remove")}} incluent des onglets dans une vue fractionnée.
    ([bogue Firefox 1993037 <sup>(angl.)</sup>](https://bugzil.la/1993037))
- Ajout du support pour `tabId` en tant que paramètre de niveau supérieur dans {{WebExtAPIRef("action.isEnabled")}} et {{WebExtAPIRef("browserAction.isEnabled")}}. Ce changement assure la compatibilité avec l'implémentation Chrome de `action.isEnabled`. ([bogue Firefox 2013477 <sup>(angl.)</sup>](https://bugzil.la/2013477))
- Un geste de l'utilisateur·ice n'est plus requis pour {{WebExtAPIRef("action.openPopup")}} et {{WebExtAPIRef("browserAction.openPopup")}} pour ouvrir une fenêtre affichée par dessus le contenu (<i lang="en">popup</i> en anglais). Cette fonctionnalité était disponible derrière la préférence `extensions.openPopupWithoutUserGesture.enabled` depuis Firefox 108. Ce changement aligne le comportement de Firefox avec Chrome et Safari. ([bogue Firefox 1799344 <sup>(angl.)</sup>](https://bugzil.la/1799344))
- Si `windowId` est passé dans {{WebExtAPIRef("action.openPopup")}} ou {{WebExtAPIRef("browserAction.openPopup")}}, la fenêtre doit être sélectionnée (active) pour que l'élément affiché par dessus le contenu s'ouvre. Pour ouvrir un élément par dessus le contenu dans une fenêtre qui n'est pas sélectionnée, {{WebExtAPIRef("windows.update","windows.update(windowId, { focused: true })")}} doit être appelé en premier. Ce changement aligne le comportement de Firefox avec Chrome. ([bogue Firefox 2011516 <sup>(angl.)</sup>](https://bugzil.la/2011516))

- La capacité des extensions à exécuter dynamiquement du code dans leurs documents `moz-extension:` avec {{WebExtAPIRef("tabs.executeScript")}}, {{WebExtAPIRef("tabs.insertCSS")}}, {{WebExtAPIRef("tabs.removeCSS")}}, {{WebExtAPIRef("scripting.executeScript")}}, {{WebExtAPIRef("scripting.insertCSS")}}, et {{WebExtAPIRef("scripting.removeCSS")}} est désormais obsolète. ([bogue Firefox 2011234 <sup>(angl.)</sup>](https://bugzil.la/2011234)) La fonctionnalité n'est plus disponible dans Firefox Nightly, et les versions bêta et release de Firefox affichent un avertissement dans la console de l'onglet. Cette restriction s'appliquera à toutes les versions de Firefox 152 et ultérieures. ([bogue Firefox 2015559 <sup>(angl.)</sup>](https://bugzil.la/2015559)) En alternative, une extension peut exécuter du code dans ses documents de manière dynamique en enregistrant un écouteur {{WebExtAPIRef("runtime.onMessage")}} dans le script du document, puis en envoyant un message pour déclencher l'exécution du code requis.
- Le filtre CSS implicite appliqué aux icônes SVG des [actions de page](/fr/docs/Mozilla/Add-ons/WebExtensions/user_interface/Page_actions) sur les thèmes sombres est désactivé dans les versions Nightly ([bogue Firefox 2001318 <sup>(angl.)</sup>](https://bugzil.la/2001318)) et sera désactivé dans les autres éditions de Firefox à partir de la version 152 ([bogue Firefox 2016509 <sup>(angl.)</sup>](https://bugzil.la/2016509)). Vous pouvez tester les icônes SVG des actions de page avec le filtre CSS désactivé dans d'autres éditions de Firefox en créant une préférence booléenne `about:config` appelée `extensions.webextensions.pageActionIconDarkModeFilter.enabled` et en la définissant sur `false`.

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### Général

- Mise à jour des implémentations de capture d'écran pour les protocoles WebDriver BiDi et WebDriver classique afin de retourner correctement une erreur lorsque la zone de capture d'écran demandée dépasse les dimensions maximales prises en charge, au lieu de la découper silencieusement. ([bogue Firefox 1994148 <sup>(angl.)</sup>](https://bugzil.la/1994148)).
- Mise à jour de l'implémentation des Actions pour les protocoles WebDriver BiDi et WebDriver classique afin de permettre à une action `scroll` de type source d'entrée `wheel` de faire défiler plus que les dimensions de la fenêtre visuelle. ([bogue Firefox 1962355 <sup>(angl.)</sup>](https://bugzil.la/1962355)).

#### WebDriver BiDi

- Ajout du support pour la gestion automatique des invites utilisateur·ice, qui peut être configurée par les capacités avec la commande `session.new`. ([bogue Firefox 1905086 <sup>(angl.)</sup>](https://bugzil.la/1905086)).
- Ajout de la commande `browser.setDownloadBehavior`, qui permet aux client·e·s d'autoriser ou d'interdire les téléchargements et de définir un dossier de téléchargement personnalisé. Ce comportement peut être configuré par session ou par contextes utilisateur. ([bogue Firefox 1989022 <sup>(angl.)</sup>](https://bugzil.la/1989022)).
- Ajout des évènements `script.realmCreated` et `script.realmDestroyed` pour les contextes de travail (pour les travailleurs dédiés, partagés et de service). ([bogue Firefox 1936770 <sup>(angl.)</sup>](https://bugzil.la/1936770)).
- Correction d'un problème où les évènements `browsingContext.userPromptOpened` et `browsingContext.userPromptClosed` rapportaient incorrectement l'ID du contexte de niveau supérieur au lieu de l'ID du contexte du cadre intégré sur Android. ([bogue Firefox 2007385 <sup>(angl.)</sup>](https://bugzil.la/2007385)).
- Correction de la sérialisation des nœuds DOM pour ne plus exposer les racines d'ombre (<i lang="en">shadow root</i> en anglais) spécifiques à l'agent utilisateur. ([bogue Firefox 2016673 <sup>(angl.)</sup>](https://bugzil.la/2016673)).
- Mise à jour de la logique d'application des différents paramètres aux nouveaux contextes de navigation pour s'assurer que, dans le cas de la création d'un contexte de navigation avec la commande `window.open`, les émulations, les remplacements de la fenêtre d'affichage et les scripts de préchargement s'appliquent avant que la commande ne retourne. ([bogue Firefox 1985997 <sup>(angl.)</sup>](https://bugzil.la/1985997), [bogue Firefox 2005546 <sup>(angl.)</sup>](https://bugzil.la/2005546) et [bogue Firefox 2005558 <sup>(angl.)</sup>](https://bugzil.la/2005558)).

#### Marionette

- Amélioration de plusieurs commandes WebDriver classiques pour gérer les délais d'attente `implicit` et `pageLoad` conformément au délai d'attente du script, permettant aux valeurs `null` de désactiver les délais d'attente. ([bogue Firefox 2008345](https://bugzil.la/2008345)).

## Fonctionnalités web expérimentales

Ces fonctionnalités sont livrées dans Firefox 149 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **Valeurs `<attr-type>` dans la fonction CSS `attr()`**&nbsp;: `layout.css.attr.enabled`

  La fonction CSS {{CSSxRef("attr()")}} prend désormais en charge les valeurs [`<attr-type>`](/fr/docs/Web/CSS/Reference/Values/attr#attr-type). Cela vous permet de définir comment une valeur d'attribut est analysée en une valeur CSS et de prendre ces valeurs directement à partir des attributs [`data-*`](/fr/docs/Web/HTML/How_to/Use_data_attributes). ([bogue Firefox 1986631 <sup>(angl.)</sup>](https://bugzil.la/1986631), [bogue Firefox 1998245 <sup>(angl.)</sup>](https://bugzil.la/1998245)).

- **`color-mix()` accepte plusieurs arguments de couleur**&nbsp;: `layout.css.color-mix-multi-color.enabled`

  La fonction CSS {{CSSxRef("color_value/color-mix", "color-mix")}} prend désormais en charge plusieurs valeurs {{CSSxRef("color_value", "&lt;color&gt;")}}, et pas seulement deux. Cela vous permet de mélanger plusieurs couleurs et de définir les pourcentages de chacune. ([bogue Firefox 2007772 <sup>(angl.)</sup>](https://bugzil.la/2007772)).

- **Pseudo-classes basées sur les médias**: `dom.media.pseudo-classes.enabled`

  Les pseudo-classes basées sur les médias {{CSSxRef(":buffering")}}, {{CSSxRef(":muted")}}, {{CSSxRef(":paused")}}, {{CSSxRef(":playing")}}, {{CSSxRef(":seeking")}}, {{CSSxRef(":stalled")}}, et {{CSSxRef(":volume-locked")}} vous permettent de mettre en forme les éléments HTML {{HTMLElement("audio")}} et {{HTMLElement("video")}} en fonction de leur état actuel, comme en lecture ou en pause. ([bogue Firefox 1707584 <sup>(angl.)</sup>](https://bugzil.la/1707584), [bogue Firefox 2014512 <sup>(angl.)</sup>](https://bugzil.la/2014512)).

- **Les attributs `alpha` et `colorspace` des éléments de saisie de type `color`** (Nightly seulement)&nbsp;: `dom.forms.html_color_picker.enabled`

  L'élément HTML [`<input type="color">`](/fr/docs/Web/HTML/Reference/Elements/input/color) prend en charge les attributs [`alpha`](/fr/docs/Web/HTML/Reference/Elements/input/color#alpha) et [`colorspace`](/fr/docs/Web/HTML/Reference/Elements/input/color#colorspace). ([bogue Firefox 1919718 <sup>(angl.)</sup>](https://bugzil.la/1919718)).

- **Requêtes `@container style()`** (Nightly)&nbsp;: `layout.css.style-queries.enabled`

  La règle CSS [`@container`](/fr/docs/Web/CSS/Reference/At-rules/@container) prend en charge les requêtes [`style()`](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#conteneurs_de_requêtes_de_style). Cela vous permet de vérifier si un conteneur possède une déclaration CSS valide, une propriété CSS ou une propriété personnalisée, et d'appliquer des styles à ses enfants en conséquence. ([bogue Firefox 2014404 <sup>(angl.)</sup>](https://bugzil.la/2014404)).

- **CSS Typed Object Model Level 1**&nbsp;: `layout.css.typed-om.enabled`

  La spécification CSS Typed Object Model Level 1 est en cours d'implémentation.
  Dans cette version, la prise en charge de la méthode {{DOMxRef("CSSNumericValue/to","to()")}} de l'interface {{DOMxRef("CSSNumericValue")}} a été ajoutée, permettant la conversion d'une valeur numérique CSS d'une unité à une autre. ([bogue Firefox 1278697 <sup>(angl.)</sup>](https://bugzil.la/1278697)).

- **Prise en charge de l'image JPEG XL&nbsp;: décodeur basé sur Rust**&nbsp;: `image.jxl.enabled`

  L'ancien décodeur d'image [JPEG XL <sup>(angl.)</sup>](https://jpeg.org/jpegxl/) en C++ a été remplacé par une nouvelle implémentation basée sur Rust utilisant la bibliothèque `jxl-rs`. ([bogue Firefox 1986393 <sup>(angl.)</sup>](https://bugzil.la/1986393)).
