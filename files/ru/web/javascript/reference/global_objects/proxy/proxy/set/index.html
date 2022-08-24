---
title: handler.set()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
tags:
  - Прокси
  - метод
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/Proxy/set
original_slug: Web/JavaScript/Reference/Global_Objects/Proxy/handler/set
---
<div>{{JSRef}}</div>

<p><span id="result_box" lang="ru"><span title="The handler.set() method is a trap for setting a property value.
">Метод <strong>handler.set()</strong> является ловушкой для установки </span></span><span lang="ru"><span title="The handler.set() method is a trap for setting a property value.
">значения </span></span><span id="result_box" lang="ru"><span title="The handler.set() method is a trap for setting a property value.
">свойств</span></span><span lang="ru"><span title="The handler.set() method is a trap for setting a property value.
">у</span></span><span lang="ru"><span title="The handler.set() method is a trap for setting a property value.
">.</span></span></p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="brush: js">var p = new Proxy(target, {
  set: function(target, property, value, receiver) {
  }
});
</pre>

<h3 id="Параметры">Параметры</h3>

<p>Следующие параметры передаются методу <code>set()</code> . <code>this</code> привязан к обработчику</p>

<dl>
 <dt><code>target</code></dt>
 <dd>Исходный объект, который проксируется.</dd>
 <dt><code>property</code></dt>
 <dd>Имя свойства, в которое устанавливается значение <code>value</code>.</dd>
 <dt><code>value</code></dt>
 <dd>Значение, устанавливаемое в свойство <code>property</code>.</dd>
 <dt><code>receiver</code></dt>
 <dd>Объект, которому первоначально было присвоено задание. Обычно это сам прокси. Но обработчик <code>set()</code><span> также может быть вызван косвенно, через цепочку прототипов или различными другими способами.<br>
      Например, предположим, что скрипт выполняет </span><code><var>obj</var>.name = "jen"</code>, при этом <code><var>obj</var></code> не является прокси и не имеет собственного свойства <code>.name</code>, но имеет прокси в цепочке прототипов. Будет вызван обработчик прокси <code>set()</code> , а <code><var>obj</var></code> будет передан в качестве получателя.</dd>
</dl>

<h3 id="Возвращаемые_результаты">Возвращаемые результаты</h3>

<p>Метод <code>set</code> должен возвращать boolean значение.</p>

<ul>
 <li>Возвращает <code>true</code>, если присвоение выполнено успешно.</li>
 <li>Если метод <code>set()</code> возвращает <code>false</code>, а присваивание произошло в коде строгого режима, то будет выброшена {{jsxref("TypeError")}}.</li>
</ul>

<h2 id="Описание">Описание</h2>

<p>Метод <code><strong>handler.set</strong></code> <span id="result_box" lang="ru"><span title="The handler.set() method is a trap for setting a property value.
">является ловушкой для установки </span></span><span lang="ru"><span title="The handler.set() method is a trap for setting a property value.
">значения </span></span><span id="result_box" lang="ru"><span title="The handler.set() method is a trap for setting a property value.
">свойств</span></span><span lang="ru"><span title="The handler.set() method is a trap for setting a property value.
">у</span></span>.</p>

<h3 id="Перехват">Перехват</h3>

<p>Эта ловушка может перехватывать следующие операции:</p>

<ul>
 <li>Установка значения свойству: <code>proxy[foo] = bar</code> and <code>proxy.foo = bar</code></li>
 <li>Установка значения наследованному свойству: <code>Object.create(proxy)[foo] = bar</code></li>
 <li>{{jsxref("Reflect.set()")}}</li>
</ul>

<h3 id="Инварианты">Инварианты</h3>

<p>Если нарушены следующие инварианты, то proxy выбросит {{jsxref("TypeError")}}:</p>

<ul>
 <li>Невозможно изменить значение свойства так, чтобы оно отличалось от значения соответствующего свойства целевого объекта, если соответствующее свойство целевого объекта не является доступным для записи и не настраиваемым свойством данных.</li>
 <li>Невозможно установить значение свойства, если соответствующее свойство целевого объекта является неконфигурируемым свойством средства доступа, для которого в качестве атрибута [[Set]] указано значение undefined.</li>
 <li>В строгом режиме при возврате из обработчика <code>set()</code> значения <code>false</code>, будет выброшено исключение {{jsxref ("TypeError")}}.</li>
</ul>

<h2 id="Примеры">Примеры</h2>

<p>Следующий код перехватывает установку значения свойству.</p>

<pre class="brush: js">var p = new Proxy({}, {
  set: function(target, prop, value, receiver) {
    target[prop] = value
    console.log('property set: ' + prop + ' = ' + value)
    return true
  }
})

console.log('a' in p)  // false

p.a = 10               // "property set: a = 10"
console.log('a' in p)  // true
console.log(p.a)       // 10
</pre>

<h2 id="Specifications">Specifications</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Спецификация</th>
   <th scope="col">Статус</th>
   <th scope="col">Комментарий</th>
  </tr>
  <tr>
   <td>{{SpecName('ES2015', '#sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver', '[[Set]]')}}</td>
   <td>{{Spec2('ES2015')}}</td>
   <td>Initial definition.</td>
  </tr>
  <tr>
   <td>{{SpecName('ESDraft', '#sec-proxy-object-internal-methods-and-internal-slots-set-p-v-receiver', '[[Set]]')}}</td>
   <td>{{Spec2('ESDraft')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Совместимость_с_браузерами">Совместимость с браузерами</h2>

<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
 <li>{{jsxref("Proxy.handler", "handler")}}</li>
 <li>{{jsxref("Reflect.set()")}}</li>
</ul>
