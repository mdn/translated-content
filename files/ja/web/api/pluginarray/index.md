---
title: PluginArray
slug: Web/API/PluginArray
l10n:
  sourceCommit: 802b6063046dffb7634d2138aadcd92cb22ed40c
---

{{APIRef("HTML DOM")}}{{deprecated_header}}

`PluginArray` インターフェイスは、利用可能な[プラグイン](/ja/docs/Mozilla/Add-ons/Plugins)を記述する {{DOMxRef("Plugin")}} のリストを格納するために使用されます。これは {{DOMxRef("Navigator.plugins", "navigator.plugins")}} プロパティから返されます。`PluginArray` は JavaScript の配列ではありませんが、`length` プロパティがあり、それぞれのアイテムにブラケット記法 (`plugins[2]`) を使用すると、`item(index)` や `namedItem("name")` メソッドと同様にアクセスできます。

> [!NOTE]
> 最新バージョンのブラウザーでは、`PluginArray` オブジェクトの自分自身でプロパティを列挙できなくなくなりました。

## インスタンスプロパティ

- {{DOMxRef("PluginArray.length")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : この配列内のプラグインの数です。

## インスタンスメソッド

- {{DOMxRef("PluginArray.item")}} {{Deprecated_Inline}}
  - : プラグインリスト配列中の指定したインデックスにある {{DOMxRef("Plugin")}} を返す
- {{DOMxRef("PluginArray.namedItem")}} {{Deprecated_Inline}}
  - : プラグインリスト配列中の指定した名称の {{DOMxRef("Plugin")}} を返す
- {{DOMxRef("PluginArray.refresh")}} {{Deprecated_Inline}}
  - : 現在のページの全てのプラグインを更新します。必要に応じて文書を再読み込みします。

## 例

次の例の関数は、Shockwave Flash プラグインのバージョンを返します。

```js
const pluginsLength = navigator.plugins.length;

document.body.innerHTML =
  `${pluginsLength} Plugin(s)<br>` +
  `<table id="pluginTable"><thead>` +
  `<tr><th>Name</th><th>Filename</th><th>description</th><th>version</th></tr>` +
  `</thead><tbody></tbody></table>`;

const table = document.getElementById("pluginTable");

for (let i = 0; i < pluginsLength; i++) {
  let newRow = table.insertRow();
  newRow.insertCell().textContent = navigator.plugins[i].name;
  newRow.insertCell().textContent = navigator.plugins[i].filename;
  newRow.insertCell().textContent = navigator.plugins[i].description;
  newRow.insertCell().textContent = navigator.plugins[i].version ?? "";
}
```

次の例は、インストールされているプラグインに関する情報を表示します。

```js
const pluginsLength = navigator.plugins.length;

document.write(
  `${pluginsLength.toString()} Plugin(s)<br>` +
    `Name | Filename | description<br>`,
);

for (let i = 0; i < pluginsLength; i++) {
  document.write(
    `${navigator.plugins[i].name} | ${navigator.plugins[i].filename} | ${navigator.plugins[i].description} | ${navigator.plugins[i].version}<br>`,
  );
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

Firefox では、ゼロインデックスの数値プロパティによる擬似配列として各プラグインが掲載されていることに加え、PluginArray オブジェクトにプラグイン名が直接指定されたプロパティが提供されています。
