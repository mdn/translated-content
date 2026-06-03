---
title: "EventTarget : méthode addEventListener()"
short-title: addEventListener()
slug: Web/API/EventTarget/addEventListener
l10n:
  sourceCommit: f336c5b6795a562c64fe859aa9ee2becf223ad8a
---

{{APIRef("DOM")}}{{AvailableInWorkers}}

La méthode **`addEventListener()`** de l'interface {{DOMxRef("EventTarget")}} permet de définir une fonction qui sera appelée chaque fois que l'évènement défini est envoyé à la cible.

Les cibles courantes sont {{DOMxRef("Element")}}, ses enfants, {{DOMxRef("Document")}} et {{DOMxRef("Window")}}, mais la cible peut être tout objet prenant en charge les évènements (par exemple {{DOMxRef("IDBRequest")}}).

> [!NOTE]
> La méthode `addEventListener()` est la manière _recommandée_ d'enregistrer un écouteur d'évènements. Les avantages sont les suivants&nbsp;:
>
> - Elle permet d'ajouter plusieurs gestionnaires pour un évènement. Cela est particulièrement
>   utile pour les bibliothèques, les modules JavaScript ou tout autre type
>   de code qui doit bien fonctionner avec d'autres bibliothèques ou extensions.
> - Contrairement à l'utilisation d'une propriété `onXYZ`, elle offre un contrôle plus précis de la phase lors de laquelle l'écouteur est activé (capture vs. propagation).
> - Elle fonctionne sur n'importe quelle cible d'évènement, pas seulement les éléments HTML ou SVG.

La méthode `addEventListener()` fonctionne en ajoutant une fonction, ou un objet qui implémente une fonction `handleEvent()`, à la liste des écouteurs d'évènements pour le type d'évènement défini sur le {{DOMxRef("EventTarget")}} sur lequel elle est appelée. Si la fonction ou l'objet est déjà dans la liste des écouteurs pour cette cible, la fonction ou l'objet n'est pas ajoutée une seconde fois.

> [!NOTE]
> Si une fonction anonyme particulière figure déjà dans la liste des écouteurs d'évènements enregistrés pour une cible donnée, et qu'une fonction anonyme identique est ensuite transmise à `addEventListener`, la seconde fonction sera _aussi_ ajoutée à la liste des écouteurs pour cette cible.
>
> En effet, deux fonctions anonymes ne sont jamais identiques, même si elles sont définies à partir du _même_ code source inchangé, y compris dans une boucle.
>
> Redéfinir plusieurs fois la même fonction anonyme dans ce genre de cas peut poser problème. (Voir [Problèmes de mémoire](#problèmes_de_mémoire) ci-dessous.)

Si un écouteur d'évènement est ajouté à un {{DOMxRef("EventTarget")}} depuis un autre écouteur —
c'est-à-dire pendant le traitement de l'évènement —
l'évènement en cours ne déclenchera pas le nouvel écouteur.
Cependant, ce nouvel écouteur pourra être déclenché lors d'une phase ultérieure du cycle de l'évènement,
par exemple lors de la phase de propagation (bubbling).

## Syntaxe

```js-nolint
addEventListener(type, listener)
addEventListener(type, listener, options)
addEventListener(type, listener, useCapture)
```

### Paramètres

- `type`
  - : Une chaîne de caractères sensible à la casse représentant le [type d'évènement](/fr/docs/Web/API/Document_Object_Model/Events) à écouter.
- `listener`
  - : Un objet qui reçoit la notification (un objet qui implémente l'interface {{DOMxRef("Event")}}) lorsqu'un évènement du type défini se produit. Cela peut être `null`, un objet avec une méthode `handleEvent()` ou une [fonction JavaScript](/fr/docs/Web/JavaScript/Guide/Functions). Voir [La fonction de rappel de l'écouteur d'évènements](#la_fonction_de_rappel_de_lécouteur_dévènements) pour plus de détails.
- `options` {{Optional_Inline}}
  - : Objet qui définit les caractéristiques de l'écouteur d'évènement. Les options disponibles sont&nbsp;:
    - `capture` {{Optional_Inline}}
      - : Un booléen indiquant que les évènements de ce type seront transmis à l'écouteur enregistré avant d'être transmis à tout autre `EventTarget` situé en dessous dans l'arbre DOM. Par défaut, `false` si non défini.
    - `once` {{Optional_Inline}}
      - : Un booléen indiquant que l'écouteur ne doit être invoqué qu'une seule fois après avoir été ajouté. Si `true`, l'écouteur sera automatiquement supprimé après son invocation. Par défaut, `false` si non défini.
    - `passive` {{Optional_Inline}}
      - : Un booléen qui, si `true`, indique que la fonction définie par `listener` n'appellera jamais {{DOMxRef("Event.preventDefault", "preventDefault()")}}. Si un écouteur passif appelle `preventDefault()`, rien ne se passe et un avertissement peut apparaître dans la console.

        Si cette option n'est pas définie, elle vaut `false` — sauf dans les navigateurs autres que Safari, où elle vaut `true` pour les évènements {{DOMxRef("Element/wheel_event", "wheel")}}, {{DOMxRef("Element/mousewheel_event", "mousewheel")}}, {{DOMxRef("Element/touchstart_event", "touchstart")}} et {{DOMxRef("Element/touchmove_event", "touchmove")}}. Voir [Utiliser les écouteurs passifs](#utiliser_les_écouteurs_passifs) pour en savoir plus.

    - `signal` {{Optional_Inline}}
      - : Un objet {{DOMxRef("AbortSignal")}}. L'écouteur sera supprimé lorsque la méthode {{DOMxRef("AbortController/abort()", "abort()")}} du {{DOMxRef("AbortController")}} propriétaire du signal sera appelée. Si non défini, aucun `AbortSignal` n'est associé à l'écouteur.

- `useCapture` {{Optional_Inline}}
  - : Un booléen indiquant si les évènements de ce type seront transmis à l'écouteur _avant_ d'être transmis à tout autre `EventTarget` situé en dessous dans l'arbre DOM. Les évènements qui remontent (propagation) dans l'arbre ne déclencheront pas un écouteur défini en mode capture. La propagation et la capture sont deux modes de propagation des évènements dans des éléments imbriqués ayant chacun un gestionnaire pour cet évènement. Le mode de propagation détermine l'ordre dans lequel les éléments reçoivent l'évènement. Voir [la spécification DOM <sup>(angl.)</sup>](https://dom.spec.whatwg.org/#introduction-to-dom-events) et [l'ordre des évènements JavaScript <sup>(angl.)</sup>](https://www.quirksmode.org/js/events_order.html#link4) pour plus d'explications. Par défaut, `useCapture` vaut `false` si non défini.

    > [!NOTE]
    > Pour les écouteurs attachés directement à la cible de l'évènement, l'évènement est dans la phase cible, et non dans les phases de capture ou de propagation.
    > Les écouteurs en phase _capture_ sont appelés avant ceux en phase cible ou de propagation.

- `wantsUntrusted` {{Optional_Inline}} {{Non-standard_Inline}}
  - : Paramètre spécifique à Firefox (Gecko). Si `true`, l'écouteur reçoit les évènements synthétiques envoyés par le contenu web (par défaut `false` pour le {{Glossary("chrome")}} du navigateur et `true` pour les pages web classiques). Ce paramètre est utile pour le code des modules complémentaires et du navigateur lui-même.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Notes d'utilisation

### La fonction de rappel de l'écouteur d'évènements

L'écouteur d'évènement peut être défini soit comme une fonction de rappel, soit comme un objet dont la méthode `handleEvent()` sert de fonction de rappel.

La fonction de rappel elle-même accepte les mêmes paramètres et retourne la même chose que la méthode `handleEvent()`&nbsp;: elle prend en paramètre un objet basé sur {{DOMxRef("Event")}} décrivant l'évènement survenu, et ne retourne rien.

Par exemple, une fonction de rappel pouvant servir à la fois pour {{DOMxRef("Element/fullscreenchange_event", "fullscreenchange")}} et {{DOMxRef("Element/fullscreenerror_event", "fullscreenerror")}} pourrait ressembler à&nbsp;:

```js
function handleEvent(event) {
  if (event.type === "fullscreenchange") {
    // gérer le passage en plein écran
  } else {
    // gérer l'erreur de passage en plein écran
  }
}
```

Par exemple, lorsque vous utilisez un gestionnaire générique pour un ensemble d'éléments similaires, la valeur de {{JSxRef("Operators/this", "this")}} à l'intérieur du gestionnaire sera une référence à l'élément. Elle sera identique à la valeur de la propriété `currentTarget` de l'objet évènement passé au gestionnaire.

### La valeur de `this` dans le gestionnaire

Il est souvent utile de faire référence à l'élément sur lequel le gestionnaire d'évènement a été déclenché, par exemple lorsqu'on utilise un gestionnaire générique pour un ensemble d'éléments similaires.

Lorsque vous attachez une fonction de gestion à un élément avec `addEventListener()`, la valeur de {{JSxRef("Operators/this", "this")}} à l'intérieur du gestionnaire sera une référence à l'élément. Elle sera identique à la valeur de la propriété `currentTarget` de l'objet passé au gestionnaire d'évènement.

```js
monElement.addEventListener("click", function (e) {
  console.log(this.className); // affiche la classe de monElement
  console.log(e.currentTarget === this); // affiche `true`
});
```

Rappel&nbsp;: [les fonctions fléchées n'ont pas leur propre contexte `this`](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions#pas_de_this_lié_à_la_fonction).

```js
monElement.addEventListener("click", (e) => {
  console.log(this.className); // ATTENTION : `this` n'est pas `monElement`
  console.log(e.currentTarget === this); // affiche `false`
});
```

Si un gestionnaire d'évènement (par exemple {{DOMxRef("Element.click_event", "onclick")}}) est défini sur un élément dans le code HTML, le code JavaScript de l'attribut est en réalité encapsulé dans une fonction de gestion qui lie la valeur de `this` de la même façon que `addEventListener()`&nbsp;: une occurrence de `this` dans ce code fait référence à l'élément.

```html
<table id="mon-tableau" onclick="console.log(this.id);">
  <!-- `this` fait référence au tableau ; affiche 'mon-tableau' -->
  …
</table>
```

Notez que la valeur de `this` à l'intérieur d'une fonction _appelée par_ le code de l'attribut suit les [règles standards](/fr/docs/Web/JavaScript/Reference/Operators/this). Exemple&nbsp;:

```html
<script>
  function logID() {
    console.log(this.id);
  }
</script>
<table id="mon-tableau" onclick="logID();">
  <!-- lors de l'appel, `this` fera référence à l'objet global -->
  …
</table>
```

La valeur de `this` dans `logID()` est une référence à l'objet global {{DOMxRef("Window")}} (ou `undefined` en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode)).

#### Définir `this` avec `bind()`

La méthode {{JSxRef("Function.prototype.bind()")}} permet de définir un contexte `this` fixe pour tous les appels ultérieurs — ce qui permet d'éviter les problèmes liés à l'ambiguïté du contexte `this` selon la façon dont la fonction est appelée. Notez cependant, qu'il faut conserver une référence à l'écouteur pour pouvoir le supprimer par la suite.

Voici un exemple avec et sans `bind()`&nbsp;:

```js
class Something {
  name = "Quelque-chose de bien";
  constructor(element) {
    // attacher `bind` cause un contexte `this` fixe à être assigné à `onclick2`
    this.onclick2 = this.onclick2.bind(this);
    element.addEventListener("click", this.onclick1);
    element.addEventListener("click", this.onclick2); // Trick
  }
  onclick1(event) {
    console.log(this.name); // donne undefined, car `this` est l'élément
  }
  onclick2(event) {
    console.log(this.name); // 'Quelque-chose de bien', car `this` est lié à l'instance de Something
  }
}

const s = new Something(document.body);
```

Une autre solution consiste à utiliser une fonction spéciale nommée `handleEvent()` pour intercepter tous les évènements&nbsp;:

```js
class Something {
  name = "Quelque-chose de bien";
  constructor(element) {
    // Notez que les écouteurs dans ce cas sont `this`, pas this.handleEvent
    element.addEventListener("click", this);
    element.addEventListener("dblclick", this);
  }
  handleEvent(event) {
    console.log(this.name); // 'Quelque-chose de bien', car `this` est lié à l'objet nouvellement créé
    switch (event.type) {
      case "click":
        // du code…
        break;
      case "dblclick":
        // du code…
        break;
    }
  }
}

const s = new Something(document.body);
```

Une autre façon de gérer la référence à `this` est d'utiliser une fonction fléchée, qui n'a pas de contexte `this` propre.

```js
class SomeClass {
  name = "Quelque-chose de bien";

  register() {
    window.addEventListener("keydown", (e) => {
      this.someMethod(e);
    });
  }

  someMethod(e) {
    console.log(this.name);
    switch (e.code) {
      case "ArrowUp":
        // du code…
        break;
      case "ArrowDown":
        // du code…
        break;
    }
  }
}

const myObject = new SomeClass();
myObject.register();
```

### Faire circuler des données dans un écouteur d'évènement

Les écouteurs d'évènements n'acceptent qu'un seul argument&nbsp;: un objet {{DOMxRef("Event")}} ou une sous-classe de `Event`, qui est automatiquement transmis à l'écouteur. La valeur de retour est ignorée. Ainsi, pour transmettre des données à un écouteur ou en récupérer, il faut utiliser des [fermetures (<i lang="en">closures</i> en anglais)](/fr/docs/Web/JavaScript/Guide/Functions#fermetures_closures) plutôt que de passer des paramètres ou de s'appuyer sur la valeur de retour.

Les fonctions passées comme écouteurs d'évènements ont accès à toutes les variables déclarées dans les portées englobantes.

```js
const monBouton = document.getElementById("my-button-id");
let uneChaine = "Donnée";

monBouton.addEventListener("click", () => {
  console.log(uneChaine);
  // « Donnée » au premier clic,
  // « Donnée modifiée » au second clic

  uneChaine = "Donnée modifiée";
});

console.log(uneChaine); // Valeur attendue : « Donnée » (n'affichera jamais « Donnée modifiée »)
```

Voir [le guide sur les fonctions](/fr/docs/Web/JavaScript/Guide/Functions#fermetures_closures) pour plus d'informations sur la portée des fonctions.

### Problèmes de mémoire

```js
const elems = document.getElementsByTagName("*");

// Cas 1
for (const elem of elems) {
  elem.addEventListener("click", (e) => {
    // Fait quelque chose
  });
}

// Cas 2
function traiterEvenement(e) {
  // Fait quelque chose
}

for (const elem of elems) {
  elem.addEventListener("click", traiterEvenement);
}
```

Dans le premier cas ci-dessus, une nouvelle fonction de gestion (anonyme) est créée à chaque itération de la boucle. Dans le second cas, la même fonction déclarée précédemment est utilisée comme gestionnaire d'évènement, ce qui réduit la consommation mémoire car une seule fonction gestionnaire est créée. De plus, dans le premier cas, il n'est pas possible d'appeler {{DOMxRef("EventTarget.removeEventListener", "removeEventListener()")}} car aucune référence à la fonction anonyme n'est conservée (ou ici, aucune référence à l'une des multiples fonctions anonymes créées par la boucle). Dans le second cas, il est possible d'utiliser `myElement.removeEventListener("click", traiterEvenement, false)` car `traiterEvenement` est la référence de la fonction.

En réalité, concernant la consommation mémoire, le problème n'est pas tant l'absence de référence à la fonction, mais plutôt l'absence de référence _statique_ à la fonction.

### Utiliser les écouteurs passifs

Si un évènement possède une action par défaut — par exemple, un évènement {{DOMxRef("Element/wheel_event", "wheel")}} qui fait défiler le conteneur — le navigateur ne peut généralement pas lancer l'action par défaut tant que l'écouteur d'évènement n'a pas terminé, car il ne sait pas à l'avance si l'écouteur va annuler l'action par défaut avec {{DOMxRef("Event.preventDefault()")}}. Si l'écouteur prend trop de temps à s'exécuter, cela peut provoquer un délai perceptible (appelé {{Glossary("jank")}}) avant que l'action par défaut ne soit exécutée.

En définissant l'option `passive` à `true`, un écouteur d'évènement déclare qu'il n'annulera pas l'action par défaut, ce qui permet au navigateur de lancer immédiatement l'action par défaut sans attendre la fin de l'écouteur. Si l'écouteur appelle malgré tout {{DOMxRef("Event.preventDefault()")}}, cela n'aura aucun effet.

La spécification de `addEventListener()` définit la valeur par défaut de l'option `passive` à `false`. Cependant, pour améliorer les performances de défilement dans du code existant, les navigateurs modernes ont changé la valeur par défaut de l'option `passive` à `true` pour les évènements {{DOMxRef("Element/wheel_event", "wheel")}}, {{DOMxRef("Element/mousewheel_event", "mousewheel")}}, {{DOMxRef("Element/touchstart_event", "touchstart")}} et {{DOMxRef("Element/touchmove_event", "touchmove")}} sur les nœuds de niveau document comme {{DOMxRef("Window")}}, {{DOMxRef("Document")}} et {{DOMxRef("Document.body")}}. Cela empêche l'écouteur d'évènement d'[annuler l'évènement](/fr/docs/Web/API/Event/preventDefault), et donc de bloquer l'affichage de la page pendant le défilement.

Ainsi, si vous souhaitez annuler ce comportement et garantir que l'option `passive` est `false`, vous devez explicitement définir cette option à `false` (plutôt que de compter sur la valeur par défaut).

Il n'est pas nécessaire de se soucier de la valeur de `passive` pour l'évènement {{DOMxRef("Element/scroll_event", "scroll")}} de base. Comme il ne peut pas être annulé, les écouteurs d'évènements ne peuvent pas bloquer l'affichage de la page dans ce cas.

Voir [Améliorer les performances de défilement avec les écouteurs passifs](#améliorer_les_performances_de_défilement_avec_les_écouteurs_passifs) pour un exemple illustrant l'effet des écouteurs passifs.

## Exemples

### Ajouter un écouteur simple

Cet exemple montre comment utiliser `addEventListener()` pour surveiller les clics de souris sur un élément.

#### HTML

```html
<table id="outside">
  <tbody>
    <tr>
      <td id="t1">un</td>
    </tr>
    <tr>
      <td id="t2">deux</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

```js
// Fonction pour changer le contenu de t2
function modifyText() {
  const t2 = document.getElementById("t2");
  const isNodeTrois = t2.firstChild.nodeValue === "trois";
  t2.firstChild.nodeValue = isNodeTrois ? "deux" : "trois";
}

// Ajouter un écouteur d'évènements au tableau
const el = document.getElementById("outside");
el.addEventListener("click", modifyText);
```

Dans ce code, `modifyText()` est un écouteur pour les évènements `click` enregistré avec `addEventListener()`. Un clic n'importe où dans le tableau remonte jusqu'au gestionnaire et exécute `modifyText()`.

#### Résultat

{{EmbedLiveSample('ajouter_un_écouteur_simple')}}

### Ajouter un écouteur annulable

Cet exemple montre comment ajouter un `addEventListener()` qui peut être annulé avec un {{DOMxRef("AbortSignal")}}.

#### HTML

```html
<table id="outside">
  <tbody>
    <tr>
      <td id="t1">un</td>
    </tr>
    <tr>
      <td id="t2">deux</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

```js
// Ajouter un écouteur d'évènements annulable au tableau
const controller = new AbortController();
const el = document.getElementById("outside");
el.addEventListener("click", modifyText, { signal: controller.signal });

// Fonction pour changer le contenu de t2
function modifyText() {
  const t2 = document.getElementById("t2");
  if (t2.firstChild.nodeValue === "trois") {
    t2.firstChild.nodeValue = "deux";
  } else {
    t2.firstChild.nodeValue = "trois";
    controller.abort(); // supprimer l'écouteur après que la valeur atteigne "trois"
  }
}
```

Dans l'exemple ci-dessus, on modifie le code de l'exemple précédent de sorte qu'après que le contenu de la deuxième ligne passe à « trois », on appelle `abort()` depuis le {{DOMxRef("AbortController")}} passé à `addEventListener()`. Ainsi, la valeur reste « trois » indéfiniment car il n'y a plus de code à l'écoute de l'évènement click.

#### Résultat

{{EmbedLiveSample('ajouter_un_écouteur_annulable')}}

### Écouteur d'évènement avec fonction anonyme

Ici, nous allons voir comment utiliser une fonction anonyme pour transmettre des paramètres à l'écouteur d'évènement.

#### HTML

```html
<table id="outside">
  <tbody>
    <tr>
      <td id="t1">un</td>
    </tr>
    <tr>
      <td id="t2">deux</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

```js
// Fonction pour changer le contenu de t2
function modifyText(newText) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = newText;
}

// Fonction pour ajouter un écouteur d'évènements au tableau
const el = document.getElementById("outside");
el.addEventListener("click", function () {
  modifyText("quatre");
});
```

Remarquez que l'écouteur est une fonction anonyme qui encapsule du code permettant ensuite de transmettre des paramètres à la fonction `modifyText()`, responsable de la gestion de l'évènement.

#### Résultat

{{EmbedLiveSample('écouteur_dévènement_avec_fonction_anonyme')}}

### Écouteur d'évènement avec fonction fléchée

Cet exemple montre un écouteur d'évènement implémenté avec la notation fonction fléchée.

#### HTML

```html
<table id="outside">
  <tbody>
    <tr>
      <td id="t1">un</td>
    </tr>
    <tr>
      <td id="t2">deux</td>
    </tr>
  </tbody>
</table>
```

#### JavaScript

```js
// Fonction pour changer le contenu de t2
function modifyText(newText) {
  const t2 = document.getElementById("t2");
  t2.firstChild.nodeValue = newText;
}

// Ajouter un écouteur d'évènements au tableau avec une fonction fléchée
const el = document.getElementById("outside");
el.addEventListener("click", () => {
  modifyText("quatre");
});
```

#### Résultat

{{EmbedLiveSample('écouteur_dévènement_avec_fonction_fléchée')}}

Notez que bien que les fonctions anonymes et les fonctions fléchées soient similaires, elles n'ont pas le même comportement pour `this`. Les fonctions anonymes (et toutes les fonctions traditionnelles JavaScript) créent leur propre liaison `this`, tandis que les fonctions fléchées héritent du `this` de la fonction englobante.

Cela signifie que les variables et constantes disponibles dans la fonction englobante sont aussi accessibles à l'écouteur d'évènement lorsqu'on utilise une fonction fléchée.

### Exemple d'utilisation des options

#### HTML

```html
<div class="outer">
  outer, une fois & aucune fois
  <div class="middle" target="_blank">
    middle, capture & aucune capture
    <a class="inner1" href="https://www.mozilla.org" target="_blank">
      inner1, passif & preventDefault(n'est pas autorisé)
    </a>
    <a class="inner2" href="https://developer.mozilla.org/" target="_blank">
      inner2, pas passif & preventDefault(n'ouvre pas de nouvelle page)
    </a>
  </div>
</div>
<hr />
<button class="clear-button">Effacer les journaux</button>
<section class="demo-logs"></section>
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

```css hidden
.demo-logs {
  width: 530px;
  height: 16rem;
  background-color: #dddddd;
  overflow-x: auto;
  padding: 1rem;
}
```

#### JavaScript

```js hidden
const clearBtn = document.querySelector(".clear-button");
const demoLogs = document.querySelector(".demo-logs");

function log(msg) {
  demoLogs.innerText += `${msg}\n`;
}

clearBtn.addEventListener("click", () => {
  demoLogs.innerText = "";
});
```

```js
const outer = document.querySelector(".outer");
const middle = document.querySelector(".middle");
const inner1 = document.querySelector(".inner1");
const inner2 = document.querySelector(".inner2");

const capture = {
  capture: true,
};
const noneCapture = {
  capture: false,
};
const once = {
  once: true,
};
const noneOnce = {
  once: false,
};
const passive = {
  passive: true,
};
const nonePassive = {
  passive: false,
};

outer.addEventListener("click", onceHandler, once);
outer.addEventListener("click", noneOnceHandler, noneOnce);
middle.addEventListener("click", captureHandler, capture);
middle.addEventListener("click", noneCaptureHandler, noneCapture);
inner1.addEventListener("click", passiveHandler, passive);
inner2.addEventListener("click", nonePassiveHandler, nonePassive);

function onceHandler(event) {
  log("outer, un fois");
}
function noneOnceHandler(event) {
  log("outer, aucune fois, par défaut\n");
}
function captureHandler(event) {
  // event.stopImmediatePropagation();
  log("middle, capture");
}
function noneCaptureHandler(event) {
  log("middle, aucune capture, par défaut");
}
function passiveHandler(event) {
  // Unable to preventDefault inside passive event listener invocation.
  event.preventDefault();
  log("inner1, passif, ouvre un nouvelle page");
}
function nonePassiveHandler(event) {
  event.preventDefault();
  // event.stopPropagation();
  log("inner2, pas passif, par défaut, n'ouvre pas de nouvelle page");
}
```

#### Résultat

Click the outer, middle, inner containers respectively to see how the options work.

{{EmbedLiveSample('exemple_dutilisation_des_options', 600, 630)}}

### Écouteur d'évènement avec plusieurs options

Vous pouvez définir plusieurs options dans le paramètre `options`. Dans l'exemple suivant, nous en définissons deux&nbsp;:

- `passive`, pour indiquer que le gestionnaire n'appellera pas {{DOMxRef("Event.preventDefault", "preventDefault()")}}
- `once`, pour s'assurer que le gestionnaire d'évènement ne sera appelé qu'une seule fois.

#### HTML

```html
<button id="bouton-exemple">Vous n'avez pas cliqué sur ce bouton.</button>
<button id="bouton-reinitialisation">
  Cliquez sur ce bouton pour réinitialiser le premier bouton.
</button>
```

#### JavaScript

```js
const buttonToBeClicked = document.getElementById("bouton-exemple");

const resetButton = document.getElementById("bouton-reinitialisation");

// le texte avec lequel le bouton est initialisé
const initialText = buttonToBeClicked.textContent;

// le texte que le bouton contient après avoir été cliqué
const clickedText = "Vous avez cliqué sur ce bouton.";

// nous élevons la fonction de rappel de l'écouteur d'évènements
// pour éviter d'avoir des écouteurs en double attachés
function eventListener() {
  buttonToBeClicked.textContent = clickedText;
}

function addListener() {
  buttonToBeClicked.addEventListener("click", eventListener, {
    passive: true,
    once: true,
  });
}

// lorsque le bouton de réinitialisation est cliqué, le bouton d'exemple
// est réinitialisé, et autorisé à avoir son état mis à jour à nouveau
resetButton.addEventListener("click", () => {
  buttonToBeClicked.textContent = initialText;
  addListener();
});

addListener();
```

#### Résultat

{{EmbedLiveSample('écouteur_dévènement_avec_plusieurs_options')}}

### Améliorer les performances de défilement avec les écouteurs passifs

L'exemple suivant montre l'effet de l'option `passive`. Il inclut un {{HTMLElement("div")}} contenant du texte et une case à cocher.

#### HTML

```html
<div id="container">
  <p>
    Mais là-bas, il ferait sombre maintenant, et ce ne serait pas le joli
    aquarium éclairé qu'elle s'imaginait pendant les heures de jour,
    tourbillonnant avec des bancs de minuscules animaux délicats flottant et
    dansant lentement à leurs propres courants sereins et créant l'apparence
    d'une peinture vivante. C'était faux, de toute façon. L'océan était
    différent d'un aquarium, qui était un environnement artificiel. L'océan
    était un monde. Et un monde n'est pas de l'art. Dorothy pensa aux êtres
    vivants qui se déplaçaient dans ce monde&nbsp;: grands, impitoyables et
    affamés. Comme nous ici-haut.
  </p>
</div>

<div>
  <input type="checkbox" id="passive" name="passive" checked />
  <label for="passive">passif</label>
</div>
```

```css hidden
#container {
  width: 150px;
  height: 200px;
  overflow: scroll;
  margin: 2rem 0;
  padding: 0.4rem;
  border: 1px solid black;
}
```

#### JavaScript

Ce code ajoute un écouteur à l'évènement {{DOMxRef("Element/wheel_event", "wheel")}} du conteneur, qui fait défiler ce dernier par défaut. L'écouteur exécute une opération longue. Au départ, l'écouteur est ajouté avec l'option `passive`, et chaque fois que la case à cocher est modifiée, le code bascule la valeur de l'option `passive`.

```js
const passive = document.querySelector("#passive");
const container = document.querySelector("#container");

passive.addEventListener("change", (event) => {
  container.removeEventListener("wheel", wheelHandler);
  container.addEventListener("wheel", wheelHandler, {
    passive: passive.checked,
    once: true,
  });
});

container.addEventListener("wheel", wheelHandler, {
  passive: true,
  once: true,
});

function wheelHandler() {
  function isPrime(n) {
    for (let c = 2; c <= Math.sqrt(n); ++c) {
      if (n % c === 0) {
        return false;
      }
    }
    return true;
  }

  const quota = 1000000;
  const primes = [];
  const maximum = 1000000;

  while (primes.length < quota) {
    const candidate = Math.floor(Math.random() * (maximum + 1));
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }

  console.log(primes);
}
```

#### Résultat

L'effet est le suivant&nbsp;:

- Au départ, l'écouteur est passif, donc le défilement du conteneur à la molette est immédiat.
- Si vous décochez «&nbsp;passive&nbsp;» et essayez de faire défiler le conteneur avec la molette, il y a un délai notable avant le défilement, car le navigateur doit attendre la fin de l'écouteur long à s'exécuter.

{{EmbedLiveSample("améliorer_les_performances_de_défilement_avec_les_écouteurs_passifs", 100, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("EventTarget.removeEventListener()")}}
- [Créer et déclencher des évènements personnalisés](/fr/docs/Web/API/Document_Object_Model/Events#créer_et_déclencher_des_évènements)
- [Plus de détails sur l'utilisation de `this` dans les gestionnaires d'évènements <sup>(angl.)</sup>](https://www.quirksmode.org/js/this.html)
