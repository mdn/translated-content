---
title: Firefox 155 note de version pour les développeurs
short-title: Firefox 155
slug: Mozilla/Firefox/Releases/155
l10n:
  sourceCommit: 1a1ae3db9b94004fef31e64cef0f27c6116356e2
---

Cet article présente les informations concernant les changements de Firefox 155 qui concernent les développeur·euse·s.
Firefox 155 est sorti le [1er septembre 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=155).

## Changements pour les développeur·euse·s web

### Outils de développement

- Les boutons d'émulation des fonctionnalités média dans la [vue Règles <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html) sont désormais regroupés dans un panneau d'émulation dédié, qui s'ouvre en utilisant le bouton `@`.
  Le panneau ajoute également l'émulation de la fonctionnalité média {{CSSxRef("@media/prefers-reduced-motion", "prefers-reduced-motion")}}.
  ([bogue Firefox 1692434 <sup>(angl.)</sup>](https://bugzil.la/1692434) et [bogue Firefox 1477920 <sup>(angl.)</sup>](https://bugzil.la/1477920)).
- [L'observateur JSON <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/json_viewer/index.html) ouvre désormais les documents [JSON Lines <sup>(angl.)</sup>](https://jsonlines.org/) (NDJSON), qui sont servis en tant que `application/jsonl`, `application/jsonlines`, `application/x-ndjson` ou `text/jsonl`, ou qui ont une extension de fichier `.jsonl`.
  Chaque ligne est analysée séparément dans sa propre entrée repliable, étiquetée avec le numéro de ligne dont elle provient, et une ligne qui échoue à être analysée est signalée en incise sans affecter le reste du document.
  ([bogue Firefox 2055774 <sup>(angl.)</sup>](https://bugzil.la/2055774), [bogue Firefox 2060972 <sup>(angl.)</sup>](https://bugzil.la/2060972) et [bogue Firefox 2060529 <sup>(angl.)</sup>](https://bugzil.la/2060529)).
- Un raccourci clavier a été ajouté pour désactiver les points d'arrêt dans le [Débogueur](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html).
  ([bogue Firefox 1642578 <sup>(angl.)</sup>](https://bugzil.la/1642578)).

### HTML

Pas de changements notables.

### CSS

- La fonction CSS {{CSSxRef("attr()")}} peut désormais être utilisée dans n'importe quelle propriété CSS, et pas seulement dans {{CSSxRef("content")}}.
  Cela permet de piloter le style à partir des attributs HTML, par exemple `width: attr(data-size px)`, sans utiliser JavaScript.
  Les valeurs [`<attr-type>`](/fr/docs/Web/CSS/Reference/Values/attr#attr-type) (y compris les identificateurs d'unités tels que `px` et `s`), les [valeurs de repli](/fr/docs/Web/CSS/Reference/Values/attr#fallback-value) et les [attributs avec espace de noms](/fr/docs/Web/CSS/Reference/Values/attr#espaces_de_noms) sont désormais pris en charge.
  Vous pouvez également utiliser `attr()` dans les [requêtes de style de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#requêtes_de_style_de_conteneur).
  ([bogue Firefox 2038940 <sup>(angl.)</sup>](https://bugzil.la/2038940)).
- La fonction CSS {{CSSxRef("progress()")}} est désormais prise en charge.
  Elle retourne un nombre ({{CSSxRef("&lt;number&gt;")}}) représentant l'avancement d'une valeur entre une valeur de départ et une valeur de fin.
  Le résultat peut ensuite être utilisé pour calculer d'autres valeurs, par exemple `opacity: calc(0.4 + progress(100cqw, 300px, 900px) * 0.6)`.
  ([bogue Firefox 2047345 <sup>(angl.)</sup>](https://bugzil.la/2047345)).
- La fonction CSS {{CSSxRef("color_value/alpha", "alpha()")}} est désormais prise en charge.
  Elle permet de passer une couleur et d'obtenir la couleur avec une valeur alpha (transparence) différente, en laissant les autres composants de la couleur inchangés.
  À l'intérieur de la fonction, vous pouvez utiliser le mot-clé `alpha` pour faire référence au canal alpha de la couleur d'origine, par exemple `alpha(from var(--brand) / calc(alpha * 0.5))`.
  ([bogue Firefox 2059738 <sup>(angl.)</sup>](https://bugzil.la/2059738) et [bogue Firefox 2059988 <sup>(angl.)</sup>](https://bugzil.la/2059988)).
- La propriété CSS {{CSSxRef("font-width")}} est désormais prise en charge, ainsi que le descripteur {{CSSxRef("@font-face/font-width", "font-width")}} de {{CSSxRef("@font-face")}} et la propriété `CSSStyleDeclaration.fontWidth`.
  Il s'agit du nouveau nom de la propriété {{CSSxRef("font-stretch")}}, qui continue de fonctionner comme alias hérité.
  Notez que l'énumération des styles calculés retourne désormais `font-width` plutôt que `font-stretch`.
  ([bogue Firefox 1911075 <sup>(angl.)</sup>](https://bugzil.la/1911075)).

### JavaScript

- Les méthodes statiques {{JSxRef("Promise.allKeyed()")}} et {{JSxRef("Promise.allSettledKeyed()")}} sont désormais prises en charge, comme défini dans la [proposition du dictionnaire TC39 await <sup>(angl.)</sup>](https://github.com/tc39/proposal-await-dictionary).
  Elles se comportent comme {{JSxRef("Promise.all()")}} et {{JSxRef("Promise.allSettled()")}}, respectivement, sauf qu'elles prennent un objet de promesses au lieu d'un itérable. Elles se complètent avec un objet ayant les mêmes clés, de sorte que les résultats peuvent être lus par nom plutôt que par position.
  ([bogue Firefox 2057270 <sup>(angl.)</sup>](https://bugzil.la/2057270)).
- Un [module](/fr/docs/Web/JavaScript/Guide/Modules) qui ne parvient pas à se charger en raison d'une erreur réseau ou d'un [type MIME](/fr/docs/Web/HTTP/Guides/MIME_types) incorrect n'est plus mis en cache comme échec, de sorte que l'importation du même spécificateur de module peut réussir une fois que le serveur se rétablit.
  Cela s'applique aux modules JavaScript, [JSON](/fr/docs/Web/JavaScript/Reference/Statements/import/with#json_modules_type_json), [CSS](/fr/docs/Web/JavaScript/Reference/Statements/import/with#css_modules_type_css) et [texte](/fr/docs/Web/JavaScript/Reference/Statements/import/with#text_modules_type_text), chargés soit statiquement, soit avec [import dynamique](/fr/docs/Web/JavaScript/Reference/Operators/import), à la fois dans les fenêtres et les travailleurs (<i lang="en">workers</i> en anglais).
  De même, [`<link rel="modulepreload">`](/fr/docs/Web/HTML/Reference/Attributes/rel/modulepreload) déclenche désormais l'évènement {{DOMxRef("HTMLElement/load_event", "load")}} plutôt que {{DOMxRef("HTMLElement/error_event", "error")}} pour les modules qui ont déjà été récupérés ou qui sont en cours de récupération, et un script de module se charge désormais même si un `modulepreload` précédent du même URL a échoué à sa [vérification d'intégrité](/fr/docs/Web/Security/Defenses/Subresource_Integrity).
  ([bogue Firefox 2055211 <sup>(angl.)</sup>](https://bugzil.la/2055211) et [bogue Firefox 2052949 <sup>(angl.)</sup>](https://bugzil.la/2052949)).

### HTTP

- Firefox utilise désormais [Happy Eyeballs version 3 <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/draft-ietf-happy-happyeyeballs-v3) lors de l'établissement de connexions, en mettant en concurrence les adresses IPv6 et IPv4 afin que la configuration de la connexion ne soit pas retardée par une famille d'adresses inaccessible.
  Notez que cela n'est actuellement pris en charge que sur certaines plateformes.
  ([bogue Firefox 2062892 <sup>(angl.)</sup>](https://bugzil.la/2062892)).
- La négociation de version de {{Glossary("QUIC")}} est désormais prise en charge, permettant aux connexions {{Glossary("HTTP_3", "HTTP/3")}} de négocier la version 2 de QUIC.
  ([bogue Firefox 2059947 <sup>(angl.)</sup>](https://bugzil.la/2059947)).

### APIs

- Diverses fonctionnalités de [l'API WebTransport](/fr/docs/Web/API/WebTransport_API) sont désormais prises en charge&nbsp;:
  - Les groupes d'envoi permettent de regrouper les flux qui doivent partager la bande passante et de prioriser les flux les uns par rapport aux autres au sein d'un groupe.
    Vous pouvez en créer un en utilisant {{DOMxRef("WebTransport.createSendGroup()")}}. Passez ensuite le {{DOMxRef("WebTransportSendGroup")}} retourné dans l'option `sendGroup` de {{DOMxRef("WebTransport.createBidirectionalStream()")}} ou {{DOMxRef("WebTransport.createUnidirectionalStream()")}}.
    ([bogue Firefox 2007165 <sup>(angl.)</sup>](https://bugzil.la/2007165)).
  - La méthode `WebTransport.exportKeyingMaterial()` dérive le matériel de clé à partir de la connexion TLS sous-jacente pour un label et un contexte donnés, de sorte que les deux points de terminaison peuvent obtenir le même secret partagé.
    Cela permet, par exemple, à une poignée de main au niveau de l'application de détecter les attaques MITM dans le cas où une application se connecte à un pair qui ne possède qu'un certificat auto-signé.
    ([bogue Firefox 2007200 <sup>(angl.)</sup>](https://bugzil.la/2007200)).
  - La méthode {{DOMxRef("WebTransportDatagramDuplexStream.createWritable()")}} retourne un flux {{DOMxRef("WebTransportDatagramsWritable")}} pour l'envoi de datagrammes, avec les propriétés {{DOMxRef("WebTransportDatagramsWritable.sendGroup", "sendGroup")}} et {{DOMxRef("WebTransportDatagramsWritable.sendOrder", "sendOrder")}} pour le prioriser par rapport aux autres émetteurs.
    ([bogue Firefox 2007174 <sup>(angl.)</sup>](https://bugzil.la/2007174)).
  - Le constructeur {{DOMxRef("WebTransport.WebTransport", "WebTransport()")}} accepte une option [`protocols`](/fr/docs/Web/API/WebTransport/WebTransport#protocols) listant les protocoles d'application pris en charge par le client.
    Le protocole sélectionné par le serveur, le cas échéant, est retourné dans la propriété {{DOMxRef("WebTransport.protocol")}} lorsque la connexion est établie et que le protocole {{DOMxRef("WebTransport.ready")}} est rempli.
    ([bogue Firefox 2007150 <sup>(angl.)</sup>](https://bugzil.la/2007150)).
  - La propriété {{DOMxRef("WebTransport.draining")}} indique lorsque le serveur a demandé au client de commencer une fermeture en douceur de la session.
    ([bogue Firefox 2007160 <sup>(angl.)</sup>](https://bugzil.la/2007160)).
- [L'API WebGPU](/fr/docs/Web/API/WebGPU_API) prend désormais en charge la fonctionnalité [`dual-source-blending`](/fr/docs/Web/API/GPUSupportedFeatures#fonctionnalités_disponibles) sur le bureau, qui peut être demandée dans {{DOMxRef("GPUAdapter.requestDevice()")}}.
  Cela permet de définir `src1`, `one-minus-src1`, `src1-alpha` et `one-minus-src1-alpha` dans les propriétés [`srcFactor`](/fr/docs/Web/API/GPUDevice/createRenderPipeline#srcfactor) et [`dstFactor`](/fr/docs/Web/API/GPUDevice/createRenderPipeline#dstfactor) de {{DOMxRef("GPUDevice.createRenderPipeline", "createRenderPipeline()")}} et {{DOMxRef("GPUDevice.createRenderPipelineAsync", "createRenderPipelineAsync()")}}. L'extension WGSL `dual_source_blending` est également prise en charge.
  ([bogue Firefox 1924328 <sup>(angl.)</sup>](https://bugzil.la/1924328)).

#### DOM

- L'interface {{DOMxRef("SVGAElement")}} implémente désormais la composante[`HyperlinkElementUtils` <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/links.html#hyperlinkelementutils). En conséquence, les éléments SVG {{SVGElement("a")}} exposent les mêmes propriétés de composant URL que les éléments HTML {{HTMLElement("a")}}&nbsp,: {{DOMxRef("SVGAElement.protocol", "protocol")}}, {{DOMxRef("SVGAElement.username", "username")}}, {{DOMxRef("SVGAElement.password", "password")}}, {{DOMxRef("SVGAElement.host", "host")}}, {{DOMxRef("SVGAElement.hostname", "hostname")}}, {{DOMxRef("SVGAElement.port", "port")}}, {{DOMxRef("SVGAElement.pathname", "pathname")}}, {{DOMxRef("SVGAElement.search", "search")}} et {{DOMxRef("SVGAElement.hash", "hash")}}. La propriété en lecture seule {{DOMxRef("SVGAElement.origin", "origin")}} est également exposée.
  ([bogue Firefox 2058578 <sup>(angl.)</sup>](https://bugzil.la/2058578)).
- Les interfaces {{DOMxRef("SVGNumberList")}}, {{DOMxRef("SVGPointList")}}, {{DOMxRef("SVGStringList")}} et {{DOMxRef("SVGTransformList")}} prennent désormais en charge les accesseurs indexés. Cela signifie que vous pouvez remplacer un élément de la liste en utilisant la notation entre crochets, par exemple `transformList[0] = newTransform`, au lieu d'appeler {{DOMxRef("SVGTransformList.replaceItem", "replaceItem()")}}.
  L'interface {{DOMxRef("SVGLengthList")}} prend déjà en charge les accesseurs indexés.
  ([bogue Firefox 2059426 <sup>(angl.)</sup>](https://bugzil.la/2059426)).
- La méthode {{DOMxRef("SVGGraphicsElement.getBBox()")}} prend désormais en compte son argument [`options`](/fr/docs/Web/API/SVGGraphicsElement/getBBox#options), avec les propriétés `fill`, `stroke`, `markers` et `clipped`.
  Cela permet d'obtenir une boîte englobante qui tient compte du trait, des marqueurs et du découpage appliqués à un élément, plutôt que seulement de sa géométrie de remplissage.
  ([bogue Firefox 2060873 <sup>(angl.)</sup>](https://bugzil.la/2060873)).
- Les éléments qui ne sont pas rendus, tels que ceux à l'intérieur de {{SVGElement("mask")}}, {{SVGElement("clipPath")}}, {{SVGElement("marker")}}, {{SVGElement("symbol")}} et {{SVGElement("defs")}}, retournent désormais un rectangle vide depuis {{DOMxRef("Element.getBoundingClientRect()")}} et une liste vide depuis {{DOMxRef("Element.getClientRects()")}}, au lieu de signaler une boîte qui n'a jamais été peinte.
  ([bogue Firefox 2061646 <sup>(angl.)</sup>](https://bugzil.la/2061646)).

#### Média, WebRTC et Web Audio

- L'évènement {{DOMxRef("RTCDataChannel/error_event", "error")}} déclenché sur un objet {{DOMxRef("RTCDataChannel")}} peut désormais signaler [`sctp-failure`](/fr/docs/Web/API/RTCError/errorDetail#sctp-failure) dans sa propriété {{DOMxRef("RTCError.errorDetail", "error.errorDetail")}} si le transport est fermé en raison d'une erreur.
  De plus, {{DOMxRef("RTCError")}} et {{DOMxRef("RTCErrorEvent")}} sont désormais disponibles dans les travailleurs dédiés (cette exposition n'est pas encore dans la spécification).
  ([bogue Firefox 1814460 <sup>(angl.)</sup>](https://bugzil.la/1814460)).
- La propriété {{DOMxRef("RTCPeerConnection.sctp")}} retourne désormais un {{DOMxRef("RTCSctpTransport")}} aux moments requis par la spécification, y compris dans l'état de signalisation `have-remote-offer`, où elle était auparavant `null`.
  Le transport atteint désormais également les états `connected` et `closed`, et ses propriétés {{DOMxRef("RTCSctpTransport.maxChannels", "maxChannels")}} et {{DOMxRef("RTCSctpTransport.maxMessageSize", "maxMessageSize")}} sont correctement renseignées.
  ([bogue Firefox 2019361 <sup>(angl.)</sup>](https://bugzil.la/2019361) et [bogue Firefox 2056412 <sup>(angl.)</sup>](https://bugzil.la/2056412)).
- Les extensions d'en-tête RTP sur deux octets sont désormais prises en charge, de sorte que les extensions d'en-tête avec un identifiant de 15 ou plus peuvent être négociées au lieu de provoquer une `OperationError`.
  ([bogue Firefox 2014357 <sup>(angl.)</sup>](https://bugzil.la/2014357)).
- La propriété {{DOMxRef("RTCTransportStats.selectedCandidatePairChanges", "selectedCandidatePairChanges")}} est désormais signalée dans {{DOMxRef("RTCTransportStats")}}.
  ([bogue Firefox 2055911 <sup>(angl.)</sup>](https://bugzil.la/2055911)).
- Les statistiques `transport` retournées par {{DOMxRef("RTCPeerConnection.getStats()")}} sont désormais correctes avant la négociation, c'est-à-dire après {{DOMxRef("RTCPeerConnection.setLocalDescription()", "setLocalDescription()")}} mais avant qu'une description distante n'ait été définie.
  La propriété {{DOMxRef("RTCTransportStats.dtlsRole", "dtlsRole")}} est désormais signalée comme `unknown` jusqu'à ce que la poignée de main DTLS sélectionne un rôle, alors qu'auparavant elle n'était pas signalée du tout ([bogue Firefox 2053296 <sup>(angl.)</sup>](https://bugzil.la/2053296)), et la propriété {{DOMxRef("RTCTransportStats.iceState", "iceState")}} commence désormais par `new` plutôt que `checking`, ce qui indiquait à tort que les vérifications de connectivité étaient déjà en cours ([bogue Firefox 2053297 <sup>(angl.)</sup>](https://bugzil.la/2053297)).

### WebAssembly

- La [section d'importation compacte <sup>(angl.)</sup>](https://github.com/WebAssembly/compact-import-section) du format binaire est désormais prise en charge, ce qui réduit la taille des modules ayant de nombreuses instructions [`import`](/fr/docs/WebAssembly/Reference/Definitions/import).
  ([bogue Firefox 2062344 <sup>(angl.)</sup>](https://bugzil.la/2062344)).
- La proposition [d'arithmétique large <sup>(angl.)</sup>](https://github.com/WebAssembly/wide-arithmetic) est désormais prise en charge, ajoutant les instructions [`i64.add128`](/fr/docs/WebAssembly/Reference/Numeric/add128), [`i64.sub128`](/fr/docs/WebAssembly/Reference/Numeric/sub128), [`i64.mul_wide_s`](/fr/docs/WebAssembly/Reference/Numeric/mul_wide_s) et [`i64.mul_wide_u`](/fr/docs/WebAssembly/Reference/Numeric/mul_wide_u).
  Celles-ci produisent des résultats sur 128 bits à partir d'opérandes sur 64 bits, ce qui devait auparavant être émulé dans le code compilé en WebAssembly, comme dans les bibliothèques de grands nombres et de cryptographie.
  ([bogue Firefox 2062374 <sup>(angl.)</sup>](https://bugzil.la/2062374)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### Général

- Désactivation du panneau de téléchargement pour empêcher le document actuel de perdre la sélection lorsqu'un téléchargement commence. ([bogue Firefox 2035439 <sup>(angl.)</sup>](https://bugzil.la/2035439)).
- Correction de l'API Actions afin que l'évènement `dblclick` soit déclenché lors d'un double-clic tout en maintenant la touche `Ctrl` enfoncée sur les plateformes non macOS. ([bogue Firefox 2058556 <sup>(angl.)</sup>](https://bugzil.la/2058556)).

#### WebDriver BiDi

- Mise à jour du module spécifique à Mozilla `moz:debugging` pour ne plus dépendre de la même API de boucle d'évènements imbriquée que les outils de développement, ce qui empêche les conflits lorsque WebDriver BiDi et DevTools sont utilisés en parallèle. ([bogue Firefox 2041335 <sup>(angl.)</sup>](https://bugzil.la/2041335)).
- Correction de la commande `browsingContext.reload` qui échouait lorsqu'elle était utilisée pour des cadres. ([bogue Firefox 2030909 <sup>(angl.)</sup>](https://bugzil.la/2030909)).
- Suppression de la prise en charge de l'argument `contexts` dans la commande `session.unsubscribe`. Désormais, les clients ne peuvent se désabonner que par nom d'évènement ou par ID d'abonnement. ([bogue Firefox 1988723 <sup>(angl.)</sup>](https://bugzil.la/1988723)).

## Fonctionnalités web expérimentales

Ces fonctionnalités sont disponibles dans Firefox 155 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **Animations pilotées par le défilement**&nbsp;: `layout.css.scroll-driven-animations.enabled`

  Les [animations pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations) permettent à une animation de progresser en fonction de la position de défilement d'un conteneur de défilement, ou de la position d'un élément à l'intérieur de son conteneur de défilement, plutôt qu'en fonction du temps.
  Cette préférence couvre les propriétés {{CSSxRef("scroll-timeline")}} et {{CSSxRef("view-timeline")}} ainsi que leurs formes longues, y compris la propriété {{CSSxRef("view-timeline-inset")}}, ainsi que les notations fonctionnelles {{CSSxRef("animation-timeline/scroll", "scroll()")}} et {{CSSxRef("animation-timeline/view", "view()")}}.
  Dans cette version, la forme longue `view-timeline-inset` a été ajoutée au raccourci `view-timeline`. ([bogue Firefox 2046602 <sup>(angl.)</sup>](https://bugzil.la/2046602)).

- **Modèle d'objets typés CSS Niveau 1**&nbsp;: `layout.css.typed-om.enabled`

  [L'API de modèle d'objets typés CSS](/fr/docs/Web/API/CSS_Typed_OM_API) expose les valeurs CSS sous forme d'objets JavaScript typés plutôt que de chaînes de caractères, ce qui simplifie la manipulation du CSS depuis le script. ([bogue Firefox 1278697 <sup>(angl.)</sup>](https://bugzil.la/1278697)).

- **Prise en charge des requêtes `at-rule()`**&nbsp;: `layout.css.supports.at-rule.enabled`

  La fonction [`at-rule()`](/fr/docs/Web/CSS/Reference/At-rules/@supports#at-rule) dans la règle {{CSSxRef("@supports")}} permet de tester si le navigateur prend en charge une règle CSS donnée, par exemple `@supports at-rule(@scope)`. ([bogue Firefox 2060754 <sup>(angl.)</sup>](https://bugzil.la/2060754)).

- **L'API Audio Session**&nbsp;: `dom.audio_session.enabled`

  [L'API Audio Session](/fr/docs/Web/API/Audio_Session_API) permet à un site de déclarer comment son audio doit se comporter par rapport à d'autres audios en cours de lecture sur l'appareil, par exemple s'il doit se mélanger avec, s'atténuer ou interrompre les autres audios. ([bogue Firefox 2055710 <sup>(angl.)</sup>](https://bugzil.la/2055710)).

- **Les formes de base CSS autorisent les mots-clés `farthest-corner` et `closest-corner`**&nbsp;: `layout.css.ellipse-corners.enabled`

  Les mots-clés `farthest-corner` et `closest-corner` peuvent être utilisés pour définir les valeurs des rayons des {{CSSxRef("basic-shape/ellipse", "ellipse()")}} et {{CSSxRef("basic-shape/circle", "circle()")}} formes de base CSS. ([bogue Firefox 2037673 <sup>(angl.)</sup>](https://bugzil.la/2037673)).

- **Tronquer le contenu avec `line-clamp`**&nbsp;: `layout.css.line-clamp.enabled`

  La propriété CSS {{CSSxRef("line-clamp")}} fonctionne sans le préfixe fournisseur `-webkit-`, et prend désormais également en charge le mot-clé `no-ellipsis` et les valeurs `<string>` pour choisir ce qui est affiché là où le texte est tronqué. ([bogue Firefox 2042999 <sup>(angl.)</sup>](https://bugzil.la/2042999) et [bogue Firefox 2043000 <sup>(angl.)</sup>](https://bugzil.la/2043000)).

- **Registres d'éléments personnalisés à portée limitée**&nbsp;: `dom.scoped-custom-element-registries.enabled`

  Un {{DOMxRef("CustomElementRegistry")}} peut être construit et passé à {{DOMxRef("Element.attachShadow()")}}, de sorte qu'une racine d'ombre puisse définir des éléments personnalisés qui ne sont pas en conflit avec ceux définis dans le registre global. ([bogue Firefox 2018900 <sup>(angl.)</sup>](https://bugzil.la/2018900)).
  Cette version ajoute également l'attribut global `customelementregistry`, pour sélectionner le registre auquel un élément est associé à partir du balisage. ([bogue Firefox 2029965 <sup>(angl.)</sup>](https://bugzil.la/2029965)).

- **Assertions de limite de tampon dans les expressions rationnelles**&nbsp;: (Nightly seulement) `javascript.options.experimental.regexp_buffer_boundaries`

  La [proposition TC39 sur les limites de tampon des expressions rationnelles <sup>(angl.)</sup>](https://github.com/tc39/proposal-regexp-buffer-boundaries) ajoute les assertions [`\A`, `\z` et `\Z`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Buffer_boundary_assertion) aux expressions rationnelles. Celles-ci correspondent au début ou à la fin de l'ensemble de l'entrée, que le drapeau {{JSxRef("RegExp/multiline", "m")}} soit défini ou non. ([bogue Firefox 2047706 <sup>(angl.)</sup>](https://bugzil.la/2047706)).

- **Valeur `border-area` pour `background-clip`**&nbsp;: `layout.css.background-clip.border-area.enabled`

  La valeur [`border-area`](/fr/docs/Web/CSS/Reference/Properties/background-clip#border-area) de la propriété CSS {{CSSxRef("background-clip")}} découpe l'arrière-plan jusqu'à la zone peinte par la bordure de l'élément, ce qui permet d'utiliser un dégradé ou une image comme bordure. ([bogue Firefox 2045230 <sup>(angl.)</sup>](https://bugzil.la/2045230)).

- **`view-timeline` inclut `view-timeline-inset`**&nbsp;: `layout.css.scroll-driven-animations.enabled`

  La propriété raccourcie {{CSSxRef("view-timeline")}} prend désormais en charge la propriété {{CSSxRef("view-timeline-inset")}}. Le raccourci permet de définir les valeurs d'encart (ou d'écart) de début et/ou de fin pour ajuster la position de la chronologie dans la progression de la vue. ([bogue Firefox 2046602 <sup>(angl.)</sup>](https://bugzil.la/2046602)).
