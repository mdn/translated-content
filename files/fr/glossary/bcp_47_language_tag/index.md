---
title: "BCP 47 : Identifiant de langue"
slug: Glossary/BCP_47_language_tag
l10n:
  sourceCommit: e7bc0ed5466f5834641d75d416fa81886cf6b37e
---

Un **identifiant de langue BCP 47** est une chaîne de caractères qui définit précisément une langue humaine en indiquant la langue de base, mais aussi éventuellement le système d'écriture et le dialecte. Par exemple, `fr` désigne le français, mais `fr-FR` et `fr-CA` précisent respectivement le français de France et le français du Canada.

Les identifiants de langue BCP 47 sont utilisés partout sur la plateforme web où une fonctionnalité a été conçue pour produire des résultats différents selon la langue définie, permettant la prise en charge de l'{{Glossary("internationalization", "internationalisation")}}.

Exemples&nbsp;:

- L'attribut HTML [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang)
- L'élément HTML {{HTMLElement("track")}}
- L'objet JavaScript {{JSxRef("Temporal")}}
- La propriété API {{DOMxRef("CanvasRenderingContext2D.lang")}}
- Les [API Translator et Language Detector](/fr/docs/Web/API/Translator_and_Language_Detector_APIs)

## Syntaxe BCP 47

La syntaxe complète de BCP 47 est définie dans le {{RFC("5646")}}. Elle permet d'identifier des dialectes de langue extrêmement précis, mais la plupart des usages sont bien plus simples.

Un identifiant de langue est composé de _sous-étiquettes_ séparées par des tirets, où chaque sous-étiquette indique une propriété de la langue. Les trois sous-étiquettes les plus courantes sont&nbsp;:

- Sous-étiquette de langue
  - : Un code de 2 ou 3 caractères qui définit la langue de base, généralement écrit en minuscules. Par exemple, le code de langue pour l'anglais est `en`, et celui du badeshi est `bdz`.
- Sous-étiquette d'écriture {{Optional_Inline}}
  - : Cette sous-étiquette définit le système d'écriture utilisé pour la langue, et comporte toujours 4 caractères, avec la première lettre en majuscule. Par exemple, le français en braille s'écrit `fr-Brai` et le japonais écrit en katakana s'écrit `ja-Kana`.

    > [!NOTE]
    > Si la langue est écrite de façon très typique, comme l'anglais en alphabet latin, il n'est pas nécessaire d'utiliser cette sous-étiquette.

- Sous-étiquette de région {{Optional_Inline}}
  - : Cette sous-étiquette définit un dialecte de la langue de base pour un lieu particulier et se compose soit de deux lettres majuscules correspondant à un code pays, soit de trois chiffres correspondant à une zone non nationale. Par exemple, `es-ES` désigne l'espagnol tel qu'il est parlé en Espagne, et `es-013` l'espagnol d'Amérique centrale. «&nbsp;Espagnol international&nbsp;» s'écrit simplement `es`.

La sous-étiquette d'écriture précède la sous-étiquette de région si les deux sont présentes — `ru-Cyrl-BY` désigne le russe, écrit en alphabet cyrillique, tel qu'il est parlé en Biélorussie.

## Voir aussi

- [Liste des principales sous-étiquettes de langue](https://fr.wikipedia.org/wiki/%C3%89tiquette_d%27identification_de_langues_IETF#Exemples)
- [RFC 5646&nbsp;: Étiquettes pour l'identification des langues <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc5646)&nbsp;: où les identifiants de langue BCP 47 sont spécifiés.
- [Choisir une étiquette de langue <sup>(angl.)</sup>](https://www.w3.org/International/questions/qa-choosing-language-tags)&nbsp;: guide W3C pour choisir la bonne étiquette de langue.
- [Recherche de sous-étiquettes BCP 47 <sup>(angl.)</sup>](https://r12a.github.io/app-subtags/)&nbsp;: rechercher les codes de sous-étiquette pour une langue.
