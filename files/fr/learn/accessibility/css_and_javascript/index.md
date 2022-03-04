---
title: Meilleures pratiques d'accessibilité CSS et JavaScript
slug: Learn/Accessibility/CSS_and_JavaScript
tags:
  - Accessibilité
  - Apprendre
  - Article
  - CSS
  - Codage des scripts
  - Guide
  - JavaScript
  - contraste
  - couleur
  - discret
translation_of: Learn/Accessibility/CSS_and_JavaScript
original_slug: Apprendre/a11y/CSS_and_JavaScript
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/HTML","Learn/Accessibility/WAI-ARIA_basics", "Learn/Accessibility")}}

CSS et JavaScript, lorsqu'ils sont utilisés correctement, peuvent également permettre des expériences web accessibles... ou peuvent nuire considérablement à l'accessibilité s'ils sont mal utilisés. Cet article décrit certaines des meilleures pratiques CSS et JavaScript à prendre en compte pour garantir que même un contenu complexe soit aussi accessible que possible.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Connaissances informatiques de base, compréhension de base de HTML, CSS
        et JavaScript, et compréhension de
        <a href="/fr/docs/Apprendre/a11y/What_is_accessibility"
          >Qu'est ce que l'accessibilité ?</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Familiarisez-vous avec l’utilisation appropriée de CSS et de JavaScript
        dans vos documents Web afin d’optimiser l’accessibilité et de ne pas la
        compromettre.
      </td>
    </tr>
  </tbody>
</table>

## CSS et JavaScript, des technologies accessibles ?

CSS et JavaScript n’ont pas la même importance immédiate en matière d’accessibilité que le HTML, mais ils peuvent toujours aider ou nuire à l’accessibilité, en fonction de leur utilisation. En d'autres termes, il est important que vous preniez en compte certains conseils de meilleures pratiques pour vous assurer que votre utilisation de CSS et de JavaScript ne ruine pas l'accessibilité de vos documents.

## CSS

Commençons par regarder le CSS.

### Sémantique correcte et attentes de l'utilisateur

Il est possible d’utiliser CSS pour détourner l'apparence d'un élément HTML pour qu'il ressemble à un autre, mais cela ne veut pas dire que vous devriez le faire. Comme nous l’avons souvent mentionné dans notre article [HTML : une bonne base pour l'accessibilité](/fr/docs/Apprendre/a11y/HTML), vous devez utiliser, dans la mesure du possible, l’élément sémantique approprié. Sinon, cela peut créer de la confusion et des difficultés d'usage pour tout le monde, plus particulièrement pour les utilisateurs handicapés. L'utilisation de la sémantique correcte a beaucoup à voir avec les attentes des utilisateurs  — les éléments ont une apparence et un comportement particuliers, en fonction de leurs fonctionnalités, et ces conventions communes sont attendues par les utilisateurs.

Par exemple, un utilisateur de lecteur d'écran ne peut pas naviguer dans une page via des éléments d'en-tête si le développeur n'a pas utilisé les éléments d'en-tête de manière appropriée pour annoter le contenu. De la même manière, un en-tête perd son utilité visuelle si vous le stylisez de sorte qu'il ne ressemble pas à un en-tête.

La règle de base est la suivante : adaptez les styles et les comportements à votre conception sans rompre les habitudes utilisateur qui permettent une expérience intuitive. Les sections suivantes résument les principales fonctionnalités HTML à prendre en compte.

#### Structure du contenu du texte "standard"

Titres, paragraphes, listes — le contenu de texte de base de votre page :

```html
<h1>En-têtes</h1>

<p>paragraphes</p>

<ul>
  <li>Ma liste</li>
  <li>a deux éléments.</li>
</ul>
```

Quelques styles CSS typiques pourraient ressembler à ceci :

```css
h1 {
  font-size: 5rem;
}

p, li {
  line-height: 1.5;
  font-size: 1.6rem;
}
```

Vous devriez :

- Sélectionnez une taille de police, une hauteur de ligne, un espacement interlettres, etc. raisonnables pour que votre texte soit logique, lisible et agréable à lire.
- Le style par défaut pour les titres, dans une taille plus grande et en gras les distingue du texte principal.
- Vos listes devraient ressembler à des listes.
- La couleur du texte doit présenter un contraste suffisant avec la couleur de fond.

Voir [Fondamentaux du texte HTML](/fr/docs/Apprendre/HTML/Introduction_à_HTML/HTML_text_fundamentals) et [Introduction au style de texte](/fr/docs/Learn/CSS/Styling_text) pour plus d'informations.

#### Texte mis en emphase

On met en avant une portion de texte grâce au balises *inline* `<em>` :

```html
<p> L'eau est <em> très chaude </em>.</p>

<p> Les gouttelettes d’eau accumulées sur les surfaces s’appellent  <strong>condensation</strong>.</p>
```

Vous voudrez peut-être ajouter quelques couleurs simples à votre texte mis en importance :

```css
strong, em {
  color: #a60000;
}
```

Cependant, vous aurez rarement besoin de styliser des éléments d’emphase de manière significative. Les conventions standard de texte en gras () et en italique (emphase) sont très reconnaissables, et le changement de style peut être source de confusion. Pour mettre des contenus en avant de manière efficace, voir [Fondamentaux du texte HTML](/fr/docs/Apprendre/HTML/Introduction_à_HTML/HTML_text_fundamentals#Emphasis_and_importance).

#### Les abréviations

Un élément permettant d'associer une abréviation, un acronyme ou un sigle à sa forme développée :

```html
<p> Le contenu web est marqué à l'aide de  <abbr title="Hypertext Markup Language">HTML</abbr>.</p>
```

Encore une fois, vous voudrez peut-être appliquer une mise en forme simple sur ces éléments :

```css
abbr {
  color: #a60000;
}
```

Par convention, on souligne en pointillés les abréviations et il n’est pas judicieux de s’écarter significativement cette règle reconnue. Pour plus d'informations sur les abréviations, voir [Abréviations](/fr/docs/Apprendre/HTML/Introduction_à_HTML/formatage-avance-texte#Abbreviations).

#### Liens

Hyperliens  la façon dont vous accédez à de nouveaux endroits sur le Web :

```html
<p> Visiter la  <a href="https://www.mozilla.org"> Page d'accueil de Mozilla </a>.</p>
```

Un style de lien très simple est présenté ci-dessous :

```css
a {
  color: #ff0000;
}

a:hover, a:visited, a:focus {
  color: #a60000;
  text-decoration: none;
}

a:active {
  color: #000000;
  background-color: #a60000;
}
```

Les conventions de style sur les liens sont le soulignement et une couleur différente (par défaut : bleu) dans leur état normal (non visité) de celle utilisée lorsque le lien a déjà été visité (par défaut : violet) et de celle utilisée lorsque le lien est activé (par défaut : rouge). De plus, le pointeur de la souris se change en icône de pointeur lorsque les liens sont déplacés, et le lien reçoit une surbrillance lorsqu'il est ciblé (par exemple, via une tabulation) ou activé. L'image suivante montre la surbrillance dans Firefox (contour en pointillé) et Chrome (contour bleu) :

![](focus-highlight-firefox.png)

![](focus-highlight-chrome.png)

Vous pouvez faire preuve de créativité avec les styles de lien, tant que vous continuez à donner aux utilisateurs des informations visuelles en retour lorsqu'ils interagissent avec les liens. Quelque chose doit effectivement se produire pour signaler les changements d'états d'un lien, et vous ne devriez pas vous débarrasser du curseur de pointeur ou du contour — ces deux outils sont des aides très importantes pour l'accessibilité pour ceux qui utilisent les contrôles du clavier.

#### Éléments form

Éléments permettant aux utilisateurs de saisir des données sur des sites web :

```html
<div>
  <label for="name">Entrez votre nom</label>
  <input type="text" id="name" name="name">
</div>
```

Vous pouvez voir de bons exemples de CSS dans notre exemple [form-css.html](https://github.com/mdn/learning-area/blob/master/accessibility/css/form-css.html) et ([en direct](https://mdn.github.io/learning-area/accessibility/css/form-css.html)).

La plupart du CSS que vous rédigerez pour les formulaires servira à dimensionner les éléments, à aligner les étiquettes et les entrées, et à leur donner une apparence nette et ordonnée.

Toutefois, vous ne devriez pas trop vous écarter des indications visuelles classiques qui signalent qu'un élément du formulaire est ciblé, c'est fondamentalement la même chose que pour les liens (voir ci-dessus). Vous pouvez mettre en forme les états ciblé / survolé du formulaire pour rendre ce comportement plus cohérent sur les navigateurs ou pour obtenir une meilleure intégration au design de votre page, mais ne vous en débarrassez pas complètement. Là encore, les utilisateurs s’appuient sur ces indices pour comprendre ce qui se passe.

#### Tableaux

Tableaux pour la présentation des données tabulées.

Vous pouvez voir un bon exemple simple de  [table-css.html](https://github.com/mdn/learning-area/blob/master/accessibility/css/table-css.html) et ([en direct](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

En appliquant les propriétés du module CSS des tableaux, vous pourrez adapter les tables HTML à votre design avec une apparence pas trop affreuse. Il est judicieux de vous assurer que les en-têtes de table se démarquent (normalement en gras), et de zébrer les lignes via le pseudo-sélecteur `:nth-child(n)` pour faciliter la lecture.

### Couleur et contraste de couleur

Lorsque vous choisissez un jeu de couleurs pour votre site web, assurez-vous que la couleur du texte contraste bien avec la couleur de fond. Votre design peut sembler agréable, mais cela n’est pas bon si les personnes malvoyantes, par exemple atteintes de daltonisme, ne peuvent pas lire votre contenu.

Il existe un moyen simple de vérifier si votre contraste est suffisamment important pour ne pas causer de problèmes. Il existe un certain nombre d’outils de vérification du contraste en ligne dans lesquels vous pouvez entrer vos couleurs de premier plan et d’arrière-plan afin de les vérifier. Par exemple, le [vérificateur de contraste de couleur](https://webaim.org/resources/contrastchecker/) du WebAIM est simple à utiliser et explique ce dont vous avez besoin pour vous conformer aux critères WCAG relatifs au contraste des couleurs.

> **Note :** Un taux de contraste élevé permettra également à toute personne utilisant un smartphone ou une tablette avec un écran brillant de mieux lire les pages dans un environnement lumineux, tel qu'exposé à la lumière du soleil.

Un autre conseil est de ne pas compter uniquement sur la couleur pour les panneaux / informations, car cela ne sera pas bon pour ceux qui ne peuvent pas voir la couleur. Au lieu de marquer les champs de formulaire obligatoires en rouge, par exemple, marquez-les d'un astérisque et en rouge.

### Cacher des choses

Dans de nombreux cas, une conception visuelle nécessitera de ne pas afficher tout le contenu en même temps. Par exemple, dans notre [Exemple de boîte d'information à onglets](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/info-box.html) (voir notre [code source](https://github.com/mdn/learning-area/blob/master/css/css-layout/practical-positioning-examples/info-box.html)), nous avons trois panneaux d’informations, mais nous les [positionnons](/fr/docs/Apprendre/CSS/CSS_layout/Le_positionnement) les uns sur les autres et fournissons des onglets sur lesquels on peut cliquer pour les afficher à tour de rôle (c’est aussi accessible au clavier – vous pouvez également utiliser <kbd>Tab</kbd> et <kbd>Entrée</kbd> pour les sélectionner).

![](tabbed-info-box.png)

Les utilisateurs de lecteur d’écran ne s’inquiètent de rien. Ils sont satisfaits du contenu tant que l’ordre des sources est logique et ils peuvent tout comprendre. Le positionnement absolu (tel qu'utilisé dans cet exemple) est généralement considéré comme l'un des meilleurs mécanismes permettant de masquer un contenu pour obtenir un effet visuel, car il n'empêche pas les lecteurs d'écran d'y accéder.

Par contre, vous ne devriez pas utiliser {{cssxref("visibility")}}`:hidden` ou {{cssxref("display")}}`:none`, car ils masquent le contenu des lecteurs d'écran sauf si vous souhaitez que ce contenu leur soit masqué.

> **Note :** [Contenu invisible juste pour les utilisateurs de lecteur d'écran](https://webaim.org/techniques/css/invisiblecontent/) contient beaucoup plus de détails utiles concernant ce sujet.

### Accepter que les utilisateurs puissent remplacer les styles

#### Acceptez que les utilisateurs puissent remplacer vos styles

Il est possible pour les utilisateurs de remplacer vos styles par leurs propres styles personnalisés, par exemple :

- Voir [Éditeur de Style](/fr/docs/Outils/Éditeur_de_style) pour un guide utile expliquant comment le faire manuellement dans Firefox, et [Comment utiliser une feuille de style (css) personnalisée avec Internet Explorer](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-internet-explorer/) par Adrian Gordon pour les instructions IE équivalentes (EN).
- Il est probablement plus facile de le faire en utilisant une extension, par exemple l’extension Stylus est disponible pour [Firefox](https://addons.mozilla.org/en-US/firefox/addon/stylish/), [Safari](https://safari-extensions.apple.com/details/?id=com.sobolev.stylish-5555L95H45), [Opera](https://addons.opera.com/en/extensions/details/stylish/), et [Chrome](https://chrome.google.com/webstore/detail/stylish/fjnbnpbmkenffdnngjfgmeleoegfcffe).

Les utilisateurs peuvent le faire pour diverses raisons. Un utilisateur malvoyant peut vouloir agrandir le texte de tous les sites Web qu’il visite, ou un utilisateur présentant un déficit de couleur grave peut vouloir afficher tous les sites Web dans des couleurs très contrastées, faciles à lire. Quel que soit le besoin, vous devriez être à l'aise avec cela et rendre vos conceptions suffisamment flexibles pour que de tels changements fonctionnent dans votre conception. Par exemple, vous voudrez peut-être vous assurer que votre zone de contenu principale peut gérer un texte plus volumineux (le défilement commencera peut-être pour permettre à tout le monde de le voir), et ne le cachera pas ou ne sera pas complètement interrompu.

## JavaScript

JavaScript peut également compromettre l’accessibilité, selon son utilisation.

Le JavaScript moderne est un langage puissant, et nous pouvons faire beaucoup de choses avec cela de nos jours, du contenu simple et des mises à jour d'interface utilisateur aux jeux 2D et 3D à part entière. Aucune règle ne stipule que tout le contenu doit être accessible à 100% à toutes les personnes. Vous devez simplement faire ce que vous pouvez et rendre vos applications aussi accessibles que possible.

Le contenu et les fonctionnalités simples sont facilement accessibles – texte, images, tableaux, formulaires et bouton-poussoir activant des fonctions. Comme nous l'avons vu dans notre article [HTML : une bonne base pour l'accessibilité](/fr/docs/Apprendre/a11y/HTML), les principales considérations sont les suivantes :

- Bonne sémantique : Utiliser le bon élément pour le bon travail. Par exemple, assurez-vous que vous utilisez les en-têtes et les paragraphes, et les éléments {{htmlelement("button")}} et {{htmlelement("a")}}.
- S'assurer que le contenu est disponible sous forme de texte, soit directement sous forme de contenu textuel, soit par un libellé pour des éléments `<form>` soit par [textes par défaut](/fr/docs/Apprendre/a11y/HTML#Alternatives_textuelles) pour les images.

Nous avons également examiné un exemple d'utilisation de JavaScript pour intégrer des fonctionnalités là où il manque – voir [Remettre l'accessibilité au clavier](/fr/docs/Apprendre/a11y/HTML#Building_keyboard_accessibility_back_in). Ce n'est pas l'idéal – vous devez utiliser le bon élément pour le bon travail – mais cela montre que c'est possible dans des situations où, pour une raison quelconque, vous ne pouvez pas contrôler le balisage utilisé. Un autre moyen d'améliorer l'accessibilité pour les widgets non sémantiques reposant sur JavaScript consiste à utiliser WAI-ARIA pour fournir une sémantique supplémentaire aux utilisateurs de lecteurs d'écran. Le prochain article couvrira également cela en détail.

Les fonctionnalités complexes telles que les jeux 3D ne sont pas si faciles à rendre accessibles – un jeu 3D complexe créé à l'aide de [L'API WebGL : graphismes 2D et 3D pour le web](/fr/docs/Web/API/WebGL_API) sera rendu sur un élément {{htmlelement("canvas")}}, qui n'a pour l'instant aucune possibilité de fournir textes alternatifs ou autres informations à utiliser par les utilisateurs malvoyants. On peut soutenir qu’un tel jeu ne compte pas vraiment ce groupe de personnes dans son public cible principal, et il serait déraisonnable de s’attendre à ce que vous le rendiez accessible à 100% aux aveugles, quelle que soit l’implantation des [contrôles clavier](/fr/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) faite pour qu'il soit utilisable par les utilisateurs sans souris. De plus, rendez le jeu de couleurs suffisamment contrasté pour pouvoir rendre le jeu vidéo utilisable par ceux qui ont des déficiences de la perception des couleurs.

### Le problème avec trop de JavaScript

Le problème survient souvent lorsque les utilisateurs se fient trop à JavaScript. Parfois, vous voyez un site Web où tout a été fait avec JavaScript – le code HTML a été généré par JavaScript, le CSS a été généré par JavaScript, etc. Ceci présente toutes sortes de problèmes d'accessibilité et d'autres choses qui y sont associées, donc ce n'est pas conseillé.

En plus d'utiliser le bon élément pour le bon travail, vous devez également vous assurer que vous utilisez la bonne technologie pour le bon travail ! Réfléchissez bien pour savoir si vous avez besoin de cette boîte d’informations 3D brillante reposant sur JavaScript, ou si un texte ordinaire avec du CSS conviendrait. Réfléchissez bien pour savoir si vous avez besoin d'un widget de formulaire non standard complexe ou d'une saisie de texte. Et ne générez pas tout votre contenu HTML en utilisant JavaScript si possible.

### Le garder discret

Lors de la création de votre contenu, gardez à l'esprit l'idée d'un **JavaScript discret, en retrait**. JavaScript est discret quand il est utilisé pour améliorer des fonctionnalités, il devient gênant quand ces mêmes fonctionnalités sont développées entièrement en JavaScript. Les fonctions de base de votre page devraient idéalement tourner sans JavaScript, même s’il est évident que ce n’est pas toujours possible. La règle est d'utiliser lorsque cela est possible les fonctionnalités intégrées au navigateur.

De bons exemples d'utilisation de JavaScript discret incluent :

- Fournir une validation de formulaire côté client, qui alerte les utilisateurs en cas de problèmes liés aux entrées de formulaire, sans avoir à attendre que le serveur vérifie les données. S'il n'est pas disponible, le formulaire fonctionnera toujours, mais la validation risque d'être plus lente.
- Fournir des commandes personnalisées pour les  `<video>` HTML5 accessibles aux utilisateurs uniquement au clavier, ainsi qu'un lien direct vers la vidéo pouvant être utilisé pour y accéder si JavaScript n'est pas disponible (les commandes du navigateur `<video>` par défaut ne sont pas des touches accessibles dans la plupart des navigateurs).

Par exemple, nous avons écrit un exemple de validation de formulaire côté client rapide — voir [form-validation.html](https://github.com/mdn/learning-area/blob/master/accessibility/css/form-validation.html) (voir aussi la [démonstration en direct](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Ici, vous verrez un formulaire simple. Lorsque vous essayez de soumettre le formulaire avec un ou les deux champs vides, l'envoi échoue et un message d'erreur s'affiche pour vous indiquer ce qui ne va pas.

Ce type de validation de formulaire est discret — vous pouvez toujours utiliser le formulaire parfaitement sans que le JavaScript soit disponible, et toute implémentation de formulaire sensée aura également une validation côté serveur, car il est trop facile pour les utilisateurs malveillants de contourner la validation côté client (en désactivant JavaScript dans le navigateur, par exemple). La validation côté client est toujours très utile pour signaler les erreurs — les utilisateurs peuvent savoir instantanément quelles erreurs ils commettent, au lieu d'attendre un aller-retour vers le serveur et un rechargement de page. C'est un avantage certain en termes de convivialité.

> **Note :** La validation côté serveur n'a pas été implémentée dans cette simple démonstration.

Nous avons également rendu cette validation de formulaire assez accessible. Nous avons utilisé des éléments {{htmlelement("label")}} pour nous assurer que les libellés des formulaires sont liés de manière non équivoque à leurs entrées, afin que les lecteurs d'écran puissent les lire au fur et à mesure :

```html
<label for="name"> Entrez votre nom :</label>
<input type="text" name="name" id="name">
```

Nous ne faisons la validation qu'une fois le formulaire soumis — ceci afin de ne pas mettre à jour l'interface utilisateur trop souvent et de ne pas perturber les utilisateurs du lecteur d'écran (et éventuellement d'autres) :

```js
form.onsubmit = validate;

function validate(e) {
  errorList.innerHTML = '';
  for(var i = 0; i < formItems.length; i++) {
    var testItem = formItems[i];
    if(testItem.input.value === '') {
      errorField.style.left = '360px';
      createLink(testItem);
    }
  }

  if(errorList.innerHTML !== '') {
    e.preventDefault();
  }
}
```

> **Note :** Dans cet exemple, nous masquons et montrons la boîte de message d'erreur en utilisant le positionnement absolu plutôt qu'une autre méthode telle que la visibilité ou l'affichage, car cela n'empêche pas le lecteur d'écran de pouvoir lire le contenu de celui-ci.

La validation du formulaire réel serait beaucoup plus complexe que cela : vous voudriez vérifier que le nom saisi ressemble réellement à un nom, que l’âge entré est en réalité un nombre et qu’il est réaliste (par exemple, pas un nombre négatif, ni à quatre chiffres). Ici, nous venons d'implémenter la vérification simple qu'une valeur a été renseignée dans chaque champ de saisie (`if(testItem.input.value === '')`).

Une fois la validation effectuée, si les tests réussissent, le formulaire est soumis. S'il y a des erreurs  (`if(errorList.innerHTML !== '')`) nous arrêtons la soumission du formulaire ( à l'aide de [event.preventDefault()](/fr/docs/Web/API/Event/preventDefault)), et affichons tous les messages d'erreur créés (voir ci-dessous). Ce mécanisme signifie que les erreurs ne seront affichées que s’il y a des erreurs, ce qui est meilleur pour la facilité d’utilisation.

Pour chaque entrée pour laquelle aucune valeur n'a été renseignée lors de la soumission du formulaire, nous créons un élément de liste avec un lien et l'insérons dans la liste `errorList`.

```js
function createLink(testItem) {
 var listItem = document.createElement('li');
 var anchor = document.createElement('a');
 anchor.textContent = testItem.input.name + ' field is empty: fill in your ' + testItem.input.name + '.';
 anchor.href = '#' + testItem.input.name;
 anchor.onclick = function() {
   testItem.input.focus();
 };
 listItem.appendChild(anchor);
 errorList.appendChild(listItem);
}
```

Chaque lien a un double objectif — il vous dit quelle est l’erreur, vous pouvez aussi cliquer dessus / l’activer pour passer directement à l’élément d’entrée en question et corriger votre saisie.

> **Note :** La partie `focus()` de cet exemple est un peu délicate. Chrome et Edge (et les versions plus récentes d'IE) focalisent l'élément lorsque l'utilisateur clique sur le lien, sans avoir besoin du bloc `onclick`/`focus()`. Safari ne mettra en évidence que l'élément de formulaire avec le lien, il a donc besoin du bloc `onclick`/`focus()` pour le focaliser. Firefox ne focalise pas les entrées correctement dans ce contexte, les utilisateurs de Firefox ne peuvent donc pas en profiter pour le moment (bien que tout le reste fonctionne bien). Le problème de Firefox devrait bientôt être résolu - des efforts sont en cours pour donner la parité des comportements de Firefox aux autres navigateurs (voir {{bug(277178)}}).

De plus, le champ `errorField` est placé en haut de l'ordre source (bien qu'il soit positionné différemment dans UI à l'aide de CSS), ce qui signifie que les utilisateurs peuvent savoir exactement ce qui ne va pas avec les soumissions de formulaire et accéder aux éléments d'entrée en question en remontant au début de la page

Pour terminer, nous avons utilisé certains attributs de WAI-ARIA dans notre démonstration pour résoudre les problèmes d’accessibilité causés par des zones de contenu constamment mises à jour sans rechargement de page (les lecteurs d’écran ne le détectent pas et n'en avertissent pas les utilisateurs par défaut) :

    <div class="errors" role="alert" aria-relevant="all">
      <ul>
      </ul>
    </div>

Nous expliquerons ces attributs dans notre prochain article, qui couvre [WAI-ARIA](/fr/docs/Learn/Accessibility/WAI-ARIA_basics) de manière beaucoup plus détaillée.

> **Note :** Certains d'entre vous penseront probablement au fait que les formulaires HTML5 ont des mécanismes de validation intégrés tels que les attributs `required`, `min`/`minlength`, et `max`/`maxlength` (voir {{htmlelement("input")}} référence d'élément pour plus d'informations). Nous avons fini par ne pas les utiliser dans la démo, car la prise en charge multi-navigateurs est inégale (par exemple, IE10 et versions ultérieures, pas de prise en charge de Safari).

> **Note :** WebAIM's [Validation de formulaire et récupération d'erreur utilisables et accessibles (EN)](https://webaim.org/techniques/formvalidation/) fournit des informations supplémentaires utiles sur la validation de formulaire accessible.

### Autres problèmes d'accessibilité JavaScript

Il y a d'autres choses à prendre en compte quand on met en œuvre des solutions JavaScript tout en réflechissant à l'accessibilité. Voilà déjà une liste de points à surveiller, que nous complèterons à chaque fois qu'un nouveau cas se présente.

#### Événements spécifiques à la souris

Comme vous le savez peut-être, la plupart des interactions utilisateur sont implémentées dans JavaScript côté client à l'aide de gestionnaires d'événements, ce qui nous permet d'exécuter des fonctions en réponse à certains événements. Certains événements peuvent avoir des problèmes d'accessibilité. L'exemple principal que vous rencontrerez concerne des événements spécifiques à la souris tels que [mouseover](/fr/docs/Web/Events/mouseover), [mouseout](/fr/docs/Web/Events/mouseout), [dblclick](/fr/docs/Web/Events/dblclick), etc. Les fonctionnalités qui s'exécutent en réponse à ces événements ne seront pas accessibles à l'aide d'autres mécanismes, tels que les contrôles du clavier.

Pour résoudre de tels problèmes, vous devez doubler ces événements avec des événements similaires pouvant être activés par d'autres moyens (appelés gestionnaires d'événements indépendants du périphérique) —[focus](/fr/docs/Web/Events/focus) et [blur (event)](/fr/docs/Web/Events/blur) fourniraient une accessibilité aux utilisateurs de clavier.

Regardons un exemple qui illustre cela. Considérons une image miniature ; quand elle est survolée ou ciblée (comme sur un catalogue de produits de commerce électronique) une version plus grande de l’image s'affiche.

Nous avons créé un exemple très simple, que vous pouvez trouver sur [Exemple d'événements de souris et de clavier](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) (voir aussi le [code source](https://github.com/mdn/learning-area/blob/master/accessibility/css/mouse-and-keyboard-events.html)). Le code comporte deux fonctions qui affichent et cachent l'image agrandie ; ceux-ci sont gérés par les lignes suivantes qui les définissent en tant que gestionnaires d'événements :

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Les deux premières lignes exécutent les fonctions lorsque le pointeur de la souris survole et cesse de survoler la vignette, respectivement. Cela ne nous permettra toutefois pas d'accéder à la vue agrandie à l'aide du clavier ; pour cela, nous avons inclus les deux dernières lignes, qui exécutent les fonctions lorsque l'image est nette et floue (lorsque la mise au point s'arrête). Cela peut être fait en tapant sur l'image, car nous avons inclus  `tabindex="0"` dessus.

L'événement [click](/fr/docs/Web/API/Element/click_event) est intéressant — cela semble dépendre de la souris, mais la plupart des navigateurs activent les gestionnaires d'événement [element.onclick](/fr/docs/Web/API/GlobalEventHandlers/onclick) après avoir  pressé <kbd>Entrée</kbd>  sur un lien ou un élément de formulaire ciblé, ou lorsqu'un tel élément est touché sur un écran tactile. Cependant, cela ne fonctionne pas par défaut lorsque vous autorisez un événement à ne pas être mis au point par défaut à l'aide de tabindex. Dans ce cas, vous devez détecter précisément le moment exact où cette touche est enfoncée (voir [Remettre l'accessibilité au clavier](/fr/docs/Apprendre/a11y/HTML#Building_keyboard_accessibility_back_in)).

## Résumé

Nous espérons que cet article vous a fourni beaucoup de détails et de compréhension sur les problèmes d'accessibilité liés à l'utilisation de CSS et de JavaScript sur les pages Web.

Ensuite, WAI-ARIA !

{{PreviousMenuNext("Learn/Accessibility/HTML","Learn/Accessibility/WAI-ARIA_basics", "Learn/Accessibility")}}

## Dans ce module

- [Qu'est ce que l'accessibilité?](/fr/docs/Apprendre/a11y/What_is_accessibility)
- [HTML : une bonne base pour l'accessibilité](/fr/docs/Apprendre/a11y/HTML#Building_keyboard_accessibility_back_in)
- [Meilleures pratiques d'accessibilité CSS et JavaScript](/fr/docs/Apprendre/a11y/CSS_and_JavaScript)
- [WAI-ARIA basics](/fr/docs/Learn/Accessibility/WAI-ARIA_basics)
- [Accessible multimedia](/fr/docs/Apprendre/a11y/Multimedia)
- [Mobile accessibility](/fr/docs/Learn/Accessibility/Mobile)
- [Évaluation: dépannage d'accessibilité](/fr/docs/Apprendre/a11y/Accessibility_troubleshooting)
