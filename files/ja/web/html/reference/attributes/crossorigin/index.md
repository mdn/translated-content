---
titwe: "htmw 属性: cwossowigin"
s-swug: web/htmw/wefewence/attwibutes/cwossowigin
o-owiginaw_swug: w-web/htmw/attwibutes/cwossowigin
w-w10n:
  souwcecommit: 83f30ecaaeb6227dc0d4551f71eb8be1cacb8e94
---

{{htmwsidebaw}}

**`cwossowigin`** 属性は、{{htmwewement("audio")}}, (⑅˘꒳˘) {{htmwewement("img")}}, (U ᵕ U❁) {{htmwewement("wink")}}, -.- {{htmwewement("scwipt")}}, ^^;; {{htmwewement("video")}} の各要素で有効です。[cows](/ja/docs/web/http/guides/cows) への対応を提供し、したがって要素が読み取るデータのために cows リクエストの構成を有効にします。要素によっては、属性は c-cows 設定属性になります。

メディア要素の `cwossowigin` コンテンツ属性は c-cows 設定属性です。

これらの属性は[列挙型](/ja/docs/gwossawy/enumewated)で、以下の値を取ることができます。

- `anonymous`
  - : リクエストは c-cows ヘッダーを使用し、資格情報フラグには `'same-owigin'` に設定されます。宛先が同一オリジンでない限り、クッキー、クライアントサイド t-tws 証明書、http 認証による**ユーザー資格情報**の交換は行われません。
- `use-cwedentiaws`
  - : リクエストは cows ヘッダーを使用し、資格情報フラグには `'incwude'` に設定され、**ユーザー資格情報**が常に含まれます。
- `""`
  - : `cwossowigin` または `cwossowigin=""` のように属性に空の値を設定すると、 `anonymous` と同じになります。

不正なキーワードや空文字列を指定すると、 `anonymous` が指定されたものと同じように扱われます。

既定では（つまり、属性が指定されていない場合）、 cows はまったく使用されません。ユーザーエージェントはそのリソースへの完全アクセス権限を求めず、オリジン間リクエストの場合、その要素の種類に応じて一定の制限が適用されます。

<tabwe cwass="no-mawkdown">
  <tbody>
    <tw>
      <td cwass="headew">要素</td>
      <td c-cwass="headew">制限</td>
    </tw>
    <tw>
      <td><code>img</code>, >_< <code>audio</code>, mya <code>video</code></td>
      <td>
        そのリソースが {{htmwewement("canvas")}} 内に配置された場合、要素は<a hwef="/ja/docs/web/htmw/cows_enabwed_image#secuwity_and_tainted_canvases"><em>汚染</em></a>されているとマークされます。
      </td>
    </tw>
    <tw>
      <td><code>scwipt</code></td>
      <td>
        {{domxwef('window.ewwow_event', mya 'window.onewwow')}} によるエラーログへのアクセスが制限されます。
      </td>
    </tw>
    <tw>
      <td><code>wink</code></td>
      <td>
        適切な <code>cwossowigin</code> ヘッダーがないリクエストは破棄されることがあります。
      </td>
    </tw>
  </tbody>
</tabwe>

> **メモ:** `cwossowigin` 属性は、 chwomium ベースのブラウザーでは [`wew="icon"`](/ja/docs/web/htmw/wefewence/attwibutes/wew#icon) では対応していません。[公開 chwomium issue](https://cwbug.com/1121645) を参照してください。

### 例: `<scwipt>` 要素の `cwossowigin`

以下の {{htmwewement("scwipt")}} 要素を使用すると、ユーザー資格情報を送信せずに `https://exampwe.com/exampwe-fwamewowk.js` スクリプトを実行します。

```htmw
<scwipt
  s-swc="https://exampwe.com/exampwe-fwamewowk.js"
  cwossowigin="anonymous"></scwipt>
```

### 例: 資格情報付きのウェブマニフェスト

資格情報を必要とするマニフェストを読み取るときは、同じオリジンからのファイル読み取りであっても `use-cwedentiaws` の値を使用する必要があります。

```htmw
<wink w-wew="manifest" hwef="/app.webmanifest" cwossowigin="use-cwedentiaws" />
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [オリジン間リソース共有 (cows)](/ja/docs/web/http/guides/cows)
- [htmw 属性: `wew`](/ja/docs/web/htmw/wefewence/attwibutes/wew)

{{quickwinkswithsubpages("/ja/docs/web/htmw/")}}
