---
title: Firefox 156 note de version pour les développeurs
short-title: Firefox 156
slug: Mozilla/Firefox/Releases/156
l10n:
  sourceCommit: 79f0b295d759e9bb6e3c49197434a1d34c449731
---

Cet article présente les informations concernant les changements de Firefox 156 qui concernent les développeur·euse·s.
Firefox 156 est sorti le [15 septembre 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=156).

## Changements pour les développeur·euse·s web

### Outils de développement

- [L'inspecteur de page <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html) résout désormais les fonctions de substitution — {{CSSxRef("var()")}}, {{CSSxRef("attr()")}}, et {{CSSxRef("env()")}} — lors du calcul des étapes affichées pour une déclaration, de sorte qu'une valeur provenant d'une propriété personnalisée ou d'un attribut est tracée jusqu'à sa source plutôt que d'être affichée non résolue.
  ([bogue Firefox 2041622 <sup>(angl.)</sup>](https://bugzil.la/2041622)).
- La lecture de la taille de la zone d'affichage dans le surligneur de l'inspecteur n'arrondit plus la largeur et la hauteur, ce qui auparavant signalait une taille trompeuse aux niveaux de zoom fractionnaires ou sur les écrans à haute densité.
  ([bogue Firefox 2055445 <sup>(angl.)</sup>](https://bugzil.la/2055445)).
- Les outils de développement peuvent désormais se connecter à un serveur de débogage jusqu'à trois versions plus anciennes que le client, contre la limite précédente. Cela est important lors du débogage à distance d'une version plus ancienne de Firefox ou de GeckoView.
  ([bogue Firefox 2064221 <sup>(angl.)</sup>](https://bugzil.la/2064221)).
- Correction du problème où le surligneur des règles restait visible après avoir été désactivé, lorsque l'inspecteur n'était pas le panneau sélectionné.
  ([bogue Firefox 2063982 <sup>(angl.)</sup>](https://bugzil.la/2063982)).
- Correction du problème où <kbd>F2</kbd> invoquait «&nbsp;Modifier en tant que HTML&nbsp;» sur des nœuds qui ne le supportaient pas, et affichait un contenu obsolète d'une édition précédente.
  ([bogue Firefox 2064213 <sup>(angl.)</sup>](https://bugzil.la/2064213)).
- Correction de la position de la fenêtre bloquante «&nbsp;Paramètres de l'appareil&nbsp;» dans le [mode de conception réactive](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html).
  ([bogue Firefox 2062153 <sup>(angl.)</sup>](https://bugzil.la/2062153)).

### HTML

Pas de changements notables.

### SVG

- Les propriétés {{DOMxRef("MouseEvent.offsetX")}} et {{DOMxRef("MouseEvent.offsetY")}} sont désormais mesurées à partir de l'origine de l'élément {{SVGElement("svg")}} le plus externe pour les évènements ciblant un {{SVGElement("tspan")}}, qui utilisait auparavant la mauvaise origine.
  ([bogue Firefox 2066045 <sup>(angl.)</sup>](https://bugzil.la/2066045)).
- Le mutateur {{DOMxRef("SVGSVGElement.currentScale")}} est désormais une opération nulle sur un élément `<svg>` imbriqué, comme l'exige la spécification. Il continue de fonctionner sur l'élément `<svg>` le plus externe.
  ([bogue Firefox 2063188 <sup>(angl.)</sup>](https://bugzil.la/2063188)).

### CSS

- Le pseudo-élément non standard {{CSSxRef("::-webkit-scrollbar")}} est désormais signalé comme non pris en charge dans les conditions {{CSSxRef("@supports")}} sur tous les sites, donc `@supports selector(::-webkit-scrollbar)` retourne `false` et `@supports not (selector(::-webkit-scrollbar))` retourne `true`. Cela inclut les sites répertoriés dans la préférence `layout.css.fake-webkit-scrollbar.enabled-domains` introduite dans [Firefox 155](/fr/docs/Mozilla/Firefox/Releases/155#css). Firefox agit toujours sur les règles `::-webkit-scrollbar` sur ces sites, mais il ne signale plus le pseudo-élément comme pris en charge. Les sites utilisent cette vérification comme un signal que toute la famille `::-webkit-scrollbar-*` est prise en charge, mais Firefox ne prend pas en charge les autres pseudo-éléments de cette famille. Les sites qui protègent leurs styles de barre de défilement standard derrière `@supports not (selector(::-webkit-scrollbar))` voient désormais ces styles appliqués dans Firefox. ([bogue Firefox 2062782 <sup>(angl.)</sup>](https://bugzil.la/2062782)).
- Les propriétés {{CSSxRef("text-box-trim")}} et {{CSSxRef("text-box-edge")}} sont désormais correctement appliquées dans plusieurs cas qui produisaient auparavant un résultat incorrect&nbsp;:
  le rognage utilise les métriques de police du pseudo-élément {{CSSxRef("::first-line")}} lorsqu'on l'applique ([bogue Firefox 2063835 <sup>(angl.)</sup>](https://bugzil.la/2063835)),
  la ligne correcte est rognée lorsqu'une boîte en incise sur la dernière ligne est fragmentée ([bogue Firefox 2063909 <sup>(angl.)</sup>](https://bugzil.la/2063909)),
  et le rognage sur une boîte en incise ne supprime plus sa bordure et son remplissage ([bogue Firefox 2064596 <sup>(angl.)</sup>](https://bugzil.la/2064596)).
  Notez que {{CSSxRef("text-box-trim")}} n'a toujours aucun effet en combinaison avec {{CSSxRef("line-clamp")}}.
- {{CSSxRef("@supports")}} ne signale plus la prise en charge du pseudo-élément `::-webkit-scrollbar`, donc `@supports selector(::-webkit-scrollbar)` retourne désormais `false`.
  Les sites utilisant couramment cela comme un signal que `::-webkit-scrollbar-thumb` peut être mis en forme, ce que Firefox n'implémente pas, donc prétendre la prise en charge conduit à un style pire que de signaler l'absence de support.
  Utilisez plutôt {{CSSxRef("scrollbar-width")}} et {{CSSxRef("scrollbar-color")}}.
  ([bogue Firefox 2062782 <sup>(angl.)</sup>](https://bugzil.la/2062782)).

### JavaScript

- {{JSxRef("Promise.try()")}} résout désormais la valeur retournée par sa fonction de rappel en utilisant `PromiseResolve`, donc une promesse retournée par la fonction de rappel est transmise telle quelle plutôt que d'être enveloppée dans une nouvelle promesse.
  `Promise.try(() => p)` est désormais la même promesse que `p` lorsque `p` est une promesse native. Cela suit un changement normatif de la spécification.
  ([bogue Firefox 2062293 <sup>(angl.)</sup>](https://bugzil.la/2062293)).
- Les déclarations [`using`](/fr/docs/Web/JavaScript/Reference/Statements/using) ne peuvent plus être réaffectées, conformément à la sémantique de type const requise par la spécification. Auparavant, une telle liaison pouvait être modifiée silencieusement.
  ([bogue Firefox 2040286 <sup>(angl.)</sup>](https://bugzil.la/2040286)).

### Sécurité

- Les groupes Diffie-Hellman à champ fini `ffdhe2048` et `ffdhe3072` ne sont plus proposés par défaut dans les négociations TLS.
  Les serveurs qui ne prennent en charge que ces groupes échouent à négocier une connexion&nbsp;; presque tous les serveurs prennent en charge l'échange de clés ECDHE à la place.
  ([bogue Firefox 1992340 <sup>(angl.)</sup>](https://bugzil.la/1992340)).

### APIs

- {{DOMxRef("SubtleCrypto.deriveBits()")}} lèse désormais une {{JSxRef("TypeError")}} si le paramètre `length` passé est `NaN`, `Infinity`, négatif ou supérieur à 2<sup>32</sup>−1.
  Auparavant, ces valeurs étaient soit acceptées, soit la promesse retournée était rejetée avec une `OperationError`.
  ([bogue Firefox 2065212 <sup>(angl.)</sup>](https://bugzil.la/2065212)).
- {{DOMxRef("Scheduler.yield()")}} hérite désormais de la priorité et du signal d'abandon de la tâche englobante lors d'un `await` qui se résout de manière synchrone, comme une promesse déjà complétée, une valeur non promesse ou un rappel `then()` sur une promesse acquittée.
  Auparavant, la continuation perdait l'état hérité dans ces cas et revenait silencieusement à la priorité par défaut `user-visible`.

#### DOM

- {{DOMxRef("Range.deleteContents()")}} et {{DOMxRef("Range.extractContents()")}} fonctionnent désormais sur l'arbre DOM plutôt que sur l'arbre plat.
  En conséquence, une plage qui s'étend sur une [racine d'ombre](/fr/docs/Web/API/ShadowRoot) supprime et extrait désormais les nœuds requis par la spécification, y compris lorsque la plage commence ou se termine à l'intérieur d'un arbre d'ombre.
  Auparavant, une telle plage pouvait supprimer du contenu à l'intérieur de l'arbre d'ombre tout en laissant en place les enfants non assignés de l'hôte, et {{DOMxRef("Range.extractContents()")}} pouvait lever une exception au lieu de retourner un fragment.
  La même correction s'applique à {{DOMxRef("Selection.deleteFromDocument()")}}.
  ([bogue Firefox 2053997 <sup>(angl.)</sup>](https://bugzil.la/2053997)).

#### Média, WebRTC et Web Audio

- Le membre `alwaysNegotiateDataChannels` de l'objet de configuration passé au constructeur {{DOMxRef("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}} est désormais pris en charge. Lorsqu'il est défini sur `true`, le SDP produit par la connexion inclut toujours une ligne m de canal de données, de sorte que {{DOMxRef("RTCPeerConnection.createDataChannel()")}} peut être appelé ultérieurement sans nécessiter un nouveau cycle de négociation. Le membre a pour valeur par défaut `false`, est retourné par {{DOMxRef("RTCPeerConnection.getConfiguration()")}} et ne peut pas être modifié par {{DOMxRef("RTCPeerConnection.setConfiguration()")}}. ([bogue Firefox 2062561 <sup>(angl.)</sup>](https://bugzil.la/2062561)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### Général

- Marionette et RemoteAgent utilisent désormais tous deux un code de sortie personnalisé (69) lorsque leur serveur ne parvient pas à démarrer. ([bogue Firefox 2040974 <sup>(angl.)</sup>](https://bugzil.la/2040974)).
- Amélioration du minutage des évènements intermédiaires pour les actions d'une durée supérieure à 0, afin de se rapprocher d'un intervalle de 16ms et d'éviter d'influer sur la durée globale même si le processus de contenu est surchargé. ([bogue Firefox 2054442 <sup>(angl.)</sup>](https://bugzil.la/2054442)).

#### WebDriver BiDi

- `browsingContext.startScreencast` utilise désormais un dossier de téléchargement valide et ne doit plus générer d'erreur si le dossier de téléchargement par défaut (`DfltDwnld`) n'est pas disponible. ([bogue Firefox 2066782 <sup>(angl.)</sup>](https://bugzil.la/2066782)).
- Correction du module spécifique à Mozilla `moz:debugging` pour gérer correctement les pauses imbriquées. ([bogue Firefox 2060460 <sup>(angl.)</sup>](https://bugzil.la/2060460)).

#### Marionette

- La commande `WebDriver:GetElementTagName` a été mise à jour pour correspondre aux [derniers changements de spécification <sup>(angl.)</sup>](https://github.com/w3c/webdriver/pull/1968) et retourne désormais le [nom qualifié complet](https://dom.spec.whatwg.org/#concept-element-qualified-name) de l'élément DOM. Cette commande retournait auparavant toujours la valeur en minuscules. En pratique, ce changement est rétrocompatible pour les éléments HTML, mais il constitue un changement non rétrocompatible pour les éléments ayant un nom qualifié sensible à la casse, comme les éléments SVG. ([bogue Firefox 2026697 <sup>(angl.)</sup>](https://bugzil.la/2026697)).

## Changements pour les développeur·euse·s d'extensions

- La clé de manifeste [`theme`](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/theme) ajoute la propriété `backgrounds_area`. Cette propriété permet à un thème de définir où ses images et dégradés d'arrière-plan sont dessinés. La définir sur `"window"` les dessine sur toute la fenêtre du navigateur, tandis que `"top_toolbars"` les limite aux barres d'outils horizontales en haut de la fenêtre. Lorsque `backgrounds_area` est omis ou défini sur `"auto"`, Firefox choisit la zone en fonction de `properties.additional_backgrounds_alignment`. ([bogue Firefox 2059526 <sup>(angl.)</sup>](https://bugzil.la/2059526))

## Fonctionnalités web expérimentales

Ces fonctionnalités sont disponibles dans Firefox 156 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **Registres d'éléments personnalisés à portée limitée** (Nightly)&nbsp;: `dom.scoped-custom-element-registries.enabled`

  Les [registres d'éléments personnalisés à portée limitée](/fr/docs/Web/API/Web_components/Using_custom_elements#registre_déléments_personnalisés_à_portée_limitée) sont désormais pris en charge, de sorte qu'une racine d'ombre peut définir des éléments personnalisés qui ne sont pas en conflit avec ceux définis dans le registre global.
  Cette version active la fonctionnalité par défaut dans les versions Nightly. ([bogue Firefox 2064333 <sup>(angl.)</sup>](https://bugzil.la/2064333)).

- **Requêtes de support de `named-feature()`**&nbsp;: `layout.css.supports.at-rule.enabled`

  La fonction `named-feature()` dans la règle conditionnelle {{CSSxRef("@supports")}} permet de tester si le navigateur prend en charge une fonctionnalité qui n'a pas d'autre syntaxe détectable, par exemple `@supports named-feature(anchor-position-follows-transforms)`.
  ([bogue Firefox 2042977 <sup>(angl.)</sup>](https://bugzil.la/2042977) et [bogue Firefox 2055354 <sup>(angl.)</sup>](https://bugzil.la/2055354)).

- **L'API Container Timing**&nbsp;: `dom.enable_container_timing`

  L'API Container Timing signale quand le contenu d'un élément conteneur est peint, ce qui vous permet de mesurer le temps de rendu d'une région de la page plutôt que de l'ensemble du viewport.
  ([bogue Firefox 1940240 <sup>(angl.)</sup>](https://bugzil.la/1940240)).

- **Éléments MathML `<a>`**&nbsp;: `mathml.a.element.enabled`

  L'élément MathML `<a>` crée un lien hypertexte à partir du contenu MathML, exposant l'interface `MathMLAnchorElement` avec les mêmes propriétés de composant d'URL que les éléments HTML {{HTMLElement("a")}}.
  Cette version ajoute la prise en charge des attributs IDL `rel` et `relList`. ([bogue Firefox 2063819 <sup>(angl.)</sup>](https://bugzil.la/2063819)).
