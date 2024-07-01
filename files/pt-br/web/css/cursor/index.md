---
title: cursor
slug: Web/CSS/cursor
---

{{CSSRef}}

## Sumário

A propriedade CSS **cursor** especifica o cursor do mouse mostrado quando o ponteiro do mouse está sobre um elemento.

{{EmbedInteractiveExample("pages/css/cursor.html")}}

## Sintaxe

```css
/* Keywords */
cursor: pointer;
cursor: auto;

/* Usando URL e cordenadas */
cursor:
  url(cursor1.png) 4 12,
  auto;
cursor:
  url(cursor2.png) 2 2,
  pointer;

/* Valores globais */
cursor: inherit;
cursor: initial;
cursor: unset;
```

### Valores

- `<uri>` {{experimental_inline}}
  - : Uma url(...) ou uma lista de url(...) separada por vírgula, apontando para uma arquivo de imagem. Mais que uma {{cssxref("&lt;uri&gt;")}} pode ser fornecida como fallback, em caso de alguns tipos de imagem não ser suportado. Um fallback não-URL (um ou mais dos outros valores) **deve** estar no final da lista de fallbacks.
- `<x>` `<y>` {{experimental_inline}}
  - : Coordenadas x e y opcionais. Dois números não-negativos, sem unidade e menores que 32.
- `Keyword`

  - : **Mova o mouse sobre os valores para testar:**

    <table class="standard-table">
      <tbody>
        <tr>
          <th>Categoria</th>
          <th style="width: 7.5em">Valor CSS</th>
          <th>Actual</th>
          <th>Descrição</th>
        </tr>
        <tr style="cursor: auto">
          <td rowspan="3">General</td>
          <td><code>auto</code></td>
          <td></td>
          <td>
            O brower determina o cursor para ser exibido baseado no contexto atual.
          </td>
        </tr>
        <tr style="cursor: default">
          <td><code>default</code></td>
          <td><img alt="default.gif" src="default.gif" /></td>
          <td>Cursor padrão, tipicamente uma seta.</td>
        </tr>
        <tr style="cursor: none">
          <td><code>none</code></td>
          <td></td>
          <td>Nenhum cursor é mostrado.</td>
        </tr>
        <tr style="cursor: context-menu">
          <td rowspan="5" style="cursor: auto">Links &#x26; status</td>
          <td><code>context-menu</code></td>
          <td><img alt="context-menu.png" src="context-menu.png" /></td>
          <td>
            Um menu de contexto está disponível sob o cursor.<br />Somente IE 10 e
            superior implementou esta propriedade no Windows:
            [Erro do Firefox 258960](https://bugzil.la/258960).
          </td>
        </tr>
        <tr style="cursor: help">
          <td><code>help</code></td>
          <td><img alt="help.gif" src="help.gif" /></td>
          <td>Indicando que ajuda está disponível.</td>
        </tr>
        <tr style="cursor: pointer">
          <td><code>pointer</code></td>
          <td><img alt="pointer.gif" src="pointer.gif" /></td>
          <td>
            E.g. Usado quando pairando o cursor sobre links, tipicamente uma mão.
          </td>
        </tr>
        <tr style="cursor: progress">
          <td><code>progress</code></td>
          <td><img alt="progress.gif" src="progress.gif" /></td>
          <td>
            O programa está processando em segundo plano, mas o o usuário ainda pode
            interagir com a interface (diferente de <code>wait</code>).
          </td>
        </tr>
        <tr style="cursor: wait">
          <td><code>wait</code></td>
          <td><img alt="wait.gif" src="wait.gif" /></td>
          <td>O programa está ocupado (às vezes uma ampulheta ou relógio).</td>
        </tr>
        <tr style="cursor: cell">
          <td rowspan="4" style="cursor: auto">Seleção</td>
          <td><code>cell</code></td>
          <td><img alt="cell.gif" src="cell.gif" /></td>
          <td>Indica que a célula pode ser selecionada.</td>
        </tr>
        <tr style="cursor: crosshair">
          <td><code>crosshair</code></td>
          <td><img alt="crosshair.gif" src="crosshair.gif" /></td>
          <td>
            Cursor de cruz, normalmente usado para indicar seleção em uma imagem
            bitmap.
          </td>
        </tr>
        <tr style="cursor: text">
          <td><code>text</code></td>
          <td><img alt="text.gif" class="default" src="text.gif" /></td>
          <td>
            Indica que o texto pode ser selecionado, normalmente um I maiúsculo.
          </td>
        </tr>
        <tr style="cursor: vertical-text">
          <td><code>vertical-text</code></td>
          <td><img alt="vertical-text.gif" src="vertical-text.gif" /></td>
          <td>
            Indica que o texto vertical pode ser selecionado, normalmente um I
            maiúsculo virado de lado.
          </td>
        </tr>
        <tr style="cursor: alias">
          <td rowspan="5" style="cursor: auto">Arrastar e soltar</td>
          <td><code>alias</code></td>
          <td><img alt="alias.gif" src="alias.gif" /></td>
          <td>Indicando que um alias ou atalho deve ser criado.</td>
        </tr>
        <tr style="cursor: copy">
          <td><code>copy</code></td>
          <td><img alt="copy.gif" class="default" src="copy.gif" /></td>
          <td>Indica que algo será copiado.</td>
        </tr>
        <tr style="cursor: move">
          <td><code>move</code></td>
          <td><img alt="move.gif" src="move.gif" /></td>
          <td>O item sob o mouse pode ser movido.</td>
        </tr>
        <tr style="cursor: no-drop">
          <td><code>no-drop</code></td>
          <td><img alt="no-drop.gif" class="lwrap" src="no-drop.gif" /></td>
          <td>
            Cursor mostrando que não é permitido largar um elemento no local
            atual.<br />[Erro do Firefox 275173](https://bugzil.la/275173)no Windows e no Mac OS X, "sem
            soltar é o mesmo que não permitido".
          </td>
        </tr>
        <tr style="cursor: not-allowed">
          <td><code>not-allowed</code></td>
          <td><img alt="not-allowed.gif" src="not-allowed.gif" /></td>
          <td>Cursor mostrando que uma ação não pode ser efetuada.</td>
        </tr>
        <tr style="cursor: all-scroll">
          <td rowspan="15" style="cursor: auto">Resize &#x26; scrolling</td>
          <td><code>all-scroll</code></td>
          <td><img alt="all-scroll.gif" src="all-scroll.gif" /></td>
          <td>
            Cursor showing that something can be scrolled in any direction
            (panned).<br />[Erro do Firefox 275174](https://bugzil.la/275174) on Windows, "<em>all-scroll</em>
            is the same as <em>move</em>".
          </td>
        </tr>
        <tr style="cursor: col-resize">
          <td><code>col-resize</code></td>
          <td><img alt="col-resize.gif" src="col-resize.gif" /></td>
          <td>
            The item/column can be resized horizontally. Often rendered as arrows
            pointing left and right with a vertical bar separating.
          </td>
        </tr>
        <tr style="cursor: row-resize">
          <td><code>row-resize</code></td>
          <td><img alt="row-resize.gif" src="row-resize.gif" /></td>
          <td>
            The item/row can be resized vertically. Often rendered as arrows
            pointing up and down with a horizontal bar separating them.
          </td>
        </tr>
        <tr style="cursor: n-resize">
          <td><code>n-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the top cursor"
              src="n-resize.gif"
              style="
                border-style: solid;
                border-width: 0px;
                height: 26px;
                width: 26px;
              "
            />
          </td>
          <td rowspan="8" style="cursor: auto">
            Some edge is to be moved. For example, the <code>se-resize</code> cursor
            is used when the movement starts from the <em>south-east</em> corner of
            the box.
          </td>
        </tr>
        <tr style="cursor: e-resize">
          <td><code>e-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the right cursor"
              src="e-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: s-resize">
          <td><code>s-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the bottom cursor "
              src="s-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: w-resize">
          <td><code>w-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the left cursor"
              src="w-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ne-resize">
          <td><code>ne-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the top-right corner cursor"
              src="ne-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: nw-resize">
          <td><code>nw-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the top-left corner cursor"
              src="nw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: se-resize">
          <td><code>se-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the bottom-right corner cursor"
              src="se-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: sw-resize">
          <td><code>sw-resize</code></td>
          <td>
            <img
              alt="Example of a resize towards the bottom-left corner cursor"
              src="sw-resize.gif"
            />
          </td>
        </tr>
        <tr style="cursor: ew-resize">
          <td><code>ew-resize</code></td>
          <td><img alt="3-resize.gif" class="default" src="3-resize.gif" /></td>
          <td rowspan="4" style="cursor: auto">
            Indicates a bidirectional resize cursor.
          </td>
        </tr>
        <tr style="cursor: ns-resize">
          <td><code>ns-resize</code></td>
          <td><img alt="6-resize.gif" class="default" src="6-resize.gif" /></td>
        </tr>
        <tr style="cursor: nesw-resize">
          <td><code>nesw-resize</code></td>
          <td><img alt="1-resize.gif" class="default" src="1-resize.gif" /></td>
        </tr>
        <tr style="cursor: nwse-resize">
          <td><code>nwse-resize</code></td>
          <td><img alt="4-resize.gif" class="default" src="4-resize.gif" /></td>
        </tr>
        <tr>
          <td rowspan="2">Zoom</td>
          <td><code>zoom-in</code></td>
          <td><img alt="zoom-in.gif" class="default" src="zoom-in.gif" /></td>
          <td rowspan="2" style="cursor: auto">
            <p>Indicates that something can be zoomed (magnified) in or out.</p>
          </td>
        </tr>
        <tr>
          <td><code>zoom-out</code></td>
          <td><img alt="zoom-out.gif" class="default" src="zoom-out.gif" /></td>
        </tr>
        <tr id="grab">
          <td rowspan="2">Grab</td>
          <td><code>grab</code></td>
          <td><img alt="grab.gif" class="default" src="grab.gif" /></td>
          <td rowspan="2" style="cursor: auto">
            <p>Indicates that something can be grabbed (dragged to be moved).</p>
          </td>
        </tr>
        <tr>
          <td><code>grabbing</code></td>
          <td><img alt="grabbing.gif" class="default" src="grabbing.gif" /></td>
        </tr>
      </tbody>
    </table>

### Sintaxe formal

{{csssyntax}}

## Exemplos

```css
.foo {
  cursor: crosshair;
}

/* use velor prefixado se "zoom-in" não for suportado */
.bar {
  cursor: -webkit-zoom-in;
  cursor: zoom-in;
}

/* valor padrão como fallback para url() deve ser fornecido (não funciona sem) */
.baz {
  cursor: url(hyper.cur), auto;
}
```

## Especificações

{{ Specifications }}

## Definição formal

{{ cssinfo }}

## Compatibilidade

{{Compat}}

## Veja também

- {{cssxref("&lt;uri&gt;")}}
- {{cssxref("pointer-events")}}
