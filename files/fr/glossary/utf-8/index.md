---
title: UTF-8
slug: Glossary/UTF-8
---

{{GlossarySidebar}}

UTF-8 (UCS Transformation Format 8) est le {{Glossary("Character encoding","codage de caractères")}} le plus répandu sur le world wide web. Chaque caractère est représenté par un à quatre octets. UTF-8 est rétro-compatible avec l'{{Glossary("ASCII")}} et peut représenter n'importe quel caractère Unicode.

Les 128 premiers caractères UTF-8 correspondent exactement aux 128 premiers caractères ASCII (numérotés de 0 à 127), ce qui signifie que tous les textes ASCII existants sont déjà valides en UTF-8. Tous les autres caractères utilisent de deux à quatre octets. Chacun de ces octets possède quelques bits réservés à des fins d'encodage. Comme les caractères non-ASCII nécessitent plus d'un octet pour être enregistrés, ils courent le risque d'être corrompus s'ils sont séparés ou s'ils ne sont pas recombinés.

## Voir aussi

### Culture générale

- [UTF-8](https://fr.wikipedia.org/wiki/UTF-8) sur Wikipédia
- [FAQ sur l'UTF-8, sur le site web d'Unicode](https://www.unicode.org/faq/utf_bom.html#UTF8)
