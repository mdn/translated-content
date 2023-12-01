---
title: Form data validation
slug: Learn/Forms/Form_validation
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms/How_to_build_custom_form_widgets", "Learn/HTML/Forms")}}

A validação de formulário nos ajuda a garantir que os usuários preencham os campos no formato correto, garantindo que os dados enviados funcionem com êxito em nossos aplicativos. Este artigo apresentará conceitos e exemplos básicos sobre validação de formulário. Para mais informações adicionais, consulte o [Guia de validação](/pt-BR/docs/Web/Guide/HTML/HTML5/Constraint_validation).

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conhecimento em informática, uma compreensão razoável de
        <a href="/pt-BR/docs/Learn/HTML">HTML</a>,
        <a href="/pt-BR/docs/Learn/CSS">CSS</a>, e
        <a href="/pt-BR/docs/Learn/JavaScript">JavaScript</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Entender o que é validação de formulários porque é importante a
        aplicação de várias técnicas para implementá-lo.
      </td>
    </tr>
  </tbody>
</table>

## O que é validação de formulário?

Vá a qualquer site popular com um formulário de registro, e perceberá que eles dão feedback quando você não insere seus dados no formato esperado. Você receberá mensagens como:

- "Sua senha precisa ter entre 8 e 30 caracteres e conter uma letra maiúscula, um símbolo e um número"
- "Por favor, digite seu número de telefone no formato (xx) xxxx-xxxx"
- "Por favor insira um endereço de email válido" (se a sua entrada não estiver no formato "email\@email.com")
- "Este campo é obrigatório" (você não pode deixar este campo em branco)

Isso é chamado de validação de formulário - quando você insere dados, o aplicativo da Web faz a verificação para ver se os dados estão corretos. Se estiver correto, o aplicativo permite que os dados sejam enviados ao servidor e (geralmente) salvos em um banco de dados; se não, você receberá uma mensagem de erro explicando quais correções precisam ser feitas. A validação de formulários pode ser implementada de várias maneiras diferentes.

Queremos tornar o preenchimento de formulários da web o mais fácil possível. Então, por que insistimos em validar nossos formulários? Existem três razões principais:

- **Nos queremos que o dado correto e no formato correto** — nossa aplicação não irá trabalhar de forma correta se os dados dos nossos usuarios estivem armazenados em formato incorreto, ou quando esses dados são omitidos.
- **Quemos proteger os dados dos nossos usuários** — Forçarnosos usuários a fornecer senhas seguras facilita na proteção das informações da conta do usuário.
- **Queremos proteger nos mesmos** — Existem diversas maneiras de um usuário malicioso usar formulários desprotegidos para danificar nossa aplicação (veja [Website security](/pt-BR/docs/Learn/Server-side/First_steps/Website_security)).

  > **Aviso:** Nunca confie nos dados passados do cliente para o servidor. Mesmo que seu formulário seja validado de maneira correta e previna a má formação de inputs no lado do cliente, um usuário malicioso ainda pode roubar o request da conexão.

### Diferentes tipos de validação de formulário

Existem dois tipos diferentes de validação de formulários que você encontrará na web:

- **Validação do lado do cliente** é a validação que ocorre no navegador antes que os dados sejam enviados ao servidor. Isso é mais fácil de usar do que a validação do lado do servidor, pois fornece uma resposta instantânea. Isso pode ser ainda subdividido:

  - A validação **JavaScript** é codificada usando JavaScript. É completamente customizável.
  - **Validação de formulário integrada** usando recursos de validação de formulário HTML5. Isso geralmente não requer JavaScript. A validação de formulário integrada tem melhor desempenho, mas não é tão personalizável quanto o JavaScript.

- **Validação do lado do servidor** é a validação que ocorre no servidor após o envio dos dados. O código do lado do servidor é usado para validar os dados antes de serem salvos no banco de dados. Se os dados falharem na autenticação, uma resposta será enviada de volta ao cliente para informar ao usuário quais correções devem ser feitas. A validação do lado do servidor não é tão amigável quanto a validação do lado do cliente, pois não fornece erros até que todo o formulário seja enviado. No entanto, a validação do lado do servidor é a última linha de defesa do seu aplicativo contra dados incorretos ou até maliciosos. Todos os [frameworks do lado do servidor](/pt-BR/docs/Learn/Server-side/First_steps/Web_frameworks) populares têm recursos para **validar** e **limpar** dados (tornando-os seguros).

No mundo real, os desenvolvedores tendem a usar uma combinação de validação do lado do cliente e do lado do servidor.

## Usando validação de formulário integrada

Um dos recursos do [HTML5](/pt-BR/docs/HTML/HTML5) é a capacidade de validar a maioria dos dados do usuário sem depender de scripts. Isso é feito usando [atributos de validação](/pt-BR/docs/Web/Guide/HTML/HTML5/Constraint_validation#Validation-related_attributes) em elementos de formulário, que permitem especificar regras para uma entrada de formulário, como se um valor precisa a ser preenchido, o comprimento mínimo e máximo dos dados, se precisa ser um número, um endereço de e-mail ou qualquer outra coisa, e um padrão que deve corresponder. Se os dados inseridos seguirem todas as regras especificadas, são considerados válidos; caso contrário, é considerado inválido.

Quando um elemento é válido:

- O elemento corresponde à pseudo-classe CSS {{cssxref(":valid")}}; isso permitirá que você aplique um estilo específico a elementos válidos.
- Se o usuário tentar enviar os dados, o navegador enviará o formulário, desde que nada mais o impeça de fazê-lo (por exemplo, JavaScript).

Quando um elemento é inválido:

- O elemento corresponde à pseudo-classe CSS {{cssxref(":invalid")}}; isso permitirá que você aplique um estilo específico a elementos inválidos.
- Caso o usuário tente enviar os dados, o navegador bloqueará o formulário e exibirá uma mensagem de erro.

### Restrições de validação em elementos de entrada — começando simples

Nesta seção, veremos alguns dos diferentes recursos HTML5 que podem ser usados para validar elementos {{HTMLElement("input")}}.

Vamos começar com um exemplo simples — uma entrada que permite que você escolha sua fruta favorita entre banana ou cereja. Isso envolve um texto simples {{HTMLElement("input")}} com um rótulo correspondente e um envio {{htmlelement("button")}}. Você pode encontrar o código-fonte no GitHub como [fruit-start.html](https://github.com/mdn/learning-area/blob/master/html/forms/form-validation/fruit-start.html), e um exemplo ao vivo abaixo:

```html hidden
<form>
  <label for="choose">Você prefere banana ou cereja?</label>
  <input id="choose" name="i_like" />
  <button>Enviar</button>
</form>
```

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

{{EmbedLiveSample("Hidden_code", "100%", 50)}}

Para começar, faça uma cópia de `fruit-start.html` em um novo diretório em seu disco rígido.

### O atributo obrigatório

O recurso de validação HTML5 mais simples de usar é o atributo [`required`](/pt-BR/docs/Web/HTML/Element/input#required) — se você quiser tornar uma entrada obrigatória, você pode marcar o elemento usando este atributo. Quando este atributo estiver definido, o formulário não será enviado (e exibirá uma mensagem de erro) quando a entrada estiver vazia (a entrada também será considerada inválida).

Adicione um atributo `required` à sua entrada, conforme mostrado abaixo:

```html
<form>
  <label for="choose">Você prefere banana ou cereja?</label>
  <input id="choose" name="i_like" required />
  <button>Enviar</button>
</form>
```

Além disso, anote o CSS incluído no arquivo de exemplo:

```css
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

Isso faz com que a entrada tenha uma borda tracejada vermelha brilhante quando for inválida e uma borda preta mais sutil quando válida. Experimente o novo comportamento no exemplo abaixo:

{{EmbedLiveSample("The_required_attribute", "100%", 80)}}

### Validando com uma expressão regular

Outro recurso de validação muito comum é o atributo [`pattern`](/pt-BR/docs/Web/HTML/Element/input#pattern) que espera uma [Expressão Regular](/pt-BR/docs/JavaScript/Guide/Regular_Expressions) como seu valor. Uma expressão regular (regex) é um padrão que pode ser usado para identificar combinações de caracteres em strings de texto, então elas são ideais para validação de formulários (assim como uma variedade de outros usos em JavaScript)

Regexes são bastante complexas e não pretendemos ensiná-las exaustivamente neste artigo. Abaixo estão alguns exemplos para dar uma ideia básica de como eles funcionam:

- `a` — corresponde a um caractere que é `a` (não `b`, não `aa`, etc.)
- `abc` — corresponde a `a`, seguido por `b`, seguido por `c`.
- `a|b` — corresponde a um caractere que é `a` ou `b`.
- `abc|xyz` — corresponde exatamente a `abc` ou exatamente `xyz` (mas não `abcxyz`, ou `a` ou `y`, etc).
- Existem muitas outras possibilidades que não precisamos cobrir aqui.

De qualquer forma, vamos implementar um exemplo — atualize seu HTML para adicionar um atributo `pattern`, assim:

```html
<form>
  <label for="choose">Você prefere uma banana ou uma cereja?</label>
  <input id="choose" name="i_like" required pattern="banana|cherry" />
  <button>Enviar</button>
</form>
```

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}
```

{{EmbedLiveSample("Validating_against_a_regular_expression", "100%", 80)}}

Neste exemplo, o elemento {{HTMLElement("input")}} aceita um dos dois valores possíveis: a string "banana" ou a string "cherry".

Neste ponto, tente alterar o valor dentro do atributo `pattern` para igualar alguns dos exemplos que você viu anteriormente e veja como isso afeta os valores que você pode inserir para tornar o valor de entrada válido. Tente escrever alguns dos seus próprios, e veja como você se sai! Tente torná-los relacionados a frutas sempre que possível, para que seus exemplos façam sentido!

> **Nota:** Alguns tipos de elemento {{HTMLElement("input")}} não precisam de um atributo [`pattern`](/pt-BR/docs/Web/HTML/Element/input#pattern) para serem validados. Especificar o tipo `email`, por exemplo, valida o valor inserido em relação a uma expressão regular que corresponde a um endereço de e-mail bem formado (ou uma lista de endereços de e-mail separados por vírgula se tiver o [`multiple`](/pt-BR/docs/Web/HTML/Element/input#multiple) atributo). Como outro exemplo, os campos com o tipo `url` requerem automaticamente um URL devidamente formado.

> **Nota:** O elemento {{HTMLElement("textarea")}} não suporta o atributo [`pattern`](/pt-BR/docs/Web/HTML/Element/input#pattern).

### Restringindo o comprimento de suas entradas

Todos os campos de texto criados por {{HTMLElement("input")}} ou {{HTMLElement("textarea")}} podem ser restringidos em tamanho usando [`minlength`](/pt-BR/docs/Web/HTML/Element/input#minlength) e [`maxlength`](/pt-BR/docs/Web/HTML/Element/input#maxlength) atributos. Um campo é inválido se seu valor for menor que o valor [`minlength`](/pt-BR/docs/Web/HTML/Element/input#minlength) ou maior que o valor [`maxlength`](/pt-BR/docs/Web/HTML/Element/input#maxlength). Os navegadores geralmente não permitem que o usuário digite um valor maior do que o esperado nos campos de texto, mas é útil ter esse controle refinado disponível.

Para campos numéricos (ou seja, `<input type="number">`), os atributos [`min`](/pt-BR/docs/Web/HTML/Element/input#min) e [`max`](/pt-BR/docs/Web/HTML/Element/input#max) também fornecem uma restrição de validação. Se o valor do campo for menor que o atributo [`min`](/pt-BR/docs/Web/HTML/Element/input#min) ou maior que o atributo [`max`](/pt-BR/docs/Web/HTML/Element/input#max), o campo será inválido.

Vejamos outro exemplo. Crie uma nova cópia do arquivo [fruit-start.html](https://github.com/mdn/learning-area/blob/master/html/forms/form-validation/fruit-start.html).

Agora exclua o conteúdo do elemento `<body>` e substitua-o pelo seguinte:

```html
<form>
  <div>
    <label for="choose">Você prefere uma banana ou uma cereja?</label>
    <input
      type="text"
      id="choose"
      name="i_like"
      required
      minlength="6"
      maxlength="6" />
  </div>
  <div>
    <label for="number">Quantos você gostaria?</label>
    <input type="number" id="number" name="amount" value="1" min="1" max="10" />
  </div>
  <div>
    <button>Enviar</button>
  </div>
</form>
```

- Aqui você verá que demos ao campo `text` um `minlength` e `maxlength` de 6 — o mesmo comprimento que banana e cherry. Digitar menos caracteres será exibido como inválido e digitar mais não é possível na maioria dos navegadores.
- Também demos ao campo `number` um `min` de 1 e um `max` de 10 — os números inseridos fora desse intervalo serão mostrados como inválidos e você não poderá usar as setas de incremento/diminuição para mova o valor para fora deste intervalo.

```css hidden
input:invalid {
  border: 2px dashed red;
}

input:valid {
  border: 2px solid black;
}

div {
  margin-bottom: 10px;
}
```

Aqui está o exemplo rodando ao vivo:

{{EmbedLiveSample("Constraining_the_length_of_your_entries", "100%", 100)}}

> **Nota:** `<input type="number">` (e outros tipos, como `range`) também podem receber um atributo [`step`](/pt-BR/docs/Web/HTML/Element/input#step), que especifica o que incrementar o valor aumentará ou diminuirá quando os controles de entrada forem usados (como os botões numéricos para cima e para baixo).

### Exemplo completo

Aqui está um exemplo completo para mostrar o uso dos recursos de validação internos do HTML:

```html
<form>
  <p>
    <fieldset>
      <legend>Título<abbr title="Este campo é obrigatório">*</abbr></legend>
      <input type="radio" required name="title" id="r1" value="Mr"><label for="r1">Sr.</label>
      <input type="radio" required name="title" id="r2" value="Ms"><label for="r2">Sra.</label>
    </fieldset>
  </p>
  <p>
    <label for="n1">Quantos anos você tem?</label>
    <!-- O atributo pattern pode atuar como um substituto para navegadores que
         não implemente o tipo de entrada de número, mas dê suporte ao atributo pattern.
         Observe que os navegadores que suportam o atributo pattern o tornarão
         falha silenciosamente quando usado com um campo numérico.
         Seu uso aqui atua apenas como um fallback -->
    <input type="number" min="12" max="120" step="1" id="n1" name="age"
           pattern="\d+">
  </p>
  <p>
    <label for="t1">Qual é a sua fruta favorita?<abbr title="Este campo é obrigatório">*</abbr></label>
    <input type="text" id="t1" name="fruit" list="l1" required
           pattern="[Bb]anana|[Cc]herry|[Aa]pple|[Ss]trawberry|[Ll]emon|[Oo]range">
    <datalist id="l1">
      <option>Banana</option>
      <option>Cereja</option>
      <option>Maçã</option>
      <option>Morango</option>
      <option>Limão</option>
      <option>Laranja</option>
    </datalist>
  </p>
  <p>
    <label for="t2">Qual é o seu e-mail?</label>
    <input type="email" id="t2" name="email">
  </p>
  <p>
    <label for="t3">Deixe uma mensagem curta</label>
    <textarea id="t3" name="msg" maxlength="140" rows="5"></textarea>
  </p>
  <p>
    <button>Enviar</button>
  </p>
</form>
```

```css
body {
  font: 1em sans-serif;
  padding: 0;
  margin: 0;
}

form {
  max-width: 200px;
  margin: 0;
  padding: 0 5px;
}

p > label {
  display: block;
}

input[type="text"],
input[type="email"],
input[type="number"],
textarea,
fieldset {
  /* required to properly style form
   elements on WebKit based browsers */
  -webkit-appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

input:invalid {
  box-shadow: 0 0 5px 1px red;
}

input:focus:invalid {
  box-shadow: none;
}
```

{{EmbedLiveSample("Exemplo completo", "100%", 420)}}

Consulte [Atributos relacionados à validação](/pt-BR/docs/Web/Guide/HTML/HTML5/Constraint_validation#Validation-related_attributes) para obter uma lista completa de atributos que podem ser usados para restringir valores de entrada e os tipos de entrada que suportam eles.

### Mensagens de erro personalizadas

Como visto nos exemplos acima, cada vez que o usuário tenta enviar um formulário inválido, o navegador exibe uma mensagem de erro. A forma como esta mensagem é exibida depende do navegador.

Essas mensagens automatizadas têm duas desvantagens:

- Não existe uma maneira padrão de mudar sua aparência com CSS.
- Eles dependem da localidade do navegador, o que significa que você pode ter uma página em um idioma, mas uma mensagem de erro exibida em outro idioma.

| Navegador              | Renderização                                                                                                            |
| ---------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| Firefox 17 (Windows 7) | ![Exemplo de uma mensagem de erro com o Firefox em francês em uma página em inglês](/files/4329/error-firefox-win7.png) |
| Chrome 22 (Windows 7)  | ![Exemplo de mensagem de erro com o Chrome em francês em uma página em inglês](/files/4327/error-chrome-win7.png)       |
| Opera 12.10 (Mac OSX)  | ![Exemplo de uma mensagem de erro com o Opera em francês em uma página em inglês](/files/4331/error-opera-macos.png)    |

Para personalizar a aparência e o texto dessas mensagens, você deve usar JavaScript; não há como fazer isso usando apenas HTML e CSS.

HTML5 fornece a [API de validação de restrição](/pt-BR/docs/Web/API/Constraint_validation) para verificar e personalizar o estado de um elemento de formulário. Entre outras coisas, é possível alterar o texto da mensagem de erro. Vejamos um exemplo rápido:

```html
<form>
  <label for="mail">Gostaria que você me enviasse um e-mail</label>
  <input type="email" id="mail" name="mail" />
  <button>Enviar</button>
</form>
```

Em JavaScript, você chama o método [`setCustomValidity()`](</pt-BR/docs/HTML/HTML5/Constraint_validation#Constraint_API's_element.setCustomValidity()>):

```js
var email = document.getElementById("mail");

email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("spero um e-mail, querida!");
  } else {
    email.setCustomValidity("");
  }
});
```

{{EmbedLiveSample("Customized_error_messages", "100%", 80)}}

## Validando formulários usando JavaScript

Se você quiser controlar a aparência das mensagens de erro nativas, ou se quiser lidar com navegadores que não suportam a validação de formulário interna do HTML, você deve usar JavaScript.

### A API de validação de restrição

Mais e mais navegadores agora suportam a API de validação de restrição, e ela está se tornando confiável. Essa API consiste em um conjunto de métodos e propriedades disponíveis em interfaces específicas de elementos de formulário:

- [HTMLButtonElement](/pt-BR/docs/Web/API/HTMLButtonElement)
- [HTMLFieldSetElement](/pt-BR/docs/Web/API/HTMLFieldSetElement)
- [HTMLInputElement](/pt-BR/docs/Web/API/HTMLInputElement)
- [HTMLOutputElement](/pt-BR/docs/Web/API/HTMLOutputElement)
- [HTMLSelectElement](/pt-BR/docs/Web/API/HTMLSelectElement)
- [HTMLTextAreaElement](/pt-BR/docs/Web/API/HTMLTextAreaElement)

#### Propriedades da API de validação de restrições

| Propriedade             | Descrição                                                                                                                                                                                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `mensagem de validação` | Uma mensagem localizada descrevendo as restrições de validação que o controle não atende (se houver), ou a string vazia se o controle não for um candidato para validação de restrição (`willValidate` é `false`), ou o valor do elemento satisfaz suas restrições. |
| `validade`              | Um objeto {{domxref("ValidityState")}} descrevendo o estado de validade do elemento. Consulte esse artigo para obter detalhes de possíveis estados de validade.                                                                                                     |
| `vai Validar`           | Retorna `true` se o elemento for validado quando o formulário for enviado; `falso` caso contrário.                                                                                                                                                                  |

#### Métodos de API de validação de restrições

| Método                                          | Descrição                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `checkValidade()`                               | Retorna `true` se o valor do elemento não tiver problemas de validade; `falso` caso contrário. Se o elemento for inválido, este método também causará um evento {{event("invalid")}} no elemento.                                                                                                                                                                                                                                                                                  |
| {{domxref("HTMLFormElement.reportValidity()")}} | Retorna `true` se o elemento ou seus controles filho atendem às restrições de validação. Quando `false` é retornado, eventos canceláveis {{event("invalid")}} são acionados para cada elemento inválido e problemas de validação são relatados ao usuário.                                                                                                                                                                                                                         |
| `setCustomValidity(mensagem)`                   | Adiciona uma mensagem de erro personalizada ao elemento; se você definir uma mensagem de erro personalizada, o elemento será considerado inválido e o erro especificado será exibido. Isso permite que você use o código JavaScript para estabelecer uma falha de validação diferente daquelas oferecidas pela API de validação de restrição padrão. A mensagem é mostrada ao usuário ao relatar o problema. Se o argumento for a string vazia, o erro personalizado será apagado. |

Para navegadores legados, é possível usar um [polyfill como Hyperform](https://hyperform.js.org/) para compensar a falta de suporte para a API de validação de restrição. Como você já está usando JavaScript, usar um polyfill não é um fardo adicional para o design ou implementação de seu site ou aplicativo da Web.

#### Exemplo usando a API de validação de restrição

Vamos ver como usar essa API para criar mensagens de erro personalizadas. Primeiro, o HTML:

```html
<form novalidate>
  <p>
    <label for="mail">
      <span>Por favor, insira um endereço de e-mail:</span>
      <input type="email" id="mail" name="mail" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>
  <button>Enviar</button>
</form>
```

Este formulário simples usa o atributo [`novalidate`](/pt-BR/docs/Web/HTML/Element/form#novalidate) para desativar a validação automática do navegador; isso permite que nosso script assuma o controle sobre a validação. No entanto, isso não desativa o suporte para a API de validação de restrição nem a aplicação da pseudoclasse CSS {{cssxref(":valid")}}, {{cssxref(":invalid")}}, {{cssxref( ":in-range")}} e {{cssxref(":out-of-range")}} classes. Isso significa que, embora o navegador não verifique automaticamente a validade do formulário antes de enviar seus dados, você ainda pode fazer isso sozinho e estilizar o formulário de acordo.

O atributo [`aria-live`](/pt-BR/docs/Accessibility/ARIA/ARIA_Live_Regions) garante que nossa mensagem de erro personalizada seja apresentada a todos, incluindo aqueles que usam tecnologias assistivas, como leitores de tela.

##### CSS

Este CSS estiliza nosso formulário e a saída de erro para parecer mais atraente.

```css
/* Isso é apenas para tornar o exemplo mais agradável */
corpo {
  font: 1em sans-serif;
  padding: 0;
  margin: 0;
}

form {
  max-width: 200px;
}

p * {
  display: block;
}

input[type="email"] {
  -webkit-appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/* Este é o nosso estilo para os campos inválidos */
input:invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus:invalid {
  outline: none;
}

/* Este é o estilo das nossas mensagens de erro */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

##### JavaScript

O código JavaScript a seguir lida com a validação de erro personalizada.

```js
// Existem muitas maneiras de escolher um nó DOM; aqui temos o próprio formulário e o e-mail
// caixa de entrada, bem como o elemento span no qual colocaremos a mensagem de erro.

var form = document.getElementsByTagName("form")[0];
var email = document.getElementById("mail");
var error = document.querySelector(".error");

email.addEventListener(
  "input",
  function (event) {
    // Cada vez que o usuário digita algo, verificamos se o
    // campo de email é válido.
    if (email.validity.valid) {
      // Caso haja uma mensagem de erro visível, se o campo
      // é válido, removemos a mensagem de erro.
      error.innerHTML = ""; // Reinicia o conteúdo da mensagem
      error.className = "error"; // Redefinir o estado visual da mensagem
    }
  },
  false,
);
form.addEventListener(
  "submit",
  function (event) {
    // Cada vez que o usuário tenta enviar os dados, verificamos
    // se o campo de email for válido.
    if (!email.validity.valid) {
      // Se o campo não for válido, exibimos um personalizado
      // mensagem de erro.
      error.innerHTML = "Espero um e-mail, querida!";
      error.className = "error active";
      // E evitamos que o formulário seja enviado cancelando o evento
      event.preventDefault();
    }
  },
  false,
);
```

Aqui está o resultado ao vivo:

{{EmbedLiveSample("Example_using_the_constraint_validation_API", "100%", 130)}}

A API de validação de restrição oferece uma ferramenta poderosa para lidar com a validação de formulários, permitindo que você tenha um controle enorme sobre a interface do usuário acima e além do que você pode fazer apenas com HTML e CSS.

### Validando formulários sem uma API integrada

Às vezes, como em navegadores legados ou [widgets personalizados](/pt-BR/docs/HTML/Forms/How_to_build_custom_form_widgets), você não poderá (ou não desejará) usar a API de validação de restrição. Nesse caso, você ainda pode usar JavaScript para validar seu formulário. Validar um formulário é mais uma questão de interface do usuário do que validação de dados reais.

Para validar um formulário, você deve se fazer algumas perguntas:

- Que tipo de validação devo realizar?
  - : Você precisa determinar como validar seus dados: operações de string, conversão de tipo, expressões regulares, etc. Você decide. Apenas lembre-se de que os dados do formulário são sempre texto e são sempre fornecidos ao seu script como strings.
- O que devo fazer se o formulário não validar?
  - : Isso é claramente uma questão de interface do usuário. Você tem que decidir como o formulário se comportará: O formulário envia os dados mesmo assim? Você deve destacar os campos que estão com erro? Você deve exibir mensagens de erro?
- Como posso ajudar o usuário a corrigir dados inválidos?

  - : Para diminuir a frustração do usuário, é muito importante fornecer o máximo de informações úteis possível para orientá-lo na correção de suas entradas. Você deve oferecer sugestões iniciais para que eles saibam o que é esperado, bem como mensagens de erro claras. Se você quiser se aprofundar nos requisitos da interface do usuário de validação de formulário, há alguns artigos úteis que você deve ler:

    - SmashingMagazine: [Form-Field Validation: The Errors-Only Approach](http://uxdesign.smashingmagazine.com/2012/06/27/form-field-validation-errors-only-approach/)
    - SmashingMagazine: [Validação de formulário da Web: práticas recomendadas e tutoriais](http://www.smashingmagazine.com/2009/07/07/web-form-validation-best-practices-and-tutorials/)
    - Seis revisões: [Práticas recomendadas para dicas e validação em formulários da Web](http://sixrevisions.com/user-interface/best-practices-for-hints-and-validation-in-web-forms/)
    - Uma lista à parte: [Validação Inline em Formulários da Web](http://www.alistapart.com/articles/inline-validation-in-web-forms/)

#### Um exemplo que não usa a API de validação de restrição

Para ilustrar isso, vamos reconstruir o exemplo anterior para que funcione com navegadores legados:

```html
<form>
  <p>
    <label for="mail">
      <span>Por favor, insira um endereço de e-mail:</span>
      <input type="text" class="mail" id="mail" name="mail" />
      <span class="error" aria-live="polite"></span>
    </label>
  </p>

  <p>
    <!-- Alguns navegadores legados precisam ter o atributo `type`
       explicitamente definido como `submit` no elemento `button` -->
    <button type="submit">Enviar</button>
  </p>
</form>
```

Como você pode ver, o HTML é quase o mesmo; acabamos de remover os recursos de validação HTML. Observe que [ARIA](/pt-BR/docs/Accessibility/ARIA) é uma especificação independente que não está especificamente relacionada ao HTML5.

##### CSS

Da mesma forma, o CSS não precisa mudar muito; apenas transformamos a pseudo-classe CSS {{cssxref(":invalid")}} em uma classe real e evitamos usar o seletor de atributos que não funciona no Internet Explorer 6.

```css
/* Isso é apenas para tornar o exemplo mais agradável */
body {
  font: 1em sans-serif;
  padding: 0;
  margin: 0;
}

form {
  max-width: 200px;
}

p * {
  display: block;
}

input.mail {
  -webkit-appearance: none;

  width: 100%;
  border: 1px solid #333;
  margin: 0;

  font-family: inherit;
  font-size: 90%;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

/* Este é o nosso estilo para os campos inválidos */
input.invalid {
  border-color: #900;
  background-color: #fdd;
}

input:focus.invalid {
  outline: none;
}

/* Este é o estilo das nossas mensagens de erro */
.error {
  width: 100%;
  padding: 0;

  font-size: 80%;
  color: white;
  background-color: #900;
  border-radius: 0 0 5px 5px;

  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.error.active {
  padding: 0.3em;
}
```

##### JavaScript

As grandes mudanças estão no código JavaScript, que precisa fazer muito mais trabalho pesado.

```js
// Há menos maneiras de escolher um nó DOM com navegadores legados
const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("mail");

// O seguinte é um truque para alcançar o próximo nó Elemento irmão no DOM
// Isso é perigoso porque você pode facilmente construir um loop infinito.
// Em navegadores modernos, você deve preferir usar element.nextElementSibling
let error = email;
while ((error = error.nextSibling).nodeType != 1);

// De acordo com a especificação HTML5
var emailRegExp =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?: \.[a-zA-Z0-9-]+)*$/;

// Muitos navegadores legados não suportam o método addEventListener.
// Aqui está uma maneira simples de lidar com isso; está longe de ser o único.
function addEvent(element, event, callback) {
  var previousEventCallBack = element["on" + event];
  element["on" + event] = function (e) {
    var output = callback(e);

    // Um retorno de chamada que retorna `false` interrompe a cadeia de retorno de chamada
    // e interrompe a execução do callback do evento.
    if (output === false) return false;

    if (typeof previousEventCallBack === "function") {
      output = previousEventCallBack(e);
      if (output === false) return false;
    }
  };
}

// Agora podemos reconstruir nossa restrição de validação
// Como não dependemos da pseudo-classe CSS, temos que
// define explicitamente a classe valid/invalid em nosso campo de email
addEvent(window, "load", function () {
  // Here, we test if the field is empty (remember, the field is not required)
  // If it is not, we check if its content is a well-formed e-mail address.
  var test = email.value.length === 0 || emailRegExp.test(email.value);

  email.className = test ? "válido" : "inválido";
});

// Isso define o que acontece quando o usuário digita no campo
addEvent(email, "input", function () {
  var test = email.value.length === 0 || emailRegExp.test(email.value);
  if (test) {
    email.className = "válido";
    error.innerHTML = "";
    error.className = "error";
  } else {
    email.className = "inválido";
  }
});

// Isso define o que acontece quando o usuário tenta enviar os dados
addEvent(form, "submit", function () {
  var test = email.value.length === 0 || emailRegExp.test(email.value);

  if (!test) {
    email.className = "inválido";
    error.innerHTML = "Espero um e-mail, querida!";
    error.className = "error active";

    // Alguns navegadores legados não suportam o método method
    return false;
  } else {
    email.className = "valid";
    error.innerHTML = "";
    error.className = "error";
  }
});
```

O resultado fica assim:

{{EmbedLiveSample("An_example_that_doesn't_use_the_constraint_validation_API", "100%", 130)}}

Como você pode ver, não é issodifícil construir um sistema de validação por conta própria. A parte difícil é torná-lo genérico o suficiente para usá-lo em várias plataformas e em qualquer formulário que você possa criar. Existem muitas bibliotecas disponíveis para realizar a validação de formulários; você não deve hesitar em usá-los. Aqui estão alguns exemplos:

- Biblioteca independente

  - [Validate.js](http://rickharrison.github.com/validate.js/)

- plug-in jQuery:

  - [Validação](http://bassistance.de/jquery-plugins/jquery-plugin-validation/)

#### Validação remota

Em alguns casos, pode ser útil realizar alguma validação remota. Esse tipo de validação é necessário quando os dados inseridos pelo usuário estão vinculados a dados adicionais armazenados no lado do servidor de sua aplicação. Um caso de uso para isso são os formulários de registro, onde você solicita um nome de usuário. Para evitar a duplicação, é mais inteligente realizar uma solicitação AJAX para verificar a disponibilidade do nome de usuário em vez de pedir ao usuário que envie os dados e, em seguida, envie o formulário com um erro.

A realização de tal validação requer algumas precauções:

- Requer expor uma API e alguns dados publicamente; certifique-se de que não são dados confidenciais.
- O atraso de rede requer a execução de validação assíncrona. Isso requer algum trabalho de interface do usuário para garantir que o usuário não seja bloqueado se a validação não for realizada corretamente.

## Conclusão

A validação de formulário não requer JavaScript complexo, mas requer pensar cuidadosamente sobre o usuário. Lembre-se sempre de ajudar seu usuário a corrigir os dados que ele fornece. Para isso, certifique-se de:

- Exibir mensagens de erro explícitas.
- Seja permissivo quanto ao formato de entrada.
- Indique exatamente onde ocorre o erro (especialmente em formulários grandes).

{{PreviousMenuNext("Learn/HTML/Forms/Sending_and_retrieving_form_data", "Learn/HTML/Forms/How_to_build_custom_form_widgets", "Learn/HTML/Forms")}}
