---
title: Indice de vitesse
slug: Glossary/Speed_index
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

L'**indice de vitesse**, ou <i lang="en">speed index (SI)</i> en anglais, est un indicateur de performances de chargement de page qui vous montre à quelle vitesse le contenu d'une page est visiblement rempli. C'est le temps moyen auquel les parties visibles de la page sont affichées. Exprimé en millisecondes et en fonction de la taille de la fenêtre d'affichage, plus le score est bas, mieux c'est.

L'indice de vitesse a été introduit pour pallier les limites d'autres jalons et métriques et fournir une mesure de l'expérience réelle des utilisateur·ice·s. L'indice de vitesse a été implémenté dans plusieurs audits courants, notamment [WebPageTest <sup>(angl.)</sup>](https://github.com/catchpoint/WebPageTest.docs/blob/main/src/metrics/SpeedIndex.md) et [Lighthouse <sup>(angl.)</sup>](https://github.com/paulirish/speedline).

L'indice de vitesse est calculé selon le pourcentage de la page visuellement complet à chaque intervalle de 100 ms jusqu'à ce que la page soit entièrement affichée. Le score global est la somme, dix fois par seconde, du pourcentage de l'écran qui n'est pas encore visuellement complet.

_Schéma montrant comment le contenu au-dessus de la ligne de flottaison peut se charger avant l'évènement de chargement de la page et est mesuré par l'indice de vitesse_&nbsp;:
![Calcul de l'indice de vitesse](speedindex.png)

## Voir aussi

- [Apprendre&nbsp;: Performances web](/fr/docs/Learn_web_development/Extensions/Performance)
