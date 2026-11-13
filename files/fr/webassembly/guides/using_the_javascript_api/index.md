---
title: Utiliser l'API JavaScript de WebAssembly
slug: WebAssembly/Guides/Using_the_JavaScript_API
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

Si vous avez déjà [compilé un module depuis un autre langage en utilisant des outils comme Emscripten](/fr/docs/WebAssembly/Guides/C_to_Wasm), ou [chargé et éxecuté vous-même le code](/fr/docs/WebAssembly/Guides/Loading_and_running), l'étape suivante est d'en apprendre plus à propos des autres fonctionnalités de l'API JavaScript WebAssembly. Cet article vous enseigne ce que vous aurez besoin de connaître.

> [!NOTE]
> Si vous n'êtes pas familier avec les concepts de base mentionnés dans cet article et vous avez besoin de plus d'explication, lisez d'abord [les concepts de WebAssembly](/fr/docs/WebAssembly/Guides/Concepts).

## Quelques exemples simples

Parcourons quelques exemples illustrant l'utilisation de l'API Webassembly JavaScript, et en particulier la manière dont elle peut être utilisé pour charger un module wasm au sein d'une page web.

> [!NOTE]
> Vous pouvez trouver des exemples de code dans notre repo GitHub [webassembly-examples <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples).

### Préparation

1. Premièrement nous avons besoin d'un module wasm&nbsp;! Récupérez notre fichier [simple.wasm <sup>(angl.)</sup>](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/simple.wasm) et sauvegardez une copie dans un nouveau document sur votre machine locale.
2. Ensuite, créons un fichier HTML simple appelé `index.html` dans le même dossier que votre fichier Wasm (vous pouvez utiliser notre [modèle simple <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) si vous n'en avez pas déjà un sous la main).
3. Maintenant, pour nous aider à comprendre ce qui se passe ici, regardons la représentation textuelle de notre module Wasm (que l'on retrouve aussi dans [Conversion du format WebAssembly en Wasm](/fr/docs/WebAssembly/Guides/Text_format_to_Wasm#un_premier_apercu_du_format_texte))&nbsp;:

   ```wat
   (module
     (func $i (import "my_namespace" "imported_func") (param i32))
     (func (export "exported_func")
       i32.const 42
       call $i))
   ```

4. À la deuxième ligne, vous pouvez constater l'import d'un namespace à deux niveaux — la fonction interne `$i` est importée depuis `my_namespace.imported_func`. Dans notre JavaScript, notre namespace doit reprendre ce format à deux niveaux lors de l'écriture de l'objet à importer dans le module wasm. Pour ce faire, créez un élément `<script></script>` dans votre fichier HTML, puis ajoutez le code suivant&nbsp;:

   ```js
   const importObject = {
     my_namespace: { imported_func: (arg) => console.log(arg) },
   };
   ```

### Diffusion de notre module webassembly

Il est dorénavant possible dans Firefox 58 de compiler et instancier les modules Webassembly directement à partir des ressources initiales. Il est nécessaire dans ce cas d'utiliser les méthodes [`WebAssembly.compileStreaming()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/compileStreaming_static) et [`WebAssembly.instantiateStreaming()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiateStreaming_static). Ces méthodes en streaming sont plus facile d'utilisation que leurs contreparties synchrones, car elles traduisent directement le bytecode en instances de type `Module`/`Instance`, sans nécessiter la manipulation d'une réponse intermédiaire {{DOMxRef("Response")}} en un {{JSxRef("ArrayBuffer")}}.

Cet exemple (voir notre démo sur GitHub [instantiate-streaming.html <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/instantiate-streaming.html), et également [en direct <sup>(angl.)</sup>](https://mdn.github.io/webassembly-examples/js-api-examples/instantiate-streaming.html)) montre comment utiliser `instantiateStreaming()` pour récupérer un module wasm, le compiler, l'instancier afin d'avoir accès aux fonctions exportées qu'il contient et d'y importer des fonctions JavaScript, le tout en une seule et même étape.

Ajoutez le code suivant à votre script, en dessous du premier bloc&nbsp;:

```js
WebAssembly.instantiateStreaming(fetch("simple.wasm"), importObject).then(
  (obj) => obj.instance.exports.exported_func(),
);
```

Le résultat net de l'ensemble du code est que l'appel à `exported_func`, notre fonction exportée Webassembly, entraîne à son tour l'appel à `imported_func` notre fonction importée JavaScript, qui logue la valeur 42 fournie à l'instance WebAssembly dans la console. Si vous sauvegardez l'exemple et chargez le code dans un navigateur qui supporte WebAssembly, vous pourrez le voir en action.

> [!NOTE]
> Cet exemple interminable et tarabiscoté semble aboutir à un résultat de faible importance, il permet néanmoins d'illustrer les possibilités offertes par l'utilisation conjointe d'un code WebAssembly et d'un code JavaScript dans une application web. Comme il est précisé ailleurs, l'objectif de WebAssembly n'est pas de remplacer JavaScript; à vrai dire les deux sont conçus pour fonctionner de concert, chacun tirant parti des forces de l'autre.

### Chargement de notre module wasm sans diffusion

Si vous ne pouvez pas ou ne souhaitez pas utiliser les méthodes de diffusion décrites ci-dessus, vous pouvez utiliser à la place les méthodes non diffusées [`WebAssembly.compile()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/compile_static) / [`WebAssembly.instantiate()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/instantiate_static).

Ces méthodes n'accèdent pas directement au bytecode, elles nécessitent donc une étape supplémentaire pour transformer la réponse en un {{JSxRef("ArrayBuffer")}} avant de compiler/instancier le module Wasm.

Le code équivalent ressemblerait à ceci&nbsp;:

```js
fetch("simple.wasm")
  .then((response) => response.arrayBuffer())
  .then((bytes) => WebAssembly.instantiate(bytes, importObject))
  .then((results) => {
    results.instance.exports.exported_func();
  });
```

### Visualiser wasm dans l'outil de développement

À partir de Firefox 54+, le panneau Débogueur des outils de développement permet d'afficher la représentation textuelle de tout code Wasm inclus dans une page web. Pour la visualiser, rendez-vous dans le panneau Débogueur et cliquez sur l'entrée «&nbsp;wasm://&nbsp;».

![Panneau du débogueur des outils de développement mettant en évidence un module.](wasm-debug.png)

En plus de visualiser WebAssembly sous forme de texte, les développeur·euse·s peuvent déboguer (poser des points d'arrêt, inspecter la pile d'appels, exécuter pas à pas, etc.) WebAssembly en utilisant le format texte.

## Mémoire

Dans le modèle mémoire bas niveau de WebAssembly, la mémoire est représentée comme une plage contiguë d'octets non typés appelée [mémoire linéair <sup>(angl.)</sup>e](https://webassembly.github.io/spec/core/exec/index.html) qui est lue et écrite par des [instructions de chargement et de stockage <sup>(angl.)</sup>](https://webassembly.github.io/spec/core/exec/instructions.html#memory-instructions) à l'intérieur du module. Dans ce modèle de mémoire, toute instruction de chargement ou de stockage peut accéder à n'importe quel octet de toute la mémoire linéaire, ce qui est nécessaire pour représenter fidèlement des concepts C/C++ comme les pointeurs.

Contrairement à un programme C/C++ natif, cependant, où la plage de mémoire disponible couvre l'ensemble du processus, la mémoire accessible par une instance particulière de WebAssembly est limitée à une plage spécifique — potentiellement très réduite — contenue dans un objet Memory WebAssembly. Cela permet à une application web unique d'utiliser plusieurs bibliothèques indépendantes — chacune utilisant WebAssembly en interne — avec des mémoires séparées totalement isolées les unes des autres. De plus, les implémentations récentes peuvent aussi créer des [mémoires partagées](/fr/docs/WebAssembly/Guides/Understanding_the_text_format#mémoires_partagées), qui peuvent être transférées entre les contextes Window et Worker à l'aide de {{DOMxRef("Window/postMessage", "postMessage()")}}, et utilisées à plusieurs endroits.

En JavaScript, une instance Memory peut être considérée comme un {{JSxRef("ArrayBuffer")}} redimensionnable (ou [`SharedArrayBuffer`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SharedArrayBuffer), dans le cas des mémoires partagées) et, tout comme pour les `ArrayBuffer`, une application web peut créer de nombreux objets Memory indépendants. Vous pouvez en créer un à l'aide du constructeur [`WebAssembly.Memory()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory), qui prend comme arguments une taille initiale et (optionnellement) une taille maximale et une propriété `shared` qui indique s'il s'agit d'une mémoire partagée ou non.

Commençons à explorer cela à l'aide d'un exemple rapide.

1. Créez une autre page HTML (copiez pour cela notre [modèle simple <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/template/template.html)) et appelez la `memory.html`. Ajoutez un élement `<script></script>` à la page.
2. Maintenant ajoutez la ligne suivante en haut de votre script, afin de créer une instance mémoire&nbsp;:

   ```js
   const memory = new WebAssembly.Memory({ initial: 10, maximum: 100 });
   ```

   L'unité pour `initial` et `maximum` correspond à une page WebAssembly — soit une taille fixe de 64 KB. Cela signifie que l'instance mémoire ci-dessus à une taille initiale de 64 KB, et une taille maximum de 6.4 MB.

   WebAssembly memory expose ses bytes par l'intermédiaire d'un tampon getter/setter qui retourne un ArrayBuffer. Par exemple, pour écrire 42 directement dans l'espace du premier mot de la mémoire linéaire, vous pouvez faire cela&nbsp;:

   ```js
   const data = new DataView(memory.buffer);
   data.setUint32(0, 42, true);
   ```

   Vous pouvez retourner cette même valeur en utilisant&nbsp;:

   ```js
   data.getUint32(0, true);
   ```

3. À vous d'essayer — Enregistrez ce que vous avez rédigé jusqu'à maintenant, chargez-le dans votre navigateur, puis essayez d'entrer les deux lignes ci-dessus dans votre javascript console.

### Redimensionner la mémoire

Une instance de mémoire peut être agrandie par appel à la méthode [`Memory.prototype.grow()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow), qui prend comme argument la taille de mémoire à ajouter (en unité de page WebAssembly).

```js
memory.grow(1);
```

Si une valeur maximum a été fournie à la création de l'instance mémoire, les tentatives d'augmenter l'espace mémoire au delà de cette valeur maximum aboutiront à une exception de type {{JSxRef("RangeError")}}. Le moteur JavaScript utilise cette valeur limite supérieure pour réserver d'avance un espace mémoire suffisant, ce qui permet de rendre les redimensionnements mémoires plus efficaces.

Note: En raison du caractère immuable de la longueur de byte d'un {{JSxRef("ArrayBuffer")}}, après une opération [`Memory.prototype.grow()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory/grow) réussie, le buffer getter retourne un nouvel objet ArrayBuffer (avec la nouvelle longeur de byte du buffer) et tous les objets ArrayBuffer précédents se retrouve en état «&nbsp;dissocié&nbsp;», ou déconnectés de l'espace mémoire dont ils étaient issus initialement.

Tout comme les fonctions, les espaces mémoires linéaires peuvent être définis à l'intérieur du module, ou bien importés. De manière similaire aux fonctions, un module peut également exporter sa mémoire. Cela signifie que JavaScript peut accéder à la mémoire d'une instance WebAssembly soit en créant un nouveau `WebAssembly.Memory` afin de le passer en import à cette instance, soit en recevant un export Memory (via [`Instance.prototype.exports`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Instance/exports)).

### Exemple avancé pour l'utilisation mémoire

Essayons de clarifier les affirmations ci-dessus à l'aide d'un exemple plus abouti — à savoir un module WebAssembly qui importe une instance mémoire telle que définie plus tôt, et qui l'alimente d'un tableau d'entiers, pour en faire la somme totale. Vous pouvez trouver cela dans ce fichier [memory.wasm <sup>(angl.)</sup>](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/memory.wasm).

1. Faites une copie locale de `memory.wasm` dans le même dossier que précédement.

   > [!NOTE]
   > Vous pouvez trouver la représentation textuelle du module sur [memory.wat <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.wat).

2. Retournez à votre fichier `memory.html`, et récupérez, compilez, et instancier votre module wasm comme précédement — Ajoutez à la fin de votre script les lignes suivantes&nbsp;:

   ```js
   WebAssembly.instantiateStreaming(fetch("memory.wasm"), {
     js: { mem: memory },
   }).then((results) => {
     // et du code ici
   });
   ```

3. Puisque ce module exporte sa mémoire, nous pouvons utiliser la fonction exportée `accumulate()` à partir du champ instance (de type Instance) de la valeur de retour results du module pour créer et alimenter l'instance mémoire du module (`mem`) avec un tableau. Ajoutez les lignes suivantes à votre code à l'emplacement indiqué dans le snippet précédent.

   ```js
   const summands = new DataView(memory.buffer);
   for (let i = 0; i < 10; i++) {
     summands.setUint32(i * 4, i, true);
   }
   const sum = results.instance.exports.accumulate(0, 10);
   console.log(sum);
   ```

Notez que nous créons la vue {{JSxRef("DataView")}} sur le tampon de l'objet Memory ([`Memory.prototype.buffer`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Memory/buffer)), et non sur l'objet Memory lui-même.

Les imports Memory fonctionnent de la même manière que les imports fonctions, à la différence prés que les objets Memory véhiculent des valeurs au lieu de fonctions javascripts. Les imports Memory sont utiles pour deux raisons&nbsp;:

- Ils permettent de récupérer et créer le contenu mémoire initial avant ou en parrallèle de la compilation du module.
- Ils permettent qu'un objet mémoire unique soit importé par des instances de modules multiples, ce qui est une fonctionnalité clef dans l'objectif d'une implémentation d'une connexion dynamique dans WebAssembly.

> [!NOTE]
> Vous pouvez trouver une démo complete à [memory.html <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/memory.html) (à voir également [en direct <sup>(angl.)</sup>](https://mdn.github.io/webassembly-examples/js-api-examples/memory.html)).

## Tableaux

Une Table WebAssembly est un tableau de [références](<https://en.wikipedia.org/wiki/Reference_(computer_science)>) typées redimensionnable qui peut être accédé à la fois par du code JavaScript et par du code WebAssembly. `Memory` fournit un tableau d'octets bruts redimensionnable, mais il n'est pas prudent d'y stocker des références, car une référence est une valeur considérée comme sûre par le moteur JavaScript, valeur dont les bytes ne doivent être accessibles ni en lecture, ni en écriture par le contenu pour des raisons de sécurité, de portabilité, et de stabilité.

Les tableaux possèdent un type, qui limite les types de références qui peuvent être contenues dans le tableau. Dans la version actuelle de WebAssembly, il n'existe qu'un seul type de références — fonctions — et de fait seul ce type de références est donc valide. Dans de prochaines versions, d'autres types de références seront ajoutés.

Les références de type fonction sont nécessaires afin de compiler des languages comme C/C++ qui permettent l'implémentation de pointeurs sur fonctions. Dans une implémentation native en C/C++, un pointeur sur fonction est représenté par une adresse brute associée au code de la fonction contenue dans l'espace d'adressage virtuel du processus. Pour les raisons de sécurités mentionnées plus haut, cette référence dans WebAssembly ne peut être stockée directement en mémoire linéaire. Les références de fonctions sont stockées dans un tableau et leurs index, qui sont des entiers, peuvent être placés en mémoire linéaire et véhiculés de manière sûre.

Lorsque l'appel à un pointeur sur fonction est nécessaire, le caller WebAssembly fournit l'index de la référence à appeler. La valeur de cet index est controlée par rapport au valeurs limites données à l'instantiation du tableau (<i lang="en">safety bounds checked</i>), et cela avant que l'appel par référence à la fonction soit effectué. Autrement dit, les tableaux sont actuellement des primitives bas niveau utilisées pour compiler des fonctionnalités de language de programmation bas niveau, de manière sûre et portable.

Les tableaux peuvent être modifiés via [`Table.prototype.set()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/set), qui met à jour l'une des valeurs dans un tableau, et [`Table.prototype.grow()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/grow), qui augmente le nombre de valeurs pouvant être stockées dans un tableau. Cela permet à l'ensemble des fonctions appelables indirectement d'évoluer au fil du temps, ce qui est nécessaire pour les [techniques de liaison dynamique <sup>(angl.)</sup>](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md). Les mutations sont immédiatement accessibles via [`Table.prototype.get()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/get) en JavaScript, et dans les modules wasm.

### Un exemple de tableau

Envisageons un exemple basique d'utilisation d'un tableau — un module WebAssembly qui crée et exporte un tableau contenant 2 éléments: l'élement 0 retourne 13 et l'élément 1 retourne 42. Vous retrouvez cela dans le fichier [table.wasm <sup>(angl.)</sup>](https://raw.githubusercontent.com/mdn/webassembly-examples/master/js-api-examples/table.wasm).

1. Faites une copie locale de `table.wasm` dans un nouveau dossier.

   > [!NOTE]
   > Vous pouvez voir une réprésentation textuelle du module sur [table.wat <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.wat).

2. Créez une nouvelle copie du [modèle HTML <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/template/template.html) dans le même dossier et nommez le `table.html`.
3. Comme précédement, récupérez, compilez, et instanciez le module wasm — ajoutez les lignes suivantes à l'intérieur d'un élement {{HTMLElement("script")}} au bas du corps HTML&nbsp;:

   ```js
   WebAssembly.instantiateStreaming(fetch("table.wasm")).then((results) => {
     // et du code ici
   });
   ```

4. Maintenant accédez aux données contenues dans le tableau — ajoutez les lignes suivantes dans votre code à la place indiquée dans le snippet précédent&nbsp;:

   ```js
   const tbl = results.instance.exports.tbl;
   console.log(tbl.get(0)()); // 13
   console.log(tbl.get(1)()); // 42
   ```

Ce code accède à chaque fonction référencée contenue dans la table, et l' instancie afin d'imprimer sa valeur de retour dans la console — à noter que chaque référence de fonction est obtenue à l'aide de la méthode [`Table.prototype.get()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Table/get), suivie d'une paire suplémentaire de parenthèses pour finaliser l'invocation de la fonction.

> [!NOTE]
> Vous pouvez retoruver la démo complète sur [table.html <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/table.html) (voir également [en direct <sup>(angl.)</sup>](https://mdn.github.io/webassembly-examples/js-api-examples/table.html)).

## Globals

WebAssembly fournit la capacité de créer des instances de variables globales, depuis JavaScript et importable/exportable à partir d'une ou plusieurs instances de [`WebAssembly.Module`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Module). C'est très utile, car cela rend possible la mise en place d'un lien dynamique entre de multiple modules WebAssembly.

Pour créer une instance globale WebAssembly à partir de JavaScript, vous pouvez utiliser le constructeur [`WebAssembly.Global()`](/fr/docs/WebAssembly/Reference/JavaScript_interface/Global), de la manière suivante:

```js
const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);
```

Vous pouvez remarquer que ce constructeur prend deux paramètres&nbsp;:

- Un objet qui comprend deux propriétés décrivant la variable globale:
  - `value`: correspond au type de donnée de la variable globale instanciée. Type de donnée qui peut être n'importe quel type compatible avec les modules WebAssembly modules — `i32`, `i64`, `f32`, ou `f64`.
  - `mutable`: un booléen definissant si la valeur est "mutable" ou non.

- Une valeur correspondant à la valeur prise par la variable. Cela peut être n'importe quelle valeur à condition qu'elle soit compatible avec le type de donnée spécifié.

Finalement comment tout cela fonctionne? Dans l'exemple suivant nous définissons une variable globale "mutable" de type `i32`, avec une valeur de 0.

La valeur de la variable globale est ensuite changée en `42` en utilisant la propriété `Global.value`, puis en `43` en utilisant cette fois la fonction exportée de l'instance du module global.wasm `incGlobal()` (cette fonction ajoute 1 à la valeur qui lui est donnée et retourne la nouvelle valeur).

```js
const output = document.getElementById("output");

function assertEq(msg, got, expected) {
  output.innerHTML += `Teste ${msg} : `;
  if (got !== expected)
    output.innerHTML += `ECHEC !<br>A obtenu : ${got}<br>Attendu : ${expected}<br>`;
  else output.innerHTML += `SUCCÈS ! A obtenu : ${got}<br>`;
}

assertEq("WebAssembly.Global existe", typeof WebAssembly.Global, "function");

const global = new WebAssembly.Global({ value: "i32", mutable: true }, 0);

WebAssembly.instantiateStreaming(fetch("global.wasm"), { js: { global } }).then(
  ({ instance }) => {
    assertEq(
      "obtention de la valeur initiale depuis wasm",
      instance.exports.getGlobal(),
      0,
    );
    global.value = 42;
    assertEq(
      "obtention de la valeur mise à jour depuis JS dans wasm",
      instance.exports.getGlobal(),
      42,
    );
    instance.exports.incGlobal();
    assertEq(
      "obtention de la valeur mise à jour depuis wasm dans JS",
      global.value,
      43,
    );
  },
);
```

> [!NOTE]
> Vous pouvez voir cet exemple en [direct sur GitHub <sup>(angl.)</sup>](https://mdn.github.io/webassembly-examples/js-api-examples/global.html)&nbsp;; voir également le code [source <sup>(angl.)</sup>](https://github.com/mdn/webassembly-examples/blob/main/js-api-examples/global.html).

## Multiplicité

Maintenant que nous avons présenté l'utilisation des principaux composants de WebAssembly, il est temps d'aborder le concept de multiplicité. Celui-ci offre à WebAssembly de nombreux avantages en termes d'efficience architecturale&nbsp;:

- Un module peut avoir N instances, de la même manière qu'une fonction littérale peut produire N valeurs de fermeture.
- Une instance de module peut utiliser 0 à 1 instance de mémoire, qui fournit «&nbsp;l'espace d'adressage&nbsp;» de l'instance. Les futures versions de WebAssembly pourraient permettre 0 à N instances de mémoire par instance de module (voir [Multiples mémoires <sup>(angl.)</sup>](https://webassembly.org/features/)).
- Une instance de module peut utiliser 0 à 1 instance de table — cela constitue «&nbsp;l'espace d'adressage de fonction&nbsp;» de l'instance, utilisé pour les pointeurs de fonction C. Les futures versions de WebAssembly pourraient permettre 0 à N instances de table par instance de module.
- Une instance de mémoire ou de table peut être utilisée par 0 à N instances de module — ces instances partagent toutes le même espace d'adressage, ce qui permet la [liaison dynamique <sup>(angl.)</sup>](https://github.com/WebAssembly/tool-conventions/blob/main/DynamicLinking.md).

Vous pouvez voir la multiplicité en action dans notre article «&nbsp;Comprendre le format texte&nbsp;» — voir la section [Mutation des tables et liaison dynamique](/fr/docs/WebAssembly/Guides/Understanding_the_text_format#mutation_des_tables_et_liaison_dynamique).

## Résumé

Cet article a couvert les bases de l'utilisation de l'API WebAssembly JavaScript nécessaires à l'inclusion d'un module WebAssembly dans un contexte JavaScript, afin d'utiliser les fonctions du module dans ce contexte, et de se familiairiser avec la manipulation de la mémoire et des tableaux WebAssembly. Nous avons terminé en évoquant le concept de multiplicité.

## Voir aussi

- [webassembly.org <sup>(angl.)</sup>](https://webassembly.org/)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Guides/Concepts)
- [WebAssembly sur Mozilla Research <sup>(angl.)</sup>](https://research.mozilla.org/)
