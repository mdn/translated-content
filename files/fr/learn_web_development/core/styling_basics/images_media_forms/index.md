---
title: Images, média et éléments de formulaire
short-title: Images, média, formulaires
slug: Learn_web_development/Core/Styling_basics/Images_media_forms
l10n:
  sourceCommit: b4f137d4d70f66de2b5b979f719a4dd4229fd6e6
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics")}}

Dans cette leçon, nous allons examiner comment certains éléments spéciaux sont traités en CSS. Les images, autres médias et éléments de formulaire se comportent un peu différemment des boîtes régulières en termes de capacité à les mettre en forme avec CSS. Comprendre ce qui est possible ou non peut éviter certaines frustrations, et cette leçon met en évidence certaines des principales choses que vous devez savoir.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Les <a href="/fr/docs/Learn_web_development/Core/Structuring_content/HTML_images"
          >images</a
        >, <a href="/fr/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio"
          >vidéos</a
        > et <a href="/fr/docs/Learn_web_development/Core/Structuring_content/HTML_forms"
          >formulaires</a
        > HTML. Les <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units">valeurs et unités</a> et <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Sizing">tailles</a> CSS.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Comprendre comment les éléments remplacés sont dimensionnés et disposés.</li>
          <li>Style de base des éléments de formulaire faciles à mettre en forme, comme les champs de texte.</li>
          <li>Utiliser une réinitialisation CSS comme base pour mettre en forme des éléments difficiles comme les formulaires.</li>
          <li>Comprendre que tous les éléments de formulaire ne sont pas faciles à mettre en forme, et pourquoi.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Éléments remplacés

Les images et les vidéos sont décrites comme des **{{ Glossary("replaced elements", "éléments remplacés")}}**. Cela signifie que le CSS ne peut pas affecter la mise en page interne de ces éléments — seulement leur position sur la page parmi les autres éléments. Cependant, comme nous allons le voir, il existe diverses choses que le CSS peut faire avec une image.

Certains éléments remplacés, comme les images et les vidéos, sont également décrits comme ayant un **{{Glossary("aspect ratio", "rapport d'aspect")}}**. Cela signifie qu'ils ont une taille à la fois dans les dimensions horizontales (x) et verticales (y), et sont affichés en utilisant les dimensions intrinsèques du fichier par défaut.

## Taille des images

Comme vous le savez déjà en suivant ces leçons, tout en CSS génère une boîte. Si vous placez une image à l'intérieur d'une boîte qui est plus petite ou plus grande que les dimensions intrinsèques du fichier image dans une direction ou l'autre, elle apparaît soit plus petite que la boîte, soit déborde de la boîte. Vous devez prendre une décision sur ce qui se passe avec le débordement.

Dans l'exemple ci-dessous, nous avons deux boîtes, toutes deux de 200 pixels de taille&nbsp;:

- L'une contient une image plus petite que 200 pixels — elle est plus petite que la boîte et ne s'étire pas pour la remplir.
- L'autre est plus grande que 200 pixels et déborde de la boîte.

```html live-sample___size
<div class="enveloppe">
  <div class="boite">
    <img
      alt="étoile"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="boite">
    <img
      alt="ballons"
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  </div>
</div>
```

```css live-sample___size
.enveloppe {
  display: flex;
  align-items: flex-start;
}

.enveloppe > * {
  margin: 20px;
}

.boite {
  border: 5px solid darkblue;
  width: 200px;
}

img {
}
```

{{EmbedLiveSample("size", "", 250)}}

Que pouvons-nous faire pour résoudre le problème de débordement&nbsp;?

Comme nous l'avons appris dans [Taille des éléments en CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Sizing), une technique courante consiste à définir la largeur maximale ({{CSSxRef("max-width")}}) de l'image à `100%`. Cela permet à l'image de devenir plus petite que la boîte mais pas plus grande. Cette technique fonctionne également avec d'autres éléments remplacés tels que {{HTMLElement("video")}}, ou {{HTMLElement("iframe")}}.

Essayez d'ajouter `max-width: 100%` à la règle de l'élément `<img>` dans l'exemple ci-dessus. Vous pouvez voir que l'image plus petite reste inchangée, mais que l'image plus grande devient plus petite pour s'adapter à la boîte.

### Gérer les problèmes d'affichage des images avec `object-fit`

L'exemple ci-dessus révèle un autre ensemble de problèmes liés à l'affichage des images à l'intérieur des conteneurs. Vous remarquez qu'après avoir défini `max-width: 100%` sur les images, la deuxième image ne remplit pas complètement son conteneur&nbsp;; il reste un espace en bas. C'est dû au fait que donner une largeur spécifique à une image entraîne la définition de sa hauteur de manière à ce que son {{Glossary("aspect ratio", "rapport d'aspect")}} soit préservé.

Comment pouvons-nous dimensionner l'image pour qu'elle couvre complètement son conteneur&nbsp;? Nous pourrions définir le conteneur avec une largeur (`width`) _et_ une hauteur (`height`) fixes, puis donner à l'image une largeur (`width`) et une hauteur (`height`) de `100%`, comme montré dans l'exemple suivant&nbsp;:

```html live-sample___object-fit1
<div class="boite">
  <img
    alt="ballons"
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
</div>
```

```css live-sample___object-fit1
.boite {
  border: 5px solid darkblue;
  width: 200px;
  height: 200px;
  margin: 20px;
}

img {
  width: 100%;
  height: 100%;
}
```

{{EmbedLiveSample("object-fit1", "", 250)}}

Cependant, l'image est déformée, car son rapport d'aspect a été modifié — elle semble _étirée_. Pour résoudre ce problème, vous pouvez utiliser la propriété {{CSSxRef("object-fit")}}, qui définit comment l'image est redimensionnée pour s'adapter à son conteneur (l'élément `<img>`). La propriété `object-fit` peut prendre plusieurs valeurs, les plus utiles étant les suivantes&nbsp;:

- `cover`&nbsp;: L'image remplit complètement l'élément `<img>` tout en conservant son rapport d'aspect, donc certaines parties de l'image ne sont pas affichées.
- `contain`&nbsp;: L'image s'adapte complètement à l'intérieur de l'élément `<img>` tout en conservant son rapport d'aspect, donc certaines parties de l'élément `<img>` ne sont pas remplies. Cela entraîne un format de «&nbsp;boîte à lettre&nbsp;» [(<i lang="en">letterboxing</i> en anglais)](https://fr.wikipedia.org/wiki/Letterbox) ou «&nbsp;contre-cadrage&nbsp;» [(<i lang="en">pillarboxing</i> en anglais) <sup>(angl.)</sup>](https://en.wikipedia.org/wiki/Pillarbox).

L'exemple suivant montre les valeurs `cover` et `contain` appliquées à deux copies de l'image présentée dans l'exemple précédent, afin que vous puissiez voir leurs effets&nbsp;:

```html live-sample___object-fit
<div class="enveloppe">
  <div class="boite">
    <img
      alt="ballons"
      class="cover"
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  </div>
  <div class="boite">
    <img
      alt="ballons"
      class="contain"
      src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
  </div>
</div>
```

```css live-sample___object-fit
.enveloppe {
  display: flex;
  align-items: flex-start;
}

.enveloppe > * {
  margin: 20px;
}

.boite {
  border: 5px solid darkblue;
  width: 200px;
  height: 200px;
}

img {
  height: 100%;
  width: 100%;
}

.cover {
  object-fit: cover;
}

.contain {
  object-fit: contain;
}
```

{{EmbedLiveSample("object-fit", "", 250)}}

> [!NOTE]
> Voici les points clés à retenir&nbsp;:
>
> 1. La propriété `object-fit` redimensionne l'image elle-même pour s'adapter à l'intérieur de l'élément `<img>` qui l'intègre dans la page.
> 2. L'élément `<img>` doit être redimensionné pour que `object-fit` ait un effet.
>
> Si l'élément `<img>` n'est pas redimensionné, l'image est affichée à sa taille et à son rapport d'aspect d'origine (ou _intrinsèque_), donc `object-fit` n'a aucun effet.

## Les éléments remplacés dans la mise en page

Lorsque vous utilisez diverses techniques de mise en page CSS sur des éléments remplacés, vous constaterez peut-être qu'ils se comportent légèrement différemment des autres éléments. Par exemple, dans une mise en page en grille, les éléments sont étirés par défaut pour remplir entièrement leurs {{Glossary("grid areas", "zones de grille")}}. Les images ne s'étirent pas&nbsp;; elles sont alignées au début de leurs zones de grille.

Vous pouvez voir cela dans l'exemple ci-dessous où nous avons un conteneur de grille à deux colonnes et deux lignes, qui contient quatre éléments. Tous les éléments `<div>` ont une couleur de fond et s'étirent pour remplir la ligne et la colonne. L'image, cependant, ne s'étire pas.

```html live-sample___layout
<div class="enveloppe">
  <img
    alt="étoile"
    src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  <div></div>
  <div></div>
  <div></div>
</div>
```

```css live-sample___layout
.enveloppe {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 100px 100px;
  gap: 20px;
}

.enveloppe > div {
  background-color: rebeccapurple;
  border-radius: 0.5em;
}
```

{{EmbedLiveSample("layout", "", 220)}}

Vous n'aborderez la mise en page que dans un module ultérieur. Pour l'instant, gardez simplement à l'esprit que les éléments remplacés, lorsqu'ils font partie d'un système de mise en page spécifique tel que les grilles ou les boîtes flexibles, ont des comportements par défaut différents, essentiellement pour éviter qu'ils ne soient étirés de manière étrange par la mise en page.

## Éléments de formulaire

Les éléments de formulaire posent des problèmes lorsqu'il s'agit de les mettre en forme avec CSS. Le [module d'extensions de formulaires Web](/fr/docs/Learn_web_development/Extensions/Forms) couvre les aspects plus complexes de la stylisation de certains types de champs de formulaire, que nous n'abordons pas ici. Il y a cependant quelques notions de base importantes à souligner dans cette section.

De nombreux contrôles de formulaire sont ajoutés à votre page avec l'élément {{HTMLElement("input")}} — cela définit des champs de formulaire simples tels que les champs de texte, jusqu'à des champs plus complexes tels que les sélecteurs de couleur et de date. Il existe également quelques éléments supplémentaires, tels que {{HTMLElement("textarea")}} pour la saisie de texte multi-ligne, ainsi que des éléments utilisés pour contenir et étiqueter des parties de formulaires tels que {{HTMLElement("fieldset")}} et {{HTMLElement("legend")}}.

HTML contient également des attributs qui permettent aux développeur·euse·s web d'indiquer quels champs sont obligatoires, et même le type de contenu qui doit être saisi. Si l'utilisateur·ice saisit quelque chose d'inattendu, ou laisse un champ obligatoire vide, le navigateur peut afficher un message d'erreur. Les différents navigateurs varient entre eux quant à la quantité de style et de personnalisation qu'ils permettent pour ces éléments.

## Mettre en forme les éléments de saisie de texte

Les éléments qui permettent la saisie de texte, tels que `<input type="text">`, le plus spécifique `<input type="email">`, et l'élément `<textarea>`, sont assez faciles à mettre en forme et ont tendance à se comporter comme d'autres boîtes sur votre page. Cependant, le style par défaut de ces éléments varie en fonction du système d'exploitation et du navigateur que votre utilisateur·ice utilise pour visiter le site.

Dans l'exemple suivant, nous avons mis en forme certains champs de texte en utilisant CSS. Vous pouvez voir que des éléments tels que les bordures, les marges et le remplissage s'appliquent comme prévu. Nous utilisons des sélecteurs d'attributs pour cibler les différents types de champs de saisie.

Essayez de modifier l'exemple pour changer l'apparence du formulaire en ajustant les bordures, en ajoutant des couleurs de fond aux champs et en modifiant les polices et les marges.

```html live-sample___form
<form>
  <div><label for="nom">Nom</label> <input id="nom" type="text" /></div>
  <div>
    <label for="courriel">Courriel</label> <input id="courriel" type="email" />
  </div>

  <div class="boutons"><input type="submit" value="Envoyer" /></div>
</form>
```

```css hidden live-sample___form
body {
  font-family: sans-serif;
}
form > div {
  display: flex;
}

label {
  width: 10em;
}

.boutons {
  justify-content: center;
}
```

```css live-sample___form
input[type="text"],
input[type="email"] {
  border: 2px solid black;
  margin-bottom: 1em;
  padding: 10px;
  width: 80%;
}

input[type="submit"] {
  border: 3px solid #333333;
  background-color: #999999;
  border-radius: 5px;
  padding: 10px 2em;
  font-weight: bold;
  color: white;
}

input[type="submit"]:hover,
input[type="submit"]:focus {
  background-color: #333333;
}
```

{{EmbedLiveSample("form")}}

> [!WARNING]
> Vous devez faire attention lorsque vous modifiez le style des éléments de formulaire pour vous assurer qu'il est toujours évident pour l'utilisateur·ice, qu'il s'agit d'éléments de formulaire. Vous pouvez créer un champ de formulaire sans bordures ni arrière-plan, presque indiscernable du contenu environnant, mais cela rend très difficile sa reconnaissance et son interaction.

La plupart des types de champs de saisie les plus complexes sont affichés par le système d'exploitation et ne peuvent pas être personnalisés. Vous devez donc toujours supposer que les formulaires vont avoir un aspect très différent pour différents visiteur·euse·s et tester les formulaires complexes dans plusieurs navigateurs.

## Normaliser le comportement des formulaires

Les éléments de formulaire se comportent différemment selon les navigateurs et les systèmes d'exploitation. Cette section examine quelques-uns des problèmes les plus courants et propose des stratégies pour y faire face.

### Héritage et éléments de formulaire

Dans certains navigateurs, les éléments de formulaire n'héritent pas du style de police par défaut. Par conséquent, si vous voulez vous assurer que vos champs de formulaire utilisent la police définie sur le corps ou sur un élément parent, vous devez ajouter cette règle à votre CSS.

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
}
```

### Éléments de formulaire et `box-sizing`

Dans différents navigateurs, les éléments de formulaire utilisent des règles de dimensionnement de boîte différentes pour différents widgets. Vous avez appris la propriété `box-sizing` dans [notre leçon sur le modèle de boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model) et vous pouvez utiliser cette connaissance lors du style des formulaires pour garantir une expérience cohérente lors de la définition des largeurs et des hauteurs des éléments de formulaire.

Pour plus de cohérence, il est conseillé de définir les marges et les remplissages à `0` sur tous les éléments, puis de les ré-ajouter lors du style des contrôles particuliers&nbsp;:

```css
button,
input,
select,
textarea {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}
```

### Autres paramètres utiles

En plus des règles mentionnées ci-dessus, vous devez également définir `overflow: auto` sur les éléments `<textarea>` pour empêcher certains anciens navigateurs d'afficher une barre de défilement lorsqu'il n'y en a pas besoin&nbsp;:

```css
textarea {
  overflow: auto;
}
```

### Mettre tout ensemble dans une « réinitialisation »

En dernier lieu, nous pouvons regrouper les différentes propriétés discutées ci-dessus dans la «&nbsp;réinitialisation des formulaires&nbsp;» suivante pour fournir une base cohérente sur laquelle travailler. Cela inclut tous les éléments mentionnés dans les trois sections précédentes&nbsp;:

```css
button,
input,
select,
textarea {
  font-family: inherit;
  font-size: 100%;
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

textarea {
  overflow: auto;
}
```

> [!NOTE]
> Les feuilles de style de normalisation sont utilisées par de nombreux·ses développeur·euse·s pour créer un ensemble de styles de base à utiliser sur tous les projets. En général, elles font des choses similaires à celles décrites ci-dessus, en s'assurant que tout ce qui est différent d'un navigateur à l'autre est défini par défaut de manière cohérente avant de faire votre propre travail sur le CSS. Elles ne sont plus aussi importantes qu'autrefois, car les navigateurs sont généralement plus cohérents qu'auparavant. Cependant, si vous souhaitez jeter un coup d'œil à un exemple, consultez [Normalize.css <sup>(angl.)</sup>](https://necolas.github.io/normalize.css/), qui est une feuille de style très populaire utilisée comme base par de nombreux projets.

## Résumé

Cette leçon a mis en évidence certaines des différences que vous rencontrez lors du travail avec des images, des médias et d'autres éléments inhabituels en CSS.

Dans le prochain article, nous vous proposerons quelques tests que vous pourrez utiliser pour vérifier dans quelle mesure vous avez compris et retenu les informations que nous avons fournies sur la gestion des images et des éléments de formulaire en CSS.

## Voir aussi

- [Mise en forme des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Styling_web_forms)
- [Mise en forme avancée des formulaires](/fr/docs/Learn_web_development/Extensions/Forms/Advanced_form_styling)

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Size_decorate_content_panel", "Learn_web_development/Core/Styling_basics/Test_your_skills/Images", "Learn_web_development/Core/Styling_basics")}}
