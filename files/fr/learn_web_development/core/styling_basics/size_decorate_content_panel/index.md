---
title: "Défi : Dimensionner et décorer un panneau de contenu"
short-title: "Défi : Dimensionner et décorer"
slug: Learn_web_development/Core/Styling_basics/Size_decorate_content_panel
l10n:
  sourceCommit: 50a1895c9c499b1b9207f7af945a0fe45de58cca
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}

Dans ce défi, on vous fournit une structure de page légèrement mise en forme qui rend un panneau de contenu contenant du texte et des images, avec un en-tête en haut et une barre de boutons en bas. Nous voulons que vous suiviez les instructions pour le dimensionner et le décorer, produisant ainsi une mise en page intéressante. En cours de route, nous testons vos connaissances des valeurs et unités CSS, du dimensionnement, du débordement, ainsi que des arrière-plans et des bordures.

## Point de départ

Nous allons vous demander de résoudre ce défi dans votre environnement de développement local&nbsp;; idéalement, vous voulez afficher l'exemple dans une fenêtre de navigateur complète pour vous assurer que vous allez dans la bonne direction.

1. Créez un nouveau dossier sur votre ordinateur appelé `size-decorate-content-panel`.
2. À l'intérieur du dossier, créez un fichier `index.html` et collez-y le contenu suivant&nbsp;:

   ```html-nolint live-sample___content-pane-start live-sample___content-pane-finish
   <!doctype html>
   <html lang="fr">
     <head>
       <meta charset="utf-8" />
       <title>Défi : Panneau de contenu avec barre de boutons</title>
       <link href="style.css" rel="stylesheet" />
     </head>
     <body>
       <section class="panneau">
         <h1>Panneau de contenu</h1>
         <div class="contenu">
           <h2>Contenu passionnant</h2>

           <p>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit,
             sed do eiusmod tempor incididunt ut labore et dolore magna
             aliqua. Proin tortor purus <a href="#">platea sit eu id</a>
             nisi litora libero. Neque vulputate consequat ac amet augue
             blandit maximus aliquet congue. Pharetra vestibulum posuere
             ornare <a href="#">faucibus fusce dictumst</a> orci aenean
             eu facilisis ut volutpat commodo senectus purus himenaeos
             fames primis convallis nisi.
           </p>
           <img
             src="https://mdn.github.io/shared-assets/images/examples/leopard.jpg"
             alt="Gros plan des yeux et du nez d'un grand félin sauvage" />
           <p>
             Phasellus fermentum malesuada phasellus netus dictum aenean
             placerat egestas amet. <a href="#">Ornare taciti semper
             dolor tristique</a> morbi. Sem leo tincidunt aliquet semper
             eu lectus scelerisque quis. Sagittis vivamus mollis nisi
             mollis enim fermentum laoreet.
           </p>

           <h2>Contenu encore plus passionnant</h2>

           <p>
             Curabitur semper venenatis lectus viverra ex dictumst nulla
             maximus. Primis iaculis elementum conubia feugiat venenatis
             dolor augue ac blandit nullam ac <a href="#">phasellus turpis</a>
             feugiat mollis. Duis lectus porta mattis imperdiet vivamus augue
             litora lectus arcu. Justo torquent pharetra volutpat ad blandit
             bibendum <a href="#">accumsan nec elit cras</a> luctus primis
             ipsum gravida class congue.
           </p>
           <img
             src="https://mdn.github.io/shared-assets/images/examples/balloons-landscape.jpg"
             alt="Trois montgolfières colorées flottant dans un ciel bleu presque sans nuages" />
           <p>
             Vehicula etiam elementum finibus enim duis feugiat commodo
             adipiscing tortor <a href="#">tempor elit</a>. Et mollis
             consectetur habitant turpis tortor consectetur adipiscing
             vulputate dolor lectus iaculis convallis adipiscing. Nam
             hendrerit <a href="#">dignissim condimentum ullamcorper diam</a>
             morbi eget consectetur odio in sagittis.
           </p>
         </div>
         <div class="controles">
           <button>Un</button>
           <button>Deux</button>
           <button>Trois</button>
           <button>Quatre</button>
         </div>
       </section>
     </body>
   </html>
   ```

3. À l'intérieur du dossier, créez un fichier `style.css` et collez-y le contenu suivant&nbsp;:

   ```css live-sample___content-pane-start
   /* Type et texte */

   * {
     box-sizing: border-box;
   }

   html {
     height: 100%;
   }

   body {
     height: inherit;
     font: 1.2em / 1.5 system-ui;
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

   a:hover,
   a:focus {
     text-decoration: none;
   }

   /* Mise en forme du panneau */

   .panneau {
     height: 100%;
   }

   h1,
   .controles {
     margin: 0;
     display: flex;
     justify-content: center;
     align-items: center;
   }

   .contenu {
   }

   .controles {
     justify-content: space-around;
     gap: 20px;
     padding: 20px;
   }

   button {
     flex: 1;
   }
   ```

4. Enregistrez vos fichiers et chargez `index.html` dans un navigateur prêt à être testé.

## Cahier des charges

Suivez les étapes ci-dessous pour compléter le projet, en dimensionnant correctement le panneau de contenu et en ajoutant les décorations requises.

### Titres

1. Utilisez le contenu généré pour faire apparaître un emoji représentant un livre (📖) au début du titre de premier niveau. Ajoutez un espacement de `20px` entre l'emoji et le texte du titre.
2. Actuellement, les titres sont dimensionnés en `em`. Nous souhaitons que leur taille soit réactive, changeant en fonction de la largeur de la fenêtre tout en restant zoomable. Pour ce faire, définissez la taille de chaque niveau de titre comme un pourcentage approprié de la largeur de la fenêtre plus une petite valeur en `em`.

### Dimensionner le conteneur

1. Faites en sorte que la largeur de l'élément `<section>` avec la classe `panneau` soit égale à `60%`, mais donnez-lui une largeur maximale de `1000px` et une largeur minimale de `480px`. Voyez si vous pouvez trouver une fonction CSS qui permet de définir cela en une seule déclaration.
2. Centrez l'élément `<section>` avec la classe `panneau` horizontalement sur la page en utilisant des marges `auto`.
3. Définissez la hauteur de `<h1>` et du `<div>` avec la classe `controles` à `100px`. Définissez le `<div>` avec la classe `contenu` à `100%` de la hauteur du `<body>`, moins la hauteur de `<h1>` et du `<div class="controles">`. Cela doit vous donner une interface utilisateur qui s'étend toujours sur la hauteur de la fenêtre, avec un conteneur de contenu flexible et une barre de titre et de boutons de hauteur fixe.
4. Les boutons semblent un peu fins et difficiles à lire. Donnez-leur une hauteur de `100%` de leur conteneur et une taille de police de `1.2em`.
5. Donnez à l'élément `<section>` avec la classe `panneau` et au `<div>` avec la classe `contenu` un padding de `0` en haut et en bas et de `20px` à gauche et à droite.

### Placement des images

1. Les images débordent actuellement du conteneur de contenu. Définissez une largeur maximale de `90%` pour éviter cela.
2. Centrez les images horizontalement en utilisant des marges `auto`.

### Décoration

1. Appliquez un dégradé linéaire à l'élément `<section>` avec la classe `panneau` qui passe en douceur de `#9fb4c7` en haut à `#7f7caf` en bas.
2. Donnez aux images une bordure `1px solid` et au `<div>` avec la classe `contenu` une bordure `2px solid`. Donnez aux bordures une couleur de `#28587b`.
3. Donnez au `<div>` avec la classe `contenu` une couleur de fond de `#eeeeff` et une image de fond de `https://mdn.github.io/shared-assets/images/examples/big-star.png`. L'image de fond ne doit pas se répéter, doit être dimensionnée à `40px` par `40px` et doit être placée à `5px` du haut du conteneur et à `15px` de la droite.
4. Donnez aux boutons une couleur de texte blanche et une couleur de fond de `rgb(40 88 123 / 0.8)`. Au survol ou à la sélection, les boutons doivent changer pour avoir une version entièrement opaque de la même couleur de fond.
5. Définissez un rayon de bordure de `10px` sur le `<div>` avec la classe `contenu` et sur les boutons.

### Débordement

À ce stade, vous devez encore remarquer un problème avec l'interface utilisateur — le contenu contenu dans le `<div>` avec la classe `contenu` déborde de son conteneur, et toute la page défile pour vous permettre d'y accéder. Nous voulons que le `<div>` avec la classe `contenu` défile à la place. Comment pouvez-vous y parvenir&nbsp;?

## Conseils et astuces

- Utilisez le [validateur CSS du W3C <sup>(angl.)</sup>](https://jigsaw.w3.org/css-validator/) pour détecter les erreurs involontaires dans votre CSS — des erreurs que vous avez autrement pu manquer — afin de pouvoir les corriger.
- Vous n'avez pas besoin de modifier le HTML de quelque manière que ce soit.

## Exemple

L'état initial du projet se présente comme suit&nbsp;:

{{EmbedLiveSample("content-pane-start", "100%", 500)}}

Le projet terminé doit ressembler à ceci (nous l'avons rendu à `90%` de largeur, pas `60%`, donc il est plus joli dans le panneau de sortie étroit)&nbsp;:

{{EmbedLiveSample("content-pane-finish", "100%", 500)}}

<details>
<summary>Cliquez ici pour afficher une solution possible</summary>

Le CSS final ressemble à ceci&nbsp;:

```css live-sample___content-pane-finish
/* Type et texte */

* {
  box-sizing: border-box;
}

html {
  height: 100%;
}

body {
  height: inherit;
  font: 1.2em / 1.5 system-ui;
  margin: 0 auto;
}

h1 {
  /* Solution : Taille de titre adaptative, égale à la valeur vw plus la
  valeur em */
  font-size: calc(2vw + 1em);
}

/* Solution : Ajouter un emoji de livre en tant que contenu généré, avec
un espacement de 20px entre l'emoji et le contenu du titre */
h1::before {
  content: "📖";
  margin-right: 20px;
}

h2 {
  /* Solution : Taille de sous-titre adaptative, égale à la valeur vw
  plus la valeur em */
  font-size: calc(1.5vw + 0.75em);
}

a {
  color: red;
}

a:hover,
a:focus {
  text-decoration: none;
}

.panneau {
  height: 100%;
  /* Solution : Définir le pourcentage de largeur du conteneur et la
  largeur minimale et maximale avec une seule déclaration, en utilisant
  la fonction clamp() */
  width: clamp(480px, 60%, 1000px);
  /* Solution : Centrer le conteneur en utilisant des marges automatiques */
  margin: 0 auto;
  /* Solution : Définir le remplissage du conteneur en haut et en bas à 0
  et à gauche et à droite à 20px */
  padding: 0 20px;
  /* Solution : Appliquer un dégradé linéaire de haut en bas */
  background: linear-gradient(to bottom, #9fb4c7, #7f7caf);
}

h1,
.controles {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  /* Solution : Définir la hauteur du h1 et du div controls à 100px
  chacun */
  height: 100px;
}

.contenu {
  /* Solution : Définir la couleur de fond et l'image de fond sur le div
  contenu, et dimensionner l'image */
  background: url("https://mdn.github.io/shared-assets/images/examples/big-star.png")
    no-repeat top 5px right 15px / 40px #eeeeff;
  /* Solution : Définir le remplissage du contenu en haut et en bas à 0
  et à gauche et à droite à 20px */
  padding: 0 20px;
  /* Solution : Définir la hauteur du div contenu à 100% moins la hauteur
  combinée du h1 et du div controls (200px) */
  height: calc(100% - 200px);
  /* Solution : Définir une bordure sur le div contenu */
  border: 2px solid #28587b;
  /* Solution : Empêcher le contenu de déborder de son conteneur ;
  le faire défiler à la place */
  overflow: auto;
}

img {
  /* Solution : Définir une largeur maximale de 90% sur les images */
  max-width: 90%;
  /* Solution : Centrer en utilisant des marges automatiques */
  margin: 0 auto;
  display: block;
  /* Solution : Définir une bordure sur les images */
  border: 1px solid #28587b;
}

.controles {
  justify-content: space-around;
  gap: 20px;
  padding: 20px;
}

button {
  flex: 1;
  /* Solution : Définir la hauteur du bouton à 100% et la taille de la
  police à 1,2em */
  height: 100%;
  font-size: 1.2em;
  /* Solution : Définir la couleur du texte en blanc sur les boutons */
  color: white;
  /* Solution : Définir la couleur de fond sur les boutons */
  background-color: rgb(40 88 123 / 0.8);
}

/* Solution : Définir une couleur de fond entièrement opaque sur les
boutons au survol et à la sélection */
button:hover,
button:focus {
  background-color: rgb(40 88 123 / 1);
}

/* Solution : Définir un rayon de bordure sur le div contenu et les
boutons */
.contenu,
button {
  border-radius: 10px;
}
```

```css hidden live-sample___content-pane-finish
.panneau {
  width: clamp(480px, 90%, 1000px);
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}
