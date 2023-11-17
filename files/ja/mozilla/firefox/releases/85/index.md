---
title: Firefox 85 for developers
slug: Mozilla/Firefox/Releases/85
l10n:
  sourceCommit: 1ee49b729dc4cd02b862d910f279861f4b30e704
---

{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 85 の変更点をまとめています。Firefox 85 は、2021 年 1 月 26 日にリリースされました。

> **メモ:** Mozilla Hacks の [January brings us Firefox 85](https://hacks.mozilla.org/2021/01/january-brings-us-firefox-85/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [インスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) を使用して、現在選択されている要素の {{cssxref(":focus-visible")}} 擬似クラスを（すでにサポートしている {{cssxref(":hover")}}、{{cssxref(":active")}}、{{cssxref(":focus")}}、{{cssxref(":focus-within")}}、{{cssxref(":visited")}} 擬似クラスに加えて）切り替えられるようになりました ([Firefox バグ 1617608](https://bugzil.la/1617608))。

### HTML

- [`<link rel="preload">`](/ja/docs/Web/HTML/Link_types/preload) を有効化しました ([Firefox バグ 1626997](https://bugzil.la/1626997))。

#### 廃止

- {{HTMLElement("menuitem")}} HTML 要素を使用できなくなりました。`dom.menuitem.enabled` フラグで隠されています ([Firefox バグ 1680596](https://bugzil.la/1680596))。

### CSS

- {{cssxref(":focus-visible")}} 擬似クラスを有効にしました ([Firefox バグ 1445482](https://bugzil.la/1445482))。
- {{cssxref("touch-action")}} プロパティの値 `pinch-zoom` を有効にしました ([Firefox バグ 1329241](https://bugzil.la/1329241))。

### JavaScript

- `collation` プロパティを、[`Intl.Collator()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) へ渡すオプションで指定できるようになりました ([Firefox バグ 1670062](https://bugzil.la/1670062))。これにより、開発者はより明瞭にコードを記述できます:

  ```js
  // Old method
  let pinyin = new Intl.Collator(["zh-u-co-pinyin"]);
  // New method
  let pinyin = new Intl.Collator("zh", { collation: "pinyin" });
  ```

### プラグイン

- Flash のサポートを、Firefox から完全に削除しました ([Firefox バグ 1675349](https://bugzil.la/1675349))。

### API

_変更なし。_

### WebDriver conformance (Marionette)

- `_blank` 以外の `target` を持つリンクに対して `WebDriver:ElementClick` を呼び出したとき、読み込みがタイムアウトになる可能性があった問題を修正しました ([Firefox バグ 1678455](https://bugzil.la/1678455))。
- 元の閲覧コンテキスト以外のコンテキストでウェブ要素を参照したとき、 `no such element` エラーが `stale element reference` エラーの代わりに正しく返るようになりました ([Firefox バグ 1684827](https://bugzil.la/1684827))。

#### 既知の不具合

- フレームのコンテンツの読み込みが完了していない場合に、`WebDriver:SwitchToFrame` の呼び出しに続く WebDriver コマンドが "no such window" エラーで失敗します ([Firefox バグ 1691348](https://bugzil.la/1691348))。
- [クロスグループページナビゲーション](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) の後、過去に取得した要素にアクセスすると常に "stale element" エラーが発生せず、"no such element" エラーが発生する場合があります。これを防ぐには、設定項目 `marionette.actors.enabled` を `false` に設定してください ([Firefox バグ 1690308](https://bugzil.la/1690308))。

## アドオン開発者向けの変更点

_変更なし。_

## 過去のバージョン

{{Firefox_for_developers(84)}}
