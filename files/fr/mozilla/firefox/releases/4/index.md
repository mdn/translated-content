---
title: Firefox 4 pour les développeurs
slug: Mozilla/Firefox/Releases/4
tags:
  - Firefox
  - Firefox 4
translation_of: Mozilla/Firefox/Releases/4
original_slug: Mozilla/Firefox/Versions/4
---
1.  Notes de versions pour développeurs

    1.  [Notes de versions pour développeurs](/fr/docs/Mozilla/Firefox/Releases)

2.  Modules complémentaires

    1.  [WebExtensions](/fr/Add-ons/WebExtensions)
    2.  [Thèmes](/fr/Add-ons/Themes)

3.  Fonctionnement interne de Firefox

    1.  [Le projet Mozilla](/fr/docs/Mozilla/)
    2.  [Gecko](/fr/docs/Mozilla/Gecko)
    3.  [Mode « headless »](/fr/docs/Mozilla/Firefox/Headless_mode)
    4.  [Modules de code Javascript](/fr/docs/Mozilla/JavaScript_code_modules)
    5.  [JS-ctypes](/fr/docs/Mozilla/js-ctypes)
    6.  [Le projet MathML](/fr/docs/Mozilla/MathML_Project)
    7.  [MFBT](/fr/docs/Mozilla/MFBT)
    8.  [Les projets Mozilla](/fr/docs/Mozilla/Projects)
    9.  [Le système de préférences](/fr/docs/Mozilla/Preferences)
    10. [Connexions WebIDL](/fr/docs/Mozilla/WebIDL_bindings)
    11. [XPCOM](/fr/docs/Mozilla/Tech/XPCOM)
    12. [XUL](/fr/docs/Mozilla/Tech/XUL)

4.  Développer et contribuer

    1.  [Instructions de compilation](/fr/docs/Mozilla/Developer_guide/Build_Instructions)
    2.  [Configuration des options de compilation](/fr/docs/Mozilla/Developer_guide/Build_Instructions/Configuring_Build_Options)
    3.  [Fonctionnement de la compilation](/fr/docs/Mozilla/Developer_guide/Build_Instructions/How_Mozilla_s_build_system_works)
    4.  [Code source de Mozilla](/fr/docs/Mozilla/Developer_guide/Source_Code/Mercurial)
    5.  [Localisation](/fr/docs/Mozilla/Localization)
    6.  [Mercurial](/fr/docs/Mozilla/Mercurial)
    7.  [Assurance qualité](/fr/docs/Mozilla/QA)
    8.  [Utilisation de code Mozilla dans d'autres projets](/fr/docs/Mozilla/Using_Mozilla_code_in_other_projects)

Firefox 4, est sorti le 22 mars 2011, améliore les performances, le support d'HTML5 et d'autres technologies du web et aussi la sécurité. Cet article fournit des informations sur cette version et sur les fonctionnalités qui sont disponibles pour les développeurs Web, les développeurs de modules complémentaires et les développeurs de la plate-forme Gecko.

## Fonctionnalités pour les développeurs Web

Gecko utilise maintenant le parseur [HTML5](/fr/HTML/HTML5), qui corrige des bugs, améliore l'interopérabilité et les performances. Il permet également d'intégrer du contenu [SVG](/fr/SVG) et [MathML](/fr/MathML) directement dans le code HTML.

### HTML

- [Rencontrez le parseur HTML5](/fr/docs/HTML/HTML5/HTML5_Parser)
  - : Un aperçu sur ce que le parseur HTML5 représente pour vous et comment intégrer du contenu SVG et MathML dans votre code.
- [Les formulaires en HTML5](/fr/docs/HTML/Forms_in_HTML)
  - : Un aperçu de l'amélioration de formulaires Web en HTML5. Parmi les changements on ajoute les types d'entrée dans l'élément [`<input>`](/fr/docs/Web/HTML/Element/input), la validation des données et d'autres modifications.
- [Sections HTML5](/fr/docs/Sections_and_Outlines_of_an_HTML5_document)
  - : Gecko supporte à présent les nouveaux éléments HTML5 liés aux sections dans un document : [`<article>`](/fr/docs/Web/HTML/Element/article), [`<section>`](/fr/docs/Web/HTML/Element/section), [`<nav>`](/fr/docs/Web/HTML/Element/nav), [`<aside>`](/fr/docs/Web/HTML/Element/aside), [`<hgroup>`](/fr/docs/Web/HTML/Element/hgroup), [`<header>`](/fr/docs/Web/HTML/Element/header) et [`<footer>`](/fr/docs/Web/HTML/Element/footer).
- [Attribut HTML5 hidden](/fr/HTML/Global_attributes#hidden)
  - : Cet attribut, commun à tous les éléments, est utilisé pour cacher le contenu d'une page Web qui n'est pas encore pertinent pour l'utilisateur.
- Autres éléments HTML5
  - : Gecko supporte les nouveaux éléments HTML5 suivants : [`<mark>`](/fr/docs/Web/HTML/Element/mark), [`<figure>`](/fr/docs/Web/HTML/Element/figure), et [`<figcaption>`](/fr/docs/Web/HTML/Element/figcaption).
- [WebSockets](/fr/docs/WebSockets)
  - : Un guide pour utiliser la nouvelle API WebSockets pour la communication entre une application web et un serveur en temps réel. A noter que WebSockets tel qu'implémenté dans Firefox 4 n'est pas compatible avec la norme finale, et ne devrait pas être utilisé.

#### Améliorations de Canvas

Les modifications suivantes ont étés apportées à l'interface [`CanvasRenderingContext2D`](/fr/docs/Web/API/CanvasRenderingContext2D) pour permettre à l'implémentation de [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) d'être en conformité avec la spécification :

- La spécification d'un rayon négatif lors de l'appel d'`arc()` lance désormais correctement l'exception `INDEX_SIZE_ERR`.
- La spécification de valeurs non finies lors de l'appel de `createLinearGradient()` et `createRadialGradient()` lance désormais `NOT_SUPPORTED_ERR` au lieu de `SYNTAX_ERR`.
- Le réglage de `miterLimit` pour une valeur négative ne lance plus une exception, mais ignore plutôt les valeurs non-positives.
- Le réglage de `lineWidth` pour une valeur négative ne lance plus une exception, mais ignore plutôt les valeurs non-positives.
- La méthode `putImageData()` supporte désormais les paramètres optionnels `dirtyX`, `dirtyY`, `dirtyWidth` et `dirtyHeight`.

<!---->

#### Autres changements HTML

- L'élément [`<textarea>`](/fr/docs/Web/HTML/Element/textarea) est maintenant redimensionnable par défaut ; pour le désactiver, vous pouvez utiliser la propriété CSS [`resize`](/fr/docs/Web/CSS/resize).
- `canvas.getContext` et `canvas.toDataURL` ne lancent plus d'exceptions lorsqu'ils sont appelés avec des arguments non reconnus.
- L'élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) supporte maintenant la méthode spécifique à Mozilla, `mozGetAsFile()`, qui permet d'obtenir un fichier basé sur l'image d'un contenu canvas. Voir [`HTMLCanvasElement`](/fr/docs/Web/API/HTMLCanvasElement) pour les détails.
- `canvas2dcontext.lineCap` et `canvas2dcontext.lineJoin` ne lancent plus d'exceptions lorsqu'ils sont réglés avec une valeur non reconnue.
- `canvas2dcontext.globalCompositeOperation` ne lance plus d'exception lorsqu'il est réglé avec une valeur non reconnue et ne supporte plus la valeur `darker`, qui n'est pas un standard.
- Le support de l'élément obsolète [`<spacer>`](/fr/docs/Web/HTML/Element/spacer), était absent de tous les autres navigateurs, a été enlevé.
- L'élément [`<isindex>`](/fr/docs/Web/HTML/Element/isindex), qui était crée par [`document.createElement()`](/fr/docs/Web/API/Document/createElement), est maintenant crée comme un simple élément sans propriétés ou méthodes.
- Gecko supporte maintenant l'appel `click()` sur l'élément [`<input>`](/fr/docs/Web/HTML/Element/input) pour ouvrir le sélecteur de fichiers. Voir l'[exemple](</fr/docs/Using_files_from_web_applications#Using_hidden_file_input_elements_using_the_click()_method>) dans l'article [Using files from web applications](/fr/docs/Using_files_from_web_applications).
- L'élément [`<input>`](/fr/docs/Web/HTML/Element/input) supporte un nouvel attribut [`mozactionhint`](/fr/docs/HTML/Element/Input#attr-mozactionhint), qui permet de spécifier l'étiquette de la touche Entrée sur un clavier virtuel.
- L'élément [`<script>`](/fr/docs/Web/HTML/Element/script) à l'intérieur des éléments [`<iframe>`](/fr/docs/Web/HTML/Element/iframe), [`<noembed>`](/fr/docs/Web/HTML/Element/noembed "L'élément <noembed> est une façon obsolète et non standardisée de fournir une alternative de contenu pour les navigateurs ne supportant pas l'élément <embed> ou des catégories de contenu qu'un auteur aimerait utiliser.
 Cet élément a été rendu obsolète à partir de la version HTML 4.01 et a été remplacé par `<object>`. Le contenu alternatif doit être inséré entre la balise d'ouverture et celle de fermeture de `<object>`) et [`<noframes>`](/fr/docs/Web/HTML/Element/noframes) sont maintenant exécutés, contrairement aux versions précédentes de Firefox. Ceci est conforme à la spécification et correspond au comportement des autres navigateurs.

### CSS

- [Transitions CSS](/fr/docs/CSS/CSS_transitions)
  - : Le support des transitions CSS est disponible dans Firefox 4.
- Les valeurs calculées en CSS
  - : Le support de [`-moz-calc`](/fr/docs/Web/CSS/-moz-calc) a été ajouté. Cela permet de spécifier des valeurs de [`<length>`](/fr/docs/Web/CSS/length) comme des expressions mathématiques.
- Groupement de sélecteurs
  - : Le support de [`:-moz-any`](/fr/docs/Web/CSS/:-moz-any) pour grouper les sélecteurs et factoriser des combinateurs.
- Support subrectangle pour background-image
  - : La propriété [`-moz-image-rect`](/fr/docs/Web/CSS/-moz-image-rect) permet d'utiliser des subrectangles en tant que [`background-image`](/fr/docs/Web/CSS/background-image).
- Propriétés CSS tactile
  - : Le support des propriétés tactiles a été ajouté. Plus de détails plus tard.
- [Utilisation arbitraires d'élements comme fond](/fr/docs/CSS/element)
  - : Vou pouvez utiliser la fonction CSS [`-moz-element`](/fr/docs/Web/CSS/-moz-element) et la fonction DOM [`document.mozSetImageElement()`](/fr/docs/Web/API/Document/mozSetImageElement) pour une utilisation arbitraire des éléments HTML comme fond.
- [Sélecteur :visited et confidentialité](/fr/docs/CSS/Privacy_and_the_:visited_selector)
  - : Des modifications ont étés apportées sur les informations qui peuvent être obtenues sur le style des liens visités en utilisant les sélecteurs CSS. Certaines applications Web peuvent être affectées.

#### Nouvelles propriétés CSS

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Propriété</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/-moz-font-feature-settings"
          ><code>-moz-font-feature-settings</code></a
        >
      </td>
      <td>
        Permet de personnaliser les fonctionnalités avancées des polices
        OpenType.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/-moz-tab-size"><code>-moz-tab-size</code></a>
      </td>
      <td>
        Spécifie la largeur d'un espace de tabulation (U+0009) lors du rendu du
        texte.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/resize"><code>resize</code></a>
      </td>
      <td>Permet de modifier les dimensions d'un élément.</td>
    </tr>
  </tbody>
</table>

#### Nouvelles pseudo-classes CSS

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Pseudo-class</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/:-moz-handler-crashed"
          ><code>:-moz-handler-crashed</code></a
        >
      </td>
      <td>Utilisé pour le style d'un élément dont le plugin a planté.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/:-moz-placeholder"
          ><code>:-moz-placeholder</code></a
        >
      </td>
      <td>
        Appliquée à l'espace texte réservé dans les champs des formulaires.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/:-moz-submit-invalid"
          ><code>:-moz-submit-invalid</code></a
        >
      </td>
      <td>
        Appliquée au bouton d'envoi des formulaires quand un ou plusieurs des
        champs ne sont pas valides.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/:-moz-window-inactive"
          ><code>:-moz-window-inactive</code></a
        >
      </td>
      <td>Appliquée aux éléments d'une fenêtre inactive.</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/:invalid"><code>:invalid</code></a>
      </td>
      <td>
        Automatiquement appliquée aux champs
        <a href="/fr/docs/Web/HTML/Element/input"><code>&#x3C;input></code></a>
        dont le contenu est invalide.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/:optional"><code>:optional</code></a>
      </td>
      <td>
        Automatiquement appliquée aux champs
        <a href="/fr/docs/Web/HTML/Element/input"><code>&#x3C;input></code></a>
        qui ne spécifient pas l'attribut <code>required</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/:required"><code>:required</code></a>
      </td>
      <td>
        Automatiquement appliquée aux champs
        <a href="/fr/docs/Web/HTML/Element/input"><code>&#x3C;input></code></a>
        qui spécifient l'attribut <code>required</code>.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/:valid"><code>:valid</code></a>
      </td>
      <td>
        Automatiquement appliquée aux champs
        <a href="/fr/docs/Web/HTML/Element/input"><code>&#x3C;input></code></a>
        dont le contenu a été validé avec succès.
      </td>
    </tr>
  </tbody>
</table>

#### Nouveaux pseudo-selectors CSS

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Pseudo-selector</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/:-moz-focusring"
          ><code>:-moz-focusring</code></a
        >
      </td>
      <td>
        Permet de spécifier l'apparence d'un élément lorsque Gecko estime que
        l'on doit se fixer dessus.
      </td>
    </tr>
  </tbody>
</table>

#### Nouvelles fonctions CSS

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Fonction</td>
      <td class="header">Description</td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/:-moz-any"><code>:-moz-any</code></a>
      </td>
      <td>
        Permet de grouper les sélecteurs et de factoriser les combinateurs.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/-moz-calc"><code>-moz-calc</code></a>
      </td>
      <td>
        Permet de spécifier des valeurs de
        <a href="/fr/docs/Web/CSS/length"><code>&#x3C;length></code></a> comme
        des expressions mathématiques.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/-moz-element"><code>-moz-element</code></a>
      </td>
      <td>
        Permet d'utiliser un élément arbritaire de fond pour
        <a href="/fr/docs/Web/CSS/background-image"
          ><code>background-image</code></a
        >
        and <a href="/fr/docs/Web/CSS/background"><code>background</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>
        <a href="/fr/docs/Web/CSS/-moz-image-rect"
          ><code>-moz-image-rect</code></a
        >
      </td>
      <td>
        Permet d'utiliser un subrectangle d'une image comme
        <a href="/fr/docs/Web/CSS/background-image"
          ><code>background-image</code></a
        >
        or <a href="/fr/docs/Web/CSS/background"><code>background</code></a
        >.
      </td>
    </tr>
  </tbody>
</table>

#### Propriétés CSS renommées

<table class="standard-table">
  <thead>
    <tr>
      <td class="header">Ancien nom</td>
      <td class="header">Nouveau nom</td>
      <td class="header">Notes</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>-moz-background-size</code></td>
      <td>
        <a href="/fr/docs/Web/CSS/background-size"
          ><code>background-size</code></a
        >
      </td>
      <td>Le nom <code>-moz-background-size</code> n'est plus supporté.</td>
    </tr>
    <tr>
      <td><code>-moz-border-radius</code></td>
      <td>
        <a href="/fr/docs/Web/CSS/border-radius"><code>border-radius</code></a>
      </td>
      <td>
        L'ancien nom est encore pris en charge pour une durée limitée, le temps
        de mettre vos sites à jour. Le changement du rendu a été fait pour
        correspondre à la dernière version de la spécification.
      </td>
    </tr>
    <tr>
      <td><code>-moz-box-shadow</code></td>
      <td>
        <a href="/fr/docs/Web/CSS/box-shadow"><code>box-shadow</code></a>
      </td>
      <td></td>
    </tr>
  </tbody>
</table>

#### Divers changements CSS

- La propriété [`text-shadow`](/fr/docs/Web/CSS/text-shadow) plafonne désormais son rayon de flou à 300px, pour des raisons de bon sens et de performances.
- La propriété [`overflow`](/fr/docs/Web/CSS/overflow) ne s'applique plus au groupe d'éléments de tableaux (`<thead>`, `<tbody>`, and `<tfoot>`).
- La propriété [`-moz-appearance`](/fr/docs/Web/CSS/-moz-appearance) supporte désormais la valeur `-moz-win-borderless-glass`, qui s'applique à un élément Aero sans bordure.
- La fonctionnalité de média [`-moz-device-pixel-ratio`](/fr/docs/CSS/Media_queries#-moz-device-pixel-ratio) a été ajoutée, permettant l'utilisation de pixels de l'appareil par ratio de pixels CSS qui sera utilisé dans les [Media Queries](/fr/CSS/Media_queries).
- La manipulation des [unités CSS](/fr/docs/CSS-2_Quick_Reference/Units) dans Gecko a été révisé pour mieux correspondre à d'autres navigateurs, et plus précisément de traduire dans des longueurs absolues le nombre de pixels à l'écran basé sur le dispositif de la DPI.

### Graphisme et vidéo

- [WebGL](/fr/docs/WebGL)

  - : La norme WebGL (encore en développement) est maintenant supportée par Firefox.

- [Optimisation des performances graphique](/fr/docs/Optimizing_graphics_performance)
  - : Trucs et astuces pour profiter le maximum des performances graphiques et vidéo dans Firefox 4.
- [Support de WebM](/fr/docs/Media_formats_supported_by_the_audio_and_video_elements#WebM)
  - : Le nouveau format vidéo ouvert [WebM](http://www.webmproject.org/) est supporté par Gecko 2.0.
- [Animation SVG avec SMIL](/fr/docs/SVG/SVG_animation_with_SMIL)
  - : Les animations SVG avec SMIL sont désomais supportées.
- Utilisation de SVG comme image ou arrière-plan CSS
  - : Vous pouvez maintenant utilisez SVG avec l'élément [`<img>`](/fr/docs/Web/HTML/Element/img), ainsi qu'avec CSS [`background-image`](/fr/docs/Web/CSS/background-image).
- Attribut Media `buffered`
  - : L'attribut `buffered` sur les éléments [`<video>`](/fr/docs/Web/HTML/Element/video) and [`<audio>`](/fr/docs/Web/HTML/Element/audio) est maintenant supporté, vous permettant de déterminer quel fichier multimédia a été tamponné. L'interface DOM [`TimeRanges`](/fr/docs/Web/API/TimeRanges) a été mise en place pour ce support.
- Attribut Media `preload`
  - : L'attribut `preload` de la spécification HTML5 a été implémenté, remplaçant l'attribut `autobuffer` précédemment mis en place (et qui n'est plus pris en charge). Cela affecte les éléments [`<video>`](/fr/docs/Web/HTML/Element/video) et [`<audio>`](/fr/docs/Web/HTML/Element/audio) ainsi que l'interface [`nsIDOMHTMLMediaElement`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMHTMLMediaElement).
- Amélioration du positionnement du texte SVG
  - : Vous pouvez maintenant spécifier des listes des valeurs pour les propriétés `x`, `y`, `dx`, and `dy` sur les éléments SVG [`<text>`](/fr/docs/Web/SVG/Element/text) et [`<tspan>`](/fr/docs/Web/SVG/Element/tspan). Cela vous permet de contrôler le positionnement de chaque caractère d'une chaîne, individuellement.

### DOM

- [Tableaux JavaScript typés](/fr/docs/JavaScript_typed_arrays)
  - : Ajout du support pour les tableaux JavaScript typés, cela vous permet de manipuler des tampons contenant des données brutes en utilisant des types de données natives. Plusieurs API utilisent ça, y compris [l'API File](/fr/docs/DOM/File), [WebGL](/fr/docs/WebGL) et [WebSockets](/fr/docs/WebSockets).
- Obtention des limites des rectangles limites
  - : L'objet [`Range`](/fr/docs/Web/API/Range) a désormais les méthodes [`range.getClientRects()`](/fr/docs/Web/API/Range/getClientRects) et [`range.getBoundingClientRect()`](/fr/docs/Web/API/Range/getBoundingClientRect).
- Capture des évènements de la souris sur des éléments quelconques
  - : Ajout du support des APIs `setCapture()` et `releaseCapture()` originaires d'Internet Explorer. Voir [bug 503943](https://bugzilla.mozilla.org/show_bug.cgi?id=503943).
- [Manipulation de l'historique du navigateur](/fr/docs/DOM/Manipulating_the_browser_history)
  - : L'objet de l'historique déjà existant et disponible via l'objet [`window.history`](/fr/docs/Web/API/Window/history), supporte maintenant les nouvelles méthodes HTML5 `pushState()` et `replaceState()`.
- [Animations utilisant MozBeforePaint](/fr/docs/DOM/Animations_using_MozBeforePaint)
  - : Un nouvel évènement a été ajouté, qui, avec l'aide de la méthode [`window.mozRequestAnimationFrame()`](/fr/docs/Web/API/Window/mozRequestAnimationFrame) et de la propriété [`window.mozAnimationStartTime`](/fr/docs/Web/API/Window/mozAnimationStartTime), offre un moyen de créer des animations qui sont synchronisées avec les autres.
- Evènements touch et multi-touch
  - : Ajout du support des évènements touch et multi-touch.

#### Changement des interfaces DOM d'éléments HTML

Plusieurs éléments HTML ont vu leur interface DOM modifier, conformément à la spécification HTML5.

<table class="standard-table">
  <thead>
    <tr>
      <td class="header">Interface dans Firefox 3.6</td>
      <td class="header">Interface dans Firefox 4</td>
      <td class="header">Elements HTML</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <code><a href="/fr/docs/DOM/HTMLSpanElement">HTMLSpanElement</a></code>
      </td>
      <td>
        <code><a href="/fr/docs/DOM/HTMLElement">HTMLElement</a></code>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/abbr"><code>&#x3C;abbr></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/acronym"
          ><code>&#x3C;acronym></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/address"
          ><code>&#x3C;address></code></a
        >, <a href="/fr/docs/Web/HTML/Element/b"><code>&#x3C;b></code></a
        >, <a href="/fr/docs/Web/HTML/Element/bdo"><code>&#x3C;bdo></code></a
        >, <a href="/fr/docs/Web/HTML/Element/big"><code>&#x3C;big></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/blink"><code>&#x3C;blink></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/center"><code>&#x3C;center></code></a
        >, <a href="/fr/docs/Web/HTML/Element/cite"><code>&#x3C;cite></code></a
        >, <a href="/fr/docs/Web/HTML/Element/code"><code>&#x3C;code></code></a
        >, <a href="/fr/docs/Web/HTML/Element/dd"><code>&#x3C;dd></code></a
        >, <a href="/fr/docs/Web/HTML/Element/dfn"><code>&#x3C;dfn></code></a
        >, <a href="/fr/docs/Web/HTML/Element/dt"><code>&#x3C;dt></code></a
        >, <a href="/fr/docs/Web/HTML/Element/em"><code>&#x3C;em></code></a
        >, <a href="/fr/docs/Web/HTML/Element/i"><code>&#x3C;i></code></a
        >, <a href="/fr/docs/Web/HTML/Element/kbd"><code>&#x3C;kbd></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/listing"
          ><code>&#x3C;listing></code></a
        >, <a href="/fr/docs/Web/HTML/Element/nobr"><code>&#x3C;nobr></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/plaintext"
          ><code>&#x3C;plaintext></code></a
        >, <a href="/fr/docs/Web/HTML/Element/s"><code>&#x3C;s></code></a
        >, <a href="/fr/docs/Web/HTML/Element/samp"><code>&#x3C;samp></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/small"><code>&#x3C;small></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/strike"><code>&#x3C;strike></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/strong"><code>&#x3C;strong></code></a
        >, <a href="/fr/docs/Web/HTML/Element/sub"><code>&#x3C;sub></code></a
        >, <a href="/fr/docs/Web/HTML/Element/sup"><code>&#x3C;sup></code></a
        >, , <a href="/fr/docs/Web/HTML/Element/tt"><code>&#x3C;tt></code></a
        >, <a href="/fr/docs/Web/HTML/Element/u"><code>&#x3C;u></code></a
        >, <a href="/fr/docs/Web/HTML/Element/var"><code>&#x3C;var></code></a
        >, <a href="/fr/docs/Web/HTML/Element/xmp"><code>&#x3C;xmp></code></a>
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/DOM/HTMLDivElement">HTMLDivElement</a></code>
      </td>
      <td>
        <code><a href="/fr/docs/DOM/HTMLElement">HTMLElement</a></code>
      </td>
      <td>
        <a
          href="/fr/docs/Web/HTML/Element/noembed"
          title="L&#x27;élément <noembed> est une façon obsolète et non standardisée de fournir une alternative de contenu pour les navigateurs ne supportant pas l&#x27;élément <embed> ou des catégories de contenu qu&#x27;un auteur aimerait utiliser.
 Cet élément a été rendu obsolète à partir de la version HTML 4.01 et a été remplacé par &lt;object&gt;. Le contenu alternatif doit être inséré entre la balise d&#x27;ouverture et celle de fermeture de &lt;object&gt;"
          ><code>&#x3C;noembed></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/noframes"
          ><code>&#x3C;noframes></code></a
        >,
        <a href="/fr/docs/Web/HTML/Element/noscript"
          ><code>&#x3C;noscript></code></a
        >
      </td>
    </tr>
    <tr>
      <td>
        <code><a href="/fr/docs/DOM/HTMLWBRElement">HTMLWBRElement</a></code>
      </td>
      <td>
        <code><a href="/fr/docs/DOM/HTMLElement">HTMLElement</a></code>
      </td>
      <td>
        <a href="/fr/docs/Web/HTML/Element/wbr"><code>&#x3C;wbr></code></a>
      </td>
    </tr>
  </tbody>
</table>

#### Divers changements DOM

- L'enveloppement d'un élément [`<textarea>`](/fr/docs/Web/HTML/Element/textarea) peut maintenant être commandé via l'attribut DOM `wrap`. [bug 41464](https://bugzilla.mozilla.org/show_bug.cgi?id=41464)
- Les éléments [`<script>`](/fr/docs/Web/HTML/Element/script) crées avec [`document.createElement()`](/fr/docs/Web/API/Document/createElement) et insérés dans un document, se comportent désormais conformément à la spécification HTML5. Les scripts avec l'attribut `src` s'exécute dès que possible (sasn maintenir la commande) et les scripts sans l'attribut `src` s'exécute de manière simultanée. Pour faire des scripts d'insertion de scripts qui ont l'attribut `src` qui exécute l'ensemble dans l'ordre d'insertion, pour eux `.async=false`.
- Les objets DOM [`file`](/fr/docs/Web/API/File) proposent désormais la propriété `url`.
- Support de [FormData](/fr/docs/DOM/XMLHttpRequest/Using_XMLHttpRequest#Using_FormData_objects) pour XMLHttpRequest.
- La propriété [`element.isContentEditable`](/fr/docs/Web/API/Element/isContentEditable) a été implémentée.
- La propriété [`document.currentScript`](/fr/docs/Web/API/Document/currentScript) vous permet de déterminer quel script de l'élément [`<script>`](/fr/docs/Web/HTML/Element/script) est en cours d'exécution. les nouveaux évènements [`element.onbeforescriptexecute`](/fr/docs/Web/API/Element/onbeforescriptexecute) et [`element.onafterscriptexecute`](/fr/docs/Web/API/Element/onafterscriptexecute) sont déclenchés avant et après l'éxécution d'un élément script.
- Ajout de la propriété [`mozSourceNode`](/fr/docs/DragDrop/DataTransfer#mozSourceNode) à l'objet [`DragTransfer`](/fr/docs/DragDrop/DataTransfer).
- Ajout de la méthode [`selection.modify()`](/fr/docs/DOM/Selection/modify) à l'objet [`Selection`](/fr/docs/Web/API/Selection), ce qui vous permet de facilement modifier la sélection de texte courant ou la position du curseur dans une fenêtre de navigateur.
- Le support de l'objet `window.directories` et de la fonctionnalité `directories` pour [`window.open`](/fr/docs/Web/API/Window/open), qui ne sont plus supportés dans les autres navigateurs, ont été enlevés. Utiliser `personalbar` à la place. [bug 474058](https://bugzilla.mozilla.org/show_bug.cgi?id=474058)
- La propriété [`event.mozInputSource`](/fr/docs/Web/API/Event/mozInputSource) a été ajoutée à l'interface utilisateur des évènements DOM, cette propriété non-standard vous permet de déterminer le type de l'appareil qui a généré un évènement.
- L'évènement [`document.onreadystatechange`](/fr/docs/Web/API/Document/onreadystatechange) a été implémenté.
- La méthode [`document.createElement`](/fr/docs/Web/API/Document/createElement) n'accepte plus `<` et `>` autour du nom de balise en mode quirks.
- Les méthodes [`element.setCapture()`](/fr/docs/Web/API/Element/setCapture) et [`document.releaseCapture()`](/fr/docs/Web/API/Document/releaseCapture) ont été ajoutées, permettant à des éléments de poursuivre des évènements de la souris, même lorsqu'elle est en dehors de leur zone de suivi normal après que l'évènement `mousedown` soit survenu.
- La propriété [`window.mozPaintCount`](/fr/docs/Web/API/Window/mozPaintCount) a été ajoutée, elle vous permet de déterminer le nombre de fois q'un document a été peint. Cela est particulièrement utile lors des tests de performance de votre application web.
- Le signe de la langue a été supprimé de [`window.navigator.appVersion`](/fr/docs/Web/API/Window/navigator/appVersion) et [`window.navigator.userAgent`](/fr/docs/Web/API/Window/navigator/userAgent). Utilisez [`window.navigator.language`](/fr/docs/Web/API/Window/navigator/language) ou [l'en-tête Accept-Language](/fr/docs/HTTP/Content_negotiation) à la place. [bug 572656](https://bugzilla.mozilla.org/show_bug.cgi?id=572656)
- L'objet [XMLHttpRequest](/fr/docs/XMLHttpRequest) expose maintenant la réponse comme un tableau JavaScript typé et aussi comme une chaîne, en utilisant la propriété, spécifique de Gecko, `mozResponseArrayBuffer`.
- [Mouse events](/fr/docs/DOM/MouseEvent) inclut maintenant une propriété `mozPressure` indiquant le niveau de pression supporté sur les périphériques d'entrée sensibles à la pression.
- Les méthodes [`window.URL.createObjectURL()`](/fr/docs/Web/API/Window/URL/createObjectURL) et [`window.URL.revokeObjectURL()`](/fr/docs/Web/API/Window/URL/revokeObjectURL) vous permettent de créer des URLs d'objet qui renvoient à des fichiers locaux.
- La méthode [`DOMImplementation.createHTMLDocument()`](/fr/docs/Web/API/DOMImplementation/createHTMLDocument) vous permet de créer un nouveau document HTML.
- [`Node.mozMatchesSelector()`](/fr/docs/Web/API/Node/mozMatchesSelector) retourne maintenant l'exception `SYNTAX_ERR`si la chaîne de sélection spécifiée est invalide, au lieu de retourner `false`.
- Vous pouvez maintenant définir les valeurs des propriétés d'un élement SVG en utilisant une syntaxe abrégée même avec CSS. Par exemple : `element.style.fill = 'lime'`. Voir [`element.style`](/fr/docs/Web/API/Element/style) pour plus de détails.
- Le document racine a maintenant un attribut [`privatebrowsingmode`](/fr/docs/Supporting_private_browsing_mode#Detecting_whether_private_browsing_mode_is_permanent) qui décrit l'état du mode de navigation privée, en indiquant notamment si la session de navigation privée est temporaire ou permanente.
- Le second paramètre de la méthode [`window.getComputedStyle()`](/fr/docs/Web/API/Window/getComputedStyle) est maintenant optionnel, car elle l'est dans tous les autres navigateurs.
- L'objet DOM [`StorageEvent`](/fr/docs/DOM/event/StorageEvent) est maintenant conforme à la dernière version de la spécification.
- Le délais minimum autorisé pour la méthode [`window.setTimeout()`](/fr/docs/Web/API/Window/setTimeout) est maintenant la préférence `dom.min_timeout_value`.
- L'évènement [`MozAfterPaint`](/fr/docs/Gecko-Specific_DOM_Events#MozAfterPaint) n'est plus envoyé par défaut, en raison d'un potentiel problème de sécurité. Il peut être réactivé en définissant une préférence.

### Securité

- [Content Security Policy (CSP)](/fr/docs/Security/CSP)
  - : Content Security Policy (CSP) est une proposition de Mozilla, conçu pour aider les concepteurs de sites Web et les administrateurs de serveur en spécifiant comment le contenu sur leurs sites Web agit. L'objectif est d'aider à détecter et à atténuer les attaques incluant le cross-site scripting et des attaques par injection de données.
- [HTTP Strict Transport Security](/fr/docs/Security/HTTP_Strict_Transport_Security)
  - : HTTP Strict Transport Security est un dispositif de sécurité qui permet à un site web d'indiquer au navigateur d'utiliser une connexion sécurisée (HTTPS) à la place du protocole HTTP.
- [L'en-tête de réponse X-FRAME-OPTIONS](/fr/docs/The_X-FRAME-OPTIONS_response_header)
  - : L'en-tête de réponse X-FRAME-OPTIONS HTTP introduite dans Internet Explorer 8 est désormais supportée par Firefox. Cela permet aux sites d'indiquer si leurs pages peuvent être utilisées dans des frames ou si l'utilisation de la page doit être restreint.
- Changement de la [chaîne de l'agent utilisateur](/fr/docs/Gecko_user_agent_string_reference)
  - : C'est un moyen de réduire la quantité et l'entropie des données envoyées dans les requêts HTPP (voir [bug 572650](https://bugzilla.mozilla.org/show_bug.cgi?id=572650)), le niveau de cryptage et le signe de la langue ont été enlevés de la chaîne de l'agent utilisateur.

### JavaScript

Pour un aperçu des changements effectués dans JavaScript 1.8.5, voir [New in JavaScript 1.8.5](/fr/docs/JavaScript/New_in_JavaScript/1.8.5). Dans Firefox 4, JavaScript a un plus grand respect de la norme ECMAScript 5.

### Outils pour les développeurs

- [Utilisation de la Console Web](/fr/docs/Using_the_Web_Console)
  - : La Console Web est un outil qui aide le débogage.

A partir de Firefox 4, la Console d'erreurs est désactivée par défaut. Vous pouvez la ré-activer en modifiant la préférence `devtools.errorconsole.enabled` à `true` et en redémarrant le navigateur.

## Changements pour les développeurs de Mozilla et de modules complémentaires

Pour des conseils utiles sur la mise à jour des extensions existantes pour Firefox 4, voir [Updating extensions for Firefox 4](/fr/docs/Extensions/Updating_extensions_for_Firefox_4). Il y a plusieurs changements importants qui cassent la compatibilité avec les add-ons, donc n'oubliez pas de lire cet article.

Si vous développez des thèmes, vous devez lire [Theme changes in Firefox 4](/fr/docs/Theme_changes_in_Firefox_4) afin de connaître certains changements importants.

### Modules de code JavaScript

- [Services.jsm](/fr/docs/JavaScript_code_modules/Services.jsm)
  - : Le module de code `Services.jsm` fournit des accesseurs qui font qu'il est facile d'obtenir des références sur les services couramment utilisés, tels que le service de préférences ou le médiateur fenêtre.
- [API JS-ctypes](/fr/docs/js-ctypes)
  - : L'API JS-ctypes permet d'appeler une bibliothèque de fonctions étrangère C-compatible sans utiliser XPCOM.
- [Gestionnaire de modules complémentaires](/fr/docs/Addons/Add-on_Manager)
  - : Le nouveau gestionnaire de modules complémentaires fournit des informations sur les modules, permet la modifications des options, l'installation et la suppression des modules.
- [PopupNotifications.jsm](/fr/docs/JavaScript_code_modules/PopupNotifications.jsm)
  - : Le nouveau module des notifications popup facilite la présentation des notifications non-modales. Vous pouvez voir comment utiliser cette API dans [Using popup notifications](/fr/docs/Using_popup_notifications).
- [Chargement des modules de code à partir des URLs chrome:](/fr/docs/JavaScript_code_modules/Using#Locating_the_code_module)
  - : Vous pouvez maintenant charger des modules de code à partir d'URLs **chrome:**, même à l'intérieur de fichiers JAR.
- DownloadLastDir.jsm
  - : Le module de code [`DownloadLastDir.jsm`](/fr/docs/JavaScript_code_modules/DownloadLastDir.jsm) fournit la variable `gDownloadLastDir` qui contient une chaîne qui permet de connaître le chemin du répertoire dans lequel le dernier téléchargement s'est produit. Ce module gère les questions liées à la navigation privée.
- [Mesurer les performances en utilisant le module de code PerfMeasurement.jsm code module](/fr/docs/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Le module de code [`PerfMeasurement.jsm`](/fr/docs/JavaScript_code_modules/PerfMeasurement.jsm) propose une API qui mesure les performances au niveau du CPU dans du code JavaScript.

#### Divers changements dans les modules de code

- Le module de code `NetUtil.jsm` offre maintenant la méthode [`readInputStreamToString()`](</fr/docs/JavaScript_code_modules/NetUtil.jsm#readInputStreamToString()>), qui permet de lire des octets arbitraires à partir d'un flux dans une chaîne, même si le flux inclut des zéros.
- Vous pouvez maintenant [utiliser les travailleurs dans les modules de code JavaScript](/fr/docs/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### Changements DOM

- [`ChromeWorker`](/fr/docs/Web/API/ChromeWorker)
  - : Un nouveau type de travailleur pour du code privilégié, ce qui permet l'utilisation de choses comme [js-ctypes](/fr/docs/js-ctypes) à partir des travailleurs dans les extensions et le code d'une application.
- [Evènements tactile](/fr/docs/DOM/Touch_events)
  - : Ajout du support de l'évènement tactile (non-standard), cela permet de pouvoir suivre plusieurs doigts qui se déplacent en même temps sur un écran tactile.

#### Autres changements DOM

- La nouvelle notification ["document-element-inserted"](/fr/docs/Observer_Notifications#Documents) est envoyée quand un élément racine d'un document est crée, mais tous les scripts sont exécutés avant.

<!---->

### XUL

#### Changements pour l'élément tabbrowser

Plusieurs changements ont été apportés à l'élément [`<xul:tabbrowser>`](/fr/docs/Mozilla/Tech/XUL/tabbrowser) ce qui impacte les extensions qui interagissent avec les onglets. En plus du support de app tabs, ces changements on aussi modifiés la barre d'onglet en une barre d'outils standard, ce qui permet à l'utilisateur de faire glisser les boutons dans la barre d'outils.

- Les évènements `TabClose`, `TabSelect` et `TabOpen` non plus de bulle jusqu'à l'élément [`<xul:tabbrowser>`](/fr/docs/Mozilla/Tech/XUL/tabbrowser) (`gBrowser`). Les récepteurs d'évènements pour ces évènements doivent être ajoutés à `gBrowser.tabContainer` plutôt qu'à `gBrowser` directement.
- Le menu contextuel d'un onglet n'est plus un enfant anonyme de [`<xul:tabbrowser>`](/fr/docs/Mozilla/Tech/XUL/tabbrowser). Il peut donc être surposé directement avec [overlays XUL](/fr/docs/Overlays_XUL). On peut également y accéder directement depuis JavaScript via `gBrowser.tabContextMenu`. Voir cet [article](http://www.gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/) pour plus de détails.
- La nouvelle propriété [`visibleTabs`](/fr/docs/XUL/Propriétés/visibleTabs) a été ajoutée pour vous permettre de faire un tableau des onglets visibles, cela vous permet de déterminer quels onglets seront visibles dans l'ensemble de l'onglet courant. Par exemple, par Firefox Panorama l'utilise.
- La nouvelle méthode [`showOnlyTheseTabs`](/fr/docs/Mozilla/Tech/XUL/Méthodes/showOnlyTheseTabs) a été ajoutée, elle est utilisée Firefox Panorama.
- Ajout de la nouvelle méthode [`showOnlyTheseTabs`](/fr/docs/Mozilla/Tech/XUL/Méthodes/showOnlyTheseTabs), qui est utilisée par Firefox Panorama.
- Ajout de la nouvelle méthode [`getIcon`](/fr/docs/Mozilla/Tech/XUL/Méthodes/getIcon), qui vous permet d'obtenir le favicon d'un onglet sans avoir besoin de le remonter de l'élément [`<xul:browser>`](/fr/docs/Mozilla/Tech/XUL/browser).
- Ajout de la nouvelle propriété [`tabbrowser.tabs`](/fr/docs/XUL/Propriétés/tabbrowser.tabs), qui vous permet d'obtenir facilement une liste des onglets dans l'élement [`<xul:tabbrowser>`](/fr/docs/Mozilla/Tech/XUL/tabbrowser).
- Les nouvelles méthodes [`pinTab`](/fr/docs/Mozilla/Tech/XUL/Méthodes/pinTab) et [`unpinTab`](/fr/docs/Mozilla/Tech/XUL/Méthodes/unpinTab) vous permettent d'épingler et de relâcher des onglets (pour faire la différence entre les onglets normaux et ceux utilisés régulièrement).
- Ajout de la méthode [`getTabModalPromptBox`](/fr/docs/Mozilla/Tech/XUL/Méthodes/getTabModalPromptBox) et de l'attribut [`tabmodalPromptShowing`](/fr/docs/Mozilla/Tech/XUL/Attributs/tabmodalPromptShowing) à [`<xul:tabbrowser>`](/fr/docs/Mozilla/Tech/XUL/tabbrowser) pour le support des alertes majeures des onglets.

#### Changements pour les popups

- L'élément [`<xul:popup>`](/fr/docs/Mozilla/Tech/XUL/popup) n'est plus supporté, vous devez utilisez [`<xul:menupopup>`](/fr/docs/Mozilla/Tech/XUL/menupopup) à la place. (Si vous continuez à utiliser `popup`, vous allez rencontrer des problèmes, car l'élément n'a plus de signification particulière. par exemple, [`<xul:menuseparator>`](/fr/docs/Mozilla/Tech/XUL/menuseparator) peut apparaître transparent lorsqu'il est utilisé avec [`<xul:popup>`](/fr/docs/Mozilla/Tech/XUL/popup).)
- L'élément XUL [`<xul:menupopup>`](/fr/docs/Mozilla/Tech/XUL/menupopup) a maintenant une propriété [`triggerNode`](/fr/docs/XUL/Propriétés/triggerNode), qui indique le noeud sur lequel l'évènement s'est produit et qui a causé l'ouverture de la popup. Cela a aussi nécessité l'ajout d'un paramètre de l'événement déclencheur de la méthode [`openPopup`](/fr/docs/Mozilla/Tech/XUL/Méthodes/openPopup). En plus de ça, la propriété [`anchorNode`](/fr/docs/XUL/Propriétés/anchorNode) a été ajoutée, elle renvoie l'ancre spécifiée lorsque la popup a été créé.
- L'élément [`<xul:panel>`](/fr/docs/Mozilla/Tech/XUL/panel) propose maintenant les attributs [`panel.fade`](/fr/docs/Mozilla/Tech/XUL/Attributs/panel.fade) et [`panel.flip`](/fr/docs/Mozilla/Tech/XUL/Attributs/panel.flip), qui sont utilisés pour configurer le comportement de la nouvelle "flèche" des panneaux de notification de style.

#### Suppression du support à distance de XUL

Le support à distance de XUL n'est plus supporté, cela affecte les documents XUL qui étaient servis par HTTP, en outre, vous ne pouvez plus charger des documents XUL en utilisant l'URL `file://` sauf en créant une préférence `dom.allow_XUL_XBL_for_file` avec la valeur `true`. Cependant, il y a une fonctionnalité de liste blanche qui peut être utilisée pour permettre à des domaines spécifiques de charger XUL à distance. L'extension [Remote XUL Manager](https://addons.mozilla.org/en-US/firefox/addon/235281/) vous permet de gérer cette liste blanche.

#### Divers changements XUL

- L'attribut `readonly` fonctionne désormais correctement pour les [champs XBL](/fr/docs/XBL/XBL_1.0_Reference/Elements#field).
- L'élément [`<xul:resizer>`](/fr/docs/Mozilla/Tech/XUL/resizer) vous permet désormais d'utiliser l'attribut [`element`](/fr/docs/Mozilla/Tech/XUL/Attributs/element) pour spécifier l'élément à redimensionner, au lieu de redimensionner la fenêtre.
- L'élément [`<xul:resizer>`](/fr/docs/Mozilla/Tech/XUL/resizer) a maintenant un attribut [`type`](/fr/docs/Mozilla/Tech/XUL/Attributs/resizer.type) qui vous permet de spécifier que le redimensionnement est pour la fenêtre au lieu d'un élément, pour également empêcher de redimensionner deux fois une fenêtre en cours de préparation.
- L'attribut "active" n'est plus accessible sur les fenêtres XUL actives. A la place, vous pouvez utilisez la nouvelle pseudo-classe [`:-moz-window-inactive`](/fr/docs/Web/CSS/:-moz-window-inactive) afin d'attribuer différents styles aux fenêtres en arrière-plan.
- L'attribut [`emptytext`](/fr/docs/Mozilla/Tech/XUL/Attributs/emptytext) est désormais obsolète, vous devez utiliez [`placeholder`](/fr/docs/Mozilla/Tech/XUL/Attributs/placeholder) à la place.
- L'élément [`<xul:window>`](/fr/docs/Mozilla/Tech/XUL/window) propose maintenant un attribut [`accelerated`](/fr/docs/Mozilla/Tech/XUL/Attributs/accelerated) ; quand il est vrai, le gestionnaire de la couche matérielle est autorisé à accélérer la fenêtre.
- L'élément [`<xul:stack>`](/fr/docs/Mozilla/Tech/XUL/stack) supporte maintenant les attributs [`bottom`](/fr/docs/Mozilla/Tech/XUL/Attributs/bottom) et [`right`](/fr/docs/Mozilla/Tech/XUL/Attributs/right).
- Les évènements sont maintenant tirés lors de la personnalisation de [`<xul:toolbox>`](/fr/docs/Mozilla/Tech/XUL/toolbox), vous permettant de [détecter les changements sur les barres d'outils](/fr/docs/XUL/Toolbars/Toolbar_customization_events).
- L'attribut [`alternatingbackground`](/fr/docs/Mozilla/Tech/XUL/Attributs/alternatingbackground) pour l'élément [`<xul:tree>`](/fr/docs/Mozilla/Tech/XUL/tree)n'est plus supporté, à la place, vous pouvez utiliser la pseudo-classe [`:-moz-tree-row`](/fr/docs/Web/CSS/:-moz-tree-row).
- Le dépassement du bouton de la barre d'outils des Favoris avec anonid chevronPopup n'est plus anonyme, il a l'ID "PlacesChevron".
- L'élément [`<xul:tabs>`](/fr/docs/Mozilla/Tech/XUL/tabs) a maintenant la propriété [`tabbox`](/fr/docs/XUL/Propriétés/tabbox), en remplacement de l'ancienne propriété `_tabbox`, qui a été abandonnée (et n'a jamais été documentée).
- Les éléments XUL [`<xul:window>`](/fr/docs/Mozilla/Tech/XUL/window) ont maintenant l'attribut [`drawintitlebar`](/fr/docs/Mozilla/Tech/XUL/Attributs/drawintitlebar), si il a la valeur `true`, la zone de contenu de la fenêtre qui comprend la barre de titre, permet de dessiner dans la barre de titre.
- De nouveaux évènements sont disponibles : `TabPinned` et `TabUnpinned`, vous permettant de détecter [quand des onglets sont épinglés ou relâchés](/fr/docs/Code_snippets/Tabbed_browser#Notification_when_a_tab_is_pinned_or_unpinned).
- le nouvel évènement [`TabAttrModified` event](/fr/docs/Code_snippets/Tabbed_browser#Notification_when_a_tab%27s_attributes_change) est envoyé lorsque l'un des attributs ([`label`](/fr/docs/Mozilla/Tech/XUL/Attributs/label), [`crop`](/fr/docs/Mozilla/Tech/XUL/Attributs/crop), [`busy`](/fr/docs/Mozilla/Tech/XUL/Attributs/busy), [`image`](/fr/docs/Mozilla/Tech/XUL/Attributs/image), ou [`selected`](/fr/docs/Mozilla/Tech/XUL/Attributs/selected)) d'un onglet change.
- Les éléments [`<xul:tab>`](/fr/docs/Mozilla/Tech/XUL/tab) ont maintenant l'attribut [`pinned`](/fr/docs/Mozilla/Tech/XUL/Attributs/pinned), qui vous permet de savoir si un onglet est actuellement épinglé.
- La classe `setDirectionIndicator` sur les éléments [`<xul:tree>`](/fr/docs/Mozilla/Tech/XUL/tree) n'a rien fait depuis un certain temps et maintenant elle n'est plus du tout utilisée.
- L'élément [`<xul:window>`](/fr/docs/Mozilla/Tech/XUL/window) possède maintenant l'attribut [`chromemargin`](/fr/docs/Mozilla/Tech/XUL/Attributs/chromemargin) qui vous permet de définir la marge entre le chrome et le contenu de chaque côté d'une fenêtre.
- L'élément [`<xul:window>`](/fr/docs/Mozilla/Tech/XUL/window) possède maintenant l'attribut [`disablechrome`](/fr/docs/Mozilla/Tech/XUL/Attributs/disablechrome), il est utilisé pour cacher la plupart du chrome dans une fenêtre, comme pour `about:addons`.
- L'élément [`<xul:window>`](/fr/docs/Mozilla/Tech/XUL/window) possède maintenant l'attribut [`disablefastfind`](/fr/docs/Mozilla/Tech/XUL/Attributs/disablefastfind), qui vous permet de désactiver la barre de recherche dans une fenêtre lorsque le contenu ne le supporte pas. Il est par exemple utilisé par le panneau de gestion des modules complémentaires.
- Les barres d'outils peuvent maintenant être externe aux boîtes à outils, tout en restant considérée comme un membre de [`<xul:toolbox>`](/fr/docs/Mozilla/Tech/XUL/toolbox), en configurant la propriété [`toolboxid`](/fr/docs/XUL/Propriétés/toolboxid) de [`<xul:toolbar>`](/fr/docs/Mozilla/Tech/XUL/toolbar). De plus, l'élément [`<xul:toolbox>`](/fr/docs/Mozilla/Tech/XUL/toolbox) a maintenant une propriété [`externalToolbars`](/fr/docs/XUL/Propriétés/externalToolbars), qui liste toutes les barres d'outils qui sont considérées comme des membres de la boîte à outils.
- Ajout du support pour [la connexion de templates XUL](/fr/docs/XUL/Template_Guide/Template_Logging) pour permettre un débogage .

### Changements dans l'UI affectant les développeurs

- [La barre d'add-on](/fr/docs/The_add-on_bar)
  - : La barre d'état a été supprimée en faveur de la nouvelle barre d'add-on. Vous devrez mettre à jour votre extension l'utiliser cette option si vous aviez ajouté l'UI de la barre d'état avant.
- [Cacher le chrome du navigateur](/fr/docs/Hiding_browser_chrome)
  - : Vous pouvez désormais cacher le chrome du navigateur quand il est souhaitable de le faire, par exemple, `about:addons` le fait.

### Storage

#### Divers changement dans l'API Storage

- L'interface [`mozIStorageBindingParamsArray`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageBindingParamsArray)a maintenant un attribut de longueur indiquant le nombre d'objets [`mozIStorageBindingParams`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageBindingParams) dans le tableau.
- [`mozIStorageStatement.bindParameters()`](</fr/docs/XPCOM_Interface_Reference/mozIStorageStatement#bindParameters()>) retourne maintenant une erreur si l'interface [`mozIStorageBindingParamsArray`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageBindingParamsArray) spécifiée est vide.
- Ajout de la méthode [`mozIStorageConnection.clone()`](</fr/docs/XPCOM_Interface_Reference/mozIStorageConnection#clone()>), qui vous permet de cloner une connexion à une base de données déjà existante.
- Ajout de la méthode [`mozIStorageConnection.asyncClose()`](</fr/docs/XPCOM_Interface_Reference/mozIStorageConnection#asyncClose()>), qui vous permet de fermer une connexion à une base de données de manière asynchrone, vous spécifiez un rappel pour être averti quand l'opération est terminée.
- Ajout de la méthode [`mozIStorageConnection.setGrowthIncrement()`](</fr/docs/XPCOM_Interface_Reference/mozIStorageConnection#setGrowthIncrement()>), qui vous permet de spécifier le nombre de fichiers ajoutés à la fois dans une base de données, pour aider à réduire la fragmentation de SQLite.
- L'erreur `SQLITE_CONSTRAINT` est maintenant reportée comme `NS_ERROR_STORAGE_CONSTRAINT` au lieu de `NS_ERROR_FAILURE`.

### XPCOM

En plus des changements spécifiques référencés ci-dessous, il est important de noter qu'il n'y a plus aucune interfaces gelées. Elles sont toutes dégelées maintenant, indépendamment de ce que peut indiquer la documentation. Nous mettrons à jour la documentation au fil du temps.

- [Changements d'XPCOM dans Gecko 2.0](/fr/docs/XPCOM/XPCOM_changes_in_Gecko_2.0)
  - : Détails sur les modifications d'XPCOM qui impactent la compatibilité dans Firefox 4.
- [Components.utils.getGlobalForObject()](/fr/docs/Components.utils.getGlobalForObject)
  - : Cette nouvelle méthode retourne l'objet global avec lequel un objet est associé, ce qui remplace un cas d'utilisation commun de `__parent__` qui est désormais retiré.

### Places

- Les résultats de la requête peuvent maintenant être observés par plusieurs observateurs, et les requêtes peuvent être exécutées de manière asynchrone. Cela signifie qu'il y a eu des changements dans les interfaces [`nsINavHistoryResult`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryResult), [`nsINavHistoryQueryOptions`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryQueryOptions) et [`nsINavHistoryContainerResultNode`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryContainerResultNode). De plus, l'interface [`nsINavHistoryResultViewer`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryResultViewer) a été renommée en [`nsINavHistoryResultObserver`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryResultObserver).
- De [nouvelles notifications](/fr/docs/Observer_Notifications#Places) ont été ajoutées pour permettre au navigateur de suivre la procédure d'arrêt du service Places de manière plus fiable. Parmi celles-ci, la plupart sont pour un usage interne uniquement, mais la notification `places-connection-closed` est disponible pour savoir quand le service Places a terminé sont processus d'arrêt.
- Le paramètre de sortie de la taille d'un tableau sur plusieurs méthodes Places est désormais optionnel.
- Le support de `<menupopup type="places">` a été supprimé. A la place, vous devez créer et remplir un menu avec ds informations Places manuellement, plutôt que de l'avoir fait pour vous. Voir [Displaying Places information using views: Menu view](/fr/docs/Displaying_Places_information_using_views#Menu_view) pour plus de détails.

### Changements dans les interfaces

- Les interfaces [`nsIDocShell`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDocShell) et [`nsIWebBrowser`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebBrowser) ont maintenant un nouvel attribut `isActive`, qui est utilisé pour optimiser les chemins de code pour les documents qui ne sont pas visibles.
- La méthode [`nsIMemory.isLowMemory()`](</fr/docs/XPCOM_Interface_Reference/nsIMemory#isLowMemory()>) est obsolète. A la place, vous devez utilisez [les notifications "memory-pressure"](/fr/docs/XPCOM_Interface_Reference/nsIMemory#Low_memory_notifications) pour surveiller les situations où la mémoire est insuffisante.
- L'API pour la manipulation des redirections HTTP sur les canaux a changé pour qu'elles puissent être traitées de manière asynchrone. N'importe quel code qui implémente la manipulation des redirections à l'aide de [`nsIChannelEventSink.onChannelRedirect()`](</fr/docs/XPCOM_Interface_Reference/nsIChannelEventSink#onChannelRedirect()>) doit être mis à jour pour qu'il utilise [`nsIChannelEventSink.asyncOnChannelRedirect()`](</fr/docs/XPCOM_Interface_Reference/nsIChannelEventSink#asyncOnChannelRedirect()>) à la place. Cela accepte un gestionnaire de rappel qui doit être appelé quand une redirection est réussie.
- La méthode [`nsINavHistoryResultObserver.batching()`](</fr/docs/XPCOM_Interface_Reference/nsINavHistoryResultObserver#batching()>) a été ajoutée, fournissant un moyen de grouper des opérations Places par lots, ce qui réduit le nombre de notifications de mise à jour délivrées, qui peut améliorer les performances quand les observateurs doivent effectuer certaines tâches (telles que des rafraîchissement de pages).
- L'interface obsolète `nsIPref` a finalement été supprimée. Si vous n'êtes pas encore passé à [`nsIPrefService`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPrefService), il est temps de le faire.
- Les interfaces [`nsISessionStore`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISessionStore) et [`nsISessionStartup`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISessionStartup) ont reçues des changements pour la restauration des sessions. Voir la méthode [`nsISessionStore.restoreLastSession()`](</fr/docs/XPCOM_Interface_Reference/nsISessionStore#restoreLastSession()>).
- Les méthodes [`nsIPrincipal.subsumes()`](</fr/docs/XPCOM_Interface_Reference/nsIPrincipal#subsumes()>) et [`nsIPrincipal.checkMayLoad()`](</fr/docs/XPCOM_Interface_Reference/nsIPrincipal#checkMayLoad()>), et les attributs `origin`, `csp` et `URI`, sont maintenant disponibles à partir d'un script ; avant ils n'étaient disponibles qu'à partir du code natif.
- L'interface [`nsIPrompt`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIPrompt) supporte maintenant les alertes des onglets modaux, voir [Using tab-modal prompts](/fr/docs/Using_tab-modal_prompts) pour plus de détails.
- La méthode [`nsIEffectiveTLDService.getPublicSuffixFromHost()`](</fr/docs/XPCOM_Interface_Reference/nsIEffectiveTLDService#getPublicSuffixFromHost()>) rejette maintenant correctement le nom des hôtes qui commencent par un point (".").
- La méthode [`mozIJSSubScriptLoader.loadSubScript()`](</fr/docs/XPCOM_Interface_Reference/mozIJSSubScriptLoader#loadSubScript()>) a maintenant un argument optionnel qui vous permet de définir le jeu de caractère du script, si il n'est pas fourni, on suppose que c'est le format ASCII (comme cela a toujours été précédemment).
- L'interface `nsIAccessProxy` a été supprimée. C'était un élément qui n'avait plus d'utilité.
- Les interfaces [`nsIContentView`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIContentView) et [`nsIContentViewManager`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIContentViewManager) ont été ajoutées pour Firefox Mobile. Ils représentent une vue déroulant le contenu dont le contenu est actuellement utilisé par un processus séparé.
- L'interface [`nsIDiskCacheStreamInternal`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDiskCacheStreamInternal) a été ajoutée.
- L'interface [`nsIExternalURLHandlerService`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIExternalURLHandlerService) a été ajoutée.
- L'interface [`nsISyncJPAKE`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISyncJPAKE) a été ajoutée. Voir [bug 601645](https://bugzilla.mozilla.org/show_bug.cgi?id=601645).

### Gestion de la mémoire

- [Allocation infaillible de la mémoire](/fr/docs/Infallible_memory_allocation)
  - : Mozilla propose désormais des répartiteur de mémoire infaillible qui sont garantis de ne pas retouner null. Vous devriez lire cet article pour connaitre leur fonctionnement et savoir comment demander l'allocation de la mémoire.

### Autres changements

- La plupart des ressources que Firefox contient ont été combinées dans une seule archive JAR (`omni.jar`), ce qui améliore les performances au démarrage en réduisant l'I/O. Pour plus de détails, lisez [About omni.jar](/fr/docs/About_omni.jar).
- La préférence `accessibility.disablecache` n'est plus supportée, elle a seulement été utilisée à des fins de débogage et n'est plus employée.
- Les extensions dont le GUID change d'une version à une autre peuvent maintenant être mise à jour correctement.
- As a side effect of the removal of platform-specific directories in add-on bundles, you can no longer provide different default preferences for each platform.
- Par défaut, [les extensions ne sont plus décompressées quand elles sont installées](http://blog.mozilla.com/mwu/2010/09/10/extensions-now-installed-packed/), mais sont plutôt exécutées directement à partir du fichier XPI. Les extensions peuvent utiliser la propriété [unpack](/fr/docs/Install_Manifests#unpack) dans le [manifeste d'installation](/fr/docs/Manifestes_d'installation) pour choisir l'ancien comportement. Les extensions qui utilisent des composants binaires, des DLLs chargées avec [js-ctypes](/fr/docs/js-ctypes), des [plugins de recherche](/fr/docs/Création_de_plugins_OpenSearch_pour_Firefox), des dictionnaires et une fenêtre d'icônes doivent préciser ce dont elles ont besoin pour être décompressées. Les extensions qui [créent des bases de données SQLite](/fr/docs/XUL_School/Local_Storage#SQLite), ou font des copies de fichiers du système relatifs au répertoire de l'extension, peuvent aussi avoir besoin de modifier leur code.
- You may now include extensions that [automatically get installed at application startup](/fr/docs/Developer_Guide/Customizing_Firefox#Including_extensions_with_your_distribution_of_Firefox) within a customized Firefox.

## Autres changements

- Seul le fichier chrome.manifest racine est chargé
  - : maintenant seul le fichier `chrome.manifest` racine est chargé ; si vous avez besoin de fichiers manifestes secondaires à charger, vous pouvez utilisez la commande [`manifest`](/fr/docs/Chrome_Registration#manifest) dans votre fichier `chrome.manifest` racine pour les charger.
- Suppression du support de Gopher
  - : Le protocole Gopher n'est plus supporté nativement. L'extension [OverbiteFF](https://addons.mozilla.org/addon/7685/) permet de continuer à le supporter.
- [Gestion des évènement du processus Content](/fr/docs/The_message_manager)
  - : Pour le support des plugins hors du processus et les multiples processus caractéristiques, une nouvelle API a été mise en place pour permettre l'envoi de messages dans les processus.
- [Bootstrap des extensions](/fr/docs/Extensions/Bootstrapped_extensions)
  - : Vous pouvez désormais créer des extensions qui peuvent être installées, désinstallées et mises à jour sans nécessiter le redémarrage du navigateur.
- Suppression des plugins par défaut
  - : The default plugin has been removed. The application plugins folder has also been removed by default, however support for installing plugins via this folder still exists. Voir [bug 533891](https://bugzilla.mozilla.org/show_bug.cgi?id=533891).
- Extension Manager remplacé par Addon Manager
  - : [`nsIExtensionManager`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIExtensionManager) a été remplacée par [AddonManager](/fr/docs/Addons/Add-on_Manager/AddonManager).
- Child HWNDs n'est plus utilisé
  - : Firefox ne créé plus de child HWNDs pour son usage interne sous Windows. Si vous avez codé une extension qui utilise du code natif pour manipuler ces HWNDs, votre extensions ne fonctionnera pas dans Firefox 4. Soit vous devez arrêter l'utilisation de HWND ou soit mettre votre code reposant sur HWND dans un plugin [NPAPI](/fr/docs/Gecko_Plugin_API_Reference). C'est un gros travail, alors si vous pouviez éviter d'utiliser HWND directement.
- Changements dans les gestes
  - : Les gestes par défaut ont été changés, en faisant glisser trois doigts de haut en bas sur le trackpad cela ouvrira ou fermera Firefox Panorama. Pour modifier les éléments précédents, afin d'avoir les commandes de défilement haut et défilement bas, ouvrez about:config et mettez `cmd_scrollBottom` pour `browser.gesture.swipe.down` et `cmd_scrollTop` pour `browser.gesture.swipe.up`.

## Voir également

- [Firefox 3.6 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/3.6)
- [Firefox 3.5 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/3.5)
- [Firefox 3 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/3)
- [Firefox 2 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/2)
- [Firefox 1.5 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/1.5)
