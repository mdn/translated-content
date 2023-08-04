---
title: JSON
slug: Glossary/JSON
---

**JSON** (_JavaScript Object Notation_) est un format d'échange de données. Bien qu'il n'en soit pas un sous-ensemble au sens strict, JSON ressemble fortement à un sous-ensemble de la syntaxe {{Glossary("JavaScript")}}. Le format JSON est accepté par de nombreux langages de programmation, mais il s'avère particulièrement utile pour les applications basées sur JavaScript comme les sites web et les extensions des navigateurs.

JSON permet de représenter des nombres, des booléens, des chaînes de caractères, la valeur `null`, des tableaux (séquences ordonnées de valeurs) et des objets (correspondances chaînes-valeurs) composés de ces valeurs (ou d'autres tableaux ou objets). Il ne permet pas, nativement, de représenter des données plus complexes comme des fonctions, des expressions rationnelles ou des dates. (Les objets Date sont traduits vers une chaîne de caractères selon un format ISO, cela permet pour certains cas, d'assurer le transport de ces données.) Si vous avez besoin de représenter des valeurs d'autres types de données, vous pouvez les transformer lors de la conversion en chaîne de caractères ou avant de les reconvertir en objets JavaScript.

Tout comme XML, JSON permet de conserver des données hiérarchiques, ce qui n'est pas le cas avec le format CSV traditionnel. De nombreux outils permettent de convertir des données entre ces formats comme ce [convertisseur JSON vers CSV](https://json-csv.com) ou bien [celui-ci](https://jsontoexcel.com/).

## Voir aussi

- [JSON](https://fr.wikipedia.org/wiki/JSON) sur Wikipédia
- [JSON](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON) sur MDN
