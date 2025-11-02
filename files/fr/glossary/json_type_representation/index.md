---
title: Représentation de type JSON
slug: Glossary/JSON_type_representation
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

{{Glossary("JSON")}} est un format pratique et largement utilisé pour sérialiser des objets, des tableaux, des nombres, des chaînes de caractères, des booléens et null.
[JSON ne prend pas en charge tous les types de données autorisés par JavaScript](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON#différences_entres_javascript_et_json), ce qui signifie que les objets JavaScript utilisant ces types incompatibles ne peuvent pas être directement sérialisés en JSON.

La _représentation de type JSON_ d'un objet incompatible avec JSON est un objet JavaScript équivalent dont les propriétés sont encodées de façon à ce que l'information _puisse_ être sérialisée en JSON.
Celle-ci possède généralement les mêmes propriétés que l'objet d'origine pour les types de données compatibles, tandis que les propriétés incompatibles sont converties/sérialisées en types compatibles.
Par exemple, les propriétés de type tampon dans l'objet d'origine peuvent être encodées en chaînes de caractères au format {{Glossary("base64", "base64url")}} dans la représentation de type JSON.

Un objet qui ne peut pas être automatiquement sérialisé en JSON avec la méthode [`JSON.stringify()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) peut définir une méthode d'instance nommée `toJSON()` qui retourne la _représentation de type JSON_ de l'objet d'origine.
[`JSON.stringify()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) utilisera alors `toJSON()` pour obtenir l'objet à sérialiser, au lieu de l'objet d'origine.
[`PublicKeyCredential.toJSON()`](/fr/docs/Web/API/PublicKeyCredential/toJSON) et [`Performance.toJSON()`](/fr/docs/Web/API/Performance/toJSON) sont des exemples de cette approche.

Une chaîne JSON sérialisée de cette façon peut être désérialisée en objet _représentation de type JSON_ à l'aide de [`JSON.parse()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse).
Il est courant de fournir une méthode de conversion, telle que {{DOMxRef("PublicKeyCredential.parseCreationOptionsFromJSON_static", "PublicKeyCredential.parseCreationOptionsFromJSON()")}}, pour convertir la _représentation de type JSON_ en objet d'origine.
