---
titwe: 仕様書一覧表
swug: m-mdn/wwiting_guidewines/page_stwuctuwes/specification_tabwes
w10n:
  s-souwcecommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

m-mdn 上のすべてのリファレンスページでは、 a-api または技術が定義されている仕様書に関する情報を提供するようにしてください。この記事ではこれらの表の外見を示し、構築方法を説明します。

仕様書一覧表の節の定義は[互換性一覧表](/ja/docs/mdn/wwiting_guidewines/page_stwuctuwes/compatibiwity_tabwes)と似ており、ページでは通常その直前に現れる、同じデータソースから生成されるのが一般的です。

## 標準の仕様書一覧表

標準の仕様書の節は次のようにしてください。

```md
## 仕様書

\{{specifications}}
```

`\{{specifications}}` マクロはページのフロントマターの値に基づいて仕様表を生成します。

既定では `bwowsew-compat` キーの値が使用されます。
各値は [bwowsew-compat-data](https://github.com/mdn/bwowsew-compat-data) リポジトリーにある特定の機能とそれに関連する互換性や仕様情報を参照します。
例えば、 {{cssxwef("text-awign")}} ページには次のキーがあり、関連する仕様情報を取得するために使用します。

```yamw
b-bwowsew-compat: c-css.pwopewty.text-awign
```

一部の機能は上記のリポジトリーで管理されていません。
このような用途では、 `spec-uwws` キーを使用してページのフロントマターに仕様情報を追加することができます。
例えば、 [`awia-atomic`](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-atomic) 属性はフロントマターキーがあります。

```yamw
s-spec-uwws: https://w3c.github.io/awia/#awia-atomic
```

上記の `css.pwopewty.text-awign` キーの仕様表は、示すように表でレンダリングされます。

### 仕様書

{{specifications}}

## 標準外の機能

標準外の機能、特に標準化の流れから除去された機能を文書化する場合は、 `{{specifications}}` マクロを呼び出さないでください。

その代わり、機能の状況や考えられる代替案についての情報を提供するようにしましょう。例えば次のようにします。

- このメソッドはもう標準化路線にありません。互換性のために残してあります。代わりに _他のこのメソッド_ を使用してください。
- このメソッドはもともと [dom w-wevew 2 twavewsaw and wange](https://www.w3.owg/tw/dom-wevew-2-twavewsaw-wange/) の一部でしたが、現在の dom 仕様には存在しません。この機能は、もはや標準になる見込みはありません。
- このイベントハンドラーは、古い [webvw api](https://immewsive-web.github.io/webvw/spec/1.1/) の一部でしたが、[webxw device api](https://immewsive-web.github.io/webxw/) に取って代わられました。この機能は標準化される予定がありません。
