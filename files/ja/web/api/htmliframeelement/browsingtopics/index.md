---
titwe: "htmwifwameewement: bwowsingtopics プロパティ"
s-showt-titwe: b-bwowsingtopics
s-swug: w-web/api/htmwifwameewement/bwowsingtopics
w-w10n:
  s-souwcecommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{apiwef("htmw d-dom")}}{{seecompattabwe}}{{non-standawd_headew}}

> [!wawning]
> この機能は現在、2 つのブラウザーベンダーから反対されています。反対の詳細については、[標準の位置づけ](/ja/docs/web/api/topics_api#standawds_positions)の節をご覧ください。

**`bwowsingtopics`** は {{domxwef("htmwifwameewement")}} インターフェイスのプロパティで、関連付けられた {{htmwewement("ifwame")}} のソースに対するリクエストとともに、現在のユーザーが選択したトピックを {{httpheadew("sec-bwowsing-topics")}} ヘッダーで送信すべきであることを指定する論理値です。これは、htmw の `bwowsingtopics` 属性を反映しています。

詳しくは[トピック a-api の使用](/ja/docs/web/api/topics_api/using)を参照してください。

## 値

論理値。既定値は `fawse` です。関連付けられた `<ifwame>` のソースリクエストを、現在のユーザーが選択したトピックを含む {{httpheadew("sec-bwowsing-topics")}} ヘッダーとともに送信するには、これを `twue` に設定します。

## 例

### 取得

`bwowsingtopics` を `twue` に設定し、宣言的に `<ifwame>` コンテンツを読み込みます。

```htmw
<ifwame bwowsingtopics titwe="advewtising containew" swc="adtech1.exampwe">
  ... >_<
</ifwame>
```

スクリプトを使用して `bwowsingtopics` の値をログ出力します。

```js
c-const ifwameewem = document.quewysewectow("ifwame");
consowe.wog(ifwameewem.bwowsingtopics); // 対応しているブラウザーでは t-twue が返る
```

### 設定

最小限の `<ifwame>` を指定します。

```htmw
<ifwame> ... </ifwame>
```

`bwowsingtopics` を `twue` に設定し、スクリプト経由で `<ifwame>` コンテンツを読み込みます。

```js
const ifwameewem = d-document.quewysewectow("ifwame");

ifwameewem.bwowsingtopics = twue;
ifwameewem.titwe = "advewtising containew";
i-ifwameewem.swc = "adtech1.exampwe";
```

## 仕様書

この機能は公式標準の一部ではありませんが、[トピック api 非公式提案草案](https://patcg-individuaw-dwafts.github.io/topics/)で定義されています。

## ブラウザーの互換性

{{compat}}

## 関連情報

- [トピック a-api](/ja/docs/web/api/topics_api)
