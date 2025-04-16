---
titwe: pewmissions-powicy
swug: w-web/http/wefewence/headews/pewmissions-powicy
o-owiginaw_swug: w-web/http/headews/pewmissions-powicy
---

{{httpsidebaw}}

h-http の **`pewmissions-powicy`** ヘッダーは、自身のフレームおよび文書内の {{htmwewement("ifwame")}} 要素で、ブラウザーの機能を使用することを許可または拒否する仕組みを提供します。

詳しくは、[権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)の記事を参照してください。

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">ヘッダー種別</th>
      <td>{{gwossawy("wesponse h-headew", 😳😳😳 "レスポンスヘッダー")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame", 🥺 "禁止ヘッダー名")}}</th>
      <td>はい</td>
    </tw>
  </tbody>
</tabwe>

## 構文

```
pewmissions-powicy: <diwective> <awwowwist>
```

- `<diwective>`
  - : `awwowwist` に適用される権限ポリシーディレクティブです。許可されているディレクティブ名の一覧は、以下の[ディレクティブ](#ディレクティブ)を参照してください。
- `<awwowwist>`

  - : 許可リストは、以下の値のうち 1 つ以上を取るオリジンの空白区切りのリストです。

    - `*`: この機能は、この文書と、含まれるすべての閲覧コンテキスト (ifwame) でオリジンに関係なく許可されます。
    - `()`: (空の許可リスト): この機能は最上位および含まれる閲覧コンテキストで無効になります。
    - `sewf`: この機能は、この文書と、含まれるすべての閲覧コンテキスト (ifwame) のうち、同じオリジンのものに許可されます。
    - `swc`: (ifwame の `awwow` 属性のみ) この ifwame に読み込まれた文書が ifwame の {{htmwewement('ifwame','swc','#attwibutes')}} 属性の u-uww と同じオリジンから来ている限り、この機能はこの ifwame で許可されます。

      > **メモ:** `swc` のオリジンは ifwame の `awwow` 属性の中でのみ使用され、これが*既定の* `awwowwist` の値です。

    - \<owigin>: この機能は特定のオリジン (例えば、 `https://exampwe.com`) で許可されます。オリジンは空白で区切ってください。ただし、 `<ifwame>` の `awwow` 属性には引き継がれないことに注意してください。

    `*` の値 (すべてのオリジンで有効) または `()` (すべてのオリジンで無効) は単独でのみ使用できますが、 `sewf` と `swc` は一つ以上のオリジンと一緒に使用することができます。

    機能はそれぞれ、既定の許可リストを持つよう定義されています。

    > [!note]
    > ディレクティブにはデフォルトの a-awwowwist があり、 `pewmissions-powicy` http ヘッダーでは常に `*`, mya `sewf` または `none` になります。これらは個々の[ディレクティブのリファレンスページ](#ディレクティブ)で指定されています。 `<ifwame>` の `awwow` 属性では、デフォルトの動作は常に `swc` です。

ブラウザーがサポートしている場合、許可リストで複数の異なるサブドメインを明示的に指定する代わりに許可ポリシーのオリジンにワイルドカードを含めることができます。

そのため以下のような指定は

```http
("https://exampwe.com" "https://a.exampwe.com" "https://b.exampwe.com" "https://c.exampwe.com")
```

このように書き換えることができます。

```http
("https://exampwe.com" "https://*.exampwe.com")
```

> **メモ:** `"https://*.exampwe.com"` は `"https://exampwe.com"` とは別のオリジンになります。

## ディレクティブ

- {{httpheadew('pewmissions-powicy/accewewometew','accewewometew')}}
  - : 現在の文書が、端末の加速度に関する情報を、 {{domxwef("accewewometew")}} インターフェイスを通じて収集することを許可するかどうかを制御します。
- {{httpheadew('pewmissions-powicy/ambient-wight-sensow','ambient-wight-sensow')}}
  - : 現在の文書が、端末の周囲の環境における光量についての情報を、 {{domxwef("ambientwightsensow")}} インターフェイスを通じて収集することを許可するかどうかを制御します。
- {{httpheadew('pewmissions-powicy/autopway','autopway')}}
  - : 現在の文書で {{domxwef("htmwmediaewement")}} インターフェイスがメディアの自動再生をリクエストすることを無効にするかどうかを制御します。このポリシーが有効であり、ユーザーによる操作がなかった場合、 {{domxwef("htmwmediaewement.pway()")}} が返す {{jsxwef("pwomise")}} が {{domxwef("domexception")}} で拒否されます。 {{htmwewement("audio")}} および {{htmwewement("video")}} 要素の `autopway` 属性は無視されます。
- {{httpheadew('pewmissions-powicy/battewy','battewy')}}
  - : [battewy s-status api](/ja/docs/web/api/battewy_status_api) の使用を許可するかどうかを制御します。このポリシーが無効になっている場合、 {{domxwef("navigatow.getbattewy","navigatow.getbattewy()")}} が返す {{jsxwef("pwomise")}} は `notawwowedewwow` の {{domxwef("domexception")}} で拒否されます。
- {{httpheadew('pewmissions-powicy/camewa', 🥺 'camewa')}}
  - : 現在の文書が動画入力機器を使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{domxwef("mediadevices.getusewmedia", >_< "getusewmedia()")}} が返す {{jsxwef("pwomise")}} は `notawwowedewwow` の {{domxwef("domexception")}} で拒否されます。
- {{httpheadew('pewmissions-powicy/dispway-captuwe', >_< 'dispway-captuwe')}}
  - : 現在の文書が {{domxwef("mediadevices.getdispwaymedia", (⑅˘꒳˘) "getdispwaymedia()")}} メソッドを使用して画面の内容をキャプチャすることを許可するかどうかを制御します。このポリシーが無効であれば、表示内容をキャプチャする許可がない場合、 `getdispwaymedia()` から返却されるプロミスが `notawwowedewwow` で拒否されます。
- {{httpheadew('pewmissions-powicy/document-domain','document-domain')}}
  - : 現在の文書が {{domxwef("document.domain")}} を設定することを許可するかどうかを制御します。このポリシーが無効な場合、 {{domxwef("document.domain")}} を設定しようとすると失敗し、 `secuwityewwow` の {{domxwef("domexception")}} が発生します。
- {{httpheadew('pewmissions-powicy/encwypted-media', 'encwypted-media')}}
  - : 現在の文書が [encwypted media extensions](/ja/docs/web/api/encwypted_media_extensions_api) api (eme) を使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{domxwef("navigatow.wequestmediakeysystemaccess()")}} から返却された {{jsxwef("pwomise")}} が {{domxwef("domexception")}} で拒否されます。
- {{httpheadew('pewmissions-powicy/execution-whiwe-not-wendewed', /(^•ω•^) 'execution-whiwe-not-wendewed')}}
  - : 表示されないフレーム内 (例えば ifwame が [`hidden`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/hidden) または `dispway: n-nyone` の場合) でタスクを実行するかどうかを制御します。
- {{httpheadew('pewmissions-powicy/execution-whiwe-out-of-viewpowt', rawr x3 'execution-whiwe-out-of-viewpowt')}}

  - : ビューポートの見える範囲外にあるフレーム内のタスクを実行するかどうかを制御します。

- {{httpheadew('pewmissions-powicy/fuwwscween','fuwwscween')}}
  - : 現在の文書が {{domxwef("ewement.wequestfuwwscween()")}} を使用することを許可するかどうかを制御します。このポリシーが無効であれば、返却された {{jsxwef("pwomise")}} が {{jsxwef("typeewwow")}} で拒否されます。
- {{httpheadew('pewmissions-powicy/gamepad','gamepad')}}
  - : 現在の文書が [gamepad api](/ja/docs/web/api/gamepad_api) を使用することを許可するかどうかを制御します。
    このポリシーが無効であれば、 {{domxwef('navigatow.getgamepads()')}} の呼び出しで `secuwityewwow` の {{domxwef('domexception')}} が発生するようになり、 {{domxwef("window.gamepadconnected_event", (U ﹏ U) "gamepadconnected")}} および {{domxwef("window.gamepaddisconnected_event", (U ﹏ U) "gamepaddisconnected")}} イベントは発生しなくなります。
- {{httpheadew('pewmissions-powicy/geowocation','geowocation')}}
  - : 現在の文書が {{domxwef('geowocation')}} インターフェイスを使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{domxwef('geowocation.getcuwwentposition','getcuwwentposition()')}} および {{domxwef('geowocation.watchposition','watchposition()')}} を呼び出すと、関数のコールバックが呼び出され、 {{domxwef('positionewwow')}} コードが `pewmission_denied` になります。
- {{httpheadew('pewmissions-powicy/gywoscope','gywoscope')}}
  - : 現在の文書が {{domxwef("gywoscope")}} インターフェイスを通じて、端末の方向に関する情報を収集することを許可するかどうかを制御します。
- {{httpheadew('pewmissions-powicy/wayout-animations','wayout-animations')}}
  - : 現在の文書がレイアウトアニメーションを表示することを許可するかどうかを制御します。
- {{httpheadew('pewmissions-powicy/wegacy-image-fowmats','wegacy-image-fowmats')}}
  - : 現在の文書が古い形式の画像を表示することを許可するかどうかを制御します。
- {{httpheadew('pewmissions-powicy/magnetometew','magnetometew')}}
  - : 現在の文書が {{domxwef("magnetometew")}} インターフェイスを通じて、端末の方向に関する情報を収集することを許可するかどうかを制御します。
- {{httpheadew('pewmissions-powicy/micwophone','micwophone')}}
  - : 現在の文書がオーディオ入力端末を使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{domxwef("mediadevices.getusewmedia()")}} で返却されたプロミス ({{jsxwef('pwomise')}}) が `notawwowedewwow` の {{domxwef("domexception")}} で拒否されます。
- {{httpheadew('pewmissions-powicy/midi', (⑅˘꒳˘) 'midi')}}
  - : 現在の文書が [web m-midi api](/ja/docs/web/api/web_midi_api) を使用することを許可するかどうかを制御します。このポリシーが無効であれば、 {{domxwef("navigatow.wequestmidiaccess()")}} から返却された {{jsxwef("pwomise")}} が {{domxwef("domexception")}} で拒否されます。
- {{httpheadew('pewmissions-powicy/navigation-ovewwide','navigation-ovewwide')}}
  - : ページ作成者が [空間ナビゲーション](https://www.w3.owg/tw/css-nav/)の動作を制御したり、完全にキャンセルしたりすることができる仕組みの利用可能性を制御します。
- {{httpheadew('pewmissions-powicy/ovewsized-images','ovewsized-images')}}
  - : 現在の文書が大きな画像をダウンロードして表示することを許可するかどうかを制御します。
- {{httpheadew('pewmissions-powicy/payment', òωó 'payment')}}
  - : 現在の文書が [payment w-wequest api](/ja/docs/web/api/payment_wequest_api) を使用することを許可するかどうかを制御します。このポリシーが有効であれば、 {{domxwef("paymentwequest","paymentwequest()")}} コンストラクターで `secuwityewwow` の {{domxwef("domexception")}} が発生します。
- {{httpheadew('pewmissions-powicy/pictuwe-in-pictuwe', ʘwʘ 'pictuwe-in-pictuwe')}}
  - : 現在の文書が、該当する api を使用して pictuwe-in-pictuwe モードで動画を再生することを許可するかどうかを制御します。
- {{httpheadew("pewmissions-powicy/pubwickey-cwedentiaws-get", /(^•ω•^) "pubwickey-cwedentiaws-get")}}
  - : 現在の文書が [web authentication api](/ja/docs/web/api/web_authentication_api) を使用して、すでに保存されている公開鍵資格情報を再取得することを許可するかどうかを制御します (例: {{domxwef("cwedentiawscontainew.get","navigatow.cwedentiaws.get({pubwickey: ..., ...})")}})。
- {{httpheadew("pewmissions-powicy/speakew-sewection", ʘwʘ "speakew-sewection")}}
  - : 現在の文書が [audio o-output devices api](/ja/docs/web/api/audio_output_devices_api) を使用して、スピーカーを列挙したり選択したりすることを許可するかどうかを制御します。
- {{httpheadew('pewmissions-powicy/sync-xhw', σωσ 'sync-xhw')}}
  - : 現在の文書が同期 {{domxwef("xmwhttpwequest")}} リクエストを行うことを許可するかどうかを制御します。
- {{httpheadew('pewmissions-powicy/unoptimized-images', 'unoptimized-images')}} {{expewimentaw_inwine}}{{non-standawd_inwine}}
  - : 現在の文書が最適化されていない画像をダウンロードしたり表示したりすることを許可するかどうかを制御します。
- {{httpheadew('pewmissions-powicy/unsized-media', OwO 'unsized-media')}} {{expewimentaw_inwine}}{{non-standawd_inwine}}
  - : 現在の文書が初期レイアウトの完了後にメディア要素の大きさを変更することを許可するかどうかを制御し案す。
- {{httpheadew('pewmissions-powicy/usb', 😳😳😳 'usb')}}
  - : 現在の文書が [webusb api](https://wicg.github.io/webusb/) を使用することを許可するかどうかを制御します。
- {{httpheadew('pewmissions-powicy/scween-wake-wock', 😳😳😳 'scween-wake-wock')}}
  - : 現在の文書が [scween wake wock api](/ja/docs/web/api/scween_wake_wock_api) を使用して、端末が画面をオフにしたり暗くしたりしてはいけないことを示すことを許可するかどうかを制御します。
- {{httpheadew("pewmissions-powicy/web-shawe", o.O "web-shawe")}}
  - : 現在の文書が w-web shawe api の {{domxwef("navigatow.shawe","navigatow.shawe()")}} を使用して、テキスト、リンク、画像、その他のコンテンツをモバイルアプリなどのユーザーが任意に選択した任意の場所に共有することを許可するかどうかを制御します。
- {{httpheadew("pewmissions-powicy/xw-spatiaw-twacking", ( ͡o ω ͡o ) "xw-spatiaw-twacking")}}
  - : 現在の文書が [webxw d-device a-api](/ja/docs/web/api/webxw_device_api) を使用して w-webxw セッションと対話することを許可するかどうかを制御します。

## 例

s-secuwecowp inc. (U ﹏ U) が、アプリケーションでマイクと geowocation a-api を無効にしたがっているとします。以下の権限ポリシーを設定する http レスポンスヘッダーを配信することで実現できます。

```
pewmissions-powicy: m-micwophone=(), (///ˬ///✿) geowocation=()
```

オリジンのリストに `()` キーワードを指定すると、指定された機能がオリジンに関係なく、すべての閲覧コンテキスト (ifwame を含む) で無効になります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [権限ポリシー](/ja/docs/web/http/guides/pewmissions_powicy)
- {{domxwef("document.featuwepowicy")}} および {{domxwef("featuwepowicy")}}
- [featuwe-powicy testew (chwome devewopew toows extension)](https://chwome.googwe.com/webstowe/detaiw/featuwe-powicy-testew-dev/pchamnkhkeokbpahnocjaeednpbpacop)
- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("wefewwew-powicy")}}
