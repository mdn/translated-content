---
title: BiquadFilterNode
slug: Web/API/BiquadFilterNode
---

{{APIRef("Web Audio API")}}

A interface `BiquadFilterNode` representa um filtro simples de ordem baixa, e é criada utilizando o método {{ domxref("AudioContext.createBiquadFilter()") }} . É o {{domxref("AudioNode")}} que pode representar diferentes tipos de filtros, dispositivo de controle de timbre, e equalizadores gráficos. Um `BiquadFilterNode` sempre tem exatamente uma entrada e uma saída.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Número de entradas</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Número de saídas</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Modo de contagem de canal</th>
      <td><code>"max"</code></td>
    </tr>
    <tr>
      <th scope="row">Contagem de canal</th>
      <td><code>2</code> (não utilizado no modo de contagem padrão)</td>
    </tr>
    <tr>
      <th scope="row">Interpretação de canal</th>
      <td><code>"speakers"</code></td>
    </tr>
  </tbody>
</table>

## Construtor

- {{domxref("BiquadFilterNode.BiquadFilterNode", "BiquadFilterNode()")}}
  - : Cria uma nova instância de um objeto do tipo `BiquadFilterNode`.

## Propriedades

_Herda as propriedades de seu pai,_ _{{domxref("AudioNode")}}_.

- {{domxref("BiquadFilterNode.frequency")}}
  - : É um [a-rate](/pt-BR/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, um double que representa a frequência no algoritmo de filtragem atual, medido em hertz (Hz).
- {{domxref("BiquadFilterNode.detune")}}
  - : É um [a-rate](/pt-BR/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}} representando a dessintonização da frequência em [cents](http://en.wikipedia.org/wiki/Cent_%28music%29).
- {{domxref("BiquadFilterNode.Q")}}
  - : É um [a-rate](/pt-BR/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, um double representando um [Q factor](http://en.wikipedia.org/wiki/Q_factor), ou _fator de qualidade_.
- {{domxref("BiquadFilterNode.gain")}} {{readonlyInline}}
  - : É um [a-rate](/pt-BR/docs/Web/API/AudioParam#a-rate) {{domxref("AudioParam")}}, um double representando o [gain](http://en.wikipedia.org/wiki/Gain) utilizado no algoritmo de filtragem atual.
- {{domxref("BiquadFilterNode.type")}}

  - : É um valor string que define o tipo de algoritmo de filtragem que o nó está implementando.

    | `tipo`      | Descrição                                                                                                                                                                                                                                                                     | `frequência`                                                                                                                                                        | `Q`                                                                                                                           | `ganho`                                                                   |
    | ----------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
    | `lowpass`   | Filtro de resonância lowpass padrão de segunda ordem com 12dB/octave rolloff. Frequências abaixo do ponto de corte passam; frequências acima são atenuadas.                                                                                                                   | A frequência de corte.                                                                                                                                              | Indica o quão perto a frequência chegou em relação ao ponto de corte. Quantomaior o valor, maior será a aproximação.          | _Não utilizado_                                                           |
    | `highpass`  | Filtro de resonância highpass padrão de segunda ordem com 12dB/octave rolloff. Frequências abaixo do ponto de corte são atenuadas; frequências acima passam.                                                                                                                  | A frequência de corte.                                                                                                                                              | Indica o quão perto a frequência chegou em relação ao ponto de corte. Quantomaior o valor, maior será a aproximação.          | _Não utilizado_                                                           |
    | `bandpass`  | Filtro bandpass padrão de segunda ordem. Frequências fora do dado limite de frequências são atenuadas; frequências dentro do limite passam.                                                                                                                                   | O centro de alcance de frequências.                                                                                                                                 | Controla a largura da banda de frequência. Quanto maior o valor `Q`, menor a frequência de banda.                             | _Não utilizado_                                                           |
    | `lowshelf`  | Filtro lowshelf padrão de segunda ordem. Frequências menores que a frequência recebem um aumento, ou uma atenuação; frequências maiores não sofrem alterações.                                                                                                                | O limite superior das frequênicas recebe um aumento ou atenuação.                                                                                                   | _Não utilizado_                                                                                                               | O aumento, em dB, para ser aplicado; se negativo, ele será uma atenuação. |
    | `highshelf` | Filtro highshelf padrão de segunda ordem. Frequências maiores que a frequência recebem aumento ou atenuação; frequências abaixo disso não sofrem alterações.                                                                                                                  | O limite inferior de frequências recebe aumento ou uma atenuação.                                                                                                   | _Não utilizado_                                                                                                               | O aumento, em dB, para ser aplicado; se negativo, ele será uma atenuação. |
    | `peaking`   | Frequências dentro da faixa de frequencias recebem aumento ou atenuação; frequências fora da faixa não sofrem alterações.                                                                                                                                                     | O meio da faixa de frequência recebe um aumento ou uma atenuação.                                                                                                   | Controla a largura da banda de frequência. Quanto maior o valor `Q`, menor a frequência de banda.                             | O aumento, em dB, para ser aplicado; se negativo, ele será uma atenuação. |
    | `notch`     | Filtro [notch](http://en.wikipedia.org/wiki/Band-stop_filter) padrão, também chamado de filtro _band-stop_ ou _band-rejection_. É o oposto do filtro de de bandpass: frequências fora da faixa de frequências atribuída passam; frequências de dentro da faixa são atenuadas. | O centro de alcance de frequências.                                                                                                                                 | Controla a largura da banda de frequência. Quanto maior o valor `Q`, menor a frequência de banda.                             | _Não utilizado_                                                           |
    | `allpass`   | Filtro [allpass](http://en.wikipedia.org/wiki/All-pass_filter#Digital_Implementation) padrão de segunda ordem. Permite que todas as frequências passem, porém altera a relação de fase entre as diversas frequências.                                                         | A frequência com o máximo [group delay](http://en.wikipedia.org/wiki/Group_delay_and_phase_delay), ou seja, a frequência onde o centro da fase de transição ocorre. | Controla o quão apurada a transição é na frequência média. Quanto maior este parâmetro, mais apurada e ampla será a transição | _Não utilizado_                                                           |

## Métodos

_Herda os métodos de seu pai,_ _{{domxref("AudioNode")}}_.

- {{domxref("BiquadFilterNode.getFrequencyResponse()")}}
  - : A partir dos parâmetros de configuração do filtro atual, este método calcula a frequência de resposta para frequências especificadas no array de frequências.

## Exemplo

{{page("/pt-BR/docs/Web/API/AudioContext.createBiquadFilter","Example")}}

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- [Utilizando a Web Audio API](/pt-BR/docs/Web_Audio_API/Using_Web_Audio_API)
