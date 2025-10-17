---
title: "<script> : attribut type"
slug: Web/HTML/Reference/Elements/script/type
original_slug: Web/HTML/Element/script/type
l10n:
  sourceCommit: a46d4d15ea85b4bbb83df145228bc40f658868be
---

{{HTMLSidebar}}

L'attribut **`type`** de l'élément [`<script>`](/fr/docs/Web/HTML/Reference/Elements/script) indique le _type_ de script représenté par l'élément&nbsp;: un script classique, un module JavaScript, une carte (<i lang="en">map</i>) d'import, ou un bloc de données.

## Valeur

La valeur de cet attribut indique le type de données représenté par le script. La valeur pourra être&nbsp;:

- Aucune valeur (l'attribut n'est pas défini), c'est le comportement par défaut. Ou une chaîne vide ou un type MIME JavaScript
  - : La valeur indique que le script est un script «&nbsp;classique&nbsp;» qui contient du code JavaScript. Il est recommandé d'omettre l'attribut plutôt que de préciser un type MIME JavaScript si le script est un script JavaScript classique. Les types MIME JavaScript sont [listés dans la spécification des types de média IANA](/fr/docs/Web/HTTP/Guides/MIME_types#textjavascript).
- `module`
  - : La valeur indique que le code doit être traité comme un module JavaScript. Le traitement du contenu du script est différé et les attributs `charset` et `defer` n'ont pas d'effet. Pour plus d'informations sur l'utilisation de `module`, voir [le guide sur les modules JavaScript](/fr/docs/Web/JavaScript/Guide/Modules). À la différence des scripts classiques, les scripts des modules doivent implémenter et respecter les règles [CORS](/fr/docs/Web/HTTP/Guides/CORS) s'ils sont récupérés depuis une origine tierce.
- [`importmap`](/fr/docs/Web/HTML/Reference/Elements/script/type/importmap)
  - : La valeur indique que le contenu de l'élément contient une carte d'import (<i lang="en">import map</i>). Cette carte est un objet JSON que les développeuses et développeurs peuvent utiliser pour contrôler la façon dont le navigateur résout les spécificateurs de modules lors de l'import de [modules JavaScript](/fr/docs/Web/JavaScript/Guide/Modules#importer_des_modules_avec_des_cartes_d_import)
- Toute autre valeur
  - : Le contenu embarqué est traité comme un bloc de données et ne sera pas traité par le navigateur. Afin d'indiquer des blocs de données, les développeuses et développeurs doivent utiliser un type MIME valide qui n'est pas un type MIME JavaScript. Tous les autres attributs seront ignorés, y compris l'attribut `src`.

> [!NOTE]
> Dans les navigateurs antérieurs, le type identifiait le langage de script du code embarqué ou importé (à travers l'attribut `src`).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
