---
title: Pseudo-classes et pseudo-éléments
short-title: Pseudo-classes et éléments
slug: Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}

Voyons maintenant les sélecteurs de **pseudo-classes** et de **pseudo-éléments**. Il en existe un grand nombre, ces sélecteurs sont souvent assez spécifiques. Une fois que vous avez compris comment les utiliser, revenez consulter leur liste pour voir si quelque chose peut fonctionner dans la tâche que vous essayez d'accomplir. Une fois encore, vérifiez la prise en charge par les navigateurs sur la page MDN associée à chaque sélecteur.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions de base en HTML (étudiez
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe HTML de base</a
        >), <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Sélecteurs CSS de base</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Les pseudo-classes et les pseudo-éléments.</li>
          <li>La différence entre les deux.</li>
          <li>Combiner les pseudo-classes et les pseudo-éléments.</li>
          <li>Contenu généré.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce qu'une pseudo-classe ?

Une pseudo-classe est un sélecteur ciblant des éléments dans un état spécifique, par ex. le premier élément d'un type, ou un élément survolé par le pointeur de la souris. Leur comportement correspond à celui d'une classe, mais qui ne s'applique que partiellement. On gagne ainsi en flexibilité, en éliminant du code inutile. Le résultat est plus facile à maintenir.

Les pseudo-classes sont signalées par un mot clé commençant par deux points. Par exemple, `:hover` est une pseudo-classe.

### Exemple d'une pseudo-classe élémentaire

Voyons cela dans un premier exemple. Pour agrandir et mettre en gras le texte du premier paragraphe d'un article, on peut attribuer une classe à ce paragraphe, puis lui ajouter du CSS, comme ci-dessous&nbsp;:

```html live-sample___first-child
<article>
  <p class="premier">
    Les légumes, c'est un plus pour vous, c'est pourquoi je vous demande de
    mettre davantage de chou-rave, ciboulette, daikon, amarante, tatsoi,
    tomatillo, melon, haricots azuki, ail.
  </p>

  <p>
    Feuilles de betterave, maïs, soko, endive, courge à gumbo. Persil, échalote,
    courgette, tatsoi, pousses de pois, fèves, chou vert, pissenlit, gombo,
    wakamé, tomate. Pissenlit, concombre, arachide, pois, cacahuète, soko,
    courgette.
  </p>
</article>
```

```css live-sample___first-child
.premier {
  font-size: 120%;
  font-weight: bold;
}
```

{{EmbedLiveSample("first-child")}}

Cependant, cela peut être fastidieux à maintenir — que se passe-t-il si un nouveau paragraphe est ajouté en haut du document&nbsp;? Il faut déplacer la classe vers le nouveau paragraphe. Au lieu d'ajouter la classe, nous pourrions utiliser le sélecteur de pseudo-classe {{CSSxRef(":first-child")}} — ça cible _toujours_ le premier élément enfant d'un élément (un `<article>` dans ce cas), et nous n'avons plus besoin de modifier le HTML (ceci peut ne pas être toujours possible, peut-être en raison de la génération du HTML par un CMS).

```html live-sample___first-child2
<article>
  <p>
    Les légumes, c'est un plus pour vous, c'est pourquoi je vous demande de
    mettre davantage de chou-rave, ciboulette, daikon, amarante, tatsoi,
    tomatillo, melon, haricots azuki, ail.
  </p>

  <p>
    Feuilles de betterave, maïs, soko, endive, courge à gumbo. Persil, échalote,
    courgette, tatsoi, pousses de pois, fèves, chou vert, pissenlit, gombo,
    wakamé, tomate. Pissenlit, concombre, arachide, pois, cacahuète, soko,
    courgette.
  </p>
</article>
```

```css live-sample___first-child2
article p:first-child {
  font-size: 120%;
  font-weight: bold;
}
```

{{EmbedLiveSample("first-child2")}}

Toutes les pseudo-classes se comportent de la même manière. Elles ciblent les éléments du document dans un état donné, comme si vous aviez ajouté une classe dans votre code HTML.

> [!NOTE]
> Il est valide d'écrire des pseudo-classes et des pseudo-éléments sans aucun sélecteur d'élément les précédant. Dans l'exemple ci-dessus, vous pouvez écrire `:first-child` et la règle s'applique à _tout_ élément qui est le premier enfant d'un élément `<article>`, pas seulement au premier paragraphe — `:first-child` est équivalent à `*:first-child`. Cependant, généralement, vous voulez plus de contrôle que cela, donc vous devez être plus spécifique.

### Pseudo-classes d'action utilisateur

Certaines pseudo-classes ne s'appliquent que lorsque l'utilisateur·ice interagit avec le document d'une manière ou d'une autre. Ces pseudo-classes d'action utilisateur, parfois appelées _pseudo-classes dynamiques_, agissent comme si une classe avait été ajoutée à l'élément lorsque l'utilisateur·ice interagit avec lui. Par exemple&nbsp;:

- {{CSSxRef(":hover")}} — mentionné ci-dessus&nbsp;; s'applique quand l'utilisateur·ice déplace son pointeur sur un élément, généralement un lien.
- {{CSSxRef(":focus")}} — s'applique uniquement si l'utilisateur·ice concentre l'élément à l'aide des commandes du clavier.

```html live-sample___hover
<p><a href="">Survolez-moi</a></p>
```

```css live-sample___hover
a:link,
a:visited {
  color: rebeccapurple;
  font-weight: bold;
}

a:hover {
  color: hotpink;
}
```

{{EmbedLiveSample("hover")}}

### Jouer avec les pseudo-classes

Revenez à notre [premier exemple de pseudo-classe](#exemple_dune_pseudo-classe_élémentaire) et modifiez le CSS en utilisant le terrain de jeu MDN&nbsp;:

1. Ajoutez une règle qui colore le texte des paragraphes en `bleu` lorsqu'ils sont survolés.
2. Ajoutez une règle qui sélectionne uniquement le dernier paragraphe à l'intérieur de l'article et lui donne une `background-color` `orange`.

Vous pouvez trouver des informations sur toutes les autres pseudo-classes disponibles sur la page de référence MDN [des pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes).

## Qu'est-ce qu'un pseudo-élément ?

Les pseudo-éléments se comportent de manière similaire, même s'ils se comportent comme si vous aviez ajouté un tout nouvel élément HTML dans le balisage, au lieu d'appliquer une classe à des éléments existants.

Les pseudo-éléments commencent avec un double deux-points `::`. `::before` est un exemple de pseudo-élément.

> [!NOTE]
> Certains anciens pseudo-éléments utilisaient un simple deux-points, vous pouvez donc parfois rencontrer cette syntaxe dans du code ou des exemples. Les navigateurs modernes supportent les anciens pseudo-éléments avec un simple ou double deux-points pour assurer la compatibilité.

Par exemple, si vous souhaitez sélectionner la première ligne d'un paragraphe, vous pouvez l'entourer d'un élément `<span>` et utiliser un sélecteur d'éléments&nbsp;; cependant, cela échoue si le nombre de mots que vous avez entourés était plus long ou plus court que la largeur de l'élément parent. Comme nous avons tendance à ne pas savoir combien de mots tiennent sur une ligne — étant donné que cela peut varier si la largeur de l'écran ou la taille de la police change — il est impossible de le faire de manière robuste en ajoutant du HTML.

Le pseudo-sélecteur d'éléments `::first-line` le fait pour vous de manière fiable — même si le nombre de mots augmente ou diminue, il ne sélectionne que la première ligne.

```html live-sample___first-line
<article>
  <p>
    Les légumes, c'est un plus pour vous, c'est pourquoi je vous demande de
    mettre davantage de chou-rave, ciboulette, daikon, amarante, tatsoi,
    tomatillo, melon, haricots azuki, ail.
  </p>

  <p>
    Feuilles de betterave, maïs, soko, endive, courge à gumbo. Persil, échalote,
    courgette, tatsoi, pousses de pois, fèves, chou vert, pissenlit, gombo,
    wakamé, tomate. Pissenlit, concombre, arachide, pois, cacahuète, soko,
    courgette.
  </p>
</article>
```

```css live-sample___first-line
article p::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

{{EmbedLiveSample("first-line")}}

Il agit comme si un `<span>` était comme par magie placé autour de cette première ligne formatée, et était mis à jour à chaque fois que la longueur de la ligne changeait.

Vous pouvez voir que cela sélectionne la première ligne des deux paragraphes.

### Jouer avec les pseudo-éléments

Modifiez le CSS de l'exemple précédent en utilisant le terrain de jeu MDN&nbsp;:

1. Ajoutez une règle qui donne à la portion de texte sélectionnée avec le curseur de la souris un `background-color` rouge (vous avez besoin du pseudo-élément {{CSSxRef("::selection")}} pour cela). Sélectionnez du texte pour le tester.
2. Ajoutez une règle qui donne à la première lettre de chaque `<p>` à l'intérieur de l'`<article>` :

- Un `background-color` `yellow`.
- Une `border` `1px solid black`.
- Une `font-size` de `2rem`.

Vous pouvez trouver des informations sur tous les autres pseudo-éléments disponibles sur la page de référence MDN [des pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements).

## Combiner pseudo-classes et pseudo-éléments

Si vous souhaitez mettre en gras la première ligne du premier paragraphe, vous pouvez enchaîner les sélecteurs `:first-child` et `::first-line`.

Essayez de modifier l'exemple précédent en direct pour qu'il utilise le CSS suivant. Nous souhaitons sélectionner la première ligne du premier élément `<p>`, qui se trouve à l'intérieur d'un élément `<article>`.

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Générer du contenu avec `::before` et `::after`

Il existe quelques pseudo-éléments spéciaux, qui sont utilisés avec la propriété {{CSSxRef("content")}} pour insérer du contenu dans votre document en utilisant le CSS. Cette technique est appelée **contenu généré**.

Vous pouvez les utiliser pour insérer une chaîne de caractères textuelle, comme dans l'exemple ci-dessous. Nous avons également donné au contenu généré une couleur de fond `yellow` afin qu'il puisse être facilement distingué du contenu du paragraphe.

```html live-sample___before
<p class="box">Content in the box in my HTML page.</p>
```

```css live-sample___before
.box::before {
  content: "Ce texte doit apparaître avant le reste du contenu. ";
  background-color: yellow;
}
```

{{EmbedLiveSample("before")}}

### Jouer avec le contenu généré

Essayez de modifier l'exemple précédent comme suit&nbsp;:

- Changez la valeur textuelle de la propriété {{CSSxRef("content")}} et observez le changement dans le rendu.
- Changez le pseudo-élément `::before` en `::after` et observez le texte inséré à la fin de l'élément au lieu du début.

### Icônes de contenu généré

L'exemple ci-dessus est un CSS valide. Cependant, insérer des chaînes de caractères textuelles depuis le CSS n'est pas quelque chose que nous faisons très souvent, car ce texte est inaccessible à certains lecteurs d'écran et peut être difficile à trouver et à modifier à l'avenir. Une utilisation plus valide de ces pseudo-éléments est d'insérer une icône, par exemple la petite flèche ajoutée dans l'exemple ci-dessous, qui est un indicateur visuel que nous ne voudrions pas que le lecteur d'écran lise&nbsp;:

```html live-sample___after-icon
<p class="boite">Contenu dans la boîte de ma page HTML.</p>
```

```css live-sample___after-icon
.boite::after {
  content: " ➥";
}
```

{{EmbedLiveSample("after-icon")}}

### Formes générées

Le contenu généré est également fréquemment utilisé pour insérer une chaîne de caractères vide, qui peut ensuite être stylisée comme n'importe quel élément de la page.

Dans cet exemple suivant, nous avons ajouté une chaîne de caractères vide en utilisant le pseudo-élément `::before`. Nous l'avons défini sur `display: block` afin de pouvoir le mettre en forme avec une largeur et une hauteur, créant ainsi une forme carrée. Nous utilisons ensuite le CSS pour le mettre en forme comme n'importe quel élément.

```html live-sample___before-styled
<p class="boite">Contenu dans la boîte de ma page HTML.</p>
```

```css live-sample___before-styled
.boite::before {
  content: "";
  display: block;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  border: 1px solid black;
}
```

{{EmbedLiveSample("before-styled", "", 160)}}

Essayez de modifier le CSS ci-dessus pour changer l'apparence et le comportement de la forme générée.

Vous pouvez régulièrement voir du contenu généré utilisé pour diverses autres tâches. Un excellent exemple est le site [CSS Arrow Please](https://cssarrowplease.com/), qui vous aide à générer une flèche avec CSS. Regardez le CSS pendant que vous créez votre flèche et vous allez voir les pseudo-éléments {{CSSxRef("::before")}} et {{CSSxRef("::after")}} en action. Chaque fois que vous voyez ces sélecteurs, regardez la propriété {{CSSxRef("content")}} pour voir ce qui est ajouté à l'élément HTML.

## Résumé

Dans cet article, nous avons présenté les pseudo-classes et les pseudo-éléments CSS, qui sont des types particuliers de sélecteurs.

Les pseudo-classes vous permettent de cibler un élément lorsqu'il se trouve dans un état particulier, comme si vous aviez ajouté une classe pour cet état au DOM. Les pseudo-éléments agissent comme si vous aviez ajouté un nouvel élément au DOM, et vous permettent de le mettre en forme. Les pseudo-éléments `::before` et `::after` vous permettent d'insérer du contenu dans le document en utilisant le CSS.

Dans le prochain article, nous aborderons les combinateurs.

## Voir aussi

- [La référence des pseudo-classes](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-classes)
- [La référence des pseudo-éléments](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Attribute_selectors", "Learn_web_development/Core/Styling_basics/Combinators", "Learn_web_development/Core/Styling_basics")}}
