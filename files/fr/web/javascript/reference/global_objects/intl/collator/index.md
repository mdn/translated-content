---
title: Intl.Collator
slug: Web/JavaScript/Reference/Global_Objects/Intl/Collator
tags:
  - Collator
  - Constructeur
  - Internationalisation
  - Intl
  - JavaScript
  - Reference
  - i18n
translation_of: Web/JavaScript/Reference/Global_Objects/Intl/Collator
original_slug: Web/JavaScript/Reference/Objets_globaux/Intl/Collator
---
{{JSRef}}

L'objet **`Intl.Collator`** est un constructeur de « collecteurs », des objets permettant de comparer des chaînes de caractères en tenant compte de la locale.

{{EmbedInteractiveExample("pages/js/intl-collator.html")}}

## Syntaxe

    new Intl.Collator([locales [, options]])

### Paramètres

- `locales`

  - : Une chaîne de caractères avec une balise de langue BCP 47 ou un tableau qui contient des chaînes dans ce format. Pour plus d'informations sur le format et l'interprétation de l'argument `locales`, voir la page {{jsxref("Objets_globaux/Intl", "Intl", "#Choix_de_la_locale")}}. Pour ce constructeur, les clés d'extensions Unicode suivantes sont acceptées :

    - `co`
      - : Les variantes dans les méthodes de regroupement (« collation ») des chaînes de caractères. Les valeurs autorisées pour cette clé sont : `"big5han", "dict", "direct", "ducet", "gb2312", "phonebk", "phonetic", "pinyin", "reformed", "searchjl", "stroke", "trad", "unihan"`. Les valeurs `"standard"` et `"search"` sont ignorées. Elles sont remplacées par la propriété `usage` de l'argument `options` (voir ci-après).
    - `kn`
      - : Indique si on ordonne les nombres (par exemple : "1" < "2" < "10"). Les valeurs possibles sont `"true"` et `"false"`. Cette option est également disponible via une propriété de l'objet `options`. Si l'extension Unicode et la propriété de l'objet `options` sont définies, ce sera cette dernière qui sera prise en compte.
    - `kf`
      - : Indique si on ordonne les majuscules avant les minuscules ou l'inverse. Les valeurs possibles sont `"upper"`, `"lower"`, ou `"false"` (on utilise alors l'ordre par défaut de la locale). Cette option est également disponible via une propriété de l'objet `options`. Si l'extension Unicode et la propriété de l'objet `options` sont définies, ce sera cette dernière qui sera prise en compte.

- `options`

  - : Un objet qui disposent des propriétés suivantes :

    - `localeMatcher`
      - : L'algorithme de correspondance à utiliser pour les locales. Les valeurs possibles sont `"lookup"` et `"best fit"`. La valeur par défaut est "best fit". Voir la {{jsxref("Objets_globaux/Intl", "Intl", "#Choix_de_la_locale")}} pour plus d'informations à ce sujet.
    - `usage`
      - : Indique l'usage de le comparaison : le tri ou la recherche de chaînes correspondantes. Les valeurs possibles sont "sort" pour le tri et "search" pour la recherche. La valeur par défaut est "sort".
    - `sensitivity`

      - : Indique les différences entre les chaînes de caractères qui font qu'une chaîne est considérée différente d'une autre. Les valeurs possibles sont :

        - `"base"` : Seules les chaînes dont les lettres de base sont différentes sont considérées inégales. Par exemple : a ≠ b, a = á, a = A.
        - `"accent"` : Seules les chaînes de caractères dont les lettres de bases ou les accents ou les autres marques diacritiques diffèrent sont considérées inégales. Par exemple : a ≠ b, a ≠ á, a = A.
        - `"case"` : Seules les chaines dont les lettres de base ou la casse sont diffèrent sont considérées comme inégales. Par exemple : a ≠ b, a = á, a ≠ A.
        - `"variant"` : Les chaînes qui diffèrent par leurs caractères de base, leurs accents et autres marques diacritiques, la casse sont considérées comme inégales. D'autres différences peuvent également être prises en compte. Par exemple : a ≠ b, a ≠ á, a ≠ A.

        La valeur par défaut est `"variant"` si on utilise la comparaison pour du tri (usage=`"sort"`). Pour l'utilisation `"search"` (recherche), la valeur par défaut dépend de la locale.

    - `ignorePunctuation`
      - : Indique si la ponctuation doit être ignorée. Les valeurs possibles sont `true` et `false`. La valeur par défaut est `false`.
    - `numeric`
      - : Indique si on ordonne les nombres (par exemple : "1" < "2" < "10"). Les valeurs possibles sont `true` et `false`. La valeur par défaut est `false`. Si l'extension Unicode correspondante et la propriété de l'objet `options` sont définies, ce sera cette dernière qui sera prise en compte.
    - `caseFirst`
      - : Indique si on ordonne les majuscules avant les minuscules ou l'inverse. Les valeurs possibles sont `"upper"`, `"lower"`, ou `"false"` (on utilise alors l'ordre par défaut de la locale), la valeur par défaut est `"false"`. Si l'extension Unicode correspondante et la propriété de l'objet `options` sont définies, ce sera cette dernière qui sera prise en compte.

## Description

L'objet `Intl.Collator` possède les propriétés et méthodes suivantes :

### Propriétés

- {{jsxref("Collator.prototype", "Intl.Collator.prototype")}}
  - : Permet d'ajouter des propriétés à toutes les instances.

### Méthodes

- {{jsxref("Collator.supportedLocalesOf", "Intl.Collator.supportedLocalesOf()")}}
  - : Renvoie un tableau qui contient les locales supportées pour lesquelles il n'est pas nécessaire de revenir à la locale par défaut de l'environnement.

## Instances de `Collator`

### Propriétés

Les instances de `Collator` héritent des propriétés suivantes grâce à leur prototype :

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Collator/prototype','Propriétés')}}

### Méthodes

Les instances de `Collator` héritent des méthodes suivantes grâce à leur prototype :

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Collator/prototype','Méthodes')}}

## Exemples

### Utiliser `Collator`

L'exemple qui suit illustre les différents résultats qu'on peut obtenir :

```js
console.log(new Intl.Collator().compare('a', 'c')); // → une valeur négative
console.log(new Intl.Collator().compare('c', 'a')); // → une valeur positive
console.log(new Intl.Collator().compare('a', 'a')); // → 0
```

Les résultats indiqués sont génériques et en pratique peuvent varier entre les navigateurs et les versions des navigateurs. En effet les valeurs obtenues dépendent de l'implémentation. Les spécifications indiquent uniquement le signe (positif ou négatif) du résultat.

### Utiliser `locales`

Les résultats fournis par {{jsxref("Collator.prototype.compare()")}} varient selon les locales. Afin d'obtenir le bon ordre lexicographique dans votre application, il est nécessaire de spécifier la locale de l'utilisateur (et éventuellement des locales pour des cas de replis) en utilisant l'argument `locales` :

```js
// en allemand, 'ä' est équivalent à 'a' pour le tri
console.log(new Intl.Collator("de").compare("ä", "z"));
// → une valeur négative

// en suédois, 'ä' arrive après 'z'
console.log(new Intl.Collator("sv").compare("ä", "z"));
// → une valeur positive
```

### Utiliser `options`

Les résultats fournis par {{jsxref("Collator.prototype.compare()")}} peuvent être adaptés grâce à l'argument `options` :

```js
// en allemand, 'ä' est composé de la lettre de base 'a'
console.log(new Intl.Collator("de", {sensitivity: "base"}).compare("ä", "a"));
// → 0

// en suédois, 'ä' et 'a' sont distincts en termes de base
console.log(new Intl.Collator("sv", {sensitivity: "base"}).compare("ä", "a"));
// → une valeur positive
```

## Spécifications

| Spécification                                                                            | État                             | Commentaires         |
| ---------------------------------------------------------------------------------------- | -------------------------------- | -------------------- |
| {{SpecName('ES Int 1.0', '#sec-10.1', 'Intl.Collator')}}             | {{Spec2('ES Int 1.0')}} | Définition initiale. |
| {{SpecName('ES Int 2.0', '#sec-10.1', 'Intl.Collator')}}             | {{Spec2('ES Int 2.0')}} |                      |
| {{SpecName('ES Int Draft', '#collator-objects', 'Intl.Collator')}} | {{Spec2('ES Int Draft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Intl.Collator")}}

## Voir aussi

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/Intl','Voir_aussi')}}
