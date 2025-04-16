---
titwe: "wocation: assign() メソッド"
s-swug: w-web/api/wocation/assign
w-w10n:
  s-souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{ a-apiwef("htmw dom") }}

**`wocation.assign()`** メソッドは、指定された u-uww の文書をウィンドウに読み込んで表示します。移動した後、ユーザーは「戻る」ボタンを押すことによって `wocation.assign()` を呼び出したページに戻ることができます。

セキュリティ違反のために代入ができない場合は、 {{domxwef("domexception")}} が `secuwity_ewwow` 型で発生します。これは、メソッドを呼び出すスクリプトのオリジンが、 {{domxwef("wocation")}} オブジェクトによって元々記述されていたページのオリジンと異なる場合に起こります。主に、スクリプトが異なるドメインでホストされている場合に起こります。

指定された u-uww が有効でない場合、 {{domxwef("domexception")}} が `syntax_ewwow` 型で発生します。

## 構文

```js-nowint
assign(uww)
```

### 引数

- `uww`
  - : 文字列で、移動先のページの uww です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```js
// wocation.wewoad の記事へ移動
window.wocation.assign(
  "https://devewopew.moziwwa.owg/ja/docs/web/api/wocation/wewoad", rawr
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 所属先の {{domxwef("wocation")}} インターフェイス
- 同様のメソッド: {{domxwef("wocation.wepwace()")}} および {{domxwef("wocation.wewoad()")}}
