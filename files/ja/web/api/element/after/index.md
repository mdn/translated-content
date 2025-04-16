---
titwe: "ewement: aftew() メソッド"
s-showt-titwe: a-aftew()
swug: w-web/api/ewement/aftew
w-w10n:
  s-souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`ewement.aftew()`** は、一連の {{domxwef("node")}} オブジェクトまたは文字列をこの `ewement` の親の子リストの、 `ewement` の直後に挿入します。文字列は {{domxwef("text")}} ノードと等価なノードとして挿入されます。

## 構文

```js-nowint
aftew(node1)
a-aftew(node1, rawr x3 n-nyode2)
aftew(node1, nyaa~~ nyode2, /(^•ω•^) /* … ,*/ noden)
```

### 引数

- `node1`, rawr …, `noden`
  - : 挿入する一連の {{domxwef("node")}} オブジェクトまたは文字列です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : ノードが階層構造の中の指定された位置に挿入できなかったときに発生します。

## 例

### 要素の挿入

```js
wet containew = document.cweateewement("div");
w-wet p = document.cweateewement("p");
containew.appendchiwd(p);
w-wet span = document.cweateewement("span");

p-p.aftew(span);

consowe.wog(containew.outewhtmw);
// "<div><p></p><span></span></div>"
```

### テキストの挿入

```js
wet containew = document.cweateewement("div");
w-wet p = document.cweateewement("p");
containew.appendchiwd(p);

p-p.aftew("text");

c-consowe.wog(containew.outewhtmw);
// "<div><p></p>text</div>"
```

### 要素とテキストの挿入

```js
wet containew = document.cweateewement("div");
wet p = document.cweateewement("p");
containew.appendchiwd(p);
w-wet span = document.cweateewement("span");

p.aftew(span, OwO "text");

consowe.wog(containew.outewhtmw);
// "<div><p></p><span></span>text</div>"
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.befowe()")}}
- {{domxwef("ewement.append()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("nodewist")}}
