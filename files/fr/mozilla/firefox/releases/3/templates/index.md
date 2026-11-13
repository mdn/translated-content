---
title: Modèles dans Firefox 3
slug: Mozilla/Firefox/Releases/3/Templates
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Les modèles ont été considérablement améliorés dans Firefox 3. L'amélioration clé permet l'utilisation de [processeurs de requêtes personnalisés <sup>(angl.)</sup>](https://web.archive.org/web/20180309091530/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/How_to_implement_a_custom_XUL_query_processor_component) pour gérer d'autres types de sources de données en plus de RDF. Une nouvelle syntaxe de requête rend cela possible. La prise en charge intégrée des sources de données SQL ([`mozStorage` <sup>(angl.)</sup>](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Storage)) et XML est également fournie. Une description complète des nouvelles fonctionnalités disponibles pour les modèles [est disponible <sup>(angl.)</sup>](https://wiki.mozilla.org/XUL:Template_Features_in_1.9). ([bogue Firefox 285631 <sup>(angl.)</sup>](https://bugzil.la/285631))

## Autres améliorations des modèles

- Des conditions relationnelles ont été ajoutées pour permettre un contrôle plus précis sur les résultats qui correspondent à une règle. Cela permet, par exemple, de faire correspondre des résultats qui commencent ou se terminent par certaines chaînes, ou qui sont avant ou après d'autres valeurs.
- Un indicateur, `dont-recurse`, a été ajouté pour empêcher la récursion de se produire, de sorte qu'un seul niveau de résultats soit généré.
- Des API ont été ajoutées au générateur de modèles pour récupérer un objet résultat représentant un élément de sortie.
- Le service de tri XUL est plus robuste et [trie <sup>(angl.)</sup>](https://web.archive.org/web/20201028214819/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/Template_Guide/Sorting_Results) mieux les arbres de contenu et non de contenu. Il permet également de trier le contenu non généré par un modèle. ([bogue Firefox 335122 <sup>(angl.)</sup>](https://bugzil.la/335122))

## Voir aussi

- [Firefox 3 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/3)
