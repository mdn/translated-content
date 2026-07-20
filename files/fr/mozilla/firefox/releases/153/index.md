---
title: Firefox 153 note de version pour les développeurs
short-title: Firefox 153
slug: Mozilla/Firefox/Releases/153
l10n:
  sourceCommit: eb6fe94faaedf826c11def7956876403b04199d9
---

Cet article présente les informations concernant les changements de Firefox 153 qui concernent les développeur·euse·s.
Firefox 153 est sorti le [21 juillet 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=153).

## Changements pour les développeur·euse·s web

### Outils de développement

- Les outils de développement fournissent désormais le niveau d'un élément de titre dans le surligneur d'accessibilité et l'arborescence d'accessibilité (auparavant, seul le fait qu'il s'agissait d'un titre était affiché).
  Les informations se trouvent dans le [panneau Inspecteur d'accessibilité](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/index.html).
  ([bogue Firefox 1588784 <sup>(angl.)</sup>](https://bugzil.la/1588784) et [bogue Firefox 2044904 <sup>(angl.)</sup>](https://bugzil.la/2044904)).

### HTML

- Les règles d'analyse HTML pour les éléments {{HTMLElement("select")}} ont été mises à jour pour permettre à tous les éléments imbriqués d'être analysés dans le DOM plutôt que seulement `<option>`, `<optgroup>` et `<hr>`.
  Cela permet un support futur possible des [éléments de sélecteurs personnalisables](/fr/docs/Learn_web_development/Extensions/Forms/Customizable_select).
  ([bogue Firefox 2019977 <sup>(angl.)</sup>](https://bugzil.la/2019977)).
- L'attribut `muted` a maintenant été mis à jour pour les éléments {{HTMLElement("audio", "", "#muted")}} et {{HTMLElement("video", "", "#muted")}} afin de refléter lorsqu'il est ajouté ou supprimé du DOM. Cet attribut correspond désormais également à l'état de la pseudo-classe CSS {{CSSxRef(":muted")}}.
  ([bogue Firefox 2037015 <sup>(angl.)</sup>](https://bugzil.la/2037015)).

### CSS

- Le sélecteur de pseudo-élément {{CSSxRef("::-webkit-scrollbar")}} est désormais reconnu, de sorte que la vérification `@supports selector(::-webkit-scrollbar)` retourne `true`. Notez que cela signale le sélecteur comme pris en charge même si le style des barres de défilement par le biais de `::-webkit-scrollbar` n'est pas réellement implémenté. Cela a été ajouté pour corriger un problème où les barres de défilement des zones défilables imbriquées pouvaient se superposer. Par exemple, lorsqu'une barre de défilement est définie sur `display: none` ou `width: 0`, laissant une partie du contenu inaccessible. ([bogue Firefox 2038877 <sup>(angl.)</sup>](https://bugzil.la/2038877)).

### JavaScript

- La [proposition TC39 d'information Intl.Locale <sup>(angl.)</sup>](https://github.com/tc39/proposal-intl-locale-info) est désormais prise en charge.
  Cela inclut toutes les méthodes d'instance sur `Intl.Locale` qui sont préfixées par «&nbsp;get&nbsp;» — {{JSxRef("Intl/Locale/getCalendars", "getCalendars()")}}, {{JSxRef("Intl/Locale/getCollations", "getCollations()")}}, {{JSxRef("Intl/Locale/getHourCycles", "getHourCycles()")}}, {{JSxRef("Intl/Locale/getNumberingSystems", "getNumberingSystems()")}}, {{JSxRef("Intl/Locale/getTextInfo", "getTextInfo()")}}, {{JSxRef("Intl/Locale/getTimeZones", "getTimeZones()")}} et {{JSxRef("Intl/Locale/getWeekInfo", "getWeekInfo()")}}.
  ([bogue Firefox 2037069 <sup>(angl.)</sup>](https://bugzil.la/2037069)).
- La propriété de données statique {{JSxRef("Error.stackTraceLimit")}} est prise en charge pour définir ou obtenir le nombre maximal de cadres de pile capturés dans une trace de pile d'erreur.
  La définition d'une valeur inférieure à la valeur par défaut peut améliorer les performances.
  ([bogue Firefox 2037856 <sup>(angl.)</sup>](https://bugzil.la/2037856)).
- Les modules de texte peuvent désormais être importés dans une chaîne de caractères à l'aide de [`with { type: "text" }`](/fr/docs/Web/JavaScript/Reference/Statements/import/with#modules_de_texte_type_text).
  Contrairement aux modules JavaScript ou CSS, le type de média de la réponse est ignoré, et le contenu est analysé en tant que texte même si le fichier contient des scripts ou un autre code exécutable.
  ([bogue Firefox 2039881 <sup>(angl.)</sup>](https://bugzil.la/2039881)).
- La syntaxe [`import source`](/fr/docs/Web/JavaScript/Reference/Statements/import/source) (faisant partie de la proposition [TC39 des importations de phase source <sup>(angl.)</sup>](https://github.com/tc39/proposal-source-phase-imports)) est désormais prise en charge.
  Elle est similaire à la déclaration [`import`](/fr/docs/Web/JavaScript/Reference/Statements/import) normale, mais au lieu de charger et d'évaluer un module, elle produit un objet représentant le code source du module qui peut être évalué ultérieurement.
  Notez que cette fonctionnalité n'est pas encore utile pour les développeur·euse·s, car seule la syntaxe est actuellement prise en charge&nbsp;: la représentation source des modules WebAssembly est implémentée séparément et n'est pas encore disponible.
  ([bogue Firefox 2043242 <sup>(angl.)</sup>](https://bugzil.la/2043242)).

### APIs

- Les méthodes {{DOMxRef("IDBObjectStore.getAllRecords()")}} et {{DOMxRef("IDBIndex.getAllRecords()")}} sont désormais prises en charge.
- Elles récupèrent tous les enregistrements (ou un sous-ensemble défini d'enregistrements) d'un magasin d'objets et d'un index, respectivement.
  ([bogue Firefox 1927945 <sup>(angl.)</sup>](https://bugzil.la/1927945)).
- [L'API Picture-in-Picture](/fr/docs/Web/API/Picture-in-Picture_API) est désormais prise en charge sur les plateformes de bureau.
  Elle fournit un mécanisme pratique permettant aux sites Web de basculer l'affichage d'un élément {{HTMLElement("video")}} entre une page et une fenêtre vidéo flottante toujours au premier plan, permettant aux utilisateur·ice·s de continuer à regarder tout en interagissant avec d'autres sites ou applications.
  ([bogue Firefox 1463402 <sup>(angl.)</sup>](https://bugzil.la/1463402)).

#### DOM

- [L'API Popover](/fr/docs/Web/API/Popover_API) a désormais un comportement plus cohérent lorsque les fenêtres contextuelles [`hint` et `auto`](/fr/docs/Web/API/Popover_API/Using#popover_openclose_interaction_rules) sont ouvertes et fermées.
  Cela suit la mise à jour de la spécification dans [whatwg/html#12345 <sup>(angl.)</sup>](https://github.com/whatwg/html/pull/12345).
  ([bogue Firefox 2029974 <sup>(angl.)</sup>](https://bugzil.la/2029974)).

#### Média, WebRTC et Web Audio

- La méthode {{DOMxRef("RTCDtlsTransport.getRemoteCertificates()")}} récupère les certificats utilisés par le pair distant pour sécuriser la communication DTLS.
  Ceux-ci peuvent être utilisés pour l'authentification au niveau de l'application d'un pair distant.
  ([bogue Firefox 1805446 <sup>(angl.)</sup>](https://bugzil.la/1805446)).
- Les méthodes {{DOMxRef("MediaCapabilities.decodingInfo()", "decodingInfo()")}} et {{DOMxRef("MediaCapabilities.encodingInfo()", "encodingInfo()")}} de l'interface {{DOMxRef("MediaCapabilities")}} acceptent désormais le type de configuration `"webrtc"`.
  Cela permet à un site de vérifier si une configuration audio ou vidéo donnée peut être décodée ou encodée à l'aide de WebRTC, et si c'est fluide, économe en énergie ou les deux.
  La prise en charge du type non standard [`transmission`](/fr/docs/Web/API/MediaCapabilities/encodingInfo#transmission), qui était utilisé comme alias de `webrtc`, est supprimée.
  ([bogue Firefox 2037610 <sup>(angl.)</sup>](https://bugzil.la/2037610) et [bogue Firefox 2032075 <sup>(angl.)</sup>](https://bugzil.la/2032075)).
- Toutes les statistiques «&nbsp;transport&nbsp;» WebRTC obligatoires et certaines facultatives peuvent désormais être signalées dans un {{DOMxRef("RTCStatsReport")}}.
  L'objet retourné est un {{DOMxRef("RTCTransportStats")}} avec les propriétés suivantes&nbsp;: {{DOMxRef("RTCTransportStats.dtlsCipher","dtlsCipher")}}, {{DOMxRef("RTCTransportStats.dtlsRole","dtlsRole")}}, {{DOMxRef("RTCTransportStats.dtlsState","dtlsState")}}, {{DOMxRef("RTCTransportStats.iceLocalUsernameFragment","iceLocalUsernameFragment")}}, {{DOMxRef("RTCTransportStats.iceRole","iceRole")}}, {{DOMxRef("RTCTransportStats.iceState","iceState")}}, {{DOMxRef("RTCTransportStats.id","id")}}, {{DOMxRef("RTCTransportStats.selectedCandidatePairId","selectedCandidatePairId")}}, {{DOMxRef("RTCTransportStats.srtpCipher","srtpCipher")}}, {{DOMxRef("RTCTransportStats.timestamp","timestamp")}}, {{DOMxRef("RTCTransportStats.tlsVersion","tlsVersion")}} et {{DOMxRef("RTCTransportStats.type","type")}}.
  De plus, la propriété `transportId` est désormais disponible sur {{DOMxRef("RTCOutboundRtpStreamStats.transportId","RTCOutboundRtpStreamStats")}}, {{DOMxRef("RTCRemoteOutboundRtpStreamStats.transportId","RTCRemoteOutboundRtpStreamStats")}}, {{DOMxRef("RTCRemoteInboundRtpStreamStats.transportId","RTCRemoteInboundRtpStreamStats")}} et {{DOMxRef("RTCInboundRtpStreamStats.transportId","RTCInboundRtpStreamStats")}}.
  ([bogue Firefox 1225723 <sup>(angl.)</sup>](https://bugzil.la/1225723) et [bogue Firefox 2019389 <sup>(angl.)</sup>](https://bugzil.la/2019389)).

### WebAssembly

- L'intégration de Promesse JavaScript (JS-PI) est désormais activée, permettant aux modules [WebAssembly](/fr/docs/WebAssembly) d'inter-opérer avec les API JavaScript asynchrones basées sur les promesses ({{JSxRef("Promise")}}). Cela permet au code WebAssembly de se suspendre en attendant qu'une promesse JavaScript soit résolue et de reprendre lorsque la promesse est réglée. Voir [`WebAssembly.Suspending`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Suspending) pour une explication et un exemple fonctionnel. ([bogue Firefox 2044809 <sup>(angl.)</sup>](https://bugzil.la/2044809)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### Général

- Amélioration des commandes de manipulation de fenêtres dans Marionette et WebDriver BiDi pour permettre l'ajustement indépendant des propriétés géométriques individuelles de la fenêtre, telles que x, y, largeur et hauteur. ([bogue Firefox 1941404 <sup>(angl.)</sup>](https://bugzil.la/1941404)).
- Correction d'un bogue où les commandes de clic et d'action du pointeur pouvaient échouer si le premier DOMRect de l'élément (par exemple, les éléments en ligne s'étendant sur plusieurs lignes) avait une taille nulle. ([bogue Firefox 2038932 <sup>(angl.)</sup>](https://bugzil.la/2038932)).
- Restriction de la navigation vers les pages privilégiées (certaines pages `about:*`, `chrome://` et `resource://`) lors de l'opération dans le contexte du contenu. ([bogue Firefox 1579790 <sup>(angl.)</sup>](https://bugzil.la/1579790)).

#### WebDriver BiDi

- Extension de la commande `emulation.setLocaleOverride` pour appliquer également une émulation de langue aux travailleurs dédiés et partagés. ([bogue Firefox 2015655 <sup>(angl.)</sup>](https://bugzil.la/2015655)).
- Extension de la commande `emulation.setTimezoneOverride` pour appliquer également une émulation de fuseau horaire aux travailleurs dédiés et partagés. ([bogue Firefox 2015657 <sup>(angl.)</sup>](https://bugzil.la/2015657)).
- Mise à jour de la commande `browsingContext.create` pour ne plus émettre les évènements `browsingContext.domContentLoaded` et `browsingContext.load` pour la page initiale `about:blank` lors de la création de nouveaux contextes de navigation de premier niveau, et pour émettre désormais l'évènement `browsingContext.contextCreated` à la fin du processus de création. ([bogue Firefox 1930594 <sup>(angl.)</sup>](https://bugzil.la/1930594)).
- Correction d'un bogue où les fonctions créées par la commande `script.addPreloadScript` pouvaient cesser de fonctionner après plusieurs navigations. ([bogue Firefox 2046390 <sup>(angl.)</sup>](https://bugzil.la/2046390)).

#### Marionette

- Correction de la commande `Take Element Screenshot` de WebDriver Classic pour recadrer les captures d'écran des éléments dépassant la zone d'affichage. ([bogue Firefox 2013176 <sup>(angl.)</sup>](https://bugzil.la/2013176)).
- Correction de la commande `Perform Actions` pour attendre correctement la finalisation des actions internes, évitant ainsi d'éventuelles conditions de concurrence. ([bogue Firefox 2031596 <sup>(angl.)</sup>](https://bugzil.la/2031596)).

## Changements pour les développeur·euse·s d'extensions

- Les extensions nécessitent désormais l'autorisation explicite de l'utilisateur·ice pour accéder aux URL `file://`. Auparavant, l'accès aux fichiers locaux était couvert par l'autorisation d'hôte «&nbsp;Accéder à vos données pour tous les sites web&nbsp;». Ce changement introduit une option distincte «&nbsp;Accéder aux fichiers locaux sur votre ordinateur&nbsp;» dans les paramètres d'autorisations de l'extension (bureau uniquement), et l'accès aux fichiers est désactivé par défaut pour toutes les extensions, y compris celles existantes. La méthode {{WebExtAPIRef("extension.isAllowedFileSchemeAccess()")}} retourne désormais correctement `true` si l'utilisateur·ice a accordé l'accès au schéma de fichiers&nbsp;; auparavant, Firefox retournait toujours `false`. De plus, l'appel de {{WebExtAPIRef("devtools.inspectedWindow.eval()")}} sur les URL `file://` nécessite désormais cette autorisation. ([bogue Firefox 2034168 <sup>(angl.)</sup>](https://bugzil.la/2034168))
- Prise en charge de la méthode {{WebExtAPIRef("userScripts.execute()")}}, permettant aux extensions d'injecter des scripts utilisateur·ice à la demande dans un onglet ou un cadre. Contrairement à {{WebExtAPIRef("userScripts.register()")}}, cette méthode prend en charge l'injection ponctuelle de plusieurs sources de scripts exécutées dans un ordre défini. ([bogue Firefox 1930776 <sup>(angl.)</sup>](https://bugzil.la/1930776))
- Prise en charge de l'API {{WebExtAPIRef("publicSuffix")}}, permettant aux extensions de déterminer le domaine enregistrable (eTLD+1) et le suffixe public d'un nom d'hôte à l'aide de la [liste des suffixes publics <sup>(angl.)</sup>](https://publicsuffix.org/) intégrée au navigateur. L'API fournit trois méthodes synchrones&nbsp;: {{WebExtAPIRef("publicSuffix.isKnownSuffix()")}}, {{WebExtAPIRef("publicSuffix.getKnownSuffix()")}} et {{WebExtAPIRef("publicSuffix.getDomain()")}}. ([bogue Firefox 1315558 <sup>(angl.)</sup>](https://bugzil.la/1315558))
- Les scripts de contenu des extensions peuvent désormais lire et modifier les feuilles de style construites dans {{DOMxRef("document.adoptedStyleSheets")}} et {{DOMxRef("ShadowRoot.adoptedStyleSheets")}}, sans `.wrappedJSObject`. ([bogue Firefox 1751346 <sup>(angl.)</sup>](https://bugzil.la/1751346))
- Ajout de `documentId` à une gamme d'API WebExtension, y compris une nouvelle méthode {{WebExtAPIRef("runtime.getDocumentId()")}}, des évènements et méthodes {{WebExtAPIRef("webNavigation")}}, des évènements {{WebExtAPIRef("webRequest")}}, des cibles d'injection de scripts et des API de messagerie. Voir [Travailler avec documentId](/fr/docs/Mozilla/Add-ons/WebExtensions/Work_with_documentId) pour la liste complète des évènements et méthodes pris en charge, ainsi que des conseils sur l'utilisation de `documentId`. ([bogue Firefox 1891478 <sup>(angl.)</sup>](https://bugzil.la/1891478))
- Pour les identités contextuelles (conteneurs)&nbsp;:
  - Ajout des méthodes {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} et {{WebExtAPIRef("contextualIdentities.getSupportedIcons()")}} pour récupérer les couleurs et icônes prises en charge, évitant ainsi la nécessité de coder en dur ces valeurs. ([bogue Firefox 2044712 <sup>(angl.)</sup>](https://bugzil.la/2044712))
  - Mise à jour des couleurs disponibles. `"turquoise"` est renommé en `"cyan"`, `"toolbar"` est renommé en `"gray"` et `"violet"` est ajouté. Les anciens noms `"turquoise"` et `"toolbar"` sont acceptés pour la compatibilité descendante. Pour éviter de coder en dur les noms de couleurs, utilisez {{WebExtAPIRef("contextualIdentities.getSupportedColors()")}} pour récupérer les couleurs disponibles. ([bogue Firefox 2044354 <sup>(angl.)</sup>](https://bugzil.la/2044354))

## Fonctionnalités web expérimentales

Ces fonctionnalités sont disponibles dans Firefox 153 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **Prise en charge des images JPEG XL** (Nightly)&nbsp;: `image.jxl.enabled`

  Le décodeur d'images [JPEG XL <sup>(angl.)</sup>](https://jpeg.org/jpegxl/) basé sur Rust est désormais activé par défaut dans Nightly. ([bogue Firefox 2040074 <sup>(angl.)</sup>](https://bugzil.la/2040074)).

- **Fonctions CSS de comptage d'arbres**&nbsp;: `layout.css.tree-counting-functions.enabled`

  Les fonctions {{CSSxRef("sibling-count")}} et {{CSSxRef("sibling-index")}} sont désormais prises en charge. La fonction `sibling-count()` retourne le nombre d'éléments voisins ainsi que l'élément lui-même. La fonction `sibling-index()` retourne l'index de l'élément par rapport à ses voisins, en commençant à `1` et non à `0`.
  ([bogue Firefox 2042063 <sup>(angl.)</sup>](https://bugzil.la/2042063)).

- **Mise à jour des attributs des ressources externes**&nbsp;: `layout.css.link-parameters.enabled`

  La propriété CSS {{CSSxRef("link-parameters")}} et la fonction CSS {{CSSxRef("param()")}} sont désormais prises en charge. Cela permet à l'utilisateur·ice de mettre à jour les attributs des ressources externes, telles que les SVG, dont les attributs sont définis avec la fonction CSS {{CSSxRef("env()")}}. Cela signifie qu'une seule ressource externe peut être utilisée plutôt que de créer plusieurs variantes qui n'ont que des couleurs ou d'autres valeurs différentes. ([bogue Firefox 2046153 <sup>(angl.)</sup>](https://bugzil.la/2046153)).

- **Les formes de base CSS autorisent les mots-clés `farthest-corner` et `closest-corner`** (Nightly)&nbsp;: `layout.css.ellipse-corners.enabled`

  Les mots-clés `farthest-corner` et `closest-corner` peuvent désormais être utilisés pour définir les valeurs des rayons des formes de base CSS [`ellipse()`](/fr/docs/Web/CSS/Reference/Values/basic-shape/ellipse) et [`circle()`](/fr/docs/Web/CSS/Reference/Values/basic-shape/circle).
  ([bogue Firefox 2037673 <sup>(angl.)</sup>](https://bugzil.la/2037673)).
