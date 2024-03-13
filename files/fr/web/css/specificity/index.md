---
title: Spécificité
slug: Web/CSS/Specificity
---

{{CSSRef}}

La **spécificité** est le moyen par lequel les navigateurs décident quelles valeurs de propriété CSS d'un élément sont les plus pertinentes et seront appliquées. La spécificité est basée sur les règles, ciblant un élément, composées par différents types de [sélecteurs CSS](/fr/docs/Web/CSS/Reference#sélecteurs).

## Détermination de la spécificité

La spécificité est l'importance donnée à une déclaration CSS, déterminée par le nombre de [types de sélecteur](#types_de_sélecteurs) dans le sélecteur correspondant. Lorsque plusieurs déclarations ont une même spécificité, la dernière déclaration trouvée dans la CSS est appliquée à l'élément. La spécificité ne s'applique que lorsque le même élément est ciblé par plusieurs déclarations. Selon les règles CSS, [les éléments ciblés directement](#éléments_ciblés_directement_vs_styles_hérités) seront toujours prioritaires par rapport aux règles héritées par un élément de leurs ancêtres.

> **Note :** [la proximité des éléments](#ignorance_de_la_proximité_dans_l'arborescence) dans l'arborescence du document n'a aucun effet sur la spécificité.

### Types de sélecteurs

Les types de sélecteurs de la liste suivante sont présentés dans l'ordre de spécificité croissante&nbsp;:

1. [Sélecteurs de type](/fr/docs/Web/CSS/Type_selectors) (ex. `h1`) et pseudo-éléments (ex. `::before`).
2. [Sélecteurs de classe](/fr/docs/Web/CSS/Class_selectors) (ex. `.exemple`), sélecteurs d'attributs (ex. `[type="radio"]`) et pseudo-classes (ex. `:hover`).
3. [Sélecteurs d'identifiant](/fr/docs/Web/CSS/ID_selectors) (ex. `#exemple`).

Sélecteur universel ({{CSSxRef("Universal_selectors", "*")}}), combinateurs ({{CSSxRef("Adjacent_sibling_combinator", "+")}}, {{CSSxRef("Child_combinator", "&gt;")}}, {{CSSxRef("General_sibling_combinator", "~")}}, [" "](/fr/docs/Web/CSS/Descendant_combinator), {{CSSxRef("Column_combinator", "||")}}) et pseudo-classe de négation ({{CSSxRef(":not", ":not()")}}) n'ont aucun effet sur la spécificité (cependant, les sélecteurs déclarés _à l'intérieur de_ `:not()` ont un effet).

Pour davantage d'informations, veuillez visiter&nbsp;: ["Spécificité" dans "Cascade et héritage"](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance#spécificité_2), vous pouvez également visiter&nbsp;: <https://specifishity.com>

Les styles ajoutés à un élément dans la balise HTML (ex.&nbsp;: `style="font-weight: bold;"`) sont prioritaires par rapport à tout style provenant d'une feuille de style externe et peuvent donc être considérés comme ayant la plus grande spécificité.

### L'exception !important

Lorsqu'une règle `important` est utilisée dans une déclaration de style, cette déclaration est prioritaire par rapport à toute autre déclaration. Même si, techniquement, `!important` n'a rien à voir avec la spécificité, elle interagit directement avec elle. Cependant, utiliser `!important,` est une **mauvaise pratique** et devrait être évité car cela rend le débogage difficile en affectant le traitement naturel en [cascade](/fr/docs/Web/CSS/Cascade) dans vos feuilles de styles. Lorsque deux déclarations en conflit avec la règle `!important` sont appliquées au même élément, la déclaration avec la plus haute spécificité sera prise en compte.

**Quelques règles de base&nbsp;:**

- **Toujours** trouver un moyen d'utiliser la spécificité avant de se résoudre à utiliser `!important`
- Utiliser `!important` **uniquement** sur des CSS spécifiques à une page pour remplacer des CSS étrangères (provenant de bibliothèques externes comme Bootstrap ou normalize.css).
- **Ne jamais** utiliser `!important` lorsque vous codez un plugin, une extension.
- **Ne jamais** utiliser `!important` sur des CSS appliquées à un site.

**Au lieu d'utiliser `!important`, envisager les points suivants&nbsp;:**

1. Utiliser mieux la cascade CSS
2. Utiliser davantage des règles spécifiques. En indiquant un ou plusieurs éléments avant l'élément sélectionné, la règle devient plus spécifique et sa priorité est accrue&nbsp;:

   ```html
   <div id="test">
     <span>Texte</span>
   </div>
   ```

   ```css
   div#test span {
     color: green;
   }
   div span {
     color: blue;
   }
   span {
     color: red;
   }
   ```

   L'ordre n'a aucune importance, le texte sera en vert (_green_) car cette règle est plus spécifique. (Également, la règle pour bleu est prioritaire par rapport à celle pour rouge, là encore l'ordre n'a pas d'importance)

3. En rapport avec le point 2, le fait de dupliquer des sélecteurs simples afin d''augmenter la spécificité lorsque vous n'avez aucun autre moyen de le faire, n'a aucun sens.

   ```css
   #monId#monId span {
     color: yellow;
   }
   .maClasse.maClasse span {
     color: orange;
   }
   ```

#### Utilisation de !important

##### A) Prendre le dessus sur les styles dans les balises HTML

L'effet de votre fichier CSS global qui définit les aspects visuels de votre site de manière générale peut être supplanté par les styles indiqués directement dans les balises HTML. Les deux pratiques que sont les styles dans les balises HTML et l'utilisation de `!important` sont considérées comme étant très mauvaises, mais parfois, vous devez pouvoir prioriser la dernière par rapport à la première.

Dans ce cas, vous pouvez définir certains styles comme étant `!important` dans votre fichier CSS global, et ainsi les rendre prioritaires par rapport au style définit dans les balises HTML.

```html
<div class="toto" style="color: red;">De quelle couleur suis-je ?</div>
```

```css
.toto[style*="color: red"] {
  color: firebrick !important;
}
```

Beaucoup de frameworks JavaScript et de bibliothèques ajoutent des styles dans les balises HTML. En utilisant `!important` avec un sélecteur ciblant précisément il est possible de passer outre les styles dans ces balises HTML.

##### B) Prendre le dessus sur la haute spécificité

```css
#unElement p {
  color: blue;
}

p.genial {
  color: red;
}
```

Comment faites-vous pour rendre les paragraphes de classe `genial` toujours en rouge, même ceux qui se trouvent dans `#unElement`&nbsp;? Sans `!important`, la première règle aura davantage de spécificité et prendra le dessus sur la seconde règle.

#### Prendre le dessus sur `!important`

A) Ajouter une autre règle CSS avec `!important` et, soit donner au sélecteur une spécificité plus haute (en ajoutant une balise, un identifiant ou une classe au sélecteur), soit ajouter une règle CSS avec le même sélecteur plus loin dans le fichier CSS. Cela fonctionne car lorsqu'on est en présence d'une égalité de spécificité, la dernière règle définie est prise en compte.

Quelques exemples avec une spécificité accrue&nbsp;:

```css
table td {
  height: 50px !important;
}
.monTableau td {
  height: 50px !important;
}
#monTableau td {
  height: 50px !important;
}
```

B) Ou ajouter le même sélecteur après le sélecteur existant&nbsp;:

```css
td {
  height: 50px !important;
}
```

C) Ou, de préférence, réécrire la règle d'origine afin d'éviter totalement l'utilisation de `!important`.

```css
[id="unElement"] p {
  color: blue;
}

p.genial {
  color: red;
}
```

Inclure un identifiant comme un sélecteur d'attribut au lieu d'un sélecteur d'identifiant (`#someElement`) lui donne la même spécificité qu'une classe. Les deux sélecteurs ci-dessus ont à présent la même importance. Lors d'une égalité de spécificité, la dernière règle définie est prise en compte.

#### Pour davantage d'informations, visiter

- <https://stackoverflow.com/questions/3706819/what-are-the-implications-of-using-important-in-css>
- <https://stackoverflow.com/questions/9245353/what-does-important-in-css-mean>
- <https://stackoverflow.com/questions/5701149/when-to-use-important-property-in-css>
- <https://stackoverflow.com/questions/11178673/how-to-override-important>
- <https://stackoverflow.com/questions/2042497/when-to-use-important-to-save-the-day-when-working-with-css>

### Les exceptions :is() et :not()

La pseudo-classe de correspondance {{CSSxRef(":is", ":is()")}} {{Experimental_Inline}} et la pseudo-classe de négation {{CSSxRef(":not", ":not()")}} _ne_ sont _pas_ considérées comme pseudo-classes dans le calcul de la spécificité. Mais les sélecteurs placés dans la pseudo-classe comptent comme des sélecteurs normaux lorsqu'on détermine le nombre de [types de sélecteurs](#types_de_sélecteurs).

Ce bout de CSS&hellip;

```css
div.outer p {
  color: orange;
}

div:not(.outer) p {
  color: blueviolet;
}
```

&hellip;lorsqu'il est utilisé avec l'HTML suivant&hellip;

```html
<div class="outer">
  <p>Ceci est dans la div externe.</p>
  <div class="inner">
    <p>Ce texte est dans la div interne.</p>
  </div>
</div>
```

&hellip;s'affiche sur l'écran ainsi&nbsp;:

{{EmbedLiveSample("les_exceptions_is_et_not")}}

### L'exception :where()

La pseudo-classe d'ajustement de spécificité {{CSSxRef(":where", ":where()")}} {{Experimental_Inline}} a toujours une spécificité remplacée par zéro.

Ce bout de CSS&hellip;

```css
div:where(.externe) p {
  color: orange;
}

div p {
  color: blueviolet;
}
```

```css hidden
#no-where-support {
  margin: 0.5em;
  border: 1px solid red;
}

#no-where-support:where(*) {
  display: none !important;
}
```

&hellip;utilisé avec l'HTML suivant&hellip;

```html hidden
<div id="no-where-support">
  ⚠️ Votre navigateur ne prend pas en charge la pseudo-classe
  <code
    ><a href="https://developer.mozilla.org/docs/Web/CSS/:where" target="_top"
      >:where()</a
    ></code
  >.
</div>
```

```html
<div class="externe">
  <p>Ceci est dans la div externe.</p>
  <div class="interne">
    <p>Ce texte est dans la div interne.</p>
  </div>
</div>
```

&hellip;s'affiche sur l'écran ainsi&nbsp;:

{{EmbedLiveSample("lexception_where")}}

### Spécificité liée à la forme

La spécificité est basée sur la forme d'un sélecteur. Dans le cas suivant, le sélecteur `*[id="toto"]` compte pour un sélecteur d'attribut lorsqu'on détermine la spécificité du sélecteur, même s'il cible un identifiant.

Les styles CSS suivants&hellip;

```css
*#toto {
  color: green;
}

*[id="toto"] {
  color: purple;
}
```

&hellip;utilisés avec ce balisage&hellip;

```html
<p id="toto">Je suis un texte d’exemple.</p>
```

&hellip;ressemblera finalement à cela&nbsp;:

{{EmbedLiveSample("spécificité_liée_à_la_forme")}}

Cela est dû au fait qu'il corresponde au même élément mais que le sélecteur d'identifiant a une spécificité plus haute.

### Ignorance de la proximité dans l'arborescence

La proximité d'un élément avec d'autres éléments qui sont référencés dans un sélecteur n'a aucun impact sur la spécificité. La déclaration de style suivante&hellip;

```css
body h1 {
  color: green;
}

html h1 {
  color: purple;
}
```

&hellip;avec l'HTML suivant&hellip;

```html
<html>
  <body>
    <h1>Ici un titre !</h1>
  </body>
</html>
```

&hellip;s'affichera ainsi&nbsp;:

{{EmbedLiveSample("ignorance_de_la_proximité_dans_larborescence")}}

Cela est dû au fait que les deux déclarations ont le même nombre de [types de sélecteurs](#types_de_sélecteurs), mais le sélecteur `html h1` est déclaré en dernier.

### Éléments ciblés directement vs styles hérités

Les styles pour un élément directement ciblé prendront toujours le dessus sur les styles hérités, sans prise en compte de la spécificité de la règle héritée. Cette CSS&hellip;

```css
#parent {
  color: green;
}

h1 {
  color: purple;
}
```

&hellip;avec l'HTML suivant&hellip;

```html
<html>
  <body id="parent">
    <h1>Ici un titre !</h1>
  </body>
</html>
```

&hellip;s'affichera également ainsi&nbsp;:

{{EmbedLiveSample("éléments_ciblés_directement_vs_styles_hérités")}}

Ceci est dû au fait que le sélecteur `h1` cible l'élément spécifiquement, mais le sélecteur vert (_green_) est uniquement hérité de ses parents.

## Spécifications

{{Specifications}}

## Voir aussi

- Calculateur de spécificité&nbsp;: un site web interactif permettant de tester et comprendre vos propres règles CSS - <https://specificity.keegan.st/>
- Spécificité des sélecteurs CSS3 - [http://www.w3.org/TR/selectors/#specificity](https://www.w3.org/TR/selectors/#specificity)
- Concepts clés de CSS&nbsp;:
  - [Syntaxe CSS](/fr/docs/Web/CSS/Syntax)
  - [Spécificité](/fr/docs/Web/CSS/Specificity)
  - [Héritage](/fr/docs/Web/CSS/inheritance)
  - [Modèle de boîte](/fr/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model)
  - [Modes d'affichage](/fr/docs/Web/CSS/Layout_mode)
  - [Modèles de formatage visuel](/fr/docs/Web/CSS/Visual_formatting_model)
  - [Fusion des marges](/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing)
  - Valeurs
    - [Initiales](/fr/docs/Web/CSS/initial_value)
    - [Calculées](/fr/docs/Web/CSS/computed_value)
    - [Utilisées](/fr/docs/Web/CSS/used_value)
    - [Effectives](/fr/docs/Web/CSS/actual_value)
  - [Syntaxe de définition des valeurs](/fr/docs/Web/CSS/Value_definition_syntax)
  - [Propriétés raccourcies](/fr/docs/Web/CSS/Shorthand_properties)
  - [Éléments remplacés](/fr/docs/Web/CSS/Replaced_element)
