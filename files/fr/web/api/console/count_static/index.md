---
title: "console : méthode statique count()"
slug: Web/API/console/count_static
l10n:
  sourceCommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{APIRef("Console API")}}

La méthode **`console.count()`** affiche le nombre de fois que `count()` a été appelée (le compteur pouvant être identifié par l'argument passé à la méthode).

{{AvailableInWorkers}}

## Syntaxe

```js-nolint
count()
count(libelle)
```

### Paramètres

- `libelle` {{Optional_Inline}}
  - : Une chaîne de caractères. Si cet argument est fourni, `count()` affiche le nombre de fois qu'elle a été appelée avec ce libellé. Si cet argument est absent, `count()` se comporte comme si elle avait été appelée avec le libellé `"default"`.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Exemples

Prneons le code suivant&nbsp;:

```js
let personne = "";

function salutation() {
  console.count();
  return `Coucou ${personne}`;
}

personne = "bob";
salutation();
personne = "alice";
salutation();
salutation();
console.count();
```

L'affichage dans la console ressemblera à&nbsp;:

```plain
"default: 1"
"default: 2"
"default: 3"
"default: 4"
```

On voit que le libellé affiché est `default`, car aucun libellé explicite n'a été fourni à `count()`.

Si on passe la variable `personne` comme argument pour le premier appel à `count()`, puis la chaîne de caractères `"alice"` lors du second appel&nbsp;:

```js
let personne = "";

function salutation() {
  console.count(personne);
  return `Coucou ${personne}`;
}

personne = "bob";
salutation();
personne = "alice";
salutation();
salutation();
console.count("alice");
```

On obtiendra ce résultat&nbsp;:

```plain
"bob: 1"
"alice: 1"
"alice: 2"
"alice: 3"
```

Et on peut ici compter le nombre d'appels en fonction du libellé passé en argument.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
