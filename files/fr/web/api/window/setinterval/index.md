---
title: "Window : méthode setInterval()"
short-title: setInterval()
slug: Web/API/Window/setInterval
l10n:
  sourceCommit: 051d02b402b7f76c2078b12283aa18318c34c38b
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> Lorsqu'on utilise le paramètre `code`, cette méthode exécute dynamiquement sa valeur en tant que JavaScript.
> Les API de ce type sont connues sous le nom de [points d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_utilisation) et constituent potentiellement un vecteur pour les attaques de [scripts inter-sites (XSS)](/fr/docs/Web/Security/Attacks/XSS).
>
> Vous pouvez atténuer ce risque en assignant toujours des objets {{DOMxRef("TrustedScript")}} au lieu de chaînes de caractères et en [appliquant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance).
> Consultez la section [Considérations de sécurité](#considérations_de_sécurité) pour plus d'informations.

La méthode **`setInterval()`** de l'interface {{DOMxRef("Window")}} appelle de manière répétée une fonction ou exécute un extrait de code, avec un délai fixe entre chaque appel.

## Syntaxe

```js-nolint
setInterval(code)
setInterval(code, delay)

setInterval(func)
setInterval(func, delay)
setInterval(func, delay, param1)
setInterval(func, delay, param1, param2)
setInterval(func, delay, param1, param2, /* …, */ paramN)
```

### Paramètres

- `func`
  - : Un object {{JSxRef("Function")}} qui doit être exécuté toutes les `delay` millisecondes.
    La première exécution a lieu après `delay` millisecondes.
- `code`
  - : Un objet {{DOMxRef("TrustedScript")}} ou une chaîne de caractères de code arbitraire qui est compilé et exécuté toutes les `delay` millisecondes.
    Cela peut être utilisé à la place de passer une fonction, mais est _fortement déconseillé_ pour les mêmes raisons qui font de l'utilisation de {{JSxRef("Global_Objects/eval", "eval()")}} un risque de sécurité.
- `delay` {{Optional_Inline}}
  - : Le temps de retard entre les exécutions de la fonction ou du code défini, en millisecondes.
    Par défaut à 0 si non défini.
    Voir la section [Restrictions de délai](#restriction_de_délai) ci-dessous pour plus de détails sur la plage de valeurs `delay` autorisée.
- `param1`, …, `paramN` {{Optional_Inline}}
  - : Des arguments supplémentaires qui sont passés à la fonction définie par _func_ une fois que le minuteur expire.

### Valeur de retour

Un entier positif (généralement compris entre 1 et 2 147 483 647) qui identifie de manière unique le minuteur d'intervalle créé par l'appel.

Cet identifiant, souvent appelé «&nbsp;ID d'intervalle&nbsp;», peut être passé à {{DOMxRef("Window.clearInterval", "clearInterval()")}} pour arrêter l'exécution répétée de la fonction définie.

### Exceptions

- {{JSxRef("SyntaxError")}}
  - : Le `code` ne peut pas être analysé en tant que script.
- {{JSxRef("TypeError")}}
  - : Levée si le paramètre `code` est défini sur une chaîne de caractères lorsque les [types de confiance](/fr/docs/Web/API/Trusted_Types_API) sont [imposés par un CSP](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance) et qu'aucune politique par défaut n'est définie.
    Elle est également levée si le premier paramètre n'est pas l'un des types pris en charge&nbsp;: une fonction, une chaîne de caractères ou `TrustedScript`.

## Description

La fonction `setInterval()` est couramment utilisée pour définir un délai pour les fonctions qui sont exécutées encore et encore, comme les animations.
Vous pouvez annuler l'intervalle en utilisant {{DOMxRef("Window.clearInterval", "clearInterval()")}}.

Si vous souhaitez que votre fonction soit appelée _une seule fois_ après le délai défini, utilisez {{DOMxRef("Window.setTimeout", "setTimeout()")}}.

### Restrictions de délai

Il est possible que les intervalles soient imbriqués&nbsp;: c'est-à-dire que le rappel pour `setInterval()` peut à son tour appeler `setInterval()` pour démarrer un autre intervalle en cours d'exécution, même si le premier est toujours actif.
Pour atténuer l'impact potentiel que cela peut avoir sur les performances, une fois que les intervalles sont imbriqués au-delà de cinq niveaux, le navigateur applique automatiquement une valeur minimale de 4ms pour l'intervalle.
Les tentatives de définir une valeur inférieure à 4ms dans des appels profondément imbriqués à `setInterval()` sont limitées à 4ms.

Les navigateurs peuvent appliquer des valeurs minimales encore plus strictes pour l'intervalle dans certaines circonstances, bien que cela ne doive pas être courant.
Notez également que le temps réel écoulé entre les appels au rappel peut être plus long que le `delay` donné&nbsp;; voir [Raisons des délais plus longs que définis](/fr/docs/Web/API/Window/setTimeout#reasons_for_longer_delays_than_specified) pour des exemples.

> [!NOTE]
> L'argument `delay` est converti en un entier signé sur 32 bits, ce qui limite la valeur à 2147483647ms, soit environ 24,8 jours.

### Les identifiants d'intervalle sont partagés avec `setTimeout()`

La méthode retourne un identifiant qui identifie de manière unique le minuteur d'intervalle créé par l'appel.
Cet identifiant, souvent appelé «&nbsp;ID d'intervalle&nbsp;», peut être transmis à {{DOMxRef("Window.clearInterval", "clearInterval()")}} pour arrêter l'exécution répétée de la fonction définie.

Dans un même environnement global (par exemple, une fenêtre ou un worker donné), l'identifiant d'intervalle reste unique et n'est pas réutilisé pour un nouveau minuteur d'intervalle tant que le minuteur d'origine est encore actif.
Cependant, les différents environnements globaux gèrent leurs propres groupes d'identifiants d'intervalle indépendants.

Notez que `setInterval()` et {{DOMxRef("Window.setTimeout", "setTimeout()")}} partagent le même groupe d'identifiants, et que `clearInterval()` et {{DOMxRef("Window.clearTimeout", "clearTimeout()")}} peuvent techniquement être utilisés de manière interchangeable.
Pour plus de clarté, vous devez toutefois essayer de toujours les associer correctement afin d'éviter toute confusion lors de la maintenance de votre code.

### S'assurer que la durée d'exécution est plus courte que la fréquence de l'intervalle

Si votre logique risque de prendre plus de temps à s'exécuter que l'intervalle prévu, il est recommandé d'appeler de manière récursive une fonction nommée en utilisant {{DOMxRef("Window.setTimeout", "setTimeout()")}}.
Par exemple, si vous utilisez `setInterval()` pour interroger un serveur distant toutes les 5 secondes, la latence réseau, un serveur non réactif et une multitude d'autres problèmes peuvent empêcher la requête de se terminer dans le temps imparti.
Comme tel, vous pouvez vous retrouver avec des requêtes XHR en file d'attente qui ne retournent pas nécessairement dans l'ordre.

Dans ces cas, un modèle récursif `setTimeout()` est privilégié&nbsp;:

```js
(function boucle() {
  setTimeout(() => {
    // La logique vient ici

    boucle();
  }, delay);
})();
```

Dans l'extrait ci-dessus, une fonction nommée `boucle()` est déclarée et est immédiatement exécutée.
`boucle()` est appelée de manière récursive à l'intérieur de `setTimeout()` après que la logique a été exécutée.
Bien que ce modèle ne garantisse pas une exécution à un intervalle fixe, il garantit que l'intervalle précédent est terminé avant de récursivement rappeler la fonction.

### Les fonctions sont appelées avec le `this` global

Les fonctions passées à `setInterval()` sont exécutées avec la sémantique d'appel de fonction normale pour déterminer la référence de [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this).
Ce problème est expliqué en détail dans la [référence JavaScript](/fr/docs/Web/JavaScript/Reference/Operators/this#callbacks).

Pour les fonctions qui ne sont pas fléchées, le contexte `this` est défini sur l'objet [`globalThis`](/fr/docs/Web/JavaScript/Reference/Global_Objects/globalThis) (un alias pour [`window`](/fr/docs/Web/API/Window/window) dans les navigateurs).

L'exemple suivant montre comment cela peut provoquer un comportement inattendu. Ici, lorsque nous passons la méthode `compteur.compter` directement à `setInterval()`, le contexte `this` est perdu, et la méthode est appelée sur l'objet global au lieu de l'instance `Compteur`, ce qui entraîne une `TypeError` lorsque la méthode `compter` tente d'accéder à `this`&nbsp;:

```js
class Compteur {
  constructor() {
    this.data = new Map();
  }

  compter(element) {
    this.data.set(element, (this.data.get(item) || 0) + 1);
  }
}

const compteur = new Compteur();

compteur.compter("toto"); // Ajoute avec succès « toto » au tableau de correspondance
setInterval(compteur.compter, 1000, "truc");
// TypeError: Cannot read properties of undefined (reading 'set')
```

Pour contourner ce problème, vous devez vous assurer que la fonction passée à `setInterval` a le bon contexte `this`. Il existe trois principales façons de le faire&nbsp;:

1. Si vous souhaitez définir explicitement le contexte `this`, au lieu de passer la méthode directement, enveloppez l'appel de la méthode dans une autre fonction anonyme qui appelle explicitement la méthode avec le bon contexte&nbsp;:

   ```js
   setInterval(() => compteur.compter("truc"), 1000);
   setInterval(function () {
     compteur.compter("truc");
   }, 1000);
   ```

2. Si vous souhaitez utiliser le contexte `this` du code qui appelle `setInterval()`, utilisez toujours une fonction fléchée, qui hérite du contexte `this` de sa portée englobante&nbsp;:

   ```js example-bad
   class Compteur {
     // …
     compterRepete(element) {
       // MAUVAIS : le contexte `this` est perdu dans la fonction de rappel
       setInterval(function () {
         this.data.set(element, (this.data.get(element) || 0) + 1);
       }, 1000);
     }
   }
   ```

   ```js example-good
   class Compteur {
     // …
     compterRepete(element) {
       // BON : la fonction fléchée hérite du contexte `this` de `compterRepete()`
       setInterval(() => {
         this.data.set(element, (this.data.get(element) || 0) + 1);
       }, 1000);
     }
   }
   ```

3. Si vous souhaitez éviter les wrappers de fonction supplémentaires (qui augmentent l'utilisation de la mémoire) tout en définissant explicitement le contexte `this`, vous pouvez utiliser la méthode [`Function.prototype.bind()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) pour créer une nouvelle fonction avec le contexte `this` correct&nbsp;:

   ```js
   setInterval(compteur.compter.bind(compteur), 1000, "truc");
   ```

### Considérations de sécurité

La méthode peut être utilisée pour exécuter des entrées arbitraires passées dans le paramètre `code`.
Si l'entrée est une chaîne de caractères potentiellement non sécurisée fournie par un·e utilisateur·ice, il s'agit d'un vecteur possible pour les attaques de [scripts inter-sites (XSS)](/fr/docs/Web/Security/Attacks/XSS).

Par exemple, le code suivant montre comment `setInterval()` peut exécuter `codeNonSecurise` fourni par un·e utilisateur·ice&nbsp;:

```js example-bad
const codeNonSecurise = "alert('Code potentiellement malveillant !');";
const id = setInterval(codeNonSecurise, 1000);
```

Les sites web dotés d'une [politique de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP) qui définit [`script-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) ou [`default-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) empêchent par défaut l'exécution de ce code.
Vous pouvez définir [`unsafe-eval`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) dans votre CSP pour autoriser l'exécution de `setInterval()`, mais cette pratique est dangereuse, car elle désactive l'une des principales protections de la CSP.

Voir [JavaScript intégré](/fr/docs/Web/HTTP/Guides/CSP#javascript_en_incise) dans le guide sur la CSP.

Si vous devez autoriser l'exécution des scripts avec `setInterval()`, vous pouvez atténuer ces problèmes en assignant toujours des objets {{DOMxRef("TrustedScript")}} plutôt que des chaînes de caractères et en [imposant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance) au moyen de la directive CSP [`require-trusted-types-for`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Cela garantit que l'entrée passe par une fonction de transformation.

Pour autoriser l'exécution de `setInterval()`, vous devez également définir le mot-clé [`trusted-types-eval`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) dans la directive CSP `script-src`.
Cette directive agit comme `unsafe-eval`, mais autorise l'évaluation de la méthode _uniquement_ lorsque les types de confiance sont activés (avec `unsafe-eval`, l'exécution reste autorisée même dans les navigateurs qui ne prennent pas en charge les types de confiance).

Par exemple, la CSP requise pour votre site peut ressembler à ceci&nbsp;:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<votre_liste_dautorisations>' 'trusted-types-eval'
```

Le comportement de la fonction de transformation dépend du cas d'utilisation qui nécessite un script fourni par un·e utilisateur·ice.
Dans la mesure du possible, limitez les scripts autorisés au code précis dont vous approuvez l'exécution.
Si cela n'est pas possible, vous pouvez autoriser ou bloquer certaines fonctions dans la chaîne de caractères fournie.

## Exemples

Notez que ces exemples omettent l'utilisation des types de confiance pour des raisons de concision.
Voir [Utiliser `TrustedScript`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval#utiliser_trustedscript) dans `eval()` pour du code montrant l'approche attendue.

### Exemple 1 : Syntaxe simple

L'exemple suivant démontre la syntaxe de base de `setInterval()`.

```js
const intervalID = setInterval(
  maFonctionRappel,
  500,
  "Paramètre 1",
  "Paramètre 2",
);

function maFonctionRappel(a, b) {
  // Votre code vient ici
  // Les paramètres sont purement optionnels.
  console.log(a);
  console.log(b);
}
```

### Exemple 2 : Alterner deux couleurs

L'exemple suivant appelle la fonction `texteClignotant()` une fois par seconde jusqu'à ce que le bouton Arrêter soit pressé.

#### HTML

```html
<div id="ma_boite">
  <h3>Bonjour le monde</h3>
</div>
<button id="demarrer">Démarrer</button>
<button id="arreter">Arrêter</button>
```

#### CSS

```css
.aller {
  color: green;
}
.stop {
  color: red;
}
```

#### JavaScript

```js
// la variable pour stocker notre intervalID
let intervalId;

function changerCouleur() {
  // vérifie si un intervalle a déjà été configuré
  intervalId ??= setInterval(texteClignotant, 1000);
}

function texteClignotant() {
  const oElem = document.getElementById("ma_boite");
  oElem.className = oElem.className === "aller" ? "stop" : "aller";
}

function arreterCouleurTexte() {
  clearInterval(intervalId);
  // libère notre intervalId de la variable
  intervalId = null;
}

document.getElementById("demarrer").addEventListener("click", changerCouleur);
document
  .getElementById("arreter")
  .addEventListener("click", arreterCouleurTexte);
```

#### Résultat

{{EmbedLiveSample("Exemple 2 : Alterner deux couleurs")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `setInterval` qui permet de passer des arguments au rappel dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- La méthode {{DOMxRef("Window.clearInterval()")}}
- La méthode {{DOMxRef("WorkerGlobalScope.setInterval()")}}
- La méthode {{DOMxRef("Window.setTimeout()")}}
- La méthode {{DOMxRef("Window.requestAnimationFrame()")}}
