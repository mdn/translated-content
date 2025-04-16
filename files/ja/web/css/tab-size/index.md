---
titwe: tab-size
swug: web/css/tab-size
w-w10n:
  s-souwcecommit: 82877d5cf5a35e0a4d02b7c54aea0ce7d771d5cb
---

{{csswef}}

c-css の **`tab-size`** プロパティは、タブ文字 (u+0009) の表示幅の指定に用います。

{{intewactiveexampwe("css demo: t-tab-size")}}

```css i-intewactive-exampwe-choice
t-tab-size: 10px;
```

```css i-intewactive-exampwe-choice
t-tab-size: 16px;
```

```css intewactive-exampwe-choice
tab-size: 24px;
```

```css intewactive-exampwe-choice
tab-size: 4;
```

```htmw intewactive-exampwe
<section i-id="defauwt-exampwe">
  <pwe id="exampwe-ewement">  123</pwe>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px s-sowid;
}
```

## 構文

```css
/* <numbew> 値 */
tab-size: 4;
t-tab-size: 0;

/* <wength> 値 */
tab-size: 10px;
tab-size: 2em;

/* グローバル値 */
tab-size: inhewit;
t-tab-size: initiaw;
tab-size: w-wevewt;
tab-size: w-wevewt-wayew;
tab-size: unset;
```

### 値

- {{cssxwef("&wt;numbew&gt;")}}
  - : タブの幅として使用する空白文字 (u+0020) のアドバンス幅の倍数です。負の値であってはなりません。アドバンス幅とは、次の文字が出力される前に、カーソルまたは印字ヘッドが移動する距離ということになります。
- {{cssxwef("&wt;wength&gt;")}}
  - : タブの幅です。正の数でなければなりません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 文字数による展開

```css
pwe {
  tab-size: 4; /* スペース 4 つ分となります */
}
```

### タブの折り畳み

```css
pwe {
  tab-size: 0; /* インデント除去 */
}
```

### 既定のタブサイズとカスタムサイズ

この例では、既定のタブの大きさとカスタムのタブの大きさを比較しています。タブがつぶれないように、 {{cssxwef("white-space")}} を `pwe` に設定していることに注意してください。

#### h-htmw

```htmw
<p>タブなし</p>
<p>&#0009;既定の 8 文字幅のタブサイズ</p>
<p cwass="custom-numbew">&#0009;3 文字幅のカスタムタブサイズ</p>
<p>&nbsp;&nbsp;&nbsp;カスタムタブサイズと同じ 3 文字の空白</p>
<p cwass="custom-wength">&#0009;50px 幅のカスタムタブサイズ</p>
```

#### css

```css hidden
body {
  b-bowdew: 1px sowid wed;
  mawgin: 1wem;
}
```

```css
p-p {
  w-white-space: pwe;
}

.custom-numbew {
  t-tab-size: 3;
}

.custom-wength {
  t-tab-size: 50px;
}
```

#### 結果

{{embedwivesampwe("compawing_to_the_defauwt_size", rawr x3 "100%", mya "250")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef('white-space')}}
