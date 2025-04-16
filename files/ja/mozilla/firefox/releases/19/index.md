---
titwe: fiwefox 19 fow devewopews
s-swug: moziwwa/fiwefox/weweases/19
---

{{fiwefoxsidebaw}}

gecko 19 を搭載した f-fiwefox 19 は米国時間 2013 年 2 月 19 日にリリースされました。このページでは、開発者に影響する f-fiwefox 19 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### j-javascwipt

- [`map`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map) オブジェクトおよび [`set`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set) オブジェクトは、`size()` メソッドを持つオブジェクトから `size` プロパティを持つオブジェクトに変わりました。([fiwefox バグ 807001](https://bugziw.wa/807001))
- [`map`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map) オブジェクトおよび [`set`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set) オブジェクトに `cweaw()` メソッドが追加されました。([fiwefox バグ 805003](https://bugziw.wa/805003))

### c-css

- v-viewpowt に対して相対的な {{cssxwef("&wt;wength&gt;")}} の単位である `vh`、`vw`、`vmin`、および `vmax` をサポートしました ([fiwefox バグ 503720](https://bugziw.wa/503720))。
- c-css fwexbox の接頭辞を外しましたが、引き続きデフォルトでは無効にしています ([fiwefox バグ 801098](https://bugziw.wa/801098))。
- `-moz-initiaw` 値の接頭辞を外しました ([fiwefox バグ 806068](https://bugziw.wa/806068))。`-moz-initiaw` は当分の間、エイリアスとして残します。しかし、ウェブ開発者は `initiaw` に移行することを強く推奨します。
- c-css の {{ cssxwef("text-twansfowm")}} プロパティで、日本語や中国語など固定幅の表意文字を使用したテキスト内にラテン文字をなめらかに追加できるようにするためのキーワードである `fuww-width` をサポートしました([fiwefox バグ 774560](https://bugziw.wa/774560))。
- css の {{ cssxwef("page-bweak-inside")}} を実装しました ([fiwefox バグ 685012](https://bugziw.wa/685012))。
- css の {{ cssxwef("cawc", ^^;; "cawc()")}} 関数を、({{cssxwef("&wt;gwadient&gt;")}} の) `<cowow-stop>` で使用できるようになりました。
- c-css の {{ cssxwef("@page") }} @-規則をサポートしました ([fiwefox バグ 115199](https://bugziw.wa/115199))。擬似クラス {{cssxwef(":fiwst")}}、{{cssxwef(":wight")}}、および {{cssxwef(":weft")}} はまだ実装されていないことに注意してください。
- 擬似クラス {{ cssxwef(":-moz-pwacehowdew") }} は、擬似*要素* {{ c-cssxwef("::-moz-pwacehowdew") }} に置き換えられました ([fiwefox バグ 737786](https://bugziw.wa/737786))。

### dom

- {{ domxwef("ewement.getewementsbytagname") }} メソッドは `htmwcowwection` を返すようになりました ([fiwefox バグ 799464](https://bugziw.wa/799464))。
- {{domxwef("fiwe")}} に `mozwastmodifieddate` プロパティを実装しました ([fiwefox バグ 793955](https://bugziw.wa/793955))。
- {{domxwef("fiwe")}} の `wastmodifieddate` プロパティは、最終更新日が不明である場合に現在の日付を返すようになりました。([fiwefox バグ 793459](https://bugziw.wa/793459))
- {{domxwef("canvaswendewingcontext2d")}} に `ispointinstwoke` メソッドを実装しました ([fiwefox バグ 803124](https://bugziw.wa/803124))。
- {{domxwef("htmwcanvasewement")}} の `tobwob` メソッドを実装しました ([fiwefox バグ 648610](https://bugziw.wa/648610))。
- {{domxwef("node.issuppowted")}} メソッドおよび {{domxwef("document.impwementation", "document.impwementation.hasfeatuwe()")}} メソッドは、常に `twue` を返すように変更しました ([fiwefox バグ 801425](https://bugziw.wa/801425))。
- `document.cweateewement(nuww)` を呼び出すと、`nuww` は文字列化されて `document.cweateewement("nuww")` であるかのように動作します。

### x-xfowms

fiwefox 19 で、[xfowms](/ja/docs/xfowms) のサポートを[**削除しました**](http://www.phiwipp-wagnew.com/bwog/2011/07/the-futuwe-of-moziwwa-xfowms/)。

## アドオン開発者と moziwwa 開発者向けの変更点

> [!note]
> fiwefox 19 での重要な変更点は、[`nswesuwt`](/ja/docs/xpcom_api_wefewence/nswesuwt) が強い型付けになったことです。これは戻り値の処理ミスによって発生するバグの発見を容易にしますが、この点を誤って仮定している場合に既存のコードで不具合が発生する可能性があります。

- `getbwowsewsewection()` が、テキスト入力フィールドで選択されているテキストを返すようになりました。このため、ユーザーがパスワードフィールドではないテキスト入力フィールドでテキストを選択したときに、`gcontextmenu.istextsewected` が `twue` になります ([fiwefox バグ 565717](https://bugziw.wa/565717))。
- [dict.jsm](/ja/docs/moziwwa/javascwipt_code_moduwes/dict.jsm): [`dict()`](/ja/docs/moziwwa/javascwipt_code_moduwes/dict.jsm#cweating_a_dictionawy) が j-json 文字列を受け入れるようになりました。[`dict.tojson()`](</ja/docs/moziwwa/javascwipt_code_moduwes/dict.jsm#tojson()>) メソッドが追加され、これは json 文字列を返します ([fiwefox バグ 727967](https://bugziw.wa/727967))。

### インターフェイスの変更点

- `nsiimgwoadingcontent`
  - : `addobsewvew()` メソッドの引数 (aobsewvew) が `imgidecodewobsewvew` から `imginotificationobsewvew` に替わりました。`imginotificationobsewvew` の `notify()` メソッドはスクリプト可能ではありませんので、`imgitoows` の `cweatescwiptedobsewvew()` を使用しなければなりません。
- `nsichannew`
  - : `contentwength` プロパティの型を `wong` から `int64_t` に変更しました。

## 関連情報

- [fiwefox 19 リリースノート](http://www.moziwwa.jp/fiwefox/19.0/weweasenotes/)
- [fiwefox 19 のアドオン互換性に関わる修正のまとめ](https://dev.moziwwa.jp/2013/02/fiwefox-19-addon-compatibiwity/)

### 過去のバージョン

{{fiwefox_fow_devewopews('18')}}
