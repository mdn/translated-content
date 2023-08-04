---
title: Element.innerHTML
slug: Web/API/Element/innerHTML
---

{{APIRef("DOM")}}

A propriedade **`Element.innerHTML`** define ou obtém a sintaxe HTML ou XML descrevendo os elementos descendentes.

> **Nota:**Se um nó {{HTMLElement("div")}}, {{HTMLElement("span")}}, ou {{HTMLElement("noembed")}} tem um nó filho que inclui os caracteres (&), (<), ou (>), o innerHTML retornará esses caracteres como \&amp, \&lt e \&gt respectivamente. Utilize {{domxref("Node.textContent")}} para recuperar uma cópia correta do conteúdo desses nós de texto.

## Sintaxe

```
var content = element.innerHTML;
```

No retorno, `content` contém o código HTML serializado descrevendo todos os descendentes dos elementos.

```
 element.innerHTML = content;
```

Remove todos os elementos filhos, analisa o conteúdo da string e atribui os nós resultantes como filhos do elemento.

### Exceptions

- **`SyntaxError`**
  - : Foi feita uma tentativa de definir o valor de um `innerHTML` usando uma string que não é HTML.
- `NoModificationAllowedError`
  - : Foi feita uma tentativa de inserir HTML dentro de um nó no qual o pai é um {{domxref("Document")}}.

## Exemplo

```html
<html>
<head></head>
<body>

<div id="txt">
  <script     id="txt0"> x=0 </script>
    <noembed    id="txt1"> 1   </noembed>
    <noframes   id="txt2"> 2   </noframes>
    <noscript   id="txt3"> 3   </noscript>
    <div        id="txt4"> 4   </div>
    <div>
      <noscript id="txt5"> 5   </noscript>
    </div>
    <span       id="txt6"> 6   </span>
  </div>

  <div id="innerHTMLtxt"></div>
<div id="textContenttxt"><div>

<script>
for (i = 0; i < 7; i++) {
    x = "txt" + i;
    document.getElementById(x).firstChild.nodeValue = '&<>';
}

document.getElementById("innerHTMLtxt").textContent = document.getElementById("txt").innerHTML
document.getElementById("textContenttxt").textContent = document.getElementById("txt").textContent
</script>

<body>
</html>
```

```js
// HTML:
// <div id="d"><p>Content</p>
// <p>Further Elaborated</p>
// </div>

const d = document.getElementById("d");
dump(d.innerHTML);

//  a string "<p>Content</p><p>Further Elaborated</p>"
// é exibida na janela do console
```

## Notas

Essa propriedade fornece uma forma simples de trocar completamente o conteúdo de um elemento. Por exemplo, o conteúdo inteiro do elemento body pode ser excluído ao fazer:

```js
// Troca o conteúdo de body por uma string vazia.
document.body.innerHTML = "";
```

A propriedade `innerHTML` de vários tipos de elementos — incluindo {{HTMLElement("body")}} ou {{HTMLElement("html")}} — pode ser retornada ou trocada. Essa também pode ser usada para ver o código fonte de uma página que foi modificada dinamicamente:

```js
// Copie e cole este código, em uma única linha, na barra de endereços
javascript: "<pre>" +
  document.documentElement.innerHTML.replace(/</g, "&lt;") +
  "</pre>";
```

Essa propriedade foi implementada inicialmente pelos navegadores web, e então especificada pela WHATWG e W3C no HTML5. Implementações antigas talvez não tenham implementado-a exatamente da mesma forma. Por exemplo, quando um texto é inserido em uma caixa de texto, o Internet Explorer muda o valor do atributo innerHTML dessa entrada, mas os navegadores Gecko não.

### Considerações de segurança

Não é incomum ver a propriedade innerHTML usada para inserir texto em uma página web. Isso vem com um risco de segurança.

```js
var name = "John";

// presumindo que el é um elemento DOM HTML
el.innerHTML = name; // inofensivo, nesse caso

// ...

name = "<script>alert('I am John in an annoying alert!')</script>";
el.innerHTML = name; // inofensivo, nesse caso
```

Embora isso talvez se pareça como um ataque [cross-site scripting](https://pt.wikipedia.org/wiki/cross-site_scripting), o resultado é inofensivo. O HTML5 especifica que uma tag {{HTMLElement("script")}}, inserida via `innerHTML`, [não deve ser executada](https://www.w3.org/TR/2008/WD-html5-20080610/dom.html#innerhtml0).

No entanto, há formas de se executar JavaScript sem usar elementos {{HTMLElement("script")}}, por isso ainda há um risco de segurança sempre que você usa `innerHTML` para definir uma string sobre a qual você não tem controle. Por exemplo:

```js
const name = "<img src='x' onerror='alert(1)'>";
el.innerHTML = name; // exibe uma caixa de alerta
```

Por essa razão, recomenda-se que você não use o `innerHTML` quando estiver inserindo texto puro; como alternativa, utilize {{domxref("node.textContent")}}. Isso não interpreta o conteúdo passado como HTML, mas em vez disso, insere-o como texto puro.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [`innerDOM`](http://innerdom.sourceforge.net/) - Para aqueles que desejam aderir aos padrões, aqui oferece um conjunto de funções JavaScript para serializar ou analisar XML, de modo a configurar o conteúdo do elemento definido como uma string(s) através do DOM ou recuperando o conteúdo do elemento obtido a partir do DOM como uma string.
- [insertAdjacentHTML](/pt-BR/docs/DOM/Element.insertAdjacentHTML) - Uma alternativa para o innerHTML, permitindo você anexar um novo HTML, ao invés de trocá-la.
- [jssaxparser](http://code.google.com/p/jssaxparser/) - Uma solução mais robusta (embora mais pesada) do innerDOM (suporta análise com namespaces, atributos com aspas simples, seções CDATA, etc.), esse é o analisador SAX2 quando usado com seu manipulador de conteúdo DOM. (Oferece String para DOM; DOM para String é [significantemente mais fácil](http://code.assembla.com/brettz9/subversion/nodes/DOMToString))
- Considerações de eficiência: Em [quirksmode](http://www.quirksmode.org/dom/innerhtml.html)
