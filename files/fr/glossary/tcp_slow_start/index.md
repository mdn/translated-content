---
title: Démarrage lent TCP
slug: Glossary/TCP_slow_start
l10n:
  sourceCommit: aa751052a9d07bdf29274fbb216f2d6d13993c11
---

Le démarrage lent {{Glossary('TCP', 'TCP')}} (<i lang="en">TCP slow start</i> en anglais) est un algorithme qui permet de découvrir la bande passante disponible pour le transfert de paquets et d'ajuster la vitesse de transmission selon les capacités du réseau.
Ce mécanisme augmente rapidement le volume d'informations envoyées à partir d'un niveau très faible jusqu'à un seuil. Si une congestion est détectée, le seuil est réinitialisé à un niveau inférieur et le processus recommence.
Cela évite la congestion lorsque les capacités du réseau sont inconnues ou dépassées — au début d'une connexion, après une période d'inactivité ou après la détection d'une congestion — sans provoquer de congestion supplémentaire.

La congestion réseau survient lorsque plus de données sont envoyées que le réseau ne peut en transférer entre les nœuds à un instant donné.
Quand le réseau est congestionné, les machines du réseau subissent une dégradation de la qualité de service, avec des transferts de données ralentis et des paquets perdus.

L'algorithme de démarrage lent constitue une partie essentielle du contrôle de congestion TCP, car il permet aux nouvelles connexions d'augmenter progressivement le débit sans saturer les autres nœuds.

## Voir aussi

- [Remplir la page&nbsp;: comment fonctionnent les navigateurs](/fr/docs/Web/Performance/Guides/How_browsers_work)
- [Aperçu HTTP](/fr/docs/Web/HTTP/Guides/Overview)
