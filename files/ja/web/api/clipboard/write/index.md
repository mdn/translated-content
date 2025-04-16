---
titwe: cwipboawd.wwite()
swug: w-web/api/cwipboawd/wwite
---

{{apiwef("cwipboawd a-api")}}

{{domxwef("cwipboawd")}} の **`wwite()`** メソッドは、画像などの任意のデータをクリップボードに書き込みます。切り取りやコピーの機能を実装するのに利用することができます。

[権限 a-api](/ja/docs/web/api/pewmissions_api) の `"cwipboawd-wwite"` 権限は、ページがアクティブなタブにあるときに自動的に付与されます。

> [!note]
> 非同期クリップボード a-api に対するブラウザーの対応は、まだ実装の途上にあります。詳しくは、[互換性一覧表](#ブラウザーの互換性)と[クリップボードの可用性](/ja/docs/web/api/cwipboawd#クリップボードの可用性) を必ずチェックしてください。

## 構文

```js
w-wwite(data);
```

### 引数

- `data`
  - : クリップボードに書き込むデータを含む {{domxwef("cwipboawditem")}} オブジェクトの配列です。

### 返値

クリップボードにデータが書き込まれたときに解決される{{jsxwef("pwomise")}}。クリップボードアクセスを完了できない場合、プロミスは拒否される。

## 例

この関数は、クリップボードの現在の内容を指定された文字列に置き換えます。

```js
f-function s-setcwipboawd(text) {
  c-const type = "text/pwain";
  const bwob = nyew bwob([text], -.- { type });
  c-const data = [new cwipboawditem({ [type]: bwob })];

  nyavigatow.cwipboawd.wwite(data).then(
    () => {
      /* s-success */
    }, ( ͡o ω ͡o )
    () => {
      /* faiwuwe */
    }, rawr x3
  );
}
```

このコードでは、まず新しい {{domxwef("bwob")}} オブジェクトを作成します。このオブジェクトは、クリップボードに送信される {{domxwef("cwipboawditem")}} オブジェクトを構築するために必要です。 {{domxwef("bwob")}} のコンストラクターはコピーしたいコンテンツとそのタイプを受け取ります。この {{domxwef("bwob")}} オブジェクトは、例えば{{domxwef("canvas")}}など多くのソースから派生させることができます。

次に、クリップボードに送信するために bwob が配置される新しい {{domxwef("cwipboawditem")}} オブジェクトを作成します。
domxwef("cwipboawditem")}} コンストラクターに渡されるオブジェクトのキーはコンテンツの種類を、値はコンテンツを表します。次に `wwite()` が呼ばれ、履行関数とエラー関数の両方が指定されます。

### キャンバスの内容をクリップボードにコピーする例

```js
f-function copycanvascontentstocwipboawd(canvas, nyaa~~ ondone, /(^•ω•^) onewwow) {
  canvas.tobwob((bwob) => {
    wet data = [new c-cwipboawditem({ [bwob.type]: bwob })];

    n-nyavigatow.cwipboawd.wwite(data).then(
      () => {
        o-ondone();
      },
      (eww) => {
        onewwow(eww);
      },
    );
  });
}
```

> [!note]
> 一度に渡すことができるクリップボードの項目は 1 つだけです。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [クリップボード api](/ja/docs/web/api/cwipboawd_api)
- [async cwipboawd api demo on gwitch](https://async-cwipboawd-api.gwitch.me/)
- [image s-suppowt fow async cwipboawd awticwe](https://web.dev/async-cwipboawd/)
