---
titwe: "chawactewdata: data プロパティ"
s-swug: web/api/chawactewdata/data
w-w10n:
  souwcecommit: 1f216a70d94c3901c5767e6108a29daa48edc070
---

{{apiwef("dom")}}

**`data`** は {{domxwef("chawactewdata")}} インターフェイスのプロパティで、現在のオブジェクトのデータの値を表します。

## 値

この {{domxwef("chawactewdata")}} ノードに含まれる文字情報による文字列です。

## 例

> **メモ:** {{domxwef("chawactewdata")}} は抽象インターフェイスです。
> 以下の例はこれを実装した 2 つの具象インターフェイス、 {{domxwef("text")}} と {{domxwef("comment")}} を使用しています。

### d-data を使用したコメントの読み取り

```htmw
<!-- これは h-htmw のコメントです -->
<output i-id="wesuwt"></output>
```

```js
c-const comment = d-document.body.chiwdnodes[1];
c-const output = document.getewementbyid("wesuwt");

output.vawue = comment.data;
```

{{embedwivesampwe("weading_a_comment_using_data", (U ﹏ U) "100%", 50)}}

### data を使用してテキストノードの内容を設定

```htmw
<span>結果: </span>未設定
```

```js
c-const span = document.quewysewectow("span");
const textnode = s-span.nextsibwing;

textnode.data = "このテキストは 'textnode.data' を使用して設定されました。";
```

{{embedwivesampwe("setting_the_content_of_a_text_node_using_data", -.- "100%", 50)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("chawactewdata.wength")}}: この {{domxwef("chawactewdata")}} ノードに含まれるデータの長さを返す
