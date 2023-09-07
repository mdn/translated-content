---
title: <input type="range">
slug: Web/HTML/Element/input/range
---

{{HTMLSidebar}}

{{HTMLElement("input")}} elementos do tipo **`"range"`** deixam o usuário especificar um valor numérico que não deve ser inferior a um determinado valor, e não mais do que um valor máximo especificado. O valor preciso, no entanto, não é considerado importante. Este geralmente é representado por um controle deslizante ou o mesmo tipo de controle de "number" input. Como este tipo de elemento é impreciso, não deve ser usado a menos que o valor exato do controle não seja importante.

```html
<input type="range" />
```

{{EmbedLiveSample("summary_sample1", 600, 40)}}

Se o navegador do usuário não suportar o tipo `"range"`, este será tratado como um input do tipo [`"text"`](/pt-BR/docs/Web/HTML/Element/input/text).

<table class="properties">
  <tbody>
    <tr>
      <td>
        <strong><a href="#value">Value</a></strong>
      </td>
      <td>
        Uma {{domxref("DOMString")}} contendo a a string que representa
        o valor numérico escolhido; use
        {{domxref("HTMLInputElement.valueAsNumber", "valueAsNumber")}}
        para pegar o valor como um {{jsxref("Number")}}.
      </td>
    </tr>
    <tr>
      <td><strong>Events</strong></td>
      <td>{{event("change")}} e {{event("input")}}</td>
    </tr>
    <tr>
      <td><strong>Supported Common Attributes</strong></td>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/pt-BR/docs/Web/HTML/Element/input#list"><code>list</code></a>,
        <a href="/pt-BR/docs/Web/HTML/Element/input#max"><code>max</code></a>,
        <a href="/pt-BR/docs/Web/HTML/Element/input#min"><code>min</code></a>, e
        <a href="/pt-BR/docs/Web/HTML/Element/input#step"><code>step</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>IDL attributes</strong></td>
      <td>
        <code>list</code>, <code>value</code>, e <code>valueAsNumber</code>
      </td>
    </tr>
    <tr>
      <td><strong>Methods</strong></td>
      <td>
        {{domxref("HTMLInputElement.stepDown", "stepDown()")}}
        e {{domxref("HTMLInputElement.stepUp", "stepUp()")}}
      </td>
    </tr>
  </tbody>
</table>

## Value

O atributo [`value`](/pt-BR/docs/Web/HTML/Element/input#value) contém uma {{domxref("DOMString")}} que conte uma representação dos números selecionados em string. O valor nunca é uma string vazia (`""`). O valor padrão está entre o mínimo e o máximo especificados, a menos que o valor máximo seja menor que o mínimo, caso em que o padrão é definido como o atributo de valor mínimo. O algoritmo que determina o valor padrão é:

```js
defaultValue =
  rangeElem.max < rangeElem.min
    ? rangeElem.min
    : rangeElem.min + (rangeElem.max - rangeElem.min) / 2;
```

Se for feito uma tentativa para definir como máximo um valor inferior ao mínimo, então este é definido como mínimo. Da mesma forma, uma tentativa de definir um valor maior do que o máximo sendo configurado então para o máximo.

## Usando range inputs

Equanto o tipo `"number"` permite aos usuários inserir um número com restrições opcionais forçando-o a digitar um valor entre o valor mínimo e máximo, ele requer que digitem um valor específico. A input de tipo permite ao usuário que coloque um valor sem que preocupe ou precise saber o valor numério específico.

Alguns exemplos de situações que este tipo são comumente usados são:

- Controle de audio como volume, equilíbrio e ou controle de filtros.
- Controle de configuração de cores como canais de cores, transparência, brilho, etc.
- Controle de configuração de jogos, como dificuldade, distância de visibilidade, tamanho do mundo, entre outros.
- Comprimento de senha gerada por gerenciadores de senha.

Como regra geral, se o usuário tiver maior probabilidade de se interessar por porcentagens entre distâncias mínimas e máximas do que por um número real, este tipo de input é um forte candidato. Por exemplo, no caso de um controle de volume estéreo, "colocar o controlador no meio" em vez de "definir o volume como 0.5".

### Especificando o mínimo e o máximo

Por padrão, o mínimo é 0 e o máximo é 100. Se não é o que você precisa, voce pode facilmente especificar limites diferentes alterando os valores dos atributos [`min`](/pt-BR/docs/Web/HTML/Element/input#min) e/ou [`max`](/pt-BR/docs/Web/HTML/Element/input#max). Este pode ser um valor inteiro.

Por exemplo, para pedir ao usuário um valor entre -10 e 10, você pode usar:

```html
<input type="range" min="-10" max="10" />
```

{{EmbedLiveSample("Specifying_the_minimum_and_maximum", 600, 40)}}

### Definindo a escala entre valores

Por padrão, a escala entre o mínimo e o máximo é 1, significando que este sempre é um valor inteiro. você pode alterar o atributo [`step`](/pt-BR/docs/Web/HTML/Global_attributes#step) para controlar esta escala. Por exemplo, se você precisa de um valor de duas casas decimais entre os valores 5 e 10, voce deve definir o valor de `step` para 0.01:

```html
<input type="range" min="5" max="10" step="0.01" />
```

{{EmbedLiveSample("Granularity_sample1", 600, 40)}}

Se você deseja aceitar um valor independente das casas decimais, voce pode especificar o valor `"any"` para o atributo [`step`](/pt-BR/docs/Web/HTML/Element/input#step):

```html
<input type="range" min="0" max="3.14" step="any" />
```

{{EmbedLiveSample("Granularity_sample2", 600, 40)}}

Este exemplo permite ao usuário selecionar qualquer valor entre 0 e π sem qualquer restrição na parte fracionada do valor selecionado.

### Adicionando marcas de mapeamento e etiquetas

As especificações do HTML oferece aos navegadores uma certa flexibilidade sobre como apresentar o controle deslizante. Em parte alguma esta flexibilidade é mais aparente do que no mapeamento de marcas e, menos ainda, na etiqueta. A especificação descreve como adicionar pontos personalizados ao controle usando o atributo [`list`](/pt-BR/docs/Web/HTML/Element/input#list) e o elemento {{HTMLElement("datalist")}} , mas não tem requisitos nem padronizações para marcações ou mesmo pontos ao longo do controle deslizante.

#### Modelo de controle do range

Uma vez que os navegadores têm essa flexibilidade e, até à data, nenhum suporte a todos os recursos que o HTML define para controles de alcance, aqui estão alguns modelos para mostrar o que você pode obter no MacOS em um navegador que os suporta.

##### Um controle sem o atributo

Isto é o que você obtem se não especificar o atributo [`list`](/pt-BR/docs/Web/HTML/Element/input#list) , ou se o navegador não oferece suporte.

<table class="standard-table">
  <tbody>
    <tr>
      <th>HTML</th>
      <th>Screenshot</th>
    </tr>
    <tr>
      <td><pre class="brush: html">&#x3C;input type="range"></pre></td>
      <td>
        <img
          alt="Screenshot of a plain slider control on macOS"
          src="macslider-plain.png"
          style="height: 28px; width: 184px"
        />
      </td>
    </tr>
  </tbody>
</table>

##### Um controle com o Atributo

Este controle está usando um atributo `list` especificando o ID de uma {{HTMLElement("datalist")}} que define uma serie de marcações no controle. Há 11 deles, de modo que há um 0% bem como a adição de 10% em cada próximo. Cada ponto representa usando um elemento {{HTMLElement("option")}} com propriedade [`value`](/pt-BR/docs/Web/HTML/Element/option#value) definido para o valor do intervalo no qual uma marca deve ser desenhada.

<table class="standard-table">
  <tbody>
    <tr>
      <th>HTML</th>
      <th>Screenshot</th>
    </tr>
    <tr>
      <td>
        <pre class="brush: html">
&#x3C;input type="range" list="tickmarks">

&#x3C;datalist id="tickmarks">
&#x3C;option value="0">
&#x3C;option value="10">
&#x3C;option value="20">
&#x3C;option value="30">
&#x3C;option value="40">
&#x3C;option value="50">
&#x3C;option value="60">
&#x3C;option value="70">
&#x3C;option value="80">
&#x3C;option value="90">
&#x3C;option value="100">
&#x3C;/datalist>

</pre
        >
      </td>
      <td>
        <img
          alt="Screenshot of a plain slider control on macOS"
          src="macslider-ticks.png"
          style="height: 28px; width: 184px"
        />
      </td>
    </tr>
  </tbody>
</table>

##### Um controle deslizante com marcas e rótulos

Você pode adicionar rótulos para seu controle usando o atributo [`label`](/pt-BR/docs/Web/HTML/Element/option#label) para o elemento {{HTMLElement("option")}} correspondente às marcas de marcação para as quais você deseja ter rótulos.

<table class="standard-table">
  <tbody>
    <tr>
      <th>HTML</th>
      <th>Screenshot</th>
    </tr>
    <tr>
      <td>
        <pre class="brush: html">
&#x3C;input type="range" list="tickmarks">

&#x3C;datalist id="tickmarks">
&#x3C;option value="0" label="0%">
&#x3C;option value="10">
&#x3C;option value="20">
&#x3C;option value="30">
&#x3C;option value="40">
&#x3C;option value="50" label="50%">
&#x3C;option value="60">
&#x3C;option value="70">
&#x3C;option value="80">
&#x3C;option value="90">
&#x3C;option value="100" label="100%">
&#x3C;/datalist>

</pre
        >
      </td>
      <td>
        <img
          alt="Screenshot of a plain slider control on macOS"
          src="macslider-labels.png"
          style="height: 44px; width: 184px"
        />
      </td>
    </tr>
  </tbody>
</table>

> **Nota:** Atualmente nenhum navegador suporta estes recursos totalmente. Firefox não suporta pontos e rótulos, por exemplo, enquanto o Chrome suporta as marcações de pontos, porém não suporta as etiquetas.

### Change the orientation

Considerando este controle:

```html
<input type="range" id="volume" min="0" max="11" value="7" step="1" />
```

{{EmbedLiveSample("Orientation_sample1", 200, 200, "orientation_sample1.png")}}

Esse controle é horizontal (pelo menos na maioria, senão em todos os principais navegadores, outros podem variar). Fazê-lo vertical é tão simples como adicionar CSS para alterar as dimensões do controle para que ele seja mais alto que o largo, como este:

#### CSS

```css
#volume {
  height: 150px;
  width: 50px;
}
```

#### HTML

```html
<input type="range" id="volume" min="0" max="11" value="7" step="1" />
```

#### Resultado

{{EmbedLiveSample("Orientation_sample2", 200, 200, "orientation_sample2.png")}}

**Atualmente, nenhum dos principais navegadores suporta a criação de entradas de alcance vertical usando o CSS desta maneira, mesmo que seja a maneira como a especificação recomenda que eles o façam.**

As especificações HTML recomenda que os navegadores mudem automaticamente para um controle vertical quando a largura for menor que à altura. Infortuniamente nenhum dos principais navegadores atualmente oferece tal suporte. No entanto você pode cria-lo pelo seu lado. A maneira mais fácil para isto é usar o CSS: aplicando um: {{cssxref("transform")}} para rotacionar o elemento tornando-o vertical. Vamos dar uma olhada:

#### HTML

No HTML o elemento {{HTMLElement("input")}} precisa ser envolto em uma {{HTMLElement("div")}} para nos permitir corrigir o layout após a transformação ser executada, (uma vez que as transformações não afetam automaticamente o layout da página):

```html
<div class="slider-wrapper">
  <input type="range" min="0" max="11" value="7" step="1" />
</div>
```

#### CSS

Agora precisamos de algum CSS. Primeiro é o CSS para o próprio wrapper; isso especifica o modo de exibição e o tamanho que queremos para que a página seja definida corretamente; em essência, está reservando uma área da página para que o controle deslizante gire e se encaixe no espaço reservado sem bagunçar outros elementos.

```css
.slider-wrapper {
  display: inline-block;
  width: 20px;
  height: 150px;
  padding: 0;
}
```

Em seguida, vem a informação de estilo para o elemento `<input>` dentro do espaço reservado:

```css
.slider-wrapper input {
  width: 150px;
  height: 20px;
  margin: 0;
  transform-origin: 75px 75px;
  transform: rotate(-90deg);
}
```

O tamanho do controle está configurado para ter 150 pixels de comprimento por 20 pixels de altura . As margins estão configuradas como 0 e a {{cssxref("transform-origin")}} é deslocada para o centro do espaço de giro do controle deslizante; uma vez que o controle deslizante está configurado para ter 150 pixels de largura, gira através de uma caixa que é de 150 pixels em cada lado. Compensando a origem por 75px em cada eixo significa que vamos girar em torno do centro desse espaço. Finalmente, giramos no sentido anti-horário em 90 °. O resultado: uma entrada de intervalo que é girada para que o valor máximo esteja na parte superior e o valor mínimo esteja na parte inferior.

#### Result

{{EmbedLiveSample("Orientation_sample3", 200, 200, "orientation_sample3.png")}}

## Validação

Não há padrões de validação disponível, no entanto, as seguintes formas de validações são realizadas automaticamente:

- Se [`value`](/pt-BR/docs/Web/HTML/Element/input#value) estiver definido para algo que não possa ser convertido em um número flutuante válido, a validação falhará porque a entrada está sofrendo de uma entrada incorreta.
- O valor não será inferior há [`min`](/pt-BR/docs/Web/HTML/Element/input#min). O valor padrão é 0.
- O valor não pode ser maior que [`max`](/pt-BR/docs/Web/HTML/Element/input#max). O valor padrão é 100.
- O valor será um multiplo de [`step`](/pt-BR/docs/Web/HTML/Element/input#step). O valor padrão é 1.

## Exemplos

Além dos exemplos variados acima, você encontrará as entradas de alcance demonstradas nestes artigos:

- [Controlling multiple parameters with ConstantSourceNode](/pt-BR/docs/Web/API/Web_Audio_API/Controlling_multiple_parameters_with_ConstantSourceNode)

## Specifications

| Specification                                                                                    | Status                   | Comment            |
| ------------------------------------------------------------------------------------------------ | ------------------------ | ------------------ |
| {{SpecName('HTML WHATWG', 'forms.html#range-state-(type=range)', '&lt;input type="range"&gt;')}} | {{Spec2('HTML WHATWG')}} | Initial definition |
| {{SpecName('HTML5.1', 'sec-forms.html#range-state-typerange', '&lt;input type="range"&gt;')}}    | {{Spec2('HTML5.1')}}     | Initial definition |

## Compatibilidade com navegadores

{{Compat("html.elements.input.type_range")}}

## See also

- [HTML Forms](/pt-BR/docs/Learn/HTML/Forms)
- {{HTMLElement("input")}} and the {{domxref("HTMLInputElement")}} interface it's based upon
- [`<input type="number">`](/pt-BR/docs/Web/HTML/Element/input/number)
