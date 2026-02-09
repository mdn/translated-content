---
title: Listes
slug: Learn_web_development/Core/Structuring_content/Lists
l10n:
  sourceCommit: 27f34d8b137f9bb2b467f9f9a1c4e1d04e12ed89
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content")}}

Passons maintenant aux listes. Les listes sont partout dans la vie — de votre liste de courses à la liste des directions que vous suivez inconsciemment pour rentrer chez vous chaque jour, en passant par les listes d'instructions que vous suivez dans ces tutoriels&nbsp;! Il n'est donc pas surprenant que HTML propose un ensemble d'éléments pratiques permettant de définir différents types de listes. Sur le web, il existe trois types de listes&nbsp;: les listes non ordonnées, les listes ordonnées et les listes de description. Cette leçon vous montre comment utiliser ces différents types.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissances de base en HTML, comme expliqué dans
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe HTML de base</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>La structure HTML des trois types de listes — non ordonnées, ordonnées et de description.</li>
          <li>La bonne utilisation de chaque type de liste.</li>
          <li>Les cas d'utilisation plus larges des listes, comme les menus de navigation.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Listes non ordonnées

Les listes non ordonnées servent à baliser des listes d'éléments dont l'ordre n'a pas d'importance. Prenons l'exemple d'une liste de courses&nbsp;:

```plain
lait
œufs
pain
houmous
```

Dans cet exemple, les éléments peuvent être dans n'importe quel ordre. Pour créer cette liste en HTML, on entoure d'abord toute la liste avec un élément HTML {{HTMLElement("ul")}} (liste non ordonnée).
Ensuite, on entoure chaque élément avec un élément HTML {{HTMLElement("li")}} (élément de liste)&nbsp;:

```html
<ul>
  <li>lait</li>
  <li>œufs</li>
  <li>pain</li>
  <li>houmous</li>
</ul>
```

### Balisage d'une liste non ordonnée

Pour vous entraîner, nous vous proposons de baliser vous-même la liste précédente&nbsp;:

1. Cliquez sur **«&nbsp;Exécuter&nbsp;»** dans le rendu du code ci-dessous pour éditer l'exemple dans le MDN Playground.
2. Transformez les éléments de texte individuels en une liste non ordonnée.

Si vous faites une erreur, vous pouvez effacer votre travail avec le bouton _Réinitialiser_ du MDN Playground. Si vous êtes bloqué, reportez-vous à l'extrait de code précédent.

```html hidden live-sample___lists_1
lait œufs pain houmous
```

{{EmbedLiveSample('lists_1', "100%", 60)}}

## Listes ordonnées

Les listes ordonnées sont des listes dans lesquelles l'ordre des éléments _a_ de l'importance. Prenons l'exemple d'un itinéraire&nbsp;:

```plain
Allez jusqu'au bout de la rue
Tournez à droite
Traversez tout droit les deux premiers ronds-points
Tournez à gauche au troisième rond-point
L'école est sur votre droite, à 300 mètres plus loin
```

La structure de balisage est la même que pour les listes non ordonnées, sauf qu'il faut entourer les éléments de liste avec un élément HTML {{HTMLElement("ol")}} au lieu de `<ul>`&nbsp;:

```html
<ol>
  <li>Allez jusqu'au bout de la rue</li>
  <li>Tournez à droite</li>
  <li>Traversez tout droit les deux premiers ronds-points</li>
  <li>Tournez à gauche au troisième rond-point</li>
  <li>L'école est sur votre droite, à 300 mètres plus loin</li>
</ol>
```

### Balisage d'une liste ordonnée

Nouvel exercice&nbsp;! Comme pour la tâche précédente, nous vous proposons de baliser vous-même la liste ordonnée ci-dessus&nbsp;:

1. Cliquez sur **«&nbsp;Exécuter&nbsp;»** dans le rendu du code ci-dessous pour éditer l'exemple dans le MDN Playground.
2. Transformez les éléments de texte individuels en une liste ordonnée.

Si vous faites une erreur, vous pouvez effacer votre travail avec le bouton _Réinitialiser_ du MDN Playground. Si vous êtes bloqué, reportez-vous à l'extrait de code précédent.

```html hidden live-sample___lists_2
Allez jusqu'au bout de la rue Tournez à droite Traversez tout droit les deux
premiers ronds-points Tournez à gauche au troisième rond-point L'école est sur
votre droite, à 300 mètres plus loin
```

{{EmbedLiveSample('lists_2', "100%", 60)}}

## Balisage de notre page de recette

Voici un vrai défi&nbsp;! À ce stade de l'article, vous avez toutes les informations nécessaires pour baliser une section de contenu un peu plus complexe. Nous vous proposons de baliser les instructions de notre recette de houmous préférée.

Vous pouvez choisir&nbsp;:

- D'enregistrer une copie locale du fichier de départ [text-start.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-start.html) et de travailler dans votre éditeur de code.
- De cliquer sur **«&nbsp;Exécuter&nbsp;»** dans le rendu du code ci-dessous pour éditer l'exemple dans le MDN Playground.

Voici les instructions à suivre&nbsp;:

1. Balisez le titre principal de la page avec un élément `<h1>`, et les trois sous-titres avec des éléments `<h2>`.
2. Il y a cinq lignes de texte qui doivent être balisées avec des éléments `<p>`. Faites-le maintenant.
3. Balisez la liste des ingrédients comme une liste non ordonnée.
4. Balisez la liste des instructions comme une liste ordonnée.

Si vous faites une erreur, vous pouvez effacer votre travail avec le bouton _Réinitialiser_ du MDN Playground. Si vous êtes vraiment bloqué, vous pouvez consulter la solution sous le bloc de code.

```html-nolint live-sample___lists_3
Recette rapide de houmous

Cette recette permet de préparer rapidement un houmous savoureux, sans prise de tête. Elle a été adaptée à partir de plusieurs recettes que j'ai lues au fil des années.

Le houmous est une pâte épaisse délicieuse, très utilisée dans la cuisine grecque et moyen-orientale. Il est excellent avec une salade, des viandes grillées ou du pain pita.

Ingrédients

1 boîte (400g) de pois chiches
175g de tahini
6 tomates séchées
La moitié d'un poivron rouge
Une pincée de piment de Cayenne
1 gousse d'ail
Un filet d'huile d'olive

Instructions

Retirez la peau de l'ail et hachez-le grossièrement
Retirez toutes les graines et la tige du poivron, puis hachez-le grossièrement
Mettez tous les ingrédients dans un robot culinaire
Mixez tous les ingrédients jusqu'à obtenir une pâte
Si vous voulez un houmous à la texture « grossière », mixez-le pendant un court instant
Si vous voulez un houmous lisse, mixez-le plus longtemps

Pour varier les saveurs, vous pouvez essayer d'ajouter un peu de citron et coriandre, de piment, de citron vert et chipotle, de harissa et menthe, ou encore d'épinards et feta. Expérimentez et voyez ce qui vous plaît.

Conservation

Réfrigérez le houmous terminé dans un récipient hermétique. Vous pourrez l'utiliser pendant environ une semaine après l'avoir préparé. S'il commence à devenir pétillant, il faut absolument le jeter.

Le houmous se congèle très bien ; il suffit de le décongeler et de l'utiliser dans les deux mois.
```

{{EmbedLiveSample('lists_3', "100%", 260)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Vous pouvez trouver un exemple du HTML correct pour cet exercice dans [text-complete.html](https://github.com/mdn/learning-area/blob/main/html/introduction-to-html/html-text-formatting/text-complete.html) sur notre dépôt GitHub.

</details>

## Imbriquer des listes

Il est tout à fait possible d'imbriquer une liste dans une autre. Vous pouvez par exemple vouloir ajouter des sous-puces sous une puce principale. Prenons la deuxième liste de notre exemple de recette&nbsp;:

```html
<ol>
  <li>Retirez la peau de l'ail et hachez-le grossièrement.</li>
  <li>
    Retirez toutes les graines et la tige du poivron, puis hachez-le
    grossièrement.
  </li>
  <li>Mettez tous les ingrédients dans un robot culinaire.</li>
  <li>Mixez tous les ingrédients jusqu'à obtenir une pâte.</li>
  <li>
    Si vous voulez un houmous à la texture « grossière », mixez-le pendant un
    court instant.
  </li>
  <li>Si vous voulez un houmous lisse, mixez-le plus longtemps.</li>
</ol>
```

Comme les deux dernières puces sont très liées à celle qui les précède (elles ressemblent à des sous-instructions ou à des choix qui s'insèrent sous cette puce), il peut être pertinent de les imbriquer dans leur propre liste non ordonnée, placée à l'intérieur de la quatrième puce. Cela donnerait&nbsp;:

```html
<ol>
  <li>Retirez la peau de l'ail et hachez-le grossièrement.</li>
  <li>
    Retirez toutes les graines et la tige du poivron, puis hachez-le
    grossièrement.
  </li>
  <li>Mettez tous les ingrédients dans un robot culinaire.</li>
  <li>
    Mixez tous les ingrédients jusqu'à obtenir une pâte.
    <ul>
      <li>
        Si vous voulez un houmous à la texture « grossière », mixez-le pendant
        un court instant.
      </li>
      <li>Si vous voulez un houmous lisse, mixez-le plus longtemps.</li>
    </ul>
  </li>
</ol>
```

Essayez de revenir à la tâche précédente et de mettre à jour la deuxième liste de cette façon.

## Listes de description

Les listes de description servent à baliser un ensemble d'éléments et leurs descriptions associées, comme des termes et définitions, ou des questions et réponses. Voyons un exemple de termes et définitions&nbsp;:

```plain
soliloque
Au théâtre, lorsqu'un personnage se parle à lui-même, exprimant ses pensées ou sentiments intérieurs et les transmettant ainsi au public (mais pas aux autres personnages).
monologue
Au théâtre, lorsqu'un personnage exprime ses pensées à voix haute pour les partager avec le public et les autres personnages présents.
aparté
Au théâtre, lorsqu'un personnage partage un commentaire uniquement avec le public pour un effet humoristique ou dramatique. Il s'agit généralement d'un sentiment, d'une pensée ou d'une information de contexte supplémentaire.
```

Les listes de description utilisent un conteneur différent des autres types de listes — {{HTMLElement("dl")}}&nbsp;; chaque terme est entouré d'un élément {{HTMLElement("dt")}} (terme de description), et chaque description est entourée d'un élément {{HTMLElement("dd")}} (définition de description).

### Exemple de liste de description

Terminons le balisage de notre exemple&nbsp;:

```html
<dl>
  <dt>soliloque</dt>
  <dd>
    Au théâtre, lorsqu'un personnage se parle à lui-même, exprimant ses pensées
    ou sentiments intérieurs et les transmettant ainsi au public (mais pas aux
    autres personnages).
  </dd>
  <dt>monologue</dt>
  <dd>
    Au théâtre, lorsqu'un personnage exprime ses pensées à voix haute pour les
    partager avec le public et les autres personnages présents.
  </dd>
  <dt>aparté</dt>
  <dd>
    Au théâtre, lorsqu'un personnage partage un commentaire uniquement avec le
    public pour un effet humoristique ou dramatique. Il s'agit généralement d'un
    sentiment, d'une pensée ou d'une information de contexte supplémentaire.
  </dd>
</dl>
```

Les styles par défaut du navigateur affichent les listes de description avec les descriptions légèrement en retrait par rapport aux termes.

{{EmbedLiveSample("Exemple de liste de description", "100%", 285)}}

### Descriptions multiples pour un terme

Il est possible d'avoir un seul terme avec plusieurs descriptions, par exemple&nbsp;:

```html
<dl>
  <dt>aparté</dt>
  <dd>
    Au théâtre, lorsqu'un personnage partage un commentaire uniquement avec le
    public pour un effet humoristique ou dramatique. Il s'agit généralement d'un
    sentiment, d'une pensée ou d'une information de contexte supplémentaire.
  </dd>
  <dd>
    En littérature, une section de contenu liée au sujet en cours, mais qui ne
    s'intègre pas directement dans le fil principal du texte et est donc
    présentée à proximité (souvent dans un encadré sur le côté).
  </dd>
</dl>
```

{{EmbedLiveSample("Descriptions multiples pour un terme", "100%", 193)}}

### Balisage d'un ensemble de définitions

C'est le moment de vous exercer au balisage d'une liste de description&nbsp;:

1. Cliquez sur **«&nbsp;Exécuter&nbsp;»** dans le bloc de code ci-dessous pour éditer l'exemple dans le MDN Playground.
2. Utilisez les éléments appropriés pour baliser les trois termes et les quatre descriptions du contenu. Gardez à l'esprit que le troisième terme a deux descriptions.

Si vous faites une erreur, vous pouvez effacer votre travail avec le bouton _Réinitialiser_ du MDN Playground. Si vous êtes vraiment bloqué, vous pouvez consulter la solution sous le bloc de code.

```html-nolint live-sample___lists_4
Amour
La colle qui unit le monde.
Œufs
La colle qui unit le gâteau.
Café
La boisson qui fait démarrer le monde le matin.
Une couleur brun clair.
```

{{EmbedLiveSample('lists_4', "100%", 60)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final devrait ressembler à ceci&nbsp;:

```html
<dl>
  <dt>Amour</dt>
  <dd>La colle qui unit le monde.</dd>
  <dt>Œufs</dt>
  <dd>La colle qui unit le gâteau.</dd>
  <dt>Café</dt>
  <dd>La boisson qui fait démarrer le monde le matin.</dd>
  <dd>Une couleur brun clair.</dd>
</dl>
```

</details>

## Résumé

Voilà pour les listes. Nous allons maintenant vous proposer quelques tests pour vérifier ce que vous avez compris et retenu sur les bases du texte en HTML.

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Emphasis_and_importance", "Learn_web_development/Core/Structuring_content/Test_your_skills/HTML_text_basics", "Learn_web_development/Core/Structuring_content")}}
