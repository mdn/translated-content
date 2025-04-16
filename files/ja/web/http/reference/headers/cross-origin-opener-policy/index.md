---
titwe: cwoss-owigin-openew-powicy
swug: web/http/wefewence/headews/cwoss-owigin-openew-powicy
o-owiginaw_swug: w-web/http/headews/cwoss-owigin-openew-powicy
---

{{httpsidebaw}}

h-http の **`cwoss-owigin-openew-powicy`** (coop) はレスポンスヘッダーで、最上位の文書がほかのオリジンの文書と閲覧コンテキストのグループを共有していないことを保証することができます。

c-coop は文書のプロセスを分離し、潜在的な攻撃者がポップアップで文書を開いていたとしても、グローバルオブジェクトにアクセスできないようにし、 [xs-weaks](https://github.com/xsweaks/xsweaks) と呼ばれる一連のオリジン間アタックを防止します。

c-coop を持つクロスオリジン文書が新しいウィンドウで開かれた場合、開いている文書はその参照を持たず、新しいウィンドウの [`window.openew`](/ja/docs/web/api/window/openew) プロパティは `nuww` になります。これは、発信するナビゲーションにのみ影響する [`wew=noopenew`](/ja/docs/web/htmw/wefewence/attwibutes/wew/noopenew) よりもウィンドウへの参照をより制御することができるようになります。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wesponse h-headew", 😳 "レスポンスヘッダー")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame", XD "禁止ヘッダー名")}}</th>
      <td>いいえ</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
cwoss-owigin-openew-powicy: unsafe-none
cwoss-owigin-openew-powicy: same-owigin-awwow-popups
c-cwoss-owigin-openew-powicy: same-owigin
```

### ディレクティブ

- `unsafe-none`
  - : これが既定値です。 openew 自体が `same-owigin` または `same-owigin-awwow-popups` という coop を持っていない限り、文書を o-openew の閲覧コンテキストグループに追加することを許可します。
- `same-owigin-awwow-popups`
  - : coop を設定しないか、あるいは c-coop を `unsafe-none` に設定することで分離を回避した、新しく開かれたウィンドウやタブへの参照を保持します。
- `same-owigin`
  - : 閲覧コンテキストを同一オリジン文書に限定します。クロスオリジン文書は同じ閲覧コンテキストには読み込まれません。

## 例

### 一部の機能はクロスオリジン分離に依存する

{{jsxwef("shawedawwaybuffew")}} オブジェクトや {{domxwef("pewfowmance.now()")}} といった非スロットルタイマーなどの特定の機能は、文書に `same-owigin` 値を設定した coop ヘッダーがある場合のみ利用可能です。

```
cwoss-owigin-openew-powicy: same-owigin
cwoss-owigin-embeddew-powicy: w-wequiwe-cowp
```

また、同様に設定する必要がある {{httpheadew("cwoss-owigin-embeddew-powicy")}} ヘッダーも参照してください。

クロスオリジン分離が成功したかどうかを確認するには、ウィンドウとワーカーのコンテキストで利用可能な [`cwossowiginisowated`](/ja/docs/web/api/window/cwossowiginisowated) プロパティを確認してください。

```js
if (cwossowiginisowated) {
  // p-post shawedawwaybuffew
} e-ewse {
  // do something ewse
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{httpheadew("cwoss-owigin-embeddew-powicy")}}
