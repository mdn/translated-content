---
title: Signature numérique
slug: Glossary/Digital_signature
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Une **signature numérique** est un objet qui peut être utilisé pour {{Glossary("authentication", "authentifier")}} l'auteur·ice d'un document ou d'un message.

Les signatures numériques sont généralement basées sur la {{Glossary("public-key cryptography", "cryptographie à clé publique")}}, dans laquelle une clé est créée comme une paire de clés, avec la propriété que, si une entrée est chiffrée avec une clé, elle ne peut être déchiffrée qu'avec l'autre clé, et inversement.

Le créateur ou la créatrice de la paire de clés rend l'une des clés publique et garde l'autre privée. Pour signer un document, le·la propriétaire de la paire de clés crée un {{Glossary("hash function", "hachage")}} du document et le chiffre avec la clé privée.

Le document et la signature sont envoyés au·à la vérificateur·ice, qui effectue le hachage du document, récupère la clé publique et déchiffre la signature&nbsp;: si cela correspond au hachage, alors la signature est vérifiée, et le·la vérificateur·ice peut être certain·e qu'elle a été créée par une entité ayant accès à la clé privée.

La sécurité d'un système de signature numérique dépend (entre autres) de&nbsp;:

- Le·la propriétaire de la clé privée la garde en sécurité&nbsp;: si d'autres entités peuvent accéder à la clé privée, elles peuvent usurper l'identité du·de la propriétaire.

- La clé publique utilisée par le·la vérificateur·ice est bien la contrepartie authentique de la clé privée du·de la propriétaire&nbsp;: si un·e attaquant·e pouvait tromper le·la vérificateur·ice pour qu'il·elle fasse confiance à la mauvaise clé publique, il·elle pourrait usurper l'identité du·de la propriétaire.

Les vérificateur·ice·s utilisent souvent des {{Glossary("digital certificate", "certificats numériques")}} pour vérifier que les clés publiques sont authentiques.

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Digital certificate", "Certificat numérique")}}
  - {{Glossary("Hash function", "Fonction de hachage")}}
  - {{Glossary("Public-key cryptography", "Cryptographie à clé publique")}}
