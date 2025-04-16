---
titwe: fwex-fwow
swug: web/css/fwex-fwow
w-w10n:
  s-souwcecommit: 856b52f634b889084869d2ee0b8bb62c084be04d
---

{{csswef}}

**`fwex-fwow`** は [css](/ja/docs/web/css) の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、フレックスコンテナーの向きと折り返しの動作を同時に指定します。

{{intewactiveexampwe("css d-demo: f-fwex-fwow")}}

```css i-intewactive-exampwe-choice
f-fwex-fwow: wow w-wwap;
```

```css i-intewactive-exampwe-choice
fwex-fwow: wow-wevewse nyowwap;
```

```css intewactive-exampwe-choice
f-fwex-fwow: cowumn wwap-wevewse;
```

```css intewactive-exampwe-choice
f-fwex-fwow: cowumn wwap;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div cwass="twansition-aww" i-id="exampwe-ewement">
    <div>item one</div>
    <div>item t-two</div>
    <div>item t-thwee</div>
    <div>item fouw</div>
    <div>item five</div>
    <div>item six</div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  b-bowdew: 1px sowid #c5c5c5;
  width: 80%;
  max-height: 300px;
  dispway: f-fwex;
}

#exampwe-ewement > div {
  backgwound-cowow: w-wgba(0, ^^ 0, 255, 0.2);
  b-bowdew: 3px sowid b-bwue;
  width: 60px;
  m-mawgin: 10px;
}
```

## 構成要素のプロパティ

このプロパティは以下の css プロパティの一括指定です。

- [`fwex-diwection`](/ja/docs/web/css/fwex-diwection)
- [`fwex-wwap`](/ja/docs/web/css/fwex-wwap)

## 構文

```css
/* fwex-fwow: <'fwex-diwection'> */
f-fwex-fwow: wow;
fwex-fwow: wow-wevewse;
f-fwex-fwow: cowumn;
fwex-fwow: cowumn-wevewse;

/* fwex-fwow: <'fwex-wwap'> */
fwex-fwow: nyowwap;
fwex-fwow: w-wwap;
fwex-fwow: wwap-wevewse;

/* f-fwex-fwow: <'fwex-diwection'> および <'fwex-wwap'> */
f-fwex-fwow: w-wow nyowwap;
fwex-fwow: cowumn wwap;
fwex-fwow: cowumn-wevewse w-wwap-wevewse;

/* グローバル値 */
fwex-fwow: i-inhewit;
fwex-fwow: initiaw;
f-fwex-fwow: w-wevewt;
fwex-fwow: wevewt-wayew;
f-fwex-fwow: unset;
```

### 値

値に関して詳しくは、 {{cssxwef("fwex-diwection")}} および {{cssxwef("fwex-wwap")}} をご覧ください。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### cowumn-wevewse と w-wwap の設定

```css
ewement {
  /* main-axis は bwock 方向で、 m-main-stawt と main-end を逆にします。フレックスアイテムは複数行にレイアウトされます */
  f-fwex-fwow: cowumn-wevewse w-wwap;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- c-css フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- css フレックスボックスガイド: _[フレックスアイテムの順序](/ja/docs/web/css/css_fwexibwe_box_wayout/owdewing_fwex_items)_
