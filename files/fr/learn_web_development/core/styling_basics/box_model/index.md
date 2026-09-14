---
title: Le modèle de boîte
short-title: Modèle de boîte
slug: Learn_web_development/Core/Styling_basics/Box_model
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics")}}

Tout élément en CSS est entouré d'une boîte (<i lang="en">box</i> en anglais), et comprendre ces boîtes est essentiel pour pouvoir créer des mises en page plus complexes avec CSS ou pour aligner des éléments entre eux. Dans cette leçon, nous allons examiner le _modèle de boîte CSS_. Vous comprendrez son fonctionnement et la terminologie qui s'y rapporte.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Les bases du HTML (voir
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe de base du HTML</a
        >)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Éléments en bloc et en ligne</li>
          <li>Les différentes boîtes qui composent un élément et comment les mettre en forme — contenu, marge, bordure, remplissage.</li>
          <li>Le modèle de boîte alternatif (accessible avec <code>box-sizing: border-box</code>) et comment il diffère du modèle de boîte classique.</li>
          <li>Effondrement des marges.</li>
          <li>Valeurs d'affichage de base et comment elles affectent le comportement des boîtes — <code>block</code>, <code>inline</code>, <code>inline-block</code>, <code>none</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Les boîtes en ligne et boîte de bloc

En CSS, il existe plusieurs types de boîtes qui se classent généralement dans les catégories des **boîtes en bloc** et des **boîtes en ligne**. Ce type fait référence au comportement de la boîte en termes de mise en page et par rapport aux autres boîtes de la page. Les boîtes possèdent un **type d'affichage interne** et un **type d'affichage externe**.

En général, vous pouvez définir différentes valeurs pour le type d'affichage à l'aide de la propriété {{CSSxRef("display")}}.

Si une boîte a une valeur d'affichage de `block`, alors&nbsp;:

- La boîte commence sur une nouvelle ligne.
- Les propriétés {{CSSxRef("width")}} et {{CSSxRef("height")}} sont respectées.
- Le remplissage, la marge et la bordure entraînent le déplacement des autres éléments hors de la boîte.
- Si {{CSSxRef("width")}} n'est pas défini, la boîte s'étend dans le sens de l'alignement pour remplir l'espace disponible dans son conteneur. Dans la plupart des cas, la boîte a la même largeur que son conteneur, occupant ainsi 100 % de l'espace disponible.

Certains éléments HTML, tels que `<h1>` et `<p>`, utilisent par défaut `block` comme type d'affichage externe.

Si une boîte a un type d'affichage `inline`, alors&nbsp;:

- La boîte ne commence pas sur une nouvelle ligne.
- Les propriétés {{CSSxRef("width")}}, {{CSSxRef("height")}} ainsi que les marges supérieure et inférieure n'ont aucun effet.
- Les marges intérieures et les bordures **supérieures et inférieures** modifient la taille de la boîte sans affecter la position du contenu environnant, ce qui peut entraîner des chevauchements.
- Les marges intérieures, les marges extérieures et les bordures **gauche et droite** affectent la position du contenu en ligne environnant.

Certains éléments HTML, tels que `<a>`, `<span>`, `<em>` et `<strong>`, utilisent par défaut le type d'affichage `inline`.

La mise en page en bloc et en ligne est le comportement par défaut sur le Web. Par défaut et en l'absence d'autres instructions, les éléments à l'intérieur d'une boîte sont également disposés selon le **[cours normal](/fr/docs/Learn_web_development/Core/CSS_layout/Introduction#cours_normal)** et se comportent comme des boîtes en bloc ou en ligne.

## Les types de positionnement intérieur et extérieur

`block` et `inline` sont des valeurs de positionnement dites **extérieures** — elles affectent la manière dont la boîte est disposée par rapport aux autres boîtes autour d'elle. Les boîtes ont également un type de positionnement **intérieur**, qui détermine comment les éléments à l'intérieur de cette boîte sont disposés.

Vous pouvez modifier le type de positionnement intérieur en définissant une valeur de positionnement intérieur, par exemple `display: flex;`. L'élément utilise toujours le type de positionnement extérieur `block`, mais cela change le type de positionnement intérieur en `flex`. Tous les enfants directs de cette boîte deviennent des éléments flexibles et se comportent selon la spécification [de boîte flexible](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox).

Lorsque vous étudiez la mise en page CSS plus en détail, vous rencontrez [`flex`](/fr/docs/Learn_web_development/Core/CSS_layout/Flexbox) et diverses autres valeurs de positionnement intérieur que vos boîtes peuvent avoir, par exemple [`grid`](/fr/docs/Learn_web_development/Core/CSS_layout/Grids).

Ne vous inquiétez pas trop de la terminologie intérieure et extérieure pour l'instant&nbsp;; c'est ce qui se passe en interne, et nous l'avons mentionné ici au cas où vous le rencontriez ailleurs. En général, vous n'avez à traiter que des valeurs uniques de `display`, et vous n'avez pas besoin d'y prêter beaucoup d'attention.

## Exemples de quelques types de positionnement

L'exemple ci-dessous présente trois éléments HTML différents, tous ayant un type de positionnement extérieur `block`.

- Un paragraphe avec une bordure ajoutée en CSS. Le navigateur rend cela comme une boîte en bloc. Le paragraphe commence sur une nouvelle ligne et s'étend horizontalement pour remplir toute la largeur disponible.

- Une liste, qui est disposée en utilisant `display: flex`. Cela établit une mise en page flexible pour les enfants du conteneur, qui sont des éléments flexibles disposés par défaut en ligne. La liste elle-même est une boîte en bloc et — comme le paragraphe — s'étend sur toute la largeur du conteneur et passe à une nouvelle ligne.

- Un paragraphe de niveau bloc, à l'intérieur duquel se trouvent deux éléments `<span>`. Ces éléments seraient normalement `inline`, cependant, l'un des éléments a une classe `bloc` et est défini sur `display: block`. En conséquence, ce seul mot commence sur une nouvelle ligne qui s'étend sur toute la largeur de son parent.

```html live-sample___block
<p>Je suis un paragraphe. Un court.</p>
<ul>
  <li>Élément Un</li>
  <li>Élément Deux</li>
  <li>Élément Trois</li>
</ul>
<p>
  Je suis un autre paragraphe. Certains des
  <span class="bloc">mots</span> ont été enveloppés dans un
  <span>élément span</span>.
</p>
```

```css live-sample___block
body {
  font-family: sans-serif;
}
p,
ul {
  border: 2px solid rebeccapurple;
  padding: 0.2em;
}

.bloc,
li {
  border: 2px solid blue;
  padding: 0.2em;
}

ul {
  display: flex;
  list-style: none;
}

.bloc {
  display: block;
}
```

{{EmbedLiveSample("block", "", 220)}}

Dans l'exemple suivant, nous pouvons voir comment se comportent les éléments `inline`.

- Les éléments `<span>` dans le premier paragraphe sont en ligne par défaut et ne forcent donc pas de retour à la ligne.

- L'élément `<ul>` qui est défini avec `display: inline-flex` crée une boîte en ligne contenant des éléments flexibles.

- Les deux paragraphes sont tous deux définis en `display: inline`. Le conteneur flexible en ligne et les paragraphes s'exécutent tous sur une seule ligne plutôt que de passer à de nouvelles lignes (comme ils le feraient s'ils étaient affichés en tant qu'éléments de niveau bloc).

Pour basculer entre les modes d'affichage, vous pouvez changer `display: inline` en `display: block` ou `display: inline-flex` en `display: flex`&nbsp;:

```html live-sample___inline
<p>
  Je suis un paragraphe. Certains des
  <span>mots</span> ont été enveloppés dans un <span>élément span</span>.
</p>
<ul>
  <li>Élément Un</li>
  <li>Élément Deux</li>
  <li>Élément Trois</li>
</ul>
<p class="en-ligne">Je suis un paragraphe. Un court.</p>
<p class="en-ligne">Je suis un autre paragraphe. Aussi un court.</p>
```

```css live-sample___inline
body {
  font-family: sans-serif;
}
p,
ul {
  border: 2px solid rebeccapurple;
}

span,
li {
  border: 2px solid blue;
}

ul {
  display: inline-flex;
  list-style: none;
  padding: 0;
}

.en-ligne {
  display: inline;
}
```

{{EmbedLiveSample("inline")}}

L'élément clé à retenir pour l'instant est le suivant&nbsp;: Modifier la valeur de la propriété `display` peut changer le type d'affichage extérieur d'une boîte, qu'il soit en bloc ou en ligne. Cela modifie la manière dont elle s'affiche aux côtés des autres éléments dans la mise en page.

## Qu'est-ce que le modèle de boîte CSS ?

Le modèle de boîte CSS dans son ensemble s'applique aux boîtes en bloc et définit comment les différentes parties d'une boîte — marge, bordure, remplissage et contenu — fonctionnent ensemble pour créer une boîte que vous pouvez voir sur une page. Les boîtes en ligne n'utilisent qu'une partie du comportement défini dans le modèle de boîte.

Pour ajouter un peu de complexité, il existe un modèle de boîte standard et un modèle alternatif. Par défaut, les navigateurs utilisent le modèle de boîte standard.

### Les composants d'une boîte

En CSS, une boîte en bloc est composée des éléments suivants&nbsp;:

- **Boîte de contenu (<i lang="en">content</i> en anglais)**&nbsp;: La zone où votre contenu est affiché&nbsp;; vous pouvez la dimensionner en utilisant des propriétés comme {{CSSxRef("width")}} et {{CSSxRef("height")}}.
- **Boîte de remplissage (<i lang="en">padding</i> en anglais)**&nbsp;: Le remplissage entoure le contenu comme un espace blanc&nbsp;; vous pouvez le dimensionner en utilisant {{CSSxRef("padding")}} et les propriétés associées.
- **Boîte de bordure (<i lang="en">border</i> en anglais)**&nbsp;: La bordure enveloppe le contenu et le remplissage&nbsp;; vous pouvez la dimensionner en utilisant {{CSSxRef("border")}} et les propriétés associées.
- **Boîte de marge (<i lang="en">margin</i> en anglais)**&nbsp;: La marge est la couche la plus externe, enveloppant le contenu, le remplissage et la bordure comme espace entre cette boîte et les autres éléments&nbsp;; vous pouvez la dimensionner en utilisant {{CSSxRef("margin")}} et les propriétés associées.

Le diagramme ci-dessous montre ces couches&nbsp;:

![Diagramme du modèle de boîte](box-model.png)

### Le modèle de boîte CSS standard

Dans le modèle de boîte standard, si vous définissez des valeurs pour les propriétés `width` et `height` sur une boîte, ces valeurs définissent la `width` et la `height` de la _boîte de contenu_. Tout remplissage et bordure sont ensuite ajoutés à ces dimensions pour obtenir la taille totale occupée par la boîte (voir l'image ci-dessous).

Si nous supposons qu'une boîte a le CSS suivant&nbsp;:

```css
.boite {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

L'espace _réel_ occupé par la boîte est de `410px` de large (350 + 25 + 25 + 5 + 5) et de `210px` de haut (150 + 25 + 25 + 5 + 5).

![Illustration de la taille de la boîte lorsqu'on utilise le modèle de boîte standard.](standard-box-model.png)

> [!NOTE]
> La marge n'est pas prise en compte dans la taille réelle de la boîte — certes, elle influe sur l'espace total que la boîte occupe sur la page, mais uniquement sur l'espace situé à l'extérieur de la boîte. La surface de la boîte s'arrête à la bordure — elle ne s'étend pas dans la marge.

### Le modèle de boîte CSS alternatif

Dans le modèle de boîte alternatif, toute largeur correspond à la largeur de la boîte visible sur la page. La largeur de la zone de contenu est cette largeur moins la largeur du remplissage et de la bordure (voir l'image ci-dessous). C'est pratique, car il n'est pas nécessaire d'additionner la bordure et le remplissage pour obtenir la taille réelle de la boîte.

Pour activer le modèle alternatif pour un élément, définissez `box-sizing: border-box` sur celui-ci&nbsp;:

```css
.boite {
  box-sizing: border-box;
}
```

Si nous supposons que la boîte a le même CSS que ci-dessus&nbsp;:

```css
.boite {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

L'espace _réel_ occupé par la boîte est maintenant de `350px` dans la direction en ligne et de `150px` dans la direction en bloc.

![Illustration de la taille de la boîte lorsqu'on utilise le modèle de boîte alternatif.](alternate-box-model.png)

Pour utiliser le modèle de boîte alternatif pour tous vos éléments (ce qui est un choix courant parmi les développeur·euse·s), définissez la propriété `box-sizing` sur l'élément `<html>` et définissez tous les autres éléments pour hériter de cette valeur&nbsp;:

```css
html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}
```

Pour comprendre l'idée sous-jacente, vous pouvez lire [l'article de CSS Tricks sur `box-sizing` <sup>(angl.)</sup>](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/).

## Jouer avec les modèles de boîte

Dans l'exemple ci-dessous, vous pouvez voir deux boîtes. Les deux ont une classe `.boite`, ce qui leur donne les mêmes `width`, `height`, `margin`, `border` et `padding`. La seule différence est que la deuxième boîte a été configurée pour utiliser le modèle de boîte alternatif.
Pouvez-vous modifier la taille de la deuxième boîte (en ajoutant du CSS à la classe `.alternative`) pour qu'elle corresponde à la première boîte en largeur et en hauteur&nbsp;?

```html live-sample___box-models
<div class="boite">J'utilise le modèle de boîte standard.</div>
<div class="boite alternative">J'utilise le modèle de boîte alternatif.</div>
```

```css live-sample___box-models
.boite {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 40px;
  margin: 40px;
  width: 300px;
  height: 150px;
}

.alternative {
  box-sizing: border-box;
}
```

{{EmbedLiveSample("box-models", "", 400)}}

> [!NOTE]
> Vous pouvez trouver une solution à cet exercice [dans notre dépôt css-examples <sup>(angl.)</sup>](https://github.com/mdn/css-examples/blob/main/learn/solutions.md#the-box-model).

### Utiliser les outils de développement pour voir le modèle de boîte

Les [outils de développement du navigateur](/fr/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) peuvent faciliter grandement la compréhension du modèle de boîte — ils peuvent afficher la taille de l'élément ainsi que ses marges, son remplissage et sa bordure. Inspecter un élément de cette manière est un excellent moyen de vérifier si votre boîte a réellement la taille que vous pensez&nbsp;!

![Inspecter le modèle de boîte d'un élément grâce aux outils de développement de Firefox](box-model-devtools.png)

## Marges, remplissages et bordures

Vous avez déjà rencontré les propriétés {{CSSxRef("margin")}}, {{CSSxRef("padding")}} et {{CSSxRef("border")}} dans l'exemple ci-dessus. Les propriétés utilisées dans cet exemple sont des **raccourcis** et permettent de définir les quatre côtés de la boîte en une seule fois. Ces raccourcis ont également des propriétés équivalentes en version longue, qui permettent de contrôler individuellement les différents côtés de la boîte.

Regardons de plus près ces nouvelles propriétés.

### La marge

La marge est un espace invisible autour de votre boîte. Elle repousse les autres éléments de la boîte. Les marges peuvent avoir des valeurs positives ou négatives. Définir une marge négative sur un côté de votre boîte peut provoquer un chevauchement avec d'autres éléments de la page. Que vous utilisiez le modèle de boîte standard ou alternatif, la marge est toujours ajoutée après le calcul de la taille de la boîte visible.

Nous pouvons contrôler toutes les marges d'un élément en une seule fois à l'aide de la propriété {{CSSxRef("margin")}}, ou chaque côté individuellement à l'aide des propriétés équivalentes en version longue&nbsp;:

- {{CSSxRef("margin-top")}}
- {{CSSxRef("margin-right")}}
- {{CSSxRef("margin-bottom")}}
- {{CSSxRef("margin-left")}}

#### Jouer avec les marges

Modifiez l'exemple ci-dessous. Essayez de changer les valeurs de marge pour voir comment la boîte est déplacée en raison de la création ou de la suppression d'espace (si c'est une marge négative) entre cet élément et l'élément contenant.

```html live-sample___margin
<div class="conteneur">
  <div class="boite">Changez ma marge.</div>
</div>
```

```css live-sample___margin
.conteneur {
  border: 5px solid blue;
  margin: 40px;
}

.boite {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 10px;
  height: 100px;
  /* essayez de changer les propriétés de marge : */
  margin-top: -40px;
  margin-right: 30px;
  margin-bottom: 40px;
  margin-left: 4em;
}
```

{{EmbedLiveSample("margin", "", 220)}}

#### La fusion des marges

En fonction de la manière dont deux éléments dont les marges se touchent ont des marges positives ou négatives, les résultats sont différents&nbsp;:

- Deux marges positives se combinent pour ne former qu'une seule marge. Sa taille est égale à la plus grande des marges individuelles.
- Deux marges négatives se combinent et la plus petite (la plus éloignée de zéro) est utilisée.
- Si une seule marge est négative, sa valeur est _soustraite_ du total.

Dans l'exemple ci-dessous, nous avons deux paragraphes. Le paragraphe du haut a un `margin-bottom` de 50 pixels, l'autre a un `margin-top` de 30 pixels. Les marges ont fusionné, donc la marge réelle entre les boîtes est de 50 pixels et non la somme des deux marges.

Vous pouvez tester cela en définissant le `margin-top` du deuxième paragraphe à `0`. La marge visible entre les deux paragraphes ne change pas — elle conserve les 50 pixels définis dans le `margin-bottom` du premier paragraphe. Si vous le définissez à `-10px`, vous voyez que la marge globale passe à `40px` — elle est soustraite des `50px`.

```html live-sample___margin-collapse
<div class="conteneur">
  <p class="un">Je suis le paragraphe un.</p>
  <p class="deux">Je suis le paragraphe deux.</p>
</div>
```

```css live-sample___margin-collapse
.conteneur {
  border: 5px solid blue;
  margin: 40px;
}

p {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding: 10px;
}
.un {
  margin-bottom: 50px;
}

.deux {
  margin-top: 30px;
}
```

{{EmbedLiveSample("margin-collapse", "", 280)}}

Il existe quelques règles qui contrôlent la fusion ou non des marges. Pour plus d'informations, référez vous à la page détaillée dans [Maîtriser la fusion des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing). Si vous ne devez retenir qu'une chose, c'est que les marges peuvent fusionner, et que si vos marges ne correspondent pas à vos attentes, c'est certainement ce phénomène qui est derrière.

> [!NOTE]
> [Apprenez les marges avec des drapeaux <sup>(angl.)</sup>](https://scrimba.com/frontend-path-c0j/~01e?via=mdn) <sup>[_Partenaire d'apprentissage MDN_](/fr/docs/MDN/Writing_guidelines/Learning_content#liens_partenaires_et_intégrations)</sup> de Scrimba est une leçon interactive offrant une pratique utile avec les marges.

### Les bordures

La bordure se situe entre la marge et le remplissage d'une boîte. Si vous utilisez le modèle standard de boîte, la taille de la bordure s'ajoute à la largeur (`width`) et la hauteur (`height`) de la boîte. Si vous utilisez le modèle de boîte alternatif, plus la bordure est large, plus la boîte de contenu est petite, car la bordure occupe une partie de la largeur (`width`) et de la hauteur (`height`) de la boîte.

Pour mettre en forme les bordures, il existe un grand nombre de propriétés — il y a quatre bordures, et chaque bordure a un style, une largeur et une couleur que nous pourrions vouloir manipuler.

Vous pouvez définir la largeur, le style ou la couleur des quatre bordures en même temps en utilisant la propriété {{CSSxRef("border")}}.

Pour régler ces propriétés individuellement pour chacun des côtés, vous pouvez utiliser&nbsp;:

- {{CSSxRef("border-top")}}
- {{CSSxRef("border-right")}}
- {{CSSxRef("border-bottom")}}
- {{CSSxRef("border-left")}}

Pour régler la largeur, le style ou la couleur de tous les côtés en même temps, utilisez&nbsp;:

- {{CSSxRef("border-width")}}
- {{CSSxRef("border-style")}}
- {{CSSxRef("border-color")}}

Pour définir la largeur, le style ou la couleur d'un seul côté, utilisez l'une des propriétés détaillées suivantes&nbsp;:

- {{CSSxRef("border-top-width")}}
- {{CSSxRef("border-top-style")}}
- {{CSSxRef("border-top-color")}}
- {{CSSxRef("border-right-width")}}
- {{CSSxRef("border-right-style")}}
- {{CSSxRef("border-right-color")}}
- {{CSSxRef("border-bottom-width")}}
- {{CSSxRef("border-bottom-style")}}
- {{CSSxRef("border-bottom-color")}}
- {{CSSxRef("border-left-width")}}
- {{CSSxRef("border-left-style")}}
- {{CSSxRef("border-left-color")}}

#### Jouer avec les bordures

Dans l'exemple ci-dessous, nous avons utilisé diverses propriétés raccourcies et détaillées pour créer des bordures. Modifiez les différentes propriétés pour vérifier que vous comprenez comment elles fonctionnent. Les pages MDN pour les propriétés des bordures vous donnent des informations sur les différents styles de bordure disponibles.

```html live-sample___border
<div class="conteneur">
  <div class="boite">Changez mes bordures.</div>
</div>
```

```css live-sample___border
body {
  font-family: sans-serif;
}
.conteneur {
  margin: 40px;
  padding: 20px;
  border-top: 5px dotted green;
  border-right: 1px solid black;
  border-bottom: 20px double rgb(23 45 145);
}

.boite {
  padding: 20px;
  background-color: lightgray;
  border: 1px solid #333333;
  border-top-style: dotted;
  border-right-width: 20px;
  border-bottom-color: hotpink;
}
```

{{EmbedLiveSample("border", "", 220)}}

### Le remplissage

Le remplissage (<i lang="en">padding</i> en anglais) se situe entre la bordure et le contenu. Contrairement aux marges, on ne peut attribuer une valeur numérique négative à un remplissage, la valeur ne peut être que 0 ou bien une valeur positive. Si vous avez défini un arrière-plan à votre élément, celui-ci continue de s'afficher dans le remplissage, et c'est pourquoi cette propriété est souvent utilisée pour repousser le contenu de la bordure.

La propriété {{CSSxRef("padding")}} contrôle le remplissage sur tous les côtés d'un élément. Pour contrôler chaque côté individuellement, utilisez ces propriétés détaillées&nbsp;:

- {{CSSxRef("padding-top")}}
- {{CSSxRef("padding-right")}}
- {{CSSxRef("padding-bottom")}}
- {{CSSxRef("padding-left")}}

#### Jouer avec le remplissage

Dans l'exemple ci-dessous, modifiez les valeurs de remplissage de la classe `.boite` et observez comment cela change l'emplacement du texte par rapport à la boîte. Vous pouvez également modifier le remplissage de la classe `.conteneur` pour créer de l'espace entre le conteneur et la boîte. Vous pouvez modifier le remplissage de n'importe quel élément pour créer de l'espace entre sa bordure et ce qu'il contient.

```html live-sample___padding
<div class="conteneur">
  <div class="boite">Changez mon remplissage.</div>
</div>
```

```css live-sample___padding
body {
  font-family: sans-serif;
}
.boite {
  border: 5px solid rebeccapurple;
  background-color: lightgray;
  padding-top: 0;
  padding-right: 30px;
  padding-bottom: 40px;
  padding-left: 4em;
}

.conteneur {
  border: 5px solid blue;
  margin: 40px;
  padding: 20px;
}
```

{{EmbedLiveSample("padding", "", 220)}}

## Le modèle de boîte et la disposition en ligne

Toutes les règles énoncées plus haut s'appliquent totalement aux boîtes positionnées en bloc. Certaines propriétés peuvent également s'appliquer aux boîtes en ligne, comme celles créées par un élément `<span>`.

Dans l'exemple ci-dessous, nous avons un `<span>` à l'intérieur d'un paragraphe. Nous avons appliqué une `width`, `height`, `margin`, `border` et `padding` à celui-ci. Vous pouvez voir que la largeur, la hauteur et les marges haut et bas n'affectent pas le `<span>`. Le remplissage et les bordures haut et bas modifient la taille de la boîte en ligne mais n'affectent pas la position du contenu environnant. Au lieu de cela, le remplissage et les bordures haut et bas se superposent aux autres mots du paragraphe. Seuls le remplissage, les marges et les bordures gauche et droite affectent la position du texte entourant le `<span>`.

```html live-sample___inline-box-model
<p>
  Je suis un paragraphe et ceci est un <span>span</span> à l'intérieur de ce
  paragraphe. Un span est un élément en ligne et ne respecte donc pas la largeur
  et la hauteur.
</p>
```

```css live-sample___inline-box-model
body {
  font-family: sans-serif;
}
p {
  border: 2px solid rebeccapurple;
  width: 200px;
}
span {
  margin: 20px 30px;
  padding: 10px 20px;
  width: 80px;
  height: 150px;
  background-color: lightblue;
  border: solid blue;
  border-width: 7px 1px;
}
```

{{EmbedLiveSample("inline-box-model")}}

## Le positionnement `display: inline-block`

`display: inline-block` est une valeur spéciale de `display`, qui constitue un compromis entre `inline` et `block`. Utilisez-la si vous ne voulez pas qu'un élément passe à une nouvelle ligne, mais que vous souhaitez qu'il respecte les propriétés `width` et `height` et éviter le chevauchement observé ci-dessus.

Un élément avec `display: inline-block` respecte un sous-ensemble des règles des éléments en bloc que nous connaissons déjà&nbsp;:

- Les propriétés de largeur (`width`) et la hauteur (`height`) sont respectées.
- `padding`, `margin` et `border` repoussent bien les éléments alentours.

Cependant, il ne passe pas à une nouvelle ligne et ne devient plus grand que son contenu que si vous ajoutez explicitement les propriétés `width` et `height`.

### Jouer avec `inline-block`

Dans l'exemple ci-dessous, nous avons ajouté `display: inline-block` à notre élément `<span>`. Essayez de changer cette valeur en `display: block` ou de supprimer complètement la ligne pour voir la différence dans les modèles d'affichage&nbsp;:

```html live-sample___inline-block
<p>
  Je suis un paragraphe et ceci est un <span>span</span> à l'intérieur de ce
  paragraphe. Un span est un élément en ligne et ne respecte donc pas la largeur
  et la hauteur.
</p>
```

```css live-sample___inline-block
body {
  font-family: sans-serif;
}
p {
  border: 2px solid rebeccapurple;
  width: 300px;
}

span {
  margin: 20px;
  padding: 20px;
  width: 80px;
  height: 50px;
  background-color: lightblue;
  border: 2px solid blue;
  display: inline-block;
}
```

{{EmbedLiveSample("inline-block", "", 240)}}

Cela peut s'avérer utile lorsque vous souhaitez agrandir la zone de clic d'un lien en ajoutant un `padding`. L'élément `<a>` est un élément en ligne, tout comme `<span>`&nbsp;; vous pouvez utiliser `display: inline-block` pour lui appliquer un remplissage, ce qui facilite le clic sur le lien pour l'utilisateur·ice.

On le voit assez fréquemment dans les barres de navigation. La navigation ci-dessous s'affiche sur une seule ligne à l'aide de boîtes flexibles et nous avons ajouté un remplissage à l'élément `<a>`, car nous voulons pouvoir modifier la couleur de fond (`background-color`) lorsque le curseur survole le `<a>`. Le remplissage semble chevaucher la bordure de l'élément `<ul>`. Cela s'explique par le fait que l'élément `<a>` est un élément en ligne.

Ajoutez `display: inline-block;` à la règle avec le sélecteur `.liste-liens a`, et vous voyez comment cela résout ce problème en faisant en sorte que le remplissage soit respecté par les autres éléments&nbsp;:

```html live-sample___inline-block-nav
<nav>
  <ul class="liste-liens">
    <li><a href="">Lien un</a></li>
    <li><a href="">Lien deux</a></li>
    <li><a href="">Lien trois</a></li>
  </ul>
</nav>
```

```css live-sample___inline-block-nav
ul {
  font-family: sans-serif;
  display: flex;
  list-style: none;
  border: 1px solid black;
}

li {
  margin: 5px;
}

.liste-liens a {
  background-color: rgb(179 57 81);
  color: white;
  text-decoration: none;
  padding: 1em 2em;
}

.liste-liens a:hover {
  background-color: rgb(66 28 40);
  color: white;
}
```

{{EmbedLiveSample("inline-block-nav")}}

## Résumé

Voilà l'essentiel de ce que vous devez savoir pour comprendre le modèle des boîtes. Vous pouvez revenir à cette leçon à l'avenir si vous vous retrouvez confus sur la taille des boîtes dans votre mise en page.

Dans l'article suivant, nous vous proposons des tests que vous pouvez utiliser pour vérifier à quel point vous avez compris et retenu les informations que nous avons fournies sur le modèle des boîtes en CSS.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Selectors", "Learn_web_development/Core/Styling_basics/Test_your_skills/Box_model", "Learn_web_development/Core/Styling_basics")}}
