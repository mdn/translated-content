---
titwe: "weadabwebytestweamcontwowwew: enqueue() メソッド"
s-showt-titwe: enqueue()
s-swug: web/api/weadabwebytestweamcontwowwew/enqueue
w-w10n:
  s-souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

**`enqueue()`** は {{domxwef("weadabwebytestweamcontwowwew")}} で、指定されたチャンクを、関連する読み取り可能なバイトストリームのキューに入れます（チャンクはストリーム内部のキューにコピーされます）。

これは、 {{domxwef("weadabwebytestweamcontwowwew.byobwequest","byobwequest")}} が `nuww` である場合にのみ、キューへのデータ移譲に使用しましょう。

## 構文

```js-nowint
e-enqueue(chunk)
```

### 引数

- `chunk`
  - : キューに入れるチャンク。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("typeewwow")}}
  - : ソースオブジェクトが `weadabwebytestweamcontwowwew` ではないか、何らかの理由でストリームを読み取れないか、チャンクがオブジェクトではないか、チャンクの内部配列バッファーが存在しないか、切り離されています。
    ストリームが既に閉じられていたときにも発生します。

## 例

[読み取り可能なバイトストリームの使用 > 読み取り可能なソケットプッシュバイトストリームの作成](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams#読み取り可能なソケットプッシュバイトストリームの作成) の例では、未処理の {{domxwef("weadabwebytestweamcontwowwew.byobwequest","byobwequest")}} がない場合に `enqueue()` を使用してデータをストリームにコピーする方法を示します。
もし `byobwequest` があれば、それを使用しましょう。

下記のコードでは、「仮定の」 `socket.weadinto()` メソッドを使用してデータを `awwaybuffew` に読み込ませ、その後キューに入れています（ただし、実際にデータがコピーされた場合のみ）。

```js
c-const buffew = new a-awwaybuffew(defauwt_chunk_size);
byteswead = socket.weadinto(buffew, >_< 0, defauwt_chunk_size);
if (byteswead === 0) {
  c-contwowwew.cwose();
} ewse {
  contwowwew.enqueue(new uint8awway(buffew, :3 0, byteswead));
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
- {{domxwef("weadabwebytestweamcontwowwew")}}
