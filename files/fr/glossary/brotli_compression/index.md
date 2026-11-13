---
title: Compression Brotli
slug: Glossary/Brotli_compression
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Brotli** est un algorithme de compression sans perte à usage général.
Il compresse les données en utilisant une combinaison d'une variante moderne de l'algorithme [Lempel-Ziv](https://fr.wikipedia.org/wiki/LZ77_et_LZ78#LZ77) LZ77, du [codage de Huffman <sup>(angl.)</sup>](https://rosettacode.org/wiki/Huffman_coding) et d'une modélisation de contexte d'ordre deux, offrant un taux de compression comparable aux meilleures méthodes de compression générales actuellement disponibles.

Brotli offre de meilleurs taux de compression que {{Glossary("GZip_compression", "gzip")}}, avec des vitesses comparables à [deflate](https://fr.wikipedia.org/wiki/Deflate).
Cependant, la compression Brotli est plus lente que la compression Gzip, donc Gzip peut être une meilleure option pour la compression de contenu {{Glossary("Cache", "non-cacheable")}}.

Brotli est compatible avec la plupart des navigateurs modernes, mais il peut être utile de prévoir une solution de repli.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Lossless compression", "Compression sans perte")}}
  - {{Glossary("Lossy compression", "Compression avec perte")}}
  - {{Glossary("Gzip compression", "Compression Gzip")}}
  - {{Glossary("Zstandard compression", "Compression Zstandard")}}
- [brotli.org <sup>(angl.)</sup>](https://brotli.org/)
- [Dépôt Brotli sur GitHub <sup>(angl.)</sup>](https://github.com/google/brotli)
- [RFC 7932&nbsp;: Format de données compressées Brotli <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc7932)
- [Brotli](https://fr.wikipedia.org/wiki/Brotli) sur Wikipédia
- [Brotli sur Caniuse <sup>(angl.)</sup>](https://caniuse.com/#feat=brotli)
