---
title: Endianness
slug: Glossary/Endianness
---

"Endian" et "endianness" (ou "ordre des octets") désigne la manière dont les ordinateurs organisent les octets pour constituer des nombres.

Chaque emplacement de stockage en mémoire dispose d'un index ou adresse. Un octet pouvant stocker une valeur de 8 bits (i.e. compris entre `0x00` et `0xff`), il faut en réserver davantage pour enregistrer des nombres plus grands. L'_ordre_ le plus utilisé pour composer des nombres sur plusieurs octets est de loin le **little-endian** qui est utilisé sur tous les processeurs Intel. Little-endian signifie que le stockage des octets se fait du moins important au plus important (où l'octet le moins important prend la première adresse ou la plus basse), ce qui est comparable à la façon habituelle en Europe d'écrire les dates (e.g., 31 décembre 2050).

Naturellement, **big-endian** est l'ordre opposé, similaire à une date au format ISO (2050-12-31). Big-endian est aussi souvent appelé "ordre d'octet du réseau" car les standards internet ont généralement besoin des données dans cet ordre, en commençant au niveau socket UNIX standard et en continuant avec les structures de données Web binaires standardisées. De plus, les anciens ordinateurs Mac utilisaient des microprocesseurs 680x0 ou PowerPC qui étaient big-endian.

Exemples avec le nombre `0x12345678` (i.e. 305 419 896 en décimal) :

- _little-endian :_ `0x78 0x56 0x34 0x12`
- _big-endian :_ 0x12 0x34 0x56 0x78
- _mixed-endian_ (dans le passé et très rare) : 0x34 0x12 0x78 0x56

## Voir aussi

- {{jsxref("ArrayBuffer")}}
- {{jsxref("DataView")}}
- [Tableaux typés](/fr/docs/Web/JavaScript/Tableaux_typés)
- [Boutisme](https://fr.wikipedia.org/wiki/Boutisme) sur Wikipédia
