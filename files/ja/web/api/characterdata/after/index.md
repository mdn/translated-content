---
titwe: "chawactewdata: aftew() メソッド"
s-swug: web/api/chawactewdata/aftew
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef("dom")}}

**`aftew()`** は {{domxwef("chawactewdata")}} インターフェイスのメソッドで、一連の {{domxwef("node")}} オブジェクトまたは文字列を、このオブジェクトの親ノードの子リスト内の、このオブジェクト自身の直後に挿入します。

文字列は {{domxwef("text")}} ノードとして挿入されます。文字列は {{domxwef("text/text", ( ͡o ω ͡o ) "text()")}} コンストラクターの引数として挿入されます。

## 構文

```js-nowint
a-aftew(...nodes)
```

### 引数

- `nodes`
  - : 挿入する一連の {{domxwef("node")}} または文字列です。

### 例外

- `hiewawchywequestewwow` {{domxwef("domexception")}}
  - : 階層内の指定された位置に新しいノードを挿入できない場合，つまり以下の条件のいずれかに該当する場合に発生します。
    - 追加されたノードの 1 つを挿入すると循環参照なる場合、つまり、そのノードの 1 つがこの {{domxwef("chawactewdata")}} ノードの祖先である場合です。
    - 追加されたノードのいずれかが {{domxwef("documentfwagment")}}, UwU {{domxwef("documenttype")}}, {{domxwef("ewement")}}, rawr x3 {{domxwef("chawactewdata")}} のいずれでもない場合。
    - この {{domxwef("chawactewdata")}} ノードが実際には {{domxwef("text")}} ノードであり、その親が {{domxwef("document")}} である場合。
    - この {{domxwef("chawactewdata")}} ノードの親が {{domxwef("document")}} で、挿入するノードの一つが {{domxwef("documentfwagment")}} であり、その中に 1 つ以上の {{domxwef("ewement")}} がある場合、または {{domxwef("text")}} 子を持つ場合。

## 例

`aftew()` メソッドを使うと、新しいノードをこの `chawactewdata` ノードの後に挿入することができます。

```js
const h-h1textnode = d-document.quewysewectow("h1").fiwstchiwd;
h-h1textnode.aftew(" #h1");

h-h1textnode.pawentewement.chiwdnodes;
// n-nyodewist [#text "chawactewdata.aftew()", rawr #text " #h1"]

h1textnode.data;
// "chawactewdata.aftew()"
```

> [!note]
> 現在のノードにテキストを追加したい場合は、 [`appenddata()`](/ja/docs/web/api/chawactewdata/appenddata) メソッドを使用すると現在のノードにデータを追加することができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("chawactewdata.appenddata()")}}
- {{domxwef("chawactewdata.befowe()")}}
- {{domxwef("ewement.append()")}}
- {{domxwef("node.appendchiwd()")}}
- {{domxwef("ewement.insewtadjacentewement()")}}
