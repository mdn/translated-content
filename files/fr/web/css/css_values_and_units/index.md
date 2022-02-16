---
title: Valeurs et unités CSS
slug: Web/CSS/CSS_Values_and_Units
tags:
  - CSS
  - Reference
translation_of: Web/CSS/CSS_Values_and_Units
original_slug: Web/CSS/Valeurs_et_unités_CSS
---
{{CSSRef}}

Chaque déclaration CSS inclut une paire constituée d'une propriété et d'une valeur. La plupart de celles-ci sont définies dans le module de spécification _[CSS Values and Units](https://www.w3.org/TR/css-values-4/)_ (Valeurs et unités CSS). Dans cet article, nous verrons ces différents types et valeurs ainsi que des notions de base quant à leur utilisation. Pour obtenir des informattions plus détaillées, vous pouvez consulter la page de chacun de ces types.

## Types de données textuels

- {{cssxref("&lt;custom-ident&gt;")}}
- Des mots-clés prédéfinis tels que les identifiants (`<ident>`)
- {{cssxref("&lt;string&gt;")}}
- {{cssxref("&lt;url&gt;")}}

Une valeur dont le type de donnée est textuel peut être un identifiant CSS (`<ident>`) ou une chaîne de caractères (`<string>`). Lorsqu'il s'agit d'un identifiant CSS, celui-ci ne doit pas être entouré de doubles quotes (guillemets anglais). En revanche, les chaînes de caractères (`<string>`) doivent être délimitées par des quotes ou des doubles quotes.

Dans les spécifications, les valeurs qui peuvent être définies par un développeur web sont indiquées comme {{cssxref("&lt;custom-ident&gt;")}} ; ce type de valeur se comportera comme n'importe quel autre identifiant CSS. Ainsi, pour la propriété {{cssxref("grid-area")}}, on peut utiliser une valeur de type `<custom-ident>` et si on a une zone de grille nommée `content`, on l'indiquera sans quotes :

```css
.item {
  grid-area: content;
}
```

En revanche, lorsqu'on manipule une valeur de type {{cssxref("&lt;string&gt;")}}, comme ça peut être le cas lorsqu'on utilise la propriété {{cssxref("content")}}, il faut l'entourer de quotes :

```css
.item::after {
  content: "Voici le contenu.";
}
```

Si le type indiqué dans la spécification est `<custom-ident> | <string>`, cela nidiquera que les quotes sont optionnelles. C'est par exemple le cas avec les noms des animations :

```bash
@keyframe identifiantValide {
  /* on place les keyframes ici */
}

@keyframe 'chaineValide' {
  /* on place les keyframes ici */
}
```

Bien qu'on puisse généralement utiliser presque n'importe nom (y compris en le composant d'emojis), un identifiant ne peut pas être `none`, `unset`, `initial` ou `inherit`, ne peut pas commencer par un chiffre ou par deux tirets. De façon générale, il ne faut pas qu'un identifiant soit un mot-clé CSS existant. Pour plus d'informations, voir les pages {{cssxref("&lt;custom-ident&gt;")}} et {{cssxref("&lt;string&gt;")}}.

### Mots-clés prédéfinis

Les spécifications définissent également des mots-clés utilisables comme valeurs pour certaines propriétés. Ces mots-clés sont également des identifiants CSS et ne doivent pas être entourés de guillemets.

Lorsque vous consultez une spécification ou un article de MDN à propos d'une propriété, vous pourrez voir les mots-clés autorisés sous la forme suivante. Voici un exemple avec les valeurs autorisées pour la propriété {{cssxref("break-inside")}}.

    auto | avoid | avoid-page | avoid-column | avoid-region

Dans une déclaration, on pourra donc écrire (sans quote) :

```css
.box {
  break-inside: avoid;
}
```

### Mots-clés généraux

En complément des mots-clés définis pour certaines propriétés, il existe trois mots-clés utilisables pour l'ensemble des propriétés CSS : {{cssxref("initial")}}, {{cssxref("inherit")}} et {{cssxref("unset")}}.

Le mot-clé `initial` représente la valeur définie comme la valeur initiale de la propriété. Le mot-clé `inherit` correspond à la valeur calculée de la propriété sur l'élément parent si celle-ci est héritée.

Le mot-clé `unset` agit comme `inherit` ou `initial` selon que la propriété soit héritée ou non.

Une quatrième valeur, {{cssxref("revert")}}, a été ajoutée dans le module de spécification de niveau 4 sur la cascade mais sa prise en charge est encore faible et hétérogène (en février 2019).

### URL

Une valeur de type {{cssxref("&lt;url&gt;")}} s'utilise avec une notation fonctionnelle qui prend une chaîne de caractères (type `<string>`) comme argument et qui est une URL. La chaîne de caractères peut être une URL absolue ou relative. Ainsi, si on souhaite inclure une image d'arrière-plan, on pourra utiliser l'une ou l'autre de ces déclarations.

```css
.box {
  background-image: url("images/mon-arriere-plan.png");
}

.box {
  background-image: url("https://www.exammple.com/images/mon-arriere-plan.png");
}
```

On notera que la valeur passée à `url()` peut ne pas contenir de quotes. Dans ce cas, elle sera analysée comme une valeur `<url-token>` et devra respecter certaines règles supplémentaires quant à l'échappement de certains caractères. Voir la page {{cssxref("&lt;url&gt;")}} pour plus d'informations.

## Types de données numériques

- {{cssxref("&lt;integer&gt;")}}
- {{cssxref("&lt;number&gt;")}}
- {{cssxref("&lt;dimension&gt;")}}
- {{cssxref("&lt;percentage&gt;")}}

### Entiers

Un entier ({{cssxref("&lt;integer&gt;")}}) se compose d'un ou plusieurs chiffres entre `0` et `9` (exemple de valeurs : `1024` ou `-55`). Un entier peut être précédé d'un signe `+` ou `-`.

### Nombres

Un nombre ({{cssxref("&lt;number&gt;")}}) représente un nombre décimal pouvant avoir (ou non) une composante décimale. Le séparateur décimal utilisé est le point. Ainsi, `1` et `1.2` sont des nombres en CSS. Les nombres peuvent être précédés d'un signe `+` ou `-`.

### Dimensions

Une valeur {{cssxref("&lt;dimension&gt;")}} est un nombre (`<number>`) suivi directement d'une unité (par exemple `10px`). L'identifiant utilisé pour exprimer l'unité est insensible à la casse et est lui-même un identifiant. Il n'y a jamais d'espace entre le nombre et l'unité (`1 cm` ne sera pas valide). CSS utilise les dimensions pour les types suivants :

- {{cssxref("&lt;length&gt;")}} (longueurs avec des unités de distance)
- {{cssxref("&lt;angle&gt;")}}
- {{cssxref("&lt;time&gt;")}}
- {{cssxref("&lt;frequency&gt;")}}
- {{cssxref("&lt;resolution&gt;")}}

Nous verrons chacun de ces types dans les sections suivantes.

#### Unités de distance

Lorsqu'on peut utiliser une distance comme valeur d'une propriété, cette valeur est décrite avec le type {{cssxref("&lt;length&gt;")}}. Il existe deux types de longueur en CSS : les longueurs absolues d'une part et les longueurs relatives d'autre part.

Les unités de longueur relative permettent d'exprimer une distance relative à une autre grandeur. Ainsi, l'unité `em` sera relative à la taille (corps) de la police pour l'élément ; l'unité `vh` sera relative à la hauteur de la zone d'affichage (_viewport_).

| Unité  | Relative à                                                                                                                                         |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| `em`   | La taille (corps) de police de l'élément                                                                                                           |
| `ex`   | La hauteur d'un x avec la police utilisée par l'élément                                                                                            |
| `cap`  | La hauteur d'une majuscule nominale avec la police utilisée par l'élément                                                                          |
| `ch`   | La largeur moyenne d'un glyphe étroit et de l'espace alentour pour la police utilisée par l'élément (le glyphe concerné étant “0” (ZERO, U+0030)). |
| `ic`   | La largeur moyenne d'un glyphe large et de l'espace alentour pour la police utilisée par l'élément (exemple de glyphe “水” ).                      |
| `rem`  | La taille (corps) de police de l'élément racine                                                                                                    |
| `lh`   | La hauteur de la ligne de l'élément                                                                                                                |
| `rlh`  | La hauteur de la ligne de l'élément racine                                                                                                         |
| `vw`   | 1% de la largeur de la zone d'affichage (_viewport_)                                                                                               |
| `vh`   | 1% de la hauteur de la zone d'affichage (_viewport_)                                                                                               |
| `vi`   | 1% de la taille de la zone d'affichage sur l'axe en ligne (_inline axis_)                                                                          |
| `vb`   | 1% de la taille de la zone d'affichage sur l'axe de bloc (_block axis_)                                                                            |
| `vmin` | 1% de la zone d'affichage selon sa plus petite dimension                                                                                           |
| `vmax` | 1% de la zone d'affichage selon sa plus grande dimension                                                                                           |

Les unités de longueur absolue correspondent à des mesures physiques et sont ainsi particulièrement adaptées lors que le média d'affichage possède une taille fixe (l'impression par exemple). Ainsi, l'unité `cm` correspond à un centimètre physique.

| Unité | Nom                 | Équivalence         |
| ----- | ------------------- | ------------------- |
| `cm`  | Centimètre          | 1cm = 96px/2.54     |
| `mm`  | Millimètre          | 1mm = 1/10e de 1cm  |
| `Q`   | Quart de millimètre | 1Q = 1/40e de 1cm   |
| `in`  | Pouces (_inches_)   | 1in = 2.54cm = 96px |
| `pc`  | Picas               | 1pc = 1/16e de 1in  |
| `pt`  | Points              | 1pt = 1/72e de 1in  |
| `px`  | Pixels              | 1px = 1/96e de 1in  |

Lorsqu'on utilise une longueur nulle (sa valeur est `0`), l'identifiant correspondant à l'unité n'est pas obligatoire. Dans tous les autres cas, l'unité doit être écrite juste après la valeur (sans espace). L'identifiant de l'unité est insensible à la casse.

#### Unités angulaires

Les valeurs angulaires sont représentées avec le type {{cssxref("&lt;angle&gt;")}} et peuvent être décrites avec les unités suivantes :

| Unité  | Nom             | Description                              |
| ------ | --------------- | ---------------------------------------- |
| `deg`  | Degrés          | Un cercle se divise en 360 degrés égaux. |
| `grad` | Grades/Gradians | Un cercle se compose de 400 grades.      |
| `rad`  | Radians         | Un cercle se compose de 2π radians.      |
| `turn` | Tours           | Un cercle se compose d'un tour.          |

#### Unités temporelles

Les valeurs temporelles sont de type {{cssxref("&lt;time&gt;")}} et utilisent les unités suivantes.

| Unité | Nom           | Description             |
| ----- | ------------- | ----------------------- |
| `s`   | Secondes      |                         |
| `ms`  | Millisecondes | Un millième de seconde. |

#### Unités de fréquence

Les valeurs de fréquence ont le type {{cssxref("&lt;frequency&gt;")}} et utilisent les valeurs suivantes.

| Unité | Nom       | Description                 |
| ----- | --------- | --------------------------- |
| `Hz`  | Hertz     | Nombre de fois par seconde. |
| `kHz` | Kilohertz | 1000 Hertz.                 |

#### Unités de résolution

Les résolutions sont représentées par des valeurs de type {{cssxref("&lt;resolution&gt;")}}. Elles correspondent à la taille d'un point sur une représentation graphique et décrivent la quantité de ces points sur un pixel, pouce ou centimètre CSS.

| Unité       | Description            |
| ----------- | ---------------------- |
| `dpi`       | Points par pouce.      |
| `dpcm`      | Points par centimètre. |
| `dppx`, `x` | Points par unité px.   |

### Pourcentages

Une valeur de type {{cssxref("&lt;percentage&gt;")}} représente une fraction d'une autre valeur de référence.

Les valeurs exprimées en pourcentages sont relatives à d'autres quantités (une longueur par exemple). Chaque propriété qui permet d'utiliser un pourcentage définit également la quantité à laquelle se réfère ce pourcentage. Cette quantité peut être une valeur d'une autre propriété du même élément, la valeur de la propriété sur un élément ancêtre, une caractéristique du bloc englobant ou autre chose.

Ainsi, si on utilise {{cssxref("width")}} avec un pourcentage sur une boîte. Ce pourcentage fera référence à la largeur calculée de l'élément parent de la boîte :

```css
.box {
  width: 50%;
}
```

### Mélanges entre les pourcentages et les dimensions

Certaines propriétés permettent d'utiliser une dimension avec deux types possibles (par exemple une longueur ou un pourcentage). Dans ce cas, la valeur mentionnée dans la spécification a une unité composite (ex. {{cssxref("&lt;length-percentage&gt;")}}). Voici les différentes unités composites qui existent :

- {{cssxref("&lt;frequency-percentage&gt;")}}
- {{cssxref("&lt;angle-percentage&gt;")}}
- {{cssxref("&lt;time-percentage&gt;")}}

### Types de données spéciaux (définis via d'autres spécifications)

- {{cssxref("&lt;color&gt;")}}
- {{cssxref("&lt;image&gt;")}}
- {{cssxref("&lt;position&gt;")}}

#### Couleur

Une valeur de type {{cssxref("&lt;color&gt;")}} permet de représenter une couleur pour un élément (par exemple la couleur de son arrière-plan). Ce type est défini dans le module de spécification _[CSS Color](https://drafts.csswg.org/css-color-3/)_.

#### Image

Une valeur de type {{cssxref("&lt;image&gt;")}} permet de représenter une image utilisable en CSS. Ce type est défini dans le module de spécification _[CSS Image Values and Replaced Content Module](https://www.w3.org/TR/css-images-4/)_.

#### Position

Le type {{cssxref("&lt;position&gt;")}} définit le positionnement, sur deux dimensions, d'un objet sur une zone de positionnement. Ce peut être le positionnement d'une image d'arrière-plan par rapport à son conteneur par exemple. Ce type est interprété comme {{cssxref("background-position")}} et est donc spécifié avec le module [_CSS Backgrounds and Borders_](https://www.w3.org/TR/css-backgrounds-3/).

### Notations fonctionnelles (fonctions)

- {{cssxref("calc()")}}
- {{cssxref("min()", "min()")}}
- {{cssxref("max()", "max()")}}
- {{cssxref("clamp()", "clamp()")}}
- {{cssxref("toggle", "toggle()")}}
- {{cssxref("attr()", "attr()")}}

Les notations fonctionnelles sont des types de valeur qui peuvent représenter des types plus complexes ou qui impliquent un traitement spécifique du moteur de rendu. La syntaxe commence par le nom de la fonction, immédiatement suivi d'une parenthèse gauche `(` suivie des arguments de la notation, suivis d'une parenthèse droite`)`. Les fonctions peuvent prendre plusieurs arguments qui ont une forme analogue à celle utilisée pour les valeurs des propriétés.

Les espaces sont optionnels mais autorisés à l'intérieur des parenthèses.

> **Note :** Contrairement à d'autres langages, la virgule n'est pas toujours le séparateur utilisé entre les arguments d'une notation fonctionnelle.

Certaines notations fonctionnelles historiques telles que `rgba()` utilisent des virgules pour séparer des arguments mais la plupart du temps, les virgules sont uniquement utilisées afin de séparer les éléments d'une liste. Si une virgule est utilisée comme séparateur entre des arguments, on peut ajouter un espace optionnel avant et après la virgule.

## Spécifications

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">État</th>
      <th scope="col">Commentaires</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{SpecName("CSS4 Values")}}</td>
      <td>{{Spec2("CSS4 Values")}}</td>
      <td>
        Ajout des unités <code>vi</code>, <code>vb</code>, <code>ic</code>,
        <code>cap</code>, <code>lh</code> et <code>rlh</code>.<br />Ajout des
        notations fonctionnelles  <code>min()</code>, <code>max()</code> et
        <code>clamp()</code>.<br />Ajout de  <code>toggle()</code>
      </td>
    </tr>
    <tr>
      <td>{{SpecName("CSS3 Values")}}</td>
      <td>{{Spec2("CSS3 Values")}}</td>
      <td>
        Ajout de
        <code>calc()</code
        >, <code>ch</code>, <code>rem</code>, <code>vw</code>, <code>vw</code>, <code>vmin</code>,<code> vmax</code>, <code
          >Q</code
        >
      </td>
    </tr>
    <tr>
      <td>{{SpecName("CSS4 Colors")}}</td>
      <td>{{Spec2("CSS4 Colors")}}</td>
      <td>
        Ajout des syntaxes sans virgule pour les fonctions
        <code>rgb()</code>, <code>rgba()</code>, <code>hsl()</code> et
        <code>hsla()</code>. Ajout des valeurs alpha pour  <code>rgb()</code> et
        <code>hsl()</code>, transformant ainsi <code>rgba()</code> et
        <code>hsla()</code> en alias respectifs (dépréciés).<br />Ajout du
        mot-clé de couleur <code>rebeccapurple</code>.<br />Ajout des couleurs
        sur 4 et 8 chiffres hexadécimaux où le dernier chiffre représente la
        valeur alpha.<br />Ajout des fonctions <code>hwb()</code>, <code
          >device-cmyk()</code
        >
        et <code>color()</code>.
      </td>
    </tr>
    <tr>
      <td>{{SpecName("CSS3 Colors")}}</td>
      <td>{{Spec2("CSS3 Colors")}}</td>
      <td>
        Dépréciation des couleurs système. Ajout des couleurs SVG. Ajout des
        fonctions <code>rgba()</code>, <code>hsl()</code> et
        <code>hsla()</code>.
      </td>
    </tr>
    <tr>
      <td>{{SpecName("CSS4 Images")}}</td>
      <td>{{Spec2("CSS4 Images")}}</td>
      <td>
        <p>
          Ajout des notations fonctionnelles <code>element()</code>,
          <code>image()</code>, <code>image-set()</code>,
          <code>conic-gradient()</code>
        </p>
      </td>
    </tr>
    <tr>
      <td>{{SpecName("CSS3 Images")}}</td>
      <td>{{Spec2("CSS3 Images")}}</td>
      <td>Définition initiale du type <code>image</code>.</td>
    </tr>
    <tr>
      <td>{{SpecName("CSS2.1")}}</td>
      <td>{{Spec2("CSS2.1")}}</td>
      <td> </td>
    </tr>
    <tr>
      <td>{{SpecName("CSS1")}}</td>
      <td>{{Spec2("CSS1")}}</td>
      <td>Définition initiale.</td>
    </tr>
  </tbody>
</table>

## Voir aussi

- [Les types de donnée de base en CSS](/fr/docs/Web/CSS/CSS_Types)
- [Introduction à CSS : les valeurs et les unités](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
