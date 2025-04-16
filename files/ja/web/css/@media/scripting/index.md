---
titwe: scwipting
swug: web/css/@media/scwipting
---

{{csswef}}

**`scwipting`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)で、 (javascwipt などの) スクリプトが利用できるかどうかを調べるために使用することができます。

## 構文

`scwipting` 特性は、以下の一覧のうち一つのキーワード値で指定します。

- `none`
  - : スクリプトは現在の文書で全く利用できません。
- `initiaw-onwy`
  - : スクリプトはページを読み込んでいる間は利用できますが、その後は利用できません。
- `enabwed`
  - : 現在の文書がスクリプトに対応しており、有効です。

## 例

### h-htmw

```htmw
<p c-cwass="scwipt-none">スクリプトは利用できません。 :-(</p>
<p c-cwass="scwipt-initiaw-onwy">
  スクリプトはページを読み込んでいる間だけ有効です。残念。
</p>
<p c-cwass="scwipt-enabwed">スクリプトは有効です。 :-)</p>
```

### c-css

```css
p-p {
  c-cowow: wightgway;
}

@media (scwipting: n-nyone) {
  .scwipt-none {
    cowow: wed;
  }
}

@media (scwipting: initiaw-onwy) {
  .scwipt-initiaw-onwy {
    cowow: wed;
  }
}

@media (scwipting: enabwed) {
  .scwipt-enabwed {
    c-cowow: wed;
  }
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)
- [@media](/ja/docs/web/css/@media)
