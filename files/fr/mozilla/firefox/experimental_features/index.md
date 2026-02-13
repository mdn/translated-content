---
title: Fonctionnalités expérimentales dans Firefox
short-title: Fonctionnalités expérimentales
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: f9531e19140a5e164fb05a036995f582c378b2d4
---

Cette page répertorie les fonctionnalités expérimentales et partiellement implémentées de Firefox, y compris les standards de la plateforme web en évolution ou proposés.
Chaque entrée ci-dessous inclut des informations sur les versions dans lesquelles une fonctionnalité est présente (Nightly, Beta, Developer Edition ou Release), si elle est activée par défaut ou non, ainsi que le nom de la **préférence** que vous pouvez utiliser pour activer ou configurer la fonctionnalité.
La description de chaque fonctionnalité inclut également des liens vers les [bugs Bugzilla <sup>(angl.)</sup>](https://bugzilla.mozilla.org) qui implémentent ou activent la fonctionnalité.
Ces informations vous permettent d'essayer des fonctionnalités expérimentales et de donner votre avis avant leur sortie officielle.

Concernant le cycle de vie, les nouvelles fonctionnalités apparaissent généralement d'abord dans [Nightly](https://www.firefox.com/fr/channel/desktop/#nightly), où elles sont souvent activées par défaut pour recueillir des retours précoces et effectuer des tests.
Si aucun problème majeur n'est détecté, elles sont incluses dans les versions préliminaires [Beta](https://www.firefox.com/fr/channel/desktop/#beta) et [Developer Edition](https://www.firefox.com/fr/channel/desktop/developer/). Enfin, les fonctionnalités validées sont intégrées dans le canal [Release stable](https://www.firefox.com/fr/).
Lorsqu'une fonctionnalité est activée par défaut dans une version stable, elle n'est plus considérée comme expérimentale et est retirée de cette page.

Pour activer ces fonctionnalités, saisissez `about:config` dans la barre d'adresse de Firefox, recherchez la **préférence** associée et modifiez sa valeur, qui correspond généralement à un basculement entre `true` et `false`.
Selon la fonctionnalité, il peut être nécessaire de redémarrer le navigateur pour que la modification prenne effet.
Consultez l'article d'aide [Éditeur de configuration de Firefox](https://support.mozilla.org/fr/kb/about-config-editor-firefox) pour plus d'informations sur la gestion des préférences dans Firefox.

## HTML

### Disposition pour les champs `input type="search"`

La mise en forme des éléments `input type="search"` a été mise à jour. Il y a désormais une icône qui apparaît après une saisie pour permettre d'effacer le champ, afin de rejoindre le comportement des autres navigateurs. (Voir [le bogue Firefox 558594 <sup>(angl.)</sup>](https://bugzil.la/558594) pour plus de détails.)

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 81                     | Non                 |
| Developer Edition | 81                     | Non                 |
| Beta              | 81                     | Non                 |
| Release           | 81                     | Non                 |

- `layout.forms.input-type-search.enabled`
  - : Mettre sur `true` pour activer.

### Afficher ou masquer le mot de passe

Les éléments de saisie de mot de passe HTML ([`<input type="password">`](/fr/docs/Web/HTML/Reference/Elements/input/password)) incluent une icône en forme d'œil qui peut être utilisée pour afficher ou masquer le texte du mot de passe ([le bogue Firefox 502258 <sup>(angl.)</sup>](https://bugzil.la/502258) pour plus de détails.)

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 96                     | Non                 |
| Developer Edition | 96                     | Non                 |
| Beta              | 96                     | Non                 |
| Release           | 96                     | Non                 |

- `layout.forms.reveal-password-button.enabled`
  - : Mettre sur `true` pour activer.

### Sélecteur d'heure dans les éléments `datetime-local` et `time`

Les éléments HTML [`<input type="datetime-local">`](/fr/docs/Web/HTML/Reference/Elements/input/datetime-local) et [`<input type="time">`](/fr/docs/Web/HTML/Reference/Elements/input/time) prennent en charge un sélecteur d'heure. (Voir [le bogue Firefox 1726108 <sup>(angl.)</sup>](https://bugzil.la/1726108) pour plus de détails.)

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 144                    | Non                 |
| Developer Edition | 144                    | Non                 |
| Beta              | 144                    | Non                 |
| Release           | 144                    | Non                 |

- `dom.forms.datetime.timepicker`
  - : Mettre sur `true` pour activer.

## CSS

### Affichage des caractères de contrôle (rectangle avec valeur hexadécimale)

Cette fonctionnalité affiche les caractères de contrôle (catégorie Unicode Cc) autres que _tab_ (`U+0009`), _saut de ligne_ (`U+000A`), _saut de page_ (`U+000C`) et _retour chariot_ (`U+000D`) sous la forme d'un rectangle avec leur valeur hexadécimale à l'intérieur lorsque ces caractères sont inattendus. (Voir [le bogue Firefox 1099557 <sup>(angl.)</sup>](https://bugzil.la/1099557) pour plus de détails.)

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 43                     | Oui                 |
| Developer Edition | 43                     | Non                 |
| Beta              | 43                     | Non                 |
| Release           | 43                     | Non                 |

- `layout.css.control-characters.visible`
  - : Mettre sur `true` pour activer.

### Propriété `initial-letter`

La propriété CSS {{CSSxRef("initial-letter")}} fait partie du module de spécification [CSS3 Inline <sup>(angl.)</sup>](https://drafts.csswg.org/css-inline/) et permet d'indiquer l'élévation (entre autres) des lettres initiales. (Voir [le bogue Firefox 1223880 <sup>(angl.)</sup>](https://bugzil.la/1223880) pour plus de détails.)

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 50                     | Non                 |
| Developer Edition | 50                     | Non                 |
| Beta              | 50                     | Non                 |
| Release           | 50                     | Non                 |

- `layout.css.initial-letter.enabled`
  - : Mettre sur `true` pour activer.

### Fonction `fit-content()`

La fonction {{CSSxRef("fit-content()")}} appliquée à {{CSSxRef("width")}} et aux autres propriétés de dimensionnement. Cette fonction est déjà bien prise en charge pour le dimensionnement des pistes de la mise en page CSS Grid. (Voir [le bogue Firefox 1312588 <sup>(angl.)</sup>](https://bugzil.la/1312588) pour plus de détails.)

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 91                     | Non                 |
| Developer Edition | 91                     | Non                 |
| Beta              | 91                     | Non                 |
| Release           | 91                     | Non                 |

- `layout.css.fit-content-function.enabled`
  - : Mettre sur `true` pour activer.

### Animations pilotées par le défilement

Auparavant appelées «&nbsp;animations liées au défilement&nbsp;», les [animations pilotées par le défilement](/fr/docs/Web/CSS/Guides/Scroll-driven_animations) dépendent de la position de la barre de défilement plutôt que du temps ou d'une autre dimension.
Les propriétés {{CSSxRef('scroll-timeline-name')}} et {{CSSxRef('scroll-timeline-axis')}} (ainsi que la propriété abrégée {{CSSxRef('scroll-timeline')}}) permettent d'indiquer qu'une barre de défilement spécifique dans un conteneur nommé peut être utilisée comme source pour une animation pilotée par le défilement.
La timeline de défilement peut ensuite être associée à une [animation](/fr/docs/Web/CSS/Guides/Animations) en définissant la propriété {{CSSxRef('animation-timeline')}} sur la valeur de nom définie avec `scroll-timeline-name`.

Lorsque vous utilisez la propriété abrégée {{CSSxRef('scroll-timeline')}}, l'ordre des valeurs doit être {{CSSxRef('scroll-timeline-name')}} suivi de {{CSSxRef('scroll-timeline-axis')}}.
Les propriétés longues et abrégées sont toutes deux disponibles derrière la préférence.
Vous pouvez également utiliser la notation fonctionnelle {{CSSxRef("animation-timeline/scroll")}} avec {{CSSxRef('animation-timeline')}} pour indiquer qu'un axe de défilement d'un élément ancêtre sera utilisé pour la timeline.

Pour plus d'informations, voir [le bogue Firefox 1807685 <sup>(angl.)</sup>](https://bugzil.la/1807685), [le bogue Firefox 1804573 <sup>(angl.)</sup>](https://bugzil.la/1804573), [le bogue Firefox 1809005 <sup>(angl.)</sup>](https://bugzil.la/1809005), [le bogue Firefox 1676791 <sup>(angl.)</sup>](https://bugzil.la/1676791), [le bogue Firefox 1754897 <sup>(angl.)</sup>](https://bugzil.la/1754897), [le bogue Firefox 1817303 <sup>(angl.)</sup>](https://bugzil.la/1817303) et [le bogue Firefox 1737918 <sup>(angl.)</sup>](https://bugzil.la/1737918).

Les propriétés {{CSSxRef('timeline-scope')}}, {{CSSxRef('animation-range-start')}} et {{CSSxRef('animation-range-end')}} (ainsi que la propriété abrégée {{CSSxRef('animation-range')}}) ne sont pas encore prises en charge. Pour plus d'informations, voir [le bogue Firefox 1676779 <sup>(angl.)</sup>](https://bugzil.la/1676779).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 136                    | Oui                 |
| Developer Edition | 110                    | Non                 |
| Beta              | 110                    | Non                 |
| Release           | 110                    | Non                 |

- `layout.css.scroll-driven-animations.enabled`
  - : Mettre sur `true` pour activer.

### Fonctionnalité média `prefers-reduced-transparency`

La fonctionnalité média CSS {{CSSxRef("@media/prefers-reduced-transparency")}} permet de détecter si un·e utilisateur·ice a activé l'option pour minimiser la quantité d'effets de calques transparents ou translucides sur son appareil. (Voir [le bogue Firefox 1736914 <sup>(angl.)</sup>](https://bugzil.la/1736914) pour plus de détails.)

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 113                    | Non                 |
| Developer Edition | 113                    | Non                 |
| Beta              | 113                    | Non                 |
| Release           | 113                    | Non                 |

- `layout.css.prefers-reduced-transparency.enabled`
  - : Mettre sur `true` pour activer.

### Fonctionnalité média `inverted-colors`

La fonctionnalité média CSS {{CSSxRef("@media/inverted-colors")}} permet de détecter si un agent utilisateur ou le système d'exploitation sous-jacent inverse les couleurs. (Voir [le bogue Firefox 1794628 <sup>(angl.)</sup>](https://bugzil.la/1794628) pour plus de détails.)

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 114                    | Non                 |
| Developer Edition | 114                    | Non                 |
| Beta              | 114                    | Non                 |
| Release           | 114                    | Non                 |

- `layout.css.inverted-colors.enabled`
  - : Mettre sur `true` pour activer.

### Propriété `view-timeline-name` nommée pour la progression de la vue

La propriété CSS {{CSSxRef("view-timeline-name")}} permet d'attribuer un nom à un élément particulier, identifiant que son élément de défilement ancêtre est la source d'une timeline de progression de la vue.
Ce nom peut ensuite être assigné à `animation-timeline`, ce qui permet d'animer l'élément associé lorsqu'il se déplace dans la zone visible de son élément de défilement ancêtre. (Voir [le bogue Firefox 1737920 <sup>(angl.)</sup>](https://bugzil.la/1737920) pour plus de détails.)

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 114                    | Non                 |
| Developer Edition | 114                    | Non                 |
| Beta              | 114                    | Non                 |
| Release           | 114                    | Non                 |

- `layout.css.scroll-driven-animations.enabled`
  - : Mettre sur `true` pour activer.

### Fonction anonyme de progression de la vue

La fonction CSS {{CSSxRef("animation-timeline/view")}} permet d'indiquer que la propriété `animation-timeline` d'un élément est une timeline de progression de la vue, ce qui animera l'élément lorsqu'il se déplace dans la zone visible de son élément de défilement ancêtre.
La fonction définit l'axe de l'élément parent qui fournit la timeline, ainsi que l'encart dans la zone visible où l'animation commence et se termine. (Voir [le bogue Firefox 1808410 <sup>(angl.)</sup>](https://bugzil.la/1808410) pour plus de détails.)

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 114                    | Non                 |
| Developer Edition | 114                    | Non                 |
| Beta              | 114                    | Non                 |
| Release           | 114                    | Non                 |

- `layout.css.scroll-driven-animations.enabled`
  - : Mettre sur `true` pour activer.

### Propriétés `transform` préfixées par le fournisseur

Les propriétés [CSS transform](/fr/docs/Web/CSS/Guides/Transforms) préfixées par `-moz-` peuvent être désactivées en définissant la préférence `layout.css.prefixes.transforms` sur `false`. L'objectif est de désactiver ces propriétés une fois que les propriétés standard CSS zoom seront bien prises en charge. (Voir [le bogue Firefox 1886134 <sup>(angl.)</sup>](https://bugzil.la/1886134), [le bogue Firefox 1855763 <sup>(angl.)</sup>](https://bugzil.la/1855763)).

Plus précisément, cette préférence désactivera les propriétés préfixées suivantes&nbsp;:

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 120                    | Oui                 |
| Developer Edition | 120                    | Oui                 |
| Beta              | 120                    | Oui                 |
| Release           | 120                    | Oui                 |

- `layout.css.prefixes.transforms`
  - : Mettre sur `true` pour activer.

### Fonction `shape()`

La fonction CSS {{CSSxRef("basic-shape/shape")}} est un type de donnée {{CSSxRef("basic-shape")}} qui permet de définir une forme dans les propriétés {{CSSxRef("clip-path")}} et {{CSSxRef("offset-path")}} en utilisant une ou plusieurs «&nbsp;commandes de forme&nbsp;». Ces commandes sont très similaires aux [commandes de tracé SVG](/fr/docs/Web/SVG/Reference/Attribute/d#path_commands). La fonction `shape()` est similaire à certains égards à la fonction {{CSSxRef("basic-shape/path","path()")}}, mais contrairement à `path()`, qui utilise la syntaxe [SVG path](/fr/docs/Web/SVG/Reference/Element/path), `shape()` utilise la syntaxe CSS standard. Cela permet de créer et de modifier facilement des formes et autorise également l'utilisation des fonctions mathématiques CSS.
Pour plus de détails, voir [le bogue Firefox 1823463 <sup>(angl.)</sup>](https://bugzil.la/1823463) pour la prise en charge de la fonction `shape()` dans `clip-path`, [le bogue Firefox 1884424 <sup>(angl.)</sup>](https://bugzil.la/1884424) pour la prise en charge de la fonction dans `offset-path`, et [le bogue Firefox 1884425 <sup>(angl.)</sup>](https://bugzil.la/1884425) pour la prise en charge de l'interpolation.

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 126                    | Oui                 |
| Developer Edition | 126                    | Non                 |
| Beta              | 126                    | Non                 |
| Release           | 126                    | Non                 |

- `layout.css.basic-shape-shape.enabled`
  - : Mettre sur `true` pour activer.

#### Points de contrôle relatifs dans les commandes de courbe CSS `shape()`

Vous pouvez utiliser des valeurs [`<relative-control-point>`](/fr/docs/Web/CSS/Reference/Values/basic-shape/shape#relative-control-point) lors de la définition d'une [`<curve-command>`](/fr/docs/Web/CSS/Reference/Values/basic-shape/shape#curve-command) ou d'une [`<smooth-command>`](/fr/docs/Web/CSS/Reference/Values/basic-shape/shape#smooth-command) dans une fonction CSS `shape()`. Ces valeurs permettent d'indiquer des points de contrôle positionnés par rapport au point de départ ou d'arrivée de la commande en cours, ou par rapport à l'origine (coin supérieur gauche) du conteneur dans lequel la forme est dessinée.
(Voir [le bogue Firefox 1921501 <sup>(angl.)</sup>](https://bugzil.la/1921501)).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 146                    | Oui                 |
| Developer Edition | 146                    | Non                 |
| Beta              | 146                    | Non                 |
| Release           | 146                    | Non                 |

- `layout.css.basic-shape-shape.enabled`
  - : Mettre sur `true` pour activer.

### Espacement symétrique des lettres `letter-spacing`

La propriété CSS {{CSSxRef("letter-spacing")}} répartit désormais l'espacement défini de manière égale de chaque côté de chaque caractère. Cela diffère du comportement actuel où l'espacement est principalement ajouté d'un seul côté. Cette approche peut améliorer l'espacement du texte, en particulier dans les textes à direction mixte. (Voir [le bogue Firefox 1891446 <sup>(angl.)</sup>](https://bugzil.la/1891446)).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 128                    | Oui                 |
| Developer Edition | 128                    | Oui                 |
| Beta              | 127                    | Non                 |
| Release           | 127                    | Non                 |

- `layout.css.letter-spacing.model`
  - : Mettre sur `true` pour activer.

### Prise en charge de `calc()` pour les canaux de couleur dans les couleurs relatives

La fonction CSS {{CSSxRef("calc()")}} peut désormais analyser les canaux de couleur dans les [couleurs relatives](/fr/docs/Web/CSS/Guides/Colors/Using_relative_colors#using_math_functions), ce qui permet de calculer correctement les modifications de couleurs dans différents espaces colorimétriques ou lors de l'utilisation de différentes notations fonctionnelles. (Voir [le bogue Firefox 1889561 <sup>(angl.)</sup>](https://bugzil.la/1889561)).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 127                    | Oui                 |
| Developer Edition | 127                    | Non                 |
| Beta              | 127                    | Non                 |
| Release           | 127                    | Non                 |

- `layout.css.relative-color-syntax.enabled`
  - : Mettre sur `true` pour activer.

### Autoriser les pseudo-éléments après les pseudo-éléments liés à un élément

Un travail a débuté pour permettre d'ajouter des [pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) tels que {{CSSxRef("::first-letter")}} et {{CSSxRef("::before")}} à la suite de [pseudo-éléments liés à un élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements#element-backed_pseudo-elements) comme {{CSSxRef("::details-content")}} et {{CSSxRef("::file-selector-button")}}.

Cela permettra, par exemple, de mettre en forme la première lettre de l'élément {{HTMLElement("details")}} en utilisant le sélecteur CSS `::details-content::first-letter` ou d'ajouter du contenu avant un {{HTMLElement("input")}} de [`type="file"`](/fr/docs/Web/HTML/Reference/Elements/input/file) avec le sélecteur CSS `::file-selector-button::before`.

Actuellement, seul le support de `::details-content::first-letter` peut être analysé avec `@supports(::details-content::first-letter)`.
Le pseudo-élément `::file-selector-button` n'est pas encore marqué comme pseudo-élément basé sur un élément, il n'est donc pas possible de le tester.
(Voir [le bogue Firefox 1953557 <sup>(angl.)</sup>](https://bugzil.la/1953557), [le bogue Firefox 1941406 <sup>(angl.)</sup>](https://bugzil.la/1941406)).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 138                    | Non                 |
| Developer Edition | 138                    | Non                 |
| Beta              | 138                    | Non                 |
| Release           | 138                    | Non                 |

### Pseudo-classes `:heading` et `:heading()`

La pseudo-classe {{CSSxRef(":heading")}} permet de mettre en forme tous les [éléments de titre](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) (`<h1>`-`<h6>`) en une seule fois, plutôt que de les cibler individuellement. La pseudo-classe fonctionnelle {{CSSxRef(":heading()")}} permet de cibler les éléments de titre correspondant à une liste d'entiers séparés par des virgules correspondant aux niveaux de titre. (Voir [le bogue Firefox 1974386 <sup>(angl.)</sup>](https://bugzil.la/1974386) et [le bogue Firefox 1984310 <sup>(angl.)</sup>](https://bugzil.la/1984310)).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 142                    | Non                 |
| Developer Edition | 142                    | Non                 |
| Beta              | 142                    | Non                 |
| Release           | 142                    | Non                 |

- `layout.css.heading-selector.enabled`
  - : Mettre sur `true` pour activer.

### `text-decoration-trim`

La propriété CSS `text-decoration-trim` permet d'indiquer des décalages de début et de fin pour {{CSSxRef("text-decoration")}} afin de raccourcir, allonger ou déplacer la position des décorations de texte par rapport au texte. (Voir [le bogue Firefox 1979915 <sup>(angl.)</sup>](https://bugzil.la/1979915)).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 145                    | Non                 |
| Developer Edition | 145                    | Non                 |
| Beta              | 145                    | Non                 |
| Release           | 145                    | Non                 |

- `layout.css.text-decoration-trim.enabled`
  - : Mettre sur `true` pour activer.

### Règle `@custom-media`

La règle CSS {{CSSxRef("@custom-media")}} permet de définir des alias pour des requêtes média longues ou complexes. Au lieu de répéter la même liste de requêtes média codée en dur dans plusieurs règles `@media`, elle peut être définie une fois dans une règle `@custom-media` et référencée dans toute la feuille de style au besoin. (Voir [le bogue Firefox 1744292 <sup>(angl.)</sup>](https://bugzil.la/1744292)).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 146                    | Non                 |
| Developer Edition | 146                    | Non                 |
| Beta              | 146                    | Non                 |
| Release           | 146                    | Non                 |

- `layout.css.custom-media.enabled`
  - : Mettre sur `true` pour activer.

## SVG

**Aucune fonctionnalité expérimentale dans ce cycle de publication.**

## JavaScript

**Aucune fonctionnalité expérimentale dans ce cycle de publication.**

## Les API Web

### Interface CloseWatcher

Les composants web natifs ayant des sémantiques «&nbsp;ouvrir&nbsp;» et «&nbsp;fermer&nbsp;», comme les boîtes de dialogue modales et les popovers, peuvent être fermés à l'aide de mécanismes natifs de l'appareil.
Par exemple, sur Android, vous pouvez fermer une boîte de dialogue avec le bouton retour.
L'interface {{DOMxRef("CloseWatcher")}} permet aux développeur·euse·s d'implémenter des composants d'interface utilisateur, comme des barres latérales personnalisées, qui peuvent également être fermés à l'aide de mécanismes natifs.
(Voir [le bogue Firefox 1888729 <sup>(angl.)</sup>](https://bugzil.la/1888729)).

| Canal de parution | Ajouté dans la version | Activé par défaut ?          |
| ----------------- | ---------------------- | ---------------------------- |
| Nightly           | 140                    | Oui (bureau). Non (Android). |
| Developer Edition | 132                    | Non                          |
| Beta              | 132                    | Non                          |
| Release           | 132                    | Non                          |

- `dom.closewatcher.enabled`
  - : Mettre sur `true` pour activer.

### L'API HTML Sanitizer

[L'API HTML Sanitizer](/fr/docs/Web/API/HTML_Sanitizer_API) permet aux développeur·euse·s de prendre des chaînes HTML non fiables et de les assainir pour une insertion sûre dans le DOM d'un document.

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 146                    | Oui                 |
| Developer Edition | 147                    | Oui                 |
| Beta              | 147                    | Oui                 |
| Release           | 138                    | Non                 |

- `dom.security.sanitizer.enabled`
  - : Mettre sur `true` pour activer.

### Suppression des évènements `beforescriptexecute` et `afterscriptexecute`

Les évènements non standard [`beforescriptexecute`](/fr/docs/Web/API/Document/beforescriptexecute_event) et [`afterscriptexecute`](/fr/docs/Web/API/Document/afterscriptexecute_event) sur l'interface {{DOMxRef("Document")}}, ainsi que [`afterscriptexecute`](/fr/docs/Web/API/Element/afterscriptexecute_event) et [`beforescriptexecute`](/fr/docs/Web/API/Element/beforescriptexecute_event) sur l'interface {{DOMxRef("Element")}}, sont en voie de suppression. Ils ont été désactivés dans Nightly.
(Voir [le bogue Firefox 1954685 <sup>(angl.)</sup>](https://bugzil.la/1954685)).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 139                    | Non                 |
| Developer Edition | 139                    | Oui                 |
| Beta              | 139                    | Oui                 |
| Release           | 139                    | Oui                 |

- `dom.events.script_execute.enable`
  - : Mettre sur `true` pour activer.

### Propriétés `actions` et `maxActions` de Notification

La propriété en lecture seule {{DOMxRef("Notification/actions","actions")}} et la propriété statique en lecture seule [`maxActions`](/fr/docs/Web/API/Notification/maxActions_static) de l'interface {{DOMxRef("Notification")}} sont prises en charge dans Nightly sur bureau.
Celles-ci contiennent respectivement les actions de notification définies avec {{DOMxRef("ServiceWorkerRegistration.showNotification()")}} et le nombre maximal d'actions pouvant être définies.
(Voir [le bogue Firefox 1225110 <sup>(angl.)</sup>](https://bugzil.la/1225110), [le bogue Firefox 1963263 <sup>(angl.)</sup>](https://bugzil.la/1963263)).

| Canal de parution | Ajouté dans la version | Activé par défaut ?     |
| ----------------- | ---------------------- | ----------------------- |
| Nightly           | 138                    | Oui (bureau uniquement) |
| Developer Edition | 138                    | Non                     |
| Beta              | 138                    | Non                     |
| Release           | 138                    | Non                     |

- `dom.webnotifications.actions.enabled`
  - : Mettre sur `true` pour activer.

### Graphismes : Canvas, WebGL et WebGPU

#### WebGL : extensions en brouillon

Lorsque cette préférence est activée, toutes les extensions WebGL actuellement en statut «&nbsp;brouillon&nbsp;» en cours de test sont activées pour l'utilisation. Actuellement, aucune extension WebGL n'est testée par Firefox.

#### L'API WebGPU

[L'API WebGPU](/fr/docs/Web/API/WebGPU_API) fournit une prise en charge bas niveau pour effectuer des calculs et du rendu graphique en utilisant le [Graphics Processing Unit](https://fr.wikipedia.org/wiki/Processeur_graphique) (GPU) de l'appareil ou de l'ordinateur de l'utilisateur·ice.
Depuis la version 142, cela est activé sous Windows dans tous les contextes sauf les service workers.
Depuis la version 147, cela est activé sous macOS sur Apple Silicon dans tous les contextes de navigation sauf les service workers.
Pour d'autres plateformes comme Linux et macOS sur Intel, c'est activé dans Nightly.
Voir [le bogue Firefox 1602129 <sup>(angl.)</sup>](https://bugzil.la/1602129) pour suivre l'avancement de cette API.

| Canal de parution | Ajouté dans la version | Activé par défaut ?                                                    |
| ----------------- | ---------------------- | ---------------------------------------------------------------------- |
| Nightly           | 141                    | Oui                                                                    |
| Developer Edition | 141                    | Non (Oui sur Windows et macOS sur Apple silicon, hors service workers) |
| Beta              | 141                    | Non (Oui sur Windows et macOS sur Apple silicon, hors service workers) |
| Release           | 141                    | Non (Oui sur Windows et macOS sur Apple silicon, hors service workers) |

- `dom.webgpu.enabled`
  - : Mettre sur `true` pour activer (activé dans Nightly et sur Windows dans toutes les versions)
- `dom.webgpu.service-workers.enabled`
  - : Mettre sur `true` pour activer (activé dans Nightly)

### Prise en charge de l'API Reporting pour les violations CSP

[L'API Reporting](/fr/docs/Web/API/Reporting_API) prend désormais en charge le signalement des violations de la [Content Security Policy (CSP)](/fr/docs/Web/HTTP/Guides/CSP).

Les instances de {{DOMxRef('Report')}} retournées par l'interface {{DOMxRef('ReportingObserver')}} peuvent désormais avoir une valeur `type` de `"csp-violation"` et une propriété `body` qui contient une instance de l'interface {{DOMxRef('CSPViolationReportBody')}}.
Cela permet de signaler les violations CSP au sein d'une page web.

Les rapports de violation CSP peuvent également être envoyés à des points de terminaison distants définis par nom dans la directive CSP {{CSP("report-to")}} — les noms de points de terminaison et les URL correspondantes doivent d'abord être définis dans les en-têtes de réponse HTTP {{HTTPHeader('Reporting-Endpoints')}} ou {{HTTPHeader('Report-To')}}.
Le rapport est une sérialisation de l'objet {{DOMxRef('Report')}} décrit ci-dessus, avec une propriété `body` qui est une sérialisation d'une instance de {{DOMxRef('CSPViolationReportBody')}}.

Ce rapport de violation remplace un mécanisme similaire spécifique à CSP pour l'envoi de rapports de violation, qui utilise la directive CSP {{CSP("report-uri")}} pour définir l'URL du point de signalement, et dispose d'un [format JSON de rapport de violation spécifique à CSP](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#violation_report_syntax).
(Voir [le bogue Firefox 1391243 <sup>(angl.)</sup>](https://bugzil.la/1391243)).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 130                    | Non                 |
| Developer Edition | 130                    | Non                 |
| Beta              | 130                    | Non                 |
| Release           | 130                    | Non                 |

- `dom.reporting.enabled`
  - : Mettre sur `true` pour activer.

### WebRTC et multimédia

Les fonctionnalités expérimentales suivantes incluent celles trouvées dans les API multimédia telles que [l'API WebRTC](/fr/docs/Web/API/WebRTC_API), [l'API Web Audio](/fr/docs/Web/API/Web_Audio_API), [l'API Media Source Extensions](/fr/docs/Web/API/Media_Source_Extensions_API), [l'API Encrypted Media Extensions](/fr/docs/Web/API/Encrypted_Media_Extensions_API) et [l'API Media Capture and Streams](/fr/docs/Web/API/Media_Capture_and_Streams_API).

#### Propriétés `audioTracks` et `videoTracks` de HTMLMediaElement

L'activation de cette fonctionnalité ajoute les propriétés {{DOMxRef("HTMLMediaElement.audioTracks")}} et {{DOMxRef("HTMLMediaElement.videoTracks")}} à tous les éléments média HTML. Cependant, comme Firefox ne prend actuellement pas en charge plusieurs pistes audio et vidéo, les cas d'utilisation les plus courants pour ces propriétés ne fonctionnent pas, elles sont donc toutes deux désactivées par défaut. Voir [le bogue Firefox 1057233 <sup>(angl.)</sup>](https://bugzil.la/1057233) pour plus de détails.

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 33                     | Non                 |
| Developer Edition | 33                     | Non                 |
| Beta              | 33                     | Non                 |
| Release           | 33                     | Non                 |

- `media.track.enabled`
  - : Mettre sur `true` pour activer.

#### Ajout et suppression asynchrones de `SourceBuffer`

Cela ajoute les méthodes basées sur les promesses {{DOMxRef("SourceBuffer.appendBufferAsync", "appendBufferAsync()")}} et {{DOMxRef("SourceBuffer.removeAsync", "removeAsync()")}} pour ajouter et supprimer des tampons source média à l'interface {{DOMxRef("SourceBuffer")}}. Voir [le bogue Firefox 1280613 <sup>(angl.)</sup>](https://bugzil.la/1280613) et [le bogue Firefox 778617 <sup>(angl.)</sup>](https://bugzil.la/778617) pour plus d'informations.

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 62                     | Non                 |
| Developer Edition | 62                     | Non                 |
| Beta              | 62                     | Non                 |
| Release           | 62                     | Non                 |

- `media.mediasource.experimental.enabled`
  - : Mettre sur `true` pour activer.

#### Rigueur de conformité AVIF

La préférence `image.avif.compliance_strictness` peut être utilisée pour contrôler la _rigueur_ appliquée lors du traitement des images [AVIF](/fr/docs/Web/Media/Guides/Formats/Image_types#avif_image).
Cela permet aux utilisateur·ice·s de Firefox d'afficher des images qui s'affichent sur d'autres navigateurs, même si elles ne sont pas strictement conformes.

| Canal de parution | Ajouté dans la version | Valeur par défaut |
| ----------------- | ---------------------- | ----------------- |
| Nightly           | 92                     | 1                 |
| Developer Edition | 92                     | 1                 |
| Beta              | 92                     | 1                 |
| Release           | 92                     | 1                 |

- `image.avif.compliance_strictness`
  - : Valeur numérique indiquant un niveau de _rigueur_. Les valeurs autorisées sont&nbsp;:
    - `0`&nbsp;: Permissif. Accepte les images avec des violations de la spécification dans les recommandations («&nbsp;should&nbsp;») et les exigences («&nbsp;shall&nbsp;»), à condition qu'elles puissent être interprétées de manière sûre ou non ambiguë.
    - `1` **(par défaut)**&nbsp;: Mixte. Rejette les violations des exigences («&nbsp;shall&nbsp;»), mais autorise les violations des recommandations («&nbsp;should&nbsp;»).
    - `2`&nbsp;: Strict. Rejette toute violation des exigences ou recommandations définies.

#### Prise en charge de JPEG XL

Firefox prend en charge les images [JPEG XL <sup>(angl.)</sup>](https://jpeg.org/jpegxl/) si cette fonctionnalité est activée.
Voir [le bogue Firefox 1539075 <sup>(angl.)</sup>](https://bugzil.la/1539075) pour plus de détails.

Notez que, comme indiqué ci-dessous, la fonctionnalité n'est disponible que dans les versions Nightly (peu importe si la préférence est activée).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 90                     | Non                 |
| Developer Edition | —                      | —                   |
| Beta              | —                      | —                   |
| Release           | —                      | —                   |

- `image.jxl.enabled`
  - : Mettre sur `true` pour activer.

#### L'API Document Picture-in-Picture

[L'API Document Picture-in-Picture](/fr/docs/Web/API/Document_Picture-in-Picture_API) permet d'ouvrir une fenêtre toujours au premier plan pouvant être remplie avec du contenu HTML arbitraire, comme une vidéo avec des contrôles personnalisés ou un ensemble de flux affichant les participant·e·s à un appel vidéo.
Voir [le bogue Firefox 1858562 <sup>(angl.)</sup>](https://bugzil.la/1858562) pour plus de détails.

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 148                    | Oui                 |
| Developer Edition | 148                    | Non                 |
| Beta              | 148                    | Non                 |
| Release           | 148                    | Non                 |

- `dom.documentpip.enabled`
  - : Mettre sur `true` pour activer.

### API WebVR (désactivée)

[L'API WebVR](/fr/docs/Web/API/WebVR_API) obsolète est en cours de suppression.
Elle est désactivée par défaut sur toutes les versions [bogue Firefox 1750902 <sup>(angl.)</sup>](https://bugzil.la/1750902).

| Canal de parution | Version supprimée | Activé par défaut ? |
| ----------------- | ----------------- | ------------------- |
| Nightly           | 98                | Non                 |
| Developer Edition | 98                | Non                 |
| Beta              | 98                | Non                 |
| Release           | 98                | Non                 |

- `dom.vr.enabled`
  - : Mettre sur `true` pour activer.

### Méthodes `GeometryUtils` : `convertPointFromNode()`, `convertRectFromNode()` et `convertQuadFromNode()`

Les méthodes `GeometryUtils` `convertPointFromNode()`, `convertRectFromNode()` et `convertQuadFromNode()` permettent de mapper le point, le rectangle ou le quadrilatère donné du {{DOMxRef("Node")}} sur lequel elles sont appelées vers un autre nœud. (Voir [le bogue Firefox 918189 <sup>(angl.)</sup>](https://bugzil.la/918189) pour plus de détails.)

| Canal de parution | Version ajoutée | Activé par défaut ? |
| ----------------- | --------------- | ------------------- |
| Nightly           | 31              | Oui                 |
| Developer Edition | 31              | Non                 |
| Beta              | 31              | Non                 |
| Release           | 31              | Non                 |

- `layout.css.convertFromNode.enable`
  - : Mettre sur `true` pour activer.

### Méthode `GeometryUtils` : `getBoxQuads()`

La méthode `GeometryUtils` `getBoxQuads()` retourne les boîtes CSS pour un {{DOMxRef("Node")}} relativement à tout autre nœud ou à la zone d'affichage (<i lang="en">viewport</i> en anglais). (Voir [le bogue Firefox 917755 <sup>(angl.)</sup>](https://bugzil.la/917755) pour plus de détails.)

| Canal de parution | Version ajoutée | Activé par défaut ? |
| ----------------- | --------------- | ------------------- |
| Nightly           | 31              | Oui                 |
| Developer Edition | 31              | Non                 |
| Beta              | 31              | Non                 |
| Release           | 31              | Non                 |

- `layout.css.getBoxQuads.enabled`
  - : Mettre sur `true` pour activer.

### L'API Payment Request

#### Gestion principale des paiements

[L'API Payment Request](/fr/docs/Web/API/Payment_Request_API) permet de prendre en charge les paiements web au sein du contenu ou des applications web. En raison d'un bogue survenu lors des tests de l'interface utilisateur, nous avons décidé de reporter la publication de cette API pendant que des discussions sur des modifications potentielles de l'API sont en cours. Le travail se poursuit. (Voir [le bogue Firefox 1318984 <sup>(angl.)</sup>](https://bugzil.la/1318984) pour plus de détails.)

| Canal de parution | Version ajoutée | Activé par défaut ? |
| ----------------- | --------------- | ------------------- |
| Nightly           | 55              | Non                 |
| Developer Edition | 55              | Non                 |
| Beta              | 55              | Non                 |
| Release           | 55              | Non                 |

- `dom.payments.request.enabled`
  - : Mettre sur `true` pour activer.
- `dom.payments.request.supportedRegions`
  - : Codes pays sous forme de liste autorisée séparée par des virgules (ex.&nbsp;: `US,CA`).

### L'API Web Share

[L'API Web Share](/fr/docs/Web/API/Web_Share_API) permet de partager des fichiers, des URL et d'autres données depuis un site.
Cette fonctionnalité est activée sur Android dans toutes les versions, mais nécessite une préférence sur bureau (sauf indication contraire ci-dessous).

| Canal de parution | Version modifiée | Activé par défaut ?                          |
| ----------------- | ---------------- | -------------------------------------------- |
| Nightly           | 71               | Non (par défaut). Oui (Windows depuis la 92) |
| Developer Edition | 71               | Non                                          |
| Beta              | 71               | Non                                          |
| Release           | 71               | Non (bureau). Oui (Android).                 |

- `dom.webshare.enabled`
  - : Mettre sur `true` pour activer.

### L'API Screen Orientation

#### `ScreenOrientation.lock()`

La méthode {{DOMxRef("ScreenOrientation.lock()")}} permet de verrouiller un appareil sur une orientation particulière, si cela est pris en charge par l'appareil et autorisé par les exigences préalables du navigateur.
En général, le verrouillage de l'orientation n'est autorisé que sur les appareils mobiles lorsque le document est affiché en plein écran.
Voir [le bogue Firefox 1697647 <sup>(angl.)</sup>](https://bugzil.la/1697647) pour plus de détails.

| Canal de parution | Version modifiée | Activé par défaut ? |
| ----------------- | ---------------- | ------------------- |
| Nightly           | 111              | Oui                 |
| Developer Edition | 97               | Non                 |
| Beta              | 97               | Non                 |
| Release           | 97               | Non                 |

- `dom.screenorientation.allow-lock`
  - : Mettre sur `true` pour activer.

### L'API Notifications

Les notifications ont la propriété [`requireInteraction`](/fr/docs/Web/API/Notification/requireInteraction) définie sur true par défaut sur les systèmes Windows et dans la version Nightly ([bogue Firefox 1794475 <sup>(angl.)</sup>](https://bugzil.la/1794475)).

| Canal de parution | Version modifiée | Activé par défaut ? |
| ----------------- | ---------------- | ------------------- |
| Nightly           | 117              | Oui                 |
| Developer Edition | 117              | Non                 |
| Beta              | 117              | Non                 |
| Release           | 117              | Windows uniquement  |

- `dom.webnotifications.requireinteraction.enabled`
  - : Mettre sur `true` pour activer.

## Sécurité et confidentialité

### Étiquetage des pages non sécurisées

Les deux préférences `security.insecure_connection_text_*` ajoutent une étiquette «&nbsp;Non sécurisé&nbsp;» dans la barre d'adresse à côté de l'icône de cadenas traditionnelle lorsqu'une page est chargée de manière non sécurisée (c'est-à-dire en utilisant {{Glossary("HTTP")}} plutôt que {{Glossary("HTTPS")}}). La préférence `browser.urlbar.trimHttps` supprime le préfixe `https:` des URL dans la barre d'adresse. Voir [le bogue Firefox 1853418 <sup>(angl.)</sup>](https://bugzil.la/1853418) pour plus de détails.

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 121                    | Oui                 |
| Developer Edition | 60                     | Non                 |
| Beta              | 60                     | Non                 |
| Release           | 60                     | Non                 |

- `security.insecure_connection_text.enabled`
  - : Mettre sur `true` pour activer l'étiquette de texte en mode de navigation normal.
- `security.insecure_connection_text.pbmode.enabled`
  - : Mettre sur `true` pour activer l'étiquette de texte en mode de navigation privée.
- `browser.urlbar.trimHttps`
  - : Mettre sur `true` pour supprimer le préfixe `https:` des URL dans la barre d'adresse.

### Restreindre le contenu adulte avec `<meta name="rating">`

L'élément non standard [`<meta name="rating">`](/fr/docs/Web/HTML/Reference/Elements/meta) peut être inclus sur une page web pour indiquer que le contenu de la page est restreint/adulte. Au moment de la rédaction, il existe deux valeurs possibles pour l'attribut `content`&nbsp;: `adult` ([défini par Google <sup>(angl.)</sup>](https://developers.google.com/search/docs/specialty/explicit/guidelines#add-metadata)) et `RTA-5042-1996-1400-1577-RTA` ([défini par ASACP <sup>(angl.)</sup>](https://www.rtalabel.org/?content=howto#top)), qui ont le même effet (d'autres options pourront être ajoutées à l'avenir).

Les éléments `<meta>` suivants sont équivalents&nbsp;:

```html
<meta name="rating" content="adult" />
<meta name="rating" content="RTA-5042-1996-1400-1577-RTA" />
```

Les navigateurs qui reconnaissent cet élément peuvent alors prendre des mesures pour empêcher les utilisateur·ice·s de consulter le contenu. L'implémentation de Firefox remplace la page par le contenu trouvé à l'adresse `about:restricted`, qui explique à l'utilisateur·ice qu'il·elle essaie d'accéder à un contenu restreint, explique pourquoi il·elle ne peut pas le consulter et lui propose un bouton pour revenir à la page précédente.

Voir [le bogue Firefox 1991135 <sup>(angl.)</sup>](https://bugzil.la/1991135) pour plus de détails.

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 146                    | Non                 |
| Developer Edition | 146                    | Non                 |
| Beta              | 146                    | Non                 |
| Release           | 146                    | Non                 |

- `security.restrict_to_adults.always`
  - : Mettre sur `true` pour restreindre l'accès aux pages web qui s'auto-identifient comme adultes en incluant un élément `<meta name="rating">`.
- `security.restrict_to_adults.respect_platform`
  - : Mettre sur `true` pour restreindre l'accès aux pages web qui s'auto-identifient comme adultes en incluant un élément `<meta name="rating">` uniquement lorsque des contrôles parentaux appropriés sont définis sur le système d'exploitation sous-jacent (par exemple, les paramètres _Contenu et confidentialité_ de macOS sont configurés pour restreindre le contenu explicite).

### Permissions Policy / Feature Policy

[Permissions Policy](/fr/docs/Web/HTTP/Guides/Permissions_Policy) permet aux développeur·euse·s web d'activer, de désactiver et de modifier sélectivement le comportement de certaines fonctionnalités et API du navigateur. Elle est similaire à CSP mais contrôle les fonctionnalités au lieu du comportement de sécurité.
Ceci est implémenté dans Firefox sous le nom de **Feature Policy**, le nom utilisé dans une version antérieure de la spécification.

Notez que les politiques prises en charge peuvent être définies via l'attribut [`allow`](/fr/docs/Web/HTML/Reference/Elements/iframe#allow) sur les éléments `<iframe>`, même si la préférence utilisateur n'est pas définie.

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 65                     | Non                 |
| Developer Edition | 65                     | Non                 |
| Beta              | 65                     | Non                 |
| Release           | 65                     | Non                 |

- `dom.security.featurePolicy.header.enabled`
  - : Mettre sur `true` pour activer.

### L'API Privacy Preserving Attribution (PPA)

[L'API PPA](https://support.mozilla.org/fr/kb/privacy-preserving-attribution) fournit une alternative au pistage des utilisateur·ice·s pour l'attribution publicitaire en utilisant le nouvel objet `navigator.privateAttribution` avec les méthodes `saveImpression()` et `measureConversion()`. Pour en savoir plus sur PPA, consultez [l'explication d'origine <sup>(angl.)</sup>](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment) et la [spécification proposée <sup>(angl.)</sup>](https://w3c.github.io/ppa/). Cette expérimentation peut être activée pour les sites web via [origin trial <sup>(angl.)</sup>](https://wiki.mozilla.org/Origin_Trials) ou dans le navigateur en définissant la préférence à `1`. (Voir [le bogue Firefox 1900929 <sup>(angl.)</sup>](https://bugzil.la/1900929)).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 128                    | Non                 |
| Developer Edition | 128                    | Non                 |
| Beta              | 128                    | Non                 |
| Release           | 128                    | Non                 |

- `dom.origin-trials.private-attribution.state`
  - : Mettre sur `true` pour activer.

## HTTP

### Politique d'intégrité pour les ressources de feuilles de style

Les en-têtes HTTP {{HTTPHeader("Integrity-Policy")}} et {{HTTPHeader("Integrity-Policy-Report-Only")}} sont désormais pris en charge pour les ressources de style. Ceux-ci permettent aux sites web soit d'appliquer des [garanties d'intégrité des sous-ressources](/fr/docs/Web/Security/Defenses/Subresource_Integrity) pour les styles, soit de signaler uniquement les violations de la politique.
Notez que Firefox ignore les points de terminaison de rapport et consigne les violations dans la console de développement.
Lorsque `Integrity-Policy` est utilisé, le navigateur bloque le chargement des styles référencés dans un élément {{HTMLElement("link")}} avec [`rel="stylesheet"`](/fr/docs/Web/HTML/Reference/Attributes/rel#stylesheet) qui n'ont pas d'attribut [`integrity`](/fr/docs/Web/HTML/Reference/Elements/script#integrity) ou dont le hachage d'intégrité ne correspond pas à la ressource sur le serveur.
(Voir [le bogue Firefox 1976656 <sup>(angl.)</sup>](https://bugzil.la/1976656)).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 142                    | Non                 |
| Developer Edition | 142                    | Non                 |
| Beta              | 142                    | Non                 |
| Release           | 142                    | Non                 |

- `security.integrity_policy.stylesheet.enabled`
  - : Mettre sur `true` pour activer.

### En-têtes Storage Access

Les en-têtes HTTP {{HTTPHeader("Sec-Fetch-Storage-Access")}} et {{HTTPHeader("Activate-Storage-Access")}} sont désormais pris en charge, permettant un flux de travail plus efficace avec la [Storage Access API](/fr/docs/Web/API/Storage_Access_API). (Voir [le bogue Firefox 1991688 <sup>(angl.)</sup>](https://bugzil.la/1991688)).

Dans le flux de travail uniquement JavaScript, une ressource tierce doit être demandée et chargée pour activer une permission d'accès au stockage pour un contexte particulier (comme un nouvel onglet du navigateur). Cela est requis même si la permission a déjà été accordée.
Les en-têtes d'accès au stockage permettent au navigateur d'indiquer l'état de la permission pour le contexte particulier, afin que le serveur puisse demander l'activation d'une permission déjà accordée.
Cela évite la surcharge de récupération et de chargement inutile de la ressource.

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 145                    | Oui                 |
| Developer Edition | 145                    | Non                 |
| Beta              | 145                    | Non                 |
| Release           | 145                    | Non                 |

- `dom.storage_access.headers.enabled`
  - : Mettre sur `true` pour activer.

### Idempotency-Key

L'en-tête de requête HTTP {{HTTPHeader("Idempotency-Key")}} peut être utilisé par le code client d'un site web pour rendre les requêtes {{HTTPMethod("POST")}} ou {{HTTPMethod("PATCH")}} {{Glossary("idempotent", "idempotentes")}} lorsqu'il est utilisé avec un serveur qui le prend en charge.
La spécification indique que le serveur doit documenter et annoncer quels points de terminaison nécessitent cet en-tête, le format de la clé et les réponses d'erreur attendues.

Firefox ajoute _automatiquement_ l'en-tête avec une clé unique pour chaque nouvelle requête `POST` si elle n'a pas déjà été ajoutée par le code côté client de la page.
Cela simplifie le code côté client nécessaire pour fonctionner avec les serveurs qui prennent en charge cette fonctionnalité.

(Voir [le bogue Firefox 1830022 <sup>(angl.)</sup>](https://bugzil.la/1830022)).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 135                    | Non                 |
| Developer Edition | 135                    | Non                 |
| Beta              | 135                    | Non                 |
| Release           | 135                    | Non                 |

- `network.http.idempotencyKey.enabled`
  - : Mettre sur `true` pour activer.

### En-tête `Accept` avec le type MIME `image/jxl`

L'en-tête HTTP {{HTTPHeader("Accept")}} dans les [requêtes par défaut et les requêtes d'image](/fr/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values) peut être configuré via une préférence pour indiquer la prise en charge du type MIME `image/jxl`.

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 128                    | Non                 |
| Developer Edition | 128                    | Non                 |
| Beta              | 128                    | Non                 |
| Release           | 128                    | Non                 |

- `image.jxl.enabled`
  - : Mettre sur `true` pour activer.

### SameSite=Lax par défaut

Les [cookies `SameSite`](/fr/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value) ont une valeur par défaut de `Lax`.
Avec ce paramètre, les cookies ne sont envoyés que lorsqu'un·e utilisateur·ice navigue vers le site d'origine, et non pour les sous-requêtes intersites visant à charger des images ou des cadres dans un site tiers, etc.
Pour plus de détails, voir [le bogue Firefox 1617609 <sup>(angl.)</sup>](https://bugzil.la/1617609).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 69                     | Non                 |
| Developer Edition | 69                     | Non                 |
| Beta              | 69                     | Non                 |
| Release           | 69                     | Non                 |

- `network.cookie.sameSite.laxByDefault`
  - : Mettre sur `true` pour activer.

### Le joker `Access-Control-Allow-Headers` n'inclut pas `Authorization`

L'en-tête de réponse [`Access-Control-Allow-Headers`](/fr/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) est un en-tête de réponse à une [requête préliminaire CORS](/fr/docs/Glossary/Preflight_request), qui indique quels en-têtes de requête peuvent être inclus dans la requête finale.
La directive de réponse peut contenir un joker (`*`), ce qui indique que la requête finale peut inclure tous les en-têtes sauf l'en-tête `Authorization`.

Par défaut, Firefox inclut l'en-tête `Authorization` dans la requête finale après avoir reçu une réponse avec `Access-Control-Allow-Headers: *`.
Définissez la préférence sur `false` pour que Firefox n'inclue pas l'en-tête `Authorization`.
Pour plus de détails, voir [le bogue Firefox 1687364 <sup>(angl.)</sup>](https://bugzil.la/1687364).

| Canal de parution | Ajouté dans la version | Activé par défaut ? |
| ----------------- | ---------------------- | ------------------- |
| Nightly           | 115                    | Oui                 |
| Developer Edition | 115                    | Oui                 |
| Beta              | 115                    | Oui                 |
| Release           | 115                    | Oui                 |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : Mettre sur `true` pour activer.

## Outils de développement

Les outils de développement de Mozilla évoluent en permanence. Nous expérimentons de nouvelles idées, ajoutons de nouvelles fonctionnalités et les testons dans les canaux Nightly et Developer Edition avant de les faire passer en bêta puis en version stable. Les fonctionnalités ci-dessous sont les fonctionnalités expérimentales actuelles des outils de développement.

**Aucune fonctionnalité expérimentale dans ce cycle de publication.**

## Voir aussi

- [Les notes de version pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.firefox.com/fr/channel/desktop/)
- [Firefox Developer Edition](https://www.firefox.com/fr/channel/desktop/developer/)
