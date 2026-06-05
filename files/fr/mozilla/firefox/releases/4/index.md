---
title: Firefox 4 note de version pour les développeurs
short-title: Firefox 4
slug: Mozilla/Firefox/Releases/4
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 4, est sorti le 22 mars 2011, améliore les performances, la prise en charge du HTML5 et d'autres technologies du web et aussi la sécurité. Cet article fournit des informations sur cette version et sur les fonctionnalités qui sont disponibles pour les développeur·euse·s web, les développeur·euse·s de modules complémentaires et les développeur·euse·s de la plate-forme Gecko.

## Fonctionnalités pour les développeur·euse·s Web

Gecko utilise désormais l'analyseur {{Glossary("HTML5")}}, qui corrige des bugs, améliore l'interopérabilité et les performances. Il permet également d'intégrer du contenu [SVG](/fr/docs/Web/SVG) et [MathML](/fr/docs/Web/MathML) directement dans le code HTML.

### HTML

- [Formulaires web](/fr/docs/Learn_web_development/Extensions/Forms)
  - : Un aperçu des améliorations apportées aux formulaires web. Parmi ces changements figurent l'ajout de nouveaux types pour l'élément {{HTMLElement("input")}}, la validation des données et d'autres améliorations.
- [Sections HTML5](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
  - : Gecko prend désormais en charge les nouveaux éléments HTML5 relatifs aux sections d'un document&nbsp;: {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("aside")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}} et {{HTMLElement("footer")}}.
- [L'attribut HTML5 `hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden)
  - : Cet attribut, commun à tous les éléments, est utilisé pour masquer le contenu d'une page web qui n'est pas actuellement pertinent pour l'utilisateur·ice.
- Autres éléments HTML5
  - : Gecko prend désormais également en charge les nouveaux éléments HTML5 suivants&nbsp;: {{HTMLElement("mark")}}, {{HTMLElement("figure")}}, et {{HTMLElement("figcaption")}}.
- [Les WebSockets](/fr/docs/Web/API/WebSockets_API)
  - : Un guide pour utiliser la nouvelle API WebSockets pour la communication en temps réel entre une application web et un serveur. Notez que les WebSockets tels qu'implémentés dans Firefox 4 ne sont pas compatibles avec la norme finale et ne devraient généralement pas être utilisés.

#### Améliorations de Canvas

Les modifications suivantes ont été apportées à l'interface {{DOMxRef("CanvasRenderingContext2D")}} pour permettre à l'implémentation de {{HTMLElement("canvas")}} d'être en conformité avec la spécification&nbsp;:

- La spécification d'un rayon négatif lors de l'appel d'`arc()` lance désormais correctement l'exception `INDEX_SIZE_ERR`.
- La spécification de valeurs non finies lors de l'appel de `createLinearGradient()` et `createRadialGradient()` lance désormais `NOT_SUPPORTED_ERR` au lieu de `SYNTAX_ERR`.
- Le réglage de `miterLimit` pour une valeur négative ne lance plus une exception, mais ignore plutôt les valeurs non-positives.
- Le réglage de `lineWidth` pour une valeur négative ne lance plus une exception, mais ignore plutôt les valeurs non-positives.
- La méthode `putImageData()` prend désormais en charge les paramètres optionnels `dirtyX`, `dirtyY`, `dirtyWidth` et `dirtyHeight`.

#### Autres changements HTML

- L'élément {{HTMLElement("textarea")}} est désormais redimensionnable par défaut&nbsp;; pour le désactiver, vous pouvez utiliser la propriété CSS {{CSSxRef("resize")}}.
- `canvas.getContext` et `canvas.toDataURL` ne lancent plus d'exceptions lorsqu'ils sont appelés avec des arguments non reconnus.
- L'élément {{HTMLElement("canvas")}} prend désormais en charge la méthode spécifique à Mozilla, `mozGetAsFile()`, qui permet d'obtenir un fichier basé sur l'image d'un contenu canvas. Voir {{DOMxRef("HTMLCanvasElement")}} pour les détails.
- `canvas2dcontext.lineCap` et `canvas2dcontext.lineJoin` ne lancent plus d'exceptions lorsqu'ils sont réglés avec une valeur non reconnue.
- `canvas2dcontext.globalCompositeOperation` ne lance plus d'exception lorsqu'il est réglé avec une valeur non reconnue et ne prend plus en charge la valeur `darker`, qui n'est pas un standard.
- La prise en charge de l'élément obsolète `<spacer>`, qui était absent de tous les autres navigateurs, a été enlevée.
- L'élément `<isindex>`, qui était créé par {{DOMxRef("Document.createElement()")}}, est désormais créé comme un simple élément sans propriétés ou méthodes.
- Gecko prend désormais en charge l'appel `click()` sur l'élément {{HTMLElement("input")}} pour ouvrir le sélecteur de fichiers. Voir [l'exemple](/fr/docs/Web/API/File_API/Using_files_from_web_applications#masquer_lélément_input_et_utiliser_la_méthode_click) dans l'article [Utiliser des fichiers à partir d'applications web](/fr/docs/Web/API/File_API/Using_files_from_web_applications).
- L'élément {{HTMLElement("input")}} prend en charge un nouvel attribut `mozactionhint`, qui permet de définir l'étiquette de la touche Entrée sur un clavier virtuel.
- L'élément {{HTMLElement("script")}} à l'intérieur des éléments {{HTMLElement("iframe")}}, {{HTMLElement("noembed")}} et {{HTMLElement("noframes")}} sont désormais exécutés, contrairement aux versions précédentes de Firefox. Ceci est conforme à la spécification et correspond au comportement des autres navigateurs.

### CSS

- [Transitions CSS](/fr/docs/Web/CSS/Guides/Transitions/Using)
  - : La prise en charge des transitions CSS est disponible dans Firefox 4.
- Les valeurs calculées en CSS
  - : La prise en charge de `-moz-calc` a été ajoutée. Cela permet de définir des valeurs de {{CSSxRef("&lt;length&gt;")}} comme des expressions mathématiques.
- Groupement de sélecteurs
  - : La prise en charge de `:-moz-any` pour grouper les sélecteurs et factoriser des combinateurs.
- Prise en charge des sous-rectangles pour `background-image`
  - : La fonction {{CSSxRef("-moz-image-rect()")}} permet d'utiliser des sous-rectangles en tant que {{CSSxRef("background-image")}}.
- Propriétés CSS tactiles
  - : La prise en charge des propriétés tactiles a été ajoutée. Plus de détails plus tard.
- [Utilisation arbitraire d'élements comme fond](/fr/docs/Web/CSS/Reference/Values/element)
  - : Vous pouvez utiliser la fonction CSS `-moz-element` et la fonction DOM {{DOMxRef("document.mozSetImageElement()")}} pour une utilisation arbitraire des éléments HTML comme fond.
- [Sélecteur `:visited` et confidentialité](/fr/docs/Web/CSS/Guides/Selectors/Privacy_and_:visited)
  - : Des modifications ont été apportées sur les informations qui peuvent être obtenues sur le style des liens visités en utilisant les sélecteurs CSS. Certaines applications Web peuvent être affectées.

#### Nouvelles propriétés CSS

<table>
  <thead>
    <tr>
      <th>Propriété</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>-moz-font-feature-settings</code></td>
      <td>Permet de personnaliser les fonctionnalités avancées des polices OpenType.</td>
    </tr>
    <tr>
      <td><code>-moz-tab-size</code></td>
      <td>Définit la largeur d'un espace de tabulation (U+0009) lors du rendu du texte.</td>
    </tr>
    <tr>
      <td>{{CSSxRef("resize")}}</td>
      <td>Permet de modifier les dimensions d'un élément.</td>
    </tr>
  </tbody>
</table>

#### Nouvelles pseudo-classes CSS

<table>
  <thead>
    <tr>
      <th>Pseudo-classe</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{CSSxRef(":-moz-handler-crashed")}}</td>
      <td>Utilisé pour le style d'un élément dont le modules complémentaire a planté.</td>
    </tr>
    <tr>
      <td><code>:-moz-placeholder</code></td>
      <td>Appliquée à l'espace texte réservé dans les champs des formulaires.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":-moz-submit-invalid")}}</td>
      <td>Appliquée au bouton d'envoi des formulaires quand un ou plusieurs des champs ne sont pas valides.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":-moz-window-inactive")}}</td>
      <td>Appliquée aux éléments d'une fenêtre inactive.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":invalid")}}</td>
      <td>Automatiquement appliquée aux champs {{HTMLElement("input")}} dont le contenu est invalide.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":optional")}}</td>
      <td>Automatiquement appliquée aux champs {{HTMLElement("input")}} qui ne définissent pas l'attribut <code>required</code>.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":required")}}</td>
      <td>Automatiquement appliquée aux champs {{HTMLElement("input")}} qui définissent l'attribut <code>required</code>.</td>
    </tr>
    <tr>
      <td>{{CSSxRef(":valid")}}</td>
      <td>Automatiquement appliquée aux champs {{HTMLElement("input")}} dont le contenu a été validé avec succès.</td>
    </tr>
  </tbody>
</table>

#### Nouveaux pseudo-sélecteurs CSS

<table>
  <thead>
    <tr>
      <th>Pseudo-sélecteur</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{CSSxRef(":focus-visible", ":-moz-focusring")}}</td>
      <td>Permet de définir l'apparence d'un élément lorsque Gecko estime que
        l'on doit se fixer dessus.</td>
    </tr>
  </tbody>
</table>

#### Nouvelles fonctions CSS

<table>
  <thead>
    <tr>
      <th>Fonction</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>:-moz-any()</code></td>
      <td>Permet de grouper les sélecteurs et de factoriser les combinateurs.</td>
    </tr>
    <tr>
      <td><code>-moz-calc()</code></td>
      <td>Permet de définir des valeurs de {{CSSxRef("&lt;length&gt;")}} comme des expressions mathématiques.</td>
    </tr>
    <tr>
      <td><code>-moz-element()</code></td>
      <td>Permet d'utiliser un élément arbritaire de fond pour {{CSSxRef("background-image")}} et {{CSSxRef("background")}}.</td>
    </tr>
    <tr>
      <td><code>-moz-image-rect()</code></td>
      <td>Permet d'utiliser un subrectangle d'une image comme {{CSSxRef("background-image")}} ou {{CSSxRef("background")}}.</td>
    </tr>
  </tbody>
</table>

#### Propriétés CSS renommées

| Ancien nom             | Nouveau nom                    | Notes                                                                                                                                                                                              |
| ---------------------- | ------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `-moz-background-size` | {{CSSxRef("background-size")}} | Le nom `-moz-background-size` n'est plus pris en charge.                                                                                                                                           |
| `-moz-border-radius`   | {{CSSxRef("border-radius")}}   | L'ancien nom est encore pris en charge pour une durée limitée, le temps de mettre vos sites à jour. Le changement du rendu a été fait pour correspondre à la dernière version de la spécification. |
| `-moz-box-shadow`      | {{CSSxRef("box-shadow")}}      |                                                                                                                                                                                                    |

#### Divers changements CSS

- La propriété {{CSSxRef("text-shadow")}} plafonne désormais son rayon de flou à 300px, pour des raisons de bon sens et de performances.
- La propriété {{CSSxRef("overflow")}} ne s'applique plus au groupe d'éléments de tableaux (`<thead>`, `<tbody>`, and `<tfoot>`).
- La propriété `-moz-appearance` prend désormais en charge la valeur `-moz-win-borderless-glass`, qui s'applique à un élément Aero sans bordure.
- La fonctionnalité de média [`-moz-device-pixel-ratio`](/fr/docs/Web/CSS/Reference/At-rules/@media/-moz-device-pixel-ratio) a été ajoutée, permettant l'utilisation de pixels de l'appareil par ratio de pixels CSS qui est utilisé dans les [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using).
- La manipulation des unités CSS {{CSSxRef("&lt;length&gt;")}} dans Gecko a été révisé pour mieux correspondre à d'autres navigateurs, et plus précisément de traduire dans des longueurs absolues le nombre de pixels à l'écran basé sur le dispositif de la DPI.

### Graphisme et vidéo

- [WebGL](/fr/docs/Web/API/WebGL_API)
  - : La norme WebGL en développement est désormais prise en charge par Firefox.
- [Prise en charge de WebM](/fr/docs/Web/Media/Guides/Formats/Containers#webm)
  - : Le nouveau format vidéo ouvert [WebM <sup>(angl.)</sup>](https://www.webmproject.org/) est prise en charge par Gecko 2.0.
- [Animation SVG avec SMIL](/fr/docs/Web/SVG/Guides/SVG_animation_with_SMIL)
  - : Les animations SVG avec SMIL sont désormais prises en charge.
- Utilisation de SVG comme image ou arrière-plan CSS
  - : Vous pouvez désormais utiliser SVG avec l'élément {{HTMLElement("img")}}, ainsi qu'avec CSS {{CSSxRef("background-image")}}.
- Attribut Media `buffered`
  - : L'attribut `buffered` sur les éléments {{HTMLElement("video")}} et {{HTMLElement("audio")}} est désormais pris en charge, vous permettant de déterminer quel fichier multimédia a été tamponné. L'interface DOM {{DOMxRef("TimeRanges")}} a été mise en place pour ce support.
- Attribut Media `preload`
  - : L'attribut `preload` de la spécification HTML5 a été implémenté, remplaçant l'attribut `autobuffer` précédemment mis en place (et qui n'est plus pris en charge). Cela affecte les éléments {{HTMLElement("video")}} et {{HTMLElement("audio")}} ainsi que l'interface `nsIDOMHTMLMediaElement`.
- Amélioration du positionnement du texte SVG
  - : Vous pouvez désormais définir des listes des valeurs pour les propriétés `x`, `y`, `dx`, and `dy` sur les éléments SVG {{SVGElement("text")}} et {{SVGElement("tspan")}}. Cela vous permet de contrôler le positionnement de chaque caractère d'une chaîne de caractères, individuellement.

### DOM

- [Tableaux JavaScript typés](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
  - : Ajout de la prise en charge pour les tableaux JavaScript typés, cela vous permet de manipuler des tampons contenant des données brutes en utilisant des types de données natives. Plusieurs API utilisent ça, y compris [l'API File](/fr/docs/Web/API/File), [WebGL](/fr/docs/Web/API/WebGL_API) et [WebSockets](/fr/docs/Web/API/WebSockets_API).
- Obtention des limites des rectangles limites
  - : L'objet {{DOMxRef("Range")}} a désormais les méthodes {{DOMxRef("range.getClientRects()")}} et {{DOMxRef("range.getBoundingClientRect()")}}.
- Capture des évènements de la souris sur des éléments quelconques
  - : Ajout de la prise en charge des APIs `setCapture()` et `releaseCapture()` originaires d'Internet Explorer. Voir [bogue Firefox 503943 <sup>(angl.)</sup>](https://bugzil.la/503943).
- [Manipulation de l'historique du navigateur](/fr/docs/Web/API/History_API)
  - : L'objet de l'historique déjà existant et disponible avec l'objet {{DOMxRef("Window.history")}} prend désormais en charge les nouvelles méthodes HTML5 `pushState()` et `replaceState()`.
- Animations utilisant `MozBeforePaint`
  - : Un nouvel évènement a été ajouté, qui, avec l'aide de la méthode `window.mozRequestAnimationFrame()` et de la propriété `window.mozAnimationStartTime`, offre un moyen de créer des animations qui sont synchronisées avec les autres.
- Évènements touch et multi-touch
  - : Ajout de la prise en charge des évènements touch et multi-touch.

#### Changement des interfaces DOM d'éléments HTML

Plusieurs éléments HTML ont vu leur interface DOM modifier, conformément à la spécification HTML5.

| Interface dans Firefox 3.6     | Interface dans Firefox 4   | HTML Element                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             |
| ------------------------------ | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{DOMxRef("HTMLSpanElement")}} | {{DOMxRef("HTMLElement")}} | {{HTMLElement("abbr")}}, {{HTMLElement("acronym")}}, {{HTMLElement("address")}}, {{HTMLElement("b")}}, {{HTMLElement("bdo")}}, {{HTMLElement("big")}}, `<blink>`, {{HTMLElement("center")}}, {{HTMLElement("cite")}}, {{HTMLElement("code")}}, {{HTMLElement("dd")}}, {{HTMLElement("dfn")}}, {{HTMLElement("dt")}}, {{HTMLElement("em")}}, {{HTMLElement("i")}}, {{HTMLElement("kbd")}}, `<listing>`, {{HTMLElement("nobr")}}, {{HTMLElement("plaintext")}}, {{HTMLElement("s")}}, {{HTMLElement("samp")}}, {{HTMLElement("small")}}, {{HTMLElement("strike")}}, {{HTMLElement("strong")}}, {{HTMLElement("sub")}}, {{HTMLElement("sup")}}, {{HTMLElement("tt")}}, {{HTMLElement("u")}}, {{HTMLElement("var")}}, {{HTMLElement("xmp")}} |
| {{DOMxRef("HTMLDivElement")}}  | {{DOMxRef("HTMLElement")}} | {{HTMLElement("noembed")}}, {{HTMLElement("noframes")}}, {{HTMLElement("noscript")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     |
| `HTMLWBRElement`               | {{DOMxRef("HTMLElement")}} | {{HTMLElement("wbr")}}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   |

#### Divers changements DOM

- L'enveloppement d'un élément {{HTMLElement("textarea")}} peut désormais être commandé par l'attribut DOM `wrap`. [bogue Firefox 41464 <sup>(angl.)</sup>](https://bugzil.la/41464)
- Les éléments {{HTMLElement("script")}} créés avec {{DOMxRef("Document.createElement()")}} et insérés dans un document, se comportent désormais conformément à la spécification HTML5. Les scripts avec l'attribut `src` s'exécute dès que possible (sasn maintenir la commande) et les scripts sans l'attribut `src` s'exécute de manière simultanée. Pour faire des scripts d'insertion de scripts qui ont l'attribut `src` qui exécute l'ensemble dans l'ordre d'insertion, pour eux `.async=false`.
- Les objets DOM {{DOMxRef("File")}} proposent désormais la propriété `url`.
- Prise en charge de [`FormData`](/fr/docs/Web/API/XMLHttpRequest_API/Using_FormData_Objects) pour `XMLHttpRequest`.
- La propriété {{DOMxRef("HTMLElement.isContentEditable")}} a été implémentée.
- La propriété {{DOMxRef("Document.currentScript")}} vous permet de déterminer quel script de l'élément {{HTMLElement("script")}} est en cours d'exécution. les nouveaux évènements {{DOMxRef("Element/beforescriptexecute_event", "beforescriptexecute")}} et {{DOMxRef("Element/afterscriptexecute_event", "afterscriptexecute")}} sont déclenchés avant et après l'éxécution d'un élément script.
- Ajout de la propriété `mozSourceNode` à l'objet {{DOMxRef("DataTransfer")}}.
- Ajout de la méthode {{DOMxRef("Selection.modify()")}} à l'objet {{DOMxRef("Selection")}}, ce qui vous permet de facilement modifier la sélection de texte courant ou la position du curseur dans une fenêtre de navigateur.
- La prise en charge de l'objet `window.directories` et de la fonctionnalité `directories` pour {{DOMxRef("window.open")}}, qui ne sont plus pris en charge dans les autres navigateurs, ont été enlevés. Utiliser `personalbar` à la place. [bogue Firefox 474058 <sup>(angl.)</sup>](https://bugzil.la/474058)
- La propriété {{DOMxRef("MouseEvent.mozInputSource")}} a été ajoutée à l'interface utilisateur des évènements DOM&nbsp;; cette propriété non-standard vous permet de déterminer le type de l'appareil qui a généré un évènement.
- L'évènement {{DOMxRef("Document/readystatechange_event", "readystatechange")}} de {{DOMxRef("Document")}} a été implémenté.
- La méthode {{DOMxRef("Document.createElement()")}} n'accepte plus `<` et `>` autour du nom de balise en mode quirks.
- Les méthodes {{DOMxRef("Element.setCapture()")}} et {{DOMxRef("Document.releaseCapture()")}} ont été ajoutées, permettant à des éléments de poursuivre des évènements de la souris, même lorsqu'elle est en dehors de leur zone de suivi normal après que l'évènement `mousedown` soit survenu.
- La propriété `window.mozPaintCount` a été ajoutée, elle vous permet de déterminer le nombre de fois qu'un document a été peint. C'est particulièrement utile lors des tests de performance de votre application web.
- Le signe de la langue a été supprimé de {{DOMxRef("Navigator.appVersion")}} et {{DOMxRef("Navigator.userAgent")}}. Utilisez {{DOMxRef("Navigator.language")}} ou l'en-tête [`Accept-Language`](/fr/docs/Web/HTTP/Guides/Content_negotiation) à la place. [bogue Firefox 572656 <sup>(angl.)</sup>](https://bugzil.la/572656)
- L'objet {{DOMxRef("XMLHttpRequest")}} expose désormais la réponse comme un tableau JavaScript typé et aussi comme une chaîne de caractères, en utilisant la propriété, spécifique de Gecko, `mozResponseArrayBuffer`.
- [Les évènements de sourcis](/fr/docs/Web/API/MouseEvent) incluent désormais une propriété `mozPressure` indiquant le niveau de pression supporté sur les périphériques d'entrée sensibles à la pression.
- Les méthodes {{DOMxRef("URL.createObjectURL_static", "URL.createObjectURL()")}} et {{DOMxRef("URL.revokeObjectURL_static", "URL.revokeObjectURL()")}} vous permettent de créer des URLs d'objet qui renvoient à des fichiers locaux.
- La méthode {{DOMxRef("DOMImplementation.createHTMLDocument()")}} vous permet de créer un nouveau document HTML.
- `Node.mozMatchesSelector()` retourne désormais l'exception `SYNTAX_ERR` si la chaîne de caractères du sélecteur définie est invalide, au lieu de retourner `false`.
- Vous pouvez désormais définir les valeurs des propriétés d'un élement SVG en utilisant une syntaxe abrégée même avec CSS. Par exemple&nbsp;: `element.style.fill = 'lime'`. Voir {{DOMxRef("HTMLElement/style", "style")}} pour plus de détails.
- Le document racine a désormais [un attribut `privatebrowsingmode` <sup>(angl.)</sup>](https://web.archive.org/web/20210620014429/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/Supporting_private_browsing_mode#detecting_whether_private_browsing_mode_is_permanent) qui décrit l'état du mode de navigation privée, en indiquant notamment si la session de navigation privée est temporaire ou permanente.
- Le second paramètre de la méthode {{DOMxRef("window.getComputedStyle()")}} est désormais optionnel, car elle l'est dans tous les autres navigateurs.
- L'objet DOM {{DOMxRef("StorageEvent")}} est désormais conforme à la dernière version de la spécification.
- Le délai minimum autorisé pour la méthode {{DOMxRef("Window.setTimeout", "setTimeout()")}} est désormais la préférence `dom.min_timeout_value`.
- L'évènement [`MozAfterPaint` <sup>(angl.)</sup>](https://web.archive.org/web/20191010014917/https://developer.mozilla.org/en-US/docs/Web/Events#Add-on-specific_events) n'est plus envoyé par défaut, en raison d'un potentiel problème de sécurité. Il peut être réactivé en définissant une préférence.

### Securité

- [Content Security Policy (CSP)](/fr/docs/Web/HTTP/Guides/CSP)
  - : Content Security Policy (CSP) est une proposition de Mozilla, conçu pour aider les concepteur·ice·s de sites Web et les administrateur·ice·s de serveur en définissant comment le contenu sur leurs sites Web agit. L'objectif est d'aider à détecter et à atténuer les attaques incluant les scripts intersites et des attaques par injection de données.
- [HTTP Strict Transport Security](/fr/docs/Web/HTTP/Headers/Strict-Transport-Security)
  - : HTTP Strict Transport Security est un dispositif de sécurité qui permet à un site web d'indiquer au navigateur d'utiliser une connexion sécurisée (HTTPS) à la place du protocole HTTP.
- [L'en-tête de réponse `X-FRAME-OPTIONS`](/fr/docs/Web/HTTP/Reference/Headers/X-Frame-Options)
  - : L'en-tête de réponse X-FRAME-OPTIONS HTTP introduite dans Internet Explorer 8 est désormais pris en charge par Firefox. Cela permet aux sites d'indiquer si leurs pages peuvent être utilisées dans des frames ou si l'utilisation de la page doit être restreinte.
- Changement de la [chaîne de caractères de l'agent utilisateur](/fr/docs/Web/HTTP/Reference/Headers/User-Agent/Firefox)
  - : C'est un moyen de réduire la quantité et l'entropie des données envoyées dans les requêts HTPP (voir [le bogue Firefox 572650 <sup>(angl.)</sup>](https://bugzil.la/572650)), le niveau de cryptage et le signe de la langue ont été enlevés de la chaîne de caractères de l'agent utilisateur.

### JavaScript

Pour un aperçu des changements effectués dans JavaScript 1.8.5, voir [Nouveautés dans JavaScript 1.8.5](https://web.archive.org/web/20210516173330/https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/New_in_JavaScript/1.8.5). Dans Firefox 4, JavaScript a un plus grand respect de la norme ECMAScript 5.

### Outils pour les développeur·euse·s

- [Utiliser la Console Web](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
  - : L'outil Console Web est un outil de débogage utile pour les développeur·euse·s web et d'extensions.

> [!NOTE]
> La Console d'erreurs est désactivée par défaut à partir de Gecko 2.0. Vous pouvez la réactiver en modifiant la préférence `devtools.errorconsole.enabled` à `true` et en redémarrant le navigateur.

## Changements pour les développeur·euse·s de Mozilla et de modules complémentaires

Pour des conseils utiles sur la mise à jour des extensions existantes pour Firefox 4, voir [Mise à jour des extensions pour Firefox 4](/fr/docs/Mozilla/Firefox/Releases/4/Updating_extensions_for_Firefox_4). Il y a plusieurs changements importants qui cassent la compatibilité avec les add-ons, donc n'oubliez pas de lire cet article.

Si vous développez des thèmes, vous devez lire [Changements des thèmes dans Firefox 4 <sup>(angl.)</sup>](https://web.archive.org/web/20210515184532/https://developer.mozilla.org/en-US/docs/Archive/Themes/Theme_changes_in_Firefox_4) afin de connaître certains changements importants.

### Modules de code JavaScript

- [Services.jsm <sup>(angl.)</sup>](https://web.archive.org/web/20210417185248/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Services.jsm)
  - : Le module de code `Services.jsm` fournit des accesseurs qui font qu'il est facile d'obtenir des références sur les services couramment utilisés, tels que le service de préférences ou le médiateur fenêtre.
- [API JS-ctypes <sup>(angl.)</sup>](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes)
  - : L'API JS-ctypes permet d'appeler une bibliothèque de fonctions étrangère C-compatible sans utiliser XPCOM.
- [Gestionnaire de modules complémentaires <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/index.html)
  - : Le nouveau gestionnaire de modules complémentaires fournit des informations sur les modules, permet la modification des options, l'installation et la suppression des modules.
- [PopupNotifications.jsm <sup>(angl.)</sup>](https://web.archive.org/web/20210414083224/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/PopupNotifications.jsm)
  - : Le nouveau module des notifications popup facilite la présentation des notifications non-modales. Vous pouvez voir comment utiliser cette API dans [Utiliser des fenêtres intrusives de notification <sup>(angl.)</sup>](https://web.archive.org/web/20210411021529/https://developer.mozilla.org/en-US/docs/Mozilla/Using_popup_notifications).
- [Chargement des modules de code à partir des URLs `chrome:` <sup>(angl.)</sup>](https://web.archive.org/web/20210529003507/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Using#locating_the_code_module)
  - : Vous pouvez désormais charger des modules de code à partir d'URLs **chrome:**, même à l'intérieur de fichiers JAR.
- DownloadLastDir.jsm
  - : Le module de code [`DownloadLastDir.jsm` <sup>(angl.)</sup>](https://web.archive.org/web/20210615230651/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/DownloadLastDir.jsm) fournit la variable `gDownloadLastDir` qui contient une chaîne de caractères qui permet de connaître le chemin du répertoire dans lequel le dernier téléchargement s'est produit. Ce module gère les questions liées à la navigation privée.
- [Mesurer les performances en utilisant le module de code PerfMeasurement.jsm code module <sup>(angl.)</sup>](https://web.archive.org/web/20210420142952/https://developer.mozilla.org/en-US/docs/Mozilla/Performance/Measuring_performance_using_the_PerfMeasurement.jsm_code_module)
  - : Le module de code [`PerfMeasurement.jsm` <sup>(angl.)</sup>](https://web.archive.org/web/20210620175828/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/PerfMeasurement.jsm) propose une API qui mesure les performances au niveau du CPU dans du code JavaScript.

#### Divers changements dans les modules de code

- Le module de code `NetUtil.jsm` offre désormais la méthode `readInputStreamToString()`, qui permet de lire des octets arbitraires à partir d'un flux dans une chaîne de caractères, même si le flux inclut des zéros.
- Le module de code XPCOMUtils.jsm propose désormais les fonctions d'aide `IterSimpleEnumerator()` et `IterStringEnumerator()` pour parcourir les énumérateurs XPCOM.
- Vous pouvez désormais [utiliser les workers dans les modules de code JavaScript <sup>(angl.)</sup>](https://web.archive.org/web/20210620192749/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/Using_workers_in_JavaScript_code_modules).

### Changements DOM

- `ChromeWorker`
  - : Un nouveau type de travailleur pour du code privilégié, ce qui permet l'utilisation de choses comme [js-ctypes <sup>(angl.)</sup>](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes) à partir des travailleurs dans les extensions et le code d'une application.
- [Évènements tactiles](/fr/docs/Web/API/Touch_events)
  - : Ajout de la prise en charge de l'évènement tactile (non-standard), cela permet de pouvoir suivre plusieurs doigts qui se déplacent en même temps sur un écran tactile.

#### Autres changements DOM

- [La nouvelle notification «&nbsp;document-element-inserted&nbsp;» <sup>(angl.)</sup>](https://web.archive.org/web/20210703204149/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Observer_Notifications#documents) est envoyée quand un élément racine d'un document est crée, mais tous les scripts sont exécutés avant.

### XUL

#### Changements pour l'élément `tabbrowser`

Plusieurs changements ont été apportés à l'élément `<xul:tabbrowser>` ce qui impacte les extensions qui interagissent avec les onglets. En plus de la prise en charge des onglets d'application, ces changements ont aussi modifié la barre d'onglet en une barre d'outils standard, ce qui permet à l'utilisateur·ice de faire glisser les boutons dans la barre d'outils.

- Les évènements `TabClose`, `TabSelect` et `TabOpen` non plus de bulle jusqu'à l'élément `<xul:tabbrowser>` (`gBrowser`). Les récepteurs d'évènements pour ces évènements doivent être ajoutés à `gBrowser.tabContainer` plutôt qu'à `gBrowser` directement.
- Le menu contextuel d'un onglet n'est plus un enfant anonyme de `<xul:tabbrowser>`. Il peut donc être superposé directement avec les couches XUL. On peut également y accéder directement depuis JavaScript avec `gBrowser.tabContextMenu`. Voir cet [article de blog <sup>(angl.)</sup>](https://gavinsharp.com/blog/2010/03/31/accessingmodifying-the-firefox-tab-context-menu-from-extensions/)pour plus de détails.
- La nouvelle propriété `visibleTabs` a été ajoutée pour vous permettre de faire un tableau des onglets visibles, cela vous permet de déterminer quels onglets sont visibles dans l'ensemble de l'onglet courant. Par exemple, par Firefox Panorama l'utilise.
- Ajout de la nouvelle méthode `showOnlyTheseTabs`, qui est utilisée par Firefox Panorama.
- Ajout de la nouvelle méthode `getIcon`, qui vous permet d'obtenir le favicon d'un onglet sans avoir besoin de le remonter de l'élément `<xul:browser>`.
- Ajout de la nouvelle propriété `tabbrowser.tabs`, qui vous permet d'obtenir facilement une liste des onglets dans l'élement `<xul:tabbrowser>`.
- Les nouvelles méthodes `pinTab` et `unpinTab` vous permettent d'épingler et de relâcher des onglets (pour faire la différence entre les onglets normaux et ceux utilisés régulièrement).
- Ajout de la méthode `getTabModalPromptBox` et de l'attribut `tabmodalPromptShowing` à `<xul:tabbrowser>` pour la prise en charge des alertes majeures des onglets.

#### Changements pour les fenêtres intrusives

- L'élément `<xul:popup>` n'est plus supporté, vous devez utiliser `<xul:menupopup>` à la place. (Si vous continuez à utiliser `popup`, vous allez rencontrer des problèmes, car l'élément n'a plus de signification particulière. par exemple, `<xul:menuseparator>` peut apparaître transparent lorsqu'il est utilisé avec `<xul:popup>`.)
- L'élément XUL `<xul:menupopup>` a désormais une propriété `triggerNode`, qui indique le noeud sur lequel l'évènement s'est produit et qui a causé l'ouverture de la fenêtre intrusive. Cela a aussi nécessité l'ajout d'un paramètre de l'évènement déclencheur de la méthode `openPopup`. En plus de ça, la propriété `anchorNode` a été ajoutée, elle retourne l'ancre définie lorsque la fenêtre intrusive a été créé.
- L'élément `<xul:panel>` propose désormais les attributs `panel.fade` et `panel.flip`, qui sont utilisés pour configurer le comportement de la nouvelle «&nbsp;flèche&nbsp;» des panneaux de notification de style.

#### Suppression du support à distance de XUL

Le XUL distant n'est plus pris en charge&nbsp;; cela concerne les documents XUL diffusés par HTTP&nbsp;; de plus, vous ne pouvez plus charger de documents XUL à l'aide d'URL `file://`, à moins de créer la préférence `dom.allow_XUL_XBL_for_file` et de la définir sur `true`. Il existe toutefois une fonctionnalité de liste blanche qui permet d'autoriser certains domaines à charger du XUL distant.

#### Divers changements XUL

- L'attribut `readonly` fonctionne désormais correctement pour les champs XBL.
- L'élément `<xul:resizer>` vous permet désormais d'utiliser l'attribut `element` pour définir l'élément à redimensionner, au lieu de redimensionner la fenêtre.
- L'élément `<xul:resizer>` a désormais un attribut `type` qui vous permet de définir que le redimensionnement est pour la fenêtre au lieu d'un élément, pour également empêcher de redimensionner deux fois une fenêtre en cours de préparation.
- L'attribut `"active"` n'est plus accessible sur les fenêtres XUL actives. A la place, vous pouvez utiliser la nouvelle pseudo-classe `:-moz-window-inactive` afin d'attribuer différents styles aux fenêtres en arrière-plan.
- L'attribut `emptytext` est désormais obsolète, vous devez utiliez `placeholder` à la place.
- L'élément `<xul:window>` propose désormais un attribut `accelerated`&nbsp;; quand il est vrai, le gestionnaire de la couche matérielle est autorisé à accélérer la fenêtre.
- L'élément `<xul:stack>` prend désormais en charge les attributs `bottom` et `right`.
- Les évènements sont désormais tirés lors de la personnalisation de `<xul:toolbox>`, vous permettant de détecter les changements sur les barres d'outils.
- L'attribut `alternatingbackground` pour l'élément `<xul:tree>` n'est plus pris en charge, à la place, vous pouvez utiliser la pseudo-classe `:-moz-tree-row`.
- Le dépassement du bouton de la barre d'outils des Favoris avec anonid chevronPopup n'est plus anonyme, il a l'ID `"PlacesChevron"`.
- L'élément `<xul:tabs>` a désormais la propriété `tabbox`, en remplacement de l'ancienne propriété `_tabbox`, qui a été abandonnée (et n'a jamais été documentée).
- Les éléments XUL `<xul:window>` ont désormais l'attribut `drawintitlebar`, s'il a la valeur `true`, la zone de contenu de la fenêtre qui comprend la barre de titre, permet de dessiner dans la barre de titre.
- De nouveaux évènements sont disponibles&nbsp;: `TabPinned` et `TabUnpinned`, vous permettant de détecter quand des onglets sont épinglés ou relâchés.
- le nouvel évènement `TabAttrModified` est envoyé lorsque l'un des attributs (`label`, `crop`, `busy`, `image`, ou `selected`) d'un onglet change.
- Les éléments `<xul:tab>` ont désormais l'attribut `pinned`, qui vous permet de savoir si un onglet est actuellement épinglé.
- La classe `setDirectionIndicator` sur les éléments `<xul:tree>` n'a rien fait depuis un certain temps et désormais elle n'est plus du tout utilisée.
- L'élément `<xul:window>` possède désormais l'attribut `chromemargin` qui vous permet de définir la marge entre le chrome et le contenu de chaque côté d'une fenêtre.
- L'élément `<xul:window>` possède désormais l'attribut `disablechrome`, il est utilisé pour cacher la plupart du chrome dans une fenêtre, comme pour `about:addons`.
- L'élément `<xul:window>` possède désormais l'attribut `disablefastfind`, qui vous permet de désactiver la barre de recherche dans une fenêtre lorsque le contenu ne le supporte pas. Il est par exemple utilisé par le panneau de gestion des modules complémentaires.
- Les barres d'outils peuvent désormais être externes aux boîtes à outils, tout en restant considérée comme un membre de `<xul:toolbox>`, en configurant la propriété `toolboxid` de `<xul:toolbar>`. De plus, l'élément `<xul:toolbox>` a désormais une propriété `externalToolbars`, qui liste toutes les barres d'outils qui sont considérées comme des membres de la boîte à outils.
- Ajout du support pour la connexion de templates XUL pour permettre un débogage.

### Changements dans l'UI affectant les développeur·euse·s

- [La barre d'extension](/fr/docs/Mozilla/Firefox/Releases/4/The_add-on_bar)
  - : La barre d'état a été supprimée en faveur de la nouvelle barre d'add-on. Vous devez mettre à jour votre extension l'utiliser cette option si vous aviez ajouté l'UI de la barre d'état avant.
- Cacher le chrome du navigateur
  - : Vous pouvez désormais cacher le chrome du navigateur quand il est souhaitable de le faire, par exemple, `about:addons` le fait.

### Stockage

#### Divers changement dans l'API Storage

- L'interface `mozIStorageBindingParamsArray` a désormais un attribut de longueur indiquant le nombre d'objets `mozIStorageBindingParams` dans le tableau.
- `mozIStorageStatement.bindParameters()` retourne désormais une erreur si l'interface `mozIStorageBindingParamsArray` définie est vide.
- Ajout de la méthode `mozIStorageConnection.clone()`, qui vous permet de cloner une connexion à une base de données déjà existante.
- Ajout de la méthode `mozIStorageConnection.asyncClose()`, qui vous permet de fermer une connexion à une base de données de manière asynchrone, vous définissez un rappel pour être averti quand l'opération est terminée.
- Ajout de la méthode `mozIStorageConnection.setGrowthIncrement()`, qui vous permet de définir le nombre de fichiers ajoutés à la fois dans une base de données, pour aider à réduire la fragmentation de SQLite.
- L'erreur `SQLITE_CONSTRAINT` est désormais reportée comme `NS_ERROR_STORAGE_CONSTRAINT` au lieu de `NS_ERROR_FAILURE`.

### XPCOM

En plus des changements spécifiques référencés ci-dessous, il est important de noter qu'il n'y a plus aucune interface gelée. Elles sont toutes dégelées maintenant, indépendamment de ce que peut indiquer la documentation. Nous mettons à jour la documentation au fil du temps.

- [Changements d'XPCOM dans Gecko 2.0 <sup>(angl.)</sup>](https://web.archive.org/web/20210514105748/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Guide/Changes_in_Gecko_2.0)
  - : Détails sur les modifications d'XPCOM qui impactent la compatibilité dans Firefox 4.
- [`Components.utils.getGlobalForObject()` <sup>(angl.)</sup>](https://web.archive.org/web/20210625071536/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.getGlobalForObject)
  - : Cette nouvelle méthode retourne l'objet global avec lequel un objet est associé, ce qui remplace un cas d'utilisation commun de `__parent__` qui est désormais retiré.

### Places

- Les résultats de la requête peuvent désormais être observés par plusieurs observateurs, et les requêtes peuvent être exécutées de manière asynchrone. Cela signifie qu'il y a eu des changements dans les interfaces `nsINavHistoryResult`, `nsINavHistoryQueryOptions` et `nsINavHistoryContainerResultNode`. De plus, l'interface `nsINavHistoryResultViewer` a été renommée en `nsINavHistoryResultObserver`.
- De [nouvelles notifications <sup>(angl.)</sup>](https://web.archive.org/web/20210703204149/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Observer_Notifications) ont été ajoutées pour permettre au navigateur de suivre la procédure d'arrêt du service Places de manière plus fiable. Parmi celles-ci, la plupart sont pour un usage interne uniquement, mais la notification `places-connection-closed` est disponible pour savoir quand le service Places a terminé sont processus d'arrêt.
- Le paramètre de sortie de la taille d'un tableau sur plusieurs méthodes Places est désormais optionnel.
- Le support de `<menupopup type="places">` a été supprimé. A la place, vous devez créer et remplir un menu avec ds informations Places manuellement, plutôt que de l'avoir fait pour vous. Voir [Afficher des informations sur les lieux à l'aide des vues&nbsp;: Menu vue <sup>(angl.)</sup>](https://web.archive.org/web/20201028190050/https://developer.mozilla.org/en-US/docs/Mozilla/Displaying_Place_information_using_views#menu_view) pour plus de détails.

### Changements dans les interfaces

- Les interfaces `nsIDocShell` et `nsIWebBrowser` ont désormais un nouvel attribut `isActive`, qui est utilisé pour optimiser les chemins de code pour les documents qui ne sont pas visibles.
- La méthode `nsIMemory.isLowMemory()` est obsolète. A la place, vous devez utiliser [les notifications «&nbsp;memory-pressure&nbsp;» <sup>(angl.)</sup>](https://web.archive.org/web/20210516060454/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemory#low_memory_notifications) pour surveiller les situations où la mémoire est insuffisante.
- L'API pour la manipulation des redirections HTTP sur les canaux a changé pour qu'elles puissent être traitées de manière asynchrone. N'importe quel code qui implémente la manipulation des redirections à l'aide de `nsIChannelEventSink.onChannelRedirect()` doit être mis à jour pour qu'il utilise `nsIChannelEventSink.asyncOnChannelRedirect()` à la place. Cela accepte un gestionnaire de rappel qui doit être appelé quand une redirection est réussie.
- La méthode `nsINavHistoryResultObserver.batching()` a été ajoutée, fournissant un moyen de grouper des opérations Places par lots, ce qui réduit le nombre de notifications de mise à jour délivrées, qui peut améliorer les performances quand les observateurs doivent effectuer certaines tâches (telles que des rafraîchissements de pages).
- L'interface obsolète `nsIPref` a finalement été supprimée. Si vous n'êtes pas encore passé à `nsIPrefService`, il est temps de le faire.
- Les interfaces `nsISessionStore` et `nsISessionStartup` ont reçues des changements pour la restauration des sessions. Voir la méthode `nsISessionStore.restoreLastSession()`.
- Les méthodes `nsIPrincipal.subsumes()` et `nsIPrincipal.checkMayLoad()`, et les attributs `origin`, `csp` et `URI`, sont désormais disponibles à partir d'un script&nbsp;; avant ils n'étaient disponibles qu'à partir du code natif.
- L'interface `nsIPrompt` prend désormais en charge les alertes des onglets contextuels, voir [Utiliser les invites d'onglet contextuels <sup>(angl.)</sup>](https://web.archive.org/web/20210513121539/https://developer.mozilla.org/en-US/docs/Mozilla/Using_tab-modal_prompts) pour plus de détails.
- La méthode `nsIEffectiveTLDService.getPublicSuffixFromHost()` rejette désormais correctement le nom des hôtes qui commencent par un point (`.`).
- La méthode `mozIJSSubScriptLoader.loadSubScript()` a désormais un argument optionnel qui vous permet de définir le jeu de caractère du script, s'il n'est pas fourni, on suppose que c'est le format ASCII (comme cela a toujours été précédemment).
- L'interface `nsIAccessProxy` a été supprimée. C'était un élément qui n'avait plus d'utilité.
- Les interfaces `nsIContentView` et `nsIContentViewManager` ont été ajoutées pour Firefox Mobile. Ils représentent une vue déroulant le contenu dont le contenu est actuellement utilisé par un processus séparé.
- L'interface `nsIDiskCacheStreamInternal` a été ajoutée.
- L'interface `nsIExternalURLHandlerService` a été ajoutée.
- L'interface `nsISyncJPAKE` a été ajoutée. Voir [bogue Firefox 601645 <sup>(angl.)</sup>](https://bugzil.la/601645).
- L'interface `nsIINIParserWriter` est ajoutée dans Gecko 1.9.2.4 pour prendre en charge l'écriture des fichiers INI.

### Gestion de la mémoire

- [Allocation infaillible de la mémoire <sup>(angl.)</sup>](https://web.archive.org/web/20201026230445/https://developer.mozilla.org/en-US/docs/Mozilla/Infallible_memory_allocation)
  - : Mozilla propose désormais des répartiteurs de mémoire infaillible qui sont garantis de ne pas retouner `null`. Vous devriez lire cet article pour connaître leur fonctionnement et savoir comment demander l'allocation de la mémoire.

### Autres changements

- La plupart des ressources que Firefox contient ont été combinées dans une seule archive JAR (`omni.jar`), ce qui améliore les performances au démarrage en réduisant l'I/O. Pour plus de détails, lisez [About omni.jar <sup>(angl.)</sup>](https://web.archive.org/web/20210620190432/https://developer.mozilla.org/en-US/docs/Mozilla/About_omni.ja_%28formerly_omni.jar%29).
- La préférence `accessibility.disablecache` n'est plus prise en charge, elle a seulement été utilisée à des fins de débogage et n'est plus employée.
- Les extensions dont le GUID change d'une version à une autre peuvent désormais être mises à jour correctement.
- Suite à la suppression des répertoires spécifiques à chaque plateforme dans les paquets d'extensions, il n'est désormais plus possible de définir des préférences par défaut différentes pour chaque plateforme.
- Par défaut, [les extensions ne sont plus décompressées quand elles sont installées <sup>(angl.)</sup>](https://web.archive.org/web/20130707104214/https://blog.mozilla.org/mwu/2010/09/10/extensions-now-installed-packed/), mais sont plutôt exécutées directement à partir du fichier XPI. Les extensions peuvent utiliser la propriété [unpack <sup>(angl.)</sup>](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Install_Manifests#unpack) dans le [manifeste d'installation <sup>(angl.)</sup>](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Install_Manifests) pour choisir l'ancien comportement. Les extensions qui utilisent des composants binaires, des DLLs chargées avec [js-ctypes <sup>(angl.)</sup>](https://web.archive.org/web/20210528115949/https://developer.mozilla.org/en-US/docs/Mozilla/js-ctypes), des [modules complémentaires de recherche](/fr/docs/Web/XML/Guides/OpenSearch), des dictionnaires et une fenêtre d'icônes doivent préciser ce dont elles ont besoin pour être décompressées. Les extensions qui [créent des bases de données SQLite <sup>(angl.)</sup>](https://web.archive.org/web/20201109001036/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Overlay_Extensions/XUL_School/Local_Storage#sqlite), ou font des copies de fichiers du système relatifs au répertoire de l'extension, peuvent aussi avoir besoin de modifier leur code.
- Vous pouvez désormais inclure des extensions qui [s'installent automatiquement au démarrage de l'application <sup>(angl.)</sup>](https://web.archive.org/web/20180604010849/https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Customizing_Firefox#including_extensions_with_your_distribution_of_firefox) dans une version personnalisée de Firefox.

## Autres changements

- Seul le fichier chrome.manifest racine est chargé
  - : Maintenant seul le fichier `chrome.manifest` racine est chargé&nbsp;; si vous avez besoin de fichiers manifestes secondaires à charger, vous pouvez utiliser la commande [`manifest` <sup>(angl.)</sup>](https://web.archive.org/web/20191029205045/https://developer.mozilla.org/en-US/docs/Mozilla/Chrome_Registration#manifest) dans votre fichier `chrome.manifest` racine pour les charger.
- Suppression de la prise en charge de Gopher
  - : Le protocole Gopher n'est plus pris en charge nativement. L'extension [OverbiteFF](https://addons.mozilla.org/fr/firefox/addon/overbitenx/) permet de continuer à le prendre en charge.
- [Gestion des évènements du processus Content <sup>(angl.)</sup>](https://web.archive.org/web/20210531151101/https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Multiprocess_Firefox/Message_Manager)
  - : Pour la prise en charge des modules complémentaires hors du processus et les multiples processus caractéristiques, une nouvelle API a été mise en place pour permettre l'envoi de messages dans les processus.
- [Bootstrap des extensions <sup>(angl.)</sup>](https://web.archive.org/web/20210519000929/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Bootstrapped_extensions)
  - : Vous pouvez désormais créer des extensions qui peuvent être installées, désinstallées et mises à jour sans nécessiter le redémarrage du navigateur.
- Suppression des modules complémentaires par défaut
  - : Le module par défaut a été supprimé. Le dossier des modules de l'application a également été supprimé par défaut, mais la prise en charge de l'installation de modules à partir de ce dossier est toujours disponible. Voir [bogue Firefox 533891 <sup>(angl.)</sup>](https://bugzil.la/533891).
- Extension Manager remplacé par Addon Manager
  - : `nsIExtensionManager` a été remplacée par [AddonManager <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/toolkit/mozapps/extensions/addon-manager/AddonManager.html).
- Child HWNDs n'est plus utilisé
  - : Firefox ne crée plus d'enfant HWNDs pour son usage interne sous Windows. Si vous avez codé une extension qui utilise du code natif pour manipuler ces HWNDs, votre extension ne fonctionne pas dans Firefox 4. Soit vous devez arrêter l'utilisation de HWND ou soit mettre votre code reposant sur HWND dans un module complémentaire NPAPI. C'est un gros travail, alors si vous pouviez éviter d'utiliser HWND directement.
- Changements dans les gestes
  - : Les gestes par défaut ont été changés, en faisant glisser trois doigts de haut en bas sur le trackpad ça ouvre ou ferme Firefox Panorama. Pour modifier les éléments précédents, afin d'avoir les commandes de défilement haut et défilement bas, ouvrez about:config et mettez `cmd_scrollBottom` pour `browser.gesture.swipe.down` et `cmd_scrollTop` pour `browser.gesture.swipe.up`.
