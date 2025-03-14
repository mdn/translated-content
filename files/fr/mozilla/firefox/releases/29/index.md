---
title: Firefox 29 pour les développeurs
slug: Mozilla/Firefox/Releases/29
---

{{FirefoxSidebar}}

Firefox 29 est sorti le 29 Avril, 2014. Cet article répertorie les modifications clés qui sont utiles non seulement pour les développeurs Web, mais aussi pour es développeurs Firefox et Gecko ainsi que pour les développeurs d'add-on.

## Changements pour les développeurs Web

### Outils de développement

Les principaux changements comprennent:

- Console web largement améliorée - Les tableaux sont affichés en lgne sans cliquer pour faire apparaître l'inspecteur de droite, les objets de fenêtre affichent leur URL, etc.
- Ajout de l'[API console](/fr/docs/Web/API/console) aux Web Workers ([bug 620935](https://bugzilla.mozilla.org/show_bug.cgi?id=620935)). Vous pouvez désormais consigner les messages dans la console Web à partir de Web Workers.
- L'outil [Moniteur réseau](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) affiche désormais des statistiques de performances à l'aide de graphiques à secteurs ([bug Firefox 846601](https://bugzil.la/846601)).
- Sur l'[inspecteur](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html), des info-bulles d'aperçu des transformations CSS sont désormais disponibles ([bug Firefox 726427](https://bugzil.la/726427)).
- Les éléments DOM vus dans le débogueur et la console peuvent être supprimés ou inspectés directement, via les nouveaux boutons à droite de la liste des variables.
- Une carte source CSS est désormais prise en charge par l'[éditeur de style](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) ([bug Firefox 926014](https://bugzil.la/926014)).
- L'Autocompletion des propriétés et valeurs CSS a été ajoutée à l'[éditeur de style](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html) ([bug Firefox 717369](https://bugzil.la/717369)).

_Consultez l'[article du blog Mozilla Hacks](https://hacks.mozilla.org/2014/02/css-source-map-support-network-performance-analysis-more-firefox-developer-tools-episode-29/) pour plus de détails et d'autres changements mineurs._

### CSS

- Des [variables CSS](/fr/docs/Web/CSS/Using_CSS_custom_properties) ont été implémentées ([bug Firefox 773296](https://bugzil.la/773296)). L'article Mozilla Hacks peut être trouvé [ici](https://hacks.mozilla.org/2013/12/css-variables-in-firefox-nightly/). Ils sont activés par défaut uniquement pour les versions non publiées (sur les versions publiées, retournez le pref `layout.css.variables.enabled` à `true` si vous voulez jouer avec).
- Les Flexbox prennent désormais en charge {{cssxref("visibility")}}`: collapse` ([bug Firefox 783470](https://bugzil.la/783470)).
- La propriété {{cssxref("box-sizing")}} n'a pas de préfixe ([bug Firefox 243412](https://bugzil.la/243412)).
- La propriété {{cssxref("will-change")}}, un indice indiquant que quelque chose va s'animer a été ajoutée. La préférence `layout.css.will-change.enabled` doit être définie sur `true` pour l'activer. ([bug Firefox 940842](https://bugzil.la/940842))
- La notation exponentielle scientifique, comme `3e1` ou `10e+0`, est désormais prise en charge pour les valeurs et les dérivés {{cssxref("&lt;number&gt;")}}, comme {{cssxref("&lt;percentage&gt;")}} et les valeurs unitaires, mais pas {{cssxref("&lt;integer&gt;")}} ([bug Firefox 964529](https://bugzil.la/964529)).
- Les images de type {{cssxref("&lt;gradient&gt;")}} sont désormais prises en charge dans {{cssxref("border-image")}} ([bug Firefox 709587](https://bugzil.la/709587)).
- La propriété {{cssxref("touch-action")}} a été mise en implémenté. Il n'est pas activé par défaut; le pref de `layout.css.touch_action.enabled` le contrôle. ([bug Firefox 795567](https://bugzil.la/795567))
- Supprimez le style par défaut redondant pour l'élément \<pre> de quirk.css ([bug Firefox 948914](https://bugzil.la/948914)).
- Les variables CSS ne sont pas correctement implémentées (cycles primaires) ([bug Firefox 950497](https://bugzil.la/950497)).
- @supports les conditions avec des jetons après que la propriété d'une déclaration doit être évaluée à false ([bug Firefox 909170](https://bugzil.la/909170)).

### HTML

- `<input type=color>` et `<input type=number>` sont disponibles par défaut.
- La prise en charge des `<pre cols>` non standard a été supprimée, ainsi que l'effet de mise en page de `<pre wrap>`. Les deux effets peuvent et doivent être obtenus en utilisant CSS. ([bug Firefox 949879](https://bugzil.la/949879))

### JavaScript

- Nouvelles méthodes de chaîne ECMAScript 6 : {{jsxref("String.prototype.codePointAt()")}} et {{jsxref("String.prototype.fromCodePoint()")}} ont été implémentées ([bug Firefox 918879](https://bugzil.la/918879)).
- L'[API d'internationalisation ECMAScript (ECMA-402)](https://www.ecma-international.org/ecma-402/1.0/) a été implémentée et est désormais activée par défaut dans Firefox Desktop ([bug Firefox 853301](https://bugzil.la/853301)):

  - Nouveaux objets dans le nouvel espace de noms d'objet {{jsxref("Intl")}} :

    - {{jsxref("Collator", "Intl.Collator")}}
    - {{jsxref("DateTimeFormat", "Intl.DateTimeFormat")}}
    - {{jsxref("NumberFormat", "Intl.NumberFormat")}}

  - Les méthodes suivantes de {{jsxref("String")}}, {{jsxref("Number")}} et {{jsxref("Date")}} ont été mises à jour pour inclure les arguments `locales` et `options` selon ECMA-402:

    - {{jsxref("String.prototype.localeCompare()")}}
    - {{jsxref("Number.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleString()")}}
    - {{jsxref("Date.prototype.toLocaleDateString()")}}
    - {{jsxref("Date.prototype.toLocaleTimeString()")}}

- Pour correspondre au projet de spécification ECMAScript6 mis à jour, les objets {{jsxref("Map")}} et {{jsxref("Set")}} traitent désormais `-0` et `+0` comme étant identiques lors de la vérification de l'égalité des clés et des valeurs.
- La `Promise` a été activée par défaut ([bug Firefox 918806](https://bugzil.la/918806)).
- Les [générateurs](/fr/docs/Web/JavaScript/Reference/Statements/function*) terminés renvoient maintenant un objet `IteratorResult` au lieu de lancer ([bug Firefox 958951](https://bugzil.la/958951)).
- Une chaîne JSON malformée analysée par {{jsxref("JSON.parse()")}} renvoie désormais un message d'erreur plus détaillé contenant le numéro de ligne et de colonne à l'origine de l'erreur d'analyse. Ceci est utile lors du débogage de données JSON volumineuses.
- La méthode {{jsxref("ArrayBuffer.isView()")}} a été ajoutée ([bug Firefox 896105](https://bugzil.la/896105)).

### Interfaces/APIs/DOM

- Un nouveau type de workers, {{domxref("SharedWorker")}}, est désormais disponible par défaut ([bug Firefox 924089](https://bugzil.la/924089)).
- L'interface {{domxref("URLUtils")}} prend désormais en charge la propriété {{domxref("URLUtils.searchParams", "searchParams")}} renvoyant un objet {{domxref("URLSearchParams")}}, permettant de modifier le paramètres de recherche d'une URL ([bug Firefox 887836](https://bugzil.la/887836)). Le constructeur {{domxref("URLSearchParams")}} permet une analyse plus facile des chaînes de requête.
- La propriété {{domxref("NavigatorOnLine.onLine")}} est désormais prise en charge sur {{domxref("WorkerNavigator")}}, permettant de connaître l'état en ligne / hors ligne des workers ([bug Firefox 925437](https://bugzil.la/925437)).
- Dans le cadre de l'implémentation des composants Web, l'interface {{domxref("HTMLShadowElement")}} a été implémentée derrière le `dom.webcomponents.enabled`. Retournez-le sur `true` si vous souhaitez l'utiliser. ([bug Firefox 887538](https://bugzil.la/887538)).
- La propriété en lecture seule {{domxref("HTMLIFrameElement.sandbox")}} n'est plus un {{domxref("string")}} mais un {{domxref("HTMLSettableToken")}} ([bug Firefox 845057](https://bugzil.la/845057)).
- Sur {{domxref("HTMLCanvasElement.getContext()")}}, la valeur `moz-webgl` n'est plus prise en charge. Utilisez la valeur standard `webgl` ([bug Firefox 913597](https://bugzil.la/913597)).
- Le constructeur de {{domxref("ImageData")}} a été ajouté. Cette interface peut être utilisée danss un {{domxref("Worker")}}. ([bug Firefox 959958](https://bugzil.la/959958))
- La propriété {{domxref("URLUtilsReadOnly.origin", "location.origin")}} est désormais disponible dans les workers (via {{domxref("WorkerLocation")}}) ([bug Firefox 964148](https://bugzil.la/964148)).
- La propriété {{domxref("ValidityState.badInput")}} a été implémentée ([bug Firefox 827161](https://bugzil.la/827161)).
- La propriété obsolète {{domxref("Window.pkcs11")}} a été supprimée; il retournait `null` depuis Firefox 3.0.14. ([bug Firefox 964964](https://bugzil.la/964964))
- Les méthodes {{domxref("Node.cloneNode()")}} et {{domxref("Document.importNode()")}} acceptent l'argument booléen `deep`. Jusqu'à présent, si elles étaient omises, ces méthodes agissaient comme si la valeur de `deep` était `true`. Mais ce comportement a été modifié selon la dernière spécification, et s'il est omis, les méthodes agiront comme si la valeur était `false`. ([bug Firefox 937461](https://bugzil.la/937461))
- {{domxref("Window._content")}} n'est plus disponible pour le contenu web ([bug Firefox 946564](https://bugzil.la/946564)).
- Le comportement de {{domxref("URLUtils.port")}} a été légèrement modifié: définir sur `''` le définira sur le port par défaut associé au protocole, et `0` sur `0.` ([bug Firefox 930450](https://bugzil.la/930450))
- {{domxref("Document.referrer")}} est maintenant basé sur le script en place ([bug Firefox 887928](https://bugzil.la/887928)).
- L'[API Gamepad API](/fr/docs/Web/API/Gamepad_API/Using_the_Gamepad_API) est activée par défaut ([bug Firefox 878828](https://bugzil.la/878828)).
- La méthode {{domxref("CanvasRenderingContext2D.drawSystemFocusRing()")}} a été renommée en {{domxref("CanvasRenderingContext2D.drawFocusIfNeeded()")}} ([bug Firefox 959820](https://bugzil.la/959820)).

### MathML

_Pas de changement._

### SVG

_Pas de changement._

## Sécurité

- La directive expérimentale de `hash-source` CSP 1.1 a été implémentée. La préférence `security.csp.experimentalEnabled` doit être définie sur `true` pour activer cette fonctionnalité ([bug Firefox 883975](https://bugzil.la/883975)).

## Modifications pour les développeurs d'add-on et Mozilla

- [Compatibilité Australis et add-on](/fr/docs/Mozilla/Firefox/Australis_add-on_compat) - Il s'agit d'un changement majeur de thème Firefox qui affecte la plupart des extensions impliquant l'interface utilisateur de Firefox.
- `nsISecurityCheckedComponent` a été supprimé ([bug Firefox 794943](https://bugzil.la/794943)). La plupart des consommateurs peuvent simplement supprimer nsISecurityCheckedComponent de leur définition d'interface et ils continueront à fonctionner.

Changements non-Australis à déterminer.

## Voir aussi

### Anciennes versions

{{Firefox_for_developers('28')}}
