---
title: import.meta.resolve()
slug: Web/JavaScript/Reference/Operators/import.meta/resolve
l10n:
  sourceCommit: c1ccc5843f5a7702f5cc69d4bf37db0aadc808ac
---

{{JSSidebar("Operators")}}

**`import.meta.resolve()`** est une fonction native, définie sur l'objet [`import.meta`](/fr/docs/Web/JavaScript/Reference/Operators/import.meta) d'un module JavaScript qui résout un spécificateur de module en une URL, en utilisant l'URL du module courant comme base.

## Syntaxe

```js-nolint
import.meta.resolve(nomModule)
```

### Paramètres

- `nomModule`
  - : Une chaîne de caractères indiquant un module qui peut être importé. Il peut s'agir d'un chemin relatif (comme `"./lib/helper.js"`), d'un nom seul (par exemple `"mon-module"`), ou d'une URL absolue (telle que `"https://example.com/lib/helper.js"`).

### Valeur de retour

Cette fonction renvoie une chaîne de caractères correspondant au chemin qui serait importé si l'argument avait été passé à [`import()`](/fr/docs/Web/JavaScript/Reference/Operators/import).

## Description

`import.meta.resolve()` permet à un script d'accéder à l'algorithme de _résolution des spécificateurs de modules_ pour un nom donné&nbsp;:

```js
// Script situé à https://example.com/main.js

const helperPath = import.meta.resolve("./lib/helper.js");
console.log(helperPath); // "https://example.com/lib/helper.js"
```

On notera que `import.meta.resolve()` effectue uniquement la résolution, elle ne tente pas de chargement ou d'import du chemin obtenu ([l'explication de la spécification (en anglais)](https://gist.github.com/domenic/f2a0a9cb62d499bcc4d12aebd1c255ab#sync-vs-async) décrit le raisonnement pour ce comportement). Aussi, la valeur de retour sera la même _qu'un fichier existe ou non à l'emplacement indiqué par le chemin obtenu et quel que soit le contenu de cet éventuel fichier (du code valide ou non pour un module)_.

Cette fonction est différente [de l'opérateur d'import dynamique](/fr/docs/Web/JavaScript/Reference/Operators/import). Bien qu'ils acceptent tous les deux un spécificateur de module comme premier argument, `import.meta.resolve()` renvoie uniquement le chemin qui _serait importé_ sans tenter d'accéder à ce chemin. Autrement dit, les deux approches suivantes seront équivalentes&nbsp;:

```js
// Première approche
console.log(await import("./lib/helper.js"));

// Deuxième approche
const chemin = import.meta.resolve("./lib/helper.js");
console.log(await import(chemin));
```

Toutefois, si `"./lib/helper.js"` ne peut pas être importé correctement, la seconde approche déclenchera une erreur au moment de tenter l'import sur la deuxième ligne.

### Noms de modules seuls

Il est possible de passer un nom de module seul (<i lang="en">bare module name</i>) à cette fonction, tant qu'une résolution est bien définie pour ce nom. On pourra par exemple utiliser une [carte d'import](/fr/docs/Web/JavaScript/Guide/Modules#import_de_modules_avec_des_cartes_d_import) dans un navigateur&nbsp;:

```html
<!-- index.html -->
<script type="importmap">
  {
    "imports": {
      "mon-module": "./modules/mon-module/index.js"
    }
  }
</script>

<script type="module">
  const cheminModule = import.meta.resolve("mon-module");
  console.log(cheminModule);
</script>
```

Là encore, ce fragment de code ne déclenchera pas d'import pour `cheminModule` (la carte ne déclenche pas d'import non plus). L'URL fournie par la résolution sera affichée dans la console, que `./modules/mon-module/index.js` existe ou non.

### Comparaison avec `new URL()`

Le constructeur [`URL()`](/fr/docs/Web/API/URL/URL) accepte un deuxième argument qui fournit une URL de base. Lorsque le premier argument est un chemin relatif et que l'URL de base correspond à [`import.meta.url`](/fr/docs/Web/JavaScript/Reference/Operators/import.meta#valeur), l'effet sera similaire à `import.meta.resolve()`.

```js
const helperPath = new URL("./lib/helper.js", import.meta.url).href;
console.log(helperPath);
```

Cela peut aider comme remplacement lorsqu'il s'agit de cibler les anciens navigateurs. Toutefois, on notera quelques différences&nbsp;:

- `import.meta.resolve()` renvoie une chaîne de caractères tandis que `new URL()` renvoie un objet `URL`. Il est possible d'utiliser [`href`](/fr/docs/Web/API/URL/href) ou [`toString()`](/fr/docs/Web/API/URL/toString) sur l'objet `URL` pour passer à une chaîne de caractères, mais le résultat pourra être différent selon l'environnement JavaScript ou si on utilise des outils comme des empaqueteurs de code pour de l'analyse statique.
- `import.meta.resolve()` prendra en compte les configurations de résolution supplémentaires comme la résolution de noms seuls à l'aide de cartes d'import (voir ci-avant). `new URL()` ne prendra pas en compte les cartes d'import et considèrera les noms seuls comme des chemins relatifs (par exemple `new URL("mon-module", import.meta.url)` sera équivalent à `new URL("./mon-module", import.meta.url)`).

Certains outils reconnaîtront `new URL("./lib/helper.js", import.meta.url).href` comme une dépendance à `"./lib/helper.js"` (semblable à un import) et prendront cela en compte pour l'empaquetage, la réécriture des imports pour les fichiers déplacés, les fonctionnalités d'inspection des sources, etc. Toutefois `import.meta.resolve()` est moins ambigu et conçu spécifiquement pour indiquer une résolution de chemin de module. Aussi, mieux vaudra utiliser `import.meta.resolve(nomModule)` plutôt que `new URL(nomModule, import.meta.url)` pour ces cas d'usage.

### Ne fait pas partie d'ECMAScript

`import.meta.resolve()` n'est pas spécifiée ou documentée au sein de [la spécification ECMAScript](/fr/docs/Web/JavaScript/JavaScript_technologies_overview#javascript_le_langage_ecmascript) pour les modules JavaScript. La spécification définit [l'objet `import.meta`](https://tc39.es/ecma262/#prod-ImportMeta) et [délègue la définition de ses propriétés aux environnements hôtes](https://tc39.es/ecma262/#sec-hostgetimportmetaproperties). Le standard WHATWG HTML reprend donc là où s'arrête le standard ECMAScript et [définit `import.meta.resolve()`](https://html.spec.whatwg.org/multipage/webappapis.html#hostgetimportmetaproperties) avec [la résolution de spécificateur de module](https://html.spec.whatwg.org/#resolve-a-module-specifier).

Cela signifie que `import.meta.resolve()` ne fait pas nécessairement partie de toutes les implémentations conformes de JavaScript. Toutefois, `import.meta.resolve()` peut également faire partie d'environnements qui ne sont pas des navigateurs&nbsp;:

- Deno implémente [une compatibilité avec le comportement des navigateurs](https://deno.land/manual/runtime/import_meta_api).
- Node.js expose une implémentation disponible avec l'option `--experimental-import-meta-resolve` et qui renvoie une promesse (`Promise`) plutôt qu'une chaîne de caractères. Cela pourra éventuellement changer pour correspondre au comportement des navigateurs.

## Exemples

### Résoudre un chemin pour le passer au constructeur `Worker()`

`import.meta.resolve()` s'avère particulièrement utile pour les API qui prennent comme argument un chemin d'un fichier de script, comme le constructeur [`Worker()`](/fr/docs/Web/API/Worker/Worker)&nbsp;:

```js
// main.js
const workerPath = import.meta.resolve("./worker.js");
const worker = new Worker(workerPath, { type: "module" });
worker.addEventListener("message", console.log);
```

```js
// worker.js
self.postMessage("coucou !");
```

Cette fonction peut aussi être utile pour le calcul des chemins d'autres <i lang="en">workers</i> (comme [les <i lang="en">service workers</i>](/fr/docs/Web/API/ServiceWorker) et [les <i lang="en">workers</i> partagés](/fr/docs/Web/API/SharedWorker)). Toutefois, si vous utilisez un chemin relatif pour calculer l'URL d'un <i lang="en">service worker</i>, il faudra garder à l'esprit que le répertoire du chemin résolu détermine sa [portée d'enregistrement](/fr/docs/Web/API/ServiceWorkerRegistration/scope) par défaut (une portée différente pouvant être définie [lors de l'enregistrement](/fr/docs/Web/API/ServiceWorkerContainer/register)).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [L'instruction `import`](/fr/docs/Web/JavaScript/Reference/Statements/import)
- [L'opérateur `import()` pour les imports dynamiques](/fr/docs/Web/JavaScript/Reference/Operators/import)
- [`import.meta`](/fr/docs/Web/JavaScript/Reference/Operators/import.meta)
