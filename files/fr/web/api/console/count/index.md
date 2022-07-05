---
title: Console.count()
slug: Web/API/Console/count
tags:
  - API
  - DOM
  - Développement
  - Méthodes
  - Web
  - console
  - débogage
translation_of: Web/API/Console/count
---
{{APIRef("Console API")}}

Affiche dans la console le nombre de fois où la fonction `count()` a été appelée. Cette fonction accepte l'argument optionnel `label`.

{{AvailableInWorkers}}

Si un `label` est passé en paramètre, la fonction affiche le nombre de fois où la fonction `count()` a été appelée pour ce `label` spécifiquempent.

Si aucun `label` est passé en paramètre, la fonction affiche le nombre de fois où la fonction `count()` a été appelée jusqu'à présent.

Ci-dessous, un exemple d'utilisation :

```js
function greet() {
  console.count();
  return "hi " + user;
}

var user = "bob";
greet();
user = "alice";
greet();
greet();
console.count();
```

La console affichera les lignes suivantes :

    "<no label>: 1"
    "<no label>: 2"
    "<no label>: 3"
    "<no label>: 1"

A noter, la dernière ligne inscrite dans la console fait référence à l'appel de la fonction `count()` de la ligne 11 qui est traité comme un événement indépendant.

Si la variable `user` est passée à la fonction comme paramètre `label`, le code ci-dessous génèrera un nouveau compteur lorsque la variable `user` sera modifiée :

```js
function greet() {
  console.count(user);
  return "hi " + user;
}

var user = "bob";
greet();
user = "alice";
greet();
greet();
console.count("alice");
```

La console affichera les lignes suivantes :

    "bob: 1"
    "alice: 1"
    "alice: 2"
    "alice: 3"

Nous obtenons maintenant deux compteurs distinct basés sur un libellé différent. L'appel de la fonction `count()` avec "alice" à la ligne 11 n'est pas considéré comme un événement indépendant car le compteur existe déjà.

## Syntaxe

    console.count([label]);

## Paramètres

- `label`
  - : Une chaîne de caractères. Si ce paramètre est renseigné, `count()` affiche le nombre de fois que la fonction a été appelée jusqu'à présent avec ce libellé. S'il est omis, `count()` affiche le nombre de fois que la fonction a été appelée sur cette ligne.

## Spécifications

| Spécification                                                                | Status                           | Commentaire         |
| ---------------------------------------------------------------------------- | -------------------------------- | ------------------- |
| {{SpecName("Console API", "#count", "console.count()")}} | {{Spec2("Console API")}} | Définition initiale |

## Compatibilité des navigateurs

{{Compat("api.Console.count")}}
