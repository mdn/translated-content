---
title: Introduction à SVG dans HTML
slug: Web/SVG/Tutorial/SVG_In_HTML_Introduction
tags:
  - SVG
translation_of: Web/SVG/Tutorial/SVG_In_HTML_Introduction
original_slug: Web/SVG/Tutoriel/Introduction_à_SVG_dans_HTML
---
### Aperçu

Cet article et son exemple associé montrent comment utiliser du [SVG](fr/SVG) en ligne pour fournir une image de fond à un formulaire. Il montre comment [JavaScript](fr/JavaScript) et [CSS](fr/CSS) peuvent servir à manipuler l'image comme vous le feriez avec le XHTML dans un script. Notez que l'exemple ne fonctionnera que dans des navigateurs supportant XHTML (pas HTML) et l'intégration SVG.

### Source

Voici le code source de cet exemple :

    <html xmlns="http://www.w3.org/1999/xhtml">
    <head>
      <title>XTech SVG Demo</title>
      <style>
        stop.begin { stop-color:yellow; }
        stop.end { stop-color:green; }
        body.invalid stop.end { stop-color:red; }
        #err { display:none; }
        body.invalid #err { display:inline; }
      </style>
      <script>
        function signalError() {
          document.getElementById('body').setAttribute("class", "invalid");
        }
      </script>
    </head>
    <body id="body"
       style="position:absolute; z-index:0; border:1px solid black; left:5%; top:5%; width:90%; height:90%;">
      <form>
         <fieldset>
           <legend>HTML Form</legend>
           <p><label>Enter something:</label>
              <input type="text"/>
              <span id="err">Incorrect value!</span></p>
           <p><button onclick="signalError();">Activate!</button></p>
         </fieldset>
      </form>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1"
        viewBox="0 0 100 100" preserveAspectRatio="xMidYMid slice"
        style="width:100%; height:100%; position:absolute; top:0; left:0; z-index:-1;">
        <linearGradient id="gradient">
          <stop class="begin" offset="0%"/>
          <stop class="end" offset="100%"/>
        </linearGradient>
        <rect x="0" y="0" width="100" height="100" style="fill:url(#gradient)" />
        <circle cx="50" cy="50" r="30" style="fill:url(#gradient)" />
      </svg>
    </body>
    </html>

### Discussion

La page est principalement formée de XHTML, CSS et JavaScript classiques. La seule partie intéressante est le contenu de l'élément \<svg>. Cet élément et ses fils sont déclarés comme étant dans l'espace de nommage SVG. L'élément contient un gradient et deux formes remplies avec le gradient. Les bornes de couleurs du gradient sont définies par une classe CSS. Lorsque l'utilisateur saisit quelque chose d'incorrect dans le formulaire, le script affecte l'attribut `invalid` à la balise \<body> et une règle de style modifie la couleur `end-stop` du gradient en rouge en lui donnant la valeur « red » (Une autre règle de style sert à faire apparaître un message d'erreur).

Cette approche bénéficie des points suivants en sa faveur :

- Nous avons choisi un formulaire XHTML classique qui pourrait faire partie d'un site Web existant, et lui avons ajouté un fond attractif et interactif
- L'approche assure une rétro-compatibilité pour les navigateurs qui ne supportent pas SVG ; simplement, aucun fond n'apparaîtra pour eux
- Elle est très simple et remplit sa fonction parfaitement
- L'image se redimensionne automatiquement à la taille requise de manière intelligente
- Nous pouvons avoir des déclarations de styles appliquées à la fois sur le HTML et le SVG
- Le même script manipule à la fois le HTML et le SVG
- Le document est entièrement basé sur les standards

### Détails

L'attribut `viewBox` établit un système de coordonnées logiques sur lequel les coordonnées de l'image SVG s'appuient de façon relative. Dans ce cas, notre image s'étend dans un cadre de visualisation de 100 sur 100.

L'attribut `preserveAspectRatio` spécifie que le ratio de rendu doit être préservé en centrant l'image dans l'espace disponible, en augmentant la largeur ou la hauteur à leur maximum et en tronquant les débordements.

L'attribut `style` ancre l'élément SVG en arrière plan du formulaire.

### Liens sur le sujet

- L'article wikipedia sur le format [SVG](http://fr.wikipedia.org/wiki/Scalable_Vector_Graphics)
- La page [Inline SVG](http://svg-whiz.com/wiki/index.php?title=Inline_SVG) sur le wiki SVG
