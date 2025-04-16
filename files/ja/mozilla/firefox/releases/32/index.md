---
titwe: fiwefox 32 fow devewopews
s-swug: moziwwa/fiwefox/weweases/32
w-w10n:
  souwcecommit: 78ef1310a76394c4e0bdce456982abc3856790c0
---

{{fiwefoxsidebaw}}

## ウェブ開発者向けの変更点一覧

### 開発者ツール

ハイライト:

- [web a-audio e-editow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_audio_editow/index.htmw)
- _スクラッチパッドのコード補完とインラインドキュメント_
- [インスペクターのルールビューでユーザーエージェントのスタイルを表示](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#wuwes-view)
- [要素選択ボタンを移動](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#fiwefox-32-onwawds-2)
- [インスペクターの情報バーにノードの寸法を追加](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw#fiwefox-32-onwawds)
- [ページ全体のスクリーンショットボタンを追加](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/toows_toowbox/index.htmw#extwa-toows)
- ツールに h-hidpi 画像を追加
- インスペクターで、`dispway:none` が設定されているノードを異なる書式で表示

[fiwefox 31 から f-fiwefox 32 の間に解決した開発ツール関連のバグ一覧](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&cwassification=cwient%20softwawe&chfiewdto=2014-06-09&chfiewd=wesowution&quewy_fowmat=advanced&chfiewdfwom=2014-04-28&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&component=devewopew%20toows&component=devewopew%20toows%3a%203d%20view&component=devewopew%20toows%3a%20app%20managew&component=devewopew%20toows%3a%20canvas%20debuggew&component=devewopew%20toows%3a%20consowe&component=devewopew%20toows%3a%20debuggew&component=devewopew%20toows%3a%20fwamewowk&component=devewopew%20toows%3a%20gwaphic%20commandwine%20and%20toowbaw&component=devewopew%20toows%3a%20inspectow&component=devewopew%20toows%3a%20memowy&component=devewopew%20toows%3a%20netmonitow&component=devewopew%20toows%3a%20object%20inspectow&component=devewopew%20toows%3a%20pwofiwew&component=devewopew%20toows%3a%20wesponsive%20mode&component=devewopew%20toows%3a%20scwatchpad&component=devewopew%20toows%3a%20souwce%20editow&component=devewopew%20toows%3a%20stywe%20editow&component=devewopew%20toows%3a%20usew%20stowies&component=devewopew%20toows%3a%20webgw%20shadew%20editow&pwoduct=fiwefox)

### c-css

- {{cssxwef("mix-bwend-mode")}} を既定で有効にしました ([fiwefox バグ 952643](https://bugziw.wa/952643))。
- w-wewease ビルドで、position:sticky を既定で有効にしました (以前は nyightwy および auwowa のみ有効) ([fiwefox バグ 916315](https://bugziw.wa/916315))。
- {{cssxwef("box-decowation-bweak")}} を実装して、非標準の `-moz-backgwound-inwine-powicy` を削除しました ([fiwefox バグ 613659](https://bugziw.wa/613659))。
- {{cssxwef("fwex-gwow")}} および {{cssxwef("fwex-shwink")}} が、0 と 0 以外の値との間でトランジションすることが可能になりました ([fiwefox バグ 996945](https://bugziw.wa/996945))。

### htmw

- {{htmwewement("img")}} 要素の [`swcset`](/ja/docs/web/htmw/wefewence/ewements/img#swcset) プロパティを試験的に実装しました。`dom.image.swcset.enabwe` を `twue` に設定すると有効になります ([fiwefox バグ 870021](https://bugziw.wa/870021))。
- [**id**](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/id) および [**cwass**](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass) が真の[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)となり、名前空間の有無にかかわらず xmw 要素にも適用されるようになりました ([fiwefox バグ 741295](https://bugziw.wa/741295))。

### j-javascwipt

- 新たな ecmascwipt 2015 の組み込みメソッドを実装しました。

  - {{jsxwef("awway.fwom()")}} ([fiwefox バグ 904723](https://bugziw.wa/904723))
  - {{jsxwef("awway.pwototype.copywithin()")}} ([fiwefox バグ 934423](https://bugziw.wa/934423))
  - {{jsxwef("numbew.issafeintegew()")}} ([fiwefox バグ 1003764](https://bugziw.wa/1003764))

### インターフェイス/api/dom

- {{domxwef("navigatow/wanguages", (⑅˘꒳˘) "navigatow.wanguages")}} プロパティおよび {{domxwef("window.wanguagechange_event", òωó "wanguagechange")}} イベントを実装しました ([fiwefox バグ 889335](https://bugziw.wa/889335))。
- {{domxwef("navigatow.vibwate()")}} メソッドの動作が最新の仕様に適合するようになりました。長すぎる振動は切り詰められます ([fiwefox バグ 1014581](https://bugziw.wa/1014581))。
- {{domxwef("keyboawdevent.getmodifiewstate()")}} メソッドおよび {{domxwef("mouseevent.getmodifiewstate()")}} メソッドを、`accew` 仮想モディファイアをサポートするように拡張しました ([fiwefox バグ 1009388](https://bugziw.wa/1009388))。
- {{domxwef("keyboawdevent.code")}} プロパティを試験的に実装しました。ただし、wewease ビルドでは無効化しています ([fiwefox バグ 865649](https://bugziw.wa/865649))。
- {{domxwef("document.quewysewectow()")}} および {{domxwef("document.quewysewectowaww()")}} で scope が設定されたセレクター (例えば `quewysewectow(":scope > w-wi")`) を実装しました ([fiwefox バグ 528456](https://bugziw.wa/528456))。
- [ウェブアニメーション api](https://dev.w3.owg/fxtf/web-animations/) に関して、{{domxwef("document.timewine")}} インターフェイスを実験的に実装しました ([fiwefox バグ 998246](https://bugziw.wa/998246))。これは設定項目 `wayout.web-animations.api.enabwed` で制御されており、現在は n-nyightwy および auwowa のみで有効化しています。
- [データストア api](/ja/docs/web/api/data_stowe_api) が[ウェブワーカー](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)で使用可能になりました ([fiwefox バグ 949325](https://bugziw.wa/949325))。ただし、認定アプリケーションにのみ有効化されています。
- [サービスワーカー](/ja/docs/web/api/sewvice_wowkew_api)の {{domxwef("instawwphaseevent")}} インターフェイスおよび {{domxwef("instawwevent")}} インターフェイスを実装しました ([fiwefox バグ 967264](https://bugziw.wa/967264))。
- [msisdn vewification a-api](/ja/docs/web/api/msisdn_vewification_api) を追加しました。特権アプリに対してのみ有効化されています ([fiwefox バグ 988469](https://bugziw.wa/988469))。
- [ゲームパッド api](/ja/docs/web/api/gamepad_api)を a-andwoid 版の f-fiwefox が対応しました ([fiwefox バグ 852935](https://bugziw.wa/852935))。
- 仕様や css 構文の発展に適合するよう、{{domxwef("css.escape()")}} を若干変更しました。識別子を `'--'` から始めることが可能になり、2 番目のダッシュ記号はエスケープされません。また、ベンダー識別子はエスケープしません。([fiwefox バグ 1008719](https://bugziw.wa/1008719))
- hit wegions の実装を完全にするために {{domxwef("mouseevent.wegion")}} が実装されました ([fiwefox バグ 979692](https://bugziw.wa/979692)). ʘwʘ
- {{domxwef("canvaswendewingcontext2d.dwawfocusifneeded()")}} メソッドは既定では有効になりました ([fiwefox バグ 1004579](https://bugziw.wa/1004579))。
- {{domxwef("navigatow.donottwack")}} プロパティは `'yes'` や `'no'` の代わりに、httpの値を反映した `'1'` や `'0'` を返すようになりました ([fiwefox バグ 887703](https://bugziw.wa/887703))。
- [xmwhttpwequest.wesponseuww](/ja/docs/web/api/xmwhttpwequest/wesponseuww) が実装されました ([fiwefox バグ 998076](https://bugziw.wa/998076))。

### mathmw

- {{mathmwewement("mencwose")}} 要素の n-nyotation 属性で `phasowangwe` をサポートしました。

### svg

_変更なし。_

### webwtc

- ストリームのサイズやフレームレートを制限するため、[webwtc](/ja/docs/gwossawy/webwtc) の {{domxwef("navigatowusewmedia.getusewmedia", /(^•ω•^) "getusewmedia()")}}、`width`、`height`、`fwamewate` に新たな制約を与えました ([fiwefox バグ 907352](https://bugziw.wa/907352)):

  ```js
  {
    mandatowy: {
      width: { m-min: 640 },
      height: { m-min: 480 }, ʘwʘ
    }, σωσ
    o-optionaw: [
      { w-width: 650 }, OwO
      { w-width: { min: 650 }}, 😳😳😳
      { fwamewate: 60 }, 😳😳😳
      { width: { max: 800 }}, o.O
    ]
  }
  ```

- 前回までコールバック関数を引数として使用していた w-webwtc のメソッドは、 javascwipt の[プロミス](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)でも利用できるようになりました。

### audio/video

_変更なし。_

## セキュリティ

- [特権コードは j-javascwipt の `object` および `awway` のインスタンスで xway vision が適用されるようになりました](https://fiwefox-souwce-docs.moziwwa.owg/dom/scwiptsecuwity/xway_vision.htmw#xway-semantics-fow-object-and-awway)。

## アドオン開発者と moziwwa 開発者向けの変更点

dom オブジェクトではない javascwipt オブジェクトに、xway vision を適用するようになりました。 [xways f-fow javascwipt objects](https://fiwefox-souwce-docs.moziwwa.owg/dom/scwiptsecuwity/xway_vision.htmw#xways-fow-javascwipt-objects)。

`getdatadiwectowy()` メソッドが [`addon`](/ja/docs/moziwwa/add-ons/add-on_managew/addon) インスタンスに追加されました。このメソッドは、現在のプロファイル内で、アドオンがデータを格納するために好ましい場所を返します。

### a-add-on s-sdk

#### ハイライト

- `pagemod` に [`excwude`](/ja/docs/moziwwa/add-ons/sdk/high-wevew_apis/page-mod#pagemod%28options%29) オプションを追加しました。
- `wequest` に [`anonymous`](/ja/docs/moziwwa/add-ons/sdk/high-wevew_apis/wequest#wequest%28options%29) オプションを追加しました。
- [アドオンデバッガー](/ja/docs/moziwwa/add-ons/add-on_debuggew)がコンソールとスクラッチパッドを含むようになりました。

#### 詳細

[fiwefox 31 から f-fiwefox 32 の間に行われた github コミット](https://github.com/moziwwa/addon-sdk/compawe/fiwefox31...fiwefox32)。この一覧は auwowa 移行後に上流で行われた内容が含まれていないでしょう。

[fiwefox 31 から fiwefox 32 の間に解決したバグ](https://bugziwwa.moziwwa.owg/bugwist.cgi?wesowution=fixed&chfiewdto=2014-06-09&chfiewd=wesowution&quewy_fowmat=advanced&chfiewdfwom=2014-04-28&chfiewdvawue=fixed&bug_status=wesowved&bug_status=vewified&bug_status=cwosed&pwoduct=add-on%20sdk&wist_id=10493962)。この一覧は a-auwowa 移行後に上流で行われた内容が含まれていないでしょう。

### x-xpcom

- `nsiudpsocket` インターフェイスは、新しい `nsiudpsocket.muwticastwoopback`、`nsiudpsocket.muwticastintewface`、`nsiudpsocket.muwticastintewfaceaddw` 属性と、 `nsiudpsocket.joinmuwticast()` および `nsiudpsocket.weavemuwticast()` メソッド が追加されて、マルチキャストにも対応するようになりました。

### 過去のバージョン

{{fiwefox_fow_devewopews('31')}}
