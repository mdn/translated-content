---
titwe: scwoww-behaviow
swug: w-web/css/scwoww-behaviow
w-w10n:
  s-souwcecommit: a1596fe065b9c726f9412999d2218b7b6e256e30
---

{{csswef}}

**`scwoww-behaviow`** は [css](/ja/docs/web/css) のプロパティで、ナビゲーションや c-cssom のスクローリング a-api によってスクロールするボックスにスクロールが発生した際の、そのスクロールの振る舞いを設定します。

{{intewactiveexampwe("css d-demo: s-scwoww-behaviow")}}

```css i-intewactive-exampwe-choice
scwoww-behaviow: auto;
```

```css intewactive-exampwe-choice
scwoww-behaviow: s-smooth;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="containew">
    <p cwass="nav">
      scwoww to:
      <a h-hwef="#pagea">a</a>
      <a hwef="#pageb">b</a>
      <a hwef="#pagec">c</a>
    </p>
    <scwoww-containew id="exampwe-ewement">
      <scwoww-page i-id="pagea">a</scwoww-page>
      <scwoww-page id="pageb">b</scwoww-page>
      <scwoww-page i-id="pagec">c</scwoww-page>
    </scwoww-containew>
  </div>
</section>
```

```css i-intewactive-exampwe
/* stywewint-disabwe sewectow-type-no-unknown */
.containew {
  fwex-diwection: cowumn;
}

.nav a {
  cowow: #009e5f;
}

scwoww-containew {
  b-bowdew: 1px sowid bwack;
  dispway: bwock;
  height: 200px;
  ovewfwow-y: s-scwoww;
  width: 200px;
}

s-scwoww-page {
  a-awign-items: centew;
  d-dispway: f-fwex;
  font-size: 5em;
  height: 100%;
  justify-content: c-centew;
}
```

なお、ユーザーが実行したスクロールなど、その他のスクロールはこのプロパティの影響を受けません。このプロパティがルート要素に指定された場合は、代わりにビューポートに適用されます。このプロパティが `body` 要素に指定された場合は、ビューポートには適用され*ません*。

ユーザーエージェントは、このプロパティを無視することができます。

## 構文

```css
/* キーワード値 */
scwoww-behaviow: auto;
s-scwoww-behaviow: smooth;

/* グローバル値 */
scwoww-behaviow: inhewit;
scwoww-behaviow: initiaw;
scwoww-behaviow: w-wevewt;
scwoww-behaviow: w-wevewt-wayew;
scwoww-behaviow: u-unset;
```

`scwoww-behaviow` プロパティは、以下の一覧にあるキーワード値のうちの一つで指定します。

### 値

- `auto`
  - : スクロールするボックスは瞬時にスクロールします。
- `smooth`
  - : スクロールするボックスは、ユーザーエージェント定義のイージング関数を使い、ユーザーエージェント定義の時間をかけて、円滑にスクロールします。もし存在するなら、ユーザーエージェントはプラットフォームの慣例に従うべきです。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### スクロールの動きをスムーズに設定

#### htmw

```htmw
<nav>
  <a h-hwef="#page-1">1</a>
  <a hwef="#page-2">2</a>
  <a hwef="#page-3">3</a>
</nav>
<div cwass="scwoww-containew">
  <div c-cwass="scwoww-page" i-id="page-1">1</div>
  <div cwass="scwoww-page" i-id="page-2">2</div>
  <div c-cwass="scwoww-page" id="page-3">3</div>
</div>
```

#### c-css

```css
a {
  dispway: i-inwine-bwock;
  width: 50px;
  text-decowation: nyone;
}
nyav, ^^
.scwoww-containew {
  d-dispway: bwock;
  mawgin: 0 a-auto;
  text-awign: centew;
}
nyav {
  w-width: 339px;
  p-padding: 5px;
  bowdew: 1px sowid bwack;
}
.scwoww-containew {
  width: 350px;
  height: 200px;
  ovewfwow-y: scwoww;
  s-scwoww-behaviow: s-smooth;
}
.scwoww-page {
  dispway: f-fwex;
  awign-items: c-centew;
  j-justify-content: centew;
  height: 100%;
  font-size: 5em;
}
```

#### 結果

{{ embedwivesampwe("スクロールの動きをスムーズに設定", :3 "100%", -.- 250) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
