---
title: "Testez vos compétences : Formulaires et boutons"
short-title: "Test : Formulaires et boutons"
slug: Learn_web_development/Core/Structuring_content/Test_your_skills/Forms_and_buttons
l10n:
  sourceCommit: 3cd2de993df83bd5e738abe0a28bd5702af78c11
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Structuring_content")}}

L'objectif de ce test de compétences est de vous aider à évaluer si vous comprenez comment fonctionnent les [formulaires et boutons HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_forms).

> [!NOTE]
> Pour obtenir de l'aide, consultez notre guide d'utilisation [Testez vos compétences](/fr/docs/Learn_web_development#testez_vos_compétences). Vous pouvez également nous contacter par l'un de nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels).

## Formulaires et boutons 1

Cette tâche commence doucement en vous demandant de créer deux éléments `<input>`, pour l'identifiant et le mot de passe d'un·e utilisateur·ice, ainsi qu'un bouton d'envoi.

Pour compléter la tâche&nbsp;:

1. Créez des champs de saisie appropriés pour l'identifiant et le mot de passe.
2. Vous devez également les associer sémantiquement à leurs étiquettes de texte.
3. Créez un bouton d'envoi à l'intérieur de l'élément de liste restant, avec le texte du bouton «&nbsp;Se connecter&nbsp;».

```css hidden live-sample___forms-buttons-1 live-sample___forms-buttons-2 live-sample___forms-buttons-3 live-sample___forms-buttons-4 live-sample___forms-buttons-5 live-sample___forms-buttons-6 live-sample___forms-buttons-1-finished live-sample___forms-buttons-2-finished live-sample___forms-buttons-3-finished live-sample___forms-buttons-4-finished live-sample___forms-buttons-5-finished live-sample___forms-buttons-6-finished
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
}

* {
  box-sizing: border-box;
}
```

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("forms-buttons-1", "100%", 150)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___forms-buttons-1
<form>
  <ul>
    <li>Identifiant utilisateur</li>
    <li>Mot de passe</li>
    <li></li>
  </ul>
</form>
```

Le formulaire mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("forms-buttons-1-finished", "100%", 150)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre code HTML final doit ressembler à ceci&nbsp;:

```html live-sample___forms-buttons-1-finished
<form>
  <ul>
    <li>
      <label for="uid">Identifiant utilisateur</label>
      <input type="text" id="uid" name="uid" />
    </li>
    <li>
      <label for="pwd">Mot de passe</label>
      <input type="password" id="pwd" name="pwd" />
    </li>
    <li>
      <button>Se connecter</button>
    </li>
  </ul>
</form>
```

</details>

## Formulaires et boutons 2

La tâche suivante vous demande de créer des ensembles fonctionnels de cases à cocher et de boutons radio, à partir des étiquettes de texte fournies.

Pour compléter la tâche&nbsp;:

1. Transformez le contenu du premier `<fieldset>` en un ensemble de boutons radio — vous ne devez pouvoir sélectionner qu'un seul personnage de poney à la fois.
2. Faites en sorte que le premier bouton radio soit sélectionné au chargement de la page.
3. Transformez le contenu du deuxième `<fieldset>` en un ensemble de cases à cocher.
4. Ajoutez quelques choix de hot-dog supplémentaires de votre cru.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("forms-buttons-2", "100%", 350)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___forms-buttons-2
<form>
  <fieldset>
    <legend>Quel est votre poney préféré ?</legend>
    <ul>
      <li>
        <label for="licorne">La petite licorne</label>
      </li>
      <li>
        <label for="soleil">Rayon de soleil</label>
      </li>
      <li>
        <label for="crepuscule">Étoile du crépuscule</label>
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>Préférences de hot-dog</legend>
    <ul>
      <li>
        <label for="vegan">Végan</label>
      </li>
      <li>
        <label for="onions">Oignons</label>
      </li>
    </ul>
  </fieldset>
  <button>Envoyer</button>
</form>
```

Le formulaire mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("forms-buttons-2-finished", "100%", 360)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre code HTML final doit ressembler à ceci&nbsp;:

```html live-sample___forms-buttons-2-finished
<form>
  <fieldset>
    <legend>Quel est votre poney préféré ?</legend>
    <ul>
      <li>
        <label for="licorne">La petite licorne</label>
        <input type="radio" id="licorne" name="pony" value="licorne" checked />
      </li>
      <li>
        <label for="soleil">Rayon de soleil</label>
        <input type="radio" id="soleil" name="pony" value="soleil" />
      </li>
      <li>
        <label for="crepuscule">Étoile du crépuscule</label>
        <input type="radio" id="crepuscule" name="pony" value="crepuscule" />
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>Préférences de hot-dog</legend>
    <ul>
      <li>
        <label for="vegan">Végan</label>
        <input type="checkbox" id="vegan" name="hotdog_vegan" />
      </li>
      <li>
        <label for="ognions">Oignons</label>
        <input type="checkbox" id="ognions" name="hotdog_ognions" />
      </li>
      <li>
        <label for="moutarde">Moutarde</label>
        <input type="checkbox" id="moutarde" name="hotdog_moutarde" />
      </li>

      <li>
        <label for="ketchup">Ketchup</label>
        <input type="checkbox" id="ketchup" name="hotdog_ketchup" />
      </li>
    </ul>
  </fieldset>
  <button>Envoyer</button>
</form>
```

</details>

## Formulaires et boutons 3

Dans cette tâche, vous allez explorer des types d'entrée plus spécifiques. Nous voulons que vous créiez des entrées appropriées pour qu'un·e utilisateur·ice puisse mettre à jour ses informations&nbsp;:

1. Courriel
2. Site web
3. Numéro de téléphone
4. Couleur préférée

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("forms-buttons-3", "100%", 250)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___forms-buttons-3
<form>
  <h2>Modifier vos préférences</h2>
  <ul>
    <li>
      <label for="courriel">Courriel</label>
    </li>
    <li>
      <label for="site-web">Site web</label>
    </li>
    <li>
      <label for="telephone">Numéro de téléphone</label>
    </li>
    <li>
      <label for="couleur-fav">Couleur préférée</label>
    </li>
    <li>
      <button>Mettre à jour les préférences</button>
    </li>
  </ul>
</form>
```

Le formulaire mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("forms-buttons-3-finished", "100%", 250)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre code HTML final doit ressembler à ceci&nbsp;:

```html live-sample___forms-buttons-3-finished
<form>
  <h2>Modifier vos préférences</h2>
  <ul>
    <li>
      <label for="courriel">Courriel</label>
      <input type="email" id="courriel" name="courriel" />
    </li>
    <li>
      <label for="site-web">Site web</label>
      <input type="url" id="site-web" name="site-web" />
    </li>
    <li>
      <label for="telephone">Numéro de téléphone</label>
      <input type="tel" id="telephone" name="telephone" />
    </li>
    <li>
      <label for="couleur-fav">Couleur préférée</label>
      <input type="color" id="couleur-fav" name="couleur-fav" />
    </li>
    <li>
      <button>Mettre à jour les préférences</button>
    </li>
  </ul>
</form>
```

</details>

## Formulaires et boutons 4

Maintenant, il est temps d'essayer de mettre en place un menu déroulant, pour permettre à un·e utilisateur·ice de choisir son plat préféré parmi les options fournies.

Pour compléter la tâche&nbsp;:

1. Créez une structure de boîte de sélection de base.
2. Associez-la sémantiquement avec l'étiquette «&nbsp;nourriture&nbsp;» fournie.
3. À l'intérieur de la liste, divisez les choix en 2 sous-groupes — "plats principaux" et "snacks".

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("forms-buttons-4", "100%", 120)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___forms-buttons-4
<form>
  <ul>
    <li>
      <label for="nourriture">Choisissez votre nourriture préférée :</label>

      Salade Curry Pizza Fajitas Biscuits Chips Fruit Bâtonnets de pain
    </li>
    <li>
      <button>Envoyer le choix</button>
    </li>
  </ul>
</form>
```

Le formulaire mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("forms-buttons-4-finished", "100%", 120)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre code HTML final doit ressembler à ceci&nbsp;:

```html live-sample___forms-buttons-4-finished
<form>
  <ul>
    <li>
      <label for="nourriture">Choisissez votre nourriture préférée :</label>
      <select name="nourriture" id="nourriture">
        <optgroup label="plats principaux">
          <option>Salade</option>
          <option>Curry</option>
          <option>Pizza</option>
          <option>Fajitas</option>
        </optgroup>
        <optgroup label="snacks">
          <option>Biscuits</option>
          <option>Chips</option>
          <option>Fruit</option>
          <option>Bâtonnets de pain</option>
        </optgroup>
      </select>
    </li>
    <li>
      <button>Envoyer le choix</button>
    </li>
  </ul>
</form>
```

</details>

## Formulaires et boutons 5

Dans cette tâche, nous voulons que vous structuriez les fonctionnalités de formulaire fournies.

Pour compléter la tâche&nbsp;:

1. Séparez les deux premiers champs de formulaire et les deux derniers en deux conteneurs distincts, chacun avec une légende descriptive (utilisez "Détails personnels" pour les deux premiers, et "Informations sur le commentaire" pour les deux derniers).
2. Marquez chaque étiquette de texte avec un élément approprié afin qu'elle soit sémantiquement associée à son champ de formulaire respectif.
3. Ajoutez un ensemble approprié d'éléments structurels autour des paires étiquette/champ pour les séparer.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("forms-buttons-5", "100%", 120)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___forms-buttons-5
<form>
  Nom :
  <input type="text" id="nom" name="nom" />

  Âge :
  <input type="number" id="age" name="age" />

  Commentaire :
  <input type="text" id="commentaire" name="commentaire" />

  Courriel :
  <input type="email" id="courriel" name="courriel" />
</form>
```

Le formulaire mis à jour doit ressembler à ceci&nbsp;:

{{EmbedLiveSample("forms-buttons-5-finished", "100%", 300)}}

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre code HTML final doit ressembler à ceci&nbsp;:

```html live-sample___forms-buttons-5-finished
<form>
  <fieldset>
    <legend>Détails personnels</legend>
    <ul>
      <li>
        <label for="nom">Nom :</label>
        <input type="text" id="nom" name="nom" />
      </li>
      <li>
        <label for="age">Âge :</label>
        <input type="number" id="age" name="age" />
      </li>
    </ul>
  </fieldset>
  <fieldset>
    <legend>Informations sur le commentaire</legend>
    <ul>
      <li>
        <label for="commentaire">Commentaire :</label>
        <input type="text" id="commentaire" name="commentaire" />
      </li>
      <li>
        <label for="courriel">Courriel :</label>
        <input type="email" id="courriel" name="courriel" />
      </li>
    </ul>
  </fieldset>
</form>
```

</details>

## Formulaires et boutons 6

Dans cette tâche, nous vous fournissons un formulaire simple de demande de support, et nous voulons que vous y ajoutiez certaines fonctionnalités de validation. Cette tâche nécessite des connaissances que nous n'enseignons pas dans l'article «&nbsp;Formulaires et boutons en HTML&nbsp;», vous devez donc peut-être faire des recherches ailleurs.

Pour compléter la tâche&nbsp;:

1. Rendez tous les champs de saisie obligatoires avant que le formulaire puisse être envoyé.
2. Changez le type des champs "Adresse e-mail" et "Numéro de téléphone" pour que le navigateur applique une validation plus spécifique adaptée aux données demandées.
3. Donnez au champ «&nbsp;Nom d'utilisateur&nbsp;» une longueur requise comprise entre 5 et 20 caractères, au champ "Numéro de téléphone" une longueur maximale de 15 caractères, et au champ "Commentaire" une longueur maximale de 200 caractères.

Essayez d'envoyer votre formulaire — il doit refuser de s'envoyer tant que les contraintes ci-dessus ne sont pas respectées, et afficher des messages d'erreur appropriés.

Le point de départ de la tâche ressemble à ceci&nbsp;:

{{EmbedLiveSample("forms-buttons-6", "100%", 300)}}

Voici le code sous-jacent pour ce point de départ&nbsp;:

```html live-sample___forms-buttons-6
<form>
  <h2>Entrez votre demande de support</h2>
  <ul>
    <li>
      <label for="uname">Nom d'utilisateur :</label>
      <input type="text" name="uname" id="uname" />
    </li>
    <li>
      <label for="courriel">Adresse e-mail :</label>
      <input type="text" name="courriel" id="courriel" />
    </li>
    <li>
      <label for="telephone">Numéro de téléphone :</label>
      <input type="text" name="telephone" id="telephone" />
    </li>
    <li>
      <label for="commentaire">Commentaire :</label>
      <textarea name="commentaire" id="commentaire"> </textarea>
    </li>
    <li>
      <button>Envoyer le commentaire</button>
    </li>
  </ul>
</form>
```

Nous n'avons pas fourni de contenu final pour cette tâche, car il ressemble au point de départ.

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre code HTML final doit ressembler à ceci&nbsp;:

```html live-sample___forms-buttons-6-finished
<form>
  <h2>Entrez votre demande de support</h2>
  <ul>
    <li>
      <label for="uname">Nom d'utilisateur :</label>
      <input
        type="text"
        name="uname"
        id="uname"
        required
        minlength="5"
        maxlength="20" />
    </li>
    <li>
      <label for="courriel">Adresse e-mail :</label>
      <input type="email" name="courriel" id="courriel" required />
    </li>
    <li>
      <label for="telephone">Numéro de téléphone :</label>
      <input
        type="tel"
        name="telephone"
        id="telephone"
        required
        maxlength="15" />
    </li>
    <li>
      <label for="commentaire">Commentaire :</label>
      <textarea
        name="commentaire"
        id="commentaire"
        required
        maxlength="200"></textarea>
    </li>
    <li>
      <button>Envoyer le commentaire</button>
    </li>
  </ul>
</form>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/HTML_forms", "Learn_web_development/Core/Structuring_content/Forms_challenge", "Learn_web_development/Core/Structuring_content")}}
