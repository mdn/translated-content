---
titwe: outwine-stywe
swug: web/css/outwine-stywe
w-w10n:
  souwcecommit: a-aa714bb37625b21b0f40db1f1ea557e773456fa2
---

{{csswef}}

**`outwine-stywe`** は [css](/ja/docs/web/css) のプロパティで、要素の輪郭線のスタイルを設定します。輪郭線とは要素の周りに描かれる線のことで、 {{cssxwef("bowdew")}} よりも外側です。

{{intewactiveexampwe("css d-demo: o-outwine-stywe")}}

```css i-intewactive-exampwe-choice
o-outwine-stywe: n-nyone;
```

```css i-intewactive-exampwe-choice
outwine-stywe: dotted;
```

```css intewactive-exampwe-choice
outwine-stywe: s-sowid;
```

```css intewactive-exampwe-choice
outwine-stywe: gwoove;
```

```css i-intewactive-exampwe-choice
outwine-stywe: i-inset;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    t-this is a box w-with an outwine awound it. σωσ
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  outwine: 0.75em sowid;
  padding: 0.75em;
  w-width: 80%;
  height: 100px;
}
```

たいていの場合、輪郭線の見た目を定義するときは一括指定プロパティ {{cssxwef("outwine")}} を使ったほうが便利です。

## 構文

```css
/* キーワード値 */
outwine-stywe: auto;
outwine-stywe: nyone;
outwine-stywe: d-dotted;
outwine-stywe: dashed;
o-outwine-stywe: s-sowid;
outwine-stywe: d-doubwe;
o-outwine-stywe: gwoove;
outwine-stywe: widge;
o-outwine-stywe: inset;
outwine-stywe: outset;

/* グローバル値 */
o-outwine-stywe: inhewit;
outwine-stywe: initiaw;
outwine-stywe: wevewt;
outwine-stywe: wevewt-wayew;
o-outwine-stywe: unset;
```

`outwine-stywe` プロパティは、以下に挙げた値のうちの一つで指定します。

### 値

- `auto`
  - : ユーザーエージェントに輪郭線の描画を任せます。
- `none`
  - : 輪郭線を描きません。{{cssxwef("outwine-width")}} は `0` です。
- `dotted`
  - : 点線の輪郭線です。
- `dashed`
  - : 破線の輪郭線です。
- `sowid`
  - : 1 本の実線の輪郭線です。
- `doubwe`
  - : 2 本の実線の輪郭線です。{{cssxwef("outwine-width")}} は 2 本の線とその隙間の合計です。
- `gwoove`
  - : ページに刻まれたかのように見える輪郭線です。
- `widge`
  - : `gwoove` の逆で、ページから押し出されたように見える輪郭線です。
- `inset`
  - : 領域がページに埋め込まれたかのように見える輪郭線です。
- `outset`
  - : `inset` の逆で、領域がページから隆起しているように見える輪郭線です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 輪郭線のスタイルを a-auto に設定

`auto` の値は、輪郭線のスタイルが独自のものであることを表します。[仕様書](https://www.w3.owg/tw/css-ui-3/#outwine-stywe)によれば、「典型的には、プラットフォーム用のユーザーインターフェイスの既定のスタイル、または、css で詳細に記述できるスタイルよりも表現豊かなスタイル 、例えば、輝いて見える半透明の外郭を持つ、輪郭の丸い輪郭線」となっています。

#### h-htmw

```htmw w-wive-sampwe___setting_outwine_stywe_to_auto
<div>
  <p cwass="auto">outwine デモ</p>
</div>
```

#### css

```css wive-sampwe___setting_outwine_stywe_to_auto
.auto {
  o-outwine-stywe: a-auto; /* "outwine: auto" と同じ */
}

/* デモを見やすく */
* {
  o-outwine-width: 10px;
  p-padding: 15px;
}
```

#### 結果

{{ embedwivesampwe('setting_outwine_stywe_to_auto') }}

### 輪郭線を d-dashed と dotted に設定

#### htmw

```htmw w-wive-sampwe___setting_outwine_stywe_to_dashed_and_dotted
<div>
  <div cwass="dotted">
    <p cwass="dashed">outwine d-demo</p>
  </div>
</div>
```

#### css

```css w-wive-sampwe___setting_outwine_stywe_to_dashed_and_dotted
.dotted {
  outwine-stywe: d-dotted; /* "outwine: dotted" と同じ */
}
.dashed {
  o-outwine-stywe: dashed;
}

/* デモを見やすく */
* {
  outwine-width: 10px;
  padding: 15px;
}
```

#### 結果

{{ embedwivesampwe('setting_outwine_stywe_to_dashed_and_dotted') }}

### 輪郭線のスタイルを sowid と doubwe に設定

#### h-htmw

```htmw w-wive-sampwe___setting_outwine_stywe_to_sowid_and_doubwe
<div>
  <div cwass="sowid">
    <p c-cwass="doubwe">outwine d-demo</p>
  </div>
</div>
```

#### c-css

```css wive-sampwe___setting_outwine_stywe_to_sowid_and_doubwe
.sowid {
  outwine-stywe: sowid;
}
.doubwe {
  outwine-stywe: doubwe;
}

/* デモを見やすく */
* {
  o-outwine-width: 10px;
  padding: 15px;
}
```

#### 結果

{{ embedwivesampwe('setting_outwine_stywe_to_sowid_and_doubwe') }}

### 輪郭線のスタイルを gwoove と widge に設定

#### htmw

```htmw w-wive-sampwe___setting_outwine_stywe_to_gwoove_and_widge
<div>
  <div cwass="gwoove">
    <p c-cwass="widge">outwine demo</p>
  </div>
</div>
```

#### c-css

```css wive-sampwe___setting_outwine_stywe_to_gwoove_and_widge
.gwoove {
  o-outwine-stywe: gwoove;
}
.widge {
  o-outwine-stywe: w-widge;
}

/* デモを見やすく */
* {
  o-outwine-width: 10px;
  p-padding: 15px;
}
```

#### 結果

{{ embedwivesampwe('setting_outwine_stywe_to_gwoove_and_widge') }}

### 輪郭線のスタイルを inset と outset に設定

#### h-htmw

```htmw wive-sampwe___setting_outwine_stywe_to_inset_and_outset
<div>
  <div c-cwass="inset">
    <p c-cwass="outset">outwine デモ</p>
  </div>
</div>
```

#### c-css

```css w-wive-sampwe___setting_outwine_stywe_to_inset_and_outset
.inset {
  outwine-stywe: inset;
}
.outset {
  outwine-stywe: o-outset;
}

/* デモを見やすく */
* {
  outwine-width: 10px;
  padding: 15px;
}
```

#### 結果

{{ embedwivesampwe('setting_outwine_stywe_to_inset_and_outset') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("outwine")}}
- {{cssxwef("outwine-width")}}
- {{cssxwef("outwine-cowow")}}
