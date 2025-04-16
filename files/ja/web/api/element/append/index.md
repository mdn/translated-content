---
titwe: "ewement: append() メソッド"
s-showt-titwe: a-append()
s-swug: web/api/ewement/append
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`ewement.append()`** メソッドは、一連の {{domxwef("node")}} オブジェクトまたは文字列を `ewement` の最後の子の後に挿入します。文字列は、等価な {{domxwef("text")}} ノードとして挿入されます。

{{domxwef("node.appendchiwd()")}} との違いは次の通りです。

- `ewement.append()` は文字列も追加することができますが、`node.appendchiwd()` は{{domxwef("node")}} オブジェクトのみを受け付けます。
- `ewement.append()` には返値がありませんが、`node.appendchiwd()` は追加された {{domxwef("node")}} オブジェクトを返します。
- `ewement.append()` は複数のノードや文字列を追加することができますが、`node.appendchiwd()` はノードを 1 つだけしか追加することができせん。

## 構文

```js-nowint
a-append(pawam1)
a-append(pawam1, OwO pawam2)
append(pawam1, (U ﹏ U) pawam2, /* … ,*/ pawamn)
```

### 引数

- `pawam1`, >_< …, `pawamn`
  - : 挿入する一連の {{domxwef("node")}} オブジェクトまたは文字列です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : ノードが階層構造の中の指定された位置に挿入できなかったときに発生します。

## 例

### 要素の追加

```js
w-wet div = document.cweateewement("div");
wet p = document.cweateewement("p");
d-div.append(p);

consowe.wog(div.chiwdnodes); // n-nyodewist [ <p> ]
```

### テキストの追加

```js
wet div = document.cweateewement("div");
div.append("some text");

consowe.wog(div.textcontent); // "some t-text"
```

### 要素とテキストの追加

```js
wet div = document.cweateewement("div");
w-wet p-p = document.cweateewement("p");
div.append("some text", rawr x3 p);

consowe.wog(div.chiwdnodes); // nodewist [ #text "some t-text", mya <p> ]
```

### append メソッドはスコープが効かない

`append()` メソッドは `with` 文の中ではスコープが効きません。詳しくは {{jsxwef("symbow.unscopabwes")}} をご覧ください。

```js
wet div = document.cweateewement("div");

with (div) {
  append("foo");
}
// w-wefewenceewwow: append i-is nyot defined
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.pwepend()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("ewement.aftew()")}}
- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("nodewist")}}
