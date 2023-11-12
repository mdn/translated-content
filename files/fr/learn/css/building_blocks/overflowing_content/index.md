---
title: Débordements de contenu (overflow)
slug: Learn/CSS/Building_blocks/Overflowing_content
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}

Dans ce cours nous allons étudier un autre concept important en CSS : les **débordements** (<i lang="en">overflows</i> en anglais). Un débordement de contenu correspond à ce qui se produit lorsque le contenu à insérer dans une boîte occupe trop d'espace pour s'y insérer confortablement. Dans ce guide vous allez apprendre à gérer cela.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Connaissances élémentaires en informatique,
        <a
          href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >suite logicielle de base installée</a
        >, compétences élémentaires pour
        <a
          href="/fr/docs/Apprendre/Commencer_avec_le_web/Gérer_les_fichiers"
          >travailler avec des fichiers</a
        >, connaissance de base du HTML (cf.
        <a href="/fr/docs/Apprendre/HTML/Introduction_à_HTML"
          >Introduction à HTML</a
        >), et une idée
        <a href="/fr/docs/Learn/CSS/First_steps/How_CSS_works"
          >du fonctionnement de CSS</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>Comprendre le principe des débordements et comment les gérer.</td>
    </tr>
  </tbody>
</table>

## Qu'est-ce qu'un débordement ?

Nous savons déjà qu'en CSS tout fonctionne par boîte, et que nous pouvons définir la taille de ces boîtes en leur donnant les valeurs [`width`](/fr/docs/Web/CSS/width) et [`height`](/fr/docs/Web/CSS/height) (ou [`inline-size`](/fr/docs/Web/CSS/inline-size) et [`block-size`](/fr/docs/Web/CSS/block-size)). Un dépassement correspond à ce qui se produit lorsqu'il y a trop de contenu dans une boîte et que ce contenu ne s'y intègre pas confortablement. CSS propose différents outils pour gérer ce phénomène, c'est un concept utile à comprendre à ce stade. Vous allez rencontrer des cas de dépassement fréquemment en codant du CSS, particulièrement quand vous irez plus loin dans la mise en page avec CSS.

## CSS essaie d'éviter les pertes de données

Commençons par observer deux exemples qui montrent comment CSS se comporte par défaut quand il y a un débordement de contenu.

Le premier est une boîte dont la dimension dans le bloc a été définie en lui donnant une valeur `height`. Nous lui avons ensuite ajouté plus de contenu qu'il n'y a d'espace disponible dans la boîte. Le contenu déborde de la boîte et chevauche de façon désordonnée le paragraphe situé sous la boîte.

{{EmbedGHLiveSample("css-examples/learn/overflow/block-overflow.html", '100%', 600)}}

Le second est un mot dans une boîte limitée sur la dimension inline. La boîte a été rendue trop petite pour que ce mot puisse s'y insérer et il déborde de la boîte.

{{EmbedGHLiveSample("css-examples/learn/overflow/inline-overflow.html", '100%', 500)}}

Vous vous demandez peut-être pourquoi le CSS a adopté par défaut l'approche plutôt brouillonne consistant à faire déborder le contenu de manière désordonnée ? Pourquoi ne pas cacher le contenu supplémentaire, ou faire grossir la boîte ?

Dans la mesure du possible, le CSS ne masque pas votre contenu ; le faire entraînerait des pertes de données, ce qui pose généralement problème. En termes de CSS, cela signifie que certains contenus disparaissent. Le problème de la disparition de contenu est que vous pourriez ne pas remarquer qu'il a disparu. Vos visiteurs également ne le remarqueront peut-être pas. Si c'est le bouton "Envoyer" d'un formulaire qui disparaît et que personne ne peut remplir ce formulaire, c'est un gros problème ! Au lieu de cela, le CSS a tendance à déborder de manière visible. Il est probable que vous verrez le désordre, ou au pire un visiteur de votre site vous fera savoir que certains contenus se chevauchent et qu'il faut donc les corriger.

Si vous avez défini une boîte avec des valeurs `width` ou `height`, CSS part du principe que vous savez ce que vous faites et que vous gérez le risque de débordement. En général, contraindre la dimension du bloc est problématique lorsque du texte va être mis dans une boîte, car il peut y avoir plus de texte que prévu lors de la conception du site ou que le texte peut être plus gros - par exemple si l'utilisateur a augmenté la taille de sa police.

Dans les deux prochaines leçons, nous examinerons différentes façons de contrôler la taille des éléments afin de limiter le dépassement. Cependant, si vous avez besoin d'une taille fixe, vous pouvez également contrôler le comportement du trop-plein. Voyons maintenant&nbsp;!

## La propriété overflow

La propriété [`overflow`](/fr/docs/Web/CSS/overflow) est la façon dont vous prenez le contrôle du débordement d'un élément et dîtes au navigateur comment vous voulez qu'il se comporte. La valeur par défaut est `visible`, c'est pourquoi, par défaut, nous pouvons voir notre contenu quand il déborde.

Si vous souhaitez recadrer le contenu qui déborde, vous pouvez définir `overflow: hidden` pour votre boîte. Cela fera exactement ce qui est indiqué — cacher le débordement. Vous ne devez donc le faire que si la disparition du contenu ne pose pas de problème.

{{EmbedGHLiveSample("css-examples/learn/overflow/hidden.html", '100%', 600)}}

Peut-être préféreriez-vous ajouter des barres de défilement lorsque le contenu déborde ? Si vous utilisez `overflow: scroll` alors votre navigateur ajoutera systématiquement des barres de défilement — même s'il n'y a pas assez de contenu pour faire défiler. Vous pourriez le souhaiter, car cela empêche l'apparition et la disparition des barres de défilement en fonction du contenu.

**Si vous retirez du contenu de la boîte ci-dessous, vous constaterez que les barres de défilement restent même s'il n'y a rien à faire défiler.**

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll.html", '100%', 600)}}

Dans l'exemple ci-dessus nous n'avons besoin de faire défiler que l'axe `y`, cependant nous avons des barres de défilement sur les deux axes. Vous pourriez utiliser à la place la propriété [`overflow-y`](/fr/docs/Web/CSS/overflow-y), qui définit `overflow-y: scroll` afin de faire défiler uniquement sur l'axe `y`.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-y.html", '100%', 600)}}

Vous pourriez également faire défiler sur l'axe x en utilisant [`overflow-x`](/fr/docs/Web/CSS/overflow-x), bien que ce ne soit pas une méthode recommandée pour gérer les longs mots ! Si vous avez besoin de gérer un long mot dans une petite boîte alors vous pourriez vous tourner vers les propriétés [`word-break`](/fr/docs/Web/CSS/word-break) ou [`overflow-wrap`](/fr/docs/Web/CSS/overflow-wrap). En complément, certaines méthodes présentées dans le cours [Définir la taille des éléments en CSS](/fr/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS) peuvent vous aider à créer des boîtes qui s'adapteront mieux à des quantités variables de contenu.

{{EmbedGHLiveSample("css-examples/learn/overflow/scroll-x.html", '100%', 500)}}

Comme pour `scroll`, une barre de défilement apparaîtra sur l'axe sélectionné qu'il y ait suffisamment de contenu ou pas pour créer un défilement.

> **Note :** vous pouvez spécifier le défilement x et y simultanément en utilisant la propriété `overflow` en déclarant deux valeurs. Si deux mots clés sont spécifiés, le premier s'applique à `overflow-x` et le second à `overflow-y`. Sinon, `overflow-x` et `overflow-y` sont définis sur la même valeur. Par exemple, `overflow: scroll hidden` définira `overflow-x` sur `scroll` et `overflow-y` sur `hidden`.

Si vous souhaitez que les barres de défilement n'apparaissent que s'il y a plus de contenu que la boîte ne peut en contenir, utilisez `overflow: auto`. Dans ce cas c'est le navigateur qui décidera d'afficher ou non les barres de défilement. Les navigateurs de bureau ne le font généralement que lorsqu'il y a suffisamment de contenu pour provoquer un débordement.

**Dans l'exemple ci-dessous, retirez du contenu jusqu'à ce que ça rentre dans la boîte et vous devriez voir les barres de défilement disparaître.**

{{EmbedGHLiveSample("css-examples/learn/overflow/auto.html", '100%', 600)}}

## Overflow crée un "Block Formatting Context"

Il existe un concept dans le CSS de **<i lang="en">Block Formatting Context</i>** (BFC). Ce n'est pas quelque chose dont vous devez trop vous préoccuper pour l'instant, mais il est utile de savoir que lorsque vous utilisez une valeur de `overflow` comme `scroll` ou `auto` vous créez un BFC. Le résultat est que le contenu de la boîte pour laquelle vous avez modifié la valeur de `overflow` devient une mini mise en page à part entière. Les éléments extérieurs au conteneur ne peuvent pas pénétrer dans le conteneur, et rien ne peut sortir de cette boîte pour pénétrer dans la mise en page qui l'entoure. Cela permet d'activer le défilement, car tout le contenu de votre boîte devra être intégré et ne pas chevaucher d'autres éléments de la page afin de créer une expérience de défilement cohérente.

## Débordements indésirables en web design

Les méthodes de mise en page modernes (comme étudiées dans le module [La mise en page avec le CSS](/fr/docs/Learn/CSS/CSS_layout)) gèrent très bien le débordement. Elles ont été conçues pour faire face au fait que nous avons tendance à ne pas pouvoir prévoir la quantité de contenu que nous aurons sur le web. Par le passé, les développeurs utilisaient souvent des hauteurs fixes pour aligner le bas des boîtes qui n'avaient pas vraiment de relation entre elles. C'était une méthode fragile et il peut arriver qu'occasionnellement, dans une application ancienne, vous soyez confrontés à une boîte dans laquelle le contenu déborde sur la suite de la page. Si vous observez ce phénomène, vous savez maintenant qu'il s'agit d'un débordement ; idéalement vous devriez remanier la mise en page afin de ne pas avoir à contraindre la taille de la boîte.

Lorsque vous développez un site, vous devez toujours garder à l'esprit les problèmes de débordement. Vous devez tester des conceptions avec des quantités de contenu importantes et réduites, augmenter la taille de la police et vous assurer que votre CSS peut s'en sortir de manière efficace. La modification de la valeur d'`overflow` pour masquer le contenu ou ajouter des barres de défilement ne sera probablement réservée qu'à quelques rares cas particuliers - par exemple lorsque vous voulez spécifiquement une barre de défilement.

## Testez vos compétences&nbsp;!

Nous avons couvert beaucoup de choses dans cet article, mais pouvez-vous vous souvenir des informations les plus importantes ? Vous pouvez trouver d'autres tests pour vérifier que vous avez bien retenu ces informations avant de partir - voir (en anglais) [Testez vos compétences: overflow](/fr/docs/Learn/CSS/Building_blocks/Overflow_Tasks).

## Résumé

Cette courte leçon a introduit le concept de débordement ; vous comprenez maintenant que le CSS essaie de ne pas faire disparaître le contenu qui déborde car cela entraînerait des pertes de données. Vous avez découvert que vous pouvez gérer un débordement éventuel, et que vous devez également tester votre travail pour vous assurer que vous ne causez pas accidentellement un débordement problématique.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Handling_different_text_directions", "Learn/CSS/Building_blocks/Values_and_units", "Learn/CSS/Building_blocks")}}
