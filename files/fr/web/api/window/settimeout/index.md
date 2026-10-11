---
title: "Window : méthode setTimeout()"
short-title: setTimeout()
slug: Web/API/Window/setTimeout
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

La méthode **`setTimeout()`** de l'interface {{DOMxRef("Window")}} définit un minuteur qui exécute une fonction ou un morceau de code défini une fois que le minuteur expire.

## Syntaxe

```js-nolint
setTimeout(code)
setTimeout(code, delay)

setTimeout(func)
setTimeout(func, delay)
setTimeout(func, delay, param1)
setTimeout(func, delay, param1, param2)
setTimeout(func, delay, param1, param2, /* …, */ paramN)
```

### Paramètres

- `func`
  - : Un objet {{JSxRef("Function")}} à exécuter après l'expiration du minuteur.
- `code`
  - : Un objet {{DOMxRef("TrustedScript")}} ou une chaîne de caractères contenant du code arbitraire qui est compilé et exécuté après `delay` millisecondes.
    Cela peut être utilisé à la place de passer une fonction, mais est _fortement déconseillé_ pour les mêmes raisons qui font de l'utilisation de {{JSxRef("Global_Objects/eval", "eval()")}} un risque de sécurité.
- `delay` {{Optional_Inline}}
  - : Un entier non négatif indiquant combien de temps le minuteur doit attendre avant que la fonction ou le code défini ne soit exécuté, en millisecondes.
    La valeur par défaut est 0 si elle n'est pas définie.

    Note&nbsp;:
    - Le délai a une valeur maximale de 2147483647ms — la spécification de valeurs supérieures peut entraîner un débordement ou l'utilisation d'une valeur égale à 0.
      Voir [valeur maximale du délai](#valeur_maximale_du_délai) ci-dessous pour plus d'informations.
    - Le délai réel peut être plus long que celui défini.
      Par exemple, définir `delay` à 0 exécute dans le cycle d'évènement suivant plutôt que «&nbsp;immédiatement&nbsp;».
      Voir [Raisons pour lesquelles les délais peuvent être plus longs que définis](#raisons_pour_lesquelles_les_délais_peuvent_être_plus_longs_que_prévu) pour plus d'informations.
    - Si la valeur n'est pas un nombre, une [coercition de type](/fr/docs/Glossary/Type_coercion) implicite est effectuée silencieusement sur la valeur pour la convertir en nombre.
      Cela peut entraîner des résultats inattendus et surprenants — voir [Les valeurs de délai non numériques sont silencieusement converties en nombres](#les_valeurs_de_délai_non_numériques_sont_converties_en_nombres_silencieusement) pour un exemple.
    - Les valeurs négatives se comportent de la même manière que 0.

- `param1`, …, `paramN` {{Optional_Inline}}
  - : Des arguments supplémentaires qui sont transmis à la fonction définie par `func`.

### Valeur de retour

Un entier positif (typiquement dans la plage de 1 à 2 147 483 647) qui identifie de manière unique le minuteur créé par l'appel.
Cet identifiant, souvent appelé «&nbsp;ID de délai&nbsp;», peut être passé à {{DOMxRef("Window.clearTimeout","clearTimeout()")}} pour annuler le minuteur.

Dans le même environnement global (par exemple, une fenêtre ou un worker spécifique), l'identifiant de délai n'est jamais réutilisé pour un nouveau minuteur tant que le minuteur original reste actif.
Cependant, des environnements globaux distincts maintiennent leurs propres ensembles indépendants d'identifiants de minuteur.

### Exceptions

- {{JSxRef("SyntaxError")}}
  - : Le paramètre `code` ne peut pas être analysé comme un script.
- {{JSxRef("TypeError")}}
  - : Levée si le paramètre `code` est défini sur une chaîne de caractères alors que les [types de confiance](/fr/docs/Web/API/Trusted_Types_API) sont [imposés par une CSP](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance) et qu'aucune politique par défaut n'est définie.
    Elle est également levée si le premier paramètre n'est pas de l'un des types pris en charge&nbsp;: une fonction, une chaîne de caractères ou `TrustedScript`.

## Description

La fonction `setTimeout()` est couramment utilisée pour appeler une fonction qui est exécutée une seule fois, après un délai.
Vous pouvez appeler {{DOMxRef("Window.clearTimeout()")}} pour annuler le délai avant qu'il ne se termine.

Si vous souhaitez appeler une fonction de manière répétée (par exemple, toutes les _N_ millisecondes), vous pouvez utiliser {{DOMxRef("Window.setInterval", "setInterval()")}}.

### Travailler avec des fonctions asynchrones

`setTimeout()` est une fonction asynchrone, ce qui signifie que la fonction passée en argument ne bloquera pas l'exécution des autres fonctions de la pile d'appels.
Elle «&nbsp;n'attend pas&nbsp;», ce qui signifie que l'exécution des lignes de code après `setTimeout()` n'est pas bloquée jusqu'à ce que le code programmé ait été exécuté.

Prenons cet exemple&nbsp;:

```js
setTimeout(() => {
  console.log("Voici le premier message");
}, 5000);
setTimeout(() => {
  console.log("Voici le second message");
}, 3000);
setTimeout(() => {
  console.log("Voici le troisième message");
}, 1000);

// Affiche :

// Voici le troisième message
// Voici le second message
// Voici le premier message
```

La méthode `setTimeout()` est appelée trois fois, en lui passant une fonction de rappel qui consigne l'ordre dans lequel `setTimeout()` a été appelée.
Les méthodes appelées en premier générant des délais plus importants, les fonctions de rappel sont exécutées dans l'ordre inverse de celui dans lequel elles ont été programmées.
Si `setTimeout()` reste bloqué jusqu'à ce que la fonction de rappel soit terminée, les messages s'affichent dans l'ordre.

Les méthodes asynchrones sont utiles, car elles permettent d'exécuter des tâches en parallèle lorsque l'ordre d'exécution n'a pas d'importance.
Si l'ordre d'exécution d'une méthode asynchrone a de l'importance, vous pouvez utiliser les [promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) (chaînage de promesses) pour attendre la fin d'une tâche.

### Les fonctions sont appelées avec le `this` global

Les fonctions passées à `setTimeout()` sont exécutées avec la sémantique d'appel de fonction normale pour déterminer la référence de [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this).
Ce problème est expliqué en détail dans la [référence JavaScript](/fr/docs/Web/JavaScript/Reference/Operators/this#fonctions_de_rappel).

Pour les fonctions qui ne sont pas fléchées, le contexte `this` est défini sur l'objet [`globalThis`](/fr/docs/Web/JavaScript/Reference/Global_Objects/globalThis) (un alias pour [`window`](/fr/docs/Web/API/Window/window) dans les navigateurs).

L'exemple suivant montre comment cela peut provoquer un comportement inattendu. Ici, lorsque nous passons la méthode `compteur.compter` directement à `setTimeout()`, le contexte `this` est perdu, et la méthode est appelée sur l'objet global au lieu de l'instance `Compteur`, ce qui entraîne une `TypeError` lorsque la méthode `compter` tente d'accéder à `this`&nbsp;:

```js
class Compteur {
  constructor() {
    this.data = new Map();
  }

  compter(element) {
    this.data.set(element, (this.data.get(element) || 0) + 1);
  }
}

const compteur = new Compteur();

compteur.compter("toto"); // Ajoute avec succès « toto » au tableau de correspondance
setTimeout(compteur.compter, 1000, "truc");
// TypeError: Cannot read properties of undefined (reading 'set')
```

Pour contourner ce problème, vous devez vous assurer que la fonction transmise à `setTimeout` dispose du contexte `this` approprié. Il existe trois méthodes principales pour y parvenir&nbsp;:

1. Si vous souhaitez définir explicitement le contexte `this`, au lieu de passer directement la méthode, encapsulez l'appel de méthode dans une autre fonction anonyme qui appelle explicitement la méthode avec le contexte correct&nbsp;:

   ```js
   setTimeout(() => compteur.compter("truc"), 1000);
   setTimeout(function () {
     compteur.compter("truc");
   }, 1000);
   ```

2. Si vous souhaitez utiliser le contexte `this` du code qui appelle `setTimeout()`, utilisez toujours une fonction fléchée, qui hérite du contexte `this` de sa portée englobante&nbsp;:

   ```js example-bad
   class Compteur {
     // …
     compterAvecDelai(element) {
       // MAUVAIS : le contexte de `this` est perdu dans la fonction de rappel
       setTimeout(function () {
         this.data.set(element, (this.data.get(element) || 0) + 1);
       }, 1000);
     }
   }
   ```

   ```js example-good
   class Compteur {
     // …
     compterAvecDelai(element) {
       // BON : la fonction fléchée hérite du contexte de `this` de `compterAvecDelai()`
       setTimeout(() => {
         this.data.set(element, (this.data.get(element) || 0) + 1);
       }, 1000);
     }
   }
   ```

3. Si vous souhaitez éviter les wrappers de fonction supplémentaires (qui augmentent l'utilisation de la mémoire) tout en définissant explicitement le contexte `this`, vous pouvez utiliser la méthode [`Function.prototype.bind()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/bind) pour créer une nouvelle fonction avec le contexte `this` correct&nbsp;:

   ```js
   setTimeout(compteur.compter.bind(compteur), 1000, "truc");
   ```

### Les valeurs de délai non numériques sont converties en nombres silencieusement

Si la fonction `setTimeout()` est appelée avec une valeur [_d'attente_](#delay) qui n'est pas un nombre, une [conversion de type](/fr/docs/Glossary/Type_coercion) implicite est effectuée en arrière-plan sur cette valeur afin de la convertir en nombre.
Par exemple, le code suivant utilise à tort la chaîne de caractères `"1000"` pour la valeur _d'attente_, au lieu du nombre `1000` — mais il fonctionne néanmoins, car lors de l'exécution du code, la chaîne de caractères est convertie en nombre `1000`, et le code s'exécute donc 1 seconde plus tard.

```js example-bad
setTimeout(() => {
  console.log("Décalé pour 1 seconde.");
}, "1000");
```

Dans de nombreux cas, la conversion implicite de type peut entraîner des résultats inattendus et surprenants.
Par exemple, lorsque le code suivant s'exécute, la chaîne de caractères `"1 second"` est finalement convertie en nombre `0` — et le code s'exécute donc sans aucun délai.

```js example-bad
setTimeout(() => {
  console.log("Décalé pour 1 seconde.");
}, "1 second");
```

Par conséquent, n'utilisez pas de chaînes de caractères pour la valeur de _d'attente_, mais utilisez toujours des nombres&nbsp;:

```js example-good
setTimeout(() => {
  console.log("Décalé pour 1 seconde.");
}, 1000);
```

### Valeur maximale du délai

L'argument `delay` est converti en un entier signé sur 32 bits, ce qui limite la valeur à 2147483647 ms, soit environ 24,8 jours.
Les délais supérieurs à cette valeur provoquent un dépassement d'entier.
Par exemple, ce code&nbsp;:

```js
setTimeout(() => console.log("coucou !"), 2 ** 32 - 5000);
```

…ce qui donne en résultat que le délai d'attente est exécuté immédiatement (puisque `2**32 - 5000` déborde pour devenir un nombre négatif), tandis que le code suivant&nbsp;:

```js
setTimeout(() => console.log("coucou !"), 2 ** 32 + 5000);
```

…ce qui donne en résultat que le délai d'attente est exécuté après environ 5 secondes.

> [!NOTE]
> Dans Node.js, tout délai supérieur à 2 147 483 647ms entraîne une exécution immédiate.

### Raisons pour lesquelles les délais peuvent être plus longs que prévu

Il existe un certain nombre de raisons pour lesquelles un délai d'attente peut prendre plus de temps que prévu pour s'exécuter.
Cette section décrit les raisons les plus courantes.

#### Délais imbriqués

Comme défini dans le [standard HTML](https://html.spec.whatwg.org/multipage/timers-and-user-prompts.html#timers), les navigateurs appliquent un délai minimum de 4 millisecondes une fois qu'un appel imbriqué à `setTimeout` a été programmé 5 fois.

Cela peut être observé dans l'exemple suivant, dans lequel nous imbriquons un appel à `setTimeout` avec un délai de `0` millisecondes, et enregistrons le délai chaque fois que le gestionnaire est appelé.
Les quatre premières fois, le délai est d'environ 0 millisecondes, et après cela il est d'environ 4 millisecondes&nbsp;:

```html
<button id="executer">Exécuter</button>
<table>
  <thead>
    <tr>
      <th>Précédent</th>
      <th>Actuel</th>
      <th>Délai réel</th>
    </tr>
  </thead>
  <tbody id="journal"></tbody>
</table>
```

```js
let dernier = 0;
let iterations = 10;

function delaiAttente() {
  // journalise le moment de cet appel
  journaliser(new Date().getMilliseconds());
  // si nous n'avons pas terminé, programme l'appel suivant
  if (iterations-- > 0) {
    setTimeout(delaiAttente, 0);
  }
}

function executer() {
  // nettoie le journal
  const journal = document.querySelector("#journal");
  while (journal.lastElementChild) {
    journal.removeChild(journal.lastElementChild);
  }

  // initialise le nombre d'itérations et l'horodatage de départ
  iterations = 10;
  dernier = new Date().getMilliseconds();
  // démarre le minuteur
  setTimeout(delaiAttente, 0);
}

function journaliser(maintenant) {
  // journalise le dernier horodatage, le nouvel horodatage et la différence
  const tableBody = document.getElementById("journal");
  const logRow = tableBody.insertRow();
  logRow.insertCell().textContent = dernier;
  logRow.insertCell().textContent = maintenant;
  logRow.insertCell().textContent = maintenant - dernier;
  dernier = maintenant;
}

document.querySelector("#executer").addEventListener("click", executer);
```

```css hidden
* {
  font-family: monospace;
}
th,
td {
  padding: 0 10px;
  text-align: center;
  border: 1px solid;
}
table {
  border-collapse: collapse;
  margin-top: 10px;
}
```

{{EmbedLiveSample("Délais imbriqués", 100, 250)}}

#### Délai d'attente dans les onglets inactifs

Pour réduire la charge (et la consommation de batterie associée) des onglets en arrière-plan, les navigateurs imposent un délai d'attente minimum dans les onglets inactifs.
Il peut également être levé si une page joue du son en utilisant un objet {{DOMxRef("AudioContext")}} de l'API Web Audio.

Les détails de ce comportement dépendent du navigateur&nbsp;:

- Firefox pour bureau a un délai d'attente minimum de 1 seconde pour les onglets inactifs.
- Firefox pour Android a un délai d'attente minimum de 15 minutes pour les onglets inactifs et peut les décharger entièrement.
- Firefox ne limite pas les onglets inactifs si l'onglet contient un objet {{DOMxRef("AudioContext")}}.
- Chrome utilise différents niveaux de limitation en fonction de l'activité de l'onglet&nbsp;:
  - **Limitation minimale**&nbsp;: S'applique aux minuteries lorsque la page est visible, a récemment émis un son ou est autrement considérée comme active par Chrome. Les minuteries s'exécutent près de l'intervalle demandé.
  - **Limitation**&nbsp;: S'applique aux minuteries lorsque les conditions de limitation minimale ne sont pas remplies et que l'une de ces conditions est vraie&nbsp;:
    - Nombre d'imbrications (c'est-à-dire le nombre d'appels de minuteries en chaîne) est inférieur à 5.
    - La page est invisible depuis moins de 5 minutes.
    - WebRTC est actif.
      Les minuteries dans cet état sont vérifiées une fois par seconde, ce qui peut être regroupé avec d'autres minuteries ayant des délais similaires.
  - **Limitation intensive**&nbsp;: Introduite dans Chrome 88 (janvier 2021). S'applique aux minuteries lorsque ni les conditions de limitation minimale ni les conditions de limitation ne sont remplies, et que toutes les conditions suivantes sont remplies&nbsp;:
    - Le nombre d'imbrications est de 5 ou plus.
    - La page est invisible depuis plus de 5 minutes.
    - La page est silencieuse depuis plus de 30 secondes.
    - WebRTC est inactif.
      Les minuteries dans cet état sont vérifiées une fois par minute, ce qui peut être regroupé avec d'autres minuteries ayant des délais similaires.

#### Limitation des scripts de suivi

Firefox applique une limitation supplémentaire aux scripts qu'il reconnaît comme des scripts de suivi.
Lorsque le navigateur est au premier plan, le délai minimum de limitation est toujours de 4ms. Dans les onglets en arrière-plan, cependant, le délai minimum de limitation est de 10 000ms, soit 10 secondes, ce qui entre en vigueur 30 secondes après le premier chargement d'un document.

Voir [Protection contre le pistage <sup>(angl.)</sup>](https://wiki.mozilla.org/Security/Tracking_protection) pour plus de détails.

#### Délai d'attente tardif

Le délai d'attente peut également se produire plus tard que prévu si la page (ou le système d'exploitation/navigateur) est occupé par d'autres tâches.
Un cas important à noter est que la fonction ou le fragment de code ne peut pas être exécuté tant que le thread ayant appelé `setTimeout()` n'a pas terminé.
Par exemple&nbsp;:

```js
function toto() {
  console.log("toto a été appelé");
}
setTimeout(toto, 0);
console.log("Après setTimeout");
```

Écrit dans la console&nbsp;:

```plain
Après setTimeout
toto a été appelé
```

C'est parce que même si `setTimeout` a été appelée avec un délai de zéro, elle est placée dans une file d'attente et programmée pour s'exécuter à la prochaine occasion&nbsp;; pas immédiatement.
Le code en cours d'exécution doit se terminer avant l'exécution des fonctions de la file, l'ordre d'exécution qui en résulte peut donc ne pas être celui attendu.

#### Reporter le déclenchement des minuteurs pendant le chargement de la page

Firefox reporte le déclenchement des minuteurs `setTimeout()` pendant le chargement de l'onglet actuel. Le déclenchement est différé jusqu'à ce que le processus principal soit considéré comme inactif (similaire à {{DOMxRef("Window.requestIdleCallback()")}}), ou jusqu'au déclenchement de l'évènement de chargement.

### Pages d'arrière-plan de WebExtensions et minuteurs

Dans les [WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions), `setTimeout()` ne fonctionne pas de manière fiable. Les auteur·ice·s d'extensions utilisent plutôt l'API [`alarms`](/fr/docs/Mozilla/Add-ons/WebExtensions/API/alarms).

### Considérations de sécurité

La méthode peut être utilisée pour exécuter une entrée arbitraire transmise dans le paramètre `code`.
Si l'entrée est une chaîne de caractères potentiellement dangereuse fournie par un·e utilisateur·ice elle constitue un vecteur possible d'attaques par [scripts inter-sites (XSS)](/fr/docs/Web/Security/Attacks/XSS).

Par exemple, le code suivant montre comment `setTimeout()` peut exécuter `codeNonFiable` fourni par un·e utilisateur·ice&nbsp;:

```js example-bad
const codeNonFiable = "alert('Code potentiellement malveillant!');";
const id = setTimeout(codeNonFiable, 1000);
```

Les sites dotés d'une [politique de sécurité du contenu (CSP)](/fr/docs/Web/HTTP/Guides/CSP) qui définit [`script-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/script-src) ou [`default-src`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/default-src) empêchent par défaut l'exécution de ce code.
Vous pouvez définir [`unsafe-eval`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#unsafe-eval) dans votre CSP pour autoriser l'exécution de `setTimeout()`, mais cela est dangereux car cela désactive l'une des principales protections de la CSP.
Voir [JavaScript intégré](/fr/docs/Web/HTTP/Guides/CSP#javascript_en_incise) dans le guide sur la CSP.

Si vous devez autoriser l'exécution des scripts au moyen de `setTimeout()` vous pouvez atténuer ces problèmes en assignant toujours des objets {{DOMxRef("TrustedScript")}} au lieu de chaînes de caractères, et en [imposant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_les_types_de_confiance) au moyen de la directive CSP [`require-trusted-types-for`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for).
Cela garantit que l'entrée passe par une fonction de transformation.

Pour permettre à `setTimeout()` de s'exécuter, vous devez également définir le [mot-clé `trusted-types-eval`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#trusted-types-eval) dans votre directive CSP `script-src`.
Cette directive agit comme `unsafe-eval`, mais autorise l'évaluation de la méthode _uniquement_ si les types de confiance sont activés (si vous utilisez `unsafe-eval` elle autorise aussi l'exécution dans les navigateurs qui ne prennent pas en charge les types de confiance).

Par exemple, la CSP requise pour votre site peut ressembler à ceci&nbsp;:

```http
Content-Security-Policy: require-trusted-types-for 'script'; script-src '<your_allowlist>' 'trusted-types-eval'
```

Le comportement de la fonction de transformation dépend du cas d'utilisation qui nécessite un script fourni par un·e utilisateur·ice.
Si possible vous limitez les scripts autorisés au code précis dont vous approuvez l'exécution.
Si cela n'est pas possible, vous pouvez autoriser ou bloquer l'utilisation de certaines fonctions dans la chaîne de caractères fournie.

## Exemples

Notez que ces exemples omettent l'utilisation des types de confiance pour des raisons de concision.
Consultez la section [Utiliser `TrustedScript`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval#utiliser_trustedscript) dans `eval()` pour voir un exemple de code illustrant l'approche recommandée.

### Définir et effacer des délais d'attente

L'exemple suivant met en place deux boutons simples dans une page Web et les associe aux routines `setTimeout()` et `clearTimeout()`.
Appuyer sur le premier bouton définit un délai d'attente qui affiche un message au bout de deux secondes et stocke l'identifiant du délai d'attente pour qu'il soit utilisé par `clearTimeout()`.
Vous pouvez, si vous le souhaitez, annuler ce délai d'attente en appuyant sur le deuxième bouton.

#### HTML

```html
<button id="afficher">Afficher un message au bout de deux secondes</button>
<button id="annuler">Annuler le message avant son affichage</button>

<div id="sortie"></div>
```

#### JavaScript

```js
let idAttente;

function definirSortie(contenueSortie) {
  document.querySelector("#sortie").textContent = contenueSortie;
}

function messageDiffere() {
  definirSortie("");
  idAttente = setTimeout(definirSortie, 2 * 1000, "C'est vraiment lent !");
}

function effacerMessage() {
  clearTimeout(idAttente);
}

document.getElementById("afficher").addEventListener("click", messageDiffere);
document.getElementById("annuler").addEventListener("click", effacerMessage);
```

```css hidden
#sortie {
  padding: 0.5rem 0;
}
```

#### Résultat

{{EmbedLiveSample("Définir et effacer des délais d'attente")}}

Voir également l'exemple de {{DOMxRef("Window.clearTimeout", "clearTimeout()")}}.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `setTimeout()` qui permet de passer des arguments à la fonction de rappel dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#settimeout-and-setinterval)
- La méthode {{DOMxRef("Window.clearTimeout()")}}
- La méthode {{DOMxRef("WorkerGlobalScope.setTimeout()")}}
- La méthode {{DOMxRef("Window.setInterval()")}}
- La méthode {{DOMxRef("Window.requestAnimationFrame()")}}
- La méthode {{DOMxRef("Window.queueMicrotask()")}}
