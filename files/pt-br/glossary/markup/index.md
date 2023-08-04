---
title: marcação
slug: Glossary/Markup
---

Uma linguagem de marcação é aquela projetada para definir e apresentar textos.
[HTML](/pt-BR/docs/Glossario/HTML) (Linguagem de Marcação de Hipertexto), é um exemplo de linguagem
de marcação.

Em um arquivo de texto, como um arquivo HTML, os elementos são _marcados_ utilizando [tags](/pt-BR/docs/Glossario/Tag), que explica o
objetivo dessa parte do conteúdo.

## Tipos de linguagem de marcação

- **Marcação de Apresentação** (em inglês: _Presentational Markup_):
  - : Tradicionalmente utilizado pelos pelos processadores de texto, são marcações incorporadas no texto que produzem o efeito
    WYSIWYG ("O que você vê é o que você obtém"). Sem a necessidade de manipulação direta de código,
    geralmente essas marcações são feitas para serem ocultas dos usuários humanos, autores ou editores. De maneira mais apropriada, esses sistemas usam a
    marcação procedimental e/ou descritiva "por debaixo dos panos", mas as convertem para apresentar pro usuário de maneira renderizada.
- **Marcação Procedimental** (em inglês: _Procedural Markup_):
  - : Fornece instruções para os programas processarem o texto. Exemplos conhecidos incluem troff, TeX e PostScript. Espera-se que o processador execute o texto
    do começo ao fim, seguindo as instruções encontradas. O texto com essa marcação geralmente é editado com a marcação visível e manipulada diretamente pelo
    autor. Os sistemas procedimentais mais populares geralmente incluem construções de programação, e macros ou sub-rotinas que são comumente definidas para que
    conjuntos complexos de instruções possam ser chamados por um nome simples (e talvez alguns parâmetros). Isso é muito mais rápido, menos propenso a erros e
    fácil de manutenção do que repor as mesmas instruções ou instruções semelhantes em muitos lugares.
- **Marcação Descritiva** (em inglês: _Descriptive Markup_):
  - : Usada especificamente para rotular partes do documento como elas são, e não como devem ser processadas. Sistemas conhecidos que fornecem muitos desses
    rótulos incluem LaTeX, HTML e XML. O objetivo é dissociar a estrutura do documento de qualquer tratamento ou representação particular. Essa marcação é
    frequentemente descrita como "semântica". Um exemplo de uma marcação descritiva seria a tag
    [`<cite>`](/pt-BR/docs/Web/HTML/Element/cite) do HTML, usada para rotular uma citação. Essa marcação incentiva os autores a
    escrever de uma maneira que descreva o material conceitualmente, em vez de apenas visualmente.

Há um borrão considerável das linhas entre os tipos de marcação. Nos sistemas modernos de processamento de texto, a marcação de apresentação é geralmente
salva em sistemas orientados a marcação descritiva, como XML, e depois processada procedimentalmente por outras sistemas. O TeX, linguagem de marcação
procedimental, pode ser usada para criar sistemas de marcação com natureza mais descritiva, como o LaTeX.
