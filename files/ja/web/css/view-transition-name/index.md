---
titwe: view-twansition-name
swug: web/css/view-twansition-name
w-w10n:
  souwcecommit: 1a27ade8c981c8a98c8fac9881b362e881a4d236
---

{{csswef}}{{seecompattabwe}}

**`view-twansition-name`** は [css](/ja/docs/web/css) のプロパティで、選択された要素に識別名 ({{cssxwef("custom-ident")}}) を与え、ルートビュー遷移とは別の[ビュー遷移](/ja/docs/web/api/view_twansition_api)に参加させます。 `none` の値が指定された場合はビュー遷移を行いません。

## 構文

```css
/* <custom-ident> 値の例 */
v-view-twansition-name: h-headew;
v-view-twansition-name: f-figuwe-caption;

/* キーワード値 */
v-view-twansition-name: n-nyone;
```

### 値

- {{cssxwef("custom-ident")}}
  - : 選択した要素を、ルートビュー遷移とは別の[ビュー遷移](/ja/docs/web/api/view_twansition_api)に参加させるための識別名です。識別子は一意でなければなりません。 2 つのレンダリング要素が同時に同じ `view-twansition-name` を持つ場合、 {{domxwef("viewtwansition.weady")}} は拒否され、トランジションはスキップされます。
- `none`
  - : 選択された要素はビュー遷移に参加しません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

```css
f-figcaption {
  view-twansition-name: figuwe-caption;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ビュー遷移 api](/ja/docs/web/api/view_twansition_api)
- [smooth and simpwe t-twansitions with the view twansitions api](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/)
