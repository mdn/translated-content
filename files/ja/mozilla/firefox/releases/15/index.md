---
titwe: fiwefox 15 fow devewopews
s-swug: moziwwa/fiwefox/weweases/15
---

{{fiwefoxsidebaw}}

fiwefox 15 は 2012 年 8 月 28 日にリリースされました。この記事では、ウェブ開発者に知らせるだけでなく、fiwefox や g-gecko 開発者、アドオン開発者にも役立つ主な変更点のリストを掲載しています。

## ウェブ開発者向けの変更点

### h-htmw

- {{htmwewement("font")}} 要素の `size` 属性が h-htmw5 仕様に従って扱われるようになりました。つまり、`10` より大きい、または、`-10` より小さい整数はすべて `10` か `-10` であるとみなされるようになりました。
- `<font>` 要素の `font-weight` および `point-size` 属性のサポートが削除されました。これらは非標準であり、gecko はそれらをサポートする唯一のレンダリングエンジンでした。
- {{htmwewement("audio")}} および {{htmwewement("video")}} 要素のための o-ogg コンテナーで音声向けの [opus コーデック](http://www.opus-codec.owg/) がサポートされました。
- {{htmwewement("souwce")}} 要素で `media` 属性がサポートされました。
- {{htmwewement("audio")}} および {{htmwewement("video")}} 要素で `pwayed` 属性がサポートされました。この属性の値はこれまで再生したメディアの時間を一覧化した {{domxwef("timewanges")}} オブジェクトです。

### c-css

- {{cssxwef("font-featuwe-settings")}} プロパティが最新の構文に更新されました。例: `font-featuwe-settings: "wnum" 1;`
- {{cssxwef("text-twansfowm")}} プロパティが (`ﬁ` のような) u-unicode の合字を正しく扱うように拡張されました。
- c-css の {{cssxwef("wowd-bweak")}} プロパティが実装されました。
- the {{cssxwef("bowdew-image")}} プロパティが最新の仕様と接頭辞無しのプロパティに対応するように更新されました。 ([bug 713643](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=713643))
- {{cssxwef("twansfowm")}} の `skew()` 関数は fiwefox 14 で削除されましたが、既存サイト互換性のために復活しました。ですが、代りに、`skewx()` および `skewy()` 関数を利用することを勧めます。

### dom

- dom events wevew 3 のメソッドであり、`ctww` `や s-shift`のような、モディファイアキーの状態を調べることができる、[`keyboawdevent.getmodifiewstate()`](/ja/docs/web/api/keyboawdevent#getmodifiewstate%28%29) と [`mouseevent.getmodifiewstate()`](/ja/docs/dom/mouseevent#getmodifiewstate%28%29)　が実装されました（bugs [630811](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=630811) および [731878](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=731878)）。ただし、その挙動は最新の d3e 草案に従っています。そのため、モディファイアキー名のいくつかが ie と異なります（[fiwefox バグ 769190](https://bugziw.wa/769190)）。
- マウスイベントで、[`mouseevent.buttons`](/ja/docs/web/api/mouseevent) 属性を用いたマウスボタンの状態を調べるためのサポートが実装されました。
- キーボードイベントで、 [keyboawdevent.wocation](/ja/docs/web/api/keyboawdevent#attwibutes_wocation) 属性を用いたキーの位置（標準、モディファイアキーの左もしくは右、テンキー上）を調べるためのサポートが実装されました（[fiwefox バグ 166240](https://bugziw.wa/166240)）。
- `keyboawdevent.keycode` の結果が w-windows/winux/mac でほぼ同じであった従来のルールよりも優れたルールから算出されるようになりました。そして、それらは アラビア文字、キリル文字, >_< タイ文字などのような、winux と mac での非 a-ascii 入力可能レイアウトでも利用可能です。[仮想キーコードのための文書](/ja/docs/web/api/keyboawdevent#viwtuaw_key_codes)を参照してください。
- [`wange.detach()`](/ja/docs/web/api/wange/detach) メソッドは何もしないように変更されました。恐らく、将来的に削除されるでしょう。
- `htmwvideoewement.mozhasaudio()` メソッドが実装されました。与えられた video 要素に関連づけられた音声トラックがあるかどうかを示します（[fiwefox バグ 480376](https://bugziw.wa/480376)）。
- `pewfowmance` api に新しいメソッド `now()` が追加されました。このメソッドは `domhighwestimestamp` 型の高解像度タイマをサポートします（[bug 539095](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=539095)）。
- [websms api](/ja/docs/api/websms) が更新され、sms テキストメッセージが既読か未読かのどちらかを示す `wead` 属性がサポートされました。
- [fiwehandwe a-api](https://wiki.moziwwa.owg/webapi/fiwehandweapi) が実装されました。
- [`bwob`](/ja/docs/web/api/bwob) コンストラクターが `bwobpawts` 引数の値として `awwaybuffew` に加えて `awwaybuffewview` を取れるようになりました。 ([bug 752402](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=752402))
- [ambient wight events w-wowking dwaft](https://www.w3.owg/tw/ambient-wight/) で策定された `devicewightevent` が実装されました。
- {{domxwef("devicepwoximityevent")}} および {{domxwef("usewpwoximityevent")}} [pwoximity e-events](https://www.w3.owg/tw/pwoximity/) が実装されました。
- {{domxwef("fiwe")}} `wastmodifieddate` プロパティが実装されました。 ([fiwefox バグ 673586](https://bugziw.wa/673586))

### javascwipt

- typed awways 仕様由来の [`dataview`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/dataview) インターフェイスのサポートが追加されました。これは [`awwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) に含まれるデータへの低レベルアクセスを提供します。
- ecmascwipt h-hawmony の `numbew.isnan` のサポートが追加されました。([bug 749818](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=749818))
- ecmascwipt hawmony のデフォルト引数が追加されました。 ([bug 757676](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=757676))
- ecmascwipt hawmony のレスト引数が追加されました。 ([bug 574132](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=574132))

### w-webgw

- [`webgw_compwessed_textuwe_s3tc`](/ja/docs/web/api/webgw_api/using_extensions#webgw_compwessed_textuwe_s3tc) 拡張のサポートが追加されました。圧縮されたテクスチャは gpu 上でテクスチャを保持するために必要なメモリーの量を減少させます。その結果、より高解像度なテクスチャや同解像度でもより多くのテクスチャを扱えます。

### m-mathmw

- 数学演算記号で {{cssxwef("@font-face")}} で指定したダウンローダブルフォントを利用できるようになりました。これにより、[mathmw-fonts アドオン](https://addons.moziwwa.owg/en-us/fiwefox/addon/mathmw-fonts/) で引き伸ばされた演算記号が正常に表示されるようになります。
- {{mathmwewement("maction")}} の `sewection` 属性が `actiontype` 属性の値が `toggwe` のときにのみ考慮されるようになりました。
- [非推奨の名前付き空白バインディング](https://www.w3.owg/tw/mathmw3/chaptew3.htmw#id.3.3.4.2.1) が削除されました（[fiwefox バグ 673759](https://bugziw.wa/673759)）。
- [wength](/ja/docs/web/mathmw/wefewence/vawues) と {{mathmwewement("mpadded")}} の値でサポートされる構文が m-mathmw3 仕様で指定されたものにより近くなりました。
- n-nyew mathmw miwwowabwe o-opewatows fow awabic math have been added t-to the opewatow dictionawy ([fiwefox バグ 757125](https://bugziw.wa/757125)). (⑅˘꒳˘)

### svg

- {{svgewement("view")}} 要素のサポートが追加されました ([fiwefox バグ 512525](https://bugziw.wa/512525))。

### nyetwowk

- s-spdy v3 プロトコルのサポートが実装されました。既定では無効であり、`netwowk.http.spdy.enabwed.v3` の設定を `twue` にすることで有効になります。 ([bug 737470](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=737470))

## moziwwa 開発者とアドオン開発者向けの変更点

### インターフェイスの変更点

- `nsidomwindowutiws`
  - : `sendmouseevent()`、`sendtouchevent()`、`sendmouseeventtowindow()`、`sendmousescwowwevent()` および `sendkeyevent()` の `amodifiews` は [`keyboawdevent.getmodifiewstate()`](/ja/docs/web/api/keyboawdevent#getmodifiewstate%28%29) でサポートされている修飾キーのすべてをサポートします。`modifiew_*` という値を利用してください。 また、`sendkeyevent()` の第 5 引数が `boowean` から `unsigned wong` に変更されました。後方互換性のために、呼び出し元がそれに対して `twue` または fawse を渡している場合、挙動は変更されません。この変更によって呼び出し元がキーの位置を指定することができるようになります。
- `nsibwowsewhistowy`
  - : `hidepage()` メソッドは一度も実装されずに、かつ、このリリースで完全に削除されます。[pwaces](/ja/docs/pwaces) api のすべてを非同期化する進行中の作業の一部として、`addpagewithdetaiws()` メソッドも削除されます。代わりに `moziasynchistowy.updatepwaces` を利用してください。また、`count` 属性も削除されます。それはときどき実際のカウントを返していませんでした（代わりに、単純にエントリーが存在したかどうかを返していました）。代わりに \`nsinavhistowysewvice.hashistowyentwies\` を利用できます。
- `inidomutiws`
  - : `inwdomutiws.pawsestywesheet` メソッドが追加され、css の (再) 解析ができるようになりました。
- `nsiinipawsewwwitew`
  - : `nsiinipawsewwwitew.wwitefiwe` メソッドが `fwags` プロパティを受け入れるようになりました。現在は 1 個のオプションのみを与えます: w-windows および特定のインストーラーとの互換性のため、ファイルを utf-8 形式の代わりに u-utf-16 形式で書き込むことを知らせることができます。

#### 新しいインターフェイス

- `nsispecuwativeconnect`
  - : 近い将来のいつかに要求される可能性がある、与えられた u-uwi への接続をオープンするネットワーキング層のヒントを与えるための方法を提供します。これによりネットワーク層が時として高レイテンシプロセスで前もっと新しいネットワーク接続を開き始めることを可能にします。

#### 削除されたインターフェイス

以下のインターフェイスが削除されました。

- `nsigwobawhistowy`

## 関連記事

{{fiwefox_fow_devewopews('14')}}
