---
title: Utilizando a função "alerta"
slug: Web/Accessibility/ARIA/Roles/alert_role
---

### Descrição

Esta técnica mostra como utilizar o atributo _role_ [alert](https://www.w3.org/TR/wai-aria/roles#alert) e demonstra seu efeito em navegadores e tecnologias assistivas.

O atributo de alerta é utilizado para comunicar alguma mensagem importante e, frequentemente, urgente. Quando este atributo (_role_) estiver ligado a um elemento, o navegador vai enviar um evento acessível de alerta aos produtos de tecnologia assistiva que, então, poderão notificar seus utilizadores sobre o que estiver acontecendo. O atributo _alert_ é mais útil para as informações que requerem a atenção imediata na tela. Por exemplo:

- Um valor inválido foi inserido em um campo de um formulário
- A sessão atual expirou
- a conexão com o servidor foi perdida, as mudanças locais não serão salvas.

Por causa da sua natureza intrusiva, o atributo de alerta deve ser usado moderadamente e, apenas, nas situações que exigirem atenção imediata. Mudanças dinâmicas que são menos urgentes devem receber um método menos agressivo, tal como a aria-live="polite", ou outros atributos (_roles_) para regiões dinâmicas.

### Efeitos possíveis sobre as tecnologias assistivas e seus utilizadores

Quando o atributo (_role_) alerta é adicionado a um elemento, ou este se torna visível, o identificador de navegação (_user agent_) deve fazer o seguinte:

- Exibir o elemento como tendo uma função de alerta (_alert role_) na API de acessibilidade do sistema operacional.
- Disparar um evento de alerta acessível, usando a API de acessibilidade do sistema operacional, se houver suporte para tal.

Os produtos de tecnologias assistivas devem atender tal evento e notificar seus utilizadores, em conformidade.

- Leitores de tela podem interromper a produção corrente (quer sejam a fala, ou o braille) e, imediatamente, anunciar, ou exibir, a mensagem de alerta.
- Ampliadores de tela podem, visualmente, indicar que houve um alerta e qual era o seu texto.

> **Nota:** As opiniões podem divergir sobre como uma tecnologia assistiva deve gerenciar esta técnica. A informação oferecida acima é uma dessas opiniões e, portanto, não é normativa.

### Exemplos

#### Exemplo 1: Adicionando o atributo (_role_) no código HTML

O trecho abaixo mostra como o atributo _role alert_ é inserido, diretamente, no código-fonte HTML. No momento em que o elemento termina de carregar, o leitor de tela deve ser notificado do alerta. Se o elemento já estiver no código-fonte original quando a página carregar, o leitor de tela vai anunciar o erro imediatamente após a apresentação do título da página.

```html
<h2 role="alert">
  Your form could not be submitted because of 3 validation errors.(Seu
  formulário não pode ser submetido devido a 3 erros de validação)
</h2>
```

#### Exemplo 2: Adicionando, dinamicamente, um elemento com a função de alerta

Esta parte mostra como criar, de forma dinâmica, um elemento com uma função de alerta e como adicioná-lo à estrutura do documento:

```js
var myAlert = document.createElement("p");
myAlert.setAttribute("role", "alert");
var myAlertText = document.createTextNode(
  "You must agree with our terms of service to create an account.(Você deve concordar com os nossos termos de serviço, a fim de criar uma conta)",
);
myAlert.appendChild(myAlertText);
document.body.appendChild(myAlertText);
```

**Nota:** O mesmo resultado pode ser obtido com menos código, quando se utiliza uma biblioteca de _script_, como jQuery:

```js
$(
  "<p role='alert'>You must agree with our terms of service to create an account.(Você deve concordar com os nossos termos de serviço para criar uma conta)</p>",
).appendTo(document.body);
```

#### Exemplo 3: Adicionando a função de alerta a um elemento existente

Às vezes é preferível adicionar uma função de alerta a um elemento que já está visível na página, a criar um novo elemento. Isto possibilita que os desenvolvedores reiterem a informação que virá a ser mais importante, ou urgente, para os utilizadores. Por exemplo, um controle de formulário pode ter uma instrução sobre o valor esperado. Caso um valor diferente seja inserido, o`role="alert"`pode ser adicionado ao texto de instrução e, então, o leitor de tela o anuncia como um alerta. O pseudo código, no fragmento abaixo, ilustra esta abordagem:

```html
<p id="formInstruction">You must select at least 3 options</p>
```

```js
// When the user tries to submit the form with less than 3 checkboxes selected (Quando houver a tentativa de submissão do formulário com menos de 3 caixas de seleção marcadas):
document.getElementById("formInstruction").setAttribute("role", "alert");
```

#### Exemplo 4: Construindo um elemento com uma função de alerta visível

Se um elemento já tem o atributo `role="alert"` e é, inicialmente, escondido pelo uso da CSS, torná-lo visível o faz disparar como se estivesse adicionado à página. Isto significa que um alerta existente pode ser "utilizado" múltiplas vezes.

**Nota:** Na maioria dos casos, esta abordagem não é recomendada, porque não é a ideal para esconder erro, ou alerta de texto, que não for aplicável no momento. Utilizadores de tecnologias assistivas antigas podem, ainda, perceber o texto de alerta, mesmo quando este não devesse ser aplicado, fazendo com que acreditem, incorretamente, que há um problema.

```css
.hidden {
  display: none;
}
```

```html
<p id="expirationWarning" role="alert" class="hidden">
  Your log in session will expire in 2 minutes(A sua sessão vai expirar em 2
  minutos)
</p>
```

```js
// removing the 'hidden' class makes the element visible, which will make the screen reader announce the alert:(Remover a classe "hidden" faz o leitor de tela anunciar o alerta)
document.getElementById("expirationWarning").className = "";
```

### Notas

- A utilização da função alerta em um elemento implica que ele tenha a `aria-live="assertive"`.
- O atributo _alert role_ deve ser usado, apenas, para conteúdo com texto estático. O elemento no qual a função alerta for usada não deve ser passível de receber foco, então, um leitor de tela vai, automaticamente, anunciar o alerta, independentemente de onde o foco do teclado esteja localizado no momento.
- Se um alerta oferecer, também, controles interativos (tais como um controle de formulário que possibilite a sua correção, ou um botão "OK" que descarte o alerta), em seu lugar deve-se utilizar um [_alertdialog_ (diálogo de alerta)](/pt-BR/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role).

### Atributos ARIA utilizados

- [alert](https://www.w3.org/TR/wai-aria/roles#alert)

### Técnicas ARIA relacionadas

- [Utilizando a função alertdialog](/pt-BR/Accessibility/ARIA/ARIA_Techniques/Using_the_alertdialog_role)
- [Utilizando a propriedade aria-invalid](/pt-BR/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-invalid_property)

### Compatibilidade

TBD: Adicionar informações de suporte para UA comum e combinações de produtos TA / AT

### Recursos Adicionais

- Melhores práticas ARIA - Alert Role: <https://www.w3.org/TR/wai-aria-practices/#alert>
