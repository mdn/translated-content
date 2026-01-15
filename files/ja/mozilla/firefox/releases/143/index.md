---
title: Firefox 143 for developers
short-title: Firefox 143 (Stable)
slug: Mozilla/Firefox/Releases/143
l10n:
  sourceCommit: 4a54946791694e14bf3742f3f327bbea44c698c8
---

このページでは、開発者に影響する Firefox 143 の変更点をまとめています。
Firefox 143 は、米国時間 [2025 年 9 月 16 日](https://whattrainisitnow.com/release/?version=143) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- [`type="color"`](/ja/docs/Web/HTML/Reference/Elements/input/color) の {{HTMLElement("input")}} 要素が `#ff6699` のような 16 進記法だけでなく、たとえば `oklab(50% 0.1 0.1 / 0.5)` などすべての CSS [`<color>`](/ja/docs/Web/CSS/Reference/Values/color_value) 値を受け入れるようになりました ([Firefox bug 1965029](https://bugzil.la/1965029))。

### CSS

- {{cssxref("::details-content")}} 擬似要素をデフォルトで有効にしました。これは、{{htmlElement("details")}} 要素の内容物にスタイルを設定できます ([Firefox bug 1941406](https://bugzil.la/1941406))。
- {{cssxref("::before")}} または {{cssxref("::after")}} 擬似要素を使用して生成したリストアイテムに、{{cssxref("::marker")}} 擬似要素を使用してスタイル設定が可能になりました。これは [`::before::marker`](/ja/docs/Web/CSS/Reference/Selectors/::before#beforemarker_nested_pseudo-elements) および [`::after::marker`](/ja/docs/Web/CSS/Reference/Selectors/::after#aftermarker_nested_pseudo-elements) セレクターを使用して実現します ([Firefox bug 1980215](https://bugzil.la/1980215))。
- マルチパスのグリッドトラックサイズ調整がデフォルトで有効になり、CSS グリッド仕様書で示されているアルゴリズムに従うようになりました。マルチパスアルゴリズムでは、はじめに列のサイズを決めてから行のサイズを決めます。また、コンテナーのサイズが決まった後にパーセンテージ値を解決します。このデフォルトのサポートで、[パーセンテージに基づく](/ja/docs/Web/CSS/Reference/Properties/grid-template-rows#percentage) 行トラックやアスペクト比を伴うグリッドアイテムが、多くのケースで正しくサイズ調整されます ([Firefox bug 1957244](https://bugzil.la/1957244))。

### JavaScript

変更なし。

### API

#### 廃止

- 非推奨の {{domxref("CompositionEvent.locale")}} プロパティのサポートを廃止しました ([Firefox bug 1700969](https://bugzil.la/1700969))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### WebDriver BiDi

- `browsingContext.contextCreated` イベントを、このイベントを購読しているときに開いているすべてのコンテキストへ発行するように更新しました ([Firefox bug 1754273](https://bugzil.la/1754273))。
- `network` モジュールに、ネットワークデータの記録を可能にする新たなコマンドを実装しました:
  - `network.addDataCollector` は、ネットワークデータコレクターを `contexts`、`userContexts`、またはグローバルに追加します。コレクターは、指定した `dataTypes` に対応するネットワークデータを記録します。現在は "response" データタイプのみサポートしています。また `maxEncodedDataSize` の指定も必要であり、このサイズを超えるネットワークデータは記録されません ([Firefox bug 1971778](https://bugzil.la/1971778))。
  - `network.removeDataCollector` は、過去に追加したネットワークデータコレクターを削除します ([Firefox bug 1971781](https://bugzil.la/1971781))。
  - `network.getData` は、指定した `request` ID、`dataType` および `collector` ID (省略可) に基づいて収集したデータを取得します。`collector` ID を指定した場合、クライアントはコレクターからネットワークデータを解放するために `disown` フラグも渡します。データはどのコレクターも所有しなくなったときに削除されることに注意してください ([Firefox bug 1971780](https://bugzil.la/1971780))。
  - `network.disownData` は指定した `request` ID および `dataType` に基づいて、`collector` ID からデータを解放します ([Firefox bug 1971779](https://bugzil.la/1971779))。
- `emulation.setLocaleOverride` が、新規作成したクロスオリジンのインラインフレームにオーバーライドを適用しない不具合を修正しました ([Firefox bug 1978533](https://bugzil.la/1978533))。
- `session.subscribe` など複数のコマンドが、いずれかのタブがアンロードされた場合に失敗する不具合を修正しました ([Firefox bug 1949037](https://bugzil.la/1949037))。
- `url` プロパティに基本認証の資格情報が含まれるように、`browsingContext.navigationCommitted` イベントを修正しました ([Firefox bug 1980137](https://bugzil.la/1980137))。

## アドオン開発者向けの変更点一覧

- {{WebExtAPIRef("storage.StorageArea.getKeys()")}} を追加しました。このメソッドは、ストレージ領域にあるすべてのキーを保存した配列を返します。これは {{WebExtAPIRef("storage.sync", "sync")}}、{{WebExtAPIRef("storage.local", "local")}}、{{WebExtAPIRef("storage.session", "session")}}、{{WebExtAPIRef("storage.managed", "managed")}} といったすべてのストレージ領域で使用できます ([Firefox bug 1910669](https://bugzil.la/1910669))。
- アドレスバー (omnibox) で提案した拡張機能をユーザーが選択する、すなわち {{WebExtAPIRef("omnibox.onInputEntered")}} が発生する操作を [ユーザーアクション](/ja/docs/Mozilla/Add-ons/WebExtensions/User_actions) とみなすようになりました。アドレスバーで拡張機能の提案を選択すると、ユーザーアクションが必要な API の有効化に加えて `"activeTab"` パーミッションも与えられます。

## 実験的なウェブ機能

- **`text-autospace`**: `layout.css.text-autospace.enabled`

  **`text-autospace`** CSS プロパティは、Chinese/Japanese/Korean (CJK) 文字と CJK 以外の文字の間に空白を入れるかを指定できます。現在、これらの値は解析されるだけであり表示への影響はありません ([Firefox bug 1869577](https://bugzil.la/1869577))。

- **WebGPU 外部テクスチャ**: `dom.webgpu.external-texture.enable`

  動画フレームや要素から外部テクスチャをインポートするための、[`GPUExternalTexture`](/ja/docs/Web/API/GPUExternalTexture) インターフェイスおよび [`GPUDevice.importExternalTexture()`](/ja/docs/Web/API/GPUDevice/importExternalTexture) メソッドをサポートしました ([Firefox bug 1979100](https://bugzil.la/1979100))。

以下の機能は Firefox 143 で導入しましたが、デフォルトで無効です。
これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。
[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。
