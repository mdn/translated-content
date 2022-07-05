---
title: Pseudo-classes et pseudo-éléments
slug: Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements
tags:
  - Apprendre
  - CSS
  - Débutant
  - Pseudo
  - Pseudo-class
  - Pseudo-element
  - Sélecteurs
translation_of: Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements
original_slug: Apprendre/CSS/Building_blocks/Selectors/Pseudo-classes_et_pseudo-éléments
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
        >, connaissance de base du HTML  (cf. <a
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

## Qu'est ce qu'une pseudo-classe ?

Une pseudo-classe est un sélecteur ciblant des éléments dans un état spécifique, par ex. le premier élément d'un type, ou un élément survolé par le pointeur de la souris. Leur comportement correspond à celui d'une classe, mais qui ne s'appliquerait que partiellement. On gagne ainsi en flexibilité, en éliminant du code inutile. Le résultat est plus facile à maintenir.

Les pseudo-classes sont signalées par un mot clé commençant par deux points `:`

    :pseudo-class-name

### Exemple d'une pseudo-classe élémentaire

Voyons cela dans un premier exemple. Pour agrandir et mettre en gras le texte du premier paragraphe d'un article, on pourrait attribuer une classe à ce paragraphe, puis lui ajouter du CSS, comme ci-dessous :

{{EmbedGHLiveSample("css-examples/learn/selectors/first-child.html", '100%', 800)}}

Mais cette solution est difficile à maintenir — que se passe-t-il si un nouveau paragraphe est ajouté en haut du document ? Il faut dans ce cas déplacer manuellement la classe vers le nouveau paragraphe. Une solution plus souple est d'utiliser le sélecteur de pseudo-classe {{cssxref (": first-child")}} — cela cible *dans tous les cas* le premier élément enfant de l'article : plus nécessaire d'éditer le code HTML (particulièrement utile en particulier quand le code HTML est généré par un CMS.)

{{EmbedGHLiveSample ("css-examples/learn/selectors/first-child2.html", '100%', 700)}}

Toutes les pseudo-classes se comportent de la même manière. Elles ciblent les éléments du document dans un état donné, comme si vous aviez ajouté une classe dans votre code HTML. Jetez un œil à quelques exemples sur MDN :

- [`:last-child`](/fr/docs/Web/CSS/:last-child)
- [`:only-child`](/fr/docs/Web/CSS/:only-child)
- [`:invalid`](/fr/docs/Web/CSS/:invalid)

### Pseudo-classes d'action utilisateur

Certaines pseudo-classes ne s'appliquent que lorsque l'utilisateur interagit avec le document d'une manière ou d'une autre. Ces pseudo-classes d'action utilisateur, parfois appelées _pseudo-classes dynamiques_, agissent comme si une classe avait été ajoutée à l'élément lorsque l'utilisateur interagit avec lui. Par exemple :

[`:hover`](/fr/docs/Web/CSS/:hover) — mentionné ci-dessus ; s'applique quand l'utilisateur déplace son pointeur sur un élément, généralement un lien.
[`:focus`](/fr/docs/Web/CSS/:focus) — s'applique uniquement si l'utilisateur concentre l'élément à l'aide des commandes du clavier.

{{EmbedGHLiveSample("css-examples/learn/selectors/hover.html", '100%', 500)}}

## Qu'est ce qu'un pseudo-élément ?

Les pseudo-éléments se comportent de manière similaire, même s'ils se comportent comme si vous aviez ajouté un tout nouvel élément HTML dans le balisage, au lieu d'appliquer une classe à des éléments existants. Les pseudo-éléments commencent avec un double deux-points `::`.

    ::pseudo-element-name

> **Note :** Certains anciens pseudo-éléments utilisaient un simple deux-points, vous pouvez donc parfois rencontrer cette syntaxe dans du code ou des exemples. Les navigateurs modernes supportent les anciens pseudo-éléments avec un simple ou double deux-points pour assurer la compatibilité.

Par exemple, si vous souhaitez sélectionner la première ligne d'un paragraphe, vous pouvez l'entourer d'un élément \<span> et utiliser un sélecteur d'éléments ; cependant, cela échouerait si le nombre de mots que vous avez entourés était plus long ou plus court que la largeur de l'élément parent. Comme nous avons tendance à ne pas savoir combien de mots tiendront sur une ligne - étant donné que cela peut varier si la largeur de l'écran ou la taille de la police change - il est impossible de le faire de manière robuste en ajoutant du HTML.

Le pseudo-sélecteur d'éléments `::first-line`  le fera pour vous de manière fiable - même si le nombre de mots augmente ou diminue, il ne sélectionnera que la première ligne.

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

Vous pouvez les utiliser pour insérer une chaîne de texte, comme dans l'exemple ci-dessous. Essayez de changer la valeur du texte de la propriété {{cssxref("content")}} et vous verrez qu'elle change en sortie. Vous pouvez également changer le pseudo-élément `::before` en  `::after` et voir le texte inséré à la fin de l'élément au lieu du début.

{{EmbedGHLiveSample("css-examples/learn/selectors/before.html", '100%', 400)}}

L'insertion de chaînes de caractères à partir de CSS n'est pas vraiment quelque chose que nous faisons très souvent sur le web, car ce texte est inaccessible pour certains lecteurs d'écran et pourrait être difficile à trouver et à modifier à l'avenir.

Une utilisation plus pertinente de ces pseudo-éléments consiste à insérer une icône, par exemple la petite flèche ajoutée dans l'exemple ci-dessous, qui est un indicateur visuel que nous ne voudrions pas voir lu par un lecteur d'écran :

{{EmbedGHLiveSample("css-examples/learn/selectors/after-icon.html", '100%', 400)}}

Ces pseudo-éléments sont aussi fréquemment utilisés pour insérer une chaîne vide, qui peut ensuite être stylisée comme n'importe quel élément de la page.

Dans l'exemple suivant, nous avons ajouté une chaîne vide en utilisant le e pseudo-élément `::before` pseudo-element. Nous l'avons défini en `display: block` afin de pouvoir la styliser avec une largeur et une hauteur. Nous utilisons ensuite le CSS pour la styliser comme n'importe quel élément. Vous pouvez jouer avec le CSS et modifier son apparence et son comportement.

{{EmbedGHLiveSample("css-examples/learn/selectors/before-styled.html", '100%', 500)}}

L'utilisation des pseudo-éléments `::before` et `::after` avec la propriété `content` est appelée "Generated Content" en CSS, et vous verrez souvent cette technique utilisée pour diverses tâches. Un bon exemple est le site [CSS Arrow Please](http://www.cssarrowplease.com/), qui vous aide à générer une flèche avec le CSS. Examinez le CSS lorsque vous créez votre flèche et vous verrez les pseudo-éléments {{cssxref("::before")}} and {{cssxref("::after")}}utilisés. Chaque fois que vous voyez ces sélecteurs, regardez la propriété {{cssxref("content")}} pour voir ce qui est ajouté au document.

## Section de référence

Il existe un grand nombre de pseudo-classes et pseudo-éléments, une bonne liste de références est donc utile. Vous trouverez ci-dessous des tableaux les répertoriant, avec pour chacun le lien vers la page de référence sur MDN. Vous y trouverez toutes les informations sur leur utilisation.

### Pseudo-classes

| Sélecteur                                        | Description                                                                                                                                                                                                                                                                                                                                                               |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{ Cssxref(":active") }}                 | Matches when the user activates (for example clicks on) an element.                                                                                                                                                                                                                                                                                                       |
| {{ Cssxref(":any-link") }}             | Matches both the `:link` and `:visited` states of a link.                                                                                                                                                                                                                                                                                                                 |
| {{ Cssxref(":blank") }}                 | Matches an [`<input>` element](/fr/docs/Web/HTML/Element/input) whose input value is empty.                                                                                                                                                                                                                                                                               |
| {{ Cssxref(":checked") }}                 | Matches a radio button or checkbox in the selected state.                                                                                                                                                                                                                                                                                                                 |
| {{ Cssxref(":current") }}                 | Matches the element, or an ancestor of the element, that is currently being displayed.                                                                                                                                                                                                                                                                                    |
| {{ Cssxref(":default") }}                 | Matches the one or more UI elements that are the default among a set of similar elements.                                                                                                                                                                                                                                                                                 |
| {{ Cssxref(":dir") }}                     | Select an element based on its directionality (value of the HTML [`dir`](/fr/docs/Web/HTML/Global_attributes/dir) attribute or CSS [`direction`](/fr/docs/Web/CSS/direction) property).                                                                                                                                                                                   |
| {{ Cssxref(":disabled") }}             | Matches user interface elements that are in an disabled state.                                                                                                                                                                                                                                                                                                            |
| {{ Cssxref(":empty") }}                 | Matches an element that has no children except optionally white space.                                                                                                                                                                                                                                                                                                    |
| {{ Cssxref(":enabled") }}                 | Matches user interface elements that are in an enabled state.                                                                                                                                                                                                                                                                                                             |
| {{ Cssxref(":first") }}                 | In [Paged Media](/fr/docs/Web/CSS/Paged_Media), matches the first page.                                                                                                                                                                                                                                                                                                   |
| {{ Cssxref(":first-child") }}         | Matches an element that is first among its siblings.                                                                                                                                                                                                                                                                                                                      |
| {{ Cssxref(":first-of-type") }}         | Matches an element which is first of a certain type among its siblings.                                                                                                                                                                                                                                                                                                   |
| {{ Cssxref(":focus") }}                 | Matches when an element has focus.                                                                                                                                                                                                                                                                                                                                        |
| {{ Cssxref(":focus-visible")}}         | Matches when an element has focus and the focus should be visible to the user.                                                                                                                                                                                                                                                                                            |
| {{ Cssxref(":focus-within") }}         | Matches an element with focus plus an element with a descendent that has focus.                                                                                                                                                                                                                                                                                           |
| {{ Cssxref(":future") }}                 | Matches the elements after the current element.                                                                                                                                                                                                                                                                                                                           |
| {{ Cssxref(":hover") }}                 | Matches when the user hovers over an element.                                                                                                                                                                                                                                                                                                                             |
| {{ Cssxref(":indeterminate") }}         | Matches UI elements whose value is in an indeterminate state, usually [checkboxes](/fr/docs/Web/HTML/Element/input/checkbox).                                                                                                                                                                                                                                             |
| {{ Cssxref(":in-range") }}             | Matches an element with a range when its value is in-range.                                                                                                                                                                                                                                                                                                               |
| {{ Cssxref(":invalid") }}                 | Matches an element, such as an `<input>`, in an invalid state.                                                                                                                                                                                                                                                                                                            |
| {{ Cssxref(":lang") }}                     | Matches an element based on language (value of the HTML [lang](/fr/docs/Web/HTML/Global_attributes/lang) attribute).                                                                                                                                                                                                                                                      |
| {{ Cssxref(":last-child") }}             | Matches an element which is last among its siblings.                                                                                                                                                                                                                                                                                                                      |
| {{ Cssxref(":last-of-type") }}         | Matches an element of a certain type that is last among its siblings.                                                                                                                                                                                                                                                                                                     |
| {{ Cssxref(":left") }}                     | In [Paged Media](/fr/docs/Web/CSS/CSS_Pages), matches left-hand pages.                                                                                                                                                                                                                                                                                                    |
| {{ Cssxref(":link")}}                     | Matches unvisited links.                                                                                                                                                                                                                                                                                                                                                  |
| {{ Cssxref(":local-link")}}             | Matches links pointing to pages that are in the same site as the current document.                                                                                                                                                                                                                                                                                        |
| {{ Cssxref(":is", ":is()")}}             | Matches any of the selectors in the selector list that is passed in.                                                                                                                                                                                                                                                                                                      |
| {{ Cssxref(":not") }}                     | Matches things not matched by selectors that are passed in as a value to this selector.                                                                                                                                                                                                                                                                                   |
| {{ Cssxref(":nth-child") }}             | Matches elements from a list of siblings — the siblings are matched by a formula of the form _an+b_ (e.g. 2n + 1 would match elements 1, 3, 5, 7, etc. All the odd ones.)                                                                                                                                                                                                 |
| {{ Cssxref(":nth-of-type") }}         | Matches elements from a list of siblings that are of a certain type (e.g. `<p>` elements) — the siblings are matched by a formula of the form _an+b_ (e.g. 2n + 1 would match that type of element, numbers 1, 3, 5, 7, etc. All the odd ones.)                                                                                                                           |
| {{ Cssxref(":nth-last-child") }}     | Matches elements from a list of siblings, counting backwards from the end. The siblings are matched by a formula of the form _an+b_ (e.g. 2n + 1 would match the last element in the sequence, then two elements before that, then two elements before that, etc. All the odd ones, counting from the end.)                                                               |
| {{ Cssxref(":nth-last-of-type") }}     | Matches elements from a list of siblings that are of a certain type (e.g. `<p>` elements), counting backwards from the end. The siblings are matched by a formula of the form _an+b_ (e.g. 2n + 1 would match the last element of that type in the sequence, then two elements before that, then two elements before that, etc. All the odd ones, counting from the end.) |
| {{ Cssxref(":only-child") }}             | Matches an element that has no siblings.                                                                                                                                                                                                                                                                                                                                  |
| {{ Cssxref(":only-of-type") }}         | Matches an element that is the only one of its type among its siblings.                                                                                                                                                                                                                                                                                                   |
| {{ Cssxref(":optional") }}             | Matches form elements that are not required.                                                                                                                                                                                                                                                                                                                              |
| {{ Cssxref(":out-of-range") }}         | Matches an element with a range when its value is out of range.                                                                                                                                                                                                                                                                                                           |
| {{ Cssxref(":past") }}                     | Matches the elements before the current element.                                                                                                                                                                                                                                                                                                                          |
| {{ Cssxref(":placeholder-shown") }} | Matches an input element that is showing placeholder text.                                                                                                                                                                                                                                                                                                                |
| {{ Cssxref(":playing") }}                 | Matches an element representing an audio, video, or similar resource that is capable of being “played” or “paused”, when that element is “playing”.                                                                                                                                                                                                                       |
| {{ Cssxref(":paused") }}                 | Matches an element representing an audio, video, or similar resource that is capable of being “played” or “paused”, when that element is “paused”.                                                                                                                                                                                                                        |
| {{ Cssxref(":read-only") }}             | Matches an element if it is not user-alterable.                                                                                                                                                                                                                                                                                                                           |
| {{ Cssxref(":read-write") }}             | Matches an element if it is user-alterable.                                                                                                                                                                                                                                                                                                                               |
| {{ Cssxref(":required") }}             | Matches form elements that are required.                                                                                                                                                                                                                                                                                                                                  |
| {{ Cssxref(":right") }}                 | In [Paged Media](/fr/docs/Web/CSS/CSS_Pages), matches right-hand pages.                                                                                                                                                                                                                                                                                                   |
| {{ Cssxref(":root") }}                     | Matches an element that is the root of the document.                                                                                                                                                                                                                                                                                                                      |
| {{ Cssxref(":scope") }}                 | Matches any element that is a scope element.                                                                                                                                                                                                                                                                                                                              |
| {{ Cssxref(":valid") }}                 | Matches an element such as an `<input>` element, in a valid state.                                                                                                                                                                                                                                                                                                        |
| {{ Cssxref(":target") }}                 | Matches an element if it is the target of the current URL (i.e. if it has an ID matching the current [URL fragment](https://en.wikipedia.org/wiki/Fragment_identifier)).                                                                                                                                                                                                  |
| {{ Cssxref(":visited") }}                 | Matches visited links.                                                                                                                                                                                                                                                                                                                                                    |

### Pseudo-éléments

| Sélecteur                                    | Description                                                                              |
| -------------------------------------------- | ---------------------------------------------------------------------------------------- |
| {{ Cssxref("::after") }}             | Matches a stylable element appearing after the originating element's actual content.     |
| {{ Cssxref("::before") }}             | Matches a stylable element appearing before the originating element's actual content.    |
| {{ Cssxref("::first-letter") }}     | Matches the first letter of the element.                                                 |
| {{ Cssxref("::first-line") }}     | Matches the first line of the containing element.                                        |
| {{ Cssxref("::grammar-error") }} | Matches a portion of the document containing a grammar error as flagged by the browser.  |
| {{ Cssxref("::selection") }}         | Matches the portion of the document that has been selected.                              |
| {{ Cssxref("::spelling-error") }} | Matches a portion of the document containing a spelling error as flagged by the browser. |

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Attribute_selectors", "Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks")}}

## Dans ce cours

1.  [Cascade and inheritance](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2.  [CSS selectors](/fr/docs/Learn/CSS/Building_blocks/Selectors)

    - [Type, class, and ID selectors](/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Attribute selectors](/fr/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Pseudo-classes and pseudo-elements](/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Combinators](/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3.  [The box model](/fr/docs/Learn/CSS/Building_blocks/The_box_model)
4.  [Backgrounds and borders](/fr/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
5.  [Handling different text directions](/fr/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6.  [Overflowing content](/fr/docs/Learn/CSS/Building_blocks/Overflowing_content)
7.  [Values and units](/fr/docs/Learn/CSS/Building_blocks/Values_and_units)
8.  [Sizing items in CSS](/fr/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9.  [Images, media, and form elements](/fr/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [Styling tables](/fr/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [Debugging CSS](/fr/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [Organizing your CSS](/fr/docs/Learn/CSS/Building_blocks/Organizing)
