---
title: "SyntaxError: identifier starts immediately after numeric literal"
slug: Web/JavaScript/Reference/Errors/Identifier_after_number
---

{{JSSidebar("Errors")}}

## Message

```
SyntaxError: Unexpected identifier after numeric literal (Edge)
SyntaxError: identifier starts immediately after numeric literal (Firefox)
SyntaxError: Unexpected number (Chrome)
```

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

Les noms qu'on donne aux variables (aussi appelés « identifiants ») doivent respecter certaines règles…

En JavaScript, un identifiant doit commencer par une lettre, un tiret bas (\_) ou un dollar ($), il ne peut pas commencer par un chiffre. Seuls les caractères après le premier peuvent être des chiffres.

## Exemples

### Des variables dont le nom commence par un chiffre

En JavaScript, les noms des variables ne peuvent pas commencer par un chiffre. Aussi, le script suivant provoquera des erreurs :

```js example-bad
var 1vie = 'toto';
// SyntaxError: identifier starts immediately after numeric literal

var toto = 1vie;
// SyntaxError: identifier starts immediately after numeric literal

alert(1.toto);
// SyntaxError: identifier starts immediately after numeric literal
```

Pour éviter ce problème, il faudra renommer les variables afin d'éviter d'utiliser un chiffre au début :

```js example-good
var vie1 = "toto";
var toto = vie1;
```

## Voir aussi

- [La grammaire lexicale de JavaScript](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale)
- [Les variables](/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Variables) dans le [Guide JavaScript](/fr/docs/Web/JavaScript/Guide)
