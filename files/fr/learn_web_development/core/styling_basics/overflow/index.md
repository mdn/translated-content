---
title: Débordement de contenu
short-title: Débordement
slug: Learn_web_development/Core/Styling_basics/Overflow
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}

Le débordement (<i lang="en">overflow</i> en anglais) se produit lorsqu'il y a trop de contenu pour s'adapter à l'intérieur d'une boîte d'élément. Dans cette leçon, vous apprendrez à gérer le débordement à l'aide de CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions de base en HTML (étudiez
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe HTML de base</a
        >), CSS <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Valeurs et unités</a> et <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Sizing">La taille</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Comprendre ce qu'est le débordement.</li>
          <li>Contrôler le débordement avec la propriété <code>overflow</code>.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce qu'un débordement ?

Tout dans le CSS est une boîte. Vous pouvez définir la taille de ces boîtes en leur attribuant des valeurs telles que {{CSSxRef("width")}} et {{CSSxRef("height")}}. **Un dépassement se produit lorsque le contenu est trop volumineux pour tenir dans une boîte.** Le CSS propose divers outils pour gérer les dépassements. À mesure que vous approfondissez vos connaissances en matière de mise en page et d'écriture CSS, vous allez être confronté à davantage de situations impliquant des débordements.

## CSS essaie d'éviter les « pertes de données »

Prenons deux exemples qui illustrent le comportement par défaut du CSS en cas de débordement.

Le premier exemple présente une boîte dont la taille a été limitée par la définition d'une hauteur (`height`). Le contenu de la boîte dépasse l'espace disponible, il déborde donc de la boîte et s'affiche dans le paragraphe suivant.

```html live-sample___block-overflow
<div class="boite">
  Cette boîte a une hauteur et une largeur. Cela signifie que s'il y a trop de
  contenu pour être affiché dans la hauteur attribuée, il y a une situation de
  débordement. Si overflow est défini sur hidden, tout débordement n'est pas
  visible.
</div>

<p>Ce contenu est en dehors de la boîte.</p>
```

```css live-sample___block-overflow
.boite {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
}
```

{{EmbedLiveSample("block-overflow", "", 200)}}

Le deuxième exemple montre un mot dans une boîte. La boîte est trop petite pour le mot, qui déborde donc de la boîte.

```html live-sample___inline-overflow
<div class="mot">Débordement</div>
```

```css live-sample___inline-overflow
.mot {
  border: 1px solid #333333;
  width: 100px;
  font-size: 250%;
}
```

{{EmbedLiveSample("inline-overflow")}}

Vous vous demandez peut-être pourquoi le CSS fonctionne de manière aussi désordonnée, affichant le contenu en dehors de son conteneur prévu. Pourquoi ne pas cacher le contenu qui déborde&nbsp;? Pourquoi ne pas ajuster la taille du conteneur pour qu'il s'adapte à tout le contenu&nbsp;?

Dans la mesure du possible, le CSS ne masque pas le contenu. Cela entraîne une perte de données. Le problème avec la perte de données est que vous, ou les visiteur·euse·s de votre site, pouvez ne pas le remarquer. Si le bouton «&nbsp;Envoyer&nbsp;» d'un formulaire disparaît et que personne ne peut remplir le formulaire, cela peut poser un gros problème&nbsp;! Au lieu de cela, le CSS déborde de manière visible. Vous êtes plus susceptible de voir qu'il y a un problème. Au pire, un·e visiteur·euse du site vous fait savoir que le contenu se chevauche.

Si vous restreignez une boîte avec une largeur (`width`) ou une hauteur (`height`), le CSS vous fait confiance pour savoir ce que vous faites. Le CSS suppose que vous gérez le potentiel de débordement. En général, restreindre la dimension d'un bloc est problématique lorsque la boîte contient du texte. Il peut y avoir plus de texte que prévu lors de la conception du site, ou le texte peut être plus grand (par exemple, si l'utilisateur·ice a augmenté la taille de la police).

## La propriété `overflow`

La propriété {{CSSxRef("overflow")}} permet de définir comment le navigateur doit gérer le contenu qui déborde. La valeur par défaut du type de valeur {{CSSxRef("&lt;overflow&gt;")}} est `visible`. Avec ce paramètre par défaut, on peut voir le contenu lorsqu'il déborde.

### Masquer le contenu qui déborde

Pour masquer le contenu lorsqu'il déborde, vous pouvez définir `overflow: hidden`. Cela fait exactement ce que cela indique&nbsp;: cela masque le débordement. Attention, cela peut rendre une partie du contenu invisible. Vous ne devez le faire que si la disparition du contenu ne pose pas de problème.

```html live-sample___hidden
<div class="boite">
  Cette boîte a une hauteur et une largeur. Cela signifie que s'il y a trop de
  contenu pour être affiché dans la hauteur attribuée, il y a une situation de
  débordement. Si overflow est défini sur hidden, tout débordement n'est pas
  visible.
</div>

<p>Ce contenu est en dehors de la boîte.</p>
```

```css live-sample___hidden
.boite {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
  overflow: hidden;
}
```

{{EmbedLiveSample("hidden", "", 200)}}

Essayez de modifier l'exemple ci-dessus pour définir la valeur de `overflow` sur `visible`, puis revenez à `hidden`, pour voir l'effet.

### Faire défiler le contenu qui déborde

Peut-être préfériez-vous permettre à vos utilisateur·ice·s de faire défiler le contenu pour tout lire&nbsp;? Lorsque vous définissez `overflow: scroll` sur un contenu qui déborde, les navigateurs avec des barres de défilement visibles les affichent toujours, même s'il n'y a pas assez de contenu pour déborder. Cela offre l'avantage de maintenir la mise en page cohérente, au lieu que les barres de défilement apparaissent ou disparaissent en fonction de la quantité de contenu dans le conteneur.

Voyons cela en action. Modifiez l'exemple suivant pour supprimer une partie du contenu de la `<div>` `boite`. Remarquez comment les barres de défilement restent, même s'il n'y a pas besoin de faire défiler&nbsp;:

```html live-sample___scroll
<div class="boite">
  Cette boîte a une hauteur et une largeur. Cela signifie que s'il y a trop de
  contenu pour être affiché dans la hauteur attribuée, il y a une situation de
  débordement. Si overflow est défini sur hidden, tout débordement n'est pas
  visible.
</div>

<p>Ce contenu est en dehors de la boîte.</p>
```

```css live-sample___scroll
.boite {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
  overflow: scroll;
}
```

{{EmbedLiveSample("scroll", "", 200)}}

> [!NOTE]
> La visibilité des barres de défilement dépend du système d'exploitation.
> Vous devez peut-être modifier les paramètres de votre navigateur pour toujours afficher les barres de défilement afin que les barres de défilement s'affichent toujours dans les exemples suivants.

Dans l'exemple ci-dessus, nous n'avons besoin de faire défiler que l'axe `y`, cependant nous avons des barres de défilement sur les deux axes. Pour faire défiler uniquement sur l'axe `y`, vous pouvez utiliser la propriété {{CSSxRef("overflow-y")}}, en définissant `overflow-y: scroll`. Essayez de définir cette propriété dans l'exemple ci-dessus.

Vous pouvez également activer le défilement sur l'axe x en utilisant {{CSSxRef("overflow-x")}}, bien que ce ne soit pas une méthode recommandée pour gérer les longs mots&nbsp;! Si vous avez un long mot dans une petite boîte, envisagez d'utiliser les propriétés {{CSSxRef("word-break")}} ou {{CSSxRef("overflow-wrap")}}. De plus, certaines des méthodes discutées dans [Définir la taille des éléments en CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Sizing) peuvent vous aider à créer des boîtes qui s'adaptent mieux à des quantités variables de contenu.

```html live-sample___scroll-x
<div class="mot">Débordement</div>
```

```css live-sample___scroll-x
.mot {
  border: 5px solid #333333;
  width: 100px;
  font-size: 250%;
  overflow-x: scroll;
}
```

{{EmbedLiveSample("scroll-x")}}

Comme pour `scroll`, une barre de défilement apparaît sur l'axe sélectionné qu'il y ait suffisamment de contenu ou pas pour créer un défilement.

> [!NOTE]
> Vous pouvez définir le défilement sur les axes x et y en utilisant la propriété `overflow`, en passant deux valeurs. Si deux mots-clés sont définis, le premier s'applique à `overflow-x` et le second à `overflow-y`. Sinon, `overflow-x` et `overflow-y` sont définis sur la même valeur. Par exemple, `overflow: scroll hidden` définit `overflow-x` sur `scroll` et `overflow-y` sur `hidden`.

### Afficher les barres de défilement uniquement lorsque c'est nécessaire

Si vous souhaitez que les barres de défilement n'apparaissent que s'il y a plus de contenu que la boîte ne peut en contenir, utilisez `overflow: auto`. Cela permet au navigateur de déterminer s'il doit afficher des barres de défilement.

Dans l'exemple ci-dessous, retirez du contenu jusqu'à ce que ça rentre dans la boîte. Vous devez voir les barres de défilement disparaître&nbsp;:

```html live-sample___auto
<div class="boite">
  Cette boîte a une hauteur et une largeur. Cela signifie que s'il y a trop de
  contenu pour être affiché dans la hauteur attribuée, il y a une situation de
  débordement. Si overflow est défini sur hidden, tout débordement n'est pas
  visible.
</div>

<p>Ce contenu est en dehors de la boîte.</p>
```

```css live-sample___auto
.boite {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
  overflow: auto;
}
```

{{EmbedLiveSample("auto", "", 200)}}

## Débordements indésirables dans la conception web

Les méthodes de mise en page modernes (comme étudiées dans le module [La mise en page avec le CSS](/fr/docs/Learn_web_development/Core/CSS_layout)) gèrent très bien le débordement. Elles ont été conçues pour faire face au fait que nous avons tendance à ne pas pouvoir prévoir la quantité de contenu que nous avons sur le web.

Cela n'a pas toujours été la norme. Par le passé, certains sites étaient construits avec des conteneurs de hauteur fixe pour aligner le bas des boîtes. Ces boîtes n'avaient autrement aucune relation entre elles. C'était fragile. Si vous rencontrez une boîte où le contenu chevauche un autre contenu, vous reconnaîtrez maintenant que le débordement peut en être la cause. Idéalement, vous devez remanier la mise en page pour ne pas dépendre de conteneurs de hauteur fixe.

Lorsque vous développez un site, vous devez toujours garder à l'esprit les problèmes de débordement. Vous devez tester des conceptions avec des quantités de contenu importantes et réduites, augmenter et diminuer la taille de la police d'au moins deux incréments. Assurez-vous que votre CSS est robuste. La modification des valeurs de `overflow` pour masquer le contenu ou ajouter des barres de défilement est réservée à quelques cas particuliers (par exemple, lorsque vous souhaitez avoir une boîte défilante).

## Résumé

Cette leçon a introduit le concept de débordement. Vous devez comprendre que le CSS par défaut évite de rendre le contenu débordant invisible. Vous avez découvert que vous pouvez gérer un débordement potentiel et que vous devez également tester votre travail pour vous assurer qu'il ne cause pas accidentellement un débordement problématique.

Dans le prochain article, nous vous proposerons des tests que vous pourrez utiliser pour vérifier dans quelle mesure vous avez compris et retenu les informations que nous avons fournies sur le débordement.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}
