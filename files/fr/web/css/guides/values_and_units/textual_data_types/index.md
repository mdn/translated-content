---
title: Types de données textuelles
slug: Web/CSS/Guides/Values_and_units/Textual_data_types
original_slug: Web/CSS/CSS_values_and_units/Textual_data_types
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Chaque déclaration CSS se compose d'une paire propriété/valeur. La valeur peut inclure différents types de données selon la propriété, comme un mot-clé, un entier, une fonction ou une combinaison de types&nbsp;; certaines valeurs ont des unités, d'autres non. Ce guide donne un aperçu des types de données textuelles. Consultez la page dédiée à chaque type de valeur pour plus de détails.

Les types de données textuelles sont soit {{cssxref("&lt;string&gt;")}}, une suite de caractères entre guillemets, soit {{cssxref("&lt;ident&gt;")}}, un «&nbsp;identifiant CSS&nbsp;» (chaîne de caractères qui n'est pas entre guillemets), soit {{cssxref("url_value", "&lt;url&gt;")}}, qui peut être entre guillemets ou non. Une `<string>` est entourée de guillemets simples ou doubles. Les identifiants CSS, notés `<ident>` ou {{cssxref("&lt;custom-ident&gt;")}} dans les spécifications, ne doivent pas être entre guillemets.

Dans les spécifications CSS, les valeurs définies par le·la développeur·euse (par exemple, les noms d'animations, de familles de polices ou de zones de grille) sont indiquées comme {{cssxref("&lt;custom-ident&gt;")}}, {{cssxref("&lt;string&gt;")}} ou les deux.

Lorsque les valeurs textuelles définies par l'utilisateur·ice peuvent être entre guillemets ou non, la spécification indique `<custom-ident> | <string>`, ce qui signifie que les guillemets sont optionnels (exemple&nbsp;: noms d'animations&nbsp;:)

```css
@keyframes validIdent {
  /* keyframes go here */
}
@keyframes 'validString' {
  /* keyframes go here */
}
```

Certaines valeurs textuelles ne sont pas valides si elles sont entre guillemets. Par exemple, la valeur de {{cssxref("grid-area")}} peut être un `<custom-ident>`, donc si une zone de grille s'appelle `content`, il faut l'utiliser sans guillemets&nbsp;:

```css
.item {
  grid-area: content;
}
```

À l'inverse, un type de donnée {{cssxref("&lt;string&gt;")}}, comme la valeur de la propriété {{cssxref("content")}}, doit obligatoirement être entre guillemets&nbsp;:

```css
.item::after {
  content: "This is my content.";
}
```

Vous pouvez en général choisir n'importe quel nom (même avec des emojis), mais l'identifiant ne peut pas être `none`, `unset`, `initial` ou `inherit`, ne doit pas commencer par un chiffre ou deux tirets, et il vaut mieux éviter tout autre mot-clé CSS prédéfini. Voir les pages de référence {{cssxref("&lt;custom-ident&gt;")}} et {{cssxref("&lt;string&gt;")}} pour plus de détails.

## Valeurs de mots-clés prédéfinis

Les mots-clés prédéfinis sont des valeurs textuelles définies par la spécification pour une propriété donnée. Ces mots-clés sont aussi des identifiants CSS, donc ils s'utilisent sans guillemets.

Dans la syntaxe des valeurs de propriété CSS (dans la spécification ou sur MDN), les mots-clés autorisés sont listés ainsi. Les valeurs {{glossary("enumerated", "énumérées")}} suivantes sont les mots-clés autorisés pour {{cssxref("float")}}&nbsp;:

```plain
left | right | none | inline-start | inline-end
```

Ces valeurs s'utilisent sans guillemets&nbsp;:

```css
.box {
  float: left;
}
```

## Mots-clés globaux CSS

En plus des mots-clés prédéfinis propres à chaque propriété, toutes les propriétés CSS acceptent les valeurs globales (ou «&nbsp;CSS-wide&nbsp;») {{cssxref("initial")}}, {{cssxref("inherit")}}, {{cssxref("unset")}}, {{cssxref("revert")}} et {{cssxref("revert-layer")}}, qui définissent explicitement des comportements par défaut.

- {{cssxref("initial")}}
  - : Représente la valeur initiale spécifiée pour la propriété.
- {{cssxref("inherit")}}
  - : Représente la valeur calculée de la propriété sur le parent de l'élément, si elle est héritée.
- {{cssxref("unset")}}
  - : Se comporte comme `inherit` ou `initial` selon que la propriété est héritée ou non.
- {{cssxref("revert")}}
  - : Réinitialise la propriété à la valeur héritée si elle est héritée du parent, ou à la valeur par défaut définie par la feuille de style de l'agent utilisateur (ou par les styles utilisateur s'ils existent).
- {{cssxref("revert-layer")}}
  - : Restaure la valeur d'une propriété dans une [couche de cascade](/fr/docs/Web/CSS/Reference/At-rules/@layer) à la valeur de la propriété dans une règle CSS correspondante d'une couche précédente. La valeur de la propriété avec ce mot-clé est recalculée comme si aucune règle n'était spécifiée sur l'élément cible dans la couche de cascade courante.

## URL

Le type {{cssxref("url_value", "&lt;url&gt;")}} utilise une notation fonctionnelle qui accepte une `<string>` représentant une URL. Il peut s'agir d'une URL absolue ou relative. Par exemple, pour inclure une image d'arrière-plan&nbsp;:

```css
.box {
  background-image: url("images/my-background.png");
}

.box {
  background-image: url("https://www.example.com/images/my-background.png");
}
```

Le paramètre de `url()` peut être entre guillemets ou non. S'il ne l'est pas, il est analysé comme un `<url-token>`, qui impose des contraintes supplémentaires (certains caractères doivent être échappés). Voir {{cssxref("url_value", "&lt;url&gt;")}} pour plus d'informations.

## Voir aussi

- [Types de données numériques](/fr/docs/Web/CSS/Guides/Values_and_units/Numeric_data_types)
- [Types de données CSS](/fr/docs/Web/CSS/Reference/Values/Data_types)
- Le module [Valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
- [Apprendre&nbsp;: Les valeurs et unités](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units)
- Le module [Cascade et héritage CSS](/fr/docs/Web/CSS/CSS_cascade)
