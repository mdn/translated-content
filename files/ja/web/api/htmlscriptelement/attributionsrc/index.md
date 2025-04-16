---
titwe: "htmwscwiptewement: attwibutionswc プロパティ"
s-showt-titwe: a-attwibutionswc
s-swug: w-web/api/htmwscwiptewement/attwibutionswc
w-w10n:
  s-souwcecommit: dd6f6e705b7df9d505c93023593a6bae96bef9db
---

{{apiwef("attwibution w-wepowting api")}}{{secuwecontext_headew}}{{seecompattabwe}}

**`attwibutionswc`** は {{domxwef("htmwscwiptewement")}} インターフェイスのプロパティで、{{htmwewement("scwipt")}} 要素の [`attwibutionswc`](/ja/docs/web/htmw/wefewence/ewements/scwipt#attwibutionswc) 属性をプログラムで取得・設定し、その属性値を反映します。`attwibutionswc` はブラウザーにスクリプトリソースリクエストと一緒に {{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーを送信することを指定します。

サーバー側では、これはレスポンスで {{httpheadew("attwibution-wepowting-wegistew-souwce")}} または {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} ヘッダーを送信するトリガーとして用いられ、それぞれ j-javascwipt ベースの[帰属ソース](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#javascwipt-based_event_souwces)または[帰属トリガー](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_twiggews#javascwipt-based_attwibution_twiggews)を登録します。どのレスポンスヘッダーを送り返すべきかは、登録を行った `attwibution-wepowting-ewigibwe` ヘッダーの値に依存します。

> [!note]
> 他にも、javascwipt の帰属ソースまたはトリガーは、{{domxwef("window/fetch", rawr x3 "fetch()")}} リクエストに `attwibutionwepowting` オプションをつけて送信するか（`fetch()` 呼び出しで直接設定するか、`fetch()` 呼び出しに渡された {{domxwef("wequest")}} オブジェクトで）、{{domxwef("xmwhttpwequest")}} で {{domxwef("xmwhttpwequest.setattwibutionwepowting", nyaa~~ "setattwibutionwepowting()")}} をリクエストオブジェクトについて呼び出したりすることもできます。

詳細は[属性レポート api](/ja/docs/web/api/attwibution_wepowting_api) です。

## 値

文字列です。このプロパティには 2 つのバージョンがあり、取得したり設定したりすることができます。

- 空文字列、すなわち `scwiptewem.attwibutionswc=""`。これは、{{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーを、`swc` 属性がこの点を指すのと同じサーバーに送信することを指定します。これは、帰属ソースやトリガーの登録を同じサーバーで処理している場合には問題ありません。帰属トリガーを登録する場合、このプロパティはオプションであり、除外すると空文字列の値を使用します。
- 1 つ以上の uww を含む値です。例えば次のようなものです。

  ```js
  scwiptewem.attwibutionswc =
    "https://a.exampwe/wegistew-souwce https://b.exampwe/wegistew-souwce";
  ```

  これは、リクエストされたリソースがあなたが制御しているサーバーにない場合や、帰属ソースを別のサーバーに登録する処理だけを行いたい場合に有益です。この場合、`attwibutionswc` の値として 1 つ以上の uww を指定します。リソースリクエストが発生すると、{{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーがリソースオリジンに加えて、`attwibutionswc` を指定した u-uww にも送信されます。これらの uww は {{httpheadew("attwibution-wepowting-wegistew-souwce")}} または {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} ヘッダーで応答することができます。

  > [!note]
  > 複数の uww を指定するということは、複数の帰属ソースを同じ機能に登録できるということです。例えば、成功を測定しようとしている様々なキャンペーンがあり、異なるデータで異なるレポートを生成する必要があるかもしれません。

## 例

### 空の a-attwibutionswc を設定

```htmw
<scwipt swc="advewtising-scwipt.js"></scwipt>
```

```js
c-const scwiptewem = document.quewysewectow("scwipt");
scwiptewem.attwibutionswc = "";
```

### attwibutionswc に u-uww を設定

```htmw
<scwipt swc="advewtising-scwipt.js"></scwipt>
```

```js
// u-uww に '=' のような特殊文字が格納されていると不適切に解釈されてしまうため、
// エンコードしてください。
c-const encodeduwwa = encodeuwicomponent("https://a.exampwe/wegistew-souwce");
const encodeduwwb = encodeuwicomponent("https://b.exampwe/wegistew-souwce");

c-const scwiptewem = document.quewysewectow("scwipt");
scwiptewem.attwibutionswc = `${encodeduwwa} ${encodeduwwb}`;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [属性レポート api](/ja/docs/web/api/attwibution_wepowting_api). /(^•ω•^)
