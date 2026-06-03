---
title: Binding (Liaison)
slug: Glossary/Binding
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

En programmation, la **liaison** (<i lang="en">binding</i> en anglais) correspond à l'association d'un {{Glossary("identifier", "identifiant")}} avec une valeur. C'est le cas pour les {{Glossary("variable", "variables")}} — par exemple les {{Glossary("parameter", "paramètres")}} des fonctions et celles créées par les blocs {{JSxRef("Statements/try...catch", "catch (e)")}} ne sont pas des «&nbsp;variables&nbsp;» au sens strict du terme. De plus, certaines liaisons sont implicitement créées par le langage — par exemple, {{JSxRef("Operators/this", "this")}} et [`new.target`](/fr/docs/Web/JavaScript/Reference/Operators/new.target) en JavaScript.

On dit d'une liaison qu'elle est {{Glossary("mutable", "muable")}} si elle peut être réaffectée et {{Glossary("immutable", "immuable")}} dans le cas contraire&nbsp;; cela _ne_ signifie _pas_ que la valeur correspondante est immuable.

Une liaison est généralement associée à une {{Glossary("scope", "portée")}}. Certains langages de programmation permettent de recréer des liaisons au sein d'une même portée (on parle parfois de re-déclaration), et d'autres non. En JavaScript, une liaison pourra être redéclarée selon l'instruction utilisée pour créer la liaison.

## Voir aussi

- {{JSxRef("Statements/var", "var")}}
- {{JSxRef("Statements/let", "let")}}
- {{JSxRef("Statements/const", "const")}}
- {{JSxRef("Statements/function", "function")}}
- {{JSxRef("Statements/class", "class")}}
