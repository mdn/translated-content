---
title: Gérer les problèmes courants en HTML et CSS
slug: Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS
tags:
  - Apprentissage
  - CSS
  - Débutant
  - HTML
  - Sélecteurs
  - linting
  - navigateur croisé
  - test
translation_of: Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS
original_slug: Learn/Tools_and_testing/Cross_browser_testing/HTML_et_CSS
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}

Maintenant que les bases sont posées, nous allons nous concentrer sur les problèmes courants en navigateur croisé que vous allez rencontrer en code HTML et CSS, et quels outils peuvent être utilisés pour prévenir l'arrivée de ces problèmes, ou résoudre les problèmes qui surviennent. Cela inclut le [linting code](https://stackoverflow.com/questions/8503559/what-is-linting), la gestion des préfixes CSS, l'utilisation des outils de dev des navigateurs pour localiser les problèmes, utiliser des [polyfills](/fr/docs/Glossaire/Polyfill) pour apporter du support dans les navigateurs, se confronter aux problèmes de responsive design et plus encore.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        <p>
          Connaissances avec le noyau des langages
          <a href="/fr/docs/Learn/HTML">HTML</a>,
          <a href="/fr/docs/Learn/CSS">CSS</a>, et
          <a href="/fr/docs/Learn/JavaScript">JavaScript</a> ; une idée du haut
          niveau des
          <a
            href="/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction"
            >principes du test en navigateur croisé</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        <p>
          Etre capable de diagnostiquer des problèmes courants de CSS et de HTML
          en navigateur croisé, et utiliser les techniques et outils appropriés
          pour les réparer.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Les difficultés avec HTML et CSS

Certains des problèmes avec le HTML et le CSS viennent du fait qu'ils sont tous les deux des langages qui sont assez simples, et souvent les développeurs ne les considèrent pas sérieusement, en termes de s'assurer que le code est bien conçu, efficace, et qu'il décrit sémantiquement les but de la fonctionnalité sur la page. Dans les pires des cas, Javascript est utilisé pour générer tout le contenu et le style d'une page web, ce qui rend vos pages inaccessibles, et moins performantes (générer des éléments de DOM est coûteux). Dans d'autres cas, des fonctionnalités naissantes ne sont pas supportées constamment par tous les navigateurs, ce qui peut empêcher certaines fonctionnalités et styles de fonctionner pour certains utilisateurs. Les problèmes de responsive design sont également courant — un site qui paraît bien sur le navigateur d'un ordinateur de bureau pourra fournir une expérience horrible sur un appareil mobile, à cause du contenu qui est trop petit pour être lu, ou peut-être que le site sera lent à cause de animations coûteuses.

Commençons et regardons comment nous pouvons réduire les erreurs en navigateur croisé issues du HTML/CSS.

## Commençons par le commencement : résoudre les problèmes généraux

Nous disions dans le [premier article de cette série](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction#Testingdiscovery) que c'était une bonne stratégie de commencer à tester sur une paire de navigateurs modernes sur desktop/mobile, afin de vous assurer que votre site fonctionne pour l'essentiel, avant de commencer à se concentrer sur les problèmes en navigateur croisé.

Dans nos articles [Debugging HTML](/fr/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML) et [Debugging CSS](/fr/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS), nous avancions quelques conseils très basiques sur le débogage HTML/CSS — si vous ne maîtrisez pas ces bases, vous devriez sans aucun doute aller étudier ces articles avant de continuer.

Il s'agit essentiellement de vérifier si votre code HTML et CSS est bien conçu et s'il ne contient aucune erreur de syntaxe.

> **Note :** Un problème fréquent avec le HTML et le CSS arrive quand différentes règles CSS commencent à entrer en conflit avec une autre. Cela peut être particulièrement problématique lorsque vous utilisez un bout de code tierce. Par exemple, vous pouvez utiliser un modèle CSS et remarquer qu'un des noms de classe qui est utilisé entre en conflit avec un que vous utilisez déjà dans un but différent. Ou vous pouvez trouver que du HTML généré par une API tierce (générateur de bannières publicitaires, par exemple) inclut un nom de classe ou d'ID que vous utilisez déjà dans un but différent. Afin de garantir que cela ne se produira pas, vous devez rechercher les outils que vous allez utiliser en premier et construire votre code en conséquence. Il convient également de relever les "[espace de noms](/fr/docs/Glossaire/Namespace)" en CSS, par ex. si vous avez un widget, assurez-vous qu'il a des classes distinctes, et ensuite commencez les sélecteurs qui sélectionnent les éléments à l'intérieur du widget avec cette classe, les conflits risqueront moins d'arriver. Par exemple `.audio-player ul a`.

### La validation

Pour le HTML, la validation implique de s'assurer que toutes vos balises sont correctement fermées et imbriquées, que vous utilisez un DOCTYPE, et que vous utilisez les balises à leur fin prévue. Une bonne stratégie est de valider régulièrement votre code. On service qui peut le faire est le W3C [Markup Validation Service](https://validator.w3.org/), qui vous permet de montrer votre code, et retourne une liste d'erreurs :

![The HTML validator homepage](validator.png)

Le CSS a une histoire semblable — vous devez vérifier que vos noms de propriétés sont correctement épelés, ques les valeurs des propriétés sont correctement épelées et qu'elles sont valides pour les propriétés auxquelles elles s'appliquent, que vous n'oubliez aucune accolades ouvrantes et fermantes. Les W3C a un [CSS Validator](http://jigsaw.w3.org/css-validator/) également disponible à cet effet.

### Les linters

Une autre bonne option à envisager est ce qu'on appelle les applications Linter, qui ne font pas que souligner les erreurs, mais peuvent aussi mettre en évidence des avertissements à propos des mauvaises pratiques dans votre CSS, et encore d'autres points. Les linters peuvent pour la plupart être configurés pour être plus strictes ou plus coulants dans leur rapport d'erreur/avertissement.

Il y a beaucoup d'applications linter en ligne, les meilleures d'entre elles sont probablement [Dirty Markup](https://www.dirtymarkup.com/) (HTML, CSS, JavaScript), et [CSS Lint](http://csslint.net/) (seulement CSS). Elles vous permettent de coller votre code dans une fenêtre, et mettront en évidence toutes les erreurs avec des croix, qui peuvent être survolées pour obtenir un message d'erreur décrivant le problème. Dirty Markup vous permet également de faire des fixs dans votre code en utilisant le bouton _Clean_.

![](dirty-markup.png)

Néanmoins, ce n'est pas très pratique de devoir copier et coller votre code dans une page web pour vérifier sa validité plusieurs fois. Ce dont vous avez vraiment besoin c'est d'un linter qui s'installera dans votre espace de travail standard avec le minimum de prise de tête.

La plupart des éditeurs de code ont leur plugins linter. Par exemple, l'éditeur de code [Atom](https://atom.io/) de Github possède un riche écosystème de plugins disponibles, avec beaucoup d'options de linting. Voici un exemple pour vous montrer comment un plugin marche généralement :

1.  Installer Atom (si vous n'avez pas déjà une version à jour installée) — télécharger-le depuis la page Atom indiquée plus haut.
2.  Aller dans la boîte de dialogue _Préférences..._ d'Atom (par ex. en sélectionnant _Atom_ > _Préférences..._ sur Mac, ou _Fichier_ > _Préférences..._ sur Windows/Linux) et choisissez l'option _Installer_ dans le menu gauche.
3.  Dans le champs texte _Rechercher des packages_, taper "lint" et presser Entrer/Envoyer pour rechercher des packages liés au linting.
4.  Vous devriez voir un package appelé **lint** dans le haut de la liste. Installez celui-ci en premier (en utilisant le bouton _Installer_), comme les autres linters lui font appel pour fonctionner. Ensuite, installer le plugin **linter-csslint** pour le linting CSS, et le plugin **linter-tidy** pour le linting HTML.
5.  Une fois que les packages ont fini de s'installer, essayer de charger un fichier HTML et un fichier CSS : vous verrez plusieurs zones soulignées en vert (pour les avertissements) et des cercles rouges (pour les erreurs) à côté des numéros de ligne, et un panneau séparé en bas qui affiche les numéros de ligne, les messages d'erreur, et parfois qui vous suggère des valeur par défaut ou d'autres solutions.

![](atom-htmltidy.png)![](atom-csslint.png)

D'autres éditeurs populaires ont des packages de linting similaires. Voir, par exemple :

- [SublimeLinter](www.sublimelinter.com/) pour Sublime Text
- [Notepad++ linter](https://sourceforge.net/projects/notepad-linter/)

### Les outils de développement des navigateurs

Les outils de développement inclus dans la plupart des navigateurs fournissent également des outils pour traquer les erreurs, en particulier pour le CSS.

> **Note :** Les erreurs HTML n'ont pas tendance à se montrer facilement avec les outils de dev, étant donné que le navigateur va essayer de corriger en fermant automatiquement mal les balises ; le validateur W3C est la meilleure façon d'obtenir des erreurs HTML — voir [La validation](#la_validation) plus haut.

As an example, in Firefox the CSS inspector will show CSS declarations that aren't applied crossed out, with a warning triangle. Hovering the warning triangle will provide a descriptive error message:

![](css-message-devtools.png)

Les outils de dev des autres navigateurs ont des fonctionnalités semblables.

## Problèmes fréquents en navigateur croisé

Attaquons-nous maintenant à certains des problèmes HTML et CSS les plus courants en navigateur croisé. Les sujets principaux que nous allons aborder sont l'absence de support pour les fonctionnalités modernes, et les problèmes de mise en page.

### Les vieux navigateurs ne supportant pas les fonctionnalités récentes

C'est un problème courant, particulièrement lorsque vous devez supporter de vieux navigateurs (comme les anciennes versions d'IE) ou que vous utilisez des fonctionnalités qui sont implémentées en utilisant des préfixes CSS. En général, les fonctionnalités principales du HTML et du CSS (comme les éléments HTML basiques, les couleurs et styles de texte principaux de CSS) marchent sur la plupart des navigateurs que vous voulez supporter ; la majorité des problèmes sont découverts lorsque que vous commencez à vouloir utiliser des nouveautés comme [Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox), ou [HTML5 video/audio](/fr/docs/Web/Apps/Fundamentals/Audio_and_video_delivery), ou encore plus récent, [CSS Grids](/fr/docs/Learn/CSS/CSS_layout/Grids#Native_CSS_Grids_with_Grid_Layout) ou [-webkit-background-clip: text](/fr/docs/Learn/CSS/Styling_boxes/Advanced_box_effects#-webkit-background-clip_text).

Une fois que vous avez identifié une liste des potentielles technologies à problèmes que vous allez utiliser, c'est une bonne initiative des rechercher sur quels navigateurs elles sont supportées, et quelles techniques associées sont utiles. Voir [Trouver de l'aide](#trouver_de_laide) plus bas.

#### Comportement naturel du HTML

Certains problèmes peuvent être résolus, seulement en tirant parti des réactions naturelles du HTML/CSS.

Les éléments HTML non reconnus sont traités par les navigateurs comme des éléments inline anonymes (véritablement des éléments inline avec aucune valeur sémantiques, similaires aux éléments {{htmlelement("span")}} ). Vous pouvez toujours vous référez à eux avec leurs noms, et les styler avec du CSS, par exemple — vous avez juste besoin de vous assurer qu'ils se comportent comme vous le voulez, par exemple configurer `display: block;` sur tous les nouveaux éléments sémantiques (comme {{htmlelement("article")}}, {{htmlelement("aside")}}, etc.), mais seulement sur les vieilles versions d'IE qui ne les reconnaissent pas (donc, IE 8 et plus faible). De cette façon les nouveaux navigateurs peuvent juste utiliser le code normalement, mais les anciennes versions d'IE seront également capables de styler ces éléments.

> **Note :** Voir [Les commentaires conditionnels d'IE](#les_commentaires_conditionnels_die) pour une application efficace.

Des éléments HTML plus complexes comme [\<video>](/fr/docs/Web/HTML/Element/video), [\<audio>](/fr/docs/Web/HTML/Element/audio), et [\<canvas>](/fr/docs/Web/HTML/Element/canvas) (et encore d'autres) ont des mécanismes naturels pour que les recours soient ajoutés, qui se basent sur le même principe décrit plus haut. Vous pouvez ajouter un contenu de repli entre la balise ouvrante et fermante, et les navigateurs ne supportant pas la feature vont effectivement ignorer les éléments extérieurs et exécuter le contenu imbriqué.

Par exemple :

```html
<video id="video" controls preload="metadata" poster="img/poster.jpg">
  <source src="video/tears-of-steel-battle-clip-medium.mp4" type="video/mp4">
  <source src="video/tears-of-steel-battle-clip-medium.webm" type="video/webm">
  <source src="video/tears-of-steel-battle-clip-medium.ogg" type="video/ogg">
  <!-- Flash fallback -->
  <object type="application/x-shockwave-flash" data="flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4" width="1024" height="576">
     <param name="movie" value="flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />
     <param name="allowfullscreen" value="true" />
     <param name="wmode" value="transparent" />
     <param name="flashvars" value="controlbar=over&amp;image=img/poster.jpg&amp;file=flash-player.swf?videoUrl=video/tears-of-steel-battle-clip-medium.mp4" />
      <img alt="Tears of Steel poster image" src="img/poster.jpg" width="1024" height="428" title="No video playback possible, please download the video from the link below" />
  </object>
  <!-- Offer download -->
  <a href="video/tears-of-steel-battle-clip-medium.mp4">Download MP4</a>
</video>
```

Cette exemple (issu de [Creating a cross-browser video player](/fr/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/cross_browser_video_player)) n'inclut pas seulement un lecteur Flash de repli pour les anciennes versions d'IE, mais aussi un lien simple vous permettant de télécharger la vidéo si jamais le lecteur Flash ne fonctionne pas, finalement l'utilisateur peut toujours accéder à la vidéo.

> **Note :** les librairies tierces comme [Video.js](http://videojs.com/) et [JW Player](https://www.jwplayer.com/) utilisent ce type de mécanismes de recours pour fournir un support en navigateur croisé.

Les éléments des formulaire HTML5 présentent également des recours de qualités — HTML5 a introduit des types d'[`<input>`](/fr/docs/Web/HTML/Element/input) spéciaux pour insérer des informations spécifiques dans les formulaires, en particulier sur les plateformes mobiles, où fournir une insertion de données sans difficultés est primordiale pour l'expérience utilisateur. Supporter les plateformes apporte des widgets UI spéciaux lorsque ces types d'input sont utilisés, comme le widget calendrier pour entrer des dates.

L'exemple suivant montre des inputs date et time :

```html
<form>
  <div>
    <label for="date">Enter a date:</label>
    <input id="date" type="date">
  </div>
  <div>
    <label for="time">Enter a time:</label>
    <input id="time" type="time">
  </div>
</form>
```

##### Résultat

Le résultat de ce code est le suivant :

```css hidden
label {
        float: left;
        width: 30%;
        text-align: right;
      }

      input {
        float: right;
        width: 65%;
      }

      label, input {
        margin-bottom: 20px;
      }

      div {
        clear: both;
        margin: 10px;
      }

      body {
        width: 400px;
        margin: 0 auto;
      }
```

```html hidden
<form>
      <div>
        <label for="date">Enter a date:</label>
        <input id="date" type="date">
      </div>
      <div>
        <label for="time">Enter a time:</label>
        <input id="time" type="time">
      </div>
    </form>
```

{{ EmbedLiveSample('Résultat', '100%', 150) }}

> **Note :** Vous pouvez également le voir exécuté en direct depuis [forms-test.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/forms-test.html) sur GitHub (voir aussi le [code source](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/html-css/forms-test.html)).

Si vous consultez l'exemple sur un navigateur qui supporte les technologies récentes comme Android Chrome ou iOS Safari, vous verrez le widget/fonctionnalité spécial en action quand vous essaierai de saisir des données. Sur des plateformes non compatibles comme Firefox ou Internet Explorer, les inputs vont juste recourir à un input texte normal, finalement l'utilisateur peut toujours entrer des informations.

Note : Bien entendu, cela n'est pas une solution viable pour les besoins de votre projet — la différence dans une présentation visuelle n'est pas désirée, de plus c'est compliqué de garantir que la donnée qui a été inscrite est dans le format que vous voulez qu'elle soit. Pour les formulaires en navigateur croisé, il est préférable de se référer aux simples éléments de formulaire, ou utiliser les éléments avancés de formulaire de manière sélective uniquement sur les navigateurs qui les supportent, ou utiliser une librairie qui fournit des widget décents en navigateur croisé, comme [jQuery UI](http://jqueryui.com/) ou [Bootstrap datepicker](https://bootstrap-datepicker.readthedocs.io/en/latest/).

#### Comportement naturel du CSS

Le CSS est sans doute meilleur en solution de recours que le HTML. Si un navigateur rencontre une déclaration ou une règle qu'il ne comprend pas, il la passe complètement sans l'appliquer ou provoquer une erreur. Cela peut être frustrant pour vous et vos utilisateurs si de telles erreurs se glissent à travers le code en production, mais au moins cela veut dire que l'ensemble du site ne va pas crasher à cause d'une erreur, et si utilisé intelligemment vous pouvez vous en servir à votre avantage.

Observons un exemple — une simple boîte stylée avec du CSS, qui a certains styles apportés par différentes caractéristiques CSS3 :

![](blingy-button.png)

> **Note :** Vous pouvez également voir cet exemple exécuté en direct sur GitHub comme [button-with-fallback.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/html-css/button-with-fallback.html) (voir aussi le [code source](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/html-css/button-with-fallback.html)).

Le bouton a un nombre de déclarations qui le style, mais les deux qui nous intéressent le plus sont les suivantes :

```css
button {
  ...

  background-color: #ff0000;
  background-color: rgba(255,0,0,1);
  box-shadow: inset 1px 1px 3px rgba(255,255,255,0.4),
              inset -1px -1px 3px rgba(0,0,0,0.4);
}

button:hover {
  background-color: rgba(255,0,0,0.5);
}

button:active {
  box-shadow: inset 1px 1px 3px rgba(0,0,0,0.4),
              inset -1px -1px 3px rgba(255,255,255,0.4);
}
```

Ici on fournit un {{cssxref("background-color")}} [RGBA](</fr/docs/Web/CSS/color_value#rgba()>) qui modifie l'opacité au survol afin de donner à l'utilisateur l'information que le bouton est interactif, et une ombre {{cssxref("box-shadow")}} interne semi-transparente pour donner au bouton un peu de texture et de profondeur. Le problème est que les couleurs RGBA et les box shadows ne fonctionnent pas sur les versions d'IE plus vieilles que la 9 — dans les versions plus anciennes le background ne sera juste pas visible du tout et le texte sera illisible, pas bon du tout !

![](unreadable-button.png)

Pour résoudre ce problème, nous avons ajouté une deuxième déclaration `background-color`, qui précise juste une couleur hex — c'est un recours supporté par les vieux navigateurs, et agit en tant que solution de repli si les fonctionnalités belles et brillantes ne fonctionnent pas. Ce qui se passe c'est que le navigateur parcourant cette page applique pour commencer la première valeur `background-color` ; lorsqu'il sélectionne la deuxième déclaration `background-color`, il remplace la valeur initiale avec cette valeur s'il supporte les couleurs RGBA. S'il ne supporte pas, il ignorera juste toute la déclaration et continuera à avancer.

> **Note :** Il se produit la même chose pour les autres caractéristiques de CSS comme les blocs [media queries](/fr/docs/Web/CSS/Media_Queries/Using_media_queries), [`@font-face`](/fr/docs/Web/CSS/@font-face) et [`@supports`](/fr/docs/Web/CSS/@supports) — s'ils ne sont pas supportés, le navigateur va juste les ignorer.

#### Les commentaires conditionnels d'IE

Les commentaires conditionnels d'IE sont une propriété modifiée de la syntaxe des commentaires HTML, qui peuvent être utilisés pour appliquer du code HTML de manière sélective à différentes versions d'IE. Cela s'est avéré être un mécanisme très efficace pour résoudre les bugs en navigateur croisé. La syntaxe ressemble à ça :

```html
<!--[if lte IE 8]>
  <script src="ie-fix.js"></script>
  <link href="ie-fix.css" rel="stylesheet" type="text/css">
<![endif]-->
```

Ce block appliquera les CSS et Javascript spécifiques à IE uniquement si le navigateur qui affiche la page est IE 8 ou plus vieux. `lte` veux dire "moins que ou égal", mais vous pouvez aussi utiliser lt, gt, gte, `!` pour NOT, et d'autre syntaxe logique.

> **Note :** L'article [Internet Explorer Conditional Comments](https://www.sitepoint.com/web-foundations/internet-explorer-conditional-comments/) de Sitepoint apporte un tutoriel/référence utile pour les débutants qui explique la syntaxe des commentaires conditionnels en détail.

Comme vous pouvez le voir, c'est particulièrement utile pour appliquer des fixes aux vieilles versions d'IE. Le cas d'usage que nous avons mentionné plus tôt (rendre les éléments sémantiques modernes stylables sur les vieilles versions d'IE) peut être atteint facilement en utilisant des commentaires conditionnels, par exemple vous pouvez mettre quelque chose comme ça dans votre feuille de style IE :

```css
aside, main, article, section, nav, figure, figcaption {
  display: block;
}
```

Ce n'est cependant pas aussi simple — vous devez également créer une copie de chacun des éléments que vous voulez styler dans le DOM via Javascript, pour les rendre stylable ; c'est un peu bizarre, et nous ne vous ennuierons pas avec les détails ici. Par exemple :

```js
var asideElem = document.createElement('aside');
 ...
```

Cela paraît assez compliqué à gérer, mais heureusement il y a un {{glossary("polyfill")}} disponible qui fait les fixs nécessaires pour vous, et plus encore — voir [HTML5Shiv](https://github.com/aFarkas/html5shiv) pour tous les détails (voir [manual installation](https://github.com/aFarkas/html5shiv#installation) pour les usages les plus simples).

#### Support de sélecteur

Naturellement, aucune caractéristiques CSS ne s'appliquera si vous n'utilisez pas les bons [sélecteurs](/fr/docs/Learn/CSS/Introduction_to_CSS/Selectors) pour sélectionner l'élément que vous voulez styler ! Si vous écrivez juste mal un sélecteur alors le style ne sera juste pas celui attendu sur aucun navigateur, vous devez juste résoudre le problème et trouver ce qui ne va pas avec votre sélecteur. Nous trouvons utile d'inspecter l'élément que vous essayez de styler en utilisant l'outil de dev de votre navigateur, ensuite regarder l'arborescence du fil d'Ariane du DOM que les inspecteurs du DOM fournissent en général afin de voir si votre sélecteur est pertinent par rapport à ce fil d'Ariane.

Par exemple, dans l'outil de dev de Firefox, vous obtenez ce genre rendement en bas de l'inspecteur du DOM :

![](dom-breadcrumb-trail.png)

Si pour cet exemple vous essayez d'utiliser ce sélecteur, vous vous rendrez compte qu'il ne sélectionnera pas l'élément input comme désiré :

```css
form > #date
```

(L'input `date` du formulaire n'est pas directement dans le `<form>` ; vous feriez mieux d'utiliser un sélecteur descendant général plutôt qu'un sélecteur d'enfant).

Il y a néanmoins un autre problème qui apparaît sur les versions d'IE plus anciennes que la 9 c'est qu'il n'y a aucun nouveau sélecteur (principalement les pseudo-classes et les pseudo-éléments comme [`:nth-of-type`](/fr/docs/Web/CSS/:nth-of-type), [`:not`](/fr/docs/Web/CSS/:not), [`::selection`](/fr/docs/Web/CSS/::selection), etc.) qui marche. Si vous voulez les utiliser dans votre CSS et que vous devez supporter les anciennes versions d'IE, une bonne initiative et d'utiliser la librairie [Selectivizr](http://selectivizr.com/) de Keith Clark — c'est une petite librairie Javascript qui s'exécute au-dessus d'une librairie Javascript existante comme  [jQuery](http://jquery.com/) ou [MooTools](http://mootools.net/).

1.  Afin de tester cet exemple, faites une copie locale de [selectivizr-example-start.html](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/html-css/selectivizr-example-start.html). Si vous le regarder s'exécuter en direct, vous verrez qu'il contient deux paragraphes, dont l'un est stylé. Nous avons sélectionné le paragraphe avec `p:first-child`, qui ne fonctionne pas sur les anciennes versions d'IE.
2.  Maintenant télécharger [MooTools](http://mootools.net/) et [Selectivizr](http://selectivizr.com/), et placez-les dans le même répertoire que votre fichier HTML.
3.  Placer le code suivant dans la têtière de votre document HTML, juste avant la balise ouvrante `<style>` :

    ```html
    <script type="text/javascript" src="MooTools-Core-1.6.0.js"></script>
        <!--[if (gte IE 6)&(lte IE 8)]>
          <script type="text/javascript" src="selectivizr-min.js"></script>
        <![endif]-->
    ```

Si vous essayer d'exécuter cette page sur une vieille version d'IE, cela devrait bien fonctionner.

![](new-selector-ie7.png)

#### Gestion des préfixes CSS

Une autre source de problèmes arrive avec les préfixes CSS — ceux sont des mécanismes utilisés à la base pour permettre au navigateur d'implémenter leur propre version d'une fonctionnalité CSS (ou Javascript) tant que la technologie est en stade expérimentale, donc ils peuvent jouer avec et la finaliser sans entrer en conflit avec les implémentations des autres navigateurs, ou la dernière implémentation non-préfixée. Voici par exemple :

- Mozilla utilise `-moz-`
- Chrome/Opera/Safari utilise `-webkit-`
- Microsoft utilise `-ms-`

Voici quelques exemples :

```css
-webkit-transform: rotate(90deg);

background-image: -moz-linear-gradient(left,green,yellow);
background-image: -webkit-gradient(linear,left center,right center,from(green),to(yellow));
background-image: linear-gradient(to right,green,yellow);
```

La première ligne déclare une propriété {{cssxref("transform")}} avec un préfixe `-webkit-` — c'était nécessaire pour que la transformation fonctionne sur Chrome, etc jusqu'à ce que la fonctionnalité soit finalisée et beaucoup de navigateurs ont ajouté une version de la propriété sans préfixes (au moment de la rédaction, Chrome supportait les deux versions).

Les trois dernières images montrent trois versions différentes de la fonction [`linear-gradient()`](/fr/docs/Web/CSS/linear-gradient), qui est utilisée pour générer un dégradé linéaire dans la background d'un élément :

1.  La première a un préfixe `-moz-`, et montre une version plutôt ancienne de la syntaxe (Firefox)
2.  La seconde a un préfixe `-webkit-`, et montre encore une vieille version de la syntaxe de la propriété (également issue d'une vraiment vieille version du moteur Wekkit)
3.  La troisième n'a pas de préfixe, et montre la version finale de la syntaxe (inclue dans  [CSS Image Values and Replaced Content Module Level 3 spec](https://drafts.csswg.org/css-images-3/#linear-gradients), qui définit cette fonctionnalité).

Les fonctionnalités préfixées sont supposées ne jamais être utilisées dans des sites web en production — elles sont susceptibles de changer ou d'être supprimées sans avertissement, et causent des problèmes en navigateur croisé. C'est particulièrement un problème lorsque les développeurs décident de n'utiliser que la version `-webkit-` d'une propriété — ce qui veut dire que le site ne fonctionnera pas sur d'autres navigateurs. En fait, cela arrive tellement souvent que d'autres navigateurs ont commencé à implémenter les versions préfixées `-webkit-` de plusieurs propriétés CSS, ils marcheront donc avec un tel code. L'utilisation des préfixes fournit par chaque navigateur a récemment déclinée précisément à cause de ce type de problèmes, mais il en reste encore certain qui demandent de l'attention.

Si vous persistez a utiliser des fonctionnalités préfixées, assurez-vous d'utiliser les bonnes. Vous pouvez vérifier quels navigateurs ont besoin de préfixes sur les pages de référence MDN, et des sites comme [caniuse.com](http://caniuse.com/). Si vous doutez, vous pouvez aussi vérifier en faisant des tests directement sur les navigateurs.

Essayez cet exemple simple :

1.  Ouvrez google.com, ou un autre site qui a un en-tête proéminent ou un niveau de bloc d'élément.
2.  Clic droit sur l'élément en question et choisir Inspecter/Inspecter l'élément (ou qu'importe l'option de votre navigateur) — cela devrait ouvrir les outils de dev dans votre navigateur, avec l'élément mis en valeur dans l'inspecteur du DOM.
3.  Chercher une fonctionnalité que vous pouvez utiliser pour sélectionner cet élément. Par exemple, au moment de la rédaction, le logo principal de Google a un ID `hplogo`.
4.  Entreposer une référence à cet élément dans une variable, par exemple :

    ```js
    var test = document.getElementById('hplogo');
    ```

5.  Maintenant essayez d'appliquer une nouvelle valeur pour la propriété CSS qui vous intéresse sur cet élément ; vous pouvez le faire en utilisant la propriété [style](/fr/docs/Web/API/HTMLElement/style) de l'élément, par exemple essayez de taper ça dans votre console Javascript :
6.  ```js
    test.style.transform = 'rotate(90deg)'
    test.style.webkitTransform = 'rotate(90deg)'
    ```

Quand vous commencez à taper la transcription du nom de la propriété après le deuxième point (notez qu'en Javascript, les noms des propriétés CSS sont écrites en lower camel case, sans trait d'union), la console Javascript devrait commencer à saisir automatiquement les noms des propriétés qui existent dans le navigateur et qui correspondent au mieux avec ce que vous écrivez. C'est utile pour trouver quelles versions de la propriété est implémentée dans ce navigateur.

A l'heure où ces lignes sont écrites, Firefox et Chrome ont implémenté tous les deux les versions préfixées `-webkit-` et non préfixées de {{cssxref("transform")}} !

Une fois que vous avez trouvé quels préfixes vous avez besoin de supporter, vous devriez tous les inscrire dans votre CSS, par exemple :

```css
-ms-transform: rotate(90deg);
-webkit-transform: rotate(90deg);
transform: rotate(90deg);
```

Cela vous assurera que tous les navigateurs qui supportent n'importe laquelle des formes de la propriété ci-dessus pourront faire marcher la fonctionnalité. Il convient de placer la version non préfixée en dernier, parce qu'elle sera la version la plus récente, que vous voulez que les navigateurs utilisent si c'est possible. Si par exemple un navigateur implémente la version `-webkit-` et la version non préfixée, il va en premier temps appliquer la version `-webkit-`, puis la remplacer par la version non préfixée. Vous voulez que cela se produise dans ce sens, et non dans l'autre.

Bien entendu, appliquer cela à de nombreuses différentes règles CSS peut devenir très fastidieux. Il est préférable d'utiliser des outils d'automatisation qui le font pour vous. Et de tels outils existent :

La [prefix-free JavaScript library](http://leaverou.github.io/prefixfree/) peut être jointe à une page, et détectera automatiquement quels sont les aptitudes détenues par navigateurs en analysant la page et en ajoutant les préfixes appropriés. C'est très facile et pratique à utiliser, bien qu'il ait quelques inconvénients (voir le lien au-dessus pour plus de détails), et on peut discuter du fait qu'analyser chaque feuille de style de votre site et ajouter des préfixes lors de l'exécution peut être un fardeau pour la puissance de traitement de l'ordinateur pour un grand site.

Une autre solution est d'ajouter automatiquement les préfixes pendant le développement, et cela (et d'autres choses à venir) peut être fait en utilisant des outils comme [Autoprefixer](https://github.com/postcss/autoprefixer) et [PostCSS](http://postcss.org/). Ces outils peuvent être utilisés de diverses manières, par exemple Autoprefixer a une [version en ligne](http://autoprefixer.github.io/) qui vous permet d'entrer votre CSS non préfixé sur la gauche, et vous donne une version avec préfixes ajoutés sur la droite. Vous pouvez sélectionner quels navigateurs vous voulez afin de vous assurer de bien supporter en utilisant la notation définie dans [Autoprefixer options](https://github.com/postcss/autoprefixer#options)&nbsp;; pour plus de détails, voir aussi [Browserslist queries](https://github.com/ai/browserslist#queries), qui est basé dessus. Comme exemple, la requête suivante sélectionnera les deux dernières versions de tous le navigateurs principaux et les versions d'IE supérieure à la 9.

    last 2 versions, ie > 9

Autoprefixer peut aussi être utilisé dans d'autres cas, plus pratiques — voir [Autoprefixer usage](https://github.com/postcss/autoprefixer#usage). Par exemple vous pouvez l'utiliser avec un exécuteur de tâche/outil de build comme [Gulp](http://gulpjs.com/) ou [Webpack](https://webpack.github.io/) pour ajouter automatiquement les préfixes une fois que le développement a été fait. (Expliquer comment cela fonctionne est plutôt au-delà de la portée de cet article).

Vous pouvez également utiliser un plugin pour éditeur de texte comme Atom ou Sublime text. Par exemple, dans Atom :

1.  Vous pouvez l'installer en allant dans _Préférences_ > _Installer_, chercher _Autoprefixer_, puis cliquer sur installer.
2.  Vous pouvez configurer une requête navigateur en appuyant sur le bouton _Settings_ d'Autoprefixer et entrer la requête dans le champs texte de la section _Setting_ de la page.
3.  Dans votre code, vous pouvez sélectionner des sections de CSS auxquelles vous voulez ajouter des préfixes, ouvrez la palette de commande (_Cmd_/_Ctrl_ + _Shift_ + _P_), puis tapez Autoprefixer dedans et sélectionnez le résultat Autoprefixer qui auto complète.

En tant qu'exemple, nous avons entré le code suivant :

```css
body {
  display: flex;
}
```

Nous l'avons sélectionné et exécuté la commande Autoprefixer, et il l'a remplacé par ça :

```css
body {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
```

### Les problèmes de mise en page

Un autre problème qui peut survenir est la différence de mise en page entre les navigateurs. Historiquement c'était traité comme bien plus qu'un problème, mais ces derniers temps, avec les navigateurs modernes qui ont tendance à supporter le CSS plus systématiquement, les problèmes de mise en page ont plus tendance à être couramment associés avec :

- Le manque (ou différences dans) de support pour les dispositions modernes.
- Les dispositions qui ne paraissent pas bonnes sur les navigateurs mobiles (par ex. les problèmes en responsive design).

> **Note :** Historiquement les développeurs web étaient habitués à utiliser des fichiers CSS appelés resets, qui supprimaient tous les styles par défaut des navigateurs qui s'appliquaient au HTML, et ensuite appliquaient leurs propres styles pour tout le reste — c'était fait pour rendre le style sur un projet plus cohérent, et réduire les possibles problèmes en navigateur croisé, spécialement pour les choses issues de la mise en page. Toutefois, cela a récemment été défini comme exagéré. Le meilleur équivalent que nous avons de nos jours c'est le [normalize.css](https://necolas.github.io/normalize.css/), un peu de CSS propre qui style discrètement par-dessus le style par défaut des navigateurs afin de rendre les éléments plus cohérents et fixe quelques problèmes de disposition. Nous vous recommandons d'appliquer normalize.css sur toutes vos pages HTML.

> **Note :** Lorsque vous essayer de localiser un problème de disposition difficile, une bonne technique et d'ajouter une couleur éclatante {{cssxref("outline")}} sur l'élément dérangeant, ou sur tous les éléments à côté. Cela facilite la tâche pour voir où tous les éléments sont placés. Voir [Debug your CSS with outline visualizations](http://www.otsukare.info/2016/10/05/debugging-css "Permalink to Debug your CSS with outline visualizations.") pour plus de détails...

#### Support pour les nouvelles caractéristiques de disposition

La plupart du travail de mise en page sur le web aujourd'hui et réalisé en utilisant les [floats](/fr/docs/Learn/CSS/CSS_layout/Floats) — c'est parce que les floats sont bien supportés (depuis IE 4, bien qu'il y ait un certain nombre de bugs qui auront besoin d'être examinés si vous essayez de supporter IE aussi loin). Il n'y a néanmoins pas de véritables explications sur la mise en page — utiliser les floats comme nous les utilisons est un vrai hack — et ils ont de sérieuses limites (par ex. voir [Why Flexbox?](/fr/docs/Learn/CSS/CSS_layout/Flexbox#Why_Flexbox))

Plus récemment, des mécanismes dédiés à la disposition ont fait leur apparition, comme [Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox) et [CSS Grids](/fr/docs/Learn/CSS/CSS_layout/Grids#Native_CSS_Grids_with_Grid_Layout), qui rendent les tâches ordinaires de disposition bien plus simples et enlèvent les défauts. Ils ne sont cependant pas bien supportés dans les navigateurs :

- Les grilles CSS sont très récentes ; au moment de la rédaction, elles n'étaient [supportées](http://gridbyexample.com/browsers/) que par les toutes nouvelles versions des navigateurs modernes.
- Flexbox est [bien supportée](/fr/docs/Learn/CSS/CSS_layout/Flexbox#Cross_browser_compatibility) dans les navigateurs modernes, mais amène des problèmes dans les vieux navigateurs. IE9 ne le supporte pas du tout, et IE 10 et les vieilles versions d'iOS/desktop Safari supportent respectivement des vieilles versions incompatibles des spécifications de flexbox. Ceci amène à s'intéresser au jonglage des préfixes de navigateur si vous voulez essayer d'utiliser flexbox sur tous ces navigateurs (voir [Advanced Cross-Browser Flexbox](https://dev.opera.com/articles/advanced-cross-browser-flexbox/) pour vous faire une idée).

Les fonctionnalités de disposition ne sont pas aussi simples pour fournir des solutions de repli que de simples couleurs, ombres ou dégradés. Si les propriétés de disposition sont ignorées, la totalité de votre design sera réduit en pièces. De ce fait, vous devez utiliser une fonctionnalité de détection pour détecter si les navigateurs qui consultent votre site supportent ces caractéristiques de disposition, et appliquer différentes dispositions de manière sélective selon le résultat (nous couvrirons les fonctionnalités de détection dans un article à venir).

Par exemple, vous pourriez appliquer une disposition flexbox sur les navigateurs modernes, et aussi appliquer une disposition en float pour les plus vieux navigateurs qui ne supportent pas flexbox.

> **Note :** Il y a une fonctionnalité assez récente en CSS appelé [`@supports`](/fr/docs/Web/CSS/@supports), qui vous permet d'implémenter des tests de détection de fonctionnalités natives.

#### Les problèmes de responsive design

Le design responsive est la pratique de créer des dispositions web qui s'adaptent en fonction des facteurs de formes de l'appareil — par exemple différentes tailles d'écran, l'orientation (portait ou paysage), ou la résolution. Une disposition pour ordinateur de bureau par exemple paraîtra atroce lorsqu'elle sera affichée sur un appareil mobile, vous allez donc devoir fournir une disposition appropriée aux mobiles en utilisant les [media queries](/fr/docs/Web/CSS/Media_Queries), et assurez-vous qu'il est appliqué correctement en utilisant [viewport](/fr/docs/Mozilla/Mobile/Viewport_meta_tag). Vous pouvez trouver un bilan précis de telles pratiques dans [The building blocks of responsive design](/fr/docs/Web/Apps/Progressive/Responsive/responsive_design_building_blocks).

La résolution est également très préoccupante — par exemple, les appareils mobiles sont moins susceptibles d'avoir besoin de grosses images lourdes que des ordinateurs de bureau, et ont davantage tendance à avoir des connexions internet plus lentes et sans doute un échange de données coûteux qui gaspille la bande passante qui est un problème supplémentaire. De plus, certains appareils peuvent avoir une gamme de plusieurs résolutions, ce qui veut dire que des petites images peuvent s'afficher pixelisées. Il y a un nombre de techniques qui vous permette de travailler autour de tels problèmes, des simples [mobile first media queries](/fr/Apps/Progressive/Responsive/Mobile_first), aux plus complexes [responsive image techniques](/fr/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images#Resolution_switching_Different_sizes).

Une autre difficulté qui peut présenter des problèmes c'est le support des fonctionnalités par les navigateurs qui rendent les techniques suscitées possibles. Les media queries ne sont pas supportés sur IE 8 ou plus vieux, donc si vous voulez utiliser une disposition mobile en premier lieu puis une disposition pour ordinateur de bureau qui applique aux vieilles versions d'IE, vous devrez appliquer un media querie {{glossary("polyfill")}} à votre page, comme [css3-mediaqueries-js](https://code.google.com/archive/p/css3-mediaqueries-js/) ou [Respond.js](https://github.com/scottjehl/Respond).

## Trouver de l'aide

Il y bien d'autres problèmes que vous allez rencontrer avec le HTML et le CSS ; la chose la plus important à vraiment savoir est de comment trouver des solutions en ligne.

Parmi les meilleures sources d'information de support il y a Mozilla Developer Network (c'est où vous vous trouvez actuellement !), [stackoverflow.com](http://stackoverflow.com/) et [caniuse.com](http://caniuse.com/).

Pour utiliser le Mozilla Developer Network (MDN), la plupart des gens font une recherche de la technologie sur laquelle ils essayent de trouver des informations, et ajoutent le terme "mdn", par exemple "mdn HTML5 video". MDN contient plusieurs types de contenus utiles :

- Du contenu de référence sur le support navigateur pour les technologies web côté client, par ex. la [page de référence \<video>](/fr/docs/Web/HTML/Element/video).
- D'autres références de support, par ex. [Media formats supported by the HTML audio and video elements](/fr/docs/Web/HTML/Supported_media_formats).
- Des tutoriaux utiles qui résolvent des problèmes spécifiques, par exemple [Créer un lecteur vidéo en navigateur croisé](/fr/docs/Web/Apps/Fundamentals/Audio_and_video_delivery/cross_browser_video_player).

[caniuse.com](http://caniuse.com/) fournit des informations de support, tout au long avec des ressources externes. Par exemple, voir <http://caniuse.com/#search=video> (vous avez juste à entrer la fonctionnalité que vous recherchez dans la boîte de recherche)

[stackoverflow.com](http://stackoverflow.com/) (SO) est un forum en ligne où vous pouvez poser des questions et avez un ensemble de développeurs partageant leurs solutions, observez les commentaires passés, et aidez les autres développeurs. Nous vous conseillons de chercher et de regarder s'il existe déjà une réponse à votre question, avant de poster une nouvelle question. Par exemple, nous avons cherché pour "cross browser html5 video" sur SO, et très rapidement la solution [HTML5 Video with full cross browser compatibility](http://stackoverflow.com/questions/16212510/html5-video-with-full-cross-browser-compatibility) est remontée.

Par ailleurs, essayez de chercher votre moteur de recherche favori pour trouver une réponse à vos problèmes. C'est souvent utile de chercher les messages d'erreur spécifiques si vous en avez — d'autres développeurs seront susceptibles d'avoir les mêmes problèmes que vous

## Résumé

Vous devriez maintenant être familier avec les problèmes principaux en navigateur croisé avec HTML et CSS que vous rencontrerez en développement web, et comment faire pour les résoudre.

{{PreviousMenuNext("Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies","Learn/Tools_and_testing/Cross_browser_testing/JavaScript", "Learn/Tools_and_testing/Cross_browser_testing")}}

## Dans ce module

- [Introduction to cross browser testing](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Introduction)
- [Strategies for carrying out testing](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Testing_strategies)
- [Handling common HTML and CSS problems](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/HTML_and_CSS)
- [Handling common JavaScript problems](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/JavaScript)
- [Handling common accessibility problems](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility)
- [Implementing feature detection](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Feature_detection)
- [Introduction to automated testing](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Automated_testing)
- [Setting up your own test automation environment](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing/Your_own_automation_environment)
