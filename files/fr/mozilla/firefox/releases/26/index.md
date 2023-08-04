---
title: Firefox 26 for developers
slug: Mozilla/Firefox/Releases/26
---

{{FirefoxSidebar}}

Firefox 26 est sorti le 10 Décembre 2013. Cet article répertorie les modifications clés qui sont utiles non seulement pour les développeurs Web, mais également pour les développeurs Firefox et Gecko ainsi que pour les développeurs de modules complémentaires.

## Changements pour les développeurs Web

### CSS

- La propriété {{cssxref("text-decoration-line")}}, toujours préfixée, considère désormais `'blink'` comme une valeur valide, bien qu'elle ne fasse pas du tout clignoter le contenu ([bug Firefox 812995](https://bugzil.la/812995)).
- La propriété `non standard` {{cssxref("-moz-text-blink")}} a été supprimée ([bug Firefox 812995](https://bugzil.la/812995)).
- Le support de la propriété {{cssxref("image-orientation")}}, dans sa version CSS Images & Values Level 4, c'est-à-dire avec le mot clé `from-image` et le support EXIF, a été ajouté ([bug Firefox 825771](https://bugzil.la/825771)).
- Le support expérimental `position: sticky` a été implémenté et peut être activé par pref `layout.css.sticky.enabled` ([bug Firefox 886646](https://bugzil.la/886646)).
- La propriété {{cssxref("text-align")}} s'applique désormais au pseudo-élément {{cssxref("::-moz-placeholder")}} ([bug Firefox 915551](https://bugzil.la/915551)).

### HTML

- La proprété `HTMLSelectElement.selectedOptions` a été implémentée ([bug Firefox 596681](https://bugzil.la/596681)).
- Dans l'élément {{HTMLElement("input")}} de type `email`, les valeurs avec des étiquettes de domaine de plus de 63 caractères ne sont plus considérées comme valides ([bug Firefox 884332](https://bugzil.la/884332)).
- Les propriétés `HTMLInputElement.width` et `height` renvoient désormais `0` lorsque le `type` n'est pas `image` ([bug Firefox 905240](https://bugzil.la/905240)).
- Un élément {{HTMLElement("fieldset")}} est désormais invalide, et peut être stylisé en utilisant la pseudo-classe {{cssxref(":invalid")}}, quand l'un des éléments qu'il contient est invalide ([bug Firefox 717181](https://bugzil.la/717181)).

### JavaScript

L'implémentation d'[EcmaScript 6](/fr/docs/Web/JavaScript/ECMAScript_6_support_in_Mozilla) se poursuit!

- La syntaxe conforme à ECMAScript 6 pour les [Générateurs (yield)](http://wiki.ecmascript.org/doku.php?id=harmony:generators) a été implémentée ([bug Firefox 666399](https://bugzil.la/666399)).
- Les résultats du générateur / itérateur sont maintenant encadrés comme `{ value: foo, done: bool }` ([bug Firefox 907744](https://bugzil.la/907744)).
- De nouvelles méthodes mathématiques ont été implémentées sur [`Math`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math): [`Math.fround()`](/fr/docs/JavaScript/Reference/Global_Objects/Math/fround) ([bug Firefox 900125](https://bugzil.la/900125)).
- Les [mots réservés](/fr/docs/Web/JavaScript/Reference/Reserved_Words) ne peuvent pas être utilisés pour les noms de fonctions: une telle utilisation lève désormis une [`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) ([bug Firefox 907958](https://bugzil.la/907958)).
- La syntaxe des [paramètres par défaut](/fr/docs/Web/JavaScript/Reference/Functions/Default_parameters) a été mise à jour pour autoriser les paramètres sans valeurs par défaut après les paramètres par défaut, tels que la `function f(x=1, y)`. See [bug Firefox 777060](https://bugzil.la/777060).
- {{jsxref("Global_Objects/GeneratorFunction", "GeneratorFunction")}} est implémenté ([bug Firefox 904701](https://bugzil.la/904701)).

### Interfaces/APIs/DOM

- Rendez le dernier argument (doctype) de {{domxref("DOMImplementation.createDocument")}} facultatif ([bug Firefox 909859](https://bugzil.la/909859)).
- Implémentez la nouvelle spécification {{domxref("element.classList")}} qui permet d'ajouter / supprimer plusieurs classes en un seul appel ([bug Firefox 814014](https://bugzil.la/814014)).
- Le constructeur {{domxref("URL.URL", "URL()")}} a été implémenté sur l'interface {{domxref("URL")}} ([bug Firefox 887364](https://bugzil.la/887364)).
- Les propriétés {{domxref("URLUtils.origin")}}, {{domxref("URLUtils.password")}}, et {{domxref("URLUtils.username")}} sont désormais disponibles pour toutes les interfaces implémentant {{domxref("URLUtils")}}: {{domxref("URL")}}, {{domxref("Location")}}, {{domxref("HTMLAnchorElement")}}, et {{domxref("HTMLAreaElement")}} ([bug Firefox 887364](https://bugzil.la/887364)).
- L'interface {{domxref("URL")}} est désormais accessible depuis Web Workers ([bug Firefox 887364](https://bugzil.la/887364)).
- IndexedDB peut maintenant être utilisé comme une zone de stockage "optimiste" donc il ne nécessite aucune invite et les données sont stockées dans un pool avec une politique d'éviction LRU, dans un court stockage temporaire ([bug Firefox 785884](https://bugzil.la/785884)).
- Le support de {{domxref("WaveShaperNode.oversample")}} a été ajouté ([bug Firefox 875277](https://bugzil.la/875277)).
- Le chemin du stockage persistant a été changé de `<profile>/indexedDB` à `<profile>/storage/persistent` (sur b2g de `/data/local/indexedDB` à `/data/local/storage/persistent`).
- La propriété {{domxref("Screen.orientation")}} et la méthode {{domxref("Screen.lockOrientation()")}} prennent désormais en charge la valeur `default`, mappant sur `portrait-primary` ou `landscape-primary`, selon l'appareil ([bug Firefox 908058](https://bugzil.la/908058)). Cela ne fonctionne que pour Firefox OS et Firefox pour Android. Firefox Desktop n'est pas pris en charge.
- Les constructeurs {{domxref("Event")}} peuvent être utilisés dans les Web workers ([bug Firefox 910910](https://bugzil.la/910910)).
- Tenter de définir la propriété {{domxref("Document.domain")}} sur une page intégrée dans un {{HTMLElement("iframe")}} avec l'attribut `sandbox` génère maintenant une erreur de sécurité ([bug Firefox 907892](https://bugzil.la/907892)).
- L'interface {{domxref("MessageEvent")}} a été mise à jour pour se conformer à la dernière spécification. La méthode `initMessageEvent` a été supprimée alors que l'interface a maintenant un constructeur ([bug Firefox 848294](https://bugzil.la/848294)).
- L'API HTML5 `MessageChannel` a été implémentée, derrière la préférence `dom.messageChannel.enabled` ([bug Firefox 677638](https://bugzil.la/677638)).
- Le support pour `VTTCue`, derrière la préférence `media.webvtt.enabled`, comme pour toutes les implémentations liées à WebVTT, a été ajouté ([bug Firefox 868509](https://bugzil.la/868509)).

### MathML

- Les rendus incohérents de {{MathMLElement("mmultiscripts")}}, {{MathMLElement("msub")}}, {{MathMLElement("msup")}} et {{MathMLElement("msubsup")}} ont été unifiés et la gestion des erreurs de ces éléments a été améliorée ([bug Firefox 827713](https://bugzil.la/827713)).

### SVG

- L'inclusion de glyphes SVG dans OpenType, _SVG-in-OpenType_, a été mise à jour pour correspondre à la version actuelle de la spécification ([bug Firefox 906521](https://bugzil.la/906521)).
- La méthode `SVGElement.ownerSVGElement()` ne lance plus ([bug Firefox 835048](https://bugzil.la/835048)).

## Outils de développement

- L'Inspector est désormais accessible à distance ([bug Firefox 805526](https://bugzil.la/805526)).
- Le texte de la console Web peut être sélectionné, {{cssxref("::before")}} et {{cssxref("::after")}} maintenant inspectables, des fonctionnalités de débogage et de conception réactive sont prévues pour cette version. (<https://hacks.mozilla.org/2013/09/new-features-in-the-firefox-developer-tools-episode-26/>)

## Voir aussi

### Versions plus anciennes

{{Firefox_for_developers('25')}}
