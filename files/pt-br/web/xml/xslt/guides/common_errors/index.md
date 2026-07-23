---
title: Erros comuns de XSLT
slug: Web/XML/XSLT/Guides/Common_errors
l10n:
  sourceCommit: 3e1b5277c6451e7d27ab628f23fb9702947a7a7b
---

## Tipos MIME

Seu servidor precisa enviar tanto o documento fonte quanto a folha de estilos com um tipo MIME de XML: `text/xml` ou `application/xml`. Para descobrir o tipo atual, carregue o arquivo no Mozilla e verifique as informações da página. Ou use uma ferramenta de download, que normalmente indica o tipo MIME.

No Firefox 6 e versões posteriores, você também pode usar o tipo MIME oficial para XSLT: `application/xslt+xml`.

## Namespace

O namespace do XSLT 1.0 é [`http://www.w3.org/1999/XSL/Transform`](https://www.w3.org/1999/XSL/Transform). Versões antigas do IE usavam um namespace diferente. Porém, essas versões também usavam uma versão de rascunho do XSLT que é incompatível com o que acabou se tornando a especificação XSLT 1.0. O Firefox suporta apenas a versão oficial do XSLT 1.0.

## Funcionalidades ausentes

Existem algumas funcionalidades na especificação XSLT 1.0 que o Firefox infelizmente ainda não suporta. Especificamente:

- O eixo `namespace::` em expressões XPath. O suporte para isso deverá estar disponível no futuro.
- O atributo `disable-output-escaping`. Essa funcionalidade controla como a serialização do documento de saída construído funciona. No entanto, o Firefox nunca serializa o documento de saída, portanto o atributo não é realmente aplicável. Embora pudéssemos tentar adicionar algumas heurísticas para serializar e reanalisar apenas a parte do documento de saída que tem `disable-output-escaping` aplicado, heurísticas frequentemente erram e levam a resultados surpreendentes, portanto temos sido relutantes em adicionar isso até agora. Muitas vezes as folhas de estilos contêm código como `<xsl:text disable-output-escaping="yes">&nbsp;</xsl:text>`, o que equivale a colocar `&#160;` na folha de estilos, o que funcionará perfeitamente em todos os mecanismos XSLT. Reconhecemos que a falta de `disable-output-escaping` é um problema e gostaríamos de encontrar uma solução para isso, mas até agora não encontramos boas soluções.
- O elemento `<xsl:namespace-alias>`.

Se você quiser ajudar com qualquer uma das funcionalidades acima, a ajuda seria muito apreciada.
