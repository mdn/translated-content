---
title: Utiliser l'API JavaScript de WebAssembly
slug: WebAssembly/Using_the_JavaScript_API
translation_of: WebAssembly/Using_the_JavaScript_API
---
{{WebAssemblySidebar}}

Si vous avez déjà [compilé un module depuis un autre langage en utilisant des outils comme Emscripten](/fr/docs/WebAssembly/C_to_wasm), ou [chargé et éxecuté vous-même le code](/fr/docs/WebAssembly/Loading_and_running), l'étape suivante est d'en apprendre plus à propos des autres fonctionnalités de l'API JavaScript WebAssembly. Cet article vous enseigne ce que vous aurez besoin de connaître.

> **Note :** Si vous n'êtes pas familier avec les concepts de base mentionnés dans cet article et vous avez besoin de plus d'explication, lisez d'abord [WebAssembly concepts](/fr/docs/WebAssembly/Concepts).

## Quelques exemples simples

Parcourons quelques exemples illustrant l'utilisation de l'API Webassembly JavaScript, et en particulier la manière dont elle peut être utilisé pour charger un module wasm au sein d'une page web.

> **Note :** Vous pouvez trouver des exemples de code dans notre repo GitHub  [webassembly-examples](https://github.com/mdn/webassembly-examples).

### Préparation

1. Premièrement nous avons besoin d'un module wasm ! Récupérez notre fichier [simple.wasm](https://github.com/mdn/webassembly-examples/raw/master/js-api-examples/simple.wasm) et sauvegardez une copie dans un nouveau document sur votre machine locale.
2. Ensuite, assurez-vous d'utiliser un navigateur supportant WebAssembly. Firefox 52+ et Chrome 57+ supportent WebAssembly par défaut.
3. Pour poursuivre, créez un simple fichier nommé `index.html` dans le même dossier que votre fichier wasm (vous pouvez utiliser notre [template simple](https://github.com/mdn/webassembly-examples/blob/master/template/template.html) si vous n'en avez pas de facilement accessible).
4. Maintenant, pour nous aider à comprendre ce qui se passe ici, regardons la représentation textuelle de notre module wasm  (que nous rencontrons aussi dans [Converting WebAssembly format to wasm](/fr/docs/WebAssembly/Text_format_to_wasm#A_first_look_at_the_text_format)):

    ```
    (module
      (func $i (import "imports" "imported_func") (param i32))
      (func (export "exported_func")
        i32.const 42
        call $i))
    ```

5. À la deuxième ligne, vous pouvez constater l'import d'un namespace à deux niveaux  — la fonction interne `$i` est importée depuis  `imports.imported_func`. Dans notre JavaScript, notre namespace doit reprendre ce format à deux niveaux lors de l'écriture de l'objet à importer dans le module wasm. Pour ce faire, créez un élément `<script></script>` dans votre fichier HTML, puis ajoutez le code suivant:

    ```js
    var importObject = {
      imports: {
          imported_func: function(arg) {
            console.log(arg);
          }
        }
      };
    ```

### Streaming de notre module webassembly

Il est dorénavant possible dans Firefox 58 de compiler et instancier les modules Webassembly directement à partir des ressources initiales. Il est nécessaire dans ce cas d'utiliser les méthodes {{jsxref("WebAssembly.compileStreaming()")}} et {{jsxref("WebAssembly.instantiateStreaming()")}}. Ces méthodes en streaming sont plus facile d'utilisation que leurs contreparties synchrones, car elles traduisent directement le bytecode en instances de type `Module`/`Instance`, sans nécessiter la manipulation d'une réponse intermédiaire {{domxref("Response")}} en un {{domxref("ArrayBuffer")}}.

Cet exemple (voir notre démo sur GitHub [instantiate-streaming.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/instantiate-streaming.html), et également [view it live](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)) montre comment utiliser `instantiateStreaming()` pour récupérer un module wasm, le compiler, l'instancier afin d'avoir accès aux fonctions exportées qu'il contient et d'y importer des fonctions JavaScript, le tout en une seule et même étape.

Ajoutez le code suivant à votre script, en dessous du premier bloc:

```js
WebAssembly.instantiateStreaming(fetch('simple.wasm'), importObject)
.then(obj => obj.instance.exports.exported_func());
```

Le résultat net de l'ensemble du code est que l'appel à `exported_func`, notre fonction exportée Webassembly, entraîne à son tour l'appel à `imported_func` notre fonction importée JavaScript, qui logue la valeur 42 fournie à l'instance WebAssembly dans la console. Si vous sauvegardez l'exemple et chargez le code dans un navigateur qui supporte WebAssembly, vous pourrez le voir en action.

**Note**: Cet exemple interminable et tarabiscoté semble aboutir à un résultat de faible importance, il permet néanmoins d'illustrer les possibilités offertes par l'utilisation conjointe d'un code WebAssembly et d'un code JavaScript dans une application web. Comme il est précisé ailleurs, l'objectif de WebAssembly n'est pas de remplacer JavaScript; à vrai dire les deux sont conçus pour fonctionner de concert, chacun tirant parti des forces de l'autre.

### Chargement de notre module wasm sans streaming

Si vous ne pouvez pas ou ne souhaitez pas utiliser les méthodes en streaming décrites ci-dessus, vous pouvez utiliser à la place les méthodes synchrones {{jsxref("WebAssembly.compile")}} / {{jsxref("WebAssembly.instantiate")}}.

Ces méthodes n'accèdent pas directement au bytecode, elles requièrent une étape supplémentaire afin de transformer la réponse en un {{domxref("ArrayBuffer")}} , et cela avant les étapes de compilation/instanciation du module wasm.

Le code équivalent à l'exemple précédent prend la forme suivante:

```js
fetch('simple.wasm').then(response =>
  response.arrayBuffer()
).then(bytes =>
  WebAssembly.instantiate(bytes, importObject)
).then(results => {
  results.instance.exports.exported_func();
});
```

### Visualiser wasm dans l'outil de développement

In Firefox 54+, the Developer Tool Debugger Panel has functionality to expose the text representation of any wasm code included in a web page. To view it, you can go to the Debugger Panel and click on the “wasm://” entry.

![](wasm-debug.png)

Starting soon in Firefox, in addition to viewing WebAssembly as text, developers will be able to debug (place breakpoints, inspect the callstack, single-step, etc.) WebAssembly using the text format. See [WebAssembly debugging with Firefox DevTools](https://www.youtube.com/watch?v=R1WtBkMeGds) for a video preview.

## Memory

Dans le modèle mémoire bas niveau de WebAssembly, la mémoire est représentée comme une suite continue de bytes non typés appelée [Linear Memory](http://webassembly.org/docs/semantics/#linear-memory). Cette mémoire linéaire est accessible en écriture et en lecture par des instructions [load et store](http://webassembly.org/docs/semantics/#linear-memory-accesses) à l'intérieur du module. Dans ce modèle de mémoire, les instructions load et store peuvent accéder à n'importe quel byte de la mémoire linéaire, ce qui est nécessaire à une réprésentation fidèle de concepts C/C++ comme les pointeurs.

Cependant contrairement à une implémentation native d'un programe C/C++ dans laquelle l'espace de mémoire disponible recouvre celle de l'ensemble du processus, la mémoire accessible par une instance particulière de WebAssembly est un espace mémoire spécifique  — potentiellement très réduit — contenu dans une objet mémoire WebAssembly. Ceci permet à une application web unique d'utiliser des librairies indépendantes — Chacune d'entre elles pouvant utiliser en interne WebAssembly— avec des espaces mémoires séparés qui sont complètement isolés les uns des autres.

Dans JavaScript, une instance Memory peut être pensée comme un ArrayBuffer redimensionnable. De la même manière que pour les ArrayBuffers, une application web peut créer de nombreux objets Memory indépendants. Vous pouvez en créer un en utilisant le constructeur {{jsxref("WebAssembly.Memory()")}}, qui prend comme arguments la taille initiale ainsi que la taille maximale de l'espace mémoire à créer.

Explorons ces concepts à travers un exemple rapide.

1. Créez une autre page HTML (copiez pour cela notre [simple template](https://github.com/mdn/webassembly-examples/blob/master/template/template.html)) et appelez la `memory.html`. Ajoutez un élement `<script></script>` à la page.
2. Maintenant ajoutez la ligne suivante en haut de votre script, afin de créer une instance mémoire:

    ```js
    var memory = new WebAssembly.Memory({initial:10, maximum:100});
    ```

    L'unité pour `initial` et `maximum` correspond à une page WebAssembly — soit une taille fixe de 64 KB. Cela signifie que l'instance mémoire ci-dessus à une taille initiale de 64 KB, et une taille maximum de 6.4 MB.

    WebAssembly memory expose ses bytes par l'intermédiaire d'un tampon getter/setter qui retourne un ArrayBuffer. Par exemple, pour écrire 42 directement dans l'espace du premier mot de la mémoire linéaire, vous pouvez faire cela:

    ```js
    new Uint32Array(memory.buffer)[0] = 42;
    ```

    Vous pouvez retourner cette même valeur en utilisant:

    ```js
    new Uint32Array(memory.buffer)[0]
    ```

3. À vous d'essayer — Enregistrez ce que vous avez rédigé jusqu'à maintenant, chargez-le dans votre navigateur, puis essayez d'entrer les deux lignes ci-dessus dans votre javascript console.

### Redimensionner la mémoire

Une instance de mémoire peut être agrandie par appel à la méthode {{jsxref("Memory.prototype.grow()")}}, qui prend comme argument la taille de mémoire à ajouter (en unité de page WebAssembly).

```js
memory.grow(1);
```

Si une valeur maximum a été fournie à la création de l'instance mémoire, les tentatives d'augmenter l'espace mémoire au delà de cette valeur maximum aboutiront à une exception de type  {{jsxref("WebAssembly.RangeError")}}. Le moteur JavaScript utilise cette valeur limite supérieure pour réserver d'avance un espace mémoire suffisant, ce qui permet de rendre les redimensionnements mémoires plus efficaces.

Note: En raison du caractère immuable de la longueur de byte d'un {{domxref("ArrayBuffer")}}, après une opération {{jsxref("Memory.prototype.grow()")}} réussie, le buffer getter retourne un nouvel objet ArrayBuffer (avec la nouvelle longeur de byte du buffer) et tous les objets ArrayBuffer précédents se retrouve en état "dissocié", ou déconnectés de l'espace mémoire dont ils étaient issus initialement.

Tout comme les fonctions, les espaces mémoires linéaires peuvent être définis à l'intérieur du module, ou bien importés. De manière similaire aux fonctions, un module peut également exporter sa mémoire. Cela signifie que JavaScript peut accéder à la mémoire d'une instance WebAssembly soit en créant un nouveau `WebAssembly.Memory` afin de le passer en import à cette instance, soit en recevant un export Memory (via [`Instance.prototype.exports`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Instance/exports)).

### Exemple avancé pour l'utilisation mémoire

Essayons de clarifier les affirmations ci-dessus à l'aide d'un exemple plus abouti —  à savoir un module WebAssembly qui importe une instance mémoire telle que définie plus tôt, et qui l'alimente d'un tableau d'entiers, pour en faire la somme totale. Vous pouvez trouver cela dans ce fichier [memory.wasm.](https://github.com/mdn/webassembly-examples/raw/master/js-api-examples/memory.wasm)

1. Faites une copie locale de `memory.wasm` dans le même dossier que précédement.

    **Note**: Vous pouvez trouver la représentation textuelle du module sur [memory.wat](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.wat).

2. Retournez à votre fichier `memory.html`, et récupérez, compilez, et instancier votre module wasm comme précédement — Ajoutez à la fin de votre script les lignes suivantes:

    ```js
    WebAssembly.instantiateStreaming(fetch('memory.wasm'), { js: { mem: memory } })
    .then(results => {
      // add code here
    });
    ```

3. Puisque ce module exporte sa mémoire, nous pouvons utiliser la fonction exportée `accumulate()` à partir du champ instance (de type Instance) de la valeur de retour results du module pour créer et alimenter l'instance mémoire du module (`mem`) avec un tableau. Ajoutez les lignes suivantes à votre code à l'emplacement indiqué dans le snippet précédent.

    ```js
    var i32 = new Uint32Array(memory.buffer);

    for (var i = 0; i < 10; i++) {
      i32[i] = i;
    }

    var sum = results.instance.exports.accumulate(0, 10);
    console.log(sum);
    ```

Note: vous pouvez remarquer que nous avons créé la vue {{domxref("Uint32Array")}} sur le champ buffer de l'objet Memory ([`Memory.prototype.buffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Memory/buffer)), et pas sur l'objet Memory lui même.

Les imports Memory fonctionnent de la même manière que les imports fonctions, à la différence prés que les objets Memory véhiculent des valeurs au lieu de fonctions javascripts. Les imports Memory sont utiles pour deux raisons:

- Ils permettent de récupérer et créer le contenu mémoire initial avant ou en parrallèle de la compilation du module.
- Ils permettent qu'un objet mémoire unique soit importé par des instances de modules multiples, ce qui est une fonctionnalité clef dans l'objectif d'une implémentation d'une connexion dynamique dans WebAssembly.

**Note**: Vous pouvez trouver une démo complete à [memory.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/memory.html) (à voir également [live](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)) .

## Tables

Une Table WebAssembly est un tableau de [références](<https://en.wikipedia.org/wiki/Reference_(computer_science)>) typées redimensionnable qui peut être accédé à la fois par du code JavaScript et par du code WebAssembly. Memory fournit un tableau de bytes bruts redimensionnable, mais il n'est pas prudent d'y stocker des références, car une référence est une valeur considérée comme sûre par le moteur JavaScript, valeur dont les bytes ne doivent être accessibles ni en lecture, ni en écriture par le contenu pour des raisons de sécurité, de portabilité, et de stabilité.

Les Tables possèdent un type, qui limite les types de références qui peuvent être contenues dans la table. Dans la version actuelle de WebAssembly, il n'existe qu'un seul type de références — functions — et de fait seul ce type de références est donc valide. Dans de prochaines versions, d'autres types de références seront ajoutés.

Les références de type fonction sont nécessaires afin de compiler des languages comme C/C++ qui permettent l'implémentation de pointeurs sur fonctions. Dans une implémentation native en C/C++, un pointeur sur fonction est représenté par une adresse brute associée au code de la fonction contenue dans l'espace d'adressage virtuel du processus. Pour les raisons de sécurités mentionnées plus haut, cette référence dans WebAssembly ne peut être stockée directement en mémoire linéaire. Les références de fonctions sont stockées dans une table et leurs index, qui sont des entiers, peuvent être placés en mémoire linéaire et véhiculés de manière sûre.

Lorsque l'appel à un pointeur sur fonction est nécessaire, le caller WebAssembly fournit l'index de la référence à appeler. La valeur de cet index est controlée par rapport au valeurs limites données à l'instantiation de la table (safety bounds checked), et cela avant que l'appel par référence à la fonction soit effectué. Autrement dit, les tables sont actuellement des primitives bas niveau utilisées pour compiler des fonctionnalités de language de programmation bas niveau, de manière sûre et portable.

Les Tables peuvent être modifiées via [`Table.prototype.set()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/set), which updates one of the values in a table, and [`Table.prototype.grow()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/grow), which increases the number of values that can be stored in a table.  This allows the indirectly-callable set of functions to change over time, which is necessary for [dynamic linking techniques](http://webassembly.org/docs/dynamic-linking/).  The mutations are immediately accessible via [`Table.prototype.get()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get) in JavaScript, and to wasm modules.

### Un exemple de table

Envisageons un exemple basique d'utilisation d'une table — un module WebAssembly qui crée et exporte une table contenant 2 éléments: l'élement 0 retourne 13 et l'élément 1 retourne 42. Vous retrouvez cela dans le fichier [table.wasm](https://github.com/mdn/webassembly-examples/raw/master/js-api-examples/table.wasm).

1. Faites une copie locale de `table.wasm` dans un nouveau dossier.

    **Note**: vous pouvez voir une réprésentation textuelle du module sur [table.wat](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.wat).

2. Créez une nouvelle copie du template [HTML](https://github.com/mdn/webassembly-examples/blob/master/template/template.html) dans le même dossier et nommez le `table.html`.
3. Comme précédement, récupérez, compilez, et instanciez le module wasm — ajoutez les lignes suivantes à l'intérieur d'un élement {{htmlelement("script")}} au bas du body html:

    ```js
    WebAssembly.instantiateStreaming(fetch('table.wasm'))
    .then(function(results) {
      // add code here
    });
    ```

4. Maintenant accédez aux données contenues dans la table — ajoutez les lignes suivantes dans votre code à la place indiquée dans le snippet précédent:

    ```js
    var tbl = results.instance.exports.tbl;
    console.log(tbl.get(0)());  // 13
    console.log(tbl.get(1)());  // 42
    ```

Ce code accède à chaque fonction référencée contenue dans la table, et l' instancie afin d'imprimer sa valeur de retour dans la console — à noter que chaque référence de fonction est obtenue à l'aide de la méthode [`Table.prototype.get()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WebAssembly/Table/get), suivie d'une paire suplémentaire de parenthèses pour finaliser l'invocation de la fonction.

**Note**: Vous pouvez retoruver la démo complète sur [table.html](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/table.html) (voir également [live](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)).

## Globals

WebAssembly fournit la capacité de créer des instances de variables globales, depuis JavaScript et importable/exportable à partir d'une ou plusieurs instances de {{jsxref("WebAssembly.Module")}}. C'est très utile, car cela rend possible la mise en place d'un lien dynamique entre de multiple modules WebAssembly.

Pour créer une instance globale WebAssembly à partir de JavaScript, vous pouvez utiliser le constructeur {{jsxref("WebAssembly.Global()")}}, de la manière suivante:

```js
const global = new WebAssembly.Global({value:'i32', mutable:true}, 0);
```

Vous pouvez remarquer que ce constructeur prend deux paramètres:

- Un objet qui comprend deux propriétés décrivant la variable globale:

  - `value`: correspond au type de donnée de la variable globale instanciée. Type de donnée qui peut être n'importe quel type compatible avec les modules WebAssembly modules — `i32`, `i64`, `f32`, ou `f64`.
  - `mutable`: un booléen definissant si la valeur est "mutable" ou non.

- Une valeur correspondant à la valeur prise par la variable. Cela peut être n'importe quelle valeur à condition qu'elle soit compatible avec le type de donnée spécifié.

Finalement comment tout cela fonctionne? Dans l'exemple suivant nous définissons une variable globale "mutable" de type `i32`, avec une valeur de 0.

La valeur de la variable globale est ensuite changée en `42` en utilisant la propriété `Global.value`, puis en `43` en utilisant cette fois la fonction exportée de l'instance du module global.wasm `incGlobal()` (cette fonction ajoute 1 à la valeur qui lui est donnée et retourne la nouvelle valeur).

```js
const output = document.getElementById('output');

function assertEq(msg, got, expected) {
    output.innerHTML += `Testing ${msg}: `;
    if (got !== expected)
        output.innerHTML += `FAIL!<br>Got: ${got}<br>Expected: ${expected}<br>`;
    else
        output.innerHTML += `SUCCESS! Got: ${got}<br>`;
}

assertEq("WebAssembly.Global exists", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({value:'i32', mutable:true}, 0);

WebAssembly.instantiateStreaming(fetch('global.wasm'), { js: { global } })
.then(({instance}) => {
    assertEq("getting initial value from wasm", instance.exports.getGlobal(), 0);
    global.value = 42;
    assertEq("getting JS-updated value from wasm", instance.exports.getGlobal(), 42);
    instance.exports.incGlobal();
    assertEq("getting wasm-updated value from JS", global.value, 43);
});
```

**Note**: Vous pouvez voir cet exemple en [live sur GitHub](https://mdn.github.io/webassembly-examples/js-api-examples/global.html); voir également le code [source](https://github.com/mdn/webassembly-examples/blob/master/js-api-examples/global.html).

## Multiplicité

Maintenant que nous avons présenté l'utilisation des principaux composants de WebAssembly, il est temps de dire quelques mots sur le concept de multiplicité. Ce dernier donne à WebAssembly un certains nombre d'avantages en terme d'efficience architecturale:

- Un seul et unique module peut avoir N instances, de la même manière qu'une fonction littérale peut fournir N valeurs de closure.
- Une seule et unique instance de module peut utiliser 0-1 instance de mémoire, qui elles-mêmes fournissent "l'espace d'adressage" de l'instance. Les versions futures de WebAssembly pourraient autoriser 0-N instances de mémoire par module instancié (voir [Multiple Tables and Memories](http://webassembly.org/docs/future-features/#multiple-tables-and-memories)).
- Une seule et unique instance de module peut utiliser 0-1 instance de tables — cela constitue "l'espace d'adressage de fonction" de l'instance, utilisé pour des pointeurs de fonction de type C. Des versions futures de WebAssembly pourraient autoriser 0–N instance de table par module instancié.
- Une instance mémoire ou table peut être utilisée par 0-N instances de module — ces instances partagent toutes le même espace d'adressage, rendant possible l'implémentation d'un lien dynamique.

Vous pouvez voir la mise en application du concept de multiplicité dans notre article Understanding text format — voir en particulier la section [Mutating tables and dynamic linking](/fr/docs/WebAssembly/Understanding_the_text_format#Mutating_tables_and_dynamic_linking).

## Résumé

Cet article a couvert les bases de l'utilisation de l'API WebAssembly JavaScript nécessaires à l'inclusion d'un module WebAssembly dans un contexte JavaScript, afin d'utiliser les fonctions du module dans ce contexte,  et de se familiairiser avec la manipulation de la mémoire et des tables WebAssembly. Nous avons terminé en évoquant le concept de multiplicité.

## A voir également

- [webassembly.org](http://webassembly.org/)
- [WebAssembly concepts](/fr/docs/WebAssembly/Concepts)
- [WebAssembly on Mozilla Research](https://research.mozilla.org/webassembly/)
