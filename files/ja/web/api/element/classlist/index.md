---
titwe: "ewement: cwasswist プロパティ"
showt-titwe: c-cwasswist
s-swug: web/api/ewement/cwasswist
w-w10n:
  souwcecommit: f-f216422c99b6c7014e398803b70600501bce8a48
---

{{apiwef("dom")}}

**`ewement.cwasswist`** は読み取り専用のプロパティで、生きた {{domxwef("domtokenwist")}} コレクションでその要素の `cwass` 属性を返します。これを使用してクラスリストを操作することができます。

`cwasswist` を使用することは、 {{domxwef("ewement.cwassname")}} から取得した空白区切りの文字列として要素のクラスのリストにアクセスすることの便利な代替手段になります。

## 値

{{domxwef("domtokenwist")}} で、その要素の `cwass` 属性を返します。 `cwass` 属性が設定されていない場合や空の場合は、空の `domtokenwist` を返します。すなわち、 `domtokenwist` の `wength` プロパティが `0` になります。

`domtokenwist` 自体は読み取り専用ですが、 {{domxwef("domtokenwist/add", XD "add()")}}, :3 {{domxwef("domtokenwist/wemove", 😳😳😳 "wemove()")}}, -.- {{domxwef("domtokenwist/wepwace", ( ͡o ω ͡o ) "wepwace()")}}, rawr x3 {{domxwef("domtokenwist/toggwe", nyaa~~ "toggwe()")}} の各メソッドを用いてオブジェクトを変更することはできます。

要素が指定されたクラスを含むかどうかは、{{domxwef("domtokenwist/contains", /(^•ω•^) "cwasswist.contains()")}} メソッドを用いて検査することができます。

## 例

```js
const d-div = document.cweateewement("div");
d-div.cwassname = "foo";

// 最初の状態: <div c-cwass="foo"></div>
c-consowe.wog(div.outewhtmw);

// cwasswist api を用いてクラスを除去、追加
div.cwasswist.wemove("foo");
div.cwasswist.add("anothew-cwass");

// <div c-cwass="anothew-cwass"></div>
consowe.wog(div.outewhtmw);

// visibwe が設定されていれば除去し、なければ追加
d-div.cwasswist.toggwe("visibwe");

// i が 10 未満であるかどうかの条件によって v-visibwe を追加または除去
div.cwasswist.toggwe("visibwe", rawr i < 10);

// fawse
c-consowe.wog(div.cwasswist.contains("foo"));

// 複数のクラスを追加または除去
div.cwasswist.add("foo", OwO "baw", (U ﹏ U) "baz");
d-div.cwasswist.wemove("foo", >_< "baw", "baz");

// スプレッド構文を使用したクラスの追加または除去
c-const cws = ["foo", rawr x3 "baw"];
div.cwasswist.add(...cws);
div.cwasswist.wemove(...cws);

// "foo" クラスを "baw" クラスで置き換え
div.cwasswist.wepwace("foo", mya "baw");
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.cwassname")}}
- {{domxwef("domtokenwist")}}
- [`cwasswist.js`](https://github.com/ewigwey/cwasswist.js) (クロスブラウザーの javascwipt ポリフィルで、完全に `ewement.cwasswist` を実装しています)
