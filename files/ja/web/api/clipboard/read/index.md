---
title: Clipboard.read()
slug: Web/API/Clipboard/read
tags:
  - API
  - Clip
  - Clipboard
  - Clipboard API
  - Editing
  - Method
  - Reference
  - Scrap
  - Text
  - paste
  - read
translation_of: Web/API/Clipboard/read
---
{{APIRef("Clipboard API")}}

{{domxref("Clipboard")}} インターフェイスの **`read()`** メソッドは、クリップボードの内容のコピーを要求し、戻り値の {{jsxref("Promise")}} が解決されたときにそのデータを取得できます。{{domxref("Clipboard.readText", "readText()")}} とは異なり、`read()` メソッドは画像など任意のデータを取得することができます。

クリップボードから読み込みを行うためには、まず `"clipboard-read"` パーミッションを取得する必要があります。

> **Note:** **注意:** 非同期の Clipboard API と [Permissions API](/ja/docs/Web/API/Permissions_API) は、ほとんどのブラウザーでは組み込み途中の状態です。そのため、パーミッションなどが公式仕様とは異なっていることがよくあります。これらのメソッドを使う前に [ブラウザー実装状況](#browser_compatibility) を確認してください。

## 構文

    var promise = navigator.clipboard.read();

### パラメーター

なし。

### 戻り値

クリップボードの内容を持つ {{domxref("DataTransfer")}} に解決される、{{jsxref("Promise")}} オブジェクト。クリップボードへのアクセスが許可されない場合、この Promise は拒否される。

## 例

この使用例は、最初に {{domxref("Permissions.query", "navigator.permissions.query()")}} を使って `"clipboard-read"` 権限があるかどうか (またはプロンプトによってユーザーがそれを許可するかどうか) を調べ、その後クリップボードに現在あるデータを取得します。もしデータがプレーンテキストでない場合、エラーメッセージを表示します。そうでない場合は、変数 `textElem` により参照している要素の内容を、クリップボードの内容に置き換えます。

```js
// まず、Permissions API を使って、
// "clipboard-read" 機能を使えるかどうか確認します。

navigator.permissions.query({name: "clipboard-read"}).then(result => {
  // クリップボードの読み取りが許可されているか、またはプロンプトによって
  // ユーザーがそれを許可する場合、処理を続行します。

  if (result.state == "granted" || result.state == "prompt") {
    navigator.clipboard.read().then(data => {
      for (let i=0; i<data.items.length; i++) {
        if (data.items[i].type != "text/plain") {
          alert("クリップボードの内容がテキストでないため、読み込めません。");
        } else {
          textElem.innerText = data.items[i].getAs("text/plain");
        }
      }
    });
  }
});
```

> **Note:** **注意:** 現時点で Firefox は `read()` を実装していますが、`"clipboard-read"` パーミッションは認識できません。そのため、[Permissions API](/ja/docs/Web/API/Permissions_API) を使ってこの API にアクセスしようとしても、失敗するでしょう。

> **Note:** **日本語訳注:** 翻訳時点 (2020/02/15) で、この使用例は Google Chrome (v80) でも実行できなくなっています。クリップボードから取得するデータの型が `DataTransfer` から [`ClipboardItems`](https://www.w3.org/TR/clipboard-apis/#typedefdef-clipboarditems) に変更されるなど、仕様が変更されているためです。

## 仕様

| 仕様書                                                                           | 策定状況                             | コメント |
| -------------------------------------------------------------------------------- | ------------------------------------ | -------- |
| {{SpecName('Clipboard API','#dom-clipboard-read','read()')}} | {{Spec2('Clipboard API')}} | 初回定義 |

## ブラウザー実装状況

{{Compat("api.Clipboard.read")}}
