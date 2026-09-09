---
title: Débordement de contenu
short-title: Débordement
slug: Learn_web_development/Core/Styling_basics/Overflow
l10n:
  sourceCommit: 936233e89fd5714c957c5931b26dfb56c64f9a91
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}

Le débordement (<i lang="en">overflow</i> en anglais) se produit lorsqu'il y a trop de contenu pour s'adapter à l'intérieur d'une boîte d'élément. Dans cette leçon, vous apprenez à gérer le débordement à l'aide de CSS.

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

Tout dans le CSS est une boîte. Vous pouvez définir la taille de ces boîtes en leur définissant des valeurs pour des propriétés telles que {{CSSxRef("width")}} et {{CSSxRef("height")}}. **Un dépassement se produit lorsque le contenu est trop volumineux pour tenir dans une boîte.** Le CSS propose divers outils pour gérer les dépassements. À mesure que vous approfondissez vos connaissances en matière de mise en page et d'écriture CSS, vous allez être confronté à davantage de situations impliquant des débordements.

## CSS essaie d'éviter les « pertes de données »

Considérons deux exemples qui démontrent le comportement par défaut du CSS en cas de débordement.

Le premier exemple présente une boîte dont la taille a été limitée par la définition d'une hauteur (`height`). Le contenu de la boîte dépasse l'espace disponible&nbsp;; il déborde de la boîte et s'affiche dans le paragraphe suivant.

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

Le deuxième exemple montre un mot dans une boîte. La taille de la boîte est définie trop petite pour le mot, ce qui fait que le mot déborde de la boîte.

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

Dans la mesure du possible, le CSS ne masque pas le contenu. Cela entraîne une perte de données. Le problème avec la perte de données est que vous, ou les visiteur·euse·s de votre site, pouvez ne pas le remarquer. Si le bouton «&nbsp;Envoyer&nbsp;» d'un formulaire disparaît et que personne ne peut remplir le formulaire, cela peut poser un gros problème&nbsp;! Au lieu de cela, le CSS déborde de manière visible. Vous êtes plus susceptible de remarquer un problème. Au pire, un·e visiteur·euse du site vous fait savoir que le contenu se chevauche.

Si vous restreignez une boîte avec une largeur (`width`) ou une hauteur (`height`), le CSS vous fait confiance pour savoir ce que vous faites. Le CSS suppose que vous gérez le potentiel de débordement. En général, restreindre la dimension d'un bloc est problématique lorsque la boîte contient du texte. Il peut y avoir plus de texte que prévu lors de la conception du site, ou le texte peut être plus grand (par exemple, si l'utilisateur·ice a augmenté la taille de la police).

## La propriété `overflow`

La propriété {{CSSxRef("overflow")}} permet de définir comment le navigateur doit gérer le contenu qui déborde. Sa valeur par défaut est `visible`, ce qui signifie que vous pouvez voir le contenu lorsqu'il déborde.

Les deux valeurs `overflow` suivantes fournissent le comportement dont vous avez besoin pour résoudre la majorité des problèmes de débordement&nbsp;:

- `overflow: clip` coupe le contenu qui déborde, de sorte qu'il n'est jamais visible.
- `overflow: auto` affiche des barres de défilement uniquement lorsque cela est nécessaire, permettant à l'utilisateur·ice de faire défiler les boîtes pour lire le contenu qui déborde.

Les deux sections suivantes expliquent comment utiliser ces valeurs. Ensuite, nous examinons d'autres valeurs de `overflow` et expliquons comment contrôler séparément le débordement des axes x et y.

### Masquer le contenu qui déborde

Pour couper le contenu lorsqu'il déborde, définissez `overflow: clip`. Tout ce qui ne rentre pas est coupé au bord de la boîte et ne peut pas être atteint. Cela signifie qu'une partie du contenu devient invisible, donc ne le faites que lorsque le masquage ne pose pas de problème.

```html live-sample___clip
<div class="boite">
  Cette boîte a une hauteur et une largeur. Cela signifie que s'il y a trop de
  contenu pour être affiché dans la hauteur attribuée, il y a une situation de
  débordement. Si overflow est défini sur clip, tout débordement n'est pas
  visible.
</div>

<p>Ce contenu est en dehors de la boîte.</p>
```

```css live-sample___clip
.boite {
  border: 1px solid #333333;
  width: 250px;
  height: 100px;
  overflow: clip;
}
```

{{EmbedLiveSample("clip", "", 200)}}

Essayez de modifier cet exemple pour définir `overflow` sur `visible`, puis revenez à `clip`, pour voir l'effet.

> [!NOTE]
> Par défaut, `clip` coupe le contenu au bord de la boîte. La propriété CSS {{CSSxRef("overflow-clip-margin")}} déplace ce bord de découpe vers l'extérieur, permettant à une quantité définie de contenu débordant de rester visible avant que le reste ne soit coupé.

## Défiler le contenu débordant

Au lieu de cela, vous voulez peut-être que les utilisateur·ice·s fassent défiler le contenu pour tout lire. Définir `overflow: auto` rend la boîte défilable, et les navigateurs avec des barres de défilement visibles n'affichent une barre de défilement que lorsqu'il y a réellement trop de contenu pour tenir.

Dans l'exemple ci-dessous, retirez du contenu du `<div>` jusqu'à ce qu'il ne déborde plus. Vous devez voir la barre de défilement disparaître&nbsp;:

```html live-sample___auto
<div class="boite">
  Cette boîte a une hauteur et une largeur. Cela signifie que s'il y a trop de
  contenu pour être affiché dans la hauteur attribuée, il y a une situation de
  débordement. Si overflow est défini sur auto, les barres de défilement
  n'apparaissent que lorsque c'est nécessaire.
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

> [!NOTE]
> La visibilité des barres de défilement dépend du système d'exploitation.
> Vous devez peut-être modifier les paramètres de votre navigateur pour toujours afficher les barres de défilement afin que les barres de défilement s'affichent toujours dans les exemples suivants.

## Contrôler le débordement sur chaque axe

Définir un seul mot-clé pour la valeur de la propriété `overflow` définit le comportement de débordement pour les axes x _et_ y d'un conteneur. Dans l'exemple précédent, si vous définissez `overflow` sur `scroll` (ce qui fait que les barres de défilement [apparaissent toujours](#always_displaying_scrollbars) indépendamment du fait que le contenu déborde ou non), vous voyez des barres de défilement sur les deux axes. Pour contrôler les axes séparément, utilisez les propriétés CSS {{CSSxRef("overflow-x")}} et {{CSSxRef("overflow-y")}}. Essayez de définir `overflow-y: auto` dans l'exemple.

L'exemple suivant montre comment activer le défilement le long de l'axe x avec `overflow-x`, bien que cela ne soit pas recommandé pour gérer les mots longs&nbsp;! Si vous avez un mot long dans une petite boîte, envisagez d'utiliser les propriétés CSS {{CSSxRef("word-break")}} ou {{CSSxRef("overflow-wrap")}} pour couper le mot sur plusieurs lignes. De plus, certaines des méthodes abordées dans [la taille des éléments en CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Sizing) peuvent vous aider à créer des boîtes qui s'adaptent mieux à des quantités de contenu variables.

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

> [!NOTE]
> Vous pouvez également définir le débordement sur les axes x et y séparément en passant deux valeurs de mot-clé à la propriété `overflow`&nbsp;: la première s'applique à `overflow-x` et la seconde à `overflow-y`. Par exemple, `overflow: clip auto` définit `overflow-x` sur `clip` et `overflow-y` sur `auto`.

`clip` est la seule valeur que vous pouvez combiner avec `visible` sur l'autre axe. Si vous définissez un axe sur une valeur de défilement (`auto`, `scroll` ou `hidden`) et l'autre sur `visible`, la valeur `visible` est calculée comme `auto` à la place, car une boîte ne peut pas défiler sur un axe tout en laissant le contenu déborder de l'autre. Ainsi, `overflow: clip visible` coupe horizontalement et laisse le contenu déborder verticalement, tandis que `overflow: hidden visible` se comporte comme `overflow: hidden auto`.

## Toujours afficher les barres de défilement

Définir `overflow: scroll` rend la boîte défilable comme le fait `overflow: auto`, sauf que les navigateurs avec des barres de défilement visibles les affichent en permanence, même lorsque le contenu ne déborde pas.

La principale raison d'utiliser `scroll` est la cohérence de la mise en page&nbsp;: la barre de défilement est toujours présente&nbsp;; par conséquent, le contenu ne se déplace pas lorsque la quantité de contenu change entre débordement et non débordement. Cependant, dans un tel cas, combiner `overflow: auto` avec une valeur {{cssxref("scrollbar-gutter")}} de `stable` est généralement une meilleure solution, car elle réserve l'espace sans forcer le dessin d'une barre de défilement.

## La valeur `hidden`

Vous rencontrez souvent `overflow: hidden` dans le code existant. Comme `clip`, il coupe le contenu débordant et n'affiche pas de barres de défilement. Contrairement à `clip`, il transforme néanmoins la boîte en conteneur défilable, et le contenu peut être défilé par d'autres moyens, par exemple en utilisant [JavaScript](/fr/docs/Learn_web_development/Core/Scripting) ou en tabulant vers un élément sélectionnable plus bas dans le contenu, comme un [élément de lien](/fr/docs/Learn_web_development/Core/Structuring_content/Creating_links).

Vous devez utiliser la valeur `clip` la plupart du temps&nbsp;; `hidden` n'est nécessaire que si vous avez besoin du comportement défilable décrit ci-dessus.

## Débordements indésirables dans la conception web

Les méthodes de mise en page modernes (comme étudiées dans le module [La mise en page avec le CSS](/fr/docs/Learn_web_development/Core/CSS_layout)) gèrent très bien le débordement. Elles ont été conçues pour faire face au fait que nous avons tendance à ne pas pouvoir prévoir la quantité de contenu que nous avons sur le web.

Cela n'a pas toujours été la norme. Par le passé, certains sites étaient construits avec des conteneurs de hauteur fixe pour aligner le bas des boîtes. Ces boîtes n'avaient autrement aucune relation entre elles. C'était fragile. Si vous rencontrez une boîte où le contenu chevauche un autre contenu, vous reconnaîtrez maintenant que le débordement peut en être la cause. Idéalement, vous devez remanier la mise en page pour ne pas dépendre de conteneurs de hauteur fixe.

Lorsque vous développez un site, vous devez toujours garder à l'esprit les problèmes de débordement. Vous devez tester des conceptions avec des quantités de contenu importantes et réduites, augmenter et diminuer la taille de la police d'au moins deux incréments. Assurez-vous que votre CSS est robuste. La modification des valeurs de `overflow` pour masquer le contenu ou ajouter des barres de défilement est réservée à quelques cas particuliers (par exemple, lorsque vous souhaitez avoir une boîte défilante qui affiche toujours des barres de défilement).

## Résumé

Cette leçon a introduit le concept de débordement. Par défaut, le CSS évite de rendre le contenu débordant invisible. Vous pouvez gérer un débordement potentiel, et vous devez tester votre travail pour vous assurer qu'il ne cause pas accidentellement un débordement problématique.

Dans le prochain article, nous vous proposons des tests que vous pouvez utiliser pour vérifier dans quelle mesure vous avez compris et retenu les informations que nous avons fournies sur le débordement.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics/Test_your_skills/Overflow", "Learn_web_development/Core/Styling_basics")}}
