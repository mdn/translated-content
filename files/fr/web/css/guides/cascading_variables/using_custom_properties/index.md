---
title: Utiliser des propriétés personnalisées CSS (variables)
short-title: Utiliser des propriétés personnalisées
slug: Web/CSS/Guides/Cascading_variables/Using_custom_properties
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Les **propriétés personnalisées** (parfois appelées **variables CSS** ou **variables en cascade**) sont des entités définies par les auteur·ice·s CSS qui représentent des valeurs spécifiques à réutiliser dans tout un document. Elles sont définies à l'aide de la règle {{CSSxRef("@property")}} ou de la [syntaxe des propriétés personnalisées](/fr/docs/Web/CSS/Reference/Properties/--*) (par exemple, **`--primary-color: blue;`**). Les propriétés personnalisées sont accessibles avec la fonction CSS {{CSSxRef("var()")}} (par exemple, **`color: var(--primary-color);`**).

Les sites web complexes ont souvent de grandes quantités de CSS, ce qui entraîne souvent de nombreuses valeurs répétées. Par exemple, il est courant de voir la même couleur utilisée dans des centaines d'endroits différents dans les feuilles de style. Changer une couleur qui a été dupliquée à plusieurs endroits nécessite une recherche et un remplacement dans toutes les règles et fichiers CSS. Les propriétés personnalisées permettent de définir une valeur à un endroit, puis de la référencer à plusieurs autres endroits, ce qui facilite le travail. Un autre avantage est la lisibilité et la sémantique. Par exemple, `--couleur-principale-texte` est plus facile à comprendre que la couleur hexadécimale `#00ff00`, surtout si la couleur est utilisée dans différents contextes.

Les propriétés personnalisées définies [en utilisant deux tirets (`--`)](/fr/docs/Web/CSS/Reference/Properties/--*) sont soumises à la [cascade](/fr/docs/Web/CSS/Guides/Cascade/Introduction) et héritent de leur valeur de leur parent.
La règle {{CSSxRef("@property")}} permet un contrôle plus précis sur la propriété personnalisée et vous permet de définir si elle hérite de sa valeur d'un parent, quelle est la valeur initiale et quelles contraintes de type doivent s'appliquer.

> [!NOTE]
> Les variables ne fonctionnent pas à l'intérieur des requêtes média et des requêtes de conteneur.
> Vous pouvez utiliser la fonction {{CSSxRef("var()")}} dans n'importe quelle partie d'une valeur dans n'importe quelle propriété sur un élément.
> Vous ne pouvez pas utiliser {{CSSxRef("var()")}} pour les noms de propriétés, les sélecteurs ou autre chose en dehors des valeurs de propriétés, ce qui signifie que vous ne pouvez pas l'utiliser dans une requête média ou une requête de conteneur.

## Déclarer des propriétés personnalisées

En CSS, vous pouvez déclarer une propriété personnalisée en utilisant deux tirets comme préfixe pour le nom de la propriété, ou en utilisant la règle {{CSSxRef("@property")}}.
Les sections suivantes décrivent comment utiliser ces deux méthodes.

### Utiliser un préfixe de deux tirets (`--`)

Une propriété personnalisée préfixée par deux tirets commence par `--`, suivie du nom de la propriété (par exemple, `--ma-propriete`), et d'une valeur de propriété qui peut être n'importe quelle [valeur CSS valide](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units).
Comme toute autre propriété, elle est écrite à l'intérieur d'un ensemble de règles.
L'exemple suivant montre comment créer une propriété personnalisée `--couleur-principale-fond` et utilise une valeur de couleur nommée ({{CSSxRef("&lt;named-color&gt;")}}) `brown`&nbsp;:

```css
section {
  --couleur-principale-fond: brown;
}
```

Le sélecteur donné à l'ensemble de règles ({{HTMLElement("section")}}) dans l'exemple ci-dessus) définit la portée dans laquelle la propriété personnalisée peut être utilisée.
Pour cette raison, une pratique courante consiste à définir les propriétés personnalisées sur la pseudo-classe {{CSSxRef(":root")}}, afin qu'elles puissent être référencées globalement&nbsp;:

```css
:root {
  --couleur-principale-fond: brown;
}
```

Ce n'est pas toujours le cas&nbsp;: vous pouvez avoir une bonne raison de limiter la portée de vos propriétés personnalisées.

> [!NOTE]
> Les noms de propriétés personnalisées sont sensibles à la casse — `--ma-couleur` est traité comme une propriété personnalisée distincte de `--Ma-couleur`.

### Utiliser la règle `@property`

La règle {{CSSxRef("@property")}} permet d'être plus expressif dans la définition d'une propriété personnalisée en offrant la possibilité d'associer un type à la propriété, de définir des valeurs par défaut et de contrôler l'héritage.
L'exemple suivant crée une propriété personnalisée appelée `--couleur-logo` qui attend une couleur ({{CSSxRef("&lt;color&gt;")}})&nbsp;:

```css
@property --couleur-logo {
  syntax: "<color>";
  inherits: false;
  initial-value: #c0ffee;
}
```

Si vous souhaitez définir ou travailler avec des propriétés personnalisées en JavaScript plutôt que directement en CSS, il existe une API correspondante à cet effet.
Vous pouvez en savoir plus sur son fonctionnement sur la page de [l'API des propriétés et valeurs CSS](/fr/docs/Web/API/CSS_Properties_and_Values_API).

### Référencer les propriétés personnalisées avec `var()`

Quelle que soit la méthode choisie pour définir une propriété personnalisée, vous les utilisez en référencant la propriété dans une fonction {{CSSxRef("var()")}} à la place d'une valeur de propriété standard&nbsp;:

```css
details {
  background-color: var(--couleur-principale-fond);
}
```

## Premiers pas avec les propriétés personnalisées

Commençons par un peu de HTML sur lequel nous aimerions appliquer des styles.
Il y a un `<div>` qui agit comme un conteneur et qui inclut quelques éléments enfants, certains avec des éléments imbriqués&nbsp;:

```html
<div class="conteneur">
  <div class="un">
    <p>Un</p>
  </div>
  <div class="deux">
    <p>Deux</p>
    <div class="trois">
      <p>Trois</p>
    </div>
  </div>
  <input class="quatre" placeholder="Quatre" />
  <textarea class="cinq">Cinq</textarea>
</div>
```

Nous allons utiliser le CSS suivant pour mettre en forme quelques éléments différents en fonction de leurs classes (certaines règles de mise en page ne sont pas affichées ci-dessous afin que nous puissions nous concentrer sur les couleurs).
En fonction de leurs classes, nous donnons aux éléments des couleurs de fond `teal` ou `pink`&nbsp;:

```css hidden
/* Définir les polices, les bordures et les marges */
body,
textarea,
::placeholder {
  font-family: sans-serif;
  color: white;
}

div,
input,
textarea {
  border: 2px black solid;
  padding: 4px;
  margin: 4px;
}

.conteneur {
  display: grid;
  gap: 10px;
}
```

```css
/* Pour chaque classe, définir des couleurs */
.un {
  background-color: teal;
}

.deux {
  color: black;
  background-color: pink;
}

.trois {
  color: white;
  background-color: teal;
}

.quatre {
  background-color: teal;
}

.cinq {
  background-color: teal;
}
```

Ça produit le résultat suivant&nbsp;:

{{EmbedLiveSample("Premiers pas avec les propriétés personnalisées", 600, 360)}}

Il y a une opportunité d'utiliser des propriétés personnalisées pour remplacer les valeurs répétitives dans ces règles.
Après avoir défini `--couleur-principale-fond` dans la portée de `.conteneur` et référencé sa valeur à plusieurs endroits, les styles mis à jour ressemblent à ceci&nbsp;:

```css
/* Définir --couleur-principale-fond ici */
.conteneur {
  --couleur-principale-fond: teal;
}

/* Pour chaque classe, définir des couleurs */
.un {
  background-color: var(--couleur-principale-fond);
}

.deux {
  color: black;
  background-color: pink;
}

.trois {
  color: white;
  background-color: var(--couleur-principale-fond);
}

.quatre {
  background-color: var(--couleur-principale-fond);
}

.cinq {
  background-color: var(--couleur-principale-fond);
}
```

## Utiliser la pseudo-classe `:root`

Pour certaines déclarations CSS, il est possible de les déclarer plus haut dans la cascade et de laisser l'héritage CSS résoudre ce problème. Pour des projets non triviaux, ce n'est pas toujours possible. En déclarant une propriété personnalisée sur la pseudo-classe {{CSSxRef(":root")}} et en l'utilisant là où elle est nécessaire dans tout le document, un·e auteur·ice CSS peut réduire le besoin de répétition&nbsp;:

```css
/* Définir --couleur-principale-fond ici */
:root {
  --couleur-principale-fond: teal;
}

/* Pour chaque classe, définir des couleurs */
.un,
.trois,
.quatre,
.cinq {
  background-color: var(--couleur-principale-fond);
}

.deux {
  color: black;
  background-color: pink;
}
```

Cela conduit au même résultat que l'exemple précédent, mais permet d'avoir une déclaration canonique de la valeur de la propriété souhaitée (`--couleur-principale-fond: teal;`), ce qui est très utile si vous souhaitez modifier la valeur dans l'ensemble du projet plus tard.

## Héritage des propriétés personnalisées

Une propriété personnalisée définie en utilisant deux tirets `--` au lieu de `@property` hérite toujours de la valeur de son parent.
C'est démontré dans l'exemple suivant&nbsp;:

```html live-sample___dash-custom-property-inheritance
<div class="un">
  <p>Un</p>
  <div class="deux">
    <p>Deux</p>
    <div class="trois"><p>Trois</p></div>
    <div class="quatre"><p>Quatre</p></div>
  </div>
</div>
```

```css hidden live-sample___dash-custom-property-inheritance
div {
  color: black;
  font-family: sans-serif;
  width: 75%;
  height: 80%;
  margin: 4px;
  border: 2px black solid;
  display: inline-block;
}

p {
  margin: 0;
}

.un {
  height: 250px;
}

.deux {
  color: white;
  height: 80%;
}

.trois {
  color: black;
  height: 40%;
}

.quatre {
  color: white;
  height: 40%;
}
```

```css live-sample___dash-custom-property-inheritance
div {
  background-color: var(--couleur-boite);
}

.deux {
  --couleur-boite: teal;
}

.trois {
  --couleur-boite: pink;
}
```

{{EmbedLiveSample("dash-custom-property-inheritance", "100%", 280)}}

Les résultats de `var(--couleur-boite)` en fonction de l'héritage sont les suivants&nbsp;:

- `class="un"`&nbsp;: _valeur invalide_, c'est la valeur par défaut d'une propriété personnalisée définie de cette manière
- `class="deux"`&nbsp;: `teal`
- `class="trois"`&nbsp;: `pink`
- `class="quatre"`&nbsp;: `teal` (hérité de son parent)

Un aspect des propriétés personnalisées que les exemples ci-dessus démontrent est qu'elles ne se comportent pas exactement comme des variables dans d'autres langages de programmation.
La valeur est calculée là où elle est nécessaire, et non stockée et réutilisée dans d'autres parties d'une feuille de style.
Par exemple, vous ne pouvez pas définir la valeur d'une propriété et vous attendre à récupérer cette valeur dans la règle d'un descendant d'un frère.
La propriété n'est définie que pour le sélecteur correspondant et ses descendants.

### Utiliser `@property` pour contrôler l'héritage

La règle `@property` permet de définir explicitement si la propriété hérite ou non.
L'exemple suivant crée une propriété personnalisée en utilisant la règle `@property`.
L'héritage est désactivé, un type de données {{CSSxRef("&lt;color&gt;")}} est défini, et une valeur initiale de `teal` est définie.

L'élément parent définit `--couleur-boite` à une valeur de `green` et utilise `--couleur-boite` comme valeur pour sa couleur de fond.
L'élément enfant utilise également `background-color: var(--couleur-boite)`, et nous nous attendrions à ce qu'il ait la couleur `green` si l'héritage était activé (ou si elle était définie en utilisant la syntaxe à double tiret).

```html live-sample___at-property-inheritance
<div class="parent">
  <p>Élément parent</p>
  <div class="enfant">
    <p>Élément enfant avec l'héritage désactivé pour --couleur-boite.</p>
  </div>
</div>
```

```css hidden live-sample___at-property-inheritance
div {
  color: white;
  font-family: sans-serif;
  width: 200px;
  height: 200px;
  margin: 4px;
  padding: 8px;
  border: 2px black solid;
  display: inline-block;
}
```

```css live-sample___at-property-inheritance
@property --couleur-boite {
  syntax: "<color>";
  inherits: false;
  initial-value: teal;
}

.parent {
  --couleur-boite: green;
  background-color: var(--couleur-boite);
}

.enfant {
  width: 80%;
  height: 40%;
  background-color: var(--couleur-boite);
}
```

Parce que `inherits: false;` est défini dans la règle `@property`, et qu'une valeur pour la propriété `--couleur-boite` n'est pas déclarée dans la portée de `.enfant`, la valeur initiale de `teal` est utilisée à la place de `green` qui aurait été héritée du parent&nbsp;:

{{EmbedLiveSample("at-property-inheritance", "100%", 250)}}

## Valeurs de repli pour les propriétés personnalisées

Vous pouvez définir des valeurs de repli pour les propriétés personnalisées en utilisant la fonction `var()` et la valeur initiale de la règle `@property`.

> [!NOTE]
> Les valeurs de repli ne sont pas utilisées pour résoudre les problèmes de compatibilité lorsque les propriétés personnalisées CSS ne sont pas prises en charge, car la valeur de repli n'est pas utile dans ce cas.
> Les valeurs de repli couvrent le cas où le navigateur prend en charge les propriétés personnalisées CSS et est capable d'utiliser une valeur différente si la variable souhaitée n'est pas encore définie ou a une valeur invalide.

### Définir des valeurs de repli dans la fonction `var()`

En utilisant la fonction {{CSSxRef("var()")}}, vous pouvez définir plusieurs **valeurs de repli** lorsque la variable donnée n'est pas encore définie&nbsp;; cela peut être utile lors de l'utilisation de [éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements) et de [DOM d'ombre](/fr/docs/Web/API/Web_components/Using_shadow_DOM).

Le premier argument de la fonction est le nom de la propriété personnalisée. Le deuxième argument de la fonction est une valeur de repli optionnelle, qui est utilisée comme valeur de substitution lorsque la propriété personnalisée référencée est invalide.
La fonction accepte deux paramètres, en assignant tout ce qui suit la première virgule comme deuxième paramètre. Si le deuxième paramètre est invalide, le repli échoue. Par exemple&nbsp;:

```css
.un {
  /* Rouge si --ma-variable n'est pas définie */
  color: var(--ma-variable, red);
}

.deux {
  /* rose si --ma-variable et --mon-fond ne sont pas définies */
  color: var(--ma-variable, var(--mon-fond, pink));
}

.trois {
  /* Invalide : "--mon-fond, pink" */
  color: var(--ma-variable, --mon-fond, pink);
}
```

Inclure une propriété personnalisée comme valeur de repli, comme dans le deuxième exemple ci-dessus (`var(--ma-variable, var(--mon-fond, pink))`), est la bonne façon de fournir plus d'une valeur de repli avec `var()`.
Vous devez toutefois être conscient de l'impact sur les performances de cette méthode, car il faut plus de temps pour analyser les variables imbriquées.

> [!NOTE]
> La syntaxe de la valeur de repli, comme celle des propriétés personnalisées, permet les virgules. Par exemple, `var(--toto, red, blue)` définit une valeur de repli de `red, blue` — tout ce qui se trouve entre la première virgule et la fin de la fonction est considéré comme une valeur de repli.

### Valeurs de repli utilisant la valeur initiale de `@property`

En dehors de l'utilisation de `var()`, la valeur initiale définie dans la règle `@property` peut être utilisée comme mécanisme de repli.
En fait, nous avons déjà vu cela dans la section [héritage de `@property`](#utiliser_property_pour_contrôler_lhéritage).

L'exemple suivant définit une valeur initiale de `--couleur-boite` à `teal` en utilisant la règle `@property`.
Dans le jeu de règles suivant la règle `@property`, nous voulons définir `--couleur-boite` à `pink`, mais il y a une faute de frappe dans le nom de la valeur.
Il en va de même pour le troisième `<div>` où nous avons utilisé `2rem` pour la propriété personnalisée qui attend une valeur valide de [`<color>`](/fr/docs/Web/CSS/Reference/Values/color_value).
Les valeurs `2rem` et `peenk` sont toutes deux des valeurs de couleur invalides, donc la valeur initiale de `teal` est appliquée&nbsp;:

```css live-sample___at-property-initial-value
@property --couleur-boite {
  syntax: "<color>";
  initial-value: teal;
  inherits: false;
}

.un {
  --couleur-boite: pink;
  background-color: var(--couleur-boite);
}

.deux {
  --couleur-boite: peenk;
  background-color: var(--couleur-boite);
}

.trois {
  --couleur-boite: 2rem;
  background-color: var(--couleur-boite);
}
```

```css hidden live-sample___at-property-initial-value
div {
  color: white;
  font-family: sans-serif;
  width: 100px;
  height: 100px;
  margin: 4px;
  padding: 8px;
  border: 2px black solid;
  display: inline-block;
}

.un {
  color: black;
}
```

```html hidden live-sample___at-property-initial-value
<div class="un">
  <p>Un</p>
</div>
<div class="deux">
  <p>Deux.</p>
</div>
<div class="trois">
  <p>Trois.</p>
</div>
```

{{EmbedLiveSample("at-property-initial-value", "100%", 150)}}

## Propriétés personnalisées invalides

Chaque propriété CSS peut se voir attribuer un [ensemble de valeurs](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units) défini.
Si vous essayez d'attribuer une valeur à une propriété qui est en dehors de son ensemble de valeurs valides, elle est considérée comme _invalide_.

Lorsque le navigateur rencontre une valeur invalide pour une propriété CSS normale (par exemple, une valeur de `16px` pour la propriété {{CSSxRef("color")}}), il ignore la déclaration, et les éléments se voient attribuer les valeurs qu'ils auraient eues si la déclaration n'existait pas.
Dans l'exemple suivant, nous voyons ce qui se passe lorsqu'une déclaration CSS normale est invalide&nbsp;; `color: 16px;` est ignoré et la règle précédente `color: blue` est appliquée à la place&nbsp;:

```html live-sample___invalid-property
<p>Ce paragraphe est initialement en noir.</p>
```

```css live-sample___invalid-property
p {
  font-weight: bold;
  color: blue;
}

p {
  /* oups, c'est pas une couleur valide */
  color: 16px;
}
```

{{EmbedLiveSample("invalid-property", 100, 50)}}

Cependant, lorsque les valeurs des propriétés personnalisées sont analysées, le navigateur ne sait pas encore où elles sont utilisées, il doit donc considérer presque toutes les valeurs comme _valides_.
Malheureusement, ces valeurs valides peuvent être utilisées, avec la notation fonctionnelle `var()`, dans un contexte où elles pourraient ne pas avoir de sens.
Les propriétés et les variables personnalisées peuvent conduire à des déclarations CSS invalides, ce qui conduit au concept de _valide au moment du calcul_.

Lorsque le navigateur rencontre une substitution `var()` invalide, la valeur [initiale](/fr/docs/Web/CSS/Guides/Cascade/Property_value_processing#valeur_initiale) ou [héritée](/fr/docs/Web/CSS/Guides/Cascade/Inheritance) de la propriété est utilisée.
Cet exemple est similaire au précédent, sauf que nous utilisons une propriété personnalisée.

Le navigateur remplace la valeur de `--couleur-texte` à la place de `var(--couleur-texte)`, mais `16px` n'est pas une valeur de propriété valide pour {{CSSxRef("color")}}.
Après substitution, la propriété n'a pas de sens, donc le navigateur gère cette situation en deux étapes&nbsp;:

1. Vérifiez si la propriété {{CSSxRef("color")}} est héritée. Elle l'est, mais ce `<p>` n'a aucun parent avec la propriété `color` définie. Nous passons donc à l'étape suivante.
2. Définissez la valeur sur sa **valeur initiale par défaut**, qui est le noir.

```html live-sample___invalid-custom-property
<p>Ce paragraphe est initialement en noir.</p>
```

```css live-sample___invalid-custom-property
:root {
  --couleur-texte: 16px;
}

p {
  font-weight: bold;
  color: blue;
}

p {
  color: var(--couleur-texte);
}
```

{{EmbedLiveSample("invalid-custom-property", 100, 50)}}

Pour de tels cas, la règle `@property` peut prévenir des résultats inattendus en permettant de définir la valeur initiale de la propriété&nbsp;:

```html live-sample___invalid-custom-property-fallbacks
<p>Ce paragraphe est initialement en noir.</p>
```

```css live-sample___invalid-custom-property-fallbacks
@property --couleur-texte {
  syntax: "<color>";
  inherits: false;
  initial-value: teal;
}

:root {
  --couleur-texte: 16px;
}

p {
  font-weight: bold;
  color: blue;
}

p {
  color: var(--couleur-texte);
}
```

{{EmbedLiveSample("invalid-custom-property-fallbacks", 100, 50)}}

## Valeurs en JavaScript

Pour utiliser les valeurs des propriétés personnalisées en JavaScript, c'est comme pour les propriétés standard.

```js
// obtenir la variable depuis le style embarqué
element.style.getPropertyValue("--ma-variable");

// obtenir la variable depuis n'importe où
getComputedStyle(element).getPropertyValue("--ma-variable");

// définir la variable dans le style embarqué
element.style.setProperty("--ma-variable", jsVar + 4);
```

## Voir aussi

- La règle {{CSSxRef("@property")}}
- La fonction {{CSSxRef("var()")}}
- Le module [des propriétés pour les variables de la cascade CSS](/fr/docs/Web/CSS/Guides/Cascading_variables) module
- [Syntaxe des propriétés personnalisées](/fr/docs/Web/CSS/Reference/Properties/--*)
- [L'API des propriétés et valeurs CSS](/fr/docs/Web/API/CSS_Properties_and_Values_API)
