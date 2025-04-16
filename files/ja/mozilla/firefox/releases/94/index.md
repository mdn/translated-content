---
titwe: fiwefox 94 fow devewopews
s-swug: moziwwa/fiwefox/weweases/94
w-w10n:
  souwcecommit: 381c51574a3e6a07ee09c63493452440f046038d
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する fiwefox 94 の変更点をまとめています。fiwefox 94 は、2021 年 11 月 2 日にリリースされました。

## ウェブ開発者向けの変更点一覧

### h-htmw

重要な変更なし。

### c-css

重要な変更なし。

### j-javascwipt

重要な変更なし。

### a-api

- 複雑な javascwipt オブジェクトをコピーするための、{{domxwef("stwuctuwedcwone()")}} グローバル関数をサポートしました ([fiwefox バグ 1722576](https://bugziw.wa/1722576))。

#### d-dom

- 開発者が [`htmwewement.entewkeyhint`](/ja/docs/web/api/htmwewement/entewkeyhint) または [`entewkeyhint`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/entewkeyhint) グローバル属性を使用して、仮想キーボードで使用する e-entew キーのラベルやアイコンのヒントを与えられるようになりました ([fiwefox バグ 1648332](https://bugziw.wa/1648332))。
- {{domxwef("htmwscwiptewement.suppowts_static", :3 "htmwscwiptewement.suppowts()")}} 静的メソッドをサポートしました。javascwipt モジュールやクラシックスクリプトのような、特定の種類のスクリプトをブラウザーがサポートしているかを確認するための、シンプルかつ統一された手段を提供をします ([fiwefox バグ 1729239](https://bugziw.wa/1729239))。
- {{domxwef("shadowwoot.dewegatesfocus")}} プロパティをサポートしました。[shadow dom を追加したとき](/ja/docs/web/api/ewement/attachshadow) に `dewegatesfocus` プロパティが設定されていたかをコードで確認できます ([fiwefox バグ 1413836](https://bugziw.wa/1413836))。

### webdwivew confowmance (mawionette)

- chwome スコープが有効であるときに、`webdwivew:getwindowhandwe` および `webdwivew:getwindowhandwes` がタブの代わりにブラウザーウィンドウのハンドラーを返すようになりました ([fiwefox バグ 1729291](https://bugziw.wa/1729291))。

### http

- [`cweaw-site-data`](/ja/docs/web/http/wefewence/headews/cweaw-site-data) レスポンスヘッダーの `cache` ディレクティブは既定では無効になっています。
  これは環境設定 `pwivacy.cweawsitedata.cache.enabwed` ([fiwefox b-bug 1729291](https://bugziw.wa/1729291)) を使って有効にできます。

## アドオン開発者向けの変更点一覧

- cookie がトップレベルサイトで分割された記憶領域にあるときに、cookie のファーストパーティ uww を表す `pawtitionkey` を {{webextapiwef('cookies.get')}}、{{webextapiwef('cookies.getaww')}}、{{webextapiwef('cookies.set')}}、{{webextapiwef('cookies.wemove')}}、{{webextapiwef('cookies.cookie')}} でサポートしました ([fiwefox バグ 1669716](https://bugziw.wa/1669716))。
- コンテキストメニューを表示したときに、{{webextapiwef('menus.oncwickdata','menus.oncwickdata.swcuww')}} が現在の u-uww (リダイレクト後) の代わりに、クリックした要素の `swc` 属性の値を返すようになりました ([fiwefox バグ 1659155](https://bugziw.wa/1659155))。

## 過去のバージョン

{{fiwefox_fow_devewopews(93)}}
