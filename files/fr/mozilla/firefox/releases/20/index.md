---
title: Firefox 20 pour les développeurs
slug: Mozilla/Firefox/Releases/20
---

{{FirefoxSidebar}}

Firefox 20 est sorti le 2 avril 2013. Cette page résume les principaux changements dans Firefox 20 qui sont utiles aux développeurs.

## Changements pour les développeurs Web

### HTML

- Le support de l'attribut [`download`](/fr/docs/Web/HTML/Reference/Elements/a#download) sur les éléments {{HTMLElement("a")}} et {{HTMLElement("area")}} a été ajouté ([bug Firefox 676619](https://bugzil.la/676619)).
- La valeur `auto` pour [l'attribut global](/fr/docs/Web/HTML/Reference/Global_attributes) [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes#attr-dir) a été implémenté ([bug Firefox 548206](https://bugzil.la/548206)).

### JavaScript

- Le support de la méthode `Weakmap.prototype.clear()`, récemment ajoutée au brouillon d'Harmony (EcmaScript 6), a été ajouté ([bug Firefox 814562](https://bugzil.la/814562)).
- Le support de la méthode [`Math.imul()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/imul), une fonction de multiplication 32 bits de type C. Bien qu'elle soit proposée pour Harmony (EcmaScript 6), elle n'a pas encore été acceptée et reste non-standard ([bug Firefox 808148](https://bugzil.la/808148)).
- Les applications Web utilisant le déplacement de texte grâce à Kinetic 3.x fonctionnent, même en utilisant le backend Cairo Canvas. ([bug Firefox 835064](https://bugzil.la/835064))
- L'instruction [`for each...in`](/fr/docs/JavaScript/Reference/Statements/for_each...in) a été dépréciée et ne doit plus être utilisée. Pensez à utiliser la nouvelle instruction [`for...of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of) ([bug Firefox 804834](https://bugzil.la/804834)).

### CSS

- [CSS Flexbox](/fr/docs/Web/CSS/CSS_flexible_box_layout/Basic_concepts_of_flexbox) est désormais disponible par défaut, uniquement dans les versions préliminaires (hors Bêta). Elle peut être activée dans la version finale en modifiant une préférence dans about:config.
- La propriété `mask-type` de la [spécification CSS Masking](https://dvcs.w3.org/hg/FXTF/raw-file/tip/masking/index.html) a été ajoutée ([bug Firefox 793617](https://bugzil.la/793617)).

### DOM

- {{domxref("HTMLMediaElement")}} supporte désormais `playbackRate` (en lecture et écriture), avec correction de hauteur. La correction de hauteur peut être contrôlé à l'aide de la propriété `mozPreservesPitch` ([bug Firefox 495040](https://bugzil.la/495040)).
- CSSOM : Le support des nouvelles interfaces {{domxref("CSSGroupingRule")}} et {{domxref("CSSConditionRule")}} a été ajouté ([bug Firefox 814907](https://bugzil.la/814907)).
- CSSOM : Sur la constante {{domxref("CSSRule")}}, CSSRule.MOZ_KEYFRAME_RULE et CSSRule.MOZ_KEYFRAMES_RULE ont été dé-préfixés pour CSSRule.KEYFRAME_RULE et CSSRule.KEYFRAMES_RULE. La version préfixée est temporairement maintenue, pour aider les auteurs Web à la transition de leur code ([bug Firefox 816431](https://bugzil.la/816431)).
- CSSOM : Il est désormais possible de définir la valeur de `conditionText` pour {{domxref("CSSMediaRule")}} ([bug Firefox 815021](https://bugzil.la/815021)).
- Les méthodes `parseFromStream` et `parseFromBuffer` de {{domxref("DOMParser")}} ne sont plus disponibles à partir de contenu web ([bug Firefox 816410](https://bugzil.la/816410)).
- La méthode `serializeToStream` de [`XMLSerializer`](/fr/docs/Web/API/XMLSerializer) n'est plus disponible à partir de contenu web ([bug Firefox 816410](https://bugzil.la/816410)).
- Les interfaces `TextDecoder` et `TextEncoder` sont désormais disponibles dans Workers ([bug Firefox 795542](https://bugzil.la/795542)).
- Le support de la méthode `CSS.supports()` a été ajouté ([bug Firefox 779917](https://bugzil.la/779917)).
- Le support pour UndoManager a été ajouté ([bug Firefox 617532](https://bugzil.la/617532)).
- L'interface {{domxref("CaretPosition")}} a été implémentée dans la méthode CSSOM {{domxref("document.caretPositionFromPoint")}}.

### MathML

- Pour aider les auteurs MathML dans le débogage des erreurs "invalid-markup" dans leurs documents, les erreurs d'analyse MathML (comme avoir trop / pas assez d'éléments enfants) et les avertissements au sujet des attributs obsolètes ou fausses valeurs d'attributs sont maintenant signalées à la [console d'erreur](/fr/docs/Error_Console)
- L'attribut `scriptminsize` accepte désormais des valeurs sans unité et les valeurs en pourcent. Elles sont interprétées comme des multiples de la valeur par défaut ("8pt").
- Des valeurs sans unité sont désormais permis pour les attributs `mathsize` et `fontsize`, ils multiplient la valeur par défaut.

## Changements pour les add-ons et les développeurs Mozilla

- L'interface nsIDOMParserJS n'existe plus ([bug Firefox 816410](https://bugzil.la/816410)). Voir [nsIDOMParser](/fr/docs/nsIDOMParser) pour des alternatives.
- Préférences de contenu : L'interface `nsIContentPrefService` est désormais obsolète et l'API asynchrone de stockage `nsIContentPrefService2` a été implémentée.

## Voir aussi

- [Notes de version de Firefox 20](https://www.mozilla.org/en-US/firefox/20.0/releasenotes/)
- [Site Compatibility for Firefox 20](/fr/docs/Site_Compatibility_for_Firefox_20)

### Anciennes versions

{{Firefox_for_developers('19')}}
