---
title: Firefox 151 note de version pour les développeurs
short-title: Firefox 151
slug: Mozilla/Firefox/Releases/151
l10n:
  sourceCommit: 0b214cbce88da71a9d4470364e378285c2a921a5
---

Cet article présente les informations concernant les changements de Firefox 151 qui concernent les développeur·euse·s.
Firefox 151 est sorti le [19 mai 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=151).

## Changements pour les développeur·euse·s web

### HTML

- [L'attribut `shadowrootslotassignment`](/fr/docs/Web/HTML/Reference/Elements/template#shadowrootslotassignment) est désormais pris en charge sur les éléments {{HTMLElement("template")}}, permettant une définition déclarative du comportement d'attribution des emplacements pour les racines d'ombre.
  L'attribut est reflété en JavaScript par {{DOMxRef("ShadowRoot.slotAssignment")}} ou {{DOMxRef("HTMLTemplateElement.shadowRootSlotAssignment")}}
  ([bogue Firefox 2031295 <sup>(angl.)</sup>](https://bugzil.la/2031295), [bogue Firefox 2023824 <sup>(angl.)</sup>](https://bugzil.la/2023824)).

### CSS

- La règle CSS [`@container`](/fr/docs/Web/CSS/Reference/At-rules/@container) prend en charge les requêtes [`style()`](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#requêtes_de_style_de_conteneur). Cela permet de vérifier si un conteneur possède une déclaration CSS valide, une propriété CSS ou une propriété personnalisée, et d'appliquer des styles à ses enfants en conséquence. ([bogue Firefox 2016929 <sup>(angl.)</sup>](https://bugzil.la/2016929), [bogue Firefox 2019254 <sup>(angl.)</sup>](https://bugzil.la/2019254), [bogue Firefox 2024601 <sup>(angl.)</sup>](https://bugzil.la/2024601), [bogue Firefox 2030645 <sup>(angl.)</sup>](https://bugzil.la/2030645)).

- La propriété CSS {{CSSxRef("position-anchor")}} prend désormais en charge la valeur `normal` (par défaut). Cela permet de faire correspondre la propriété {{CSSxRef("position-area")}}, donc si la propriété `position-area` est mise à jour, la propriété `position-anchor` l'est également. ([bogue Firefox 2030351 <sup>(angl.)</sup>](https://bugzil.la/2030351)).

### JavaScript

Pas de changements notables.

### APIs

- La méthode {{DOMxRef("Sanitizer.replaceElementWithChildren()")}} retourne désormais `false` si l'élément à remplacer est {{SVGElement("svg")}} dans [l'espace de nom](/fr/docs/Web/API/Sanitizer/replaceElementWithChildren#namespace) SVG ou {{MathMLElement("math")}} dans l'espace de noms MathML (rejoignant {{HTMLElement("html")}}, qui était interdit dans [Firefox 150](/fr/docs/Mozilla/Firefox/Releases/150#apis)).
  ([bogue Firefox 2032359 <sup>(angl.)</sup>](https://bugzil.la/2032359)).
- [L'API Document Picture-in-Picture](/fr/docs/Web/API/Document_Picture-in-Picture_API) est désormais prise en charge sur les plateformes de bureau.
  Cela permet d'ouvrir une [fenêtre toujours au premier plan](/fr/docs/Web/API/Document_Picture-in-Picture_API#comment_ça_fonctionne) qui peut être remplie avec du contenu HTML arbitraire.
  Elle peut être utilisée pour afficher tout contenu qu'un·e utilisateur·trice peut vouloir voir séparément de la page de lancement (ou même du navigateur), comme un ensemble de flux montrant les participants d'un appel de visioconférence, un ticker boursier ou un compte à rebours.
  ([bogue Firefox 2006594 <sup>(angl.)</sup>](https://bugzil.la/2006594)).
- La propriété {{DOMxRef("CanvasRenderingContext2D.lang")}} est prise en charge pour définir la langue du contexte de dessin du canevas.
  Bien qu'un canevas DOM puisse hériter de ce contexte à partir de l'attribut `lang` de son élément {{HTMLElement("canvas")}} associé, c'est utile pour définir le contexte pour un canevas hors écran, qui peut être rendu avant d'être associé à un `<canvas>`.
  ([bogue Firefox 1943070 <sup>(angl.)</sup>](https://bugzil.la/1943070)).
- La propriété [`options.keyboardLock`](/fr/docs/Web/API/Element/requestFullscreen#keyboardlock) peut désormais être passée en option à {{DOMxRef("Element.requestFullscreen()")}}, permettant aux sites Web de demander le verrouillage du clavier lorsque l'élément est affiché en mode plein écran.
  Cela empêche la touche <kbd>Esc</kbd> de faire quitter le mode plein écran (une pression longue est requise à la place), et certaines touches de raccourci du navigateur autrefois réservées peuvent désormais être interceptées et leur action par défaut empêchée.
  ([bogue Firefox 2032302 <sup>(angl.)</sup>](https://bugzil.la/2032302)).
- La propriété {{DOMxRef("CanvasRenderingContext2D.lang")}} est désormais prise en charge, permettant de définir et de modifier explicitement la langue de rendu d'un canevas hors écran après la création du contexte de rendu.
  ([bogue Firefox 1943070 <sup>(angl.)</sup>](https://bugzil.la/1943070)).
- Les propriétés `maxStorageBuffersInFragmentStage`, `maxStorageBuffersInVertexStage`, `maxStorageTexturesInFragmentStage` et `maxStorageTexturesInVertexStage` sont désormais prises en charge sur {{DOMxRef("GPUSupportedLimits")}}, définissant le nombre maximum de tampons et de textures de stockage autorisés dans les étapes de shader de fragment et de vertex.
  ([bogue Firefox 2006720 <sup>(angl.)</sup>](https://bugzil.la/2006720)).
- La propriété {{DOMxRef("CSSContainerRule.conditions")}} est désormais prise en charge, reflétant la prise en charge de la règle `@container` pour plusieurs conditions de conteneur séparées par des virgules.
  La propriété `condition` reflète un `@container` correspondant sous forme de tableau d'objets, chaque objet représentant une seule condition de conteneur.
  ([bogue Firefox 2022827 <sup>(angl.)</sup>](https://bugzil.la/2022827)).
- [L'API Web Serial](/fr/docs/Web/API/Web_Serial_API) est prise en charge sur les plateformes de bureau, permettant le contrôle des microcontrôleurs qui prennent en charge les communications série.
  Cela permet, par exemple, de programmer des microcontrôleurs et des cartes de développement, tels que les appareils ESP, BBCmicro:bit et Raspberry Pi Picos, les imprimantes 3D et les machines CNC, ainsi que d'autres appareils pris en charge.
  L'utilisation de l'API nécessite que les utilisateur·ice·s du site Web installent un [module complémentaire de permission de site généré de manière synthétique](https://support.mozilla.org/fr/kb/modules-complementaires-autorisations-site) — c'est la même approche utilisée pour gérer en toute sécurité l'accès à WebMIDI.
  ([bogue Firefox 2029625 <sup>(angl.)</sup>](https://bugzil.la/2029625)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### Général

- Ajout de la prise en charge de `altitudeAngle` et `azimuthAngle` aux actions de pointeur de sous-type `touch`. Ces propriétés permettent de simuler des interactions tactiles avec des données d'orientation angulaire précises, en définissant l'angle auquel un pointeur entre en contact avec une surface et sa direction de rotation. ([bogue Firefox 2022644 <sup>(angl.)</sup>](https://bugzil.la/2022644)).
- Correction d'un bogue où les exceptions DOM `UnknownError` provenant des pages de contenu étaient incorrectement traitées comme des erreurs internes de WebDriver. ([bogue Firefox 2032387 <sup>(angl.)</sup>](https://bugzil.la/2032387)).

#### WebDriver BiDi

- Implémentation de la commande `browser.setClientWindowState`. Cette commande permet aux clients de modifier l'état de la fenêtre du navigateur au niveau du système d'exploitation, comme maximisée, minimisée, en plein écran ou normale. Elle permet également de repositionner et de redimensionner la fenêtre. ([bogue Firefox 1855028 <sup>(angl.)</sup>](https://bugzil.la/1855028)).
- Ajout de la prise en charge des domaines de travail (pour les travailleurs dédiés, partagés et de service) dans la commande `script.getRealms`. La commande retourne désormais des informations sur les domaines pour les scripts de travailleurs en plus des contextes de fenêtre. ([bogue Firefox 2016097 <sup>(angl.)</sup>](https://bugzil.la/2016097)).
- Inclusion de la trame de pile la plus haute dans les évènements `log.entryAdded` pour tous les messages de l'API Console. ([bogue Firefox 1941813 <sup>(angl.)</sup>](https://bugzil.la/1941813)).
- Amélioration du champ `text` de l'évènement `log.entryAdded` pour mieux s'aligner sur le comportement des outils de développement de Firefox et l'implémentation de WebDriver BiDi de Google Chrome. ([bogue Firefox 2005054 <sup>(angl.)</sup>](https://bugzil.la/2005054)).
- Correction des cookies des évènements réseau pour inclure toutes les propriétés, pas seulement `name` et `value`. ([bogue Firefox 1887118 <sup>(angl.)</sup>](https://bugzil.la/1887118)).
- Correction du délai d'attente de la commande `network.getData` pour les redirections. ([bogue Firefox 2009916 <sup>(angl.)</sup>](https://bugzil.la/2009916)).
- Correction de la commande `browsingContext.reload` ne réinitialisant pas l'emplacement d'un cadre imbriqué avec une navigation en cours. ([bogue Firefox 2023917 <sup>(angl.)</sup>](https://bugzil.la/2023917)).
- Suppression de la capacité `proxy` vide de la réponse de la commande `session.new` lorsqu'aucun mandataire n'est défini. ([bogue Firefox 1916463 <sup>(angl.)</sup>](https://bugzil.la/1916463)).

#### Marionette

- Activation du repositionnement de la fenêtre du navigateur sur Linux Wayland en mode sans tête. ([bogue Firefox 2023978 <sup>(angl.)</sup>](https://bugzil.la/2023978)).

## Changements pour les développeur·euse·s d'extensions

- L'évènement {{WebExtAPIRef("webRequest.onErrorOccurred")}} se rabat désormais sur `NS_ERROR_NET_ON_RECEIVING_FROM` au lieu d'une chaîne de caractères commençant par `NS_ERROR_NET_ON_` ou `NS_ERROR_NET_UNKNOWN_`. Ce changement fait partie des améliorations de performance et de fiabilité de l'évènement `onErrorOccurred`. ([bogue Firefox 1881986 <sup>(angl.)</sup>](https://bugzil.la/1881986))
- {{WebExtAPIRef("tabs.group()")}} et {{WebExtAPIRef("tabs.ungroup()")}} ajoutent et suppriment désormais correctement une vue fractionnée lorsqu'un appel inclut l'un des onglets de la vue fractionnée. Auparavant, un appel échouait ou séparait la vue fractionnée. ([bogue Firefox 2029099 <sup>(angl.)</sup>](https://bugzil.la/2029099))
- {{WebExtAPIRef("tabs.move()")}} déplace désormais correctement une vue fractionnée vers la droite lorsqu'un appel inclut l'un des onglets de la vue fractionnée. Auparavant, un appel ne déplaçait une vue fractionnée que vers la gauche ou à la fin de la liste des onglets. ([bogue Firefox 2027855 <sup>(angl.)</sup>](https://bugzil.la/2027855))

## Fonctionnalités web expérimentales

Ces fonctionnalités sont livrées dans Firefox 151 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **`@container style()` range syntax queries**: `layout.css.attr.enabled`

  La règle CSS [`@container`](/fr/docs/Web/CSS/Reference/At-rules/@container) avec la fonction [`style()`](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#requêtes_de_style_de_conteneur) prend désormais en charge la _syntaxe de plage_. Cela permet de vérifier si un conteneur possède une propriété CSS personnalisée valide et de comparer sa valeur avec des opérateurs de comparaison tels que `>`, `<`, `>=` et `<=`, puis d'appliquer des styles à ses enfants en conséquence. ([bogue Firefox 2024601 <sup>(angl.)</sup>](https://bugzil.la/2024601)).

- **Propriété `field-sizing`**&nbsp;: `layout.css.field-sizing.enabled`

  La propriété CSS {{CSSxRef("field-sizing")}} permet de contrôler le comportement de dimensionnement des éléments de contrôle de formulaire. Cette propriété a deux valeurs&nbsp;: `content` permet aux éléments de s'ajuster en taille pour s'adapter à leur contenu, et `fixed` définit une taille fixe pour les éléments. ([bogue Firefox 1977176 <sup>(angl.)</sup>](https://bugzil.la/1977176)).

- **Désactiver l'attribut `href` de MathML sur les éléments qui ne sont pas des `<a>`**&nbsp;: `mathml.href_link_on_non_anchor_element.disabled`

  Lorsqu'elle est activée, l'attribut universel [`href`](/fr/docs/Web/MathML/Reference/Global_attributes/href) ne crée plus de lien hypertexte sur les éléments MathML autres que `<a>`, conformément à la [spécification MathML Core <sup>(angl.)</sup>](https://w3c.github.io/mathml-core/#the-a-element). ([bogue Firefox 2026848 <sup>(angl.)</sup>](https://bugzil.la/2026848)).

- **Correction des zones défilables imbriquées**&nbsp;: `layout.css.fake-webkit-scrollbar.enabled`

  Cette implémentation a été ajoutée afin de corriger un problème où le contenu défilable était inaccessible. Si une barre de défilement est définie sur `display: none;` ou `width: 0;`, alors les barres de défilement des zones défilables imbriquées se superposeraient, ce qui signifie qu'une partie du contenu peut être inaccessible. ([bogue Firefox 1977511 <sup>(angl.)</sup>](https://bugzil.la/1977511)).

- **Valeurs `<timeline-range-name>`**&nbsp;: `layout.css.scroll-driven-animations.enabled`

  Les propriétés CSS {{CSSxRef("animation-range-start")}}, {{CSSxRef("animation-range-end")}} et la propriété raccourcie {{CSSxRef("animation-range")}} prennent désormais en charge les valeurs [`<timeline-range-name>`](/fr/docs/Web/CSS/Reference/Values/timeline-range-name). Ces valeurs [`<timeline-range-name>`](/fr/docs/Web/CSS/Guides/Scroll-driven_animations/Timeline_range_names#timeline_range_names) permettent de préciser dans quel segment une animation déclenchée par le défilement se déroule. ([bogue Firefox 1804775 <sup>(angl.)</sup>](https://bugzil.la/1804775)).

- **Méthodes GeometryUtils&nbsp;: `convertPointFromNode()`, `convertRectFromNode()` et `convertQuadFromNode()`**&nbsp;: `layout.css.convertFromNode.enabled`

  Les méthodes GeometryUtils&nbsp;: `convertPointFromNode()`, `convertRectFromNode()` et `convertQuadFromNode()` ne sont plus activées par défaut dans Firefox Nightly. ([bogue Firefox 2026051 <sup>(angl.)</sup>](https://bugzil.la/2026051)).

- **Méthodes GeometryUtils&nbsp;: `getBoxQuads()`**&nbsp;: `layout.css.getBoxQuads.enabled`

  Les méthodes GeometryUtils&nbsp;: `getBoxQuads()` ne sont plus activées par défaut dans Firefox Nightly. ([bogue Firefox 2026051 <sup>(angl.)</sup>](https://bugzil.la/2026051)).
