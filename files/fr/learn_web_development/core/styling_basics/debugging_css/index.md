---
title: Déboguer du code CSS
slug: Learn_web_development/Core/Styling_basics/Debugging_CSS
l10n:
  sourceCommit: 418fefaa02f8e1ea53d53cb6fc510a4dc4100dc5
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}

Il arrive parfois, lorsque vous écrivez du CSS, que vous soyez confronté à un problème où votre code ne semble pas fonctionner comme prévu. Vous pensez peut-être qu'un certain sélecteur doit correspondre à un élément, mais rien ne se passe, ou bien une boîte a une taille différente de celle que vous attendiez. Cet article vous donne des conseils pour déboguer un problème de CSS et vous montre comment les outils de développement intégrés à tous les navigateurs modernes peuvent vous aider à comprendre ce qui se passe.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe HTML de base</a
        >, Notions de base en CSS (abordées dans les leçons précédentes de ce module)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Utiliser le <a href="https://validator.w3.org/">validateur HTML <sup>(angl.)</sup></a> pour vérifier si vous avez des balises invalides sur votre page qui causent des problèmes CSS.</li>
          <li>Utiliser le <a href="https://jigsaw.w3.org/css-validator/">validateur CSS <sup>(angl.)</sup></a> pour vérifier si votre code CSS est mal formé.</li>
          <li>Utiliser les outils de développement du navigateur pour inspecter le CSS appliqué aux éléments HTML d'une page.</li>
          <li>Modifier le CSS appliqué pour déterminer les changements nécessaires afin d'obtenir le résultat souhaité. Cela inclut l'activation et la désactivation des déclarations, la modification des valeurs et l'ajout de nouvelles déclarations.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Comment accéder aux outils de développements des navigateurs

L'article [Qu'est-ce que sont les outils de développement&nbsp;?](/fr/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) explique comment accéder à ces outils dans différents navigateurs et sur différentes plateformes. Même si vous choisissez de développer principalement dans un navigateur particulier, et que vous vous familiarisez donc davantage avec les outils inclus dans ce navigateur, il est utile de savoir comment y accéder dans d'autres navigateurs. Cela vous aide si vous constatez des différences d'affichage entre plusieurs navigateurs.

Dans cette leçon, nous allons examiner certaines fonctionnalités utiles des DevTools de Firefox pour travailler avec le CSS. Pour ce faire, nous utilisons [un fichier d'exemple <sup>(angl.)</sup>](https://mdn.github.io/css-examples/learn/inspecting/inspecting.html). Ouvrez-le dans un nouvel onglet si vous souhaitez suivre, puis ouvrez vos DevTools comme décrit dans l'article lié ci-dessus.

## Le DOM ou le code source

Quelque chose qui peut dérouter les débutant·e·s avec les outils de développement, c'est la différence entre ce que l'on voit lorsqu'on [affiche le code source <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/view_source/index.html) d'une page web ou qu'on consulte le fichier HTML mis en ligne sur le serveur, et ce que l'on voit dans le [volet HTML <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#html-pane) de l'outil de développement. Bien que cela ressemble globalement à ce que l'on voit dans la vue Code source, il existe quelques différences.

Dans le DOM affiché, le navigateur peut avoir normalisé le code HTML, par exemple en corrigeant à votre place certaines erreurs de syntaxe. Si vous avez mal fermé un élément, par exemple en ouvrant un `<h2>` mais en le fermant avec un `</h3>`, le navigateur devine ce que vous vouliez faire et le code HTML du DOM ferme correctement le `<h2>` ouvert avec un `</h2>`. Le DOM affiche également toutes les modifications apportées par JavaScript.

En comparaison, Afficher la source correspond au code source HTML tel qu'il est stocké sur le serveur. [L'arborescence HTML <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#html-tree) dans vos outils de développement montre exactement ce que le navigateur affiche à un moment donné, ce qui vous donne un aperçu de ce qui se passe réellement.

## Inspecter le CSS appliqué

Sélectionnez un élément de votre page, soit en cliquant dessus avec le bouton droit de la souris, soit en appuyant sur Ctrl + clic et en choisissant _Inspecter_, soit en le sélectionnant dans l'arborescence HTML située à gauche de la fenêtre des outils de développement. Essayez de sélectionner l'élément dont la classe est `boite1`&nbsp;; il s'agit du premier élément de la page entouré d'un cadre.

![La page d'exemple pour ce tutoriel avec les outils de développement ouverts.](inspecting1.png)

Si vous regardez la [vue des règles <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#rules-view) à droite de votre HTML, vous devez pouvoir voir les propriétés CSS et les valeurs appliquées à cet élément. Vous voyez les règles directement appliquées à la classe `boite1` ainsi que le CSS hérité par la boîte de ses ancêtres, dans ce cas de `<body>`. C'est utile si vous voyez du CSS appliqué que vous ne vous attendiez pas à voir. Peut-être qu'il est hérité d'un élément parent et que vous devez ajouter une règle pour l'écraser dans le contexte de cet élément.

Il est également utile de pouvoir développer les propriétés raccourcies. Dans notre exemple, l'abréviation `margin` est utilisée.

**Cliquez sur la petite flèche pour développer la vue, montrant les différentes propriétés longues et leurs valeurs.**

**Vous pouvez activer ou désactiver les valeurs dans la vue des règles lorsque ce panneau est actif — si vous maintenez votre souris dessus, des cases à cocher apparaissent. Décochez la case d'une règle, par exemple `border-radius`, et le CSS n'est plus appliqué.**

Vous pouvez utiliser cela pour faire une comparaison A/B, en décidant si quelque chose est mieux avec une règle appliquée ou non, et aussi pour aider à déboguer — par exemple, si une mise en page ne fonctionne pas correctement et que vous essayez de déterminer quelle propriété cause le problème.

## Éditer les valeurs

En plus de permettre l'activation/la désactivation des propriétés, les outils permettent d'éditer leur valeur. Si vous souhaitez voir l'effet d'une autre couleur ou adapter la taille d'un élément, les outils de développement peuvent vous faire gagner du temps plutôt que d'éditer le fichier CSS et de recharger la page.

**Lorsque `boite1` est sélectionnée, cliquez sur le cercle coloré qui montre la couleur appliquée à la bordure. Un sélecteur de couleur s'ouvre alors et vous pouvez essayer différentes couleurs qui sont appliquées en temps réel sur la page. De la même façon, vous pouvez modifier la largeur ou le style de la bordure.**

![Le panneau des styles dans les outils de développement, avec un sélecteur de couleur ouvert.](inspecting2-color-picker.png)

## Ajouter une nouvelle propriété

Vous pouvez utiliser les outils de développement pour ajouter de nouvelles propriétés. Peut-être avez-vous déterminé qu'il ne fallait pas que la boîte hérite de la taille de caractères de l'élément `<body>` et devait avoir sa taille de police à elle&nbsp;? Vous pouvez essayer et voir ce que ça donne depuis les outils de développement avant d'ajouter cette éventuelle modification à votre fichier CSS.

**Vous pouvez cliquer sur l'accolade fermante d'une règle pour commencer à saisir une nouvelle déclaration. Vous pouvez alors saisir une nouvelle propriété (les outils de développement aident avec une auto-complétion listant les propriétés correspondantes). Dans la page d'exemple, après avoir sélectionné `font-size`, saisissez la valeur que vous souhaitez utiliser. Vous pouvez aussi cliquer sur le bouton + pour ajouter une règle supplémentaire avec le même sélecteur et ajouter vos nouvelles règles ici.**

![Le panneau des outils de développement avec l'ajout d'une nouvelle propriété aux règles, où on voit la liste ouverte des suggestions d'autocomplétion pour font-](inspecting3-font-size.png)

> [!NOTE]
> L'inspecteur de règles contient d'autres fonctionnalités comme la mise en évidence des déclarations avec des valeurs invalides qui sont rayées. Pour en savoir plus, voir [Examiner et éditer le CSS <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html).

## Comprendre le modèle de boîtes

Dans les articles précédents, nous avons abordé [le modèle de boîtes](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model) et le fait que le calcul de la taille des éléments dépend de leur taille mais aussi du remplissage (<i lang="en">padding</i> en anglais) et des bordures. Les outils de développement permettent de mieux comprendre comment la taille d'un élément est calculée.

La [vue Disposition <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/ui_tour/index.html#layout-view) affiche un diagramme du modèle de boîtes pour l'élément sélectionné, avec une description des propriétés et valeurs qui modifient la disposition de l'élément. Cela inclut une description des propriétés qui pourraient ne pas être explicitement utilisées sur l'élément, mais qui ont des valeurs initiales.

Dans ce panneau, une des propriétés détaillées est `box-sizing`, qui contrôle le modèle de boîtes utilisé par l'élément.

**Comparez les deux boîtes avec les classes `boite1` et `boite2`. Les deux ont la même largeur appliquée (400px), mais `boite1` apparaît avec une largeur visuelle supérieure. Vous pouvez voir dans le panneau Disposition qu'elle utilise `content-box`. Avec cette valeur, la taille visuelle est la taille de l'élément à laquelle on ajoute la largeur du remplissage et des largeurs.**

L'élément avec la classe `boite2` utilise `border-box`, ce qui signifie que le remplissage et la bordure sont soustraits à la taille donnée à l'élément. Autrement dit, l'espace occupé par l'élément sur la page correspond à la taille indiquée, ici `width: 400px`.

![La section Disposition des outils de développement.](inspecting4-box-model.png)

> [!NOTE]
> Pour en savoir plus, voir [Examiner et inspecter le modèle de boîtes <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html).

## Résoudre des problèmes de spécificité

Pendant le développement, notamment lors de l'édition du CSS d'un site existant, il peut s'avérer difficile d'appliquer du CSS comme on le veut. Quoi qu'il arrive, l'élément ciblé ne semble pas répondre aux changements apportés au CSS. Généralement, cela vient d'un sélecteur plus spécifique, qui prend la priorité sur les changements apportés, et c'est là que les outils de développement peuvent vous aider.

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

Si vous vous rappelez l'article sur [la gestion des conflits](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts) où nous avons abordé la spécificité, les sélecteurs de classe sont plus spécifiques que les sélecteurs d'élément. Pour notre exemple, c'est donc la deuxième règle qui décide de la couleur. Les outils de développement peuvent vous aider à identifier de tels problèmes, notamment lorsque l'information est enfouie dans une feuille de style conséquente.

**Inspectez l'élément `<em>` avec la classe `.special`, les outils de développement montrent que c'est la couleur orange qui s'applique, mais aussi que la propriété `color` appliquée par le sélecteur `<em>` est barrée. Vous pouvez alors voir que le sélecteur de classe surcharge le sélecteur d'élément.**

![Sélectionner un élément em et consulter les outils de développement afin de déterminer ce qui surcharge la couleur.](inspecting5-specificity.png)

## Déboguer des problèmes CSS

Les outils de développement sont d'une grande aide pour résoudre des problèmes de CSS. Que faire si vous vous trouvez dans une situation où le CSS ne se comporte pas comme vous le souhaitez&nbsp;? Les étapes suivantes devraient vous aider.

### Prendre du recul

Tout problème (de code) peut être frustrant, notamment les problèmes CSS, car il n'y a pas de message d'erreur explicite qu'on peut chercher en ligne pour trouver une solution. Si le problème que vous rencontrez vous frustre, n'hésitez pas à laisser de côté le sujet pendant quelques instants (marchez quelques minutes, prenez une boisson, discutez avec quelqu'un, ou travaillez sur un autre sujet). Il arrive parfois que la solution apparaisse lorsqu'on arrête de penser au problème, et même si ça n'est pas toujours le cas, réfléchir à un problème de façon plus sereine est plus facile.

### Est-ce que le code HTML et le code CSS sont valides&nbsp;?

Bien que les navigateurs s'attendent à du code CSS et HTML bien écrit, ils s'adaptent pour afficher les pages au mieux s'il y a des erreurs dans le balisage ou la feuille de style. Si vous avez des erreurs dans votre code, le navigateur peut tenter de deviner ce que vous aviez en tête mais aboutir à une conclusion différente. De plus, deux navigateurs différents pourraient s'adapter de façons différentes. Une bonne première étape consiste donc à valider le document HTML et la feuille CSS avec un validateur qui peut détecter des erreurs et proposer des corrections.

- [Validateur CSS <sup>(angl.)</sup>](https://jigsaw.w3.org/css-validator/)
- [Validateur HTML <sup>(angl.)</sup>](https://validator.w3.org/)

### Est-ce que la propriété et la valeur sont prises en charge par le navigateur utilisé ?

Les navigateurs ignorent le CSS qu'ils ne prennent pas en charge. Si la propriété ou la valeur utilisée n'est pas prise en charge par le navigateur utilisé pour tester, rien ne casse, mais le CSS n'est pas appliqué. Les outils de développement mettent généralement en avant les propriétés et valeurs qu'ils ne prennent pas en charge. Dans la capture d'écran qui suit, on voit que le navigateur ne prend pas en charge la valeur `subgrid` pour [`grid-template-columns`](/fr/docs/Web/CSS/Reference/Properties/grid-template-columns).

![Une image des outils de développement de Firefox où la règle grid-template-columns: subgrid est barrée, car la valeur subgrid n'est pas prise en charge.](no-support.png)

Vous pouvez également consulter les tableaux de compatibilité des navigateurs en bas de chaque page MDN des propriétés. Ces tableaux contiennent les informations de prise en charge pour chaque propriété, avec un détail des différents usages et valeurs si la compatibilité est différente. [Voir le tableau de compatibilité pour la propriété `shape-outside`](/fr/docs/Web/CSS/Reference/Properties/shape-outside#compatibilité_des_navigateurs).

### Est-ce que quelque chose outrepasse votre CSS ?

C'est ici que les informations apprises à propos de la spécificité vous sont utiles. Si quelque chose de plus spécifique outrepassant ce que vous essayez d'appliquer, ça peut devenir frustrant que d'essayer de deviner d'où ça vient. Toutefois, comme nous l'avons vu ci-avant, les outils de développement vous montrent le CSS appliqué et vous permettent de déterminer un nouveau sélecteur suffisamment spécifique.

### Construire un cas de test minimal pour le problème

Si votre problème n'est pas résolu après avoir suivi ces étapes, vous devez poursuivre l'enquête. La meilleure chose à faire à ce niveau est de créer un cas de test minimal. Savoir «&nbsp;réduire un problème&nbsp;» est une compétence très utile. Cela vous aide à trouver des problèmes dans votre code et celui de vos collègues, et vous permet également de rapporter des bogues et de demander de l'aide plus efficacement.

Un cas de test minimal est un exemple de code qui met en évidence le problème de la façon la plus simple possible, et où on a retiré tout le contenu et la mise en forme qui ne sont pas liés au problème. Généralement, cela consiste à prendre le code problématique de votre disposition et à créer un petit exemple, montrant uniquement ce code ou cette fonctionnalité.

Pour créer un cas de test minimal&nbsp;:

1. Si votre balisage est généré dynamiquement, par exemple avec un système de gestion de contenu (CMS), construisez une version statique du résultat produit et qui montre le problème. Un site de partage de code comme [CodePen](https://codepen.io/) peut vous être utile pour héberger le cas de test, ces sites sont accessibles en ligne et permettent de partager l'exemple. Vous pouvez commencer en visualisant le code source de la page et en copiant le code HTML dans CodePen, puis récupérer le CSS et JavaScript pertinents pour les y inclure également. Une fois que c'est fait, assurez-vous que le problème est toujours là.
2. Si vous retirez le code JavaScript et que le problème persiste, retirez le JavaScript de l'exemple partagé. Si retirer le code JavaScript enlève le problème, retirez autant de JavaScript que possible et gardez ce qui participe au problème.
3. Retirez tout le HTML qui ne participe pas au problème. Vous pouvez retirer les composants et même les éléments principaux de la disposition. Là aussi, essayez d'avoir le moins de code possible, et que le code qui reste permette d'observer le problème.
4. Retirez tout le CSS qui n'a pas d'effet sur le problème.

En suivant ces étapes, vous pouvez éventuellement découvrir ce qui pose problème, ou au moins activer/désactiver le problème en retirant quelque chose de particulier. N'hésitez pas à ajouter des commentaires dans votre code au fur et à mesure de vos découvertes. Si vous avez besoin d'aide, ces commentaires permettent à la personne qui vous aide de savoir ce que vous avez déjà essayé. Cela peut aussi vous fournir suffisamment d'informations pour rechercher des problèmes semblables et leurs contournements.

Si vous continuez de coincer sur le problème, avoir un cas de test minimal vous permet de demander de l'aide, en le postant sur un forum ou en le montrant à un collègue. Vous avez plus facilement de l'aide si vous montrez que vous avez déjà isolé le problème et identifié où il se pose précisément. Une développeuse ou un développeur plus expérimenté⋅e peut peut-être comprendre le problème et vous guider dans la bonne direction. Même si ce n'est pas le cas, votre cas de test minimal permet à la personne qui vous aide d'intervenir rapidement et de vous assister d'une façon ou d'une autre.

Si le problème que vous rencontrez est un vrai bogue, ce cas de test minimal peut être utilisé pour renseigner le rapport de bogue avec les informations nécessaires pour l'éditeur du navigateur (par exemple, pour Firefox, c'est [le site Bugzilla <sup>(angl.)</sup>](https://bugzilla.mozilla.org) qui permet de rapporter des bogues).

En gagnant en expérience avec CSS, vous irez de plus en plus vite pour comprendre les problèmes rencontrés. Toutefois, même les personnes les plus expérimentées peuvent se demander ce qui ne tourne pas rond. Utiliser une approche méthodique, construire un cas de test minimal, et expliquer le problème à quelqu'un d'autre permettra généralement d'aboutir à une solution.

## Résumé

Et voilà, nous avons vu une introduction au débogage de CSS qui doit vous doter de compétences utiles pour analyser d'éventuels problèmes CSS (ou d'autres langages) à l'avenir.

C'est tout pour ce module. Une fois que vous êtes prêt, vous pouvez passer à notre module [de mise en forme du texte CSS](/fr/docs/Learn_web_development/Core/Text_styling).

## Voir aussi

- [Firefox > Examiner et modifier le CSS <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html), Firefox Source Docs
- [Chrome > Voir et modifier le CSS <sup>(angl.)</sup>](https://developer.chrome.com/docs/devtools/css/), developer.chrome.com

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Home_color_scheme_search", "Learn_web_development/Core/Text_styling", "Learn_web_development/Core/Styling_basics")}}
