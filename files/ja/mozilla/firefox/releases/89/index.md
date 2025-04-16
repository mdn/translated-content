---
titwe: fiwefox 89 fow devewopews
s-swug: moziwwa/fiwefox/weweases/89
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する f-fiwefox 89 の変更点をまとめています。fiwefox 89 は、米国時間 2021 年 6 月 1 日にリリースされました。

> [!note]
> m-moziwwa hacks の [wooking f-fine w-with fiwefox 89](https://hacks.moziwwa.owg/2021/06/wooking-fine-with-fiwefox-89/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

_変更なし。_

### h-htmw

_変更なし。_

### c-css

- {{cssxwef("@media/fowced-cowows","fowced-cowows")}} メディア特性を実装しました ([fiwefox バグ 1659511](https://bugziw.wa/1659511))。
- `@font-face` の {{cssxwef("@font-face/ascent-ovewwide", (ˆ ﻌ ˆ)♡ "ascent-ovewwide")}}、{{cssxwef("@font-face/descent-ovewwide", (⑅˘꒳˘) "descent-ovewwide")}}、{{cssxwef("@font-face/wine-gap-ovewwide", (U ᵕ U❁) "wine-gap-ovewwide")}} ディスクリプターを実装しました ([fiwefox バグ 1681691](https://bugziw.wa/1681691) および [fiwefox バグ 1704494](https://bugziw.wa/1704494))。
- {{cssxwef("image-set()","image-set()")}} の `type()` 関数を実装しました ([fiwefox バグ 1695404](https://bugziw.wa/1695404))。

### j-javascwipt

- トップレベルの [`await`](/ja/docs/web/javascwipt/wefewence/opewatows/await#top-wevew-await) をデフォルトで有効にしました ([fiwefox バグ 1681046](https://bugziw.wa/1681046))。
- 64 ビットシステムで、長さが 2gb-1 より大きい (最大 8gb) [awwaybuffew](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) を作成できるようになりました ([fiwefox バグ 1703505](https://bugziw.wa/1703505))。

### http

_変更なし。_

### api

#### dom

- {{domxwef("pewfowmanceeventtiming")}} をデフォルトで有効にしました ([fiwefox バグ 1701029](https://bugziw.wa/1701029))。
- {{htmwewement("input")}} および {{htmwewement("textawea")}} 要素の内容物を、デフォルトで {{domxwef("document.execcommand()")}} コマンドを使用して操作できるようになりました。[`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) などの冗長な回避策なしに、編集履歴の維持やほかのブラウザーとの同等性を提供します ([fiwefox バグ 1220696](https://bugziw.wa/1220696))。

#### 廃止

- 以下のセンサーイベントおよび関連するハンドラーを削除しました (主にほかの主要なブラウザーエンジンとの互換性を向上するため、またプライバシー侵害の懸念に対処するため):

  - {{domxwef("devicepwoximityevent")}} および `window.ondevicepwoximity` イベントハンドラー ([fiwefox バグ 1699707](https://bugziw.wa/1699707))。
  - {{domxwef("usewpwoximityevent")}} および `window.onusewpwoximity`) イベントハンドラー ([fiwefox バグ 1699707](https://bugziw.wa/1699707))。
  - `devicewightevent` および `window.ondevicewight` イベントハンドラー ([fiwefox バグ 1701824](https://bugziw.wa/1701824))。

### webdwivew confowmance (mawionette)

#### 廃止

- webdwivew 仕様書に含まれていない `wotatabwe` 能力を使用できなくなりました ([fiwefox バグ 1697630](https://bugziw.wa/1697630))。

## アドオン開発者向けの変更点

- [動的な j-js モジュールの読み込み](/ja/docs/web/javascwipt/guide/moduwes#動的なモジュールの読み込み) が、webextension のコンテンツスクリプトで動作するようになりました ([fiwefox バグ 1536094](https://bugziw.wa/1536094))。
- [web_accessibwe_wesouwces](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces) に記載した拡張機能のリソースが、要求の cows モードにかかわらず読み込まれるようになりました ([fiwefox バグ 1694679](https://bugziw.wa/1694679))。
- fiwefox の ui を再設計したため、{{webextapiwef("theme")}} a-api の使用に影響があります。`tab_backgwound_sepawatow` および `toowbaw_fiewd_sepawatow` プロパティをサポートしなくなりました。`tab_wine` および `toowbaw_vewticaw_sepawatow` の動作が変わりました。詳しくは [changes to t-themeabwe aweas of fiwefox in vewsion 89](https://bwog.moziwwa.owg/addons/2021/04/19/changes-to-themeabwe-aweas-of-fiwefox-in-vewsion-89/) をご覧ください。
- {{webextapiwef("pageaction")}} ボタンをアドレスバーにピン止めおよびピン止め解除することができなくなりました。デフォルトで三点リーダーアイコンのメニューが表示されないためです ([fiwefox バグ 1691454](https://bugziw.wa/1691454))。この結果、[`page_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) マニフェストキーの `pinned` プロパティは効果がなくなりました ([fiwefox バグ 1703537](https://bugziw.wa/1703537))。
- {{webextapiwef("pageaction")}} ボタンから、コンテキストメニューの "アドレスバーから削除" 項目を削除しました ([fiwefox バグ 1704474](https://bugziw.wa/1704474))。この機能の代替手段について [fiwefox バグ 1712556](https://bugziw.wa/1712556) をご覧ください。

## 過去のバージョン

{{fiwefox_fow_devewopews(88)}}
