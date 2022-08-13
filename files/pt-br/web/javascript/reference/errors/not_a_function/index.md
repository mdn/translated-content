---
title: 'TypeError: "x" is not a function'
slug: Web/JavaScript/Reference/Errors/Not_a_function
tags:
  - Erros JavaScrip TypeError
translation_of: Web/JavaScript/Reference/Errors/Not_a_function
---
<div>{{jsSidebar("Errors")}}</div>

<h2 id="Mensagem">Mensagem</h2>

<pre class="syntaxbox">TypeError: Object doesn't support property or method {x} (Edge)
TypeError: "x" is not a function
</pre>

<h2 id="Tipo_do_erro">Tipo do erro</h2>

<p>{{jsxref("TypeError")}}.</p>

<h2 id="O_que_deu_errado">O que deu errado?</h2>

<p>Houve a tentativa de obter um valor de uma função, mas o valor não é exatamente uma função. Algum código espera que você forneça uma função, mas não foi o que acontenceu.</p>

<p>Talvez exista um erro de digitação no nome da função? Talvez o objeto no qual você está chamando o método não tenha essa função? Por exemplo, objetos no JavaScript não tem a função <code>map</code>, mas o objeto Array tem.</p>

<p>Existem várias funções internas que precisam de uma função (callback). Você terá que prover uma função para obter esses métodos funcionando corretamente:</p>

<ul>
 <li>Quando estiver trabalhando com os objetos {{jsxref("Array")}} ou {{jsxref("TypedArray")}}:
  <ul>
   <li>{{jsxref("Array.prototype.every()")}}, {{jsxref("Array.prototype.some()")}}, {{jsxref("Array.prototype.forEach()")}}, {{jsxref("Array.prototype.map()")}}, {{jsxref("Array.prototype.filter()")}},  {{jsxref("Array.prototype.reduce()")}}, {{jsxref("Array.prototype.reduceRight()")}}, {{jsxref("Array.prototype.find()")}}</li>
  </ul>
 </li>
 <li>Quando estiver trabalhando com os objetos {{jsxref("Map")}} ou {{jsxref("Set")}}:
  <ul>
   <li>{{jsxref("Map.prototype.forEach()")}} e {{jsxref("Set.prototype.forEach()")}}</li>
  </ul>
 </li>
</ul>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Um_erro_de_digitação_no_nome_da_função">Um erro de digitação no nome da função</h3>

<p>Nesse caso, que ocorre com bastante frequência, existe um erro de digitação no nome do método:</p>

<pre class="brush: js example-bad">var x = document.getElementByID('foo');
// TypeError: document.getElementByID is not a function
</pre>

<p>O nome correto da função é <code>getElementByI<strong>d</strong></code>:</p>

<pre class="brush: js example-good">var x = document.getElementById('foo');
</pre>

<h3 id="Função_chamada_no_objeto_errado">Função chamada no objeto errado</h3>

<p>Para alguns métodos, é necessário fornecer a função (callback) que irá funcionar apenas em objetos específicos. Nesse exemplo, é utilizado {{jsxref("Array.prototype.map()")}} que irá funcionar apenas em objetos {{jsxref("Array")}}.</p>

<pre class="brush: js example-bad">var obj = {a: 13, b: 37, c: 42};

obj.map(function(num) {
  return num * 2;
});

// TypeError: obj.map is not a function</pre>

<p>Ao invés disso, use uma array:</p>

<pre class="brush: js example-good">var numbers = [1, 4, 9];

numbers.map(function(num) {
  return num * 2;
});

// Array [2, 8, 18]
</pre>

<h3 id="Função_compartilha_o_nome_com_uma_propriedade_pré-existente">Função compartilha o nome com uma propriedade pré-existente</h3>

<p>Algumas vezes, ao criar uma classe, pode haver uma propriedade e função com os mesmos nomes. Ao chamar a função, o compilador não consegue identificar a função.</p>

<pre class="brush: js example-bad">var Dog = function () {
 this.age = 11;
 this.color = "black";
 this.name = "Ralph";
 return this;
}

Dog.prototype.name = function(name) {
 this.name = name;
 return this;
}


var myNewDog = new Dog();
myNewDog.name("Cassidy"); //Uncaught TypeError: myNewDog.name is not a function
</pre>

<p>Então, use um nome diferente para a propriedade</p>

<pre class="brush: js example-good">var Dog = function () {
 this.age = 11;
 this.color = "black";
 this.dogName = "Ralph"; //Using this.dogName instead of .name
 return this;
}

Dog.prototype.name = function(name) {
 this.dogName = name;
 return this;
}


var myNewDog = new Dog();
myNewDog.name("Cassidy"); //Dog { age: 11, color: 'black', dogName: 'Cassidy' }
</pre>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a href="/en-US/docs/Web/JavaScript/Reference/Functions">Funções</a></li>
</ul>
