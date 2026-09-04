---
title: "Défi : Corriger les styles de la page de blog"
short-title: "Défi : Corriger les styles du blog"
slug: Learn_web_development/Core/Styling_basics/Fixing_blog_styles
l10n:
  sourceCommit: 50a1895c9c499b1b9207f7af945a0fe45de58cca
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}

Dans ce défi, nous vous proposons un exemple de page de blog de base partiellement mise en forme. Nous avons besoin que vous corrigiez certains problèmes avec le CSS existant et ajoutiez des styles pour le compléter. En cours de route, nous testerons vos connaissances sur les sélecteurs, le modèle de boîte et les conflits/cascade.

## Point de départ

Pour commencer, cliquez sur le bouton **Exécuter** dans l'un des panneaux de code ci-dessous pour ouvrir l'exemple fourni dans le MDN Playground. Vous suivrez ensuite les instructions de la section [Cahier des charges](#cahier_des_charges) pour mettre en forme la page de manière appropriée.

```html live-sample___blog-start live-sample___blog-finish
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Défi de dimension d'une page de blog</title>
    <link href="style.css" rel="stylesheet" />
  </head>
  <body>
    <header>
      <h1>Un blog tout simplement génial</h1>
      <nav>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </header>
    <main>
      <section id="introduction" class="surbrillance">
        <h2>Notre dernier article</h2>
        <p>
          Laoreet lorem curae lectus blandit conubia vel semper laoreet congue
          at taciti.
          <a href="#">Phasellus hac consectetur iaculis dui</a> sapien iaculis
          hac ultricies per luctus. Suscipit mattis lacus semper in porta
          phasellus sollicitudin ipsum fermentum phasellus sapien. Inceptos
          etiam placerat porttitor finibus auctor at platea hendrerit aenean
          laoreet elit lorem odio.
        </p>
      </section>
      <section>
        <h2>Contenu passionnant</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Proin
          tortor purus <a href="#">platea sit eu id</a> nisi litora libero.
          Neque vulputate consequat ac amet augue blandit maximus aliquet
          congue. Pharetra vestibulum posuere ornare
          <a href="#">faucibus fusce dictumst</a> orci aenean eu facilisis ut
          volutpat commodo senectus purus himenaeos fames primis convallis nisi.
        </p>
        <ul>
          <li>Lorem ipsum dolor</li>
          <li>Neque vulputate consequat</li>
          <li>Phasellus fermentum malesuada</li>
          <li>Curabitur semper venenatis</li>
          <li>Duis lectus porta mattis</li>
        </ul>
        <p>
          Phasellus fermentum malesuada phasellus netus dictum aenean placerat
          egestas amet.
          <a href="#">Ornare taciti semper dolor tristique</a> morbi. Sem leo
          tincidunt aliquet semper eu lectus scelerisque quis. Sagittis vivamus
          mollis nisi mollis enim fermentum laoreet.
        </p>
        <h2>Encore plus de contenu passionnant</h2>
        <p>
          Curabitur semper venenatis lectus viverra ex dictumst nulla maximus.
          Primis iaculis elementum conubia feugiat venenatis dolor augue ac
          blandit nullam ac
          <a href="#">phasellus turpis</a> feugiat mollis. Duis lectus porta
          mattis imperdiet vivamus augue litora lectus arcu. Justo torquent
          pharetra volutpat ad blandit bibendum
          <a href="#">accumsan nec elit cras</a> luctus primis ipsum gravida
          class congue.
        </p>
        <p>
          Vehicula etiam elementum finibus enim duis feugiat commodo adipiscing
          tortor <a href="#">tempor elit</a>. Et mollis consectetur habitant
          turpis tortor consectetur adipiscing vulputate dolor lectus iaculis
          convallis adipiscing. Nam hendrerit
          <a href="#">dignissim condimentum ullamcorper diam</a> morbi eget
          consectetur odio in sagittis.
        </p>
      </section>
      <section id="resume" class="surbrillance">
        <h2>Résumé</h2>
        <p>
          Et arcu tortor lorem ac primis ac suspendisse lectus nulla. Habitant
          fermentum <a href="#">leo facilisis lobortis</a> risus lobortis
          maximus gravida. Euismod fames maecenas imperdiet senectus
          <a href="#">nec nisi amet pellentesque felis</a> vitae vestibulum
          integer nec tellus. Eros posuere lacinia et tellus quis fames mattis
          quisque mauris placerat rhoncus pretium sed consectetur
          <a href="#">convallis</a>.
        </p>
      </section>
    </main>
    <footer class="surbrillance">
      <p>©️ 2025 Personne</p>
    </footer>
  </body>
</html>
```

```css live-sample___blog-start
/* Type et texte de base */

body {
  font: 1.2em / 1.5 system-ui;
  width: clamp(480px, 70%, 1000px);
  margin: 0 auto;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

a {
  color: red;
}

a:hover {
  text-decoration: none;
}

/* Menu de navigation */

ul {
  display: flex;
  padding: 0;
  list-style-type: none;
  justify-content: space-between;
  gap: 10px;
}

li {
  flex: 1;
}

a {
  text-decoration: none;
  color: black;
  background-color: yellowgreen;
  text-align: center;
  padding: 10px;
}

a:hover {
  background-color: goldenrod;
}

/* Intro et résumé */

.surbrillance {
  margin-top: 0;
  background-color: darkslategray;
  color: cornsilk;
}

.surbrillance a {
  color: purple;
}

/* Pied de page */

footer {
  margin-top: 20px;
  background-color: goldenrod;
  text-shadow: 1px 1px 1px black;
}
```

{{EmbedLiveSample("blog-start", "100%", 500)}}

## Cahier des charges

L'exemple de blog fourni n'est pas terminé et le code actuel présente quelques problèmes. Suivez les étapes ci-dessous pour mener à bien ce projet.

1. Nous voulons que chaque élément de cette page utilise le modèle de boîte alternatif. Ajoutez une règle à la feuille de style pour cela.

2. Il y a un problème avec les règles pour le menu de navigation — les styles sont principalement corrects, mais ils affectent les autres listes non ordonnées et les liens de contenu, ce qui les rend mauvais&nbsp;! Pouvez-vous ajuster les sélecteurs de ces règles afin qu'ils ne ciblent que le menu de navigation&nbsp;?

3. En fait, il y a un autre problème avec le menu de navigation — les éléments `<a>` ne s'étendent pas sur toute la largeur de leurs éléments parents `<li>` comme prévu. Pouvez-vous ajuster la façon dont ils s'affichent pour qu'ils s'étendent sur toute la largeur&nbsp;?

4. Pour les liens du menu de navigation et les liens de contenu réguliers, nous définissons un style différent au survol afin que les utilisateur·ice·s de la souris puissent voir quel lien elles·ils survolent. Cela présente un problème d'accessibilité pour les utilisateur·ice·s de clavier, qui ne peuvent pas voir ces styles. Pouvez-vous modifier les sélecteurs dans les règles pertinentes afin que ces styles soient également appliqués lorsqu'un·e utilisateur·ice de clavier navigue vers les liens avec la touche Tab&nbsp;?

5. Nous voulons que l'introduction, le résumé et le pied de page aient `20px` de remplissage de tous les côtés. Faites-le en ajoutant une seule déclaration quelque part dans la feuille de style.

6. Ajoutez une règle qui sélectionne la première ligne de chaque paragraphe qui apparaît juste après un titre de niveau deux, et la met en gras.

7. Suite à la question précédente, pouvez-vous trouver un moyen de mettre en gras la première ligne de chaque paragraphe suivant un titre de niveau deux, mais uniquement lorsque l'élément parent n'est pas l'introduction, le résumé ou le pied de page&nbsp;? Vous pouvez le faire de plusieurs façons, certaines plus concises que d'autres.

8. Plus bas, vous allez voir que nous utilisons `.surbrillance a` pour sélectionner les éléments `<a>` à l'intérieur de l'introduction et du résumé, et les colorer en `purple` dans la règle associée. Mais cela ne va pas — le contraste des couleurs est terrible. En supposant que vous n'êtes pas autorisé à modifier ou supprimer cette règle, pouvez-vous ajouter une autre règle au-dessus dans l'ordre source qui colore les éléments `<a>` en `yellow`&nbsp;? Étant au-dessus dans l'ordre source, elle doit avoir une spécificité plus élevée.

9. Vous allez voir que nous essayons de sélectionner le `<footer>` en bas de la feuille de style et de lui donner une ombre de texte, une marge pour l'éloigner du résumé, et une couleur de fond différente pour le faire ressortir. Cependant, il n'obtient pas les styles de marge et de couleur de fond souhaités parce que la règle `.surbrillance` a une spécificité plus élevée, donc ses déclarations l'emportent. Pouvez-vous modifier le sélecteur pour vous assurer que ces styles sont appliqués&nbsp;?

## Conseils et astuces

- Utilisez le [validateur CSS du W3C <sup>(angl.)</sup>](https://jigsaw.w3.org/css-validator/) pour détecter les erreurs involontaires dans votre CSS — des erreurs que vous avez pu manquer — afin de pouvoir les corriger.
- Vous n'avez pas besoin de modifier le HTML de quelque manière que ce soit.

## Exemple

Le projet terminé doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("blog-finish", "100%", 500)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Le CSS final ressemble à ceci&nbsp;:

```css live-sample___blog-finish
/* Type et texte de base */

/* Solution : Appliquer le modèle de boîte alternatif à tous les éléments */
* {
  box-sizing: border-box;
}

body {
  font: 1.2em / 1.5 system-ui;
  width: clamp(480px, 70%, 1000px);
  margin: 0 auto;
}

h1 {
  font-size: 2em;
}

h2 {
  font-size: 1.5em;
}

a {
  color: red;
}

/* Solution : Mettre à jour les styles :hover pour qu'ils s'appliquent également sur :focus
afin que les utilisateur·ice·s de clavier puissent voir les styles mis à jour lorsqu'ils
naviguent vers les liens avec la touche Tab */
a:hover,
a:focus {
  text-decoration: none;
}

/* Solution : Mettre en gras la première ligne de chaque paragraphe qui apparaît
juste après un titre de niveau deux, mais uniquement lorsque l'élément parent
n'est pas l'introduction, le résumé ou le pied de page
(utilisez :not(.surbrillance) pour définir cette deuxième partie) */
section:not(.surbrillance) h2 + p::first-line {
  font-weight: bold;
}

/*

Alternative à la solution ci-dessus : mettre en gras toutes les instances d'abord,
puis les supprimer de celles à l'intérieur d'un élément avec la classe surbrillance
par la suite

section h2 + p::first-line {
  font-weight: bold;
}

.surbrillance h2 + p::first-line {
  font-weight: normal;
}

*/

/* Menu de navigation */

/* Solution : Ajuster les sélecteurs de règles de navigation pour ne cibler que
le menu <nav> */

nav ul {
  display: flex;
  padding: 0;
  list-style-type: none;
  justify-content: space-between;
  gap: 10px;
}

nav li {
  flex: 1;
}

nav a {
  text-decoration: none;
  color: black;
  background-color: yellowgreen;
  /* Solution : Définir les éléments <a> du menu <nav> sur display: block afin qu'ils s'étendent
  sur toute la largeur de leurs éléments parents <li> */
  display: block;
  text-align: center;
  padding: 10px;
}

/* Solution : Mettre à jour les styles :hover pour qu'ils s'appliquent également sur :focus
afin que les utilisateur·ice·s de clavier puissent voir les styles mis à jour lorsqu'ils
naviguent vers les liens avec la touche Tab */
nav a:hover,
nav a:focus {
  background-color: goldenrod;
}

/* Intro et résumé */

.surbrillance {
  margin-top: 0;
  background-color: darkslategray;
  color: cornsilk;
  /* Solution : Définir 20px de remplissage sur tous les côtés de l'introduction, du résumé et du pied de page. Ils ont tous la classe surbrillance */
  padding: 20px;
}

/* Solution : Ajouter une règle de spécificité plus élevée au-dessus de ".surbrillance a"
pour remplacer la couleur définie (les sélecteurs d'ID ont une spécificité plus élevée que les sélecteurs de classe) */
#introduction a,
#resume a {
  color: yellow;
}

.surbrillance a {
  color: purple;
}

/* Pied de page */

/* Solution : Augmenter la spécificité de la règle du pied de page en ajoutant ".surbrillance"
afin que ses styles margin-top et background-color soient appliqués */
footer.surbrillance {
  margin-top: 20px;
  background-color: goldenrod;
  text-shadow: 1px 1px 1px black;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade", "Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics")}}
