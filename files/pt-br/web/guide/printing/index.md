---
title: Printing
slug: Web/Guide/Printing
---

Pode haver momentos em que seu site ou aplicação queira melhorar a experiência do usuário quando imprime um conteúdo. Existem diversos cenários possíveis:

- Você deseja ajustar o layout para tirar vantagem do tamanho e forma do papel.
- Você deseja usar diferentes estilos para melhorar a aparência do seu conteúdo no papel.
- Você deseja aumentar a resolução das imagens para um melhor resultado.
- Você quer ajustar a experiência do usuário de impressão, como apresentar uma versão especialmente formatada de seu conteúdo antes da impressão começar.

Podem haver outros casos onde você precisa gerenciar o processo de impressão, mas estes são alguns dos cenários mais comuns. Este artigo ensina dicas e técnicas para te ajudar a imprimir conteudo web de uma melhor forma.

## Usando uma folha de estilos para impressão

Adicione o seguinte código dentro da tag {{HTMLElement("head")}}.

```
<link href="/path/to/print.css" media="print" rel="stylesheet" />
```

## Usando media queries para melhorar o layout

## Detectando requisições de impressão

Alguns navegadores (incluindo o Firefox 6 e versões mais antigas do Internet Explorer) enviam eventos `beforeprint` e `afterprint` para permitir que o conteúdo determine quando a impressão deve ocorrer. Você pode usar isto para ajustar a interface presente durante a impressão (como a exibição ou ocultação de elementos de interface do usuário durante o processo de impressão).

> **Nota:** Você também pode usar [`window.onbeforeprint`](/pt-BR/docs/DOM/window.onbeforeprint) e [`window.onafterprint`](/pt-BR/docs/DOM/window.onafterprint) para atribuir manipuladores para esses eventos, mas usando {{domxref("EventTarget.addEventListener()")}} é preferível.

## Exemplos

Aqui estão alguns exemplos comuns.

#### Abrir e fechar automaticamente uma janela popup quando finalizado

If you want to be able to automatically close a [popup window](/pt-BR/docs/DOM/window.open) (for example, the printer-friendly version of a document) after the user prints its contents, you can use code like this:

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>JavaScript Window Close Example</title>
    <script type="text/javascript">
      function popuponclick() {
        my_window = window.open(
          "",
          "mywindow",
          "status=1,width=350,height=150",
        );
        my_window.document.write("<html><head><title>Print Me</title></head>");
        my_window.document.write('<body onafterprint="self.close()">');
        my_window.document.write(
          "<p>When you print this window, it will close afterward.</p>",
        );
        my_window.document.write("</body></html>");
      }
    </script>
  </head>
  <body>
    <p>
      To try out the <code>afterprint</code> event, click the link below to open
      the window to print. You can also try changing the code to use
      <code>beforeprint</code> to see the difference.
    </p>
    <p><a href="javascript: popuponclick()">Open Popup Window</a></p>
  </body>
</html>
```

[Ver Exemplo](/samples/domref/printevents.html)

### Imprimir uma página externa sem abri-la

If you want to be able to print an external page without opening it, you can utilize a hidden {{HTMLElement("iframe")}} (see: [HTMLIFrameElement](/pt-BR/docs/DOM/HTMLIFrameElement)), automatically removing it after the user prints its contents. The following is a possible example which will print a file named `externalPage.html`:

```html
<!doctype html>
<html>
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <title>MDN Example</title>
    <script type="text/javascript">
      function closePrint() {
        document.body.removeChild(this.__container__);
      }

      function setPrint() {
        this.contentWindow.__container__ = this;
        this.contentWindow.onbeforeunload = closePrint;
        this.contentWindow.onafterprint = closePrint;
        this.contentWindow.focus(); // Required for IE
        this.contentWindow.print();
      }

      function printPage(sURL) {
        var oHiddFrame = document.createElement("iframe");
        oHiddFrame.onload = setPrint;
        oHiddFrame.style.position = "fixed";
        oHiddFrame.style.right = "0";
        oHiddFrame.style.bottom = "0";
        oHiddFrame.style.width = "0";
        oHiddFrame.style.height = "0";
        oHiddFrame.style.border = "0";
        oHiddFrame.src = sURL;
        document.body.appendChild(oHiddFrame);
      }
    </script>
  </head>

  <body>
    <p>
      <span
        onclick="printPage('externalPage.html');"
        style="cursor:pointer;text-decoration:underline;color:#0000ff;"
        >Print external page!</span
      >
    </p>
  </body>
</html>
```

> **Nota:** Older versions of Internet Explorer cannot print the contents of a hidden {{HTMLElement("iframe")}}.

## Veja também

- [`window.print`](/pt-BR/docs/DOM/window.print)
- [`window.onbeforeprint`](/pt-BR/docs/DOM/window.onbeforeprint)
- [`window.onafterprint`](/pt-BR/docs/DOM/window.onafterprint)
- [Media queries](/pt-BR/docs/CSS/Media_queries)
- {{cssxref("@media")}}
