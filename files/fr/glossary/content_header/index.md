---
title: En-têtes de contenu
slug: Glossary/Content_header
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Les **en-têtes de contenu** (<i lang="en">Content headers</i> en anglais) sont le groupe d'[en-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers) qui décrivent le contenu du corps d'un message HTTP, une fois tout encadrement du message retiré.
Ils décrivent précisément les propriétés du {{Glossary("HTTP Content", "contenu du message")}} transporté dans un message donné _tel qu'il est transmis_, comme la longueur du contenu, l'encodage de transport, la partie de la ressource transportée dans les données (pour les messages multi-parties) et les vérifications d'intégrité du message.
Ils se distinguent des {{Glossary("Representation header", "en-têtes de représentation")}}, qui décrivent l'encodage, le type de média, la langue et d'autres caractéristiques de la ressource, et permettent d'interpréter les données sous-jacentes.

Ces en-têtes étaient définis comme «&nbsp;en-têtes de charge utile&nbsp;» (<i lang="en">Payload headers</i>) dans la {{RFC("7231")}}, mais sont désormais appelés «&nbsp;en-têtes de contenu&nbsp;» car les données contenues dans les charges utiles des trames HTTP/2 et HTTP/3 peuvent être des données d'en-tête, de corps ou d'autres informations de contrôle.
Les spécifications HTTP plus récentes ne mentionnent plus «&nbsp;en-têtes de contenu&nbsp;» ni n'étendent la liste des en-têtes concernés, mais la sémantique reste la même, donc cette classification reste utile.

> [!NOTE]
> Il existe un certain recoupement entre les en-têtes de contenu et les {{Glossary("Representation header", "en-têtes de représentation")}}.

Ces en-têtes peuvent être présents dans les messages HTTP de requête comme de réponse, et incluent&nbsp;:

- {{HTTPHeader("Content-Encoding")}}
- {{HTTPHeader("Content-Length")}}
- {{HTTPHeader("Content-Range")}}
- {{HTTPHeader("Content-Type")}}
- {{HTTPHeader("Trailer")}}
- {{HTTPHeader("Transfer-Encoding")}}

## Voir aussi

- [En-têtes HTTP](/fr/docs/Web/HTTP/Reference/Headers)
- Termes associés du glossaire&nbsp;:
  - {{Glossary("Representation header", "En-tête de représentation")}}
  - {{Glossary("HTTP Content", "Contenu HTTP")}}
- [RFC 9110, section 6.4.1&nbsp;: Sémantique du contenu <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9110.html#rfc.section.6.4.1), en particulier [Appendice B.3.&nbsp;: Changements depuis la RFC 7231 <sup>(angl.)</sup>](https://httpwg.org/specs/rfc9110.html#changes.from.rfc.7231)
- [RFC 7231, section 3.3&nbsp;: Sémantique de la charge utile <sup>(angl.)</sup>](https://datatracker.ietf.org/doc/html/rfc7231#section-3.3)
