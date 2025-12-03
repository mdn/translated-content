---
title: <custom-ident>
slug: Web/CSS/Reference/Values/custom-ident
original_slug: Web/CSS/custom-ident
l10n:
  sourceCommit: f69b6693212029ce4b9fa0c753729044577af548
---

Le [type de données](/fr/docs/Web/CSS/Reference/Values/Data_types) [CSS](/fr/docs/Web/CSS) **`<custom-ident>`** désigne une chaîne de caractères arbitraire définie par l'utilisateur·ice et utilisée comme {{Glossary("identifier", "identifiant")}}. Elle est sensible à la casse et certaines valeurs sont interdites dans divers contextes pour éviter toute ambiguïté.

## Syntaxe

La syntaxe est proche de celle utilisée pour les identifiants CSS. Une valeur `<custom-ident>` est [sensibles à la casse](https://fr.wikipedia.org/wiki/Sensibilit%C3%A9_%C3%A0_la_casse) et est une séquence de caractères dont les caractères peuvent être&nbsp;:

- n'importe quel caractère alphanumérique (`A` à `Z` ou `a` à `z`),
- n'importe quel chiffre (`0` à `9`),
- un tiret (`-`)
- un tiret bas (_underscore_) (`_`),
- un [caractère échappé](#caractères_échappés) via une barre oblique inversée (`\`),
- un caractère [Unicode](https://fr.wikipedia.org/wiki/Unicode) (une barre oblique inversée suivie d'un à six chiffres hexadécimaux représentant le point de code Unicode).

On notera que `id1`, `Id1`, `iD1` et `ID1` sont des identifiants différents car ils sont [sensibles à la casse](https://fr.wikipedia.org/wiki/Sensibilit%C3%A9_%C3%A0_la_casse).

### Caractères échappés

N'importe quel point de code Unicode peut être inclus dans un `<custom-ident>` ou une chaîne de caractères {{CSSxRef("string")}} entre guillemets en l'échappant.

En CSS, il existe plusieurs façons d'échapper un caractère. Les séquences d'échappement commencent par une barre oblique inversée (`\`)&nbsp;:

- D'un à six chiffres hexadécimaux (`ABCDEF0123456789`). Les chiffres hexadécimaux peuvent être suivis d'un espace. La séquence d'échappement hexadécimale est remplacée par le point de code Unicode correspondant à la valeur indiquée. L'espace permet de distinguer la séquence d'échappement d'autres chiffres hexadécimaux qui suivraient.
- De tout point de code Unicode qui n'est pas un chiffre hexadécimal ni un saut de ligne.

Exemples&nbsp;:

- «&nbsp;&B&nbsp;» peut s'écrire `\26 B` ou `\000026B`.
- «&nbsp;hi.there&nbsp;» peut s'écrire `hi\.there` ou `hi\002Ethere`.
- «&nbsp;toto&nbsp;?&nbsp;» peut s'écrire `toto\?`, `toto\3F` ou `toto\00003F`.

Pour inclure un espace réel après une séquence d'échappement, il faut inclure deux espaces dans la séquence d'échappement.

### Valeurs interdites

Une valeur `<custom-ident>` ne doit pas être placée entre des guillemets simples ou doubles, car cela correspondrait à une {{CSSxRef("&lt;string&gt;")}}. De plus, le premier caractère ne doit pas être un chiffre décimal, ni un tiret (`-`) suivi d'un chiffre décimal.

Pour éviter toute ambiguïté, chaque propriété qui utilise `<custom-ident>` interdit l'utilisation de certaines valeurs&nbsp;:

- {{CSSxRef("animation-name")}}
  - : Interdit d'utiliser les valeurs CSS globales `unset`, `initial` et `inherit` ainsi que la valeur `none`.
- {{CSSxRef("counter-reset")}}, {{CSSxRef("counter-increment")}}
  - : Interdit d'utiliser les valeurs CSS globales `unset`, `initial` et `inherit` ainsi que la valeur `none`.
- {{CSSxRef("@counter-style")}}, {{CSSxRef("list-style-type")}}
  - : Interdit d'utiliser les valeurs CSS globales `unset`, `initial` et `inherit` ainsi que les valeurs&nbsp;:
    - `none`
    - `inline`
    - `outside`

    De plus, de nombreuses valeurs prédéfinies sont implémentées par les différents navigateurs&nbsp;:
    - `disc`
    - `circle`
    - `square`
    - `decimal`
    - `cjk-decimal`
    - `decimal-leading-zero`
    - `lower-roman`
    - `upper-roman`
    - `lower-greek`
    - `lower-alpha`
    - `lower-latin`
    - `upper-alpha`
    - `upper-latin`
    - `arabic-indic`
    - `armenian`
    - `bengali`
    - `cambodian`
    - `cjk-earthly-branch`
    - `cjk-heavenly-stem`
    - `cjk-ideographic`
    - `devanagari`
    - `ethiopic-numeric`
    - `georgian`
    - `gujarati`
    - `gurmukhi`
    - `hebrew`
    - `hiragana`
    - `hiragana-iroha`
    - `japanese-formal`
    - `japanese-informal`
    - `kannada`
    - `katakana`
    - `katakana-iroha`
    - `khmer`
    - `korean-hangul-formal`
    - `korean-hanja-formal`
    - `korean-hanja-informal`
    - `lao`
    - `lower-armenian`
    - `malayalam`
    - `mongolian`
    - `myanmar`
    - `oriya`
    - `persian`
    - `simp-chinese-formal`
    - `simp-chinese-informal`
    - `tamil`
    - `telugu`
    - `thai`
    - `tibetan`
    - `trad-chinese-formal`
    - `trad-chinese-informal`
    - `upper-armenian`
    - `disclosure-open`
    - `disclosure-close`

- {{CSSxRef("grid-row-start")}}, {{CSSxRef("grid-row-end")}}, {{CSSxRef("grid-column-start")}}, {{CSSxRef("grid-column-end")}}, {{CSSxRef("grid-template-rows")}}, {{CSSxRef("grid-template-columns")}}
  - : Interdisent les valeurs `span` et `auto`.
- {{CSSxRef("view-transition-name")}}
  - : Interdit d'utiliser les valeurs CSS globales `unset`, `initial` et `inherit` ainsi que la valeur `none`.
- {{CSSxRef("will-change")}}
  - : Interdit d'utiliser les valeurs CSS globales `unset`, `initial` et `inherit` ainsi que les valeurs `will-change`, `auto`, `scroll-position` et `contents`.

## Exemples

### Identifiants valides

```plain example-good
nono79            Un mélange de caractères alphanumériques.
ground-level      Un mélange de caractères alphanumériques avec un tiret.
-test             Un tiret suivi d'un mélange de caractères alphanumériques.
_internal         Un tiret bas suivi d'un mélange de caractères alphanumériques.
\22 toto          Un caractère Unicode suivi par une série de caractères alphanumériques.
bili\.bob         Le point est bien échappé.
```

### Identifiants invalides

```plain example-bad
34rem             Il ne doit pas démarrer par un chiffre.
-12rad            Il ne doit pas démarrer par un tiret suivi d'un chiffre.
bili.bob          Il ne doit contenir que des caractères alphanumériques. _ et - n'ont pas besoin d'être échappés.
--toto            Il ne doit pas démarrer avec deux tirets.
'bilibob'         Ce n'est pas une valeur <user-ident> mais une {{CSSxRef("&lt;string&gt;")}}.
"bilibob"         Ce n'est pas une valeur <user-ident> mais une {{CSSxRef("&lt;string&gt;")}}.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

_Ce type n'est pas un véritable type mais un type de commodité utilisé pour simplifier la description des valeurs autorisées&nbsp;; il n'existe donc pas d'informations de compatibilité des navigateurs pour celui-ci._

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;ident&gt;")}}
- Le type de donnée {{CSSxRef("&lt;dashed-ident&gt;")}}
