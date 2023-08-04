---
title: "SyntaxError: unterminated string literal"
slug: Web/JavaScript/Reference/Errors/Unterminated_string_literal
---

{{jsSidebar("Errors")}}

## Message

```
SyntaxError: Unterminated string constant (Edge)
SyntaxError: unterminated string literal (Firefox)
```

## Type d'erreur

{{jsxref("SyntaxError")}}

## Quel est le problème ?

Une chaîne de caractères ({{jsxref("String")}}) n'est pas bien délimitée quelque part. Les littéraux de chaînes de caractères doivent être délimités par des simples quotes (') ou par des doubles quotes ("). [Les séquences d'échappement](/fr/docs/Web/JavaScript/Reference/Objets_globaux/String#Échappement_des_caractères) permet de représenter dans ces chaînes de caractères. Pour réparer cette erreur :

- Vérifiez que la chaîne est bien délimitée au début et à la fin par des doubles quotes ou par des simples quotes,
- Vérifiez que les caractères spéciaux de la chaîne ont bien été échappés,
- Vérifiez que le littéral est bien découpé pour gérer plusieurs lignes (si c'est le cas).

## Exemples

### Gérer plusieurs lignes

En JavaScript, on ne peut pas écrire une chaîne simple sur plusieurs lignes comme ceci :

```js example-bad
var longString = "This is a very long string which needs
                  to wrap across multiple lines because
                  otherwise my code is unreadable.";
// SyntaxError: unterminated string literal
```

Pour écrire une chaîne sur plusieurs lignes, on pourra utiliser :

- [L'opérateur +](</fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_arithmétiques#Addition_()>),
- Une barre oblique inversée ("\\")
- [Des littéraux de gabarits](/fr/docs/Web/JavaScript/Reference/Littéraux_gabarits)

Voici la première variante avec l'opérateur de concaténation :

```js example-good
var longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";
```

Sinon, on peut utiliser une barre oblique inversée à la fin de chaque ligne pour indiquer qu'elle continue sur la ligne suivante. Attention, il faudra qu'il n'y ait aucun espace ou autre caractère après la barre oblique (il peut bien entendu y avoir un saut de ligne) :

```js example-good
var longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";
```

On pourra également utiliser [les littéraux de gabarits](/fr/docs/Web/JavaScript/Reference/Littéraux_gabarits) qui sont pris en charge par les environnement ECMAScript 2015 :

```js example-good
var longString = `This is a very long string which needs
                  to wrap across multiple lines because
                  otherwise my code is unreadable.`;
```

## Voir aussi

- {{jsxref("String")}}
- [Les littéraux de gabarits](/fr/docs/Web/JavaScript/Reference/Littéraux_gabarits)
