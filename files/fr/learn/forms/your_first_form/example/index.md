---
title: Exemple
slug: Learn/Forms/Your_first_form/Example
translation_of: Learn/Forms/Your_first_form/Example
original_slug: Web/Guide/HTML/Formulaires/Mon_premier_formulaire_HTML/Exemple
---
Ceci est l'exemple pour l'article [Mon premier formulaire HTML](/fr/docs/HTML/Formulaires/Mon_premier_formulaire_HTML "/en-US/docs/HTML/Forms/My_first_HTML_form").

## Un formulaire simple

### Contenu HTML

```html
<form action="http://www.cs.tut.fi/cgi-bin/run/~jkorpela/echo.cgi" method="post">
  <div>
    <label for="nom">Nom :</label>
    <input type="text" id="nom" name="user_name">
  </div>

  <div>
    <label for="courriel">Courriel :</label>
    <input type="email" id="courriel" name="user_email">
  </div>

  <div>
    <label for="message">Message :</label>
    <textarea id="message" name="user_message"></textarea>
  </div>

  <div class="button">
    <button type="submit">Envoyer le message</button>
  </div>
</form>
```

### Contenu CSS

```css
form {
  /* Pour le centrer dans la page */
  margin: 0 auto;
  width: 400px;

  /* Pour voir les limites du formulaire */
  padding: 1em;
  border: 1px solid #CCC;
  border-radius: 1em;
}

div + div {
  margin-top: 1em;
}

label {
  /* Afin de s'assurer que toutes les étiquettes aient la même dimension et soient alignées correctement */
  display: inline-block;
  width: 90px;
  text-align: right;
}

input, textarea {
  /* Afin de s'assurer que tous les champs textuels utilisent la même police
     Par défaut, textarea utilise une police à espacement constant */
  font: 1em sans-serif;

  /* Pour donner la même dimension à tous les champs textuels */
  width: 300px;

  -moz-box-sizing: border-box;
       box-sizing: border-box;

  /* Pour harmoniser l'apparence des bordures des champs textuels */
  border: 1px solid #999;
}

input:focus, textarea:focus {
  /* Afin de réhausser les éléments actifs */
  border-color: #000;
}

textarea {
  /* Pour aligner correctement les champs multilignes et leurs étiquettes */
  vertical-align: top;

  /* Pour donner assez d'espace pour entrer du texte */
  height: 5em;

  /* Pour permettre aux utilisateurs de redimensionner un champ textuel horizontalement
     Cela ne marche pas avec tous les navigateurs  */
  resize: vertical;
}

.button {
  /* Pour positionner les boutons de la même manière que les champs textuels */
  padding-left: 90px; /* même dimension que les étiquettes */
}

button {
  /* Cette marge représente approximativement le même espace
     que celui entre les étiquettes et les champs textuels */
  margin-left: .5em;
}
```

### Résultat

{{ EmbedLiveSample('Un_formulaire_simple', '100%', '280') }}
