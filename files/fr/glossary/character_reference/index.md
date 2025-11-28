---
title: Référence de caractère
slug: Glossary/Character_reference
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une **référence de caractère** {{Glossary("HTML")}} est une {{Glossary("escape character", "séquence d'échappement")}} composée de {{Glossary("character", "caractères")}} utilisée pour représenter un autre caractère dans la page web affichée.

Les références de caractères servent à remplacer les caractères réservés en HTML, comme les symboles inférieur à (`<`) et supérieur à (`>`) utilisés par l'analyseur HTML pour identifier les {{Glossary("tag", "balises")}}, ou `"` et `'` dans les attributs, qui peuvent être entourés par ces caractères.
Elles servent aussi pour des caractères invisibles qu'il serait impossible de taper, comme les espaces insécables, les caractères de contrôle (marques gauche-droite, droite-gauche), ou pour des caractères difficiles à saisir au clavier.

Il existe trois types de références de caractères&nbsp;:

- **Références de caractères nommées**
  - : Utilisent une chaîne de nom entre une esperluette (`&`) et un point-virgule (`;`) pour désigner le caractère correspondant.
    Par exemple, `&lt;` représente le symbole inférieur à (`<`), et `&copy;` le symbole de copyright (`©`).
    La chaîne de caractères utilisée est souvent une contraction ou une initialisation en {{Glossary("Camel case","camelCase")}} du nom du caractère.

- **Références de caractères numériques décimales**
  - : Commencent par `&#`, suivies d'un ou plusieurs chiffres ASCII représentant l'entier décimal correspondant au {{Glossary("code point", "point de code")}} {{Glossary("Unicode")}} du caractère, et se terminent par `;`.
    Par exemple, la référence décimale pour `<` est `&#60;`, car le point de code Unicode du symbole est `U+0003C` et `3C` en hexadécimal vaut 60 en décimal.

- **Références de caractères numériques hexadécimales**
  - : Commencent par `&#x` ou `&#X`, suivies d'un ou plusieurs chiffres hexadécimaux ASCII, représentant l'entier hexadécimal correspondant au point de code Unicode du caractère, et se terminent par `;`.
    Par exemple, la référence hexadécimale pour `<` est `&#x3C;` ou `&#X3C;`, car le point de code Unicode du symbole est `U+0003C`.

Un très petit sous-ensemble de références de caractères nommées utiles, avec leurs points de code Unicode, est listé ci-dessous.

| Caractère | Référence nommée | Point de code Unicode |
| --------- | ---------------- | --------------------- |
| &         | `&amp;`          | U+00026               |
| <         | `&lt;`           | U+0003C               |
| >         | `&gt;`           | U+0003E               |
| "         | `&quot;`         | U+00022               |
| '         | `&apos;`         | U+00027               |
|           | `&nbsp;`         | U+000A0               |
| -         | `&ndash;`        | U+02013               |
| —         | `&mdash;`        | U+02014               |
| ©         | `&copy;`         | U+000A9               |
| ®         | `&reg;`          | U+000AE               |
| ™         | `&trade;`        | U+02122               |
| ≈         | `&asymp;`        | U+02248               |
| ≠         | `&ne;`           | U+02260               |
| £         | `&pound;`        | U+000A3               |
| €         | `&euro;`         | U+020AC               |
| °         | `&deg;`          | U+000B0               |

La liste complète des références de caractères nommées HTML [se trouve dans la spécification HTML ici <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references).

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Character", "Caractère")}}
  - {{Glossary("Escape character", "Caractère d'échappement")}}
  - {{Glossary("Code point", "Point de code")}}
  - {{Glossary("Unicode")}}
