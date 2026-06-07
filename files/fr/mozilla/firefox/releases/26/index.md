---
title: Firefox 26 note de version pour les développeurs
short-title: Firefox 26
slug: Mozilla/Firefox/Releases/26
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 26 est sorti le 10 Décembre 2013. Cet article répertorie les modifications clés qui sont utiles non seulement pour les développeur·euse·s Web, mais également pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s de modules complémentaires.

## Changements pour les développeur·euse·s Web

### CSS

- La propriété {{CSSxRef("text-decoration-line")}}, toujours préfixée, considère désormais `'blink'` comme une valeur valide, bien qu'elle ne fasse pas du tout clignoter le contenu ([bogue Firefox 812995 <sup>(angl.)</sup>](https://bugzil.la/812995)).
- La propriété non standard `-moz-text-blink` a été supprimée ([bogue Firefox 812995 <sup>(angl.)</sup>](https://bugzil.la/812995)).
- Le support de la propriété {{CSSxRef("image-orientation")}}, dans sa version CSS Images & Values Level 4, c'est-à-dire avec le mot clé `from-image` et le support EXIF, a été ajouté ([bogue Firefox 825771 <sup>(angl.)</sup>](https://bugzil.la/825771)).
- Le support expérimental `position: sticky` a été implémenté et peut être activé avec la préférence `layout.css.sticky.enabled` ([bogue Firefox 886646 <sup>(angl.)</sup>](https://bugzil.la/886646)).
- La propriété {{CSSxRef("text-align")}} s'applique désormais au pseudo-élément `::-moz-placeholder` ([bogue Firefox 915551 <sup>(angl.)</sup>](https://bugzil.la/915551)).

### HTML

- La propriété `HTMLSelectElement.selectedOptions` a été implémentée ([bogue Firefox 596681 <sup>(angl.)</sup>](https://bugzil.la/596681)).
- Dans l'élément {{HTMLElement("input")}} de type `email`, les valeurs avec des étiquettes de domaine de plus de 63 caractères ne sont plus considérées comme valides ([bogue Firefox 884332 <sup>(angl.)</sup>](https://bugzil.la/884332)).
- Les propriétés `HTMLInputElement.width` et `height` retournent désormais `0` lorsque le `type` n'est pas `image` ([bogue Firefox 905240 <sup>(angl.)</sup>](https://bugzil.la/905240)).
- Un élément {{HTMLElement("fieldset")}} est désormais invalide, et peut être stylisé en utilisant la pseudo-classe {{CSSxRef(":invalid")}}, quand l'un des éléments qu'il contient est invalide ([bogue Firefox 717181 <sup>(angl.)</sup>](https://bugzil.la/717181)).

### JavaScript

L'implémentation de EcmaScript 2015 continue&nbsp;!

- La syntaxe conforme à ECMAScript 2015 pour les [Générateurs (<i lang="en">yield</i> en anglais) <sup>(angl.)</sup>](https://web.archive.org/web/20170126155949/http://wiki.ecmascript.org/doku.php?id=harmony:generators) a été implémentée ([bogue Firefox 666399 <sup>(angl.)</sup>](https://bugzil.la/666399)).
- Les résultats du générateur / itérateur sont maintenant encadrés comme `{ value: toto, done: bool }` ([bogue Firefox 907744 <sup>(angl.)</sup>](https://bugzil.la/907744)).
- De nouvelles méthodes mathématiques ont été implémentées sur {{JSxRef("Math")}}&nbsp;: {{JSxRef("Math.fround()")}} ([bogue Firefox 900125 <sup>(angl.)</sup>](https://bugzil.la/900125)).
- Les [mots réservés](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#mots-clés) ne peuvent pas être utilisés pour les noms de fonctions: une telle utilisation lève désormais une {{JSxRef("SyntaxError")}} ([bogue Firefox 907958 <sup>(angl.)</sup>](https://bugzil.la/907958)).
- La syntaxe des [paramètres par défaut](/fr/docs/Web/JavaScript/Reference/Functions/Default_parameters) a été mise à jour pour autoriser les paramètres sans valeurs par défaut après les paramètres par défaut, tels que la `function f(x=1, y)`. Voir le [bogue Firefox 777060 <sup>(angl.)</sup>](https://bugzil.la/777060).
- {{JSxRef("Global_Objects/GeneratorFunction", "GeneratorFunction")}} est implémenté ([bogue Firefox 904701 <sup>(angl.)</sup>](https://bugzil.la/904701)).

### Interfaces/APIs/DOM

- Rendez le dernier argument (doctype) de {{DOMxRef("DOMImplementation.createDocument")}} facultatif ([bogue Firefox 909859 <sup>(angl.)</sup>](https://bugzil.la/909859)).
- Implémentez la nouvelle spécification {{DOMxRef("Element.classList")}} qui permet d'ajouter / supprimer plusieurs classes en un seul appel ([bogue Firefox 814014 <sup>(angl.)</sup>](https://bugzil.la/814014)).
- Le constructeur {{DOMxRef("URL.URL", "URL()")}} a été implémenté sur l'interface {{DOMxRef("URL")}} ([bogue Firefox 887364 <sup>(angl.)</sup>](https://bugzil.la/887364)).
- Les propriétés {{DOMxRef("HTMLAnchorElement/origin", "URLUtils.origin")}}, {{DOMxRef("HTMLAnchorElement/password", "URLUtils.password")}} et {{DOMxRef("HTMLAnchorElement/username", "URLUtils.username")}} sont désormais disponibles pour toutes les interfaces implémentant `URLUtils`&nbsp;: {{DOMxRef("URL")}}, {{DOMxRef("Location")}}, {{DOMxRef("HTMLAnchorElement")}} et {{DOMxRef("HTMLAreaElement")}} ([bogue Firefox 887364 <sup>(angl.)</sup>](https://bugzil.la/887364)).
- L'interface {{DOMxRef("URL")}} est désormais accessible depuis Web Workers ([bogue Firefox 887364 <sup>(angl.)</sup>](https://bugzil.la/887364)).
- IndexedDB peut maintenant être utilisé comme une zone de stockage "optimiste" donc il ne nécessite aucune invite et les données sont stockées dans un pool avec une politique d'éviction LRU, dans un court stockage temporaire ([bogue Firefox 785884 <sup>(angl.)</sup>](https://bugzil.la/785884)).
- Le support de {{DOMxRef("WaveShaperNode.oversample")}} a été ajouté ([bogue Firefox 875277 <sup>(angl.)</sup>](https://bugzil.la/875277)).
- Le chemin du stockage persistant a été changé de `<profile>/indexedDB` à `<profile>/storage/persistent` (sur b2g de `/data/local/indexedDB` à `/data/local/storage/persistent`).
- La propriété {{DOMxRef("Screen.orientation")}} et la méthode {{DOMxRef("Screen.lockOrientation()")}} prennent désormais en charge la valeur `default`, mappant sur `portrait-primary` ou `landscape-primary`, selon l'appareil ([bogue Firefox 908058 <sup>(angl.)</sup>](https://bugzil.la/908058)). Cela ne fonctionne que pour Firefox OS et Firefox pour Android. Firefox Desktop n'est pas pris en charge.
- Les constructeurs {{DOMxRef("Event")}} peuvent être utilisés dans les Web workers ([bogue Firefox 910910 <sup>(angl.)</sup>](https://bugzil.la/910910)).
- Tenter de définir la propriété {{DOMxRef("Document.domain")}} sur une page intégrée dans un {{HTMLElement("iframe")}} avec l'attribut `sandbox` génère maintenant une erreur de sécurité ([bogue Firefox 907892 <sup>(angl.)</sup>](https://bugzil.la/907892)).
- L'interface {{DOMxRef("MessageEvent")}} a été mise à jour pour se conformer à la dernière spécification. La méthode `initMessageEvent` a été supprimée alors que l'interface a maintenant un constructeur ([bogue Firefox 848294 <sup>(angl.)</sup>](https://bugzil.la/848294)).
- L'API HTML5 `MessageChannel` a été implémentée, derrière la préférence `dom.messageChannel.enabled` ([bogue Firefox 677638 <sup>(angl.)</sup>](https://bugzil.la/677638)).
- Le support pour `VTTCue`, derrière la préférence `media.webvtt.enabled`, comme pour toutes les implémentations liées à WebVTT, a été ajouté ([bogue Firefox 868509 <sup>(angl.)</sup>](https://bugzil.la/868509)).
- [L'API Web Audio](/fr/docs/Web/API/Web_Audio_API) a été rendue disponible par défaut ([bogue Firefox 885505 <sup>(angl.)</sup>](https://bugzil.la/885505)).

### MathML

- Les rendus incohérents de {{MathMLElement("mmultiscripts")}}, {{MathMLElement("msub")}}, {{MathMLElement("msup")}} et {{MathMLElement("msubsup")}} ont été unifiés et la gestion des erreurs de ces éléments a été améliorée ([bogue Firefox 827713 <sup>(angl.)</sup>](https://bugzil.la/827713)).

### SVG

- L'inclusion de glyphes SVG dans OpenType, _SVG-in-OpenType_, a été mise à jour pour correspondre à la version actuelle de la spécification ([bogue Firefox 906521 <sup>(angl.)</sup>](https://bugzil.la/906521)).
- La méthode `SVGElement.ownerSVGElement()` ne lance plus ([bogue Firefox 835048 <sup>(angl.)</sup>](https://bugzil.la/835048)).

## Outils de développement

- L'Inspector est désormais accessible à distance ([bogue Firefox 805526 <sup>(angl.)</sup>](https://bugzil.la/805526)).
- Le texte de la console Web peut être sélectionné, {{CSSxRef("::before")}} et {{CSSxRef("::after")}} peuvent désormais être inspectés, des fonctionnalités de débogage et de conception réactive sont prévues pour cette version. (<https://hacks.mozilla.org/2013/09/new-features-in-the-firefox-developer-tools-episode-26/> <sup>(angl.)</sup>)
