---
title: Pseudo-classes et pseudo-éléments
slug: Learn_web_development/Core/Styling_basics/Pseudo_classes_and_elements
original_slug: Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}

Voyons maintenant les sélecteurs de **pseudo-classes** et de **pseudo-éléments**. Il en existe un grand nombre, ces sélecteurs sont souvent assez spécifiques. Une fois que vous aurez compris comment les utiliser, revenez consulter leur liste pour voir si quelque chose peut fonctionner dans la tâche que vous essayez d'accomplir. Une fois encore, vérifiez la prise en charge par les navigateurs sur la page MDN associée à chaque sélecteur.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Maîtrise élémentaire de l'informatique,
        <a
          href="/fr/docs/Apprendre/Commencer_avec_le_web/Installation_outils_de_base"
          >suite logicielle de base installée</a
        >, compétences élémentaires pour <a
          href="/fr/docs/Apprendre/Commencer_avec_le_web/Gérer_les_fichiers"
          >travailler avec des fichiers</a
        >, connaissance de base du HTML (cf. <a
          href="/fr/docs/Apprendre/HTML/Introduction_à_HTML"
          >Introduction à HTML</a
        >), et une idée de <a
          href="/fr/docs/Learn/CSS/First_steps/How_CSS_works"
          >Comment fonctionne CSS</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>Découvrir les sélecteurs de pseudo-classes et de pseudo-éléments.</td>
    </tr>
  </tbody>
</table>

## Qu'est-ce qu'une pseudo-classe ?

Une pseudo-classe est un sélecteur ciblant des éléments dans un état spécifique, par ex. le premier élément d'un type, ou un élément survolé par le pointeur de la souris. Leur comportement correspond à celui d'une classe, mais qui ne s'appliquerait que partiellement. On gagne ainsi en flexibilité, en éliminant du code inutile. Le résultat est plus facile à maintenir.

Les pseudo-classes sont signalées par un mot clé commençant par deux points `:`

```
:pseudo-class-name
```

### Exemple d'une pseudo-classe élémentaire

Voyons cela dans un premier exemple. Pour agrandir et mettre en gras le texte du premier paragraphe d'un article, on pourrait attribuer une classe à ce paragraphe, puis lui ajouter du CSS, comme ci-dessous :

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child.html", '100%', 800)}}

Mais cette solution est difficile à maintenir — que se passe-t-il si un nouveau paragraphe est ajouté en haut du document ? Il faut dans ce cas déplacer manuellement la classe vers le nouveau paragraphe. Une solution plus souple est d'utiliser le sélecteur de pseudo-classe {{cssxref(":first-child")}} — cela cible _dans tous les cas_ le premier élément enfant de l'article : plus nécessaire d'éditer le code HTML (particulièrement utile en particulier quand le code HTML est généré par un CMS.)

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child2.html", '100%', 700)}}

Toutes les pseudo-classes se comportent de la même manière. Elles ciblent les éléments du document dans un état donné, comme si vous aviez ajouté une classe dans votre code HTML. Jetez un œil à quelques exemples sur MDN :

- [`:last-child`](/fr/docs/Web/CSS/:last-child)
- [`:only-child`](/fr/docs/Web/CSS/:only-child)
- [`:invalid`](/fr/docs/Web/CSS/:invalid)

### Pseudo-classes d'action utilisateur

Certaines pseudo-classes ne s'appliquent que lorsque l'utilisateur interagit avec le document d'une manière ou d'une autre. Ces pseudo-classes d'action utilisateur, parfois appelées _pseudo-classes dynamiques_, agissent comme si une classe avait été ajoutée à l'élément lorsque l'utilisateur interagit avec lui. Par exemple :

[`:hover`](/fr/docs/Web/CSS/:hover) — mentionné ci-dessus ; s'applique quand l'utilisateur déplace son pointeur sur un élément, généralement un lien.
[`:focus`](/fr/docs/Web/CSS/:focus) — s'applique uniquement si l'utilisateur concentre l'élément à l'aide des commandes du clavier.

{{EmbedGHLiveSample("css-examples/learn/selectors/hover.html", '100%', 500)}}

## Qu'est-ce qu'un pseudo-élément ?

Les pseudo-éléments se comportent de manière similaire, même s'ils se comportent comme si vous aviez ajouté un tout nouvel élément HTML dans le balisage, au lieu d'appliquer une classe à des éléments existants. Les pseudo-éléments commencent avec un double deux-points `::`.

```css
::pseudo-element-name;
```

> [!NOTE]
> Certains anciens pseudo-éléments utilisaient un simple deux-points, vous pouvez donc parfois rencontrer cette syntaxe dans du code ou des exemples. Les navigateurs modernes supportent les anciens pseudo-éléments avec un simple ou double deux-points pour assurer la compatibilité.

Par exemple, si vous souhaitez sélectionner la première ligne d'un paragraphe, vous pouvez l'entourer d'un élément \<span> et utiliser un sélecteur d'éléments ; cependant, cela échouerait si le nombre de mots que vous avez entourés était plus long ou plus court que la largeur de l'élément parent. Comme nous avons tendance à ne pas savoir combien de mots tiendront sur une ligne - étant donné que cela peut varier si la largeur de l'écran ou la taille de la police change - il est impossible de le faire de manière robuste en ajoutant du HTML.

Le pseudo-sélecteur d'éléments `::first-line` le fera pour vous de manière fiable - même si le nombre de mots augmente ou diminue, il ne sélectionnera que la première ligne.

{{EmbedGHLiveSample("css-examples/learn/selectors/first-line.html", '100%', 800)}}

Il agit comme si un `<span>` était comme par magie placé autour de cette première ligne formatée, et était mis à jour à chaque fois que la longueur de la ligne changeait.

Vous pouvez voir que cela sélectionne la première ligne des deux paragraphes.

## Combiner pseudo-classes et pseudo-éléments

Si vous souhaitez mettre en gras la première ligne du premier paragraphe, vous pouvez enchaîner les sélecteurs `:first-child` et `::first-line` Essayez de modifier l'exemple précédent en direct pour qu'il utilise le CSS suivant. Nous souhaitons sélectionner la première ligne du premier élément `<p>`, qui se trouve à l'intérieur d'un élément `<article>`

```css
article p:first-child::first-line {
  font-size: 120%;
  font-weight: bold;
}
```

## Générer du contenu avec ::before et ::after

Il existe quelques pseudo-éléments spéciaux, qui sont utilisés avec la propriété [`content`](/fr/docs/Web/CSS/content) pour insérer du contenu dans votre document en utilisant le CSS.

Vous pouvez les utiliser pour insérer une chaîne de texte, comme dans l'exemple ci-dessous. Essayez de changer la valeur du texte de la propriété {{cssxref("content")}} et vous verrez qu'elle change en sortie. Vous pouvez également changer le pseudo-élément `::before` en `::after` et voir le texte inséré à la fin de l'élément au lieu du début.

{{EmbedGHLiveSample("css-examples/learn/selectors/before.html", '100%', 400)}}

L'insertion de chaînes de caractères à partir de CSS n'est pas vraiment quelque chose que nous faisons très souvent sur le web, car ce texte est inaccessible pour certains lecteurs d'écran et pourrait être difficile à trouver et à modifier à l'avenir.

Une utilisation plus pertinente de ces pseudo-éléments consiste à insérer une icône, par exemple la petite flèche ajoutée dans l'exemple ci-dessous, qui est un indicateur visuel que nous ne voudrions pas voir lu par un lecteur d'écran :

{{EmbedGHLiveSample("css-examples/learn/selectors/after-icon.html", '100%', 400)}}

Ces pseudo-éléments sont aussi fréquemment utilisés pour insérer une chaîne vide, qui peut ensuite être stylisée comme n'importe quel élément de la page.

Dans l'exemple suivant, nous avons ajouté une chaîne vide en utilisant le pseudo-élément `::before` pseudo-element. Nous l'avons défini en `display: block` afin de pouvoir la styliser avec une largeur et une hauteur. Nous utilisons ensuite le CSS pour la styliser comme n'importe quel élément. Vous pouvez jouer avec le CSS et modifier son apparence et son comportement.

{{EmbedGHLiveSample("css-examples/learn/selectors/before-styled.html", '100%', 500)}}

L'utilisation des pseudo-éléments `::before` et `::after` avec la propriété `content` est appelée "Generated Content" en CSS, et vous verrez souvent cette technique utilisée pour diverses tâches. Un bon exemple est le site [CSS Arrow Please](http://www.cssarrowplease.com/), qui vous aide à générer une flèche avec le CSS. Examinez le CSS lorsque vous créez votre flèche et vous verrez les pseudo-éléments {{cssxref("::before")}} and {{cssxref("::after")}}utilisés. Chaque fois que vous voyez ces sélecteurs, regardez la propriété {{cssxref("content")}} pour voir ce qui est ajouté au document.

## Résumé

Dans cet article, nous avons présenté les pseudo-classes et les pseudo-éléments CSS, qui sont des types particuliers de sélecteurs.

Les pseudo-classes vous permettent de cibler un élément lorsqu'il se trouve dans un état particulier, comme si vous aviez ajouté une classe pour cet état au DOM. Les pseudo-éléments agissent comme si vous aviez ajouté un nouvel élément au DOM, et vous permettent de le styliser. Les pseudo-éléments `::before` et `::after` vous permettent d'insérer du contenu dans le document en utilisant le CSS.

Dans le prochain article, nous aborderons [les combinateurs](/fr/docs/Learn_web_development/Core/Styling_basics/Combinators).

## Voir aussi

- [La référence des pseudo-classes](/fr/docs/Web/CSS/Pseudo-classes)
- [La référence des pseudo-éléments](/fr/docs/Web/CSS/Pseudo-elements)

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}
