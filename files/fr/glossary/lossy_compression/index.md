---
title: Compression avec perte
slug: Glossary/Lossy_compression
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

La **compression avec perte**, ou compression irréversible, est une méthode de compression de données qui utilise des approximations inexactes et la suppression partielle de données pour représenter le contenu. En termes simples&nbsp;: la compression avec perte entraîne la perte de données du fichier initial, ce qui peut entraîner une dégradation de la qualité. Le processus de cette compression est irréversible&nbsp;: une fois la compression avec perte effectuée, le contenu ne peut pas être restauré à son état d'origine. Par conséquent, un contenu ayant subi une compression avec perte ne doit généralement pas être modifié ultérieurement.

La compression avec perte est largement utilisée dans les formats d'image comme {{Glossary("JPEG")}}, {{Glossary("WebP")}}, ainsi que dans les formats audio et vidéo comme [MP3, MP4, H.264 et autres](/fr/docs/Web/HTTP/Guides/MIME_types/Common_types).
Des méthodes de compression comme {{Glossary("WebP")}} sont capables de [compression avec ou sans perte](https://developers.google.com/speed/webp/docs/compression?hl=fr) selon le niveau de compression ou les options choisies lors de l'encodage.

![Image de compression avec perte](2019-11-18.png)

Bien qu'il n'y ait pas de différence évidente de qualité entre les deux images ci-dessus, la taille de la seconde image a été significativement réduite grâce à la compression avec perte.

## Voir aussi

- Terme associé du glossaire&nbsp;:
  - {{Glossary("Lossless compression", "Compression sans perte")}}
