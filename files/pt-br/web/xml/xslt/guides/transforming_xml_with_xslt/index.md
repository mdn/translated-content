---
title: Transformando XML com XSLT
slug: Web/XML/XSLT/Guides/Transforming_XML_with_XSLT
l10n:
  sourceCommit: 19bf2ac9d21bb9c97591c226d68edfbc0363a237
---

A separação entre conteúdo e apresentação é uma característica fundamental do design do [XML](/pt-BR/docs/Web/XML). A estrutura de um documento XML é projetada para refletir e esclarecer as relações importantes entre os aspectos individuais do próprio conteúdo, sem ser prejudicada pela necessidade de indicar como esses dados deverão ser apresentados. Essa estruturação inteligente é particularmente importante à medida que mais transferências de dados são automatizadas e ocorrem entre máquinas altamente heterogêneas conectadas por uma rede.

No entanto, muito do conteúdo armazenado em documentos XML precisará eventualmente ser apresentado a leitores humanos. Como um navegador oferece uma interface familiar e altamente flexível, é um mecanismo ideal para fornecer versões de apresentação do conteúdo XML. Construído desde o início utilizando uma ampla variedade de tecnologias XML, o Firefox incorpora em si todos os mecanismos necessários para processar tanto os documentos XML originais quanto as folhas de estilos especializadas usadas para estilizá-los e organizá-los para exibição em HTML, reduzindo a carga do servidor com processamento no lado do cliente.

Atualmente, o Gecko (o mecanismo de layout por trás do Firefox) suporta dois tipos de folhas de estilos XML. Para controle básico da aparência — fontes, cores, posição e assim por diante — o Gecko usa [CSS](/pt-BR/docs/Web/CSS).

Nosso foco aqui é no segundo tipo de folha de estilos que o Gecko suporta: a folha de estilos XSLT. XSLT significa eXtensible Stylesheet Language/Transform (Linguagem de Folha de Estilos Extensível/Transformação) e o nome é apropriado. O XSLT permite que um autor de folha de estilos transforme um documento XML primário de duas maneiras significativas: manipulando e ordenando o conteúdo, incluindo uma reordenação completa dele, se desejado, e transformando o conteúdo em um formato diferente (no caso do Firefox, o foco é na conversão em HTML em tempo real, que pode então ser exibido pelo navegador).

## O que é XSLT?

O eXtensible Stylesheet Language/Transform é uma linguagem muito poderosa, e uma discussão completa dela está bem além do escopo deste artigo, mas uma breve discussão de alguns conceitos básicos será útil para entender a descrição das capacidades do Netscape que se segue.

Uma folha de estilos XSLT é um documento XML. Ao contrário do CSS, que tem sua própria sintaxe especializada, uma folha de estilos XSLT é um documento XML, que deve estar em conformidade com todas as regras XML, incluindo a conformidade. Portanto, o modelo para transformação é que um documento XML é usado para transformar outro documento XML.

Uma folha de estilos XSLT é marcada como tal pela inclusão de um cabeçalho XSLT padrão. O elemento mais externo em uma folha de estilos XSLT deve ser o elemento `<xsl:stylesheet>` (uma alternativa aceitável é o elemento `<xsl:transform>`). Esse elemento incluirá pelo menos uma declaração de namespace e o atributo de versão obrigatório. Outros namespaces e três atributos opcionais também podem ser incluídos.

## O namespace XSLT

O namespace obrigatório para XSLT é `"http://www.w3.org/1999/XSL/Transform"`. Os namespaces são objeto de muita confusão em XML. Apesar de os namespaces frequentemente parecerem URIs, eles não se referem, de fato, a um recurso localizado nesse endereço. Em vez disso, são uma forma de especificar um identificador único para um conjunto conhecido de elementos. A string `"http://www.w3.org/1999/XSL/Transform"` é uma constante que designa os elementos assim marcados como pertencentes ao conjunto de tags designado pelo W3C na Recomendação XSLT de 1999. Outra string que ocasionalmente aparece nas folhas de estilos, `"http://www.w3.org/TR/WD-xsl"`, indica conformidade com um rascunho de trabalho anterior (daí o WD) do documento W3C. Esse último namespace não é compatível com o que o W3C adotou eventualmente e não é suportado pelo Netscape.

Como digitar `"http://www.w3.org/1999/XSL/Transform"` repetidamente seria tedioso e tornaria a marcação difícil de ler, existe um mecanismo padrão para atribuir um nome abreviado ao namespace no cabeçalho da folha de estilos. Assim, um exemplo completo do elemento stylesheet de abertura pode ter a seguinte aparência:

```xml
<xsl:stylesheet xmlns:xsl="http://www.w3.org/1999/XSL/Transform" version="1.0">
```

O pseudo-atributo `xmlns` mapeia o nome abreviado `xsl` para o namespace completo para uso em todo o documento seguinte. Assim, o elemento stylesheet acima é prefixado com `xsl:`. Embora `xsl` seja o nome abreviado convencionalmente usado (chamado de prefixo), ele não é obrigatório e é bastante possível escolher um diferente. Os exemplos neste artigo assumem o uso do prefixo `xsl`.

## Como o XSLT processa árvores XML

O mecanismo de transformação XSLT, chamado de processador, não trabalha diretamente com documentos. Antes que a transformação possa ocorrer, o(s) documento(s) XML primário(s) e o(s) documento(s) da folha de estilos devem ser executados através de um analisador, que cria uma representação abstrata da estrutura do documento na memória. Essa representação, chamada de árvore, é o que é realmente manipulado pelo processador. A árvore é um tipo de dado abstrato, um modelo conceitual que pode ser implementado de várias formas dependendo do analisador e do processador. O Netscape usa uma estrutura semelhante ao W3C DOM como sua estrutura de árvore, mas outras são possíveis. Os únicos requisitos dizem respeito à disposição dos objetos na árvore, suas propriedades e seus relacionamentos.

A árvore consiste em uma estrutura hierárquica de nós. Ela pode ser composta de sete tipos diferentes de nós: o único nó raiz, nós de elementos, nós de texto, nós de atributos, nós de comentários, nós de instrução de processamento e nós de namespace.

No topo da árvore está o nó raiz. O nó raiz não corresponde a nenhuma parte individual do documento XML: ele representa o documento como um todo. Abaixo do nó raiz estão seus filhos, que podem ser elementos, comentários, instruções de processamento e assim por diante. Alguns desses filhos também podem ter filhos. E isso pode continuar por vários níveis. Existem certas restrições sobre quais tipos de nós podem ocorrer em quais locais: por exemplo, nós de texto não podem ter filhos.

O resultado da ação do processador também é uma árvore. O Netscape usa essa árvore para renderizar o conteúdo na janela do navegador.

## XPath e seleção de nós

Em essência, uma folha de estilos XSLT é um conjunto de regras, chamadas templates, que declaram que qualquer nó que corresponda a este padrão específico deve ser manipulado desta maneira específica e acabar nesta posição específica na árvore de resultado. Os detalhes de como isso deve ser realizado ficam a cargo do processador. Como a ordem de execução da folha de estilos não pode ser garantida, o XSLT não suporta nenhuma funcionalidade que produza efeitos colaterais. Nesse aspecto, é como Lisp ou Scheme.

As transformações dependem da capacidade do processador de identificar nós individuais na árvore. Para facilitar isso, o W3C decidiu usar uma linguagem separada, XPath, que também tem usos fora do contexto XSLT. Como o nome implica, o XPath define um "caminho" que o processador deve percorrer pela árvore para chegar ao nó desejado. Esse caminho consiste em expressões específicas do XPath a serem avaliadas, que podem incluir várias condições a serem correspondidas, uma forma de associar nós e/ou uma indicação de direcionalidade dentro da árvore. Uma descrição mais completa das partes do XPath mais comumente usadas em XSLT segue na seção de referência.

Conflitos potenciais na correspondência de templates são resolvidos usando um conjunto de regras de precedência em cascata. Em geral, uma regra de template mais específica tem precedência sobre uma menos específica e, em igualdade de condições, uma regra de template que aparece posteriormente no documento tem precedência sobre uma que aparece anteriormente.

As folhas de estilos podem ser anexadas a um documento XML por meio de uma instrução de processamento. Para indicar qual folha de estilos XSLT deve ser usada para processar um determinado documento XML, inclua uma instrução de processamento no próprio documento XML. Por exemplo, se a folha de estilos se chamar inventory.xsl e residir no mesmo diretório que o documento XML, a instrução de processamento no documento XML ficaria assim:

```xml
<?xml-stylesheet type="text/xml" href="inventory.xsl"?>
```

Isso deve ser colocado na seção de prólogo do documento XML.

## Exemplo básico

Este primeiro exemplo demonstra os fundamentos da configuração de uma transformação XSLT em um navegador.
O exemplo usa um documento XML que contém informações sobre um artigo (título, lista de autores e texto do corpo) e o apresenta em forma legível por humanos.

O documento XML (**example.xml**) é mostrado abaixo.

```xml
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="example.xsl"?>
<Article>
  <Title>My Article</Title>
  <Authors>
    <Author>Mr. Foo</Author>
    <Author>Mr. Bar</Author>
  </Authors>
  <Body>This is my article text.</Body>
</Article>
```

A instrução de processamento `?xml-stylesheet` no arquivo XML especifica a folha de estilos XSLT a aplicar em seu atributo `href`.

Este arquivo de folha de estilos XSL (**example.xsl**) é mostrado abaixo:

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

  <xsl:output method="text"/>

  <xsl:template match="/">
    Article - <xsl:value-of select="/Article/Title"/>
    Authors: <xsl:apply-templates select="/Article/Authors/Author"/>
  </xsl:template>

  <xsl:template match="Author">
    - <xsl:value-of select="." />
  </xsl:template>

</xsl:stylesheet>
```

Uma folha de estilos XSLT começa com o elemento `xsl:stylesheet`, que contém todos os _templates_ usados para criar a saída final.
O exemplo acima tem dois templates — um que corresponde ao nó raiz e outro que corresponde aos nós `Author`.
O template que corresponde ao nó raiz gera o título do artigo e então diz para processar todos os templates (via `apply-templates`) que correspondem a nós `Author` que são filhos do nó `Authors`.

Para experimentar o exemplo:

1. Crie um diretório em seu sistema de arquivos e dentro dele crie os arquivos `example.xml` e `example.xsl` listados acima
2. [Inicie um servidor local](/pt-BR/docs/Learn_web_development/Howto/Tools_and_setup/set_up_a_local_testing_server#running_a_simple_local_http_server) no diretório contendo os arquivos.
   Isso permite que você navegue pelos arquivos no diretório como se estivessem hospedados na internet.

   > [!WARNING]
   > Abrir o arquivo XML diretamente do sistema de arquivos não funcionará, porque carregar a folha de estilos do sistema de arquivos é uma [requisição de origem cruzada](/pt-BR/docs/Web/HTTP/Guides/CORS) e será desabilitada por padrão.
   > Hospedar o XML e a folha de estilos no mesmo servidor local garante que eles tenham a mesma origem.

3. Abra **example.xml** no navegador.
4. A saída do navegador é então como mostrado abaixo:

   ```plain
   Browser Output :

       Article - My Article
       Authors:
       - Mr. Foo
       - Mr. Bar
   ```

## Gerando HTML

Uma aplicação comum do XSLT no navegador é transformar XML em HTML no lado do cliente. Este exemplo transformará o documento de entrada (example2.xml), que contém informações sobre um artigo, em um documento HTML.

O elemento `<body>` do artigo agora contém elementos HTML (uma tag `<b>` e `<u>`). O documento XML contém tanto elementos HTML quanto elementos XML, mas apenas um namespace é necessário, especificamente para os elementos XML. Como não há namespace HTML, e usar o namespace XHTML forçaria o XSL a criar um documento XML que não se comportaria como um documento HTML, o `xsl:output` na Folha de Estilos XSL garantirá que o documento resultante seja tratado como HTML. Para os elementos XML, nosso próprio namespace é necessário: `http://devedge.netscape.com/2002/de`, e recebe o prefixo myNS `(xmlns:myNS="http://devedge.netscape.com/2002/de")`.

### Arquivo XML

```xml
<?xml version="1.0"?>
<?xml-stylesheet type="text/xsl" href="example2.xsl"?>
  <myNS:Article xmlns:myNS="http://devedge.netscape.com/2002/de">
    <myNS:Title>My Article</myNS:Title>
    <myNS:Authors>
      <myNS:Author company="Foopy Corp.">Mr. Foo</myNS:Author>
      <myNS:Author>Mr. Bar</myNS:Author>
    </myNS:Authors>
    <myNS:Body>
      The <b>rain</b> in <u>Spain</u> stays mainly in the plains.
    </myNS:Body>
  </myNS:Article>
```

A Folha de Estilos XSL usada precisará ter dois namespaces — um para os elementos XSLT e outro para nossos próprios elementos XML usados no documento XML. A saída da Folha de Estilos XSL é definida como `HTML` usando o elemento `xsl:output`. Ao definir a saída como HTML e não tendo um namespace nos elementos resultantes (coloridos em azul), esses elementos serão tratados como elementos HTML.

### Folha de estilos XSL com 2 namespaces

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html"/>
  …
</xsl:stylesheet version="1.0">
```

Um template correspondendo ao nó raiz do documento XML é criado e usado para criar a estrutura básica da página HTML.

### Criando o documento HTML básico

```xml
…
<xsl:template match="/">
<html>

  <head>

    <title>
      <xsl:value-of select="/myNS:Article/myNS:Title"/>
    </title>

    <style>
      .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
    </style>

  </head>

  <body>
    <p class="myBox">
      <span class="title">
        <xsl:value-of select="/myNS:Article/myNS:Title"/>
      </span> </br>

      Authors:   <br />
        <xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/>
    </p>

    <p class="myBox">
      <xsl:apply-templates select="//myNS:Body"/>
    </p>

  </body>

</html>
</xsl:template>
…
```

Mais três `xsl:template`s são necessários para completar o exemplo. O primeiro `xsl:template` é usado para os nós de autor, enquanto o segundo processa o nó de corpo. O terceiro template tem uma regra de correspondência geral que corresponderá a qualquer nó e qualquer atributo. É necessário para preservar os elementos HTML no documento XML, pois corresponde a todos eles e os copia para o documento HTML que a transformação cria.

### 3 templates finais

```xml
…
<xsl:template match="myNS:Author">
    --   <xsl:value-of select="." />

  <xsl:if test="@company">
    ::   <b>  <xsl:value-of select="@company" />  </b>
  </xsl:if>

  <br />
</xsl:template>
```

```xml
<xsl:template match="myNS:Body">
  <xsl:copy>
    <xsl:apply-templates select="@*|node()"/>
  </xsl:copy>
</xsl:template>

<xsl:template match="@*|node()">
  <xsl:copy>
    <xsl:apply-templates select="@*|node()"/>
  </xsl:copy>
</xsl:template>
…
```

A folha de estilos XSLT final fica da seguinte forma:

### Folha de estilos XSLT final

```xml
<?xml version="1.0"?>
<xsl:stylesheet version="1.0"
                xmlns:xsl="http://www.w3.org/1999/XSL/Transform"
                xmlns:myNS="http://devedge.netscape.com/2002/de">

  <xsl:output method="html" />

  <xsl:template match="/">
    <html>

      <head>

        <title>
          <xsl:value-of select="/myNS:Article/myNS:Title"/>
        </title>

        <style>
          .myBox {margin:10px 155px 0 50px; border: 1px dotted #639ACE; padding:0 5px 0 5px;}
        </style>

      </head>

      <body>
        <p class="myBox">
          <span class="title">
            <xsl:value-of select="/myNS:Article/myNS:Title"/>
          </span> <br />

          Authors:   <br />
            <xsl:apply-templates select="/myNS:Article/myNS:Authors/myNS:Author"/>
          </p>

        <p class="myBox">
          <xsl:apply-templates select="//myNS:Body"/>
        </p>

      </body>

    </html>
  </xsl:template>

  <xsl:template match="myNS:Author">
      --   <xsl:value-of select="." />

    <xsl:if test="@company">
      ::   <b>  <xsl:value-of select="@company" />  </b>
    </xsl:if>

    <br />
  </xsl:template>

  <xsl:template match="myNS:Body">
    <xsl:copy>
      <xsl:apply-templates select="@*|node()"/>
    </xsl:copy>
  </xsl:template>

  <xsl:template match="@*|node()">
      <xsl:copy>
        <xsl:apply-templates select="@*|node()"/>
      </xsl:copy>
  </xsl:template>
</xsl:stylesheet>
```

## Referência XSLT/XPath

- [Elementos](/pt-BR/docs/Web/XML/XSLT/Reference/Element)
- [Eixos](/pt-BR/docs/Web/XML/XPath/Reference/Axes)
- [Funções](/pt-BR/docs/Web/XML/XPath/Reference/Functions)

## Para leitura adicional

### Livros

- **XSLT: Programmer's Reference, Second Edition**
  - **Autor**: Michael H. Kay
  - **Páginas**: 992
  - **Editora**: Wrox; 2ª edição (3 de maio de 2001)
  - **ISBN**: 0764543814
    - Michael Kay é membro do Grupo de Trabalho XSL do W3C e o desenvolvedor de seu próprio processador XSLT de código aberto, Saxon. Ele também é o autor do único livro sobre este assunto a ter chegado a uma segunda edição. Este é um livro muito extenso, bem organizado e exaustivo, se às vezes cansativo, em detalhes, cobrindo todas as bases possíveis na história do XSLT.

<https://www.amazon.com/XSLT-Programmers-Reference-Programmer/dp/0764543814>

- **XSLT**
  - **Autor**: Doug Tidwell
  - **Páginas**: 473
  - **Editora**: O'Reilly Media; 1ª edição (15 de agosto de 2001)
  - **ISBN**: 0596000537
    - Doug Tidwell é um desenvolvedor sênior da IBM e um proeminente evangelizador de tecnologias XML em geral. Ele é o autor de vários artigos e tutoriais sobre vários aspectos do XML no extenso site de desenvolvedores XML da IBM. Este livro é um pouco menos abrangente do que o de Michael Kay, mas cobre bem os fundamentos e oferece alguns exemplos intrigantes.

<https://www.amazon.com/Xslt-Doug-Tidwell/dp/0596000537>

- **Learning XML, Second Edition**
  - **Autor**: Erik T. Ray
  - **Páginas**: 432
  - **Editora**: O'Reilly Media; 2ª edição (22 de setembro de 2003)
  - **ISBN**: 0596004206
    - Como o título indica, este é uma visão geral do XML em geral. O Capítulo 6 é dedicado especificamente ao XSLT.

<https://www.amazon.com/gp/product/0596004206>

### Especificações

- **A página principal do XSL**: <https://www.w3.org/Style/XSL/>
- **Visão geral das especificações XSLT**: <https://www.w3.org/TR/xslt/>
- **Arquivo de discussões públicas sobre estilo (CSS e XSLT)**: [https://lists.w3.org/Archives/Public/www-style/](https://lists.w3.org/Archives/Public/www-style/)
- **Visão geral das especificações XPath**: <https://www.w3.org/TR/xpath/>

### Artigos

- [XSL Transformations](https://www.ibiblio.org/xml/books/bible3/chapters/ch15.html) por Elliotte Rusty Harold
- [What is XSLT?](https://www.xml.com/pub/a/2000/08/holman/index.html) por G. Ken Holman

### Tutoriais/Exemplos

- [Jeni's XSLT Pages](https://www.jenitennison.com/xslt/)
- [XMLPitstop.com](https://web.archive.org/web/20211209064736/https://www.xmlpitstop.com/default_datatype_SSC.html)
- [XPath Tutorial](https://zvon.org/xxl/XPathTutorial/General/examples.html) por Miloslav Nic, Jiri Jirat
- [XSL Tutorial](https://nwalsh.com/docs/tutorials/xsl/) por Paul Grosso, Norman Walsh
- [XSLT Tutorial](https://zvon.org/xxl/XSLTutorial/Books/Book1/index.html) por Miloslav Nic
