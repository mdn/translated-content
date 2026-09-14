---
title: Firefox 139 for developers
slug: Mozilla/Firefox/Releases/139
l10n:
  sourceCommit: 05a220b3155a2755ebcd2229eb094db5ad4ae9f4
---

このページでは、開発者に影響する Firefox 139 の変更点をまとめています。
Firefox 139 は、米国時間 [2025 年 5 月 27 日](https://whattrainisitnow.com/release/?version=139) にリリースされました。

## ウェブ開発者向けの変更点一覧

### HTML

- [`hidden=until-found`](/ja/docs/Web/HTML/Reference/Global_attributes/hidden#the_hidden_until_found_state) HTML 属性および [`beforematch`](/ja/docs/Web/API/Element/beforematch_event) イベントをサポートしました。
  _hidden until found_ 状態は、ユーザーによる検索 (たとえば "ページ内を検索" を使用する) やフラグメントナビゲーションによって発見されるまで要素の内容を非表示にできます。
  `beforematch` イベントは、`hidden` 属性が削除される直前に発生します ([Firefox bug 1761043](https://bugzil.la/1761043)、[Firefox bug 1955379](https://bugzil.la/1955379))。

### CSS

変更なし。

### JavaScript

- Temporal API をサポートしました。これは内蔵のタイムゾーンや日付の表現を含む、さまざまな状況において日付や時間の扱いをシンプルにすることを目指します ([Firefox bug 1912511](https://bugzil.la/1912511)、[Firefox bug 1954138](https://bugzil.la/1954138))。
  以下のプロパティが含まれます:
  - **期間** (2 つの時点の差): {{jsxref("Temporal.Duration")}}
  - **時点**:
    - 歴史上で唯一の瞬間として:
      - タイムスタンプ: {{jsxref("Temporal.Instant")}}
      - タイムゾーンがある日時: {{jsxref("Temporal.ZonedDateTime")}}
    - **タイムゾーンを持たない日時 ("プレーン")**:
      - 日付 (年、月、日) + 時刻 (時、分、秒、ミリ秒、ナノ秒): {{jsxref("Temporal.PlainDateTime")}}
        - 日付 (年、月、日): {{jsxref("Temporal.PlainDate")}}
          - 年月: {{jsxref("Temporal.PlainYearMonth")}}
          - 月日: {{jsxref("Temporal.PlainMonthDay")}}
        - 時刻 (時、分、秒、ミリ秒、ナノ秒): {{jsxref("Temporal.PlainTime")}}
  - さまざまなクラスのインスタンスや特定の形式で表した **現在** (現在の時刻): {{jsxref("Temporal.Now")}}
- 現在、以下のカレンダータイプは [`PlainDate`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDate/withCalendar)、[`PlainDateTime`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/PlainDateTime/withCalendar)、[`ZonedDateTime`](/ja/docs/Web/JavaScript/Reference/Global_Objects/Temporal/ZonedDateTime/withCalendar) オブジェクトの `withCalendar()` メソッドで無効化しています:
  - `islamic`
  - `islamic-rgsa`
  - `islamic-umalqura`

### SVG

#### 廃止

- 実験的な `<discard>` 要素と、これに対応する {{domxref("SVGDiscardElement")}} JavaScript インターフェイスを削除しました。
  これらはほかのブラウザーでサポートされておらず、仕様書から削除される予定です ([Firefox bug 1958839](https://bugzil.la/1958839))。

### HTTP

変更なし。

### API

#### DOM

- {{domxref("HTMLDialogElement")}} インターフェイスの {{domxref("HTMLDialogElement/requestClose", "requestClose()")}} メソッドをサポートしました。
  これにより開発者は、[`cancel`](/ja/docs/Web/API/HTMLDialogElement) イベントハンドラーを与えることでダイアログが閉じるのを条件つきで抑止できます ([Firefox bug 1960556](https://bugzil.la/1960556))。
- Web Authentication の [`largeBlob`](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#largeblob) および [`credProps`](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#credprops) 拡張をサポートしました。また、[`prf`](/ja/docs/Web/API/Web_Authentication_API/WebAuthn_extensions#prf) 拡張をすべてのデスクトップ版でサポートしました。
  これらはそれぞれ、資格情報に関連づけられた大容量の blob ストレージ、資格情報に関する追加情報、資格情報や特定の入力に関連づけられた乱数を生成する機能を提供します ([Firefox bug 1795020](https://bugzil.la/1795020)、[Firefox bug 1844449](https://bugzil.la/1844449)、[Firefox bug 1935280](https://bugzil.la/1935280))。

### WebDriver への適合 (WebDriver BiDi, Marionette)

#### 一般

- Firefox の優先度マネージャー (macOS のバックグラウンド QoS マネージャー) は親プロセスとコンテンツプロセスの間の IPC メッセージの優先度を管理するものですが、これをサポート済みのすべてのリモートプロトコルで一時的に無効化しました。この変更により、システムの負荷が高いときに新しく開いたバックグラウンドのタブで最初に読み込まれるページがスケジューリングされず、一部のコマンドがハングアップする問題が解消します ([Firefox bug 1960734](https://bugzil.la/1960734))。

#### WebDriver BiDi

- テストや自動化ツールが特定のブラウジングコンテキストやユーザーコンテキストに渡って位置情報をシミュレートすることを可能にする、`emulation.setGeolocationOverride` コマンドを実装しました。これにより、地域に基づく推奨のためのジオフェンシングのような位置認識機能を消費者がテストできます ([Firefox bug 1954992](https://bugzil.la/1954992))。

## アドオン開発者向けの変更点一覧

- ローカライズされた拡張機能は言語を拡張機能のデフォルトへ戻す前に、翻訳を見つけるためロケールサブタグを段階的に探すようになりました。以前は、サブタグの言語用の翻訳が見つからない場合に、拡張機能のデフォルトの言語を使用していました。新しい動作について詳しくは、国際化の記事で [ローカライズ済みの文字列の選択](/ja/docs/Mozilla/Add-ons/WebExtensions/Internationalization#ローカライズ済みの文字列の選択) をご覧ください ([Firefox bug 1381580](https://bugzil.la/1381580))。
- コンテンツスクリプトやスタイルを、登録順 (すなわち、[`content_scripts` マニフェストキー配列](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) の順序) に実行することを保証するようになりました。以前は、同じ `js` 配列内のスクリプトに限って順序を保証していました ([Firefox bug 1792685](https://bugzil.la/1792685))。
- {{WebExtAPIRef("tabGroups")}} API が使用可能になりました。この API は、拡張機能に [タブグループ](https://support.mozilla.org/ja/kb/tab-groups) の変更や組み換えを可能にします。詳しくは [WebExtensions Support for Tab Groups](https://blog.mozilla.org/addons/2025/04/30/webextensions-support-for-tab-groups/) をご覧ください ([Firefox bug 1940631](https://bugzil.la/1940631))。

## 実験的なウェブ機能

以下の機能は Firefox 139 で導入しましたが、デフォルトで無効です。これらを実験するには、`about:config` ページで適切な設定項目を検索して `true` に設定してください。[実験的機能](/ja/docs/Mozilla/Firefox/Experimental_features) のページで、さらに多くの機能を確認できます。

- **Prioritized Task Scheduling API** (Nightly リリース)。
  [Prioritized Task Scheduling API](/ja/docs/Web/API/Prioritized_Task_Scheduling_API) は、ウェブサイトの開発者のコードで定義されたか、サードパーティーのライブラリーやフレームワークで定義されたかにかかわらず、アプリケーションに所属するすべてのタスクに優先度をつけるための標準された手段を提供します。
  これは Nightly リリースで、{{domxref("scheduler.yield()")}} メソッドのサポートと API 全体の再有効化を追加します ([Firefox bug 1958943](https://bugzil.la/1958943), [Firefox bug 1920115](https://bugzil.la/1920115))。
- **View Transition API** (Nightly リリース)。
  [View Transition API](/ja/docs/Web/API/View_Transition_API) を [SPA (シングルページアプリケーション)](/ja/docs/Glossary/SPA) 向けに有効化しました。これは、別のウェブサイトのビューとの間でアニメーション化されたトランジションを簡単に作れるようにする仕組みです ([Firefox bug 1950759](https://bugzil.la/1950759))。
- **HTML のシリアライズ時に属性の `<` および `>` のエスケープをサポート**: `dom.security.html_serialization_escape_lt_gt`。
  Firefox は HTML をシリアライズする際に属性内の文字 `<` および `>` を、それぞれ `&lt;` および `&gt;` に置き換えるようになりました。これは、HTML をシリアライズして DOM へ再挿入する特定の攻撃を防ぐことができます。
  この動作は以下のメソッドやプロパティに影響があります: {{domxref("Element.innerHTML")}}、{{domxref("Element.outerHTML")}}、{{domxref("Element.getHTML()")}}、{{domxref("ShadowRoot.innerHTML")}}、{{domxref("ShadowRoot.getHTML()")}} ([Firefox bug 1941347](https://bugzil.la/1941347))。
- **非標準の `beforescriptexecute` および `afterscriptexecute` を無効化**: `dom.events.script_execute.enabled`。
  これらはブラウザで削除前のテストを可能にするため、Nightly 版に限って無効化しました。
  以下のイベントに影響があります: {{domxref("Document")}} インターフェイスの [`beforescriptexecute`](/ja/docs/Web/API/Document/beforescriptexecute_event) および [`afterscriptexecute`](/ja/docs/Web/API/Document/afterscriptexecute_event)、{{domxref("Element")}} インターフェイスの[`afterscriptexecute`](/ja/docs/Web/API/Element/afterscriptexecute_event) および [`beforescriptexecute`](/ja/docs/Web/API/Element/beforescriptexecute_event) ([Firefox bug 1954685](https://bugzil.la/1954685))。

## 過去のバージョン

{{Firefox_for_developers}}
