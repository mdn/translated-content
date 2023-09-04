---
title: <input type="checkbox">
slug: Web/HTML/Element/input/checkbox
---

{{HTMLSidebar}}

{{htmlelement ("input")}} elementos do tipo **`checkbox`** são renderizados por padrão como caixas quadradas que são marcadas (com uma marca de verificação) quando ativadas, como as que você veria em um formulário do governo. A aparência exata depende de da configuração de sistema operacional sobre o qual o navegador está sendo executado. Caixas de seleção permitem que você selecione valores únicos para envio em um formulário (ou não).

{{EmbedInteractiveExample ("pages/tabbed/input-checkbox.html", "tabbed-standard")}}

> **Note:** **Nota** : [Os botões de opção](/pt-BR/docs/Web/HTML/Element/input/radio) são semelhantes às caixas de seleção, mas com uma distinção importante: os botões de opção são agrupados em um conjunto no qual apenas um botão pode ser selecionado por vez, enquanto as caixas de seleção permitem ativar e desativar valores únicos. Quando existem vários controles, os botões de opção permitem que um seja selecionado de todos, enquanto as caixas de seleção permitem que vários valores sejam selecionados.

<table class="properties">
  <tbody>
    <tr>
      <td>
        <strong><a href="#valor">Valor</a></strong>
      </td>
      <td>
        Um {{domxref ("DOMString")}} representando o valor da caixa de
        seleção.
      </td>
    </tr>
    <tr>
      <td><strong>Eventos</strong></td>
      <td>{{event ("change")}} e {{event ("input")}}</td>
    </tr>
    <tr>
      <td><strong>Atributos comuns suportados</strong></td>
      <td><a href="/pt-BR/docs/Web/HTML/Element/input#checked"><code>checked</code></a></td>
    </tr>
    <tr>
      <td><strong>Atributos IDL</strong></td>
      <td><code>checked</code> e <code>value</code></td>
    </tr>
    <tr>
      <td><strong>Métodos</strong></td>
      <td>
        {{domxref ("HTMLInputElement.select", "select ()")}}
      </td>
    </tr>
  </tbody>
</table>

## Valor

Um {{domxref ("DOMString")}} representando o valor da caixa de seleção. Isso nunca é visto no lado do cliente, mas no servidor esse é o `value` atribuído aos dados enviados com o `name` da caixa de seleção. Tome o seguinte exemplo:

```html
<form>
  <div>
    <input
      type="checkbox"
      id="subscribeNews"
      name="subscribe"
      value="newsletter" />
    <label for="subscribeNews"> Subscreva a newsletter? </label>
  </div>
  <div>
    <button type="submit">Subscrever</button>
  </div>
</form>
```

{{EmbedLiveSample ('Value', 600, 60)}}

Neste exemplo, temos um nome `subscribe`e um valor de `newsletter`. Quando o formulário é enviado, o par de nome / valor de dados será `subscribe=newsletter`.

Se o atributo `value` for omitido, o valor padrão da caixa de seleção é `on` , portanto, os dados enviados nesse caso seriam `subscribe=on`.

> **Note:** **Nota** : Se uma caixa de seleção estiver desmarcada quando seu formulário for enviado, não haverá nenhum valor enviado ao servidor para representar seu estado desmarcado (por exemplo `value=unchecked`); o valor não é submetido ao servidor.

## Usando entradas da caixa de seleção

Já cobrimos o uso mais básico de caixas de seleção acima. Vamos agora olhar para os outros recursos e técnicas relacionados à caixa de seleção que você precisa.

### Lidando com várias caixas de seleção

O exemplo que vimos acima continha apenas uma caixa de seleção; em situações do mundo real, você provavelmente encontrará várias caixas de seleção. Se eles não estiverem relacionados, você pode lidar com todos eles separadamente, como mostrado acima. No entanto, se todos estiverem relacionados, as coisas não são tão simples.

Por exemplo, na demonstração a seguir, incluímos várias caixas de seleção para permitir que o usuário selecione seus interesses (veja a versão completa na seção [Examples](#examples)).

```html
<fieldset>
  <legend>Escolha seus interesses</legend>
  <div>
    <input
      type="checkbox"
      id="codificação"
      name="interesse"
      value="codificação" />
    <label for="coding"> Codificação </label>
  </div>
  <div>
    <input type="checkbox" id="música" name="interesse" value="música" />
    <label for="music"> Música </label>
  </div>
</fieldset>
```

{{EmbedLiveSample ('Handling_multiple_checkboxes', 600, 100)}}

Neste exemplo, você verá que atribuímos a cada caixa de seleção o mesmo `name`. Se ambas as opções são verificados e, em seguida, o formulário é enviado, você terá uma série de pares nome / valor apresentado assim: `interest=coding&interest=music`. Quando esses dados atingirem o lado do servidor, você poderá capturá-los como uma matriz de valores relacionados e tratá-los adequadamente - consulte [Lidar com várias caixas de seleção com uma única variável de servidor](http://stackoverflow.com/questions/18745456/handle-multiple-checkboxes-with-a-single-serverside-variable) , por exemplo.

### Caixas de verificação por padrão

Para fazer uma caixa de seleção marcada por padrão, você simplesmente atribui o atributo `checked`. Veja o exemplo abaixo:

```html
<fieldset>
  <legend>Escolha seus interesses</legend>
  <div>
    <input
      type="checkbox"
      id="codificação"
      name="interesse"
      value="codificação"
      checked />
    <label for="coding"> Codificação </label>
  </div>
  <div>
    <input type="checkbox" id="música" name="interesse" value="música" />
    <label for="music"> Música </label>
  </div>
</fieldset>
```

{{EmbedLiveSample ('Checking_boxes_by_default', 600, 100)}}

### Fornecendo uma área de acertos maior para suas caixas de seleção

Nos exemplos acima, você deve ter notado que pode alternar uma caixa de seleção clicando no elemento {{htmlelement ("label")}} associado e na própria caixa de seleção. Esse é um recurso realmente útil de rótulos de formulários HTML que facilitam o clique na opção desejada, especialmente em dispositivos de tela pequena, como smartphones.

Além da acessibilidade, esse é outro bom motivo para configurar corretamente os `<label>`elementos em seus formulários.

### Caixas de seleção de estado indeterminado

Além dos estados marcado e não marcado, há um terceiro estado em que uma caixa de seleção pode estar: **indeterminada**. Este é um estado em que é impossível dizer se o item está ativado ou desativado. Isso é definido usando a propriedade `indeterminate` do objeto {{domxref ("HTMLInputElement")}} via JavaScript (não pode ser definido usando um atributo HTML):

```js
inputInstance.indeterminate = true;
```

Uma caixa de seleção no estado indeterminado tem uma linha horizontal na caixa (parece um hífen ou sinal de menos) em vez de uma marca de verificação na maioria dos navegadores.

Não há muitos casos de uso para essa propriedade. O mais comum é quando uma caixa de seleção está disponível e "possui" um número de subopções (que também são caixas de seleção). Se todas as subopções estiverem marcadas, a caixa de seleção proprietária também será marcada e, se todas elas estiverem desmarcadas, a caixa de seleção proprietária será desmarcada. Se uma ou mais das subopções tiverem um estado diferente das outras, a caixa de seleção proprietária está no estado indeterminado.

Isso pode ser visto no exemplo abaixo (graças aos [CSS Tricks](https://css-tricks.com/indeterminate-checkboxes/) para a inspiração). Neste exemplo, acompanhamos os ingredientes que estamos coletando para uma receita. Quando você marca ou desmarca a caixa de seleção de um ingrediente, uma função JavaScript verifica o número total de ingredientes verificados:

- Se nenhum deles estiver marcado, a caixa de seleção do nome da receita está definida como desmarcada.
- Se um ou dois estiverem marcados, a caixa de seleção do nome da receita está definida como `indeterminate`.
- Se todos os três forem marcados, a caixa de seleção do nome da receita estará definida como `checked`.

Portanto, neste caso, o `indeterminate`estado é usado para afirmar que a coleta dos ingredientes foi iniciada, mas a receita ainda não está completa.

```js
  var overall = document.querySelector ('input[id = "EnchTbl"]');
  var ingredients = document.querySelectorAll ('ul input');

  overall.addEventListener ('clique', function (e) {
    e.preventDefault ();
  });

  for(var i = 0; i <ingredientes.length; i ++) {
    ingredientes [i] .addEventListener ('click', updateDisplay);
  }

  função updateDisplay () {
    var checkedCount = 1;
    for(var i = 0; i <ingredientes.length; i ++) {
      if (ingredientes [i] .checked) {
        checkedCount ++;
      }
    }

    if (checkedCount === ingredientes.length + 1) {
      overall.checked = true;
      overall.indeterminate = false;
    } else if (checkedCount <= ingredients.length + 1 && checkedCount> 1) {
      overall.checked = false;
      overall.indeterminate = true;
    } else {
      overall.checked = false;
      overall.indeterminate = false;
    }
  }
```

{{EmbedGHLiveSample ("área de aprendizado / html / forms / indeterminate-example / index.html", '100%', 200)}}

> **Note:** **Nota** : Se você enviar um formulário com uma caixa de seleção indeterminada, a mesma coisa acontece como se o formulário estivesse desmarcado - nenhum dado é enviado para representar a caixa de seleção.

## Validação

As caixas de seleção suportam [validação](/pt-BR/docs/Web/Guide/HTML/HTML5/Constraint_validation) (oferecidas para todos os [`<input>`](/pt-BR/docs/Web/HTML/Element/input)s). No entanto, a maioria dos {{domxref ("ValidityState")}} s sempre será `false`. Se a caixa de seleção tiver o [`required`](/pt-BR/docs/Web/HTML/Element/input#attr-required) atributo, mas não estiver marcada, ela [`ValidityState.valueMissing`](/pt-BR/docs/Web/API/ValidityState/valueMissing) será `true`.

## Exemplos

O exemplo a seguir é uma versão estendida do exemplo "multiple checkboxes" que vimos acima - tem mais opções padrão, além de uma caixa de seleção "other" que quando marcada faz com que um campo de texto apareça para inserir um valor para a opção "other". Isto é conseguido com um simples bloco de JavaScript. O exemplo também inclui alguns CSS para melhorar o estilo.

### HTML

```html
<form>
  <fieldset>
    <legend>Escolha seus interesses</legend>
    <div>
      <input
        type="checkbox"
        id="codificação"
        name="interesse"
        value="codificação" />
      <label for="coding"> Codificação </label>
    </div>
    <div>
      <input type="checkbox" id="música" name="interesse" value="música" />
      <label for="music"> Música </label>
    </div>
    <div>
      <input type="checkbox" id="arte" name="interesse" value="arte" />
      <label for="art"> Art </label>
    </div>
    <div>
      <input type="checkbox" id="sports" name="interesse" value="esportes" />
      <label for="sports"> Esportes </label>
    </div>
    <div>
      <input type="checkbox" id="cozinhar" name="interesse" value="cozinhar" />
      <label for="cooking"> Cozinhando </label>
    </div>
    <div>
      <input type="checkbox" id="outro" name="interesse" value="outro" />
      <label for="other"> Outro </label>
      <input type="text" id="otherValue" name="outro" />
    </div>
    <div>
      <button type="submit">Enviar formulário</button>
    </div>
  </fieldset>
</form>
```

### CSS

```css
html {
  font-family: sem serifa;
}

form {
  largura: 600px;
  margem: 0 auto;
}

div {
  margem inferior: 10px;
}

fieldset {
  fundo: ciano;
  borda: 5px azul sólido;
}

legend {
  preenchimento: 10px;
  fundo: azul;
  cor: ciano;
}
```

### JavaScript

```js
var otherCheckbox = document.querySelector ('entrada [valor = "outro"]');
var otherText = document.querySelector ('input [id = "otherValue"]');
otherText.style.visibility = 'oculto';

otherCheckbox.onchange = function () {
  if (otherCheckbox.checked) {
    otherText.style.visibility = 'visible';
    otherText.value = '';
  } outro {
    otherText.style.visibility = 'hidden';
  }
};
```

{{EmbedLiveSample ('Examples', '100%', 300)}}

## Especificações

| Especificação                                                                                                             | Status                    | Comente |
| ------------------------------------------------------------------------------------------------------------------------- | ------------------------- | ------- |
|                                                                                                                           |                           |         |
| {{SpecName ('HTML WHATWG', 'forms.html # checkbox-state- (tipo = caixa de seleção)', '&lt;input type = "checkbox"&gt;')}} | {{Spec2 ('HTML WHATWG')}} |         |
| {{SpecName ('HTML5 W3C', 'forms.html # checkbox-state- (tipo = caixa de seleção)', '&lt;input type = "checkbox"&gt;')}}   | {{Spec2 ('HTML5 W3C')}}   |         |

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{HTMLElement ("input")}} e a interface {{domxref ("HTMLInputElement")}} que o implementa.
- Os seletores CSS {{cssxref (": checked")}} e {{cssxref (": indeterminate")}} permitem que você marque as caixas de seleção com base em seu estado atual
