---
title: FinalizationRegistry.prototype.register()
slug: Web/JavaScript/Reference/Global_Objects/FinalizationRegistry/register
---

{{JSRef}}

La méthode `register()` inscrit un objet dans un registre [`FinalizationRegistry`](/fr/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry) afin que, lorsque l'objet est traité par le ramasse-miettes, la fonction de rappel de nettoyage associée puisse être appelée.

## Syntaxe

```js
register(cible, valeurTenue);
register(cible, valeurTenue, jetonDesenregistrement);
```

### Paramètres

- `cible`
  - : L'objet cible à inscrire au registre.
- `valeurTenue`
  - : La valeur à passer au finaliseur pour cet objet. Cette valeur ne peut pas être l'objet `cible`.
- `jetonDesenregistrement` {{optional_inline}}
  - : Un jeton qui peut être utilisé par la méthode `unregister()` plus tard pour retirer l'objet cible du registre. Si cette valeur est fournie (et est différente de `undefined`), ce doit être un objet. Si cette valeur n'est pas fournie, l'objet cible ne peut pas être retiré du registre.

### Valeur de retour

`undefined`.

## Notes

Voir les notes de la page [`FinalizationRegistry`](/fr/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry#avoid_where_possible) à propos d'inconvénients sur l'utilisation de ces outils.

## Exemples

### Utiliser register()

La ligne suivante enregistre l'objet `cible` et passe la valeur tenue `"une valeur"` et l'objet cible comme jeton de désenregistrement&nbsp;:

```js
registry.register(cible, "une valeur", cible);
```

La ligne suivante enregistre l'objet `cible` et passe un autre objet comme valeur tenue. L'absence de jeton de désenregistrement indique que `cible` ne peut pas être retiré du registre)&nbsp;:

```js
registry.register(cible, { utile: "info à propos de la cible" });
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`FinalizationRegistry`](/fr/docs/Web/JavaScript/Reference/Global_Objects/FinalizationRegistry)
