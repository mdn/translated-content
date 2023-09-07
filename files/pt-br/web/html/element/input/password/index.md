---
title: <input type="password">
slug: Web/HTML/Element/input/password
---

{{HTMLSidebar}}

Elementos `<input>` do tipo **`"password"`** são uma maneira do usuário digitar senhas com segurança. O elemento é mostrado como um controle de edição de texto de uma linha, no qual o texto é omitido para que não possa ser lido, geralmente substituindo cada caractere por um símbolo como o astesrisco ("\*") ou um ponto ("•"). Esse caracter varia dependendo do {{Glossary("agente de usuário")}} e do {{Glossary("OS")}}.

{{EmbedInteractiveExample("pages/tabbed/input-password.html", "tabbed-standard")}}

Os detalhes de como o processo de inserção do texto funciona podem variar dependendo do navegador. Dispositivos móveis, por exemplo, frequentemente mostram o caractere digitado por um breve momento antes de ser ocultado, de forma que o usuário possa verificar se realmente digitou o caractere pretendido. Isso é útil devido ao tamanho reduzido das teclas e a facilidade de se pressionar a tecla errada, principalmente em teclados virtuais.

> **Note:** Todo formulário que envolve informações sensíveis tais como senhas (ex.: formulários de login) deve ser servido usando HTTPS. Vários navegadores implementam mecanismos que avisam sobre formulários não protegidos - veja [Senhas não Protegidas](/pt-BR/docs/Security/SenhasNãoProtegidas).

<table class="properties">
  <tbody>
    <tr>
      <td>
        <strong><a href="#value">Value</a></strong>
      </td>
      <td>
        Uma {{domxref("DOMString")}} representando uma senha, ou vazia
      </td>
    </tr>
    <tr>
      <td><strong>Eventos</strong></td>
      <td>{{event("change")}} e {{event("input")}}</td>
    </tr>
    <tr>
      <td><strong>Atributos comuns suportados</strong></td>
      <td>
        <a href="/pt-BR/docs/Web/HTML/Element/input#autocomplete"><code>autocomplete</code></a>,
        <a href="/pt-BR/docs/Web/HTML/Element/input#inputmode"><code>inputmode</code></a>,
        <a href="/pt-BR/docs/Web/HTML/Element/input#maxlength"><code>maxlength</code></a>,
        <a href="/pt-BR/docs/Web/HTML/Element/input#minlength"><code>minlength</code></a>,
        <a href="/pt-BR/docs/Web/HTML/Element/input#pattern"><code>pattern</code></a>,
        <a href="/pt-BR/docs/Web/HTML/Element/input#placeholder"><code>placeholder</code></a>,
        <a href="/pt-BR/docs/Web/HTML/Element/input#readonly"><code>readonly</code></a>,
        <a href="/pt-BR/docs/Web/HTML/Element/input#required"><code>required</code></a>, e
        <a href="/pt-BR/docs/Web/HTML/Element/input#size"><code>size</code></a>
      </td>
    </tr>
    <tr>
      <td><strong>Atributos IDL</strong></td>
      <td>
        <code>selectionStart</code>, <code>selectionEnd</code>,
        <code>selectionDirection</code>, e <code>value</code>
      </td>
    </tr>
    <tr>
      <td><strong>Métodos</strong></td>
      <td>
        {{domxref("HTMLInputElement.select", "select()")}},
        {{domxref("HTMLInputElement.setRangeText", "setRangeText()")}},
        e
        {{domxref("HTMLInputElement.setSelectionRange", "setSelectionRange()")}}
      </td>
    </tr>
  </tbody>
</table>

## Valor

O atributo [`value`](/pt-BR/docs/Web/HTML/Element/input#value) contém uma {{domxref("DOMString")}} cujo valor é o conteúdo atual do controle de edição de texto usado para a inserção da senha. Se o usuário ainda não digitou nada, esse valor é uma string vazia (`""`). Se a propriedade [`required`](/pt-BR/docs/Web/HTML/Global_attributes#required) for especificada, então a caixa de edição de senha precisa conter um valor que não seja uma string vazia para ser válida.

Se o atributo [`pattern`](/pt-BR/docs/Web/HTML/Element/input#pattern) for especificado, o conteúdo de um controle `"password"` só é considerado válido se o valor passar na validação; veja [Validação](#validação) para mais informações.

> **Note:** Os caracteres de quebra de linha _line feed_ (U+000A) e _carriage return_ (U+000D) não são permitidos em valores de `"password"`. Quando o valor de um campo de senha é definido, os caracteres acima são removidos do valor.

## Usando campos de senha

Caixas de inserção de senha funcionam assim como outras caixas de inserção de texto; a principal diferença é que o conteúdo é ocultado para impedir que pessoas que estejam próximas ao usuário leiam a senha.

### Um campo de senha simples

Aqui vemos o mais básico dos campos de senha, juntamente com um rótulo para ele usando o elemento {{HTMLElement("label")}}.

```html
<label for="senhaUsuario">Senha: </label>
<input id="senhaUsuario" type="password" />
```

{{EmbedLiveSample("A_simple_password_input", 600, 40)}}

### Permitindo preenchimento automático

Para permitir que o gerenciador de senhas do usuário digite a senha automaticamente, especifique o atributo [`autocomplete`](/pt-BR/docs/Web/HTML/Element/input#autocomplete). Para senhas, o valor dele deve ser geralmente um dos seguintes:

- `"on"`
  - : Permite que o navegador ou um gerenciador de senhas preencha automaticamente o campo de senha. Esse valor não é tão informativo quanto `"current-password"` ou `"new-password"`.
- `"off"`
  - : Não permite que o navegador ou gerenciador de senhas preencha automaticamente o campo de senha. Vale observar que alguns softwares ignoram esse valor, já que ele costuma ser prejudicial para a capacidade dos usuários de manter senhas seguras.
- `"current-password"`
  - : Permite que o navegador ou gerenciador de senhas preencha automaticamente o campo de senha. Esse valor fornece mais informações do que `"on"`, já que ele permite que o navegador ou gerenciador de senhas digite automaticamente a senha atualmente conhecida do site no campo, mas não que sugira uma nova.
- `"new-password"`
  - : Permite que o navegador ou gerenciador de senhas digite automaticamente uma nova senha para o site. Esse valor é usado em formulários de "mudar senha" e de "novo usuário", no campo que pede por uma nova senha. A nova senha pode ser gerada de várias maneiras, dependendo do gerenciador de senhas usado. Ele pode simplificar o preenchimento de uma sugestão de nova senha, ou mesmo pode mostrar ao usuário uma interface para criar uma.

```html
<label for="senhaUsuario">Senha:</label>
<input id="senhaUsuario" type="password" autocomplete="current-password" />
```

{{EmbedLiveSample("Autocomplete_sample1", 600, 40)}}

### Tornando a senha obrigatória

Para dizer ao navegador do usuário que o campo de senha precisa ter um valor válido antes do formulário ser enviado, basta adicionar o atributo booleano [`required`](/pt-BR/docs/Web/HTML/Element/input#required).

```html
<label for="senhaUsuario">Senha: </label>
<input id="senhaUsuario" type="password" required />
<input type="submit" value="Enviar" />
```

{{EmbedLiveSample("Making_the_password_mandatory", 600, 40)}}

### Especificando um modo de inserção

Se as suas regras de sintaxe recomendadas (ou obrigatórias) para a senha poderiam obter vantagem de uma interface de digitação diferente da de um teclado padrão, você pode usar o atributo [`inputmode`](/pt-BR/docs/Web/HTML/Element/input#inputmode) para pedir por uma interface específica. O caso de uso mais óbvio para isso é o de a senha precisar ser numérica (como um PIN). Dispositivos móveis com teclados virtuais, por exemplo, podem optar por mostrar um teclado numérico ao invés de um teclado completo, facilitando a digitação da senha.

```html
<label for="pin">PIN: </label>
<input id="pin" type="password" inputmode="numeric" />
```

{{EmbedLiveSample("Specifying_an_input_mode", 600, 40)}}

### Definindo restrições de tamanho

Como de praxe, você pode usar os atributos [`minlength`](/pt-BR/docs/Web/HTML/Element/input#minlength) e [`maxlength`](/pt-BR/docs/Web/HTML/Element/input#maxlength) para estabelecer os tamanhos mínimo e máximo aceitáveis para a senha. Este exemplo continua o anterior, agora especificando que o PIN do usuário deva ter pelo menos quatro dígitos e não passe de oito dígitos. O atributo [`size`](/pt-BR/docs/Web/HTML/Element/input#size) é usado para garantir que o campo de senha aceite no máximo oito caracteres.

```html
<label for="pin">PIN:</label>
<input
  id="pin"
  type="password"
  inputmode="numeric"
  minlength="4"
  maxlength="8"
  size="8" />
```

{{EmbedLiveSample("Setting_length_requirements", 600, 40)}}

### Selecionando o texto

Assim como em outros tipos de campos de texto, você pode usar o método {{domxref("HTMLInputElement.select", "select()")}} para selecionar todo o texto no campo de senha.

#### HTML

```html
<label for="senhaUsuario">Senha: </label>
<input id="senhaUsuario" type="password" size="12" />
<button id="selecionarTudo">Selecionar tudo</button>
```

#### JavaScript

```js
document.getElementById("selecionarTudo").onclick = function () {
  document.getElementById("senhaUsuario").select();
};
```

#### Resultado

{{EmbedLiveSample("Selecting_text", 600, 40)}}

Você também pode usar {{domxref("HTMLInputElement.selectionStart", "selectionStart")}} e {{domxref("HTMLInputElement.selectionEnd", "selectionEnd")}} para obter (ou definir) o intervalo dos caracteres no campo que estão selecionados no momento, e {{domxref("HTMLInputElement.selectionDirection", "selectionDirection")}} para saber em qual direção a seleção ocorreu (ou será estendida, dependendo da sua plataforma; veja a documentação dela para saber mais). Porém, como o texto está oculto, a utilidade desses métodos fica reduzida.

## Validação

Se seu aplicativo tiver restrições de conjuntos de caracteres ou qualquer outro requisito para o conteúdo da senha digitada, você pode usar o atributo [`pattern`](/pt-BR/docs/Web/HTML/Element/input#pattern) para estabelecer que uma expressão regular seja usada para garantir automaticamente que as senhas cumpram com esses requisitos.

Neste exemplo, são válidos apenas valores consistindo de no mínimo quatro e no máximo oito dígitos hexadecimais.

```html
<label for="hexId">Hex ID: </label>
<input
  id="hexId"
  type="password"
  pattern="[0-9a-fA-F]{4,8}"
  title="Digite um ID consistindo de 4-8 dígitos hexadecimais" />
```

{{EmbedLiveSample("Validation_sample1", 600, 40)}}

- {{htmlattrdef("disabled")}}
  - : Esse atributo booleano indica que o campo de senha não está disponível para interação. Além disso, os valores dos campos marcados com ele não são enviados com o formulário.

## Exemplos

### Pedindo por um CPF

Este exemplo aceita apenas valores que correspondam ao formato de um [Cadastro de Pessoa Física](https://pt.wikipedia.org/wiki/Cadastro_de_pessoas_f%C3%ADsicas#N%C3%BAmero_de_inscri%C3%A7%C3%A3o_no_CPF). Este número, usado para fins de cobrança e identificação, segue o formato "123.456.789-09".

#### HTML

```html
<label for="cpf">CPF:</label>
<input
  type="password"
  id="cpf"
  inputmode="number"
  minlength="11"
  maxlength="11"
  pattern="^[0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2}"
  required
  autocomplete="off" />
<br />
<label for="cpf">Valor:</label>
<span id="atual"></span>
```

Ele usa um padrão [`pattern`](/pt-BR/docs/Web/HTML/Element/input#pattern) que limita o valor digitado a strings que representem números de CPF no formato válido. O padrão aceita tanto valores separados por pontos (".") e hífen ("-") como apenas os números.

O modo de inserção em [`inputmode`](/pt-BR/docs/Web/HTML/Element/input#inputmode) está definido como `"number"` para indicar a dispositivos com teclados virtuais que eles devem mostrar um teclado numérico para uma digitação mais fácil. Os atributos [`minlength`](/pt-BR/docs/Web/HTML/Element/input#minlength) e [`maxlength`](/pt-BR/docs/Web/HTML/Element/input#maxlength) foram definidos como 11 e 14, respectivamente, de forma a aceitar valores com no mínimo 11 e no máximo 14 caracteres (o primeiro para valores sem os caracteres separadores e o último para valores com esses caracteres). O atributo [`required`](/pt-BR/docs/Web/HTML/Element/input#required) é usado para indicar que este campo precisa ter um valor válido. Por fim, [`autocomplete`](/pt-BR/docs/Web/HTML/Element/input#autocomplete) foi definido como `"off"` para evitar que gerenciadores de senhas tentem usar ou definir o valor dele, já que ele não é nem mesmo uma senha.

Obviamente, apenas essa expressão regular não garante um CPF realmente válido, já que a validação deste tipo de número exige cálculos adicionais. [Confira este artigo](https://www.devmedia.com.br/validar-cpf-com-javascript/23916) para ver exatamente como garantir um número de CPF válido.

#### JavaScript

A seguir temos um código simples para mostrar o CPF digitado na tela para que você possa vê-lo. É claro que isso vai contra o propósito de um campo de senha, mas ajuda na hora de experimentar o padrão `pattern`.

```js
var cpf = document.getElementById("cpf");
var atual = document.getElementById("atual");

cpf.oninput = function (event) {
  atual.innerHTML = cpf.value;
};
```

#### Resultado

{{EmbedLiveSample("Requesting_a_Social_Security_number", 600, 60)}}

## Especificações

| Especificação                                                                                             | Status                   | Comentário        |
| --------------------------------------------------------------------------------------------------------- | ------------------------ | ----------------- |
| {{SpecName('HTML WHATWG', 'forms.html#password-state-(type=password)', '&lt;input type="password"&gt;')}} | {{Spec2('HTML WHATWG')}} | Definição inicial |
| {{SpecName('HTML5.1', 'forms.html#password-state-(type=password)', '&lt;input type="password"&gt;')}}     | {{Spec2('HTML5.1')}}     | Definição inicial |

## Compatibilidade com navegadores

{{Compat}}
