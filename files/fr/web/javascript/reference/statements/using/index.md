---
title: using
slug: Web/JavaScript/Reference/Statements/using
l10n:
  sourceCommit: 075e089ec955f14ed65dfaa0bf3311051c58f666
---

La déclaration **`using`** déclare des variables locales à portée de bloc qui sont _libérées de façon synchrone_. Comme pour {{JSxRef("Statements/const", "const")}}, les variables déclarées avec `using` doivent être initialisées et ne peuvent pas être réaffectées. La valeur de la variable doit être `null`, `undefined`, ou un objet possédant une méthode [`[Symbol.dispose]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose). Lorsque la variable sort de la portée, la méthode `[Symbol.dispose]()` de l'objet est appelée pour s'assurer que les ressources sont libérées.

## Syntaxe

```js-nolint
using name1 = value1;
using name1 = value1, name2 = value2;
using name1 = value1, name2 = value2, /* …, */ nameN = valueN;
```

- `nameN`
  - : Le nom de la variable à déclarer. Chacun doit être un [identifiant](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#identifiers) JavaScript valide et _ne doit pas_ être un [modèle de décomposition](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring).
- `valueN`
  - : Valeur initiale de la variable. Il peut s'agir de n'importe quelle expression valide, mais sa valeur doit être `null`, `undefined` ou un objet possédant une méthode `[Symbol.dispose]()`.

## Description

Cette déclaration peut être utilisée&nbsp;:

- À l'intérieur d'un [bloc](/fr/docs/Web/JavaScript/Reference/Statements/block)
- À l'intérieur de n'importe quel [corps de fonction](/fr/docs/Web/JavaScript/Reference/Statements/function) ou d'un [bloc d'initialisation statique de classe](/fr/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)
- Au niveau supérieur d'un [module](/fr/docs/Web/JavaScript/Guide/Modules)
- Dans l'initialiseur d'une boucle {{JSxRef("Statements/for", "for")}}, {{JSxRef("Statements/for...of", "for...of")}} ou {{JSxRef("Statements/for-await...of", "for await...of")}}

Plus précisément, elle ne peut pas être utilisée&nbsp;:

- Au niveau supérieur d'un script, car les portées de script sont persistantes.
- Au niveau supérieur d'une instruction {{JSxRef("Statements/switch", "switch")}}.
- Dans l'initialiseur d'une boucle {{JSxRef("Statements/for...in", "for...in")}}, car la variable de boucle ne peut être qu'une chaîne de caractères ou un symbole.

Un `using` déclare une ressource jetable liée à la durée de vie de la portée de la variable (bloc, fonction, module, etc.). Lorsque la portée se termine, la ressource est libérée de façon synchrone. La variable peut valoir `null` ou `undefined`, la ressource peut donc être optionnelle.

Lors de la première déclaration de la variable, si sa valeur n'est pas nulle/indéfinie, une fonction de libération est récupérée depuis l'objet. Si la propriété `[Symbol.dispose]` ne contient pas une fonction, une `TypeError` est levée. Cette fonction de libération est enregistrée dans la portée.

Quand la variable sort de la portée, la fonction de libération est appelée. Si la portée contient plusieurs déclarations `using` ou {{JSxRef("Statements/await_using", "await using")}}, toutes les fonctions de libération sont exécutées dans l'ordre inverse de leur déclaration, quel que soit le type de déclaration. L'exécution de toutes les fonctions de libération est garantie (similaire au bloc `finally` dans {{JSxRef("Statements/try...catch", "try...catch...finally")}}). Toutes les erreurs levées lors de la libération, y compris l'erreur initiale ayant provoqué la sortie de portée (le cas échéant), sont agrégées dans un seul {{JSxRef("SuppressedError")}}, chaque exception antérieure étant placée dans la propriété `suppressed` et la dernière exception dans la propriété `error`. Ce `SuppressedError` est levé après la fin de la libération.

`using` lie la gestion des ressources aux portées lexicales, ce qui est à la fois pratique et parfois déroutant. Il existe plusieurs façons de préserver la valeur de la variable une fois que la variable elle-même est hors portée, ce qui peut vous amener à conserver une référence vers une ressource déjà libérée. Voir les exemples ci-dessous pour des cas où le comportement peut surprendre. Si vous souhaitez gérer manuellement la libération des ressources tout en conservant les mêmes garanties de gestion d'erreur, vous pouvez utiliser l'objet {{JSxRef("DisposableStack")}}.

## Exemples

Dans les exemples suivants, nous supposons une classe simple `Resource` qui possède une méthode `getValue` et une méthode `[Symbol.dispose]()`&nbsp;:

```js
class Resource {
  value = Math.random();
  #isDisposed = false;

  getValue() {
    if (this.#isDisposed) {
      throw new Error("La ressource est libérée");
    }
    return this.value;
  }

  [Symbol.dispose]() {
    this.#isDisposed = true;
    console.log("Ressource libérée");
  }
}
```

### `using` dans un bloc

La ressource déclarée avec `using` est libérée lors de la sortie du bloc.

```js
{
  using resource = new Resource();
  console.log(resource.getValue());
  // Ressource libérée ici
}
```

### `using` dans une fonction

Vous pouvez utiliser `using` dans le corps d'une fonction. Dans ce cas, la ressource est libérée lorsque la fonction termine son exécution, immédiatement avant que la fonction ne retourne.

```js
function example() {
  using resource = new Resource();
  return resource.getValue();
}
```

Ici, `resource[Symbol.dispose]()` sera appelé après `getValue()`, avant l'exécution de la déclaration `return`.

La ressource peut survivre à la déclaration si elle est capturée par une [fermeture](/fr/docs/Web/JavaScript/Guide/Closures)&nbsp;:

```js
function example() {
  using resource = new Resource();
  return () => resource.getValue();
}
```

Dans ce cas, si vous appelez `example()()`, vous exécuterez toujours `getValue` sur une ressource déjà libérée, car la ressource a été libérée lorsque `example` retourne. Si vous voulez libérer la ressource immédiatement après que la fonction de rappel ait été appelée une fois, considérez ce modèle&nbsp;:

```js
function example() {
  const resource = new Resource();
  return () => {
    using resource2 = resource;
    return resource2.getValue();
  };
}
```

Ici, nous _aliasons_ une ressource déclarée avec `const` à une ressource déclarée avec `using`, de sorte que la ressource n'est libérée qu'après la fonction de rappel&nbsp;; notez que si celle-ci n'est jamais appelée, la ressource ne sera jamais nettoyée.

### `using` dans un module

Vous pouvez utiliser `using` au niveau supérieur d'un module. Dans ce cas, la ressource est libérée lorsque le module a fini de s'exécuter.

```js
using resource = new Resource();
export const value = resource.getValue();
// Ressource libérée ici
```

`export using` est une syntaxe invalide, mais vous pouvez `export` une variable déclarée ailleurs à l'aide de `using`&nbsp;:

```js
using resource = new Resource();
export { resource };
```

Cela reste déconseillé, car l'importateur recevra toujours une ressource déjà libérée. Comme pour le problème de la closure, cela prolonge la durée de vie de la valeur au-delà de la portée de la variable.

### `using` avec `for...of`

Vous pouvez utiliser `using` dans l'initialiseur d'une boucle `for...of`. Dans ce cas, la ressource est libérée à chaque itération de la boucle.

```js
const resources = [new Resource(), new Resource(), new Resource()];
for (using resource of resources) {
  console.log(resource.getValue());
  // Ressource libérée ici
}
```

### Déclarer plusieurs `using`

Les deux formes suivantes sont équivalentes pour déclarer plusieurs ressources jetables&nbsp;:

```js
using resource1 = new Resource(),
  resource2 = new Resource();

// OU

using resource1 = new Resource();
using resource2 = new Resource();
```

Dans les deux cas, lorsque la portée se termine, `resource2` est libérée avant `resource1`. En effet, `resource2` peut dépendre de `resource1`, il faut donc la libérer en premier pour s'assurer que `resource1` reste disponible lors de la libération de `resource2`.

### `using` optionnel

`using` permet à la variable d'avoir la valeur `null` ou `undefined`, la ressource peut donc être optionnelle. Par exemple, si vous vérifiez la disponibilité d'une ressource&nbsp;:

```js
function acquireResource() {
  // Imaginez ici une condition pertinente du monde réel,
  // par exemple s'il y a suffisamment d'espace pour allouer cette ressource
  if (Math.random() < 0.5) {
    return null;
  }
  return new Resource();
}
```

Vous n'avez pas à faire ceci&nbsp;:

```js example-bad
const maybeResource = acquireResource();

if (maybeResource) {
  using resource = maybeResource;
  console.log(resource.getValue());
} else {
  console.log(undefined);
}
```

Et pouvez plutôt faire ceci&nbsp;:

```js example-good
using resource = acquireResource();
console.log(resource?.getValue());
```

### Déclaration `using` sans utiliser la variable

Vous pouvez obtenir la libération automatique des ressources avec `using`, sans même utiliser la variable. Cela est très utile pour établir un contexte dans un bloc, par exemple pour créer un verrou&nbsp;:

```js
{
  using _ = new Lock();
  // Effectuer des opérations concurrentes ici
  // Verrou libéré ici
}
```

Notez que `_` est un identifiant normal, mais c'est une convention de l'utiliser comme variable «&nbsp;jetable&nbsp;». Pour créer plusieurs variables inutilisées, vous devez utiliser des noms distincts, par exemple en préfixant le nom par `_`.

### Initialisation et zones mortes temporelles

Les variables `using` sont soumises à la même restriction de [zone morte temporelle](/fr/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz) que les variables `let` et `const`. Cela signifie que vous ne pouvez pas accéder à la variable avant son initialisation — la durée de vie valide de la ressource s'étend strictement de son initialisation à la fin de sa portée. Cela permet une gestion des ressources de type RAII.

```js
let useResource;
{
  useResource = () => resource.getValue();
  useResource(); // Erreur : Impossible d'accéder à 'resource' avant son initialisation
  using resource = new Resource();
  useResource(); // Valide
}
useResource(); // Erreur : Ressource libérée
```

### Gestion des erreurs

La déclaration `using` est particulièrement utile pour gérer la libération des ressources en présence d'erreurs. Si vous n'êtes pas prudent, certaines ressources peuvent fuir parce qu'une erreur empêche l'exécution du code suivant.

```js
function handleResource(resource) {
  if (resource.getValue() > 0.5) {
    throw new Error("Valeur de ressource trop élevée");
  }
}

try {
  using resource = new Resource();
  handleResource(resource);
} catch (e) {
  console.error(e);
}
```

Ceci attrapera correctement l'erreur levée par `handleResource` et l'enregistrera, que `handleResource` lève une erreur ou non, la ressource est libérée avant la sortie du bloc `try`.

Ici, si vous n'utilisez pas `using`, vous pourriez faire quelque chose comme&nbsp;:

```js example-bad
try {
  const resource = new Resource();
  handleResource(resource);
  resource[Symbol.dispose]();
} catch (e) {
  console.error(e);
}
```

Mais si `handleResource()` lève une erreur, le contrôle n'atteint jamais `resource[Symbol.dispose]()`, et la ressource fuit. De plus, si vous avez deux ressources, les erreurs levées lors des premières libérations peuvent empêcher l'exécution des libérations suivantes, entraînant d'autres fuites.

Considérez un cas plus compliqué où la fonction de libération elle-même lance une erreur&nbsp;:

```js
class CantDisposeMe {
  #name;
  constructor(name) {
    this.#name = name;
  }
  [Symbol.dispose]() {
    throw new Error(`Impossible de libérer ${this.#name}`);
  }
}

let error;

try {
  using resource1 = new CantDisposeMe("resource1");
  using resource2 = new CantDisposeMe("resource2");
  throw new Error("Erreur dans le bloc principal");
} catch (e) {
  error = e;
}
```

Vous pouvez inspecter l'erreur levée dans la console de votre navigateur. Elle a la structure suivante&nbsp;:

```plain
SuppressedError: An error was suppressed during disposal
  suppressed: SuppressedError: An error was suppressed during disposal
    suppressed: Error: Can't dispose resource1
    error: Error: Error in main block
  error: Error: Can't dispose resource2
```

Comme vous pouvez le voir, `error` contient toutes les erreurs qui ont été levées lors de la libération, sous la forme d'un {{JSxRef("SuppressedError")}}. Chaque erreur supplémentaire est ajoutée comme propriété `error`, et l'erreur originale est ajoutée comme propriété `suppressed`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- La déclaration {{JSxRef("Statements/const", "const")}}
- La déclaration {{JSxRef("Statements/let", "let")}}
- La déclaration {{JSxRef("Statements/await_using", "await using")}}
- Le symbole {{JSxRef("Symbol.dispose")}}
- L'objet {{JSxRef("DisposableStack")}}
