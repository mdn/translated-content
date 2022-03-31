---
title: Les images en HTML
slug: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
tags:
  - Débutant
  - Guide
  - HTML
  - Image
  - Title
  - alt text
  - figcaption
  - figure
  - img
  - src
translation_of: Learn/HTML/Multimedia_and_embedding/Images_in_HTML
original_slug: Apprendre/HTML/Multimedia_and_embedding/Images_in_HTML
---
{{LearnSidebar}}{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

Au début, le Web n'était que du texte, ce qui était un peu ennuyeux. Heureusement, il n'a pas fallu longtemps pour que la possibilité d'intégrer des images ( et d'autres types de contenu intéressants) dans une page web soit ajoutée.  Bien qu'il y ait plusieurs types de contenu multimedia, il est logique de commencer avec l'humble élément {{htmlelement("img")}},  utilisé pour intégrer une image dans une page web. Dans cet article, nous approfondirons son utilisation en abordant les principes fondamentaux, l'annotation par légendes utilisant {{htmlelement("figure")}}, et en analysant sa relation avec les images d'arrière-plan du {{glossary("CSS")}} .

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Notions élémentaires en informatique,
        <a
          href="/fr/Apprendre/Commencer_avec_le_web/Installation_outils_de_base"
          >installation des outils de base</a
        >, bases de la
        <a href="/fr/Apprendre/Commencer_avec_le_web/G%C3%A9rer_les_fichiers"
          >manipulation des fichiers</a
        >, fondamentaux du HTML (comme décrit dans <a
          href="/fr/Apprendre/HTML/Introduction_%C3%A0_HTML/Getting_started"
          >Commencer avec le Web).</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs :</th>
      <td>
        Apprendre à intégrer des images simples en HTML, à les légender d'un
        intitulé, et à mettre en relation ces images HTML avec les images
        d'arrière-plan du CSS.
      </td>
    </tr>
  </tbody>
</table>

## Comment intégrer une image à une page web ?

Pour mettre une image simple sur une page web, nous utiliserons l'élément {{htmlelement("img")}}.  C'est un {{glossary("empty element","élément vide")}} (ce qui signifie qu'il ne contient ni texte ni balise de fermeture) qui demande au moins un attribut pour fonctionner — `src` (souvent appelé par son nom entier: *source*). L'attribut `src` contient un chemin pointant vers l'image que vous voulez intégrer, qui peut être une URL absolue ou relative, de la même manière que l'élément  {{htmlelement("a")}} `href=` attribue des valeurs.

> **Note :** Vous devriez lire [Une brève présentation des URL et des chemins](/fr/Apprendre/HTML/Introduction_%C3%A0_HTML/Creating_hyperlinks#url)  pour vous rafraîchir la mémoire avant de continuer.

Donc, par exemple, si votre image s'appelle `dinosaur.jpg`, et qu'elle est située dans le même répertoire que votre page HTML, vous pouvez intégrer cette image comme ceci (URL relative) :

```html
<img src="dinosaur.jpg">
```

Et si cette image se trouve dans un sous-répertoire `images` situé dans le même dossier que la page HTML (ce que Google recommande pour {{glossary("SEO")}}/dans un but d'indexation et d'optimisation de la recherche), alors vous l'intégrerez comme ceci :

```html
<img src="images/dinosaur.jpg">
```

Ainsi de suite.

> **Note :** Les moteurs de recherche lisent aussi les noms de fichiers image et s'en servent pour optimiser la recherche. Donc, donnez à vos images des noms de fichiers descritifs et qui ont du sens. `dinosaur.jpg` est infiniment mieux que `img835.png`.

Vous pouvez intégrer l'image en utilisant son URL absolue, par exemple :

```html
<img src="https://www.example.com/images/dinosaur.jpg">
```

Ce n'est pas trés efficace, cela fait travailler le navigateur plus qu'il ne devrait, il cherche l'adresse IP depuis le serveur DNS à chaque fois etc... Vous devriez autant que possible garder vos images du site sur le même serveur que la page HTML.

> **Attention :** La plupart des images ont des droits d'auteur. N'affichez jamais une image sur votre site à moins que :
>
> 1\) Ce soit votre image (vous en êtes le créateur),
> 2\) vous ayez reçu une permission explicite et écrite du propriètaire de l'image ou,
> 3\) que vous ayez une preuve indiscutable que cette image appartient au domaine public.
>
> Les violations des lois sur les droits d'auteur sont non seulement illégales mais aussi non-éthiques. De plus, ne faites jamais pointer votre attribut `src` vers une image hébergée sur le site de quelqu'un d'autre sans en avoir l'autorisation. Cela s'appelle du "hotlinking". Souvenez-vous que voler de la bande passante à quelqu'un est aussi illégal. Cela ralentit aussi votre page et vous laisse sans contrôle si l'image est enlevée ou remplacée par une autre plus gênante...

Le code au-dessus vous donnera, à peu prés, le résultat suivant :

![A basic image of a dinosaur, embedded in a browser, with "Images in HTML" written above it](basic-image.png)

> **Note :** Les éléments comme {{htmlelement("img")}} et {{htmlelement("video")}} sont souvent désignés comme des éléments "remplacés". C'est parce que le contenu et la taille de ces éléments sont définies par une ressource externe (comme un fichier image ou video), pas par le contenu de l'élément lui-même.

> **Note :** Vous trouverez les exemples finis de cette section sur [Github](https://mdn.github.io/learning-area/html/multimedia-and-embedding/images-in-html/index.html) (regardez aussi le [code source](https://github.com/mdn/learning-area/blob/master/html/multimedia-and-embedding/images-in-html/index.html).)

### Texte alternatif

Le prochain attribut que nous allons étudier est `alt`. Sa valeur est supposée être un descriptif sous forme de texte de l'image, à utiliser dans les cas où l'image ne peut être affichée. Exemple : le code au-dessus pourrait être modifié de cette manière :

```html
<img src="images/dinosaur.jpg"
     alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth">
```

La manière la plus simple de tester votre texte `alt` est de mal épeler votre nom de fichier intentionnellement. Si dans l'exemple, la photo était épelée `dinosooooor.jpg`, le navigateur ne l'afficherait pas mais afficherait le texte alt à la place :

![The Images in HTML title, but this time the dinosaur image is not displayed, and alt text is in its place.](alt-text.png)

Pourquoi vous verrez partout du texte alt ? Vous en aurez besoin car c'est très pratique en maintes occasions :

- L'utilisateur est un déficient visuel qui utilise un [lecteur d'écran](https://fr.wikipedia.org/wiki/Lecteur_d%27%C3%A9cran) qui s'en sert pour "lire" le web. En fait, avoir du texte alt disponible pour décrire les images est très utile à beaucoup d'utilisateurs.
- Comme nous l'avons vu au-dessus, vous pourriez avoir mal épelé le nom ou le chemin du fichier.
- Le navigateur ne gère pas ce type d'image. Certains utilisent encore des navigateurs en terminal, affichant seulement du texte (comme [Lynx)](<https://fr.wikipedia.org/wiki/Lynx_(navigateur)>), qui affichent le texte alt des images.
- Vous pouvez avoir envie de fournir du texte que pourraient utiliser les moteurs de recherche. Par exemple, ils mettront en relation le texte alt avec des requêtes de recherche.
- L'utilisateur a supprimé les images pour économiser le volume du transfert de données ou pour ne pas être distrait. C'est très commun sur les téléphones mobiles et dans les pays où la bande passante est limitée ou coûte cher.

Que devriez-vous noter dans vos attributs `alt` ? En premier lieu, cela dépend de la raison pour laquelle cette image se trouve là. En d'autres mots, ce que vous perdriez si cette image ne s'affichait pas :

- **Decoration.** Vous devriez utiliser [des images d'arrière-plan CSS](#images_darrière-plan_css) pour les images décoratives mais si vous devez utiliser du HTML, ajoutez un `alt=""` vide. Si l'image ne fait pas vraiment partie du contenu, un lecteur d'écran ne perdra pas de temps à la lire.
- **Contenu.** Si votre image fournit une ou plusieurs informations supplémentaires significatives, inscrivez ces mêmes informations dans un *bref* `alt` text – ou mieux, dans le texte principal, que tout le monde puisse les voir. N'écrivez pas de `alt` text redondants. Imaginez combien ce serait ennuyeux pour un lecteur si tous les paragraphes étaient écrits en double... Si l'image est décrite de manière adéquate dans le corps de texte principal, vous pouvez utiliser simplement `alt=""`.
- **Lien.** Si vous mettez une image à l'intérieur d'une ancre {{htmlelement("a")}} pour transformer une image en lien, vous devez quand même fournir un [Lien texte accessible](/fr/Apprendre/HTML/Introduction_%C3%A0_HTML/Creating_hyperlinks#bplien). Dans de tels cas, vous pouvez, soit l'inclure dans le même élément `<a>`, soit dans l'attribut `alt` de l'image – utilisez ce qui marche le mieux dans votre cas.
- **Texte.** Vous ne devez pas mettre de texte dans les images. Si votre titre principal a besoin d'un peu d'ombrage par exemple, [utilisez CSS](/fr/docs/Web/CSS/text-shadow) pour ça, plutôt que de mettre du texte dans une image. De toutes manières, si vous ne pouvez pas éviter de faire ça, vous devez ajouter le texte dans l'attribut `alt` .

Le but est de livrer essentiellement une expérience de qualité, même quand les images ne peuvent être vues. Cela assure à tous les utilisateurs de ne rien manquer du contenu. Essayez de ne pas afficher les images dans votre navigateur et regardez ce qu'il se passe. Vous allez vite réaliser que le texte fourni à la place est réellement utile.

> **Note :** Pour plus d'informations, voyez notre guide  [Textes Alternatifs](/fr/docs/Learn/Accessibility/HTML#Text_alternatives)

### Largeur et hauteur (width-height)

Vous pouvez vous servir des attributs  `width` et `height` pour spécifier la largeur et la hauteur de votre image. Vous pouvez trouver la largeur et la hauteur de différentes manières. Sur Mac, par exemple, vous pouvez utiliser   <kbd>Cmd</kbd> + <kbd>I</kbd> pour afficher l'info relative au fichier image. Pour revenir à notre exemple, nous pourrions faire ceci :

```html
<img src="images/dinosaur.jpg"
     alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
     width="400"
     height="341">
```

Cela ne fait pas grande différence à l'affichage dans des circonstances normales. Mais, si l'image n'est pas affichée, disons que l'utilisateur est juste arrivé sur la page et qu'elle n'est pas encore chargée, vous remarquerez que le navigateur laisse un espace pour qu'elle y apparaisse :

![The Images in HTML title, with dinosaur alt text, displayed inside a large box that results from width and height settings](alt-text-with-width-height.png)

C'est une bonne pratique, cela donne une page se chargeant plus rapidement et en douceur.

De toutes manières, vous ne devez pas altérer la taille de vos images avec les attributs HTML . Si vous réglez la taille de l'image trop grande, vous aurez un résultat avec beaucoup de "grain", flou ou trop petit et vous dépensez de la bande passante en téléchargeant une image qui ne convient pas aux besoins de l'utilisateur.  Votre image peut aussi sortir distordue, si vous n'en maintenez pas le bon  [Format d'image](https://fr.wikipedia.org/wiki/Format_d%27image). Vous devriez utiliser un éditeur d'images pour la mettre à la bonne taille avant de la mettre dans votre page web.

> **Note :** Si vous devez absolument modifier une taille d' image, vous devriez vous servir de  [CSS](/fr/Apprendre/CSS) .

### Titre d'images

Comme décrit dans le chapitre [Création d'hyperliens](/fr/Apprendre/HTML/Introduction_%C3%A0_HTML/Creating_hyperlinks), vous pouvez aussi ajouter un attribut `title` aux images, pour fournir un supplément d'information si nécessaire. Dans notre exemple, nous pourrions faire ceci :

```html
<img src="images/dinosaur.jpg"
     alt="The head and torso of a dinosaur skeleton;
          it has a large head with long sharp teeth"
     width="400"
     height="341"
     title="A T-Rex on display in the Manchester University Museum">
```

Cela donne une info-bulle avec le texte entré dans l'attribut `title` :

![The dinosaur image, with a tooltip title on top of it that reads A T-Rex on display at the Manchester University Museum ](image-with-title.png)

Il n'est pas essentiel d'inclure des informations dans les images. Il est souvent préférable d'écrire ces informations dans le texte principal plutôt qu'attaché à l'image. Ils peuvent être très utile dans d'autres circonstances, par exemple dans une galerie d'images où vous n'avez pas de place pour les légendes.

### Pédagogie active : incorporer une image

À vous de jouer maintenant ! Cette section dédiée à l'apprentissage interactif va vous tenir en haleine avec un simple exercice d'intégration d'image. Vous allez un peu travailler l'anglais aussi. Il vous est fourni une étiquette basique {{htmlelement("img")}} ; Il va vous falloir incorporer l'image située à l'URL suivante :

https\://raw\.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg

Nous avons dit plus tôt de ne jamais faire de "hotlinking" sur d'autres serveurs mais c'est ici dans un but d'apprentissage, donc on oublie ça pour cette fois.

Nous avons encore quelques petites choses pour vous :

- Ajoutez du texte `alt`  , et vérifiez qu'il marche en faisant une faute dans l'URL de l'image.
- Réglez l'image à une bonne taille :  `width` et `height` ( conseil : c'est 200px wide (large) and 171px high (haut)), puis expérimentez d'autres valeurs pour en appréhender les effets.
- Mettez un  `title`  sur l'image.

Si vous faites une erreur, vous pouvez toujours remettre à zéro en utilisant le bouton _Reset_ .  Si vous êtes vraiment bloqué, regardez la réponse en cliquant le bouton S*how solution* :

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
<img>
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution">
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var output = document.querySelector('.output');
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = 'Show solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Show solution') {
    textarea.value = solutionEntry;
    solution.value = 'Hide solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Show solution';
  }
  updateCode();
});

var htmlSolution = '<img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171"\n title="A T-Rex on display in the Manchester University Museum">';
var solutionEntry = htmlSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = (textarea.value).substring(0, caretPos);
  var back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if(solution.value === 'Show solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Pédagogie_active_incorporer_une_image', 700, 350, "", "", "hide-codepen-jsfiddle") }}

## Légender des images avec `figure` et `figcaption`

En parlant de légendes, il y a de nombreuses manières d'en ajouter qui ira avec votre image. Par exemple, rien ne vous empêche de faire ceci :

```html
<div class="figure">
  <img src="images/dinosaur.jpg"
       alt="The head and torso of a dinosaur skeleton;
            it has a large head with long sharp teeth"
       width="400"
       height="341">

  <p>A T-Rex on display in the Manchester University Museum.</p>
</div>
```

C'est bon. Ça contient ce que vous voulez et c'est aisément stylisable en CSS.  Mais il y a un problème : il n'y a rien de sensé qui relie l'image à sa légende. Ce qui peut poser des problèmes à un lecteur d'écran. Par exemple, quand vous avez 50 images, quelle légende va avec quelle image ?

Une meilleure solution consiste en l'utilisation des éléments HTML5 {{htmlelement("figure")}} et {{htmlelement("figcaption")}} . Ils ont été conçus pour cela : fournir un conteneur sémantique aux objets et lier clairement cet objet à sa légende. Notre exemple précédent pourrait être réécrit comme ceci :

    <figure>
      <img src="images/dinosaur.jpg"
           alt="The head and torso of a dinosaur skeleton;
                it has a large head with long sharp teeth"
           width="400"
           height="341">

      <figcaption>A T-Rex on display in the Manchester University Museum.</figcaption>
    </figure>

L'élément {{htmlelement("figcaption")}}  dit au navigateur et aux technologies d'assistance que la légende décrit le contenu de l'autre élément {{htmlelement("figure")}}.

> **Note :** D'un point de vue accessibilité, les légendes ont un rôle différent du texte {{htmlattrxref('alt','img')}}. Le texte {{htmlattrxref('alt','img')}} ne sert qu'en absence d'image tandis que les légendes servent en même temps aux utilisateurs qui voient l'image. Les légendes et le texte `alt` devraient cependant être différents car ils apparaissent tout deux quand l'image est absente. Essayez d'enlever les images dans votre navigateur et voyez à quoi ça ressemble.

Un objet \<figure> n'est pas forcé de contenir une image. C'est une unité de contenu indépendante qui :

- exprime votre désir d'accessibilité et de compréhension facilitée.
- peut se placer en plusieurs endroits dans une page à flot linéaire.
- Fournit une information essentielle qui supporte le texte principal.

Cet objet peut être un ensemble d'images, des bribes de code, de l'audio, de la vidéo, des équations, un tableau ou bien d'autres choses.

### Pédagogie active : créer un objet figure

Dans cette section, nous allons vous demander de récupérer le code fini de la section "Pédagogie active" précédente et d'y faire ceci :

- Encapsulez-le dans un élément {{htmlelement("figure")}} .
- Copiez le texte de l'attribut, enlevez l'attribut  `title`  et mettez le texte dans un élément  {{htmlelement("figcaption")}} sous l'image.

Si vous faites une erreur, vous pouvez toujours remettre à zéro en utilisant le bouton _Reset_ .  Si vous êtes vraiment bloqué, regardez la réponse en cliquant le bouton S*how solution* :

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Editable code</h2>
<p class="a11y-label">Press Esc to move focus away from the code area (Tab inserts a tab character).</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution">
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var output = document.querySelector('.output');
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = 'Show solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Show solution') {
    textarea.value = solutionEntry;
    solution.value = 'Hide solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Show solution';
  }
  updateCode();
});

var htmlSolution = '<figure>\n <img src="https://raw.githubusercontent.com/mdn/learning-area/master/html/multimedia-and-embedding/images-in-html/dinosaur_small.jpg"\n alt="The head and torso of a dinosaur skeleton; it has a large head with long sharp teeth"\n width="200"\n height="171" />\n <figcaption>A T-Rex on display in the Manchester University Museum</figcaption>\n</figure>';
var solutionEntry = htmlSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = (textarea.value).substring(0, caretPos);
  var back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if(solution.value === 'Show solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Pédagogie_active_créer_un_objet_figure', 700, 350, "", "", "hide-codepen-jsfiddle") }}

## Images d'arrière-plan CSS

Vous pouvez également utiliser du CSS pour intégrer des images dans vos pages web (ou JavaScript, mais c'est une autre histoire). Les propriétés CSS {{cssxref("background-image")}} et `background`, sont utilisées pour contrôler le placement de l'image d'arrière-plan. Par exemple, pour placer une image d'arrière-plan sur chaque paragraphe de la page, vous pourriez faire ceci :

```css
p {
  background-image: url("images/dinosaur.jpg");
}
```

Le résultat est probablement plus facile à positionner et contrôler qu'une image HTML. Donc, pourquoi s'ennuyer avec des images HTML ?... Comme il y est fait allusion au-dessus, les images CSS sont là seulement pour la décoration. Si vous voulez ajouter quelque chose d'agréable à votre page pour en enrichir le visuel, c'est étudié pour. Mais, ces images n'ont pas d'indication sémantique. Elles ne peuvent pas avoir d'équivalent texte, sont invisibles aux lecteurs d'écran, etc... C'est le moment, pour l'image HTML, de se mettre en valeur !

En résumé : si une image a du sens, en terme de contenu, vous devriez utiliser une image HTML. Si une image n'est que pure décoration, il vaut mieux utiliser les images d'arrière-plan CSS.

> **Note :** Vous en apprendrez beaucoup plus sur les  [CSS background images](/fr/docs/Learn/CSS/Styling_boxes/Backgrounds) dans notre topic  [CSS](/fr/Apprendre/CSS) .

C'est tout pour l'instant. Nous avons découvert en détails les images et légendes. Dans le prochain article, nous monterons en régime pour aborder la manière d'utiliser HTML pour intégrer des vidéos et de l'audio dans une page web.

{{NextMenu("Learn/HTML/Multimedia_and_embedding/Video_and_audio_content", "Learn/HTML/Multimedia_and_embedding")}}

## Dans ce module :

- [Images in HTML](/fr/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [Video and audio content](/fr/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)
- [From \<object> to \<iframe> — other embedding technologies](/fr/docs/Learn/HTML/Multimedia_and_embedding/Other_embedding_technologies)
- [Adding vector graphics to the Web](/fr/docs/Learn/HTML/Multimedia_and_embedding/Adding_vector_graphics_to_the_Web)
- [Responsive images](/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- [Mozilla splash page](/fr/docs/Learn/HTML/Multimedia_and_embedding/Mozilla_splash_page)
