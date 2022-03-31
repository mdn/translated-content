---
title: CDATASection
slug: Web/API/CDATASection
tags:
  - API
  - DOM
  - Interface
  - Référence(2)
  - Section
translation_of: Web/API/CDATASection
---
{{APIRef("DOM")}}

L'interface **`CDATASection`** représente une section CDATA qui peut être utilisée dans un document XML afin d'inclure des portions de texte qui ne sont pas échappées (les symboles < et & présents dans ces portions n'ont pas besoin d'être échappés comme ils doivent l'être normalement dans un document XML).

En termes de balisage, une section CDATA a la forme suivante :

    <![CDATA[  ... ]]>

Par exemple :

```xml
<toto>
  Voici une section CDATA :
  <![CDATA[  < > & ]]> dans laquelle
  le texte n'est pas échappé.
</toto>
```

La seule séquence qui n'est pas autorisée dans une section CDATA est le délimiteur de fin d'une séquence CDATA lui-même :

```xml
<![CDATA[  ]]> causera une erreur   ]]>
```

On notera que les sections ne doivent pas être utilisées dans des documents HTML.

{{InheritanceDiagram(600,120)}}

## Propriétés

_Cette interface ne dispose pas de propriétés spécifiques et implémente celles de son parent : {{domxref("Text")}}._

## Méthodes

_Cette interface ne dispose pas de méthodes spécifiques et implémente celles de son parent : {{domxref("Text")}}._

## Spécifications

| Spécification                                                                                    | État                             | Commentaires                                                         |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------------------------------------------------------- |
| {{SpecName('DOM WHATWG', '#interface-cdatasection', 'CDATASection')}}     | {{Spec2('DOM WHATWG')}} | Rajouté dans le bogue [#295](https://github.com/whatwg/dom/pull/295) |
| {{SpecName('DOM3 Core', 'core.html#ID-667469212', 'CDATASection')}}         | {{Spec2('DOM3 Core')}}     | Aucune modification depuis {{SpecName('DOM2 Core')}}          |
| {{SpecName('DOM2 Core', 'core.html#ID-667469212', 'CDATASection')}}         | {{Spec2('DOM2 Core')}}     | Aucune modification depuis {{SpecName('DOM1')}}.             |
| {{SpecName('DOM1', 'level-one-core.html#ID-667469212', 'CDATASection')}} | {{Spec2('DOM1')}}         | Définition initiale.                                                 |

## Compatibilité des navigateurs

{{Compat("api.CDATASection")}}
