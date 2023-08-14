---
title: Firefox 7 pour les développeurs
slug: Mozilla/Firefox/Releases/7
---

{{FirefoxSidebar}}

Firefox 7, basé sur Gecko 7.0, est sorti le 27 september 2011. Cet article fournit des informations à propos des changements qui affectent les développeurs dans cette version.

## Changements pour les développeurs Web

### HTML

- La propriété `profile` de {{domxref("HTMLHeadElement")}} a été supprimée, cette propriété est obsolète depuis Gecko 2.0.
- Les propriétés `x` et `y` de {{domxref("HTMLImageElement")}} ont été supprimées.
- Le paramètre `before` de la méthode `add()` de {{domxref("HTMLSelectElement")}} est désormais optionnel.
- L'attribut [`background`](/fr/docs/Web/HTML/Element/body#background) de l'élément {{HTMLElement("body")}} n'est plus résolu en tant qu'URI, ce qui est conforme à la spécification HTML courante.
- L'attribut [`label`](/fr/docs/Web/HTML/Element/option#label) de l'élément {{HTMLElement("option")}} reflète désormais la valeur du contenu texte de l'élément si l'attribut n'est pas spécifié.

#### Canvas

- Dans le cadre du [projet Azure](http://blog.mozilla.com/joe/2011/04/26/introducing-the-azure-project/), le Backend Azure Direct2D [a été implémenté](https://bugzilla.mozilla.org/show_bug.cgi?id=651858) et améliore considérablement les performances des canvas 2D.
- La spécification de valeurs invalides lors de l'appel de `setTransform()`, `bezierCurveTo()` ou `arcTo()` ne renvoie plus d'exception, ces appels sont à présent ignorés silencieusement.
- La méthode [`isPointInPath()`](</fr/docs/DOM/CanvasRenderingContext2D#isPointInPath()>) considère maintenant correctement la matrice de transformation lors de la comparaison du point spécifié au tracé en cours.
- L'appel de `strokeRect()` avec une largeur et une hauteur de zéro n'a désormais plus aucun effet.
- L'appel de [`drawImage()`](</fr/docs/DOM/CanvasRenderingContext2D#drawImage()>) avec une largeur ou hauteur {{HTMLElement("canvas")}} de zéro lance désormais `INVALID_STATE_ERR`.
- L'appel de [`drawImage()`](</fr/docs/DOM/CanvasRenderingContext2D#drawImage()>) avec des coordonnées non-finies ne renvoie plus d'exception.
- La méthode `toDataURL()` accepte désormais un second paramètre pour contrôler la qualité JPEG.
- Le support des opérations non-standards `clear` et `over` de `globalCompositeOperation` a été enlevé.
- [Les ombres](/fr/docs/Canvas_tutorial/Applying_styles_and_colors#Shadows) sont désormais uniquement dessinées pour les opérations de composition de `source-over`.
- Vous pouvez désormais configurer la règle de remplissage utilisé par la toile en définissant l'[attribute](/fr/docs/DOM/CanvasRenderingContext2D#Attributes) `mozFillRule` au contexte.
- Le support des attributs expérimentaux `mozDash`, `mozDashOffset`, `mozCurrentTransform` et `mozCurrentTransformInverse` a été ajouté.
- Le support des méthodes non-standards `mozDrawText()`, `mozMeasureText()`, `mozPathText()` et `mozTextAlongPath()` a été retiré.

### CSS

- {{cssxref("text-overflow")}} est désormais supporté.
- La propriété {{cssxref("orient", "-moz-orient")}} a été corrigée pour que les éléments {{HTMLElement("progress")}} qui sont orientés verticalement aient des dimensions par défaut appropriées.

### MathML

- XLink href a été rétabli et l'attribut `href` de MathML3 est maintenant supporté. Les développeurs sont encouragés à passer à la dernière syntaxe.
- Le support de l'attribut `voffset` sur les éléments {{MathMLElement("mpadded")}} a été ajouté et le comportement de l'attribut `lspace` a été fixé.
- L'élément de premier niveau {{MathMLElement("math")}} accepte maintenant tous les atributs de l'élément {{MathMLElement("mstyle")}}.
- Le support des polices [Asana Math](http://www.ctan.org/tex-archive/fonts/Asana-Math/) a été ajouté.
- L'épaisseur des lignes `medium` des barres de fraction des éléments {{MathMLElement("mfrac")}} a été corrigé pour correspondre à l'épaisseur par défaut.
- [Les noms des espaces négatifs](</fr/docs/MathML/Attributes/Values#Constants_(namedspaces)>) sont maintenant supportés.

### DOM

- Les méthodes non-standards `getAsBinary()`, `getAsDataURL()` et `getAsText()` de l'interface {{domxref("File")}} ont été supprimées ainsi que les propriétés non-standards `fileName` et `fileSize`.
- L'interface {{domxref("XMLHttpRequest/FormData", "FormData")}} ne signale plus le nom du fichier comme une chaîne vide lors de l'envoi l'en-tête HTTP `Content-Disposition` si les données ont été définies à l'aide de {{domxref("Blob")}}. Cela corrige les erreurs qui avaient lieu sur certains serveurs.
- L'attribut {{domxref("element.dir")}} renvoie désormais toujours son résultat en minuscules, comme l'exige la spécification HTML.
- la méthode `readAsArrayBuffer()` de {{domxref("FileReader")}} est maintenant implémentée.
- {{domxref("document.createEntityReference")}} a été retiré. Elle n'a jamais été correctement implémentée et n'est pas intégrée dans la plupart des autres navigateurs.
- `document.normalizeDocument` a été retiré. Utilisez {{domxref("Node.normalize")}} à la place.
- {{domxref("DOMTokenList.item")}} renvoie désormais `undefined` si `index` est en dehors des limites, auparavant il renvoyé `null`.
- `Node.getFeature` a été supprimé.
- Les interfaces `HTMLInsElement` et `HTMLDelElement` ont été retirées, depuis que les éléments {{HTMLElement("ins")}} et {{HTMLElement("del")}} utilisent l'interface {{domxref("HTMLModElement")}}.
- Dans le but d'être conforme à la prochaine spécification [DOM4](http://www.w3.org/TR/dom/) où {{domxref("Attr")}} n'hérite plus de {{domxref("Node")}} (il l'a fait dans les DOM Core 1, 2 and 3), beaucoup de propriétés et méthodes de {{domxref("Node")}} sur l'interface {{domxref("Attr")}} sont maintenant des [rapports d'alertes](/fr/docs/DOM/Attr#Deprecated_properties_and_methods) que nous nous efforçons de retirer dans une version ultérieure.
- Ajout du support des propriétés {{domxref("window.ondeviceorientation")}} et {{domxref("window.ondevicemotion")}} sur les objets {{domxref("window")}}.
- {{domxref("window.resizeTo")}}, {{domxref("window.resizeBy")}}, {{domxref("window.moveTo")}} et {{domxref("window.moveBy")}} ne s'appliquent plus à la fenêtre principale.

### JavaScript

- La propriété [`Function.arity`](/fr/docs/JavaScript/Reference/Global_Objects/Function/arity) a été enlevée, utilisez [`Function.length`](/fr/docs/JavaScript/Reference/Global_Objects/Function/length) à la place.

### WebSockets

- la préférence `network.websocket.max-connections` est utilisée pour déterminer le nombre maximum de connexions à WebSocket qui peuvent être ouvertes en même temps. La valeur par défaut est 200.
- La version 8 du protocole WebSocket (comme spécifié par [IETF draft 10](http://tools.ietf.org/html/draft-ietf-hybi-thewebsocketprotocol-10)) est maintenant utilisé à la place de la version 7 du protocole utilisé par Firefox 6.
- L'API WebSocket est maintenant disponible sur Firefox Mobile.

### Console API

- Les messages enregistrés avec `console.log` alors que la [console web](/fr/docs/Tools/Web_Console) n'est pas ouverte sont toujours enregistrés, bien qu'ils ne s'affichent pas lorsque la console web est ouverte.

### Web timing

- Première implémentation de la spécification [Navigation Timing](http://www.w3.org/TR/navigation-timing/) qui fournit des données pouvant être utilisées pour mesurer les performances d'un site.

### XML

- En plus de la précédente prise en charge de `text/xsl`, les feuilles de style XSLT peuvent désormais utiliser les médias Internet officiels (MIME) de type `application/xslt+xml` (dans la [feuille de style d'instruction de traitement](http://www.w3.org/TR/xml-stylesheet/) ou le [champ d'en-tête HTTP Link](http://tools.ietf.org/html/rfc5988)).

## Changements pour les développeurs de Mozilla et de modules complémentaires

Ces changements affectent les développeurs d'extensions ainsi que les développeurs qui travaillent sur ou avec le code de Mozilla lui-même. Les developpeurs d'extensions doivent voir [Updating extensions for Firefox 7](/fr/docs/Firefox/Updating_extensions_for_Firefox_7) pour plus d'informations.

> **Note :** Firefox 7 requiert que les composants binaires soient recompilés, comme pour toutes les versions majeures de Firefox. Pour plus de détails, voir [Interfaces Binaires](/fr/docs/Developer_Guide/Interface_Compatibility#Binary_Interfaces).

### Modules de code JavaScript

#### FileUtils.jsm

- la nouvelle méthode `openFileOutputStream()` ouvre un flux de sortie du fichier, la variante non-sécurisée, pour écrire dedans.

#### AddonManager.jsm

- Le gestionnaire de modules complémentaires a de nouvelles méthodes pour gérer les listes d'extensions qui ont changé durant le démarrage des applications : [`AddonManager.addStarupChange()`](</fr/Add-ons/Add-on_Manager/AddonManager#addStartupChange()>), [`AddonManager.removeStartupChange()`](</fr/Add-ons/Add-on_Manager/AddonManager#removeStartupChange()>) et [`AddonManager.getStartupChanges()`](</fr/Add-ons/Add-on_Manager/AddonManager#getStartupChanges()>).
- .

### XUL

- Les éléments `<tree>` peuvent désormais conserver l'état des triangles d'affichage si les nœuds référencés par les `datasources` ont tous des ID uniques spécifiés par les attributs "id".
- Les éléments `<panel>` peuvent désormais être configurés pour [permettre à l'utilisateur de les faire glisser en cliquant n'importe où sur leur arrière-plan](/fr/docs/XUL/PopupGuide/Panels#Letting_panels_be_dragged_by_grabbing_the_background) avec le nouvel attribut `backdrag`.

### XPCOM

- La nouvelle méthode [`Components.utils.schedulePreciseGC()`](/fr/docs/Components.utils.schedulePreciseGC) vous permet de programmer un cycle approfondi de collection de garbage de se produire à un moment donné lorsqu'aucun code JavaScript n'est exécuté, un rappel est exécuté une fois la collecte terminée.
- La méthode [`Components.utils.unload()`](/fr/docs/Components.utils.unload) vous permet de décharger les modules de code JavaScript déjà chargés en appelant `Components.utils.load()`.

### Rapporteur de mémoire

Ajout du support pour le multi-reporters, c'est le rapporteur de mémoire qui rassemble des données sur demande et effectue un rappel pour chaque résultat généré. Voir `nsIMemoryMultiReporter` et `nsIMemoryMultiReporterCallback` pour les interfaces nécessaires, ainsi que les méthodes `nsIMemoryReporterManager.registerMultiReporter()` et `nsIMemoryReporterManager.unregisterMultiReporter()`.

### Changements de l'expérience utilisateur

- Les options des extensions peuvent désormais être [être affichées à l'intérieur du gestionnaire de modules complémentaires](/fr/docs/Extensions/Inline_Options).
- La destination des téléchargements est désormais gardée en mémoire sur une base site par site. Ces données peuvent être accessibles par [DownloadLastDir.jsm](/fr/docs/JavaScript_code_modules/DownloadLastDir.jsm).

### Changements dans le système de compilation

- L'API d'intégration d'ActiveX n'est plus compilée et son support a été retiré du système de compilation. Des interfaces ont également été supprimées, voir [Interfaces supprimées](#interfaces_supprimées).
- Vous n'avez plus besoin de préciser `-Zc:wchar_t-` lors de la compilation sous Windows. Pour plus de détails, voir [la documentation sur la compilation](/fr/docs/Developer_Guide/Build_Instructions#Build_and_install).

### Changements dans les interfaces

- `nsISocketTransport` offre désormais un nouveau drapeau de connexion : `DISABLE_IPV6`, cela entraîne des tentatives de connexion uniquement aux adresses IPv4, en ignorant toutes les adresses IPv6 disponibles. De plus, `nsIDNSService` offre désormais un nouveau drapeau de résolution : `RESOLVE_DISABLE_IPV6`, ce qui entraîne un résolution des noms de domaine en ne tenant compte que des hôtes IPv4 et en ignorant toutes les adresses IPv6 disponibles. Ces changements permettent d'implémenter la [stratégie "happy eyeballs"](http://tools.ietf.org/html/draft-wing-http-new-tech-00) pour améliorer le temps de réponse lors d'une tentative de connexion sur les hôtes qui supportent à la fois IPv4 et IPv6 (en particulier ceux qui ont brisé la connectivité IPv6).
- `inIDOMUtils` a deux nouvelles méthodes, `inIDOMUtils.getChildrenForNode()` qui renvoie une liste des nœuds enfants d'un noeud et `inIDOMUtils.getUsedFontFaces()` qui renvoie la liste des police de caractères utilisées dans une gamme.
- L'interface `nsIMarkupDocumentViewer_MOZILLA_2_0_BRANCH` a été intégrée dans l'interface `nsIMarkupDocumentViewer`.
- L'interface `nsIDOMWindow2` a été intégrée dans l'interface `nsIDOMWindow`.
- L'interface `nsIDOMWindow_2_0_BRANCH` a été intégrée dans l'interface `nsIDOMWindowInternal`.
- Les méthodes `nsINavHistoryObserver` avec des paramètres d'URI exigent désormais un GUID.
- L'interface `nsISHistory_2_0_BRANCH` a été intégrée dans l'interface `nsISHistory`.
- `nsITelemetry` a une nouvelle méthode, `nsITelemetry.getHistogramById()` qui retourne un histogramme par son ID, et un nouvel attribut `canRecord` qui, lorsqu'il est défini sur `false` désactive l'enregistrement des statistiques de télémétrie. Les statistiques de télémétrie ne sont plus enregistrées lorsque l'on est en mode de navigation privée. (voir [bug Firefox 661574](https://bugzil.la/661574) et [bug Firefox 661573](https://bugzil.la/661573))
  Les histogrammes de télémétrie définis avec `nsITelemetry.newHistogram()` ne seront pas rapportés dans le ping de télémétrie.
- L'interface `nsIMemoryReporter` a été sensiblement modifiée, si vous l'utilisez, vous devez faire quelques ajustements à votre code.
- Les en-têtes `nsIXMLHttpRequest` fixées par `nsIXMLHttpRequest.setRequestHeader()` sont envoyées à la demande lorsque l'on suit une redirection. Auparavant, ces en-têtes n'auraient pas été envoyées.
- `nsIDocShell` a un nouvel attribut `allowWindowControl`. Si il est `true`, le contenu du docshell est autorisé à contrôler la fenêtre (c'est-à-dire la déplacer ou la redimensionner).
- L'interface `nsIThreadInternal2` a été intégrée dans l'interface `nsIThreadInternal`.

#### Nouvelles interfaces

- `nsIDOMFontFace`
  - : Décrit une seule police de caractères.
- `nsIDOMFontFaceList`
  - : Décrit une liste de polices de caractères, chacune représentée par `nsIDOMFontFace`.

#### Interfaces supprimées

Les interfaces suivantes ont été supprimées car elles n'étaient plus indispensables :

- `nsIDOM3Attr`
- `nsIDOM3Node`
- `nsIDOM3TypeInfo`
- `nsIDOM3Text`
- `nsIDOMDocumentStyle`
- `nsIDOMNSDocument`
- `nsIDOMNSFeatureFactory`
- `nsIDOMNSHTMLDocument`
- `nsIDOMNSHTMLFormElement`
- `nsIDOMNSHTMLHRElement`
- `nsIDOMNSHTMLTextAreaElement`

Les interfaces suivantes ont été supprimées dans le cadre du retrait de l'API ActiveX :

- `DITestScriptHelper`
- `DWebBrowserEvents`
- `DWebBrowserEvents2`
- `IDispatch`
- `IMozControlBridge`
- `IMozPluginHostCtrl`
- `IWebBrowser`
- `IWebBrowser2`
- `IWebBrowserApp`
- `IXMLDocument`
- `IXMLElement`
- `IXMLElementCollection`
- `IXMLError`
- `nsIActiveXSecurityPolicy`
- `nsIDispatchSupport`
- `nsIMozAxPlugin`
- `nsIScriptEventHandler`
- `nsIScriptEventManager`

### Autres changements

- La structure de la fenêtre de la bibliothèque (`places.xul`) [a été nettoyée](https://bugzilla.mozilla.org/show_bug.cgi?id=588027). Cela [pourrait casser les extensions](https://bugzilla.mozilla.org/show_bug.cgi?id=677417) et les thèmes
- L'apparence de la fenêtre d'aperçu avant impression [a été modernisé](https://bugzilla.mozilla.org/show_bug.cgi?id=663028) et les auteurs de thèmes sont invités à avoir le même style en utilisant les pseudo-éléments CSS {{cssxref("::-moz-page")}}, {{cssxref("::-moz-page-sequence")}} et {{cssxref("::-moz-scrolled-page-sequence")}}

## Voir aussi

{{Firefox_for_developers('6')}}
