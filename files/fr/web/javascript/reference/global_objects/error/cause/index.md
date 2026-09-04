---
title: "Error : propriété cause"
short-title: cause
slug: Web/JavaScript/Reference/Global_Objects/Error/cause
l10n:
  sourceCommit: 1d2e1875bdfdd2fb8d0806535220bbd56d3a091d
---

La propriété de données **`cause`** d'une instance de {{JSxRef("Error")}} indique la cause initiale spécifique de l'erreur.

Elle est utilisée lors de la capture et de la relance d'une erreur avec un message plus spécifique ou utile afin de conserver l'accès à l'erreur originale.

## Valeur

La valeur qui a été passée au constructeur [`Error()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/Error) dans l'argument `options.cause`. Elle peut être absente.

{{js_property_attributes(1, 0, 1)}}

## Description

La valeur de `cause` peut être de n'importe quel type. Vous ne devez pas supposer que l'erreur attrapée a une `Error` comme `cause`, de la même manière que vous ne pouvez pas être sûr que la variable liée dans l'instruction `catch` est une `Error`. L'exemple «&nbsp;Fournir des données structurées comme cause d'erreur&nbsp;» ci‑dessous montre un cas où une valeur sans erreur est délibérément fournie comme cause.

Les sous‑classes {{JSxRef("SuppressedError")}} et {{JSxRef("AggregateError")}} servent toutes deux à associer plusieurs erreurs. Elles représentent toutes deux plusieurs sites de défaillance&nbsp;: `SuppressedError` représente une erreur survenue lors du traitement d'une autre erreur, tandis que `AggregateError` représente un ensemble d'erreurs multiples et non liées survenues pendant la même opération. La propriété `cause` représente un seul site défaillant, l'erreur englobante n'ajoutant que du contexte à la cause sans représenter une défaillance supplémentaire.

L'utilisation typique de `cause` est la suivante. Il y a un seul site défaillant, qui prend naissance dans `logiquePrincipale()`. L'instruction `throw new Error()` n'enveloppe que cette erreur originale pour ajouter du contexte et ne constitue pas une défaillance supplémentaire.

```js
try {
  logiquePrincipale();
} catch (err) {
  throw new Error("La logique principale a échoué", { cause: err });
}
```

L'exemple suivant illustre l'utilisation typique de `SuppressedError`. Il y a deux sites de défaillance&nbsp;: l'un dans `logiquePrincipale()` et l'autre dans `nettoyage()`. L'instance `SuppressedError` associe les deux erreurs.

```js
try {
  logiquePrincipale();
} catch (erreurPrincipale) {
  try {
    nettoyage();
  } catch (erreurNettoyage) {
    throw new SuppressedError(
      erreurNettoyage,
      erreurPrincipale,
      "La logique principale a échoué ; lors du traitement, le nettoyage a également échoué",
    );
  }
}
```

L'exemple suivant illustre l'utilisation typique de `AggregateError`. Il y a plusieurs sites de défaillancev dans `logiquePrincipale()`. L'instance `AggregateError` associe toutes les erreurs.

```js
function logiquePrincipale() {
  const errors = [];
  try {
    operation1();
  } catch (e1) {
    errors.push(e1);
  }
  try {
    operation2();
  } catch (e2) {
    errors.push(e2);
  }
  if (errors.length > 0) {
    throw new AggregateError(errors, "Plusieurs opérations ont échoué");
  }
}
```

## Exemples

### Relancer une erreur avec une cause

Il est parfois utile d'attraper une erreur et de la relancer avec un nouveau message.
Dans ce cas, vous devez passer l'erreur originale au constructeur de la nouvelle `Error`, comme montré.

```js
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Échec de la connexion à la base de données.", {
    cause: err,
  });
}
```

Pour un exemple plus détaillé, voir [Error > Distinguer des erreurs semblables](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error#distinguer_des_erreurs_semblables).

### Fournir des données structurées comme cause d'erreur

Les messages d'erreur rédigés pour un humain peuvent être inappropriés pour un traitement automatique — puisqu'ils sont susceptibles d'être reformulés ou modifiés dans leur ponctuation, ce qui peut casser tout parseur conçu pour les consommer. Ainsi, lorsqu'on lance une erreur depuis une fonction, en alternative à un message lisible par un humain, on peut fournir la cause sous forme de données structurées, pour le traitement automatique.

```js
function makeRSA(p, q) {
  if (!Number.isInteger(p) || !Number.isInteger(q)) {
    throw new Error(
      "La génération de clés RSA nécessite des entrées entières.",
      {
        cause: { code: "NonInteger", values: [p, q] },
      },
    );
  }
  if (!areCoprime(p, q)) {
    throw new Error(
      "La génération de clés RSA nécessite deux entiers premiers entre eux.",
      {
        cause: { code: "NonCoprime", values: [p, q] },
      },
    );
  }
  // rsa algorithm…
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{JSxRef("Error.prototype.message")}}
- La méthode {{JSxRef("Error.prototype.toString()")}}
