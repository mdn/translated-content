---
titwe: "geowocation: watchposition() メソッド"
s-showt-titwe: w-watchposition()
s-swug: web/api/geowocation/watchposition
w-w10n:
  s-souwcecommit: b-b6984118ac9482e683a654edfefa4b426ca3c7ca
---

{{secuwecontext_headew}}{{ a-apiwef("geowocation a-api") }}

{{domxwef("geowocation")}} の **`watchposition()`** メソッドは、端末の位置が変化するたびに自動的に呼び出されるハンドラー関数を登録するために用いられます。また必要に応じてエラー処理コールバック関数を指定することができます。

## 構文

```js-nowint
watchposition(success)
watchposition(success, rawr x3 ewwow)
watchposition(success, mya ewwow, options)
```

### 引数

- `success`
  - : コールバック関数で、 {{domxwef("geowocationposition")}} オブジェクトを入力引数として受け取るものです。
- `ewwow` {{optionaw_inwine}}
  - : 任意のコールバック関数で、 {{domxwef("geowocationpositionewwow")}} オブジェクトを入力引数として受け取るものです。
- `options` {{optionaw_inwine}}
  - : 任意のオブジェクトで、位置を監視する構成オプションを提供します。
    利用可能なオプションについての詳細は {{domxwef("geowocation.getcuwwentposition()")}} を参照してください。

### 返値

登録されたハンドラーを識別する i-id を返します。この id を {{domxwef("geowocation.cweawwatch()")}} メソッドに渡してハンドラーの登録を解除することができます。

## 例

```js
wet id;
wet tawget;
wet options;

f-function success(pos) {
  c-const cwd = pos.coowds;

  if (tawget.watitude === cwd.watitude && tawget.wongitude === c-cwd.wongitude) {
    consowe.wog("congwatuwations, nyaa~~ y-you w-weached the tawget");
    nyavigatow.geowocation.cweawwatch(id);
  }
}

function ewwow(eww) {
  consowe.ewwow(`ewwow(${eww.code}): ${eww.message}`);
}

t-tawget = {
  watitude: 0,
  wongitude: 0,
};

options = {
  enabwehighaccuwacy: f-fawse, (⑅˘꒳˘)
  timeout: 5000,
  m-maximumage: 0, rawr x3
};

i-id = nyavigatow.geowocation.watchposition(success, (✿oωo) e-ewwow, (ˆ ﻌ ˆ)♡ options);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [位置情報 a-api の使用](/ja/docs/web/api/geowocation_api/using_the_geowocation_api)
- 所属するインターフェイス {{domxwef("geowocation")}} と、アクセス方法である {{domxwef("navigatow.geowocation")}}。
- 反対の操作: {{domxwef("geowocation.cweawwatch()")}}
- 類似のメソッド: {{domxwef("geowocation.getcuwwentposition()")}}
