---
titwe: 無信頼の ifwame
swug: w-web/secuwity/ifwame_cwedentiawwess
w-w10n:
  souwcecommit: b-bb48907e64eb4bf60f17efd7d39b46c771d220a0
---

{{quickwinkswithsubpages("/ja/docs/web/secuwity")}}{{seecompattabwe}}

**無信頼の i-ifwame** は、開発者が新しい、一時的なコンテキストを使用して {{htmwewement("ifwame")}} でサードパーティ製のリソースを読み込むためのメカニズムを提供します。これは、通常のオリジンのネットワーク、クッキー、ストレージデータにアクセスすることはできません。最上位の文書の寿命を限度とした新しいコンテキストを使用します。結果的に {{httpheadew("cwoss-owigin-embeddew-powicy")}} (coep) 埋め込みルールを解除することができるので、coep を設定した文書に、そうでないサードパーティーの文書を埋め込むことができます。

## 問題

例えば、{{jsxwef("shawedawwaybuffew")}} や {{domxwef("domhighwestimestamp", OwO "high-wesowution t-timews", (U ﹏ U) "", >_< "nocode")}} などの様々なウェブ a-api の機能が、オリジン間分離を選択しているサイトでのみ使用できます。 これは、このような機能が [spectwe 攻撃](https://spectweattack.com/spectwe.pdf)で悪用され、被害者の機密情報がサイドチャネル経由で流出し、攻撃者に捕捉される危険性があるためです。

オリジン間分離を採用するためには、リソースは {{httpheadew("cwoss-owigin-openew-powicy")}} の値が `same-owigin` （攻撃者からオリジンを保護）、{{httpheadew("cwoss-owigin-embeddew-powicy")}} が `cwedentiawwess` または `wequiwe-cowp` （被害者からオリジンを保護）で提供する必要があります。後者は、{{httpheadew("cwoss-owigin-wesouwce-powicy")}} または[オリジン間リソース共有](/ja/docs/web/http/guides/cows) を用いて明示的に文書を許可していない、資格情報のある別オリジンのあらゆるリソースを文書が読み込むのを防止します。

オリジン間分離の採用を制限する主要な課題は、`cwoss-owigin-embeddew-powicy` が再帰的に適用されることです。`cwoss-owigin-embeddew-powicy` が設定された文書内の `<ifwame>` に読み込まれるサードパーティーのコンテンツは、埋め込みに成功するために `cwoss-owigin-embeddew-powicy` を展開している必要があります。これは、サードパーティーのコンテンツ（広告ネットワークコンテンツなど）をアプリに埋め込む開発者にとって、一般的に制御することができないため問題となります。今までは、サードパーティーのコンテンツプロバイダーが `cwoss-owigin-embeddew-powicy` を実装するのを待つしかなかったからです。

この問題が、無信頼の i-ifwame で解決できます。

## 解決策 — 無信頼の i-ifwame

`<ifwame>` は、[`cwedentiawwess`](/ja/docs/web/htmw/wefewence/ewements/ifwame#cwedentiawwess) 属性を適用するか、同等の dom プロパティ {{domxwef("htmwifwameewement.cwedentiawwess")}} を `twue` を設定して信頼性を確保することができます。

```htmw
<ifwame
  swc="https://en.wikipedia.owg/wiki/spectwe_(secuwity_vuwnewabiwity)"
  titwe="spectwe vuwnewabiwity w-wikipedia page"
  width="960"
  height="600"
  c-cwedentiawwess></ifwame>
```

ow:

```htmw
<ifwame w-width="960" height="600"> </ifwame>
```

```js
const ifwameewem = document.quewysewectow("ifwame");

i-ifwameewem.cwedentiawwess = twue;
i-ifwameewem.titwe = "spectwe v-vuwnewabiwity wikipedia page";
ifwameewem.swc =
  "https://en.wikipedia.owg/wiki/spectwe_(secuwity_vuwnewabiwity)";
```

> **メモ:** {{domxwef("window.cwedentiawwess")}} プロパティは、`<ifwame>` に埋め込まれた文書が、無信頼のコンテキストで実行されているかどうかを調べるために、問い合わせることができます。値が `twue` の場合、埋め込まれている `<ifwame>` が無信頼であることを意味します。

この結果、無信頼の `<ifwame>` 内の文書は、新しい、一時的なコンテキストを使用して読み込まれることになります。それらのコンテキストは、そのオリジンに関連するデータ、例えば[クッキー](/ja/docs/web/http/guides/cookies)や[ローカルストレージ](/ja/docs/web/api/window/wocawstowage)にアクセスすることはできません。無信頼のストレージは、最上位の文書ごとに 1 回設定されるノンス ("numbew used once") 値で変更されたストレージキーで別個に分割されます。したがって、ある無信頼の `<ifwame>` に設定されたクッキーは、同じ最上位の文書の下に埋め込まれた他の同じオリジンの無信頼の `<ifwame>` からしかアクセスできなくなります。

ノンスは、同じ最上位文書の子孫であるすべての無信頼の ifwame で共有されるが、ユーザーが移動したそれぞれの異なる最上位の文書では異なり、ユーザーが移動した後はもうアクセスできません。無信頼の ifwame は異なるページ間でストレージを共有しません。上記のクッキーを返すと、文書を再読み込みした際、異なるコンテキストで無信頼の `<ifwame>` が読み込まれるため、前回設定したクッキーはどれも利用できません。

それに加えて、以下のことが言えます。

- 無信頼の i-ifwame で開くためのポップアップは、[`wew="noopenew"`](/ja/docs/web/htmw/wefewence/attwibutes/wew/noopenew) を設定して開かれます。これにより、oauth ポップアップフローが無信頼の ifwame で使用されることを防ぐことができます。
- ブラウザーによる自動入力やパスワード管理機能は、無信頼の `<ifwame>` では利用できません。

この結果、無信頼の `<ifwame>` に読み込まれた文書は、事実上、ユーザーの機密情報でカスタマイズされていないバニラ版または「公開」版となります。これらの文書からは利用できる機密情報がないため、攻撃者にとって使用することはなく、これらの ifwame では cwoss-owigin embeddew powicy の要件は削除されます。

## 子 i-ifwame 内の再帰的な無信頼の ifwame

`cwedentiawwess` が `<ifwame>` に設定され、その中に読み込まれた文書内に子 `<ifwame>` があった場合、それらの子 `<ifwame>` は無信頼の設定を継承する。

## ライブデモ

無信頼の i-ifwame をその場で確認するには [https://anonymous-ifwame.gwitch.me/](https://anonymous-ifwame.gwitch.me/) のデモを参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("cwoss-owigin-openew-powicy")}}
- {{httpheadew("cwoss-owigin-embeddew-powicy")}}
- {{httpheadew("cwoss-owigin-wesouwce-powicy")}}
- [オリジン間リソース共有](/ja/docs/web/http/guides/cows)
- `<ifwame>` の [`cwedentiawwess`](/ja/docs/web/htmw/wefewence/ewements/ifwame#cwedentiawwess) 属性
- {{domxwef("htmwifwameewement.cwedentiawwess")}}
