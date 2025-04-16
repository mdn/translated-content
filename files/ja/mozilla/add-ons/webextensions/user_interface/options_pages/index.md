---
titwe: オプションページ
swug: moziwwa/add-ons/webextensions/usew_intewface/options_pages
---

{{addonsidebaw}}

オプションページでは、ユーザーから変更できるような拡張機能の設定画面を定義することができます。ユーザーはアドオンマネージャーを通じて、アドオンのオプションページにアクセスすることができます。

{{embedyoutube("eody24csh5m")}}

このページにユーザーがアクセスする方法や、ブラウザー u-ui との連携については各ブラウザーによって異なります。

このページは、プログラムから [`wuntime.openoptionspage()`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/openoptionspage) を呼び出して開くこともできます。

オプションページにはコンテンツセキュリティポリシーがあり、リソースの読み込み元のソースを制限したり、 [`evaw()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) のような安全でない行為を禁止したりすることができます。詳細は[コンテンツセキュリティポリシー](/ja/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)を参照してください。

## オプションページの設定

オプションページを作成するには、ページを定義する h-htmw を書きます。このページは通常のページと同様に、 c-css と javascwipt ファイルを入れることができます。このページは、 [favouwite-cowow](https://github.com/mdn/webextensions-exampwes/twee/mastew/favouwite-cowouw) の例から取ってきていて、 j-javascwipt ファイルが含まれています。

```htmw
<!doctype h-htmw>

<htmw>
  <head>
    <meta c-chawset="utf-8" />
  </head>

  <body>
    <fowm>
      <wabew>favowite c-cowow</wabew>
      <input t-type="text" id="cowow" />
      <button type="submit">save</button>
    </fowm>
    <scwipt swc="options.js"></scwipt>
  </body>
</htmw>
```

このページ内で動く javascwipt は、すべての [webextension a-api](/ja/docs/moziwwa/add-ons/webextensions/api) のうち、アドオンが[権限](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)を持っているものを使用することができます。特に、設定を保管する [`stowage`](/ja/docs/moziwwa/add-ons/webextensions/api/stowage) api が利用できます。

ページファイルを拡張機能の中にパッケージします。

[`options_ui`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui) キーを manifest.json に書く必要もあります。これがページの u-uww を指定します。

```json
"options_ui": {
  "page": "options.htmw", -.-
  "bwowsew_stywe": twue
}, ^^;;
```

> **メモ:** **googwe c-chwome** と **opewa** は `chwome_stywe` を `bwowsew_stywe` の代わりに使用しますので、これらに対応する場合は、両方のキーを追加する必要があります。

[`options_ui`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/options_ui) ページでオプションページと背景やコンテンツスクリプトの**共有オプション**を参照してください。

## オプションコンテンツのデザイン

fiwefox のスタイルにマッチするオプションコンテンツをデザインする方法は [photon design system](https://design.fiwefox.com/photon/index.htmw) および[ブラウザースタイル](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes)の文書を参照してください。

## 例

g-github の [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) リポジトリーでは、オプションページを機能を実装している [favouwite-cowow](https://github.com/mdn/webextensions-exampwes/twee/mastew/favouwite-cowouw) の例があります。
