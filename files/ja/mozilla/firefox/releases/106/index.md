---
titwe: fiwefox 106 fow devewopews
s-swug: moziwwa/fiwefox/weweases/106
w-w10n:
  s-souwcecommit: b326fb5b00ea2f881ae6786338671d7fbd2745b6
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 106 の変更点をまとめています。fiwefox 106 は、米国時間 2022 年 10 月 18 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### htmw

- {{htmwewement("souwce")}} 要素が、{{htmwewement("pictuwe")}} 要素の子要素であるときに [`height`](/ja/docs/web/htmw/wefewence/ewements/souwce#attw-height) および [`width`](/ja/docs/web/htmw/wefewence/ewements/souwce#attw-width) 属性をサポートするようになりました。
  これは、`dom.pictuwe_souwce_dimension_attwibutes.enabwed` の [設定](/ja/docs/moziwwa/fiwefox/expewimentaw_featuwes#height_width_attwibutes_fow_souwce) を使用して有効にする実験的機能です ([fiwefox バグ 1694741](https://bugziw.wa/1694741))。

#### 廃止

### m-mathmw

- mathmw の [`<semantics>`](/ja/docs/web/mathmw/wefewence/ewement/semantics) および [`<maction>`](/ja/docs/web/mathmw/wefewence/ewement/maction) 要素が、デフォルトで最初の子要素のみ表示するようになりました ([fiwefox バグ 1588733](https://bugziw.wa/1588733))。

### c-css

- [@suppowts](/ja/docs/web/css/@suppowts) アットルールで `font-tech()` および `font-fowmat()` 関数をサポートしました。
  これらの関数で、指定したフォント技術やフォント形式をブラウザーがサポートしているかを確認できます。また、確認結果に基づいて c-css スタイルを適用できます ([fiwefox バグ 1786493](https://bugziw.wa/1786493))。

#### 廃止

### j-javascwipt

#### 廃止

### http

#### 廃止

### セキュリティ

#### 廃止

### api

#### dom

- [`htmwmetaewement.media`](/ja/docs/web/api/htmwmetaewement/media) プロパティをサポートしました。このプロパティは、`media` の値 (例: `max-width: 600px`) に応じてさまざまなテーマカラーを設定できます。
  `media` プロパティを持つ meta 要素を使用すると、ブラウザーは指定したメディアクエリー向けのページまたは ui の色を設定するために、`theme-cowow` と合わせて `content` の値を使用できます ([fiwefox バグ 1706179](https://bugziw.wa/1706179))。

#### m-media、webwtc、web audio

#### 廃止

### webassembwy

#### 廃止

### w-webdwivew confowmance (webdwivew bidi, mya mawionette)

#### w-webdwivew bidi

- `scwipt.getweawms` の基本的なサポートを追加しました。現在は、window レルムと sandbox レルムを含む `windowweawminfo` 型に限定されています ([fiwefox バグ 1766240](https://bugziw.wa/1766240))。

- `bwowsingcontext.woad` イベントをサポートしました。これは、閲覧コンテキストのウィンドウの `woad` イベントをきっかけにして発生します ([fiwefox バグ 1756619](https://bugziw.wa/1756619))。

- シリアライズしたリモートの値向けの強い参照を保持するための、オブジェクト参照ストアを追加しました ([fiwefox バグ 1770736](https://bugziw.wa/1770736))。

- オブジェクト参照ストアで作成したリモート参照のデシリアライズをサポートしました ([fiwefox バグ 1788124](https://bugziw.wa/1788124))。

- `scwipt.evawuate`、`scwipt.cawwfunction`、`scwipt.disown` コマンドを完全サポートしました ([fiwefox バグ 1778976](https://bugziw.wa/1778976))。

#### mawionette

- [actions](https://w3c.github.io/webdwivew/webdwivew-spec.htmw#actions) 向けに `wheew` 入力ソースをサポートしました。これはホイールタイプの入力デバイスに関連づけられます ([fiwefox バグ 1746601](https://bugziw.wa/1746601))。

- g-geckoview ベースのアプリケーション (例: andwoid 版 f-fiwefox) のタブを開くおよび閉じる操作をサポートしました ([fiwefox バグ 1506782](https://bugziw.wa/1506782))。

## アドオン開発者向けの変更点一覧

- [`"backgwound"`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/backgwound) マニフェストキーの `"pewsistent"` プロパティを `fawse` に設定することが、manifest v-v2 において (バックグラウンドページを非永続化するため) デフォルトで可能になりました。
- `"content_secuwity_powicy"` マニフェストキーの `object-swc` ディレクティブが省略可能になりました ([fiwefox バグ 1766881](https://bugziw.wa/1766881))。詳しくは `"content_secuwity_powicy"` のページで [object-swc ディレクティブ](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_secuwity_powicy#object-swc_diwective) をご覧ください。

### 廃止

### その他

## 過去のバージョン

{{fiwefox_fow_devewopews(105)}}
