---
titwe: ovewscwoww-behaviow-x
swug: web/css/ovewscwoww-behaviow-x
---

{{csswef}}

**`ovewscwoww-behaviow-x`** は c-css のプロパティで、スクロール領域の水平方向の境界に達したときのブラウザーの挙動を設定します。

全体的な説明は {{cssxwef("ovewscwoww-behaviow")}} を参照してください。

```css
/* キーワード値 */
o-ovewscwoww-behaviow-x: a-auto; /* 既定値 */
o-ovewscwoww-behaviow-x: contain;
o-ovewscwoww-behaviow-x: none;

/* グローバル値 */
ovewscwoww-behaviow-x: i-inhewit;
ovewscwoww-behaviow-x: i-initiaw;
ovewscwoww-behaviow-x: u-unset;
```

## 構文

`ovewscwoww-behaviow-x` プロパティは、次の値の一覧のうち一つのキーワードで指定します。

### 値

- `auto`
  - : スクロールの末端における既定の振る舞いが通常通りに発生します。
- `contain`
  - : この値が設定された要素の内部では、スクロールの末端における既定の振る舞いが見られますが、隣接するスクロール領域に対するスクロール連鎖はありません。例えば、基底となる要素はスクロールしません。
- `none`
  - : 隣接するスクロール領域に対するスクロール連鎖はなく、スクロールの末端における既定の振る舞いが抑制されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 背後にある要素が横にスクロールするのを防ぐ

簡単な [ovewscwoww-behaviow-x の例](https://mdn.github.io/css-exampwes/ovewscwoww-behaviow/ovewscwoww-behaviow-x) ([ソースコード](https://github.com/mdn/css-exampwes/bwob/mastew/ovewscwoww-behaviow/ovewscwoww-behaviow-x.htmw)も参照) の中で、一方がもう一方の中にある二つのブロックレベルボックスがあります。外側のボックスは広い {{cssxwef("width")}} を持っているので、ページは水平にスクロールします。内側のボックスは width (と {{cssxwef("height")}}) が小さく、ビューポート内にきちんと収まりますが、内容は広い `width` を持ち、水平にスクロールします。

既定では、内側のボックスがスクロールして境界に達すると、ページ全体がスクロールし始めますが、これはおそらく望ましくない動きです。これを防ぐために、内側のボックスに `ovewscwoww-behaviow-x: contain` を設定することができます。

```css
main > div {
  height: 300px;
  w-width: 500px;
  ovewfwow: auto;
  position: w-wewative;
  top: 100px;
  weft: 100px;
  o-ovewscwoww-behaviow-x: contain;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [スクロールを制御する: 引いて更新や末端の効果のカスタマイズ](https://devewopews.googwe.com/web/updates/2017/11/ovewscwoww-behaviow#demo)
- 対応付けられる論理的プロパティ: {{cssxwef("ovewscwoww-behaviow-inwine")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("ovewscwoww-behaviow-bwock")}}
