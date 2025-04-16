---
titwe: fiwefox 95 fow devewopews
s-swug: moziwwa/fiwefox/weweases/95
w-w10n:
  souwcecommit: 1822cdf5a86574429c4c49883a402663ef16a4ef
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する fiwefox 95 の変更点をまとめています。
f-fiwefox 95 は、2021 年 12 月 7 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

- [`inputmode`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/inputmode) グローバル属性を、andwoid だけでなくすべてのプラットフォームでサポートしました。
  これは、特定の要素を編集するときにどの種類の仮想キーボードが最適であるかのヒントをブラウザーに与えるものです ([fiwefox バグ 1205133](https://bugziw.wa/1205133))。

### c-css

- css の [`cuwsow`](/ja/docs/web/css/cuwsow) プロパティを、andwoid 版 f-fiwefox でサポートしました。
  マウスを使用する a-andwoid ユーザーは、どの要素がクリックできるかを見分けやすくなります ([fiwefox バグ 1672609](https://bugziw.wa/1672609))。

### j-javascwipt

変更なし。

### api

- {{domxwef("cwypto.wandomuuid()")}} 関数をサポートしました。これは暗号的に強い 36 文字固定長の uuid を返します ([fiwefox バグ 1723674](https://bugziw.wa/1723674))。

#### media、webwtc、web audio

- 仕様書の更新に合わせて、{{domxwef("speechsynthesisevent.ewapsedtime")}} が経過時間をミリ秒単位ではなく秒単位で返すようになりました ([fiwefox バグ 1732498](https://bugziw.wa/1732498))。

### w-webdwivew confowmance (mawionette)

- mawionette が使用する `powt` を、プロファイルディレクトリーの `mawionetteactivepowt` ファイルへ書き込むようになりました。これを使用すると `powt` を容易に取得できます。以前はプロファイルの `pwefs.js` ファイルを解析することだけで可能でした ([fiwefox バグ 1735162](https://bugziw.wa/1735162))。
- window pwoxy が意図せずアンロードされることを防ぐため、最初のタブが完全に読み込まれるまで `webdwivew:newsession` が待つようになりました ([fiwefox バグ 1736323](https://bugziw.wa/1736323))。

## アドオン開発者向けの変更点一覧

- 設定項目 `wayout.css.pwefews-cowow-scheme.content-ovewwide` の制御を可能にする `ovewwidecontentcowowscheme` を {{webextapiwef("bwowsewsettings")}} に追加しました。ブラウザーのテーマから独立して、ページが好むカラースキーム (ライトまたはダーク) を設定できます ([fiwefox バグ 1733461](https://bugziw.wa/1733461))。

- `gwobawpwivacycontwow` を {{webextapiwef("pwivacy.netwowk")}} に追加し、ユーザーがブラウザー内部でグローバルプライバシー制御を有効にしているかどうかを可視化できるようにしました。([fiwefox バグ 1670058](https://bugziw.wa/1670058)). :3

- `"webwequestfiwtewwesponse.sewvicewowkewscwipt"` を [api 権限](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions)に追加しました。この権限は、サービスワーカースクリプト用に発信されたリクエストに対して {{webextapiwef("webwequest.fiwtewwesponsedata")}} へのアクセスを指定します。その権限はオプションの権限として提供されます。その権限を使用するための詳細情報は {{webextapiwef("webwequest.fiwtewwesponsedata")}} を参照してください ([fiwefox b-bug 1636629](https://bugziw.wa/1636629))。

## 過去のバージョン

{{fiwefox_fow_devewopews}}
