---
title: FinalizationRegistry.prototype.unregister()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/unregister
---

{{JSRef}}

La méthode `unregister()` permet de retirer un objet donné d'un registre [`FinalizationRegistry`](/fr/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry).

## Syntaxe

```js
unregister(jetonDesenregistrement);
```

### Paramètres

- `jetonDesenregistrement`
  - : Le jeton utilisé par la méthode [`register()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register) lors de l'enregistrement de l'objet cible.

### Valeur de retour

`undefined`.

## Notes

Lorsqu'un objet cible a été récupéré, il ne fait plus partie du registre. Aussi, il n'est pas nécessaire d'utiliser `unregister()` dans les fonctions de rappel de nettoyage. Appelez uniquement `unregister` si vous n'avez pas reçu de fonction de rappel de nettoyage et que vous n'en avez plus besoin.

## Exemples

### Utiliser unregister()

Cet exemple illustre l'enregistrement d'un objet en l'utilisant lui-même comme jeton pour le retirer du registre par la suite via `unregister()`&nbsp;:

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

- [`FinalizationRegistry`](/fr/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry)
