---
title: Firefox 147 note de version pour les développeurs
short-title: Firefox 147
slug: Mozilla/Firefox/Releases/147
l10n:
  sourceCommit: 21638327a5baa7ecf918835c4a233a74f25b02ed
---

Cet article présente les informations concernant les changements de Firefox 147 qui concernent les développeur·euse·s.
Firefox 147 est sorti le [13 janvier 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=147).

## Changements pour les développeur·euse·s web

### Outils de développement

- Lorsque vous sélectionnez un [pseudo-élément](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) (tel que {{CSSxRef("::before")}} ou {{CSSxRef("::after")}}) dans le panneau HTML de l'Inspecteur, vous pouvez désormais modifier le sélecteur de la règle correspondante dans le panneau CSS.
  ([bogue Firefox 1998704 <sup>(angl.)</sup>](https://bugzil.la/1998704)).
- Lors d'une transition de vue, les pseudo-éléments {{CSSxRef("::view-transition")}} apparaissent désormais dans le panneau Éléments. ([bogue Firefox 1996608 <sup>(angl.)</sup>](https://bugzil.la/1996608)).
- Lors d'une transition de vue, les animations associées apparaissent désormais dans le panneau Animations. ([bogue Firefox 1995296 <sup>(angl.)</sup>](https://bugzil.la/1995296)).
- Les éléments avec un {{CSSxRef("anchor-name")}} valide reçoivent un badge «&nbsp;anchor&nbsp;» dans le panneau Éléments. ([bogue Firefox 1895196 <sup>(angl.)</sup>](https://bugzil.la/1895196)).
- Les règles {{CSSxRef("@position-try")}} associées à un élément mis en surbrillance sont désormais affichées dans le panneau Règles CSS. ([bogue Firefox 1895176 <sup>(angl.)</sup>](https://bugzil.la/1895176)).
- Les charges utiles JSON peuvent être importées dans Firefox Profiler depuis le visualiseur JSON à l'aide d'un nouveau bouton. Cela fournit une répartition de la taille de la ressource. ([bogue Firefox 1997209 <sup>(angl.)</sup>](https://bugzil.la/1997209)).

### HTML

Aucun changement notable.

### SVG

- Lorsqu'un fichier SVG est utilisé comme [source d'image](/fr/docs/Web/SVG/Guides/SVG_as_an_image) (par exemple, intégré dans une page via un élément HTML {{HTMLElement("img")}} ou comme {{CSSxRef("background-image")}} en CSS), l'URL du SVG prend désormais en charge les [fragments média](/fr/docs/Web/URI/Reference/Fragment/Media_fragments). ([bogue Firefox 1999989 <sup>(angl.)</sup>](https://bugzil.la/1999989)). Cela signifie que&nbsp;:
  - Lorsque le SVG inclut une [animation SMIL](/fr/docs/Web/SVG/Guides/SVG_animation_with_SMIL), vous pouvez utiliser la syntaxe de [dimension temporelle](/fr/docs/Web/URI/Reference/Fragment/Media_fragments#syntaxe_des_fragments_de_dimension_temporelle) pour lire une portion de l'animation d'un instant de départ à un instant de fin précis, après quoi l'animation sera mise en pause.
  - Vous pouvez utiliser la syntaxe de [dimension spatiale](/fr/docs/Web/URI/Reference/Fragment/Media_fragments#syntaxe_des_fragments_de_dimension_spatiale) pour afficher une zone spécifique du document SVG.

### CSS

- La [mise en forme par ancrage CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) est désormais activée par défaut.
  ([bogue Firefox 1988225 <sup>(angl.)</sup>](https://bugzil.la/1988225)).
  - La valeur [`anchor-center`](/fr/docs/Web/CSS/Guides/Anchor_positioning/Using#centrer_sur_lancrage_avec_anchor-center), qui offre un moyen pratique de centrer un élément positionné par ancrage sur son ancre, a été ajoutée dans la version 147. Elle est disponible sur les propriétés {{CSSxRef("align-items")}}, {{CSSxRef("align-self")}}, {{CSSxRef("justify-items")}}, {{CSSxRef("justify-self")}}, {{CSSxRef("place-items")}} et {{CSSxRef("place-self")}}.
    ([bogue Firefox 1909339 <sup>(angl.)</sup>](https://bugzil.la/1909339))
  - La valeur `none` de {{CSSxRef("position-anchor")}} a été ajoutée dans la version 147, ce qui permet de supprimer l'association implicite ou explicite entre une [ancre CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) et un élément positionné par ancrage.
    ([bogue Firefox 1999972 <sup>(angl.)</sup>](https://bugzil.la/1999972)).
- La version préfixée `-webkit-` de la propriété {{CSSxRef("perspective")}} est désormais prise en charge avec des valeurs sans unité — par exemple `-webkit-perspective: 800` — pour une meilleure compatibilité.
  ([bogue Firefox 1362499 <sup>(angl.)</sup>](https://bugzil.la/1362499)).
- Les [types de transition de vue](/fr/docs/Web/API/View_Transition_API/Using_types) sont désormais pris en charge, ce qui permet de définir différents **types** pour les transitions de vue actives. Le CSS peut alors être utilisé pour appliquer des animations aux éléments du DOM lorsque leur contenu est mis à jour, selon le type de transition spécifié. Firefox 147 ajoute la prise en charge uniquement des types de transition de vue pour les applications monopage (SPA), et non des transitions entre documents.
  ([bogue Firefox 2001878 <sup>(angl.)</sup>](https://bugzil.la/2001878)).
- Les propriétés {{CSSxRef("counter-increment")}}, {{CSSxRef("counter-reset")}}, {{CSSxRef("counter-set")}} et {{CSSxRef("quotes")}} sont désormais prises en charge sur le pseudo-élément {{CSSxRef("::marker")}}.
  ([bogue Firefox 2000404 <sup>(angl.)</sup>](https://bugzil.la/2000404)).
- Les [unités de longueur relatives basées sur la police de l'élément racine](/fr/docs/Web/CSS/Reference/Values/length#unités_de_longueur_relatives_basées_sur_la_police_de_lélément_racine) suivantes sont désormais prises en charge&nbsp;: `rcap`, `rch`, `rex` et `ric`. Ces unités permettent de définir des valeurs de `<longueur>` en fonction de la taille d'un caractère particulier ou d'un attribut de police de l'[élément racine](/fr/docs/Web/CSS/Reference/Selectors/:root).
  ([bogue Firefox 1740584 <sup>(angl.)</sup>](https://bugzil.la/1740584)).

### JavaScript

- Les scripts modules CSS sont désormais pris en charge, ce qui permet de charger une feuille de style dans un script en tant qu'instance {{DOMxRef("CSSStyleSheet")}} à l'aide du mot-clé [`import`](/fr/docs/Web/JavaScript/Reference/Statements/import) et de l'attribut d'import [`type`](/fr/docs/Web/JavaScript/Reference/Statements/import/with) défini à `type="css"`.
  ([bogue Firefox 1986681 <sup>(angl.)</sup>](https://bugzil.la/1986681)).
- La méthode {{JSxRef("Iterator.concat()")}} est désormais prise en charge. Cette méthode permet de créer un nouvel itérateur qui combine plusieurs itérables d'entrée en une seule séquence.
  ([bogue Firefox 1986672 <sup>(angl.)</sup>](https://bugzil.la/1986672)).

### APIs

- La propriété {{DOMxRef("Document.activeViewTransition")}} est désormais prise en charge, elle retourne une instance {{DOMxRef("ViewTransition")}} représentant la [transition de vue](/fr/docs/Web/API/View_Transition_API) actuellement active sur le document. Cela offre un moyen cohérent d'accéder à une transition de vue active dans n'importe quel contexte sans avoir à stocker manuellement une référence pour une utilisation ultérieure. ([bogue Firefox 2001836 <sup>(angl.)</sup>](https://bugzil.la/2001836)).
- La prise en charge de l'[API WebGPU](/fr/docs/Web/API/WebGPU_API) est désormais activée pour toutes les versions de macOS sur les appareils équipés de processeurs Apple Silicon (auparavant, seule la prise en charge de macOS Tahoe était activée). ([bogue Firefox 1993341 <sup>(angl.)</sup>](https://bugzil.la/1993341)).
- [L'API Navigation](/fr/docs/Web/API/Navigation_API) est désormais prise en charge.
  Cela permet d'initier, d'intercepter et de gérer les actions de navigation du navigateur, ainsi que d'examiner les entrées de l'historique d'une application. Il s'agit d'une évolution des fonctionnalités précédentes de la plateforme web telles que {{DOMxRef("History API", "l'API History", "", "nocode")}} et {{DOMxRef("window.location")}}, qui en corrige les limites et vise spécifiquement les besoins des {{Glossary("SPA", "applications monopage (SPA)")}}.
  ([bogue Firefox 1997962 <sup>(angl.)</sup>](https://bugzil.la/1997962)).
- La compression Brotli est désormais prise en charge à la fois pour [`CompressionStream`](/fr/docs/Web/API/CompressionStream/CompressionStream#brotli) et [`DecompressionStream`](/fr/docs/Web/API/DecompressionStream/DecompressionStream#brotli).
  ([bogue Firefox 1921583 <sup>(angl.)</sup>](https://bugzil.la/1921583)).
- Les service workers peuvent désormais être des [scripts modules](/fr/docs/Web/JavaScript/Guide/Modules) ECMAScript.
  Pour charger un module de service worker, définissez un [`type`](/fr/docs/Web/API/ServiceWorkerContainer/register#type) à `'module'` lors de l'appel à {{DOMxRef("ServiceWorkerContainer.register()")}}.
  ([bogue Firefox 1360870 <sup>(angl.)</sup>](https://bugzil.la/1360870)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### Général

- Correction de la réponse à la nouvelle session pour inclure la propriété requise `setWindowRect`. ([bogue Firefox 1916522 <sup>(angl.)</sup>](https://bugzil.la/1916522)).

#### WebDriver BiDi

- Implémentation de l'évènement `input.fileDialogOpened`, émis chaque fois qu'un sélecteur de fichier est déclenché par la page de contenu, par exemple après un clic sur un champ de type `file`. ([bogue Firefox 1855045 <sup>(angl.)</sup>](https://bugzil.la/1855045)).
- Implémentation de la commande `emulation.setScreenSettingsOverride` pour permettre aux clients d'émuler les dimensions de l'écran pour une liste de contextes de navigation ou d'utilisateur·ice. ([bogue Firefox 2000651 <sup>(angl.)</sup>](https://bugzil.la/2000651)).
- Correction d'un problème où `browsingContext.navigate` avec `wait=none` ne contenait pas toujours la véritable URL cible. ([bogue Firefox 2004191 <sup>(angl.)</sup>](https://bugzil.la/2004191)).
- Mise à jour de `script.evaluate` et `script.callFunction` pour contourner la politique de sécurité du contenu (CSP). ([bogue Firefox 1941780 <sup>(angl.)</sup>](https://bugzil.la/1941780)).
- Correction de l'absence de l'évènement `script.realmCreated` pour les nouveaux contextes de navigation créés via `window.open`. ([bogue Firefox 2002721 <sup>(angl.)</sup>](https://bugzil.la/2002721)).
- Mise à jour de `emulation.setLocaleOverride` pour remplacer l'en-tête `Accept-Language`. ([bogue Firefox 1995691 <sup>(angl.)</sup>](https://bugzil.la/1995691)).
- Mise à jour de `emulation.setLocaleOverride` pour lever une erreur lorsqu'il est appelé avec l'argument `locale` égal à `undefined`. ([bogue Firefox 2003992 <sup>(angl.)</sup>](https://bugzil.la/2003992)).

#### Marionette

- Correction de la sérialisation JSON des fenêtres Chrome. ([bogue Firefox 2000801 <sup>(angl.)</sup>](https://bugzil.la/2000801)).

## Changements pour les développeur·euse·s d'extensions

- Lors de l'utilisation de [navigator.clipboard.readText()](/fr/docs/Web/API/Clipboard/readText) ou [navigator.clipboard.read()](/fr/docs/Web/API/Clipboard/read) sans l'autorisation `clipboardRead`, un bouton de collage du presse-papiers est affiché pour obtenir la confirmation de l'utilisateur·ice. Si l'extension dispose de l'autorisation `clipboardRead`, elle continue à lire les données du presse-papiers sans confirmation de l'utilisateur·ice, comme auparavant. Pour plus d'informations sur l'utilisation du presse-papiers dans les extensions, voir [Interagir avec le presse-papiers](/fr/docs/Mozilla/Add-ons/WebExtensions/Interact_with_the_clipboard). ([bogue Firefox 1773681 <sup>(angl.)</sup>](https://bugzil.la/1773681))
- Les extensions Manifest Version 3 chargées temporairement peuvent désormais charger des scripts depuis l'hôte local, comme expliqué dans [Scripts depuis localhost](/fr/docs/Mozilla/Add-ons/WebExtensions/Content_Security_Policy#scripts_depuis_localhost) de l'article sur la politique de sécurité du contenu. ([bogue Firefox 1864284 <sup>(angl.)</sup>](https://bugzil.la/1864284))

## Fonctionnalités web expérimentales

Ces fonctionnalités sont livrées dans Firefox 147 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).
