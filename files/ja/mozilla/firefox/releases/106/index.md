---
title: Firefox 106 for developers
slug: Mozilla/Firefox/Releases/106
l10n:
  sourceCommit: b326fb5b00ea2f881ae6786338671d7fbd2745b6
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 106 の変更点をまとめています。Firefox 106 は、米国時間 2022 年 10 月 18 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- {{HTMLElement("source")}} 要素が、{{HTMLElement("picture")}} 要素の子要素であるときに [`height`](/ja/docs/Web/HTML/Element/source#attr-height) および [`width`](/ja/docs/Web/HTML/Element/source#attr-width) 属性をサポートするようになりました。
  これは、`dom.picture_source_dimension_attributes.enabled` の [設定](/ja/docs/Mozilla/Firefox/Experimental_features#height_width_attributes_for_source) を使用して有効にする実験的機能です ([Firefox バグ 1694741](https://bugzil.la/1694741))。

#### 廃止

### MathML

- MathML の [`<semantics>`](/ja/docs/Web/MathML/Element/semantics) および [`<maction>`](/ja/docs/Web/MathML/Element/maction) 要素が、デフォルトで最初の子要素のみ表示するようになりました ([Firefox バグ 1588733](https://bugzil.la/1588733))。

### CSS

- [@supports](/ja/docs/Web/CSS/@supports) アットルールで `font-tech()` および `font-format()` 関数をサポートしました。
  これらの関数で、指定したフォント技術やフォント形式をブラウザーがサポートしているかを確認できます。また、確認結果に基づいて CSS スタイルを適用できます ([Firefox バグ 1786493](https://bugzil.la/1786493))。

#### 廃止

### JavaScript

#### 廃止

### HTTP

#### 廃止

### セキュリティ

#### 廃止

### API

#### DOM

- [`HTMLMetaElement.media`](/ja/docs/Web/API/HTMLMetaElement/media) プロパティをサポートしました。このプロパティは、`media` の値 (例: `max-width: 600px`) に応じてさまざまなテーマカラーを設定できます。
  `media` プロパティを持つ meta 要素を使用すると、ブラウザーは指定したメディアクエリー向けのページまたは UI の色を設定するために、`theme-color` と合わせて `content` の値を使用できます ([Firefox バグ 1706179](https://bugzil.la/1706179))。

#### Media、WebRTC、Web Audio

#### 廃止

### WebAssembly

#### 廃止

### WebDriver conformance (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- `script.getRealms` の基本的なサポートを追加しました。現在は、window レルムと sandbox レルムを含む `WindowRealmInfo` 型に限定されています ([Firefox バグ 1766240](https://bugzil.la/1766240))。

- `browsingContext.load` イベントをサポートしました。これは、閲覧コンテキストのウィンドウの `load` イベントをきっかけにして発生します ([Firefox バグ 1756619](https://bugzil.la/1756619))。

- シリアライズしたリモートの値向けの強い参照を保持するための、オブジェクト参照ストアを追加しました ([Firefox バグ 1770736](https://bugzil.la/1770736))。

- オブジェクト参照ストアで作成したリモート参照のデシリアライズをサポートしました ([Firefox バグ 1788124](https://bugzil.la/1788124))。

- `script.evaluate`、`script.callFunction`、`script.disown` コマンドを完全サポートしました ([Firefox バグ 1778976](https://bugzil.la/1778976))。

#### Marionette

- [Actions](https://w3c.github.io/webdriver/webdriver-spec.html#actions) 向けに `wheel` 入力ソースをサポートしました。これはホイールタイプの入力デバイスに関連づけられます ([Firefox バグ 1746601](https://bugzil.la/1746601))。

- GeckoView ベースのアプリケーション (例: Android 版 Firefox) のタブを開くおよび閉じる操作をサポートしました ([Firefox バグ 1506782](https://bugzil.la/1506782))。

## アドオン開発者向けの変更点一覧

- [`"background"`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/background) マニフェストキーの `"persistent"` プロパティを `false` に設定することが、Manifest V2 において (バックグラウンドページを非永続化するため) デフォルトで可能になりました。
- `"content_security_policy"` マニフェストキーの `object-src` ディレクティブが省略可能になりました ([Firefox バグ 1766881](https://bugzil.la/1766881))。詳しくは `"content_security_policy"` のページで [object-src ディレクティブ](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy#object-src_directive) をご覧ください。

### 廃止

### その他

## 過去のバージョン

{{Firefox_for_developers(105)}}
