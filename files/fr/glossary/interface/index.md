---
title: Interface
slug: Glossary/Interface
l10n:
  sourceCommit: 08307dc08472de976fa0aac34bce0f775f55b272
---

Dans la [programmation orientée objet](/fr/docs/Glossary/OOP), une **interface** décrit l'ensemble des {{Glossary("property", "propriétés")}} et des {{Glossary("method", "méthodes")}} qu'un objet expose. Un objet qui implémente une interface peut être manipulé correctement lorsqu'il est passé à des fonctions ou des constructions conçues pour interagir avec de telles interfaces. En général, une interface est considérée comme un _contrat_&nbsp;: en dehors du comportement de ces propriétés et méthodes, les objets implémentant la même interface peuvent ne pas être liés de quelque manière que ce soit à l'exécution.

Le langage JavaScript lui-même définit certaines interfaces, telles que [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols#le_protocole_«_itérable_»), [semi-promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise#semi-promesse), et [jetable](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/dispose), qui interagissent avec des constructions du langage telles que [syntaxe de propagation](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax), [`await`](/fr/docs/Web/JavaScript/Reference/Operators/await), et [`using`](/fr/docs/Web/JavaScript/Reference/Statements/using). En raison de l'absence de compilation ou de vérification de type statique, ces contrats ne sont incarnés par aucune construction du langage, donc MDN les appelle également «&nbsp;protocoles&nbsp;».

En [TypeScript](/fr/docs/Glossary/TypeScript), la [déclaration `interface` <sup>(angl.)</sup>](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces) crée des interfaces dont l'implémentation peut être vérifiée à la compilation.

Dans la terminologie des standards du Web ({{Glossary("WebIDL")}} en particulier), une interface décrit la structure des objets fournis par les {{Glossary("API")}} Web. Contrairement au sens OOP, les interfaces en WebIDL sont en réalité incarnées sous la forme d'une fonction constructeur et d'un objet prototype. Par exemple, l'interface `HTMLButtonElement` est exposée sous la forme du constructeur {{DOMxRef("HTMLButtonElement")}} et de l'objet `HTMLButtonElement.prototype` (dont héritent toutes les instances). Cela rend les interfaces WebIDL plus similaires aux [classes](/fr/docs/Web/JavaScript/Reference/Classes) JavaScript. Une interface peut hériter d'autres interfaces et peut inclure des membres provenant de {{Glossary("Mixin", "mixins")}}.

## Voir aussi

- [Utiliser les classes](/fr/docs/Web/JavaScript/Guide/Using_classes)
- L'entrée de glossaire {{Glossary("WebIDL")}}
- L'entrée de glossaire {{Glossary("Mixin")}}
- [Information contenue dans un fichier WebIDL](/fr/docs/MDN/Writing_guidelines/Howto/Write_an_api_reference/Information_contained_in_a_WebIDL_file)
- [Interface (programmation orientée objet) <sup>(angl.)</sup>](<https://en.wikipedia.org/wiki/Interface_(object-oriented_programming)>) sur Wikipedia
- La spécification [WebIDL <sup>(angl.)</sup>](https://webidl.spec.whatwg.org/)
