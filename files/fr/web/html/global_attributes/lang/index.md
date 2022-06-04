---
title: lang
slug: Web/HTML/Global_attributes/lang
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Reference
translation_of: Web/HTML/Global_attributes/lang
original_slug: Web/HTML/Attributs_universels/lang
---
{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`lang`** permet de définir la langue utilisée pour l'élément. Pour les éléments non-éditables, c'est la langue dans laquelle ils sont écrits. Pour les éléments éditables, c'est la langue dans laquelle devrait écrire l'utilisateur. La valeur de cet attribut est une «&nbsp;balise de langue&nbsp;» dont le format est défini par le document de l'IETF : [_Les balises d'identification de langues (BCP47)_](https://www.ietf.org/rfc/bcp/bcp47.txt). Si cette balise est la chaîne vide, la langue sera définie comme _inconnue_. Si la balise de langue n'est pas valide selon BCP47, la langue sera définie comme _invalide_.

{{EmbedInteractiveExample("pages/tabbed/attribute-lang.html","tabbed-shorter")}}

Même lorsque l'attribut **`lang`** est défini, il peut ne pas être pris en compte. En effet, l'attribut {{htmlattrxref("xml:lang")}} aura la priorité sur celui-ci.

Pour la pseudo-classe CSS {{cssxref(":lang")}}, deux noms de langues invalides sont considérés différents si les noms utilisés sont différents. Par exemple, alors que `:lang(fr)` permet l'appariement avec les déclarations (valides) `lang="fr-BE"` ou `lang="fr-CH"`, un encodage (invalide) comme `:lang(xyzzy)` ne permet pas l'appariement avec une déclaration (invalide) comme `lang="xyzzy-Zorp!"`.

## Syntaxe des balises de langue

La syntaxe complète décrite par la BCP 47 est suffisamment développée pour désigner certains dialectes spécifiques. Toutefois, dans la plupart des cas, l'utilisation sera assez simple.

Voici un aperçu de la syntaxe simplifiée. Une balise de langue est composées de trois « sous-balises » séparées par des tirets. Chacune de ces sous-balises indique une certaine propriété de la langue. Les trois sous-balises communément utilisées sont :

- Sous-balise de langue
  - : Ce fragment est obligatoire. C'est un code sur deux ou trois caractères (généralement en minuscules) qui définit la langue de base. Pour l'anglais, cette sous-balise est `en` et pour le Badeshi, cette balise est `bdz`.
- Sous-balise de script
  - : Ce fragment est optionnel. Il décrit le système d'écriture utilisé par la langue. Cette sous-balise contient toujours quatre caractères. Pour le braille français, la balise complète sera donc `fr-Brail` ; pour le japonais écrit avec l'alphabet Katakana, le code sera `ja-Kana`. Si la langue est utilisée avec le script le plus fréquemment utilisé (par exemple de l'espagnol écrit avec l'alphabet latin), il n'est pas nécessaire d'indiquer cette sous-balise.
- Sous-balise régionale
  - : Ce fragment est optionnel. Il définit un dialecte de la langue de base pour une région donnée. Cette sous-balise est composée de deux lettres en majuscules pour indiquer un pays ou de trois chiffres pour une indiquer une région qui n'est pas un pays. Ainsi, `es-ES` représente l'espagnol parlé en Espagne et `es-013` représente l'espagnol parlé en Amérique centrale ; l'espagnol international serait simplement `es`.

La sous-balise de script doit précéder la sous-balise régionale si les deux sont présentes. Voici un exemple avec les trois fragments : `ru-Cyrl-BY` qui correspond au russe, écrit avec l'alphabet cyrillique, tel que parlé en Biélorussie.

## Spécifications

| Spécification                                                                                                | État                             | Commentaires                                                                                                                                                                                                                                                                                                                                                      |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', "dom.html#the-lang-and-xml:lang-attributes", "lang")}} | {{Spec2('HTML WHATWG')}} | Aucun changement depuis la dernière dérivation, {{SpecName('HTML5.1')}}                                                                                                                                                                                                                                                                                  |
| {{SpecName('HTML5.1', "dom.html#the-lang-and-xmllang-attributes", "lang")}}         | {{Spec2('HTML5.1')}}     | Dérivée de {{SpecName('HTML WHATWG')}}, aucun changement de {{SpecName('HTML5 W3C')}}                                                                                                                                                                                                                                                             |
| {{SpecName('HTML5 W3C', "dom.html#the-lang-and-xmllang-attributes", "lang")}}     | {{Spec2('HTML5 W3C')}}     | Dérivée de {{SpecName('HTML WHATWG')}}. Définition du comportement de l'attribut **xml:lang** et de l'algorithme à utiliser pour déterminer la langue utilisée. Cet attribut devient également un attribut global à part entière.                                                                                                                        |
| {{SpecName('HTML4.01', 'struct/dirlang.html#h-8.1', 'lang')}}                             | {{Spec2('HTML4.01')}}     | Attribut supporté pour tous les éléments {{HTMLElement("applet")}}, {{HTMLElement("base")}}, {{HTMLElement("basefont")}}, {{HTMLElement("br")}}, {{HTMLElement("frame")}}, {{HTMLElement("frameset")}}, {{HTMLElement("iframe")}}, {{HTMLElement("param")}}, et {{HTMLElement("script")}}. |

## Compatibilité des navigateurs

{{Compat("html.global_attributes.lang")}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
- La pseudo-classe CSS {{cssxref(":lang")}}
- L'en-tête HTTP {{HTTPHeader("Content-Language")}}
