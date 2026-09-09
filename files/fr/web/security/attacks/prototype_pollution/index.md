---
title: Pollution de prototype en JavaScript
slug: Web/Security/Attacks/Prototype_pollution
l10n:
  sourceCommit: 00c3b9fb6ead031e43863460add87321f262696c
---

La **pollution de prototype** (<i lang="en">Prototype pollution</i> en anglais) est une vulnérabilité où un·e attaquant·e peut ajouter ou modifier des propriétés sur le prototype d'un objet. Cela signifie que des valeurs malveillantes peuvent apparaître de manière inattendue sur les objets de votre application, conduisant souvent à des erreurs logiques ou à des attaques supplémentaires comme le [script inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS).

## Les prototypes en JavaScript

JavaScript implémente {{Glossary("inheritance", "l'héritage")}} en utilisant des _prototypes_. Chaque objet a une référence vers un prototype, qui est lui-même un objet, et qui a lui-même un prototype, et ainsi de suite, jusqu'à ce que l'on atteigne le prototype fondamental, appelé `Object.prototype`, dont le propre prototype est `null`.

Si vous essayez d'accéder à une propriété ou d'appeler une méthode sur un objet, et que cette propriété ou méthode n'est pas définie sur l'objet, alors l'environnement d'exécution JavaScript cherche dans le prototype de l'objet pour la propriété ou la méthode, puis dans le prototype du prototype de l'objet, et ainsi de suite, jusqu'à ce qu'il trouve la méthode ou la propriété, ou atteigne un objet dont le prototype est `null`.

C'est pourquoi vous pouvez faire ceci&nbsp;:

```js
const maCollection = new Set([1, 2, 3]);
// chaîne de prototypes :
// maCollection -> Set.prototype -> Object.prototype -> null

maCollection.size;
// 3
// size est définie sur le prototype de `maCollection`, qui est `Set.prototype`

maCollection.propertyIsEnumerable("size");
// false
// propertyIsEnumerable() est définie sur le prototype
// de `Set.prototype`, qui est `Object.prototype`
```

Contrairement à de nombreux autres langages, JavaScript permet d'ajouter des propriétés et des méthodes héritées à l'exécution en modifiant les prototypes d'un objet&nbsp;:

```js example-bad
const maCollection = new Set([1, 2, 3]);

// modifie le prototype de l'objet à l'exécution
Object.prototype.extra = "nouvelle propriété depuis le prototype de l'objet !";

// modifie le prototype de Set à l'exécution
Set.prototype.autre = "nouvelle propriété depuis le prototype de Set !";

maCollection.extra;
// "nouvelle propriété depuis le prototype de l'objet !"

maCollection.autre;
// "nouvelle propriété depuis le prototype de Set !"
```

Dans une attaque de pollution de prototype, l'attaquant·e modifie un prototype intégré tel que `Object.prototype`, ce qui fait que tous les objets dérivés ont une propriété supplémentaire, y compris les objets auxquels l'attaquant·e n'a pas d'accès direct.

> [!NOTE]
> Pour en savoir plus sur les prototypes, voir&nbsp;:
>
> - [Les prototypes d'objet](/fr/docs/Learn_web_development/Extensions/Advanced_JavaScript_objects/Object_prototypes)
> - [L'héritage et la chaîne de prototypes](/fr/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
> - [Travailler avec des objets](/fr/docs/Web/JavaScript/Guide/Working_with_objects)

## Anatomie d'une attaque de pollution de prototype

Une attaque de pollution de prototype comporte deux phases&nbsp;:

1. **Pollution**&nbsp;: l'attaquant·e est capable d'ajouter ou de modifier des propriétés sur le prototype d'un objet.
2. **Exploitation**&nbsp;: le code de l'application accède aux propriétés polluées, ce qui entraîne un comportement inattendu.

### Sources de pollution

Pour polluer des objets, l'attaquant·e a besoin d'un moyen d'ajouter des propriétés arbitraires aux objets prototype. Cela peut se produire à la suite d'un [XSS](/fr/docs/Web/Security/Attacks/XSS), dans lequel l'attaquant·e obtient un accès direct à l'environnement d'exécution JavaScript de la page. Cependant, les attaquant·e·s ayant ce niveau d'accès peuvent causer des dommages beaucoup plus directement, donc la pollution de prototype est généralement discutée comme une attaque _uniquement fondée sur les données_, où l'attaquant·e construit une charge utile qui est traitée par le code de l'application, entraînant une pollution.

Un vecteur d'attaque clé est la propriété [`__proto__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/proto), qui permet d'accéder à l'objet prototype d'un objet arbitraire. Vous pouvez également atteindre le prototype avec `votreObjet.constructor.prototype`. Le modèle de code clé qui est une source de pollution est la modification dynamique de propriétés du type suivant&nbsp;:

```js
obj[cle1][cle2] = valeur;
```

Dans ce cas, si `obj` est un objet ordinaire, `cle1` est `"__proto__"`, et `cle2` est un nom de propriété tel que `"test"`, alors le code ajoute une propriété appelée `test` à `Object.prototype`, qui est le prototype de tous les objets ordinaires. Même si [le mutateur `"__proto__"` est désactivé](#loption --disable-proto_de_node.js), le modèle d'accès `.constructor.prototype` peut toujours être utilisé pour atteindre le prototype, qui est également `Object.prototype` pour les objets ordinaires&nbsp;:

```js
obj[cle1][cle2][cle3] = valeur;
```

...où `cle1` est `"constructor"`, `cle2` est `"prototype"`, et `cle3` est un nom de propriété tel que `"test"`.

Pour mettre cette ligne dans un contexte plus large, `cle1`, `cle2`, et `cle3` peuvent être des valeurs contrôlées par l'attaquant·e. Par exemple, imaginez un point de terminaison API qui prend une liste de noms d'utilisateur·ice, et une liste de champs à interroger pour chaque utilisateur·ice, et retourne un objet mappant chaque nom d'utilisateur·ice à ses champs&nbsp;:

```js
function obtenirUtilisateur(requete) {
  const resultat = {};
  const nomsUtilisateur = new URL(requete.url).searchParams.getAll("noms");
  const champs = new URL(requete.url).searchParams.getAll("champs");
  for (const nom of nomsUtilisateur) {
    const infoUtilisateur = database.lookup(nom);
    resultat[nom] ??= {};
    for (const champ of champs) {
      // Source de pollution
      resultat[nom][champ] = infoUtilisateur[champ];
    }
  }
  return resultat;
}
```

Maintenant, si l'attaquant·e appelle cette API avec l'URL `https://example.com/api?noms=__proto__&champs=age`, le code ajoute une propriété appelée `age` à `Object.prototype`, avec pour valeur celle de la propriété `age` de l'utilisateur·ice `__proto__`. Elle peut être `undefined`, mais si l'attaquant·e peut ajouter un·e utilisateur·ice appelé·e `__proto__` à la base de données (par exemple avec un appel API séparé), il·elle peut contrôler la valeur de la propriété `age`.

De nombreuses bibliothèques qui effectuent une [analyse personnalisée des chaînes de caractères de requête URL <sup>(angl.)</sup>](https://github.com/BlackFan/client-side-prototype-pollution) sont particulièrement vulnérables, car elles permettent de définir des structures d'objets profondes à partir de la chaîne de caractères de requête, puis utilisent la modification dynamique des propriétés pour construire l'objet, comme `?__proto__[test]=test` ou `?__proto__.test=test`. Les bibliothèques sont en général plus vulnérables que le code applicatif, car elles ne peuvent pas établir de liste blanche des clés valides et doivent souvent utiliser la modification dynamique des propriétés pour être génériques.

Notez qu'en [JSON](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON), la propriété `__proto__` n'est qu'un nom de propriété normal, donc l'analyse de charges JSON comme `{"__proto__": {"test": "value"}}` crée simplement un objet avec une propriété appelée `__proto__`, et n'est pas immédiatement problématique. Cependant, si plus tard dans le code, l'objet est fusionné dans un autre objet avec {{JSxRef("Object.assign()")}}, des [boucles `for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in), etc., alors l'opération d'affectation implicite de la propriété déclenche le mutateur. En général, cela ne modifie pas réellement `Object.prototype`, car il n'y a qu'un seul niveau d'accès dynamique aux propriétés, mais cela change le prototype de l'objet cible. Notez que [l'opérateur de propagation](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) n'est pas sensible à ce type d'attaque, car la propagation ne déclenche pas les mutateurs.

```js
// Juste un objet avec une propriété appelée `__proto__`
const options = JSON.parse('{"__proto__": {"test": "valeur"}}');
const avecValeursParDefaut = Object.assign({ mode: "cors" }, options);
// Dans le processus de fusion de `options`, nous avons indirectement exécuté
// avecValeursParDefaut.__proto__ = { test: "valeur" }, ce qui fait que `avecValeursParDefaut` a
// un prototype différent
console.log(avecValeursParDefaut.test); // "valeur"
```

### Cibles d'exploitation

Pour voir l'effet de la pollution de prototype, nous pouvons examiner comment l'appel {{DOMxRef("fetch()")}} suivant peut être complètement modifié. Par défaut, il s'agit d'une requête {{HTTPMethod("GET")}} sans contenu à envoyer au serveur, mais comme nous avons pollué l'objet `Object.prototype` avec deux nouvelles propriétés par défaut, l'appel `fetch()` est maintenant transformé en une requête {{HTTPMethod("POST")}} et le corps de la requête contient désormais des instructions pour le serveur, par exemple pour transférer une somme d'argent arbitraire à une adresse arbitraire&nbsp;:

```js
// L'attaquant·e provoque indirectement la pollution suivante
Object.prototype.body = "action=transfer&amount=1337&to=1337-1337-1337-1337";
Object.prototype.method = "POST";

fetch("https://example.com", {
  mode: "cors",
});
// Promise {status: "pending", body: "action=transfer&amount=1337&to=1337-1337-1337-1337", method: "POST"}

// Toute nouvelle initialisation d'objet est maintenant modifiée pour contenir des propriétés par défaut supplémentaires
console.log({}.method); // "POST"
console.log({}.body); // "action=transfer&amount=1337&to=1337-1337-1337-1337"
```

Une autre cible d'attaque de pollution dangereuse est la propriété {{DOMxRef("HTMLIframeElement.srcdoc")}} qui définit le contenu d'un élément HTML {{HTMLElement("iframe")}}. En remplaçant sa valeur, il peut être possible d'exécuter du code arbitraire.

```js
Object.prototype.srcdoc = "<script>alert(1)<\/script>";
```

Les objets de configuration, comme l'objet {{DOMxRef("RequestInit")}} de `fetch()` dans l'exemple de code ci-dessus, ou l'instanciation de `<iframe>`, ou la configuration des assainisseurs (objets {{DOMxRef("SanitizerConfig")}}), sont parmi les objets les plus sensibles et sont souvent des cibles d'attaques de pollution de prototype. Les objets de données peuvent également être pollués&nbsp;:

```js
function accesTableauDeBord(utilisateur) {
  if (!utilisateur.estAdmin) {
    return new Response("Accès refusé", { status: 403 });
  }
  // afficher la page d'administration
}
```

Si `Object.prototype.estAdmin` est défini sur `true`, et que la propriété `estAdmin` est absente pour les non-admins au lieu d'être définie explicitement sur `false`, alors tous les utilisateur·ice·s sont considéré·e·s comme des admins, ce qui entraîne un contournement complet du contrôle d'accès.

## Défenses contre la pollution de prototype

Les défenses contre la pollution de prototype suivent deux axes&nbsp;: éviter le code qui peut se transformer en modifications de prototype, et éviter d'accéder à des propriétés potentiellement polluées. La section suivante présente quelques stratégies que vous pouvez utiliser en fonction de votre situation.

### Valider les entrées utilisateur

Validez toujours les entrées utilisateur·ice avec des validateurs, tels que [ajv <sup>(angl.)</sup>](https://ajv.js.org) et [Zod <sup>(angl.)</sup>](https://zod.dev/), pour vous assurer que la structure des données d'entrée contient les propriétés appropriées avec les types appropriés. Pour atténuer l'attaque de pollution de prototype, rejetez les propriétés inutiles en définissant `additionalProperties` sur `false` dans le schéma. L'utilisation d'un schéma permet également de définir des valeurs par défaut pour les propriétés manquantes, ce qui évite les recherches dans le prototype.

Vous devez éviter la modification dynamique des propriétés (sous la forme `obj[cle] = valeur`) à moins de pouvoir valider les valeurs de `cle`. Si vous êtes dans cette situation, vous pouvez exclure `__proto__`, `constructor`, `prototype` comme clés dans votre validation.

### L'option `--disable-proto` de Node.js

Si vous êtes dans un environnement Node.js, vous pouvez désactiver `Object.prototype.__proto__` avec l'option `--disable-proto=MODE` où `MODE` est soit `delete` (la propriété est entièrement supprimée), soit `throw` (les accès à la propriété déclenchent une exception avec le code `ERR_PROTO_ACCESS`). Utilisez `delete Object.prototype.__proto__` dans les environnements autres que Node pour le même effet.

Cela ne vous protège pas entièrement contre la pollution de prototype (car `constructor.prototype` est toujours disponible), mais cela supprime un point d'entrée de ce type.

### Verrouiller les objets natifs

Les environnements hautement sensibles peuvent mettre en œuvre une défense appelée _verrouillage du domaine d'exécution_, qui empêche toute modification des objets natifs. Un exemple est la prothèse d'émulation [SES <sup>(angl.)</sup>](https://github.com/endojs/endo/tree/master/packages/ses#ses) pour [JavaScript renforcé <sup>(angl.)</sup>](https://hardenedjs.org). Cette défense repose sur la fonction {{JSxRef("Object.freeze()")}}, qui empêche les extensions et rend les propriétés existantes non inscriptibles et non configurables. Le gel d'un objet constitue le plus haut niveau d'intégrité fourni par JavaScript. En revanche, {{JSxRef("Object.seal()")}} permet de modifier les propriétés existantes tant qu'elles sont inscriptibles, tandis que {{JSxRef("Object.preventExtensions()")}} empêche l'ajout de nouvelles propriétés à un objet.

```js
Object.freeze(Object.prototype);
const obj = {};
const cle1 = "__proto__";
const cle2 = "a";
obj[cle1][cle2] = 1; // échoue silencieusement en mode non strict
obj.a; // indéfini
```

Notez cependant que des modifications légitimes des prototypes peuvent se produire, généralement pour fournir une implémentation de {{Glossary("Polyfill", "prothèse d'émulation")}}. En [mode non strict](/fr/docs/Web/JavaScript/Reference/Strict_mode), les tentatives de modification d'un objet gelé échouent silencieusement, tandis qu'en mode strict elles déclenchent une exception `TypeError`. Pour permettre l'utilisation des prothèses d'émulation, leur code doit s'exécuter avant le gel.

Un autre point à noter avec {{JSxRef("Object.freeze()")}} est qu'il ne fournit pas de gel profond par défaut. Si vous voulez une véritable immutabilité, vous devez geler récursivement chaque propriété ([exemple](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze#deep_freezing)). Une bibliothèque comme SES est préférable, car elle effectue un «&nbsp;parcours&nbsp;» de tous les objets natifs, ce qui évite d'oublier de geler un objet.

### Éviter les recherches dans le prototype

Dans le code où vous accédez aux propriétés d'un objet, assurez-vous de savoir que la propriété existe sur l'objet lui-même. Vous pouvez effectuer une vérification avec {{JSxRef("Object.hasOwn()")}} lorsque vous accédez aux clés d'objets ou que vous les parcourez.

Au lieu de&nbsp;:

```js example-bad
if (!utilisateur.estAdmin) {
  return new Response("Accès refusé", { status: 403 });
}
```

Envisagez plutôt&nbsp;:

```js
if (!Object.hasOwn(utilisateur, "estAdmin") || !utilisateur.estAdmin) {
  return new Response("Accès refusé", { status: 403 });
}
```

Lors d'un parcours, la boucle {{JSxRef("Statements/for...in", "for...in")}} parcourt le prototype. Si possible, remplacez ces boucles par {{JSxRef("Statements/for...of", "for...of")}} et {{JSxRef("Object.keys()")}} pour parcourir uniquement les clés propres.

```js
// Recherche dans le prototype
for (const cle in payload) {
  faireQuelqueChose(payload[cle]);
}

// Parcourt uniquement les clés propres
for (const cle of Object.keys(payload)) {
  faireQuelqueChose(payload[cle]);
}
```

Dans les fonctions, définissez explicitement les paramètres par défaut au lieu de les laisser indéfinis. Les valeurs des paramètres par défaut sont ainsi utilisées à la place d'une éventuelle recherche dans la chaîne de prototypes. Au lieu de ceci&nbsp;:

```js example-bad
function effectuerActionDangereuse(options = {}) {
  if (!options.activerActionDangereuse) {
    return;
  }
}
```

Envisagez plutôt ceci&nbsp;:

```js
function effectuerActionDangereuse(
  options = { activerActionDangereuse: false },
) {
  if (!options.activerActionDangereuse) {
    return;
  }
}
```

### Créer des objets JavaScript avec un prototype nul

Les [objets avec un prototype nul](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null) évitent à la fois la pollution du prototype (car les propriétés `__proto__` et `constructor` ne sont pas présentes sur l'objet) et les recherches dans le prototype. Ils sont créés avec la fonction {{JSxRef("Object.create()", "Object.create(null)")}}, ou avec la syntaxe `{ __proto__: null }` lors de la création d'objets.

> [!NOTE]
> La syntaxe `{ __proto__: null }` du [mutateur de prototype](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer#mutateur_de_prototype) lors de la création d'objets est totalement sécurisée, contrairement à la propriété d'accès `obj.__proto__`.

Si vous devez transmettre un objet comme options (par exemple, parce qu'une API comme `fetch()` vous impose d'utiliser un objet), créez un objet avec un prototype nul. Notez que la création d'objets sans prototype n'est pas le comportement par défaut. Ainsi, chaque fois que vous instanciez un objet, vous devez penser à créer explicitement un objet avec un prototype nul au lieu d'utiliser la syntaxe ordinaire de création d'objet (`const myObj = {}`).

```js
Object.prototype.method = "POST";

// Envoie toujours une requête GET, car l'objet n'a pas de prototype
fetch("https://example.com", {
  __proto__: null,
  mode: "cors",
});
```

Si vous créez un objet qui est modifié ultérieurement (par exemple avec `obj[cle] = valeur`), créez-le comme un objet avec un prototype nul&nbsp;:

```js
const resultat = { __proto__: null };
const cle1 = "__proto__";
const cle2 = "a";
resultat[cle1] ??= {};
resultat[cle1][cle2] = 1; // modifie resultat, pas Object.prototype
```

### Utilisez plutôt `Map` et `Set`

Lorsque les objets JavaScript sont utilisés comme paires clé-valeur improvisées, envisagez plutôt d'utiliser un objet {{JSxRef("Map")}} ou {{JSxRef("Set")}}. Ces objets évitent également la pollution du prototype en évitant la modification ou la recherche de propriétés d'objet. Consultez la documentation de `Map` pour une [comparaison entre les tableaux associatifs et les objets](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map#comparaison_entre_objets_et_map). La méthode {{JSxRef("Map.prototype.get()")}} retourne toujours uniquement les entrées présentes dans le `Map`.

```js
// Supposons que Object a été pollué d'une manière ou d'une autre
Object.prototype.admin = true;

const config = new Map();
config.set("admin", false);

config.admin; // true
config.get("admin"); // false
```

## Liste de contrôle récapitulative des défenses

Lors de la création d'objets&nbsp;:

- Évaluez si un objet est nécessaire ou si un {{JSxRef("Map")}} ou un {{JSxRef("Set")}} constitue un meilleur choix.
- Lorsque vous transmettez des objets à d'autres fonctions, comme `FetchInit` ou `SanitizerConfig`, assurez-vous que toutes les clés sont définies ou utilisez des [objets avec un prototype nul](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null).
- Lorsque vous créez des objets qui sont modifiés dynamiquement ultérieurement (par exemple avec `obj[key] = value`), créez-les également comme des objets avec un prototype nul.

Lors de l'acceptation de données saisies par l'utilisateur·ice, que ce soit dans des chaînes de caractères de requête URL, des charges JSON ou des paramètres de fonction&nbsp;:

- Validez toujours les données saisies par l'utilisateur·ice avec un validateur de schéma. Rejetez les propriétés non reconnues et définissez des valeurs par défaut pour les propriétés manquantes.
- Les fonctions qui reçoivent des objets comme paramètres doivent soit s'assurer que toutes les clés attendues sont définies sur l'objet lui-même (en définissant des valeurs par défaut), soit vérifier d'abord que la clé existe sur l'objet lui-même (par exemple avec {{JSxRef("Object.hasOwn()")}}) avant d'y accéder.
- Préférez les boucles {{JSxRef("Statements/for...of", "for...of")}} et {{JSxRef("Object.keys()")}} aux boucles {{JSxRef("Statements/for...in", "for...in")}}.

Pour les objets natifs et tiers&nbsp;:

- Envisagez de geler les objets intégrés et tiers, par exemple avec la prothèse d'émulation [SES <sup>(angl.)</sup>](https://github.com/endojs/endo/tree/master/packages/ses#ses).

Défenses à l'exécution&nbsp;:

- Utilisez `--disable-proto` dans Node.js pour désactiver `Object.prototype.__proto__`.
- Utilisez `delete Object.prototype.__proto__` dans les environnements autres que Node.

## Voir aussi

- [OWASP&nbsp;: antisèche sur la prévention de la pollution de prototype <sup>(angl.)</sup>](https://cheatsheetseries.owasp.org/cheatsheets/Prototype_Pollution_Prevention_Cheat_Sheet.html#other-resources)
- [Pollution de prototype côté client <sup>(angl.)</sup>](https://github.com/BlackFan/client-side-prototype-pollution)
- [Pollution de prototype côté serveur <sup>(angl.)</sup>](https://github.com/KTH-LangSec/server-side-prototype-pollution)
