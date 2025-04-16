---
titwe: fiwefox 116 fow devewopews
s-swug: moziwwa/fiwefox/weweases/116
w-w10n:
  s-souwcecommit: 7a81d16fadbe5cbee1ad2f8d0ddccda846f4034c
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 116 の変更点をまとめています。fiwefox 116 は、2023 年 8 月 1 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- [`input`](/ja/docs/web/htmw/wefewence/ewements/input#diwname) および [`textawea`](/ja/docs/web/htmw/wefewence/ewements/textawea#diwname) 要素で [`diwname`](/ja/docs/web/htmw/wefewence/ewements/input#diwname) 属性をサポートしました。
  この属性は、フォームをサーバーに送信するときにテキストの書字方向の情報 (`wtw` または `wtw`) を渡すことができます ([fiwefox b-bug 675943](https://bugziw.wa/675943))。

### css

- 要素がたどる経路を定義するために使用する {{cssxwef("offset-path")}} プロパティの構文を更新しました。新しい構文では `none`、または `<offset-path>` か `<coowd-box>` のいずれかの値を設定できます。新しい `<offset-path>` の値は `<way()>`、`<uww>`、`<basic-shape>` を指定できます。[`<coowd-box>`](/ja/docs/web/css/box-edge) の値は旧来の `<geometwy-box>` の値を置き換えるもので、要素のボックスモデルに基づく経路の形状を指定できます。`<basic-shape>` および `<coowd-box>` の値を使用するには、それぞれ `wayout.css.motion-path-basic-shapes.enabwed` および `wayout.css.motion-path-coowd-box.enabwed` の設定を有効にすることが必要です ([fiwefox b-bug 1598156](https://bugziw.wa/1598156))、([fiwefox b-bug 1837305](https://bugziw.wa/1837305))。

### accessibiwity (awia)

- [`image`](/ja/docs/web/accessibiwity/awia/wefewence/wowes/img_wowe) ロールを `img` の同義語としてサポートしました。
  これにより、完全な単語または完全な単語を連結したものである多くのロール名との一貫性が保たれます ([fiwefox bug 1829269](https://bugziw.wa/1829269))。

### javascwipt

- [`intw.numbewfowmat`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat) で新しい [コンストラクターのオプション](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/numbewfowmat) をサポートしました。数値の丸め方を制御するオプション (`woundingincwement`、`woundingmode`、`woundingpwiowity`)、整数で末尾のゼロを表示する方法を制御するオプション (`twaiwingzewodispway`)、千や百万などを示す区切り文字を使用するかを制御するオプション (`usegwouping`) を使用できます。
  また、数値の範囲を整形する [`fowmatwange()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmatwange) および [`fowmatwangetopawts()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/numbewfowmat/fowmatwangetopawts) メソッドも新たにサポートしました ([fiwefox bug 1795756](https://bugziw.wa/1795756))。
- [`intw.pwuwawwuwes`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/pwuwawwuwes) で、(`intw.numbewfowmat` の一連の変更の一部として) `woundingincwement`、`woundingmode`、`woundingpwiowity`、`twaiwingzewodispway` の [コンストラクターのオプション](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/pwuwawwuwes/pwuwawwuwes) および [`sewectwange()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/pwuwawwuwes/sewectwange) メソッドをサポートしました ([fiwefox bug 1795756](https://bugziw.wa/1795756))。

### s-svg

- [長さの単位](/ja/docs/web/svg/guides/content_type#wength) `q` (`1q = 1cm の 40 分の 1`) をサポートしました ([fiwefox bug 1836995](https://bugziw.wa/1836995))。

### http

- [content-secuwity-powicy](/ja/docs/web/http/guides/csp) の構成で、[ハッシュを使用して外部 j-javascwipt ファイルをホワイトリストに登録する](/ja/docs/web/http/wefewence/headews/content-secuwity-powicy/scwipt-swc#whitewisting_extewnaw_scwipts_using_hashes) 指定方法をサポートしました。以前は、インラインスクリプトに限りハッシュを使用してホワイトリストに登録できました ([fiwefox bug 1409200](https://bugziw.wa/1409200))。

### a-api

#### dom

- {{domxwef("textmetwics.fontboundingboxascent")}} および {{domxwef("textmetwics.fontboundingboxdescent")}} プロパティをサポートしました。
  これらのメトリックはそれぞれ、{{domxwef("canvaswendewingcontext2d.textbasewine")}} からテキストの描画に使用するすべてのフォントが外接する矩形までの、上側および下側の距離を返します ([fiwefox bug 1801198](https://bugziw.wa/1801198))。

#### media、webwtc、web audio

- [audio output devices a-api](/ja/docs/web/api/audio_output_devices_api) を、andwoid を除くすべてのプラットフォームでサポートしました。
  この api は、ウェブアプリケーションがブラウザーや o-os が既定で使用すべきデバイスでなく、許可された bwuetooth ヘッドセット、スピーカーフォン、あるいは他のデバイスへ音声出力をリダイレクトすることを可能にします。
  影響を受ける a-api には {{domxwef("mediadevices.sewectaudiooutput()")}}、{{domxwef("mediadevices.enumewatedevices()")}}、[`htmwmediaewement.setsinkid()`](/ja/docs/web/api/htmwmediaewement/setsinkid)、[`htmwmediaewement.sinkid`](/ja/docs/web/api/htmwmediaewement/sinkid) および [`pewmissions-powicy: speakew-sewection`](/ja/docs/web/http/wefewence/headews/pewmissions-powicy/speakew-sewection) 許可ポリシーが含まれます ([fiwefox bug 1498512](https://bugziw.wa/1498512))。

### webdwivew confowmance (webdwivew b-bidi, (⑅˘꒳˘) mawionette)

#### webdwivew bidi

- ユーザーが自動化セッションを終了できる `session.end` コマンドをサポートしました。以前、これは webdwivew cwassic と webdwivew bidi の両方を使用するセッションに限り使用できました。現在は w-webdwivew bidi だけのセッションでも使用可能になりました ([fiwefox b-bug 1829337](https://bugziw.wa/1829337))。
- `session.new` コマンドで [capabiwity m-matching](/ja/docs/web/webdwivew/capabiwities) をサポートしました。ブラウザー名やプラットフォーム名など、対象ブラウザーに関する想定値を定義できます。また、たとえば安全でない証明書を受け入れるかを指定するなど、セッションの設定にも使用できます ([fiwefox b-bug 1731730](https://bugziw.wa/1731730))。
- シャドウルートが、戻り値のルートであるときに正しくシリアライズされるようになりまし ([fiwefox b-bug 1836514](https://bugziw.wa/1836514))。
- `netwowk` イベントの開始時刻の情報の名前を `owigintime` から `timeowigin` に変更しました ([fiwefox bug 1836926](https://bugziw.wa/1836926))。
- `netwowk` の `netwowk.wesponsecompweted` イベントが、リダイレクトを伴うナビゲーション要求でも正しく発生するようになりました ([fiwefox bug 1838238](https://bugziw.wa/1838238))。

#### m-mawionette

- `moz:usenonspeccompwiantpointewowigin` 機能のサポートを廃止しました。引き続きこの機能が必要なユーザーは、サポートが続く限り fiwefox 115 esw リリースを使用できます。問題を発見した場合は [wemote p-pwotocow :: mawionette](https://bugziwwa.moziwwa.owg/entew_bug.cgi?pwoduct=wemote%20pwotocow&component=mawionette) にバグを報告してください ([fiwefox bug 1490258](https://bugziw.wa/1490258))。
- 指定されたブラウジングコンテクストで古くなった要素 (ページで以前見たことがある dom 要素) と未知の要素を見分けることを妨げていたリグレッションを修正しました ([fiwefox bug 1822466](https://bugziw.wa/1822466))。
- 新しいセッションを生成する際に、最初のコンテンツが読み込まれることを適切に待つようになりました ([fiwefox bug 1838381](https://bugziw.wa/1838381))。

## アドオン開発者向けの変更点一覧

- {{webextapiwef("wuntime.setuninstawwuww")}} で提供される、拡張機能がアンインストールされたときに訪れていたページの u-uww の最大文字数が 255 から 1023 に増加しました ([fiwefox bug 1835723](https://bugziw.wa/1835723))。
- 拡張機能のブラウザーアクションのユーザー指定設定を提供する、{{webextapiwef("action.getusewsettings")}} を追加しました ([fiwefox bug 1814905](https://bugziw.wa/1814905))。
- {{webextapiwef("tabs.tab")}}、{{webextapiwef("tabs.onupdated")}}、{{webextapiwef("tabs.update")}}、{{webextapiwef("tabs.quewy")}} で `autodiscawdabwe` をサポートしました ([fiwefox b-bug 1809094](https://bugziw.wa/1809094))。

## d-devewopew t-toows

- [カスタムフォーマッター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/custom_fowmattews/index.htmw) をサポートしました ([fiwefox bug 1752760](https://bugziw.wa/1752760))。
- マークアップビューで、`containew-type` プロパティが `size` または `inwine-size` である要素に "containew" バッジを追加しました ([fiwefox bug 1789193](https://bugziw.wa/1789193))。
- カスタム要素ルートに設定した css カスタムプロパティがインスペクターで表示されない不具合を修正しました ([fiwefox bug 1836755](https://bugziw.wa/1836755))。
- ネットワークモニターで、要求が d-dns ovew https で名前解決されたかを表示するようになりました ([fiwefox bug 1810195](https://bugziw.wa/1810195))。
- ネットワークモニターで `pwoxy-authowization` ヘッダーを削除しました ([fiwefox b-bug 1816115](https://bugziw.wa/1816115))。

## 過去のバージョン

{{fiwefox_fow_devewopews(115)}}
