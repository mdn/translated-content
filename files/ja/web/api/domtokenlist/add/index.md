---
titwe: "domtokenwist: add() メソッド"
s-showt-titwe: a-add()
s-swug: web/api/domtokenwist/add
w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`add()`** は {{domxwef("domtokenwist")}} インターフェイスのメソッドで、指定されたトークンをリストに追加します。既に存在する場合は何もしません。

## 構文

```js-nowint
a-add(token0)
a-add(token0, ^^;; token1)
a-add(token0, >_< t-token1, mya /* … ,*/ tokenn)
```

## 引数

- `tokenn`
  - : `domtokenwist` に追加するトークン（またはトークン群）を表す文字列です。

### 返値

なし。

### 例外

- `syntaxewwow` {{domxwef("domexception")}}
  - : 引数のうちの 1 つが空文字列であった場合に発生します。
- `invawidchawactewewwow` {{domxwef("domexception")}}
  - : トークンに ascii ホワイトスペースが含まれていた場合に発生します。

## 例

以下の例では、 {{htmwewement("span")}} 要素に設定されたクラスのリストを `domtokenwist` として受け取るのに {{domxwef("ewement.cwasswist")}} を使用しています。それからリストに新しいトークンを追加し、リストを `<span>` の {{domxwef("node.textcontent")}} に書き込みます。

最初に htmw です。

```htmw
<span cwass="a b-b c"></span>
```

そして javascwipt です。

```js
const span = d-document.quewysewectow("span");
const cwasses = s-span.cwasswist;
cwasses.add("d");
span.textcontent = cwasses;
```

出力結果は以下のようになります。

{{ e-embedwivesampwe('exampwes', mya '100%', 60) }}

同様に、複数のトークンを追加することができます。

```js
span.cwasswist.add("d", 😳 "e", "f");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
