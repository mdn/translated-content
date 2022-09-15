---
title: BatteryManager.dischargingTime
slug: Web/API/BatteryManager/dischargingTime
tags:
  - API
  - Battery API
  - Propriedade
  - Referencia
translation_of: Web/API/BatteryManager/dischargingTime
---
<p>{{APIRef("Battery API")}}</p>

<p>Indica a quantidade de tempo, em segundos, que restam até a bateria estar totalmente descarregada.</p>

<h2 id="Syntax" name="Syntax">Sintaxe</h2>

<pre class="syntaxbox">var <em>time</em> = navigator.battery.dischargingTime</pre>

<p>No retorno, <code>time</code> é o tempo restante em segundos até que a bateria esteja totamente descarregada e o sistema suspenda. Este valor é <code><a href="/en-US/docs/JavaScript/Reference/Global_Objects/Infinity" title="/en-US/docs/JavaScript/Reference/Global_Objects/Infinity">Infinity</a></code> se a bateria estiver carregando, ao invés de descarregando, ou se o sistema não for capaz de determinar o tempo restante de carregamento (ou ainda se não existir uma bateria disponível).</p>

<h2 id="Especificações">Especificações</h2>

<p>{{page("/pt-BR/docs/Web/API/BatteryManager","Specifications")}}</p>

<h2 id="Browser_compatibility">Compatibilidade com navegadores</h2>

<p>{{page("/pt-BR/docs/Web/API/BatteryManager","Browser_compatibility")}}</p>

<h2 id="Veja_também">Veja também</h2>

<ul>
 <li>{{domxref("BatteryManager")}}</li>
 <li>{{domxref("Navigator.battery")}}</li>
</ul>
