---
title: CDATASection
slug: Web/API/CDATASection
l10n:
  sourceCommit: 327710f973e1d6d1cad19faac9a95134c6027d08
---

{{APIRef("DOM")}}

L'interface **`CDATASection`** représente une section CDATA qui peut être utilisée dans XML pour inclure de longues portions de texte non échappé. À l'intérieur d'une section CDATA, les symboles `<` et `&` n'ont pas besoin d'être échappés comme c'est normalement le cas.

En XML, une section CDATA ressemble à&nbsp;:

```xml
<![CDATA[ … ]]>
```

Par exemple&nbsp;:

```xml
<toto>
  Voici une section CDATA :
  <![CDATA[  < > & ]]> dans laquelle le texte n'est pas échappé.
</toto>
```

La seule séquence qui n'est pas autorisée dans une section CDATA est le délimiteur de fin d'une séquence CDATA lui-même, `]]>`.

> [!NOTE]
> Les sections CDATA ne doivent pas être utilisées dans des documents HTML. Elles sont considérées comme des commentaires et ne sont pas affichées.

{{InheritanceDiagram}}

## Propriétés d'instance

_Cette interface ne dispose pas de propriétés spécifiques et implémente celles de son parent {{DOMxRef("Text")}}._

## Méthodes d'instance

_Cette interface ne dispose pas de méthodes spécifiques et implémente celles de son parent {{DOMxRef("Text")}}._

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Document.createCDATASection()")}}
