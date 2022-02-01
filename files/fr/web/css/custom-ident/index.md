---
title: <custom-ident>
slug: Web/CSS/custom-ident
tags:
  - CSS
  - Reference
  - Type
translation_of: Web/CSS/custom-ident
---
{{CSSRef}}

Le type de données CSS **`<custom-ident>`** permet de représenter des chaînes de caractères arbitraires définies par l'utilisateur et qui sont utilisées comme identifiants. Ce type de données est sensible à la casse et pour chaque contexte d'utilisation, plusieurs valeurs sont exclues afin d'éviter des ambiguïtés et des erreurs.

## Syntaxe

La syntaxe est proche de celle utilisée pour les identifiants CSS. Une valeur `<custom-ident>` est sensible à la casse et est une séquence de caractères dont les caractères peuvent être :

- n'importe quel caractère alphanumérique (`A` à `Z` ou `a` à `z`),
- n'importe quel chiffre (`0` à `9`),
- un tiret (`-`)
- un tiret bas (_underscore_) (`_`),
- un caractère échappé via une barre oblique inversée (`\`),
- un caractère [Unicode](http://en.wikipedia.org/wiki/Unicode) (une barre oblique inversée suivie d'un à six chiffres hexadécimaux représentant le point de code Unicode).

Le premier caractère de l'identifiant ne doit pas être un chiffre, un tiret suivi d'un chiffre ou un tiret suivi d'un autre tiret. Une valeur `<custom-ident>` ne doit pas être encadrée entre quotes ou entre doubles quotes car ce serait alors une valeur {{cssxref("&lt;string&gt;")}}.

On notera que `id1`, `Id1`, `iD1` et `ID1` sont des identifiants différents car leurs casses sont différentes. En revanche, il existe plusieurs façons d'échapper un même caractère et `toto\?` et `toto\3F` représentent donc le même identifiant.

### Liste des valeurs interdites

Afin d'éviter des ambiguïtés dangereuses, chaque propriété qui utilise `<custom-ident>` définit également une liste de valeurs interdites :

- {{cssxref("animation-name")}}
  - : Interdit d'utiliser les valeurs CSS globales `unset`, `initial` et `inherit` ainsi que la valeur `none`.
- {{cssxref("counter-reset")}}

  {{cssxref("counter-increment")}}

  - : Interdit d'utiliser les valeurs CSS globales `unset`, `initial` et `inherit` ainsi que la valeur `none`.

- {{cssxref("@counter-style")}}

  {{cssxref("list-style-type")}}

  - : Interdit d'utiliser les valeurs CSS globales `unset`, `initial` et `inherit` ainsi que les valeurs `none`, `inline`, `outside` et d'autres valeurs prédéfinies, implémentées par les différents navigateurs : `disc`, `circle`, `square`, `decimal`, `cjk-decimal`, `decimal-leading-zero`, `lower-roman`, `upper-roman`, `lower-greek`, `lower-alpha`, `lower-latin`, `upper-alpha`, `upper-latin`, `arabic-indic`, `armenian`, `bengali`, `cambodian`, `cjk-earthly-branch`, `cjk-heavenly-stem`, `cjk-ideographic`, `devanagari`, `ethiopic-numeric`, `georgian`, `gujarati`, `gurmukhi`, `hebrew`, `hiragana`, `hiragana-iroha`, `japanese-formal`, `japanese-informal`, `kannada`, `katakana`, `katakana-iroha`, `khmer`, `korean-hangul-formal`, `korean-hanja-formal`, `korean-hanja-informal`, `lao`, `lower-armenian`, `malayalam`, `mongolian`, `myanmar`, `oriya`, `persian`, `simp-chinese-formal`, `simp-chinese-informal`, `tamil`, `telugu`, `thai`, `tibetan`, `trad-chinese-formal`, `trad-chinese-informal`, `upper-armenian`, `disclosure-open` et `disclosure-close`.

- {{cssxref("grid-row-start")}}
  {{cssxref("grid-row-end")}}
  {{cssxref("grid-column-start")}}
  {{cssxref("grid-column-end")}}
  - : Interdisent la valeur `span`.
- {{cssxref("will-change")}}
  - : Interdit d'utiliser les valeurs CSS globales `unset`, `initial` et `inherit` ainsi que les valeurs `will-change`, `auto`, `scroll-position` et `contents`.

## Exemples

Voici des identifiants valides

    nono79            Un mélange de caractères alphanumériques.
    ground-level      Un mélange de caractères alphanumériques avec un tiret.
    -test             Un tiret suivi d'un mélange de caractères alphanumériques.
    _internal         Un tiret bas suivi d'un mélange de caractères alphanumériques.
    \22 toto          Un caractère Unicode suivi par une série de caractères alphanumériques.
    bili\.bob         Le point est bien échappé.

Voici des identifiants invalides :

    34rem             Il ne doit pas démarrer par un chiffre.
    -12rad            Il ne doit pas démarrer par un tiret suivi d'un chiffre.
    bili.bob          Il ne doit contenir que des caractères alphanumériques. _ et - n'ont pas besoin d'être échappés.
    --toto            Il ne doit pas démarrer avec deux tirets.
    'bilibob'         Ce n'est pas une valeur <user-ident> mais une {{cssxref("&lt;string&gt;")}}.
    "bilibob"         Ce n'est pas une valeur <user-ident> mais une {{cssxref("&lt;string&gt;")}}.

## Spécifications

| Spécification                                                                                                                                                                        | État                                         | Commentaires                                                                                                                                                                                         |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS Will Change', '#valdef-will-change-custom-ident', '<code>&lt;custom-ident&gt;</code> for <code>will-change</code>')}}     | {{Spec2('CSS Will Change')}}         | Définition des valeurs exclues pour {{cssxref("will-change")}}.                                                                                                                            |
| {{SpecName('CSS3 Counter Styles', '#typedef-counter-style-name', '<code>&lt;custom-ident&gt;</code> for <code>list-style-type</code>')}} | {{Spec2('CSS3 Counter Styles')}} | Utilisation de `<custom-ident>` à la place d'une liste finie de mots-clés. Définition des valeurs exclues pour {{cssxref("list-style-type")}} et {{cssxref("@counter-style")}}. |
| {{SpecName('CSS3 Lists', '#counter-properties', '<code>&lt;custom-ident&gt;</code> for <code>counter-*</code>')}}                             | {{Spec2('CSS3 Lists')}}             | `<identifier>` est renommé en `<custom-ident>`. Son utilisation est ajoutée pour la propriété `counter-set`.                                                                                         |
| {{SpecName('CSS3 Animations', '#typedef-single-animation-name', '<code>&lt;custom-ident&gt;</code> for <code>animation-name</code>')}} | {{Spec2('CSS3 Animations')}}         | Définition des valeurs exclues pour {{cssxref("animation-name")}}.                                                                                                                        |
| {{SpecName('CSS3 Values', '#identifier-value', '<code>&lt;custom-ident&gt;</code>')}}                                                                     | {{Spec2('CSS3 Values')}}             | `<identifier>` est renommé en `<custom-ident>`. Devient un pseudo-type et est lié aux différents cas d'utilisation pour la définition des valeurs exclues.                                           |
| {{SpecName('CSS2.1', 'syndata.html#value-def-identifier', '<code>&lt;identifier&gt;</code>')}}                                                         | {{Spec2('CSS2.1')}}                     | Définition initiale.                                                                                                                                                                                 |

## Compatibilité des navigateurs

_Ce type de données n'est pas un type de données « réel » mais un type artificiel permettant de simplifier la description des valeurs permises. Il n'y a donc pas de données de compatibilité stricto sensu._

## Voir aussi

- {{CSSxRef("&lt;ident&gt;")}}
- [Les différents types de données CSS](/fr/docs/tag/Type)
