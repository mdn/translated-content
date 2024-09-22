---
title: Usando a API Web Storage
slug: Web/API/Web_Storage_API/Using_the_Web_Storage_API
---

{{DefaultAPISidebar("Web Storage API")}}

A API Web Storage fornece mecanismos pelos quais os navegadores podem armazenar pares de chaves/valores de uma maneira muito mais segura e intuitiva do que usar cookies. Este artigo fornece um passo a passo sobre como usar essa tecnologia.

## Conceitos básicos

Objetos `Storage` são simples conjuntos contendo pares de chave/valor, de forma parecida com objetos, porém eles permanecem intactos mesmo após a página ser recarregada. As chaves e valores são sempre strings (note que chaves cujo nome seja um número inteiro serão automaticamente convertidas par strings, assim como acontece nos objetos). Você pode acessar esses valores como você faria com um objeto ou usando os métodos {{domxref("Storage.getItem()")}} e {{domxref("Storage.setItem()")}}. As três linhas seguintes definem o valor de `corDefinida` de maneiras diferentes, mas com o mesmo resultado:

```js
localStorage.corDefinida = "#a4509b";
localStorage["corDefinida"] = "#a4509b";
localStorage.setItem("corDefinida", "#a4509b");
```

> [!NOTE]
> Recomendamos que você utilize a API Web Storage (`setItem`, `getItem`, `removeItem`, `key`, `length`) para evitar as [armadilhas](https://www.2ality.com/2012/01/objects-as-maps.html) associadas ao uso de objetos literais como mapas de chave-valor.

Os dois mecanismos presentes na Web Storage são os seguintes:

- O `sessionStorage` mantém uma área de armazenamento separada para cada origem diferente. Cada uma dessas áreas fica disponível durante a sessão da página (ou seja, enquanto a aba do navegador estiver aberta, incluindo recarregamentos e restaurações de páginas).
- O `localStorage` faz a mesma coisa, mas os dados armazenados aqui continuam existindo mesmo depois do navegador ser fechado e reaberto.

Esses mecanismos estão disponíveis através das propriedades {{domxref("Window.sessionStorage")}} e {{domxref("Window.localStorage")}} (de forma mais específica, em navegadores compatíveis, o objeto `Window` implementa os objetos `WindowLocalStorage` e `WindowSessionStorage`, aos quais as propriedades `localStorage` and `sessionStorage` pertencem, respectivamente) — invocar uma dessas propriedades irá criar uma instância do objeto {{domxref("Storage")}}, através do qual itens de dados podem ser definidos, acessados e removidos. Cada origem recebe objetos Storage diferentes para `sessionStorage` and `localStorage` — eles operam e são controlados separadamente.

Por exemplo, chamar `localStorage` pela primeira vez em um documento retornará um objeto {{domxref("Storage")}}; chamar `sessionStorage` em um documento retornará um outro objeto {{domxref("Storage")}}. Ambos podem ser manipulados da mesma maneira, mas de forma isolada.

## Detectando a disponibilidade do localStorage

Para poder usarmos o localStorage, devemos antes verificar se ele é compatível e está disponível na sessão atual de navegação.

### Testando a disponibilidade

> [!NOTE]
> Esta API está disponível nas versões atuais de todos os principais navegadores de internet (_browsers_). O teste de disponibilidade só é necessário se você precisa oferecer suporte para browsers muito antigos ou em circunstâncias limitadas como as descritas abaixo.

Navegadores compatíveis com localStorage terão uma propriedade no objeto `window` chamada `localStorage`. Contudo, por várias razões, apenas verificar se essa propriedade existe pode gerar erros. Se ela existir, ainda não haverá garantias de que a API localStorage está de fato disponível para uso, já que vários navegadores fornecem opções que desativam o localStorage. Dessa forma, um navegador pode ser _compatível_ com o localStorage, mas também pode não torná-lo _disponível_ para os scripts usarem.

Contextualizando com um exemplo, para um documento visto no modo anônimo de um navegador, alguns navagadores podem nos dar um objeto `localStorage` de quota zero, tornando-o efetivamente inusável. Comparativamente, também é possível receber um erro `QuotaExceededError` legítimo, o que significaria que todo o espaço disponível foi utilizado, ainda que exista armazenamento _disponível_. Nossa ferramente de detecção também deve tomar esses cenários como passíveis de acontecer.

> [!WARNING]
> Função **obsoleta** que era utilizada para detectar se o localStorage era tanto suportado quanto disponível.

```js
function storageAvailable(type) {
  try {
    var storage = window[type],
      x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      // everything except Firefox
      (e.code === 22 ||
        // Firefox
        e.code === 1014 ||
        // test name field too, because code might not be present
        // everything except Firefox
        e.name === "QuotaExceededError" ||
        // Firefox
        e.name === "NS_ERROR_DOM_QUOTA_REACHED") &&
      // acknowledge QuotaExceededError only if there's something already stored
      storage.length !== 0
    );
  }
}
```

> [!WARNING]
> Desde a época em que esse artigo foi parcialmente traduzido, a propriedade [code](/en-US/docs/Web/API/DOMException/code) de `DOMException` (mostrada no código acima como `e.code`) ficou deprecada e portanto esse código mostrado acima não deve ser utilizado em implementações modernas e caso você tenha seguido esse exemplo, é sugerido que você atualize seu código antigo para a versão mais moderna, mostrada abaixo:

```js
function storageAvailable(type){
  let storage;
  try{
    storage = window[type];
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (e) {
    return (
      e instanceof DOMException &&
      e.name == "QuotaExceededError" &&
      //reconhece o erro QuotaExceededError apenas se algo já foi armazenado
      storage &&
      storage.length !== 0
    );
  }
}
```

E aqui está como você a usaria:

```js
if (storageAvailable("localStorage")) {
  // Obaaa! Podemos usufruir de tudo que há de incrível no localStorage
} else {
  // Péssimas notícias, localStorage não disponível
}
```

Outra forma de testar essa disponibilidade do `sessionStorage` é chamando a função `storageAvailable('sessionStorage')`.

Veja mais aqui sobre [uma breve história dos detectores de localStorage](https://gist.github.com/paulirish/5558557).

## Exemplo

Para ilustrar o uso típico do armazenamento na web, criamos um exemplo simples e criativamente nomeado como **Web Storage Demo**. A [landing page](https://mdn.github.io/dom-examples/web-storage/) providencia os controles para customizar a cor, fonte e a imagem decorativa:

![](landing.png)Quando você escolhe opções diferentes, a página é atualizada instantaneamente; Somado a isso, suas escolhas são armazenadas no `localStorage`, assim quando você sair da página e carregá-la de novo depois, suas escolhas serão lembradas.

Também foi providenciada uma [página para saída de eventos](https://mdn.github.io/dom-examples/web-storage/event.html) — caso você abra essa página em outra aba e faça mudanças nas escolhas da landing page, você conseguirá visualizar a emissãop das informações atualizadas de armazenamento assim que um {{domxref("StorageEvent")}} for acionado.

![](event-output.png)

> [!NOTE]
> Além de visualizar as páginas de exemplo ao vivo dos links acima, você também pode acessar aqui o [código-fonte](https://github.com/mdn/dom-examples/tree/master/web-storage).

### Testando se o seu armazenamento foi populado

Para começar, no [main.js](https://github.com/mdn/dom-examples/blob/master/web-storage/main.js), é preciso testar se o objeto `storage` já foi preenchido (i.e., _populado_ pois a página foi acessada anteriormente):

```js
if (!localStorage.getItem("bgcolor")) {
  populateStorage();
} else {
  setStyles();
}
```

A função {{domxref("Storage.getItem()")}} é usado para obter um item de dados do armazenamento; nesse caso, testamos se o item `bgcolor` existe; caso não, executamos a função `populateStorage()` para adicionar os valores existentes de personalização para o armazenamento. Caso já existam valores presentes lá, executamos o método `setStyles()` para atualizar a página, aplicando os estilos dos valores armazenados.

> [!NOTE]
> Você pode usar {{domxref("Storage.length")}} para testar se o objeto de armazenamento está vazio ou não.

### Obtendo valores do armazenamento

Como notado acima, valores podem ser recuperados do armazenamento utilizando {{domxref("Storage.getItem()")}}. Esse método recebe como argumento a chave do item de dados e retorna o valor de dados desse item.

Para demonstrar:

```js
function setStyles() {
  var currentColor = localStorage.getItem("bgcolor");
  var currentFont = localStorage.getItem("font");
  var currentImage = localStorage.getItem("image");

  document.getElementById("bgcolor").value = currentColor;
  document.getElementById("font").value = currentFont;
  document.getElementById("image").value = currentImage;

  htmlElem.style.backgroundColor = "#" + currentColor;
  pElem.style.fontFamily = currentFont;
  imgElem.setAttribute("src", currentImage);
}
```

Aqui, o código das três primeiras lines pegam os valores do armazenamneto local. Em seguida, definimos os valores mostrados nos elementos do formulário para esses valores, assim eles podem continuar sincronizados sempre que a página for recarregada. Por último, nós atualizamos os estilos ou a imagem decorativa na página para assim as opções de personalização reaparecerem ao recarregar.

### Definindo valores no armazenamento

O método {{domxref("Storage.setItem()")}} é utilizado tanto para criar novos itens de dados, e (se o item de dados já existe) para atualizar valores existentes. Esse método recebe dois argumentos - a chave do item de dados que se pretende criar/modificar e valor a ser armazenado nele.

```js
function populateStorage() {
  localStorage.setItem("bgcolor", document.getElementById("bgcolor").value);
  localStorage.setItem("font", document.getElementById("font").value);
  localStorage.setItem("image", document.getElementById("image").value);

  setStyles();
}
```

A função `populateStorage()` no código acima define três itens no armazenamento local — a or de fundo, a fonte das letras e o caminho da imagem. Daí a função `setStyles()` é executada para atualizar os estilos da página entre outras coisas.

Também incluímos um manipulador `onchange` em cada elemento do formulário assim as informações e o estilo são atualizados sempre que um valor do formulário sofre mudanças:

```js
bgcolorForm.onchange = populateStorage;
fontForm.onchange = populateStorage;
imageForm.onchange = populateStorage;
```

`Storage` só consegue armazenar e recuperar informações que estejam no tipo de dados string. Para outros tipos de dados, é preciso convertê-los para string. Para objetos simples e arrays, pode-se utilizar {{jsxref("JSON.stringify()")}}.

```js
const person = { nome : "Alex" };
localStorage.setItem("user", person);
console.log(localStorage.getItem("user")); // "[object Object]"; não é muito útil!
localStorage.setItem("user", JSON.stringify(person));
console.log(JSON.parse(localStorage.getItem("user"))); // { nome: "Alex" }
```

Contudo não existe uma forma genérica para armazenar tipos de dados arbitrários. Mais que isso, o objeto recuperado é uma [deep copy](/en-US/docs/Glossary/Deep_copy) do objeto original e alterações na cópia não afetam o objeto original.

### Reagindo a mudanças no storage com StorageEvent

O {{domxref("StorageEvent")}} é acionado sempre que uma mudança é feita no objeto {{domxref("Storage")}} (deve notar-se que esse evento não é acionado para mudanças relacionadas com o sessionStorage). Porém isso não funciona na mesma página que faz as mudanças — essa é mais uma maneira para as outras páginas do domínio que utilizam o mesmo armazenamento `storage` sincronizarem as mudanças feitas. Páginas de domínios diferentes não podem acessar os mesmos objetos storage.

Na página de eventos (mostrada aqui como [events.js](https://github.com/mdn/dom-examples/blob/master/web-storage/event.js)) esse é o único código JavaScript presente:

```js
window.addEventListener("storage", function (e) {
  document.querySelector(".my-key").textContent = e.key;
  document.querySelector(".my-old").textContent = e.oldValue;
  document.querySelector(".my-new").textContent = e.newValue;
  document.querySelector(".my-url").textContent = e.url;
  document.querySelector(".my-storage").textContent = e.storageArea;
});
```

Nele colocamos um `EventListener` para o objeto `window` que é acionado quando o objeto {{domxref("Storage")}} associado com a origem atual é mudado. Como pode ser visto no código acima, o objeto de evento associado com esse evento tem um número de propriedades contendo informações úteis — a chave do dado ou dados que sofrem alteração, o valor anterior à mudança, o valor novo depois da mudança, a URL do documento que mudou o objeto storage e o objeto storage propriamente dito.

### Excluindo registros de dados

Web Storage fornece também um par de métodos simples para remover dados. Eles não foram utilizados na nossa demo, mas adicioná-los ao seu projeto é bastante simples:

- {{domxref("Storage.removeItem()")}} recebe um único argumento — a chave do item de dados que você quer remover — e o remove individualmente do objeto de armazenamento para aquele domínio.
- {{domxref("Storage.clear()")}} não recebe argumentos e esvazia completamente o objeto de armazenamento para aquele domínio.

## Especificações

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja Também

- [Web Storage API landing page](/pt-BR/docs/Web/API/Web_Storage_API)
