---
title: Qu'est-ce que CSS ?
slug: Learn/CSS/First_steps/What_is_CSS
translation_of: Learn/CSS/First_steps/What_is_CSS
original_slug: Learn/CSS/First_steps/Qu_est_ce_que_CSS
---
{{LearnSidebar}}{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}

**[CSS](/fr/docs/Glossary/CSS)** (_Cascading Style Sheets_) permet de créer des pages web à l'apparence soignée. Cet article vous propose de lever le voile en expliquant ce qu'est CSS ; un exemple simple en présentera la syntaxe, puis quelques termes clés du langage seront introduits.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions de base en l'informatique,
        <a href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >logiciels de base installés</a
        >,
        <a href="/fr/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >savoir manipuler des fichiers</a
        >, connaissance de base de HTML (cf. <a href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction au HTML</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>Apprendre ce qu'est CSS.</td>
    </tr>
  </tbody>
</table>

Dans le cours [Introduction au HTML](/fr/docs/Learn/HTML/Introduction_to_HTML), nous avons présenté le langage HTML et comment l'utiliser afin de rédiger des documents structurés. Ces documents seront consultables dans un navigateur ; les titres apparaîtront dans une police plus grande que le corps de texte, la rupture entre deux paragraphes sera marquée par un saut de ligne, et les liens seront soulignés et colorés pour les distinguer du reste du texte. L'image ci-dessous montre comment un navigateur affiche un document HTML — la mise en forme par défaut garantit un minimum de lisibilité, même si l'auteur de la page n'a spécifié aucune règle de style.

![La mise en forme par défaut appliquée par un navigateur.](html-example.png)

Le Web serait d'un ennui terrible si tous les sites ressemblaient à la page ci-dessus. Grâce aux CSS, vous pouvez contrôler exactement l'affichage de chaque élément HTML dans le navigateur et ainsi présenter vos documents avec la mise en forme de votre choix.

Pour plus d'informations sur les styles de navigateur/par défaut, consultez la vidéo suivante&nbsp;:

{{EmbedYouTube("spK_S0HfzFw")}}

## À quoi sert CSS&nbsp;?

Comme mentionné plus haut, CSS est un langage de mise en forme des documents.

Les **documents** en question sont des fichiers texte structurés avec un langage de balises — [HTML](/fr/docs/Glossary/HTML) est le plus connu de ces langages, d'autres exemples sont [SVG](/fr/docs/Glossary/SVG) ou [XML](/fr/docs/Glossary/XML).

**Présenter** un document à l'utilisateur signifie convertir ce document dans une forme utilisable par le public visé. Les [navigateurs](/fr/docs/Glossary/Browser), tels [Firefox](/fr/docs/Glossary/Mozilla_Firefox), [Chrome](/fr/docs/Glossary/Google_Chrome), [Safari](/fr/docs/Glossary/Apple_Safari) ou [Edge](/fr/docs/Glossary/Microsoft_Edge) sont conçus pour présenter visuellement des documents, que ce soit sur l'écran d'un ordinateur, un vidéo-projecteur ou une imprimante.

> **Note :** Un navigateur est parfois appelé [agent utilisateur](/fr/docs/Glossary/User_agent). On entend par là un programme informatique qui agit pour un utilisateur au sein d'un système informatique. Pour CSS, les premiers agents utilisateur qui nous viennent à l'esprit sont les navigateurs. Ce ne sont pourtant pas les seuls. Il existe d'autres agents utilisateurs comme les programmes qui convertissent des documents  HTML et CSS en documents PDF imprimables.

CSS peut être utilisé pour une mise en forme élémentaire des documents — par exemple, changer [la couleur](/fr/docs/Web/CSS/color_value) et [la taille](/fr/docs/Web/CSS/font-size) des titres et des liens. Il peut être utilisé pour concevoir une maquette — par exemple, [transformer un texte affiché sur une colonne en une composition](/fr/docs/Web/CSS/Layout_cookbook/Column_layouts) avec un cadre principal et une barre latérale pour les informations reliées. Avec CSS, on peut aussi produire des [animations](/fr/docs/Web/CSS/CSS_Animations). N'hésitez pas à cliquer sur les liens de ce paragraphe pour observer différents exemples.

## Syntaxe de CSS

CSS est un langage basé sur des règles — on définit des règles de styles destinées à des éléments ou des groupes d'éléments particuliers dans la page. Par exemple, «&nbsp;Je veux que le titre principal de ma page s'affiche en rouge en gros caractères.&nbsp;»

Dans le code suivant, une règle CSS élémentaire réalise cette mise en forme&nbsp;:

```css
h1 {
  color: red;
  font-size: 5em;
}
```

La règle commence par un [sélecteur](/fr/docs/Glossary/CSS_Selector), l'élément HTML mis en forme. Ici, le style s'applique aux titres de niveau 1 ([`<h1>`](/fr/docs/Web/HTML/Element/Heading_Elements)).

Suivent une paire d'accolades `{ }` à l'intérieur desquelles on trouve une ou plusieurs **déclarations**, sous la forme d'une paire **propriété:&nbsp;valeur**. Chaque paire précise une propriété de l'élément sélectionné, suivie de la valeur choisie pour cette propriété ; la propriété et la valeur sont séparées par deux points. Chaque déclaration se termine par un point-virgule. À chaque [propriété](/fr/docs/Glossary/property/CSS) définie par CSS correspondent différentes valeurs possibles. Dans l'exemple, la propriété `color` peut prendre différentes [valeurs de type `<color>`](/fr/docs/Learn/CSS/Building_blocks/Values_and_units#couleur). La propriété `font-size` accepte différentes [tailles](/fr/docs/Learn/CSS/Building_blocks/Values_and_units#nombres_longueurs_et_pourcentages) comme valeurs.

Une feuille de style CSS est constituée d'une succession de telles règles&nbsp;:

```css
h1 {
  color: red;
  font-size: 5em;
}

p {
  color: black;
}
```

On retient facilement certaines valeurs, d'autres sont plus difficiles à mémoriser. Pour s'y retrouver, sur MDN, la page individuelle de chaque propriété donne un aperçu rapide et complet des valeurs applicables.

> **Note :** Sur MDN, dans [la référence CSS](/fr/docs/Web/CSS/Reference), vous trouverez une collection de liens à propos de chaque propriété CSS (ainsi que d'autres aspects de CSS). Par ailleurs, n'hésitez pas à lancer des requêtes «&nbsp;mdn _nom-de-propriété-ou-fonctionnalité-css_&nbsp;» dans votre moteur de recherche préféré dès qu'un aspect de CSS vous interpelle. Vous pouvez, par exemple, tester les requêtes «&nbsp;mdn color&nbsp;» et «&nbsp;mdn font-size&nbsp;»&nbsp;!

## Modules CSS

L'ensemble des fonctionnalités CSS est si important que le langage et ses spécifications ont été découpés en _modules_. En naviguant dans le site MDN vous croiserez ces modules&nbsp;: quand des pages de documentation sont regroupées, c'est la plupart du temps qu'elles réfèrent à un même module. Par exemple, jetez un œil à la référence MDN pour le module *[Backgrounds and Borders](/fr/docs/Web/CSS/CSS_Backgrounds_and_Borders)*, vous y trouverez ce pour quoi il a été conçu, les différentes propriétés et fonctionnalités qu'il regroupe. Vous trouverez aussi des liens vers la spécification CSS qui définit cette technologie (voir plus bas).

À ce stade, inutile de se préoccuper de la structure de CSS (même s'il est parfois plus simple de trouver une information quand on a compris qu'une propriété est reliée à une famille d'autres propriétés au sein d'un même module de spécification).

Prenons un exemple précis et revenons au module *Backgrounds and Borders* — les propriétés [`background-color`](/fr/docs/Web/CSS/background-color) et [`border-color`](/fr/docs/Web/CSS/border-color) qui agissent sur l'arrière-plan et les bordures appartiennent toutes les deux à ce module.

### Spécifications CSS

Chaque technologie standard du Web (HTML, CSS, JavaScript, etc.) est définie dans un grand document appelé spécification (parfois abrégé en «&nbsp;spec&nbsp;»). Les spécifications sont publiées par des organisations de standardisation (telles que le [W3C](/fr/docs/Glossary/W3C), [WHATWG](/fr/docs/Glossary/WHATWG), [ECMA](/fr/docs/Glossary/ECMA), ou [Khronos](/fr/docs/Glossary/Khronos)), elles définissent précisément le comportement attendu de ces technologies.

CSS ne déroge pas à la règle — il est développé par un groupe au sein du W3C, nommé le [_CSS Working Group_ (ou «&nbsp;groupe de travail CSS&nbsp;» en français)](https://www.w3.org/Style/CSS/). Ce groupe est constitué de représentants des éditeurs de navigateurs et d'autres sociétés concernées par CSS. On y trouve aussi des _experts invités_ affiliés à aucune des organisations membres qui apporte une voix indépendante à la conception de CSS.

De nouveaux aspects de CSS sont développés ou spécifiés par le groupe de travail CSS, parfois parce qu'un navigateur particulier désire tel comportement, d'autres fois parce que des concepteurs web et des développeurs demandent certaines fonctionnalités et enfin parfois lorsque le groupe de travail CSS a identifié un besoin. CSS est en développement constant, avec de nouvelles fonctionnalités disponibles au fur et à mesure. Une des caractéristiques cruciales de chaque brique du Web et donc de CSS est la rétro-compatibilité&nbsp;: chaque contributeur s'attache à garantir qu'un site web développé en 2000 avec le CSS disponible à l'époque sera toujours utilisable dans un navigateur actuel&nbsp;!

Si vous débutez en CSS, la lecture des spécifications peut être déroutante&nbsp;: elles s'adressent avant tout aux ingénieurs qui implémentent la prise en charge dans les navigateurs et pas aux développeurs web qui doivent comprendre les propriétés pour les utiliser dans leurs sites. Dans ce cas, la documentation MDN ou d'autres tutoriels sont recommandés. Il est pourtant important de savoir que les spécifications existent, de comprendre la relation entre celles-ci, le CSS que vous utilisez et la prise en charge des navigateurs (voir ci-dessous).

## Prise en charge par les navigateurs

Les fonctionnalités CSS définies dans les spécifications peuvent uniquement être utilisées dans une page web si un ou plusieurs navigateurs les implémentent. Autrement dit, il faut bien qu'il y ait un programme qui puisse transformer les règles CSS en éléments affichés à l'écran.

Nous étudierons ce point plus en détail dans l'article sur [le fonctionnement des CSS](/fr/docs/Learn/CSS/First_steps/How_CSS_works). Il est rare que les différents navigateurs implémentent simultanément une nouvelle fonctionnalité CSS. Il est donc fréquent que certains sous-ensembles de CSS soient fonctionnels pour certains navigateurs et pas pour d'autres. Pour cette raison, il est essentiel de vérifier l'état de la compatibilité et des implémentations. Sur chaque page MDN décrivant une propriété, le statut d'implémentation de la propriété est fourni dans un tableau de compatibilité web. Vous saurez ainsi s'il est pertinent de l'utiliser dans votre site web.

Voici, par exemple, le tableau de compatibilité pour la propriété [`font-family`](/fr/docs/Web/CSS/font-family).

{{Compat("css.properties.font-family")}}

## Où continuer

Maintenant que vous avez compris ce qu'est CSS, vous pourrez commencer à écrire vos premières règles de style dans la leçon [Démarrer avec CSS](/fr/docs/Learn/CSS/First_steps/Getting_started).

{{NextMenu("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps")}}

## Dans ce module

1.  [Qu'est-ce que CSS&nbsp;?](/fr/docs/Learn/CSS/First_steps/What_is_CSS)
2.  [Démarrer avec CSS](/fr/docs/Learn/CSS/First_steps/Getting_started)
3.  [Comment CSS est structuré](/fr/docs/Learn/CSS/First_steps/How_CSS_is_structured)
4.  [CSS, comment ça marche&nbsp;?](/fr/docs/Learn/CSS/First_steps/How_CSS_works)
5.  [Mettre en œuvre vos connaissances](/fr/docs/Learn/CSS/First_steps/Using_your_new_knowledge)