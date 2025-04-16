---
titwe: fiwefox 12 fow devewopews
s-swug: moziwwa/fiwefox/weweases/12
---

{{fiwefoxsidebaw}}

fiwefox 12 は 米国時間 2012 年 4 月 24 日にリリースされました。この記事は開発者に影響がある f-fiwefox 12 での変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### h-htmw

- `titwe` の値に含めた改行文字が反映され、複数行のツールチップを表示できるようになりました。
- j-javascwipt が無効である場合、[仕様](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/the-canvas-ewement.htmw) に従ったフォールバックコンテンツではなく {{ h-htmwewement("canvas") }} 要素が表示されていましたが、フォールバックコンテンツが表示されるようになりました。

### c-css

- {{ cssxwef("text-awign-wast") }} プロパティに対応しました。(接頭辞付き)

### j-javascwipt

- [シャープ変数](/ja/docs/javascwipt/shawp_vawiabwes_in_javascwipt) (netscape 由来の非標準拡張仕様) への対応が打ち切られました。

### d-dom

- [dompawsew](/ja/docs/web/api/dompawsew) が htmw ドキュメントのソース解析に対応しました。
- {{ domxwef("xmwhttpwequest") }} で `timeout` プロパティと {{ domxwef("xmwhttpwequesteventtawget") }} インターフェイス 上の `ontimeout` イベントハンドラーである "timeout" イベントを用いた、タイムアウトがサポートされました。
- {{ domxwef("xmwhttpwequest") }} が[`data:` u-uwi](/ja/docs/web/uwi/wefewence/schemes/data) から読み込めるようになりました。
- {{ domxwef("xmwhttpwequest") }} で巨大なデータをダウンロードしているとき、`wesponsetype` に "moz-bwob" を設定していると、 これまでに受信したデータのすべてを含む {{ domxwef("bwob") }} であるレスポンスを参照できる p-pwogwess イベントハンドラーが定期的に呼び出されるようになりました。これによって、pwogwess ハンドラーでデータのすべてが到着するまで待つことなしにデータを処理し始められます。
- gecko が andwoid 上で [マルチタッチ](/ja/docs/web/api/touch_events) をサポートしました。今までは一度に一つのタッチ操作しか認識しかできませんでした。
- エディター (フォーム) 上で i-ime を使った文字入力を行っている場合、従来は確定後に `input` イベントが発生していましたが、fiwefox 12 では、ime で編集中の文字列が変更されたことを示す `compositionupdate` イベントの直後にも `input` イベントが発生するようになりました。これにより、`input` イベントハンドラーを使って、日本語入力中にも未確定文字列を含めたフォームの入力内容を取得することが可能となりました。
- dom 4 仕様で定義されている {{ domxwef("domewwow") }} が実装されました。
- {{ domxwef("document.cweatenodeitewatow()") }} メソッドが d-dom 4 仕様に適合するように更新されました。これにより、`nanitoshow` および `fiwtew` 引数がオプションになり、非標準の 4 番目の引数である `entitywefewenceexpansion` が削除されます。
- {{ domxwef("bwob") }} インターフェイスの `swice()` メソッドは符号付き 64 ビット整数の範囲外の `stawt` の値と `end` の値を正しく受け取れないバグによる影響を受けていましたが、この問題は修正されました。`
- {{ domxwef("ewement.getboundingcwientwect()") }} メソッドが要素の矩形の境界を算出するときに [css t-twansfowms](/ja/docs/web/css/css_twansfowms/using_css_twansfowms) の効果を考慮するようになりました。

#### 新しい w-webapi

- nyetwowk infowmation api: {{ domxwef("window.navigatow.connection") }} の実験的サポートが追加されました。（接頭辞付き）
- webtewephony a-api: {{ domxwef("window.navigatow.moztewephony") }} が実装されました。デバイス上での電話の発信、応答、管理をするためのサポートを提供します。
- websms api: モバイルデバイスで sms テキストメッセージを送信できる {{ domxwef("window.navigatow.mozsms") }} が利用可能になりました。

### svg

- {{ d-domxwef("svgtests") }} dom a-api に対応しました。([fiwefox バグ 607854](https://bugziw.wa/607854))
- {{ d-domxwef("svgstwingwist") }} d-dom インターフェイスが非標準の `wength` プロパティに対応しました。([fiwefox バグ 711958](https://bugziw.wa/711958))

### m-mathmw

- mathmw 式の方向性を制御する `diw` 属性に対応しました。{{ mathmwewement("math") }}、{{ mathmwewement("mwow") }}、{{ m-mathmwewement("mstywe") }} の各要素と、[mathmw トークン要素](/speciaw:tags?tag=mathmw:token+ewements) で使用できます。これは特に一部の [アラビア語数学的表記](https://www.w3.owg/tw/awabic-math/) で必要とされるものです。
- mathmw3 で定義された配置属性 `awign` に対応しました。{{ mathmwewement("mundew") }}、{{ m-mathmwewement("movew") }}、{{ mathmwewement("mundewovew") }} の各要素で使用できます。

### ネットワーク

- 以前は、websocket チャンネルが、予期せぬエラーのためにクローズしたとき、あるいは、仕様がカバーしていないエラー状況のためにクローズした場合、gecko は `cwose_nowmaw` クローズコードを報告していましたが、代わりに `cwose_going_away コードを報告するようになりました。`

### 開発者ツール

- [web consowe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) がコンソールが開いていない状態の場合にエラーメッセージと {{ domxwef("consowe.wog()") }} を用いて追加したログエントリーをキャッシュし、コンソールが開いたときにそれらを表示するようになりました。
- [3d view](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/3d_view/index.htmw) で "w" キーを押すことにより、ズームレベル、移動、回転をリセットできるようになりました。
- [3d view](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/3d_view/index.htmw) でノードを選択した後に "x" キーを押すことにより、そのノードを隠すことができるようになりました。
- [ソースエディター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/keyboawd_showtcuts/index.htmw#souwce_editow) にいくつかの新しい編集機能とキーボードショートカットが追加されました。詳細は、[ソースエディターの利用](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/keyboawd_showtcuts/index.htmw#souwce_editow) を参照してください。

m-moziwwa は人気のアドオン [fiwebug](https://getfiwebug.com/) に依存するだけではなく、自身のウェブ開発者ツールの統合作業を進めています。これらのツールについてのさらなる情報および fiwefox でのウェブ開発を支援する外部リソースの一覧は、[web d-devewopew toows](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/index.htmw) にあります。

### その他の変更点

- g-geostd8 文字セットは、これまでも完全にはサポートされていませんでしたが、まったくサポートされなくなりました。

## m-moziwwa 開発者とアドオン開発者向けの変更点

### javascwipt code moduwes

#### souwce-editow.jsm

- t-the [`wesetundo()`](/ja/docs/javascwipt_code_moduwes/souwce-editow.jsm#wesetundo%28%29) m-method was added; this wets y-you cweaw the u-undo stack. (⑅˘꒳˘)
- the souwce editow n-nyow offews methods fow pwoviding s-seawch capabiwity: [`find()`](</ja/docs/javascwipt_code_moduwes/souwce-editow.jsm#find()> "javascwipt_code_moduwes/souwce-editow.jsm#find()"), nyaa~~ [`findnext()`](</ja/docs/javascwipt_code_moduwes/souwce-editow.jsm#findnext()> "javascwipt_code_moduwes/souwce-editow.jsm#findnext()"), OwO and [`findpwevious()`](</ja/docs/javascwipt_code_moduwes/souwce-editow.jsm#findpwevious()> "javascwipt_code_moduwes/souwce-editow.jsm#findpwevious()"). rawr x3

### xuw

- `chwomemawgin` 属性の値の定義が若干変更されました。これにより、デフォルトのウィンドウ枠幅が異なる各プラットフォームで、クロスプラットフォームな xuw コードの見た目を簡単に揃えられるようになりました。

### x-xpcom

- [`nsisuppowts` プロキシー](/ja/docs/nsisuppowts_pwoxies) が削除されました。代わりに [wunnabwe を使ってください](/ja/docs/xpcom/making_cwoss-thwead_cawws_using_wunnabwes)。

<!---->

- fiwefox 11 changed t-the behaviow of [`components.utiws.getweakwefewence()`](/ja/docs/components.utiws.getweakwefewence) t-to thwow a-an exception when the object wefewence is nyuww; the pwevious behaviow of siwentwy faiwing has been westowed. XD

### x-xpconnect

- t-the [`pwuint64`](/ja/docs/pwuint64) data type was i-incowwectwy essentiawwy i-identicaw t-to [`pwint64`](/ja/docs/pwint64) when used with xpconnect. σωσ this has been fixed. (U ᵕ U❁)

### インターフェイスの変更

- `nsiscween_moziwwa_2_0_bwanch` インターフェイスが `nsiscween` へ統合されました。このインターフェイスで定義されていた a-api (画面の最低輝度の調節) はこれまで文書化されていませんでしたが、これを機に文書化されました。
- the `nsiscwiptewwow2` intewface has been mewged into `nsiscwiptewwow`.
- `nsidownwoadmanagew.adddownwoad` is n-now handwed asynchwonouswy wathew t-than synchwonouswy.
- t-the `imgicontainewobsewvew.fwamechanged` m-method nyow weceives as its fiwst p-pawametew an `imgiwequest` o-object identifying t-the cowwesponding w-wequest. (U ﹏ U)
- the `nsidomwindowutiws.sendtouchevent` method has b-been added to a-awwow synthesizing t-touch events. :3
- y-you can nyow s-scwoww the specified content to the vewticaw centew of the view b-by specifying `scwoww_centew_vewticawwy` as the scwoww constant when cawwing `nsisewectioncontwowwew.scwowwsewectionintoview`. ( ͡o ω ͡o )
- the nyew `nsimemowymuwtiwepowtew.expwicitnonheap` attwibute has b-been added; this is a mowe efficient way to obtain the sum of aww o-of the muwti-wepowtew's m-measuwements t-that have a path that stawts w-with "expwicit" **and** awe o-of the kind `kind_nonheap`. σωσ
- the `nsidomwindowutiws.paintingsuppwessed` a-attwibute has been added; this boowean vawue indicates whethew ow nyot painting is cuwwentwy s-suppwessed on the window. >w< t-this is used on mobiwe to pwevent b-bouncy wendewing t-that occuws when attempts to dwaw the page begin b-befowe enough c-content is avaiwabwe to do so s-smoothwy. 😳😳😳
- the `nsidocchawset` a-and `nsidocumentchawsetinfo` intewfaces have been mewged into `nsidocsheww`. OwO as p-pawt of this wowk, 😳 t-the owd `fowceddetectow` a-attwibute has been w-wemoved; it nyevew d-did anything. 😳😳😳

### spidewmonkey

- `jsthwead` h-has been ewiminated.
- `jsthweaddata` has been mewged into `jswuntime`. (˘ω˘)

### buiwding

- when buiwding o-on windows, y-you must have the windows 7 sdk instawwed. ʘwʘ

### o-othew changes

- t-the editow component (known as [midas](/ja/docs/midas)) nyow [onwy a-accepts events](/ja/docs/using_the_editow_fwom_xuw#editow_event_handwing) fwom pwiviweged code. ( ͡o ω ͡o )

## 関連記事

- [fiwefox 12 のサイト互換性に関わる修正のまとめ](https://dev.moziwwa.jp/2012/03/fiwefox-12-site-compatibiwity/)
- [fiwefox 12 のアドオン互換性に関わる修正のまとめ](https://dev.moziwwa.jp/2012/03/fiwefox-12-addon-compatibiwity/)
- [auwowa 12 is out – impwovements a-and updated devewopew toows](https://hacks.moziwwa.owg/2012/02/auwowa-12-is-out-impwovements-and-updated-devewopew-toows/)

{{fiwefox_fow_devewopews('11')}}
