---
title: Mise en forme des liens
slug: Learn/CSS/Styling_text/Styling_links
translation_of: Learn/CSS/Styling_text/Styling_links
original_slug: Learn/CSS/Styling_text/Mise_en_forme_des_liens
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

Lors de la mise en forme de [liens](/fr/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks), il est important de comprendre comment utiliser les pseudo-classes pour mettre en forme efficacement les états des liens, et comment créer des liens pour les utiliser dans diverses fonctionnalités d'interface courantes, telles que les menus de navigation et les onglets. Nous allons examiner tous ces sujets dans cet article.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Notions de base en informatique, notions de base en HTML (étudier l'<a
          href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction au HTML)</a
        >, notions de base en CSS (étudier l'<a
          href="/fr/docs/Learn/CSS/Introduction_to_CSS"
          >Introduction à CSS</a
        >),
        <a
          href="/fr/docs/Learn/CSS/Styling_text/initiation-mise-en-forme-du-texte"
          >initiation à la mise en forme de texte</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Apprendre à mettre en forme les états des liens, et comment utiliser
        efficacement les liens dans les fonctionnalités courantes de l'IU, comme
        les menus de navigation.
      </td>
    </tr>
  </tbody>
</table>

## Un coup d'œil à quelques liens

Nous avons regardé comment les liens sont implémentés dans votre HTML selon les meilleures pratiques dans [Création d'hyperliens](/fr/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks). Dans cet article, nous allons développer ces connaissances en vous montrant les meilleures pratiques pour la mise en forme de liens.

### État des liens

La première chose à comprendre est le concept d'états des liens : les différents états dans lesquels les liens peuvent exister, qui peuvent être mis en forme en utilisant différentes [pseudo-classes](/fr/docs/Learn/CSS/Building_blocks/Selectors#pseudo-classes_et_pseudo-éléments) :

- **link (non visité)** : l'état par défaut dans lequel se trouve un lien, lorsqu'il n'est dans aucun autre état ; cela peut être spécifiquement mis en forme en utilisant la pseudo classe {{cssxref(":link")}} ;
- **visited :** un lien qui a déjà été visité (qui existe dans l'historique du navigateur), mis en forme en utilisant la pseudo-classe {{cssxref(":visited")}} ;
- **hover :** un lien qui est survolé par le pointeur de la souris de l'utilisateur, mis en forme en utilisant la pseudo classe {{cssxref(":hover")}} ;
- **focus :** un lien qui a reçu la focalisation (par exemple, quand l'utilisateur du clavier s'est déplacé en utilisant la touche

  <kbd>Tab</kbd>

  ou similaire, ou qui a reçu la focalisation par programmation par utilisation de {{domxref("HTMLElement.focus()")}}) ; ceci est mis en forme en utilisant la pseudo-classe {{cssxref(":focus")}} ;

- **active :** un lien en cours d'activation (par exemple, lorsqu'on clique dessus), mis en forme en utilisant la pseudo classe {{cssxref (":active")}}.

### Styles par défaut

L'exemple suivant illustre le comportement d'un lien par défaut (le CSS simplement agrandit et centre le texte pour le rendre plus visible).

```html
<p><a href="#">Un simple lien</a></p>
```

```css
p {
  font-size: 2rem;
  text-align: center;
}
```

{{ EmbedLiveSample('', '100%', 120) }}

> **Note :** Tous les liens dans les exemples de cette page sont de faux liens : un # (hash, ou signe dièse) est mis à la place de l'URL réelle. En effet, si des liens réels étaient inclus, un simple clic sur ceux-ci cassererait les exemples (vous vous retrouveriez avec une erreur, ou une page chargée dans l'exemple intégré de laquelle vous ne pourriez pas revenir) ; # ne redirige que vers la page actuelle.

Vous remarquerez quelques petites choses en explorant les styles par défaut :

- Les liens sont soulignés ;
- Les liens non visités sont bleus ;
- Les liens visités sont en violet ;
- Le survol d'un lien fait se changer en petite icône de main le pointeur de la souris ;
- Les liens ayant reçus la focalisation ont un contour autour d'eux : vous devriez pouvoir vous focaliser sur les liens de cette page avec le clavier en appuyant sur la touche

  <kbd>Tab</kbd>

  (sur Mac, il se peut que vous ayez besoin d'activer l'option _Accès clavier complet : Toutes les commandes_ en appuyant sur

  <kbd>Ctrl</kbd>

  \+

  <kbd>F7</kbd>

  pour que cela fonctionne) ;

- Les liens actifs sont rouges (essayez de maintenir le bouton de la souris enfoncé sur le lien lorsque vous cliquez dessus).

De façon assez intéressante, ces styles par défaut sont pratiquement les mêmes que ce qu'ils étaient aux premiers temps des navigateurs, au milieu des années 1990. C'est parce que les utilisateurs connaissent — et s'attendent à — ce comportement ; si les liens étaient mis en forme différemment, cela créerait beaucoup de confusion. Cela ne signifie pas que vous ne deviez pas du tout mettre en forme les liens, mais simplement que vous ne devriez pas vous éloigner trop du comportement attendu. Vous devriez au moins :

- utiliser le soulignement pour les liens, mais pas pour d'autres choses ; si vous ne voulez pas souligner les liens, au moins les mettre en évidence d'une autre manière ;
- les faire réagir d'une manière ou d'une autre lorsqu'ils sont survolés ou lorsqu'ils ont reçu la focalisation, et d'une manière légèrement différente lorsqu'ils sont activés.

Les styles par défaut peuvent être désactivés/modifiés en utilisant les propriétés CSS suivantes :

- {{cssxref ("color")}} pour la couleur du texte ;
- {{cssxref ("cursor")}} pour le style du pointeur de la souris — vous ne devriez pas le désactiver, à moins d'avoir une très bonne raison ;
- {{cssxref ("outline")}} pour le contour du texte (un contour est similaire à une bordure, la seule différence étant que la bordure occupe de l'espace dans la boîte et non un contour, elle se trouve juste au-dessus du Contexte) ; le contour est une aide utile à l'accessibilité, alors réfléchissez bien avant de la désactiver ; vous devriez au moins dupliquer aussi les styles affectés à l'état link hover sur l'état de focalisation.

> **Note :** Vous n'êtes pas limité aux propriétés ci-dessus pour mettre en forme vos liens ; vous êtes libre d'utiliser les propriétés que vous aimez. Essayez seulement de ne pas devenir trop fou !

### Mise en forme de quelques liens

Maintenant que nous avons examiné les états par défaut en détail, regardons un ensemble typique de mises en forme de liens.

Pour commencer, nous écrirons notre jeu de règles vides :

```css
a {

}


a:link {

}

a:visited {

}

a:focus {

}

a:hover {

}

a:active {

}
```

Cet ordre est important parce que les styles de liens se construisent les uns par dessus les autres ; par exemple, les styles de la première règle s'appliqueront à toutes les suivantes, et lorsqu'un lien est activé, il est également survolé. Si vous les mettez dans le mauvais ordre, les choses ne fonctionneront pas correctement. Pour se souvenir de l'ordre, vous pouvez essayer d'utiliser un moyen mnémotechnique comme La Vie Fuit la HAine (LoVe Fears HAte).

Maintenant, ajoutons quelques informations supplémentaires pour mettre en forme cela correctement :

```css
body {
  width: 300px;
  margin: 0 auto;
  font-size: 1.2rem;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: #265301;
}

a:visited {
  color: #437A16;
}

a:focus {
  border-bottom: 1px solid;
  background: #BAE498;
}

a:hover {
  border-bottom: 1px solid;
  background: #CDFEAA;
}

a:active {
  background: #265301;
  color: #CDFEAA;
}
```

Nous allons aussi fournir un extrait d'HTML auquel appliquer le CSS :

```html
<p>Il y a plusieurs navigateurs disponibles, tels que <a href="#">Mozilla
Firefox</a>, <a href="#">Google Chrome</a>, et
<a href="#">Microsoft Edge</a>.</p>
```

En mettant les deux ensemble, nous obtenons ce résultat :

{{EmbedLiveSample('', '100%', 150)}}

Alors qu'avons-nous fait ici ? Cela semble certainement différent de la mise en forme par défaut, mais cela donne toujours une expérience suffisamment familière pour que les utilisateurs sachent ce qui se passe :

- Les deux premières règles ne sont pas très intéressantes pour cette discussion ;
- La troisième règle utilise le sélecteur `a` pour se débarasser du soulignement de texte par défaut et du contour de focalisation (qui varie d'un navigateur à l'autre), et elle ajoute une petite quantité de remplissage à chaque lien ; tout ceci deviendra clair plus tard ;
- Ensuite, nous utilisons les sélecteurs `a:link` et `a:visited` pour définir deux variations de couleur sur les liens non visités et visités, afin qu'ils soient distincts ;
- Les deux règles suivantes utilisent `a:focus` et `a:hover` pour faire que les liens centrés et survolés aient des couleurs d'arrière-plan différentes, plus un soulignement afin que le lien se démarque encore davantage ; deux points à noter ici :

  - Le soulignement a été créé en utilisant {{cssxref("border-bottom")}}, pas {{cssxref("text-decoration")}} ; certaines personnes préfèrent cela parce que le premier a de meilleures options de mise en forme que le second, et qu'il est tracé un peu plus bas, de sorte qu'il ne coupe pas les jambages du mot souligné (par exemple, les jambes du g et du y) ;
  - La valeur {{cssxref("border-bottom")}} a été définie comme `1px solid`, sans couleur indiquée ; cela fait que la bordure adopte la même couleur que le texte de l'élément, ce qui est utile dans des cas comme celui-ci, où le texte a une couleur différente dans chaque cas ;

- Enfin, `a:active` est utilisé pour donner aux liens un schéma de couleurs inversé pendant qu'ils sont activés, afin de faire comprendre que quelque chose d'important est en train de se passer !

### Apprentissage actif : mettez en forme vos propres liens

Dans cette session d'apprentissage actif, nous aimerions que vous utilisiez notre ensemble de règles vide, et que vous ajoutiez vos propres déclarations pour que les liens soient vraiment cools. Utilisez votre imagination, soyez fou. Nous sommes sûrs que vous pourrez trouver quelque chose d'encore plus cool et tout aussi fonctionnel que notre exemple ci-dessus.

Si vous faites une erreur, vous pouvez toujours l'annuler en utilisant le bouton _Réinitialiser_. Si vous êtes vraiment bloqué, appuyez sur le bouton _Afficher la solution_ pour insérer l'exemple que nous avons montré ci-dessus.

```html hidden
<div class="body-wrapper" style="font-family: 'Open Sans Light',Helvetica,Arial,sans-serif;">
  <h2>Zone de saisie HTML</h2>
  <textarea id="code" class="html-input" style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"><p>Il y a plusieurs navigateurs disponibles, tels que <a href="#">Mozilla
 Firefox</a>, <a href="#">Google Chrome</a>, et
<a href="#">Microsoft Edge</a>.</p></textarea>

  <h2>Zone de saisie de la CSS</h2>
  <textarea id="code" class="css-input" style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;">a {

}

a:link {

}

a:visited {

}

a:focus {

}

a:hover {

}

a:active {

}</textarea>

  <h2>Zone de rendu</h2>
  <div class="output" style="width: 90%;height: 10em;padding: 10px;border: 1px solid #0095dd;"></div>
  <div class="controls">
    <input id="reset" type="button" value="Réinitialiser" style="margin: 10px 10px 0 0;">
    <input id="solution" type="button" value="Voir la solution" style="margin: 10px 0 0 10px;">
  </div>
</div>
```

```js hidden
var htmlInput = document.querySelector(".html-input");
var cssInput = document.querySelector(".css-input");
var reset = document.getElementById("reset");
var htmlCode = htmlInput.value;
var cssCode = cssInput.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

var styleElem = document.createElement('style');
var headElem = document.querySelector('head');
headElem.appendChild(styleElem);

function drawOutput() {
  output.innerHTML = htmlInput.value;
  styleElem.textContent = cssInput.value;
}

reset.addEventListener("click", function() {
  htmlInput.value = htmlCode;
  cssInput.value = cssCode;
  drawOutput();
});

solution.addEventListener("click", function() {
  htmlInput.value = htmlCode;
  cssInput.value = 'p {\n font-size: 1.2rem;\n font-family: sans-serif;\n line-height: 1.4;\n}\n\na {\n outline: none;\n text-decoration: none;\n padding: 2px 1px 0;\n}\n\na:link {\n color: #265301;\n}\n\na:visited {\n color: #437A16;\n}\n\na:focus {\n border-bottom: 1px solid;\n background: #BAE498;\n}\n\na:hover {\n border-bottom: 1px solid;\n background: #CDFEAA;\n}\n\na:active {\n background: #265301;\n color: #CDFEAA;\n}';
  drawOutput();
});

htmlInput.addEventListener("input", drawOutput);
cssInput.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('', 700, 800) }}

## Inclusion d'icônes dans des liens

Une pratique courante consiste à inclure des icônes dans des liens pour fournir plus d'un indicateur concernant le type de contenu vers lequel le lien pointe. Regardons un exemple très simple qui ajoute une icône à des liens externes (les liens qui mènent à d'autres sites). Une telle icône ressemble généralement à une petite flèche pointant hors d'une boîte ; pour cet exemple, nous allons utiliser [cet excellent exemple de icons8.com](https://icons8.com/web-app/741/external-link).

Regardons un peu d'HTML et de CSS qui nous donneront l'effet que nous voulons. Tout d'abord, un peu d'HTML simple à mettre en forme :

```html
<p>Pour davantage d'information sur la météo, visitez notre <a href="http://#">page météo</a>,
jetez un œil sur <a href="http://#">météo sur Wikipedia</a>, ou regardez la <a href="http://#">météo sur Science Extrême </a>.</p>
```

Ensuite, le CSS:

```css
body {
  width: 300px;
  margin: 0 auto;
  font-family: sans-serif;
}

p {
  line-height: 1.4;
}

a {
  outline: none;
  text-decoration: none;
  padding: 2px 1px 0;
}

a:link {
  color: blue;
}

a:visited {
  color: purple;
}

a:focus, a:hover {
  border-bottom: 1px solid;
}

a:active {
  color: red;
}

a[href*="http"] {
  background: url('external-link-52.png') no-repeat 100% 0;
  background-size: 16px 16px;
  padding-right: 19px;
}
```

{{ EmbedLiveSample("", '100%', 150) }}

Alors, qu'est-ce qui se passe ici ? Nous allons sauter le gros du CSS, du fait que c'est seulement la même information que celle que vous avez déjà regardée. La dernière règle est cependant intéressante : ici, nous insérons une image d'arrière-plan personnalisée sur les liens externes d'une manière similaire à celle dont nous avons traité les puces personnalisées sur les éléments de liste dans le dernier article ; cette fois, nous utilisons le raccourci {{cssxref("background")}} au lieu des propriétés individuelles. Nous définissons le chemin vers l'image que nous voulons insérer, nous spécifions `no-repeat` de façon à obtenir l'insertion d'une seule une copie, puis nous indiquons la position comme étant 100% de la distance à droite du contenu du texte, et 0 pixels à partir du haut.

Nous utilisons également {{cssxref("background-size")}} pour indiquer à quelle taille nous voulons afficher l'image d'arrière-plan — il est utile d'avoir une icône plus grande et de la redimensionner comme nécessaire dans un but de conception web adaptative. Cela ne fonctionne cependant qu'avec IE 9 et ultérieur, donc si vous avez besoin de prendre en charge ces navigateurs plus anciens, il vous suffira de redimensionner l'image et de l'insérer telle quelle.

Enfin, nous avons mis un peu de {{cssxref("padding-right")}} sur les liens pour faire de la place afin que l'image d'arrière-plan se place à l'intérieur, de sorte que nous ne la faisions chevaucher le texte.

Un dernier mot : comment avons-nous sélectionné uniquement les liens externes ? Eh bien, si vous écrivez vos liens HTML correctement, vous ne devriez utiliser des URL absolues que pour les liens externes : il est plus efficace d'utiliser des liens relatifs pour la redirection vers d'autres parties de votre propre site. Le texte "http" ne devrait donc apparaître que dans les liens externes, et nous pouvons le sélectionner avec un [sélecteur d'attribut](/fr/docs/Learn/CSS/Building_blocks/Selectors#sélecteurs_dattribut) : `a[href*="http]` sélectionne les éléments {{htmlelement("a")}}, mais seulement s'ils ont un attribut {{htmlattrxref ("href","a")}} ayant une valeur contenant "http" quelque part à l'intérieur.

Alors voilà, essayez de revoir la section d'apprentissage actif ci-dessus et d'explorer cette nouvelle technique !

> **Note :** Ne vous inquiétez pas si vous n'êtes pas encore familier avec les [arrières-plans](/fr/docs/Learn/CSS/Building_blocks) et le [design adaptif _(responsive web design)_](/fr/docs/Web/Progressive_web_apps/Responsive/responsive_design_building_blocks) ; ceux-ci sont expliqués par ailleurs.

## Mise en forme de liens comme des boutons

Les outils que vous avez explorés jusqu'à présent dans cet article peuvent également être utilisés d'autres façons. Par exemple, des états tels que hover peuvent être utilisés pour mettre en forme de nombreux éléments différents, pas seulement des liens : vous pouvez définir l'état de survol des paragraphes, des éléments de liste ou d'autres choses.

En outre, les liens sont très couramment mis en forme de façon à ressembler et à se comporter comme des boutons dans certaines circonstances : un menu de navigation de site Web est généralement balisé comme une liste contenant des liens, et cela peut facilement être mis en forme pour ressembler à un ensemble de boutons de contrôle ou d'onglets qui fournissent à l'utilisateur un accès à d'autres parties du site. Voyons comment.

D'abord, un peu d'HTML :

```html
<ul>
  <li><a href="#">Accueil</a></li><li><a href="#">Pizza</a></li><li><a href="#">Musique</a></li><li><a href="#">Wombats</a></li><li><a href="#">Finland</a></li>
</ul>
```

Et maintenant, notre CSS :

```css
body,html {
  margin: 0;
  font-family: sans-serif;
}

ul {
  padding: 0;
  width: 100%;
}

li {
  display: inline;
}

a {
  outline: none;
  text-decoration: none;
  display: inline-block;
  width: 19.5%;
  margin-right: 0.625%;
  text-align: center;
  line-height: 3;
  color: black;
}

li:last-child a {
  margin-right: 0;
}

a:link, a:visited, a:focus {
  background: yellow;
}

a:hover {
  background: orange;
}

a:active {
  background: red;
  color: white;
}
```

Cela nous donne le résultat suivant :

{{ EmbedLiveSample('', '100%', 100) }}

Expliquons ce qui se passe ici, en nous concentrant sur les parties les plus intéressantes :

- Notre deuxième règle supprime le {{cssxref("padding")}} par défaut de l'élément {{htmlelement ("ul")}}, et définit sa largeur de façon à couvrir 100% du conteneur externe (le {{htmlelement("body")}} dans ce cas) ;
- Par défaut, les éléments {{htmlelement("li")}} se présentent normalement sous forme de blocs (voir les types de boîtes CSS pour rappel), ce qui signifie qu'ils vont se trouver sur leurs propres lignes ; dans ce cas, nous créons une liste horizontale de liens ; pour cela, dans la troisième règle, nous mettons la propriété {{cssxref("display")}} à inline, ce qui fait que les éléments de la liste se trouvent tous sur la même ligne : ils se comportent maintenant comme des éléments inline ;
- La quatrième règle, qui met en forme l'élément {{htmlelement("a")}}, est la plus compliquée ici ; passons-la en revue étape par étape :

  - Comme dans les exemples précédents, nous commençons par désactiver la valeur par défaut {{cssxref("text-decoration")}} et {{cssxref("outline")}} : nous ne voulons pas que ceux-ci gâchent notre présentation ;
  - Ensuite, nous mettons le {{cssxref ("display")}} à `inline-block` : les éléments {{htmlelement ("a")}} sont inline par défaut et, bien que nous ne voulions pas qu'ils s'étalent sur leurs propres lignes comme une valeur de `block` le ferait, nous voulons néanmoins être en mesure de les dimensionner : `inline-block` nous permet de le réaliser ;
  - Maintenant, passons au dimensionnement ; nous voulons remplir toute la largeur de l'{{htmlelement("ul")}}, laisser une petite marge entre chaque bouton (mais sans espace sur le bord droit), et nous avons 5 boutons pour accueillir tout cela, qui doit avoir la même taille ; pour ce faire, nous définissons la {{cssxref ("width")}} à 19,5%, et la {{cssxref ("margin-right")}} à 0,625% ; vous remarquerez que toute cette largeur s'élève à 100,625%, ce qui ferait que le dernier bouton déborde sur l'`<ul>` et passe à la ligne suivante ; cependant, nous le ramenons à 100%, en utilisant la règle suivante, qui sélectionne seulement le dernier `<a>` dans la liste, et en supprime la marge ; terminé !
  - Les trois dernières déclarations sont assez simples et ne sont principalement présentes qu'à des fins esthétiques ; nous centrons le texte à l'intérieur de chaque lien, nous définissons {{cssxref("line-height")}} à 3 pour donner un peu de hauteur aux boutons (ce qui a aussi l'avantage de centrer le texte verticalement) et nous définissons la couleur du texte à noir.

> **Note :** Vous avez peut-être remarqué que les éléments de la liste dans le HTML sont tous placés sur la même ligne ; cela est dû au fait que les espaces/sauts de ligne entre les éléments inline block créent des espaces sur la page, tout comme des espaces entre les mots, et que de tels espaces casseraient la disposition de notre menu de navigation horizontale ; nous avons donc supprimé les espaces ; vous pouvez trouver plus d'informations (et de solutions) à propos de ce problème sur [Fighting the space between inline block elements](https://css-tricks.com/fighting-the-space-between-inline-block-elements/).

## Résumé

Nous espérons que cet article vous a fourni tout ce que vous aviez besoin de savoir sur les liens — pour l'instant ! L'article final de notre module de Mise en forme de texte détaille comment utiliser des polices personnalisées (ou polices web, comme elles sont mieux connues) sur vos sites web.

{{PreviousMenuNext("Learn/CSS/Styling_text/Styling_lists", "Learn/CSS/Styling_text/Web_fonts", "Learn/CSS/Styling_text")}}

## Dans ce module

- [Initiation à la mise en forme du texte](/fr/docs/Learn/CSS/Styling_text/Fundamentals)
- [Style de listes](/fr/docs/Learn/CSS/Styling_text/Styling_lists)
- [Mise en forme des liens](/fr/docs/Learn/CSS/Styling_text/Styling_links)
- [Polices de caractères web](/fr/docs/Learn/CSS/Styling_text/Web_fonts)
- [Composition d'une page d'accueil d'une école communale](/fr/docs/Learn/CSS/Styling_text/Typesetting_a_homepage)
