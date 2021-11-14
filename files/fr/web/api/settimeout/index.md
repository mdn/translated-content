---
title: WindowOrWorkerGlobalScope.setTimeout()
slug: Web/API/setTimeout
tags:
  - API
  - HTML DOM
  - Méthode
  - Reference
translation_of: Web/API/WindowOrWorkerGlobalScope/setTimeout
original_slug: Web/API/WindowOrWorkerGlobalScope/setTimeout
---
{{APIRef("HTML DOM")}}

La méthode **`setTimeout()`**, rattachée au *mixin*  {{domxref("WindowOrWorkerGlobalScope")}} (et qui succède à `window.setTimeout()`) permet de définir un « minuteur » (_timer_) qui exécute une fonction ou un code donné après la fin du délai indiqué.

## Syntaxe

    var identifiant = scope.setTimeout(fonction[, delai, param1, param2, ...]);
    var identifiant = scope.setTimeout(fonction[, delai]);
    var identifiant = scope.setTimeout(code[, delai]);

### Paramètres

- `function`
  - : Une fonction ({{jsxref("function")}}) qui doit être exécuté au déclenchement du minuteur après le temps imparti.
- `code`
  - : Une chaîne de caractères qui représente le code à exécuter. Cette chaîne est compilée et exécutée à l'expiration du minuteur. Pour des raisons analogues à celles exprimées avec {{jsxref("Objets_globaux/eval", "eval()")}}, cette syntaxe n'est pas **recommandée**.
- `delai` {{optional_inline}}
  - : La durée, exprimée en millisecondes, à attendre avant que la fonction indiquée soit exécutée. Par défaut, ce paramètre vaut 0, ce qui signifiie que la fonction est exécutée dès que possible. La durée réelle mesurée avant l'exécution de la fonction peut être supérieure à ce paramètre, voir [la section ci-après](#durée).
- `param1, … , paramN` {{optional_inline}}
  - : D'autres paramètres qui seront passés à la fonction une fois que le temps est écoulé.

> **Note :** La première syntaxe utilisant les paramètres supplémentaires ne fonctionne pas pour Internet Explorer 9 et les versions antérieures. Si vous souhaitez obtenir cette fonctionnalité pour ce navigateur, vous devrez utiliser une prothèse, [voir ci-après](#polyfill).

### Valeur de retour

La valeur renvoyée par la fonction est un entier qui représente un identifiant du minuteur créé par l'appel à `setTimeout()`. Cet identifiant pourra être passé à la méthode {{domxref("WindowOrWorkerGlobalScope.clearTimeout","clearTimeout()")}} afin d'annuler ce minuteur donné.

Il peut être utile de savoir que `setTimeout()` et {{domxref("WindowOrWorkerGlobalScope.setInterval", "setInterval()")}} partagent le même ensemble d'identifiants et que  `clearTimeout()` et {{domxref("WindowOrWorkerGlobalScope.clearInterval", "clearInterval()")}} sont, techniquement, interchangeables. Toutefois pour des raisons de lisibilité et de maintenance, mieux vaut les utiliser par paires plutôt que de les mélanger.

Le moteur d'exécution garantit qu'un identifiant donné ne sera pas réutilisé par un appel ultérieur à `setTimeout()` ou `setInterval()` pour un même objet (une fenêtre ou un _worker_). En revanche, différents objets possèdent chacun leurs ensembles d'identifiants.

## Exemples

Dans l'exemple qui suit, on dispose deux boutons classiques auxquels on associe, via des gestionnaires d'évènements, des fonctions qui utilisent `setTimeout()` et `clearTimeout()`. Utiliser le premier bouton déclenchera un minuteur qui affichera une boîte de dialogue après deux secondes. L'identifiant est enregistré à la création du minuteur et on peut annuler le minuteur en cours en appuyant sur le deuxième bouton (dont la fonction associée au gestionnaire d'évènements utilise `clearTimeout()`).

### HTML

```html
<button onclick="delayedAlert();">
  Affiche une alerte après deux secondes
</button>

<button onclick="clearAlert();">
  Annuler l'alerte avant qu'elle ne se déclenche
</button>
```

### JavaScript

```js
var timeoutID;

function delayedAlert() {
  timeoutID = window.setTimeout(slowAlert, 2000);
}

function slowAlert() {
  alert("C'était long…");
}

function clearAlert() {
  window.clearTimeout(timeoutID);
}
```

### Résultat

{{EmbedLiveSample('Exemples')}}

> **Note :** Voir aussi les exemples pour [`clearTimeout()`](/fr/docs/Web/API/WindowOrWorkerGlobalScope/clearTimeout#Exemples).

## Prothèse d'émulation (_polyfill_)

S'il vous faut passer un ou plusieurs arguments à la fonction de rappel tout en prenant en charge Internet Explorer 9 et les versions antérieures, vous pouvez utiliser cette prothèse qui ajoute la prise en charge des paramètres additionnels :

```js
/*\
|*|
|*|  Polyfill which enables the passage of arbitrary arguments to the
|*|  callback functions of JavaScript timers (HTML5 standard syntax).
|*|
|*|  https://developer.mozilla.org/en-US/docs/DOM/window.setInterval
|*|
\*/

(function() {
  setTimeout(function(arg1) {
    if (arg1 === 'test') {
      // l'argument est passé, pas besoin de prothèse
      return;
    }
    var __nativeST__ = window.setTimeout;
    window.setTimeout = function(vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */ ) {
      var aArgs = Array.prototype.slice.call(arguments, 2);
      return __nativeST__(vCallback instanceof Function ? function() {
        vCallback.apply(null, aArgs);
      } : vCallback, nDelay);
    };
  }, 0, 'test');

  var interval = setInterval(function(arg1) {
    clearInterval(interval);
    if (arg1 === 'test') {
    // l'argument est passé, pas besoin de prothèse
      return;
    }
    var __nativeSI__ = window.setInterval;
    window.setInterval = function(vCallback, nDelay /*, argumentToPass1, argumentToPass2, etc. */ ) {
      var aArgs = Array.prototype.slice.call(arguments, 2);
      return __nativeSI__(vCallback instanceof Function ? function() {
        vCallback.apply(null, aArgs);
      } : vCallback, nDelay);
    };
  }, 0, 'test');
}())
```

### Correctif ciblé sur IE

Si vous souhaitez ne cibler que IE 9 et antérieurs, vous pouvez utiliser les commentaires conditionnels JavaScript :

```js
/*@cc_on
  // conditional IE < 9 only fix
  @if (@_jscript_version <= 9)
  (function(f){
     window.setTimeout = f(window.setTimeout);
     window.setInterval = f(window.setInterval);
  })(function(f){return function(c,t){var a=[].slice.call(arguments,2);return f(function(){c instanceof Function?c.apply(this,a):eval(c)},t)}});
  @end
@*/
```

Ou plutôt les commentaires conditionnels HTML :

```html
<!--[if lte IE 9]><script>
(function(f){
window.setTimeout=f(window.setTimeout);
window.setInterval=f(window.setInterval);
})(function(f){return function(c,t){
var a=[].slice.call(arguments,2);return f(function(){c instanceof Function?c.apply(this,a):eval(c)},t)}
});
</script><![endif]-->
```

### Autres méthodes de contournement

Vous pouvez également utiliser une fonction anonyme comme fonction de rappel (_callback_) :

```js
var intervalID = setTimeout(function() {
  maFonction('un', 'deux', 'trois');
  }, 1000);
```

Voici une réécriture de l'exemple précédent avec [les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Fonctions/Fonctions_fl%C3%A9ch%C3%A9es) :

```js
var intervalID = setTimeout(() => {
  maFonction('un', 'deux', 'trois');
  }, 1000);
```

On peut également utiliser {{jsxref("Function.prototype.bind()")}} :

```js
setTimeout(function(arg1){}.bind(undefined, 10), 1000);
```

## Le problème « `this` »

Lorsqu'on passe une fonction à `setTimeout()`, cette fonction peut être appelée avec une valeur `this` qui n'est pas celle qu'on attend. Ce problème est expliqué en détails dans la référence JavaScript[JavaScript reference](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_this#Dans_le_contexte_d'une_fonction).

### Explications

Le code exécuté par `setTimeout()` est appelé dans un contexte d'exécution différent de celui de la fonction où `setTimeout` a été appelé. Les règles usuelles pour la détermination de `this` s'appliquent : si `this` n'est pas défini lors de l'appel ou avec `bind`, la valeur par défaut sera l'objet global (`global` ou `window`) en mode non-strict ou {{jsxref("undefined")}} en mode strict. Aussi, le `this` utilisé par la fonction de rappel ne sera pas le même `this` que celui utilisé par la fonction ayant appelé `setTimeout`.

> **Note :** La valeur par défaut pour `this`, lors de l'utilisation d'une fonction de rappel par `setTimeout` sera toujours l'objet `window` et pas la valeur `undefined`, même en mode strict.

Par exemple :

```js
monTableau = ['zéro', 'un', 'deux'];
monTableau.maMéthode = function (sPropriété) {
    console.log(arguments.length > 0 ? this[sPropriété] : this);
};

monTableau.maMéthode();  // affichera "zéro,un,deux" dans la console
monTableau.maMéthode(1); // affichera "un"
```

Le code qui précède fonctionne car lorsque `maMéthode` est appelée, `this` correspond à `monTableau` et qu'au sein de `maMéthode`, `this[sPropriété]` correspond alors à `monTableau[sPropriété]`. Toutefois, avec :

```js
setTimeout(monTableau.maMéthode, 1000);
// affiche "[object Window]" après 1 seconde
setTimeout(monTableau.maMéthode, 1500, '1');
// affiche "undefined" après 1.5 seconde
```

La fonction `monTableau.maMéthode` est pasée à `setTimeout` et, lorsqu'elle est appelée, `this` n'est pas défini et le moteur utilise la valeur par défaut : `window`. Il n'y apas d'option qui permettent de passer une valeur  `thisArg` à `setTimeout()` comme on peut le faire avec {{jsxref("Array.prototype.forEach()")}} ou {{jsxref("Array.prototype.reduce()")}} par exemple. Aussi, utiliser `call()` afin de définir `this` ne fonctionnera pas non plus.

```js
setTimeout.call(monTableau, monTableau.maMéthode, 2000);
// error: "NS_ERROR_XPC_BAD_OP_ON_WN_PROTO: Illegal operation on WrappedNative prototype object"
setTimeout.call(monTableau, monTableau.maMéthode, 2500, 2);
// même erreur
```

### Solutions éventuelles

> **Note :** JavaScript 1.8.5 introduced the [`Function.prototype.bind()`](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) method to set the value of `this` for all calls to a given function. This can avoid having to use a wrapper function to set the value of `this` in a callback.

Exemple d'utilisation :

```js
var monTableau = ['zéro', 'un', 'deux'];
var maMéthodeLiée = (function (sPropriété) {
  console.log(arguments.length > 0 ? this[sPropriété] : this);
}).bind(monTableau);


maMéthodeLiée(); // affiche "zéro,un,deux"
maMéthodeLiée(1); // affiche "un"
setTimeout(maMéthodeLiée, 1000);
// affiche "zéro,un,deux" après une seconde
setTimeout(maMéthodeLiée, 1500, "1");
// affiche "un" après 1.5 seconde
```

## Notes

Les minuteurs peuvent être annulés avec {{domxref("WindowOrWorkerGlobalScope.clearTimeout","clearTimeout()")}}. Si on souhaite appeler une fonction de façon répétée, on utilisera plutôt {{domxref("WindowOrWorkerGlobalScope.setInterval()","setInterval()")}}.

### Utiliser des chaînes pour le code plutôt que des fonctions

Passer une chaîne de caractères pour le code à exécuter, plutôt qu'une fonction, souffre des mêmes dangers que {{jsxref("Objets_globaux/eval","eval()")}}.

```js
// Recommandé
window.setTimeout(function() {
    console.log('Coucou monde !');
}, 500);

// Non recommandé
window.setTimeout("console.log('Coucou monde !');", 500);
```

Une chaîne de caractères passée à `setTimeout` sera évaluée dans le contexte global. Aussi, les symboles locaux au contexte de l'appel de `setTimeout()` ne seront pas accessibles au code présent dans la chaîne de caractères lors de son évaluation.

### Durée plus longue que le paramètre indiquée

Plusieurs raisons peuvent expliquer une durée réelle plus longue que le délai passé en argument. Voici les plus fréquentes.

#### Précision minimale à 4ms

Dans les navigateurs récents les appels à `setTimeout()/`{{domxref("WindowOrworkerGlobalScope.setInterval","setInterval()")}} possèdent au plus une précision de 4ms lorsque plusieurs appels imbriqués sont réalisés. Par exemple :

```js
function cb() { f(); setTimeout(cb, 0); }
setTimeout(cb, 0);
```

```js
setInterval(f, 0);
```

Pour Chrome et Firefox, la limitation est active à partir du cinquième appel de fonction de rappel,  Safari active la limitation à partir du sixième et Edge à partir du troisième. Gecko traite `setInterval()` de la même façon depuis la [version 56](/fr/docs/Mozilla/Firefox/Releases/56).

[Par le passé](http://code.google.com/p/chromium/issues/detail?id=792#c10), certains navigateurs implémentaient cette limite différemment (pour les appels à `setInterval()` quelle que soit leur provenance ou lorsqu'un appel `setTimeout()` était imbriqué dans un autre pour un certain nombre de niveaux d'imbrication.

Pour implémenter un minuteur de 0ms, on pourra utiliser {{domxref("window.postMessage()")}}.

> **Note :** Le délai minimal est géré dans Firefox via une préférence : `dom.min_timeout_value`.

> **Note :** Cette durée de 4 ms est [définie dans la spécification HTML5](http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#timers) et est la même dans l'ensemble des navigateurs à partir de 2010. Avant {{geckoRelease("5.0")}}, la valeur minimale pour les appels imbriqués était 10ms.

#### Précision minimale des minuteurs pour les onglets inactifs : plus de 1000ms

Afin de réduire la charge (ainsi que la consommation d'énergie associée) des onglets en arrière-plan, les minuteurs ne sont déclenchés au maximum qu'une fois par seconde pour les onglets inactifs.

Firefox implémente ce comportement depuis Firefox 5 (cf.  {{bug(633421)}}) et la valeur du seuil de 1000ms peut être paramétrée via la préférence `dom.min_background_timeout_value`. Chrome implémente ce comportement depuis la version 11 ([crbug.com/66078](http://crbug.com/66078)).

Firefox pour Android utilise un minimum de 15 minutes depuis Firefox 14 (cf.  {{bug(736602)}}) et les onglets en arrière-plan peuvent être déchargés complètement.

> **Note :** Firefox 50 ne limite plus la réactivité des onglets en arrière-plan si un contexte Web Audio API {{domxref("AudioContext")}} joue un son. Firefox 51 élargit le spectre en supprimant la limitation si un objet {{domxref("AudioContext")}} est présent dans l'onglet, même sans jouer de son. Cela a permis de résoudre différents problèmes avec certaines applications qui jouent de la musique en arrière-plan.

#### Limitation des minuteurs pour les scripts de pistage

Depuis Firefox 55, les scripts de pistage (par exemple Google Analytics) (c'est-à-dire que toute URL que Firefox reconnaît comme appartenant à un domaine de pistage via [la liste TP](https://wiki.mozilla.org/Security/Tracking_protection#Lists)) ont une limitation plus forte. En premier plan la limitation est toujours de 4ms mais pour les onglets en arrière-plan, la limite est à 10000ms une fois que 30 secondes se sont écoulées après le premier chargement du document.

Ces seuils peuvent être gérés via les préférences :

- `dom.min_tracking_timeout_value` : 4
- `dom.min_tracking_background_timeout_value` : 10000
- `dom.timeout.tracking_throttling_delay` : 30000

#### Minuteurs en retard

En plus de ces limitations, le minuteur peut être déclenché plus tard si le navigateur ou le système d'opération est occupé sur d'autres tâches. On notera particulièrement que la fonction de rappel n'est pas exécutée tant que le _thread_ du script n'a pas terminé. Par exemple :

```js
function toto() {
  console.log('appel de toto');
}
setTimeout(toto, 0);
console.log('Après setTimeout');
```

affichera, dans la console :

```js
Après setTimeout
appel de toto
```

Ici, même si `setTimeout` a été appelé avec un délai nul, la fonction de rappel est placée dans la queue et est planifiée pour être exécutée dès que possible : ce qui n'est pas « immédiatement ». Le code courant doit finir d'être exécuté afin que les appels dans la queue puissent être dépilés.

### Valeur de délai maximale

Les navigateurs que sont Internet Explorer, Chrome, Safari et Firefox stockent, en interne, la valeur du délai comme un entier sur 32 bits signé. Il y a donc un dépassement de borne si le délai est supérieur à 2147483647 millisecondes, ce qui correspond à 24.8 days. Si une telle valeur (supérieure à ce seuil) est utilisée, le minuteur est déclenché dès que possible.

## Spécifications

| Spécification                                                                                                                            | État                             | Commentaires                                                                                         |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'webappapis.html#dom-settimeout', 'WindowOrWorkerGlobalScope.setTimeout()')}} | {{Spec2("HTML WHATWG")}} | Déplacement de la méthode sur le _mixin_ `WindowOrWorkerGlobalScope` dans la dernière spécification. |
| {{SpecName("HTML WHATWG", "webappapis.html#dom-settimeout", "WindowTimers.setTimeout()")}}                 | {{Spec2("HTML WHATWG")}} | Définition initiale (_DOM Level 0_)                                                                  |

## Compatibilité des navigateurs

{{Compat("api.WindowOrWorkerGlobalScope.setTimeout")}}

## Voir aussi

- {{domxref("WindowOrWorkerGlobalScope.clearTimeout")}}
- {{domxref("WindowOrWorkerGlobalScope.setInterval")}}
- {{domxref("window.requestAnimationFrame")}}
