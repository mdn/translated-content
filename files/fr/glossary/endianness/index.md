---
title: Endianness
slug: Glossary/Endianness
tags:
  - Codage
  - Encodage
  - Glossaire
translation_of: Glossary/Endianness
original_slug: Glossaire/Endianness
---
<p>"Endian" et "endianness" (ou "ordre des octets") désigne la manière dont les ordinateurs organisent les octets pour constituer des nombres.</p>

<p>Chaque emplacement de stockage en mémoire dispose d'un index ou adresse. Un octet pouvant stocker une valeur de 8 bits (i.e. compris entre <code>0x00</code> et <code>0xff</code>), il faut en réserver davantage pour enregistrer des nombres plus grands. L'<em>ordre </em>le plus utilisé pour composer des nombres sur plusieurs octets est de loin le <strong>little-endian </strong>qui est utilisé sur tous les processeurs Intel.<em> </em>Little-endian signifie que le stockage des octets se fait du moins important au plus important (où l'octet le moins important prend la première adresse ou la plus basse), ce qui est comparable à la façon habituelle en Europe d'écrire les dates (e.g., 31 décembre 2050).</p>

<p>Naturellement, <strong>big-endian </strong>est l'ordre opposé, similaire à une date au format ISO (2050-12-31). Big-endian est aussi souvent appelé "ordre d'octet du réseau" car les standards internet ont généralement besoin des données dans cet ordre, en commençant au niveau socket UNIX standard et en continuant avec les structures de données Web binaires standardisées. De plus, les anciens ordinateurs Mac utilisaient des microprocesseurs 680x0 ou PowerPC qui étaient big-endian.</p>

<p>Exemples avec le nombre <code>0x12345678</code> (i.e. 305 419 896 en décimal) :</p>

<ul>
 <li><em>little-endian :  </em><code>0x78 0x56 0x34 0x12</code></li>
 <li><em>big-endian : </em>0x12 0x34 0x56 0x78</li>
 <li><em>mixed-endian</em> (dans le passé et très rare) : 0x34 0x12 0x78 0x56</li>
</ul>

<h2 id="Voir_aussi">Voir aussi</h2>

<ul>
 <li>{{jsxref("ArrayBuffer")}}</li>
 <li>{{jsxref("DataView")}}</li>
 <li><a href="/fr/docs/Web/JavaScript/Tableaux_typés">Tableaux typés</a></li>
 <li>{{Interwiki("wikipedia", "Endianness")}} sur Wikipédia</li>
</ul>
