---
title: Examples of web and XML development using the DOM
slug: Web/API/Document_Object_Model/Examples
---

Este capítulo fornece exemplos mais longos de desenvolvimento de Web e XML usando o DOM. Sempre que possível, os exemplos usam APIs, truques e padrões comuns no JavaScript para manipular o objeto de documento.

## Exemplo 1: altura e largura

O exemplo a seguir mostra o uso das propriedades de altura e largura ao lado de imagens de dimensões variáveis:

```html
<!doctype html>
<html lang="en">
  <head>
    <title>width/height example</title>
    <script>
      function init() {
        var arrImages = new Array(3);

        arrImages[0] = document.getElementById("image1");
        arrImages[1] = document.getElementById("image2");
        arrImages[2] = document.getElementById("image3");

        var objOutput = document.getElementById("output");
        var strHtml = "<ul>";

        for (var i = 0; i < arrImages.length; i++) {
          strHtml +=
            "<li>image" +
            (i + 1) +
            ": height=" +
            arrImages[i].height +
            ", width=" +
            arrImages[i].width +
            ", style.height=" +
            arrImages[i].style.height +
            ", style.width=" +
            arrImages[i].style.width +
            "<\/li>";
        }

        strHtml += "<\/ul>";

        objOutput.innerHTML = strHtml;
      }
    </script>
  </head>
  <body onload="init();">
    <p>
      Image 1: no height, width, or style
      <img id="image1" src="http://www.mozilla.org/images/mozilla-banner.gif" />
    </p>

    <p>
      Image 2: height="50", width="500", but no style
      <img
        id="image2"
        src="http://www.mozilla.org/images/mozilla-banner.gif"
        height="50"
        width="500" />
    </p>

    <p>
      Image 3: no height, width, but style="height: 50px; width: 500px;"
      <img
        id="image3"
        src="http://www.mozilla.org/images/mozilla-banner.gif"
        style="height: 50px; width: 500px;" />
    </p>

    <div id="output"></div>
  </body>
</html>
```

## Exemplo 2: Atributos de Imagem

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Modifying an image border</title>

    <script>
      function setBorderWidth(width) {
        document.getElementById("img1").style.borderWidth = width + "px";
      }
    </script>
  </head>

  <body>
    <p>
      <img
        id="img1"
        src="image1.gif"
        style="border: 5px solid green;"
        width="100"
        height="100"
        alt="border test" />
    </p>

    <form name="FormName">
      <input
        type="button"
        value="Make border 20px-wide"
        onclick="setBorderWidth(20);" />
      <input
        type="button"
        value="Make border 5px-wide"
        onclick="setBorderWidth(5);" />
    </form>
  </body>
</html>
```

## Exemplo 3: Manipulando Estilos

Neste exemplo simples, algumas propriedades de estilo básicas de um elemento de parágrafo HTML são acessadas usando o objeto de estilo no elemento e as propriedades de estilo CSS do objeto, que podem ser recuperadas e definidas a partir do DOM. Neste caso, você está manipulando os estilos individuais diretamente. No próximo exemplo (veja Exemplo 4), você pode usar folhas de estilo e suas regras para alterar estilos para documentos inteiros.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Changing color and font-size example</title>

    <script>
      function changeText() {
        var p = document.getElementById("pid");

        p.style.color = "blue";
        p.style.fontSize = "18pt";
      }
    </script>
  </head>
  <body>
    <p id="pid" onclick="window.location.href = 'http://www.cnn.com/';">
      linker
    </p>

    <form>
      <p><input value="rec" type="button" onclick="changeText();" /></p>
    </form>
  </body>
</html>
```

## Exemplo 4: Usando folhas de estilo

A propriedade styleSheets no objeto de documento retorna uma lista das folhas de estilo que foram carregadas nesse documento. Você pode acessar essas folhas de estilo e suas regras individualmente usando os objetos stylesheet, style e CSSRule, como demonstrado neste exemplo, que imprime todos os seletores de regras de estilo para o console.

```js
var ss = document.styleSheets;

for (var i = 0; i < ss.length; i++) {
  for (var j = 0; j < ss[i].cssRules.length; j++) {
    dump(ss[i].cssRules[j].selectorText + "\n");
  }
}
```

Para um documento com uma única folha de estilo na qual as três regras a seguir são definidas:

```css
body {
  background-color: darkblue;
}
p {
  font-face: Arial;
  font-size: 10pt;
  margin-left: 0.125in;
}
#lumpy {
  display: none;
}
```

Este script produz o seguinte:

```
BODY
P
#LUMPY
```

## Exemplo 5: Propagação de Eventos

Este exemplo demonstra como eventos disparar e são tratados no DOM de uma forma muito simples. Quando o corpo deste documento HTML é carregado, um ouvinte de evento é registrado com a linha superior da tabela. O ouvinte de eventos processa o evento executando a função stopEvent, que altera o valor na célula inferior da tabela.

No entanto, stopEvent também chama um método de objeto de evento, {{domxref ("event.stopPropagation")}}, que mantém o evento de borbulhar mais para cima no DOM. Observe que a própria tabela possui um manipulador de eventos {{domxref ("element.onclick", "onclick")}} que deve exibir uma mensagem quando a tabela é clicada. Mas o método stopEvent interrompeu a propagação e, portanto, após a atualização dos dados na tabela, a fase de evento é efetivamente encerrada e uma caixa de alerta é exibida para confirmar isso.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>Event Propagation</title>

    <style>
      #t-daddy {
        border: 1px solid red;
      }
      #c1 {
        background-color: pink;
      }
    </style>

    <script>
      function stopEvent(ev) {
        c2 = document.getElementById("c2");
        c2.innerHTML = "hello";

        // this ought to keep t-daddy from getting the click.
        ev.stopPropagation();
        alert("event propagation halted.");
      }

      function load() {
        elem = document.getElementById("tbl1");
        elem.addEventListener("click", stopEvent, false);
      }
    </script>
  </head>

  <body onload="load();">
    <table id="t-daddy" onclick="alert('hi');">
      <tr id="tbl1">
        <td id="c1">one</td>
      </tr>
      <tr>
        <td id="c2">two</td>
      </tr>
    </table>
  </body>
</html>
```

## Exemplo 6: getComputedStyle

Este exemplo demonstra como o método {{domxref ("window.getComputedStyle")}} pode ser usado para obter os estilos de um elemento que não são definidos usando o atributo de estilo ou com JavaScript (por exemplo, elt.style.backgroundColor = "rgb (173, 216, 230) "). Estes últimos tipos de estilos podem ser recuperados com a propriedade {{domxref ("element.style", "elt.style")}} mais direta, cujas propriedades estão listadas na [Lista de Propriedades do DOM CSS](/pt-BR/docs/Web/CSS/CSS_Reference).

GetComputedStyle() retorna um objeto ComputedCSSStyleDeclaration, cujas propriedades de estilo individuais podem ser referenciadas com o método getPropertyValue() desse objeto, como mostra o seguinte exemplo de documento.

```html
<!doctype html>
<html lang="en">
  <head>
    <title>getComputedStyle example</title>

    <script>
      function cStyles() {
        var RefDiv = document.getElementById("d1");
        var txtHeight = document.getElementById("t1");
        var h_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("height");

        txtHeight.value = h_style;

        var txtWidth = document.getElementById("t2");
        var w_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("width");

        txtWidth.value = w_style;

        var txtBackgroundColor = document.getElementById("t3");
        var b_style = document.defaultView
          .getComputedStyle(RefDiv, null)
          .getPropertyValue("background-color");

        txtBackgroundColor.value = b_style;
      }
    </script>

    <style>
      #d1 {
        margin-left: 10px;
        background-color: rgb(173, 216, 230);
        height: 20px;
        max-width: 20px;
      }
    </style>
  </head>

  <body>
    <div id="d1">&nbsp;</div>

    <form action="">
      <p>
        <button type="button" onclick="cStyles();">getComputedStyle</button>
        height<input id="t1" type="text" value="1" /> max-width<input
          id="t2"
          type="text"
          value="2" />
        bg-color<input id="t3" type="text" value="3" />
      </p>
    </form>
  </body>
</html>
```

## Exemplo 7: Exibindo Propriedades de Evento do Objeto

Este exemplo usa métodos DOM para exibir todas as propriedades do objeto {{domxref ("window.onload")}} {{domxref ("evento")}} e seus valores em uma tabela. Ele também mostra uma técnica útil de usar um laço para iterar sobre as propriedades de um objeto para obter seus valores.

As propriedades dos objetos de evento diferem muito entre os navegadores, o [WHATWG DOM Standard](https://dom.spec.whatwg.org) lista as propriedades padrão, porém muitos navegadores estenderam muito esses valores.

Coloque o seguinte código em um arquivo de texto em branco e carregue-o em uma variedade de navegadores, você ficará surpreso com o número diferente e nomes de propriedades. Você também pode querer adicionar alguns elementos na página e chamar essa função de manipuladores de eventos diferentes.

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Show Event properties</title>

    <style>
      table {
        border-collapse: collapse;
      }
      thead {
        font-weight: bold;
      }
      td {
        padding: 2px 10px 2px 10px;
      }

      .odd {
        background-color: #efdfef;
      }
      .even {
        background-color: #ffffff;
      }
    </style>

    <script>
      function showEventProperties(e) {
        function addCell(row, text) {
          var cell = row.insertCell(-1);
          cell.appendChild(document.createTextNode(text));
        }

        var e = e || window.event;
        document.getElementById("eventType").innerHTML = e.type;

        var table = document.createElement("table");
        var thead = table.createTHead();
        var row = thead.insertRow(-1);
        var lableList = ["#", "Property", "Value"];
        var len = lableList.length;

        for (var i = 0; i < len; i++) {
          addCell(row, lableList[i]);
        }

        var tbody = document.createElement("tbody");
        table.appendChild(tbody);

        for (var p in e) {
          row = tbody.insertRow(-1);
          row.className = row.rowIndex % 2 ? "odd" : "even";
          addCell(row, row.rowIndex);
          addCell(row, p);
          addCell(row, e[p]);
        }

        document.body.appendChild(table);
      }

      window.onload = function (event) {
        showEventProperties(event);
      };
    </script>
  </head>

  <body>
    <h1>Properties of the DOM <span id="eventType"></span> Event Object</h1>
  </body>
</html>
```

## Exemplo 8: Usando a interface de tabela do DOM

A interface DOM HTMLTableElement fornece alguns métodos de conveniência para criar e manipular tabelas. Dois métodos usados com freqüência são {{domxref ("HTMLTableElement.insertRow")}} e {{domxref ("tableRow.insertCell")}}.

Para adicionar uma linha e algumas células a uma tabela existente:

```html
<table id="table0">
  <tr>
    <td>Row 0 Cell 0</td>
    <td>Row 0 Cell 1</td>
  </tr>
</table>

<script>
  var table = document.getElementById("table0");
  var row = table.insertRow(-1);
  var cell, text;

  for (var i = 0; i < 2; i++) {
    cell = row.insertCell(-1);
    text = "Row " + row.rowIndex + " Cell " + i;
    cell.appendChild(document.createTextNode(text));
  }
</script>
```

### Notas

- A propriedade {{domxref ("element.innerHTML", "innerHTML")}} de uma tabela nunca deve ser usada para modificar uma tabela, embora você possa usá-la para escrever uma tabela inteira ou o conteúdo de uma célula.
- Se os métodos DOM Core {{domxref ("document.createElement")}} e {{domxref ("Node.appendChild")}} são usados para criar linhas e células, o IE requer que eles sejam anexados a um elemento tbody, enquanto outros Os navegadores permitirão acrescentar a um elemento da tabela (as linhas serão adicionadas ao último elemento tbody).
- Há uma série de outros métodos convenientes pertencentes à [tabela de interface](/pt-BR/docs/) que podem ser usados para criar e modificar tabelas.

## Subnav

- [DOM Reference](/pt-BR/docs/Web/API/Document_Object_Model)
- [Introduction to the DOM](/pt-BR/docs/Web/API/Document_Object_Model/Introduction)
- [Events and the DOM](/pt-BR/docs/Web/API/Document_Object_Model/Events)
- [Examples](/pt-BR/docs/Web/API/Document_Object_Model/Examples)
