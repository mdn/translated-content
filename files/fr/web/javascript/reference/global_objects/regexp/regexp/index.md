---
title: Constructeur RegExp()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
---

{{JSRef}}

Le constructeur **`RegExp`** crée une expression rationnelle pour manipuler les correspondances trouvées dans un texte par rapport à un motif.

Pour une introduction au sujet des expressions rationnelles, nous vous conseillons de lire [le chapitre sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_Expressions) du [Guide JavaScript](/fr/docs/Web/JavaScript/Guide).

{{EmbedInteractiveExample("pages/js/regexp-constructor.html")}}

## Syntaxe

Il est possible d'utiliser des syntaxes littérales, d'utiliser un constructeur ou la fonction directement&nbsp;:

```js
/motif/marqueurs
new RegExp(motif[, marqueurs])
RegExp(motif[, marqueurs])
```

### Paramètres

- `motif`

  - : Le texte de l'expression rationnelle.

    Avec ES5, ce peut être un autre objet `RegExp` ou une valeur littérale (uniquement lorsqu'on utilise la notation avec la fonction / le constructeur). Un motif peut contenir [des caractères spéciaux](/fr/docs/Web/JavaScript/Guide/Regular_Expressions) pour cibler un ensemble plus large de valeurs que ce que permet une chaîne de caractère littérale.

- `marqueurs`

  - : Si cet argument est utilisé, c'est une chaîne de caractères qui contient les marqueurs à ajouter à l'expression rationnelle.

    Si c'est un objet qui est fourni pour le motif, les marqueurs fournis par ce deuxième paramètre remplaceront les marqueurs provenant de l'objet (et `lastIndex` sera réinitialisé à `0`) (ES2015).

    Si `marqueurs` n'est pas indiqué comme argument et que le premier paramètre est un objet représentant une expression rationnelle, les marqueurs de ce dernier (y compris `lastIndex`) seront recopiés sur la nouvelle instance.

    `marqueurs` peut contenir toute combinaison avec les caractères suivants&nbsp;:

    - `d` (indices)
      - : Génère les indices des positions pour les sous-chaînes correspondantes.
    - `g` (recherche globale)
      - : Trouve l'ensemble des correspondances plutôt que de s'arrêter à la première.
    - `i` (sensibilité à la casse)
      - : Si le marqueur `u` est également activé, active le repliage de casse Unicode (<i lang="en">case folding</i>).
    - `m` (multiligne)
      - : Les caractères (`^` et `$`) fonctionnent sur plusieurs lignes. Autrement dit, ils correspondent aux débuts et aux fins de chaque ligne (délimitées par `\n` ou `\r`) et pas uniquement au début ou à la fin de la chaîne de caractère étudiée.
    - `s` ("dotAll")
      - : Permet à `.` de correspondre à des nouvelles lignes.
    - `u` (unicode)
      - : Traite `motif` comme une séquence de codets Unicode (voir aussi [les chaînes de caractères binaires](/fr/docs/Web/API/DOMString/Binary)).
    - `y` (adhérence)
      - : Ne cherche les correspondances dans la chaîne cible qu'à partir de l'indice porté par la propriété `lastIndex` de l'expression rationnelle. N'effectue pas de recherche sur des indices antérieurs.

### Exceptions

- Si `motif` ne peut être interprété comme une expression rationnelle valide, une exception [`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) sera levée.
- Si `marqueurs` contient des caractères répétés ou en dehors de ceux autorisés, une exception [`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError) sera levée.

## Exemples

### Notation littérale et constructeur

Il existe deux façons de créer un objet `RegExp`&nbsp;: en utilisant _une notation littérale_ ou _un constructeur_.

- **Pour la notation littérale**, les paramètres sont encadrés de barres obliques et on n'utilise pas de guillemets ou de quotes.
- **Pour le constructeur**, les paramètres sont délimités entre guillemets/quotes et pas avec des barres obliques.

Les trois expressions suivantes permettent de créer la même expression rationnelle&nbsp;:

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // Notation littérale
new RegExp("ab+c", "i"); // Constructeur
```

La notation littérale provoque la compilation de l'expression rationnelle lorsque l'expression est évaluée. On utilisera la notation littérale lorsque l'expression rationnelle demeure constante. Ainsi, si on utilise une notation littérale pour construire une expression rationnelle utilisée dans une boucle, l'expression rationnelle ne sera pas recompilée à chaque itération.

L'utilisation du constructeur (`new RegExp('ab+c')`) causera une compilation à l'exécution pour l'expression rationnelle. On utilisera le constructeur lorsqu'on sait que le motif changera ou qu'on ne connait pas, par avance le motif (par exemple s'il provient d'autre source).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le chapitre sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_Expressions) dans [le guide JavaScript](/fr/docs/Web/JavaScript/Guide)
- [`String.prototype.match()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [`String.prototype.replace()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [Une prothèse d'émulation pour certaines fonctionnalités `RegExp` (`dotAll`, marqueur d'adhérence, groupes de capture nommés, etc.) sur `core-js`](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
