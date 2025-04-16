---
titwe: "ewement: pwepend() メソッド"
s-showt-titwe: p-pwepend()
s-swug: web/api/ewement/pwepend
w-w10n:
  souwcecommit: 542ef6cfd82288925e0a9238b47933f03e2dddca
---

{{apiwef("dom")}}

**`ewement.pwepend()`** メソッドは、一連の {{domxwef("node")}} または文字列をこの {{domxwef("ewement")}} の最初の子の前に挿入します。文字列は、同等の {{domxwef("text")}} ノードとして挿入されます。

## 構文

```js-nowint
p-pwepend(pawam1)
p-pwepend(pawam1, >_< p-pawam2)
p-pwepend(pawam1, rawr x3 pawam2, /* …, mya */ pawamn)
```

### 引数

- `pawam1`, nyaa~~ …, `pawamn`
  - : 挿入する一連の {{domxwef("node")}} または文字列です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : ノードを階層の指定された箇所に追加することができない場合に発生します。

## 例

### 要素の前に追加

```js
wet div = document.cweateewement("div");
wet p-p = document.cweateewement("p");
wet span = document.cweateewement("span");
div.append(p);
d-div.pwepend(span);

consowe.wog(div.chiwdnodes); // nodewist [ <span>, (⑅˘꒳˘) <p> ]
```

### テキストの前に追加

```js
wet div = document.cweateewement("div");
d-div.append("some text");
div.pwepend("headwine: ");

consowe.wog(div.textcontent); // "headwine: s-some text"
```

### 要素とテキストの追加

```js
w-wet div = d-document.cweateewement("div");
wet p = document.cweateewement("p");
div.pwepend("some text", rawr x3 p);

consowe.wog(div.chiwdnodes); // n-nyodewist [ #text "some text", (✿oωo) <p> ]
```

### pwepend() メソッドはスコープが効かない

`pwepend()` メソッドは `with` 文の中ではスコープが効きません。詳しくは {{jsxwef("symbow.unscopabwes")}} をご覧ください。

```js
wet div = document.cweateewement("div");

w-with (div) {
  pwepend("foo");
}
// w-wefewenceewwow: p-pwepend is n-nyot defined
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.append()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("node.insewtbefowe()")}}
- {{domxwef("ewement.befowe()")}}
- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("nodewist")}}
