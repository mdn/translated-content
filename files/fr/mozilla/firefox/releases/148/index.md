---
title: Firefox 148 note de version pour les développeurs
short-title: Firefox 148
slug: Mozilla/Firefox/Releases/148
l10n:
  sourceCommit: 71bf9d9aafdab8fea55d3cde76982f94cc313013
---

Cet article présente les informations concernant les changements de Firefox 148 qui concernent les développeur·euse·s.
Firefox 148 est sorti le [24 février 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=148).

## Changements pour les développeur·euse·s web

### HTML

- Le document initial `about:blank` se charge désormais de manière synchrone. La première navigation d'un contexte de navigation peut aboutir à `about:blank` (par exemple, lorsque l'URL initiale est vide ou explicitement définie sur `about:blank`). Dans ces cas, Firefox ne remplace plus le document vide initial par un second document chargé de manière asynchrone, et déclenche à la place l'évènement `load` de manière synchrone sur le document initial. ([bogue Firefox 543435 <sup>(angl.)</sup>](https://bugzil.la/543435)).

### CSS

- La propriété {{CSSxRef("position-area")}} dans [le positionnement par ancrage CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) maintient désormais correctement l'élément ancré à l'intérieur de la zone d'affichage.
  ([bogue Firefox 2008537 <sup>(angl.)</sup>](https://bugzil.la/2008537)).

- La propriété {{CSSxRef("position-try-order")}} dans [le positionnement par ancrage CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning) est désormais prise en charge et permet de changer l'ordre dans lequel les options de repli de position sont essayées en fonction de l'espace disponible. Cela affecte également la propriété abrégée {{CSSxRef("position-try")}}.
  ([bogue Firefox 1989059 <sup>(angl.)</sup>](https://bugzil.la/1989059)).

- Les propriétés CSS {{CSSxRef("overflow")}}, {{CSSxRef("overflow-x")}} et {{CSSxRef("overflow-y")}} peuvent désormais être utilisées sur les {{Glossary("replaced elements", "éléments remplacés")}} comme les images, de la même manière qu'elles sont utilisées avec d'autres éléments.
  Auparavant, les éléments remplacés étaient toujours rognés à leur conteneur englobant.
  ([bogue Firefox 1999100 <sup>(angl.)</sup>](https://bugzil.la/1999100)).

- La fonction CSS {{CSSxRef("basic-shape/shape")}} est désormais disponible par défaut. `shape()` est un type de donnée {{CSSxRef("basic-shape")}} qui permet de définir une forme dans les propriétés {{CSSxRef("clip-path")}} et {{CSSxRef("offset-path")}} en utilisant une ou plusieurs «&nbsp;commandes de forme&nbsp;». Ces commandes sont très similaires aux [commandes de tracé SVG](/fr/docs/Web/SVG/Reference/Attribute/d#commandes_de_tracé). La fonction `shape()` est similaire à certains égards à la fonction {{CSSxRef("basic-shape/path","path()")}}, mais contrairement à `path()`, qui utilise la syntaxe [de chemin SVG](/fr/docs/Web/SVG/Reference/Element/path), `shape()` utilise la syntaxe CSS standard. Cela permet d'utiliser des unités CSS et des fonctions mathématiques CSS, ce qui facilite la création et la modification de formes.
  ([bogue Firefox 1982941 <sup>(angl.)</sup>](https://bugzil.la/1982941)).

### JavaScript

- Les méthodes statiques {{JSxRef("Iterator.zip()")}} et {{JSxRef("Iterator.zipKeyed()")}} sont désormais prises en charge.
  Elles «&nbsp;compressent&nbsp;» plusieurs itérateurs d'entrée ensemble, retournant un nouvel itérateur qui produit le groupe d'éléments d'entrée à chaque étape d'itération.
  Elles sont utiles lorsque vous devez combiner des données provenant de plusieurs itérateurs d'entrée qui sont alignés positionnellement (la première valeur produite par le premier itérateur correspond à la première valeur produite par les autres itérateurs, et ainsi de suite).
  ([bogue Firefox 2003333 <sup>(angl.)</sup>](https://bugzil.la/2003333)).

- La proposition [TC39 Legacy RegExp features in JavaScript <sup>(angl.)</sup>](https://github.com/tc39/proposal-regexp-legacy-features) a été implémentée.
  Cela met à jour {{JSxRef("RegExp.prototype.compile()")}} de sorte qu'une {{JSxRef("TypeError")}} est levée si elle est appelée sur une sous-classe de {{JSxRef("RegExp")}}, ou si la méthode est appelée sur un `RegExp` qui a été défini dans un autre domaine.
  Les propriétés statiques de `RegExp`, telles que `RegExp.$1` — `RegExp.$9` et `RegExp.input` (et son alias `RegExp.$_`), sont normalisées pour être configurables et non énumérables.
  Cela signifie en particulier qu'elles peuvent être supprimées de l'objet `RegExp`.
  ([bogue Firefox 1306461 <sup>(angl.)</sup>](https://bugzil.la/1306461)).

### API

- [L'API HTML Sanitizer](/fr/docs/Web/API/HTML_Sanitizer_API) est désormais prise en charge, ainsi que les méthodes associées comme {{DOMxRef("Element.setHTML", "setHTML()")}}.
  Cela permet d'assainir le HTML avant de l'insérer dans le DOM, vous donnant un contrôle total sur le contenu résultant et réduisant le risque d'attaques XSS.
  ([bogue Firefox 1650370 <sup>(angl.)</sup>](https://bugzil.la/1650370)).

- [L'API Trusted Types](/fr/docs/Web/API/Trusted_Types_API) est désormais prise en charge.
  Elle fournit des mécanismes pour garantir que les propriétés et fonctions qui peuvent potentiellement être utilisées comme vecteurs d'attaques XSS ne peuvent être appelées qu'avec des données ayant été passées par une fonction de transformation.
  Les mécanismes permettent d'auditer les utilisations qui ne sont pas sûres du code.
  Ils n'imposent pas la manière dont les données sont transformées, mais peuvent, par exemple, être utilisés pour assainir des éléments HTML qui ne sont pas sûrs provenant de chaînes de caractères fournies par l'utilisateur·ice.
  ([bogue Firefox 1994690 <sup>(angl.)</sup>](https://bugzil.la/1994690)).

- La propriété {{DOMxRef("Location.ancestorOrigins")}} est désormais prise en charge, ce qui permet de déterminer si un document est intégré dans un {{HTMLElement("iframe")}} et, le cas échéant, par quel(s) site(s).
  ([bogue Firefox 1085214 <sup>(angl.)</sup>](https://bugzil.la/1085214)).

- Les propriétés {{DOMxRef("MouseEvent.movementX", "movementX")}} et {{DOMxRef("MouseEvent.movementY", "movementY")}} sur l'évènement {{DOMxRef("Element/pointerrawupdate_event", "pointerrawupdate")}} sont désormais renseignées lorsque le pointeur est déplacé — auparavant, elles étaient définies à zéro.
  ([bogue Firefox 1987671 <sup>(angl.)</sup>](https://bugzil.la/1987671)).

- La méthode {{DOMxRef("NavigationPrecommitController.addHandler()")}} de [l'API Navigation](/fr/docs/Web/API/Navigation_API) est désormais prise en charge.
  Elle peut être utilisée pour enregistrer dynamiquement un gestionnaire de navigation post-validation à l'intérieur d'un gestionnaire de pré-validation, ce qui est utile lorsque les actions de la navigation validée dépendent des données récupérées lors de la phase de pré-validation.
  ([bogue Firefox 2009004 <sup>(angl.)</sup>](https://bugzil.la/2009004)).

#### DOM

- Les commandes «&nbsp;coller&nbsp;» peuvent désormais être utilisées avec {{DOMxRef("Document.execCommand()")}} dans le contenu web (en plus des extensions web).
  Cela est implémenté en utilisant [l'API Clipboard](/fr/docs/Web/API/Clipboard_API) et partage les mêmes [considérations de sécurité](/fr/docs/Web/API/Clipboard_API#considérations_de_sécurité), telles que l'exigence d'une activation transitoire et la reconnaissance de l'utilisateur·ice lors du collage de contenu inter-origine.
  ([bogue Firefox 1998195 <sup>(angl.)</sup>](https://bugzil.la/1998195)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### Général

- Correction d'une condition de concurrence lors de l'initialisation des fonctionnalités de navigateur requises lors de l'ouverture d'une nouvelle fenêtre, empêchant des problèmes lors d'une navigation immédiate vers une autre URL ([bogue Firefox 1891028 <sup>(angl.)</sup>](https://bugzil.la/1891028)).
- Correction d'un problème d'interopérabilité entre Marionette et WebDriver BiDi où l'identifiant `clientWindow` de BiDi était incorrectement utilisé comme identifiant de fenêtre dans Marionette ([bogue Firefox 2002949 <sup>(angl.)</sup>](https://bugzil.la/2002949)).

#### WebDriver BiDi

- Ajout de la prise en charge initiale de l'interaction avec le contexte chrome du navigateur (la fenêtre Firefox elle-même). La commande `browsingContext.getTree` accepte désormais le paramètre spécifique au fournisseur `moz:scope` et retourne des contextes chrome lorsque celui-ci est défini sur `chrome` et que Firefox a été lancé avec l'argument `--remote-allow-system-access`. Ces contextes peuvent être utilisés avec `script.evaluate` et `script.callFunction` pour exécuter du JavaScript privilégié avec accès aux API Gecko. Les autres commandes ne prennent pas encore en charge les contextes chrome, mais la prise en charge sera ajoutée progressivement selon les besoins ([bogue Firefox 1944568 <sup>(angl.)</sup>](https://bugzil.la/1944568), [bogue Firefox 1944570 <sup>(angl.)</sup>](https://bugzil.la/1944570), et [bogue Firefox 1851788 <sup>(angl.)</sup>](https://bugzil.la/1851788)).
- Mise à jour des commandes `emulation.setGeolocationOverride` et `emulation.setScreenOrientationOverride` pour implémenter le nouveau comportement de réinitialisation&nbsp;: les contextes ne sont réinitialisés que lorsque le paramètre `contexts` est fourni, et les contextes utilisateur uniquement lorsque le paramètre `userContexts` est défini ([bogue Firefox 1998732 <sup>(angl.)</sup>](https://bugzil.la/1998732) et [bogue Firefox 1998734 <sup>(angl.)</sup>](https://bugzil.la/1998734)).
- Correction d'une condition de concurrence dans `browsingContext.create` où l'ouverture d'un nouvel onglet au premier plan pouvait retourner avant que le document ne devienne visible ([bogue Firefox 2003857 <sup>(angl.)</sup>](https://bugzil.la/2003857)).
- Correction d'un problème survenant lorsqu'une navigation redirigeait vers une page d'erreur ([bogue Firefox 2013822 <sup>(angl.)</sup>](https://bugzil.la/2013822)).
- Correction d'un problème dans `network.getData` qui provoquait une `RangeError` lors du décodage de corps de réponse fragmentés en raison d'une discordance de taille ([bogue Firefox 2004973 <sup>(angl.)</sup>](https://bugzil.la/2004973)).
- Correction d'un problème où les évènements `browsingContext.userPromptOpened` et `browsingContext.userPromptClosed` rapportaient incorrectement l'identifiant du contexte de niveau supérieur au lieu de l'identifiant du contexte de l'iframe ([bogue Firefox 1964905 <sup>(angl.)</sup>](https://bugzil.la/1964905)).
- Amélioration des performances des commandes WebDriver BiDi d'environ 100 ms lorsque le contexte sélectionné n'est plus disponible pendant l'exécution de la commande ([bogue Firefox 1934326 <sup>(angl.)</sup>](https://bugzil.la/1934326)).

#### Marionette

- Ajout de la commande `Reporting:GenerateTestReport` pour [générer un rapport de test via l'API Reporting <sup>(angl.)</sup>](https://www.w3.org/TR/reporting-1/#generate-test-report-command) ([bogue Firefox 1909662 <sup>(angl.)</sup>](https://bugzil.la/1909662)).

## Fonctionnalités web expérimentales

Ces fonctionnalités sont livrées dans Firefox 148 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée sur la page `about:config` et définissez-la sur `true`.
Vous pouvez trouver d'autres fonctionnalités de ce type sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **L'API Document Picture-in-Picture** (Nightly)&nbsp;: `dom.documentpip.enabled`

  [L'API Document Picture-in-Picture](/fr/docs/Web/API/Document_Picture-in-Picture_API) permet d'ouvrir une fenêtre toujours au premier plan qui peut être remplie avec du contenu HTML arbitraire, comme une vidéo avec des contrôles personnalisés ou un ensemble de flux montrant les participant·e·s d'un appel de visioconférence.
  ([bogue Firefox 1858562 <sup>(angl.)</sup>](https://bugzil.la/1858562)).
