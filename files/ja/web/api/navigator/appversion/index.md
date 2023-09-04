---
title: Navigator.appVersion
slug: Web/API/Navigator/appVersion
---

{{APIRef("HTML DOM")}} {{Deprecated_Header}}

"`4.0`" またはそのブラウザーのバージョン情報を表す文字列のどちらかを返します。

> **メモ:** このプロパティがブラウザーの正しいバージョンを返すことを期待しないでください。

## 構文

```js
window.navigator.appVersion;
```

### 値

"`4.0`" またはそのブラウザーのバージョン情報を表す文字列のどちらかです。

## 例

```js
alert(
  "このブラウザーのバージョンは " +
    navigator.appVersion +
    " と報告されています。",
);
```

## 注

`window.navigator.userAgent` プロパティもバージョン番号を含んでいる場合がありますが ("`Mozilla/5.0 (Windows; U; Win98; en-US; rv:0.9.2) Gecko/20010725 Netscape 6/6.1`" など)、ユーザーエージェント文字列を変更したり、他のブラウザー、プラットフォーム、ユーザーエージェントに「偽装」したり、ブラウザーベンダー自身がこれらのプロパティに無頓着であったりすることを意識しておいてください。

`window.navigator.appVersion`, `window.navigator.appName`, `window.navigator.userAgent` の各プロパティは、「ブラウザー推定」 (browser sniffing) コード、すなわち使用しているブラウザーを検出し、それに従ってページを調整しようとするスクリプトで使われてきました。これにより、一部のウェブサイトから拒否されないようにするために、ブラウザーがこれらのプロパティで偽の情報を返さなければならないという現在の状況が発生したのです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
