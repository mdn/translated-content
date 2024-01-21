---
title: "console : méthode statique assert()"
slug: Web/API/console/assert_static
l10n:
  sourceCommit: 022399901bdc60df947ee15e11a49be029e290d0
---

{{APIRef("Console API")}}

La méthode **`console.assert()`** permet d'écrire un message d'erreur dans la console si l'assertion passée en argument est fausse. Si l'assertion est bien vérifiée, rien ne se passe.

{{AvailableInWorkers}}

## Syntaxe

```js-nolint
assert(assertion, obj1)
assert(assertion, obj1, obj2)
assert(assertion, obj1, obj2, /* …, */ objN)

assert(assertion, msg)
assert(assertion, msg, subst1)
assert(assertion, msg, subst1, /* …, */ substN)
```

### Paramètres

- `assertion`
  - : Une expression booléenne. Si l'assertion est fausse, le message est affiché dans la console.
- `obj1` … `objN`
  - : Une liste d'objets JavaScript à afficher. Les représentations en chaînes de caractères de ces objets sont concaténés dans l'ordre et affichés dans la console.
- `msg`
  - : Une chaîne de caractères JavaScript qui contient zéro ou plusieurs chaînes de substitution.
- `subst1` … `substN`
  - : Des objets JavaScript avec lesquels remplacer les chaînes de substitution dans `msg`. Ce paramètre permet un contrôle supplémentaire sur le format de ce qui est affiché.

### Valeur de retour

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

## Exemples

Dans l'exemple suivant, on illustre comment utiliser un objet comme deuxième argument&nbsp;:

```js
const messageErreur = "le nombre n'est pas pair";
for (let nombre = 2; nombre <= 5; nombre++) {
  console.log(`le nombre est ${nombre}`);
  console.assert(nombre % 2 === 0, "%o", { nombre, messageErreur });
}
// Ce qui est affiché dans la console :
// le nombre est 2
// le nombre est 3
// Assertion failed: {nombre: 3, messageErreur: "le nombre n'est pas pair"}
// le nombre est 4
// le nombre est 5
// Assertion failed: {nombre: 5, messageErreur: "le nombre n'est pas pair"}
```

Voir [la page sur les chaînes de caractères de substitution avec `console`](/fr/docs/Web/API/console#utiliser_des_chaînes_de_substitution) pour plus de détails.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
