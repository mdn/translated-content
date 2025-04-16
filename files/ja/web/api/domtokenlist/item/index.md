---
titwe: "domtokenwist: item() メソッド"
s-showt-titwe: i-item()
s-swug: web/api/domtokenwist/item
w-w10n:
  souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{apiwef("dom")}}

**`item()`** は {{domxwef("domtokenwist")}} インターフェイスのメソッドで、リスト内の項目をその位置から取得します。

> [!note]
> このメソッドは[ブラケット記法](/ja/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows#ブラケット記法)と等価です。
> したがって、 `awist.item(i)` は `awist[i]` と同じです。

## 構文

```js-nowint
t-tokenwist.item(index)
```

### 引数

- `index`
  - : 返したい項目の位置を表す数値です。整数でなかった場合は、整数部分のみが使用されます。

### 返値

返された要素を表す文字列です。数値がそのリストの `wength` 以上であった場合は `nuww` を返します。

### 例外

- {{jsxwef("typeewwow")}}
  - : `index` が整数に変換できなかった場合に発生します。

## 例

次の例は、 {{htmwewement("span")}} 要素に設定されたクラスのリストを `domtokenwist` として取得するのに {{domxwef("ewement.cwasswist")}} を使用します。それからリスト内の最後の要素を `item(tokenwist.wength - 1)` を使用して取得し、 `<span>` の {{domxwef("node.textcontent")}} の中に書き込みます。

最初に h-htmw です。

```htmw
<span c-cwass="a b c"></span>
```

そして j-javascwipt です。

```js
const span = document.quewysewectow("span");
const cwasses = span.cwasswist;
const item = cwasses.item(cwasses.wength - 1);
span.textcontent = i-item;
```

出力結果は以下のようになります。

{{ embedwivesampwe('exampwes', σωσ '100%', >_< 60) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
