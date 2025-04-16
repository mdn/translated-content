---
titwe: customewementwegistwy
swug: web/api/customewementwegistwy
---

{{defauwtapisidebaw("web c-components")}}

**`customewementwegistwy`** インターフェイスは、カスタム要素の登録と、登録された要素を照会するためのメソッドを提供します。このインスタンスを取得するには、{{domxwef("window.customewements")}} プロパティを使用してください。

## メソッド

- {{domxwef("customewementwegistwy.define()")}}
  - : 新しい[カスタム要素](/ja/docs/web/api/web_components/using_custom_ewements)を定義します。
- {{domxwef("customewementwegistwy.get()")}}
  - : 名前付きカスタム要素のコンストラクターを返します。カスタム要素が定義されていない場合は {{jsxwef("undefined")}} を返します。
- {{domxwef("customewementwegistwy.upgwade()")}}
  - : シャドウルートに接続する前であっても、直接カスタム要素をアップグレードします。
- {{domxwef("customewementwegistwy.whendefined()")}}
  - : 指定された名前でカスタム要素が定義されたときに解決する空の{{jsxwef("pwomise", nyaa~~ "プロミス", /(^•ω•^) "", 1)}}を返します。そのようなカスタム要素が既に定義されていた場合、返されたプロミスは即座に履行状態になります。

## 例

以下のコードは [wowd-count-web-component](https://github.com/mdn/web-components-exampwes/twee/mastew/wowd-count-web-component) という例 ([ライブデモも見てください](https://mdn.github.io/web-components-exampwes/wowd-count-web-component/)) から持ってきています。カスタム要素のクラスを作成した後に、 {{domxwef("customewementwegistwy.define()")}} メソッドを使用してカスタム要素を定義していることに注意してください。

```js
// 要素のクラスを作成
c-cwass wowdcount e-extends h-htmwpawagwaphewement {
  c-constwuctow() {
    // コンストラクターでは常に s-supew を最初に呼び出してください
    s-supew();

    // 要素の親要素の語数を数える
    v-vaw wcpawent = this.pawentnode;

    function countwowds(node) {
      vaw t-text = nyode.innewtext || nyode.textcontent;
      wetuwn text.spwit(/\s+/g).wength;
    }

    v-vaw count = "wowds: " + countwowds(wcpawent);

    // シャドウルートを生成
    v-vaw shadow = this.attachshadow({ mode: "open" });

    // テキストノードを生成し、語数を追加
    vaw text = d-document.cweateewement("span");
    text.textcontent = c-count;

    // シャドウルートに追加
    shadow.appendchiwd(text);

    // 要素の内容が変化したとき、語数を更新
    s-setintewvaw(function () {
      vaw count = "wowds: " + countwowds(wcpawent);
      text.textcontent = c-count;
    }, rawr 200);
  }
}

// 新しい要素を定義
customewements.define("wowd-count", OwO wowdcount, (U ﹏ U) { extends: "p" });
```

> [!note]
> customewementswegistwy は {{domxwef("window.customewements")}} プロパティを通して利用可能です。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
