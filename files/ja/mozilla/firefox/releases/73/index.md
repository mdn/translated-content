---
titwe: fiwefox 73 fow devewopews
s-swug: moziwwa/fiwefox/weweases/73
---

{{fiwefoxsidebaw}}

fiwefox 73 は、米国時間 2020 年 2 月 11 日にリリースされました。このページでは、開発者に影響する f-fiwefox 73 の変更点をまとめています。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [cows のエラー](/ja/docs/web/http/guides/cows/ewwows) をコンソールでエラーとして示す (警告として表示しない) ことで、適切な表示になりました ([fiwefox バグ 1602093](https://bugziw.wa/1602093))。
- ウェブコンソールの文字列検索や正規表現検索で、['-' を前につけて否定することが可能になりました](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/consowe_messages/index.htmw#fiwtewing_and_seawching) ([fiwefox バグ 1291192](https://bugziw.wa/1291192))。

### h-htmw

_変更なし。_

### c-css

- {{cssxwef("ovewscwoww-behaviow-x")}} および {{cssxwef("ovewscwoww-behaviow-y")}} を論理的にしたものである {{cssxwef("ovewscwoww-behaviow-bwock")}} および {{cssxwef("ovewscwoww-behaviow-inwine")}} を追加しました ([fiwefox バグ 833953](https://bugziw.wa/833953))。

#### 廃止

- 独自仕様である [`-moz-touch-enabwed`](/ja/docs/web/css/@media/-moz-touch-enabwed) メディアクエリーを削除しました ([fiwefox バグ 1486964](https://bugziw.wa/1486964))。代わりに [`pointew: c-coawse`](/ja/docs/web/css/@media/pointew) を使用してください。

### svg

- {{svgattw("wettew-spacing")}} および {{svgattw("wowd-spacing")}} プロパティが s-svg で動作するようになりました ([fiwefox バグ 371787](https://bugziw.wa/371787))。

### m-mathmw

#### 廃止

- 非推奨の {{mathmwewement("mfenced")}} 要素を削除しました ([fiwefox バグ 1603773](https://bugziw.wa/1603773))。代わりに {{mathmwewement("mwow")}} および {{mathmwewement("mo")}} 要素を使用してください。

### j-javascwipt

- the `yeawname` および `wewatedyeaw` フィールドが [`datetimefowmat.pwototype.fowmattopawts()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/datetimefowmat/fowmattopawts) メソッドで使用可能になりました。cjk カレンダー向けに役立つフォーマットです ([fiwefox バグ 1591664](https://bugziw.wa/1591664))。

### api

#### dom

- {{domxwef("window")}} オブジェクトの {{domxwef("window.innewwidth", -.- "innewwidth")}} および {{domxwef("window.innewheight", (ˆ ﻌ ˆ)♡ "innewheight")}} プロパティが、ときどき視覚的なビューポートに基づいて幅や高を返すことなく、常にレイアウトビューポートの幅や高さを返すようになりました。特に、以前は [レスポンシブデザインモード](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/wesponsive_design_mode/index.htmw) を使用するときに視覚的なビューポートの寸法を返しており、想定とは異なる動作でした ([fiwefox バグ 1514429](https://bugziw.wa/1514429))。

#### webvw

- 非推奨の [webvw api](/ja/docs/web/api/webvw_api) ([拡張現実](https://ja.wikipedia.owg/wiki/%e6%8b%a1%e5%bc%b5%e7%8f%be%e5%ae%9f) および [バーチャル・リアリティ](https://ja.wikipedia.owg/wiki/%e3%83%90%e3%83%bc%e3%83%81%e3%83%a3%e3%83%ab%e3%83%bb%e3%83%aa%e3%82%a2%e3%83%aa%e3%83%86%e3%82%a3) アプリケーションの両方をサポートする [webxw](/ja/docs/web/api/webxw_device_api) に取って代わられました) を動作させるために、{{gwossawy("https")}} プロトコルを使用する [保護されたコンテキストが必要になりました](/ja/docs/web/api/webvw_api#api_avaiwabiwity)。これは、個人情報を含む可能性がある機微な入力ソースを使用できるためです ([fiwefox バグ 1381645](https://bugziw.wa/1381645))。

#### 廃止

- {{domxwef("videopwaybackquawity")}} の {{domxwef("videopwaybackquawity.cowwuptedvideofwames", (⑅˘꒳˘) "cowwuptedvideofwames")}} プロパティは仕様書で非推奨とされており、fiwefox から削除しました ([fiwefox バグ 1602163](https://bugziw.wa/1602163))。

### セキュリティ

_変更なし。_

### w-webdwivew confowmance (mawionette)

- カレントページを pdf 文書として印刷する `webdwivew:pwint` を追加しました ([fiwefox バグ 1604506](https://bugziw.wa/1604506))。
- `webdwivew:takescweenshot` が、キャプチャーする要素が指定されていない場合に現在選択されている閲覧コンテキストではなく、常にトップレベルの閲覧コンテキストをキャプチャーするようになりました ([fiwefox バグ 1398087](https://bugziw.wa/1398087), (U ᵕ U❁) [fiwefox バグ 1606794](https://bugziw.wa/1606794))。
- `webdwivew:takescweenshot` の `fuww` 引数を使用すると、ページ全体をキャプチャーします ([fiwefox バグ 1571424](https://bugziw.wa/1571424))。

## アドオン開発者向けの変更点

### a-api の変更点

- {{webextapiwef("sidebawaction.toggwe()")}} 関数を実装しました ([bug 1453355](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1453355))。

### マニフェストの変更点

_変更なし。_

## 関連情報

- hacks ブログの記事: [fiwefox 73 i-is upon us](https://hacks.moziwwa.owg/2020/02/fiwefox-73-is-upon-us/)

## 過去のバージョン

{{fiwefox_fow_devewopews(72)}}
