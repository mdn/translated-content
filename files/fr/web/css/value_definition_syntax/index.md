---
title: Syntaxe de définition des valeurs
slug: Web/CSS/Value_definition_syntax
tags:
  - CSS
  - Débutant
  - Reference
translation_of: Web/CSS/Value_definition_syntax
original_slug: Web/CSS/Syntaxe_de_définition_des_valeurs
---
{{CSSRef}}

**La syntaxe de définition des valeurs CSS** est une grammaire formelle qui définit les règles pour créer des règles CSS valides. En plus de ces règles, il peut y avoir des contraintes sémantiques (ex. un nombre doit être positif pour une propriété donnée).

La syntaxe de définition décrit les valeurs qui sont permises et les interactions entre ces valeurs. Un composant peut-être un mot-clé, un littéral, une valeur d'un type donné ou une autre propriété CSS.

## Les types de composants

### Les mots-clés

#### Les mots-clés génériques

Un mot-clé avec une signification prédéfinie, qui peut apparaître littéralement, sans apostrophes ou guillemets (ex. `auto`, `smaller` ou `ease-in`).

#### `inherit`, `initial` et `unset`

Toutes propriétés CSS acceptent les mots-clés `inherit`, `initial` et `unset` définies par la spécification CSS. Ces mots-clés ne sont pas listés dans la définition de la syntaxe et sont définies implicitement.

### Les littéraux

En CSS, quelques caractères peuvent apparaître directement (ex. la barre oblique « / » ou la virgule « , ») et sont utilisés dans les définitions d'une propriété pour séparer ses composantes. La virgule est généralement utilisée pour séparer des valeurs d'une liste ou des paramètres d'une fonction. La barre oblique sépare des composantes sémantiquement différentes mais avec une syntaxe similaire. Généralement, la barre oblique est utilisée dans les propriétés raccourcies pour séparer les composants du même type mais qui sont associés aux différentes propriétés détaillées.

Ces deux symboles sont utilisés tels quels dans la définition d'une valeur.

### Les types de donnée

#### Les types de donnée simples

Certains types de donnée sont utilisés pour différentes propriétés et sont définis pour l'ensemble des valeurs de la spécification. Ce sont les types de donnée simples et sont représentés par leur nom encadré par des chevrons (le type `angle` est donc représenté par : {{ cssxref("&lt;angle&gt;") }}, {{cssxref("&lt;string&gt;")}}, et ainsi de suite).

#### Les types de donnée non terminaux

D'autres types de donnée, moins utilisés, sont appelés types de donné non-terminaux et sont également encadrés par des chevrons.

Les types de donnée non terminaux sont de deux sortes :

- Les types de donnée qui utilisent le même nom qu'une propriété. Dans ce cas, le type de donnée correspond à l'ensemble des valeurs utilisé par la propriété. Ceux-ci sont généralement utilisés dans les définitions des propriétés raccourcies.
- Les types de donnée dont le nom de n'est pas celui d'une propriété. Ces types de donnée sont très proches des types simples. La seule différence est l'emplacement de leur définition : dans ce cas, la définition est généralement très proche de la définition de la propriété qui les utilise.

## Les combinateurs

### Les crochets

Les crochets permettent de regrouper plusieurs entités, combinateurs et multiplicateurs pour les transformer en un seul composant. Cela permet de grouper les composants afin d' appliquer des règles de priorités (supérieures aux règles de précédence).

    bold [ thin && <length> ]

Cet exemple pourra illustrer les valeurs suivantes :

- `bold thin 2vh`
- `bold 0 thin`
- `bold thin 3.5em`

Mais ne correspondra pas à :

- `thin bold 3em` car `bold` est juxtaposé au composant défini entre les crochets alors qu'il doit apparaître avant.

### Juxtaposition

Si on place plusieurs mots-clés, littéraux ou types de donnée les uns à la suite des autres, séparés par un ou plusieurs blancs, cela indique que tous les composants sont **obligatoires et doivent apparaître dans cet ordre**.

    bold <length> , thin

Cet exemple pourra illustrer les valeurs suivantes :

- `bold 1em, thin`
- `bold 0, thin`
- `bold 2.5cm, thin`
- `bold 3vh, thin`

Mais il ne correspondra pas à :

- `thin 1em, bold` car les entités ne sont pas dans l'ordre indiqué
- `bold 1em thin` car les entités sont obligatoires et la virgule qui est un littéral doit être présente
- `bold 0.5ms, thin` car les valeurs `ms` ne sont pas des valeurs du type {{cssxref("&lt;length&gt;")}}

### Double esperluette

Lorsqu'on sépare deux ou plusieurs composants par une double esperluette, cela signifie que **toutes les entités sont obligatoires mais peuvent apparaître dans n'importe quel ordre**.

    bold && <length>

Cet exemple pourra illustrer les valeurs suivantes :

- `bold 1em`
- `bold 0`
- `2.5cm bold`
- `3vh bold`

Mais il ne correspondra pas à :

- `bold` car les deux composants doivent apparaître.
- `bold 1em bold` car les deux composants doivent apparaître exactement une fois.

> **Note :** La juxtaposition est prioritaire par rapport à la double esperluette. `bold thin && <length>` est donc équivalent à `[ bold thin ] && <length>`. Il décrit `bold thin <length>` ou `<length> bold thin` mais pas `bold <length> thin`.

### Double barre

Lorsque deux ou plusieurs composants sont séparés par une double barre verticale `||`. Cela signifie qu'au moins un composant doit **être présent et qu'ils peuvent apparaître dans n'importe quel ordre**. Généralement, ceci est utilisé pour définir les différentes valeurs d'une propriété raccourcie.

    <'border-width'> || <'border-style'> || <'border-color'>

Cet exemple pourra illustrer les valeurs suivantes :

- `1em solid blue`
- `blue 1em`
- `solid 1px yellow`

Mais il ne correspondra pas à :

- `blue yellow` car le composant doit apparaître au plus une fois.
- `bold` car le mot-clé n'est pas permis pour aucune valeur de l'entité.

> **Note :** La double esperluette est prioritaire par rapport à la double barre. `bold || thin && <length>` est équivalent à `bold || [ thin && <length> ]` qui décrit `bold`, `thin <length>`, `bold thin <length>`, ou `thin <length> bold` mais pas `<length> bold thin` car bold, s'il est présent doit apparaître avant `thin && <length>`.

### La barre verticale

Lorsqu'on sépare deux entités par une barre verticale. Cela signifie que les différentes options sont exclusives : **seule une des options doit être présente**. Généralement, cela permet de séparer différents mots-clés possible.

    <percentage> | <length> | left | center | right | top | bottom

Cet exemple pourra illustrer les valeurs suivantes :

- `3%`
- `0`
- `3.5em`
- `left`
- `center`
- `right`
- `top`
- `bottom`

Mais il ne correspondra pas à :

- `center 3%` car seul un seul des composants doit être présent.
- `3em 4.5em` car un composant doit être présent au plus une seule fois.

> **Note :** La double barre verticale est prioritaire par rapport à la simple barre verticale. Ainsi `bold | thin || <length>` est équivalent à `bold | [ thin || <length> ]` qui décrit `bold`, `thin`, `<length>`, `<length> thin` ou `thin <length>` mais pas `bold <length>` car seule entité peut être présente.

## Les multiplicateurs

Un multiplicateur est un signe qui indique nombre de fois qu'une entité peut être répétée. Sans aucun multiplicateur, une entité doit apparaître exactement une fois.

### L'astérisque (`*`)

L'astérisque indique qu'une entité peut apparaître **zéro, une ou plusieurs fois**.

    bold smaller*

Cet exemple pourra illustrer les valeurs suivantes :

- `bold`
- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` and so on.

Mais il ne correspondra pas à :

- `smaller` car `bold` est juxtaposé et doit apparaître avant le mot-clé `smaller`.

### Plus (`+`)

Le multiplicateur « plus » indique que l'entité peut apparaître **une ou plusieurs fois**.

    bold smaller+

Cet exemple pourra illustrer les valeurs suivantes :

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller` and so on.

Mais il ne correspondra pas à :

- `bold` car `smaller` doit apparaître au moins une fois
- `smaller` car `bold` est juxtaposé et doit apparaitre avant `smaller`.

### Le point d'interrogation (`?`)

Le point d'interrogation indique que l'entité est optionnelle et doit apparaître **zéro ou une fois**.

    bold smaller?

Cet exemple pourra illustrer les valeurs suivantes :

- `bold`
- `bold smaller`

Mais il ne correspondra pas à :

- `bold smaller smaller` car `smaller` doit apparaître au plus une fois
- `smaller` car `bold` est juxtaposé et doit apparaître avant le mot-clé `smaller` s'il est présent.

### Les accolades (`{ }`)

Les accolades encadrent deux entiers A et B, séparés par une virgule et indiquent que l'entité **doit apparaître au moins A fois et au plus B fois**.

    bold smaller{1,3}

Cet exemple pourra illustrer les valeurs suivantes :

- `bold smaller`
- `bold smaller smaller`
- `bold smaller smaller smaller`

Mais il ne correspondra pas à :

- `bold` car `smaller` doit apparaître au moins une fois.
- `bold smaller smaller smaller smaller` car `smaller` doit apparaître au plus trois fois.
- `smaller` car `bold` est juxtaposé et doit apparaître avant le mot-clé `smaller`.

### Dièse (`#`)

Le symbole dièse indique qu'une entité doit être répétée **une ou plusieurs fois et que chaque occurrence est séparée par une virgule**.

    bold smaller#

Cet exemple pourra illustrer les valeurs suivantes :

- `bold smaller`
- `bold smaller, smaller`
- `bold smaller, smaller, smaller` and so on.

Mais il ne correspondra pas à :

- `bold` car `smaller` doit apparaître au moins une fois.
- `bold smaller smaller smaller` car les différentes occurrences de `smaller` doivent être séparées par des virgules.
- `smaller` car `bold` est juxtaposé et doit apparaître avant toute occurrence du mot-clé `smaller`.

### Point d'exclamation (`!`)

Le multiplicateur _point d'exclamation_ est utilisé après un groupe pour indiquer que celui-ci ne doit produire qu'une seule valeur. Ici, même si la grammaire des éléments du groupe indiquent que tous les composants peuvent être absents, il faut qu'il y ait au moins un composant présent.

    [ bold? smaller? ]!

Cet exemple correspondra aux valeurs suivantes :

- `bold`
- `smaller`
- `bold smaller`

Mais pas à :

- ni `bold` ni `smaller`, car il faut au moins l'un des deux.
- `smaller bold`, car `bold` est juxtaposé et doit apparaître avant le mot-clé `smaller`.
- `bold smaller bold`, car `bold` et `smaller` doivent apparaître au plus une fois.

## Récapitulatif

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Signe</th>
      <th scope="col">Nom</th>
      <th scope="col">Description</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th colspan="4">Combinateurs</th>
    </tr>
    <tr>
      <td></td>
      <td>Juxtaposition</td>
      <td>
        Les composants sont obligatoires et doivent apparaître dans cet ordre.
      </td>
      <td><code>solid &#x3C;length></code></td>
    </tr>
    <tr>
      <td><code>&#x26;&#x26;</code></td>
      <td>Double esperluette</td>
      <td>
        Les composants sont obligatoires mais peuvent apparaître dans n'importe
        quel ordre.
      </td>
      <td><code>&#x3C;length> &#x26;&#x26; &#x3C;string></code></td>
    </tr>
    <tr>
      <td><code>||</code></td>
      <td>Double barre</td>
      <td>
        Au moins un des composants doit être présent et ils peuvent apparaître
        dans n'importe quel ordre.
      </td>
      <td>
        <code>&#x3C;'border-image-outset'> || &#x3C;'border-image-slice'></code>
      </td>
    </tr>
    <tr>
      <td><code>|</code></td>
      <td>Barre simple</td>
      <td>Un et un seul des composants doit être présent.</td>
      <td><code>smaller | small | normal | big | bigger</code></td>
    </tr>
    <tr>
      <td><code>[ ]</code></td>
      <td>Crochets</td>
      <td>
        Les composants peuvent être groupés pour avoir une priorité supérieure
        aux règles précédentes.
      </td>
      <td><code>bold [ thin &#x26;&#x26; &#x3C;length> ]</code></td>
    </tr>
    <tr>
      <th colspan="4">Multiplicateurs</th>
    </tr>
    <tr>
      <td></td>
      <td>Aucun multiplicateur</td>
      <td>Exactement 1 fois.</td>
      <td><code>solid</code></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>Astérisque</td>
      <td>0 ou plus.</td>
      <td><code>bold smaller*</code></td>
    </tr>
    <tr>
      <td><code>+</code></td>
      <td>Signe plus</td>
      <td>1 ou plus.</td>
      <td><code>bold smaller+</code></td>
    </tr>
    <tr>
      <td><code>?</code></td>
      <td>Point d'interrogation</td>
      <td>0 ou 1 fois (autrement dit, la valeur est optionnelle<em>)</em></td>
      <td><code>bold smaller?</code></td>
    </tr>
    <tr>
      <td><code>{A,B}</code></td>
      <td>Accolades</td>
      <td>Au moins <code>A</code> fois et au plus <code>B</code> fois.</td>
      <td><code>bold smaller{1,3}</code></td>
    </tr>
    <tr>
      <td><code>#</code></td>
      <td>Dièse</td>
      <td>
        1 ou plus de fois mais chaque occurrence doit être séparée d'une autre
        par une virgule.
      </td>
      <td><code>bold smaller#</code></td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                | État                             | Comment                                |
| ------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------- |
| {{SpecName("CSS3 Values", "#value-defs", "Value definition syntax")}}                 | {{Spec2('CSS3 Values')}} | Ajout du multiplicateur avec le dièse. |
| {{SpecName("CSS2.1", "about.html#value-defs", "Value definition syntax")}}         | {{Spec2('CSS2.1')}}         | Ajout de la double esperluette.        |
| {{SpecName("CSS1", "#notation-for-property-values", "Value definition syntax")}} | {{Spec2('CSS1')}}         | Définition initiale.                   |
