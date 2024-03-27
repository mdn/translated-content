---
title: Name binding (liaison de nom)
slug: Glossary/Binding
l10n:
  sourceCommit: 36527a8af0f396e8b84de3cda578d9e0fe1860f4
---

{{GlossarySidebar}}

En programmation, la **liaison de nom** (<i lang="en">name binding</i> en anglais) correspond à l'association d'un [identifiant](/fr/docs/Glossary/Identifier) avec une valeur. C'est le cas pour les [variables](/fr/docs/Glossary/Variable), mais aussi pour les [paramètres](/fr/docs/Glossary/Parameter) des fonctions et celles créées par les blocs [`try…catch`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch). Certaines liaisons de nom sont implicitement créées par le langage, comme [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this) et [`new.target`](/fr/docs/Web/JavaScript/Reference/Operators/new.target) en JavaScript.

On dit d'une liaison qu'elle est [muable](/fr/docs/Glossary/Mutable) si elle peut être réaffectée et [immuable](/fr/docs/Glossary/Immutable) sinon (cela ne signifie pas que la valeur correspondante est immuable).

Une liaison est généralement associée à une [portée](/fr/docs/Glossary/Scope). Certains langages de programmation permettent de recréer des liaisons au sein d'une même portée (on parle parfois de redéclaration), et d'autres non. En JavaScript, une liaison pourra être redéclarée selon l'instruction utilisée pour créer la liaison.

## Voir aussi

- [`var`](/fr/docs/Web/JavaScript/Reference/Statements/var)
- [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let)
- [`const`](/fr/docs/Web/JavaScript/Reference/Statements/const)
- [`function`](/fr/docs/Web/JavaScript/Reference/Statements/function)
- [`class`](/fr/docs/Web/JavaScript/Reference/Statements/class)
