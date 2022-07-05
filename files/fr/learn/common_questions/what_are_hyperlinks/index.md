---
title: Le fonctionnement des liens sur le Web
slug: Learn/Common_questions/What_are_hyperlinks
tags:
  - Beginner
  - Infrastructure
  - Navigation
  - NeedsActiveLearning
translation_of: Learn/Common_questions/What_are_hyperlinks
original_slug: Apprendre/Le_fonctionnement_des_liens_sur_le_Web
---
Dans cet article, nous verrons ce que sont les liens et en quoi ils sont importants pour la structure du Web.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Vous devriez, au préalable, comprendre
        <a href="/fr/Learn/How_the_Internet_works"
          >comment Internet fonctionne</a
        >
        et distinguer<a
          href="/fr/Apprendre/page_vs_site_vs_serveur_vs_moteur_recherche"
        >
          une page web, un site web, un serveur web et un moteur de recherche</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs :</th>
      <td>
        Apprendre ce que sont les liens hypertexte et comprendre leur
        importance.
      </td>
    </tr>
  </tbody>
</table>

Les hyperliens (fréquemment appelés « liens ») sont un concept fondamental du Web. Pour mieux expliquer ce que sont les liens, il nous faut remonter aux fondations de l'architecture du Web, en 1989, lorsque Tim Berners-Lee présenta les trois piliers du Web (qu'il a inventé en grande partie) :

1.  Les {{Glossary("URL")}} : un système d'adresses pour repérer les documents web
2.  {{Glossary("HTTP")}} : un protocole de transport permettant de trouver les documents en fonction de leur URL
3.  {{Glossary("HTML")}} : un format de document qui permet d'intégrer des _hyperliens_ (_hyperlink_ est le terme anglais)

Comme on peut le voir avec ces trois piliers, tout ce qui tourne autour du Web consiste en des documents et à la façon d'y accéder. Le but originel du Web était de fournir un moyen simple et efficace pour lire et naviguer entre différents documents textuels. Depuis, le Web a évolué et permet désormais d'accéder à des images, des vidéos, des données binaires. Toutefois, ces améliorations n'ont pas bouleversé ces trois piliers qui restent toujours d'actualité.

Avant l'existence du Web, il était assez difficile d'accéder à des documents et de naviguer entre eux. Le fait que les URL soient lisibles et compréhensibles aida à simplifier cette navigation. Malgré tout, saisir une URL longue relève parfois du défi si on doit le faire à chaque fois qu'on souhaite accéder à un document. C'est là que les hyperliens interviennent et révolutionnent l'accès et la navigation. Les liens permettent de faire correspondre n'importe quelle chaîne de caractère avec une URL donnée : l'utilisateur n'a plus qu'à cliquer sur le texte qui contient le lien pour activer ce dernier et se rendre sur le document ciblé.

Par défaut, les liens apparaissent en bleu et en souligné. Cela permet de faire ressortir le lien du texte environnant. Pour activer le lien, il suffit de cliquer dessus ou de le toucher. Si vous utilisez un clavier, utilisez la touche tabulation jusqu'à ce que le lien soit sélectionné puis appuyez sur la touche Entrée.

![Example of a basic display and effect of a link in a web page](link-1.png)

Les liens sont la clef de voute du Web, ils ont pu le rendre utile et prospère. Dans la suite de cet article, nous discutons des différents types de lien et de leur importance en conception web.

## Pédagogie active

_Cette section a besoin d'être enrichie, [n'hésitez pas à contribuer !](/fr/docs/MDN/Getting_started)_

## Aller plus loin

Comme nous l'avons déjà mentionné, un lien est une chaîne de texte liée à une URL et nous utilisons les liens pour passer d'un document à un autre. Cela dit, il existe quelques nuances qu'il faut préciser :

### Les types de lien

- Les liens internes
  - : Les liens internes sont des liens qui dirigent vers des pages qui appartiennent à votre site web. Sans lien interne, il n'existerait pas de site web autre que les sites qui tiennent sur une page.
- Les liens sortants
  - : Il s'agit des liens de votre page web qui pointent vers la page d'un autre site web. Sans lien externe, il n'existerait pas de Web car le Web est un réseau de pages web. Les liens externes peuvent être utilisés pour fournir des informations sur des contenus que vous ne maintenez pas vous-même.
- Les liens entrants
  - : Il s'agit des liens d'une autre page web qui pointent vers une de vos pages web. C'est le symétrique du lien externe. On notera qu'il n'est pas nécessaire d'ajouter un lien externe à chaque fois qu'on a un lien entrant vers son propre site.

Lorsqu'on construit un site web, il est nécessaire de se concentrer sur les liens internes car ceux-ci rendent le site utilisable dans son ensemble. Il faudra trouver un équilibre entre trop de liens et pas assez. Nous en parlerons plus en détails mais, en règle générale, quand vous ajoutez une nouvelle page, assurez-vous qu'au moins une autre page pointe, via un lien, vers cette nouvelle page. En revanche, si votre site possède plus d'une dizaine de pages, il serait contre-productif que d'avoir des liens sur chaque page vers chaque page.

Au démarrage, il n'est pas nécessaire de se soucier des liens sortants et entrants. Toutefois, sachez qu'ils sont importants pour les moteurs de recherche afin que ceux-ci puissent trouver votre site web (voir ci-après pour plus d'informations).

### Les ancres

La plupart des liens lient deux pages différentes. **Les ancres** permettent d'accéder à une autre section du même document. Lorsque vous suivez un lien qui pointe vers une ancre, votre navigateur se déplace sur une autre partie du document courant plutôt que d'en charger un nouveau. Les ancres seront créées et utilisées de la même façon que les liens.

![Example of a basic display and effect of an anchor in a web page](link-2.png)

### Les liens et les moteurs de recherche

Les liens sont utiles pour vos visiteurs mais aussi pour les moteurs de recherche. En effet, à chaque fois qu'un robot d'un moteur de recherche parcoure la page, il indexe le site web en suivant les liens offerts dans la page. Les moteurs de recherche utiliseront ces liens pour découvrir les différentes pages d'un site web mais aussi pour déterminer quelle page serait la mieux adaptée en fonction de la requête reçu par le moteur de recherche.

Les liens ont donc une influence sur la façon dont les moteurs de recherche vont rediriger vers votre site. Il est plutôt difficile de mesurer l'activité des moteurs de recherche et les entreprises et/ou créateurs de sites préfèrent être classés dans les premières pages. Depuis les débuts des moteurs de recherches et quelques études, on sait que :

- Le _texte visible_ d'un lien influence les sites qui seront trouvés pour une recherche donnée
- Plus la page possède de _liens entrants_, plus son rang dans le classement sera élevé (et plus elle apparaîtra en haut des résultats).
- _Les liens externes_ influencent également le classement du site source et du site lié.

[Le SEO](https://fr.wikipedia.org/wiki/Optimisation_pour_les_moteurs_de_recherche) (pour _Search Engine Optimization_ ou optimisation pour les moteurs de recherches) ou encore l'optimisation du référencement est l'étude des facteurs de classement d'un site dans les résultats d'un moteur de recherche. Améliorer les liens d'un site est l'une des technique de SEO.

## Prochaines étapes

Bien entendu, après avoir lu cet article, vous voudrez ajouter des liens à votre page web !

- Pour connaître le fonctionnement théorique, vous pouvez lire [les URL et leur structure](/fr/Apprendre/Understanding_URLs) car, pour être précis, chaque hyperlien pointe vers une URL donnée.
- Pour plonger dans la pratique, vous pouvez développer un peu de HTML. Apprenez comment [écrire des documents HTML et les lier les uns aux autres.](/fr/Apprendre/HTML/Write_a_simple_page_in_HTML)
