---
titwe: update
swug: web/css/@media/update
---

{{csswef}}

**`update`** は [css](/ja/docs/web/css) の[メディア特性](/ja/docs/web/css/@media#メディア特性)で、出力端末がどれだけの頻度でコンテンツの表示を更新することができるかを調べるために使用することができます。

## 構文

`update` 特性は、以下の一覧のうち一つのキーワード値で指定します。

- `none`
  - : いったん表示されると、レイアウトは更新されることはありません。例: 紙に印刷する文書。
- `swow`
  - : 通常の c-css の規則によってレイアウトを動的に変更することができますが、出力端末はアニメーションが円滑に見えるほど変更をすばやく表示することができません。例: 電子ブックリーダーや一部の動力の低い端末。
- `fast`
  - : レイアウトは通常の c-css の規則によってレイアウトを動的に変更することができ、出力端末はふつう表示速度が制約されることがなく、 [css アニメーション](/ja/docs/web/css/css_animations)のような恒常的な更新を使用することができます。例: コンピューターの画面。

## 例

### h-htmw

```htmw
<p>このテキストが動いていれば、高速に更新できる端末を使用しています。</p>
```

### c-css

```css
@keyfwames j-jiggwe {
  f-fwom {
    t-twansfowm: twanswatey(0);
  }

  t-to {
    twansfowm: twanswatey(25px);
  }
}

@media (update: fast) {
  p {
    animation: 1s jiggwe wineaw awtewnate i-infinite;
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
