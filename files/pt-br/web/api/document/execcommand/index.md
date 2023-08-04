---
title: Document.execCommand()
slug: Web/API/Document/execCommand
---

{{ApiRef("DOM")}}

Quando um documento HTML está em [`designMode`](/pt-BR/docs/Web/API/Document/designMode), seu objeto `document` expõe um metodo **`execCommand`** para editar a região editável corrente, algo como elementos [form inputs](/pt-BR/docs/Web/HTML/Element/input) ou [`contentEditable`](/pt-BR/docs/Web/HTML/Global_attributes/contenteditable).

A maioria dos comandos afetam apenas uma área selecionada \[[seleção](/pt-BR/docs/Web/API/Selection)] (negrito, itálico, etc.), enquantos outros adicionam novos elementos (adicionar um link por exemplo), ou afetam uma linha toda (identação). Quando usando `contentEditable`, o metódo `execCommand()` afeta o elemento editável ativo.

## Síntaxe

```
document.execCommand(aCommandName, aShowDefaultUI, aValueArgument)
```

### Valor de Retorno

Um {{jsxref('Boolean')}} que tem valor `false` se o comando não é válido ou está desabilitado.

> **Nota:** Retorna `true` se for parte da interação do usuário. Não tente utilizar o retorno para verificar o suporte do browser antes de chamar o comando.

### Parâmetros

- `aCommandName`
  - : Uma {{domxref("DOMString")}} especificando o nome do comando a ser executado. Veja [Comandos](#comandos) para um lista dos possíveis comandos.
- `aShowDefaultUI`
  - : Um {{jsxref("Boolean")}} indicando se a interface padrão do usuário deve ser mostrada. Isso não é implementado no Mozilla.
- `aValueArgument`
  - : Para comandos que requerem um argumento de entrada. É uma {{domxref("DOMString")}} provendo a informação. Por exemplo, `insertImage` requer uma URL da imagem a ser inserida. Use `null` se nenhum argumento é necessário.

### Comandos

- `backColor`
  - : Muda a cor de fundo do documento. No modo `styleWithCss`, ele afeta a cor de fundo do bloco que contém. Isso requer um valor de {{cssxref("&lt;color&gt;")}} passado como argumento. Observe que o Internet Explorer usa isso para definir a cor do plano de fundo do **texto**.
- `bold`
  - : Ativa / desativa negrito na seleção ou no ponto de inserção. O Internet Explorer usa a tag {{HTMLElement("strong")}} no lugar de {{HTMLElement("b")}}.
- `ClearAuthenticationCache`
  - : Limpa todas as credenciais de autenticação do cache.
- `contentReadOnly`
  - : Torna o documento de conteúdo somente leitura ou editável. Isso requer um valor booleano `true` / `false` como argumento. (Não é suportado pelo Internet Explorer.)
- `copy`
  - : Copia a seleção atual para a área de transferência. As condições para ativar esse comportamento variam de um navegador para outro e evoluíram com o tempo. Verifique a Tabela de [Compatibilidade entre Browsers](#compatibilidade_entre_browsers) para determinar se você pode usar no seu caso.
- `createLink`
  - : Cria um hiperlink a partir da seleção, mas apenas se houver uma seleção. Requer uma string [URI](/pt-BR/docs/Archive/Mozilla/URIs_and_URLs) como argumento para o `href` do link. O URI deve conter pelo menos um único caractere, que pode ser um espaço em branco. (O Internet Explorer criará um link com um valor nulo.)
- `cut`
  - : Remove a seleção atual e a copia para a área de transferência. Quando esse comportamento é ativado, varia entre os navegadores e suas condições evoluíram com o tempo. Verifique a Tabela de [Compatibilidade entre Browsers](#compatibilidade_entre_browsers) para mais detalhes.
- `decreaseFontSize`
  - : Adiciona a tag {{HTMLElement("small")}} ao redor da seleção ou no ponto de inserção. (Não é suportado pelo Internet Explorer.)
- `defaultParagraphSeparator`
  - : Altera o separador de parágrafos usado quando novos parágrafos são criados em regiões de texto editáveis. Veja [Diferenças na geração de marcação](/pt-BR/docs/Web/Guide/HTML/Editable_content#Differences_in_markup_generation) para mais detalhes.
- `delete`
  - : Exclui o conteúdo da seleção atual.
- `enableAbsolutePositionEditor`
  - : Habilita ou desabilita a garra que permite mover elementos absolutamente posicionados. Está desabilitado por padrão no Firefox 63 Beta / Dev Edition ([Erro do Firefox 1449564](https://bugzil.la/1449564))
- `enableInlineTableEditing`
  - : Ativa ou desativa os controles de inserção e exclusão de linhas / colunas da tabela. Está desabilitado por padrão no Firefox 63 Beta / Dev Edition ([Erro do Firefox 1449564](https://bugzil.la/1449564)).
- `enableObjectResizing`
  - : Ativa ou desativa as alças de redimensionamento em imagens, tabelas e elementos absolutamente posicionados e outros objetos redimensionáveis. Está desabilitado por padrão no Firefox 63 Beta / Dev Edition ([Erro do Firefox 1449564](https://bugzil.la/1449564)).
- `fontName`
  - : Altera o nome da fonte para a seleção ou no ponto de inserção. Isso requer uma string com o nome da fonte (como `"Arial"`) como argumento.
- `fontSize`
  - : Altera o tamanho da fonte para a seleção ou no ponto de inserção. Isso requer um número inteiro de `1`-`7` como argumento.
- `foreColor`
  - : Altera a cor da fonte para a seleção ou no ponto de inserção. Isso requer uma string de cor (hexadecimal) como argumento.
- `formatBlock`
  - : Adiciona um elemento de nível de bloco HTML ao redor da linha que contém a seleção atual, substituindo o elemento de bloco que contém a linha, se houver (no Firefox, {{HTMLElement("blockquote")}} é a exceção - envolverá qualquer elemento de bloco que contenha). Requer uma sequência de nome de tag como argumento de valor. Praticamente todos os elementos em nível de bloco podem ser usados. (Internet Explorer e Edge suportam apenas tags de cabeçalho `H1`–`H6`, `ADDRESS`, e `PRE`, que devem estar entre colchetes angulares, como `"<H1>"`.)
- `forwardDelete`
  - : Exclui o caractere depois da posição do [cursor](http://en.wikipedia.org/wiki/Cursor_%28computers%29), idêntico a pressionar a tecla Delete em um teclado do Windows.
- `heading`
  - : Adiciona um elemento de cabeçalho ao redor de uma linha de seleção ou ponto de inserção. Requer uma string com o nome da tag como argumento (ex. `"H1"`, `"H6"`). (Não suportado pelo Internet Explorer e Safari.)
- `hiliteColor`
  - : Altera a cor do plano de fundo para a seleção ou no ponto de inserção. Requer uma sequência de valores de cores como argumento. `useCSS` tem de ser `true` para essa função. (Não é suportado pelo Internet Explorer.)
- `increaseFontSize`
  - : Adiciona uma tag {{HTMLElement("big")}} ao redor da seleção ou no ponto de inserção. (Não é suportado pelo Internet Explorer.)
- `indent`
  - : Recua a linha que contém o ponto de seleção ou inserção. No Firefox, se a seleção abranger várias linhas em diferentes níveis de recuo, apenas as linhas menos recuadas na seleção serão recuadas.
- `insertBrOnReturn`
  - : Controla se a tecla Enter insere um elemento {{HTMLElement("br")}}, ou divide o elemento do bloco atual em dois. (Não é suportado pelo Internet Explorer.)
- `insertHorizontalRule`
  - : Insere um elemento {{HTMLElement("hr")}} no ponto de inserção ou substitui a seleção por ele.
- `insertHTML`
  - : Insere uma string HTML no ponto de inserção (exclui a seleção). Requer uma string HTML válida como argumento. (Não é suportado pelo Internet Explorer.)
- `insertImage`
  - : Insere uma imagem no ponto de inserção (exclui a seleção). Requer uma string de URL para o `src` da imagem como argumento. Os requisitos para essa string são os mesmos que `createLink`.
- `insertOrderedList`
  - : Cria uma [lista ordenada e numerada](/pt-BR/docs/Web/HTML/Element/ol) para a seleção ou no ponto de inserção.
- `insertUnorderedList`
  - : Cria uma [lista não ordenada](/pt-BR/docs/Web/HTML/Element/ul) para a seleção ou no ponto de inserção.
- `insertParagraph`
  - : Insere um [parágrafo](/pt-BR/docs/Web/HTML/Element/p) ao redor da seleção ou da linha atual. (O Internet Explorer insere um parágrafo no ponto de inserção e exclui a seleção.)
- `insertText`
  - : Insere o texto fornecido no ponto de inserção (exclui a seleção).
- `italic`
  - : Ativa / desativa o itálico para a seleção ou no ponto de inserção. (O Internet Explorer usa o elemento {{HTMLElement("em")}} no lugar de {{HTMLElement("i")}}.)
- `justifyCenter`
  - : Centraliza o ponto de seleção ou inserção.
- `justifyFull`
  - : Justifica o ponto de seleção ou inserção.
- `justifyLeft`
  - : Justifica o ponto de seleção ou inserção à esquerda.
- `justifyRight`
  - : Justifica à direita a seleção ou o ponto de inserção.
- `outdent`
  - : Supera a linha que contém o ponto de seleção ou inserção.
- `paste`
  - : Cola o conteúdo da área de transferência no ponto de inserção (substitui a seleção atual). Desativado para conteúdo da web. Veja \[1].
- `redo`
  - : Refaz o comando desfazer anterior.
- `removeFormat`
  - : Remove toda a formatação da seleção atual.
- `selectAll`
  - : Seleciona todo o conteúdo da região editável.
- `strikeThrough`
  - : Ativa / desativa o strikethrough(linha riscada) para a seleção ou no ponto de inserção.
- `subscript`
  - : Ativa / desativa o [subscrito](/pt-BR/docs/Web/HTML/Element/sub) para a seleção ou no ponto de inserção.
- `superscript`
  - : Ativa / desativa o [superscript](/pt-BR/docs/Web/HTML/Element/sup) para a seleção ou no ponto de inserção.
- `underline`
  - : Ativa / desativa o [underline](/pt-BR/docs/Web/HTML/Element/u) para a seleção ou no ponto de inserção.
- `undo`
  - : Desfaz o último comando executado.
- `unlink`
  - : Remove o elemento [âncora](/pt-BR/docs/Web/HTML/Element/a) de um hiperlink selecionado.
- `useCSS` {{Deprecated_inline}}

  - : Alterna o uso de tags HTML ou CSS para a marcação gerada. Requer um booleano `true` / `false` como argumento.

    NOTA: Este argumento é logicamente reverso (ou seja, use `false` para usar CSS, `true` para usar HTML) e não é suportado pelo Internet Explorer. Isso foi preterido em favor do `styleWithCSS`.

- `styleWithCSS`
  - : Substitui o comando `useCSS`. `true` modifica / gera atributos de `style` na marcação, `false` gera elementos de apresentação(html).

## Exemplo

Um exemplo de [como usar a funcionalidade](https://codepen.io/chrisdavidmills/full/gzYjag/) no CodePen.

## Especificações

| Especificação                                                                 | Estado | Comentário |
| ----------------------------------------------------------------------------- | ------ | ---------- |
| [execCommand](<https://w3c.github.io/editing/execCommand.html#execcommand()>) |        |            |

## Compatibilidade com navegadores

{{Compat("api.Document.execCommand")}}

## Veja também

- {{domxref("HTMLElement.contentEditable")}}
- {{domxref("document.designMode")}}
- [Edição de Rich-Text com Mozilla](/pt-BR/docs/Rich-Text_Editing_in_Mozilla)
- [Scribe: documentação sobre inconsitencias entre browsers](https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md) com bugs relacionados a `document.execCommand`.
