---
title: Les variables CSS
slug: Web/CSS/Using_CSS_custom_properties
translation_of: Web/CSS/Using_CSS_custom_properties
---
{{CSSRef}}

**Les propriétés personnalisées CSS** (_custom properties_ en anglais, aussi parfois appelés **variables CSS**) sont des entités définies par les développeurs ou les utilisateurs d'une page Web, contenant des valeurs spécifiques utilisables à travers le document. Elles sont initialisées avec des propriétés personnalisées (par exemple **`--main-color: black;`**) et accessibles en utilisant la notation spécifique {{cssxref("var", "var()")}} (par exemple : **`color: var(--main-color);`**).

Des sites et applications web complexes peuvent avoir des feuilles de style où de nombreuses valeurs sont répétées. Ainsi, la même couleur pourra être utilisée à des centaines d'endroits où il faudra la mettre à jour si besoin. Les propriétés personnalisées permettent de stocker une valeur à un endroit puis de réutiliser cette valeur (on factorise ainsi le code).

## Utilisation simple

Voici comment on déclare une variable :

```css
element {
  --main-bg-color: brown;
}
```

Et voici comment on l'utilise

```css
element {
  background-color: var(--main-bg-color);
}
```

## Problématique

Lors de l'élaboration de sites de grande envergure, leurs auteurs font parfois face à des soucis de maintenabilité. De grandes feuilles de styles sont utilisées et de nombreuses informations se répètent. Par exemple, maintenir un thème de couleurs à travers un document nécessite la réutilisation des valeurs des couleurs à plusieurs endroits dans les fichiers CSS. Modifier un thème, en changeant une couleur ou en le récrivant entièrement, devient alors une tâche complexe demandant de la précision, là où un simple trouver et remplacer ne suffit pas.

Le problème peut s'aggraver en utilisant les _frameworks_ CSS puisque modifier une couleur demande de modifier le framework lui-même. Les pré-processeurs comme [LESS](https://lesscss.org/) ou [Sass](https://sass-lang.com/) peuvent faciliter cette tâche, mais peuvent également complexifier le processus de création en ajoutant une étape de compilation. Les propriétés personnalisées permettent d'utiliser une des principales fonctionnalités des pré-processeurs, sans cette étape de compilation.

Le deuxième avantage de ces variables vient du fait que le nom lui-même contient des informations sémantiques. Les fichiers CSS deviennent alors plus facile à lire et à comprendre : écrire `main-text-color` permet de mieux s'y retrouver au fur et à mesure de la lecture qu'une valeur hexadécimale comme `#00ff00`, surtout si la même couleur est utilisée dans un autre contexte.

## Définition

Les propriétés personnalisées ont actuellement deux formes :

- les variables, qui sont des associations entre un identifiant et une valeur utilisables à la place de n'importe quelle valeur normale, en utilisant la notation fonctionnelle `var()`&nbsp;: `var(--example-variable)` retourne la valeur de `--example-variable`.
- les propriétés personnalisées, qui sont des propriétés spéciales notées `--*` où `*` représente le nom de la variable. Elles sont utilisées pour définir la valeur d'une variable donnée : `--example-variable: 20px;` est une déclaration en CSS, utilisant la propriété personnalisée `--*` pour initialiser la valeur de la variable CSS `--example-variable` à `20px`.

> **Note :** Le préfixe de propriété personnalisée était noté `var-` dans les précédentes spécifications, mais a ensuite été changé pour `--`. Firefox 31 et supérieurs respectent cette nouvelle notation. ({{bug(985838)}})

Les propriétés personnalisées sont similaires aux propriétés ordinaires. Elles sont sujettes à la cascade et héritent leur valeur de leur parent si elles ne sont pas redéfinies.

## Premiers pas avec les propriétés personnalisées CSS

Commençons avec cette feuille CSS simple colorant les éléments de différentes classes avec la même couleur :

### Exemple 1

```css
.un {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.deux {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.trois {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 75px;
}
.quatre {
  color: white;
  background-color: brown;
  margin: 10px;
  width: 100px;
}

.cinq {
  background-color: brown;
}
```

Appliquons-le à ce code HTML :

```html
<div>
    <div class="un">Toto</div>
    <div class="deux">Texte <span class="cinq">- encore du texte</span></div>
    <input class="trois">
    <textarea class="quatre">Lorem Ipsum</textarea>
</div>
```

ce qui donne ceci :

{{EmbedLiveSample("Exemple_1",600,180)}}

Remarquez la répétition dans le CSS. La couleur d'arrière-plan est définie à `brown` à plusieurs endroits. Certaines déclarations peuvent être faites plus haut dans la cascade et le problème se résoudra grâce à l'héritage. Mais pour des projets non-triviaux, cela n'est pas toujours possible. En déclarant une variable dans la pseudo-classe {{cssxref(":root")}}, un développeur CSS peut éviter certaines répétitions en utilisant cette variable.

### Exemple 2

```css
:root {
  --main-bg-color: brown;
}

.un {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 50px;
  height: 50px;
  display: inline-block;
}

.deux {
  color: white;
  background-color: black;
  margin: 10px;
  width: 150px;
  height: 70px;
  display: inline-block;
}
.trois {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 75px;
}
.quatre {
  color: white;
  background-color: var(--main-bg-color);
  margin: 10px;
  width: 100px;
}

.cinq {
  background-color: var(--main-bg-color);
}
```

```html hidden
<div>
    <div class="un">Toto</div>
    <div class="deux">Text <span class="cinq">- more text</span></div>
    <input class="trois">
    <textarea class="quatre">Lorem Ipsum</textarea>
</div>
```

Ce code donne le même résultat que précédemment mais permet de n'utiliser la propriété désirée qu'une seule fois.

## Héritage des propriétés personnalisées et valeurs par défaut

Il y a un héritage des propriétés personnalisées. Cela signifie que si une propriété n'est pas définie sur un élément, la valeur prise en compte sera celle utilisée pour la propriété de l'élément parent. Le fragment de document suivant :

```html
<div class="un">
  <div class="deux">
    <div class="trois">
    </div>
    <div class="quatre">
    </div>
  </div>
</div>
```

associé à cette feuille de style :

```css
.deux {
  --test: 10px;
}

.trois {
  --test: 2em;
}
```

Dans ce cas, les résultats de `var(--test)` seront :

- `10px` pour l'élément avec `class="deux"`
- `2em` pour l'élément avec `class="trois"`
- `10px` pour l'élément avec `class="quatre"` : la valeur est héritée depuis le parent
- _invalid value_ pour l'élément avec `class="un"`, c'est la valeur par défaut utilisée pour les différentes propriétés personnalisées.

Gardez à l'esprit qu'il s'agit de propriétés personnalisées et non de propriétés personnalisées réelles. La valeur est calculée là où elle est nécessaire, non stockée pour être utilisée dans d'autres règles. Par exemple, vous ne pouvez pas définir une propriété pour un élément et espérer l'extraire dans la règle du descendant d'un frère. La propriété est uniquement définie pour le sélecteur correspondant et ses descendants, comme tout CSS normal.

Avec [`var()`](</fr/docs/Web/CSS/var()>) on peut définir plusieurs valeurs par défaut lorsque la variable donnée n'est pas définie. Cela peut s'avérer utile lorsqu'on travaille avec des éléments personnalisés (_Custom Elements_) et le _Shadow DOM_.

Le premier argument passé à la fonction est le nom de la [propriété personnalisée](https://www.w3.org/TR/css-variables/#custom-property "CSS Custom Properties for Cascading Variables Module Level 1") qui doit être substituée. Le deuxième argument, s'il est fourni, indique la valeur par défaut qui est utilisée lorsque la [propriété personnalisée](https://www.w3.org/TR/css-variables/#custom-property "CSS Custom Properties for Cascading Variables Module Level 1") en question est invalide.

> **Note :** Attention, la valeur fournie comme valeur par défaut ne pourra pas être utilisée si le navigateur ne prend pas en charge les propriétés personnalisées CSS. Elle sera uniquement utilisée si la valeur précédente n'a pu être calculée ou si elle est invalide.

```css
.deux {
  color: var(--my-var, red);
  /* Red si --my-var n'est pas définie */
}

.trois {
  background-color: var(--my-var, var(--my-background, pink));
  /* rose (pink) si --my-var et --my-background ne sont pas définies */
}

// Suite invalide :
.trois {
  background-color: var(--my-var, --my-background, pink);
}
```

> **Note :** La syntaxe pour la valeur de recours, comme celle des [propriétés personnalisées](https://www.w3.org/TR/css-variables/#custom-property), permet d'utiliser une virgule. Ainsi, `var(--toto, red, blue)` définit une valeur de recours égale à `red, blue`, c'est-à-dire tout ce qui est écrit après la première virgule. Si la deuxième valeur est incorrecte, elle ne pourra pas être utilisée et la règle sera invalide.
>
> La syntaxe de la deuxième règle (sur `.trois`) permet d'utiliser une autre variable comme variable de secours et une autre valeur (`pink`) dans le cas où cette deuxième variable ne fonctionne pas.

> **Note :** Des problèmes de performances ont pu être observés causant un rendu plus lent des pages car le navigateur doit analyser l'ensemble des variables pour voir si elles sont disponibles.

## Validité et valeurs

Le concept classique de validité en CSS, lié à chaque propriété, n'est pas très utile en ce qui concerne les propriétés personnalisées. Quand la valeur d'une propriété personnalisée est lue, le navigateur ne sait pas à quel moment elle sera utilisée. Il doit donc considérer quasiment toutes les valeurs comme _valides_.

Malheureusement, ces valeurs valides peuvent être utilisées, via la notation fonctionnelle `var()`, dans un contexte où cela n'aurait pas de sens. Les propriétés et variables personnalisées peuvent mener à des déclarations CSS invalides, conduisant à un nouveau concept de _valide lors de l'exécution_.

## Gestion des variables invalides

Lorsque le navigateur analyse une substitution `var()` invalide, c'est la valeur initiale ou héritée de la propriété qui est utilisée. Par exemple :

### HTML

```html
<p>La couleur initiale d'un paragraphe est noire.</p>
```

### CSS

```css
:root { --text-color: 16px; }
p { color: blue; }
p { color: var(--text-color); }
```

Comme on pourrait s'y attendre, la valeur applique la substitution avec `--text-color` à la place de `var(--text-color)` mais `16px` n'est pas une valeur valide pour {{cssxref("color")}}. Après la substitution, la déclaration n'a plus aucun sens. Le navigateur résoud ce problème en deux étapes :

1.  Il vérifie si la propriété peut être héritée (ici `color`) : c'est bien le cas mais dans notre exemple `<p>` n'a aucun parent avec une couleur définie, il passe donc à l'étape suivante.
2.  La valeur utilisée est **la valeur initiale par défaut**, pour `color`, c'est `black`.

### Résultat

{{EmbedLiveSample('Gestion_des_variables_invalides')}}

> **Note :** La couleur du paragraphe ne sera pas bleue car une substitution invalide est remplacée par la valeur héritée ou la valeur initiale, pas par les valeurs provenant d'éventuelles autres règles.
>
> Si on avait directement écrit `color: 16px` (sans substitution), c'est alors la déclaration précédente qui aurait été utilisée.

## Manipulation des variables en JavaScript

Il est possible d'utiliser les valeurs des propriétés personnalisés en JavaScript de la même façon que les propriétés standards.

```js
// obtenir une variable à partir d'un style en ligne (dans un élément html)
element.style.getPropertyValue("--ma-variable");

// obtenir une variable par ailleurs
getComputedStyle(element).getPropertyValue("--ma-variable");

// définir une variable dans un style en ligne
element.style.setProperty("--ma-variable", varJS + 4);
```

## Compatibilité des navigateurs

{{Compat("css.properties.custom-property")}}

> **Note :** Dans les versions antérieures de la spécification, le préfixe indiquant les propriétés personnalisées était `var-`. Ce préfixe a ensuite été modifié en `--`. et Firefox 31 et les versions ultérieures respectent cette spécification  (cf. {{bug(985838)}})

## Voir aussi

- {{cssxref("--*", "Les propriétés personnalisées")}}
