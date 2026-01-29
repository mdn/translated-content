---
title: Zstandard compression
slug: Glossary/Zstandard_compression
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

**Zstandard** est un algorithme de compression sans perte à usage général.

Zstandard, ou `zstd` en version courte, est un algorithme de compression sans perte rapide, destiné aux scénarios de compression en temps réel avec des performances de niveau zlib et de meilleurs taux de compression. Il repose sur une étape d'entropie très rapide, fournie par la [bibliothèque Huff0 et FSE <sup>(angl.)</sup>](https://github.com/Cyan4973/FiniteStateEntropy). Il offre souvent de meilleurs taux de compression que {{Glossary("Brotli_compression", "brotli")}} à coût CPU équivalent, ou un meilleur coût CPU à taux de compression équivalent.

Pour la prise en charge par les navigateurs, voir [Compatibilité des navigateurs pour Content-Encoding](/fr/docs/Web/HTTP/Reference/Headers/Content-Encoding#compatibilité_des_navigateurs).

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Lossless compression", "Compression sans perte")}}
  - {{Glossary("Lossy compression", "Compression avec perte")}}
  - {{Glossary("Brotli compression", "Compression Brotli")}}
  - {{Glossary("Gzip compression", "Compression Gzip")}}
- [RFC Zstandard <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc8878)
- [Page d'accueil Zstandard <sup>(angl.)</sup>](https://facebook.github.io/zstd/)
- [Dépôt GitHub Zstandard <sup>(angl.)</sup>](https://github.com/facebook/zstd)
- [Zstandard sur Wikipédia](https://fr.wikipedia.org/wiki/Zstandard)
- [Zstandard sur Caniuse <sup>(angl.)</sup>](https://caniuse.com/#feat=zstandard)
