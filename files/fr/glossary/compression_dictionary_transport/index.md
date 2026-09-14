---
title: Compression par dictionnaire pour le transport
slug: Glossary/Compression_dictionary_transport
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Le **compression par dictionnaire pour le transport** (<i lang="en">Compression Dictionary Transport</i> en anglais) est une méthode qui consiste à utiliser un dictionnaire de compression partagé, plutôt que le dictionnaire statique standard de la {{Glossary("Brotli compression", "compression Brotli")}} ou de la {{Glossary("Zstandard compression", "compression Zstandard")}}, afin de réduire considérablement la taille des réponses HTTP à transporter.

Par exemple, lors du téléchargement de `app.v2.js`, si le client possède déjà `app.v1.js`, il peut référencer le texte de ce fichier en l'utilisant comme dictionnaire et ainsi ne télécharger que le delta et une petite quantité de références au fichier `v1`.

Voir le [guide Compression Dictionary Transport](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport) pour plus d'informations.

## Voir aussi

- [Guide de compression par dictionnaire pour le transport](/fr/docs/Web/HTTP/Guides/Compression_dictionary_transport)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Brotli compression", "compression Brotli")}}
  - {{Glossary("Zstandard compression", "compression Zstandard")}}
- [`<link rel="compression-dictionary">`](/fr/docs/Web/HTML/Reference/Attributes/rel/compression-dictionary)
- {{HTTPHeader("Accept-encoding")}}
- {{HTTPHeader("Content-encoding")}}
- {{HTTPHeader("Available-Dictionary")}}
- {{HTTPHeader("Dictionary-ID")}}
- {{HTTPHeader("Use-As-Dictionary")}}
- [Brouillon de spécification <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/draft-ietf-httpbis-compression-dictionary/)
