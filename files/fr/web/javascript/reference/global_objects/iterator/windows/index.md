---
title: "Iterator : méthode windows()"
short-title: windows()
slug: Web/JavaScript/Reference/Global_Objects/Iterator/windows
l10n:
  sourceCommit: d43ba33e72afa135ce782e2c0ca19fe32a93bb13
---

{{SeeCompatTable}}

La méthode **`windows()`** des instances de {{JSxRef("Iterator")}} retourne un nouvel [objet d'aide à l'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#objet_daide_à_litérateur) qui produit une fenêtre glissante d'éléments. Chaque fois que l'aide est itérée, elle produit un tableau en supprimant le premier élément de l'itération précédente et en ajoutant le prochain élément de l'itérateur original.

Pour obtenir des morceaux distincts, voir {{JSxRef("Iterator.prototype.chunks()")}}.

## Syntaxe

```js-nolint
windows(windowSize)
windows(windowSize, underSized)
```

### Paramètres

- `windowSize`
  - : Le nombre d'éléments dans la fenêtre glissante. Doit être un entier positif inférieur à 2<sup>32</sup> (la longueur maximale d'un tableau).
- `underSized` {{Optional_Inline}}
  - : Une chaîne de caractères définissant ce qu'il faut faire lorsque le nombre d'éléments dans l'itérateur est inférieur à `windowSize` mais supérieur à 0. Il peut s'agir de l'une des valeurs suivantes&nbsp;:
    - `"only-full"` (par défaut)
      - : Ignore la fenêtre partielle. L'itérateur retourné se termine immédiatement comme si l'entrée était vide.
    - `"allow-partial"`
      - : Rend tous les éléments de la fenêtre partielle sous forme de tableau (avec une longueur inférieure à `windowSize`).

    Notez que lorsque l'entrée est vide, l'itérateur retourné se termine toujours immédiatement sans produire de tableau vide.

### Valeur de retour

Un nouvel [objet d'aide à l'itérateur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Iterator#objet_daide_à_litérateur). La première fois que la méthode `next()` de l'aide à l'itérateur retourné est appelée, l'itérateur actuel est immédiatement avancé de `windowSize` éléments. Si autant d'éléments sont disponibles, ils sont produits ensemble sous forme de tableau. Sinon, le comportement dépend de l'argument `underSized`&nbsp;: l'itérateur se termine soit immédiatement sans produire quoi que ce soit (avec `"only-full"` ou avec une entrée complètement vide), soit un tableau de longueur inférieure à `windowSize` est produit.

Par la suite, à chaque fois, le tableau produit se compose du tableau précédent, de l'élément le plus à gauche supprimé, d'un nouvel élément récupéré dans l'itérable d'entrée ajouté. Lorsque l'itérable d'entrée est épuisé, l'aide à l'itérateur se termine également.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `windowSize` n'est pas un entier, ou si `underSized` n'est pas l'une des valeurs autorisées.
- {{JSxRef("RangeError")}}
  - : Levée si `windowSize` est inférieur à 1 ou supérieur à 2<sup>32</sup>－1.

## Exemples

### Moyenne mobile

L'exemple suivant crée un itérateur qui produit les termes de la suite de Fibonacci. Ensuite, un nouvel itérateur est créé, produisant à chaque fois la moyenne de deux éléments adjacents.

```js
function* fibonacci() {
  let current = 1;
  let next = 1;
  while (true) {
    yield current;
    [current, next] = [next, current + next];
  }
}

const averaged = fibonacci()
  .windows(2)
  .map((window) => (window[0] + window[1]) / 2);

console.log(averaged.next().value); // 1 (1, 1)
console.log(averaged.next().value); // 1.5 (1, 2)
console.log(averaged.next().value); // 2.5 (2, 3)
console.log(averaged.next().value); // 4 (3, 5)
```

Ce processus, connu sous le nom de moyenne mobile, est très utile dans le traitement du signal.

### Énumération des sous-chaînes de caractères

L'exemple suivant énumère toutes les sous-chaînes de caractères d'une longueur donnée dans une chaîne de caractères. La méthode `windows()` est utilisée pour créer une fenêtre glissante de caractères, qui sont ensuite joints pour former des sous-chaînes de caractères.

> [!NOTE]
> Cela est probablement beaucoup moins efficace que d'itérer manuellement un index numérique et d'appeler la méthode {{JSxRef("String.prototype.substring()")}}.

```js
const chaine = Iterator.from("MASSACHUSETTS");

const sousChaines = chaine.windows(3).map((window) => window.join(""));

for (const sousChaine of sousChaines) {
  console.log(sousChaine);
}
// MAS
// ASS
// SSA
// ...
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Iterator.prototype.windows` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#iterator-chunking)
- [La prothèse d'émulation es-shims de `Iterator.prototype.windows` <sup>(angl.)</sup>](https://www.npmjs.com/package/es-iterator-helpers)
- L'objet {{JSxRef("Iterator")}}
- La méthode {{JSxRef("Iterator.prototype.chunks()")}}
