---
title: Firefox 23 pour les développeurs
slug: Mozilla/Firefox/Releases/23
---

{{FirefoxSidebar}}

##### Changements pour les développeurs Web

### Sécurité

- Blocage des contenus mixte. Firefox ne charge plus les ressources non-sécurisées (http) sur une page sécurisée (https). ([bug Firefox 834836](https://bugzil.la/834836))
- La syntaxe standard de [CSP](/fr/docs/Sécurité/CSP) 1.0 a été implémentée et appliquée par défaut.

### Outils de développement

- Un panneau Réseau a été ajouté aux outils de développement. C'est une vue plus détaillée que la vue "Réseau" présente dans la console Web.
- La console Web a été renommée en "Console", et inclus une option pour filtrer les erreurs/avertissement de sécruité.
- Les nouvelles options des outils vous permettent de désactiver des fonctionnalités, de changer de thème (sombre ou clair), ou d'activer le débogage du Chrome.

### HTML

- Le support de l'élément `<blink>` a désormais été abandonné. La balise `<blink>` fait désormais partie de l'interface {{domxref("HTMLUnknownElement")}} ([bug Firefox 857820](https://bugzil.la/857820).)
- Le type `range` de l'élément {{HTMLElement("input")}} (`<input type="range">`) a été activé par défaut ([bug Firefox 841950](https://bugzil.la/841950)).

### JavaScript

- La méthode [`Object.defineProperty`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty) peut désormais être utilisée pour redéfinir la propriété `length` d'un objet [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array).
- L'option pour désactiver JavaScript, incluant les options pour permettre de déplacer une fenêtre/remplacer le menu contextuel, a été retirée. Vous pouvez toujours désactiver JavaScript en double-cliquant sur l'option "javascript.enabled" dans about:config.

### DOM

- D3E [`KeyboardEvent.key`](/fr/docs/Web/API/KeyboardEvent) est désormais supporté, mais seulement pour les éléments non-imprimables ([bug Firefox 842927](https://bugzil.la/842927)).
- L'attribut `title` de {{domxref("DOMImplementation.createHTMLDocument")}} est désormais optionnel, d'après la mise à jour de la spécification DOM.
- La possibilité d'ajouter un panneau latéral (`window.sidebar.addPanel`) a été abandonnée ([bug Firefox 691647](https://bugzil.la/691647)).
- Les méthodes {{domxref("Window.requestAnimationFrame")}} et {{domxref("Window.cancelAnimationFrame")}} sans préfixe ont été ajoutées ([bug Firefox 704063](https://bugzil.la/704063)).
- Le rappel pour {{domxref("Window.requestAnimationFrame")}} reçoit désormais {{domxref("DOMHighResTimeStamp")}} comme argument à la place de {{domxref("DOMTimeStamp")}}, moins précis, qui est utilisé dans la version sans préfixe ([bug Firefox 753453](https://bugzil.la/753453)).
- L'argument text pour {{domxref("window.alert")}} et {{domxref("window.confirm")}} est désormais optionnel ([bug Firefox 861605](https://bugzil.la/861605)).
- La propriété {{domxref("HTMLMediaElement.initialTime")}}, retirée de la spécification, n'est plus supportée ([bug Firefox 742537](https://bugzil.la/742537)).
- Le constructeur {{domxref("AnimationEvent.AnimationEvent", "AnimationEvent()")}} a été ajoutée ([bug Firefox 848293](https://bugzil.la/848293)).
- La propriété {{domxref("AnimationEvent.pseudoElement")}} a été implémentée ([bug Firefox 848293](https://bugzil.la/848293)).
- Le constructeur {{domxref("TransitionEvent.TransitionEvent", "TransitionEvent()")}} a été ajoutée ([bug Firefox 848291](https://bugzil.la/848291)).
- La propriété {{domxref("TransitionEvent.pseudoElement")}} a été implémentée ([bug Firefox 848291](https://bugzil.la/848291)).
- {{domxref("TransitionEvent.initTransitionEvent()")}} et {{domxref("AnimationEvent.initAnimationEvent()")}} qui ne sont pas standardisées ont été retirées ([bug Firefox 868751](https://bugzil.la/868751)).

### CSS

- L'effet blink pour `text-decoration: blink;` n'a plus d'effet, mais c'est encore une valeur valide ([bug Firefox 857820](https://bugzil.la/857820)).
- Les pseudo-éléments {{cssxref("::after")}} et {{cssxref("::before")}} sont désormais des objets flexibles ([bug Firefox 867454](https://bugzil.la/867454)).
- La façon de calculer les [unités viewport](/fr/docs/Web/CSS/length#longueurs_li.c3.a9es_au_viewport) a été changée. en liaison avec `overflow:auto`, l'espace occupé par d'éventuelles barres de défilement n'est pas soustrait de la fenêtre, alors que dans le cas de `overflow:scroll`, ça l'est ([bug Firefox 811403](https://bugzil.la/811403)).

### MathML

- Les largeurs négatives pour l'élément {{MathMLElement("mspace")}} ont été implémentées ([bug Firefox 717546](https://bugzil.la/717546)).
- L'élément {{MathMLElement("semantics")}} détermine désormais l'enfant visible comme décrit dans la spécification MathML3.

## Changements pour les développeurs Mozilla et développeurs d'add-on

### Outils pour développeurs de Firefox

Les add-ons qui ont recourt à chrome://browser/content/debugger.xul doivent désormais utiliser chrome://browser/content/devtools/debugger.xul. Vous pouvez ajouter des références à ces deux fichiers dans chrome.manifest pour la compatibilité.

## Voir aussi

- [Notes de version de Firefox 23](https://www.mozilla.org/en-US/firefox/23.0/releasenotes/)
- [Compatibilité des sites avec Firefox 23](/fr/docs/Site_Compatibility_for_Firefox_23)
- [Compatibilité des add-ons avec Firefox 23](https://blog.mozilla.org/addons/2013/07/24/compatibility-for-firefox-23/)

### Anciennes versions

{{Firefox_for_developers('22')}}
