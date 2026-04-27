---
title: Type CSS `<ident>`
short-title: <ident>
slug: Web/CSS/Reference/Values/ident
l10n:
  sourceCommit: c88e03530319b73272fd4f9a9f6ebe878f026004
---

Le [type de donnée](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<ident>`** désigne une chaîne de caractères arbitraire utilisée comme {{Glossary("identifier", "identifiant")}}.

## Syntaxe

Un identifiant CSS se compose d'un ou plusieurs caractères, qui peuvent être&nbsp;:

- tout caractère {{Glossary("ASCII")}} dans les plages `A-Z` et `a-z`
- tout chiffre décimal (`0` à `9`)
- un tiret (`-`)
- un underscore (`_`)
- tout autre caractère {{Glossary("Unicode")}} `U+00A0` ou supérieur (c'est-à-dire tout autre caractère Unicode non-ASCII)
- un [caractère échappé](#échappement_de_caractères)

De plus, un identifiant ne doit pas commencer par un chiffre non échappé, ni par un tiret non échappé suivi d'un chiffre non échappé.

Notez que `id1`, `Id1`, `iD1` et `ID1` sont tous des identifiants différents car ils sont [sensibles à la casse](https://fr.wikipedia.org/wiki/Sensibilit%C3%A9_%C3%A0_la_casse). En revanche, comme il existe plusieurs façons d'échapper un caractère, `toto\?` et `toto\3F` sont le même identifiant.

### Échappement de caractères

{{Glossary("Escape character", "Échapper un caractère")}} signifie le représenter d'une manière qui modifie la façon dont il est interprété par un système logiciel. En CSS, vous pouvez échapper un caractère en ajoutant une barre oblique inverse (`\`) devant le caractère. Tout caractère, sauf les chiffres hexadécimaux `0-9`, `a-f` et `A-F`, peut être échappé de cette façon. Par exemple, `&` peut être échappé en `\&`.

Vous pouvez également échapper n'importe quel caractère avec une barre oblique inverse suivie du {{Glossary("code point", "point de code")}} {{Glossary("Unicode")}} du caractère, représenté par un à six chiffres hexadécimaux. Par exemple, `&` peut être échappé en `\26`. Dans ce cas, si le caractère échappé est suivi d'un chiffre hexadécimal, faites l'une des choses suivantes&nbsp;:

- Placez un espace ou un autre caractère d'espacement après le point de code Unicode.
- Fournissez le point de code Unicode complet à six chiffres du caractère à échapper.

Par exemple, la chaîne `&123` peut être échappée en `\26 123` (avec un espace) ou `\000026123` (avec le point de code Unicode à six chiffres pour `&`) afin de s'assurer que `123` n'est pas considéré comme faisant partie du motif d'échappement.

## Exemples

### Identifiants valides

```plain example-good
nono79        /* Un mélange de caractères alphanumériques et de chiffres */
ground-level  /* Un mélange de caractères alphanumériques et d'un tiret */
-test         /* Un tiret suivi de caractères alphanumériques */
--toto        /* Un identifiant de type propriété personnalisée */
_internal     /* Un underscore suivi de caractères alphanumériques */
\22 toto      /* Un caractère échappé suivi de caractères alphanumériques */
\000022toto   /* Identique à l'exemple précédent */
scooby\.doo   /* Un point correctement échappé */
🔥123         /* Un caractère non-ASCII suivi de chiffres */
```

### Invalid identifiers

```plain example-bad
34rem       /* Ne doit pas commencer par un chiffre décimal */
-12rad      /* Ne doit pas commencer par un tiret suivi d'un chiffre décimal */
scooby.doo  /* Les caractères ASCII autres qu'alphanumériques doivent être échappés */
'scoobyDoo' /* Interprété comme une chaîne */
"scoobyDoo" /* Interprété comme une chaîne */
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

_Ce type n'est pas un vrai type mais un type de commodité utilisé pour simplifier la définition d'autres syntaxes CSS, il n'existe donc pas d'informations de compatibilité navigateur à proprement parler._

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;custom-ident&gt;")}}
- Le type de donnée {{CSSxRef("&lt;dashed-ident&gt;")}}
