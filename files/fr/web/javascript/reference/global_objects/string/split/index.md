---
title: "String : méthode split()"
short-title: split()
slug: Web/JavaScript/Reference/Global_Objects/String/split
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`split()`** des valeurs {{JSxRef("String")}} prend un motif et divise cette chaîne de caractères en une liste ordonnée de sous-chaînes de caractères en recherchant le motif, place ces sous-chaînes de caractères dans un tableau et retourne le tableau.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.split()", "taller")}}

```js interactive-example
const str = "Le renard brun rapide saute par-dessus le chien paresseux.";

const words = str.split(" ");
console.log(words[3]);
// Résultat attendu : "renard"

const chars = str.split("");
console.log(chars[8]);
// Résultat attendu : "d"

const strCopy = str.split();
console.log(strCopy);
// Résultat attendu : Array ["Le renard brun rapide saute par-dessus le chien paresseux."]
```

## Syntaxe

```js-nolint
split(separator)
split(separator, limit)
```

### Paramètres

- `separator`
  - : Le motif décrivant où chaque découpe doit se produire. Peut être `undefined`, une chaîne de caractères, ou un objet avec une méthode [`Symbol.split`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split) — l'exemple typique étant une {{JSxRef("RegExp", "expression rationnelle", "", 1)}}. Omettre `separator` ou passer `undefined` fait que `split()` retourne un tableau avec la chaîne de caractères appelante comme unique élément. Toutes les valeurs qui ne sont pas `undefined` ou des objets avec une méthode `[Symbol.split]()` sont [converties en chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères).
- `limit` {{Optional_Inline}}
  - : Un entier non négatif définissant une limite sur le nombre de sous-chaînes de caractères à inclure dans le tableau. Si fourni, divise la chaîne de caractères à chaque occurrence du `separator` défini, mais s'arrête lorsque `limit` entrées ont été placées dans le tableau. Tout texte restant n'est pas inclus dans le tableau.
    - Le tableau peut contenir moins d'entrées que `limit` si la fin de la chaîne de caractères est atteinte avant d'atteindre la limite.
    - Si `limit` est `0`, `[]` est retourné.

### Valeur de retour

Si `separator` est une chaîne de caractères, un tableau ({{JSxRef("Array")}}) de chaînes de caractères est retourné, découpé à chaque point où le `separator` apparaît dans la chaîne de caractères donnée.

Si `separator` est une expression rationnelle, le tableau retourné ({{JSxRef("Array")}}) contient également les [groupes capturés](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group) pour chaque correspondance du séparateur&nbsp;; voir ci-dessous pour plus de détails. Les groupes capturés peuvent ne pas correspondre, auquel cas ils sont `undefined` dans le tableau.

Si `separator` a une méthode personnalisée `[Symbol.split]()`, sa valeur de retour est directement retournée.

## Description

Si `separator` est une chaîne de caractères non vide, la chaîne de caractères cible est découpée à chaque occurrence de `separator`, sans inclure `separator` dans les résultats. Par exemple, une chaîne de caractères contenant des valeurs séparées par des tabulations (TSV) peut être analysée en passant un caractère de tabulation comme séparateur, par exemple avec `myString.split("\t")`. Si `separator` contient plusieurs caractères, toute cette séquence de caractères doit être présente pour effectuer le découpage. Si `separator` apparaît au début ou à la fin de la chaîne de caractères, il provoque tout de même un découpage, ce qui fait apparaître une chaîne de caractères vide (c'est-à-dire de longueur nulle) à la première ou à la dernière position du tableau retourné. Si `separator` n'apparaît pas dans `str`, le tableau retourné contient un seul élément constitué de la chaîne de caractères entière.

Si `separator` est une chaîne de caractères vide (`""`), `str` est convertie en un tableau contenant chacun de ses «&nbsp;caractères&nbsp;» UTF-16, sans chaîne de caractères vide à l'une ou l'autre extrémité de la chaîne de caractères obtenue.

> [!NOTE]
> `"".split("")` est donc la seule façon de produire un tableau vide lorsqu'une chaîne de caractères est passée comme `separator` et que `limit` n'est pas `0`.

> [!WARNING]
> Lorsque la chaîne de caractères vide (`""`) sert de séparateur, la chaîne de caractères n'est **pas** découpée en _caractères perçus par l'utilisateur·ice_ ([groupes de graphèmes <sup>(angl.)</sup>](https://unicode.org/reports/tr29/#Grapheme_Cluster_Boundaries)) ni en caractères Unicode (points de code), mais en unités de code UTF-16. Cela détruit les [paires de substitution <sup>(angl.)</sup>](https://unicode.org/faq/utf_bom.html#utf16-2). Consultez [«&nbsp;Comment obtenir un tableau de caractères à partir d'une chaîne de caractères en JavaScript&nbsp;?&nbsp;» sur Stack Overflow <sup>(angl.)</sup>](https://stackoverflow.com/questions/4547609/how-to-get-character-array-from-a-string/34717402#34717402).

Si `separator` est une expression rationnelle qui correspond à des chaînes de caractères vides, le fait que la correspondance soit découpée en unités de code UTF-16 ou en points de code Unicode dépend de la [sensibilité à l'Unicode](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode#mode_sensible_à_lunicode) par l'expression rationnelle.

```js
"😄😄".split(/(?:)/); // [ "\ud83d", "\ude04", "\ud83d", "\ude04" ]
"😄😄".split(/(?:)/u); // [ "😄", "😄" ]
```

Si `separator` est une expression rationnelle avec des groupes de capture, chaque correspondance de `separator` insère les groupes capturés (y compris les éventuels résultats `undefined`) dans le tableau de sortie. Ce comportement est défini par la méthode [`Symbol.split`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split) de l'expression rationnelle.

Si `separator` est un objet doté d'une méthode [`Symbol.split`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/split), cette méthode est appelée avec la chaîne de caractères cible et `limit` comme arguments, et avec `this` défini sur l'objet. Sa valeur de retour devient celle de `split`.

Toute autre valeur est contrainte en chaîne de caractères avant de servir de séparateur.

## Exemples

### Utiliser la méthode `split()`

Lorsque la chaîne de caractères est vide et qu'un séparateur non vide est défini, `split()` retourne `[""]`. Si la chaîne de caractères et le séparateur sont tous deux des chaînes de caractères vides, un tableau vide est retourné.

```js
const chaineDeCaracteresVide = "";

// la chaîne de caractères est vide et le séparateur n'est pas vide
console.log(chaineDeCaracteresVide.split("a"));
// [""]

// la chaîne de caractères et la séparateur sont tous deux des chaînes de caractères vides
console.log(chaineDeCaracteresVide.split(chaineDeCaracteresVide));
// []
```

L'exemple suivant définit une fonction qui divise une chaîne de caractères en un tableau de chaînes de caractères en utilisant `separator`. Après avoir divisé la chaîne de caractères, la fonction affiche des messages indiquant la chaîne de caractères d'origine (avant la division), le séparateur utilisé, le nombre d'éléments dans le tableau et les éléments individuels du tableau.

```js
function diviserChaineDeCaracteres(stringToSplit, separator) {
  const tableauDeChainesCaracteres = stringToSplit.split(separator);

  console.log(`La chaîne de caractères d'origine est : ${stringToSplit}`);
  console.log(`Le délimiteur est : ${separator}`);
  console.log(
    `Le tableau comporte ${tableauDeChainesCaracteres.length} éléments : `,
    tableauDeChainesCaracteres.join(" / "),
  );
}

const chaineDeCaracteresTempest =
  "Ô merveilleux nouveau monde qui abrite de telles personnes.";
const chaineDeCaracteresMois =
  "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

const espace = " ";
const virgule = ",";

diviserChaineDeCaracteres(chaineDeCaracteresTempest, espace);
diviserChaineDeCaracteres(chaineDeCaracteresTempest);
diviserChaineDeCaracteres(chaineDeCaracteresMois, virgule);
```

Cet exemple produit la sortie suivante&nbsp;:

```plain
La chaîne de caractères d'origine est : "Ô merveilleux nouveau monde qui abrite de telles personnes."
Le délimiteur est : " "
Le tableau comporte 9 elements : Ô / merveilleux / nouveau / monde / qui / abrite / de / telles / personnes. /

La chaîne de caractères d'origine est : "Ô merveilleux nouveau monde qui abrite de telles personnes."
Le délimiteur est : "undefined"
Le tableau comporte 1 elements : Ô merveilleux nouveau monde qui abrite de telles personnes. /

La chaîne de caractères d'origine est : "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
Le délimiteur est : ","
Le tableau comporte 12 elements : Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec /
```

### Supprimer les espaces d'une chaîne de caractères

Dans l'exemple suivant, la fonction `split()` recherche zéro ou plusieurs espaces, suivis d'un point-virgule, puis de zéro ou plusieurs espaces — et, lorsqu'elle les trouve, elle supprime les espaces et le point-virgule de la chaîne de caractères. `listeNom` est le tableau retourné par la fonction `split()`.

```js
const noms = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(noms);

const re = /\s*(;|$)\s*/;
const listeNom = noms.split(re);

console.log(listeNom);
```

Cela génère deux lignes&nbsp;; la première ligne affiche la chaîne de caractères d'origine, et la seconde ligne affiche le tableau obtenu.

```plain
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
["Harry Trump","Fred Barney","Helen Rigby","Bill Abel","Chris Hand"]
```

### Retourner un nombre limité de sous-chaînes de caractères

Dans l'exemple suivant, `split()` recherche des espaces dans une chaîne de caractères et retourne les 3 premières sous-chaînes de caractères qui correspondent.

```js
const maChaineDeCaracteres = "Bonjour le monde. Comment allez-vous ?";
const separations = maChaineDeCaracteres.split(" ", 3);

console.log(separations); // [ "Bonjour", "le "monde." ]
```

### Séparer avec une `RegExp` pour inclure des parties du séparateur dans le résultat

Si `separator` est une expression rationnelle qui contient des parenthèses de capture `( )`, les résultats correspondants sont inclus dans le tableau.

```js
const maChaineDeCaracteres = "Bonjour 1 le monde. Séquence numéro 2.";
const separations = maChaineDeCaracteres.split(/(\d)/);

console.log(separations);
// [ "Bonjour ", "1", " le monde. Séquence numéro ", "2", "." ]
```

> [!NOTE]
> `\d` correspond à la [classe de caractères](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Character_classes) pour les chiffres entre 0 et 9.

### Utiliser un séparateur personnalisé

L'exemple suivant divise une chaîne de caractères en utilisant un état interne constitué d'un nombre croissant&nbsp;:

L'exemple suivant divise une chaîne de caractères en utilisant un état interne constitué d'un nombre croissant&nbsp;:

```js
const separerParNombre = {
  [Symbol.split](chaine) {
    let nombre = 1;
    let pos = 0;
    const resultat = [];
    while (pos < chaine.length) {
      const positionCorrespondante = chaine.indexOf(nombre, pos);
      if (positionCorrespondante === -1) {
        resultat.push(chaine.substring(pos));
        break;
      }
      resultat.push(chaine.substring(pos, positionCorrespondante));
      pos = positionCorrespondante + String(nombre).length;
      nombre++;
    }
    return resultat;
  },
};

const maChaineDeCaracteres = "a1bc2c5d3e4f";
console.log(maChaineDeCaracteres.split(separerParNombre)); // [ "a", "bc", "c5d", "e", "f" ]
```

L'exemple suivant utilise un état interne pour appliquer un certain comportement et pour s'assurer qu'un résultat «&nbsp;valide&nbsp;» est produit.

```js
const DELIMITATION = ";";

// Sépare les commandes, mais supprime toutes les valeurs invalides ou inutiles.
const separerCommandes = {
  [Symbol.split](chaine, limite) {
    const resultats = [];
    const etat = {
      on: false,
      brightness: {
        current: 2,
        min: 1,
        max: 3,
      },
    };
    let pos = 0;
    let positionCorrespondante = chaine.indexOf(DELIMITATION, pos);

    while (positionCorrespondante !== -1) {
      const sousChaineDeCaracteres = chaine
        .slice(pos, positionCorrespondante)
        .trim();

      switch (sousChaineDeCaracteres) {
        case "light on":
          // Si l'état `on` est déjà vrai, ne rien faire.
          if (!etat.on) {
            etat.on = true;
            resultats.push(sousChaineDeCaracteres);
          }
          break;

        case "light off":
          // Si l'état `on` est déjà faux, ne rien faire.
          if (etat.on) {
            etat.on = false;
            resultats.push(sousChaineDeCaracteres);
          }
          break;

        case "brightness up":
          // Applique un maximum de luminosité.
          if (etat.brightness.current < etat.brightness.max) {
            etat.brightness.current += 1;
            resultats.push(sousChaineDeCaracteres);
          }
          break;

        case "brightness down":
          // Applique un minimum de luminosité.
          if (etat.brightness.current > etat.brightness.min) {
            etat.brightness.current -= 1;
            resultats.push(sousChaineDeCaracteres);
          }
          break;
      }

      if (resultats.length === limite) {
        break;
      }

      pos = positionCorrespondante + DELIMITATION.length;
      positionCorrespondante = chaine.indexOf(DELIMITATION, pos);
    }

    // Si nous avons interrompu l'exécution prématurément parce que la limite `lim` a été atteinte, ne pas ajouter les commandes restantes.
    if (resultats.length < limite) {
      resultats.push(chaine.slice(pos).trim());
    }

    return resultats;
  },
};

const commandes =
  "light on; brightness up; brightness up; brightness up; light on; brightness down; brightness down; light off";
console.log(commandes.split(separerCommandes, 3)); // ["light on", "brightness up", "brightness down"]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.split` dans `core-js` avec des corrections et l'implémentation du comportement moderne comme la prise en charge de `Symbol.split` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.split` <sup>(angl.)</sup>](https://www.npmjs.com/package/string.prototype.split)
- Le guide [des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)
- La méthode {{JSxRef("String.prototype.charAt()")}}
- La méthode {{JSxRef("String.prototype.indexOf()")}}
- La méthode {{JSxRef("String.prototype.lastIndexOf()")}}
- La méthode {{JSxRef("Array.prototype.join()")}}
