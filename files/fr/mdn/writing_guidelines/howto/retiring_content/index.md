---
title: Retirer une section de contenu
short-title: Retirer du contenu
slug: MDN/Writing_guidelines/Howto/Retiring_content
l10n:
  sourceCommit: ca0b474bb2e153ce72718cb304306e540065a888
---

Cet article décrit le processus de retrait de sections entières du contenu de MDN Web Docs, connu sous le nom de _retrait_. Le retrait est différent de la [suppression ou du déplacement de pages individuelles](/fr/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)&nbsp;; il s'applique lorsqu'une section entière n'est plus activement maintenue, pertinente ou alignée sur les objectifs de MDN et doit être retirée de manière planifiée et transparente. Le contenu retiré n'est pas supprimé de manière permanente — il est toujours archivé dans le [dépôt MDN Museum <sup>(angl.)</sup>](https://github.com/mdn/museum).

Le retrait est un évènement très rare, et le processus varie en fonction des circonstances. Ce guide fournit un aperçu de quand et comment retirer une section, ainsi que des étapes à suivre pour le faire de manière responsable. Pour une liste des sections déjà retirées, voir [Contenu retiré](/fr/docs/MDN/Writing_guidelines/Howto/Retiring_content/Retired_content).

Dans ce guide, une _section_ désigne une zone autonome de MDN Web Docs — généralement un dossier de premier niveau (par exemple, `/Web/SECTION_NAME`) ou un sous-arbre cohérent (par exemple, `/Learn_web_development/PATH/SECTION_NAME`), comme une référence technologique complète ou un parcours d'apprentissage complet. Ce processus ne s'applique pas à&nbsp;:

- Marquer une fonctionnalité individuelle de la plateforme web comme obsolète dans une zone autrement active, ce qui suit le [processus standard de dépréciation](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).
- Supprimer une seule page ou un guide, ce qui est couvert par le guide [Suppression de pages](/fr/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#deleting_pages).

Si vous n'êtes pas sûr qu'une suppression relève du retrait, soulevez la question dans une [discussion GitHub <sup>(angl.)</sup>](https://github.com/orgs/mdn/discussions) avant de commencer le processus.

## Quand envisager de retirer du contenu

Vous pouvez proposer de retirer une section du contenu de MDN Web Docs si l'une des conditions suivantes s'applique&nbsp;:

- La technologie est obsolète ou n'est plus pertinente pour la plateforme web.
- La section duplique des informations mieux maintenues ailleurs (comme un site de documentation officiel pour un framework).
- La section n'est pas alignée avec la [stratégie de contenu de MDN](/fr/docs/MDN/Writing_guidelines/What_we_write#topics_that_belong_on_mdn_web_docs).
- Le coût de maintenance dépasse la valeur pour les utilisateur·ice·s, comme l'indiquent les données d'utilisation et les retours des utilisateur·ice·s.

Le retrait doit toujours être un processus délibéré et visible. Les suppressions à grande échelle ne doivent jamais se produire sans discussion ou avis. La décision finale de retirer une section revient à l'équipe MDN.

> [!NOTE]
> Si vous souhaitez supprimer des pages individuelles plutôt qu'une section entière, consultez notre guide [Suppression de pages](/fr/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#deleting_pages). Pour des conseils sur l'étiquetage des fonctionnalités individuelles comme obsolètes, consultez [Comment étiqueter une technologie](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete).

## Le processus de retrait

Le retrait d'une section du contenu de MDN Web Docs implique deux phases&nbsp;: parvenir à un accord, puis supprimer le contenu.

### Phase 1 : Processus de décision

Le retrait doit être approuvé par l'équipe MDN et les partenaires. La discussion peut avoir lieu dans nos [canaux de communication](/fr/docs/MDN/Community/Communication_channels), avec une [discussion GitHub <sup>(angl.)</sup>](https://github.com/orgs/mdn/discussions), et/ou lors de nos appels éditoriaux (tous les quinze jours).

Si une section est sérieusement envisagée pour le retrait, une discussion GitHub doit être ouverte pour consigner la décision et le processus. La discussion doit être claire sur&nbsp;:

- Les raisons du retrait.
- L'impact du retrait.
- Les parties prenantes concernées sont informées et ont été consultées.
- Les approches alternatives ont été envisagées.

Dans certains cas, la décision peut également impliquer **la collecte de retours d'expérience des utilisateur·ice·s de MDN**. Cela peut inclure&nbsp;:

- La réalisation d'une enquête auprès des utilisateur·ice·s.
- La demande de retours avec GitHub ou d'autres [canaux de communication MDN](/fr/docs/MDN/Community/Communication_channels).

L'objectif est de confirmer que la section ne répond plus aux besoins des utilisateur·ice·s et qu'il n'existe pas de voie claire pour son maintien durable.

Si un accord pour retirer une section est atteint, un calendrier doit être établi — généralement entre **3 et 6 mois**. Les raisons et le calendrier doivent être enregistrés dans la discussion GitHub. Il doit être clair dans la discussion que le contenu est archivé, et non supprimé définitivement.

Si une décision est prise de ne pas retirer une section, cela doit être communiqué avec les raisons par le biais du canal de communication original.

### Phase 2 : Suppression du contenu

Une fois qu'un accord a été atteint, suivez ces étapes pour supprimer le contenu.

#### Ajouter une bannière de retrait

Ajoutez une [bannière de note](/fr/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) en haut de _chaque article_ de la section en cours de retrait. La bannière doit indiquer clairement&nbsp;:

- Que la section est en cours de retrait du site.
- La période et la date prévues pour le retrait.
- Que le contenu est en cours d'archivage.
- Un lien vers la discussion GitHub pour plus de détails.

Utilisez le modèle suivant&nbsp;:

```md
> [!NOTE]
> Cette section de MDN n'est plus maintenue et sera supprimée du site dans 6 mois (d'ici MOIS ANNÉE). Le contenu sera archivé dans le [MDN Museum <sup>(angl.)</sup>](https://github.com/mdn/museum). Voir [cette discussion](LIEN) pour plus d'informations.
```

Cette notice garantit la transparence et donne aux utilisateur·ice·s le temps de s'adapter.

#### Archiver et supprimer le contenu

Une fois la période de retrait convenue écoulée, le contenu peut être supprimé de MDN Web Docs comme suit&nbsp;:

1. **Archivez le contenu.** Copiez la section dans le [dépôt MDN Museum <sup>(angl.)</sup>](https://github.com/mdn/museum) à des fins d'archivage. Conservez le contenu dans un répertoire correspondant au chemin URL d'origine. Par exemple, le contenu à `https://developer.mozilla.org/en-US/docs/Games` va dans un répertoire `/docs/games/` dans le dépôt du musée. Cela préserve l'historique du contenu de MDN tout en retirant le matériel obsolète du site actif.

2. **Supprimez le contenu et ajoutez des redirections.** Utilisez la [commande `delete`](/fr/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#supprimer_des_pages) pour supprimer les pages et configurer des redirections. Les redirections doivent pointer les utilisateur·ice·s vers le contenu alternatif le plus pertinent si disponible. S'il n'y a pas d'alternative appropriée, redirigez vers l'entrée correspondante sur la page de [contenu retiré](/fr/docs/MDN/Writing_guidelines/Howto/Retiring_content/Retired_content) (en utilisant l'ancre spécifique à la section, par exemple `#section_name`) afin que les lecteur·ice·s puissent trouver le contexte sur ce qui a été supprimé et suivre le lien vers la version archivée. Évitez de rediriger vers la page d'accueil de MDN Web Docs, car cela laisse les lecteur·ice·s sans explication.

3. **Nettoyez les références.** Supprimez ou mettez à jour toutes les références à la section retirée sur MDN, y compris les définitions de la barre latérale, les pages d'accueil et les liens croisés depuis d'autres articles. L'ajout de redirections (voir l'étape 2) empêche les liens brisés, mais il est préférable de mettre à jour directement le contenu référent.

4. **Signalez les mises à jour de l'interface utilisateur.** Certaines sections de l'interface utilisateur du site — comme les menus de navigation et les sections de la page d'accueil — ne font pas partie du dépôt `content` et sont gérées par l'équipe de la plateforme. Créez un problème dans le dépôt [mdn/fred <sup>(angl.)</sup>](https://github.com/mdn/fred/) pour vérifier si des modifications de l'interface utilisateur sont nécessaires pour supprimer les références au contenu retiré. Si c'est le cas, coordonnez la suppression du contenu et la mise à jour de l'interface utilisateur afin qu'elles soient déployées en même temps.

> [!WARNING]
> Ne supprimez pas définitivement le contenu sans l'avoir archivé au préalable.

## Voir aussi

- [Créer, modifier, déplacer ou supprimer des pages](/fr/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting)
- [Ce que nous écrivons](/fr/docs/MDN/Writing_guidelines/What_we_write)
- [Expérimental, obsolète et déprécié](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete)
- [Bannières et avis](/fr/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices)
