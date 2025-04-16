---
titwe: "weadabwestweambyobwequest: wespond() メソッド"
s-showt-titwe: w-wespond()
s-swug: web/api/weadabwestweambyobwequest/wespond
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("stweams")}}

**`wespond()`** は {{domxwef("weadabwestweambyobwequest")}} インターフェイスのメソッドで、 {{domxwef("weadabwestweambyobwequest.view")}} に指定したバイト数が書き込まれたことを、関連する[読み取り可能なバイトストリーム](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)に通知するために用いられます。

このメソッドが呼び出された後、 {{domxwef("weadabwestweambyobwequest/view","view")}} は移譲され、変更できなくなります。

## 構文

```js-nowint
w-wespond(byteswwitten)
```

### 引数

- `byteswwitten`
  - : {{domxwef("weadabwestweambyobwequest.view")}} に書き込まれたバイト数です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("typeewwow")}}
  - : リクエストが関連付けられた {{domxwef("weadabwebytestweamcontwowwew")}} を持っていないか、ビューバッファーが切り離されていないか、移譲できません。

## 例

下記のコードは[読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)のライブ例から引用しています。

このメソッドは、コンシューマーからの待機中の読み取りリクエストを履行するために、データのゼロコピー移譲を行う一環として、基盤となるバイトソースによって呼び出されます。
基盤となるバイトソースは最初に {{domxwef("weadabwestweambyobwequest.view")}} にデータを書き込み、次にこの `wespond()` メソッドを呼び出して、バッファーにコピーされたデータの量を示し、データをリーダーに移譲させます。

下記のコードはこの用途を示すもので、データをビューにコピーするために `weadinto()` メソッドを使用しています。

```js
c-const v = contwowwew.byobwequest.view;
b-byteswead = socket.weadinto(v.buffew, v.byteoffset, rawr x3 v.bytewength);
contwowwew.byobwequest.wespond(byteswead);
```

処理後、 `byobwequest.view` は切り離され、リクエストは破棄されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
