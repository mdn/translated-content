---
title: "Défi : Structurer une page de contenu"
short-title: "Défi : Un site d'observation des oiseaux"
slug: Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content
l10n:
  sourceCommit: 2e427c5c185433c5a6612c63bf877753a5fedc99
---

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content")}}

Structurer une page de contenu en vue de la mettre en page avec du CSS est une compétence très importante à maîtriser. Dans ce défi, vous serez mis·e à l'épreuve sur votre capacité à imaginer l'apparence finale d'une page et à choisir la sémantique structurelle appropriée pour construire une mise en page dessus.

## Point de départ

Pour résoudre ce défi, nous attendons de vous que vous créiez un projet de site web basique, soit dans un dossier sur le disque dur de votre ordinateur, soit en utilisant un éditeur en ligne comme [CodePen <sup>(angl.)</sup>](https://codepen.io/) ou [JSFiddle <sup>(angl.)</sup>](https://jsfiddle.net/). Une grande partie du code nécessaire est déjà fournie.

1. Créez un nouveau dossier à un emplacement approprié sur votre ordinateur nommé `structuring-html-challenge` (ou ouvrez un éditeur en ligne et effectuez les étapes nécessaires pour créer un nouveau projet).
2. Enregistrez la liste HTML suivante dans un fichier de votre dossier nommé `index.html` (ou collez-la dans le volet HTML de votre éditeur en ligne).

   ```html
   <!doctype html>
   <html lang="fr">
     <head>
       <meta charset="utf-8" />
       <title>Observation des oiseaux</title>
       <link
         href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300%7CCinzel+Decorative:700"
         rel="stylesheet" />
     </head>

     <body>
       <h1>Observation des oiseaux</h1>

       Accueil Commencer Photos Matériel Forum

       <h2>Bienvenue</h2>

       <p>
         Bienvenue sur notre faux site d'observation des oiseaux. S'il
         s'agissait d'un vrai site, ce serait l'endroit idéal pour en apprendre
         plus sur l'observation des oiseaux, que vous soyez débutant·e
         souhaitant découvrir l'ornithologie ou expert·e voulant partager idées,
         astuces et photos avec d'autres passionné·e·s.
       </p>

       <p>
         Alors ne perdez pas de temps&nbsp;! Prenez ce dont vous avez besoin,
         puis éteignez cet ordinateur et sortez profiter du grand air&nbsp;!
       </p>

       <h2>Photos préférées</h2>

       <!-- Lier les images ici. -->

       <p>
         Cet exemple de faux site web est sous CC0 — toute partie de ce code
         peut être réutilisée comme vous le souhaitez. Exemple original écrit
         par Chris Mills, 2016.
       </p>

       <p>
         <a href="http://game-icons.net/lorc/originals/dove.html"
           >Icône colombe</a
         >
         par Lorc.
       </p>
     </body>
   </html>
   ```

3. Enregistrez la feuille de styles CSS suivante dans un fichier de votre dossier nommé `style.css` (ou collez-la dans le volet CSS de votre éditeur en ligne).

   ```css
   /* || Paramètres généraux */

   body {
     margin: 0;
   }

   html {
     font-size: 10px;
     background-color: darkgrey;
   }

   body {
     width: 70%;
     min-width: 800px;
     margin: 0 auto;
   }

   /* || typographie */

   h1,
   h2 {
     font-family: "Cinzel Decorative", cursive;
     color: #2a2a2a;
   }

   p,
   li {
     font-family: "Roboto Condensed", sans-serif;
     color: #2a2a2a;
   }

   h1 {
     font-size: 4rem;
     text-align: center;
     text-shadow: 2px 2px 10px black;
   }

   h2 {
     font-size: 3rem;
     text-align: center;
   }

   p,
   li {
     font-size: 1.6rem;
     line-height: 1.5;
   }

   /* || mise en page de l'en-tête */

   header {
     margin-bottom: 10px;
   }

   main,
   header,
   nav,
   article,
   aside,
   footer,
   section {
     background-color: #00ff0080;
     padding: 1%;
   }

   h1 {
     text-transform: uppercase;
     display: flex;
     align-items: center;
     justify-content: center;
     gap: 20px;
   }

   header img {
     height: 60px;
   }

   nav ul {
     padding: 0;
     list-style-type: none;
     display: flex;
   }

   nav li {
     text-align: center;
     flex: 1;
   }

   nav a {
     font-size: 2rem;
     text-transform: uppercase;
     text-decoration: none;
     color: black;
   }

   nav a:hover,
   nav a:focus {
     color: red;
   }

   /* || mise en page principale */

   main {
     display: flex;
     gap: 10px;
   }

   article {
     flex: 4;
   }

   aside {
     flex: 1;
   }

   aside a {
     display: block;
     float: left;
     width: 50%;
   }

   aside img {
     max-width: 100%;
   }

   footer {
     margin-top: 10px;
   }
   ```

Par la suite, vous devrez inclure les URLs suivantes dans votre page.

- `dove.png`&nbsp;: [Logo du site](https://mdn.github.io/shared-assets/images/examples/learn/birds/dove.png)
- `favorite-bird-1.jpg`&nbsp;: [Version grand format de la première image de la barre latérale](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-1.jpg)
- `favorite-bird-1_th.jpg`&nbsp;: [Vignette de la première image de la barre latérale](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-1_th.jpg)
- `favorite-bird-2.jpg`&nbsp;: [Version grand format de la deuxième image de la barre latérale](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-2.jpg)
- `favorite-bird-2_th.jpg`&nbsp;: [Vignette de la deuxième image de la barre latérale](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-2_th.jpg)
- `favorite-bird-3.jpg`&nbsp;: [Version grand format de la troisième image de la barre latérale](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-3.jpg)
- `favorite-bird-3_th.jpg`&nbsp;: [Vignette de la troisième image de la barre latérale](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-3_th.jpg)
- `favorite-bird-4.jpg`&nbsp;: [Version grand format de la quatrième image de la barre latérale](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-4.jpg)
- `favorite-bird-4_th.jpg`&nbsp;: [Vignette de la quatrième image de la barre latérale](https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-4_th.jpg)

## Cahier des charges du projet

Pour ce projet, votre tâche consiste à prendre le contenu de la page d'accueil d'un site d'observation des oiseaux et à y ajouter des éléments structurels afin qu'une mise en page puisse lui être appliquée. Vous devrez également apporter quelques ajouts au contenu.

### Ajouts de contenu

1. À l'intérieur de l'élément `<h1>`, ajoutez un élément `<img>` qui inclut le logo colombe sur la page. Donnez-lui un texte alternatif vide ("").
2. Les éléments de texte «&nbsp;Accueil&nbsp;», «&nbsp;Commencer&nbsp;», «&nbsp;Photos&nbsp;», «&nbsp;Matériel&nbsp;» et «&nbsp;Forum&nbsp;» doivent être transformés en menu de navigation.
3. Mettez-les sous forme de liste non ordonnée.
4. Dans chaque élément de liste, entourez le texte d'un élément `<a>` pointant vers l'URL `#` (ce qui crée un faux lien).
5. Supprimez le commentaire `<!-- Lier les images ici. -->`. Remplacez-le par un ensemble de quatre vignettes des «&nbsp;photos préférées&nbsp;». Chacune doit inclure un texte alternatif approprié pour décrire l'image, et être entourée d'un élément `<a>` qui pointe vers la version grand format correspondante.

### Exigences structurelles

La structure du site doit comprendre les éléments suivants&nbsp;:

1. Un en-tête qui englobe le titre principal de la page et la liste du menu de navigation.
2. Un conteneur supplémentaire autour de la liste du menu de navigation.
3. Une zone de contenu principale contenant deux colonnes — un article principal pour le texte de bienvenue, et une barre latérale (aside) pour les vignettes d'images.
4. Un pied de page contenant les informations de droits d'auteur et les crédits.

Autrement dit, vous devez ajouter un conteneur adapté pour&nbsp;:

- L'en-tête
- Le menu de navigation
- Le contenu principal
- L'article de bienvenue
- La barre latérale d'images
- Le pied de page

### Mise en forme de la page

Si nécessaire, appliquez la feuille de styles CSS fournie à la page en ajoutant un autre élément HTML {{HTMLElement("link")}} juste en dessous de celui déjà présent dans le HTML de départ (certains éditeurs de code en ligne appliquent automatiquement le CSS).

## Conseils et astuces

- Utilisez le [validateur HTML du W3C <sup>(angl.)</sup>](https://validator.w3.org/) pour détecter les erreurs involontaires dans votre HTML — afin de pouvoir les corriger.
- Vous n'avez pas besoin de connaître le CSS pour relever ce défi&nbsp;; il vous suffit d'appliquer le CSS fourni à votre HTML.
- Si vous êtes bloqué·e et que vous ne voyez pas quels éléments placer où, dessinez un simple schéma en blocs de la mise en page, et notez les éléments que vous pensez devoir englober chaque bloc. Cela est extrêmement utile.

## Exemple

La capture d'écran suivante montre un exemple de ce à quoi pourrait ressembler la page d'accueil une fois balisée. Si vous avez du mal à réaliser certains points, consultez la solution sous l'exemple interactif.

![L'exemple final pour le défi ; une page web simple sur l'observation des oiseaux, comprenant un titre « Birdwatching », des photos d'oiseaux et un message de bienvenue](example-page.png)

<details>
<summary>Cliquez ici pour afficher la solution</summary>

Votre HTML final devrait ressembler à ceci&nbsp;:

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Observation des oiseaux</title>
    <link
      href="https://fonts.googleapis.com/css?family=Roboto+Condensed:300%7CCinzel+Decorative:700"
      rel="stylesheet" />
    <link href="style.css" rel="stylesheet" />
  </head>

  <body>
    <header>
      <h1>
        Observation des oiseaux
        <img
          src="https://mdn.github.io/shared-assets/images/examples/learn/birds/dove.png"
          alt="logo colombe simple" />
      </h1>

      <nav>
        <ul>
          <li><a href="#">Accueil</a></li>
          <li><a href="#">Commencer</a></li>
          <li><a href="#">Photos</a></li>
          <li><a href="#">Matériel</a></li>
          <li><a href="#">Forum</a></li>
        </ul>
      </nav>
    </header>

    <main>
      <article>
        <h2>Bienvenue</h2>

        <p>
          Bienvenue sur notre faux site d'observation des oiseaux. S'il
          s'agissait d'un vrai site, ce serait l'endroit idéal pour en apprendre
          plus sur l'observation des oiseaux, que vous soyez débutant·e
          souhaitant découvrir l'ornithologie ou expert·e voulant partager
          idées, astuces et photos avec d'autres passionné·e·s.
        </p>

        <p>
          Alors ne perdez pas de temps&nbsp;! Prenez ce dont vous avez besoin,
          puis éteignez cet ordinateur et sortez profiter du grand air&nbsp;!
        </p>
      </article>

      <aside>
        <h2>Photos préférées</h2>

        <a
          href="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-1.jpg">
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-1_th.jpg"
            alt="Petit oiseau noir, griffes noires, long bec noir et fin" />
        </a>
        <a
          href="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-2.jpg">
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-2_th.jpg"
            alt="Demi-corps d'un bel oiseau au plumage bleu vif sur le cou, bec clair, huppe bleue" />
        </a>
        <a
          href="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-3.jpg">
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-3_th.jpg"
            alt="Demi-corps d'un grand oiseau au plumage blanc, très long bec clair, étroit et recourbé" />
        </a>
        <a
          href="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-4.jpg">
          <img
            src="https://mdn.github.io/shared-assets/images/examples/learn/birds/favorite-bird-4_th.jpg"
            alt="Grand oiseau, plumage principalement blanc avec du noir sur le dos et l'arrière, long bec droit blanc" />
        </a>
      </aside>
    </main>

    <footer>
      <p>
        Cet exemple de faux site web est sous CC0 — toute partie de ce code peut
        être réutilisée comme vous le souhaitez. Exemple original écrit par
        Chris Mills, 2016.
      </p>

      <p>
        <a href="http://game-icons.net/lorc/originals/dove.html"
          >Icône colombe</a
        >
        par Lorc.
      </p>
    </footer>
  </body>
</html>
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Structuring_content/Test_your_skills/Links", "Learn_web_development/Core/Structuring_content/HTML_images", "Learn_web_development/Core/Structuring_content")}}
