---
title: Mise en forme des formulaires HTML
slug: Learn/Forms/Styling_web_forms
tags:
  - CSS
  - Exemple
  - Formulaires
  - Guide
  - HTML
  - Intermédiaire
  - Web
translation_of: Learn/Forms/Styling_web_forms
original_slug: Web/Guide/HTML/Formulaires/Apparence_des_formulaires_HTML
---
{{LearnSidebar}}{{PreviousMenuNext("Web/Guide/HTML/Formulaires/HTML_forms_in_legacy_browsers", "Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms", "Web/Guide/HTML/Formulaires")}}

> Dans cet article, nous allons apprendre comment utiliser [les CSS](/fr/docs/CSS "/fr/docs/CSS") avec les formulaires [HTML](/fr/docs/HTML "/fr/docs/HTML") pour (espérons-le) améliorer leur apparence. Étonnamment, ceci peut être délicat. Pour des raisons techniques et historiques, les widgets de formulaires ne s'allient pas très bien avec CSS. À cause de ces difficultés, de nombreux développeurs préfèrent [construire leurs propres widgets HTML](/fr/docs/Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés "/fr/docs/HTML/Formulaires/Comment_créer_des_blocs_de_formulaires_personnalisés") pour avoir plus de maîtrise sur leur apparence. Toutefois, avec les navigateurs modernes, les web designers ont de plus en plus d'emprise sur l'apparence de leurs formulaires. Voyons cela de plus près.

## Pourquoi est-ce si difficile de modifier l'apparence des formulaires avec CSS ?

Dans la jeunesse du Web — aux alentours de 1995 — les formulaires ont été ajoutés au HTML dans la [spécification HTML 2](http://www.ietf.org/rfc/rfc1866.txt). À cause de la complexité des formulaires, ceux qui les mettaient en œuvre ont préféré s'appuyer sur le système d'exploitation sous‑jacent pour les gérer et les afficher.

Quelques années plus tard, les CSS ont été créées et ce qui était une nécessité technique — c'est-à-dire, utiliser des widgets natifs pour les contrôles de formulaire — est devenu un préalable stylistique. Dans la jeunesse des CSS, l'apparence des formulaires n'était pas une priorité.

Comme les utilisateurs étaient habitués à l'apparence visuelle de leurs plateformes respectives, les fournisseurs de navigateurs étaient réticents à rendre possible la modification de l'apparence des formulaires. Et pour être honnête, il est toujours extrêmement difficile de reconstruire tous les contrôles pour que leur apparence soit modifiable.

Même aujourd'hui, aucun des navigateurs n'a entièrement mis en œuvre les CSS 2.1. Avec le temps, les fournisseurs de navigateurs ont toutefois amélioré la compatibilité des CSS avec les éléments de formulaires, et bien que ce soit de mauvaise réputation pour leur utilisation, vous pouvez désormais modifier l'apparence des [formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires "/fr/docs/HTML/Formulaires").

### Tous les widgets ne sont pas égaux devant les CSS

Actuellement, quelques difficultés subsistent dans l'utilisation des CSS avec les formulaires. Ces problèmes peuvent être classés en trois catégories.

#### Le bon

L'apparence de certains éléments peut être modifiée sans poser beaucoup de problèmes suivant les diverses plateformes. Ceci inclut les éléments structurels suivants :

1.  {{HTMLElement("form")}}
2.  {{HTMLElement("fieldset")}}
3.  {{HTMLElement("label")}}
4.  {{HTMLElement("output")}}

Ceci inclut aussi tous les widgets de champs textuels (qu'ils soient mono ou multi‑lignes), ainsi que les boutons.

#### La brute

L'apparence de certains éléments ne peut être modifiée que rarement et peut nécessiter quelques astuces complexes, et parfois une connaissance avancée des CSS3.

Ceci inclut l'élément {{HTMLElement("legend")}}. Ce dernier ne peut pas être positionné correctement sur toutes les plateformes. De plus, l'apparence des cases à cocher et des boutons radio ne peut pas être modifiée directement. Toutefois, grâce à CSS3 c'est possible de contourner cette limitation. L'apparence du contenu {{htmlattrxref("placeholder", "input")}} ne peut pas être modifiée d'une manière standard. Mais tous les navigateurs qui sont compatible avec cet attribut ont aussi implémenté des pseudo-classes ou pseudo-élément propriétaires qui permettent de modifier son apparence.

Nous allons voir comment gérer ces cas particuliers dans l'article [Apparence avancée des formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms "/fr/docs/HTML/Formulaires/Apparence_avancée_des_formulaires_HTML").

#### Le truand

L'apparence de certains éléments n'est tout bonnement pas modifiable en utilisant les CSS. Ceci inclut toutes les interfaces avancées comme les intervalles, la sélection de couleur ou de date ainsi que les éléments déroulants, y compris les éléments {{HTMLElement("select")}}, {{HTMLElement("option")}}, {{HTMLElement("optgroup")}} et {{HTMLElement("datalist")}}. La sélection de fichiers est aussi connue pour ne pas pouvoir changer d'apparence. Les nouveaux éléments {{HTMLElement("progress")}} et {{HTMLElement("meter")}} font aussi partie de cette catégorie.

Le principal problème avec tous ces widgets vient du fait que leur structure est très complexe et les CSS n'ont pas assez d'expressions pour décrire et modifier l'apparence des éléments. Si vous souhaitez modifier l'apparence des widgets vous devez utiliser JavaScript pour construire une arborescence DOM qui vous permet de modifier l'apparence. Nous explorons cette possibilité dans l'article [Comment créer des widgets de formulaire personnalisés](/fr/docs/Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés "/fr/docs/HTML/Formulaires/Comment_créer_des_blocs_de_formulaires_personnalisés").

## Compositions stylistiques de base

Pour changer l'apparence [des éléments facilement modifiables](/fr/docs/HTML/Formulaires/Apparence_des_formulaires_HTML#Le_bon "/fr/docs/HTML/Formulaires/Apparence_des_formulaires_HTML#Le_bon") avec les CSS, vous ne devriez pas rencontrer de problèmes, puisqu'ils se comportent comme n'importe quel autre élément HTML. Toutefois, les feuilles de style peuvent ne pas être cohérentes entre navigateurs, il y a donc un certain nombre d'astuces à connaître.

### Champs de recherche

Les boîtes de recherche sont le seul type de champ textuel dont l'apparence peut être un peu complexe à modifier. Sur les navigateurs utilisant WebKit (Chrome, Safari, etc.) vous devrez utiliser la propriété CSS propriétaire `-webkit-appearance`. Nous allons aborder le sujet plus en détails dans dans l'article : [Apparence avancée des formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms "/fr/docs/Apparence_avancée_des_formulaires_HTML").

#### Exemple

```html
<form>
  <input type="search">
</form>
```

```css
input[type=search] {
  border: 1px dotted #999;
  border-radius: 0;

  -webkit-appearance: none;
}
```

![This is a screenshot of a search filed on Chrome, with and without the use of -webkit-appearance](search-chrome-macos.png)

Comme vous pouvez le voir sur la capture d'écran pour Chrome, les deux champs ont une bordure, mais le premier champ n'utilise pas la propriété `-webkit-appearance` tandis que le second a recours à la propriété `-webkit-appearance:none`. La différence est notable.

### Texte et polices de caractères

Les fonctionnalités liées au texte et aux polices de caractères dans les CSS peuvent être utilisées facilement avec n'importe quel widget (et oui, vous pouvez utiliser {{cssxref("@font-face")}} avec les formulaires). Toutefois, le comportement des navigateurs est souvent incompatible. Par défaut, certains éléments comme {{cssxref("font-family")}} {{cssxref("font-size")}} n'héritent pas de leurs parents. De nombreux navigateurs utilisent les valeurs du système d'exploitation. Pour que l'apparence des formulaires soit cohérente avec le reste de votre contenu, vous pouvez ajouter les règles suivantes à votre feuille de style :

```css
button, input, select, textarea {
  font-family : inherit;
  font-size   : 100%;
}
```

La capture d'écran ci-dessous montre les différences. Sur la gauche il y a l'affichage par défaut de Firefox pour Mac OS X, avec les réglages de police par défaut du système. Sur la droite, les mêmes éléments avec la règle d'harmonisation utilisée.

![This is a screenshot of the main form widgets on Firefox on Mac OSX, with and without font harmonization](font-firefox-macos.png)

Il existe un débat animé sur le fait qu'un formulaire ait une meilleure apparence en utilisant les valeurs par défaut du système d'exploitation ou en utilisant des valeurs unifiant l'apparence. C'est à vous de décider en tant que designer du site ou de l'application.

### Modèle de boîte

Tous les champs textuels sont compatibles avec les différentes propriétés du modèle de boîte CSS ({{cssxref("width")}}, {{cssxref("height")}}, {{cssxref("padding")}}, {{cssxref("margin")}} et {{cssxref("border")}}). Toutefois, comme précédemment les navigateurs s'appuient sur l'apparence par défaut du système d'exploitation. C'est votre décision de choisir si vous souhaitez intégrer vos formulaires à votre contenu du point de vue de l'apparence. Si vous souhaitez conserver l'apparence originale des blocs, vous aurez des difficultés à leur donner des dimensions cohérentes.

**Chacun des blocs a ses propres règles concernant les bordures, la marge intérieure (padding) et extérieure (margin).** Si vous souhaitez qu'ils aient tous la même dimension, vous devrez utiliser la propriété {{cssxref("box-sizing")}} :

```css
input, textarea, select, button {
  width : 150px;
  margin: 0;

  -webkit-box-sizing: border-box; /* Pour les anciennes versions des navigateurs WebKit */
     -moz-box-sizing: border-box; /* Pour tous les navigateurs Gecko */
          box-sizing: border-box;
}
```

![This is a screenshot of the main form widgets on Chrome on Windows 7, with and without the use of box-sizing.](size-chrome-win7.png)

Dans la capture d'écran ci-dessous, la colonne de gauche n'utilise pas {{cssxref("box-sizing")}}, alors que la colonne de droite utilise la propriété CSS `border-box`. Remarquez comment tous les éléments occupent le même espace, malgré les valeurs par défaut de la plateforme pour chacun des blocs.

### Positionnement

Le positionnement des formulaires HTML n'est pas un problème de manière générale. Seulement deux éléments nécessitent une attention particulière :

#### legend

L'apparence de l'élément {{HTMLElement("legend")}} est facile à modifier à l'exception de sa position. Dans chaque navigateur, l'élément {{HTMLElement("legend")}} est positionné au-dessus de la bordure supérieure de son élément {{HTMLElement("fieldset")}} parent. Il n'existe aucune manière de changer sa position dans le flux HTML. Vous pouvez toutefois le positionner de manière absolue ou relative en utilisant la propriété {{cssxref("position")}}, sinon, ce sera une partie de la bordure de l'élément `fieldset`.

Comme l'élément {{HTMLElement("legend")}} est très important pour des raisons d'accessibilité (nous parlerons des techniques pour l'assistance à propos de l'attribut  `label` de chaque élément de formulaire du `fieldset`), il est souvent associé à un intitulé, puis caché à l'accessibilité, comme ceci :

##### HTML

```html
<fieldset>
  <legend>Hi!</legend>
  <h1>Hello</h1>
</fieldset>
```

##### CSS

```css
legend {
  width: 1px;
  height: 1px;
  overflow: hidden;
}
```

#### textarea

Par défaut, tous les navigateurs considèrent l'élément {{HTMLElement("textarea")}} comme un bloc incorporé aligné sur la ligne du bas du texte. C'est rarement ce que nous souhaitons vraiment. Pour passer d`'inline-block` à `block`, il est assez facile d'utiliser la propriété {{cssxref("display")}}. Mais si vous voulez l'utiliser en ligne, il est courant de changer son alignement vertical :

```css
textarea {
  vertical-align: top;
}
```

## Exemple

Regardons sur un exemple concret la façon de composer un formulaire HTML. Cela aidera à clarifier nombre de ces concepts. Nous allons construire un formulaire de contact sous forme de « carte postale » :

![C'est ce que nous voulons réaliser avec le HTML et les CSS.](fr-carte.png)

### HTML

Le HTML n'est qu'à peine plus développé que celui de l'exemple du premier [article de ce guide](/fr/docs/Web/Guide/HTML/Formulaires/Mon_premier_formulaire_HTML "/en-US/docs/HTML/Forms/My_first_HTML_form") ; il ne comporte que quelques identifiants supplémentaires et un titre.

```html
<form>
  <h1>à: Mozilla</h1>

  <div id="from">
    <label for="name">de :</label>
    <input type="text" id="name" name="user_name">
  </div>

  <div id="reply">
    <label for="mail">répondre à :</label>
    <input type="email" id="mail" name="user_email">
  </div>

  <div id="message">
    <label for="msg">Votre message :</label>
    <textarea id="msg" name="user_message"></textarea>
  </div>

  <div class="button">
    <button type="submit">Poster le message</button>
  </div>
</form>
```

### Organiser les ressources

C'est ici que le « fun » commence ! Avant de commencer à coder, nous avons besoin de trois ressources supplémentaires :

1.  L'[image de fond](/files/4151/background.jpg "The postcard background") de la carte postale — téléchargez cette image et sauvegardez‑la dans le même répertoire que votre fichier HTML de travail.
2.  Une police de machine à écrire : [« Secret Typewriter » de fontsquirrel.com](http://www.fontsquirrel.com/fonts/Secret-Typewriter) — téléchargez le fichier TTF dans le même répertoire que ci‑dessus.
3.  Une police d'écriture manuelle : [«&nbsp;Journal&nbsp;» de fontsquirrel.com](http://www.fontsquirrel.com/fonts/Journal) — téléchargez le fichier TTF dans le même répertoire que ci‑dessus.



Les polices demandent un supplément de traitement avant de débuter :

1.  Allez sur le [Webfont Generator](https://www.fontsquirrel.com/tools/webfont-generator) de fontsquirrel.
2.  En utilisant le formulaire, téléversez les fichiers de polices et créez un kit de polices pou le Web. Téléchargez le kit sur votre ordinateur.
3.  Décompressez le fichier zip fourni.
4.  Dans le contenu décompressé vous trouverez deux fichiers `.woff` et deux fichiers `.woff2`. Copiez ces quatre fichiers dans un répertoire nommé `fonts`, dans le même répertoire que ci‑dessus. Nous utilisons deux fichiers différents pour maximiser la compatibilité avec les navigateurs ; voyez notre article sur les [Web fonts](/fr/docs/Learn/CSS/Styling_text/Web_fonts) pour des informations plus détaillées.

### Le CSS



Maintenant nous pouvons approfondir les CSS de l'exemple. Ajoutez tous les blocs de code affichés ci‑dessous dans un élément {{htmlelement("style")}}, l'un après l'autre.

D'abord, la préparation de base en définissant les règles de {{cssxref("@font-face")}} et les base des éléments {{HTMLElement("body")}} et {{HTMLElement("form")}}.

```css
@font-face{
  font-family : "handwriting";
  src: url('fonts/journal-webfont.woff2') format('woff2'),
       url('fonts/journal-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

@font-face{
  font-family : "typewriter";
  src: url('fonts/veteran_typewriter-webfont.woff2') format('woff2'),
       url('fonts/veteran_typewriter-webfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
}

body {
  font  : 21px sans-serif;

  padding : 2em;
  margin  : 0;

  background : #222;
}

form {
  position: relative;

  width  : 740px;
  height : 498px;
  margin : 0 auto;

  background: #FFF url(background.jpg);
}
```

Maintenant nous pouvons placer nos éléments, y compris le titre et tous les éléments du formulaire.

```css
h1 {
  position : absolute;
  left : 415px;
  top  : 185px;

  font : 1em "typewriter", sans-serif;
}

#from {
  position: absolute;
  left : 398px;
  top  : 235px;
}

#reply {
  position: absolute;
  left : 390px;
  top  : 285px;
}

#message {
  position: absolute;
  left : 20px;
  top  : 70px;
}
```

C'est là que nous commençons à travailler sur les éléments du formulaire eux-mêmes. Tout d'abord, assurons-nous que l'élément {{HTMLElement("label")}} est doté de la bonne police de caractères.

```css
label {
  font : .8em "typewriter", sans-serif;
}
```

Les champs texte nécessitent quelques règles courantes. Mettons‑les simplement, nous supprimons {{cssxref("border","borders")}} et {{cssxref("background","backgrounds")}} et redéfinissons {{cssxref("padding")}} et {{cssxref("margin")}}.

```css
input, textarea {
  font    : .9em/1.5em "handwriting", sans-serif;

  border  : none;
  padding : 0 10px;
  margin  : 0;
  width   : 240px;

  background: none;
}
```

Lorsque l'un de ces champs reçoit le focus, nous le mettons en évidence avec un fond gris clair et transparent. Notez qu'il est important d'ajouter la propriété {{cssxref("outline")}} pour supprimer le focus par défaut ajouté par certains navigateurs.

```css
input:focus, textarea:focus {
  background   : rgba(0,0,0,.1);
  border-radius: 5px;
  outline      : none;
}
```

Maintenant que nos champs texte sont terminés, nous devons ajuster l'affichage de ceux à une et ceux à plusieurs lignes pour qu'ils correspondent, car ils ne sont généralement pas du tout identiques par défaut.

Le champ texte à une seule ligne a besoin de quelques ajustements pour un bon rendu dans Internet Explorer. Internet Explorer ne définit pas la hauteur des champs en fonction de la hauteur naturelle de la police (qui est le comportement de tous les autres navigateurs). Pour résoudre ce problème, nous devons ajouter une hauteur explicite au champ, comme suit :

```css
input {
    height: 2.5em; /* pour IE */
    vertical-align: middle; /* optionnel mais donne meilleur aspect pour IE */
}
```

Les éléments {{HTMLElement("textarea")}} sont rendus par défaut en tant qu'élément bloc. Les deux choses importantes ici sont les propriétés {{cssxref("resize")}} et {{cssxref("overflow")}}. Comme notre design est à taille fixe, nous utiliserons la propriété resize pour empêcher les utilisateurs de redimensionner le champ texte multiligne. La propriété {{cssxref("overflow")}} est utilisée pour rendre le champ plus cohérent d'un navigateur à l'autre ; certains navigateurs utilisent la valeur `auto` et d'autres la valeur par défaut pour `scroll` lorsqu'elle n'est pas précisée. Dans notre cas, il vaut mieux s'assurer que tout le monde utilise `auto`.

```css
textarea {
  display : block;

  padding : 10px;
  margin  : 10px 0 0 -10px;
  width   : 340px;
  height  : 360px;

  resize  : none;
  overflow: auto;
}
```

L'élément {{HTMLElement("button")}} est très accommodant avec les CSS ; vous faites ce que vous voulez, même en utilisant les [pseudo-elements](/fr/docs/CSS/Pseudo-elements "/en-US/docs/CSS/Pseudo-elements") !

```css
button {
  position     : absolute;
  left         : 440px;
  top          : 360px;

  padding      : 5px;

  font         : bold .6em sans-serif;
  border       : 2px solid #333;
  border-radius: 5px;
  background   : none;

  cursor       : pointer;

-webkit-transform: rotate(-1.5deg);
   -moz-transform: rotate(-1.5deg);
    -ms-transform: rotate(-1.5deg);
     -o-transform: rotate(-1.5deg);
        transform: rotate(-1.5deg);
}

button:after {
  content: " >>>";
}

button:hover,
button:focus {
  outline   : none;
  background: #000;
  color   : #FFF;
}
```

Et voilà ! (en français dans le texte)

> **Note :** si cet exemple ne fonctionne pas tout à fait comme vous l'attendez et que vous voulez vérifier votre version, vous la trouverez sur GitHub — voyez‑la [fonctionner en direct](https://mdn.github.io/learning-area/html/forms/postcard-example/) (et revoyez son [code source](https://github.com/mdn/learning-area/tree/master/html/forms/postcard-example)).

## Conclusion

Comme vous pouvez le voir, tant que nous voulons construire des formulaires avec seulement des champs de texte et des boutons, il est facile de les styliser à l'aide des CSS. Si vous voulez en savoir plus sur les petites astuces des CSS qui peuvent vous faciliter la vie lorsque vous travaillez avec des widgets de formulaire, jetez un coup d'oeil à la partie formulaire du [projet normalize.css](http://necolas.github.com/normalize.css).

Dans le [prochain article](/fr/docs/Web/Guide/HTML/Forms/Advanced_styling_for_HTML_forms), nous verrons comment gérer les widgets des catégories « brutes » et « truands ».

{{PreviousMenuNext("Web/Guide/HTML/Formulaires/HTML_forms_in_legacy_browsers", "Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms", "Web/Guide/HTML/Formulaires")}}

## Dans ce module

- [Mon premier formulaire HTML](/fr/docs/Web/Guide/HTML/Formulaires/Mon_premier_formulaire_HTML)
- [Comment structurer un formulaire HTML](/fr/docs/Web/Guide/HTML/Formulaires/Comment_structurer_un_formulaire_HTML)
- [Les widgets natifs pour formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Les_blocs_de_formulaires_natifs)
- [Envoi des données de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Envoyer_et_extraire_les_données_des_formulaires)
- [Validation des données de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Validation_donnees_formulaire)
- [Comment construire des widgets personnalisés pour formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Comment_construire_des_widgets_de_formulaires_personnalisés)
- [Envoi de formulaires à l'aide du JavaScript](/fr/docs/Web/Guide/HTML/Formulaires/Sending_forms_through_JavaScript)
- [Formulaires HTML dans les navigateurs anciens](/fr/docs/Web/Guide/HTML/Formulaires/HTML_forms_in_legacy_browsers)
- Mise en forme des formulaires HTML
- [Mise en forme avancée des formulaires HTML](/fr/docs/Web/Guide/HTML/Formulaires/Advanced_styling_for_HTML_forms)
- [Table de compatibilité des propriétés pour les widgets de formulaire](/fr/docs/Web/Guide/HTML/Formulaires/Property_compatibility_table_for_form_widgets)
