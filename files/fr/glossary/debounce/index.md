---
title: Anti-rebond (debounce)
slug: Glossary/Debounce
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

L'**anti-rebond** (<i lang="en">debounce</i> en anglais), dans le contexte de la programmation, signifie ignorer les opérations qui se produisent trop rapprochées pendant un intervalle spécifique, et les regrouper en une seule invocation.

L'anti-rebond est très similaire à {{Glossary("throttle", "l'étranglement (<i lang=\"en\">throttling</i>)")}}. La différence clé est que l'étranglement impose des limites sur les opérations continues, tandis que l'anti-rebond attend que les invocations s'arrêtent pendant un certain temps pour regrouper de nombreuses invocations bruyantes en une seule invocation.

Un cas d'utilisation typique de l'anti-rebond est lors de la réponse à une saisie utilisateur. Lorsque l'utilisateur·ice saisit du texte, aucune autre action ne doit être effectuée pour éviter que l'interface ne devienne lente. Lorsque l'utilisateur·ice fait une pause dans la saisie, nous pouvons commencer à traiter l'entrée, comme filtrer les résultats, donner des suggestions, etc. Si la fonction `search` est soumise à un anti-rebond de 10 millisecondes, cela signifie&nbsp;:

1. Le premier appel à `search` est appelé _bord d'attaque_.
2. Pour chaque appel suivant à `search`, s'il a lieu dans les 10 millisecondes suivant l'appel précédent, il fait partie du même «&nbsp;lot&nbsp;» que l'appel précédent.
3. Après que 10 millisecondes se sont écoulées depuis le dernier appel à `search`, si aucun autre appel n'a eu lieu, nous avons atteint le _bord de fuite_.

Habituellement, `search` est exécuté une fois uniquement sur le _bord de fuite_, bien qu'il puisse parfois être exécuté sur le _bord d'attaque_, ou même sur les deux, selon le cas d'utilisation spécifique. S'il est exécuté sur les deux, l'implémentation de l'anti-rebond s'assure généralement aussi que la prochaine invocation du _bord d'attaque_ ne se déclenche pas au moins 10 millisecondes après le _bord de fuite_ précédent.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Throttle", "Étranglement")}}
  - {{Glossary("Rate limit", "Limite de fréquence")}}
- [Debouncing and Throttling Explained Through Examples <sup>(angl.)</sup>](https://css-tricks.com/debouncing-throttling-explained-examples/) sur CSS-Tricks (6 avril 2016)
