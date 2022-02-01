---
title: EventTarget.addEventListener()
slug: Web/API/EventTarget/addEventListener
translation_of: Web/API/EventTarget/addEventListener
---
{{APIRef("DOM Events")}}

\>La méthode **`addEventListener()`** de {{domxref("EventTarget")}} attache une fonction à appeler chaque fois que l'évènement spécifié est envoyé à la cible.

Les cibles courantes sont un {{domxref("Element")}}, le {{domxref("Document")}} lui-même et une {{domxref("Window")}}, mais on peut tout à fait cible n'importe quel objet prenant en charge les évènements (comme {{domxref("XMLHttpRequest")}}).

`addEventListener()` agit en ajoutant une fonction ou un objet qui implémente {{domxref("EventListener")}} à la liste des gestionnaires d'évènement pour le type d'évènement spécifié sur la cible ({{domxref("EventTarget")}}) à partir de laquelle il est appelé.

## Syntaxe

```js
target.addEventListener(type, listener [, options]);
target.addEventListener(type, listener [, useCapture]);
target.addEventListener(type, listener [, useCapture, wantsUntrusted {{Non-standard_inline}}]); // Gecko/Mozilla uniquement
```

### Paramètres

- `type`
  - : Une chaîne sensible à la casse représentant le [type d'évènement](/fr/docs/Web/Events) à écouter.
- `listener`
  - : L'objet qui recevra un évènement (c'est-à-dire un objet qui implémente l'interface {{domxref("Event")}}) lorsqu'un évènement du type spécifié se produit. Cet argument doit être un objet implémentant l'interface {{domxref("EventListener")}} ou une [fonction](/fr/docs/Web/JavaScript/Guide/Functions) JavaScript. Voir {{anch("The_event_listener_callback", "Fonction de rappel (<i>callback</i> pour le gestionnaire d'évènement)")}} pour plus de détails sur le fonctionnement d'une fonction de rappel.
- `options` {{optional_inline}}

  - : Un objet options spécifie les caractéristiques de l'écouteur d'évènements. Les options disponibles sont :

    - `capture`
      - : Un booléen ({{jsxref("Boolean")}}) indiquant que les évènements de ce type seront distribués au `listener` enregistré avant d'être distribués à tout `EventTarget` située en dessous dans l'arborescence DOM.
    - `once`
      - : Un booléen ({{jsxref("Boolean")}}) indiquant que `listener` doit être invoqué au plus une fois après avoir été ajouté. Si `true` (vrai), `listener` sera automatiquement supprimé après son appel.
    - `passive`
      - : Un booléen ({{jsxref("Boolean")}}) qui, si `true`, indique que la fonction spécifiée par `listener` n'appellera jamais {{domxref("Event.preventDefault", "preventDefault()")}}. Si un écouteur passif appelle `preventDefault()`, l'agent utilisateur ne fera rien d'autre que de générer un avertissement dans la console. Voir {{anch("Improving_scrolling_performance_with_passive_listeners","Améliorer les performances du défilement avec des gestionnaires passifs")}} pour en apprendre davantage.
    - `mozSystemGroup` {{non-standard_inline}}
      - : Un booléen ({{jsxref("Boolean")}}) indiquant que l'écouteur doit être ajouté au groupe système. Disponible uniquement pour le code s'exécutant dans XBL ou dans le {{glossary("chrome")}} du navigateur Firefox.

- `useCapture` {{optional_inline}}
  - : Un booléen ({{jsxref("Boolean")}}) indiquant si les évènements de ce type seront distribués au `listener` enregistré avant d'être distribués à toute `EventTarget` (« cible d'évènement ») située en dessous dans l'arborescence DOM. Les évènements qui se propagent vers le haut dans l'arborescence ne déclencheront pas un écouteur indiqué comme utilisant la capture. La propagation et la capture d'évènements sont deux manières de propager des évènements qui se produisent dans un élément imbriqué dans un autre, lorsque les deux éléments ont enregistré un gestionnaire pour cet évènement. Le mode de propagation de l'évènement détermine l'ordre dans lequel les éléments reçoivent l'évènement. Voir les [DOM Level 3 Events](http://www.w3.org/TR/DOM-Level-3-Events/#event-flow) et [JavaScript Event order](http://www.quirksmode.org/js/events_order.html#link4) pour une explication détaillée. S'il n'est pas spécifié, `useCapture` aura `false` comme valeur par défaut.

> **Note :** Pour les écouteurs attachés à la cible d'évènement, l'évènement se trouve dans la phase cible, plutôt que dans les phases de propagation et de capture. Les évènements dans la phase cible déclencheront tous les écouteurs d'un élément dans l'ordre où ils ont été enregistrés, indépendamment du paramètre `useCapture`.

> **Note :** `useCapture` n'a pas toujours été facultatif. Idéalement, vous devriez l'inclure pour une compatibilité navigateur la plus large possible.

- `wantsUntrusted` {{Non-standard_inline}}
  - : Un paramètre spécifique à Firefox (Gecko). Si `true`, l'écouteur reçoit les évènements synthétiques distribués par le contenu web (la valeur par défaut est `false` pour le {{glossary("chrome")}} du navigateur et `true` pour les pages web ordinaires). Ce paramètre est utile pour le code qui se trouve dans les extensions, ainsi que pour le navigateur lui-même.

### Valeur de retour

`undefined`

## Notes d'utilisation

### Utilisation d'une fonction de rappel (_callback_)

L'écouteur d'évènement peut être spécifié, soit comme une fonction de rappel (_callback_), soit comme un objet qui implémente {{domxref("EventListener")}} dont la méthode {{domxref("EventListener.handleEvent", "handleEvent()")}} sert de fonction de rappel.

La fonction de rappel reçoit les mêmes paramètres et fournit la même valeur de retour que la méthode `handleEvent()` ; c'est-à-dire que le rappel accepte un seul paramètre : un objet basé sur {{domxref("Event")}} décrivant l'évènement qui s'est produit, et il ne retourne rien.

Par exemple, un rappel de gestionnaire d'évènements pouvant être utilisé pour gérer à la fois {{domxref("Element/fullscreenchange_event", "fullscreenchange")}} et {{domxref("Element/fullscreenerror_event", "fullscreenerror")}} peut ressembler à ceci :

```js
function eventHandler(event) {
  if (event.type == 'fullscreenchange') {
    /* gérer un passage en plein écran */
  } else /* fullscreenerror */ {
    /* gérer une erreur de passage en plein écran */
  }
}
```

### Détection la prise en charge d'`options`

Dans les anciennes versions de la spécification DOM, le troisième paramètre de `addEventListener()` était une valeur booléenne indiquant s'il fallait ou non utiliser la capture. Au fil du temps, il est devenu clair que davantage d'options étaient nécessaires. Plutôt que d'ajouter davantage de paramètres à la fonction (ce qui complique énormément les choses lors du traitement des valeurs optionnelles), le troisième paramètre a été changé en un objet pouvant contenir diverses propriétés définissant les valeurs des options pour configurer le processus de suppression de l'écouteur d'évènement.

Du fait que les navigateurs anciens supposent toujours que le troisième paramètre est un booléen, vous devez construire votre code de façon à gérer ce scénario intelligemment. Vous pouvez le faire en utilisant la détection de fonctionnalité pour chacune des options qui vous intéressent.

Par exemple, si vous voulez vérifier l'option `passive` :

```js
let passiveSupported = false;

try {
  let options = Object.defineProperty({}, "passive", {
    get: function() {
      passiveSupported = true;
    }
  });

  window.addEventListener("test", null, options);
  window.removeEventListener("test", null, options);
} catch(err) {
  passiveSupported = false;
}
```

Cela crée un objet `options` avec une fonction accesseur pour la propriété `passive` ; l'accesseur initialise un indicateur, `passiveSupported`, à `true` si elle est appelée. Cela signifie que si le navigateur vérifie la valeur de la propriété `passive` dans l'objet `options`, `passiveSupported` sera initialisé à `true` ; sinon, il restera `false`. Nous appelons alors `addEventListener()` pour installer un faux gestionnaire d'évènements, en spécifiant ces options, de sorte qu'elles soient vérifiées si le navigateur reconnaît un objet comme troisième paramètre. Ensuite, nous appelons `removeEventListener()` pour faire le ménage après notre passage. (Notez que `handleEvent()` est ignoré dans les écouteurs d'évènements qui ne sont pas appelés).

Vous pouvez vérifier de cette façon si une option quelconque est supportée. Ajoutez simplement un accesseur pour cette option en utilisant un code similaire à celui montré ci-dessus.

Ensuite, lorsque vous voulez créer un écouteur d'évènements réel qui utilise les options en question, vous pouvez faire quelque chose comme ce qui suit :

```js
someElement.addEventListener(
  "mouseup",
  handleMouseUp,
  passiveSupported ? { passive: true } : false
);
```

Ici, nous ajoutons un écouteur pour l'évènement {{domxref("Element/mouseup_event", "mouseup")}} dans l'élément `someElement`. Pour le troisième paramètre, si `passiveSupported` est `true`, nous spécifions un objet `options` avec `passive` initialisée à `true` ; sinon, nous savons que nous devons passer un Boolean, et nous passons `false` comme valeur du paramètre `useCapture`.

Si vous préférez, vous pouvez utiliser une bibliothèque tierce comme [Modernizr](https://github.com/modernizr/modernizr) ou [Detect It](https://github.com/rafrex/detect-it) pour faire ce test pour vous.

Vous pouvez en apprendre davantage dans l'article à propos des [`EventListenerOptions`](https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection) du [Groupe Web Incubator Community](https://wicg.github.io/admin/charter.html).

## Exemples

### Ajouter un écouteur simple

Cet exemple montre comment utiliser `addEventListener()` pour surveiller les clics de souris sur un élément.

#### HTML

```html
<table id="outside">
  <tr><td id="t1">un</td></tr>
  <tr><td id="t2">deux</td></tr>
</table>
```

#### JavaScript

```js
// Fonction pour changer le contenu de t2
function modifyText() {
  const t2 = document.querySelector("#t2");
  if (t2.firstChild.nodeValue == "trois") {
    t2.firstChild.nodeValue = "deux";
  } else {
    t2.firstChild.nodeValue = "trois";
  }
}

// Ajouter un écouteur d'évènements à la table
const el = document.querySelector("#outside");
el.addEventListener("click", modifyText, false);
```

Dans ce code, `modifyText()` est un écouteur pour les évènements `click` enregistré en utilisant `addEventListener()`. Un clic n'importe où sur la table se propagera jusqu'au gestionnaire et exécutera `modifyText()`.

#### Résultat

{{EmbedLiveSample('Ajouter_un_écouteur_simple')}}

### Écouteur d'évènement avec une fonction anonyme

Ici, nous allons voir comment utiliser une fonction anonyme pour passer des paramètres à l'écouteur d'évènements.

#### HTML

```html
<table id="outside">
  <tr><td id="t1">un</td></tr>
  <tr><td id="t2">deux</td></tr>
</table>
```

#### JavaScript

```js
// Fonction pour changer le contenu de t2
function modifyText(newText) {
  const t2 = document.querySelector("#t2");
  t2.firstChild.nodeValue = newText;
}

// Fonction pour ajouter un écouteur d'évènement à la table
const el = document.querySelector("#outside");
el.addEventListener("click", function(){modifyText("quatre")}, false);
```

Notez que l'écouteur est une fonction anonyme encapsulant le code qui peut à son tour envoyer des paramètres à la fonction `modifyText()`, qui est responsable de la réponse effective à l'évènement.

#### Résultat

{{EmbedLiveSample('Écouteur_d\'évènement_avec_une_fonction_anonyme')}}

### Écouteur d'évènement avec une fonction fléchée

Cet exemple montre un écouteur d'évènement simple implémenté en utilisant la notation de fonction fléchée.

#### HTML

```html
<table id="outside">
  <tr><td id="t1">un</td></tr>
  <tr><td id="t2">deux</td></tr>
</table>
```

#### JavaScript

```js
// Fonction pour changer le contenu de t2
function modifyText(newText) {
  const t2 = document.querySelector("#t2");
  t2.firstChild.nodeValue = newText;
}

// Ajouter un écouteur d'évènements à la table avec une fonction fléchée
const el = document.querySelector("#outside");
el.addEventListener("click", () => {
  modifyText("quatre");
}, false);
```

#### Résultat

{{EmbedLiveSample('Écouteur_d\'évènement_avec_une_fonction_fléchée')}}

Notez que si les fonctions anonymes et fléchées sont similaires, elles ont des liaisons `this` différentes. Alors que les fonctions anonymes (et toutes les fonctions JavaScript traditionnelles) créent leurs propres liaisons `this`, les fonctions fléchées héritent la liaison `this` de la fonction contenante. [Voir la page sur l'opérateur `this` pour plus d'informations.](fr/docs/Web/JavaScript/Reference/Operators/this#avec_les_fonctions_fléchées)

Cela signifie que les variables et constantes disponibles pour la fonction contenante sont aussi disponibles pour le gestionnaire d'évènements lors de l'utilisation d'une fonction fléchée.

### Exemple d'utilisation des options

#### HTML

```html
<div class="outer">
  extérieur, once & none-once
  <div class="middle" target="_blank">
    milieu, capture & none-capture
    <a class="inner1" href="https://www.mozilla.org" target="_blank">
      intérieur1, passive & preventDefault (ce qui n'est pas autorisé)
    </a>
    <a class="inner2" href="/" target="_blank">
      intérieur2, none-passive & preventDefault (nouvelle page non ouverte)
    </a>
  </div>
</div>
```

#### CSS

```css
.outer,
.middle,
.inner1,
.inner2 {
  display: block;
  width: 520px;
  padding: 15px;
  margin: 15px;
  text-decoration: none;
}
.outer {
  border: 1px solid red;
  color: red;
}
.middle {
  border: 1px solid green;
  color: green;
  width: 460px;
}
.inner1,
.inner2 {
  border: 1px solid purple;
  color: purple;
  width: 400px;
}
```

#### JavaScript

```js
const outer = document.querySelector('.outer');
const middle = document.querySelector('.middle');
const inner1 = document.querySelector('.inner1');
const inner2 = document.querySelector('.inner2');

const capture = {
  capture: true
};
const noneCapture = {
  capture: false
};
const once = {
  once: true
};
const noneOnce = {
  once: false
};
const passive = {
  passive: true
};
const nonePassive = {
  passive: false
};

outer.addEventListener('click', onceHandler, once);
outer.addEventListener('click', noneOnceHandler, noneOnce);
middle.addEventListener('click', captureHandler, capture);
middle.addEventListener('click', noneCaptureHandler, noneCapture);
inner1.addEventListener('click', passiveHandler, passive);
inner2.addEventListener('click', nonePassiveHandler, nonePassive);

function onceHandler(event) {
  console.log('extérieur, once');
}
function noneOnceHandler(event) {
  console.log('extérieur, none-once, default');
}
function captureHandler(event) {
  // event.stopImmediatePropagation();
  console.log('milieur, capture');
}
function noneCaptureHandler(event) {
  console.log('milieur, none-capture, default');
}
function passiveHandler(event) {
  // Impossible d'utiliser preventDefault à l'intérieur de l'invocation d'un écouteur d'évènements passif.
  event.preventDefault();
  console.log('intérieur1, passive, nouvelle page ouverte');
}
function nonePassiveHandler(event) {
  event.preventDefault();
  // event.stopPropagation();
  console.log('intérieur2, none-passive, default, nouvelle page non ouverte');
}
```

#### Résultat

Cliquez les conteneurs _extérieur_, _milieu_, _intérieurs_ respectivement pour voir comment les options fonctionnent. Vous pouvez ouvrir la console pour observer les différents messages émis.

{{EmbedLiveSample('Exemple_d\'utilisation_des_options', '', '320')}}

Avant d'utiliser une valeur particulière dans l'objet `options`, c'est une bonne idée de s'assurer que le navigateur de l'utilisateur la prend en charge, du fait qu'elles sont un ajout que tous les navigateurs n'ont pas pris en charge historiquement. Voir {{anch("Safely_detecting_option_support", "Détection sûre du support des options")}} pour les détails.

### Ajout d'un écouteur annulable

Cet exemple montre comment ajouter un `addEventListener()` qui peut être interrompu par un {{domxref("AbortSignal")}}.

#### HTML

```html
<table id="outside">
  <tr><td id="t1">un</td></tr>
  <tr><td id="t2">deux</td></tr>
</table>
```

#### JavaScript

```js
// Ajout d'un écouteur d'évènement annulable à la table
const controller = new AbortController();
const el = document.querySelector("#outside");
el.addEventListener("click", modifyText, { signal: controller.signal });

// Fonction permettant de modifier le contenu de t2
function modifyText() {
  const t2 = document.querySelector("#t2");
  if (t2.firstChild.nodeValue == "trois") {
    t2.firstChild.nodeValue = "deux";
  } else {
    t2.firstChild.nodeValue = "trois";
    controller.abort(); // supprime l'écouteur lorsque la valeur est "trois".
  }
}
```

Dans l'exemple ci-dessus, nous modifions le code de l'exemple {{anch('Add_a_simple_listener', 'Ajouter un écouteur simple')}} de telle sorte qu'après que le contenu de la deuxième ligne soit devenu « trois », nous appelons `abort()` à partir du {{domxref("AbortController")}} que nous avons passé à l'appel `addEventListener()`. Cela a pour résultat que la valeur reste à "trois" pour toujours, parce que nous n'avons plus de code écoutant un évènement de clic.

#### Résultat

{{EmbedLiveSample('Ajout_d\'un_écouteur_annulable')}}

## Autres notes

### Pourquoi utiliser addEventListener() ?

`addEventListener` est la manière d'enregistrer un écouteur d'évènements telle que spécifiée dans le DOM du W3C. Ses avantages sont les suivants :

- Elle permet d'ajouter plus d'un seul gestionnaire pour un évènement. Cela peut s'avérer particulièrement utile pour les bibliothèques {{Glossary("AJAX")}}, les modules JavaScript ou tout autre sorte de code qui a besoin de fonctionner correctement avec d'autres bibliothèques/extensions.
- Elle donne un contrôle plus fin sur la phase d'activation de l'écouteur (capture contre propagation)
- Elle fonctionne avec tout élément DOM, pas seulement avec les éléments HTML.

L'[ancienne manière alternative](#older_way_to_register_event_listeners) d'enregistrer des évènements est décrite ci-dessous.

### Ajout d'un écouteur pendant la distribution d'un évènement

Si un {{domxref("EventListener")}} est ajouté à une {{domxref("EventTarget")}} pendant qu'elle traite un évènement, cet évènement ne déclenchera pas l'écouteur. Cependant, le même écouteur pourra être déclenché à une étape ultérieure du flux d'évènements, telle que la phase de propagation.

### Écouteurs d'évènements identiques multiples

Si des `EventListener` identiques multiples sont enregistrés sur la même `EventTarget` avec les mêmes paramètres, les instances dupliquées sont supprimées. Elles ne provoqueront pas un appel en double de l'`EventListener`, et elles n'ont pas besoin d'être enlevées avec la méthode {{domxref("EventTarget.removeEventListener()", "removeEventListener()")}}.

Notez toutefois que lors de l'utilisation d'une fonction anonyme comme gestionnaire, de tels écouteurs ne seront PAS identiques, du fait que les fonctions anonymes ne sont pas identiques, même si définies en utilisant le MÊME code source inchangé, simplement appelé répétitivement, même dans une boucle.

Cependant, le fait de définir répétitivement la même fonction nommée dans de tels cas peut être davantage problématique. (Voir [Problèmes de mémoire](#memory_issues) ci-dessous.)

### La valeur de "this" à l'intérieur du gestionnaire

Il est souvent souhaitable de référencer l'élément sur lequel le gestionnaire d'évènements a été déclenché, comme lors de l'utilisation d'un gestionnaire générique pour un ensemble d'éléments similaires.

Lorsqu'une fonction gestionnaire est attachée à un élément en utilisant `addEventListener()`, la valeur de {{jsxref("Operators/this","this")}} à l'intérieur du gestionnaire est une référence à l'élément. C'est la même valeur que celle de la propriété `currentTarget` de l'argument évènement qui est passé au gestionnaire.

```js
my_element.addEventListener('click', function(e) {
  console.log(this.className)           // journalise le className de my_element
  console.log(e.currentTarget === this) // journalise `true`
})
```

Pour mémoire, les [fonctions fléchées n'ont pas de `this` lié](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions#pas_de_this_lié_à_la_fonction).

```js
my_element.addEventListener('click', (e) => {
  console.log(this.className)           // ATTENTION : `this` n'est pas `my_element`
  console.log(e.currentTarget === this) // journalise `false`
})
```

Si un gestionnaire d'évènements (par exemple, {{domxref("GlobalEventHandlers.onclick", "onclick")}}) est spécifié sur un élément dans la source HTML, le code JavaScript dans la valeur de l'attribut est effectivement encapsulé dans une fonction du gestionnaire qui lie la valeur de `this` d'une manière cohérente avec le `addEventListener()` ; une occurrence de `this` dans le code représente une référence à l'élément.

```html
<table id="my_table" onclick="console.log(this.id);">
<!-- `this` fait référence à la table ; journalise 'my_table' -->
  ...
</table>
```

Notez que la valeur de `this` à l'intérieur d'une fonction, appelée par le code dans la valeur de l'attribut, se comporte selon les [règles standard](/fr/docs/Web/JavaScript/Reference/Operators/this). Ceci est illustré dans l'exemple suivant :

```html
<script>
  function logID() { console.log(this.id); }
</script>
<table id="my_table" onclick="logID();">
<!-- lorsqu'appelée, `this` fera référence à l'objet global -->
  ...
</table>
```

La valeur de `this` à l'intérieur de `logID` est une référence à l'objet global {{domxref("Window")}} (ou `undefined` dans le cas du [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode)).

#### Spécification de "this" en utilisant bind()

La méthode {{jsxref("Function.prototype.bind()")}} vous permet de spécifier la valeur qui doit être utilisée comme `this` pour tous les appels à une fonction donnée. Cette méthode vous permet de contourner facilement les problèmes dans lesquels ce que `this` sera n'est pas clair, en fonction du contexte depuis lequel votre fonction a été appelée. Notez toutefois que vous aurez besoin de conserver quelque part une référence à l'écouteur, de façon à pouvoir le supprimer ultérieurement.

Ceci est un exemple avec et sans `bind()` :

```js
const Something = function(element) {
  // |this| est un objet nouvellement créé
  this.name = 'Quelque chose de bon';
  this.onclick1 = function(event) {
    console.log(this.name); // undefined, car |this| est l'élément
  };
  this.onclick2 = function(event) {
    console.log(this.name); // 'Quelque chose de bon', car |this| est lié à l'objet nouvellement créé
  };
  element.addEventListener('click', this.onclick1, false);
  element.addEventListener('click', this.onclick2.bind(this), false); // Astuce
}
const s = new Something(document.body);
```

Une autre solution consiste à utiliser une fonction spéciale appelée `handleEvent()` pour intercepter tous les évènements :

```js
const Something = function(element) {
  // |this| est un objet nouvellement créé
  this.name = 'Quelque chose de bon';
  this.handleEvent = function(event) {
    console.log(this.name); // "Quelque chose de bon", car |this| est lié à l'objet nouvellement créé.
    switch(event.type) {
      case 'click':
        // un peu de code ici...
        break;
      case 'dblclick':
        // un peu de code ici...
        break;
    }
  };

  // Notez que les écouteurs dans ce cas sont |this|, et non this.handleEvent
  element.addEventListener('click', this, false);
  element.addEventListener('dblclick', this, false);

  // Vous pouvez retirer correctement les écouteurs
  element.removeEventListener('click', this, false);
  element.removeEventListener('dblclick', this, false);
}
const s = new Something(document.body);
```

Une autre manière de gérer la référence à this est de passer à l'`EventListener` une fonction qui appelle la méthode de l'objet qui contient les champs auxquels on a besoin d'accéder :

```js
class SomeClass {

  constructor() {
    this.name = 'Quelque chose de bon';
  }

  register() {
    const that = this;
    window.addEventListener('keydown', function(e) { that.someMethod(e); });
  }

  someMethod(e) {
    console.log(this.name);
    switch(e.keyCode) {
      case 5:
        // un peu de code ici...
        break;
      case 6:
        // un peu de code ici...
        break;
    }
  }

}

const myObject = new SomeClass();
myObject.register();
```

### Passer des données à et depuis un écouteur d'évènements

On peut avoir l'impression que les écouteurs d'évènements sont comme des îles et qu'il est extrêmement difficile de leur passer des données quelconques, encore moins d'en récupérer après qu'ils ont été exécutés. Les écouteurs d'évènements ne prennent qu'un seul argument, l'objet [`event`](/fr/docs/Learn/JavaScript/Building_blocks/Events#event_objects), qui est passé automatiquement à l'écouteur, et la valeur retournée est ignorée. Aussi, comment pouvons-nous leur passer des données et en récupérer ? Il y a un certain nombre de bonnes méthodes pour ce faire.

#### Passer des données à un écouteur d'évènement en utilisant "this"

Comme mentionné [ci-dessus](#specifying_this_using_bind), vous pouvez utiliser `Function.prototype.bind()` pour passer une valeur à un écouteur d'évènements via la variable de référence `this`.

```js
const myButton = document.getElementById('my-button-id');
const someString = 'Donnée';

myButton.addEventListener('click', function () {
  console.log(this); // Valeur attendue : "Donnée".
}.bind(someString));
```

Cette méthode est appropriée quand vous n'avez pas besoin de savoir sur quel élément HTML l'écouteur d'évènement a été déclenché par programme depuis l'intérieur de l'écouteur d'évènements. Le principal avantage de cette façon de faire est que l'écouteur d'évènements reçoit les données sensiblement de la même manière qu'il le ferait si vous les lui passiez au moyen de sa liste d'arguments.

#### Passer des données à un écouteur d'évènements en utilisant une propriété de portée externe

Quand une portée externe contient une déclaration de variable (avec `const`, `let`), toutes les fonctions internes déclarées dans cette portée ont accès à cette variable (voir [ici](/fr/docs/Glossary/Function#different_types_of_functions) pour des informations sur les fonctions externes/internes, et [ici](/fr/docs/Web/JavaScript/Reference/Statements/var#implicit_globals_and_outer_function_scope) pour des informations sur la portée des variables). Par conséquent, une des façons les plus simples pour accéder à des données depuis l'extérieur d'un écouteur d'évènements est de le rendre accessible dans la portée dans laquelle l'écouteur d'évènement est déclaré.

```js
const myButton = document.getElementById('my-button-id');
let someString = 'Donnée';

myButton.addEventListener('click', function() {
  console.log(someString);  // Valeur attendue : 'Donnée'

  someString = 'Encore des données';
});

console.log(someString);  // Valeur attendue : 'Donnée' (ne donnera jamais 'Encore des données')
```

> **Note :** Bien que les portées internes aient accès aux variables `const` et `let` depuis les portées externes, vous ne pouvez pas vous attendre à ce que des changements quelconques de ces variables soient accessibles après la définition de l'écouteur d'évènements, à l'intérieur de la même portée externe. Pourquoi ? Simplement parce qu'au moment où l'écouteur d'évènements s'exécutera, la portée dans laquelle il a été défini pourrait avoir déjà fini de s'exécuter.

#### Passer des données à et depuis un écouteur d'évènements en utilisant des objets

A l'inverse de la plupart des fonctions en JavaScript, les objets sont conservés en mémoire aussi longtemps qu'une variable les référençant existe en mémoire. Ceci, plus le fait que les objets peuvent avoir des propriétés, et qu'ils peuvent être passés par référence, en font des candidats pertinents pour partager des données entre les portées. Explorons cela.

> **Note :** Les fonctions en JavaScript sont en fait des objets. (Par conséquent, elles aussi peuvent avoir des propriétés, et seront conservées en mémoire même après qu'elles ont fini de s'exécuter, si elles ont été affectées à une variable qui persiste en mémoire.)

Du fait que les propriétés d'un objet peuvent être utilisées pour stocker des données en mémoire aussi longtemps qu'une variable référençant l'objet existe en mémoire, vous pouvez en fait les utiliser pour passer des données dans un écouteur d'évènements, et retourner tous les changements aux données après que l'écouteur d'évènements s'est exécuté. Considérez cet exemple :

```js
const myButton = document.getElementById('my-button-id');
const someObject = {aProperty: 'Donnée'};

myButton.addEventListener('click', function() {
  console.log(someObject.aProperty);  // Valeur attendue : "Donnée".

  someObject.aProperty = 'Encore des données';  // Modifie la valeur
});

window.setInterval(function() {
  if (someObject.aProperty === 'Encore des données') {
    console.log('Encore des données : Vrai');
    someObject.aProperty = 'Donnée';  // Rétablit la valeur pour attendre l'exécution du prochain évènement
  }
}, 5000);
```

Dans cet exemple, même si la portée dans laquelle à la fois l'écouteur d'évènements et la fonction d'intervalle ont été définis a fini de s'exécuter avant que la valeur originale de `unObjet.unePropriete` ait changé, du fait que `someObject` persiste en mémoire (par référence) à la fois dans l'écouteur d'évènements et dans la fonction d'intervalle, tous deux ont accès aux mêmes données (i.e. quand l'un change les données, l'autre peut répondre aux changements).

> **Note :** Les objets sont stockés dans les variables par référence, ce qui signifie que seul l'emplacement en mémoire des données elles-mêmes est stocké dans la variable. Entre autres choses, cela signifie que les variables qui "stockent" des objets peuvent en fait affecter d'autres variables qui se voient affecter ("stocker") la même référence d'objet. Quand deux variables référencent le même objet (par ex., `let a = b = {aProperty: 'Ouai'};`), le fait de changer les données dans l'une ou l'autre des variables affectera l'autre.

> **Note :** Du fait que les objets sont stockés dans les variables par référence, vous pouvez retourner un objet depuis une fonction pour le maintenir en vie (le conserver en mémoire, de sorte que vous n'en perdiez pas les données) après que cette fonction a fini de s'exécuter.

### Prise en charge d'Internet Explorer et attachEvent

Dans les versions Internet Explorer versions avant IE 9, vous deviez utiliser `attachEvent()` plutôt que la méthode standard `addEventListener`. Pour IE, nous modifions l'exemple précédent en :

```js
if (el.addEventListener) {
  el.addEventListener('click', modifierTexte, false);
} else if (el.attachEvent)  {
  el.attachEvent('onclick', modifierTexte);
}
```

Il y a un inconvénient avec `attachEvent` : la valeur de `this` sera une référence à l'objet `window`, au lieu de l'élément sur lequel il a été déclenché.

La méthode `attachEvent()` peut être couplée avec l'évènement `onresize` pour détecter que certains éléments dans une page web ont été redimensionnés. L'évènement propriétaire `mselementresize`, lorsqu'il est couplé avec la méthode `addEventListener` d'enregistrement des gestionnaires d'évènements, fournit une fonctionnalité similaire à celle de `onresize`, se déclenchant quand certains éléments HTML sont redimensionnés.

### Prothèse d'émulation (_polyfill_)

Vous pouvez contourner le fait que `addEventListener()`, `removeEventListener()`, {{domxref("Event.preventDefault()")}} et {{domxref("Event.stopPropagation()")}} ne sont pas pris en charge par IE 8 en utilisant le code suivant au début de votre script. Le code prend en charge l'utilisation de `handleEvent()`, et aussi l'évènement {{event("DOMContentLoaded")}}.

> **Note :** `useCapture` n'est pas pris en charge, du fait qu'IE 8 n'a aucune méthode alternative. Le code suivant ajoute seulement la prise en charge d'IE 8. Cette émulation pour IE 8 fonctionne uniquement en mode standard : une déclaration `doctype` est requise.

```js
(function() {
  if (!Event.prototype.preventDefault) {
    Event.prototype.preventDefault=function() {
      this.returnValue=false;
    };
  }
  if (!Event.prototype.stopPropagation) {
    Event.prototype.stopPropagation=function() {
      this.cancelBubble=true;
    };
  }
  if (!Element.prototype.addEventListener) {
    var eventListeners=[];

    var addEventListener=function(type,listener /*, useCapture (sera ignoré) */) {
      var self=this;
      var wrapper=function(e) {
        e.target=e.srcElement;
        e.currentTarget=self;
        if (typeof listener.handleEvent != 'undefined') {
          listener.handleEvent(e);
        } else {
          listener.call(self,e);
        }
      };
      if (type=="DOMContentLoaded") {
        var wrapper2=function(e) {
          if (document.readyState=="complete") {
            wrapper(e);
          }
        };
        document.attachEvent("onreadystatechange",wrapper2);
        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper2});

        if (document.readyState=="complete") {
          var e=new Event();
          e.srcElement=window;
          wrapper2(e);
        }
      } else {
        this.attachEvent("on"+type,wrapper);
        eventListeners.push({object:this,type:type,listener:listener,wrapper:wrapper});
      }
    };
    var removeEventListener=function(type,listener /*, useCapture (sera ignoré) */) {
      var counter=0;
      while (counter<eventListeners.length) {
        var eventListener=eventListeners[counter];
        if (eventListener.object==this && eventListener.type==type && eventListener.listener==listener) {
          if (type=="DOMContentLoaded") {
            this.detachEvent("onreadystatechange",eventListener.wrapper);
          } else {
            this.detachEvent("on"+type,eventListener.wrapper);
          }
          eventListeners.splice(counter, 1);
          break;
        }
        ++counter;
      }
    };
    Element.prototype.addEventListener=addEventListener;
    Element.prototype.removeEventListener=removeEventListener;
    if (HTMLDocument) {
      HTMLDocument.prototype.addEventListener=addEventListener;
      HTMLDocument.prototype.removeEventListener=removeEventListener;
    }
    if (Window) {
      Window.prototype.addEventListener=addEventListener;
      Window.prototype.removeEventListener=removeEventListener;
    }
  }
})();
```

### Ancienne manière d'enregistrer les écouteurs d'évènements

La méthode `addEventListener()` a été ajoutée dans la spécification DOM 2 [Events](http://www.w3.org/TR/DOM-Level-2-Events). Avant cela, les écouteurs d'évènements étaient enregistrés de la manière suivante :

```js
// Passage d'une référence à une fonction
// Ne pas ajouter de '()' après, cela appelerait la fonction !
el.onclick = modifyText;

// Utilisation d'une fonction directe
element.onclick = function() {
  ...logique de la fonction...
};
```

Cette méthode remplace l'(les) écouteur(s) d'évènements `click` existant(s) de l'élément s'il y en a. D'autres évènements et leurs gestionnaires d'évènements associés comme `blur` (`onblur`), et `keypress` ( `onkeypress`) se comportent de façon similaire.

Comme elle faisait partie de façon fondamentale du DOM 0, cette méthode est très largement prise en charge et ne nécessite aucun code multi-navigateur. C'est pourquoi elle est souvent utilisée pour enregistrer des évènements dynamiquement quand de très anciens navigateurs (comme IE dans les versions antérieures à IE8) doivent être pris en charge ; voir la table plus bas pour les détails de la prise en charge par les navigateurs pour `addEventListener`.

### Problèmes de mémoire

```js
let i;
const els = document.getElementsByTagName('*');

// Cas 1
for (i=0 ; i<els.length ; i++) {
  els[i].addEventListener("click", function(e){/*faire quelque chose*/}, false);
}

// Cas 2
function processEvent(e) {
  /* faire quelque chose */
}

for (i=0 ; i<els.length ; i++) {
  els[i].addEventListener("click", processEvent, false);
}
```

Dans le premier cas ci-dessus, une nouvelle fonction gestionnaire (anonyme) est créée à chaque itération de la boucle. Dans le second cas, la même fonction déclarée préalablement est utilisée comme gestionnaire d'évènements. Cela entraîne une consommation de mémoire réduite. De plus, dans le premier cas, il n'est pas possible d'appeler {{domxref("EventTarget.removeEventListener", "removeEventListener()")}} du fait qu'aucune référence à la fonction anonyme n'est conservée (ou ici, n'est conservée aucune des multiples fonctions anonymes que la boucle peut créer). Dans le second cas, il est possible de faire `myElement.removeEventListener("click", processEvent, false)` du fait que `processEvent` est la référence à la fonction.

En fait, en ce qui concerne la consommation de mémoire, l'absence de conservation d'une référence à la fonction n'est pas le problème réel ; c'est plutôt l'absence de conservation d'une référence STATIQUE à la fonction. Dans les deux cas à problème ci-dessous, une référence à la fonction est conservée, mais du fait qu'elle est redéfinie à chaque itération, elle n'est pas statique. Dans le troisème cas, la référence à la fonction anonyme est réaffectée à chaque itération. Dans le quatrième cas, la définition entière de la fonction est inchangée, mais elle est néanmoins répétitivement définie comme si elle était nouvelle (à moins qu'elle n'ait été \[\[promue]] par le compilateur), et elle n'est donc pas statique. Par conséquent, bien qu'il ne semble y avoir simplement que des \[\[Multiple identical event listeners]], dans les deux cas, chaque itération créera à la place un nouvel écouteur avec sa propre unique référence à la fonction gestionnaire. Cependant, du fait que la définition de la fonction elle-même ne change pas, la MÊME fonction peut toujours être appelée pour chaque écouteur dupliqué (spécialement si le code est optimisé.)

Également dans les deux cas, du fait que la référence à la fonction a été conservée mais est répétitivement redéfinie par chaque ajout, l'instruction 'remove' ci-dessus peut toujours supprimer un écouteur, mais seulement le dernier ajouté.

```js
// Pour illustration seulement : notez la "FAUTE" de [j] au lieu de [i] entrainant ainsi que les évènements voulus sont tous enregistrés pour le MÊME élément

// Cas 3
for (let i=0, j=0 ; i<els.length ; i++) {
  /* faire des tas de choses avec j */
  els[j].addEventListener("click", processEvent = function(e) {/*faire quelque chose*/}, false);
}

// Cas 4
for (let i=0, j=0 ; i<els.length ; i++) {
  /* faire des tas de choses avec  j */
  function processEvent(e) {/*faire quelque chose*/};
  els[j].addEventListener("click", processEvent, false);
}
```

### Amélioration des performances de défilement avec les écouteurs passifs

D'après la spécification, la valeur par défaut pour l'option `passive` est toujours `false`. Toutefois, cela introduit la possibilité que des écouteurs d'évènements gérant certains évènements tactiles (parmi d'autres) bloquent le fil d'exécution principal du navigateur pendant qu'il essaye de gérer le défilement, avec possiblement pour résultat une énorme réduction de performance pendant la gestion du défilement.

Pour prévenir ce problème, certains navigateurs (spécifiquement, Chrome et Firefox) ont changé la valeur par défault de l'option `passive` à `true` pour les évènements {{event("touchstart")}} et {{event("touchmove")}} dans les nœuds de niveau document {{domxref("Window")}}, {{domxref("Document")}}, et {{domxref("Document.body")}}. Cela empêche que l'écouteur d'évènement ne soit appelé, de sorte qu'il ne peut pas bloquer le rendu de la page pendant que l'utilisateur fait un défilement.

> **Note :** Voir la table de compatibilité ci-dessous si vous avez besoin de savoir quels navigateurs (et/ou quelles versions de ces navigateurs) implémentent ce comportement modifié.

Vous pouvez passer outre ce comportement en initialisant explicitement la valeur de `passive` à `false`, comme montré ci-dessous :

```js
/* Détection de la fonctionnalité */
let passiveIfSupported = false;

try {
  window.addEventListener("test", null,
    Object.defineProperty(
      {},
      "passive",
      {
        get: function() { passiveIfSupported = { passive: true }; }
      }
    )
  );
} catch(err) {}

window.addEventListener('scroll', function(event) {
  /* faire quelque chose */
  // ne peut pas utiliser event.preventDefault();
}, passiveIfSupported );
```

Dans les navigateurs anciens qui ne prennent pas en charge le paramètre `options` d'`addEventListener()`, le fait d'essayer de l'utiliser empêche l'utilisation de l'argument `useCapture` sans utilisation appropriée de la [détection de fonctionnalité](#safely_detecting_option_support).

Vous n'avez pas besoin de vous inquiéter de la valeur de `passive` pour l'évènement {{event("scroll")}} de base. Du fait qu'il ne peut pas être annulé, les écouteurs d'évènements ne peuvant pas bloquer le rendu de la page de toute façon.

## Spécifications

| Spécification                                                                                                                            | Statut                           | Commentaire          |
| ---------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName("DOM WHATWG", "#dom-eventtarget-addeventlistener", "EventTarget.addEventListener()")}}         | {{Spec2("DOM WHATWG")}} |                      |
| {{SpecName("DOM4", "#dom-eventtarget-addeventlistener", "EventTarget.addEventListener()")}}                 | {{Spec2("DOM4")}}         |                      |
| {{SpecName("DOM2 Events", "#Events-EventTarget-addEventListener", "EventTarget.addEventListener()")}} | {{Spec2("DOM2 Events")}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.EventTarget.addEventListener", 3)}}

## Voir aussi

- {{domxref("EventTarget.removeEventListener()")}}
- [Création et déclenchement d'évènements](/fr/docs/Web/Guide/Events/Creating_and_triggering_events)
- [Plus de détails sur l'utilisation de `this` dans les gestionnaires d'évènements](http://www.quirksmode.org/js/this.html)
