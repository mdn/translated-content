---
title: Introdução ao XML
slug: Web/XML/Guides/XML_introduction
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

XML (Extensible Markup Language) é uma linguagem de marcação semelhante ao {{Glossary("HTML")}}, mas sem tags predefinidas para uso. Em vez disso, você define suas próprias tags projetadas especificamente para suas necessidades. Esta é uma forma poderosa de armazenar dados em um formato que pode ser armazenado, pesquisado e compartilhado. Mais importante ainda, como o formato fundamental do XML é padronizado, se você compartilhar ou transmitir XML entre sistemas ou plataformas, seja localmente ou pela internet, o destinatário ainda poderá analisar os dados devido à sintaxe XML padronizada.

Existem muitas linguagens baseadas em XML, incluindo [XHTML](/pt-BR/docs/Glossary/XHTML), [MathML](/pt-BR/docs/Web/MathML), [SVG](/pt-BR/docs/Web/SVG), [RSS](/pt-BR/docs/Glossary/RSS) e [RDF](/pt-BR/docs/Glossary/RDF). Você também pode definir a sua própria.

## Estrutura de um documento XML

A estrutura completa do XML e das linguagens baseadas em XML é construída sobre {{Glossary("tag", "tags")}}.

### Declaração XML

A declaração XML não é uma tag. É usada para transmitir os metadados de um documento.

```html
<?xml version="1.0" encoding="UTF-8"?>
```

#### Atributos

- `version`
  - : Versão do XML usada neste documento.
- `encoding`
  - : Codificação usada neste documento.

### Comentários

```html
<!-- Comentário -->
```

## XML "correto" (válido e bem formado)

### Regras de design correto

Para que um documento XML seja correto, as seguintes condições devem ser atendidas:

- O documento deve ser bem formado.
- O documento deve estar em conformidade com todas as regras de sintaxe XML.
- O documento deve estar em conformidade com as regras semânticas, que geralmente são definidas em um esquema XML ou em uma DTD (**[Definição de Tipo de Documento](/pt-BR/docs/Glossary/Doctype)**).

### Exemplos

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
        Hello World
    <!--missing </warning> -->
</message>
```

Agora vamos ver uma versão corrigida desse mesmo documento:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<message>
    <warning>
         Hello World
    </warning>
</message>
```

Um documento que contém uma tag indefinida é inválido. Por exemplo, se nunca definirmos a tag `<warning>`, o documento acima não seria válido.

A maioria dos navegadores oferece um depurador que pode identificar documentos XML mal formados.

## Referências de caracteres

Como o HTML, o XML oferece {{glossary("character reference", "referências de caracteres")}} para se referir a alguns caracteres reservados especiais (como o sinal de maior que, que é usado para tags). Há cinco desses caracteres que você deve conhecer:

| Entidade    | Caractere | Descrição                                   |
| ----------- | --------- | ------------------------------------------- |
| &amp;lt;    | <         | Sinal de menor que                          |
| &amp;gt;    | >         | Sinal de maior que                          |
| &amp;amp;   | &         | E comercial                                 |
| &amp;quot;  | "         | Um sinal de aspas duplas                    |
| &amp;apos;  | '         | Um apóstrofo (ou sinal de aspas simples)    |

Mesmo que haja apenas 5 referências de caracteres declaradas, ou entidades, mais podem ser adicionadas usando a [Definição de Tipo de Documento](/pt-BR/docs/Glossary/Doctype) do documento. Por exemplo, para criar uma nova entidade `&warning;`, você pode fazer isso:

```xml
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE body [
  <!ENTITY warning "Warning: Something bad happened... please refresh and try again.">
]>
<body>
  <message> &warning; </message>
</body>
```

Você também pode usar referências de caracteres numéricas para especificar caracteres especiais; por exemplo, \&#xA9; é o símbolo "©".

## Exibindo XML

O XML geralmente é usado para fins descritivos, mas existem maneiras de exibir dados XML. Se você não definir uma forma específica de renderização do XML, o XML bruto será exibido no navegador.

Uma forma de estilizar a saída XML é especificar [CSS](/pt-BR/docs/Web/CSS) para aplicar ao documento usando a instrução de processamento `xml-stylesheet`.

```xml
<?xml-stylesheet type="text/css" href="stylesheet.css"?>
```

Há também outra maneira mais poderosa de exibir XML: as **Extensible Stylesheet Language Transformations** ([XSLT](/pt-BR/docs/Web/XML/XSLT)), que podem ser usadas para transformar XML em outras linguagens, como HTML. Isso torna o XML incrivelmente versátil.

```xml
<?xml-stylesheet type="text/xsl" href="transform.xsl"?>
```

## Recomendações

Este artigo é obviamente apenas uma introdução muito breve ao que é XML, com alguns pequenos exemplos e referências para você começar. Para mais detalhes sobre XML, você deve procurar na Web artigos mais aprofundados.

Aprender a linguagem de marcação de hipertexto ([HTML](/pt-BR/docs/Web/HTML)) ajudará você a entender melhor o XML.

## Veja também

- [XML.com](https://www.xml.com/)
- [Extensible Markup Language (XML) @ W3.org](https://www.w3.org/XML/)
- [Using XML: A List Apart](https://alistapart.com/article/usingxml/)
