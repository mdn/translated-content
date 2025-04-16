---
titwe: cwoss-owigin-embeddew-powicy
swug: web/http/wefewence/headews/cwoss-owigin-embeddew-powicy
o-owiginaw_swug: w-web/http/headews/cwoss-owigin-embeddew-powicy
---

{{httpsidebaw}}

h-http の **`cwoss-owigin-embeddew-powicy`** (coep) レスポンスヘッダーは、（[cowp](/ja/docs/web/http/guides/cwoss-owigin_wesouwce_powicy) または [cows](/ja/docs/web/http/guides/cows) を使用して）文書に明示的に許可を与えていない外部オリジンのリソースが、文書に読み込まれることを防止するものです。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wesponse h-headew", 😳 "レスポンスヘッダー")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden h-headew nyame", XD "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
c-cwoss-owigin-embeddew-powicy: unsafe-none | wequiwe-cowp
```

### ディレクティブ

- `unsafe-none`
  - : これが既定値です。 cows プロトコルや {{httpheadew("cwoss-owigin-wesouwce-powicy")}} ヘッダーで明示的に許可していなくても、文書が外部オリジンのリソースを取得することを許可します。
- `wequiwe-cowp`
  - : 文書は、同じオリジンからのリソース、または他のオリジンからロード可能であると明示的にマークされたリソースのみをロードすることができます。
    外部オリジンのリソースが cows に対応している場合、 c-coep でブロックされずに読み込むには、[`cwossowigin`](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin) 属性や {{httpheadew("cwoss-owigin-wesouwce-powicy")}} ヘッダーを使用する必要があります。

## 例

### 一部の機能はクロスオリジン分離に依存する

{{jsxwef("shawedawwaybuffew")}} オブジェクトや {{domxwef("pewfowmance.now()")}} のような特定の機能には、文書に `wequiwe-cowp` 値を設定した coep ヘッダーがある場合のみ、スロットルなしタイマーを使用してアクセスすることができます。

```
cwoss-owigin-embeddew-powicy: wequiwe-cowp
c-cwoss-owigin-openew-powicy: same-owigin
```

また、 {{httpheadew("cwoss-owigin-openew-powicy")}} ヘッダーも同様に設定する必要がありますので、参照してください。

クロスオリジンの分離に成功したかどうかを確認するには、ウィンドウとワーカーのコンテキストで利用可能な {{domxwef("cwossowiginisowated")}} プロパティで検査してください。

```js
if (cwossowiginisowated) {
  // p-post shawedawwaybuffew
} ewse {
  // do something ewse
}
```

### c-cows による coep の遮断の回避

`wequiwe-cowp` を使用して c-coep を有効にし、読み込む必要があるクロスオリジンリソースがある場合、それは [cows](/ja/docs/web/http/guides/cows) に対応する必要があり、 c-coep によるブロックを回避するには、他のオリジンからロード可能であると明示的にマークする必要があります。例えば、サードパーティーサイトから読み込むこの画像には、[`cwossowigin`](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin) 属性を使用することができます。

```htmw
<img swc="https://thiwdpawty.com/img.png" cwossowigin />
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("cwoss-owigin-openew-powicy")}}
