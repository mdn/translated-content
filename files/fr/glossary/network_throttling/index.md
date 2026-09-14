---
title: Limitation de la bande passante
slug: Glossary/Network_throttling
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**La limitation de la bande passante** est un ralentissement intentionnel de la vitesse d'Internet. Lorsqu'on souhaite améliorer les performances web, on utilise cette technique afin d'émuler les conditions de faible bande passante probablement rencontrées par une large part du public cible d'un site.

Il ne faut pas négliger les conditions réseau rencontrées par les utilisateur·ice·s sur mobile. Les débits dont disposent les développeur·euse·s qui créent des applications web depuis un bureau d'entreprise sur un ordinateur puissant sont généralement très élevés. C'est sans doute votre cas. En revanche, un utilisateur mobile accédant à cette même application, éventuellement en déplacement ou dans une zone peu couverte, disposera souvent d'un débit très faible, voire ne pourra pas se connecter du tout. La limitation du réseau permet au développeur d'émuler l'expérience d'un utilisateur. La plupart des outils de développement des navigateurs, comme l'inspecteur, offrent une fonction d'émulation de diverses conditions réseau. En reproduisant l'expérience de vos utilisateur·ice·s via la limitation du réseau, vous pouvez plus facilement identifier et corriger les problèmes de temps de chargement.

Les outils de développement proposent généralement des options de limitation du réseau pour tester une application dans des conditions lentes. Par exemple, les outils de développement de Firefox disposent d'un menu déroulant, dans le [Network Monitor <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html) et dans le [Responsive Design Mode <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/responsive_design_mode/index.html), contenant des options de vitesse (Wi-Fi, bon 3G, 2G).

## Voir aussi

- Terme associé du glossaire&nbsp;:
  - {{Glossary("Synthetic monitoring", "Surveillance synthétique")}}
