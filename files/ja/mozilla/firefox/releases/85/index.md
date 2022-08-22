---
title: Firefox 85 for developers
slug: Mozilla/Firefox/Releases/85
tags:
  - '85'
  - Firefox
  - Mozilla
  - Release
---
{{FirefoxSidebar}}

このページでは、開発者に影響する Firefox 85 の変更点をまとめています。Firefox 85 は、2021 年 1 月 26 日にリリースされました。

> **Note:** Mozilla Hacks の [January brings us Firefox 85](https://hacks.mozilla.org/2021/01/january-brings-us-firefox-85/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [インスペクター](/ja/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#viewing_common_pseudo-classes) を使用して、(すでにサポートしている {{cssxref(":hover")}}、{{cssxref(":active")}}、{{cssxref(":focus")}}、{{cssxref(":focus-within")}}、{{cssxref(":visited")}} 疑似クラスに加えて) 現在選択されている要素の {{cssxref(":focus-visible")}} 疑似クラスを切り替えられるようになりました ({{bug(1617608)}})。

### HTML

- [`<link rel="preload">`](/ja/docs/Web/HTML/Link_types/preload) を有効化しました ({{bug(1626997)}})。

#### 廃止

- {{HTMLElement("menuitem")}} HTML 要素を使用できなくなりました。`dom.menuitem.enabled` フラグで隠されています ({{bug(1680596)}})。

### CSS

- {{cssxref(":focus-visible")}} 疑似クラスを有効にしました ({{bug(1445482)}})。
- {{cssxref("touch-action")}} プロパティの値 `pinch-zoom` を有効にしました ({{bug(1329241)}})。

### JavaScript

- `collation` プロパティを、[`Intl.Collator()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) へ渡すオプションで指定できるようになりました ({{bug(1670062)}})。これにより、開発者はより明瞭にコードを記述できます:

  ```js
  // Old method
  let pinyin = new Intl.Collator(["zh-u-co-pinyin"]);
  // New method
  let pinyin = new Intl.Collator("zh", {collation: "pinyin"});
  ```

### プラグイン

- Flash のサポートを、Firefox から完全に削除しました ({{bug(1675349)}})。詳しくは、私たちの [プラグインロードマップ](/ja/docs/Plugins/Roadmap#schedule) をご覧ください。

### API

_変更なし。_

### WebDriver conformance (Marionette)

- `_blank` 以外の `target` を持つリンクに対して `WebDriver:ElementClick` を呼び出したとき、読み込みがタイムアウトになる可能性があった問題を修正しました ({{bug(1678455)}})。
- 元のブラウジングコンテキスト以外のコンテキストでウェブ要素を参照したとき、`stale element reference` エラーではなく `no such element` エラーが正しく返るようになりました ({{bug(1684827)}})。

#### 既知の不具合

- フレームのコンテンツの読み込みが完了していない場合に、`WebDriver:SwitchToFrame` の呼び出しに続く WebDriver コマンドが "no such window" エラーで失敗します ({{bug(1691348)}})。
- [クロスグループページナビゲーション](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) の後、過去に取得した要素にアクセスすると常に "stale element" エラーが発生せず、"no such element" エラーが発生する場合があります。これを防ぐには、設定項目 `marionette.actors.enabled` を `false` に設定してください ({{bug(1690308)}})。

## アドオン開発者向けの変更点

_変更なし。_

## 過去のバージョン

{{Firefox_for_developers(84)}}
