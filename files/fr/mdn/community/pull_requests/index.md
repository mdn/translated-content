---
title: Requêtes de tirage soumission et révisions
slug: MDN/Community/Pull_requests
l10n:
  sourceCommit: 20cff31570e35c6da44ddd84158fcebd9f4f42d9
---

Ce document explique comment les contributeur·ice·s apportent des modifications à MDN Web Docs, comment ces changements sont relus et publiés sur le site.
Les modifications de contenu sur MDN Web Docs incluent&nbsp;:

- **Améliorations quotidiennes** de la documentation des API, des propriétés CSS, des mises à jour de la plateforme et des ajouts de contenu.
  Cela est généralement réalisé par l'équipe MDN Web Docs travaillant pour Mozilla, Google, Open Web Docs, Samsung, mais aussi par des bénévoles de la communauté.
- **Corrections mineures** et petites mises à jour du site pour corriger des fautes de frappe, des problèmes grammaticaux ou des inexactitudes techniques.
  Ces problèmes sont souvent signalés par les lecteur·ice·s de MDN Web Docs.
- **Corrections de bugs de contenu**, généralement effectuées par des bénévoles pour clore les [problèmes du dépôt anglais `mdn/content`](https://github.com/mdn/content/issues) et les [problèmes du dépôt de traduction `mdn/translated-content`](https://github.com/mdn/translated-content/issues).

Quelle que soit la façon dont les modifications sont apportées, elles sont soumises sous forme de requêtes de tirage («&nbsp;<i lang="en">pull request</i>&nbsp;» en anglais) sur GitHub.
Les changements suivent les étapes suivantes avant d'être publiés sur MDN Web Docs&nbsp;:

1. **Soumission des modifications&nbsp;:** En tant qu'auteur·ice de la requête de tirage, vous soumettez vos changements en ouvrant une requête de tirage.
   Consultez les sections [Avant de commencer](#avant_de_commencer), [Ouvrir une requête de tirage](#ouvrir_une_requête_de_tirage) et [Après avoir ouvert une requête de tirage](#apres_avoir_ouvert_une_requête_de_tirage) pour en savoir plus sur nos processus.
2. **Relecture des modifications&nbsp;:** Vos changements sont relus par des membres de MDN et des bénévoles.
   Voir la section [Processus de relecture des requêtes de tirage](#processus_de_relecture_des_requêtes_de_tirage) pour plus de détails.
3. **Publication des modifications&nbsp;:** Le contenu mis à jour sur `mdn/content` ou `mdn/translated-content` est mis en ligne dans la journée suivant la fusion, lors d'une reconstruction du site (toutes les 24h).

## Soumettre des modifications

### Valeurs et participation

Nous souhaitons que MDN Web Docs soit une communauté accueillante et bienveillante, dont nous puissions tous·tes être fier·e·s. Tous·tes les participant·e·s doivent respecter nos [Règles de participation à la communauté](/fr/docs/MDN/Community/Community_Participation_Guidelines), dérivées des [Règles de participation de la communauté Mozilla](https://www.mozilla.org/fr/about/governance/policies/participation/).
Soyez poli·e et constructif·ive lors de l'ouverture de requêtes de tirage, de la rédaction de commentaires de relecture, ou lors des échanges avec l'auteur·ice de la requête de tirage ou d'autres membres de la communauté.
Si vous ou quelqu'un d'autre êtes confronté·e à un comportement potentiellement illégal ou qui vous met mal à l'aise, en insécurité ou non bienvenu·e, nous vous encourageons à [le signaler](/fr/docs/MDN/Community/Community_Participation_Guidelines#processus_de_signalement).

### Avant de commencer

Avant de commencer à contribuer au MDN, veuillez lire les recommandations et consignes ci-dessous.

**Les requêtes de tirage doivent résoudre ou corriger partiellement un ticket existant.**
Cette règle permet d'éviter que vous ne commenciez une tâche déjà prise en charge par quelqu'un d'autre.
Parcourez les problèmes et requêtes de tirage du [dépôt MDN](https://github.com/orgs/mdn/repositories) auquel vous souhaitez contribuer et vérifiez que le travail que vous voulez commencer n'est pas déjà en cours.
Lorsque vous souhaitez contribuer au projet MDN, vous pouvez vous trouver dans l'une des situations suivantes&nbsp;:

- **Si vous souhaitez contribuer au projet**, vous trouverez des tâches dans la section «&nbsp;Issues&nbsp;» de n'importe quel [dépôt GitHub MDN <sup>(angl.)</sup>](https://github.com/orgs/mdn/repositories) (par exemple, les [problèmes de `mdn/translated-content`](https://github.com/mdn/translated-content/issues)) et sur nos [tableaux de projet publics GitHub <sup>(angl.)</sup>](https://github.com/orgs/mdn/projects).
  Assurez-vous que le ticket n'est pas déjà assigné et qu'aucune pull request n'a été ouverte pour cette tâche.
  Les issues étiquetées `good first issue` sont un bon point de départ.

- **Si vous avez trouvé un problème sur MDN**, ouvrez d'abord un ticket (issue).
  **Les issues doivent recevoir une réponse des mainteneur·euse·s avant de commencer à travailler** afin de s'assurer que le problème traité par la pull request est valide et que votre contribution sera acceptée.
  Plus d'informations sur les issues sont disponibles sur nos [pages Communauté pour les issues GitHub <sup>(angl.)</sup>](https://github.com/mdn/mdn/issues/new?labels=proposal%2Cneeds+triage&template=content-or-feature-suggestion.yml&title=Enter+your+proposal+here).

- **Si vous souhaitez proposer un nouveau contenu ou une nouvelle fonctionnalité**, soumettez une proposition via le [modèle d'issue GitHub «&nbsp;New content or feature suggestion&nbsp;» <sup>(angl.)</sup>](https://github.com/mdn/mdn/issues/new/choose).

Si vous ne savez pas par où commencer, contactez-nous sur [le serveur Discord](/fr/docs/MDN/Community/Communication_channels) et demandez un retour.

### Ouvrir une requête de tirage

Lorsque vous êtes prêt·e à ouvrir une requête de tirage, suivez ces recommandations&nbsp;:

- **Les requêtes de tirage doivent être courtes et centrées sur un seul problème&nbsp;:** Si possible, regroupez les modifications liées en plusieurs petites requêtes de tirage.
  Si une requête devient trop volumineuse, le·la relecteur·ice peut la fermer et vous demander de soumettre des requêtes distinctes pour chaque ensemble logique de changements.
- **Ajoutez une description des modifications&nbsp;:** Fournissez autant de contexte et de justification que possible pour la requête de tirage.
- **Ajoutez le lien vers le ticket que vous clôturez&nbsp;:** Dans la description de la requête, ajoutez «&nbsp;Fixes&nbsp;» si elle résout totalement le problème ou «&nbsp;Relates to&nbsp;» si c'est un problème connexe.
  Plus d'informations sur le lien entre requêtes et tickets sont disponibles dans la [documentation GitHub](https://docs.github.com/fr/issues/tracking-your-work-with-issues/using-issues/linking-a-pull-request-to-an-issue#linking-a-pull-request-to-an-issue-using-a-keyword).
- **Ajoutez «&nbsp;depends on&nbsp;»** avec un lien vers une dépendance si d'autres requêtes doivent être fusionnées avant (ex.&nbsp;: exemples de code dans d'autres dépôts).
- **Accompagnez les modifications d'exemples de code par des changements de contenu&nbsp;:** Cela garantit que les exemples mis à jour sont bien pris en compte.
  Si vous modifiez le contenu qui impacte l'utilisation des exemples, pensez à mettre à jour les exemples concernés.
- **Ajoutez un·e relecteur·ice&nbsp;:** Vous pouvez ajouter un·e relecteur·ice, membre de l'équipe ou référent·e du sujet, si vous savez déjà qui doit relire votre requête.
- **N'apportez pas de modifications purement stylistiques&nbsp;:**
  MDN Web Docs est une documentation technique&nbsp;: n'apportez pas de changements de style sauf pour corriger une faute de grammaire.
- **N'ajoutez ni ne supprimez de sauts de ligne inutilement** sur les pages qui suivent un style de formatage particulier.

### Après avoir ouvert une requête de tirage

- **Gérez les échecs CI** provenant des tests automatisés exécutés par GitHub Actions (voir `.github/workflows`).
  Si un ou plusieurs tests échouent, il vous revient d'essayer de les corriger.
  Si vous ne savez pas comment résoudre le problème, demandez de l'aide.
- **Résolvez les conflits de fusion** avec la branche principale&nbsp;: c'est à vous de les corriger.
  Vous pouvez le faire en fusionnant la branche `mdn/main` dans votre branche.
  Pour plus d'informations, consultez la [documentation GitHub sur la mise à jour de votre branche](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/keeping-your-pull-request-in-sync-with-the-base-branch#about-keeping-your-pull-request-in-sync).
- **Soyez réactif·ive aux retours.**
  Cela signifie être prêt·e à modifier la requête selon les retours de relecture.
  Si une relecture a lieu et que les changements ne sont pas faits, la requête peut être fermée.
- **Soyez patient·e pendant la relecture.**
  L'organisation MDN reçoit un grand nombre de requêtes de tirage et l'équipe peut avoir besoin de temps pour examiner votre contribution.
- **Ne rouvrez pas de requêtes fermées.**
  Si besoin, créez une nouvelle requête qui pourra faire référence à l'ancienne.

## Processus de relecture des requêtes de tirage

Les relecteur·ice·s sont automatiquement assigné·e·s lors de l'ouverture d'une requête de tirage grâce au fichier `CODEOWNERS`, mais si vous souhaitez demander une relecture à une personne précise, vous pouvez [demander une relecture](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/requesting-a-pull-request-review) manuellement.
Nous utilisons aussi l'étiquetage automatique pour faciliter le tri des requêtes.
Les mainteneur·euse·s peuvent ajouter d'autres étiquettes comme `needs-info` ou `not-ready` selon le contexte.

Si vous souhaitez relire une requête mais que vous n'êtes pas listé·e comme relecteur·ice, vous pouvez vous ajouter.
Il est courtois de prévenir les relecteur·ice·s existant·e·s en commentant que vous allez commencer la relecture.

### Relecteur·ice·s et assigné·e·s

L'équipe MDN Web Docs utilise les relecteur·ice·s et assigné·e·s pour suivre l'avancement des requêtes de tirage.

- **Relecteur·ice·s**&nbsp;: personnes qui évaluent les changements et donnent un retour à l'auteur·ice.
- **Assigné·e·s**&nbsp;: personnes responsables de s'assurer que la requête n'est pas bloquée.
  Toutes les requêtes n'ont pas d'assigné·e, mais si c'est le cas, cette personne veille à ce que la requête progresse.
  Un·e assigné·e aide à conclure le travail, soit en fusionnant, soit en fermant, soit en débloquant la situation.

Un·e relecteur·ice ou assigné·e est responsable de la fusion des changements.

Avant de commencer une relecture, vérifiez la description de la requête pour vous assurer qu'aucune personne spécifique n'est désignée.
Assurez-vous que toutes les tâches d'intégration continue (CI) sont terminées avec succès et qu'il n'y a pas de conflits de fusion.

Si des tâches échouent ou qu'il y a des conflits, informez l'auteur·ice&nbsp;: c'est à elle·lui de les résoudre.
Vous pouvez l'assigner comme **assigné·e** pour indiquer qu'une action est attendue avant de commencer la relecture.
Laissez toujours la porte ouverte à l'auteur·ice pour demander de l'aide, en particulier pour les nouvelles personnes qui contribuent au projet.

### Relire une requête de tirage

Pour les changements proposés dans une requête de tirage, le contenu et la rédaction doivent respecter le [guide de style rédactionnel MDN](/fr/docs/MDN/Writing_guidelines/Writing_style_guide) et les exemples de code doivent suivre le [guide de style du code](/fr/docs/MDN/Writing_guidelines/Code_style_guide).

Lors de la relecture d'une requête de tirage, vous devez&nbsp;:

- **Ajouter un commentaire** à la requête pour signaler à l'auteur·ice que vous en prenez connaissance et que vous commencez la relecture.
  Cela évite que plusieurs personnes commencent la relecture en même temps inutilement.
- **Limiter la relecture** aux seuls changements de la requête.
  Ouvrez un ticket ou une nouvelle requête pour d'autres améliorations non couvertes par la requête en cours.
- **Demander de l'aide** et ajouter l'étiquette `review-help-needed` si vous avez besoin d'une assistance technique pour la relecture.
- **Fermer les requêtes contenant des changements non liés** si elles sont trop complexes ou comportent plusieurs modifications sans rapport.
  Dans ce cas, demandez à l'auteur·ice de soumettre ses changements en plusieurs requêtes distinctes.
- **Demander un équilibrage de charge** si vous êtes surchargé·e et n'avez pas le temps de relire.
  Mentionnez l'équipe `@core-yari-content` pour voir si quelqu'un peut prendre le relais.
- **Ne fusionnez pas tant que les dépendances** (requêtes «&nbsp;depends on&nbsp;») ne sont pas fusionnées.
- **Ne fusionnez pas de requêtes avec des tests échoués.**
  Il est important, par [éthique open source](/fr/docs/MDN/Community/Open_source_etiquette), de garder la branche `main` stable pour éviter de perturber les contributeur·ice·s, les mainteneur·euse·s et les processus automatisés.
  Une branche instable bloque toutes les autres requêtes et complique la relecture et la fusion des contributions.
  De plus, les contributeur·ice·s qui suivent les dépôts reçoivent beaucoup de notifications et le bruit causé par des tests échoués peut être frustrant.
  Si vous ne savez pas comment corriger les tests, [demandez de l'aide](/fr/docs/MDN/Community/Communication_channels) ou assignez la requête à quelqu'un d'autre.

Si une requête est correcte à l'exception de petites fautes ou détails mineurs, vous pouvez corriger directement le problème.
Ceci est possible si la requête [autorise les modifications](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/working-with-forks/allowing-changes-to-a-pull-request-branch-created-from-a-fork).

Il est recommandé d'utiliser les [commentaires avec suggestions](https://docs.github.com/fr/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/commenting-on-a-pull-request#adding-comments-to-a-pull-request) pour corriger les détails mineurs, car ils peuvent être appliqués en une seule fois.

Lorsque vous soumettez votre relecture, vous avez trois options&nbsp;: **approuver**, **commenter** ou **demander des modifications**.
Les sections suivantes expliquent quand utiliser chaque option.

### Demander des modifications

Utilisez l'option «&nbsp;demander des modifications&nbsp;» lorsque votre retour _doit_ être pris en compte par l'auteur·ice et relu à nouveau avant que la requête puisse être approuvée et fusionnée.

#### Commenter

Utilisez l'option «&nbsp;commenter&nbsp;» lorsque votre retour n'est pas critique et ne nécessite pas de nouvelle relecture.
En résumé, vous faites confiance à l'auteur·ice et aux autres relecteur·ice·s pour faire preuve de bon sens.

#### Approuver

Utilisez l'option «&nbsp;approuver&nbsp;» lorsque tout est correct et prêt à être fusionné selon vous.
Après avoir soumis votre relecture, vous pouvez fusionner la requête si aucun·e autre relecteur·ice ou commentaire n'est en attente.

#### Que faire si vous êtes bloqué·e ?

Si vous ne comprenez pas une modification de contenu ou si elle vous semble trop volumineuse ou complexe, ne paniquez pas&nbsp;!
Commencez par demander des précisions à l'auteur·ice de la requête de tirage.

Il est rare que vous ayez à relire un gros changement complexe sans avertissement.
Si cela arrive, la description de la requête doit pointer vers un ticket qui explique le contexte.

Si vous n'êtes toujours pas sûr·e ou si le contenu vous semble douteux, contactez l'équipe MDN Web Docs pour demander de l'aide.

### Délais de traitement pour les auteur·ice·s et relecteur·ice·s

Cette section précise les délais attendus pour répondre aux commentaires de relecture (pour l'auteur·ice) et pour relire les requêtes (pour le·la relecteur·ice).

- **Relecture&nbsp;:**
  Le·la relecteur·ice doit pouvoir relire les changements en 2 semaines maximum.
  Dans les 2 semaines suivant l'ouverture d'une requête, le·la relecteur·ice peut&nbsp;:
  - Laisser un commentaire sur la date de début de la relecture
  - Demander de l'aide technique ou des ressources
- **Traitement des retours&nbsp;:**
  L'auteur·ice doit pouvoir répondre ou corriger les commentaires en 4 semaines maximum.
  Si l'auteur·ice ne répond pas ou ne corrige pas dans ce délai, le·la relecteur·ice peut&nbsp;:
  - Apporter les corrections et fusionner la requête
  - Fermer la requête

### Relecteur·ice·s externes

Certaines requêtes sur le dépôt de contenu MDN concernent des travaux spécifiques de fournisseurs de navigateurs ou d'organisations avec des auteur·ice·s et relecteur·ice·s défini·e·s.
Dans ce cas, l'auteur·ice indique le nom d'utilisateur du·de la relecteur·ice à la fin de la description de la requête, par exemple&nbsp;:

```md
reviewer: @SphinxKnight
```

Si vous recevez une demande de relecture et qu'une autre personne a été désignée comme relecteur·ice, ne relisez pas les changements.
Une fois que la personne mentionnée a approuvé les modifications, elle demandera l'approbation requise par le fichier `CODEOWNERS`.

## Pour aller plus loin

Les relecteur·ice·s sont encouragé·e·s à lire les articles suivants pour s'aider dans les tâches courantes&nbsp;:

- [The Art of Closing <sup>(angl.)</sup>](https://blog.jessfraz.com/post/the-art-of-closing/) explique comment fermer une requête inachevée ou refusée
- [Kindness and Code Reviews: Improving the Way We Give Feedback <sup>(angl.)</sup>](https://product.voxmedia.com/2018/8/21/17549400/kindness-and-code-reviews-improving-the-way-we-give-feedback) donne des conseils pour formuler des retours
- [Code Review Guidelines for the Reviewer <sup>(angl.)</sup>](https://phauer.com/2018/code-review-guidelines/#code-reviews-guidelines-for-the-reviewer) fournit des exemples de bons et mauvais retours
- [How to do a code review <sup>(angl.)</sup>](https://google.github.io/eng-practices/review/reviewer/) sur google.github.io/eng-practices
