---
title: Firefox 150 note de version pour les développeurs
short-title: Firefox 150
slug: Mozilla/Firefox/Releases/150
l10n:
  sourceCommit: 674d6c8868cde1654eaba3c285afde9d3b60ce9f
---

Cet article présente les informations concernant les changements de Firefox 150 qui concernent les développeur·euse·s.
Firefox 150 est sorti le [21 avril 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=150).

## Changements pour les développeur·euse·s web

### Outils de développement

- Un message spécifique est désormais affiché dans [_l'onglet Réponse_ du panneau Réseau <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/request_details/index.html#response-tab) pour indiquer pourquoi il n'y a pas de données de réponse lorsqu'une requête a été redirigée.
  ([bogue Firefox 2016679 <sup>(angl.)</sup>](https://bugzil.la/2016679)).
- Une nouvelle section «&nbsp;Pseudo-classes spécifiques aux éléments&nbsp;» a été ajoutée au [panneau de bascule des pseudo-classes <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes), incluant une bascule pour la pseudo-classe {{CSSxRef(":open")}}, qui n'est disponible que pour les éléments ayant un état ouvert comme les éléments `<dialog>`. La bascule existante pour la pseudo-classe {{CSSxRef(":visited")}} a également été déplacée, car elle ne s'applique qu'aux éléments `<a>` et `<area>`. ([bogue Firefox 2014442 <sup>(angl.)</sup>](https://bugzil.la/2014442)).

### HTML

- Le mot-clé `"auto"` est désormais pris en charge comme option pour l'attribut [`sizes`](/fr/docs/Web/HTML/Reference/Elements/img#sizes) des éléments `<img>` (et [`HTMLImageElement.sizes`](/fr/docs/Web/API/HTMLImageElement/sizes)).
  Cela permet aux éléments `<img>` chargés paresseusement d'utiliser la taille de mise en page de l'image calculée, après l'application de tout CSS, pour sélectionner l'image à afficher à partir d'un [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset).
  Cela est plus simple que de définir des conditions de média et leurs tailles associées dans l'attribut, ce qui duplique probablement le comportement déjà capturé dans les requêtes média CSS.
  ([bogue Firefox 1819581 <sup>(angl.)</sup>](https://bugzil.la/1819581)).

### CSS

- La fonction CSS [`color-mix()`](/fr/docs/Web/CSS/Reference/Values/color_value/color-mix) accepte désormais plusieurs valeurs [`<color>`](/fr/docs/Web/CSS/Reference/Values/color_value), et pas seulement deux. Cela permet de mélanger un nombre quelconque de couleurs. ([bogue Firefox 2024171 <sup>(angl.)</sup>](https://bugzil.la/2024171)).

- La fonction CSS [`light-dark()`](/fr/docs/Web/CSS/Reference/Values/color_value/light-dark) accepte désormais des valeurs [`<image>`](/fr/docs/Web/CSS/Reference/Values/image). Cela permet d'utiliser des images, des dégradés, etc. pour différents schémas de couleurs. ([bogue Firefox 2023569 <sup>(angl.)</sup>](https://bugzil.la/2023569)).

- Les pseudo-classes basées sur les médias {{CSSxRef(":buffering")}}, {{CSSxRef(":muted")}}, {{CSSxRef(":paused")}}, {{CSSxRef(":playing")}}, {{CSSxRef(":seeking")}}, {{CSSxRef(":stalled")}} et {{CSSxRef(":volume-locked")}} sont désormais prises en charge. Elles permettent de mettre en forme les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}} en fonction de leur état actuel, comme en lecture ou en pause. ([bogue Firefox 2020775 <sup>(angl.)</sup>](https://bugzil.la/2020775)).

- Les propriétés {{CSSxRef("animation-range-start")}} et {{CSSxRef("animation-range-end")}} (ainsi que la propriété abrégée {{CSSxRef("animation-range")}}) sont désormais prises en charge. Ces propriétés définissent le début et la fin de la plage d'attachement d'une animation le long de sa chronologie, ce qui vous permet de contrôler à quel moment de la chronologie d'une [animation pilotée par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations) va commencer et se terminer. ([bogue Firefox 1825427 <sup>(angl.)</sup>](https://bugzil.la/1825427)).

- Le mot-clé CSS {{CSSxRef("revert-rule")}} est désormais pris en charge. Il permet de déterminer la valeur d'une propriété comme si la règle de style actuelle n'avait pas été présente, de sorte que la valeur d'une autre règle correspondante puisse s'appliquer à la place. ([bogue Firefox 2017307 <sup>(angl.)</sup>](https://bugzil.la/2017307)).

- La propriété CSS {{CSSxRef("overscroll-behavior")}} (et ses propriétés longues {{CSSxRef("overscroll-behavior-x")}}, {{CSSxRef("overscroll-behavior-y")}}, {{CSSxRef("overscroll-behavior-block")}} et {{CSSxRef("overscroll-behavior-inline")}}) s'applique désormais correctement aux conteneurs de défilement qui n'ont pas de débordement défilable, comme les éléments avec `overflow: hidden`. Auparavant, la propriété était ignorée sur de tels éléments. ([bogue Firefox 1837436 <sup>(angl.)</sup>](https://bugzil.la/1837436)).

### JavaScript

Pas de changements notables.

### APIs

- La méthode {{DOMxRef("Sanitizer.replaceElementWithChildren()")}} retourne désormais `false` si l'élément à remplacer est {{HTMLElement("html")}} dans [l'espace de noms HTML](/fr/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace).
  En d'autres termes, vous ne pouvez pas utiliser cette méthode pour créer un {{DOMxRef("Sanitizer")}} qui remplacera l'élément `<html>` par son contenu interne. ([bogue Firefox 2022176 <sup>(angl.)</sup>](https://bugzil.la/2022176)).

#### DOM

- L'argument [`options.shadowRoots`](/fr/docs/Web/API/Document/caretPositionFromPoint#shadowroots) de la méthode {{DOMxRef('Document.caretPositionFromPoint()')}} est désormais pris en charge.
  Cela permet à la méthode de retourner le nœud contenant le curseur à l'intérieur d'un DOM d'ombre, à condition que son {{DOMxRef("ShadowRoot")}} associé ait été passé en option.
  ([bogue Firefox 1914596 <sup>(angl.)</sup>](https://bugzil.la/1914596)).

- L'interface {{DOMxRef("CSSFontFaceDescriptors")}} est désormais prise en charge, et une instance de ce type est retournée par la propriété {{DOMxRef("CSSFontFaceRule.style")}}. ([bogue Firefox 2019904 <sup>(angl.)</sup>](https://bugzil.la/2019904)).

- La méthode non standard {{DOMxRef("Document/caretRangeFromPoint","caretRangeFromPoint()")}} de l'interface {{DOMxRef("Document")}} est désormais prise en charge. ([bogue Firefox 1550635 <sup>(angl.)</sup>](https://bugzil.la/1550635)).

- La méthode `ariaNotify()` est désormais prise en charge sur les interfaces {{DOMxRef("Document/ariaNotify","Document")}} et {{DOMxRef("Element/ariaNotify","Element")}}.
  Cela permet de mettre en file d'attente une chaîne de texte à annoncer par un {{Glossary("screen reader", "lecteur d'écran")}}, offrant une alternative plus ergonomique et fiable aux [régions ARIA dynamiques](/fr/docs/Web/Accessibility/ARIA/Guides/Live_regions).
  ([bogue Firefox 2018095 <sup>(angl.)</sup>](https://bugzil.la/2018095)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### Général

- Correction d'un problème où la fermeture du navigateur avec des téléchargements en attente pouvait être bloquée par une invite. L'invite est désormais rejetée automatiquement. ([bogue Firefox 2003840 <sup>(angl.)</sup>](https://bugzil.la/2003840)).

#### WebDriver BiDi

- Ajout de la commande `emulation.setNetworkConditions`, qui prend en charge le type `offline` pour le moment. Cela permet d'émuler le mode hors ligne soit sur des contextes de navigation spécifiques, sur des contextes utilisateur (a.k.a. conteneurs) ou globalement. ([bogue Firefox 1993079 <sup>(angl.)</sup>](https://bugzil.la/1993079)).
- Amélioration de la prise en charge des valeurs d'en-tête non UTF-8 dans toutes les commandes et évènements du module `network`. Elles sont désormais correctement sérialisées en `BytesValue`. ([bogue Firefox 1994996 <sup>(angl.)</sup>](https://bugzil.la/1994996)).
- Correction d'un bogue pour les évènements de téléchargement déclenchés par une réponse avec l'en-tête "Content-Disposition". Ces évènements ne comportaient pas la propriété `navigation` si le téléchargement était initié par un lien avec `target="_blank"`. ([bogue Firefox 1999481 <sup>(angl.)</sup>](https://bugzil.la/1999481)).
- Mise à jour de l'évènement `log.entryAdded` pour qu'il ne soit émis que pour les appels à l'API console qui affichent réellement un message dans les outils de développement du navigateur (voir également la spécification de la console&nbsp;: [utilisation de l'imprimante <sup>(angl.)</sup>](https://console.spec.whatwg.org/#printer)). Avec ce changement, l'utilisation de `console.clear` ou `console.time` ne déclenche plus d'évènement. ([bogue Firefox 1866749 <sup>(angl.)</sup>](https://bugzil.la/1866749)).
- Correction d'une condition de concurrence avec la commande `browsingContext.setViewport` qui pouvait entraîner un dépassement de délai si plusieurs contextes étaient créés en parallèle. ([bogue Firefox 2019511 <sup>(angl.)</sup>](https://bugzil.la/2019511)).
- Amélioration de la commande `browsingContext.locateNodes` pour permettre de récupérer l'élément HTML (`documentElement`) d'une page lors de l'utilisation du localisateur `css`. ([bogue Firefox 2020578 <sup>(angl.)</sup>](https://bugzil.la/2020578)).

#### Marionette

- Correction de la commande `WebDriver:getShadowRoot` pour qu'elle ne retourne plus les racines d'ombre spécifiques à l'agent utilisateur. ([bogue Firefox 2016741 <sup>(angl.)</sup>](https://bugzil.la/2016741)).

## Changements pour les développeur·euse·s d'extensions

- Le comportement de {{WebExtAPIRef("tabs.move")}} est mis à jour pour les vues scindées afin que&nbsp;:
  - L'ordre des onglets dans une vue scindée puisse être échangé. ([bogue Firefox 2016762 <sup>(angl.)</sup>](https://bugzil.la/2016762))
  - Lorsque la liste des onglets inclut à la fois des onglets de vue scindée et place un ou plusieurs onglets entre eux, les onglets sont déplacés et la vue scindée est fermée. ([bogue Firefox 2022549 <sup>(angl.)</sup>](https://bugzil.la/2022549))
- Les documents d'extension peuvent désormais utiliser [l'API Web Authentication](/fr/docs/Web/API/Web_Authentication_API) et affirmer un [ID de partie de confiance (RP ID)](/fr/docs/Web/API/PublicKeyCredentialCreationOptions#rp) pour tout domaine couvert par les [autorisations d'hôte](/fr/docs/Mozilla/Add-ons/WebExtensions/manifest.json/host_permissions) de l'extension. Cela signifie que {{DOMxRef("CredentialsContainer.create()", "navigator.credentials.create()")}} et {{DOMxRef("CredentialsContainer.create()", "navigator.credentials.get()")}} peuvent définir un RP ID correspondant à un domaine autorisé, permettant aux extensions de créer et de récupérer des informations d'identification WebAuthn au nom des services web. Voir [Utiliser l'API Web Authn dans les extensions web](/fr/docs/Mozilla/Add-ons/WebExtensions/Use_the_web_authn_api) pour plus de détails. ([bogue Firefox 1956484 <sup>(angl.)</sup>](https://bugzil.la/1956484)).
- Résolution d'un problème avec certains appels JavaScript [`import`](/fr/docs/Web/JavaScript/Reference/Statements/import) échouant à importer du CSS. ([bogue Firefox 2016369 <sup>(angl.)</sup>](https://bugzil.la/2016369))

## Fonctionnalités web expérimentales

Ces fonctionnalités sont livrées dans Firefox 150 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **Attributs avec espace de noms dans la fonction CSS `attr()`**&nbsp;: `layout.css.attr.enabled`

  La fonction CSS {{CSSxRef("attr()")}} prend désormais en charge [les attributs avec espace de noms](/fr/docs/Web/CSS/Reference/Values/attr#namespaces). Cela vous permet de prendre des attributs d'éléments de langages basés sur [XML](/fr/docs/Web/XML), tels que [SVG](/fr/docs/Web/SVG) et de les mettre en forme en conséquence. ([bogue Firefox 2014060 <sup>(angl.)</sup>](https://bugzil.la/2014060))

- **Requêtes `@container style()`** (Nightly)&nbsp;: `layout.css.style-queries.enabled`

  La règle CSS [`@container`](/fr/docs/Web/CSS/Reference/At-rules/@container) prend en charge les requêtes [`style()`](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#conteneurs_de_requêtes_de_style). Cela a été mis à jour pour prendre en charge l'imbrication des requêtes `style()`. ([bogue Firefox 2014098 <sup>(angl.)</sup>](https://bugzil.la/2014098)).

- **Les éléments positionnés en absolu dans les conteneurs à colonnes multiples et lors de l'impression**&nbsp;: `layout.abspos.fragmentainer-aware-positioning.enabled`

  Les éléments positionnés en absolu à l'intérieur des [conteneurs à colonnes multiples](/fr/docs/Web/CSS/Guides/Multicol_layout) et lors de l'impression sont désormais correctement positionnés et fragmentés. Cela améliore l'interopérabilité avec d'autres navigateurs et empêche les problèmes de mise en page tels que le chevauchement du texte ou la perte de contenu. ([bogue Firefox 2018797 <sup>(angl.)</sup>](https://bugzil.la/2018797)).

- **Registres d'éléments personnalisés à portée limitée**&nbsp;: `dom.scoped-custom-element-registries.enabled`

  La propriété {{DOMxRef("CustomElementRegistry","customElementRegistry")}} est prise en charge sur {{DOMxRef("Document")}}, {{DOMxRef("Element")}} et {{DOMxRef("ShadowRoot")}}.
  Cela permet la définition de [registres d'éléments personnalisés à portée limitée](/fr/docs/Web/API/Web_components/Using_custom_elements#registres_déléments_personnalisés_à_portée_limitée).
  ([bogue Firefox 2018900 <sup>(angl.)</sup>](https://bugzil.la/2018900)).

- **Tableaux associatifs d'importations multiples**&nbsp;: `dom.multiple_import_maps.enabled`

  Les [tableaux associatifs d'importations multiples](/fr/docs/Web/HTML/Reference/Elements/script/type/importmap#fusion_de_plusieurs_tableaux_associatifs_dimport) offrent aux développeur·euse·s plus de flexibilité lors de la structuration et du chargement des modules JavaScript.
  ([bogue Firefox 1916277 <sup>(angl.)</sup>](https://bugzil.la/1916277)).
