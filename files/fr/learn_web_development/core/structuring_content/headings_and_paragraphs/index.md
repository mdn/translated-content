---
title: Titres et paragraphes
slug: Learn_web_development/Core/Structuring_content/Headings_and_paragraphs
l10n:
  sourceCommit: d865c290ae97074157ca8fd3994015b2f393d370
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}

L'un des principaux rôles de HTML est de donner une structure au texte afin qu'un navigateur puisse afficher un document HTML comme le souhaite le·a développeur·euse. Cet article explique comment le {{Glossary("HTML")}} permet de fournir la structure fondamentale d'une page en définissant des titres et des paragraphes.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        <p>
          Connaître les bases du langage HTML, telles que traitées à la page
          <a
            href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
            >Commencer avec le HTML</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Comment créer une bonne structure de document avec des titres et du contenu sous ces titres.</li>
          <li>Utiliser du HTML sémantique plutôt que du HTML de présentation, et pourquoi cela est important.</li>
          <li>La nécessité d'utiliser les niveaux de titres de façon logique, c'est-à-dire sans en sauter ou les utiliser arbitrairement pour obtenir une certaine taille de police (ceci relève du CSS).</li>
          <li>Bénéfices pour le référencement&nbsp;: par exemple, les mots-clés sont valorisés dans les titres.</li>
          <li>Bénéfices pour l'accessibilité&nbsp;: les technologies d'assistance comme les lecteurs d'écran utilisent les titres (et autres repères) comme points de repère pour naviguer dans le contenu. Les documents HTML sont très difficiles à utiliser pour les utilisateur·ice·s de technologies d'assistance sans titres.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Titres et paragraphes

La plupart des textes structurés sont composés de titres et de paragraphes, que vous lisiez une histoire, un journal, un manuel universitaire, un magazine, etc.

![Exemple de une de journal, montrant l'utilisation d'un titre de niveau supérieur, de sous-titres et de paragraphes.](newspaper_small.jpg)

Un contenu structuré rend l'expérience de lecture plus facile et plus agréable.

En HTML, chaque paragraphe doit être enveloppé dans un élément HTML {{HTMLElement("p")}}, comme ceci&nbsp;:

```html
<p>Je suis un paragraphe, oh oui je le suis.</p>
```

Chaque titre doit être enveloppé dans un élément de titre&nbsp;:

```html
<h1>Je suis le titre de l'histoire.</h1>
```

Il existe six éléments de titre&nbsp;: {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>")}}, {{HTMLElement("Heading_Elements", "<code>&lt;h2&gt;</code>")}}, {{HTMLElement("Heading_Elements", "<code>&lt;h3&gt;</code>")}}, {{HTMLElement("Heading_Elements", "<code>&lt;h4&gt;</code>")}}, {{HTMLElement("Heading_Elements", "<code>&lt;h5&gt;</code>")}} et {{HTMLElement("Heading_Elements", "<code>&lt;h6&gt;</code>")}}. Chaque élément représente un niveau différent de contenu dans le document&nbsp;; `<h1>` représente le titre principal, `<h2>` les sous-titres, `<h3>` les sous-sous-titres, et ainsi de suite.

## Mise en œuvre de la hiérarchie structurelle

Par exemple, dans cette histoire, l'élément `<h1>` représente le titre de l'histoire, les éléments `<h2>` représentent le titre de chaque chapitre, et les éléments `<h3>` représentent les sous-sections de chaque chapitre&nbsp;:

```html
<h1>L'ennui écrasant</h1>

<p>Par Chris Mills</p>

<h2>Chapitre 1&nbsp;: La nuit noire</h2>

<p>
  C'était une nuit noire. Quelque part, une chouette hululait. La pluie tombait
  à verse sur le…
</p>

<h2>Chapitre 2&nbsp;: Le silence éternel</h2>

<p>
  Notre protagoniste ne put tirer ne serait-ce qu'un murmure de la silhouette
  sombre…
</p>

<h3>Le spectre parle</h3>

<p>
  Plusieurs heures passèrent encore, quand tout à coup le spectre se redressa
  d'un bond et s'exclama&nbsp;: «&nbsp;Ayez pitié de mon âme&nbsp;!&nbsp;»
</p>
```

Il vous revient de décider ce que représentent les éléments utilisés, tant que la hiérarchie a du sens. Gardez simplement à l'esprit quelques bonnes pratiques lors de la création de telles structures&nbsp;:

- De préférence, vous devriez utiliser un seul `<h1>` par page — c'est le titre de niveau supérieur, tous les autres se situent en dessous dans la hiérarchie.
- Veillez à utiliser les titres dans le bon ordre hiérarchique. N'utilisez pas des éléments `<h3>` pour représenter des sous-titres, suivis d'éléments `<h2>` pour représenter des sous-sous-titres — cela n'a pas de sens et produira des résultats étranges.
- Parmi les six niveaux de titres disponibles, essayez d'en utiliser au maximum trois par page, sauf si cela s'avère nécessaire. Les documents avec de nombreux niveaux (par exemple, une hiérarchie de titres profonde) deviennent difficiles à manipuler et à parcourir. Dans ce cas, il est conseillé de répartir le contenu sur plusieurs pages si possible.

## Pourquoi avons-nous besoin de structure ?

Pour répondre à cette question, regardons [text-start.html <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) — une sympathique recette de houmous. Le corps de ce document contient actuellement plusieurs morceaux de contenu. Ils ne sont pas balisés d'aucune façon, mais sont séparés par des retours à la ligne (<kbd>Entrée</kbd>/<kbd>Retour</kbd> pour passer à la ligne suivante).

Cependant, lorsque vous ouvrez le document dans votre navigateur, vous verrez que le texte apparaît comme un gros bloc&nbsp;!

![Une page web affichant un mur de texte non formaté, car aucun élément n'est présent pour structurer le contenu.](screen_shot_2017-03-29_at_09.20.35.png)

C'est parce qu'il n'y a aucun élément pour donner une structure au contenu, donc le navigateur ne sait pas ce qui est un titre et ce qui est un paragraphe. De plus&nbsp;:

- Les utilisateur·ice·s qui consultent une page web ont tendance à la parcourir rapidement pour trouver le contenu pertinent, souvent en ne lisant que les titres au début. (Nous [passons généralement très peu de temps sur une page web <sup>(angl.)</sup>](https://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/).) S'ils·elles ne voient rien d'utile en quelques secondes, cela peut les frustrer et les faire aller ailleurs.
- Les moteurs de recherche qui indexent votre page considèrent le contenu des titres comme des mots-clés importants pour influencer le classement de la page dans les résultats de recherche. Sans titres, votre page sera mal classée en termes de {{Glossary("SEO")}} (optimisation pour les moteurs de recherche).
- Les personnes très malvoyantes ne lisent souvent pas les pages web&nbsp;; elles les écoutent à la place. Cela se fait avec un logiciel appelé [lecteur d'écran](https://fr.wikipedia.org/wiki/Lecteur_d%27%C3%A9cran). Ce logiciel propose des moyens d'accéder rapidement au contenu textuel. Parmi les différentes techniques utilisées, il fournit un plan du document en lisant les titres, permettant à ses utilisateur·ice·s de trouver rapidement l'information recherchée. Si les titres ne sont pas disponibles, ils·elles seront obligé·e·s d'écouter l'intégralité du document lu à voix haute.
- Pour mettre en forme le contenu avec {{Glossary("CSS")}}, ou lui faire faire des choses intéressantes avec {{Glossary("JavaScript")}}, vous devez avoir des éléments enveloppant le contenu concerné, afin que CSS/JavaScript puisse le cibler efficacement.

Nous devons donc donner à notre contenu un balisage structurel.

## Structurer le contenu

Passons directement à la pratique avec un petit défi de code pour vous exercer à structurer des titres et des paragraphes HTML&nbsp;:

1. Cliquez sur **«&nbsp;Exécuter&nbsp;»** dans le bloc de code ci-dessous pour éditer l'exemple dans le MDN Playground.
2. Entourez le texte approprié au début du contenu avec un élément `<h1>` pour en faire un titre principal.
3. Il y a deux paires de mots qui doivent être entourées d'éléments `<h2>` pour en faire des titres de second niveau.
4. Entourez les phrases restantes dans des éléments `<p>` pour en faire des paragraphes. Un élément `<p>` doit se trouver sous chaque `<h2>`.

Si vous faites une erreur, vous pouvez réinitialiser votre travail avec le bouton _Réinitialiser_ du MDN Playground. Si vous êtes vraiment bloqué·e, vous pouvez consulter la solution sous le bloc de code.

```html live-sample___headings_paragraphs
Parties du corps préférées Le cerveau Belle forme et belle couleur. Sert aussi à
réfléchir. Les pieds Noueux et laids, mais utiles pour se déplacer.
```

{{EmbedLiveSample('headings_paragraphs', "100%", 60)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre élément HTML final devrait ressembler à ceci&nbsp;:

```html
<h1>Parties du corps préférées</h1>

<h2>Le cerveau</h2>

<p>Belle forme et belle couleur. Sert aussi à réfléchir.</p>

<h2>Les pieds</h2>

<p>Noueux et laids, mais utiles pour se déplacer.</p>
```

</details>

## Pourquoi avons-nous besoin de sémantique ?

La sémantique est partout autour de nous — nous nous appuyons sur notre expérience pour savoir à quoi sert un objet du quotidien&nbsp;; quand nous voyons quelque chose, nous savons à quoi cela sert. Par exemple, nous nous attendons à ce qu'un feu rouge signifie «&nbsp;arrêt&nbsp;» et un feu vert «&nbsp;avance&nbsp;». Les choses peuvent devenir très compliquées si la mauvaise sémantique est appliquée. (Est-ce qu'un pays utilise le rouge pour dire «&nbsp;avancez&nbsp;»&nbsp;? Nous l'espérons pas.)

De la même façon, nous devons nous assurer d'utiliser les bons éléments, en donnant à notre contenu le sens, la fonction ou l'apparence correcte. Dans ce contexte, l'élément `{{HTMLElement("Heading_Elements", "&lt;h1>")}}` est aussi un élément sémantique, qui donne au texte qu'il englobe le rôle (ou le sens) de «&nbsp;titre de niveau supérieur sur votre page&nbsp;».

```html
<h1>Ceci est un titre de niveau supérieur</h1>
```

Par défaut, le navigateur lui attribue une grande taille de police pour qu'il ressemble à un titre (même si vous pouvez le styliser comme vous le souhaitez avec du CSS). Plus important encore, sa valeur sémantique sera utilisée de multiples façons, par exemple par les moteurs de recherche et les lecteurs d'écran (comme mentionné plus haut).

À l'inverse, vous pouvez faire en sorte que n'importe quel élément _ressemble_ à un titre de niveau supérieur. Considérez l'exemple suivant&nbsp;:

```html
<span style="font-size: 32px; margin: 21px 0; display: block;">
  Est-ce un titre de niveau supérieur&nbsp;?
</span>
```

Il s'agit d'un élément HTML {{HTMLElement("span")}}. Il n'a aucune sémantique. Vous l'utilisez pour envelopper du contenu lorsque vous souhaitez lui appliquer du CSS (ou faire quelque chose avec JavaScript) sans lui donner de signification supplémentaire. (Vous en apprendrez plus sur ces éléments plus loin dans le cours.) Nous avons appliqué du CSS pour qu'il ressemble à un titre de niveau supérieur, mais comme il n'a aucune valeur sémantique, il ne bénéficiera d'aucun des avantages décrits ci-dessus. Il est donc préférable d'utiliser l'élément HTML pertinent pour la tâche.

## Résumé

Ceci conclut notre étude des titres et paragraphes HTML. Ensuite, nous aborderons d'autres aspects du HTML sémantique&nbsp;: donner de l'importance aux mots.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Webpage_metadata", "Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content")}}
