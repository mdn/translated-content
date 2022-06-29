---
title: Détournement de clic
slug: Glossary/Clickjacking
translation_of: Glossary/Clickjacking
---
Le détournement de clic (ou clickjacking) est une attaque basée sur l'interface qui incite les utilisateurs de sites Web à cliquer involontairement sur des liens malveillants. Dans le détournement de clics, les attaquants intègrent leurs liens malveillants dans des boutons ou des pages légitimes d'un site Web. Dans un [site](/fr/docs/Glossary/Site) infecté, chaque fois qu'un utilisateur clique sur un lien légitime, l'attaquant obtient les informations confidentielles de cet utilisateur, ce qui compromet finalement la vie privée de l'utilisateur sur Internet.

Le détournement de clic peut être évité en implémentant une [politique de sécurité du contenu (frame-ancestors)](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) et en implémentant des [attributs Set-Cookie](/fr/docs/Web/HTTP/Headers/Set-Cookie#attributes).

## En apprendre plus

- [Web security: clickjacking protection](/fr/docs/Web/Security#clickjacking_protection)
- Le [détournement de clic](https://fr.wikipedia.org/wiki/D%C3%A9tournement_de_clic) sur Wikipedia
- Le [détournement de clic](https://owasp.org/www-community/attacks/Clickjacking) sur OWASP
