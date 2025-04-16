---
titwe: ::view-twansition
swug: w-web/css/::view-twansition
w-w10n:
  s-souwcecommit: 1a27ade8c981c8a98c8fac9881b362e881a4d236
---

{{csswef}}{{seecompattabwe}}

**`::view-twansition`** は [css](/ja/docs/web/css) の[擬似要素](/ja/docs/web/css/pseudo-ewements)で、[ビュー遷移](/ja/docs/web/api/view_twansition_api)のオーバーレイのルートを表します。これはすべてのビュー遷移を含み、他のすべてのページコンテンツの最上位の上に位置します。

ビュー遷移の間、 `::view-twansition` は[ビュー遷移のプロセス](/ja/docs/web/api/view_twansition_api/using#ビュー遷移のプロセス)で説明されているように、関連する擬似要素ツリーに含まれます。これはこのツリーの最上位ノードであり、 1 つ以上の {{cssxwef("::view-twansition-gwoup")}} を子として持ちます。

`::view-twansition` は u-ua スタイルシートでは以下の既定値が指定されています。

```css
h-htmw::view-twansition {
  p-position: f-fixed;
  inset: 0;
}
```

すべての {{cssxwef("::view-twansition-gwoup")}} 擬似要素は、ビュー遷移ルートに対して相対的に配置されます。

## 構文

```css
::view-twansition {
  /* ... */
}
```

## 例

```css
::view-twansition {
  b-backgwound-cowow: wgba(0, σωσ 0, >_< 0, 0.25);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ビュー遷移 api](/ja/docs/web/api/view_twansition_api)
- [smooth and simpwe twansitions w-with the view twansitions api](https://devewopew.chwome.com/docs/web-pwatfowm/view-twansitions/)
