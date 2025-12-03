---
title: "@charset"
slug: Web/CSS/Reference/At-rules/@charset
original_slug: Web/CSS/@charset
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

La [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) [CSS](/fr/docs/Web/CSS) **`@charset`** spécifie l'encodage des caractères utilisé dans la feuille de style. Cette syntaxe est utile lorsque vous utilisez des caractères non-{{Glossary("ASCII")}} dans certaines propriétés CSS, comme {{ cssxref("content") }}. Bien que le premier caractère de `@charset` soit le symbole `@`, il ne s'agit pas d'une [règle at](/fr/docs/Web/CSS/Guides/Syntax/At-rules). C'est une séquence d'octets spécifique qui ne peut être placée qu'au tout début d'une feuille de style. Aucun autre caractère, à l'exception du marqueur d'ordre des octets Unicode, n'est autorisé avant. Elle ne suit pas non plus les règles habituelles de syntaxe CSS, comme l'utilisation de guillemets ou d'espaces.

Si un `@charset` n'est pas reconnu comme déclaration d'encodage, il est analysé comme une règle @ normale. Le module de [syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax) déconseille ce comportement de repli, le définissant comme une règle héritée non reconnue à ignorer lors de la vérification grammaticale d'une feuille de style.

Comme il existe plusieurs façons de définir l'encodage d'une feuille de style, le navigateur essaiera les méthodes suivantes dans l'ordre (et s'arrêtera dès qu'une méthode aboutit)&nbsp;:

1. La valeur du caractère [Indicateur d'ordre des octets](https://fr.wikipedia.org/wiki/Indicateur_d%27ordre_des_octets) placé au début du fichier.
2. La valeur donnée par l'attribut `charset` de l'en-tête HTTP `Content-Type:` ou l'équivalent dans le protocole utilisé pour servir la feuille de style.
3. La déclaration CSS `@charset`.
4. Utiliser l'encodage défini par le document référent&nbsp;: l'attribut `charset` de l'élément {{ HTMLElement("link") }}. Cette méthode est obsolète et ne doit pas être utilisée.
5. Supposer que le document est en UTF-8.

## Syntaxe

```css
@charset "UTF-8";
@charset "iso-8859-15";
```

### Paramètres

- `charset`
  - : Est une chaîne de caractères (une valeur CSS de type {{cssxref("&lt;string&gt;")}}) indiquant l'encodage qui doit être utilisé. Cette valeur doit correspondre à un nom d'encodage valide pour le Web tel que défini dans [le registre IANA <sup>(angl.)</sup>](https://www.iana.org/assignments/character-sets/character-sets.xhtml) et doit être délimitée par des doubles quotes, précédée d'un blanc (U+0020) et suivie d'un point-virgule. Si plusieurs noms sont associés avec l'encodage, seul celui marqué avec _préféré_ (_preferred_) doit être utilisé.

### Syntaxe formelle

Notez que la règle `@charset` n'est pas analysée via la syntaxe, mais via une séquence d'octets spécifique de la forme suivante&nbsp;:

```plain
@charset "<charset>";
```

## Exemples

### Déclarations de charset valides et invalides

```css example-good
@charset "UTF-8"; /* Valide, la feuille de style est encodée en Unicode UTF-8 */
```

```css-nolint example-bad
@charset 'iso-8859-15'; /* Invalide, guillemets incorrects utilisés */
@charset  "UTF-8"; /* Invalide, plus d'un espace */
 @charset "UTF-8"; /* Invalide, il y a un caractère (un espace) avant la règle @ */
@charset UTF-8; /* Invalide, le jeu de caractères n'est pas une chaîne CSS ({{cssxref("&lt;string&gt;")}}) */
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{Glossary("Character_set", "Jeu de caractères")}} dans le glossaire
- {{Glossary("Unicode", "Unicode")}} dans le glossaire
