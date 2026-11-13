---
title: "console : méthode statique countReset()"
slug: Web/API/console/countReset_static
l10n:
  sourceCommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{APIRef("Console API")}}

La méthode **`console.countReset()`** permet de réinitialiser le compteur utilisé avec [`console.count()`](/fr/docs/Web/API/console/count_static).

{{AvailableInWorkers}}

## Syntaxe

```js-nolint
countReset()
countReset(libelle)
```

### Paramètres

- `libelle` {{optional_inline}}
  - : Une chaîne de caractères. Si cet argument est fourni, `countReset()` remet à zéro le compteur associé à ce libellé. Si l'argument est absent, `countReset()` remet à zéro le compteur par défaut.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Exemples

Prenons le code suivant par exemple&nbsp;:

```js
let personne = "";

function salutations() {
  console.count();
  return `Coucou ${personne}`;
}

personne = "bob";
salutations();
personne = "alice";
salutations();
salutations();
console.count();
console.countReset();
```

La console affichera ce qui suit&nbsp;:

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 4"
"default: 0"
```

On voit que l'appel à `console.counterReset()` réinitialise la valeur du compteur par défaut à 0.

Si on passe la variable `personne` en paramètre pour le libellé (ici d'abord avec `"bob"`, puis avec `"alice"`)&nbsp;:

```js
let personne = "";

function salutations() {
  console.count(personne);
  return `Coucou ${personne}`;
}

personne = "bob";
salutations();
personne = "alice";
salutations();
salutations();
console.countReset("bob");
console.count("alice");
```

On obtiendra le résultat suivant&nbsp;:

```plain
"bob: 1"
"alice: 1"
"alice: 2"
"bob: 0"
"alice: 3"
```

En réinitialisant la valeur du compteur `"bob"`, on ne modifie pas pour autant le compteur `"alice"`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
