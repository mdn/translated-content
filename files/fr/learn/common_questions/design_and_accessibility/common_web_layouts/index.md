---
title: Conception d'une page web
slug: Learn/Common_questions/Design_and_accessibility/Common_web_layouts
---

Lorsque vous concevez des pages pour votre site Internet, il est utile d'avoir en tête les modèles de mise en page les plus fréquemment utilisés.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Assurez-vous d'avoir d'abord identifié
        <a href="/fr/Apprendre/Commencez_votre_projet_web"
          >ce que vous souhaitez accomplir</a
        >
        avec votre projet web.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Apprendre où (et comment&nbsp;!) disposer des éléments dans vos pages web.
      </td>
    </tr>
  </tbody>
</table>

Nous avons une bonne raison de vous initier à la conception web. Vous commencez avec une page vierge, puis vous devez choisir entre tellement de possibilités… Si vous avez peu d'expérience, la page blanche initiale pourrait vous paraître intimidante. Comme nous avons plus de 25 ans d'expérience dans le domaine, nous allons vous présenter quelques règles générales qui pourront vous aider dans la conception de votre site web.

Même aujourd'hui, malgré toute l'attention portée aux appareils mobiles, la majorité des pages web contient les sections suivantes&nbsp;:

- En-tête
  - : Visible au haut de chaque page du site, cette section comprend des informations pertinentes pour l'ensemble des pages (par exemple, le nom du site ou un logo) et un menu de navigation convivial.
- Contenu principal
  - : Cette section occupe la plus grande partie de l'espace et contient du contenu unique, relatif à la page consultée.
- Contenu secondaire

  - : Il peut s'agir&nbsp;:

    1. d'informations complémentaires au contenu principal&nbsp;;
    2. d'informations partagées entre un sous-ensemble de pages&nbsp;;
    3. d'un moyen alternatif de navigation. En fait, ce peut être un peu tout ce qui est superflu par rapport au contenu principal.

- Bas de page
  - : Visible au bas de chaque page du site, cette section contient, tout comme l'en-tête, des informations pertinentes pour l'ensemble des pages. On peut, entre autres, y trouver les mentions légales et les informations nécessaires pour contacter les responsables du site.

Ces quatre sections sont généralement présentes, mais elles peuvent être disposées de plusieurs façons distinctes. Voici quelques exemples de dispositions possibles (où **1** représente l'entête&nbsp;; **2,** le bas de page&nbsp;; **A**, le contenu principal&nbsp;; et **B1, B2**, le contenu secondaire)&nbsp;:

**Dispostion à une colonne&nbsp;:** particulièrement utile pour l'affichage sur téléphone mobile, car cette disposition évite d'encombrer les petits écrans.

![Example of a 1 column layout: Main on top and asides stacked beneath it.](1-col-layout.png)

**Disposition à deux colonnes&nbsp;:** souvent utilisée pour l'affichage sur tablettes, car elles disposent d'un écran de taille moyenne.

![Example of a basic 2 column layout: One aside on the left column, and main on the right column.](2-col-layout-right.png) ![Example of a basic 2 column layout: One aside on the right column, and main on the left column.](2-col-layout-left.png)

**Disposition à trois colonnes&nbsp;:** adaptée uniquement pour les ordinateurs de bureau ayant un grand écran (et encore, cela est relatif, car plusieurs utilisateurs d'ordinateurs de bureau préférent visionner les sites dans des fenêtres de taille réduite plutôt qu'en mode plein écran).

![Example of a basic 3 column layout: Aside on the left and right column, Main on the middle column.](3-col-layout.png) ![Another example of a 3 column layout: Aside side by side on the left, Main on the right column.](3-col-layout-alt.png) ![Another example of a 3 column layout: Aside side by side on the right, Main on the left column.](3-col-layout-alt2.png)

Il est aussi possible de mélanger tous ces modèles classiques :

![Example of mixed layout: Main on top and asides beneath it side by side.](1-col-layout-alt.png) ![Example of a mixed layout: Main on the left column and asides stack on top of each other on the right column](2-col-layout-left-alt.png) ![Example of a mixed layout: one aside on the left column and main in the right column with a aside beneath main.](2-col-layout-mix.png) ![Example of a mixed layout: Main on the left of the first row and one aside on the right of that same row, a second aside convering the whole second row.](2-col-layout-mix-alt.png)…

Sachez que ce ne sont que des exemples et que vous êtes libre de disposer les sections à votre façon. Vous remarquerez toutefois que l'en-tête demeure toujours en haut et le bas de page, en bas, peu importe les autres déplacements du contenu. Aussi, comme la section la plus importante est celle du contenu principal, assurez-vous d'y laisser le plus de place possible.

Ce sont là des règles générales dont vous pouvez vous inspirer. Bien entendu, il existera toujours des exceptions aux règles et des mises en page plus complexes. Nous discuterons d'ailleurs, dans d'autres articles, de la création de sites webs adaptatifs (c'est-à-dire qui s'ajustent à la taille de l'écran) et de sites utilisant plus d'un modèle de mise en page selon la page consultée. Pour l'instant, il serait cependant mieux de garder une mise en page uniforme sur l'ensemble de votre site.

## Pédagogie active

_Aucun exercice pratique n'est disponible actuellement. [S.V.P., pensez à contribuer&nbsp;!](/fr/docs/MDN/Débuter_sur_MDN)_

## Aller plus loin

Regardons maintenant quelques exemples concrets tirés de sites connus.

### Disposition à une colonne

**[Invision](http://www.invisionapp.com/)&nbsp;:** un exemple de disposition classique à une colonne où toute l'information est présentée de façon linéaire sur une page.

![Example of a 1 column layout in the wild](screenshot-product.jpg)
![1 column layout with header, main content, a stack of aside contents and a footer](screenshot-product-overlay.jpg)

Un style simple et direct. N'oubliez pas, toutefois, que certains utilisateurs navigeront à partir d'un ordinateur de bureau et qu'il faut donc s'assurer que le contenu soit accessible sur cette plateforme également.

### Disposition à deux colonnes

**[Abduzeedo](http://abduzeedo.com/typography-mania-261)**, un blog à disposition simple. En règle générale, les blogs comprennent deux colonnes&nbsp;: une large pour le contenu principal et une plus étroite pour les à-côtés (comme des widgets, les menus de navigation et les publicités).

![Example of a 2 column layout for a blog](screenshot-blog.jpg)
![A 2 column layout with the main content on the left column](screenshot-blog-overlay.jpg)

Dans cet exemple, regardez bien l'image (B1) située directement sous l'en-tête. L'image est en rapport avec le contenu principal, mais n'est pas essentielle à sa compréhension. Nous pourrions donc considérer que l'image fait partie du contenu principal ou bien qu'il s'agit d'un à-côté (contenu secondaire). La distinction importe peu. Ce qui est vraiment important, c'est qu'un élément placé directement sous l'en-tête devrait soit faire partie du contenu principal, soit y être _directement relié_.

### Attention, c'est un piège&nbsp;!

**[MICA](http://www.mica.edu/About_MICA.html)**. Cet exemple est un peu plus embêtant. On dirait une disposition à trois colonnes…

![Example of a false 3 columns layout](screenshot-education.jpg)
![It looks like a 3 columns layout but actually, the aside content is floating around.](screenshot-education-overlay.jpg)

…mais non&nbsp;! B1 et B2 flottent autour du contenu principal. Rappelez-vousce mot-clé&nbsp;: "flotte" (_float_ en anglais) - nous y reviendrons lorsque vous commencerez à apprendre le {{Glossary("CSS")}}.

Pourquoi êtes-vous porté à penser qu'il s'agit d'une disposition à trois colonnes&nbsp;? Eh bien, pour trois raisons&nbsp;: parce que l'image en haut à droite est en forme de L, parce que B1 semble être une colonne soutenant un contenu principal décalé vers la gauche et parce le "M" et le "I" du logo de MICA forment une ligne de force verticale.

Il s'agit ici d'un bon exemple d'une mise en page classique qui a été rehaussée avec un peu de créativité. Les dispositions simples sont plus faciles à mettre en place, mais ne devraient pas restreindre votre créativité.

### Une disposition en apparence beaucoup plus complexe

**L'[Opéra de Paris](https://www.operadeparis.fr/en/saison-2014-2015/opera/la-boheme-puccini).**

![An example of a tricky layout.](screenshot-opera.jpg)
![This is a 2 column layout but the header is overlaping the main content.](screenshot-opera-overlay.jpg)

Il s'agit à la base d'une disposition à deux colonnes, mais vous noterez quelques ajustements ici et là qui viennent rompre la linéarité de la disposition. On remarque surtout que l'en-tête est superposée à l'image du contenu principal. En raison de la courbe du menu de navigation qui rappelle celle au bas de l'image principale, l'en-tête et l'image semblent former un seul élément uni alors qu'il s'agit en fait d'éléments techniquement distincts. L'exemple de l'Opéra de Paris semble plus complexe à réaliser que celui de MICA, mais est en réalité plus facile à mettre en place (la facilité étant bien entendu, un concept plutôt relatif).

Comme vous pouvez le voir, il est possible de créer des sites sensationnels avec des mises en page somme toute assez simples. Jetez un coup d'œil à vos sites préférés. Pouvez-vous repérer l'en-tête, le bas de page, le contenu principal et le contenu secondaire&nbsp;? Cet exercice pourra vous fournir de l'inspiration pour vos propres réalisations et vous aider à distinguer les dispositions qui fonctionnent bien de celles qui posent problème.

## Prochaines étapes

Deux options s'offrent maintenant à vous&nbsp;:

- Approfondir vos connaissances [sur les bases de la conception web](/fr/Apprendre/Commencer_avec_le_web).
- Mettre le tout en pratique en [créant votre toute première page web](/fr/Learn/HTML/Write_a_simple_page_in_HTML).
