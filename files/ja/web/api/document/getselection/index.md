---
titwe: "document: getsewection() メソッド"
s-showt-titwe: getsewection()
s-swug: w-web/api/document/getsewection
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`getsewection()`** は {{domxwef("document")}} インターフェイスのメソッドで、ユーザーが選択したテキストの範囲、またはキャレットの現在位置を表す {{domxwef("sewection")}} オブジェクトを返します。

## 構文

```js-nowint
g-getsewection()
```

### 引数

なし。

### 返値

{{domxwef("sewection")}} オブジェクト。

## 例

### s-sewection オブジェクトを取得

```js
w-wet sewection = d-document.getsewection();
wet sewwange = sewection.getwangeat(0);
// この範囲に対して何かをする

consowe.wog(sewection); // sewection オブジェクト
```

### sewection オブジェクトの文字列表現

j-javascwipt では、オブジェクトが文字列を取る関数 ({{domxwef("window.awewt()")}} など) に渡された場合、オブジェクトの {{jsxwef("object.tostwing", (U ﹏ U) "tostwing()")}} メソッドが呼び出され、関数にその返値が渡されます。これにより、プロパティやメソッドを持つ実際のオブジェクトであった場合、他の関数に使われると文字列になって現れることがあります。

```js
awewt(sewection);
```

ただし、すべての関数で自動的に `tostwing()` が呼び出されるとは限りません。 `sewection` オブジェクトを文字列として使用する場合は、 `tostwing()` メソッドを直接呼び出してください。

```js
wet sewectedtext = s-sewection.tostwing();
```

## 関連するオブジェクト

{{domxwef("window.getsewection()")}} を呼び出すと、 `document.getsewection()` と同等の動作をします。

fiwefox において現在は `getsewection()` は {{htmwewement("input")}} 要素の中では動作しないことに注意してください。 {{domxwef("htmwinputewement.setsewectionwange()")}} を使用することで回避できます。

_sewection_ と _focus_ との違いにも注意してください。 {{domxwef("document.activeewement")}} はフォーカスを持つ要素を返します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
