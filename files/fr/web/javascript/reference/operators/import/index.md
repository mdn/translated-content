---
title: import
slug: Web/JavaScript/Reference/Operators/import
l10n:
  sourceCommit: 1be604140d8179f54bc180af6cd4bc27576219de
---

{{jsSidebar("Operators")}}

L'appel `import()`, généralement appelé _import dynamique_, est une expression semblable à une fonction qui permet de charger un module ECMAScript de façon asynchrone et dynamique dans un environnement qui peut ne pas être un module.

À la différence de [la _déclaration_ `import`](/fr/docs/Web/JavaScript/Reference/Statements/import), les imports dynamiques sont uniquement évalués lorsque c'est nécessaire et permettent une plus grande flexibilité syntaxique.

## Syntaxe

```js
import(nomModule);
```

L'appel `import()` a une syntaxe qui ressemble à celle d'un appel de fonction, mais `import` est bien un mot-clé et pas une fonction. On ne peut pas créer de synonyme comme avec `const monImport = import`, cela déclenchera une exception [`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError).

### Paramètres

- `nomModule`
  - : Le nom du module à importer. L'évaluation de l'identifiant est propre à l'hôte, mais suit toujours le même algorithme que [les déclarations `import` statiques](/fr/docs/Web/JavaScript/Reference/Statements/import).

### Valeur de retour

Cet appel renvoie une promesse qui est résolue en un objet contenant toutes les valeurs exportées de `nomModule`, avec la même forme qu'un import d'espace de noms (`import * as nom from nomModule`)&nbsp;: un objet ayant `null` comme prototype, et l'export par défaut étant disponible avec une clé intitulée `default`.

## Description

La syntaxe de déclaration d'import (`import quelquechose from "quelquepart"`) est statique et aura toujours comme résultat l'évaluation du module importé lors du chargement. Les imports dynamiques permettent de contourner cette rigidité syntaxique des déclarations d'import et de charger un module conditionnellement ou à la demande. Voici quelques raisons pour lesquelles vous pourriez avoir besoin d'utiliser un import dynamique&nbsp;:

- Si un import statique ralentit considérablement le chargement du code et qu'il y a une faible probabilité d'avoir besoin du code importé, ou que celui-ci ne sera pas nécessaire avant un certain temps.
- Si un import statique augmente significativement la consommation mémoire du programme et qu'il y a une faible probabilité d'avoir besoin du code importé.
- Si le module importé n'existe pas encore au moment du chargement.
- Si la chaîne de caractères utilisée pour désigner le module doit être construite dynamiquement (les imports statiques prenant uniquement en charge les chaînes de caractères statiques).
- Si le module importé déclenche des effets de bord qu'on ne souhaite pas avoir à moins qu'une condition soit respectée (il est généralement recommandé de ne pas avoir d'effets de bord dans un module, mais ce n'est pas toujours quelque chose qu'on contrôle, par exemple avec les dépendances).
- Si le code est dans un environnement sans module (par exemple, `eval()` ou un fichier de script).

Veillez à utiliser les imports dynamiques uniquement si nécessaire. En effet, la forme statique est préférable pour le chargement initiale des dépendances et pourra bénéficier des outils d'analyse statique et [de l'élimination du code mort (<i lang="en">tree shaking</i>)](/fr/docs/Glossary/Tree_shaking).

Si votre fichier n'est pas exécuté comme un module (s'il est référencé dans un fichier HTML, la balise `<script>` doit contenir `type="module"`), vous ne pourrez pas utiliser les déclarations d'import statiques, mais la syntaxe d'import dynamique asynchrone sera toujours présente et permettra d'importer des modules dans des environnements sans module.

## Exemples

### Importer un module pour les effets de bord uniquement

```js
(async () => {
  if (qqcEstVrai) {
    // on importe un module pour les effets de bord
    await import("/modules/mon-module.js");
  }
})();
```

Si votre projet utilise des paquets qui exportent des modules ECMAScript, il est aussi possible de les importer pour les effets de bord uniquement. Cela exécutera uniquement le code du paquet à partir du point d'entrée (et tous les fichiers qu'il importe à son tour).

### Importer les valeurs par défaut

Pour cela, on décomposera l'objet récupéré et on renommera la clé `default`.

```js
(async () => {
  if (qqcEstVrai) {
    const {
      default: monDefaut,
      toto,
      truc,
    } = await import("/modules/mon-module.js");
  }
})();
```

### Réaliser un import à la demande en réponse à une action

Dans cet exemple, on montre comment charger une fonctionnalité sur la page en fonction d'une action de l'utilisatrice ou de l'utilisateur. Ici, il s'agit d'un clic sur un bouton qui déclenche l'appel à une fonction dans le module. Il ne s'agit pas de la seule façon d'implémenter cette fonctionnalité. L'appel `import()` prend également en charge `await`.

```js
const main = document.querySelector("main");
for (const link of document.querySelectorAll("nav > a")) {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    import("/modules/mon-module.js")
      .then((module) => {
        module.loadPageInto(main);
      })
      .catch((err) => {
        main.textContent = err.message;
      });
  });
}
```

### Importer différents modules selon l'environnement

Pour des processus comme le rendu côté serveur, on doit avoir une logique conditionnelle selon que le code est exécuté côté serveur ou côté navigateur, car ils ont différentes variables globales ou modules (le navigateur aura par exemple accès aux API web comme `document` et `navigator`, tandis que le serveur aura accès au système de fichier du serveur). On peut réaliser cela avec un import dynamique conditionnel.

```js
let monModule;

if (typeof window === "undefined") {
  monModule = await import("module-utilise-cote-serveur");
} else {
  monModule = await import("module-utilise-cote-navigateur");
}
```

### Importer un module avec un nom qui n'est pas un littéral

Les imports dynamiques permettent d'utiliser n'importe quelle expression comme identifiant du module, et pas uniquement des littéraux de chaînes de caractères.

Ici, on charge 10 modules, `/modules/module-0.js`, `/modules/module-1.js`, etc., en parallèle et on appelle la fonction `load()` exportée par chacun de ces modules.

```js
Promise.all(
  Array.from({ length: 10 }).map((_, index) =>
    import(`/modules/module-${index}.js`),
  ),
).then((modules) => modules.forEach((module) => module.load()));
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La déclaration `import`](/fr/docs/Web/JavaScript/Reference/Statements/import)
