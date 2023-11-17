---
title: Quirks Mode e Standards Mode
slug: Web/HTML/Quirks_Mode_and_Standards_Mode
---

Nos velhos dias da web, páginas eram tipicamente escritas em duas versões: Uma para o Netscape Navigator, e outra para o Microsoft Internet Explorer. Quando os padrões web foram criados pelo W3C, navegadores não puderam começar a usá-los imediatamente, pois isto iria quebrar a maior parte dos sites existentes na web. Portanto os navegadores introduziram dois modos para tratar os novos padrões em sites condescendentes diferentemente dos antigos sites legados.

Existem agora três modos usados pelos mecanismos de layout nos navegadores web: "quirks mode" ("modo equivocado"), "almost standards mode" ("modo quase padrão"), e "full standards mode" ("modo de padrões completos"). Em **quirks mode**, o layout emula o comportamento não-padrão do Netscape Navigator 4 e do Internet Explorer 5 para Windows que é requerido para não quebrar o conteúdo existente na Web. No **full standards mode**, o comportamento é (espera-se) o descrito pelas especificações do HTML e CSS. No **almost standards mode**, há apenas um número muito pequeno de peculiaridades não-padrão implementadas.

## Como os navegadores determinam qual modo usar?

Para documentos [HTML](/pt-BR/docs/HTML), os navegadores usam um DOCTYPE no início do documento para decidir se os tratarão em _quirks mode_ ou _standards mode_. Para garantir que sua página use o _full standards mode_, certifique-se que sua página tenha um DOCTYPE como deste exemplo:

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Olá Mundo!</title>
  </head>
  <body></body>
</html>
```

O DOCTYPE mostrado no exemplo, `<!DOCTYPE html>`, é o mais simples possível, e o recomendado pelo HTML5. As versões anteriores do HTML padrão recomendavam outras variantes, mas todos os navegadores existentes hoje irão usar o _full standards mode_ para este DOCTYPE, até mesmo o Internet Explorer 6. Não há razões válidas para usar um DOCTYPE mais complicado. Se você usar outro DOCTYPE, você pode correr o risco de escolher um que acione o almost _standards mode_ ou o _quirks mode_.

Certifique-se de colocar o DOCTYPE logo no início de seu documento HTML. Qualquer coisa antes do DOCTYPE, como um comentário ou uma declaração XML irá acionar o _quirks mode_ no Internet Explorer 9 e versões anteriores.

Em HTML5, o único propósito do DOCTYPE é de ativar o _full standards mode_. Versões mais antigas do padrão HTML deram significado adicional ao DOCTYPE, mas nenhum navegador jamais usou o DOCTYPE para qualquer outra coisa além de alternar entre o _quirks mode_ e o _standards mode_.

Veja também uma descrição detalhada de [quando diferentes navegadores escolhem diferentes modos](http://hsivonen.iki.fi/doctype/).

### XHTML

Se você servir sua página como [XHTML](/pt-BR/docs/XHTML) usando o MIME type `application/xhtml+xml` no cabeçalho HTTP `Content-Type`, você não precisará de um DOCTYPE para ativar o _full standards mode_, já que tais documentos sempre usam este modo. Note porém que servir suas páginas como `application/xhtml+xml` irá fazer com que o Internet Explorer 8 (e anteriores) [mostre uma caixa de diálogo para download](/pt-BR/docs/XHTML#Support) de um formato desconhecido ao invés de exibir sua página, pois a primeira versão do Internet Explorer com suporte ao XHTML é o Internet Explorer 9.

Se você servir conteúdo como XHTML usando o MIME type `text/html`, os navegadores irão lê-lo como HTML, e você precisará colocar o DOCTYPE para usar o _standards mode_.

## Como faço para ver o modo usado?

No Firefox, selecione _Propriedades da página_ no menu de contexto, e procure por _Renderização_.

No Internet Explorer, pressione _F12_, e procure por _Modo de Documento_.

## Quais as diferenças entre os modos?

Veja a [lista de peculiaridades ("quirks")](/pt-BR/docs/Mozilla_Quirks_Mode_Behavior) e "[almost standards mode](/pt-BR/docs/Gecko's_"Almost_Standards"_Mode)" para entender a diferença entre estes modos.
