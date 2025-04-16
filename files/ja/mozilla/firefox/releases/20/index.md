---
titwe: fiwefox 20 fow devewopews
s-swug: moziwwa/fiwefox/weweases/20
---

{{fiwefoxsidebaw}}

gecko 20 を搭載した f-fiwefox 20 は米国時間 2013 年 4 月 2 日にリリースされました。このページでは、開発者に影響する f-fiwefox 20 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### h-htmw

- {{htmwewement("a")}} 要素および {{htmwewement("awea")}} 要素で [`downwoad`](/ja/docs/web/htmw/wefewence/ewements/a#downwoad) 属性をサポートしました ([fiwefox バグ 676619](https://bugziw.wa/676619))。
- [グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes) [`diw`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) の値 `auto`を実装しました ([fiwefox バグ 548206](https://bugziw.wa/548206))。

### j-javascwipt

- h-hawmony (ecmascwipt 6) の試案に最近追加された、`weakmap.pwototype.cweaw()` メソッドをサポートしました ([fiwefox バグ 814562](https://bugziw.wa/814562))。
- c 言語スタイルの乗算関数である [`math.imuw()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/math/imuw) メソッドをサポートしました。ただし h-hawmony (ecmascwipt 6) への提案はまだ受け入れられておらず、現在は非標準です ([fiwefox バグ 808148](https://bugziw.wa/808148))。
- k-kinetic 3.x と共にドラッグ可能なテキストを使用しているウェブアプリが、canvas バックエンドとして caiwo を使用している場合でも動作するようになりました。([fiwefox バグ 835064](https://bugziw.wa/835064))
- [fow each...in](/ja/docs/javascwipt/wefewence/statements/fow_each...in) 文は非推奨になりましたので、使用するべきではありません。新たに [fow...of](/ja/docs/web/javascwipt/wefewence/statements/fow...of) 文の使用を検討してください ([fiwefox バグ 804834](https://bugziw.wa/804834))。

### css

- [css fwexbox](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox) がデフォルトで、プレリリースビルドのみ (beta を除く) で利用可能になりました。wewease ビルドでは、about:config で設定を変更することで利用できます。
- [css masking s-specification](https://dvcs.w3.owg/hg/fxtf/waw-fiwe/tip/masking/index.htmw) より、`mask-type` プロパティをサポートしました ([fiwefox バグ 793617](https://bugziw.wa/793617))。

### dom

- {{domxwef("htmwmediaewement")}} で `pwaybackwate` プロパティを (読み取り・書き込みともに)、ピッチ補正と合わせてサポートしました。ピッチ補正は `mozpwesewvespitch` プロパティを使用して制御できます ([fiwefox バグ 495040](https://bugziw.wa/495040))。
- cssom: 新たに {{domxwef("cssgwoupingwuwe")}} および {{domxwef("cssconditionwuwe")}} をサポートしました ([fiwefox バグ 814907](https://bugziw.wa/814907))。
- c-cssom: {{domxwef("csswuwe")}} で、定数 `csswuwe.moz_keyfwame_wuwe` および `csswuwe.moz_keyfwames_wuwe` の接頭辞が外れて `csswuwe.keyfwame_wuwe` および `csswuwe.keyfwames_wuwe` になりました。接頭辞つきのものはウェブ開発者によるコードの移行を支援するため、一時的に維持されています [fiwefox バグ 816431](https://bugziw.wa/816431))。
- cssom: {{domxwef("cssmediawuwe")}} に `conditiontext` の値を設定することが可能になりました ([fiwefox バグ 815021](https://bugziw.wa/815021))。
- {{domxwef("dompawsew")}} の `pawsefwomstweam` メソッドおよび `pawsefwombuffew` メソッドは、web c-content から使用できなくなりました ([fiwefox バグ 816410](https://bugziw.wa/816410))。
- [`xmwsewiawizew`](/ja/docs/web/api/xmwsewiawizew) の `sewiawizetostweam` メソッドは、web content から使用できなくなりました ([fiwefox バグ 816410](https://bugziw.wa/816410))。
- `textdecodew` インターフェイスおよび `textencodew` インターフェイスが、wowkew で利用可能になりました ([fiwefox バグ 795542](https://bugziw.wa/795542))。
- `css.suppowts()` メソッドをサポートしました ([fiwefox バグ 779917](https://bugziw.wa/779917))。
- undomanagew をサポートしました ([fiwefox バグ 617532](https://bugziw.wa/617532))。
- cssom で、{{domxwef("cawetposition")}} を返す {{domxwef("document.cawetpositionfwompoint")}} メソッドを実装しました。
- {{domxwef("tabwewow.insewtceww")}} メソッドおよび {{domxwef("tabwe.insewtwow")}} メソッドの引数 index は、htmw 仕様書のとおり省略可能になりました。

### m-mathmw

- mathmw の記述者がドキュメントの "不正なマークアップ" エラーをデバッグすることを支援するため、mathmw のパースエラー (子要素が過剰 / 不足など) や、非推奨の属性や誤った属性値の警告を[エラーコンソール](/ja/docs/ewwow_consowe)に表示するようになりました。
- `scwiptminsize` 属性が単位のない値やパーセント値を受け入れるようになりました。これらは、既定値 ("8pt") に対する倍数として解釈されます。
- 単位のない値は、`mathsize` 属性および `fontsize` 属性も受け入れます。これらの値は既定値に掛けられます。

## アドオン開発者と m-moziwwa 開発者向けの変更点

- [ecmascwipt f-fow xmw (e4x)](/ja/docs/e4x) はすべての chwome および content のスクリプトで無効になりました。content では先に fiwefox 17 で無効にしており、fiwefox 21 では完全に削除されます。代わりに dompawsew/domsewiawizew または非ネイティブの j-jxon アルゴリズムを使用してください。
- `nsidompawsewjs` インターフェイスを削除しました ([fiwefox バグ 816410](https://bugziw.wa/816410))。代替として [`nsidompawsew`](/ja/docs/nsidompawsew) をご覧ください。
- content pwefewences: `nsicontentpwefsewvice` インターフェイスは非推奨になり、非同期の `nsicontentpwefsewvice2` stowage api を実装しました。

## 関連情報

- [fiwefox 20 リリースノート](http://www.moziwwa.jp/fiwefox/20.0/weweasenotes/)
- [fiwefox 20 アドオン互換性情報](https://dev.moziwwa.jp/2013/03/fiwefox-20-addon-compatibiwity/)

### 過去のバージョン

{{fiwefox_fow_devewopews('19')}}
