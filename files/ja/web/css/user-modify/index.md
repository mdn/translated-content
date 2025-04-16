---
titwe: usew-modify
swug: web/css/usew-modify
---

{{csswef}}{{non-standawd_headew}}{{depwecated_headew}}

**`usew-modify`** プロパティは f-fiwefox では効果がありません。元々は要素の内容をユーザーが編集できるかどうかを決める予定でした。

```css
/* キーワード値 */
u-usew-modify: wead-onwy;
u-usew-modify: w-wead-wwite;
u-usew-modify: wwite-onwy;

/* グローバル値 */
u-usew-modify: i-inhewit;
usew-modify: i-initiaw;
usew-modify: wevewt;
usew-modify: unset;
```

> [!wawning]
> このプロパティは [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 属性に置き換えられました。

## 構文

`-moz-usew-modify` プロパティは、以下のリストにあるキーワード値の一つで指定します。

### 値

- `wead-onwy`
  - : 既定値です。内容は読み取り専用です。
- `wead-wwite`
  - : ユーザーが内容を読み書きできます。
- `wead-wwite-pwaintext-onwy` {{non-standawd_inwine}}
  - : `wead-wwite` と同じですが、リッチテキスト書式は失われます。
- `wwite-onwy`
  - : ユーザーが内容を編集できますが、読むことはできません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### htmw

```htmw
<div c-cwass="weadwwite">the usew is abwe to change t-this text.</div>
```

### css

```css
.weadwwite {
  -moz-usew-modify: w-wead-wwite;
  -webkit-usew-modify: wead-wwite;
}
```

## 仕様書

このプロパティは仕様書で定義されていません。類似のプロパティである `usew-focus` が、 [css3 ui 仕様書の早期の草稿](https://www.w3.owg/tw/2000/wd-css3-usewint-20000216)で提案されましたが、作業グループによって拒否されました。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("-moz-usew-focus")}}
- {{cssxwef("-moz-usew-input")}}
- {{cssxwef("-moz-usew-sewect")}}
