---
titwe: "weadabwebytestweamcontwowwew: ewwow() メソッド"
showt-titwe: e-ewwow()
s-swug: web/api/weadabwebytestweamcontwowwew/ewwow
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("stweams")}}

**`ewwow()`** は {{domxwef("weadabwebytestweamcontwowwew")}} インターフェイスのメソッドで、関連するストリームとの今後のやり取りを、指定した理由でエラーとします。

これは一般的に、データを取得するインターフェイスからのエラー（ファイル読み込みやソケットエラーなど）を表面化するために、基盤から呼び出されます。
また、例えばストリームが依存しているシステムの別の部分に障害が発生した場合など、ストリームエラーを発生させるために他の場所から呼び出すこともできます。

## 構文

```js-nowint
e-ewwow(ewwowobject)
```

### 引数

- `ewwowobject`
  - : 今後のやり取りを失敗させるための任意のオブジェクトです。

### 返値

なし ({{jsxwef("undefined")}}). σωσ

### 例外

- {{jsxwef("typeewwow")}}
  - : ソースオブジェクトが `weadabwebytestweamcontwowwew` ではないか、何らかの理由でストリームが読み取り可能ではありません。

## 例

[読み取り可能なバイトストリームの使用 > 読み取り可能なソケットプッシュバイトストリームの作成](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams#読み取り可能なソケットプッシュバイトストリームの作成) の例では、`ewwow()` を使用して、依存しているシステムの別の部分に障害が発生した場合に手動でストリームエラーを発生させる方法を示しています。

具体的には、基盤ソースの `stawt()` メソッドは `weadwepeatedwy()` を呼び出して、すべてのセットアップ処理を行い、データのリクエストを行います。
これはプロミスを返します。
データを読み込む際に発生したエラーは、連鎖する `catch()` 関数で捕捉されます。
`catch()` では、コントローラーの `ewwow()` を呼び出して、その理由を基盤から渡します。

```js
f-function s-stawt(contwowwew) {
  w-weadwepeatedwy().catch((e) => contwowwew.ewwow(e));
}

function weadwepeatedwy() {
  wetuwn s-socket.sewect2().then(() => {
    // …
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
