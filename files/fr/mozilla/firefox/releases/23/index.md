---
title: Firefox 23 note de version pour les développeurs
short-title: Firefox 23
slug: Mozilla/Firefox/Releases/23
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

## Changements pour les développeur·euse·s Web

### Outils de développement

- Un panneau Réseau a été ajouté aux outils de développement. C'est une vue plus détaillée que la vue «&nbsp;Réseau&nbsp;» présente dans la console Web.
- La console Web a été renommée en «&nbsp;Console&nbsp;», et inclut une option pour filtrer les erreurs/avertissements de sécurité.
- Les nouvelles options des outils vous permettent de désactiver des fonctionnalités, de changer de thème (sombre ou clair), ou d'activer le débogage du Chrome/à distance.

### HTML

- Le support de l'élément `<blink>` a désormais été abandonné. La balise `<blink>` fait désormais partie de l'interface {{DOMxRef("HTMLUnknownElement")}} ([bogue Firefox 857820 <sup>(angl.)</sup>](https://bugzil.la/857820).)
- Le type `range` de l'élément {{HTMLElement("input")}} (`<input type="range">`) a été activé par défaut ([bogue Firefox 841950 <sup>(angl.)</sup>](https://bugzil.la/841950)).

### JavaScript

- La méthode {{JSxRef("Object.defineProperty()")}} peut désormais être utilisée pour redéfinir la propriété `length` d'un objet {{JSxRef("Array")}}.
- L'option pour désactiver JavaScript, incluant les options pour permettre de déplacer une fenêtre/remplacer le menu contextuel, a été retirée. Vous pouvez toujours désactiver JavaScript en double-cliquant sur l'option «&nbsp;javascript.enabled&nbsp;» dans about:config.

### DOM

- D3E {{DOMxRef("KeyboardEvent.key")}} est désormais pris en charge, mais seulement pour les éléments non-imprimables ([bogue Firefox 842927 <sup>(angl.)</sup>](https://bugzil.la/842927)).
- L'attribut `title` de {{DOMxRef("DOMImplementation.createHTMLDocument")}} est désormais optionnel, d'après la mise à jour de la spécification DOM.
- La possibilité d'ajouter un panneau latéral (`window.sidebar.addPanel`) a été abandonnée ([bogue Firefox 691647 <sup>(angl.)</sup>](https://bugzil.la/691647)).
- Les méthodes {{DOMxRef("Window.requestAnimationFrame")}} et {{DOMxRef("Window.cancelAnimationFrame")}} sans préfixe ont été ajoutées ([bogue Firefox 704063 <sup>(angl.)</sup>](https://bugzil.la/704063)). La version sans préfixe de {{DOMxRef("Window.requestAnimationFrame")}} reçoit un {{DOMxRef("DOMHighResTimeStamp")}} comme argument&nbsp;; la version avec préfixe reçoit un timestamp en millisecondes ([bogue Firefox 753453 <sup>(angl.)</sup>](https://bugzil.la/753453)).
- L'argument text pour {{DOMxRef("window.alert")}} et {{DOMxRef("window.confirm")}} est désormais optionnel ([bogue Firefox 861605 <sup>(angl.)</sup>](https://bugzil.la/861605)).
- La propriété `HTMLMediaElement.initialTime`, retirée de la spécification, n'est plus prise en charge ([bogue Firefox 742537 <sup>(angl.)</sup>](https://bugzil.la/742537)).
- Le constructeur {{DOMxRef("AnimationEvent.AnimationEvent", "AnimationEvent()")}} a été ajouté ([bogue Firefox 848293 <sup>(angl.)</sup>](https://bugzil.la/848293)).
- La propriété {{DOMxRef("AnimationEvent.pseudoElement")}} a été implémentée ([bogue Firefox 848293 <sup>(angl.)</sup>](https://bugzil.la/848293)).
- Le constructeur {{DOMxRef("TransitionEvent.TransitionEvent", "TransitionEvent()")}} a été ajouté ([bogue Firefox 848291 <sup>(angl.)</sup>](https://bugzil.la/848291)).
- La propriété {{DOMxRef("TransitionEvent.pseudoElement")}} a été implémentée ([bogue Firefox 848291 <sup>(angl.)</sup>](https://bugzil.la/848291)).
- `TransitionEvent.initTransitionEvent()` et `AnimationEvent.initAnimationEvent()` qui ne sont pas standardisées ont été retirées ([bogue Firefox 868751 <sup>(angl.)</sup>](https://bugzil.la/868751)).

### WebRTC

- Au lieu d'inclure des noms d'utilisateur·ice dans la propriété `RTCIceServer.url` (comme `stun:username@stunserver.example.com`), vous devez maintenant utiliser la nouvelle propriété `RTCIceServer.username`.

### CSS

- L'effet clignotant pour `text-decoration: blink;` n'a plus d'effet, mais c'est encore une valeur valide ([bogue Firefox 857820 <sup>(angl.)</sup>](https://bugzil.la/857820)).
- Les pseudo-éléments {{CSSxRef("::after")}} et {{CSSxRef("::before")}} sont désormais des objets flexibles ([bogue Firefox 867454 <sup>(angl.)</sup>](https://bugzil.la/867454)).
- La façon de calculer les [unités de la zone d'affichage](/fr/docs/Web/CSS/Reference/Values/length#unités_de_longueur_relatives_à_la_zone_daffichage) a été changée. en liaison avec `overflow:auto`, l'espace occupé par d'éventuelles barres de défilement n'est pas soustrait de la fenêtre, alors que dans le cas de `overflow:scroll`, ça l'est ([bogue Firefox 811403 <sup>(angl.)</sup>](https://bugzil.la/811403)).

### MathML

- Les largeurs négatives pour l'élément {{MathMLElement("mspace")}} ont été implémentées ([bogue Firefox 717546 <sup>(angl.)</sup>](https://bugzil.la/717546)).
- L'élément {{MathMLElement("semantics")}} détermine désormais l'enfant visible comme décrit dans la spécification MathML3.

### Sécurité

- Blocage des contenus mixte. Firefox ne charge plus les ressources non-sécurisées (http) sur une page sécurisée (https). ([bogue Firefox 834836 <sup>(angl.)</sup>](https://bugzil.la/834836))
- La syntaxe standard de [CSP](/fr/docs/Web/HTTP/Guides/CSP 1.0 a été implémentée et appliquée par défaut.

## Changements pour les développeur·euse·s Mozilla et d'extensions

### Outils de développement Firefox

Les add-ons qui ont recourt à chrome://browser/content/debugger.xul doivent désormais utiliser chrome://browser/content/devtools/debugger.xul. Vous pouvez ajouter des références à ces deux fichiers dans chrome.manifest pour la compatibilité.

## Voir aussi

- [Notes de version de Firefox 23 Aurora <sup>(angl.)</sup>](https://website-archive.mozilla.org/www.mozilla.org/firefox_releasenotes/en-us/firefox/23.0a2/auroranotes/)
