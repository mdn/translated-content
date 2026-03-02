---
title: Constructeur FinalizationRegistry()
short-title: FinalizationRegistry()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/FinalizationRegistry
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`FinalizationRegistry`** crée un objet {{JSxRef("FinalizationRegistry")}} qui utilise la fonction de rappel passée en argument comme fonction de nettoyage pour les objets du registre.

## Syntaxe

```js-nolint
new FinalizationRegistry(callbackFn)
```

> [!NOTE]
> `FinalizationRegistry()` ne peut être construit qu'avec {{JSxRef("Operators/new", "new")}}. Tenter de l'appeler sans `new` déclenche une {{JSxRef("TypeError")}}.

### Paramètres

- `callback`
  - : Fonction à invoquer chaque fois qu'une valeur cible enregistrée est récupérée par le ramasse-miettes. Sa valeur de retour est ignorée. La fonction est appelée avec les arguments suivants&nbsp;:
    - `heldValue`
      - : La valeur qui a été passée en second paramètre à la méthode {{JSxRef("FinalizationRegistry/register", "register()")}} lors de l'enregistrement de l'objet `target`.

## Exemples

### Créer un nouveau registre

On crée le registre en fournissant la fonction de rappel&nbsp;:

```js
const registre = new FinalizationRegistry((valeurTenue) => {
  // ....
});
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("FinalizationRegistry")}}
