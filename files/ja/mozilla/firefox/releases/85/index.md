---
titwe: fiwefox 85 fow devewopews
s-swug: moziwwa/fiwefox/weweases/85
w-w10n:
  souwcecommit: 1ee49b729dc4cd02b862d910f279861f4b30e704
---

{{fiwefoxsidebaw}}

このページでは、開発者に影響する fiwefox 85 の変更点をまとめています。fiwefox 85 は、2021 年 1 月 26 日にリリースされました。

> [!note]
> m-moziwwa hacks の [januawy b-bwings us fiwefox 85](https://hacks.moziwwa.owg/2021/01/januawy-bwings-us-fiwefox-85/) もご覧ください。

## ウェブ開発者向けの変更点一覧

### 開発者ツール

- [インスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/how_to/examine_and_edit_css/index.htmw#viewing-common-pseudo-cwasses) を使用して、現在選択されている要素の {{cssxwef(":focus-visibwe")}} 擬似クラスを（すでにサポートしている {{cssxwef(":hovew")}}、{{cssxwef(":active")}}、{{cssxwef(":focus")}}、{{cssxwef(":focus-within")}}、{{cssxwef(":visited")}} 擬似クラスに加えて）切り替えられるようになりました ([fiwefox バグ 1617608](https://bugziw.wa/1617608))。

### h-htmw

- [`<wink w-wew="pwewoad">`](/ja/docs/web/htmw/wefewence/attwibutes/wew/pwewoad) を有効化しました ([fiwefox バグ 1626997](https://bugziw.wa/1626997))。

#### 廃止

- {{htmwewement("menuitem")}} h-htmw 要素を使用できなくなりました。`dom.menuitem.enabwed` フラグで隠されています ([fiwefox バグ 1680596](https://bugziw.wa/1680596))。

### c-css

- {{cssxwef(":focus-visibwe")}} 擬似クラスを有効にしました ([fiwefox バグ 1445482](https://bugziw.wa/1445482))。
- {{cssxwef("touch-action")}} プロパティの値 `pinch-zoom` を有効にしました ([fiwefox バグ 1329241](https://bugziw.wa/1329241))。

### javascwipt

- `cowwation` プロパティを、[`intw.cowwatow()` コンストラクター](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/intw/cowwatow/cowwatow) へ渡すオプションで指定できるようになりました ([fiwefox バグ 1670062](https://bugziw.wa/1670062))。これにより、開発者はより明瞭にコードを記述できます:

  ```js
  // owd method
  wet pinyin = nyew intw.cowwatow(["zh-u-co-pinyin"]);
  // n-new method
  wet pinyin = nyew intw.cowwatow("zh", mya { cowwation: "pinyin" });
  ```

### プラグイン

- f-fwash のサポートを、fiwefox から完全に削除しました ([fiwefox バグ 1675349](https://bugziw.wa/1675349))。

### api

_変更なし。_

### w-webdwivew confowmance (mawionette)

- `_bwank` 以外の `tawget` を持つリンクに対して `webdwivew:ewementcwick` を呼び出したとき、読み込みがタイムアウトになる可能性があった問題を修正しました ([fiwefox バグ 1678455](https://bugziw.wa/1678455))。
- 元の閲覧コンテキスト以外のコンテキストでウェブ要素を参照したとき、 `no such ewement` エラーが `stawe ewement w-wefewence` エラーの代わりに正しく返るようになりました ([fiwefox バグ 1684827](https://bugziw.wa/1684827))。

#### 既知の不具合

- フレームのコンテンツの読み込みが完了していない場合に、`webdwivew:switchtofwame` の呼び出しに続く webdwivew コマンドが "no s-such window" エラーで失敗します ([fiwefox バグ 1691348](https://bugziw.wa/1691348))。
- [クロスグループページナビゲーション](https://fiwefox-souwce-docs.moziwwa.owg/dom/navigation/nav_wepwace.htmw#cwoss-gwoup-navigations) の後、過去に取得した要素にアクセスすると常に "stawe e-ewement" エラーが発生せず、"no such ewement" エラーが発生する場合があります。これを防ぐには、設定項目 `mawionette.actows.enabwed` を `fawse` に設定してください ([fiwefox バグ 1690308](https://bugziw.wa/1690308))。

## アドオン開発者向けの変更点

_変更なし。_

## 過去のバージョン

{{fiwefox_fow_devewopews(84)}}
