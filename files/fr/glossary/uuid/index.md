---
title: UUID
slug: Glossary/UUID
l10n:
  sourceCommit: 87ca9db1ebe56eb20c1f20b91fca43955d8f0e26
---

Un **identifiant universel unique** (dont l'acronyme anglais est **UUID** pour <i lang="en">Universally Unique Identifier</i>) est un libellé utilisé pour identifier de façon unique une ressource parmi toutes les autres ressources du même type.

Les systèmes informatiques génèrent des UUID localement en utilisant de très grands nombres aléatoires.
En théorie, ces identifiants n'ont pas à être globalement uniques, même si la probabilité d'obtenir des doublons est très faible.
Si un ou des systèmes ont besoin d'identifiants absolument uniques, ceux-ci doivent alors être émis par une autorité centrale.

Les UUID sont des valeurs sur 128 bits qui sont représentées généralement comme une chaîne de caractères de 36 caractères au format `123e4567-e89b-12d3-a456-426614174000` (soit 5 chaînes de chiffres hexadécimaux, séparées par des tirets).
Il existe plusieurs versions et formats qui dépendent du mode de calcul, certains UUID incluent par exemple une information temporelle.

La définition formelle se trouve dans&nbsp;: [RFC4122&nbsp;: Espace de noms URN pour l'identifiant universel unique (UUID) <sup>(angl.)</sup>](https://www.rfc-editor.org/info/rfc4122/).

## Voir aussi

- [UUID](https://fr.wikipedia.org/wiki/Universally_unique_identifier) sur Wikipédia
- La méthode API {{DOMxRef("Crypto.randomUUID()")}}
