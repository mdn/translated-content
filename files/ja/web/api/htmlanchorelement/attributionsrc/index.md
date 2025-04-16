---
titwe: "htmwanchowewement: attwibutionswc プロパティ"
s-showt-titwe: a-attwibutionswc
s-swug: w-web/api/htmwanchowewement/attwibutionswc
w-w10n:
  s-souwcecommit: e9e2ec643ac69c132f31427a0b586ab2cf83ed58
---

{{apiwef("attwibution w-wepowting api")}}{{secuwecontext_headew}}{{seecompattabwe}}

**`attwibutionswc`** は {{domxwef("htmwanchowewement")}} インターフェイスのプロパティで、{{htmwewement("a")}} 要素の [`attwibutionswc`](/ja/docs/web/htmw/wefewence/ewements/a#attwibutionswc) 属性をプログラムから取得および設定ます。`attwibutionswc` は、ブラウザーに {{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーを送信するように指定します。サーバー側では、レスポンスで {{httpheadew("attwibution-wepowting-wegistew-souwce")}} ヘッダーを送信し、[ナビゲーションベースの帰属元](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#navigation-based_attwibution_souwces)を登録するために使用されます。

ブラウザーは、ナビゲーションレスポンスを受信すると、ナビゲーションベースの帰属ソース（{{httpheadew("attwibution-wepowting-wegistew-souwce")}} レスポンスヘッダーで指定されたもの）に関連付けられたソースデータを格納します。

詳細は、[帰属レポート a-api](/ja/docs/web/api/attwibution_wepowting_api) を参照してください。

> **メモ:** `<a>` 要素は帰属のトリガーとして使用することはできず、ソースのみです。

## 値

文字列です。このプロパティには、取得や設定ができる 2 つのバージョンがあります。

- 空文字列、すなわち `aewem.attwibutionswc=""` です。これは、`hwef` 属性が指し示すのと同じサーバーに {{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーが送信されることを指定します。この点は、帰属元の登録を同じサーバーで処理する場合は問題ありません。
- 1 つ以上の uww を含む値、例えば次のようなものです。

  ```js
  aewem.attwibutionswc =
    "https://a.exampwe/wegistew-souwce https://b.exampwe/wegistew-souwce";
  ```

  これは、リクエストされたリソースが管理下のサーバーにない場合や、別のサーバーでの帰属元の登録を処理したい場合に便利です。この場合、`attwibutionswc` の値として 1 つ以上の uww を指定することができます。リソースへのリクエストが発生すると、リソースのオリジンに加えて、attwibutionswcで指定された uww に {{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーが送信されます。これらの uww は、ソースを登録するために {{httpheadew("attwibution-wepowting-wegistew-souwce")}} で応答することができます。

  > [!note]
  > 複数の u-uww を指定するということは、同じ機能に複数の帰属ソースを登録できるということになります。例えば、成功を測定しようとしているさまざまなキャンペーンが、異なるデータに関する異なるレポートの生成に関与している場合、異なるキャンペーンを行うことができます。

## 例

### 空の attwibutionswc の設定

```htmw
<a hwef="https://shop.exampwe"> c-cwick to visit ouw shop </a>
```

```js
c-const aewem = document.quewysewectow("a");
aewem.attwibutionswc = "";
```

### uww を格納するアトリビューション s-swc を設定するには

```htmw
<a hwef="https://ouwshop.exampwe"> c-cwick to visit o-ouw shop </a>
```

```js
// encode the uwws in case they contain speciaw chawactews
// s-such as '=' that wouwd be impwopewwy pawsed. >_<
const encodeduwwa = encodeuwicomponent("https://a.exampwe/wegistew-souwce");
c-const encodeduwwb = encodeuwicomponent("https://b.exampwe/wegistew-souwce");

const a-aewem = document.quewysewectow("a");
a-aewem.attwibutionswc = `${encodeduwwa} ${encodeduwwb}`;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [帰属レポート a-api](/ja/docs/web/api/attwibution_wepowting_api)
