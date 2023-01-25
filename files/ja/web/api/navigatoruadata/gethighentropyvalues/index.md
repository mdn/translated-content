---
title: NavigatorUAData.getHighEntropyValues()
slug: Web/API/NavigatorUAData/getHighEntropyValues
l10n:
  sourceCommit: b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{APIRef("User-Agent Client Hints API")}}{{SeeCompatTable}}

**`getHighEntropyValues()`** は {{domxref("NavigatorUAData")}} インターフェイスのメソッドで、、ユーザーエージェントが返す _高エントロピー_ 値を格納した辞書オブジェクトで解決される {{jsxref("Promise")}} を返し案す。

> **メモ:** 「高エントロピー」「低エントロピー」という用語は、これらの値がブラウザーについて明らかにする情報の量を示します。
> プロパティとして返される値は、低エントロピーであり、ユーザーを特定する可能性は低いと判断されます。
> {{domxref("NavigatorUAData.getHighEntropyValues()")}} が返す値は、より多くの情報を明らかにする可能性があります。
> そのため、これらの値は {{jsxref("Promise")}} によって取得され、ブラウザーがユーザーの許可を求めたり、他のチェックを行ったりする時間を確保することができます。

## 構文

```js-nolint
getHighEntropyValues(hints)
```

### 引数

- `hints`

  - : 返すべきヒントを格納した配列で、 1 つまたは複数を指定します。

    - `"architecture"`
    - `"bitness"`
    - `"model"`
    - `"platformVersion"`
    - `"uaFullVersion"` {{Deprecated_Inline}}
    - `"fullVersionList"`

### 返値

以下の値の一部またはすべてを含むオブジェクトに解決する {{jsxref("Promise")}} です（リクエストされたヒントに基づく）。

- `brands`
  - : ブラウザーのブランドとそのバージョン ({{domxref("NavigatorUAData.brands")}} が提供する情報と同じもの) を指定した `brand` と `version` を格納したオブジェクトの配列を返します。
    なお、この情報は {{HTTPHeader("Sec-CH-UA")}} ヘッダーでサーバーへ送ることができます（[低エントロピークライアントヒント](/ja/docs/Web/HTTP/Client_hints#低エントロピーヒント)）。
- `mobile`
  - : ユーザーエージェントがモバイル端末で動作している場合、 `true` を返します（{{domxref("NavigatorUAData.mobile")}} が提供するのと同じ情報です）。
    なお、この情報は {{HTTPHeader("Sec-CH-UA-Mobile")}} ヘッダーでサーバーへ送ることができます（[低エントロピークライアントヒント](/ja/docs/Web/HTTP/Client_hints#低エントロピーヒント)）。
- `platform`
  - : `"Windows"`のようにユーザーエージェントが動作しているプラットフォームを記述した文字列を返します（{{domxref("NavigatorUAData.platform")}}が提供する情報と同じものです）。
    なお、この情報は {{HTTPHeader("Sec-CH-UA-Platform")}} ヘッダーでサーバーに送信できることができます（[低エントロピークライアントヒント](/ja/docs/Web/HTTP/Client_hints#低エントロピーヒント)）。
- `architecture`
  - : プラットフォームアーキテクチャを格納した文字列。例えば `"x86"` です。
    なお、この情報は、 {{HTTPHeader("Sec-CH-UA-Arch")}} ヘッダーでサーバーが明示的にリクエストされた後に、 {{HTTPHeader("Accept-CH")}} へ送ることができることができます。
- `bitness`
  - : アーキテクチャのビット数を格納した文字列。例えば `"32"` または `"64"` です。
    なお、この情報は、 {{HTTPHeader("Accept-CH")}} ヘッダーでサーバーが明示的にリクエストした場合、 {{HTTPHeader("Sec-CH-UA-Bitness")}} ヘッダーでサーバーに送ることができます。
- `model`
  - : モバイル端末のモデルを格納した文字列。例えば `"Pixel 2XL"` です。機器がモバイル端末でない場合、または機器のモデルが不明な場合は `model` は `""` になります。
    なお、この情報は、 {{HTTPHeader("Accept-CH")}} ヘッダでサーバーが明示的にリクエストすれば、 {{HTTPHeader("Sec-CH-UA-Model")}} でサーバーに送信することができます。
- `platformVersion`
  - : プラットフォームのバージョンを格納した文字列。プラットフォーム名自体は、常に低エントロピーのヒント `platform` として利用することができます。例えば `"10.0"` です。
    なお、この情報は、 {{HTTPHeader("Accept-CH")}} ヘッダーでサーバーが明示的にリクエストすれば、 {{HTTPHeader("Sec-CH-UA-Platform-Version")}} ヘッダーでサーバーに送ることができます。
- `uaFullVersion` {{Deprecated_Inline}}
  - : 完全なブラウザーバージョンを格納した文字列。例えば `"103.0.5060.134"` です。`fullVersionList` に取って代わられ、非推奨です。
    なお、この情報は、 {{HTTPHeader("Accept-CH")}} ヘッダーでサーバーが明示的にリクエストした場合、 {{HTTPHeader("Sec-CH-UA-Full-Version")}} ヘッダーでサーバーに送ることができます。
- `fullVersionList`
  - : オブジェクトの配列であり、プロパティ `"brand"` と `"version"` はそれぞれブラウザー名とフルバージョンを表す。
    例えば、 `{"brand": "Google Chrome", "version": "103.0.5060.134"}, {"brand": "Chromium", "version": "103.0.5060.134"}` です。
    オブジェクトによっては、サイトが固定されたブラウザーのリストに依存しないようにするため、意図的に無効な情報を格納している場合があることに注意してください。
    なお、この情報は、 {{HTTPHeader("Accept-CH")}} ヘッダーでサーバーが明示的にリクエストした場合、 {{HTTPHeader("Sec-CH-UA-Full-Version-List")}} ヘッダーでサーバーに送ることができます。

### 例外

- `NotAllowedError` {{domxref("DOMException")}}
  - : ユーザーエージェントが、リクエストされた `hints` の一つまたはそれ以上を返してはいけないと判断した場合に発生します。

## 例

以下の例では、`getHighEntropyValues()` メソッドを使用して多くのヒントがリクエストされます。
プロミスが解決すると、この情報がコンソールに表示されます。

```js
navigator.userAgentData.getHighEntropyValues(
  ["architecture",
  "model",
  "platformVersion",
  "fullVersionList"])
  .then((values) => console.log(values));
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- これらの値は、 HTTP リクエストヘッダー経由でも利用できます。
  - [低エントロピーのクライアントヒント](/ja/docs/Web/HTTP/Client_hints#低エントロピーヒント)は自動的に送信されます。
    - {{HTTPHeader("Sec-CH-UA")}}
    - {{HTTPHeader("Sec-CH-UA-Mobile")}}
    - {{HTTPHeader("Sec-CH-UA-Platform")}}
  - サーバーは {{HTTPHeader("Accept-CH")}} ヘッダーを使用して、以降のリクエストで高エントロピーのクライアントヒントを受け取るようにリクエストすることができます。
    - {{HTTPHeader("Sec-CH-UA-Arch")}}
    - {{HTTPHeader("Sec-CH-UA-Bitness")}}
    - {{HTTPHeader("Sec-CH-UA-Full-Version")}}
    - {{HTTPHeader("Sec-CH-UA-Model")}}
    - {{HTTPHeader("Sec-CH-UA-Platform-Version")}}
