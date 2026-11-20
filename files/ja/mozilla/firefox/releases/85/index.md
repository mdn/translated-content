---
title: Firefox 85 開発者向けリリースノート
short-title: Firefox 85
slug: Mozilla/Firefox/Releases/85
l10n:
  sourceCommit: 61912f53d01e935aea926a2226130fb4587414a9
---

このページでは、開発者に影響する Firefox 85 の変更点をまとめています。Firefox 85 は、2021 年 1 月 26 日にリリースされました。

> [!NOTE]
> Mozilla Hacks の [January brings us Firefox 85](https://hacks.mozilla.org/2021/01/january-brings-us-firefox-85/) もご覧ください。

## ウェブ開発者向けの変更点

### 開発者ツール

- [インスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#viewing-common-pseudo-classes) を使用して、現在選択されている要素の {{cssxref(":focus-visible")}} 擬似クラスを（すでに対応している {{cssxref(":hover")}}、{{cssxref(":active")}}、{{cssxref(":focus")}}、{{cssxref(":focus-within")}}、{{cssxref(":visited")}} 擬似クラスに加えて）切り替えられるようになりました ([Firefox バグ 1617608](https://bugzil.la/1617608))。

### HTML

- [`<link rel="preload">`](/ja/docs/Web/HTML/Reference/Attributes/rel/preload) を有効化しました ([Firefox バグ 1626997](https://bugzil.la/1626997))。

#### 廃止

- `<menuitem>` HTML 要素を使用できなくなりました。`dom.menuitem.enabled` フラグで隠されています ([Firefox バグ 1680596](https://bugzil.la/1680596))。

### CSS

- {{cssxref(":focus-visible")}} 擬似クラスを有効にしました ([Firefox バグ 1445482](https://bugzil.la/1445482))。
- {{cssxref("touch-action")}} プロパティの値 `pinch-zoom` を有効にしました ([Firefox バグ 1329241](https://bugzil.la/1329241))。

### JavaScript

- `collation` プロパティを、[`Intl.Collator()` コンストラクター](/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Collator/Collator) へ渡すオプションで指定できるようになりました ([Firefox バグ 1670062](https://bugzil.la/1670062))。これにより、開発者はより明瞭にコードを記述できます:

  ```js
  // 古い方法
  let pinyin = new Intl.Collator(["zh-u-co-pinyin"]);
  // 新しい方法
  let pinyin = new Intl.Collator("zh", { collation: "pinyin" });
  ```

### プラグイン

- Firefox での Flash 対応を完全に削除しました ([Firefox バグ 1675349](https://bugzil.la/1675349))。

### API

_変更なし。_

### WebDriver conformance (Marionette)

- `_blank` 以外の `target` を持つリンクに対して `WebDriver:ElementClick` を呼び出したとき、読み込みがタイムアウトになる可能性があった問題を修正しました ([Firefox バグ 1678455](https://bugzil.la/1678455))。
- 元の閲覧コンテキスト以外でウェブ要素の参照を使用したときに、`stale element reference` エラーではなく `no such element` エラーが正しく返るようになりました ([Firefox バグ 1684827](https://bugzil.la/1684827))。

#### 既知の不具合

- フレームのコンテンツの読み込みが完了していない場合に、`WebDriver:SwitchToFrame` の呼び出しに続く WebDriver コマンドが "no such window" エラーで失敗します ([Firefox バグ 1691348](https://bugzil.la/1691348))。
- [クロスグループページナビゲーション](https://firefox-source-docs.mozilla.org/dom/navigation/nav_replace.html#cross-group-navigations) の後、過去に取得した要素にアクセスしても、必ずしも "stale element" エラーが発生するとは限らず、"no such element" エラーが発生する場合もあります。これを防ぐには、設定項目 `marionette.actors.enabled` を `false` に設定してください ([Firefox バグ 1690308](https://bugzil.la/1690308))。

## アドオン開発者向けの変更点

_変更なし。_
