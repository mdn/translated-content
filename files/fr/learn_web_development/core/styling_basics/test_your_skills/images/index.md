---
title: "Testez vos compétences : Images et éléments de formulaire"
short-title: "Test : Images et formulaires"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Images
l10n:
  sourceCommit: a623d4459e2aa00d17dc0fd6b6bc44f56c589950
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}

L'objectif de ce test de compétences est d'évaluer si vous comprenez comment les éléments spéciaux comme [les images, les médias et les éléments de formulaire sont traités en CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Images_media_forms).

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Images et formulaires n°1

Dans cette tâche, vous avez une image qui déborde de la boîte. Nous voulons que vous réduisiez l'image afin qu'elle s'adapte à l'intérieur de la boîte sans espace blanc supplémentaire&nbsp;; peu importe si une partie de l'image est rognée. Mettez à jour le CSS pour y parvenir.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("images-forms1-start", "", 260)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___images-forms1-start live-sample___images-forms1-finish
<div class="boite">
  <img
    alt="Ballons à air chaud volant dans un ciel clair, et une foule de personnes au premier plan"
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
</div>
```

```css live-sample___images-forms1-start live-sample___images-forms1-finish
.boite {
  border: 5px solid black;
  width: 400px;
  height: 200px;
}

img {
  /* Ajoutez les styles ici */
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("images-forms1-finish", "", 260)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Il est acceptable que certaines parties de l'image soient rognées.
L'utilisation de `object-fit: cover` est le meilleur choix, vous devez également définir la largeur et la hauteur à `100%`&nbsp;:

```css live-sample___images-forms1-finish
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
```

</details>

## Images et formulaires n°2

Dans cette tâche, vous avez un formulaire de base.

Pour compléter la tâche&nbsp;:

1. Utilisez des sélecteurs d'attributs pour cibler le champ de recherche et le bouton à l'intérieur de `.mon-formulaire`.
2. Faites en sorte que le champ de formulaire et le bouton utilisent la même taille de texte que le reste du formulaire.
3. Donnez au champ de formulaire et au bouton un padding de `10px`.
4. Donnez au bouton un arrière-plan de `rebeccapurple`, un premier plan blanc, pas de bordure et des coins arrondis de 5px.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("images-forms2-start", "", 80)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___images-forms2-start live-sample___images-forms2-finish
<form action="" class="mon-formulaire" method="post">
  <div>
    <label for="fldSearch">Mots-clés</label>
    <input id="fldSearch" name="keywords" type="search" />
    <input name="btnSubmit" type="submit" value="Rechercher" />
  </div>
</form>
```

```css live-sample___images-forms2-start live-sample___images-forms2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}
.mon-formulaire {
  border: 2px solid black;
  padding: 5px;
}
```

Le style mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("images-forms2-finish", "", 80)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Voici un exemple de solution pour cette tâche&nbsp;:

```css live-sample___images-forms2-finish
.mon-formulaire {
  border: 2px solid black;
  padding: 5px;
}

.mon-formulaire input[type="search"] {
  padding: 10px;
  font-size: inherit;
}

.mon-formulaire input[type="submit"] {
  padding: 10px;
  font-size: inherit;
  background-color: rebeccapurple;
  color: white;
  border: 0;
  border-radius: 5px;
}
```

</details>

## Images et formulaires n°3

La solution pour cette évaluation est assez libre, et vous avez beaucoup de flexibilité sur ce que vous pouvez faire ici. Nous ne fournissons donc pas de rendu d'exemple.

Votre CSS doit inclure les éléments suivants&nbsp;:

1. Une légère «&nbsp;réinitialisation&nbsp;» pour rendre les polices, les marges, les espacements et les tailles plus cohérents dès le départ, comme décrit dans [Normaliser le comportement des formulaires](/fr/docs/Learn_web_development/Core/Styling_basics/Images_media_forms#normaliser_le_comportement_des_formulaires).
2. Un style agréable et cohérent pour les champs de saisie et le bouton.
3. Une technique de mise en page pour aligner proprement les champs de saisie et les étiquettes.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("forms-2", "100%", 250)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html hidden live-sample___forms-2
<form>
  <h2>Modifiez vos préférences</h2>
  <ul>
    <li>
      <label for="courriel">Courriel&nbsp;:</label>
      <input type="email" id="courriel" name="courriel" />
    </li>
    <li>
      <label for="site-web">Site web&nbsp;:</label>
      <input type="url" id="site-web" name="site-web" />
    </li>
    <li>
      <label for="telephone">Numéro de téléphone&nbsp;:</label>
      <input type="tel" id="telephone" name="telephone" />
    </li>
    <li>
      <label for="nourriture">Nourriture préférée&nbsp;:</label>
      <select name="nourriture" id="nourriture">
        <option>Salade</option>
        <option>Curry</option>
        <option>Pizza</option>
        <option>Fajitas</option>
      </select>
    </li>
    <li>
      <button>Mettre à jour les préférences</button>
    </li>
  </ul>
</form>
```

```css live-sample___forms-2
* {
  box-sizing: border-box;
}

body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0;
  width: 500px;
}

/* Ne modifiez pas le code ci-dessus ! */

/* Ajoutez votre code ici */
```

Nous n'avons pas fourni de contenu fini pour cette tâche, car de nombreuses solutions valides sont possibles.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre CSS final peut ressembler à ceci&nbsp;:

```css
/* … */
/* Ne modifiez pas le code ci-dessus ! */

button,
input,
select {
  font-family: inherit;
  font-size: 100%;
  padding: 0;
  margin: 0;
}

li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

li:last-of-type {
  margin-top: 30px;
}

label {
  flex: 0 40%;
  text-align: right;
  padding-right: 10px;
}

input,
select {
  flex: auto;
  height: 2em;
}

input,
select,
button {
  display: block;
  padding: 5px 10px;
  border: 1px solid #cccccc;
  border-radius: 3px;
}

select {
  padding: 5px;
}

button {
  margin: 0 auto;
  padding: 5px 20px;
  line-height: 1.5;
  background: #eeeeee;
}

button:hover,
button:focus {
  background: #dddddd;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics/Tables", "Learn_web_development/Core/Styling_basics")}}
