---
title: Détournement de clic
slug: Glossary/Clickjacking
---

Le détournement de clic (ou <i lang="en">clickjacking</i>) est une attaque basée sur l'interface qui incite les utilisatrices et utilisateurs de sites web à cliquer involontairement sur des liens malveillants. Pour le détournement de clics, les attaquants intègrent leurs liens malveillants dans des boutons ou des pages légitimes d'un site web. Dans un [site](/fr/docs/Glossary/Site) infecté, chaque fois qu'une personne clique sur un lien légitime, l'attaquant obtient les informations confidentielles de cette personne, ce qui compromet en fin de compte sa vie privée sur Internet.

Le détournement de clic peut être évité en implémentant une [politique de sécurité du contenu avec la directive `frame-ancestors`](/fr/docs/Web/HTTP/Headers/Content-Security-Policy/frame-ancestors) et en implémentant des [attributs `Set-Cookie`](/fr/docs/Web/HTTP/Headers/Set-Cookie#attributs).

## Voir aussi

- [Sécurité sur le Web&nbsp;: protection contre le détournement de clic](/fr/docs/Web/Security#protection_contre_le_détournement_de_clic)
- [Le détournement de clic](https://fr.wikipedia.org/wiki/Détournement_de_clic) sur Wikipédia
- [Le détournement de clic](https://owasp.org/www-community/attacks/Clickjacking) sur OWASP (en anglais)
