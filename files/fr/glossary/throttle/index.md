---
title: Bridage (Throttle)
slug: Glossary/Throttle
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Le **bridage** désignait à l'origine le ralentissement du débit d'un fluide au moyen d'une obstruction. En programmation, il désigne la limitation d'un processus de sorte qu'une opération ne puisse être effectuée qu'à un rythme déterminé.

Le bridage est très proche du {{Glossary("debounce", "anti-rebond")}}. La différence essentielle est que, lorsque des appels se produisent en continu, le bridage garantit que l'opération est exécutée à une fréquence maximale donnée, tandis que l'anti-rebond attend que les appels cessent pendant une durée donnée avant d'exécuter l'opération.

Un cas d'utilisation typique du bridage intervient lors de la synchronisation avec un état qui se met continuellement à jour. Considérez une fonction `onScrolled`, qui écoute l'événement [`scroll`](/fr/docs/Web/API/Document/scroll_event). L'événement `scroll` peut se déclencher aussi souvent qu'à chaque pixel défilé, si bien que la fonction est appelée à des intervalles très courts. Si `onScrolled` est coûteuse en calcul, des appels précoces peuvent empêcher des appels ultérieurs d'être exécutés en temps voulu, ou bloquer d'autres opérations, entraînant un phénomène perceptible de {{Glossary("jank", "saccade")}}. Dans ce cas, on peut brider `onScrolled` pour qu'elle ne soit appelée au maximum qu'une fois toutes les 10 millisecondes&nbsp;:

1. Le premier appel à `onScrolled` correspond au _bord d'attaque_ (<i lang="en">leading edge</i> en anglais).
2. Pour chaque appel suivant à `onScrolled`, s'il se produit dans les 10 millisecondes suivant le premier appel, il appartient au même «&nbsp;lot&nbsp;» que le premier appel.
3. Après écoulement de 10 millisecondes depuis le premier appel à `onScrolled`, on atteint le _bord de sortie_ (<i lang="en">trailing edge</i> en anglais).

En général, `onScrolled` s'exécute une fois uniquement au bord d'attaque, bien que parfois elle puisse s'exécuter au bord de sortie, ou aux deux bords, selon les besoins. Si elle s'exécute aux deux bords, l'implémentation du bridage veille généralement à ce que l'appel du bord d'attaque suivant ne soit pas déclenché avant au moins 10 millisecondes après le précédent bord de sortie.

Grâce au bridage, l'effet de `onScrolled` reste mis à jour et appliqué en continu — par exemple, si elle déplace un autre élément du DOM en fonction de la position de défilement du document, cet élément continue d'être déplacé pendant le défilement — mais la fonction n'est pas exécutée plus souvent que nécessaire.

{{Glossary("Network throttling", "Bridage du réseau")}} désigne la simulation d'une connexion réseau plus lente en autorisant seulement un certain volume de données à être transféré à la fois. _Brider un minuteur_ signifie réduire la précision du minuteur de sorte que, lorsqu'on lit continuellement le minuteur (par exemple {{JSxRef("Date.now()")}}), la valeur du minuteur ne change qu'à une fréquence maximale donnée. Les deux sont des applications spécifiques du concept général de bridage.

## Voir aussi

- Termes du glossaire&nbsp;:
  - {{Glossary("Debounce", "Anti-rebond")}}
  - {{Glossary("Rate limit", "Limitation de débit")}}
- [Anti-rebond et bridage expliqués par des exemples <sup>(angl.)</sup>](https://css-tricks.com/debouncing-throttling-explained-examples/) sur CSS-Tricks (6 avril 2016)
