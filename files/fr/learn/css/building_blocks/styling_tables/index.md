---
title: Mise en forme des tableaux
slug: Learn/CSS/Building_blocks/Styling_tables
l10n:
  sourceCommit: 916af5e72ce683c6f7795755830c11677ca0f529
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}

Mettre en forme un tableau HTML n'est pas le travail le plus passionnant au monde, mais c'est parfois un passage obligé. Dans cet article, nous verrons comment donner un bel aspect aux tableaux HTML, notamment avec certaines techniques de mise en forme.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions de HTML (voir <a href="/fr/docs/Learn/HTML/Introduction_to_HTML">Introduction à HTML</a>), tableaux en HTML (voir <a href="/fr/docs/Learn/HTML/Tables">le module sur les tableaux HTML</a>) et une idée du fonctionnement des CSS (voir <a href="/fr/docs/Learn/CSS/Introduction_to_CSS">Introduction à CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>Apprendre à mettre en forme les tableaux HTML de façon efficace.</td>
    </tr>
  </tbody>
</table>

## Un tableau HTML typique

Commençons par un tableau HTML typique. Typique au sens où la plupart des exemples de tableaux HTML concernent des chaussures, la météo, ou des employés. Ici, nous avons décidé de faire quelque chose de plus intéressant et notre tableau se rapportera aux célèbres groupes punk du Royaume-Uni. Le balisage ressemble à ceci&nbsp;:

```html
<table>
  <caption>
    Récapitulatif des groupes punk les plus célèbres du Royaume-Uni
  </caption>
  <thead>
    <tr>
      <th scope="col">Groupe</th>
      <th scope="col">Année de formation</th>
      <th scope="col">Nombre d'albums</th>
      <th scope="col">Morceau le plus célèbre</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>
        <i lang="en">Ever fallen in love (with someone you shouldn't've)</i>
      </td>
    </tr>
    <tr>
      <th scope="row">The Clash</th>
      <td>1976</td>
      <td>6</td>
      <td><i lang="en">London Calling</i></td>
    </tr>

    <!-- quelques lignes supprimées pour condenser le texte -->

    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td><i lang="en">No More Heroes</i></td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th scope="row" colspan="2">Nombre total d'albums</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
```

### Résultat

{{EmbedLiveSample('','100%','330')}}

Le tableau est bien balisé, facile à mettre en forme et accessible grâce aux fonctionnalités offertes par [`scope`](/fr/docs/Web/HTML/Element/th#attr-scope), [`<caption>`](/fr/docs/Web/HTML/Element/caption), [`<thead>`](/fr/docs/Web/HTML/Element/thead), [`<tbody>`](/fr/docs/Web/HTML/Element/tbody), etc. Malheureusement, son apparence n'est pas assez bonne sur l'écran (voir la version en anglais directement ici [punk-bands-unstyled.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-unstyled.html))&nbsp;:

![](table-unstyled.png)

Avec la seule mise en forme du navigateur, le tableau a l'air resserré, difficile à lire et austère. Il faut utiliser un peu de CSS pour corriger cela.

## Mettre en forme notre tableau

Voyons ensemble comment mettre en forme ce tableau.

1. Pour débuter, faites une copie locale de l'[exemple de balisage](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/punk-bands-unstyled.html)
2. Téléchargez les images ([`noise.png`](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/noise.png) et [`leopardskin.jpg`](https://github.com/mdn/learning-area/blob/main/css/styling-boxes/styling-tables/leopardskin.jpg))
3. Placez les trois fichiers dans un répertoire de travail quelque part sur votre ordinateur
4. Ensuite, créez un nouveau fichier nommé `style.css` et enregistrez‑le dans le même répertoire que les autres fichiers
5. Liez le CSS au HTML en mettant la ligne suivante dans l'élément [`<head>`](/fr/docs/Web/HTML/Element/head)&nbsp;:

   ```html
   <link href="style.css" rel="stylesheet" type="text/css" />
   ```

### Espacement et disposition

La première chose à faire est de modifier l'espacement et la disposition, le style par défaut du tableau est trop resserré&nbsp;! Pour ce faire, ajoutez la règle CSS suivante au fichier `style.css`&nbsp;:

```css
/* espacement */

table {
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 3px solid purple;
}

thead th:nth-child(1) {
  width: 30%;
}

thead th:nth-child(2) {
  width: 20%;
}

thead th:nth-child(3) {
  width: 15%;
}

thead th:nth-child(4) {
  width: 35%;
}

th,
td {
  padding: 20px;
}
```

Voici les choses les plus importantes à noter&nbsp;:

- Il est généralement utile d'utiliser la valeur `fixed` pour [`table-layout`](/fr/docs/Web/CSS/table-layout), car cela rend le comportement par défaut du tableau un peu plus prévisible. Normalement, les colonnes des tableaux sont dimensionnées en fonction de leur contenu, ce qui produit des résultats étranges. Avec `table-layout: fixed`, vous pouvez dimensionner les colonnes selon la largeur de leurs en-têtes, puis traiter leur contenu comme il convient. C'est pourquoi nous sélectionnons les quatre en-têtes distinctement avec le sélecteur `thead th:nth-child(n)` ([`:nth-child`](/fr/docs/Web/CSS/:nth-child)) («&nbsp;sélectionner le n-ième élément enfant [`<th>`](/fr/docs/Web/HTML/Element/th) dans la liste à l'intérieur de l'élément [`<thead>`](/fr/docs/Web/HTML/Element/thead)&nbsp;») et leur donnons un pourcentage de largeur défini. Chaque colonne prend la largeur de son en‑tête, ce qui permet de bien dimensionner les colonnes du tableau. Chris Coyier expose cette technique de façon détaillée dans [l'article <i lang="en">Fixed Table Layouts</i> (en anglais)](https://css-tricks.com/fixing-tables-long-strings/).

  Ceci est couplé avec une largeur [`width`](/fr/docs/Web/CSS/width) de 100%, ce qui signifie que le tableau remplira complétement le conteneur dans lequel il sera placé et sera bien adaptatif (même s'il aura besoin de quelques aménagements complémentaires pour avoir un aspect correct sur des écrans étroits).

- La valeur `collapse` pour [`border-collapse`](/fr/docs/Web/CSS/border-collapse) est une bonne pratique courante pour toute mise en page de tableau. Par défaut, quand vous définissez des encadrements pour les éléments d'un tableau, il y a un espace entre eux, comme le montre cette illustration&nbsp;: ![Encadrement des éléments d'un tableau](no-border-collapse.png) Cela n'a pas l'air très joli (même si c'est peut-être le <i lang="en">look</i> que vous voulez, qui sait&nbsp;?) Avec `border-collapse : collapse;`, les bordures se condensent en une seule, ce qui est beaucoup mieux&nbsp;: ![Avec border-collapse: collapse; les encadrements se condensent](border-collapse.png)
- Nous avons mis un cadre ([`border`](/fr/docs/Web/CSS/border)) tout autour du tableau, cadre nécessaire, car nous encadrerons plus tard l'intitulé et le pied de page. Si vous n'avez pas d'encadrement général du tableau, terminer par un espacement donne un aspect insolite et peu net.
- Nous avons défini une valeur pour le remplissage ([`padding`](/fr/docs/Web/CSS/padding)) des éléments [`<th>`](/fr/docs/Web/HTML/Element/th) et [`<td>`](/fr/docs/Web/HTML/Element/td), cela donne un peu d'air aux données et facilite la lecture de la table.

À ce stade, le tableau a déjà meilleure mine&nbsp;:

![Première mise en forme du tableau](table-with-spacing.png)

### Une typographie simple

Occupons-nous maintenant du texte.

Tout d'abord, nous avons trouvé une police sur [Google Fonts](https://www.google.com/fonts) convenant aux tableaux concernant les groupes punk. Vous pouvez visiter le site vous‑même et en choisir une autre si vous le souhaitez. Il vous suffit de remplacer l'élément [`<link>`](/fr/docs/Web/HTML/Element/link) fourni et la déclaration [`font-family`](/fr/docs/Web/CSS/font-family) personnalisée par celles données par Google Fonts.

D'abord, ajoutons l'élément [`<link>`](/fr/docs/Web/HTML/Element/link) suivant dans l'élément HTML `head`, juste au‑dessus de l'élément `<link>` déjà présent&nbsp;:

```html
<link
  href="https://fonts.googleapis.com/css?family=Rock+Salt"
  rel="stylesheet"
  type="text/css" />
```

Puis ajoutons le CSS suivant dans le fichier `style.css`, sous ce qui a déjà été ajouté&nbsp;:

```css
/* typographie */

html {
  font-family: "helvetica neue", helvetica, arial, sans-serif;
}

thead th,
tfoot th {
  font-family: "Rock Salt", cursive;
}

th {
  letter-spacing: 2px;
}

td {
  letter-spacing: 1px;
}

tbody td {
  text-align: center;
}

tfoot th {
  text-align: right;
}
```

Rien de vraiment relatif aux tableaux ici&nbsp;; nous modifions simplement le style de la police pour faciliter la lecture&nbsp;

- Nous avons mis en place un empilement global de polices sans empattement. Il s'agit d'un choix purement stylistique. Nous avons également défini une valeur de police personnalisée pour en-têtes dans les éléments [`<thead>`](/fr/docs/Web/HTML/Element/thead) et [`<tfoot>`](/fr/docs/Web/HTML/Element/tfoot) pour un look accrocheur et «&nbsp;<i lang="en">punky</i>&nbsp;».
- Nous avons aussi défini une valeur particulière de [`letter-spacing`](/fr/docs/Web/CSS/letter-spacing) pour les en‑têtes et les cellules pour améliorer la lisibilité. C'est encore un choix purement subjectif et stylistique.
- Nous avons choisi un alignement centré pour le texte des cellules dans l'élément [`<tbody>`](/fr/docs/Web/HTML/Element/tbody) pour qu'il soit bien aligné avec les têtes de colonnes. Par défaut, les cellules ont une valeur [`text-align`](/fr/docs/Web/CSS/text-align) égale à `left` et les en-têtes à `center`. Cependant, en général, on obtient un meilleur aspect en prenant le même alignement pour les deux. L'épaisseur par défaut sur les polices de l'en‑tête est suffisante pour différencier ces dernières du contenu des cellules.
- Nous avons aligné à droite le titre à l'intérieur de l'élément [`<tfoot>`](/fr/docs/Web/HTML/Element/tfoot) pour qu'il soit mieux associé visuellement au résultat des données.

Cela donne un résultat un peu plus propre&nbsp;:

![Deuxième mise en forme : modifications des polices de caractères.](table-with-typography.png)

### Graphisme et couleurs

Maintenant, attaquons-nous au graphisme et aux couleurs&nbsp;! Comme ce tableau est plein de postures punk, nous allons lui donner un style assez clinquant qui devrait lui convenir. Ne vous inquiétez pas, vous n'avez pas à rendre vos tableaux autant tape-à-l'œil. Vous pouvez opter pour quelque chose de plus subtil et d'un meilleur goût.

Commençons par ajouter le CSS suivant à la fin du fichier `style.css`&nbsp;:

```css
/* graphisme et couleurs */

thead,
tfoot {
  background: url(leopardskin.jpg);
  color: white;
  text-shadow: 1px 1px 1px black;
}

thead th,
tfoot th,
tfoot td {
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.5)
  );
  border: 3px solid purple;
}
```

Encore une fois, il n'y a rien de propre aux tableaux ici, mais cela vaut la peine de noter certaines choses.

Nous avons ajouté un élément [`background-image`](/fr/docs/Web/CSS/background-image) aux éléments [`<thead>`](/fr/docs/Web/HTML/Element/thead) et [`<tfoot>`](/fr/docs/Web/HTML/Element/tfoot) et changé la valeur de [`color`](/fr/docs/Web/CSS/color) du texte dans l'en-tête et le pied de page en blanc (nous l'avons aussi ombré avec [`text-shadow`](/fr/docs/Web/CSS/text-shadow)) pour qu'il soit bien lisible. Assurez‑vous que le texte contraste bien avec l'arrière-plan pour qu'il soit bien lisible.

Nous avons également ajouté un dégradé linéaire aux éléments [`<th>`](/fr/docs/Web/HTML/Element/th) et [`<td>`](/fr/docs/Web/HTML/Element/td) à l'intérieur de l'en-tête et du pied de page pour donner un peu de texture ainsi qu'un cadre mauve brillant. Il est utile d'avoir plusieurs éléments imbriqués disponibles pour pouvoir superposer les styles. Oui, nous aurions pu mettre image de fond et dégradé linéaire sur les éléments [`<thead>`](/fr/docs/Web/HTML/Element/thead) et [`<tfoot>`](/fr/docs/Web/HTML/Element/tfoot) en utilisant plusieurs images de fond, mais nous avons décidé de le faire séparément pour le bénéfice des navigateurs plus anciens qui ne prennent pas en charge plusieurs images de fond ou dégradés linéaires.

#### Alternance de couleurs pour les lignes

Nous avons souhaité dédier un paragraphe séparé à la mise en place d'une alternance de couleurs pour les lignes&nbsp;: celle-ci permet de faire ressortir les données des tableaux, facilitant leur lecture et leur analyse. Ajoutez le CSS suivant au bas de votre fichier `style.css`&nbsp;:

```css
/* Alternance de couleur */

tbody tr:nth-child(odd) {
  background-color: #ff33cc;
}

tbody tr:nth-child(even) {
  background-color: #e495e4;
}

tbody tr {
  background-image: url(noise.png);
}

table {
  background-color: #ff33cc;
}
```

- Plus haut, nous avons vu comment utiliser le sélecteur [`:nth-child`](/fr/docs/Web/CSS/:nth-child) pour sélectionner un élément enfant. Il est aussi possible de donner une formule en paramètre afin qu'il sélectionne une suite d'éléments. La formule `2n-1` sélectionne tous les enfants impairs (1, 3, 5, etc.) et la formule `2n` sélectionne tous les enfants pairs (2, 4, 6, etc.). Nous avons utilisé les mots-clés `odd` (impair) et `even` (pair) dans notre code&nbsp;; ils font exactement la même chose que les formules susmentionnées. Dans ce cas, nous donnons aux lignes paires et impaires des couleurs différentes (clinquantes).
- Nous avons également ajouté un motif d'arrière-plan répétitif sur toutes les lignes&nbsp;; il donne un peu de bruit (une image PNG semi-transparente avec un peu de distorsion visuelle) pour donner une certaine texture.
- Finalement, nous avons donné à toute la table une couleur de fond unie de façon à ce que les navigateurs qui ne prennent pas en charge le sélecteur `:nth-child` disposent encore d'une teinte de fond pour les lignes du corps de tableau.

Et voici l'explosion de couleurs résultante&nbsp;:

![Troisième mise en forme : coloriage agressif](table-with-color.png)

Maintenant, peut-être trouverez‑vous que nous avons forcé la dose et que ce n'est pas à votre goût. Mais nous avons voulu montrer ici que les tableaux ne sont pas forcément ennuyeux ou académiques.

### Mettre en forme la légende

Il nous reste une dernière chose à faire avec ce tableau&nbsp;: mettre en forme la légende. Pour ce faire, ajoutez ce qui suit à la fin du fichier `style.css`&nbsp;:

```css
/* légende */

caption {
  font-family: "Rock Salt", cursive;
  padding: 20px;
  font-style: italic;
  caption-side: bottom;
  color: #666;
  text-align: right;
  letter-spacing: 1px;
}
```

Rien de remarquable ici, sauf pour la propriété [`caption-side`](/fr/docs/Web/CSS/caption-side) à laquelle on a donné la valeur `bottom`. Elle a pour effet de positionner la légende au bas du tableau, ce qui, avec les autres déclarations, nous donne cet aspect final (voir en direct sur [punk-bands-complete.html](https://mdn.github.io/learning-area/css/styling-boxes/styling-tables/punk-bands-complete.html))&nbsp;:

![Quatrième mise en forme : l'intitulé est disposé en bas à droite à la manière d'une légende de dessin](table-with-caption.png)

## Quelques conseils rapides

Avant de poursuivre, voici une liste rapide des points les plus utiles que nous avons abordés dans cet article&nbsp;:

- Utilisez un balisage de tableau aussi simple que possible et gardez les choses souples, par exemple en utilisant des pourcentages, afin que la disposition soit adaptative.
- Utilisez [`table-layout`](/fr/docs/Web/CSS/table-layout)`: fixed` pour créer une disposition de tableau prévisible qui vous permet de fixer les largeurs de colonnes en définissant la valeur de [`width`](/fr/docs/Web/CSS/width) sur l'élément d'en‑tête ([`<th>`](/fr/docs/Web/HTML/Element/th)).
- Utilisez [`border-collapse`](/fr/docs/Web/CSS/border-collapse)`: collapse` pour faire en sorte que les éléments du tableau fusionnent, produisant un aspect plus net et plus facile à contrôler.
- Utilisez [`<thead>`](/fr/docs/Web/HTML/Element/thead), [`<tbody>`](/fr/docs/Web/HTML/Element/tbody) et [`<tfoot>`](/fr/docs/Web/HTML/Element/tfoot) pour diviser le tableau en unités logiques et disposer d'entités supplémentaires pour l'application du CSS, de sorte qu'il soit plus facile d'empiler les styles si nécessaire.
- Utilisez les alternances de couleur entre les lignes pour mieux les distinguer et en faciliter la lecture.
- Utilisez [`text-align`](/fr/docs/Web/CSS/text-align) pour aligner le texte des éléments [`<th>`](/fr/docs/Web/HTML/Element/th) et [`<td>`](/fr/docs/Web/HTML/Element/td) afin de rendre les choses plus nettes et plus faciles à suivre.

## Testez vos compétences&nbsp;!

Nous voici à la fin de cet article, mais avez-vous mémorisé les informations essentielles&nbsp;? Pour vérifier ce que vous avez retenu, vous pouvez vous évaluer avant de poursuivre&nbsp;: [Testez vos compétences&nbsp;: les tableaux](/fr/docs/Learn/CSS/Building_blocks/Tables_tasks).

## Résumé

Maintenant que le sujet de la mise en forme des tableaux est réglé, voyons ce qui peut nous occuper ensuite. Dans le prochain article, nous verrons [le débogage de CSS](/fr/docs/Learn/CSS/Building_blocks/Debugging_CSS) et comment résoudre des problèmes comme des dispositions qui n'ont pas l'aspect voulu ou des propriétés qui ne s'appliquent pas comme on le voudrait. Ce prochain guide contient des informations sur l'utilisation des outils de développement des navigateurs pour trouver des solutions à ces problèmes.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Images_media_form_elements", "Learn/CSS/Building_blocks/Debugging_CSS", "Learn/CSS/Building_blocks")}}
