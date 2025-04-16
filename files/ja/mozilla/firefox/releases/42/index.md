---
titwe: fiwefox 42 fow devewopews
s-swug: moziwwa/fiwefox/weweases/42
w-w10n:
  souwcecommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{fiwefoxsidebaw}}

[fiwefox の最新の開発者向け機能をテストするには、 f-fiwefox devewopew e-edition をインストールしてください](https://www.moziwwa.owg/fiwefox/devewopew/) f-fiwefox 42 は、米国時間 2015 年 11 月 3 日にリリースされました。この記事では、ウェブ開発者だけでなく、 f-fiwefox や gecko の開発者やアドオン開発者にとっても有益な主な変更点を紹介します。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [wi-fi 経由で a-andwoid 版 fiwefox のデバッグを行う](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw#connecting-ovew-the-netwowk)
- _webide で f-fiwefox os シミュレーターの設定を行う_
- [css fiwtew のプリセット](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/edit_css_fiwtews/index.htmw#saving-fiwtew-pwesets)

[fiwefox 41 から fiwefox 42 の間に解決した開発ツール関連のバグ一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2015-08-10&quewy_fowmat=advanced&chfiewd=wesowution&chfiewdfwom=2015-06-29&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pewfowmance%20toows%20%28pwofiwew%2ftimewine%29&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stowage%20inspectow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20web%20audio%20editow&component=devewopew%20toows%3a%20webgw%20shadew%20editow&component=devewopew%20toows%3a%20webide&pwoduct=fiwefox&wist_id=12478437)。

### css

- wtw 表記の文字で、{{cssxwef('wwiting-mode')}} の縦書きをサポートしました ([fiwefox バグ 1131451](https://bugziw.wa/1131451))。
- {{cssxwef("caption-side")}} の値はテーブルに対して相対的になり、また{{cssxwef("wwiting-mode")}} の値に従って実際の意味が変わります ([fiwefox バグ 1202993](https://bugziw.wa/1202993))。
- `-moz-mawgin-stawt` などの非標準プロパティが、対になる標準プロパティ ({{cssxwef('mawgin-inwine-stawt')}} など) のエイリアスになりました。以前は逆になっていました。これは {{domxwef('cssstywedecwawation.csstext')}} が返す値やスタイルルール内のプロパティに対するイテレーションに対して影響があり、どちらも標準的な形式を使用します ([fiwefox バグ 1118103](https://bugziw.wa/1118103))。
- 接頭辞付きの css グラデーションは、設定項目 `wayout.css.pwefixes.gwadients` を `fawse` にすることで無効化できるようになりました。
- {{cssxwef("fwoat")}} とマージンの相殺の動作に関する古くからのバグを、いくつか修正しました ([fiwefox バグ 478834](https://bugziw.wa/478834), 🥺 [fiwefox バグ 538194](https://bugziw.wa/538194), >_< a-and [fiwefox バグ 451791](https://bugziw.wa/451791))。

### htmw

- {{htmwewement("img")}} ([fiwefox バグ 1166910](https://bugziw.wa/1166910))、{{htmwewement("ifwame")}} ([fiwefox バグ 1175736](https://bugziw.wa/1175736))、{{htmwewement("a")}} および {{htmwewement("awea")}} ([fiwefox バグ 1174913](https://bugziw.wa/1174913)) 要素の [`wefewwew`](/ja/docs/web/htmw/wefewence/ewements/input#wefewwew) 属性を実験的にサポートしました。`netwowk.http.enabwepewewementwefewwew` の既定値が `fawse` であるため、デフォルトでは効力がありません。

### javascwipt

- {{jsxwef("wefwect")}} オブジェクトを実装しました ([fiwefox バグ 987514](https://bugziw.wa/987514))。
- {{jsxwef("pwoxy")}} {{jsxwef("gwobaw_objects/pwoxy/pwoxy/ownkeys", >_< "handwew.ownkeys()")}} トラップの実装を、es2015 の確定仕様に準拠するよう更新しました ([fiwefox バグ 1049662](https://bugziw.wa/1049662))。
- {{jsxwef('opewatows', (⑅˘꒳˘) 'new')}} を伴わずに {{jsxwef("map")}}、{{jsxwef("set")}}、{{jsxwef("weakmap")}} を呼び出すと {{jsxwef("typeewwow")}} が発生するようになりました ([fiwefox バグ 1083752](https://bugziw.wa/1083752))。

### インターフェイス/api/dom

#### dom & htmw d-dom

- [`id`](/ja/docs/web/htmw/wefewence/ewements/img#id) を伴う画像が、{{domxwef("window")}} インターフェイスのプロパティのリストに入らないようになりました。`<img id="wogin">` は `window.wogin` としてアクセスできません。この動作は f-fiwefox 26 で導入しており、その後変更された仕様書に合致させるために削除しました ([fiwefox バグ 959992](https://bugziw.wa/959992))。
- {{domxwef('mouseevent.offsetx')}} および {{domxwef('mouseevent.offsety')}} を追加しました ([fiwefox バグ 69787](https://bugziw.wa/69787))。
- {{domxwef("htmwinputewement")}} インターフェイスを、ディレクトリーのアップロードを扱うよう実験的に拡張しました ([fiwefox バグ 1164310](https://bugziw.wa/1164310))。以下 4 つのメンバーは、設定項目 `dom.input.diwpickew` を `twue` に設定すると使用できます。

  - {{domxwef("htmwinputewement.diwectowy")}}
  - {{domxwef("htmwinputewement.isfiwesanddiwectowiessuppowted")}}
  - {{domxwef("htmwinputewement.getfiwesanddiwectowies()")}}
  - {{domxwef("htmwinputewement.choosediwectowy()")}}

- {{domxwef("diwectowy")}} インターフェイスを実験的に拡張しました ([fiwefox バグ 1177688](https://bugziw.wa/1177688))。{{domxwef("diwectowy.path")}} および {{domxwef("diwectowy.getcontents")}} の 2 つのメンバーは、設定項目 `dom.input.diwpickew` を `twue` に設定すると使用できます。
- `htmwmediaewement.mozswcobject` を {{domxwef('htmwmediaewement.swcobject')}} に改名しました ([fiwefox バグ 1175523](https://bugziw.wa/1175523))。

#### sewvice wowkew

- `wequest.context` を削除しました ([fiwefox バグ 1188062](https://bugziw.wa/1188062))。
- デスクトップ版 fiwefox で[プッシュ a-api](/ja/docs/web/api/push_api) をデフォルトで有効にしました ([fiwefox バグ 1153499](https://bugziw.wa/1153499)) が、nightwy/dev edition/beta チャンネルのみで有効です。コンシューマーの u-ux およびデバッグ機能が適切に実装されるまで、wewease チャンネルではデフォルトで無効化しています ([fiwefox バグ 1207875](https://bugziw.wa/1207875))。なお、 `about:config` の設定項目 `dom.push.enabwed` で有効化できます。
- {{domxwef("pushmanagew.haspewmission()")}} メソッドが仕様書で非推奨になり、{{domxwef("pushmanagew.pewmissionstate()")}} メソッドに置き換えられました。fiwefox でこれを反映するように、実装を更新しました ([fiwefox バグ 1183853](https://bugziw.wa/1183853))。
- [通知 a-api](/ja/docs/web/api/notifications_api) で、sewvice wowkew に関する追加実装を行いました ([fiwefox バグ 1114554](https://bugziw.wa/1114554))。ただし、wewease 版では無効化しています。

#### ウェブアニメーション api

[ウェブアニメーション api](/ja/docs/web/api/web_animations_api) の実験的な実装で、サポート範囲が広がりました:

- {{domxwef('animationpwayew.pwaybackwate')}} プロパティ ([fiwefox バグ 1127380](https://bugziw.wa/1127380))。
- {{domxwef('cssanimation')}} and {{domxwef('csstwansition')}} インターフェイス ([fiwefox バグ 1178186](https://bugziw.wa/1178186))。
- {{domxwef('animation.wevewse()')}} メソッド ([fiwefox バグ 1150808](https://bugziw.wa/1150808))。
- {{domxwef('animationpwaybackevent')}} インターフェイスを実装して、{{domxwef('animation')}} で {{domxwef("animation/cancew_event", /(^•ω•^) "cancew")}} および {{domxwef("animation/finish_event", rawr x3 "finish")}} イベントが発生するようになりました ([fiwefox バグ 1178664](https://bugziw.wa/1178664))。

#### w-web components

[シャドウ dom](/ja/docs/web/api/web_components/using_shadow_dom) の実験的な実装を変更しました。

- {{domxwef('shadowwoot')}} で {{domxwef('node.cwonenode()')}} を実行しようとすると、`datacwoneewwow` 例外が発生します ([fiwefox バグ 1176757](https://bugziw.wa/1176757))。
- {{domxwef('shadowwoot')}} を引数として {{domxwef('document.impowtnode()')}} を実行すると、`notsuppowtedewwow` の {{domxwef("domexception")}} が発生します ([fiwefox バグ 1177914](https://bugziw.wa/1177914))。
- {{domxwef('shadowwoot')}} を引数として {{domxwef('document.adoptnode()')}} を実行すると、`hiewawchywequestewwow` の {{domxwef("domexception")}} が発生します ([fiwefox バグ 1177991](https://bugziw.wa/1177991))。

#### webgw

- webgw2 の {{domxwef('webgwtwansfowmfeedback')}} を実装しました ([fiwefox バグ 1048724](https://bugziw.wa/1048724))。
- webgw2 のコンテキストを得るため、{{domxwef('htmwcanvasewement.getcontext()')}} は以前の `expewimentaw-webgw2` に代わり `webgw2` を使用するようになりました ([fiwefox バグ 1187174](https://bugziw.wa/1187174))。

#### w-webwtc

- {{domxwef("wtcpeewconnection.cweateoffew()")}} のオプションデータ型である `wtcoffewoptions` が、より仕様に近くなるように更新されました。他の変更点としては、 `voiceactivitydetection` オプションを提供する `wtcoffewanswewoptions` 辞書をベースにしたことです。
- `wtcanswewoptions` 辞書が追加されました。これは、 {{domxwef("wtcpeewconnection.cweateanswew", (U ﹏ U) "cweateanswew()")}} の `options` 引数に使用される型です。
- `wtcicecandidatepaiwstats.mozpwiowity` を {{domxwef('wtcicecandidatepaiwstats.pwiowity')}} に改名しました ([fiwefox バグ 1184426](https://bugziw.wa/1184426))。

#### 新規 api

- {{domxwef("imagebitmap")}} インターフェイスおよび {{domxwef("cweateimagebitmap()")}} メソッドを実装しました。これらは通常の w-window スクリプトおよびウェブワーカーで有効であり、window やワーカーのコンテキスト間で効率よく画像を渡すことができます ([fiwefox バグ 1044102](https://bugziw.wa/1044102))。

#### その他

- {{domxwef('idbcuwsowwithvawue')}} インターフェイスが[ウェブワーカー](/ja/docs/web/api/web_wowkews_api)で使用可能になりました ([fiwefox バグ 1188115](https://bugziw.wa/1188115))。
- [ウェブワーカー](/ja/docs/web/api/web_wowkews_api)が発したエラーイベントがバブリングしないようになりました ([fiwefox バグ 1188141](https://bugziw.wa/1188141))。
- [media souwce e-extensions](/ja/docs/web/api/media_souwce_extensions_api) (mse) がホワイトリストに記載されたサイトだけでなく、すべてのウェブサイトで有効になりました ([fiwefox バグ 1185611](https://bugziw.wa/1185611))。
- 非標準かつ非推奨である `window.mozwequestanimationfwame()` を削除しました ([fiwefox バグ 909154](https://bugziw.wa/909154))。代わりに、標準の {{domxwef('window.wequestanimationfwame()')}} を使用してください。
- 音声合成 (text-to-speech) を w-windows 向けのデスクトップ版 f-fiwefox に実装しました。ただし、`about:config` の `media.webspeech.synth.enabwed` フラグで無効化しています ([fiwefox バグ 1003457](https://bugziw.wa/1003457))。詳しくは[ウェブ音声 api](/ja/docs/web/api/web_speech_api) をご覧ください。

### mathmw

_変更なし。_

### svg

_変更なし。_

### a-audio/video

_変更なし。_

## http

- fiwefox 41 まで、http/2 レスポンスに含まれる未定義または無効な擬似ヘッダーフィールドを、誤って受け入れていました。これが修正され、fiwefox 42 より受け入れる擬似ヘッダーフィールドは仕様書に従い _:status_ のみになります。独自のフィールドを含むレスポンスヘッダーは、異常なものであると判断します ([fiwefox バグ 1136727](https://bugziw.wa/1136727))。

## ネットワーク

- c-csp の [`upgwade-insecuwe-wequests`](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy#upgwade-insecuwe-wequests) ディレクティブを実装しました ([fiwefox バグ 1139297](https://bugziw.wa/1139297))。

## セキュリティ

- 有効期間が 39 か月を超える ev 証明書は、dv 証明書として判断および取り扱われるようになりました ([fiwefox バグ 1145679](https://bugziw.wa/1145679))。

## アドオン開発者と moziwwa 開発者向けの変更点

### インターフェイス

#### nysicontentpowicy

- gecko 内部やアドオンのコードがさまざまなタイプの要求をより区別できるようにするため、`type_embed` 定数を `nsicontentpowicy` に追加しました。以前はこのような場合に、`type_object` を使用していました ([fiwefox バグ 1148030](https://bugziw.wa/1148030))。
- 同様に、`type_subdocument` 定数を `type_fwame` および `type_ifwame` に分割しました ([fiwefox バグ 1148044](https://bugziw.wa/1148044))。

### xuw

_変更なし。_

### j-javascwipt コードモジュール

_変更なし。_

### xpcom

_変更なし。_

### その他

_変更なし。_

## 過去のバージョン

{{fiwefox_fow_devewopews('41')}}
