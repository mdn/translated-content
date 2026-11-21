---
title: Parâmetros de PI
slug: Web/XML/XSLT/Guides/PI_Parameters
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

O XSLT suporta o conceito de passar parâmetros para uma folha de estilos durante sua execução. Isso já era possível há algum tempo ao usar o {{domxref("XSLTProcessor")}} em JavaScript. No entanto, ao usar a instrução de processamento (PI) `<?xml-stylesheet?>`, não havia nenhuma forma de fornecer parâmetros.

Para resolver isso, dois novos PIs foram implementados no [Firefox 2](/pt-BR/docs/Mozilla/Firefox/Releases/2) (veja [Versões suportadas](#versões_suportadas) abaixo para detalhes): `<?xslt-param?>` e `<?xslt-param-namespace?>`. Ambos os PIs podem conter "pseudo-atributos" da mesma forma que o PI `xml-stylesheet`.

O documento a seguir passa dois parâmetros, "color" e "size", para a folha de estilos "style.xsl".

```xml
<?xslt-param name="color" value="blue"?>
<?xslt-param name="size" select="2"?>
<?xml-stylesheet type="text/xsl" href="style.xsl"?>
```

Note que esses PIs não têm efeito quando a transformação é feita usando o objeto `XSLTProcessor` em JavaScript.

## Instruções de processamento

Os atributos nos PIs `xslt-param` e `xslt-param-namespace` são analisados usando as regras definidas em [xml-stylesheet](https://www.w3.org/TR/xml-stylesheet/). Quaisquer atributos não reconhecidos devem ser ignorados. A análise de qualquer atributo não deve falhar devido à presença de um atributo não reconhecido, desde que esse atributo siga a sintaxe em `xml-stylesheet`.

Ambos os PIs `xslt-param` e `xslt-param-namespace` devem aparecer no prólogo do documento, ou seja, antes da primeira tag de elemento. Todos os PIs no prólogo devem ser respeitados, tanto os que ocorrem antes quanto os que ocorrem depois de qualquer PI `xml-stylesheet`.

Se houver múltiplos PIs `xml-stylesheet`, os parâmetros se aplicam a todas as folhas de estilos, pois todas as folhas de estilos são importadas em uma única folha de estilos conforme a especificação XSLT. Observe que múltiplos PIs XSLT `xml-stylesheet` não são atualmente suportados no Firefox.

### xslt-param

O PI `xslt-param` suporta 4 atributos:

- `name`
  - : A parte do nome local do nome do parâmetro. Nenhuma verificação de sintaxe é feita no atributo; no entanto, se não for um [NCName](https://www.w3.org/TR/xml-names/#NT-NCName) válido, ele nunca corresponderá a nenhum parâmetro na folha de estilos.
- `namespace`
  - : O namespace do nome do parâmetro. Nenhuma verificação de sintaxe é feita no atributo.
- `value`
  - : Contém o valor de string para o parâmetro. O valor do atributo é usado como valor para o parâmetro. O tipo de dado será sempre _string_.
- `select`
  - : Uma expressão [XPath](/pt-BR/docs/Web/XML/XPath) para o parâmetro. O valor do atributo é analisado como uma expressão XPath. O resultado da avaliação da expressão é usado como valor para o parâmetro.

Se o atributo `name` estiver ausente ou vazio, o PI é ignorado.

Se o atributo `namespace` estiver ausente ou vazio, o namespace nulo é usado.

Não é um erro especificar um nome de parâmetro que não existe na folha de estilos (ou que é uma variável na folha de estilos). O PI é ignorado.

Se tanto `value` quanto `select` estiverem presentes, ou se nem `value` nem `select` estiverem presentes, o PI é ignorado.

Note que `value="..."` não é estritamente igual a `select="'...'"`, pois o valor pode conter tanto apóstrofo quanto aspas.

#### Exemplos

Definir o parâmetro 'color' para a string 'red':

```xml
<?xslt-param name="color" value="red"?>
```

Definir o parâmetro 'columns' para o número 2:

```xml
<?xslt-param name="columns" select="2"?>
```

Definir o parâmetro 'books' para um conjunto de nós contendo todos os elementos `<book>` no namespace nulo:

```xml
<?xslt-param name="books" select="//book"?>
```

Definir o parâmetro 'show-toc' como booleano `true`:

```xml
<?xslt-param name="show-toc" select="true()"?>
```

#### O contexto do atributo select

O contexto a seguir é usado para analisar e avaliar a expressão no atributo **select**.

- O nó de contexto é o nó usado como nó corrente inicial ao executar a folha de estilos.
- A posição de contexto é a posição do nó de contexto na lista de nós correntes iniciais usada ao executar a folha de estilos.
- O tamanho de contexto é o tamanho da lista de nós correntes iniciais usada ao executar a folha de estilos.
- Nenhuma variável está disponível.
- A biblioteca de funções é a biblioteca de funções XPath padrão.
- As declarações de namespace são determinadas pelos PIs `xslt-param-namespace`, veja abaixo.

Se o atributo **select** falhar ao analisar ou executar, o PI é ignorado (em particular, ele não volta para o atributo **value**).

### xslt-param-namespace

O `xslt-param-namespace` usa dois atributos:

- prefix
  - : O prefixo que é mapeado.
- namespace
  - : O namespace para o qual o prefixo mapeia.

Um PI `xslt-param-namespace` afeta a expressão no atributo **select** para todos os `xslt-param`s seguintes ao PI. Isso se aplica mesmo que haja outros nós como comentários ou outros PIs entre os PIs `xslt-param-namespace` e `xslt-param`.

Não é um erro que múltiplos PIs usem o mesmo prefixo; cada novo PI apenas altera para qual namespace o prefixo mapeia.

Se **prefix** estiver ausente, vazio ou igual a um NCName inválido, o PI é ignorado.

Se **namespace** estiver ausente, o PI é ignorado. Se **namespace** estiver vazio, o mapeamento do prefixo é removido.

#### Exemplos

Definir o parâmetro 'books' para um conjunto de nós contendo todos os elementos `<book>` no namespace `http://www.example.org/myNamespace`:

```xml
<?xslt-param-namespace prefix="my" namespace="http://www.example.org/myNamespace"?>
<?xslt-param name="books" select="//my:book"?>
```

## Versões suportadas

Suportado a partir do Firefox 2.0.0.1. O atributo **value** é suportado no Firefox 2, mas o atributo **select** trava para algumas expressões na versão 2.0.

## Possíveis desenvolvimentos futuros

Devemos permitir qualquer função XSLT na expressão? `document()` parece útil, mas parece difícil manter a invariante de que `generate-id()` deve produzir a mesma string para o mesmo documento.

E quanto à consulta de parâmetros de URL na folha de estilos XSLT? Por exemplo, passá-los para `<xsl:param>` especificados.
