---
title: Firefox 7 note de version pour les développeurs
short-title: Firefox 7
slug: Mozilla/Firefox/Releases/7
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

Firefox 7, basé sur Gecko 7.0, est sorti le 27 septembre 2011. Cet article fournit des informations à propos des changements qui affectent les développeur·euse·s dans cette version.

## Changements pour les développeur·euse·s Web

### HTML

- La propriété `profile` de {{DOMxRef("HTMLHeadElement")}} a été supprimée, cette propriété est obsolète depuis Gecko 2.0.
- Les propriétés `x` et `y` de {{DOMxRef("HTMLImageElement")}} ont été supprimées.
- Le paramètre `before` de la méthode `add()` de {{DOMxRef("HTMLSelectElement")}} est désormais optionnel.
- L'attribut [`background`](/fr/docs/Web/HTML/Reference/Elements/body#background) de l'élément {{HTMLElement("body")}} n'est plus résolu en tant qu'URI, ce qui est conforme à la spécification HTML courante.
- L'attribut [`label`](/fr/docs/Web/HTML/Reference/Elements/option#label) de l'élément {{HTMLElement("option")}} reflète désormais la valeur du contenu texte de l'élément si l'attribut n'est pas défini.

#### Canvas

- Dans le cadre du [projet Azure <sup>(angl.)</sup>](https://web.archive.org/web/20160304084025/https://blog.mozilla.org/joe/2011/04/26/introducing-the-azure-project/), le Backend Azure Direct2D [a été implémenté <sup>(angl.)</sup>](https://bugzil.la/651858) et améliore considérablement les performances des canvas 2D.
- La spécification de valeurs invalides lors de l'appel de `setTransform()`, `bezierCurveTo()` ou `arcTo()` ne retourne plus d'exception, ces appels sont à présent ignorés silencieusement.
- La méthode {{DOMxRef("CanvasRenderingContext2D.isPointInPath", "isPointInPath()")}} considère maintenant correctement la matrice de transformation lors de la comparaison du point défini au tracé en cours.
- L'appel de `strokeRect()` avec une largeur et une hauteur de zéro n'a désormais plus aucun effet.
- L'appel de {{DOMxRef("CanvasRenderingContext2D.drawImage", "drawImage()")}} avec une largeur ou hauteur {{HTMLElement("canvas")}} de zéro lance désormais `INVALID_STATE_ERR`.
- L'appel de {{DOMxRef("CanvasRenderingContext2D.drawImage", "drawImage()")}} avec des coordonnées non-finies ne retourne plus d'exception.
- La méthode `toDataURL()` accepte désormais un second paramètre pour contrôler la qualité JPEG.
- La prise en charge des opérations non-standards `clear` et `over` de `globalCompositeOperation` a été enlevée.
- [Les ombres](/fr/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors#ombres) sont désormais uniquement dessinées pour les opérations de composition de `source-over`.
- Vous pouvez désormais configurer la règle de remplissage utilisé par la toile en définissant [l'attribut](/fr/docs/Web/API/CanvasRenderingContext2D#attributs) `mozFillRule` au contexte.
- La prise en charge des attributs expérimentaux `mozDash`, `mozDashOffset`, `mozCurrentTransform` et `mozCurrentTransformInverse` a été ajoutée.
- La prise en charge des méthodes non-standards `mozDrawText()`, `mozMeasureText()`, `mozPathText()` et `mozTextAlongPath()` a été retirée.

### CSS

- {{CSSxRef("text-overflow")}} est désormais pris en charge.
- La propriété {{CSSxRef("-moz-orient")}} a été corrigée pour que les éléments {{HTMLElement("progress")}} qui sont orientés verticalement aient des dimensions par défaut appropriées.

### MathML

- XLink href a été rétabli et l'attribut `href` de MathML3 est désormais pris en charge. Les développeur·euse·s sont encouragé·e·s à passer à la dernière syntaxe.
- Le support de l'attribut `voffset` sur les éléments {{MathMLElement("mpadded")}} a été ajouté et le comportement de l'attribut `lspace` a été fixé.
- L'élément de premier niveau {{MathMLElement("math")}} accepte maintenant tous les attributs de l'élément {{MathMLElement("mstyle")}}.
- Le support des polices [Asana Math <sup>(angl.)</sup>](https://www.ctan.org/tex-archive/fonts/Asana-Math/) a été ajouté.
- L'épaisseur des lignes `medium` des barres de fraction des éléments {{MathMLElement("mfrac")}} a été corrigé pour correspondre à l'épaisseur par défaut.
- [Les noms des espaces négatifs](/fr/docs/Web/MathML/Reference/Values#constantes) sont maintenant supportés.

### DOM

- Les méthodes non-standards `getAsBinary()`, `getAsDataURL()` et `getAsText()` de l'interface {{DOMxRef("File")}} ont été supprimées ainsi que les propriétés non-standards `fileName` et `fileSize`.
- L'interface {{DOMxRef("XMLHttpRequest/FormData", "FormData")}} ne signale plus le nom du fichier comme une chaîne de caractères vide lors de l'envoi l'en-tête HTTP `Content-Disposition` si les données ont été définies à l'aide de {{DOMxRef("Blob")}}. Cela corrige les erreurs qui avaient lieu sur certains serveurs.
- L'attribut {{DOMxRef("HTMLElement.dir")}} retourne désormais toujours son résultat en minuscules, comme l'exige la spécification HTML.
- la méthode `readAsArrayBuffer()` de {{DOMxRef("FileReader")}} est maintenant implémentée.
- La propriété `Document.createEntityReference` a été retiré. Elle n'a jamais été correctement implémentée et n'est pas intégrée dans la plupart des autres navigateurs.
- `document.normalizeDocument` a été retiré. Utilisez {{DOMxRef("Node.normalize")}} à la place.
- {{DOMxRef("DOMTokenList.item")}} retourne désormais `undefined` si `index` est en dehors des limites, auparavant il retournait `null`.
- `Node.getFeature` a été supprimé.
- Les interfaces `HTMLInsElement` et `HTMLDelElement` ont été retirées, depuis que les éléments {{HTMLElement("ins")}} et {{HTMLElement("del")}} utilisent l'interface {{DOMxRef("HTMLModElement")}}.
- Dans le but d'être conforme à la prochaine spécification [DOM4 <sup>(angl.)</sup>](https://www.w3.org/TR/dom/) où {{DOMxRef("Attr")}} n'hérite plus de {{DOMxRef("Node")}} (il l'a fait dans les DOM Core 1, 2 and 3), beaucoup de propriétés et méthodes de {{DOMxRef("Node")}} sur l'interface {{DOMxRef("Attr")}} sont maintenant des rapports d'alertes que nous nous efforçons de retirer dans une version ultérieure.
- Ajout du support des propriétés {{DOMxRef("window.ondeviceorientation")}} et {{DOMxRef("window.ondevicemotion")}} sur les objets {{DOMxRef("window")}}.
- {{DOMxRef("window.resizeTo")}}, {{DOMxRef("window.resizeBy")}}, {{DOMxRef("window.moveTo")}} et {{DOMxRef("window.moveBy")}} ne s'appliquent plus à la fenêtre principale.

### JavaScript

- La propriété `Function.arity` a été enlevée, utilisez {{JSxRef("Function.length")}} à la place.

### WebSockets

- la préférence `network.websocket.max-connections` est utilisée pour déterminer le nombre maximum de connexions à WebSocket qui peuvent être ouvertes en même temps. La valeur par défaut est 200.
- La version 8 du protocole WebSocket (comme défini par [le brouillon IETF 10 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/draft-ietf-hybi-thewebsocketprotocol-10)) est maintenant utilisé à la place de la version 7 du protocole utilisé par Firefox 6.
- L'API WebSocket est maintenant disponible sur Firefox Mobile.

### L'API Console

- Les messages enregistrés avec `console.log` alors que la [console web <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html) n'est pas ouverte sont toujours enregistrés, bien qu'ils ne s'affichent pas lorsque la console web est ouverte.

### Web timing

- Première implémentation de la spécification [Navigation Timing](/fr/docs/Web/API/Performance_API/Navigation_timing) qui fournit des données pouvant être utilisées pour mesurer les performances d'un site.

### XML

- En plus de la précédente prise en charge de `text/xsl`, les feuilles de style XSLT peuvent désormais utiliser les médias Internet officiels (MIME) de type `application/xslt+xml` (dans la [feuille de style d'instruction de traitement <sup>(angl.)</sup>](https://www.w3.org/TR/xml-stylesheet/) ou le [champ d'en-tête HTTP Link <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc5988)).

## Changements pour les développeur·euse·s de Mozilla et de modules complémentaires

Ces changements affectent les développeur·euse·s d'extensions ainsi que les développeur·euse·s qui travaillent sur ou avec le code de Mozilla lui-même. Les développeur·euse·s d'extensions doivent voir [Mise à jour des extensions pour Firefox 7](/fr/docs/Mozilla/Firefox/Releases/7/Updating_extensions) pour plus d'informations.

> [!NOTE]
> Firefox 7 requiert que les composants binaires soient recompilés, comme pour toutes les versions majeures de Firefox.

### Modules de code JavaScript

#### FileUtils.jsm

- la nouvelle méthode `openFileOutputStream()` ouvre un flux de sortie du fichier, la variante non-sécurisée, pour écrire dedans.

#### AddonManager.jsm

- Le gestionnaire de modules complémentaires a de nouvelles méthodes pour gérer les listes d'extensions qui ont changé durant le démarrage des applications&nbsp;: `AddonManager.addStartupChange()`, `AddonManager.removeStartupChange()` et `AddonManager.getStartupChanges()`.

### XUL

- Les éléments `<tree>` peuvent désormais conserver l'état des triangles d'affichage si les nœuds référencés par les `datasources` ont tous des ID uniques définis par les attributs `id`.
- Les éléments `<panel>` peuvent désormais être configurés pour permettre à l'utilisateur·ice de les faire glisser en cliquant n'importe où sur leur arrière-plan avec le nouvel attribut `backdrag`.

### XPCOM

- La nouvelle méthode `Components.utils.schedulePreciseGC()` vous permet de programmer un cycle approfondi de collecte de miettes de se produire à un moment donné lorsqu'aucun code JavaScript n'est exécuté, un rappel est exécuté une fois la collecte terminée.
- La méthode `Components.utils.unload()` vous permet de décharger les modules de code JavaScript déjà chargés en appelant `Components.utils.load()`.

### Rapporteur de mémoire

Ajout du support pour le multi-reporters, c'est le rapporteur de mémoire qui rassemble des données sur demande et effectue un rappel pour chaque résultat généré. Voir `nsIMemoryMultiReporter` et `nsIMemoryMultiReporterCallback` pour les interfaces nécessaires, ainsi que les méthodes `nsIMemoryReporterManager.registerMultiReporter()` et `nsIMemoryReporterManager.unregisterMultiReporter()`.

### Changements de l'expérience utilisateur·ice

- Les options des extensions peuvent désormais être être affichées à l'intérieur du gestionnaire de modules complémentaires.
- La destination des téléchargements est désormais gardée en mémoire sur une base site par site. Ces données peuvent être accessibles par `DownloadLastDir.jsm`.

### Changements dans le système de compilation

- L'API d'intégration d'ActiveX n'est plus compilée et son support a été retiré du système de compilation. Des interfaces ont également été supprimées, voir [Interfaces supprimées](#interfaces_supprimées).
- Vous n'avez plus besoin de préciser `-Zc:wchar_t-` lors de la compilation sous Windows. Pour plus de détails, voir la documentation sur la compilation.

### Changements dans les interfaces

- `nsISocketTransport` offre désormais un nouveau drapeau de connexion&nbsp;: `DISABLE_IPV6`, cela entraîne des tentatives de connexion uniquement aux adresses IPv4, en ignorant toutes les adresses IPv6 disponibles. De plus, `nsIDNSService` offre désormais un nouveau drapeau de résolution&nbsp;: `RESOLVE_DISABLE_IPV6`, ce qui entraîne un résolution des noms de domaine en ne tenant compte que des hôtes IPv4 et en ignorant toutes les adresses IPv6 disponibles. Ces changements permettent d'implémenter la [stratégie «&nbsp;<i lang="en">happy eyeballs</i>&nbsp;» <sup>(angl.)</sup>](https://tools.ietf.org/html/draft-wing-http-new-tech-00) pour améliorer le temps de réponse lors d'une tentative de connexion sur les hôtes qui supportent à la fois IPv4 et IPv6 (en particulier ceux qui ont brisé la connectivité IPv6).
- `inIDOMUtils` a deux nouvelles méthodes, `inIDOMUtils.getChildrenForNode()` qui retourne une liste des nœuds enfants d'un nœud et `inIDOMUtils.getUsedFontFaces()` qui retourne la liste des police de caractères utilisées dans une gamme.
- L'interface `nsIMarkupDocumentViewer_MOZILLA_2_0_BRANCH` a été intégrée dans l'interface `nsIMarkupDocumentViewer`.
- L'interface `nsIDOMWindow2` a été intégrée dans l'interface `nsIDOMWindow`.
- L'interface `nsIDOMWindow_2_0_BRANCH` a été intégrée dans l'interface `nsIDOMWindowInternal`.
- Les méthodes `nsINavHistoryObserver` avec des paramètres d'URI exigent désormais un GUID.
- L'interface `nsISHistory_2_0_BRANCH` a été intégrée dans l'interface `nsISHistory`.
- `nsITelemetry` a une nouvelle méthode, `nsITelemetry.getHistogramById()` qui retourne un histogramme par son ID, et un nouvel attribut `canRecord` qui, lorsqu'il est défini sur `false` désactive l'enregistrement des statistiques de télémétrie. Les statistiques de télémétrie ne sont plus enregistrées lorsque l'on est en mode de navigation privée. (voir [bogue Firefox 661574 <sup>(angl.)</sup>](https://bugzil.la/661574) et [bogue Firefox 661573 <sup>(angl.)</sup>](https://bugzil.la/661573))
  Les histogrammes de télémétrie définis avec `nsITelemetry.newHistogram()` ne sont pas rapportés dans le Ping de télémétrie.
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

Les interfaces suivantes ont été supprimées, car elles n'étaient plus indispensables&nbsp;:

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

Les interfaces suivantes ont été supprimées dans le cadre du retrait de l'API ActiveX&nbsp;:

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

- La structure de la fenêtre de la bibliothèque (`places.xul`) [a été nettoyée <sup>(angl.)</sup>](https://bugzil.la/588027). Cela [peut casser les extensions <sup>(angl.)</sup>](https://bugzil.la/677417) et les thèmes
- L'apparence de la fenêtre d'aperçu avant impression [a été modernisé <sup>(angl.)</sup>](https://bugzil.la/663028) et les auteur·ice·s de thèmes sont invités à avoir le même style en utilisant les pseudo-éléments CSS `::-moz-page`, `::-moz-page-sequence` et `::-moz-scrolled-page-sequence`.
