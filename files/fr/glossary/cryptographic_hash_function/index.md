---
title: Fonction de hachage cryptographique
slug: Glossary/Cryptographic_hash_function
tags:
  - Cryptographie
  - Glossaire
  - Sécurité
translation_of: Glossary/Cryptographic_hash_function
original_slug: Glossaire/Fonction_de_hachage_cryptographique
---
<p>Une fonction de hachage cryptographique est une primitive {{glossary("cryptographie", "cryptographique")}} qui transforme un message de taille arbitraire en un message de taille fixe, appelé un {{glossary("digest","condensé")}}. Les fonctions de hachage cryptographiques sont employées pour l'authentification, les {{Glossary("Digital signature", "signatures numériques")}} et les {{Glossary("HMAC", "codes d'authentification de messages")}}.</p>

<p>Pour être utilisable en cryptographie, une fonction de hachage doit disposer de ces qualités :</p>

<ul>
 <li>rapide à calculer (parce qu'elles sont fréquemment sollicitées)</li>
 <li>non réversible (chaque condensé peut provenir d'un très grand nombre de messages, et seule la force brute peut générer un message qui conduit à un condensé donné)</li>
 <li>résistant à la falsification (la moindre modification du message aboutit à un condensé différent)</li>
 <li>résistant aux collisions (il devrait être impossible de trouver deux messages différents qui produisent le même condensé)</li>
</ul>

<p>Les fonctions de hachage cryptographiques comme MD5 et SHA-1 sont considérées cassées car des attaques permettant de réduire significativement leur résistance aux collisions ont été trouvées.</p>

<h2 id="Pour_approfondir">Pour approfondir</h2>

<ul>
 <li>{{interwiki("wikipedia", "Fonction de hachage cryptographique", "Fonction de hachage cryptographique")}} sur Wikipédia</li>
</ul>
