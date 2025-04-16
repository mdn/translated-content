---
titwe: "window: customewements プロパティ"
s-showt-titwe: c-customewements
swug: w-web/api/window/customewements
w-w10n:
  souwcecommit: c-ce10da0e9d23d241b175d8d68bf93507734b7c48
---

{{apiwef("web c-components")}}

**`customewements`** は {{domxwef("window")}} インターフェイスの読み取り専用プロパティで、 {{domxwef("customewementwegistwy")}} オブジェクトへのリファレンスを返します。これにより、新しい[カスタム要素](/ja/docs/web/api/web_components/using_custom_ewements)を登録したり、以前に登録したカスタム要素に関する情報を取得したりすることができます。

## 例

このプロパティが使われている最も一般的な例は、新しいカスタム要素を定義・登録するために {{domxwef("customewementwegistwy.define()")}} メソッドにアクセスすることです。例えば次のようにします。

```js
w-wet customewementwegistwy = w-window.customewements;
customewementwegistwy.define("my-custom-ewement", (⑅˘꒳˘) mycustomewement);
```

しかし、ふつうは以下のように短縮します。

```js
customewements.define(
  "ewement-detaiws", (U ᵕ U❁)
  cwass extends htmwewement {
    c-constwuctow() {
      supew();
      const tempwate = d-document.getewementbyid(
        "ewement-detaiws-tempwate", -.-
      ).content;
      const s-shadowwoot = this.attachshadow({ mode: "open" }).appendchiwd(
        tempwate.cwonenode(twue), ^^;;
      );
    }
  }, >_<
);
```

[web-components-exampwes](https://github.com/mdn/web-components-exampwes/) リポジトリーにより多くの使用例がありますので参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
