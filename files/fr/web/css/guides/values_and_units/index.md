---
title: Valeurs et unités CSS
slug: Web/CSS/Guides/Values_and_units
original_slug: Web/CSS/CSS_values_and_units
l10n:
  sourceCommit: bc761c19c07b875eb889d4aad87b18d8443da339
---

Chaque déclaration CSS se compose d'une paire propriété/valeur. La valeur peut prendre diverses formes selon la propriété, comme un entier unique, un mot-clé, une fonction ou une combinaison de différents éléments&nbsp;; certaines valeurs ont des unités, tandis que d'autres n'en ont pas. Chaque propriété accepte également les valeurs CSS globales. Le module des valeurs et unités CSS définit les types de données — valeurs et unités — que les propriétés CSS acceptent. Ce module définit également la syntaxe de définition des valeurs CSS, ou grammaire formelle, utilisée pour définir l'ensemble des valeurs valides pour chaque propriété et fonction CSS.

## Référence

### Propriétés

- {{cssxref("interpolate-size")}}

### Fonctions

- {{cssxref("abs()")}}
- {{cssxref("acos()")}}
- {{cssxref("asin()")}}
- {{cssxref("atan()")}}
- {{cssxref("atan2()")}}
- {{cssxref("attr()")}}
- {{cssxref("calc()")}}
- {{cssxref("calc-size()")}}
- {{cssxref("clamp()")}}
- {{cssxref("cos()")}}
- {{cssxref("exp()")}}
- {{cssxref("hypot()")}}
- {{cssxref("ident()")}}
- {{cssxref("if()")}}
- {{cssxref("inherit()")}}
- {{cssxref("log()")}}
- {{cssxref("max()")}}
- {{cssxref("min()")}}
- {{cssxref("mod()")}}
- {{cssxref("pow()")}}
- {{cssxref("rem()")}}
- {{cssxref("round()")}}
- {{cssxref("sibling-count()")}}
- {{cssxref("sibling-index()")}}
- {{cssxref("sign()")}}
- {{cssxref("sin()")}}
- {{cssxref("sqrt()")}}
- {{cssxref("tan()")}}
- {{cssxref("url_function", "url()")}}

Le module des valeurs et unités CSS introduit également les fonctions `calc-mix()`, `crossorigin()`, `first-valid()`, `integrity()`, `progress()`, `random()`, `random-item()`, `referrerpolicy()`, `src()`, `type()` et `toggle()`. Actuellement, aucun navigateur ne prend en charge ces fonctionnalités.

### Types de données

- [`<angle-percentage>`](/fr/docs/Web/CSS/Reference/Values/angle-percentage)
- [`<angle>`](/fr/docs/Web/CSS/Reference/Values/angle)
- [`<animation-timeline>`](/fr/docs/Web/CSS/Reference/Properties/animation-timeline)
- [`<attr-name>`](/fr/docs/Web/CSS/Reference/Values/attr#attr-name)
- [`<attr-type>`](/fr/docs/Web/CSS/Reference/Values/attr#attr-type)
- {{CSSxRef("&lt;calc-keyword&gt;")}} (`e`, `pi`, `infinity`, {{glossary("NaN")}})
- [`<calc-size-basis>`](/fr/docs/Web/CSS/calc-size#calc-size-basis)
- [`<calc-sum>`](/fr/docs/Web/CSS/Reference/Values/calc-sum)
- [`<custom-ident>`](/fr/docs/Web/CSS/Reference/Values/custom-ident)
- [`<dashed-ident>`](/fr/docs/Web/CSS/Reference/Values/dashed-ident)
- [`<dimension>`](/fr/docs/Web/CSS/Reference/Values/dimension)
- [`<easing-function>`](/fr/docs/Web/CSS/Reference/Values/easing-function)
- [`<first-valid()>`](/fr/docs/Web/CSS)
- [`<ident>`](/fr/docs/Web/CSS/Reference/Values/ident)
- [`<integer>`](/fr/docs/Web/CSS/Reference/Values/integer)
- [`<length-percentage>`](/fr/docs/Web/CSS/Reference/Values/length-percentage)
- [`<length>`](/fr/docs/Web/CSS/Reference/Values/length)
- [`<number>`](/fr/docs/Web/CSS/Reference/Values/number)
- [`<percentage>`](/fr/docs/Web/CSS/Reference/Values/percentage)
- [`<position>`](/fr/docs/Web/CSS/Reference/Properties/position)
- [`<ratio>`](/fr/docs/Web/CSS/Reference/Values/ratio)
- [`<resolution>`](/fr/docs/Web/CSS/Reference/Values/resolution)
- [`<rounding-strategy>`](/fr/docs/Web/CSS/round#rounding-strategy) (`down`, `up`, `to-zero`)
- [`<string>`](/fr/docs/Web/CSS/Reference/Values/string)
- [`<syntax>`](/fr/docs/Web/CSS/Guides/Syntax/Introduction)
- [`<time-percentage>`](/fr/docs/Web/CSS/Reference/Values/time-percentage)
- [`<time>`](/fr/docs/Web/CSS/Reference/Values/time)
- [`<url>`](/fr/docs/Web/CSS/Reference/Values/url_value)
- [`<url-modifier>`](/fr/docs/Web/CSS/Reference/Values/url_function#url-modifier)
- [`<view-timeline-name>`](/fr/docs/Web/CSS/view-timeline-name)

Le module des valeurs et unités CSS introduit également les types de données [`<frequency>`](/fr/docs/Web/CSS/Reference/Values/frequency) et [`<frequency-percentage>`](/fr/docs/Web/CSS/Reference/Values/frequency-percentage). Actuellement, aucun navigateur ne prend en charge ces fonctionnalités.

#### Unités

- [`%` (pourcentage)](/fr/docs/Web/CSS/Reference/Values/percentage)
- [`cap`](/fr/docs/Web/CSS/Reference/Values/length#cap)
- [`ch`](/fr/docs/Web/CSS/Reference/Values/length#ch)
- [`cm`](/fr/docs/Web/CSS/Reference/Values/length#cm)
- [`deg`](/fr/docs/Web/CSS/Reference/Values/angle#deg)
- [`dpcm`](/fr/docs/Web/CSS/Reference/Values/resolution#dpcm)
- [`dpi`](/fr/docs/Web/CSS/Reference/Values/resolution#dpi)
- [`dppx`](/fr/docs/Web/CSS/Reference/Values/resolution#dppx)
- [`dvb`](/fr/docs/Web/CSS/Reference/Values/length#vb)
- [`dvh`](/fr/docs/Web/CSS/Reference/Values/length#vh)
- [`dvi`](/fr/docs/Web/CSS/Reference/Values/length#vi)
- [`dvmax`](/fr/docs/Web/CSS/Reference/Values/length#vmax)
- [`dvmin`](/fr/docs/Web/CSS/Reference/Values/length#vmin)
- [`dvw`](/fr/docs/Web/CSS/Reference/Values/length#vw)
- [`em`](/fr/docs/Web/CSS/Reference/Values/length#em)
- [`ex`](/fr/docs/Web/CSS/Reference/Values/length#ex)
- [`grad`](/fr/docs/Web/CSS/Reference/Values/angle#grad)
- [`Hz`](/fr/docs/Web/CSS/Reference/Values/frequency#hz)
- [`ic`](/fr/docs/Web/CSS/Reference/Values/length#ic)
- [`in`](/fr/docs/Web/CSS/Reference/Values/length#in)
- [`kHz`](/fr/docs/Web/CSS/Reference/Values/frequency#khz)
- [`lh`](/fr/docs/Web/CSS/Reference/Values/length#lh)
- [`lvb`](/fr/docs/Web/CSS/Reference/Values/length#vb)
- [`lvh`](/fr/docs/Web/CSS/Reference/Values/length#vh)
- [`lvi`](/fr/docs/Web/CSS/Reference/Values/length#vi)
- [`lvmax`](/fr/docs/Web/CSS/Reference/Values/length#vmax)
- [`lvmin`](/fr/docs/Web/CSS/Reference/Values/length#vmin)
- [`lvw`](/fr/docs/Web/CSS/Reference/Values/length#vw)
- [`mm`](/fr/docs/Web/CSS/Reference/Values/length#mm)
- [`ms`](/fr/docs/Web/CSS/Reference/Values/time#ms)
- [`pc`](/fr/docs/Web/CSS/Reference/Values/length#pc)
- [`pt`](/fr/docs/Web/CSS/Reference/Values/length#pt)
- [`px`](/fr/docs/Web/CSS/Reference/Values/length#px)
- [`Q`](/fr/docs/Web/CSS/Reference/Values/length#q)
- [`rad`](/fr/docs/Web/CSS/Reference/Values/angle#rad)
- [`rcap`](/fr/docs/Web/CSS/Reference/Values/length#rcap)
- [`rch`](/fr/docs/Web/CSS/Reference/Values/length#rch)
- [`rem`](/fr/docs/Web/CSS/Reference/Values/length#rem)
- [`rex`](/fr/docs/Web/CSS/Reference/Values/length#rex)
- [`ric`](/fr/docs/Web/CSS/Reference/Values/length#ric)
- [`rlh`](/fr/docs/Web/CSS/Reference/Values/length#rlh)
- [`s`](/fr/docs/Web/CSS/Reference/Values/time#s)
- [`svb`](/fr/docs/Web/CSS/Reference/Values/length#vb)
- [`svh`](/fr/docs/Web/CSS/Reference/Values/length#vh)
- [`svi`](/fr/docs/Web/CSS/Reference/Values/length#vi)
- [`svmax`](/fr/docs/Web/CSS/Reference/Values/length#vmax)
- [`svmin`](/fr/docs/Web/CSS/Reference/Values/length#vmin)
- [`svw`](/fr/docs/Web/CSS/Reference/Values/length#vw)
- [`turn`](/fr/docs/Web/CSS/Reference/Values/angle#turn)
- [`vb`](/fr/docs/Web/CSS/Reference/Values/length#vb)
- [`vh`](/fr/docs/Web/CSS/Reference/Values/length#vh)
- [`vi`](/fr/docs/Web/CSS/Reference/Values/length#vi)
- [`vmax`](/fr/docs/Web/CSS/Reference/Values/length#vmax)
- [`vmin`](/fr/docs/Web/CSS/Reference/Values/length#vmin)
- [`vw`](/fr/docs/Web/CSS/Reference/Values/length#vw)
- [`x`](/fr/docs/Web/CSS/Reference/Values/resolution#x)

[Unités flexibles](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_flexibles) (`fr`) et [unités de conteneur](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_de_conteneur) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`) sont définies dans les modules [Modèle de grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout) et [Règles conditionnelles CSS](/fr/docs/Web/CSS/Guides/Conditional_rules).

#### Catégorisations des unités

- [Unités de longueur absolue](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_de_longueure_absolue) (`cm`, `in`, `mm`, `pc`, `pt`, `px`, `Q`)
- [Unités d'angle](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_dangle) (`deg`, `grad`, `rad`, `turn`)
- [Unités de viewport par défaut](/fr/docs/Web/CSS/Reference/Values/length#unités_de_zone_daffichage_par_défaut) (`vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Unités de viewport dynamiques](/fr/docs/Web/CSS/Reference/Values/length#unités_de_zone_daffichage_par_défaut) (`dvb`, `dvh`, `dvi`, `dvmax`, `dvmin`, `dvw`)
- [Unités de fréquence](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_de_fréquence) (`Hz`, `kHz`)
- [Unités de pourcentage de viewport large](/fr/docs/Web/CSS/Reference/Values/length#unités_de_zone_daffichage_large) (`lvb`, `lvh`, `lvi`, `lvmax`, `lvmin`, `lvw`)
- [Unités de longueur relatives à la police locale](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#longueurs_relatives_à_la_police_locale) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`)
- [Unités physiques](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_de_longueure_absolue) (`cm`, `in`, `mm`, `pc`, `pt`, `Q`)
- [Unités de longueur relatives](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_de_longueur_relative) (`cap`, `ch`, `em`, `ex`, `ic`, `lh`, `rem`, `rlh`, `vb`, `vh`, `vi`, `vmax`, `vmin`, `vw`)
- [Unités de résolution](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_de_résolution) (`dpcm`, `dpi` , `dppx`, `x`)
- [Unités de longueur relatives à la racine](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_de_longueur_relatives_à_la_racine) (`rcap`, `rch`, `rem`, `rex`, `ric`, `rlh`)
- [Unités de pourcentage de petite zone d'affichage](/fr/docs/Web/CSS/Reference/Values/length#unités_de_petite_zone_daffichage) (`svb`, `svh`, `svi`, `svmax`, `svmin`, `svw`)
- [Unités de temps](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_de_temps) (`ms`, `s`)
- [Unités de zone d'affichage](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_de_zone_daffichage) (`dvh`, `dvw`, `lvh`, `lvw`, `svh`, `svw`, `vb` , `vh`, `vi` , `vmax`, `vmin`, `vw`)
- [Unité d'angle visuel](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_de_longueure_absolue) (`px`)

### Concepts clés

- {{glossary("Advance measure", "Chasse")}}
- [Notation d'intervalle entre crochets](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#notation_par_crochets_minmax)
- [Combinateurs de valeurs de composant](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax#composants_à_valeurs_de_combinateurs)
- [Mots-clés globaux CSS](/fr/docs/Web/CSS/Reference/Values/Data_types#mots-clés_applicables_à_lensemble_du_css)
- {{glossary("Device pixel", "Pixel de l'appareil")}}
- [Notation fonctionnelle](/fr/docs/Web/CSS/Reference/Values/Functions)
- {{glossary("Identifier", "Identifiant")}}
- {{glossary("Interpolation")}}
- {{glossary("Keyword", "Mot-clé")}}
- [Fonction mathématique](/fr/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)
- [Types de données numériques](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
- {{glossary("Origin", "Origine")}}
- {{glossary("Pixel")}}
- [Types de données textuelles](/fr/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
- {{glossary("URL")}}
- [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)

## Guides

- [Types de données CSS](/fr/docs/Web/CSS/Reference/Values/Data_types)
  - : Introduction aux types de données CSS qui définissent les valeurs typiques acceptées par les propriétés et fonctions CSS.

- [Types de données numériques](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
  - : Vue d'ensemble des types de données numériques, y compris les entiers, les nombres, les pourcentages et les dimensions, ainsi que les dimensions relatives et absolues, les angles et les unités de temps.

- [Types de données textuelles](/fr/docs/Web/CSS/Guides/Values_and_units/Textual_data_types)
  - : Vue d'ensemble des types de données textuelles, y compris les valeurs de mots-clés prédéfinis, les mots-clés globaux CSS et les URL.

- [Fonctions de valeur CSS](/fr/docs/Web/CSS/Reference/Values/Functions)
  - : Vue d'ensemble des instructions CSS qui invoquent un traitement ou des calculs spéciaux pour retourner une valeur CSS pour une propriété CSS.

- [Utiliser les fonctions mathématiques CSS](/fr/docs/Web/CSS/Guides/Values_and_units/Using_math_functions)
  - : Les fonctions mathématiques CSS qui permettent d'écrire la valeur d'une propriété sous forme d'expression mathématique.

- [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Guides/Values_and_units/Value_definition_syntax)
  - : La grammaire formelle utilisée pour définir l'ensemble des valeurs valides pour les propriétés et fonctions CSS.

- [Apprendre&nbsp;: valeurs et unités](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
  - : Un aperçu de certains des types de valeurs les plus fréquemment utilisés, de leur nature et de leur fonctionnement.

## Modules associés

- Le module de [cascade et héritage CSS](/fr/docs/Web/CSS/CSS_cascade)
  - {{cssxref("initial")}}
  - {{cssxref("inherit")}}
  - {{cssxref("revert")}}
  - {{cssxref("revert-layer")}}
  - {{cssxref("unset")}}
  - {{cssxref("all")}}

- Le module de [grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
  - {{cssxref("&lt;flex&gt;")}}
  - [Unités flexibles](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_flexibles) (`fr`)

- Le module de [règles conditionnelles CSS](/fr/docs/Web/CSS/Guides/Conditional_rules)
  - [Unités de conteneur](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types#unités_de_conteneur) (`cqb`, `cqh`, `cqi`, `cqmax`, `cqmin`, `cqw`)

- Le module de [couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
  - {{cssxref("&lt;color&gt;")}}
  - {{cssxref("system-color")}}
  - [`color-mix()`](/fr/docs/Web/CSS/Reference/Values/color_value/color-mix)

- Le module d'[images CSS](/fr/docs/Web/CSS/Guides/Images)
  - {{cssxref("&lt;image&gt;")}}
  - {{cssxref("&lt;gradient&gt;")}}

## Spécifications

{{Specifications}}

## Voir aussi

- Le module de [syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax)
- Le module de [sélecteurs CSS](/fr/docs/Web/CSS/Guides/Selectors)
