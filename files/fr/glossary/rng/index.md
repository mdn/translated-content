---
title: Générateur de nombres pseudo-aléatoires (RNG)
slug: Glossary/RNG
l10n:
  sourceCommit: c8522f47d8123fe529f39851b13b9fc01345ffbf
---

Un **PRNG** (générateur de nombres pseudo-aléatoires) est un algorithme qui produit des nombres selon un schéma complexe, apparemment imprévisible. Les nombres vraiment aléatoires (par exemple issus d'une source radioactive) sont totalement imprévisibles, alors que tous les algorithmes sont prévisibles, et un PRNG retourne les mêmes nombres lorsqu'on lui fournit les mêmes paramètres de départ ou _graine_.

Les PRNG peuvent être utilisés pour de nombreuses applications, comme les jeux.

Un PRNG sécurisé pour la cryptographie est un PRNG doté de certaines propriétés supplémentaires le rendant adapté à un usage cryptographique. Ces propriétés incluent&nbsp;:

- il doit être impossible, en pratique, pour un·e attaquant·e (sans connaissance de la graine) de prédire sa sortie,
- si un·e attaquant·e parvient à déterminer son état courant, cela ne doit pas lui permettre de retrouver les nombres précédemment générés.

La plupart des PRNG ne sont pas sécurisés pour la cryptographie.

## Voir aussi

- La méthode JavaScript {{JSxRef("Math.random()")}} et la fonction CSS {{CSSxRef("random()")}} sont des fonctions PRNG intégrées. Notez qu'elles ne sont pas sécurisées pour la cryptographie.
- {{DOMxRef("Crypto.getRandomValues()")}}&nbsp;: cette méthode est conçue pour fournir des nombres sécurisés pour la cryptographie.
- [Générateur de nombres pseudo-aléatoires](https://fr.wikipedia.org/wiki/G%C3%A9n%C3%A9rateur_de_nombres_pseudo-al%C3%A9atoires) sur Wikipédia
