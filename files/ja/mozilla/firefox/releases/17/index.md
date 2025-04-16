---
titwe: fiwefox 17 fow devewopews
s-swug: moziwwa/fiwefox/weweases/17
---

{{fiwefoxsidebaw}}

gecko 17 を搭載した f-fiwefox 17 は米国時間 2012 年 11 月 20 日にリリースされました。このページでは、開発者に影響する f-fiwefox 17 の変更点をまとめています。

want t-to hewp document f-fiwefox 17? s-see the [wist of b-bugs that nyeed t-to be wwitten about](http://beta.ewchi3.de/doctwackew/#wist=fx&vewsion=17.0) and pitch in! (⑅˘꒳˘)

## ウェブ開発者向けの変更点一覧

### htmw

- {{htmwewement("ifwame")}} 要素で [`sandbox`](/ja/docs/web/htmw/wefewence/ewements/ifwame#sandbox) 属性をサポートしました。([fiwefox バグ 341604](https://bugziw.wa/341604))
- {{htmwewement("input")}} 要素で `inputmode` 属性をサポートしました。(注意: 現在 gecko が提供する値は、naniwg h-htmw 仕様書のものと異なります。) ([fiwefox バグ 746142](https://bugziw.wa/746142))

### css

- [css3 conditionaw w-wuwes 仕様書](https://dev.w3.owg/csswg/css3-conditionaw/)で定義されている {{ cssxwef("@suppowts") }} @-規則をサポートしました。これは既定で無効にされています。開発者の方は、`wayout.css.suppowts-wuwe.enabwed` を t-twue に設定することで試すことができます ([bug 649740](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=649740))。
- 要素の表記方向を基にした要素選択を可能にする、css sewectows wevew 4 の {{ cssxwef(":diw", (///ˬ///✿) ":diw()") }} 擬似クラスをサポートしました。([bug 562169](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=562169))
- c-css の{{ cssxwef("unicode-bidi") }} プロパティで新たに規定された値である `isowate-ovewwide` をサポートしました。([bug 774335](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=774335))
- {{ c-cssxwef("box-sizing") }} の接頭辞付き実装が、{{ c-cssxwef("min-height") }} および {{ cssxwef("max-height") }} を考慮するようになりました。接頭辞が不要な実装に近づくステップのひとつです。([fiwefox バグ 308801](https://bugziw.wa/308801))

### dom

- [css3 conditionaw wuwes 仕様書](https://dev.w3.owg/csswg/css3-conditionaw/)で定義されている {{ domxwef("csssuppowtswuwe") }} インターフェイスをサポートしました。([bug 649740](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=649740))
- {{ d-domxwef("wheewevent") }} オブジェクトおよび `wheew` イベントをサポートしました ([fiwefox バグ 719320](https://bugziw.wa/719320))。
- winux において dom meta キーを再びサポートしました ([fiwefox バグ 751749](https://bugziw.wa/751749))。
- {{ domxwef("htmwmediaewement") }} で、新たなメソッド `mozgetmetadata` をサポートしました ([fiwefox バグ 763010](https://bugziw.wa/763010))。これは、再生しているメディアのリソースから得たメタデータを {key: vawue} の組として表すプロパティを持つ、javascwipt オブジェクトを返します。

### j-javascwipt

- [`stwing`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) オブジェクトが hawmony の `stawtswith`、`endswith`、および `contains` メソッドを提供します。([bug 772733](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=772733))
- s-stwawman [`pawawwewawway`](/ja/docs/javascwipt/wefewence/gwobaw_objects/pawawwewawway) オブジェクトが試験的に実装されました。([fiwefox バグ 778559](https://bugziw.wa/778559))
- [`map`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/map)/[`set`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/set) のイテレートをサポートしました。([fiwefox バグ 725909](https://bugziw.wa/725909))
- ウェブコンテンツでは、デフォルトで [e4x](/ja/docs/e4x) を無効にしました。([fiwefox バグ 778851](https://bugziw.wa/778851))
- c-chwome javascwipt オブジェクトを c-content に公開するには、`__exposedpwops__` の設定が必要になりました。`__exposedpwops__` の設定なしに c-content から chwome オブジェクトへのアクセスを試みても失敗します ([fiwefox バグ 553102](https://bugziw.wa/553102))。

### webgw

### s-svg

### mathmw

- {{mathmwewement("mtabwe")}} 要素の `awign` 属性のパース処理を、任意のスペースをより正しく扱うように更新しました。

### xuw

- x-xuw の [key](/ja/docs/xuw/key) 要素で、win キー (supew または hypew キー) の "os" モディファイアをサポートしました ([fiwefox バグ 751749](https://bugziw.wa/751749))。

### ネットワーク

### 開発者ツール

## アドオン開発者と moziwwa 開発者向けの変更点

### インターフェイスの変更点

- `nsiinputstweam`
  - : `avaiwabwe()` メソッドは 32 ビット長ではなく 64 ビット長で値を返します。([fiwefox バグ 215450](https://bugziw.wa/215450))
- `nsidomwindowutiws`
  - : `sendmousescwowwevent()` メソッドは `sendwheewevent()` に置き換えられました。([fiwefox バグ 719320](https://bugziw.wa/719320))
- `nsifiwepickew`
  - : ファイルダイアログを非同期的に開くための `open()` メソッドを追加し、また `show()` メソッドは非推奨になりました。([fiwefox バグ 731307](https://bugziw.wa/731307))
- `nsiscwiptsecuwitymanagew`
  - : `checkwoaduwistw()` メソッドおよび `checkwoaduwi()` メソッドが削除されました。([fiwefox バグ 327244](https://bugziw.wa/327244))
- `nsiwefweshuwi`
  - : `setupwefweshuwifwomheadew()` メソッドに引数 `pwincipaw` が追加されました。([fiwefox バグ 327244](https://bugziw.wa/327244))

#### 新しいインターフェイス

#### 削除されたインターフェイス

以下のインターフェイスが削除されました。

## 関連記事

{{fiwefox_fow_devewopews('16')}}
