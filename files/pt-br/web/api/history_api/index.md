---
title: Manipulando o histórico do navegador
slug: Web/API/History_API
---

O objeto DOM {{ domxref("window") }} fornece acesso ao histórico do navegador através do objeto {{ domxref("window.history", "history") }}. Ele expõe métodos e propriedades úteis que permitem que você se mova para trás e para frente através do histórico de navegação do usuário, bem como — iniciando com o HTML5 — manipular o conteúdo da pilha de históricos.

## Navegando através do histórico

Mover para trás e para a frente através do histórico do usuário é feito usando os métodos `back()`, `forward()` e `go()`.

### Movendo para frente e para trás

Para mover para trás no histórico, apenas faça:

```js
window.history.back();
```

Isso funcionará exatamente como se o usuário clicasse no botão Voltar na barra de ferramentas do navegador.

Da mesma forma, você pode avançar (como se o usuário clicasse no botão Avançar), assim:

```js
window.history.forward();
```

### Movendo para um ponto específico no histórico

Você pode usar o método `go()` para carregar uma página específica do histórico. Cada página é identificada por sua posição relativa à página atual (sendo a página atual o indíce 0).

Para retornar uma página (equivalente ao método `back()`):

```js
window.history.go(-1);
```

Para avançar uma página (equivalente ao método `forward()`):

```js
window.history.go(1);
```

O número de páginas do histórico pode ser determinado pela propriedade _length_:

```js
const numberOfEntries = window.history.length;
```

> **Nota:**O Internet Explorer suporta URLs como argumento para o método `go()`; isso não é um comportamento padrão e não é suportado pelo Gecko.

## Adicionando e modificando entradas

O HTML5 introduziu os métodos [history.pushState()](/pt-BR/docs/Web/API/History/pushState) e [history.replaceState()](</pt-BR/docs/Web/API/History_API#The_replaceState()_method>), que permitem adicionar e modificar entradas no histórico, respectivamente. Estes métodos funcionam em conjunto com o evento {{ domxref("window.onpopstate") }}.

Usar `history.pushState()` modifica a referência que é utilizada no cabeçalho HTTP para objetos [`XMLHttpRequest`](/pt-BR/DOM/XMLHttpRequest) criados após a utilização do método. A referência será a URL do documento cuja janela é o `this` no momento de criação do objeto [`XMLHttpRequest`](/pt-BR/DOM/XMLHttpRequest).

### Exemplo do método pushState()

Suponha que `http://mozilla.org/foo.html` executa o seguinte JavaScript:

```js
const stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");
```

Isto fará com que a barra URL mostre `http://mozilla.org/bar.html`, porém não fará com que o navegador carregue `bar.html` ou verifique se `bar.html` existe.

Agora suponha que o usuário navegue para `http://google.com` e logo em seguida clique no botão Voltar. Nesse momento, a barra de URL mostrará `http://mozilla.org/bar.html`, e se você ler o `history.state` você receberá o `stateObj`. O evento `popstate` não será disparado pois a página foi recarregada. A página carregada será `bar.html`.

Se clicarmos no botão Voltar novamente, a URL modificará para `http://mozilla.org/foo.html`, e o documento receberá um evento `popstate`, dessa vez com objeto de estado sendo nulo. Nesse momento, o documento também não altera seu conteúdo em relação ao passo anterior, porém o documento pode atualizar seu conteúdo manualmente após o recebimento do evento `popstate`.

### O método pushState()

`pushState()` recebe três parâmetros: um objeto de estado, um título (que atualmente é ignorado) e (opcionalmente) uma URL. Vamos examinar cada um dos argumentos com mais detalhes:

- **objeto de estado** — O objeto de estado é um objeto JavaScript que é associado com uma nova entrada no histórico criado por `pushState()`. Sempre que o usuário navegar para o novo estado um evento `popstate` é disparado e a propriedade `state` do evento contém uma cópia do objeto de estado da entrada no histórico.
- O objeto de estado pode ser qualquer coisa que possa ser serializada. O Firefox salva o objeto de estado no disco do usuário para que possa ser restaurado após um reinício do navegador. É imposto um limite de 640k caracteres na representação serializada do objeto de estado. Caso um objeto de estado serializado maior que este valor seja passado como argumento para `pushState()`, o método irá ativar uma exceção. Caso você precise de mais espaço do que 640k, é recomendada a utilização do `sessionStorage` e/ou `localStorage`.
- **título** — Atualmente o Firefox ignora este parâmetro. Passar uma string vazia é suficiente contra futuras mudanças no método. Alternativamente, você pode passar um título curto para o estado.
- **URL** — A URL da nova entrada no histórico é passada por este parâmetro. Note que o navegador não tentará carregar essa URL após uma chamada do método `pushState()`, porém pode tentar carregar a URL mais tarde, por exemplo depois que o usuário reinicie o navegador. A nova URL não precisa ser absoluta; caso seja relativa, é resolvida em relação a atual URL. A nova URL precisar ser da mesma origem que a URL atual; caso contrário, `pushState()` ativará uma exceção. Este parâmetro é opcional; caso seja especificado, é utilizado como a atual URL do documento.

> **Nota:**No Gecko 2.0 até Gecko 5.0, o objeto passado é serializado utilizando JSON. A partir do Gecko 6.0, o objeto é serializado usando [o algorítmo de clonagem estruturada](/pt-BR/DOM/The_structured_clone_algorithm). Isso permite que uma variedade maior de objetos possam ser serializados.

De certa forma, chamar o método `pushState()` é similar a executar `window.location = "#foo"`, no sentido de que ambos criarão e ativarão uma nova entrada no histórico associado com o documento atual. Porém `pushState()` tem algumas vantagens:

- A nova URL pode ser qualquer URL na mesma origem da atual. Em contrapartida, modificar o valor de `window.location` o mantém no mesmo {{ domxref("document") }} somente se apenas a hash é modificada.
- Você não precisa mudar a URL caso não queira. Em contrapartida, executar `window.location = "#foo"` só cria uma nova entrada no histórico se a atual hash não for `#foo`.
- Você pode associar dados arbitrários com a nova entrada do histórico. Com a solução baseada em hash, você precisa codificar todos os dados relevantes em uma string curta.
- Se `title` for utilizado pelos navegadores, esse dado pode ser utilizado (independente do hash).

Note que `pushState()` nunca causa a ativação de um evento `hashchange`, mesmo se a nova URL diferir somente na hash,

Em um documento [XUL](/pt-BR/docs/Mozilla/Tech/XUL) é criado o elemento XUL especificado.

Em outros documentos, é criado um elemento com um namespace `null` de URI.

### O método replaceState()

`history.replaceState()` opera exatamente igual à `history.pushState()` com exceção de modificar a atual entrada no histórico ao invés de criar uma nova. Note que isso não impede a criação de uma nova entrada no histórico global do navegador.

`replaceState()` é particularmente útil quando você quer atualizar o objeto de estado ou a URL da atual entrada do histórico como resposta a alguma ação do usuário.

> **Nota:**Em Gecko 2.0 até Gecko 5.0, o objeto passado é serializado utilizando JSON. Começando do Gecko 6.0, o objeto é serializado usando [o algorítmo de clonagem estruturada](/pt-BR/DOM/The_structured_clone_algorithm). Isso permite que uma variedade maior de objetos possam ser serializados.

### Exemplo do método replaceState()

Suponha que `http://mozilla.org/foo.html` execute o seguinte JavaScript:

```js
const stateObj = { foo: "bar" };
history.pushState(stateObj, "page 2", "bar.html");
```

A explicação destas duas linhas acima pode ser encontrada na seção "Exemplo do método pushState()". Suponha, então, que `http://mozilla.org/bar.html` execute o seguinte JavaScript:

```js
history.replaceState(stateObj, "page 3", "bar2.html");
```

Isso fará com que a barra de URL do navegador exiba `http://mozilla.org/bar2.html`, mas não fará com que o navegador carregue `bar2.html` ou cheque se `bar2.html` existe.

Suponha agora que o usuário navegue até `http://www.microsoft.com` e, em seguida, clique no botão voltar. Neste momento, a barra de URL mostrará `http://mozilla.org/bar2.html`. Caso o usuário clique novamente no botão voltar, a barra de URL mostrará `http://mozilla.org/foo.html` e ignorará completamente `bar.html`.

### O evento popstate

O evento `popstate` é disparado sempre que a entrada do histórico ativo é alterada. Se a entrada do histórico ativa foi criada por uma chamada `pushState` ou afetada por uma chamada `replaceState`, a propriedade `state` do evento `popstate` contém uma cópia do objeto de estado da entrada do histórico.

Veja {{ domxref("window.onpopstate") }} para exemplo de utilização.

### Lendo o estado atual

Quando sua página é carregada, ela pode ter um objeto de estado não nulo. Isso pode acontecer, por exemplo, se a página definir um objeto de estado (usando `pushState()` ou `replaceState()`) e, em seguida, o usuário reiniciar seu navegador. Quando sua página é recarregada, ela receberá um evento `onload`, mas nenhum evento `popstate`. No entanto, se você ler a propriedade `history.state`, receberá o objeto de estado que teria obtido se um `popstate` tivesse sido disparado.

Você pode ler o estado da entrada do histórico atual sem esperar por um evento `popstate` usando a propriedade `history.state` como o exemplo abaixo:

```js
var currentState = history.state;
```

## Exemplos

Para um exemplo completo de um web site AJAX, veja: [Exemplo de navegação Ajax](/pt-BR/docs/Web/Guide/API/DOM/Manipulating_the_browser_history/Example).

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}
