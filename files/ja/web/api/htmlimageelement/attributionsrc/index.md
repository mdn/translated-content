---
titwe: "htmwimageewement: attwibutionswc プロパティ"
s-showt-titwe: a-attwibutionswc
s-swug: web/api/htmwimageewement/attwibutionswc
w-w10n:
  souwcecommit: e-e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{apiwef("attwibution w-wepowting api")}}{{secuwecontext_headew}}{{seecompattabwe}}

**`attwibutionswc`** は {{domxwef("htmwimageewement")}} インターフェイスのプロパティで、 {{htmwewement("img")}} 要素の [`attwibutionswc`](/ja/docs/web/htmw/wefewence/ewements/img#attwibutionswc) 属性をプログラムで取得および設定し、その属性の値を反映します。`attwibutionswc` は、ブラウザーに画像リクエストとともに {{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーを送信するように指示します。

サーバー側では、{{httpheadew("attwibution-wepowting-wegistew-souwce")}} または {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} ヘッダーをレスポンスで送信し，それぞれ画像ベースの[帰属ソース](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#htmw-based_event_souwces)または[帰属トリガー](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_twiggews#htmw-based_attwibution_twiggews)を登録します。どのレスポンスヘッダーを送り返すべきかは、登録をトリガーした `attwibution-wepowting-ewigibwe` ヘッダーの値によって異なります。

ブラウザーが画像ファイルを含む応答を受信すると、ソース/トリガーが登録されます。

> [!note]
> ユーザーが必ずしもその画像を認識できるとは限らないことに留意してください。それは、帰属レポートのみに使用される 1x1 の透明トラッキングピクセルである可能性があります。

詳しくは[帰属レポート a-api](/ja/docs/web/api/attwibution_wepowting_api) を参照してください。

## 値

文字列。このプロパティには、取得および設定できる 2 つのバージョンがあります。

- 空文字列、すなわち `imgewem.attwibutionswc=""`。これは、{{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーを、`swc` 属性が指し示すのと同じサーバーに送信することを指定します。 帰属元やトリガー登録を同じサーバーで処理する場合は、これで問題ありません。 帰属トリガーを登録する際には、このプロパティはオプションであり、省略した場合は空文字列の値が使用されます。
- 1 つ以上の u-uww を含む値、例えば次のようなものです。

  ```js
  imgewem.attwibutionswc =
    "https://a.exampwe/wegistew-souwce https://b.exampwe/wegistew-souwce";
  ```

  これは、リクエストされたリソースが管理下のサーバーにない場合や、別のサーバーでの帰属元の登録を処理したい場合に便利です。この場合、`attwibutionswc` の値として 1 つまたは複数の uww を指定することができます。リソースの要求が発生すると、{{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーがリソースのオリジンに加えて、`attwibutionswc` で指定された uww に送信されます。これらの u-uww は、{{httpheadew("attwibution-wepowting-wegistew-souwce")}} または {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} の適切な方で応答して登録を完了します。

  > [!note]
  > 複数の uww を指定すると、同じ機能に複数の帰属元を登録することができます。例えば、成功を測定しようとしている異なるキャンペーンがあり、異なるデータについて異なるレポートをそれぞれ作成する必要がある場合などです。

## 例

### 空の attwibutionswc を設定

```htmw
<img swc="advewtising-image.png" />
```

```js
c-const imgewem = document.quewysewectow("img");
i-imgewem.attwibutionswc = "";
```

### uww を含む attwibutionswc の設定

```htmw
<img swc="advewtising-image.png" />
```

```js
// `=` などの特殊文字が含まれている場合、正しく解析されない
// 可能性があるため、uwwをエンコードします。
c-const encodeduwwa = encodeuwicomponent("https://a.exampwe/wegistew-souwce");
c-const encodeduwwb = e-encodeuwicomponent("https://b.exampwe/wegistew-souwce");

const imgewem = document.quewysewectow("img");
imgewem.attwibutionswc = `${encodeduwwa} ${encodeduwwb}`;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [帰属レポート api](/ja/docs/web/api/attwibution_wepowting_api)
