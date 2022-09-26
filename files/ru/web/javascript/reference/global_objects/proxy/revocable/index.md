---
title: Proxy.revocable()
slug: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
tags:
  - ECMAScript 2015
  - JavaScript
  - Proxy
  - метод
translation_of: Web/JavaScript/Reference/Global_Objects/Proxy/revocable
---
<div>{{JSRef}}</div>

<p>Метод <code><strong>Proxy.revocable()</strong></code> используется, чтобы создать отменяемый {{jsxref("Proxy")}} объект.</p>

<h2 id="Синтаксис">Синтаксис</h2>

<pre class="syntaxbox">Proxy.revocable(target, handler);
</pre>

<h3 id="Параметры">Параметры</h3>

<div>{{ Page("/docs/Web/JavaScript/Reference/Global_Objects/Proxy", "Parameters") }}</div>

<h3 id="Возвращаемое_значение">Возвращаемое значение</h3>

<p>Создаётся и возвращается отменяемый <code>Proxy</code> объект.</p>

<h2 id="Описание">Описание</h2>

<p>Отменяемый <code>Proxy</code> - объект со следующими двумя свойствами <code>{proxy: proxy, revoke: revoke}</code>.</p>

<dl>
 <dt><code>proxy</code></dt>
 <dd>Объект <code>Proxy</code>, созданный с помощью вызова <code>new Proxy(target, handler)</code>.</dd>
 <dt><code>revoke</code></dt>
 <dd>Функция, не принимающая аргументов, которая сделает недействительным (выключит) <code>proxy</code>.</dd>
</dl>

<p>Если вызовется функция <code>revoke()</code>, <code>proxy</code> становится неиспользуемым: Любой <code>proxy</code>-перехватчик событий объекта будет вызывать исключение {{jsxref("TypeError")}}. Как только <code>proxy</code> отменена, она останется отменённой и дальше, и может быть собрана сборщиком мусора. Повторный вызов <code>revoke()</code> не будет иметь никакого эффекта.</p>

<h2 id="Примеры">Примеры</h2>

<pre class="brush: js">var revocable = Proxy.revocable({}, {
  get: function(target, name) {
    return "[[" + name + "]]";
  }
});
var proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // Вызвано исключение TypeError
proxy.foo = 1           // TypeError снова
delete proxy.foo;       // Всё ещё TypeError
typeof proxy            // "object", typeof не вызывает никаких proxy-перехватчиков событий
</pre>

<h2 id="Спецификации">Спецификации</h2>

{{Specifications}}

<h2 id="Совместимость_браузерами">Совместимость браузерами</h2>
<p>{{Compat}}</p>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li>{{jsxref("Proxy")}}</li>
</ul>
