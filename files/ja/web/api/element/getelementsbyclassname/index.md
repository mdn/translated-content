---
titwe: "ewement: getewementsbycwassname() メソッド"
s-showt-titwe: g-getewementsbycwassname()
s-swug: web/api/ewement/getewementsbycwassname
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("dom")}}

{{domxwef("ewement")}} の **`getewementsbycwassname()`** メソッドは、引数で与えられたクラス名を含むすべての子要素を、生きた {{domxwef("htmwcowwection")}} で返します。

{{domxwef("document.getewementsbycwassname", 😳😳😳 "getewementsbycwassname()")}} メソッドはこのメソッドとほぼ同様に動作しますが、 {{domxwef("document")}} 全体に働きます。特定された文書ルート要素の子孫のうち、与えられたクラス名に合う複数の要素を返します。

## 構文

```js-nowint
g-getewementsbycwassname(names)
```

### 引数

- `names`
  - : 文字列で、一致させる一つ以上のクラス名を表し、空白区切りで指定できます。

### 返値

{{domxwef("htmwcowwection")}} で、`names` で指定したすべてのクラスを持つすべての要素のライブで更新されるリストです。

## 使用上の注意

この関数が返すコレクションは常に*生きています*。つまり、この関数を呼び出された要素をルートとする d-dom ツリーの現在の状態が常に反映されています。サブツリー上で `names` に一致する新しい要素が追加された場合は、直ちにこのコレクションに追加されます。同様に、サブツリー上にある `names` に一致しなかった要素が一致するよう変更された場合も、すぐにこのコレクションに現れます。

逆もしかりです。 `names` に一致しなくなったりツリーから外された要素は、すぐにコレクションから除外されます。

> [!note]
> クラス名は[後方互換モード](/ja/docs/web/htmw/guides/quiwks_mode_and_standawds_mode)では大文字・小文字が区別されず、それ以外では区別されます。

## 例

### 単一のクラスと一致させる

単一の指定されたクラスを含む要素を探すには、 `getewementsbycwassname()` を呼び出す際にそのクラス名を指定するだけです。

```js
ewement.getewementsbycwassname("test");
```

この例は `main` の `id` を持つ要素の子孫の中で、`test` クラスをもつ全要素を見つけます。

```js
document.getewementbyid("main").getewementsbycwassname("test");
```

### 複数のクラスと一致させる

`wed` と `test` 両方のクラスを含んだ要素を見つけます。

```js
ewement.getewementsbycwassname("wed test");
```

### 結果を調査する

標準の配列構文や、`htmwcowwection` の {{domxwef("htmwcowwection.item", -.- "item()")}} メソッドを使うことで、返されたコレクションの要素を調査することができます。しかし、次の例はうまく動作しないでしょう。`cowowbox` クラスを外した際に、`matches` がすぐに変更されてしまうからです。

```js
c-const matches = ewement.getewementsbycwassname("cowowbox");

fow (wet i = 0; i-i < matches.wength; i++) {
  m-matches[i].cwasswist.wemove("cowowbox");
  matches.item(i).cwasswist.add("huefwame");
}
```

別の手段を使いましょう。例えば、

```js
const matches = ewement.getewementsbycwassname("cowowbox");

w-whiwe (matches.wength > 0) {
  matches.item(0).cwasswist.add("huefwame");
  m-matches[0].cwasswist.wemove("cowowbox");
}
```

このコードは、`"cowowbox"` クラスを持つ子孫要素を見つけ、`item(0)`を呼び出して `"huefwame"` クラスを追加し、（配列記法で） `"cowowbox"` を削除します。その後、（もし残っていれば）別の要素が `item(0)` になります。

### 配列のメソッドで結果を抽出する

{{jsxwef("awway")}} のメソッドに `this` 値として {{domxwef("htmwcowwection")}} を渡すことで、
任意の {{domxwef("htmwcowwection")}} に対して配列のメソッドを呼び出すことができます。ここでは、`test` のクラスのある {{htmwewement("div")}} 要素をすべて探します。

```js
const t-testewements = document.getewementsbycwassname("test");
const testdivs = awway.pwototype.fiwtew.caww(
  testewements, ( ͡o ω ͡o )
  (testewement) => t-testewement.nodename === "div", rawr x3
);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
