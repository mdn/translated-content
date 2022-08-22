---
title: PluginArray
slug: Web/API/PluginArray
tags:
  - Add-ons
  - DOM
  - Gecko DOM Reference
  - Plugins
translation_of: Web/API/PluginArray
---
<div>
 {{ApiRef}} {{non-standard_header}}</div>
<p><code>PluginArray</code> インターフェースには使用可能なプラグインのリストが格納されています。 {{domxref("window.navigator.plugins")}} プロパティによって返されます。</p>
<h2 id="Properties" name="Properties">プロパティ</h2>
<table class="standard-table">
 <tbody>
  <tr>
   <th>プロパティ名</th>
   <th>説明</th>
   <th>戻り値の型</th>
   <th>可用性</th>
  </tr>
  <tr>
   <td>{{domxref("PluginArray.length")}}</td>
   <td>プラグインリスト配列中のプラグイン数。<strong>読取専用</strong>。</td>
   <td>unsigned long</td>
   <td>DOM 0</td>
  </tr>
 </tbody>
</table>
<h2 id="Methods" name="Methods">メソッド</h2>
<dl>
 <dt>
  {{domxref("PluginArray.item")}}</dt>
 <dd>
  プラグインリスト配列中の指定したインデックスにある {{domxref("Plugin")}} を返す</dd>
 <dt>
  {{domxref("PluginArray.namedItem")}}</dt>
 <dd>
  プラグインリスト配列中の指定した名称の {{domxref("Plugin")}} を返す</dd>
 <dt>
  {{domxref("PluginArray.refresh")}}</dt>
 <dd>
  現在のページの全てのプラグインを更新。必要に応じて文書を再読み込みします。</dd>
</dl>
