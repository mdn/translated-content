---
title: "Défi : Mettre en forme une application de recherche de schémas de couleurs pour la maison"
short-title: "Défi : Mettre en forme la recherche de schémas de couleurs"
slug: Learn_web_development/Core/Styling_basics/Home_color_scheme_search
l10n:
  sourceCommit: 58e3af416f96bd922b27d6a805e9a699cac389b9
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}

Le défi final de notre module [bases du style](/fr/docs/Learn_web_development/Core/Styling_basics) présente une maquette de l'interface utilisateur d'une «&nbsp;application de recherche de couleurs pour la maison&nbsp;», l'idée étant de permettre aux utilisateur·ice·s de saisir une couleur et d'obtenir une gamme de variations ainsi que des idées de schémas de couleurs. Votre tâche consiste à mettre en forme le formulaire, le tableau et les boutons fournis, et à vous assurer que les images s'affichent correctement.

> [!NOTE]
> Les images teintées utilisées dans ce défi ont été adaptées à partir de l'original disponible sur Flickr&nbsp;: [Pièce à vivre chic](https://flickr.com/photos/145464578@N08/28362250492/), publié par [Houseology Interiors](https://flickr.com/photos/145464578@N08/) sous licence [CC BY-NC 2.0](https://creativecommons.org/licenses/by-nc/2.0/deed.en).

## Point de départ

Pour commencer, cliquez sur le bouton **Exécuter** dans l'un des panneaux de code ci-dessous pour ouvrir l'exemple fourni dans le MDN Playground. Suivez ensuite les instructions de la section [Cahier des charges](#cachier_des_charges) pour mettre en forme la page de manière appropriée.

```html live-sample___app-start live-sample___app-finish
<section>
  <h1>Recherche de couleurs pour la maison</h1>
  <form>
    <div>
      <label for="couleur">Couleur à rechercher&nbsp;:</label>
      <input type="text" id="couleur" name="couleur" value="rose" />
    </div>
    <div>
      <label for="resultats-par-page">Résultats par page&nbsp;:</label>
      <input
        type="text"
        id="resultats-par-page"
        name="resultats-par-page"
        value="4" />
    </div>
    <div>
      <button type="button">Envoyer</button>
    </div>
  </form>
</section>
<hr />
<section>
  <h2>Résultats de la recherche</h2>
  <table>
    <caption>
      Exemples de couleurs et de schémas de couleurs
    </caption>
    <thead>
      <tr>
        <th scope="col">Couleur</th>
        <th scope="col">Couleur brute</th>
        <th scope="col">Étiquettes</th>
        <th scope="col">Exemple de schéma de couleurs</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Rose</td>
        <td><code>rgb(255 192 203)</code></td>
        <td>rose, pâle, clair</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-pink.png"
            alt="Image d'un salon dans un schéma de couleurs rose" />
        </td>
      </tr>
      <tr>
        <td>Rose Baker-Miller</td>
        <td><code>rgb(255 145 175)</code></td>
        <td>rose, pâle, vif</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-baker-miller-pink.png"
            alt="Image d'un salon dans un schéma de couleurs Rose Baker-Miller" />
        </td>
      </tr>
      <tr>
        <td>Rose vif</td>
        <td><code>rgb(255 105 180)</code></td>
        <td>rose, vif, éclatant</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-hotpink.png"
            alt="Image d'un salon dans un schéma de couleurs Rose vif" />
        </td>
      </tr>
      <tr>
        <td>Fuchsia</td>
        <td><code>rgb(255 0 255)</code></td>
        <td>fuchsia, moyen, vif</td>
        <td>
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/home-color-schemes/living-room-fuchsia.png"
            alt="Image d'un salon dans un schéma de couleurs fuchsia" />
        </td>
      </tr>
    </tbody>
  </table>
  <div class="controles">
    <button disabled>Précédent</button>
    <p>Affichage de la page 1 sur 20</p>
    <button>Suivant</button>
  </div>
</section>
```

```css live-sample___app-start
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  margin: 0 10px;
}

hr {
  margin: 3em 0;
}

h2 {
  margin-top: 0;
}

/* Mise en page des contrôles Précédent/Suivant */

.controles {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
}

/* Style des formulaires et des boutons */

form div {
  display: flex;
  align-items: center;
  gap: 2em;
  margin-bottom: 1em;
}

label {
  text-align: right;
  flex: 1;
}

input {
  flex: 3;
}

/* Style des tableaux */

table img {
  width: 100%;
  height: 150px;
}
```

{{EmbedLiveSample("app-start", "100%", 650)}}

## Cahier des charges

Suivez les étapes ci-dessous pour compléter le projet, en dimensionnant correctement le panneau de contenu et en ajoutant les décorations requises.

### Ajouter une réinitialisation du formulaire

Tout d'abord, ajoutez quelques styles de «&nbsp;réinitialisation&nbsp;» aux éléments `<button>` et `<input>` pour leur donner un état de départ cohérent dans tous les navigateurs.

Spécifiquement&nbsp;:

1. Faites en sorte qu'ils héritent de la famille de polices définie pour le reste de la page.
2. Donnez-leur une taille de police de `100%`.
3. Supprimez tous leurs remplissages et marges.

### Style des champs de formulaire

Donnez aux éléments `<input>`&nbsp;:

1. Une bordure solide de `2px` avec la couleur `#999999`.
2. `10px` de remplissage.
3. Des coins arrondis de `5px`.

### Style des boutons

Donnez aux éléments `<button>`&nbsp;:

1. Pas de bordure.
2. Une couleur de fond `black` et une couleur de texte `white`.
3. Des coins arrondis de `5px`.
4. Un remplissage vertical de `10px` et un remplissage horizontal de `2em`.
5. Une couleur de fond de `#666666` lorsqu'ils sont survolés ou sélectionnés.
6. Une couleur de fond de `#aaaaaa` lorsqu'ils sont désactivés.

### Style des tableaux

Vous devez maintenant ajouter quelques styles de bonnes pratiques au tableau, comme appris précédemment dans le module, plus quelques extras.

Spécifiquement&nbsp;:

1. Donnez au tableau une disposition fixe, une largeur de `100%` et des bordures fusionnées.
2. Faites en sorte que les bordures supérieure et inférieure du tableau soient épaisses de `1px`, solides et de couleur `#999999`.
3. Donnez aux cellules d'en-tête et aux cellules normales un remplissage de `0.6em` et alignez leur contenu verticalement en haut des cellules.
4. Donnez aux cellules d'en-tête une bordure inférieure de `1px`, solide et de couleur `#999999`.
5. Donnez à toutes les colonnes du tableau une largeur de `20%`, sauf pour la quatrième colonne, qui doit avoir une largeur de `40%`.
6. À l'intérieur du corps du tableau, il y a quatre lignes. La deuxième cellule de chacune de ces lignes contient du texte pour une couleur `rgb()`. Donnez à chacune de ces cellules une couleur de fond correspondant à son texte.
7. Créez des bandes zébrées&nbsp;: donnez à chaque ligne impaire une couleur de fond de `#eeeeee`, uniquement à l'intérieur du corps du tableau.
8. Donnez à la légende un remplissage de `1em`, un style de police italique et un espacement des lettres de `1px`.

### Corriger l'affichage des images

À ce stade, il y a un problème avec les images dans le tableau&nbsp;: nous avons défini chaque image à `100%` de la largeur de son conteneur de cellule de tableau, et une hauteur spécifique de `150px`, car nous ne voulions pas que les lignes du tableau deviennent trop hautes. Cependant, cela a déformé le rapport d'aspect des images, les rendant un peu écrasées.

Nous voulons que vous mettiez en forme les images de manière à ce que&nbsp;:

1. Elles soient affichées à leur rapport d'aspect intrinsèque, mais avec une partie de l'image coupée afin qu'elles s'adaptent toujours à la taille des éléments `<img>`.
2. Le bas de l'image soit affiché, mais le haut de l'image soit coupé.

## Conseils et astuces

- Vous n'avez pas besoin de modifier le HTML de quelque manière que ce soit.

## Exemple

Le projet terminé doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("app-finish", "100%", 700)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Une solution possible peut être&nbsp;:

```css live-sample___app-finish
* {
  box-sizing: border-box;
}

html {
  font-family: "Helvetica", "Arial", sans-serif;
}

body {
  margin: 0 10px;
}

hr {
  margin: 3em 0;
}

h2 {
  margin-top: 0;
}

/* Mise en page des contrôles précédent/suivant */

.controles {
  display: flex;
  padding: 10px 0;
  justify-content: space-between;
  align-items: center;
}

/* Style des formulaires et des boutons */

form div {
  display: flex;
  align-items: center;
  gap: 2em;
  margin-bottom: 1em;
}

label {
  text-align: right;
  flex: 1;
}

/* Solution : Ajouter une réinitialisation du formulaire */

button,
input {
  font-family: inherit;
  font-size: 100%;
  padding: 0;
  margin: 0;
}

input {
  flex: 3;
  /* Solution : Style des champs de formulaire */
  border: 2px solid #999999;
  padding: 10px;
  border-radius: 5px;
}

/* Solution : Style des boutons */

button {
  background-color: black;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 10px 2em;
}

button:hover,
button:focus {
  background-color: #666666;
}

button:disabled {
  background-color: #aaaaaa;
}

/* Style des tableaux */

table img {
  width: 100%;
  height: 150px;
  /* Solution : Correction de l'affichage des images */
  object-fit: cover;
  object-position: bottom;
}

/* Solution : Style du tableau */

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border-top: 1px solid #999999;
  border-bottom: 1px solid #999999;
}

th,
td {
  vertical-align: top;
  padding: 0.6em;
}

th {
  border-bottom: 1px solid #999999;
}

/* Il n'est pas nécessaire de définir la largeur des autres colonnes
   explicitement : La 4ème colonne a une largeur de 40% définie, et
   les colonnes restantes reçoivent les 60% restants répartis également
   entre elles (20% chacune) */
tr :nth-of-type(4) {
  width: 40%;
}

/* Solution : Fournir des couleurs de fond pour les cellules « Couleur brute » */

tr:nth-of-type(1) td:nth-of-type(2) {
  background-color: pink;
}

tr:nth-of-type(2) td:nth-of-type(2) {
  background-color: rgb(255 145 175);
}

tr:nth-of-type(3) td:nth-of-type(2) {
  background-color: hotpink;
}

tr:nth-of-type(4) td:nth-of-type(2) {
  background-color: magenta;
}

tbody tr:nth-child(odd) {
  background-color: #eeeeee;
}

caption {
  padding: 1em;
  font-style: italic;
  letter-spacing: 1px;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics/Debugging_CSS", "Learn_web_development/Core/Styling_basics")}}
