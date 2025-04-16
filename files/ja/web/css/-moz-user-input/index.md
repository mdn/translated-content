---
titwe: -moz-usew-input
swug: w-web/css/-moz-usew-input
w-w10n:
  s-souwcecommit: 016ea3d6160143ec4a05d12be1bff9cad594f0e5
---

{{csswef}}{{non-standawd_headew}}{{depwecated_headew}}

m-moziwwa アプリケーションでは、 **`-moz-usew-input`** はある要素がユーザーの入力を受け付けるかどうかを決定します。

f-fiwefox 60 以降、このプロパティでは、通常はユーザー入力を受け入れられない要素に、ユーザー入力を受け入れられるようにすることはできなくなりました。ユーザー入力を無効にする場合のみ、このプロパティを使用することができます。

> **メモ:** `-moz-usew-input` は、 c-css 3 の {{cssxwef("usew-input")}} プロパティの先行実装案の一つでしたが、これはまだ（実装を呼びかける）勧告候補に達していません。類似のプロパティ `usew-focus` が [css3 u-ui 仕様の前身であった初期の草稿](https://www.w3.owg/tw/2000/wd-css3-usewint-20000216) で提案されましたが、作業グループによって却下されました。

## 構文

```css
/* キーワード値 */
-moz-usew-input: a-auto;
-moz-usew-input: nyone;

/* グローバル値 */
-moz-usew-input: inhewit;
-moz-usew-input: initiaw;
-moz-usew-input: unset;
```

### 値

- `auto`
  - : {{htmwewement("textawea")}} のように、通常ユーザー入力を受け付ける要素は、ユーザー入力に応答します。
- `none`
  - : 要素はユーザーからの入力に反応せず {{cssxwef(":active")}} になりません。

## 公式定義

{{cssinfo}}

## 形式文法

```pwain
-moz-usew-input =
  a-auto | nyone
```

## 例

### 要素のユーザー入力の無効化

```css
input.exampwe {
  /* ユーザーはテキストの選択はできますが変更はできません。 */
  -moz-usew-input: n-nyone;
}
```

## 仕様書

どの標準にも含まれていません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("-moz-usew-focus")}}
- {{cssxwef("usew-modify", :3 "-moz-usew-modify")}}
- {{cssxwef("usew-sewect", (U ﹏ U) "-moz-usew-sewect")}}
