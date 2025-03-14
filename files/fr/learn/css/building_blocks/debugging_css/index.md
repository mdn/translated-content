---
title: Déboguer du code CSS
slug: Learn/CSS/Building_blocks/Debugging_CSS
l10n:
  sourceCommit: 458eb9af74287fd15ef8ba9f4ba9aa3423c4cac3
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks")}}

Lorsqu'on écrit du CSS, on peut rencontrer certaines situations où le CSS ne fait pas vraiment ce qu'on attend de lui. Que faire quand rien ne se passe alors qu'un sélecteur devrait cibler un élément&nbsp;? Pourquoi une boîte est-elle d'une taille différente que celle souhaitée&nbsp;? Dans cet article, nous vous guiderons pour le débogage des problèmes CSS et l'utilisation des outils de développement des navigateurs pour le diagnostic.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions informatiques de base, <a href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software">logiciels de base installés</a>, savoir comment <a href="/fr/docs/Learn/Getting_started_with_the_web/Dealing_with_files">manipuler les fichiers</a>, notions de base de HTML (voir <a href="/fr/docs/Learn/HTML/Introduction_to_HTML">Introduction à HTML</a>), une idée générale du fonctionnement de CSS (voir <a href="/fr/docs/Learn/CSS/First_steps">Premiers pas en CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs&nbsp;:</th>
      <td>
        Apprendre les bases des outils de développement des navigateurs, les fonctionnalités d'inspection et l'édition de CSS.
      </td>
    </tr>
  </tbody>
</table>

## Comment accéder aux outils de développements des navigateurs

L'article [Que sont les outils de développement des navigateurs&nbsp;?](/fr/docs/Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools) est un guide expliquant comment accéder aux outils de développement (<i lang="en">devtools</i>) des différents navigateurs sur les différentes plateformes. Même si vous pouvez choisir de développer principalement avec un navigateur donné et vous familiariser ainsi avec les outils de ce navigateur, mieux vaut savoir comment accéder à ces outils dans les différents navigateurs. Cela pourra vous aider si vous observez des résultats différents selon les navigateurs.

Vous pourrez également voir que les navigateurs ont chacun mis l'accent sur différentes parties de leurs outils de développement. Ainsi, Firefox dispose d'excellents outils pour travailler les dispositions CSS&nbsp;: l'inspection et l'édition [des grilles CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_grid_layouts/index.html), [des boîtes flexibles](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_flexbox_layouts/index.html), et [des formes CSS](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_shapes/index.html). Ceci étant, tous les navigateurs disposent des mêmes outils de base, par exemple pour inspecter les propriétés et valeurs appliquées aux éléments d'une page et les modifier depuis l'éditeur.

Dans cet article, nous verrons certaines fonctionnalités utiles des outils de développement de Firefox pour travailler avec CSS. Pour cela, nous utiliserons [un fichier d'exemple](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html). Ouvrez ce fichier dans un nouvel onglet et ouvrez les outils de développement (voir comment dans l'article mentionné ci-avant) pour suivre les exemples de cet article.

## Le DOM ou le code source

Un point qui peut troubler les débutantes et les débutants est la différence de ce qu'on voit entre [le code source de la page](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) (ou le fichier HTML stocké sur le serveur) et ce qu'on voit dans [l'onglet HTML](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#html-pane) des outils de développement. Bien qu'ils se ressemblent, vous pouvez voir des différences.

Le DOM affiché dans le navigateur pourra avoir été normalisé&nbsp;: le navigateur pourra avoir corrigé du HTML mal écrit. Par exemple, si un élément a été ouvert avec une balise `<h2>` mais fermé avec une balise `</h3>`, le navigateur s'adaptera et le HTML visible dans le DOM contiendra la balise `</h2>` comme balise fermante. Le DOM affichera également les modifications apportées par le code JavaScript.

Le code source correspond lui au code source HTML tel que stocké sur le serveur. [L'arborescence HTML](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#html-tree) des outils de développement montre exactement ce qui est rendu par le navigateur, à tout moment et permet de voir ce qui est en train de se passer.

## Inspecter le CSS appliqué

Sélectionnez un élément de votre page en cliquant droit dessus et en sélectionnant «&nbsp;Inspecter&nbsp;» ou en le sélectionnant depuis l'arborescence HTML à gauche dans l'affichage des outils de développement. Avec la page d'exemple, essayez de sélectionner l'élément avec la classe `box1`&nbsp;; il s'agit du premier élément sur la page qui a une boîte avec une bordure autour de lui.

![La page d'exemple pour ce tutoriel avec les outils de développement ouverts.](inspecting1.png)

Si vous observez [l'inspecteur de règles](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) situé à droite du HTML, vous devriez voir les propriétés et valeurs CSS appliquées à cet élément. Vous verrez ainsi les règles qui sont directement appliquées pour la classe `box1`, mais aussi le CSS hérité via les ancêtres de la boîte (ici `<body>`). Cela s'avère utile pour détecter du CSS appliqué, mais inattendu. Cela peut indiquer que la règle est héritée depuis un élément parent et qu'il faut rajouter une règle dans le contexte de l'élément courant pour surcharger cet héritage.

Dans ce panneau, on peut aussi développer les propriétés raccourcies. Dans notre exemple, on utilise la propriété `margin`.

**Cliquez sur la petite flèche pour développer la vue et voir les propriétés détaillées avec leur valeur.**

**Vous pouvez activer/désactiver des valeurs dans l'inspecteur de règles quand le panneau est actif&nbsp;: si vous survolez les règles à la souris, des cases à cocher apparaîtront. Vous pouvez alors décocher une case pour que la règle associée (par exemple celle portant sur `border-radius`) et le CSS correspondant cessera de s'appliquer.**

Vous pouvez utiliser ceci pour comparer l'effet d'une règle ou celui de son absence pour décider s'il faut conserver la règle. Cela peut aussi vous aider à déboguer, par exemple pour déterminer la propriété qui poserait un problème de disposition.

La vidéo qui suit (en anglais) fournit quelques conseils pour déboguer du CSS avec les outils de développement de Firefox&nbsp;:

{{EmbedYouTube("O3DAm82vIvU")}}

## Éditer les valeurs

En plus de permettre l'activation/la désactivation des propriétés, les outils permettent d'éditer leur valeur. Si vous souhaitez voir l'effet d'une autre couleur ou adapter la taille d'un élément, les outils de développement peuvent vous faire gagner du temps plutôt que d'éditer le fichier CSS et de recharger la page.

**Lorsque `box1` est sélectionnée, cliquez sur le cercle coloré qui montre la couleur appliquée à la bordure. Un sélecteur de couleur s'ouvrira alors et vous pourrez essayer différentes couleurs qui seront appliquées en temps réel sur la page. De la même façon, vous pouvez modifier la largeur ou le style de la bordure.**

![Le panneau des styles dans les outils de développement, avec un sélecteur de couleur ouvert.](inspecting2-color-picker.png)

## Ajouter une nouvelle propriété

Vous pouvez utiliser les outils de développement pour ajouter de nouvelles propriétés. Peut-être avez-vous déterminé qu'il ne fallait pas que la boîte hérite de la taille de caractères de l'élément `<body>` et devait avoir sa taille de police à elle&nbsp;? Vous pouvez essayer et voir ce que ça donne depuis les outils de développement avant d'ajouter cette éventuelle modification à votre fichier CSS.

**Vous pouvez cliquer sur l'accolade fermante d'une règle pour commencer à saisir une nouvelle déclaration. Vous pourrez alors saisir une nouvelle propriété (les outils de développement aideront avec une auto-complétion listant les propriétés correspondantes). Dans la page d'exemple, après avoir sélectionné `font-size`, saisissez la valeur que vous souhaitez utiliser. Vous pouvez aussi cliquer sur le bouton + pour ajouter une règle supplémentaire avec le même sélecteur et ajouter vos nouvelles règles ici.**

![Le panneau des outils de développement avec l'ajout d'une nouvelle propriété aux règles, où on voit la liste ouverte des suggestions d'autocomplétion pour font-](inspecting3-font-size.png)

> [!NOTE]
> L'inspecteur de règles contient d'autres fonctionnalités comme la mise en évidence des déclarations avec des valeurs invalides qui sont rayées. Pour en savoir plus, voir [Examiner et éditer le CSS (en anglais)](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html).

## Comprendre le modèle de boîtes

Dans les articles précédents, nous avons abordé [le modèle de boîtes](/fr/docs/Learn/CSS/Building_blocks/The_box_model) et le fait que le calcul de la taille des éléments dépend de leur taille mais aussi du remplissage (<i lang="en">padding</i>) et des bordures. Les outils de développement permettent de mieux comprendre comment la taille d'un élément est calculée.

La [vue Disposition](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#layout-view) affiche un diagramme du modèle de boîtes pour l'élément sélectionné, avec une description des propriétés et valeurs qui modifient la disposition de l'élément. Cela inclut une description des propriétés qui pourraient ne pas être explicitement utilisées sur l'élément, mais qui ont des valeurs initiales.

Dans ce panneau, une des propriétés détaillées est `box-sizing`, qui contrôle le modèle de boîtes utilisé par l'élément.

**Comparez les deux boîtes avec les classes `box1` et `box2`. Les deux ont la même largeur appliquée (400px), mais `box1` apparaît avec une largeur visuelle supérieure. Vous pouvez voir dans le panneau Disposition qu'elle utilise `content-box`. Avec cette valeur, la taille visuelle est la taille de l'élément à laquelle on ajoute la largeur du remplissage et des largeurs.**

L'élément avec la classe `box2` utilise `border-box`, ce qui signifie que le remplissage et la bordure sont soustraits à la taille donnée à l'élément. Autrement dit, l'espace occupé par l'élément sur la page correspond à la taille indiquée, ici `width: 400px`.

![La section Disposition des outils de développement.](inspecting4-box-model.png)

> [!NOTE]
> Pour en savoir plus, voir [Examiner et inspecter le modèle de boîtes (en anglais)](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html).

## Résoudre des problèmes de spécificité

Pendant le développement, notamment lors de l'édition du CSS d'un site existant, il peut s'avérer difficile d'appliquer du CSS comme on le voudrait. Quoi qu'il arrive, l'élément ciblé ne semble pas répondre aux changements apportés au CSS. Généralement, cela vient d'un sélecteur plus spécifique, qui prend la priorité sur les changements apportés, et c'est là que les outils de développement peuvent vous aider.

Dans notre fichier d'exemple, nous avons deux mots placés chacun dans un élément `<em>`. L'un s'affiche en orange et l'autre en rose. Dans la feuille de style, nous avons&nbsp;:

```css
em {
  color: hotpink;
  font-weight: bold;
}
```

Mais il y a également cette règle pour le sélecteur `.special`&nbsp;:

```css
.special {
  color: orange;
}
```

Si vous vous rappelez l'article sur [la cascade et l'héritage](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) où nous avons abordé la spécificité, les sélecteurs de classe sont plus spécifiques que les sélecteurs d'élément. Pour notre exemple, c'est donc la deuxième règle qui décide de la couleur. Les outils de développement peuvent vous aider à identifier de tels problèmes, notamment lorsque l'information est enfouie dans une feuille de style conséquente.

**Inspectez l'élément `<em>` avec la classe `.special`, les outils de développement montreront que c'est la couleur orange qui s'applique, mais aussi que la propriété `color` appliquée via le sélecteur `<em>` est barrée. Vous pouvez alors voir que le sélecteur de classe surcharge le sélecteur d'élément.**

![Sélectionner un élément em et consulter les outils de développement afin de déterminer ce qui surcharge la couleur.](inspecting5-specificity.png)

## Déboguer des problèmes CSS

Les outils de développement sont d'une grande aide pour résoudre des problèmes de CSS. Que faire si vous vous trouvez dans une situation où le CSS ne se comporte pas comme vous le souhaitez&nbsp;? Les étapes suivantes devraient vous aider.

### Prendre du recul

Tout problème (de code) peut être frustrant, notamment les problèmes CSS, car il n'y a pas de message d'erreur explicite qu'on pourrait chercher en ligne pour trouver une solution. Si le problème que vous rencontrez vous frustre, n'hésitez pas à laisser de côté le sujet pendant quelques instants (marchez quelques minutes, prenez une boisson, discutez avec quelqu'un, ou travaillez sur un autre sujet). Il arrive parfois que la solution apparaisse lorsqu'on arrête de penser au problème, et même si ça n'est pas toujours le cas, réfléchir à un problème de façon plus sereine sera plus facile.

### Est-ce que le code HTML et le code CSS sont valides&nbsp;?

Bien que les navigateurs s'attendent à du code CSS et HTML bien écrit, ils s'adaptent pour afficher les pages au mieux s'il y a des erreurs dans le balisage ou la feuille de style. Si vous avez des erreurs dans votre code, le navigateur pourra tenter de deviner ce que vous aviez en tête mais aboutir à une conclusion différente. De plus, deux navigateurs différents pourraient s'adapter de façons différentes. Une bonne première étape consiste donc à valider le document HTML et la feuille CSS avec un validateur qui pourrait détecter des erreurs et proposer des corrections.

- [Validateur CSS](https://jigsaw.w3.org/css-validator/)
- [Validateur HTML](https://validator.w3.org/)

### Est-ce que la propriété et la valeur sont prises en charge par le navigateur utilisé&nbsp;?

Les navigateurs ignorent le CSS qu'ils ne prennent pas en charge. Si la propriété ou la valeur utilisée n'est pas prise en charge par le navigateur utilisé pour tester, rien ne cassera, mais le CSS ne sera pas appliqué. Les outils de développement mettront généralement en avant les propriétés et valeurs qu'ils ne prennent pas en charge. Dans la capture d'écran qui suit, on voit que le navigateur ne prend pas en charge la valeur `subgrid` pour [`grid-template-columns`](/fr/docs/Web/CSS/grid-template-columns).

![Une image des outils de développement de Firefox où la règle grid-template-columns: subgrid est barrée, car la valeur subgrid n'est pas prise en charge.](no-support.png)

Vous pouvez également consulter les tableaux de compatibilité des navigateurs en bas de chaque page MDN des propriétés. Ces tableaux contiennent les informations de prise en charge pour chaque propriété, avec un détail des différents usages et valeurs si la compatibilité est différente. [Voir le tableau de compatibilité pour la propriété `shape-outside`](/fr/docs/Web/CSS/shape-outside#compatibilité_des_navigateurs).

### Est-ce que quelque chose outrepasse votre CSS&nbsp;?

C'est ici que les informations apprises à propos de la spécificité vous seront utiles. Si quelque chose de plus spécifique outrepassant ce que vous essayez d'appliquer, ça peut devenir frustrant que d'essayer de deviner d'où ça vient. Toutefois, comme nous l'avons vu ci-avant, les outils de développement vous montreront le CSS appliqué et vous permettront de déterminer un nouveau sélecteur suffisamment spécifique.

### Construire un cas de test minimal pour le problème

Si votre problème n'est pas résolu après avoir suivi ces étapes, vous devrez poursuivre l'enquête. La meilleure chose à faire à ce niveau est de créer un cas de test minimal. Savoir «&nbsp;réduire un problème&nbsp;» est une compétence très utile. Cela vous aidera à trouver des problèmes dans votre code et celui de vos collègues, et vous permettra également de rapporter des bogues et de demander de l'aide plus efficacement.

Un cas de test minimal est un exemple de code qui met en évidence le problème de la façon la plus simple possible, et où on a retiré tout le contenu et la mise en forme qui ne sont pas liés au problème. Généralement, cela consistera à prendre le code problématique de votre disposition et à créer un petit exemple, montrant uniquement ce code ou cette fonctionnalité.

Pour créer un cas de test minimal&nbsp;:

1. Si votre balisage est généré dynamiquement, par exemple avec un système de gestion de contenu (CMS), construisez une version statique du résultat produit et qui montre le problème. Un site de partage de code comme [CodePen](https://codepen.io/) pourra vous être utile pour héberger le cas de test, ces sites sont accessibles en ligne et permettent de partager l'exemple. Vous pouvez commencer en visualisant le code source de la page et en copiant le code HTML dans CodePen, puis récupérer le CSS et JavaScript pertinents pour les y inclure également. Une fois que c'est fait, assurez-vous que le problème est toujours là.
2. Si vous retirez le code JavaScript et que le problème persiste, retirez le JavaScript de l'exemple partagé. Si retirer le code JavaScript enlève le problème, retirez autant de JavaScript que possible et gardez ce qui participe au problème.
3. Retirez tout le HTML qui ne participe pas au problème. Vous pouvez retirer les composants et même les éléments principaux de la disposition. Là aussi, essayez d'avoir le moins de code possible, et que le code qui reste permette d'observer le problème.
4. Retirez tout le CSS qui n'a pas d'effet sur le problème.

En suivant ces étapes, vous pourrez éventuellement découvrir ce qui pose problème, ou au moins activer/désactiver le problème en retirant quelque chose de particulier. N'hésitez pas à ajouter des commentaires dans votre code au fur et à mesure de vos découvertes. Si vous avez besoin d'aide, ces commentaires permettront à la personne qui vous aidera de savoir ce que vous avez déjà essayé. Cela pourrait aussi vous fournir suffisamment d'informations pour rechercher des problèmes semblables et leurs contournements.

Si vous continuez de coincer sur le problème, avoir un cas de test minimal vous permettra de demander de l'aide, en le postant sur un forum ou en le montrant à un collègue. Vous aurez plus facilement de l'aide si vous montrez que vous avez déjà isolé le problème et identifié où il se pose précisément. Une développeuse ou un développeur plus expérimenté⋅e pourra peut-être comprendre le problème et vous guider dans la bonne direction. Même si ce n'est pas le cas, votre cas de test minimal permettra à la personne qui vous aide d'intervenir rapidement et de vous assister d'une façon ou d'une autre.

Si le problème que vous rencontrez est un vrai bogue, ce cas de test minimal pourra être utilisé pour renseigner le rapport de bogue avec les informations nécessaires pour l'éditeur du navigateur (par exemple, pour Firefox, c'est [le site Bugzilla](https://bugzilla.mozilla.org) qui permet de rapporter des bogues).

En gagnant en expérience avec CSS, vous irez de plus en plus vite pour comprendre les problèmes rencontrés. Toutefois, même les personnes les plus expérimentées peuvent se demander ce qui ne tourne pas rond. Utiliser une approche méthodique, construire un cas de test minimal, et expliquer le problème à quelqu'un d'autre permettra généralement d'aboutir à une solution.

## Résumé

Et voilà, nous avons vu une introduction au débogage de CSS qui devrait vous doter de compétences utiles pour analyser d'éventuels problèmes CSS (ou d'autres langages) à l'avenir.

Dans le dernier article de ce module, nous verrons comment [organiser votre code CSS](/fr/docs/Learn/CSS/Building_blocks/Organizing).

{{PreviousMenuNext("Learn/CSS/Building_blocks/Styling_tables", "Learn/CSS/Building_blocks/Organizing", "Learn/CSS/Building_blocks")}}
