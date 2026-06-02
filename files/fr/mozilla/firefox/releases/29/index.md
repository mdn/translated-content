---
title: Firefox 29 note de version pour les développeurs
short-title: Firefox 29
slug: Mozilla/Firefox/Releases/29
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 29 est sorti le 29 Avril, 2014. Cet article répertorie les modifications clés qui sont utiles non seulement pour les développeur·euse·s Web, mais aussi pour es développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'add-on.

## Changements pour les développeur·euse·s Web

### Outils de développement

Les principaux changements comprennent:

- Console web largement améliorée - Les tableaux sont affichés en ligne sans cliquer pour faire apparaître l'inspecteur de droite, les objets de fenêtre affichent leur URL, etc.
- Ajout de [l'API console](/fr/docs/Web/API/console) aux Web Workers ([bogue 620935 <sup>(angl.)</sup>](https://bugzil.la/620935)). Vous pouvez désormais consigner les messages dans la console Web à partir de Web Workers.
- L'outil [Moniteur réseau <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) affiche désormais des statistiques de performances à l'aide de graphiques à secteurs ([bogue Firefox 846601 <sup>(angl.)</sup>](https://bugzil.la/846601)).
- Sur [l'inspecteurhttps://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html), des info-bulles d'aperçu des transformations CSS sont désormais disponibles ([bogue Firefox 726427 <sup>(angl.)</sup>](https://bugzil.la/726427)).
- Les éléments DOM vus dans le débogueur et la console peuvent être supprimés ou inspectés directement, sur les nouveaux boutons à droite de la liste des variables.
- Une carte source CSS est désormais prise en charge par [l'éditeur de style <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) ([bogue Firefox 926014 <sup>(angl.)</sup>](https://bugzil.la/926014)).
- L'Autocompletion des propriétés et valeurs CSS a été ajoutée à [l'éditeur de style <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) ([bogue Firefox 717369 <sup>(angl.)</sup>](https://bugzil.la/717369)).

_Consultez [l'article du blog Mozilla Hacks <sup>(angl.)</sup>](https://hacks.mozilla.org/2014/02/css-source-map-support-network-performance-analysis-more-firefox-developer-tools-episode-29/) pour plus de détails et d'autres changements mineurs._

### CSS

- Des [variables CSS](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) ont été implémentées ([bogue Firefox 773296 <sup>(angl.)</sup>](https://bugzil.la/773296)). L'article [des variables CSS dans Firefox Nightly <sup>(angl.)</sup>](https://hacks.mozilla.org/2013/12/css-variables-in-firefox-nightly/) sur Mozilla Hacks donne plus de détails. Elles sont activées par défaut uniquement pour les versions de développement (pour les versions finales, définissez la préférence `layout.css.variables.enabled` sur `true` si vous souhaitez les tester).
- Les Flexbox prennent désormais en charge {{CSSxRef("visibility", "visibility: collapse")}} ([bogue Firefox 783470 <sup>(angl.)</sup>](https://bugzil.la/783470)).
- La propriété {{CSSxRef("box-sizing")}} n'a pas de préfixe ([bogue Firefox 243412 <sup>(angl.)</sup>](https://bugzil.la/243412)).
- La propriété {{CSSxRef("will-change")}}, un indice indiquant que quelque chose va s'animer a été ajoutée. La préférence `layout.css.will-change.enabled` doit être définie sur `true` pour l'activer. ([bogue Firefox 940842 <sup>(angl.)</sup>](https://bugzil.la/940842))
- La notation exponentielle scientifique, comme `3e1` ou `10e+0`, est désormais prise en charge pour les valeurs et les dérivés {{CSSxRef("&lt;number&gt;")}}, comme {{CSSxRef("&lt;percentage&gt;")}} et les valeurs unitaires, mais pas {{CSSxRef("&lt;integer&gt;")}} ([bogue Firefox 964529 <sup>(angl.)</sup>](https://bugzil.la/964529)).
- Les images de type {{CSSxRef("&lt;gradient&gt;")}} sont désormais prises en charge dans {{CSSxRef("border-image")}} ([bogue Firefox 709587 <sup>(angl.)</sup>](https://bugzil.la/709587)).
- La propriété {{CSSxRef("touch-action")}} a été implémentée. Elle n'est pas activée par défaut&nbsp;; la préférence `layout.css.touch_action.enabled` la contrôle. ([bogue Firefox 795567 <sup>(angl.)</sup>](https://bugzil.la/795567))
- Supprimez le style par défaut redondant pour l'élément `<pre>` de quirk.css ([bogue Firefox 948914 <sup>(angl.)</sup>](https://bugzil.la/948914)).
- Les variables CSS ne sont pas correctement implémentées (cycles primaires) ([bogue Firefox 950497 <sup>(angl.)</sup>](https://bugzil.la/950497)).
- `@supports` les conditions avec des jetons après que la propriété d'une déclaration doit être évaluée à false ([bogue Firefox 909170 <sup>(angl.)</sup>](https://bugzil.la/909170)).

### HTML

- `<input type=color>` et `<input type=number>` sont disponibles par défaut.
- La prise en charge des `<pre cols>` non standard a été supprimée, ainsi que l'effet de mise en page de `<pre wrap>`. Les deux effets peuvent et doivent être obtenus en utilisant CSS. ([bogue Firefox 949879 <sup>(angl.)</sup>](https://bugzil.la/949879))

### JavaScript

- Nouvelles méthodes de chaîne de caractères ECMAScript 2015&nbsp;: {{JSxRef("String.prototype.codePointAt()")}} et {{JSxRef("String.prototype.fromCodePoint()")}} ont été implémentées ([bogue Firefox 918879 <sup>(angl.)</sup>](https://bugzil.la/918879)).
- [L'API d'internationalisation ECMAScript (ECMA-402) <sup>(angl.)</sup>](https://www.ecma-international.org/ecma-402/1.0/) a été implémentée et est désormais activée par défaut dans Firefox Desktop ([bogue Firefox 853301 <sup>(angl.)</sup>](https://bugzil.la/853301)):
  - Nouveaux objets dans le nouvel espace de noms d'objet {{JSxRef("Intl")}}&nbsp;:
    - {{JSxRef("Intl/Collator", "Intl.Collator")}}
    - {{JSxRef("Intl/DateTimeFormat", "Intl.DateTimeFormat")}}
    - {{JSxRef("Intl/NumberFormat", "Intl.NumberFormat")}}

  - Les méthodes suivantes de {{JSxRef("String")}}, {{JSxRef("Number")}} et {{JSxRef("Date")}} ont été mises à jour pour inclure les arguments `locales` et `options` selon ECMA-402&nbsp;:
    - {{JSxRef("String.prototype.localeCompare()")}}
    - {{JSxRef("Number.prototype.toLocaleString()")}}
    - {{JSxRef("Date.prototype.toLocaleString()")}}
    - {{JSxRef("Date.prototype.toLocaleDateString()")}}
    - {{JSxRef("Date.prototype.toLocaleTimeString()")}}

- Pour correspondre au projet de spécification ECMAScript6 mis à jour, les objets {{JSxRef("Map")}} et {{JSxRef("Set")}} traitent désormais `-0` et `+0` comme étant identiques lors de la vérification de l'égalité des clés et des valeurs.
- La `Promise` a été activée par défaut ([bogue Firefox 918806 <sup>(angl.)</sup>](https://bugzil.la/918806)).
- Les [générateurs](/fr/docs/Web/JavaScript/Reference/Statements/function*) terminés retournent maintenant un objet `IteratorResult` au lieu de lancer ([bogue Firefox 958951 <sup>(angl.)</sup>](https://bugzil.la/958951)).
- Une chaîne de caractères JSON malformée analysée par {{JSxRef("JSON.parse()")}} retourne désormais un message d'erreur plus détaillé contenant le numéro de ligne et de colonne à l'origine de l'erreur d'analyse. Ceci est utile lors du débogage de données JSON volumineuses.
- La méthode {{JSxRef("ArrayBuffer.isView()")}} a été ajoutée ([bogue Firefox 896105 <sup>(angl.)</sup>](https://bugzil.la/896105)).

### Interfaces/APIs/DOM

- Un nouveau type de workers, {{DOMxRef("SharedWorker")}}, est désormais disponible par défaut ([bogue Firefox 924089 <sup>(angl.)</sup>](https://bugzil.la/924089)).
- L'interface {{DOMxRef("URL")}} prend désormais en charge la propriété {{DOMxRef("URL.searchParams", "searchParams")}} retournant un objet {{DOMxRef("URLSearchParams")}}, permettant de modifier les paramètres de recherche d'une URL ([bogue Firefox 887836 <sup>(angl.)</sup>](https://bugzil.la/887836)). Le constructeur {{DOMxRef("URLSearchParams.URLSearchParams", "URLSearchParams()")}} permet une analyse plus facile des chaînes de caractères de requête.
- La propriété {{DOMxRef("WorkerNavigator.onLine", "navigator.onLine")}} est désormais prise en charge sur {{DOMxRef("WorkerNavigator")}}, permettant de connaître le statut en ligne/hors ligne dans les workers ([bogue Firefox 925437 <sup>(angl.)</sup>](https://bugzil.la/925437)).
- Dans le cadre de la mise en œuvre des Web Components, l'interface `HTMLShadowElement` a été implémentée derrière le paramètre `dom.webcomponents.enabled`. Activez-le à `true` si vous souhaitez l'utiliser. ([bogue Firefox 887538 <sup>(angl.)</sup>](https://bugzil.la/887538))
- La propriété en lecture seule {{DOMxRef("HTMLIFrameElement.sandbox")}} n'est plus une chaîne de caractères mais un {{DOMxRef("DOMTokenList")}} ([bogue Firefox 845057 <sup>(angl.)</sup>](https://bugzil.la/845057)).
- Sur {{DOMxRef("HTMLCanvasElement.getContext()")}}, la valeur `moz-webgl` n'est plus prise en charge. Utilisez la valeur standard `webgl` ([bogue Firefox 913597 <sup>(angl.)</sup>](https://bugzil.la/913597)).
- Le constructeur pour {{DOMxRef("ImageData")}} a été ajouté. Cette interface peut être utilisée dans un {{DOMxRef("Worker")}}. ([bogue Firefox 959958 <sup>(angl.)</sup>](https://bugzil.la/959958))
- La propriété {{DOMxRef("WorkerLocation.origin", "location.origin")}} est désormais disponible dans les workers (par {{DOMxRef("WorkerLocation")}}) ([bogue Firefox 964148 <sup>(angl.)</sup>](https://bugzil.la/964148)).
- La propriété {{DOMxRef("ValidityState.badInput")}} a été implémentée ([bogue Firefox 827161 <sup>(angl.)</sup>](https://bugzil.la/827161)).
- La propriété obsolète `Window.pkcs11` a été supprimée&nbsp;; elle retournait `null` depuis Firefox 3.0.14. ([bogue Firefox 964964 <sup>(angl.)</sup>](https://bugzil.la/964964))
- Les méthodes {{DOMxRef("Node.cloneNode()")}} et {{DOMxRef("Document.importNode()")}} prennent l'argument booléen `deep`. Jusqu'à présent, si omis, ces méthodes agissaient comme si la valeur de `deep` était `true`. Mais ce comportement a été modifié conformément à la dernière spécification, et si omis, les méthodes agissent comme si la valeur était `false`. ([bogue Firefox 937461 <sup>(angl.)</sup>](https://bugzil.la/937461))
- `Window._content` n'est plus disponible pour le contenu Web ([bogue Firefox 946564 <sup>(angl.)</sup>](https://bugzil.la/946564)).
- Le comportement de {{DOMxRef("HTMLAnchorElement/port", "URLUtils.port")}} a été légèrement modifié&nbsp;: défini sur `''` le définit sur le port par défaut associé au protocole, et `0` sur `0`. ([bogue Firefox 930450 <sup>(angl.)</sup>](https://bugzil.la/930450))
- {{DOMxRef("Document.referrer")}} est désormais basé sur le script en cours ([bogue Firefox 887928 <sup>(angl.)</sup>](https://bugzil.la/887928)).
- [L'API Gamepad](/fr/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) est activée par défaut ([bogue Firefox 878828 <sup>(angl.)</sup>](https://bugzil.la/878828)).
- La méthode `CanvasRenderingContext2D.drawSystemFocusRing()` a été renommée en {{DOMxRef("CanvasRenderingContext2D.drawFocusIfNeeded()")}} ([bogue Firefox 959820 <sup>(angl.)</sup>](https://bugzil.la/959820)).

### MathML

_Pas de changement._

### SVG

_Pas de changement._

## Sécurité

- La directive expérimentale de `hash-source` CSP 1.1 a été implémentée. La préférence `security.csp.experimentalEnabled` doit être définie sur `true` pour activer cette fonctionnalité ([bogue Firefox 883975 <sup>(angl.)</sup>](https://bugzil.la/883975)).

## Modifications pour les développeur·euse·s de Mozilla et d'extensions

- Un changement majeur de thème Firefox affecte la plupart des extensions qui interagissent avec l'interface utilisateur de Firefox.
- `nsISecurityCheckedComponent` a été supprimé ([bogue Firefox 794943 <sup>(angl.)</sup>](https://bugzil.la/794943)). La plupart des consommateurs peuvent simplement supprimer `nsISecurityCheckedComponent` de leur définition d'interface et ils continuent à fonctionner.
