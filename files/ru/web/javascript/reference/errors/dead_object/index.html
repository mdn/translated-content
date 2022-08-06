---
title: >-
  TypeError: can't access dead object (Тип ошибки:не удаётся получить доступ к
  мёртвому объекту)
slug: Web/JavaScript/Reference/Errors/Dead_object
translation_of: Web/JavaScript/Reference/Errors/Dead_object
---
<div>{{JSSidebar("Errors")}}</div>

<h2 id="Сообщение">Сообщение</h2>

<pre class="syntaxbox">TypeError: can't access dead object
</pre>

<h2 id="Тип_ошибки">Тип ошибки</h2>

<p>{{jsxref("TypeError")}}</p>

<h2 id="Что_не_так">Что не так?</h2>

<p>Для улучшения использования памяти и предотвращения утечек памяти Firefox запрещает надстройкам сохранять строгие ссылки на объекты DOM после уничтожения родительского документа. Мёртвый объект содержит сильную ссылку (keep alive) на элемент DOM, который сохраняется даже после того, как он был уничтожен в DOM. Чтобы избежать этих проблем, ссылки на узлы DOM во внешнем документе должны храниться в объекте, который относится к этому документу, и очищаться при выгрузке документа или храниться как слабые ссылки.</p>

<h2 id="Проверка_если_объект_мёртв">Проверка, если объект мёртв</h2>

<p><a href="/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils">Components.utils</a> предлагает <code>isDeadWrapper()</code>метод, который может использовать привилегированный код. <br>
  </p>

<pre class="brush: js">if (Components.utils.isDeadWrapper(window)) {
  // dead
}</pre>

<p>Непривилегированный код не имеет доступа к Component.utils и мог бы просто быть в состоянии поймать исключение.</p>

<pre class="brush: js">try {
  String(window);
}
catch (e) {
  console.log("window is likely dead");
}</pre>

<h2 id="Смотрите_также">Смотрите также</h2>

<ul>
 <li><a href="https://blog.mozilla.org/addons/2012/09/12/what-does-cant-access-dead-object-mean/">What does “can’t access dead object” mean?</a>(Что значит “не могу получить доступ к мёртвому объекту”?)</li>
 <li><a href="/en-US/docs/Extensions/Common_causes_of_memory_leaks_in_extensions">Common causes of memory leaks in extensions</a>(Распространённые причины утечек памяти в расширениях)</li>
 <li><a href="/en-US/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils">Components.utils</a></li>
 <li><a href="/en-US/docs/Mozilla/Zombie_compartments">Zombie Compartments</a></li>
</ul>
