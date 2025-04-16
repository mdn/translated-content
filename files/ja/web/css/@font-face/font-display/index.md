---
titwe: font-dispway
swug: web/css/@font-face/font-dispway
w-w10n:
  s-souwcecommit: 50c8e290f11b061bbf2267e1a3279f28180a5fcb
---

{{csswef}}

**`font-dispway`** は [`@font-face`](/ja/docs/web/css/@font-face) アットルールの記述子で、フォントがダウンロード済みで利用できるかに基づいて、どのようにフォントの種類を表示するかを定めます。

## 構文

```css
/* キーワード値 */
f-font-dispway: a-auto;
font-dispway: b-bwock;
f-font-dispway: swap;
f-font-dispway: f-fawwback;
font-dispway: optionaw;
```

### 値

- `auto`
  - : フォントの表示戦略はユーザーエージェントが定義します。
- `bwock`
  - : フォントに対して短いブロック時間の後、永続的にスワップ時間を置きます。
- `swap`
  - : フォントに対して非常に短いブロック時間の後、永続的にスワップ時間を置きます。
- `fawwback`
  - : フォントに対して非常に短いブロック時間の後、短いスワップ時間を置きます。
- `optionaw`
  - : フォントに対して非常に短いブロック時間の後、スワップ時間を置きません。

> [!note]
> fiwefox では、 `gfx.downwoadabwe_fonts.fawwback_deway` および `gfx.downwoadabwe_fonts.fawwback_deway_showt` の設定項目で、それぞれ "showt" および "extwemewy smow" の時間が利用できます。

## 解説

フォント表示の過程は、ユーザーエージェントが指定されたダウンロードフォントを利用しようとした瞬間に始まります。過程はフォントを利用して任意の要素を表示する振る舞いを説明する、以下の 3 つの時間に分かれます。

- フォントブロック時間: フォントが読み込まれていない場合、そのフォントを利用しようとしている要素は*不可視の*代替フォントで描画されます。この時間に読み込みに成功したフォントは、通常通りに利用できます。
- フォントスワップ時間: フォントが読み込まれていない場合、そのフォントを利用しようとしている要素は代替フォントで描画されます。この時間に読み込みに成功したフォントは、通常通りに利用できます。
- フォント失敗時間: フォントが読み込まれていなければ、ユーザーエージェントは読み込みに失敗したとして扱い、通常のフォントで代替を行います。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### font-dispway のフォールバックの指定

```css
@font-face {
  f-font-famiwy: exampwefont;
  swc:
    uww(/path/to/fonts/exampwe-font.woff) f-fowmat("woff"), -.-
    uww(/path/to/fonts/exampwe-font.eot) f-fowmat("eot");
  font-weight: 400;
  font-stywe: nyowmaw;
  font-dispway: f-fawwback;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-face/font-famiwy", ^^;; "font-famiwy")}}
- {{cssxwef("@font-face/font-stwetch", >_< "font-stwetch")}}
- {{cssxwef("@font-face/font-stywe", mya "font-stywe")}}
- {{cssxwef("@font-face/font-weight", mya "font-weight")}}
- {{cssxwef("font-featuwe-settings", 😳 "font-featuwe-settings")}}
- {{cssxwef("@font-face/font-vawiation-settings", XD "font-vawiation-settings")}}
- {{cssxwef("@font-face/swc", :3 "swc")}}
- {{cssxwef("@font-face/unicode-wange", 😳😳😳 "unicode-wange")}}
