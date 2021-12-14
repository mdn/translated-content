---
title: Le "pourquoi" des performances Web
slug: Learn/Performance/why_web_performance
tags:
  - Apprendre
  - Débutant
  - Introduction
  - Performance
  - Performance Web
  - Reference
  - Tutoriel
translation_of: Learn/Performance/why_web_performance
original_slug: Learn/Performance/pourquoi_performance_web
---
{{LearnSidebar}}{{NextMenu("Learn/Performance/What_is_web_performance", "Learn/Performance")}}

La performance Web consiste à rendre les sites Web rapides, y compris à rendre les processus lents rapides. Cet article explique pourquoi les performances Web sont importantes pour les visiteurs du site et pour vos objectifs commerciaux.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        Connaissances de base en informatique,
        <a
          href="/fr/docs/Apprendre/Commencer_avec_le_web/Installation_outils_de_base"
          >installation des outils de base</a
        >, et connaissances de base des
        <a href="/fr/docs/Apprendre/Commencer_avec_le_web"
          >technologies Web côté client</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        Connaître les raisons pour lesquelles les performances Web sont
        importantes pour une bonne expérience utilisateur.
      </td>
    </tr>
  </tbody>
</table>

Les performances Web font référence à la rapidité avec laquelle le contenu du site se **charge** et **s'affiche** dans un navigateur web, et à la façon dont il répond à l'interaction de l'utilisateur. Les sites peu performants sont lents à afficher et à répondre aux entrées. Les sites mal performants augmentent l'abandon des sites. Au pire, une mauvaise performance rend le contenu totalement inaccessible. Un bon objectif pour les performances Web est que les utilisateurs ne remarquent pas les performances. Alors que la perception d'un individu sur les performances du site est subjective, le chargement et le rendu peuvent être mesurés. De bonnes performances peuvent ne pas être évidentes pour la plupart des visiteurs du site, mais la plupart reconnaîtront immédiatement un site lent. C'est pourquoi nous nous soucions de cela.

## Pourquoi se soucier de la performance?

Les performances Web et les meilleurs pratiques associées sont essentielles pour que les visiteurs de votre site Web aient une bonne expérience. En un sens, les performances Web peuvent être considérées comme un sous-ensemble de l'[accessibilité web](/fr/docs/Apprendre/a11y). Avec les performaces comme avec l'accessibilité, vous considérez que appareil un visiteur du site utilise pour accéder au site et la vitesse de connexion de l'appareil.

À titre d'exemple, considérons l'expérience de chargement de CNN.com, qui, au moment de la rédaction de cet article,  avait plus de 400 requêtes HTTP avec une taille de fichier supérieure à 22.6Mo.

- Imaginez charger ceci sur un ordinateur de bureau connecté à un réseau de fibre optique. Cela semblerait relativement rapide, et la taille du fichier serait en grande partie sans importance.
- Imaginez charger ce même site en utilisant des données mobiles connectées sur un iPad de 9 ans tout en vous rendant chez vous en transport en commun. Le même site sera lent à se charger, voir presque inutilisable en fonction de la couverture cellulaire. Vous pourriez abandonner avant la fin du chargement.
- Imaginez charger ce même site sur un appareil Huawei à 35$ dans une Inde rurale avec une couverture limitée ou pas de couverture. Le site sera très lent à se charger - s'il se charge du tout - avec des scripts de blocage pouvant expirer et un impact négatif sur le processeur provoquant des plantages du navigateur s'il se charge.

Un site de 22.6 Mo peut prendre jusqu'à 83 secondes pour se charger sur un réseau 3G, avec [`DOMContentLoaded`](/fr/docs/Web/API/Document/DOMContentLoaded_event) (c'est-à-dire la structure HTML de base du site) à 31.86 secondes.

Et ce n'est pas seulement le temps de téléchargement qui est un problème majeur. De nombreux pays ont encore des connexions internet facturées âr mégaoctet. Notre exemple de 22,6 Mo d'expérience CNN.com coûterait environ 11% du salaire quotidien moyen d'un Indien à télécharger. À partir d'un appareil mobile en Afrique du Nord-Ouest, cela peut coûter deux jours de salaire moyen. Et si ce site était chargé sur le plan d'itinérance internationale d'un opérateur américain? Les coûts feraient pleurer n'importe qui. (Voir [combien coûte le téléchargement de votre site](https://whatdoesmysitecost.com/).)

### Améliorer les taux de conversion

La réduction du temps de téléchargement et de rendu d'un site améliore les taux de conversion et la fidélisation des utilisateurs.

Un **taux de conversion** est le taux auquel les visiteurs du site effectuent une action mesurée ou souhaitée. Par exemple, il peut s'agir d'effectuer un achat, de lire un article ou de vous abonner à une newsletter. L'action mesurée en tant que taux de conversion dépend des objectifs commerciaux du site web.

La performance influe sur la conversion; l'amélioration des performances Web améliore la conversion. Les visiteurs du site s'attendent à ce qu'un site se charge en deux secondes ou moins; parfois encore moins sur mobile (où cela prend généralement plus de temps). Ces mêmes visiteurs du site commencent à abandonner les sites lents à 3 secondes.

La vitesse à laquelle un site se charge est un facteur. Si le site est lent à réagir à l'interaction de l'utilisateur, ou semble saccadé, cela entraîne une perte d'intérêt et de confiance des visiteurs du site.

Voici quelques exemples concrets d'améliorations des performances:

- [Tokopedia a réduit le temps de rendu de 14s à 2s pour les connexions 3G et a vu une augmentation de 19% des visiteurs, 35% d'augmentation du nombre total de sessions, 7% d'augmentation des nouveaux utilisateurs, 17% d'augmentation des utilisateurs actifs et 16% d'augmentation des sessions par utilisateur.](https://wpostats.com/2018/05/30/tokopedia-new-users.html)
- [La reconstruction des pages Pinterest pour les performances a entraîné une réduction de 40% du temps d'attente, une augmentation de 15% du trafic SEO et d'une augmentation de 15% du taux de conversion pour l'inscription.](https://wpostats.com/2017/03/10/pinterest-seo.html)

Pour créer des sites Web et des applications que les gens veulent utiliser; pour attirer et fidéliser les visiteurs du site, vous devez créer un site accessible qui offre une bonne expérience utilisateur. La création de sites Web nécessite HTML, CSS et JavaScript, y compris généralement des types de fichiers binaires tels que des images et des vidéos. Les décisions que vous prenez et les outils que vous choisissez lors de la création de votre site peuvent grandement affecter les performances du travail fini.

Une bonne performance est un atout. Une mauvaise performance est une responsabilité. La vitesse du site affecte directement les taux de rebond, la conversion, les revenus, la satisfaction des utilisateurs et le classement des moteurs de recherche. Il a été démontré que les sites performants augmentent la rétention des visiteurs et la satisfaction des utilisateurs. Il a été démontré que la lenteur du contenu conduit à l'abandon du site, certains visiteurs partant pour ne jamais revenir. La réduction de la quantité de données qui passe entre le client et le serveur réduit les coûts pour toutes les parties. La réduction de la taille des fichiers HTML/CSS/JavaScript et multimédia réduit à la fois le temps de chargement et la consommation d'énergie d'un site (voir [performance budgets](/fr/docs/Web/Performance/Budgets_de_performance)).

Le suivi des performances est important. Plusieurs facteurs, notamment la vitesse du réseau et les capacités de l'appareil, affectent les performances. Il n'y a pas de mesure de performance unique; et des objectifs commerciaux différents peuvent signifier que différentes mesures sont plus pertinentes pour les objectifs du site ou de l'organisation qu'il prend en charge. La perception de la performance de votre site est l'expérience utilisateur!

## Conclusion

Les performances Web sont importantes pour l'accessibilité et également pour d'autres mesures de site Web qui servent les objectifs d'une organisation ou d'une entreprise. Les bonnes ou mauvaises performances du site Web sont fortement corrélées à l'expérience utilisateur, ainsi qu'à l'efficacité globale de la plupart des sites. C'est pourquoi vous devez vous soucier des performances Web.

{{NextMenu("Learn/Performance/What_is_web_performance", "Learn/Performance")}}

## Dans ce module

- [The "why" of web performance](/fr/docs/Learn/Performance/why_web_performance)
- [What is web performance?](/fr/docs/Learn/Performance/What_is_web_performance)
- [How do users perceive performance?](/fr/docs/Learn/Performance/Perceived_performance)
- [Measuring performance](/fr/docs/Learn/Performance/Measuring_performance)
- [Multimedia: images](/fr/docs/Learn/Performance/Multimedia)
- [Multimedia: video](/fr/docs/Learn/Performance/video)
- [JavaScript performance best practices](/fr/docs/Learn/Performance/JavaScript).
- [HTML performance features](/fr/docs/Learn/Performance/HTML)
- [Optimisation des performances en CSS](/fr/docs/Learn/Performance/CSS)
- [Fonts and performance](/fr/docs/Learn/Performance/Fonts)
- [Mobile performance](/fr/docs/Learn/Performance/Mobile)
- [Focusing on performance](/fr/docs/Learn/Performance/business_case_for_performance)
