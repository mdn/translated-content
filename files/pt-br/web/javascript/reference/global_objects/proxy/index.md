---
title: Proxy
slug: Web/JavaScript/Reference/Global_Objects/Proxy
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy
---
<div>
<div>{{JSRef}}</div>
</div>

<p>O objeto <strong>Proxy</strong> é usado para definir comportamentos customizados para operações fundamentais (por exemplo, pesquisa de propriedade, atribuição, enumeração, invocação de função, etc.).</p>

<h2 id="Terminologia">Terminologia</h2>

<dl>
 <dt><a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler">handler</a></dt>
 <dd>Objeto marcador que contém <em>traps</em>.</dd>
 <dt>traps</dt>
 <dd>Métodos que fornecem acesso à propriedade. Isto é análogo ao conceito de <em>traps </em>(armadilhas) em sistemas operacionais</dd>
 <dt>target</dt>
 <dd>Objeto que o proxy virtualiza. É frequentemente utilizado como back-end de armazenamento para o proxy. Os invariantes (semânticas que permanecem inalterados) em relação à não-extensibilidade do objeto ou propriedades não-configuráveis são verificados em relação ao <em>target</em>.</dd>
</dl>

<h2 id="Sintaxe">Sintaxe</h2>

<pre class="syntaxbox">var p = new Proxy(target, handler);
</pre>

<h3 id="Parâmetros">Parâmetros</h3>

<dl>
 <dt><code>target</code></dt>
 <dd>Um objeto target (pode ser qualquer tipo de objeto, incluindo um array, uma função ou até mesmo outro <em>Proxy</em>) a ser envolvido com o <code>Proxy</code>.</dd>
 <dt><code>handler</code></dt>
 <dd>Um objeto cujas propriedades são funções que definem o comportamento do proxy quando uma operação é realizada sobre ele.</dd>
</dl>

<h2 id="Métodos">Métodos</h2>

<dl>
 <dt>{{jsxref("Proxy.revocable()")}}</dt>
 <dd>Cria um objeto <code> Proxy </code> revogável.</dd>
</dl>

<h2 id="Métodos_para_manipular_objetos">Métodos para manipular objetos</h2>

<p>O objeto manipulado é um objeto reservado que contém traps para <code> Proxy. </code></p>

<div>{{page('/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler', 'Methods') }}</div>

<h2 id="Exemplos">Exemplos</h2>

<h3 id="Exemplo_básico">Exemplo básico</h3>

<p>Neste exemplo simples, o número <code> 37 </code> é retornado como o valor padrão quando o nome da propriedade não está no objeto. Usa-se o manipulador <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/get"><code>get</code></a>.</p>

<pre class="brush: js">var handler = {
    get: function(target, name) {
        return name in target ?
            target[name] :
            37;
    }
};

var p = new Proxy({}, handler);
p.a = 1;
p.b = undefined;

console.log(p.a, p.b); // 1, undefined
console.log('c' in p, p.c); // false, 37
</pre>

<h3 id="Encaminhamento_de_Proxy">Encaminhamento de Proxy</h3>

<p>Neste exemplo, estamos usando um objeto JavaScript nativo ao qual nosso proxy irá encaminhar todas as operações que são aplicadas para ele.</p>

<pre class="brush: js">var target = {};
var p = new Proxy(target, {});

p.a = 37; // Operação encaminhada para o alvo

console.log(target.a); // 37. A operação foi devidamente encaminhada
</pre>

<h3 id="Validação">Validação</h3>

<p>Com um <code> Proxy</code>, você pode validar facilmente o valor passado para um objeto. Este exemplo usa o manipulador <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set"> <code> set</code></a>.</p>

<pre class="brush: js">let validator = {
  set: function(obj, prop, value) {
    if (prop === 'age') {
      if (!Number.isInteger(value)) {
        throw new TypeError('The age is not an integer');
      }
      if (value &gt; 200) {
        throw new RangeError('The age seems invalid');
      }
    }

    //O comportamento padrão para armazenar o valor
    obj[prop] = value;

    // Indique o sucesso
    return true;
  }
};

let person = new Proxy({}, validator);

person.age = 100;
console.log(person.age); // 100
person.age = 'young'; // Lança uma exceção
person.age = 300; // Lança uma exceção</pre>

<h3 id="Construtor_de_extensão">Construtor de extensão</h3>

<p>Um proxy de função poderia facilmente estender um construtor com um novo construtor. Este exemplo usa os manipuladores <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/construct"> <code> construct </code> </a> e <a href="/En-US/docs/Web/JavaScript/Referência/Global_Objects/Proxy/handler/apply"> <code> apply</code></a>.</p>

<pre class="brush: js">function extend(sup, base) {
  var descriptor = Object.getOwnPropertyDescriptor(
    base.prototype, 'constructor'
  );
  base.prototype = Object.create(sup.prototype);
  var handler = {
    construct: function(target, args) {
      var obj = Object.create(base.prototype);
      this.apply(target, obj, args);
      return obj;
    },
    apply: function(target, that, args) {
      sup.apply(that, args);
      base.apply(that, args);
    }
  };
  var proxy = new Proxy(base, handler);
  descriptor.value = proxy;
  Object.defineProperty(base.prototype, 'constructor', descriptor);
  return proxy;
}

var Person = function(name) {
  this.name = name;
};

var Boy = extend(Person, function(name, age) {
  this.age = age;
});

Boy.prototype.sex = 'M';

var Peter = new Boy('Peter', 13);
console.log(Peter.sex);  // "M"
console.log(Peter.name); // "Peter"
console.log(Peter.age);  // 13</pre>

<h3 id="DOM_manipulação_de_nós">DOM manipulação de nós</h3>

<p>Às vezes, você deseja alternar o atributo ou o nome da classe de dois elementos diferentes. Veja como usar o manipulador <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/set"> <code> set</code></a>.</p>

<pre class="brush: js">let view = new Proxy({
  selected: null
},
{
  set: function(obj, prop, newval) {
    let oldval = obj[prop];

    if (prop === 'selected') {
      if (oldval) {
        oldval.setAttribute('aria-selected', 'false');
      }
      if (newval) {
        newval.setAttribute('aria-selected', 'true');
      }
    }

    // O comportamento para armazenar o valor padrão
    obj[prop] = newval;

    // Indica o sucesso
    return true;
  }
});

let i1 = view.selected = document.getElementById('item-1');
console.log(i1.getAttribute('aria-selected')); // 'true'

let i2 = view.selected = document.getElementById('item-2');
console.log(i1.getAttribute('aria-selected')); // 'false'
console.log(i2.getAttribute('aria-selected')); // 'true'</pre>

<h3 id="Correção_de_valor_e_uma_propriedade_extra">Correção de valor e uma propriedade extra</h3>

<p>O objeto de proxy <code> produtos </code> avalia o valor passado e converte-o em uma matriz, se necessário. O objeto também suporta uma propriedade adicional chamada <code> latestBrowser </code> tanto em getters como em setters.</p>

<pre class="brush: js">let products = new Proxy({
  browsers: ['Internet Explorer', 'Netscape']
},
{
  get: function(obj, prop) {
    // An extra property
    if (prop === 'latestBrowser') {
      return obj.browsers[obj.browsers.length - 1];
    }

    //  O comportamento para armazenar o valor padrão
    return obj[prop];
  },
  set: function(obj, prop, value) {
    // An extra property
    if (prop === 'latestBrowser') {
      obj.browsers.push(value);
      return true;
    }

    // Converta o valor se não for uma matriz
    if (typeof value === 'string') {
      value = [value];
    }

    //  O comportamento para armazenar o valor padrão
    obj[prop] = value;

    // Indicate success
    return true;
  }
});

console.log(products.browsers); // ['Internet Explorer', 'Netscape']
products.browsers = 'Firefox'; // pass a string (by mistake)
console.log(products.browsers); // ['Firefox'] &lt;- no problem, the value is an array

products.latestBrowser = 'Chrome';
console.log(products.browsers); // ['Firefox', 'Chrome']
console.log(products.latestBrowser); // 'Chrome'</pre>

<h3 id="Encontrando_um_item_de_objeto_em_uma_matriz_por_propriedade">Encontrando um item de objeto em uma matriz por propriedade</h3>

<p>Esta proxy estende uma matriz com alguns recursos de utilidade. Como você vê, você pode "definir" propriedades flexíveis sem usar <a href="/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties"> <code> Object.defineProperties</code></a>. Este exemplo pode ser adaptado para encontrar uma linha de tabela por sua célula. Nesse caso, o alvo será <a href="/en-US/docs/DOM/table.rows"> <code> table.rows </code> </a></p>

<pre class="brush: js">let products = new Proxy([
  { name: 'Firefox', type: 'browser' },
  { name: 'SeaMonkey', type: 'browser' },
  { name: 'Thunderbird', type: 'mailer' }
],
{
  get: function(obj, prop) {
    // O comportamento para retornar o valor; Prop geralmente é um inteiro
    if (prop in obj) {
      return obj[prop];
    }

    // Obter o número de produtos; Com products.length
    if (prop === 'number') {
      return obj.length;
    }

    let result, types = {};

    for (let product of obj) {
      if (product.name === prop) {
        result = product;
      }
      if (types[product.type]) {
        types[product.type].push(product);
      } else {
        types[product.type] = [product];
      }
    }

    // Obtém um produto por nome
    if (result) {
      return result;
    }

    // Obtém produtos por tipo
    if (prop in types) {
      return types[prop];
    }

    // Obtém tipos de produto
    if (prop === 'types') {
      return Object.keys(types);
    }

    return undefined;
  }
});

console.log(products[0]); // { name: 'Firefox', type: 'browser' }
console.log(products['Firefox']); // { name: 'Firefox', type: 'browser' }
console.log(products['Chrome']); // undefined
console.log(products.browser); // [{ name: 'Firefox', type: 'browser' }, { name: 'SeaMonkey', type: 'browser' }]
console.log(products.types); // ['browser', 'mailer']
console.log(products.number); // 3</pre>

<h3 id="Um_exemplo_completo_de_lista_de_traps">Um exemplo completo de lista de <code>traps</code></h3>

<p>Agora, para criar uma lista completa de amostra de <code>traps</code>, para fins didáticos, tentaremos propor um objeto <em>não nativo</em> que seja particularmente adequado para este tipo de operação: o objeto global <code>docCookies</code> criado por <a href="https://developer.mozilla.org/en-US/docs/Web/API/Document/cookie/Simple_document.cookie_framework" title="https://developer.mozilla.org/en-US/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support"> a "little framework" publicada na página<code>document.cookie</code></a>.</p>

<pre class="brush: js">/*
  var docCookies = ... get the "docCookies" object here:
  https://developer.mozilla.org/en-US/docs/DOM/document.cookie#A_little_framework.3A_a_complete_cookies_reader.2Fwriter_with_full_unicode_support
*/

var docCookies = new Proxy(docCookies, {
  get: function (oTarget, sKey) {
    return oTarget[sKey] || oTarget.getItem(sKey) || undefined;
  },
  set: function (oTarget, sKey, vValue) {
    if (sKey in oTarget) { return false; }
    return oTarget.setItem(sKey, vValue);
  },
  deleteProperty: function (oTarget, sKey) {
    if (sKey in oTarget) { return false; }
    return oTarget.removeItem(sKey);
  },
  enumerate: function (oTarget, sKey) {
    return oTarget.keys();
  },
  ownKeys: function (oTarget, sKey) {
    return oTarget.keys();
  },
  has: function (oTarget, sKey) {
    return sKey in oTarget || oTarget.hasItem(sKey);
  },
  defineProperty: function (oTarget, sKey, oDesc) {
    if (oDesc &amp;&amp; 'value' in oDesc) { oTarget.setItem(sKey, oDesc.value); }
    return oTarget;
  },
  getOwnPropertyDescriptor: function (oTarget, sKey) {
    var vValue = oTarget.getItem(sKey);
    return vValue ? {
      value: vValue,
      writable: true,
      enumerable: true,
      configurable: false
    } : undefined;
  },
});

/* Teste Cookies */

console.log(docCookies.my_cookie1 = 'First value');
console.log(docCookies.getItem('my_cookie1'));

docCookies.setItem('my_cookie1', 'Changed value');
console.log(docCookies.my_cookie1);</pre>

<h2 id="Especificações">Especificações</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificações</th>
   <th scope="col">Status</th>
   <th scope="col">Comentário</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-proxy-objects', 'Proxy')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Definição Inicial.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-objects', 'Proxy')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td>?</td>
  </tr>
 </tbody>
</table>

<h2 id="Navegadores_Compatíveis">Navegadores Compatíveis</h2>



<p>{{Compat("javascript.builtins.Proxy", 2)}}</p>

<h2 id="Notas_Especificas_Gecko">Notas Especificas Gecko</h2>

<ul>
 <li>No momento, <code>Object.getPrototypeOf(proxy)</code> retorna incondicionalmente um <code>Object.getPrototypeOf(target)</code>, porque a trap ES2015 getPrototypeOf não foi implementada ({{bug(795904)}}, {{bug(888969)}}).</li>
 <li><code>Array.isArray(proxy)</code> retorna incondicionalmente um <code>Array.isArray(target)</code> ({{bug(1096753)}}, {{bug(1111785)}}).</li>
 <li><code>Object.prototype.toString.call(proxy)</code> retorna incondicionalmente <code>Object.prototype.toString.call(target)</code>, porque ES2015 Symbol.toStringTag não foi implementado ({{bug(1114580)}}).</li>
</ul>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li><a class="external" href="https://www.youtube.com/watch?v=sClk6aB_CPk">"Proxies are awesome" Brendan Eich presentation at JSConf</a> (<a class="external" href="http://www.slideshare.net/BrendanEich/metaprog-5303821">slides</a>)</li>
 <li><a class="external" href="http://wiki.ecmascript.org/doku.php?id=harmony:proxies">ECMAScript Harmony Proxy proposal page</a> e <a class="external" href="http://wiki.ecmascript.org/doku.php?id=harmony:proxies_semantics">ECMAScript página de semântica de proxy Harmony</a></li>
 <li><a class="external" href="http://soft.vub.ac.be/~tvcutsem/proxies/">Tutorial em proxies</a></li>
 <li><a href="/en-US/docs/JavaScript/Old_Proxy_API" title="/en-US/docs/JavaScript/Old_Proxy_API">SpiderMonkey specific Old Proxy API</a></li>
 <li>{{jsxref("Object.watch()")}} É um recurso não padrão, mas foi suportado no Gecko há muito tempo.</li>
</ul>

<h2 id="Nota_de_licença"><code><code>Nota de licença</code></code></h2>

<p>Alguns conteúdos (texto, exemplos) nesta página foram copiados ou adaptados do <a class="external" href="http://wiki.ecmascript.org/doku.php"> ECMAScript wiki </a> que contém à licença de conteúdo <a class="external" href="http://creativecommons.org/licenses/by-nc-sa/2.0/"> CC 2.0 BY-NC-SA </a>.</p>
