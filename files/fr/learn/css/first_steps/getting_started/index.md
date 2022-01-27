---
title: Démarrer avec CSS
slug: Learn/CSS/First_steps/Getting_started
tags:
  - CSS
  - Classes
  - Débutant
  - Element
  - Etat
  - Syntaxe
  - Sélecteurs
translation_of: Learn/CSS/First_steps/Getting_started
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}

Dans cet article nous vous montrons comment appliquer un style CSS à un document HTML simple. Vous apprendrez des choses pratiques concernant CSS.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Connaissances élémentaires en informatique, <a
          href="/fr/docs/Apprendre/Commencer_avec_le_web/Installation_outils_de_base"
          >suite logicielle de base installée</a
        >, compréhension élémentaire du <a
          href="/fr/docs/Apprendre/Commencer_avec_le_web/Gérer_les_fichiers"
          > travail avec des fichiers</a
        >, des bases en HTML (cf. <a
          href="/fr/docs/Apprendre/HTML/Introduction_à_HTML"
          >Introduction à HTML</a
        >.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Comprendre comment associer une feuille de style CSS à un document HTML,
        savoir appliquer quelques règles simples de mise en forme d'un texte.
      </td>
    </tr>
  </tbody>
</table>

## D'abord un peu de HTML

Notre point de départ est un document HTML. Pour suivre la leçon en travaillant sur votre ordinateur, vous pouvez copier le code ci-dessous. Collez le dans un fichier en utilisant un éditeur de code, puis sauvegardez le sous le nom `index.html`.

```html
<!doctype html>
<html lang="fr">
<head>
    <meta charset="utf-8">
    <title>Démarrer avec CSS</title>
</head>

<body>

    <h1>Je suis un titre de niveau un</h1>

    <p>Ceci est un paragraphe. Dans ce texte il y a un <span>élément span</span>
 et aussi un <a href="http://example.com">lien</a>.</p>

    <p>Ceci est un second paragraphe. On y trouve un élément <em>mis en valeur</em>.</p>

    <ul>
        <li>Item un</li>
        <li>Item deux</li>
        <li>Item <em>trois</em></li>
    </ul>

</body>

</html>
```

> **Note :** Si vous lisez cet article sur un appareil ou dans un environnement où il n'est pas aisé de créer des fichiers, pas de soucis — des éditeurs de code live sont proposés ci-dessous ; vous pourrez ainsi tester les exemples de code directement dans cette page.

## Ajouter CSS à notre document

Pour commencer, on doit signaler au document HTML que nous souhaitons utiliser des règles CSS. Vous rencontrerez trois possibilités pour appliquer CSS à un document HTML. Nous nous contenterons de présenter la méthode la plus utilisée  — créer un lien vers la feuille de style CSS depuis l'en-tête du document HTML.

Avec votre éditeur de code, dans le dossier où se trouve le document HTML, créez un fichier et sauvegardez le sous le nom `styles.css`. L'extension `.css` indique que c'est un fichier CSS.

Pour lier `styles.css` à `index.html` ajoutez la ligne suivante dans la section {{htmlelement("head")}} du document HTML :

```html
<link rel="stylesheet" href="styles.css">
```

Cet élément {{htmlelement("link")}} indique au navigateur la présence d'une feuille de style, grâce à l'attribut `rel` ; la valeur de l'attribut `href` donne la localisation du fichier CSS. Pour tester que le lien fonctionne, nous allons définir une règle dans `styles.css`. Grâce à votre éditeur de code, ajoutez les lignes suivantes à la feuille de style CSS :

```css
h1 {
  color: red;
}
```

Dans votre éditeur de code, sauvegardez vos documents HTML et CSS puis rechargez la page HTML dans votre navigateur. Le titre de niveau un en haut du document devrait maintenant apparaître en rouge. Si c'est le cas, félicitations — vous avez appliqué avec succès une règle CSS à votre document HTML. Si ce n'est pas le cas, vérifiez scrupuleusement que vous avez tout bien fait comme indiqué.

Pour suivre le reste de ce tutoriel, vous pouvez continuer à éditer `styles.css` sur votre machine, ou utiliser l'éditeur interactif proposé ci-dessous. L'éditeur interactif se comporte comme si le CSS dans le premier cadre était lié au document HTML, exactement comme sur votre machine après les manipulations précédentes.

## Mettre en forme des éléments HTML

En passant la couleur de police des titres en rouge nous avons vu comment sélectionner et mettre en forme un élément HTML.

Cela est réalisé grâce à un sélecteur d'élément — dans la règle CSS, le sélecteur correspond au nom d'un élément HTML. Pour appliquer un style à tous les paragraphes du document HTML on utilisera le sélecteur `p`. Voilà la règle pour passer en vert tous les paragraphes :

```css
p {
  color: green;
}
```

On peut cibler plusieurs éléments d'un coup en les listant, séparés par une virgule. Si je veux que tous les paragraphes et tous les items de liste soient verts j'écrirai la règle suivante :

```css
p, li {
    color: green;
}
```

Testez cela dans l'éditeur interacif ci-dessous (éditer les boîtes de code) ou sur votre machine en local.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started1.html", '100%', 900)}}

## Changer le comportement par défaut des éléments

Quand on observe un document HTML bien formé, même simple comme notre exemple, on peut voir comment un navigateur le rend lisible par une mise en forme par défaut. Les titres sont écrits en gras dans une taille plus grande, les items des listes sont précédés d'une puce. Les navigateurs ont leurs feuilles de style internes qu'ils appliquent par défaut à toutes les pages ; sans cela, tout le texte s'agglutinerait en paquet et il faudrait tout mettre en forme à partir de zéro. Tous les navigateurs modernes rendent les contenus HTML par défaut essentiellement de la même manière.

On recherche pourtant souvent autre chose que ce rendu par défaut. Il suffit alors de sélectionner l'élément HTML dont on veut modifier le rendu et d'écrire la règle CSS pour réaliser cette mise en forme.  Un bon exemple est notre `<ul>`, une liste non ordonnée. Ses items sont marqués par des puces et si on décide de se débarrasser de ces puces, on peut le faire comme suit :

```css
li {
  list-style-type: none;
}
```

Ajoutez cette règle dans votre CSS et testez en l'effet.

Cherchez maintenant sur MDN quelles sont les valeurs possibles pour la propriété `list-style-type`. Dans la page pour [`list-style-type`](/fr/docs/Web/CSS/list-style-type) vous trouverez un exemple interactif en haut de page, vous pourrez tester quelques valeurs ; toutes les valeurs autorisées sont détaillées dans le reste de la page.

En parcourant la page de documentation, vous découvrirez qu'au lieu de supprimer les puces, vous pouvez en changer l'aspect — essayez la valeur `square` pour obtenir des puces carrées.

## Ajouter une classe

Jusqu'ici, nous avons mis en forme des éléments HTML repérés par leur nom de balise. Cela fonctionne tant que vous voulez appliquer le même style à tous les éléments de ce type dans le document. La plupart du temps ce n'est pas le comportement désiré ; il faut donc trouver une méthode pour sélectionner un sous-ensemble des éléments à mettre en forme sans changer l'apparence des autres éléments du même type. L'approche la plus commune pour obtenir ce comportement est d'ajouter une classe (pensez à une étiquette) aux éléments HTML à mettre en forme puis de sélectionner cette classe.

Dans le document HTML, ajouter un  [attribut class](/fr/docs/Web/HTML/Attributs_universels/class) au deuxième item de la liste :

```html
<ul>
  <li>Item un</li>
  <li class="special">Item deux</li>
  <li>Item <em>trois</em></li>
</ul>
```

Dans votre CSS vous pouvez maintenant cibler la classe `special` grâce à un sélecteur fait du nom de la classe précédé d'un point. Ajoutez le code suivant à votre feuille de style :

```css
.special {
  color: orange;
  font-weight: bold;
}
```

Sauvegardez et rechargez la page HTML dans votre navigateur pour observer le résultat.

Vous pouvez attribuer la classe `special` à tout élément dans votre document HTML, dans le navigateur il sera rendu comme le deuxième item de la liste. Par exemple, vous pourriez appliquer ce style à l'élément `<span>` du premier paragraphe.

Vous verrez parfois des règles avec un sélecteur qui combine le nom de l'élément HTML avec celui de la classe  :

```css
li.special {
  color: orange;
  font-weight: bold;
}
```

Cette syntaxe signifie "s'applique à tous les éléments `li` dont l'attribut `class` a la valeur `special`". Cette règle ne s'applique alors plus à l'élément `<span>` ou à tout autre élément dont l'attribut `class` a la valeur `special` mais qui n'est pas un `<li>.` Pour que la règle s'applique aussi au `<span>` il faudrait l'ajouter dans la liste des sélecteurs :

```css
li.special,
span.special {
  color: orange;
  font-weight: bold;
}
```

Comme vous pouvez bien l'imaginer, certaines classes s'appliquent à un grand nombre d'éléments et il n'est pas pensable de devoir éditer la feuille de style à chaque modification du document HTML. Les sélecteurs composé du nom de l'élément suivi de celui de la classe sont donc plutôt réservés aux situations où la règle ne s'applique qu'à un élément unique.

## Style en fonction de la position

Il y a des situations où vous voudrez que le style d'un élément s'adapte en fonction de sa position dans le document. De nombreux sélecteurs permettent de réaliser ce type de comportement, voyons les plus simples. Dans notre document HTML il y a deux éléments `<em>` — l'un dans un paragraphe l'autre dans l'item d'une liste. On peut cibler le `<em>` imbriqué dans l'élément `<li>` avec un **combinateur descendant** qui prend la forme suivante **:** deux sélecteurs séparés par un espace.

Ajoutez la règle suivante à votre feuille de style :

```css
li em {
  color: rebeccapurple;
}
```

Ce sélecteur cible tout élément `<em>` à l'intérieur (descendant) d'un `<li>`. Ainsi, dans notre exemple, le `<em>` dans le troisième item de la liste sera maintenant pourpre, alors que celui du paragraphe est inchangé.

On pourrait maintenant essayer d'appliquer un style à un paragraphe quand il vient juste après un titre de niveau un dans le HTML. Pour obtenir cela, on place un `+`  (le **combinateur de frères et sœurs adjacents**) entre les sélecteurs.

Ajoutez cette règle à votre feuille de style :

```css
h1 + p {
  font-size: 200%;
}
```

L'exemple live ci-dessous inclut les deux règles précédentes. Essayez d'ajouter une règle qui passe \<span> en rouge s'il est dans un paragraphe. Votre règle est correcte, si après sauvegarde du CSS et rafraîchissement du HTML dans le navigateur, le \<span> du premier paragraphe est rouge mais celui du premier item de la liste est inchangé.

{{EmbedGHLiveSample("css-examples/learn/getting-started/started2.html", '100%', 1100)}}

> **Note :** A ce point, on a déjà découvert plusieurs méthodes CSS pour cibler les éléments et pourtant on vient à peine de commencer ! Nous passerons en revue plus systématiquement tous ces sélecteurs dans la leçon [CSS Selectors](/fr/docs/Learn/CSS/Building_blocks/Selectors) du cours suivant.

## Mise en forme basée sur l'état

Pour finir ce tutoriel, voyons comment on peut appliquer une mise en forme basée sur l'état d'un élément. La mise en forme des liens illustre cela à merveille. Pour appliquer un style sur un lien, on doit cibler l'élément [`<a>`](/fr/docs/Web/HTML/Element/a) (ancre). Cet élément a différents états selon que le lien a ou n'a pas été visité (`visited`), est survolé par le curseur (`hover`), a le focus clavier (`focus`), ou si l'utilisateur est en train de cliquer sur ce lien (`active`). CSS permet de cibler ces différents états — les règles ci-dessous colorent en rose les liens non visités et en vert ceux qui l'ont été.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

On peut changer l'aspect des liens survolés, par exemple en supprimant le soulignement, avec la règle suivante :

```css
a:hover {
  text-decoration: none;
}
```

Dans l'exemple live ci-dessous, vous pouvez explorer les valeurs des différents états d'un lien. J'ai rajouté les règles précédentes à la feuille de style, notez comment le rose est très clair, peu lisible — pourquoi ne pas trouver une meilleure couleur ? Pourriez-vous passer les liens en gras ?

{{EmbedGHLiveSample("css-examples/learn/getting-started/started3.html", '100%', 900)}}

Nous avons supprimé le soulignement quand le lien est survolé.Vous pourriez supprimer le soulignement quel que soit l'état du lien. Dans un vrai site, il est quand même important que le visiteur sache qu'un lien est un lien. Le soulignement donne un indice important aux visiteurs pour réaliser qu'un bout de texte dans un paragraphe est cliquable — c'est le comportement auquel ils sont habitués. Avec le contrôle que donne CSS, les changements de style peuvent parfois rendre le document moins accessible — à chaque fois que nécessaire nous nous efforcerons de signaler les pièges classiques dans cette direction.

> **Note :** dans ce cours et à travers le site MDN, vous rencontrerez souvent la notion d'[accessibilité](/fr/docs/Apprendre/a11y) : les règles pour que nos pages soient compréhensibles et utilisables par tous.
>
> Vos visiteurs peuvent consulter votre page depuis un ordinateur équipé d'une souris ou d'un trackpad, ou depuis un téléphone avec un écran tactile. Ils peuvent aussi utiliser un lecteur d'écran qui parcourt le contenu du document. Ils pourraient avoir besoin d'un affichage en grands caractères, ou parcourir votre site en ne naviguant qu'avec le clavier.
>
> Un document HTML pur est généralement accessible à tous — il est important que les mises en forme appliquées ne le rendent pas moins accessible.

## Associer sélecteurs et combinateurs

On peut associer sélecteurs et combinateurs. Par exemple :

```css
/* sélectionne tout <span> à l'intérieur d'un <p>, lui-même à l'intérieur d'un <article>  */
article p span { ... }

/* sélectionne tout <p> qui vient juste après un <ul>, lui-même venant just après un <h1>  */
h1 + ul + p { ... }
```

On peut aussi combiner les types multiples. Essayez d'ajouter les règles suivantes à votre feuille de style :

```css
body h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Cette règle cible tout élément dont l'attribut class vaut `special`, à l'intérieur d'un `<p>`, qui vient juste après un `<h1>`, à l'intérieur de `<body>`. Ouf !

Dans notre document HTML le seul élément mis en forme selon la règle ci-dessus est `<span class="special">`.

Pas de panique, cela peut sembler compliqué pour le moment — avec un peu de pratique du CSS, vous maîtriserez très bientôt tout cela.

## Bilan

Dans ce tutoriel nous avons vu plusieurs façons de mettre en forme un document grâce aux règles CSS. En progressant dans les leçons de ce cours, nous développerons ces connaissances.

Vous en savez pourtant déjà assez pour : mettre en forme un texte ; utiliser différentes méthodes pour sélectionner les éléments HTML visés ; et recherchez les propriétés et les valeurs dans la documentation MDN.

Dans la leçon suivante, nous étudirons comment CSS est structuré.

{{PreviousMenuNext("Learn/CSS/First_steps/What_is_CSS", "Learn/CSS/First_steps/How_CSS_is_structured", "Learn/CSS/First_steps")}}

## Dans ce cours

1.  [Qu'est ce que  CSS?](/fr/docs/Learn/CSS/First_steps/Qu_est_ce_que_CSS)
2.  [Démarrer avec CSS](/fr/docs/Learn/CSS/First_steps/Getting_started)
3.  [Comment CSS est structuré](/fr/docs/Learn/CSS/First_steps/How_CSS_is_structured)
4.  [CSS comment ça marche ?](/fr/docs/Learn/CSS/First_steps/How_CSS_works)
5.  [Utiliser vos connaissances](/fr/docs/Learn/CSS/First_steps/Using_your_new_knowledge)
