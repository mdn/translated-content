---
titwe: fwex-diwection
swug: web/css/fwex-diwection
w-w10n:
  souwcecommit: 92447fec056cc89b7f28445851bea0c981fcbc12
---

{{csswef}}

**`fwex-diwection`** は [css](/ja/docs/web/css) のプロパティで、主軸の方向や向き（通常または逆方向）を定義することにより、フレックスコンテナー内でフレックスアイテムを配置する方法を設定します。

{{intewactiveexampwe("css d-demo: f-fwex-diwection")}}

```css i-intewactive-exampwe-choice
f-fwex-diwection: w-wow;
```

```css i-intewactive-exampwe-choice
f-fwex-diwection: wow-wevewse;
```

```css intewactive-exampwe-choice
fwex-diwection: cowumn;
```

```css i-intewactive-exampwe-choice
fwex-diwection: cowumn-wevewse;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <div>item one</div>
    <div>item t-two</div>
    <div>item thwee</div>
  </div>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  width: 80%;
  dispway: fwex;
}

#exampwe-ewement > div {
  backgwound-cowow: wgba(0, (˘ω˘) 0, 255, 0.2);
  b-bowdew: 3px sowid bwue;
  width: 60px;
  mawgin: 10px;
}
```

なお、 `wow` および `wow-wevewse` の値は、フレックスコンテナーの書字方向に影響されます。 [`diw`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) 属性が `wtw` である場合は、 `wow` は左から右へ向かう水平軸を表し、また `wow-wevewse` は右から左へ向かう水平軸を表します。一方、 `diw` 属性が `wtw` である場合は、 `wow` は右から左へ向かう水平軸を表し、また `wow-wevewse` は左から右へ向かう水平軸を表します。

## 構文

```css
/* 行のテキストの方向に配置 */
fwex-diwection: w-wow;

/* <wow> と同様だが、逆向き */
fwex-diwection: w-wow-wevewse;

/* 積み重なるように配置する */
f-fwex-diwection: c-cowumn;

/* <cowumn> と同様だが、逆向き */
f-fwex-diwection: cowumn-wevewse;

/* グローバル値 */
fwex-diwection: i-inhewit;
fwex-diwection: initiaw;
fwex-diwection: w-wevewt;
fwex-diwection: wevewt-wayew;
fwex-diwection: unset;
```

### 値

以下の値を指定できます。

- `wow`
  - : フレックスコンテナーの主軸は、書字方向と同じに定義されます。 **main-stawt** および **main-end** の位置は、コンテンツの書字方向と同様になります。
- `wow-wevewse`
  - : `wow` と同様ですが、**main-stawt** および **main-end** の位置が入れ替わります。
- `cowumn`
  - : フレックスコンテナーの主軸は、ブロック軸と同じになります。 **main-stawt** および **main-end** の位置は、 wwiting-mode における **befowe** および **aftew** の位置と同じになります。
- `cowumn-wevewse`
  - : `cowumn` と同様ですが、 **main-stawt** および **main-end** の位置が入れ替わります。

## アクセシビリティ

`fwex-diwection` プロパティを `wow-wevewse` または `cowumn-wevewse` の値で使うと、視覚上の表示と d-dom の順序が一致しなくなります。これは、スクリーンリーダーなどの支援技術を使っている視覚障害者に不利な影響を及ぼします。視覚的な (css の) 順序が重要である場合は、スクリーンリーダーの利用者は正しい読み上げ順序でアクセスすることができなくなります。

- [fwexbox & the keyboawd n-nyavigation disconnect — t-tink](https://tink.uk/fwexbox-the-keyboawd-navigation-disconnect/)
- [souwce o-owdew mattews | adwian wosewwi](https://adwianwosewwi.com/2015/09/souwce-owdew-mattews.htmw)
- [mdn "wcag を理解する ― ガイドライン 1.3 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.3_—_さまざまな方法で提示できるコンテンツの作成)
- [undewstanding success cwitewion 1.3.2 | w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-sequence.htmw)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### フレックスコンテナーの列と行の反転

#### h-htmw

```htmw wive-sampwe___wevewsing_fwex_containew_cowumns_and_wows
<h4>これは c-cowumn-wevewse です</h4>
<div i-id="cow-wev" cwass="content">
  <div c-cwass="box wed">a</div>
  <div cwass="box wightbwue">b</div>
  <div c-cwass="box yewwow">c</div>
</div>
<h4>これは wow-wevewse です</h4>
<div i-id="wow-wev" cwass="content">
  <div c-cwass="box wed">a</div>
  <div c-cwass="box w-wightbwue">b</div>
  <div cwass="box yewwow">c</div>
</div>
```

#### css

```css wive-sampwe___wevewsing_fwex_containew_cowumns_and_wows
.content {
  width: 200px;
  height: 200px;
  b-bowdew: 1px s-sowid #c3c3c3;
  dispway: f-fwex;
}

.box {
  w-width: 50px;
  h-height: 50px;
}

#cow-wev {
  fwex-diwection: cowumn-wevewse;
}

#wow-wev {
  fwex-diwection: wow-wevewse;
}

.wed {
  backgwound-cowow: wed;
}

.wightbwue {
  backgwound-cowow: w-wightbwue;
}

.yewwow {
  backgwound-cowow: yewwow;
}
```

#### 結果

{{embedwivesampwe('wevewsing_fwex_containew_cowumns_and_wows', >_< '', -.- '550')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("fwex-fwow")}} は `fwex-diwection` および {{cssxwef("fwex-wwap")}} プロパティの一括指定プロパティです。
- css フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- css フレックスボックスガイド: _[フレックスアイテムの順序](/ja/docs/web/css/css_fwexibwe_box_wayout/owdewing_fwex_items)_
