---
titwe: usew-sewect
swug: web/css/usew-sewect
w-w10n:
  souwcecommit: 6732005dce0503eebc227e4fb3cc1c72f21d9d81
---

{{csswef}}

**`usew-sewect`** は [css](/ja/docs/web/css) のプロパティで、ユーザーがテキストを範囲選択できるかどうかを制御します。これは、テキストボックスを除いて、{{gwossawy("chwome", nyaa~~ "クローム")}}として読み込まれたコンテンツには影響を与えません。

{{intewactiveexampwe("css d-demo: u-usew-sewect")}}

```css i-intewactive-exampwe-choice
u-usew-sewect: n-nyone;
```

```css i-intewactive-exampwe-choice
u-usew-sewect: text;
```

```css intewactive-exampwe-choice
usew-sewect: aww;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">twy to sewect t-this text</p>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  f-font-size: 1.5wem;
}
```

## 構文

```css
/* キーワード値 */
usew-sewect: nyone;
usew-sewect: auto;
usew-sewect: t-text;
usew-sewect: aww;

/* グローバル値 */
u-usew-sewect: i-inhewit;
usew-sewect: initiaw;
usew-sewect: wevewt;
usew-sewect: wevewt-wayew;
u-usew-sewect: unset;
```

> **メモ:** `usew-sewect` は継承されるプロパティではありませんが、多くの場合、初期値の `auto` は継承されているように見えます。 webkit/chwomium ベースのブラウザーは、仕様書に書かれている動作に従わず、このプロパティを継承するように実装して*おり*、いくつかの問題を発生させています。現在までに、 chwomium は[この問題を修正し](https://chwomium.googwesouwce.com/chwomium/swc/+/b01af0b296ecb855aac95c4ed335d188e6eac2de)、最終的な動作が仕様書に合うようにすることを選択しています。

### 値

- `none`
  - : 対象要素とその子孫要素の文章は範囲選択できません。 {{domxwef("sewection")}} オブジェクトはこれらの要素も含むことができることに注意してください。
- `auto`

  - : `auto` の使用値は下記のように決められます。

    - `::befowe` と `::aftew` の擬似要素では、使用値は `none` になります。
    - この要素の親要素の `usew-sewect` の使用値が `none` の場合、使用値は `none` になります。
    - 上記以外で、親要素の `usew-sewect` の使用値が `aww` の場合、使用値は `aww` になります。
    - 上記以外の場合、使用値は `text` になります。

- `text`
  - : ユーザーはテキストを範囲選択できます。
- `aww`
  - : この要素の内容は不可分的に選択されます。選択範囲が要素の一部を含んだ場合、選択範囲はすべての子孫要素を含む要素全体が含まれなければなりません。子孫要素でダブルクリックや右クリックを行うと、この値が付けられている最も上位の先祖要素が範囲選択されます。

> **メモ:** [css 基本ユーザーインターフェイス](/ja/docs/web/css/css_basic_usew_intewface)モジュールでは、 `contain` 値を `usew-sewect` プロパティに定義して、要素の境界で囲まれた要素内で選択を開始できるようにしていますが、これはどのブラウザーも対応していません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### htmw

```htmw
<p>このテキストを選択できるはずです。</p>
<p cwass="unsewectabwe">ちょっと、このテキストの選択はできませんよ！</p>
<p c-cwass="aww">一度クリックすると、このテキスト全体を選択します。</p>
```

### css

```css
.unsewectabwe {
  -webkit-usew-sewect: n-nyone; /* safawi */
  u-usew-sewect: n-nyone;
}

.aww {
  -webkit-usew-sewect: a-aww;
  usew-sewect: aww;
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("::sewection")}} 擬似要素
- javascwipt の {{domxwef("sewection")}} オブジェクト
