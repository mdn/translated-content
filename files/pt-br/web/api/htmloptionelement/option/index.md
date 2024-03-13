---
title: Option()
slug: Web/API/HTMLOptionElement/Option
---

{{APIRef("HTML DOM")}}

O construtor **`Option()`** cria novos {{domxref("HTMLOptionElement")}}.

## Sintaxe

```
var optionElementReference = new Option(text, value, defaultSelected, selected);
```

### Parâmetros

- `text` {{optional_inline}}
  - : Um {{domxref("DOMString")}} representa o conteúdo do elemento, o texto mostrado na tela. Se o texto não é especificado, o texto padrão "" (texto vazio) é utilizado.
- `value` {{optional_inline}}
  - : Um {{domxref("DOMString")}} representa o valor do {{domxref("HTMLOptionElement")}}, i.e. o valor do elemento {{htmlelement("option")}}. Se não especificado, o texto é usado como valor, e.g. o elemento {{htmlelement("select")}} tem seu valor associado quando o formulário é submetido ao servidor.
- `defaultSelected` {{optional_inline}}
  - : Um {{domxref("Boolean")}} é usado para adicionar o atributo **selected**, para que este {{htmlelement("option")}} seja mostrado como selecionado no elemento {{htmlelement("select")}} quando a página for carregada. Se não especificado, o estado padrão é não selecionado. Observe que o **defaultSelected = true** não define a opção como o valor selecionado do elemento {{htmlelement("select")}}.
- `selected` {{optional_inline}}
  - : Um {{domxref("Boolean")}} é usado para colocar elemento {{htmlelement("option")}} no estado de selecionado; como padrão do elemento tem o estado de não selecionado. Se omitido, mesmo que o parâmetro **defaultSelected** for verdadeiro, o elemento {{htmlelement("option")}} não é selecionado.

## Exemplos

### Adicionando novas tags options

```js
/* assumindo que temos este HTML
<select id='s'>

</select>
*/

var s = document.getElementById("s");
var options = [Quatro, Cinco, Seis];

options.forEach(function (elemento, chave) {
  s.appendChild(new Option(elemento, chave));
});

/* Resultado
<select id='s'>
    <option value="0">Quatro</option>
    <option value="1">Cinco</option>
    <option value="2">Seis</option>
</select> */
```

### Adicionando options com diferentes parâmetros

```js
/* assumindo que temos este HTML
<select id="s">
    <option>Primeiro</option>
    <option>Segundo</option>
    <option>Terceiro</option>
</select>
*/

var s = document.getElementById("s");
var options = ["zero", "um", "dois"];

options.forEach(function (elemento, chave) {
  if (elemento == "zero") {
    s[s.options.length] = new Option(elemento, s.options.length, false, false);
  }
  if (elemento == "um") {
    s[s.options.length] = new Option(elemento, s.options.length, true, false); // Adicionando atributo "selected"
  }
  if (elemento == "dois") {
    s[s.options.length] = new Option(elemento, s.options.length, false, true); // Apenas irá selecionar a opção na visualização
  }
});

/* Resultado
<select id="s">
  <option value="0">zero</option>
  <option value="1" selected="">um</option>
  <option value="2">dois</option> // O usuário verá esta opção selecionada
</select>
*/
```

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
