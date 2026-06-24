---
title: Mise en forme des tableaux
slug: Learn_web_development/Core/Styling_basics/Tables
l10n:
  sourceCommit: 56ccb15b023cb11234cd044a68d6d3a93e752326
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Styling_basics")}}

Mettre en forme un tableau HTML n'est pas la tâche la plus passionnante qui soit, mais nous devons tous nous y atteler de temps en temps. Cet article explique comment améliorer l'apparence des tableaux HTML, en mettant en avant certaines techniques spécifiques de mise en forme.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Notions de base en HTML</a
        > et <a href="/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics"
          >Tableaux HTML</a
        >, <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Valeurs et unités</a> et <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Sizing">Dimensionnement</a> CSS.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Gérer l'espacement dans les tableaux, y compris la fusion des bordures.</li>
          <li>Mettre en évidence clairement les différentes régions du tableau, y compris les en-têtes, la légende, l'en-tête, le corps et le pied de page.</li>
          <li>Comment mettre en œuvre les zébras, et pourquoi c'est utile.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Un tableau HTML typique

Commençons par examiner un tableau HTML classique. Enfin, nous disons «&nbsp;classique&nbsp;»… La plupart des exemples de tableaux HTML portent sur les chaussures, la météo ou les employés&nbsp;; nous avons décidé de rendre les choses plus intéressantes en choisissant comme sujet les groupes punk célèbres du Royaume-Uni. Le code se présente comme suit&nbsp;:

```html live-sample___unstyled live-sample___punk-style live-sample___best-practice-style
<table>
  <caption>
    Récapitulatif des groupes punk les plus célèbres du Royaume-Uni
  </caption>
  <thead>
    <tr>
      <th scope="col">Groupe</th>
      <th scope="col">Année de formation</th>
      <th scope="col">Nombre d'albums</th>
      <th scope="col">Morceau le plus célèbre</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row" lang="en">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>
        <i lang="en">Ever fallen in love (with someone you shouldn't've)</i>
      </td>
    </tr>
    <tr>
      <th scope="row" lang="en">The Clash</th>
      <td>1976</td>
      <td>6</td>
      <td><i lang="en">London Calling</i></td>
    </tr>
    <tr>
      <th scope="row" lang="en">The Damned</th>
      <td>1976</td>
      <td>10</td>
      <td lang="en">Smash it up</td>
    </tr>
    <tr>
      <th scope="row" lang="en">Sex Pistols</th>
      <td>1975</td>
      <td>1</td>
      <td lang="en">Anarchy in the UK</td>
    </tr>
    <tr>
      <th scope="row" lang="en">Sham 69</th>
      <td>1976</td>
      <td>13</td>
      <td lang="en">If The Kids Are United</td>
    </tr>
    <tr>
      <th scope="row" lang="en">Siouxsie and the Banshees</th>
      <td>1976</td>
      <td>11</td>
      <td lang="en">Hong Kong Garden</td>
    </tr>
    <tr>
      <th scope="row" lang="en">Stiff Little Fingers</th>
      <td>1977</td>
      <td>10</td>
      <td lang="en">Suspect Device</td>
    </tr>
    <tr>
      <th scope="row" lang="en">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td><i lang="en">No More Heroes</i></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Nombre total d'albums</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
```

Le tableau est bien balisé, facile à mettre en forme et accessible grâce aux fonctionnalités offertes par [`scope`](/fr/docs/Web/HTML/Reference/Elements/th#scope), {{HTMLElement("caption")}}, {{HTMLElement("thead")}}, {{HTMLElement("tbody")}}, etc. Malheureusement, son apparence n'est pas très attrayante. Avec seulement le style par défaut du navigateur, il semble encombré, difficile à lire et un peu ennuyeux&nbsp;:

{{EmbedLiveSample("unstyled", "", 200)}}

Nous devons utiliser un peu de CSS pour améliorer cela. Vous pouvez mettre en forme un tableau de la manière que vous souhaitez en utilisant CSS. Par exemple, nous avons créé ce design plutôt «&nbsp;punk&nbsp;»&nbsp;:

```css hidden live-sample___punk-style
/* importation de la police */
@import "https://fonts.googleapis.com/css2?family=Rock+Salt&display=swap";

/* espacement */
table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}

thead th {
  line-height: 1.5;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th,
td {
  padding: 20px;
}

/* typographie */
html {
  font-family: "Helvetica Neue", "Helvetica", "Arial", sans-serif;
}

thead th,
tfoot th {
  font-family: "Rock Salt", cursive;
}

th {
  letter-spacing: 2px;
}

td {
  letter-spacing: 1px;
}

tbody td {
  text-align: center;
}

tfoot th {
  text-align: right;
}

/* graphismes */
thead,
tfoot {
  background: url("https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/leopardskin.jpg");
  color: white;
}

thead th,
tfoot th,
tfoot td {
  background: linear-gradient(to bottom, rgb(0 0 0 / 0.1), rgb(0 0 0 / 0.5));
  border: 3px solid purple;
  text-shadow: 1px 1px 1px black;
}

tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}

tbody tr {
  background-image: url("https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/noise.png");
}

table {
  background-color: #ff33cc;
}

/* légende */
caption {
  font-family: "Rock Salt", cursive;
  padding: 20px;
  font-style: italic;
  caption-side: bottom;
  color: #666666;
  text-align: right;
  letter-spacing: 1px;
}
```

{{EmbedLiveSample("punk-style", "", 500)}}

Cependant, ce design est plutôt criard. Dans cet article, nous allons vous aider à le remanier en suivant certaines bonnes pratiques en matière de conception de tableaux, telles que décrites dans [Typographie Web&nbsp;: concevoir des tableaux pour qu'on les lise, pas pour qu'on les regarde <sup>(angl.)</sup>](https://alistapart.com/article/web-typography-tables/).

## Commencer à mettre en forme notre tableau

Travaillons ensemble sur la mise en forme de notre exemple de tableau.

1. Pour commencer, faites une copie locale du balisage d'exemple [montré plus haut](#un_tableau_html_typique) et enregistrez-le dans un répertoire de travail quelque part sur votre ordinateur.
2. Ensuite, créez un nouveau fichier appelé `style.css` et enregistrez-le dans le même répertoire que vos autres fichiers.
3. Liez le CSS au HTML en plaçant la ligne suivante dans votre {{HTMLElement("head")}}&nbsp;:

   ```html
   <link href="style.css" rel="stylesheet" />
   ```

Chargez votre HTML dans un navigateur pour voir à quoi il ressemble par défaut.

## Mettre à jour la police

Ceci est un point mineur et n'est pas strictement lié à la mise en forme des tableaux, mais nous avons trouvé que la police par défaut semblait un peu trop formelle pour un tableau sur les groupes punk. Commencez votre CSS en ajoutant la règle suivante&nbsp;:

```css
html {
  font-family: "Helvetica", "Arial", sans-serif;
}
```

## Espacement

La première chose que nous devons faire pour notre tableau est de régler l'espacement — le style par défaut des tableaux est tellement serré&nbsp;! Pour ce faire, ajoutez le CSS suivant à la fin de votre fichier `style.css`&nbsp;:

```css
table {
  table-layout: fixed;
  width: 90%;
  margin: 10px auto;
  border-collapse: collapse;
}

th,
td {
  padding: 0.6em;
}
```

Les points les plus importants à noter sont les suivants&nbsp;:

- Une valeur {{CSSxRef("table-layout")}} à `fixed` est généralement une bonne idée à définir sur votre tableau, car elle permet au tableau de se comporter de manière un peu plus prévisible par défaut. Normalement, les colonnes de tableau ont tendance à être dimensionnées en fonction de la quantité de contenu qu'elles contiennent, ce qui produit des résultats étranges. Avec `table-layout: fixed`, vous pouvez dimensionner vos colonnes en fonction de la largeur de leurs en-têtes, puis gérer leur contenu en conséquence. Chris Coyier discute de cette technique plus en détail dans [Mise en page fixe des tableaux <sup>(angl.)</sup>](https://css-tricks.com/fixing-tables-long-strings/).

- Nous avons associé la mise en page fixe à une {{CSSxRef("width")}} de `90%` et à une {{CSSxRef("margin")}} de `10px auto`. Ces paramètres signifient que le tableau remplit principalement la fenêtre et est centré horizontalement.

- Une valeur {{CSSxRef("border-collapse")}} de `collapse` est une bonne pratique standard pour tout effort de style de tableau. Par défaut, lorsque vous définissez des bordures sur les éléments de tableau, ils ont tous un espacement entre eux, comme l'illustre l'image ci-dessous&nbsp;: ![un tableau 2 par 2 avec un espacement par défaut entre les bordures montrant aucune fusion de bordure](no-border-collapse.png)
  Cela n'a pas l'air très joli (bien que cela puisse être le visuel que vous voulez, qui sait&nbsp;?). Avec `border-collapse: collapse;` défini, les bordures se fusionnent en une seule, ce qui est beaucoup mieux&nbsp;: ![un tableau 2 par 2 avec la propriété border-collapse définie sur collapse montrant les bordures fusionnées en une seule](border-collapse.png)

- Nous avons défini un peu de {{CSSxRef("padding")}} sur les éléments {{HTMLElement("th")}} et {{HTMLElement("td")}} — cela donne aux éléments de données un peu d'espace pour respirer, rendant le tableau beaucoup plus lisible.

Enregistrez votre code et actualisez votre navigateur pour voir les résultats.

## Alignement

Ensuite, nous allons nous occuper de l'alignement des différents types de données à l'intérieur de leurs cellules. Les bonnes pratiques dictent que vous devez aligner le texte à gauche et les nombres à droite&nbsp;; le CSS suivant y parvient, alors ajoutez-le maintenant à la fin de votre fichier CSS.

```css
tr :nth-child(2),
tr :nth-child(3) {
  text-align: right;
  width: 15%;
}

tr :nth-child(1),
tr :nth-child(4) {
  text-align: left;
  width: 35%;
}

tfoot tr :nth-child(1) {
  text-align: right;
}

tfoot tr :nth-child(2) {
  text-align: left;
}
```

Nous avons utilisé la pseudo-classe {{CSSxRef(":nth-child")}} ici&nbsp;; un sélecteur utile qui vous permet de sélectionner un enfant numéroté spécifique d'un élément, ou une séquence spécifique. Ici, nous l'utilisons pour sélectionner des éléments `<td>` spécifiques à l'intérieur des éléments `<th>`.

Notez également que nous avons défini des largeurs spécifiques sur les lignes du tableau, les lignes contenant du texte étant beaucoup plus larges que celles contenant des nombres. C'est une bonne idée — les lignes contenant plus de contenu ont besoin de plus d'espace pour donner à leur contenu autant de chances que possible de tenir sur une seule ligne. Les lignes contenant moins de contenu n'ont pas besoin d'autant d'espace pour afficher leurs données, et en fait, si vous leur donnez beaucoup d'espace, les données se perdent un peu dans l'espace et sont donc plus difficiles à lire.

Nous devons également nous assurer que nos éléments de données sont alignés en haut de leurs cellules, plutôt qu'au milieu. Pour ce faire, nous pouvons utiliser la propriété {{CSSxRef("vertical-align")}}. Mettez à jour votre règle `th, td` existante comme suit&nbsp;:

```css
th,
td {
  vertical-align: top;
  padding: 0.3em;
}
```

Encore une fois, enregistrez et actualisez pour voir l'effet de vos dernières mises à jour CSS.

## Ajouter des bordures

Le tableau commence déjà à être beaucoup plus lisible, mais nous devrions ajouter quelques bordures pour fournir une séparation visuelle entre le `<caption>` du tableau, les données et la ligne totale en bas. Pour ce faire, ajoutez les règles suivantes à votre CSS&nbsp;:

```css
tfoot {
  border-top: 1px solid #999999;
}
```

Ensuite, mettez à jour votre règle `table` existante comme suit&nbsp;:

```css
table {
  table-layout: fixed;
  width: 90%;
  margin: 10px auto;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}
```

Encore une fois, enregistrez et actualisez pour voir l'effet de vos dernières mises à jour CSS.

## Les zébras

Nous voulions consacrer une section distincte pour vous montrer comment implémenter des **zébras** (ou rayures de zèbre) — des lignes de couleur alternées qui facilitent la lecture et l'analyse des différentes lignes de données de votre tableau. Ajoutez le CSS suivant à la fin de votre fichier `style.css`&nbsp;:

```css
tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}
```

Plus tôt, vous avez vu le sélecteur {{CSSxRef(":nth-child")}} être utilisé pour sélectionner des éléments enfants spécifiques. Il peut également recevoir une formule en paramètre, ce qui lui permet de sélectionner une séquence d'éléments. La formule `2n+1` sélectionne tous les enfants numérotés impairs (1, 3, 5, etc.) et la formule `2n` sélectionne tous les enfants numérotés pairs (2, 4, 6, etc.). Nous avons utilisé le mot-clé `odd` dans notre code, qui est un raccourci pour la formule `2n+1` (`even` est un raccourci pour `2n`).

Encore une fois, n'oubliez pas d'enregistrer et d'actualiser pour voir le résultat.

## Mettre en forme la légende

Il reste une dernière chose à faire avec notre tableau — mettre en forme la légende. Pour ce faire, ajoutez ce qui suit à la fin de votre fichier `style.css`&nbsp;:

```css
caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

Il n'y a rien de remarquable ici, sauf pour la propriété {{CSSxRef("caption-side")}}, à laquelle une valeur de `bottom` a été attribuée. Cela fait en sorte que la légende soit positionnée en bas du tableau.

## Tableau terminé

Votre conception de tableau terminée doit ressembler à ceci&nbsp;:

```css hidden live-sample___best-practice-style
html {
  font-family: "Helvetica", "Arial", sans-serif;
}

table {
  table-layout: fixed;
  width: 90%;
  margin: 10px auto;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}

th,
td {
  vertical-align: top;
  padding: 0.6em;
}

tr :nth-child(2),
tr :nth-child(3) {
  text-align: right;
  width: 15%;
}

tr :nth-child(1),
tr :nth-child(4) {
  text-align: left;
  width: 35%;
}

tfoot tr :nth-child(1) {
  text-align: right;
}

tfoot tr :nth-child(2) {
  text-align: left;
}

tfoot {
  border-top: 1px solid #999999;
}

tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}

caption {
  padding: 1em;
  font-style: italic;
  caption-side: bottom;
  letter-spacing: 1px;
}
```

{{EmbedLiveSample("best-practice-style", "", 520)}}

## Conseils rapides pour le style des tableaux

Avant de passer à autre chose, nous avons pensé vous fournir une liste rapide des points les plus utiles illustrés ci-dessus&nbsp;:

- Rendez votre balisage de tableau aussi simple que possible et gardez les choses flexibles.
- Utilisez {{CSSxRef("table-layout", "table-layout: fixed")}} pour créer une mise en page de tableau plus prévisible qui vous permet de définir facilement les largeurs des colonnes en définissant {{CSSxRef("width")}} sur leurs en-têtes ({{HTMLElement("th")}}).
- Utilisez {{CSSxRef("border-collapse", "border-collapse: collapse")}} pour que les bordures des éléments de tableau se chevauchent, produisant un aspect plus net et plus facile à contrôler.
- Utilisez {{HTMLElement("thead")}}, {{HTMLElement("tbody")}} et {{HTMLElement("tfoot")}} pour diviser votre tableau en sections logiques et fournir des endroits supplémentaires pour appliquer du CSS, ce qui facilite la superposition des styles si nécessaire.
- Utilisez les zébras pour rendre les lignes alternatives plus faciles à lire.
- Utilisez {{CSSxRef("text-align")}} pour aligner le texte de vos {{HTMLElement("th")}} et {{HTMLElement("td")}}, afin de rendre les choses plus nettes et plus faciles à suivre.

## Résumé

Avec le style des tableaux maintenant derrière nous, nous avons besoin de quelque chose d'autre pour occuper notre temps. L'article suivant explore le débogage CSS — comment résoudre des problèmes tels que des mises en page qui ne ressemblent pas à ce qu'elles devraient, ou des propriétés qui ne s'appliquent pas lorsque vous pensez qu'elles devraient. Cela inclut des informations sur l'utilisation des outils de développement du navigateur pour trouver des solutions à vos problèmes.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Styling_basics")}}
