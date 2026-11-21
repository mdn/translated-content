---
title: Meilleures pratiques d'accessibilité CSS et JavaScript
short-title: Accessibilité CSS et JS
slug: Learn_web_development/Core/Accessibility/CSS_and_JavaScript
l10n:
  sourceCommit: 47def3151aadab22b9438c2eedba276d51f65f25
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/HTML","Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

CSS et JavaScript, lorsqu'ils sont utilisés correctement, peuvent également permettre des expériences web accessibles, ou ils peuvent nuire considérablement à l'accessibilité s'ils sont mal utilisés. Cet article décrit certaines des meilleures pratiques CSS et JavaScript à prendre en compte pour garantir que même un contenu complexe soit aussi accessible que possible.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>Être familiarisé avec <a href="/fr/docs/Learn_web_development/Core/Structuring_content">HTML</a>, <a href="/fr/docs/Learn_web_development/Core/Styling_basics">CSS</a>, et avoir une <a href="/fr/docs/Learn_web_development/Core/Accessibility/What_is_accessibility">compréhension de base des concepts d'accessibilité</a>.</td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Dimensionnement et mise en page du texte accessibles.</li>
          <li>Contraste des couleurs.</li>
          <li>L'importance des styles <code>:focus</code> et <code>:hover</code>.</li>
          <li>Utilisation judicieuse des animations — utilisez les animations avec subtilité et fournissez des contrôles pour les désactiver.</li>
          <li>Meilleures pratiques pour masquer le contenu afin qu'il ne devienne pas inaccessible.</li>
          <li>Qu'il existe un excès de JavaScript et la valeur du JavaScript non intrusif.</li>
          <li>Utilisation judicieuse des évènements afin de ne pas bloquer certains types de contrôle.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## CSS et JavaScript, des technologies accessibles ?

CSS et JavaScript n'ont pas la même importance immédiate en matière d'accessibilité que le HTML, mais ils peuvent toujours aider ou nuire à l'accessibilité, en fonction de leur utilisation. En d'autres termes, il est important que vous preniez en compte certains conseils de meilleures pratiques pour vous assurer que votre utilisation de CSS et de JavaScript ne ruine pas l'accessibilité de vos documents.

## CSS

Commençons par regarder le CSS.

### Sémantique correcte et attentes de l'utilisateur·ice

Il est possible d'utiliser CSS pour faire en sorte que n'importe quel élément HTML ressemble à _n'importe quoi_, mais cela ne signifie pas que vous devez le faire. Comme nous l'avons souvent mentionné dans notre article [HTML&nbsp;: une bonne base pour l'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility/HTML), vous devez utiliser l'élément sémantique approprié pour le travail, chaque fois que possible. Si vous ne le faites pas, cela peut provoquer de la confusion et des problèmes d'utilisabilité pour tout le monde, mais particulièrement pour les utilisateur·ice·s handicapé·e·s. L'utilisation correcte de la sémantique a beaucoup à voir avec les attentes des utilisateur·ice·s — les éléments ont une apparence et un comportement particuliers, en fonction de leur fonctionnalité, et ces conventions communes sont attendues par les utilisateur·ice·s.

Par exemple, un·e utilisateur·ice de lecteur d'écran ne peut pas naviguer sur une page à l'aide des éléments d'en-tête si le·la développeur·euse n'a pas utilisé ces éléments de manière appropriée pour structurer le contenu. De la même manière, un en-tête perd sa fonction visuelle si vous lui appliquez un style qui ne le fait plus ressembler à un en-tête.

Concrètement, vous pouvez adapter le style d'un élément de la page à votre design, mais ne le modifiez pas au point qu'il ne se présente plus ou ne se comporte plus comme prévu. Les sections suivantes résument les principales fonctionnalités HTML à prendre en compte.

#### Structure du contenu du texte « standard »

Titres, paragraphes, listes — le contenu de texte de base de votre page&nbsp;:

```html
<h1>En-tête</h1>

<p>Paragraphe</p>

<ul>
  <li>Ma liste</li>
  <li>a deux éléments.</li>
</ul>
```

Quelques styles CSS typiques peuvent ressembler à ceci&nbsp;:

```css
h1 {
  font-size: 5rem;
}

p,
li {
  line-height: 1.5;
  font-size: 1.6rem;
}
```

Vous devez&nbsp;:

- Sélectionner des tailles de police, des hauteurs de ligne, un espacement des lettres, etc. raisonnables pour que votre texte soit logique, lisible et agréable à lire.
- Veiller à ce que vos titres se distinguent du texte principal, généralement grands et en gras comme le style par défaut. Vos listes doivent ressembler à des listes.
- La couleur de votre texte doit contraster suffisamment avec la couleur de votre arrière-plan.

Voir [Fondamentaux des titres et paragraphes en HTML](/fr/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs) et [Introduction au style de texte](/fr/docs/Learn_web_development/Core/Text_styling) pour plus d'informations.

#### Texte mis en emphase

La mise en forme en incise qui confère une emphase spécifique au texte qu'elle entoure&nbsp;:

```html
<p>L'eau est <em>très chaude</em>.</p>

<p>
  Les gouttelettes d'eau accumulées sur les surfaces s'appellent
  <strong>condensation</strong>.
</p>
```

Vous voulez peut-être ajouter quelques couleurs simples à votre texte mis en importance&nbsp;:

```css
strong,
em {
  color: #a60000;
}
```

Vous avez rarement besoin de mettre en forme les éléments d'emphase de manière significative. Les conventions standard relatives au texte en gras et en italique sont très reconnaissables, et modifier leur style peut prêter à confusion. Pour en savoir plus sur l'emphase, consultez la section [Emphase et importance](/fr/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance).

#### Abréviations

Un élément permettant d'associer une abréviation, un acronyme ou un sigle à sa forme développée&nbsp;:

```html
<p>
  Le contenu web est marqué à l'aide de Hypertext Markup Language, ou
  <abbr>HTML</abbr>.
</p>
```

Encore une fois, vous voulez peut-être appliquer une mise en forme simple sur ces éléments&nbsp;:

```css
abbr {
  color: #a60000;
}
```

Par convention, on souligne en pointillés les abréviations et il n'est pas judicieux de s'écarter significativement cette règle reconnue. Pour plus d'informations sur les abréviations, voir [Abréviations](/fr/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features#abréviations).

#### Liens

Hyperliens — la façon dont vous accédez à de nouveaux endroits sur le web&nbsp;:

```html
<p>
  Visiter la <a href="https://www.mozilla.org">Page d'accueil de Mozilla</a>.
</p>
```

Un style de lien très simple est présenté ci-dessous&nbsp;:

```css
a {
  color: red;
}

a:hover,
a:visited,
a:focus {
  color: #a60000;
  text-decoration: none;
}

a:active {
  color: black;
  background-color: #a60000;
}
```

Les conventions standard pour les liens sont le soulignement et une couleur différente (par défaut&nbsp;: bleu) dans leur état standard, une autre variation de couleur lorsque le lien a déjà été visité (par défaut&nbsp;: violet), et encore une autre couleur lorsque le lien est activé (par défaut&nbsp;: rouge). De plus, le pointeur de la souris se transforme en icône de pointeur lorsque les liens sont survolés, et le lien reçoit une mise en évidence lorsqu'il reçoit la sélection (par exemple, avec la touche Tab) ou est activé. L'image suivante montre la mise en évidence dans Firefox (un contour pointillé) et Chrome (un contour bleu)&nbsp;:

![Capture d'écran d'une liste de liens dans le navigateur Firefox. La liste contient 4 éléments. Le deuxième élément de la liste est mis en évidence à l'aide d'un contour bleu pointillé lorsqu'il reçoit la sélection avec la touche Tab.](focus-highlight-firefox.png)

![Capture d'écran d'une liste de liens dans le navigateur Chrome. La liste contient 4 éléments. Le troisième élément de la liste est mis en évidence à l'aide d'un contour bleu lorsqu'il reçoit la sélection avec la touche Tab.](focus-highlight-chrome.png)

Vous pouvez faire preuve de créativité avec la mise en forme des liens, tant que vous continuez à fournir un retour aux utilisateur·ice·s lorsqu'ils interagissent avec les liens. Quelque chose doit définitivement se produire lorsque les états changent, et vous ne devez pas supprimer le curseur de pointeur ou le contour — tous deux sont des aides d'accessibilité très importantes pour les utilisateur·ice·s des commandes clavier.

#### Éléments de formulaire

Éléments permettant aux utilisateur·ice·s de saisir des données sur des sites web&nbsp;:

```html
<div>
  <label for="name">Entrez votre nom</label>
  <input type="text" id="name" name="name" />
</div>
```

Vous pouvez voir de bons exemples de CSS dans notre exemple [form-css.html <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-css.html) et ([en direct <sup>(angl.)</sup>](https://mdn.github.io/learning-area/accessibility/css/form-css.html)).

La plupart du CSS que vous rédigez pour les formulaires servent à dimensionner les éléments, à aligner les étiquettes et les entrées, et à leur donner une apparence nette et ordonnée.

Vous ne devez toutefois pas trop vous écarter des indications visuelles classiques qui signalent qu'un élément du formulaire est sélectionné, c'est fondamentalement la même chose que pour les liens (voir ci-dessus). Vous pouvez mettre en forme les états sélectionné/survolé du formulaire pour rendre ce comportement plus cohérent sur les navigateurs ou pour obtenir une meilleure intégration au design de votre page, mais ne vous en débarrassez pas complètement — là encore, les utilisateur·ice·s s'appuient sur ces indices pour comprendre ce qui se passe.

#### Tableaux

Tableaux pour la présentation des données tabulées.

Vous pouvez voir un bon exemple simple de [table-css.html <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/accessibility/css/table-css.html) et ([en direct <sup>(angl.)</sup>](https://mdn.github.io/learning-area/accessibility/css/table-css.html)).

Le CSS des tableaux sert généralement à mieux intégrer le tableau dans votre design et à le rendre moins laid. Il est judicieux de s'assurer que les en-têtes de tableau se démarquent (normalement en gras) et d'utiliser des lignes zébrées pour faciliter la lecture des différentes lignes.

### Couleur et contraste de couleur

Lorsque vous choisissez un jeu de couleurs pour votre site web, assurez-vous que la couleur du texte contraste bien avec la couleur de fond. Votre design peut sembler agréable, mais cela n'est pas bon si les personnes malvoyantes, par exemple atteintes de daltonisme, ne peuvent pas lire votre contenu.

Il existe un moyen simple de vérifier si votre contraste est suffisamment important pour ne pas causer de problèmes. Il existe un certain nombre d'outils de vérification du contraste en ligne dans lesquels vous pouvez entrer vos couleurs de premier plan et d'arrière-plan afin de les vérifier. Par exemple, le [vérificateur de contraste de couleur <sup>(angl.)</sup>](https://webaim.org/resources/contrastchecker/) du WebAIM est simple à utiliser et explique ce dont vous avez besoin pour vous conformer aux critères WCAG relatifs au contraste des couleurs.

> [!NOTE]
> Un taux de contraste élevé permet également à toute personne utilisant un smartphone ou une tablette avec un écran brillant de mieux lire les pages dans un environnement lumineux, tel qu'exposé à la lumière du soleil.

Un autre conseil est de ne pas compter uniquement sur la couleur pour les panneaux / informations, car cela n'est pas bon pour ceux qui ne peuvent pas voir la couleur. Au lieu de marquer les champs de formulaire obligatoires en rouge, par exemple, marquez-les d'un astérisque et en rouge.

### Cacher des choses

Dans de nombreux cas, une conception visuelle nécessite de ne pas afficher tout le contenu en même temps. Par exemple, dans notre [Exemple de boîte d'information à onglets <sup>(angl.)</sup>](https://mdn.github.io/learning-area/css/css-layout/practical-positioning-examples/tabbed-info-box.html) (voir notre [code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/css/css-layout/practical-positioning-examples/tabbed-info-box.html)), nous avons trois panneaux d'informations, mais nous les [positionnons](/fr/docs/Learn_web_development/Core/CSS_layout/Positioning) les uns sur les autres et fournissons des onglets sur lesquels on peut cliquer pour les afficher à tour de rôle (c'est aussi accessible au clavier — vous pouvez également utiliser <kbd>Tab</kbd> et <kbd>Entrée</kbd> pour les sélectionner).

![Interface à trois onglets avec l'onglet 1 sélectionné et seuls ses contenus sont affichés. Le contenu des autres onglets est masqué. Si un onglet est sélectionné, la couleur de son texte passe du noir au blanc et la couleur de fond passe de orange-rouge à brun selle.](tabbed-info-box.png)

Les utilisateur·ice·s de lecteur d'écran ne s'inquiètent de rien. Ils sont satisfaits du contenu tant que l'ordre des sources est logique et ils peuvent tout comprendre. Le positionnement absolu (tel qu'utilisé dans cet exemple) est généralement considéré comme l'un des meilleurs mécanismes permettant de masquer un contenu pour obtenir un effet visuel, car il n'empêche pas les lecteurs d'écran d'y accéder.

Par contre, vous ne devez pas utiliser {{CSSxRef("visibility", "visibility: hidden")}} ou {{CSSxRef("display", "display: none")}}, car ils masquent le contenu des lecteurs d'écran. Sauf bien sûr, s'il y a une bonne raison pour laquelle vous souhaitez que ce contenu soit masqué aux lecteurs d'écran.

> [!NOTE]
> [Contenu invisible juste pour les utilisateur·ice·s de lecteur d'écran <sup>(angl.)</sup>](https://webaim.org/techniques/css/invisiblecontent/) contient beaucoup plus de détails utiles concernant ce sujet.

### Accepter que les utilisateur·ice·s puissent remplacer les styles

Il est possible pour les utilisateur·ice·s de remplacer vos styles par leurs propres styles personnalisés, par exemple&nbsp;:

- Voir le guide utile de Sarah Maddox [Comment utiliser une feuille de style personnalisée (CSS) avec Firefox <sup>(angl.)</sup>](https://www.itsupportguides.com/knowledge-base/computer-accessibility/how-to-use-a-custom-style-sheet-css-with-firefox/) expliquant comment le faire manuellement dans Firefox.
- Il est probablement plus facile de le faire en utilisant une extension. Par exemple, l'extension Stylus est disponible pour [Firefox <sup>(angl.)</sup>](https://addons.mozilla.org/en-US/firefox/addon/styl-us/), avec Stylish étant un équivalent pour [Chrome <sup>(angl.)</sup>](https://chromewebstore.google.com/detail/stylish-custom-themes-for/fjnbnpbmkenffdnngjfgmeleoegfcffe).

Les utilisateur·ice·s peuvent le faire pour diverses raisons. Un·e utilisateur·ice malvoyant·e peut vouloir agrandir le texte sur tous les sites Web qu'il visite, ou un·e utilisateur·ice ayant une déficience sévère des couleurs peut vouloir mettre tous les sites Web en couleurs à contraste élevé qui sont faciles à voir pour lui. Quelle que soit la nécessité, vous devez être à l'aise avec cela et rendre vos conceptions suffisamment flexibles pour que de tels changements fonctionnent dans votre conception. Par exemple, vous voulez peut-être vous assurer que votre zone de contenu principale peut gérer un texte plus grand (peut-être qu'elle commence à défiler pour permettre de tout voir), et ne se contente pas de le masquer ou de se casser complètement.

## JavaScript

JavaScript peut également compromettre l'accessibilité, selon son utilisation.

Le JavaScript moderne est un langage puissant, et nous pouvons faire beaucoup de choses avec cela de nos jours, du contenu simple et des mises à jour d'interface utilisateur aux jeux 2D et 3D à part entière. Aucune règle ne stipule que tout le contenu doit être accessible à 100% à toutes les personnes — vous devez simplement faire ce que vous pouvez et rendre vos applications aussi accessibles que possible.

Le contenu et les fonctionnalités simples sont facilement accessibles — texte, images, tableaux, formulaires et bouton-poussoir activant des fonctions. Comme nous l'avons vu dans notre article [HTML&nbsp;: une bonne base pour l'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility/HTML), les principales considérations sont les suivantes&nbsp;:

- Bonne sémantique&nbsp;: Utiliser le bon élément pour le bon travail. Par exemple, assurez-vous que vous utilisez les en-têtes et les paragraphes, et les éléments HTML {{HTMLElement("button")}} et {{HTMLElement("a")}}.
- S'assurer que le contenu est disponible sous forme de texte, soit directement sous forme de contenu textuel, soit par un libellé pour des éléments `<form>` soit par [textes par défaut](/fr/docs/Learn_web_development/Core/Accessibility/HTML#alternatives_textuelles) pour les images.

Nous avons également examiné un exemple d'utilisation de JavaScript pour intégrer des fonctionnalités là où il manque — voir [Remettre l'accessibilité au clavier](/fr/docs/Learn_web_development/Core/Accessibility/HTML#remettre_laccessibilité_au_clavier). Ce n'est pas l'idéal — vous devez utiliser le bon élément pour le bon travail — mais cela montre que c'est possible dans des situations où, pour une raison quelconque, vous ne pouvez pas contrôler le balisage utilisé. Un autre moyen d'améliorer l'accessibilité pour les composants non sémantiques reposant sur JavaScript consiste à utiliser WAI-ARIA pour fournir une sémantique supplémentaire aux utilisateur·ice·s de lecteurs d'écran. Le prochain article couvre également cela en détail.

Les fonctionnalités complexes comme les jeux 3D ne sont pas si faciles à rendre accessibles — un jeu 3D complexe créé avec [WebGL](/fr/docs/Web/API/WebGL_API) est rendu sur un élément HTML {{HTMLElement("canvas")}}, qui ne permet actuellement pas de fournir des alternatives textuelles ou d'autres informations utilisables par les personnes ayant une déficience visuelle sévère. Un tel jeu ne vise peut-être pas réellement ce groupe de personnes dans son public cible principal, et attendre de vous une accessibilité à 100% pour les personnes aveugles est déraisonnable. Cependant, vous pouvez mettre en place des [commandes clavier](/fr/docs/Games/Techniques/Control_mechanisms/Desktop_with_mouse_and_keyboard) pour le rendre utilisable par les personnes qui n'utilisent pas de souris, et rendre la palette de couleurs suffisamment contrastée pour les personnes ayant des déficiences de la perception des couleurs.

### Le problème avec trop de JavaScript

Le problème survient souvent lorsque les utilisateur·ice·s se fient trop à JavaScript. Parfois, vous voyez un site Web où tout a été fait avec JavaScript — le code HTML a été généré par JavaScript, le CSS a été généré par JavaScript, etc. Ceci présente toutes sortes de problèmes d'accessibilité et d'autres choses qui y sont associées, donc ce n'est pas conseillé.

En plus d'utiliser le bon élément pour le bon travail, vous devez également vous assurer que vous utilisez la bonne technologie pour le bon travail&nbsp;! Réfléchissez bien pour savoir si vous avez besoin de cette boîte d'informations 3D brillante reposant sur JavaScript, ou si un texte ordinaire avec du CSS convient. Réfléchissez bien pour savoir si vous avez besoin d'un composant de formulaire non standard complexe ou d'une saisie de texte. Et ne générez pas tout votre contenu HTML en utilisant JavaScript si possible.

### Le garder discret

Vous devez garder à l'esprit le concept de **JavaScript discret** lorsque vous créez votre contenu. L'idée du JavaScript discret est qu'il doit être utilisé autant que possible pour améliorer les fonctionnalités, et non pour les construire entièrement — les fonctions de base doivent idéalement fonctionner sans JavaScript, bien qu'il soit compris que ce n'est pas toujours une option. Mais encore une fois, une grande partie consiste à utiliser les fonctionnalités intégrées du navigateur autant que possible.

De bons exemples d'utilisation du JavaScript discret incluent&nbsp;:

- Fournir une validation côté client des formulaires, qui alerte rapidement les utilisateur·ice·s des problèmes avec leurs saisies de formulaire, sans avoir à attendre que le serveur vérifie les données. Si elle n'est pas disponible, le formulaire fonctionne toujours, mais la validation peut être plus lente.
- Fournir des contrôles personnalisés pour les éléments HTML `<video>` accessibles aux utilisateur·ice·s utilisant uniquement le clavier, ainsi qu'un lien direct vers la vidéo qui peut être utilisé pour y accéder si JavaScript n'est pas disponible (les contrôles par défaut du navigateur pour `<video>` ne sont pas accessibles au clavier dans la plupart des navigateurs).

Par exemple, nous avons écrit un exemple rapide et simple de validation de formulaire côté client — voir [form-validation.html <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/accessibility/css/form-validation.html) (voir également [la démo en direct <sup>(angl.)</sup>](https://mdn.github.io/learning-area/accessibility/css/form-validation.html)). Vous y voyez un formulaire simple&nbsp;; lorsque vous essayez d'envoyer le formulaire avec un ou les deux champs laissés vides, l'envoi échoue et une boîte de message d'erreur apparaît pour vous indiquer ce qui ne va pas.

Ce type de validation de formulaire est discret — vous pouvez toujours utiliser le formulaire sans problème même si JavaScript n'est pas disponible, et toute implémentation de formulaire sensée a également la validation côté serveur activée, car il est trop facile pour les utilisateur·ice·s malveillants de contourner la validation côté client (par exemple, en désactivant JavaScript dans le navigateur). La validation côté client est néanmoins très utile pour signaler les erreurs — les utilisateur·ice·s peuvent connaître instantanément les erreurs qu'ils commettent, plutôt que d'attendre un aller-retour vers le serveur et un rechargement de la page. C'est un avantage certain en termes d'utilisabilité.

> [!NOTE]
> La validation côté serveur n'a pas été mise en œuvre dans cette simple démonstration.

Nous avons également rendu cette validation de formulaire assez accessible. Nous avons utilisé des éléments {{HTMLElement("label")}} pour nous assurer que les étiquettes de formulaire sont liées de manière non ambiguë à leurs champs de saisie, afin que les lecteurs d'écran puissent les lire en même temps&nbsp;:

```html
<label for="name">Entrez votre nom :</label>
<input type="text" name="name" id="name" />
```

Nous effectuons la validation uniquement lorsque le formulaire est envoyé — cela évite de mettre à jour l'interface utilisateur trop souvent et de risquer de perturber les utilisateur·ice·s de lecteur d'écran (et éventuellement les autres)&nbsp;:

```js
form.onsubmit = validate;

function validate(e) {
  errorList.textContent = "";
  for (const testItem of formItems) {
    if (testItem.input.value === "") {
      errorField.style.left = "360px";
      createLink(testItem);
    }
  }

  if (errorList.hasChildNodes()) {
    e.preventDefault();
  }
}
```

> [!NOTE]
> Dans cet exemple, nous masquons et montrons la boîte de message d'erreur en utilisant le positionnement absolu plutôt qu'une autre méthode telle que la visibilité ou l'affichage, car cela n'empêche pas le lecteur d'écran de pouvoir lire le contenu de celui-ci.

La validation réelle du formulaire est bien plus complexe que cela — vous vérifiez que le nom saisi ressemble bien à un nom, que l'âge saisi est bien un nombre et qu'il est réaliste (notamment, qu'il est positif ou nul et comporte moins de 4 chiffres). Ici, vous effectuez simplement une vérification qui détermine si chaque champ de saisie contient une valeur (`if (testItem.input.value === '')`).

Lorsque vous effectuez la validation, si les tests réussissent, vous envoyez le formulaire. Si des erreurs apparaissent (`if (errorList.hasChildNodes())`), vous interrompez l'envoi du formulaire (avec [`preventDefault()`](/fr/docs/Web/API/Event/preventDefault)) et affichez les messages d'erreur existants (voir ci-dessous). Ainsi, les erreurs apparaissent uniquement en présence d'erreurs, ce qui améliore l'utilisabilité.

Pour chaque champ qui ne contient aucune valeur lorsque vous envoyez le formulaire, vous créez un élément de liste avec un lien et l'insérez dans `errorList`.

```js
function createLink(testItem) {
  const listItem = document.createElement("li");
  const anchor = document.createElement("a");

  const name = testItem.input.name;
  anchor.textContent = `Le champ ${name} est vide : remplissez votre ${name}.`;
  anchor.href = `#${name}`;
  listItem.appendChild(anchor);
  errorList.appendChild(listItem);
}
```

Chaque lien remplit un double objectif — il vous indique la nature de l'erreur, et vous pouvez cliquer dessus/l'activer pour accéder directement au champ de saisie concerné et corriger votre entrée.

En outre, `errorField` se trouve en haut de l'ordre des sources (bien que CSS le positionne ailleurs dans l'interface), ce qui permet aux utilisateur·ice·s de savoir exactement ce qui ne va pas dans l'envoi de leur formulaire et d'accéder aux champs de saisie concernés en remontant au début de la page.

Pour finir, nous utilisons certains attributs WAI-ARIA dans notre démonstration afin de résoudre les problèmes d'accessibilité causés par des zones de contenu qui se mettent constamment à jour sans rechargement de la page (les lecteurs d'écran ne détectent pas ces mises à jour et n'en avertissent pas les utilisateur·ice·s par défaut)&nbsp;:

```html
<div class="errors" role="alert" aria-relevant="all">
  <ul></ul>
</div>
```

Nous expliquons ces attributs dans notre prochain article, qui couvre [WAI-ARIA](/fr/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics) de manière beaucoup plus détaillée.

> [!NOTE]
> Certain·e·s d'entre vous pensent probablement au fait que les formulaires HTML disposent de mécanismes de validation intégrés comme les attributs `required`, `min`/`minlength` et `max`/`maxlength` (consultez la référence de l'élément HTML {{HTMLElement("input")}} pour plus d'informations). Nous n'utilisons finalement pas ces attributs dans la démonstration, car leur prise en charge par les navigateurs est inégale (par exemple IE10 et versions ultérieures uniquement).

> [!NOTE]
> La ressource [Validation de formulaire et récupération d'erreur utilisable et accessible <sup>(angl.)</sup>](https://webaim.org/techniques/formvalidation/) de WebAIM fournit d'autres informations utiles sur la validation accessible des formulaires.

### Autres problèmes d'accessibilité JavaScript

Il y a d'autres choses à prendre en compte quand on met en œuvre des solutions JavaScript tout en réfléchissant à l'accessibilité. Nous en ajoutons d'autres au fur et à mesure que nous les découvrons.

#### Évènements spécifiques à la souris

Comme vous le savez peut-être, la plupart des interactions utilisateur sont implémentées dans JavaScript côté client à l'aide de gestionnaires d'évènements, ce qui nous permet d'exécuter des fonctions en réponse à certains évènements. Certains évènements peuvent avoir des problèmes d'accessibilité. L'exemple principal que vous rencontrez concerne des évènements spécifiques à la souris tels que [`mouseover`](/fr/docs/Web/API/Element/mouseover_event), [`mouseout`](/fr/docs/Web/API/Element/mouseout_event), [`dblclick`](/fr/docs/Web/API/Element/dblclick_event), etc. Les fonctionnalités qui s'exécutent en réponse à ces évènements ne sont pas accessibles à l'aide d'autres mécanismes, tels que les contrôles du clavier.

Pour atténuer de tels problèmes, vous devez doubler ces évènements avec des évènements similaires pouvant être activés par d'autres moyens (appelés gestionnaires d'évènements indépendants du périphérique) — [`focus`](/fr/docs/Web/API/Element/focus_event) et [`blur`](/fr/docs/Web/API/Element/blur_event) fournissent une accessibilité aux utilisateur·ice·s de clavier.

Regardons un exemple qui illustre quand cela peut être utile. Peut-être voulons-nous fournir une image miniature qui affiche une version plus grande de l'image lorsqu'elle est survolée par la souris ou mise au point (comme vous le voyez sur un catalogue de produits de commerce électronique).

Nous avons créé un exemple très simple, que vous pouvez trouver sur [mouse-and-keyboard-events.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/accessibility/css/mouse-and-keyboard-events.html) (voir aussi le [code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/accessibility/css/mouse-and-keyboard-events.html)). Le code comporte deux fonctions qui affichent et cachent l'image agrandie&nbsp;; celles-ci sont exécutées par les lignes suivantes qui les définissent en tant que gestionnaires d'évènements&nbsp;:

```js
imgThumb.onmouseover = showImg;
imgThumb.onmouseout = hideImg;

imgThumb.onfocus = showImg;
imgThumb.onblur = hideImg;
```

Les deux premières lignes exécutent les fonctions lorsque le pointeur de la souris survole et cesse de survoler la vignette, respectivement. Cela ne nous permet toutefois pas d'accéder à la vue agrandie à l'aide du clavier&nbsp;; pour cela, nous avons inclus les deux dernières lignes, qui exécutent les fonctions lorsque l'image est mise au point et perd la sélection (lorsque la mise au point s'arrête). Cela peut être fait en tabulant sur l'image, car nous avons inclus `tabindex="0"` dessus.

L'évènement [`click`](/fr/docs/Web/API/Element/click_event) est intéressant — cela semble dépendre de la souris, mais la plupart des navigateurs activent les gestionnaires d'évènement [`element.onclick`](/fr/docs/Web/API/Element/click_event) après avoir pressé <kbd>Entrée</kbd> sur un lien ou un élément de formulaire ciblé, ou lorsqu'un tel élément est touché sur un écran tactile. Cependant, cela ne fonctionne pas par défaut lorsque vous autorisez un évènement à ne pas être mis au point par défaut à l'aide de tabindex. Dans ce cas, vous devez détecter précisément le moment exact où cette touche est enfoncée (voir [Remettre l'accessibilité au clavier](/fr/docs/Learn_web_development/Core/Accessibility/HTML#remettre_laccessibilité_au_clavier)).

## Résumé

Nous espérons que cet article vous a fourni beaucoup de détails et de compréhension sur les problèmes d'accessibilité liés à l'utilisation de CSS et de JavaScript sur les pages Web.

Dans le prochain article, nous vous proposons quelques tests que vous pouvez utiliser pour vérifier dans quelle mesure vous avez compris et retenu toutes ces informations.

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/Test_your_skills/HTML","Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
