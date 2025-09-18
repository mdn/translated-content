---
title: <script type="importmap">
slug: Web/HTML/Reference/Elements/script/type/importmap
original_slug: Web/HTML/Element/script/type/importmap
l10n:
  sourceCommit: b0696543a61efcdece98a60f4e75a0d6a9fba3ae
---

{{HTMLSidebar}}

La valeur **`importmap`** de l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/script/type) pour [l'élément `<script>`](/fr/docs/Web/HTML/Reference/Elements/script) indique que le contenu de l'élément contient une carte d'import (<i lang="en">import map</i>).

Une carte d'import est un objet JSON qui permet aux développeuses et développeurs de contrôler la façon dont le navigateur résout les spécificateurs de modules lors de l'import [des modules JavaScript](/fr/docs/Web/JavaScript/Guide/Modules).

Elle fournit une correspondance entre le texte utilisé comme spécificateur de module dans [une instruction `import`](/fr/docs/Web/JavaScript/Reference/Statements/import) ou [un opérateur `import()`](/fr/docs/Web/JavaScript/Reference/Operators/import) et la valeur correspondante qui remplacera le texte lors de la résolution du spécificateur. L'objet JSON doit respecter [le format de représentation JSON des cartes d'import](#représentation_json_des_cartes_d_import).

Une carte d'import est utilisée pour la résolution des spécificateurs de module, tant pour les imports statiques que pour les imports dynamiques. Elle doit donc être déclarée et traitée avant tout élément `<script>` important des modules utilisant des spécificateurs présents dans la carte.

On notera que la carte d'import s'applique uniquement aux spécificateurs de module présents dans [l'instruction `import`](/fr/docs/Web/JavaScript/Reference/Statements/import) ou [l'opérateur `import()`](/fr/docs/Web/JavaScript/Reference/Operators/import)&nbsp;; elle ne s'applique pas au chemin fourni via l'attribut `src` d'un élément `<script>`.

Pour plus d'informations, voir [la section sur l'import de modules à l'aide des cartes d'import](/fr/docs/Web/JavaScript/Guide/Modules#importer_des_modules_avec_des_cartes_d_import) dans le guide sur les modules JavaScript.

## Syntaxe

```html
<script type="importmap">
  // Un objet JSON définissant l'import
</script>
```

Les attributs `src`, `async`, `nomodule`, `defer`, `crossorigin`, `integrity`, et `referrerpolicy` ne doivent pas être présents sur l'élément `<script>`.

Seule la première carte d'import d'un document avec une définition en incise est traitée. Les éventuelles cartes d'import supplémentaires ou externes sont ignorées.

### Exceptions

- `TypeError`
  - : La définition de la carte d'import n'est pas un objet JSON ou la clé `importmap` est définie mais n'est pas un objet JSON, ou la clé `scopes` est définie mais n'est pas un objet JSON.

Les navigateurs génèrent des avertissements dans la console au cas où la carte d'import JSON ne respecte pas [le schéma de représentation des cartes d'import](#représentation_json_des_cartes_d_import).

Un évènement [`error`](/fr/docs/Web/API/HTMLElement/error_event) est déclenché sur les éléments de script ayant `type="importmap"` et qui ne sont pas traités. Cela peut notamment se produire si le chargement d'un module a déjà commencé alors que la carte d'import est toujours en cours de traitement, ou si plusieurs cartes d'import sont définies sur la page.

## Description

Lorsqu'on importe [un module JavaScript](/fr/docs/Web/JavaScript/Guide/Modules), [l'instruction `import`](/fr/docs/Web/JavaScript/Reference/Statements/import) et [l'opérateur `import()`](/fr/docs/Web/JavaScript/Reference/Operators/import) ont tous les deux un spécificateur de module qui indique le module à importer. Un navigateur devra résoudre ce spécificateur en une URL absolue afin d'importer le module.

Par exemple, si on prend les instructions suivantes, on a un spécificateur de module `"./modules/formes/carre.js"`, qui est un chemin relatif à l'URL du document et un second spécificateur de module `"https://example.com/formes/cercle.js"`, qui est une URL absolue.

```js
import { nom as nomCarre, dessiner } from "./modules/formes/carre.js";
import { nom as nomCercle } from "https://example.com/formes/cercle.js";
```

Les cartes d'import permettent d'indiquer (presque) n'importe quel texte comme spécificateur de module, la carte fournit une correspondance qui remplacera le texte lors de la résolution du spécificateur.

### Noms simples

La carte d'import qui suit définit une clé `imports` doté d'une carte de correspondance pour les spécificateurs de module qui a les propriétés `carre` et `cercle`.

```html
<script type="importmap">
  {
    "imports": {
      "carre": "./module/formes/carre.js",
      "cercle": "https://example.com/formes/cercle.js"
    }
  }
</script>
```

Grâce à cette carte d'import, on peut réaliser le même import que précédemment, mais en utilisant des noms simples comme spécificateurs de modules&nbsp;:

```js
import { nom as nomCarre, dessiner } from "carre";
import { nom as nomCercle } from "cercle";
```

### Préfixer les chemins

Une clé d'un spécificateur de module peut aussi être utilisée pour rajouter un préfixe à un spécificateur. Il faut noter que dans ce cas, la propriété et le chemin correspondant doivent tous les deux finir par une barre oblique (`/`).

```html
<script type="importmap">
  {
    "imports": {
      "formes/": "./module/formes/",
      "autresformes/": "https://example.com/modules/formes/"
    }
  }
</script>
```

On pourrait alors importer le module `cercle` de cette façon.

```js
import { nom as nomCercle } from "formes/cercle.js";
```

### Utiliser des chemins dans les clés

Les clés des spécificateurs de module n'ont pas forcément à être des noms simples. Elles peuvent contenir ou finir des séparateurs de chemin, être des URL absolues ou des URL relatives dont le chemin commence par `/`, `./`, ou `../`.

```json
{
  "imports": {
    "modules/formes/": "./module/src/formes/",
    "modules/carre": "./module/src/autres/formes/carre.js",
    "https://example.com/modules/carre.js": "./module/src/autres/formes/carre.js",
    "../modules/formes/": "/modules/formes/"
  }
}
```

Si plusieurs clés de spécificateur d'une carte peuvent correspondre, c'est la clé la plus spécifique qui est sélectionnée (celle avec la plus longue valeur).

Un spécificateur de module `./toto/../js/app.js` sera converti en `./js/app.js` avant la recherche de correspondance. Aussi, cela signifie que la clé `./js/app.js` correspondrait au spécificateur de module, même si ce ne sont pas exactement les mêmes.

### Correspondances à portées limitées

La clé `scopes` permet de fournir des correspondances qui seront uniquement utilisées si le module qui importe contient un chemin donné. Si l'URL du script qui charge le module correspond au chemin indiqué, c'est la correspondance associée à cette portée qui sera utilisée. Cela permet d'avoir différentes versions du module qui peuvent être utilisées selon le code qui réalise l'import.

Dans l'exemple qui suit, la carte utilisera uniquement la correspondance de la portée si l'URL du module qui fait le chargement contient le chemin&nbsp;: `"/modules/formesspecifiques/"`.

```html
<script type="importmap">
  {
    "imports": {
      "carre": "./module/formes/carre.js"
    },
    "scopes": {
      "/modules/formesspecifiques/": {
        "carre": "https://example.com/modules/formes/carre.js"
      }
    }
  }
</script>
```

Si plusieurs portées correspondent à l'URL du module, c'est la portée avec le chemin le plus spécifique qui est utilisée (autrement dit, celle pour laquelle la clé a le nom le plus long). Si cette portée ne contient aucun spécificateur correspondant à l'import, il passe à la prochaine portée la plus spécifique, et ainsi de suite. Le navigateur pourra finir par utiliser la correspondance de la clé `imports` si le spécificateur n'est présent dans aucune portée.

## Représentation JSON des cartes d'import

Ce qui suit est une définition formelle de la représentation JSON pour les cartes d'import.

La carte d'import doit être un objet JSON valide qui définit au plus deux clés optionnelles&nbsp;: `imports` et `scopes`. Les valeurs de ces clés doivent être un objet, potentiellement vide.

- `imports` {{optional_inline}}
  - : La valeur doit être [une carte de spécificateur de module](#module_specifier_map), qui fournit les correspondances entre les spécificateurs utilisés dans les instructions `import` ou les opérateurs `import()`, et le texte qui les remplacera lors de leur résolution.

    Il s'agit de la carte de correspondance qui est utilisée par défaut si les spécificateurs de module ne sont pas présents (via leur nom ou via leur chemin) dans les portées décrites via l'attribut `scopes`.
    - `<module specifier map>`
      - : Une carte de spécificateur de module est un objet JSON valide où les _clés_ correspondent au texte qui peut être présent dans le spécificateur de module lors de l'import et où les _valeurs_ correspondantes sont les URL ou les chemins qui remplaceront ce texte lorsque le spécificateur de module sera résolu en une adresse.

        L'objet JSON représentant une carte de spécificateur de module doit respecter les règles suivantes&nbsp;:
        - Aucune des clés ne doit être vide.
        - Toutes les valeurs doivent être des chaînes de caractères, qui définissent soit une URL absolue valide, soit une chaîne d'URL valide commençant par `/`, `./`, ou `../`.
        - Si la clé finit par `/`, la valeur correspondante doit également finir par `/`. On pourra utiliser une clé se terminant par `/` comme préfixe lors de la correspondance entre les adresses de modules.
        - L'ordre des propriétés de l'objet n'a pas d'importance, si plusieurs clés peuvent correspondre pour un même spécificateur de module, c'est la clé la plus spécifique qui est utilisée (autrement dit le spécificateur `"olive/branche/"` correspondrait avant `"olive/"`).

- `scopes` {{optional_inline}}
  - : Les portées définissent des [cartes de spécificateur de module](#module_specifier_map) pour des chemins spécifiques, permettant de choisir la correspondance à effectuer en fonction du chemin du code qui importe le module.

    L'objet `scopes` est un objet JSON valide où chaque propriété est une clé de portée (représentée par une URL) avec une valeur correspondante qui est une carte de spécificateur de module.

    Si l'URL d'un script important un module correspond au chemin d'une clé d'une portée, c'est la carte de spécificateur de module correspondante qui est utilisée en première pour vérifier les correspondances de spécificateur. S'il existe plusieurs clés de portées qui correspondent, c'est la valeur associée avec le chemin de portée le plus spécifique qui est utilisée en première pour vérifier les correspondances de spécificateur. La carte de spécificateur de module décrite dans `imports` est utilisée en dernier recours s'il n'y a aucune correspondance pour le spécificateur de module dans les cartes des portées correspondantes.

    On notera que la portée ne modifie pas la façon dont une adresse est résolue. Les adresses relatives sont toujours résolues par rapport à l'URL de base de la carte d'import.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Guide des modules JavaScript > Importer des modules avec des cartes d'import](/fr/docs/Web/JavaScript/Guide/Modules#importer_des_modules_avec_des_cartes_d_import)
- [L'attribut `type` des éléments HTML `<script>`](/fr/docs/Web/HTML/Reference/Elements/script#type)
- [L'instruction `import`](/fr/docs/Web/JavaScript/Reference/Statements/import)
- [L'opérateur `import()`](/fr/docs/Web/JavaScript/Reference/Operators/import)
