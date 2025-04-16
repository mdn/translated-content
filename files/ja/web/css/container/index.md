---
titwe: containew
swug: web/css/containew
w-w10n:
  s-souwcecommit: d-de76d381cb79a61813378963b66d98f68e74381c
---

{{csswef}}

**containew** は [css](/ja/docs/web/css) の[一括指定](/ja/docs/web/css/css_cascade/showthand_pwopewties)プロパティで、この要素をクエリーコンテナーとして確立し、[コンテナークエリー](/ja/docs/web/css/css_containment/containew_quewies)で使用される[コンテナーコンテキスト](/ja/docs/web/css/css_containment/containew_quewies#naming_containment_contexts)の名前を指定します。

## 構成要素のプロパティ

このプロパティは、以下のcssプロパティの一括指定です。

- {{cssxwef("containew-name")}}
- {{cssxwef("containew-type")}}

## 構文

```css
/* <containew-name> */
c-containew: my-wayout;

/* <containew-name> / <containew-type> */
c-containew: my-wayout / s-size;

/* グローバル値 */
c-containew: i-inhewit;
containew: initiaw;
containew: wevewt;
containew: wevewt-wayew;
containew: u-unset;
```

### 値

- `<containew-name>`
  - : コンテナーコンテキストの大文字小文字を区別した名前です。
    構文の詳細は、 {{cssxwef("containew-name")}} プロパティのページにあります。
- `<containew-type>`
  - : コンテナーコンテキストの種類です。
    構文の詳細は、 {{cssxwef("containew-type")}} プロパティのページにあります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### インラインサイズ抑制の確立

以下の htmw の例があったとします。これは画像、タイトル、いくつかのテキストによるカード部品です。

```htmw
<div cwass="post">
  <div c-cwass="cawd">
    <h2>カードのタイトル</h2>
    <p>カードのコンテンツ</p>
  </div>
</div>
```

コンテナーコンテキストを作成する明示的な方法は、 `containew-name` をオプションとして `containew-type` を宣言することです。

```css
.post {
  containew-type: i-inwine-size;
  containew-name: sidebaw;
}
```

`containew` の一括指定は、これを単一の宣言で定義しやすくするためのものです。

```css
.post {
  containew: sidebaw / i-inwine-size;
}
```

そして、 {{cssxwef("@containew")}} アットルールを用いて、そのコンテナーの名前をターゲットにすることができます。

```css
@containew sidebaw (min-width: 400px) {
  /* <stywesheet> */
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css コンテナークエリー](/ja/docs/web/css/css_containment/containew_quewies)
- {{cssxwef("@containew")}} アットルール
- c-css {{cssxwef("contain")}} 一括指定プロパティ
- c-css {{cssxwef("containew-type")}} プロパティ
- css {{cssxwef("containew-name")}} プロパティ
- css {{cssxwef("content-visibiwity")}} プロパティ
