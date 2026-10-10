---
title: Firefox 157 note de version pour les développeurs
short-title: Firefox 157
slug: Mozilla/Firefox/Releases/157
l10n:
  sourceCommit: 892eb917bee599a9d6cae7d33ed783129dbb39b3
---

Cet article présente les informations concernant les changements de Firefox 157 qui concernent les développeur·euse·s.
Firefox 157 est sorti le [29 septembre 2026 <sup>(angl.)</sup>](https://whattrainisitnow.com/release/?version=157).

## Changements pour les développeur·euse·s web

### HTML

Pas de changements notables.

### CSS

- La fonction [`at-rule()`](/fr/docs/Web/CSS/Reference/At-rules/@supports#at-rule) dans la règle @supports de {{CSSxRef("@supports")}} permet de tester si le navigateur prend en charge une règle CSS donnée, par exemple `@supports at-rule(@scope)`. Elle fonctionne également dans la fonction [`supports()`](/fr/docs/Web/CSS/Reference/At-rules/@import#supports-condition) de la règle CSS {{CSSxRef("@import")}}. ([bogue Firefox 2060755 <sup>(angl.)</sup>](https://bugzil.la/2060755)).
- La propriété raccourcie {{CSSxRef("overscroll-behavior")}} et les propriété longues {{CSSxRef("overscroll-behavior-block")}}, {{CSSxRef("overscroll-behavior-inline")}}, {{CSSxRef("overscroll-behavior-x")}} et {{CSSxRef("overscroll-behavior-y")}} prennent désormais en charge la valeur [`chain`](/fr/docs/Web/CSS/Reference/Properties/overscroll-behavior#chain). La valeur `chain` permet au défilement de passer à une autre zone défilable, mais n'autorise pas le comportement par défaut du navigateur en cas de défilement excessif (tel que le «&nbsp;rebond&nbsp;») lorsque la limite est atteinte. ([bogue Firefox 2036966 <sup>(angl.)</sup>](https://bugzil.la/2036966)).

### JavaScript

Pas de changements notables.

### APIs

- Le [type d'utilisation de texture](/fr/docs/Web/API/GPUTexture/usage#value) [WebGPU](/fr/docs/Web/API/WebGPU_API) `TRANSIENT_ATTACHMENT` est désormais pris en charge. Cela permet de créer des attachements économes en mémoire qui sont utilisés uniquement dans la passe de rendu actuelle. Les opérations de passe de rendu associées restent dans la mémoire de tuile, ce qui évite le trafic VRAM et peut éviter l'allocation de VRAM pour les textures. ([bogue Firefox 2005061 <sup>(angl.)</sup>](https://bugzil.la/2005061)).

#### DOM

- La méthode {{DOMxRef("Animation.reverse()")}} et la propriété {{DOMxRef("Animation.playbackRate")}} correspondent désormais à la spécification [des animations web <sup>(angl.)</sup>](/fr/docs/Web/API/Web_Animations_API) dans deux cas. Tout d'abord, l'appel de `reverse()` sur une animation dont `playbackRate` vaut `0` lance désormais l'animation. Cela met à jour {{DOMxRef("Animation.startTime", "startTime")}} et {{DOMxRef("Animation.currentTime", "currentTime")}}, tout en laissant `playbackRate` à `0`. Auparavant, l'appel n'avait aucun effet. Ensuite, lorsqu'une valeur positive ou négative est attribuée à `playbackRate` pour une [animation pilotée par le défilement <sup>(angl.)</sup>](/fr/docs/Web/CSS/Guides/Scroll-driven_animations), `startTime` de l'animation est désormais reporté à l'extrémité opposée de la chronologie. Ainsi, l'animation inversée reste dans la plage de défilement. Auparavant, `startTime` restait inchangé, ce qui est uniquement correct pour les chronologies basées sur le temps, telles que {{DOMxRef("DocumentTimeline")}}. Cet ajustement s'applique lorsque l'animation possède un `startTime` et une durée finie. ([bogue Firefox 2046973 <sup>(angl.)</sup>](https://bugzil.la/2046973)).

### Conformité WebDriver (WebDriver BiDi, Marionette)

#### Général

- Dorénavant, les préférences recommandées sont restaurées à une étape différente lors de l'arrêt.
  ([bogue Firefox 2066531 <sup>(angl.)</sup>](https://bugzil.la/2066531)).

#### WebDriver BiDi

- La commande `browser.setDownloadBehavior` est mise à jour pour exiger le paramètre `destinationFolder` lors de l'appel de la commande avec `type="allowed"`, ce qui nous aligne avec la spécification. Afin de restaurer le comportement par défaut sans devoir définir un dossier, les clients doivent appeler `browser.setDownloadBehavior` avec `null` à la place. ([bogue Firefox 2069952 <sup>(angl.)</sup>](https://bugzil.la/2069952)).

## Changements pour les développeur·euse·s d'extensions

- {{WebExtAPIRef("alarms.clearAll()")}} se complète désormais avec `undefined` au lieu d'un booléen. ([bogue Firefox 2067229 <sup>(angl.)</sup>](https://bugzil.la/2067229))

## Fonctionnalités web expérimentales

Ces fonctionnalités sont disponibles dans Firefox 157 mais sont désactivées par défaut.
Pour les tester, recherchez la préférence appropriée dans la page `about:config` et définissez-la sur `true`.
Vous pouvez en trouver d'autres sur la page [Fonctionnalités expérimentales](/fr/docs/Mozilla/Firefox/Experimental_features).

- **`export * from "mod"` inclut l'exportation par défaut**&nbsp;: `javascript.options.experimental.export_star_default`

  La [proposition d'exportation par défaut `*` de TC39 <sup>(angl.)</sup>](https://tc39.es/proposal-export-star-default/) permet à [`export * from "mod"`](/fr/docs/Web/JavaScript/Reference/Statements/export#réexportation_agrégée) de fournir également l'exportation par défaut du module, qu'elle omet actuellement.
  Notez que cette préférence peut uniquement être définie dans les compilations Nightly. ([bogue Firefox 2065611 <sup>(angl.)</sup>](https://bugzil.la/2065611)).

- **L'option `navigate` pour les notifications**&nbsp;: `dom.webnotifications.navigate.enabled`

  L'option `navigate` de la méthode {{DOMxRef("Notification.Notification", "Notification()")}} et {{DOMxRef("ServiceWorkerRegistration.showNotification()")}} prend une URL à ouvrir lorsque l'utilisateur·ice clique sur la notification, vous n'avez donc plus besoin d'un gestionnaire de clic juste pour ouvrir une page. La nouvelle propriété en lecture seule {{DOMxRef("Notification.navigate")}} retourne cette URL. Lorsque l'option est définie, les évènements {{DOMxRef("Notification.click_event", "click")}} et {{DOMxRef("ServiceWorkerGlobalScope.notificationclick_event", "notificationclick")}} ne se déclenchent plus pour cette notification. Chaque entrée dans l'option {{DOMxRef("Notification.actions", "actions")}} peut définir sa propre URL `navigate`, et un bouton d'action sans URL déclenche toujours `notificationclick` plutôt que d'utiliser l'URL de la notification.
  ([bogue Firefox 2066184 <sup>(angl.)</sup>](https://bugzil.la/2066184)).

- **Assainir le HTML lors de l'analyse**&nbsp;: `dom.security.sanitizer.while-parsing`

  Les méthodes qui assainissent le HTML avec l'API [HTML Sanitizer](/fr/docs/Web/API/HTML_Sanitizer_API), telles que {{DOMxRef("Element.setHTML()")}}, suppriment désormais les éléments et attributs indésirables lors de l'analyse du balisage, au lieu d'analyser tout le balisage d'abord et d'assainir ensuite l'arbre DOM résultant. Le résultat est le même, sauf que le texte voisin se retrouve maintenant dans un seul nœud de texte au lieu d'être divisé en plusieurs. ([bogue Firefox 2062652 <sup>(angl.)</sup>](https://bugzil.la/2062652)).

- **Encapsulation de clé dans Web Crypto**&nbsp;: `dom.webcrypto.encapsulation.enabled`

  [L'API Web Crypto](/fr/docs/Web/API/Web_Crypto_API) prend en charge ML-KEM, un algorithme qui permet à deux parties de s'accorder sur une clé secrète partagée. Il est conçu pour rester sécurisé contre les attaques par ordinateurs quantiques. {{DOMxRef("SubtleCrypto")}} a les nouvelles méthodes `encapsulateKey()`, `encapsulateBits()`, `decapsulateKey()` et `decapsulateBits()`, avec des {{DOMxRef("CryptoKey.usages", "usages")}} correspondants. Les noms d'algorithme pris en charge incluent `ML-KEM-512`, `ML-KEM-768` et `ML-KEM-1024`. {{DOMxRef("SubtleCrypto.importKey()")}} et {{DOMxRef("SubtleCrypto.exportKey()")}} acceptent également les nouveaux formats de clé `raw-public` et `raw-seed`. Cette fonctionnalité est activée par défaut dans les versions Nightly. ([bogue Firefox 1943614 <sup>(angl.)</sup>](https://bugzil.la/1943614)).
