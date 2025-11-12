---
title: "CSS : Mettre en forme le contenu"
short-title: Mettre en forme le contenu
slug: Learn_web_development/Getting_started/Your_first_website/Styling_the_content
original_slug: Learn/Getting_started_with_the_web/CSS_basics
l10n:
  sourceCommit: 62ab95d20f246369cfab654c5a7a8727deb21ea6
---

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}

CSS (pour <i lang="en">Cascading Style Sheets</i> en anglais, qu'on peut traduire en «&nbsp;feuilles de style en cascade&nbsp;») est le code utilisé pour mettre en forme une page web. Cet article vous guide à travers les bases de CSS&nbsp;: comment cela fonctionne et comment améliorer l'apparence et la présentation de la structure de contenu que vous avez créée dans l'article précédent.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissance de base de votre système d'exploitation, des logiciels de base que vous utiliserez pour créer un site web, et des systèmes de fichiers.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Le but et la fonction des CSS.</li>
          <li>Les parties de base de la syntaxe CSS&nbsp;: ensembles de règles, sélecteurs, déclarations, propriétés, valeurs de propriété.</li>
          <li>Fonctionnalités courantes de CSS, incluant le modèle de boîte, le changement de couleurs et de polices, et le positionnement des éléments HTML.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce que CSS ?

Comme le HTML, CSS n'est pas un langage de programmation. Ce n'est pas non plus un langage de balisage. **CSS est un langage de feuille de style.** CSS sert à mettre en forme les éléments HTML&nbsp;: vous sélectionnez les éléments à mettre en forme et vous définissez des valeurs pour leurs propriétés de style, ce qui détermine leur apparence.

Reprenons l'exemple HTML de base de l'article [Créer le contenu](/fr/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)&nbsp;:

```html live-sample___basic-html live-sample___basic-css
<p>Instructions de la vie&nbsp;:</p>

<ul>
  <li>Manger</li>
  <li>Dormir</li>
  <li>Recommencer</li>
</ul>
```

Cela s'affiche ainsi tout seul&nbsp;:

{{EmbedLiveSample("basic-html", "100%", "140px")}}

Si on ajoute un peu de CSS, on peut changer l'apparence du HTML. L'extrait suivant sélectionne l'élément {{htmlelement("p")}} et lui donne une [police](/fr/docs/Web/CSS/Reference/Properties/font-family) différente et un texte de couleur ({{cssxref("color")}}) rouge. Il sélectionne ensuite tous les éléments {{htmlelement("li")}} et leur donne une couleur de remplissage ({{cssxref("background-color")}}) vert-jaune, une bordure ({{cssxref("border")}}) noire pleine de 1 pixel, et une [marge inférieure](/fr/docs/Web/CSS/Reference/Properties/margin-bottom) de 5 pixels&nbsp;:

```css live-sample___basic-css
p {
  font-family: sans-serif;
  color: red;
}

li {
  background-color: greenyellow;
  border: 1px solid black;
  margin-bottom: 5px;
}
```

Avec le CSS appliqué au HTML, la démonstration ressemble maintenant ainsi&nbsp;:

{{EmbedLiveSample("basic-css", "100%", "160px")}}

Comme vous pouvez le voir, avec juste un peu de CSS, on a pu changer l'apparence d'une liste très simple.

CSS a de nombreuses autres fonctions&nbsp;: définir des images ou des dégradés d'arrière-plan, contrôler la typographie et le comportement du défilement, ajouter des animations ou construire la mise en page complète d'un site web.

## Appliquer du CSS à votre HTML

Lorsque vous utilisez CSS, la première chose à vérifier est que votre CSS est bien appliqué à votre HTML. Dans cette section, nous allons ajouter une **feuille de style** CSS à votre dossier `mon-premier-site` et l'appliquer à votre page.

1. Dans votre dossier `mon-premier-site`, créez un nouveau dossier appelé `styles`.
2. À l'aide d'un éditeur de texte, collez le CSS suivant dans un nouveau fichier, qui donnera à vos éléments `<p>` une couleur de texte rouge. Il est utile de commencer par quelque chose comme ceci pour tester si votre feuille de style est bien appliquée à votre HTML.

   ```css
   p {
     color: red;
   }
   ```

3. Enregistrez le fichier dans le dossier `styles` sous le nom `style.css`.
4. Ouvrez votre fichier `index.html`. Collez la ligne suivante dans l'en-tête HTML (entre les balises {{HTMLElement("head")}} et `</head>`)&nbsp;:

   ```html
   <link href="styles/style.css" rel="stylesheet" />
   ```

5. Enregistrez `index.html` et chargez-le dans votre navigateur. Vous devriez obtenir quelque chose comme ceci&nbsp;:

![Un logo Mozilla et quelques paragraphes. Le texte du paragraphe a été mis en rouge par notre CSS.](website-screenshot-styled.png)

Si le texte de votre paragraphe est rouge, félicitations&nbsp;! Votre CSS fonctionne. Sinon, reprenez les étapes précédentes et vérifiez soigneusement que vous les avez toutes suivies correctement.

## Bases de la syntaxe CSS

Dans l'exemple CSS précédent, `p` est appelé un **sélecteur** — il sélectionne un ou plusieurs élément(s) à mettre en forme. En particulier, `p` sélectionne tous les paragraphes du HTML. La ligne à l'intérieur des accolades (`{ }`) est appelée une **déclaration** — elle définit une valeur pour une propriété spécifique. Dans ce cas, la **propriété** est `color`, qui contrôle la couleur du texte des paragraphes, et la **valeur de la propriété** définie est `red`.

L'ensemble de la structure est appelé un **ensemble de règles** (ou simplement «&nbsp;règle&nbsp;»).

Regardons un autre ensemble de règles, cette fois avec plusieurs déclarations&nbsp;:

```css
p {
  color: red;
  width: 500px;
  border: 1px solid black;
}
```

Dans un ensemble de règles, il faut utiliser un point-virgule (`;`) pour séparer chaque déclaration. Dans chaque déclaration, il faut utiliser deux points (`:`) pour séparer la propriété de sa valeur.

Vous pouvez aussi inclure plusieurs sélecteurs dans une même règle, séparés par des virgules, pour sélectionner plusieurs éléments. Par exemple&nbsp;:

```css
p,
.my-class,
#my-id {
  color: red;
}
```

Dans cette règle CSS, on a inclus un **sélecteur d'élément** (ou **sélecteur de type**), qui sélectionne un élément HTML spécifique. On a aussi inclus deux autres types de sélecteurs, qui ne sont pas abordés dans le reste de ce tutoriel. Si vous êtes curieux·se de leur fonctionnement, consultez notre [guide sur les sélecteurs de base](/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors).

> [!NOTE]
> Le parcours Scrimba [Écrivez vos premières lignes de CSS&nbsp;!](https://scrimba.com/the-frontend-developer-career-path-c0j/~015?via=mdn) <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup> propose une introduction interactive utile à la syntaxe CSS.

## Améliorer le texte

Revenons à notre exemple et utilisons CSS pour améliorer l'apparence du texte. Nous allons définir une nouvelle police pour la page et modifier certains paramètres de texte pour différents éléments.

1. Commencez par retrouver [le résultat de Google Fonts](/fr/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choix_dune_police_de_caractères) que vous avez enregistré précédemment. Si vous n'avez pas encore choisi de police, suivez le lien et faites-le maintenant.
2. Ajoutez les éléments HTML {{htmlelement("link")}} dans l'élément {{htmlelement("head")}} de votre `index.html`, juste avant la balise de fermeture `</head>`. Cela devrait ressembler à ceci&nbsp;:

   ```html
   <link rel="preconnect" href="https://fonts.googleapis.com" />
   <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
   <link
     href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100..900;1,100..900&display=swap"
     rel="stylesheet" />
   ```

   Ce code relie votre page à une feuille de style hébergée par le service Google Fonts, qui charge la police que vous avez choisie.

3. Ensuite, allez dans votre fichier `style.css` et supprimez la règle existante. Nous ne voulons plus que nos paragraphes soient rouges.
4. Ajoutez les lignes suivantes à `style.css`&nbsp;:

   ```css
   html {
     /* px signifie "pixels". La taille de police de base est maintenant de 10
        pixels de haut */
     font-size: 10px;
     /* Remplacez EMPLACEMENT par la valeur de la propriété font-family obtenue
        depuis Google Fonts */
     font-family: EMPLACEMENT;
   }
   ```

   > [!NOTE]
   > Tout ce qui se trouve entre `/*` et `*/` dans un document CSS est un **commentaire CSS**, qui est ignoré par le navigateur. Les commentaires CSS permettent d'ajouter des notes utiles sur votre code ou votre logique, sans affecter l'affichage de la page web.

5. Remplacez la ligne `font-family` par celle obtenue dans votre code Google Fonts, par exemple&nbsp;:

   ```css
   font-family: "Roboto", sans-serif;
   ```

   La propriété `font-family` définit la ou les police(s) que vous souhaitez appliquer à votre HTML. Cette règle définit une police et une taille de base globale pour toute la page. Tous les éléments à l'intérieur de l'élément {{HTMLElement("html")}} hériteront de la même `font-size` et `font-family`.

6. Maintenant, définissons quelques styles de police et de texte sur nos éléments HTML {{htmlelement("Heading_Elements", "<code>&lt;h1&gt;</code>")}}, {{htmlelement("li")}} et {{htmlelement("p")}}. Nous allons définir de nouvelles valeurs de {{cssxref("font-size")}} pour chaque élément. Nous allons aussi centrer le titre avec {{cssxref("text-align")}} et augmenter la hauteur de ligne ({{cssxref("line-height")}}) et l'espacement entre les lettres ({{cssxref("letter-spacing")}}) des paragraphes et des éléments de liste pour rendre le contenu du corps plus lisible.

   ```css
   h1 {
     font-size: 60px;
     text-align: center;
   }

   p,
   li {
     font-size: 16px;
     line-height: 2;
     letter-spacing: 1px;
   }
   ```

7. Enregistrez votre code et chargez votre HTML dans un navigateur (rafraîchissez-le si vous l'aviez déjà ouvert). Votre travail en cours devrait ressembler à ceci&nbsp;:

   ![Un logo Mozilla et quelques paragraphes. Une police sans-serif a été définie, les tailles de police, l'interligne et l'espacement des lettres sont ajustés, et le titre principal de la page est centré.](website-screenshot-font-small.png)

   > [!NOTE]
   > Essayez d'ajuster les valeurs en `px` jusqu'à obtenir des tailles de police qui vous plaisent pour le titre et le texte du corps.

## CSS, c'est avant tout des boîtes

Vous remarquerez en utilisant CSS que beaucoup de choses tournent autour des boîtes. La plupart des éléments HTML d'une page peuvent être vus comme des boîtes empilées (ou placées côte à côte). Vous pouvez définir des valeurs sur ces boîtes pour la taille, la couleur, la position, etc. C'est ce qu'on appelle le [**modèle de boîte**](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model).

![Trois boîtes imbriquées les unes dans les autres. De l'extérieur vers l'intérieur, elles sont étiquetées margin, border et padding](box-model.png)

Chaque boîte qui occupe de l'espace sur votre page possède des propriétés comme&nbsp;:

- {{cssxref("padding")}}&nbsp;: L'espace autour du contenu. Dans l'exemple précédent, c'est l'espace autour du texte du paragraphe.
- {{cssxref("border")}}&nbsp;: La ligne pleine juste à l'extérieur du padding.
- {{cssxref("margin")}}&nbsp;: L'espace à l'extérieur de la bordure.

Dans cette section, nous utilisons aussi les propriétés suivantes, dont certaines ont déjà été vues&nbsp;:

- {{cssxref("width")}}&nbsp;: La largeur d'un élément.
- {{cssxref("background-color")}}&nbsp;: La couleur derrière le contenu et le padding d'un élément.
- {{cssxref("color")}}&nbsp;: La couleur du contenu d'un élément (généralement du texte).
- {{cssxref("text-shadow")}}&nbsp;: Une ombre portée sur le texte à l'intérieur d'un élément.
- {{cssxref("display")}}&nbsp;: Le mode d'affichage d'un élément (c'est-à-dire la façon dont il apparaît ou est disposé sur la page web).

Dans chacune des sections suivantes&nbsp;:

1. Ajoutez le code CSS fourni à la fin de votre fichier `style.css`.
2. Enregistrez le fichier et rafraîchissez votre navigateur pour voir comment le CSS a affecté le rendu HTML.
3. Lisez l'explication fournie pour comprendre comment fonctionne le CSS.
4. Si vous vous sentez aventureux·se, expérimentez en modifiant les valeurs des propriétés pour personnaliser davantage votre page.

## Changer la couleur de la page

Ajoutez ce qui suit&nbsp;:

```css
html {
  background-color: #00539f;
}
```

Cette règle définit une couleur d'arrière-plan pour toute la page. Modifiez le code couleur pour celui que vous avez choisi dans [À quoi ressemblera votre site web&nbsp;?](/fr/docs/Learn_web_development/Getting_started/Your_first_website/What_will_your_website_look_like#choix_de_la_couleur_du_thème).

## Mettre en forme le corps de page

Ajoutez ensuite cette règle&nbsp;:

```css
body {
  width: 600px;
  margin: 0 auto;
  background-color: #ff9500;
  padding: 0 20px 20px 20px;
  border: 5px solid black;
}
```

Le code ci-dessus définit de nouvelles valeurs pour plusieurs propriétés de l'élément HTML {{htmlelement("body")}}. Passons-les en revue ligne par ligne&nbsp;:

- `width: 600px;`&nbsp;: Cette déclaration force le corps à toujours faire 600 pixels de large.
- `margin: 0 auto;`&nbsp;: Lorsque vous définissez deux valeurs sur une propriété comme `margin` ou `padding`, la première valeur concerne le haut **et** le bas de l'élément (ici `0`), la seconde concerne la gauche **et** la droite. `auto` est une valeur spéciale qui répartit l'espace horizontal disponible également entre la gauche et la droite.
- `background-color: #FF9500;`&nbsp;: Cela définit la couleur d'arrière-plan de l'élément. Notre projet utilise un orange-rouge pour l'arrière-plan du `<body>` afin de contraster avec le bleu foncé utilisé pour l'élément {{htmlelement("html")}}.
- `padding: 0 20px 20px 20px;`&nbsp;: Cela définit quatre valeurs pour le padding. Le but est de créer un peu d'espace autour du contenu. Dans cet exemple, il n'y a pas de padding en haut du corps, et 20 pixels à droite, en bas et à gauche. Les valeurs correspondent au padding en haut, à droite, en bas et à gauche, dans cet ordre.
- `border: 5px solid black;`&nbsp;: Cela définit la largeur, le style et la couleur de la bordure. Ici, il s'agit d'une bordure noire pleine de 5 pixels autour de tout le corps de la page.

## Positionner et mettre en forme le titre principal de la page

Ajoutez maintenant ceci&nbsp;:

```css
h1 {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

Vous avez peut-être remarqué un grand espace en haut du corps de la page. Cela arrive parce que les navigateurs appliquent un style par défaut à l'élément `<h1>`. Cela peut sembler une mauvaise idée, mais l'objectif est d'assurer une lisibilité minimale pour les pages non mises en forme. Pour supprimer cet espace, on surcharge le style par défaut du navigateur avec `margin: 0;`.

Ensuite, on définit un padding de 20 pixels en haut et en bas du titre, et on donne au texte du titre la même couleur que l'arrière-plan de l'élément HTML.

Enfin, `text-shadow` applique une ombre au texte de l'élément&nbsp;:

- La première valeur en pixels définit le **décalage horizontal** de l'ombre par rapport au texte&nbsp;: à quelle distance elle se déplace horizontalement.
- La deuxième valeur en pixels définit le **décalage vertical** de l'ombre par rapport au texte&nbsp;: à quelle distance elle se déplace verticalement.
- La troisième valeur en pixels définit le **rayon de flou** de l'ombre. Une valeur plus grande donne une ombre plus floue.
- La quatrième valeur définit la couleur de base de l'ombre.

## Centrer l'image

Enfin, insérez cette règle&nbsp;:

```css
img {
  display: block;
  margin: 0 auto;
  max-width: 100%;
}
```

Ensuite, on centre l'image pour qu'elle soit plus jolie. On peut utiliser la même astuce `margin: 0 auto` que pour le corps, mais il y a des différences qui nécessitent un réglage supplémentaire pour que le CSS fonctionne.

L'élément {{htmlelement("body")}} est un **élément de type bloc**, ce qui signifie qu'il occupe de l'espace sur la page et peut accepter des marges extérieures (<i lang="en">margin</i>), intérieures (<i lang="en">padding</i>) et d'autres propriétés de boîte. Les éléments {{htmlelement("img")}} (image), en revanche, sont des éléments **en ligne**&nbsp;: par défaut, ils n'acceptent pas les marges de la même manière que les éléments de bloc. Pour que l'astuce de la marge automatique fonctionne sur cette image, il faut lui donner un comportement de bloc avec `display: block;`.

Enfin, on définit la propriété {{cssxref("max-width")}} à `100%` pour s'assurer que si l'image est plus large que la largeur définie sur le corps (600 pixels), elle sera limitée à `600px` et ne s'étirera pas au-delà.

> [!NOTE]
> Ne vous inquiétez pas si vous ne comprenez pas complètement `display: block;` et la différence entre un élément de bloc et un élément en ligne, ou `max-width: 100%;`. Cela deviendra plus clair au fur et à mesure que vous étudierez CSS.

## Conclusion

Si vous avez suivi toutes les instructions de cet article, vous devriez obtenir une page qui ressemble à ceci&nbsp;:

![Un logo Mozilla, centré, un titre et des paragraphes. La page est maintenant bien stylisée, avec un fond bleu pour toute la page et un fond orange pour la bande de contenu principal centrée.](website-screenshot-final.png)

Vous pouvez [voir notre version ici <sup>(angl.)</sup>](https://mdn.github.io/beginner-html-site-styled/). Si vous êtes bloqué·e, vous pouvez toujours comparer votre travail avec [le code final de cet exemple sur GitHub <sup>(angl.)</sup>](https://github.com/mdn/beginner-html-site-styled/blob/gh-pages/styles/style.css).

Dans cet article, nous n'avons fait qu'effleurer la surface de CSS. Vous en apprendrez beaucoup plus dans notre module principal [Bases de la mise en forme CSS](/fr/docs/Learn_web_development/Core/Styling_basics) plus loin dans le cours.

## Voir aussi

- [Apprendre HTML et CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn) sur Scrimba <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup>
  - : Le cours [Apprendre HTML et CSS](https://scrimba.com?via=mdn) de Scrimba vous enseigne HTML et CSS en construisant et déployant cinq super projets, avec des leçons interactives et des défis amusants animés par des formateur·ice·s expérimenté·e·s.

{{PreviousMenuNext("Learn_web_development/Getting_started/Your_first_website/Creating_the_content", "Learn_web_development/Getting_started/Your_first_website/Adding_interactivity", "Learn_web_development/Getting_started/Your_first_website")}}
