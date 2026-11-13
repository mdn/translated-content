---
title: BiDi
slug: Glossary/BiDi
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**BiDi** (BiDirectional) décrit un document qui contient à la fois du texte de droite à gauche (<abbr title="Right-to-Left" lang="en">RTL</abbr>) et de gauche à droite (<abbr title="Left-to-Right" lang="en">LTR</abbr>).

Les interfaces utilisateurs doivent afficher correctement le contenu BiDi, mais beaucoup échouent. Un exemple est la traduction hébraïque du prénom Sarah&nbsp;: שרה, écrit (de droite à gauche) sin (ש), resh (ר), he (ה). De nombreux programmes afficheraient les lettres dans l'ordre opposé.

Il est possible d'inverser l'ordre d'affichage de gauche à droite en droite à gauche, mais cela sacrifie la capacité à afficher correctement les écritures BiDi&nbsp;: au moins une est toujours affichée de façon incorrecte. Avec la prise en charge des écritures bidirectionnelles, il est possible de mélanger des caractères de différents systèmes d'écriture sur la même page, quelle que soit la direction d'écriture.

La norme Unicode fournit les bases pour une prise en charge complète de BiDi, avec des règles détaillées sur la façon dont les mélanges d'écritures de gauche à droite et de droite à gauche doivent être encodés et affichés.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Unicode")}}
- [Texte bidirectionnel](https://fr.wikipedia.org/wiki/Texte_bidirectionnel) sur Wikipédia
- [UAX#9&nbsp;: Algorithme bidirectionnel Unicode <sup>(angl.)</sup>](https://www.unicode.org/reports/tr9)
