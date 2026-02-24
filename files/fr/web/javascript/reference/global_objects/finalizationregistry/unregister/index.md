---
title: "FinalizationRegistry : méthode unregister()"
short-title: unregister()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/unregister
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`unregister()`** des instances de {{JSxRef("FinalizationRegistry")}} retire une valeur cible de cet objet `FinalizationRegistry`.

## Syntaxe

```js-nolint
unregister(unregisterToken)
```

### Paramètres

- `unregisterToken`
  - : Le jeton utilisé avec la méthode {{JSxRef("FinalizationRegistry/register", "register()")}} lors de l'enregistrement de la valeur cible. Plusieurs valeurs enregistrées avec le même `unregisterToken` seront retirées ensemble du registre.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `unregisterToken` n'est pas un objet ou un [symbole non enregistré](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol#symboles_partagés_et_registre_global_des_symboles).

## Description

Lorsqu'une valeur cible a été récupérée, elle ne fait plus partie du registre.
Il n'est pas nécessaire d'appeler `unregister` dans votre fonction de rappel de nettoyage. N'appelez `unregister` que si vous n'avez pas reçu de fonction de rappel de nettoyage et que vous n'en avez plus besoin.

## Exemples

### Utiliser la méthode `unregister()`

Cet exemple illustre l'enregistrement d'un objet en l'utilisant lui-même comme jeton pour le retirer du registre par la suite avec `unregister()`&nbsp;:

```js
class Bidule {
  #cleanup = (label) => {
    //        ^^^^^−−−−− valeur tenue
    console.error(
      `La méthode \`release\` n'a jamais été appelée pour l'objet avec l'étiquette "${label}"`,
    );
  };
  #registry = new FinalizationRegistry(this.#cleanup);

  /**
   * Construit une instance `Bidule`. Assurez-vous d'appeler `release`
   * lorsque vous avez fini de vous en servir.
   *
   * @param   label       Une étiquette pour le `Bidule`.
   */
  constructor(label) {
    //                            vvvvv−−−−− valeur tenue
    this.#registry.register(this, label, this);
    //          cible  −−−−−^^^^         ^^^^−−−−− jeton de désenregistrement
  }

  /**
   * Libère les ressources tenues par cette instance de `Bidule` .
   */
  release() {
    this.#registry.unregister(this);
    //                        ^^^^−−−−− jeton de désenregistrement
  }
}
```

Dans l'exemple qui suit, on illustre l'enregistrement en utilisant un autre objet comme jeton de désenregistrement&nbsp;:

```js
class Bidule {
  #cleanup = (label) => {
    //        ^^^^^−−−−− valeur tenue
    console.error(
      `La méthode \`release\` n'a jamais été appelée pour \`Bidule\` pour le fichier "${file.name}"`,
    );
  };
  #registry = new FinalizationRegistry(this.#cleanup);

  /**
   * Construit une instance de `Bidule` pour le fichier donné.
   * Assurez-vous d'appeler `release` lorsque vous n'en avez plus
   * besoin.
   * @param   filename    Le nom du fichier.
   */
  constructor(filename) {
    this.#file = File.open(filename);
    //                            vvvvv−−−−− valeur tenue
    this.#registry.register(this, label, this.#file);
    //          cible  −−−−−^^^^         ^^^^^^^^^^−−−−− jeton de désenregistrement
  }

  /**
   * On libère les ressources tenues par cette instance de `Bidule`.
   */
  release() {
    if (this.#file) {
      this.#registry.unregister(this.#file);
      //                        ^^^^^^^^^^−−−−− jeton de désenregistrement
      File.close(this.#file);
      this.#file = null;
    }
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("FinalizationRegistry")}}
