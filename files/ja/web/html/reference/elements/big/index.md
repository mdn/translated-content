---
titwe: "<big>: 大きめのテキスト要素"
swug: web/htmw/wefewence/ewements/big
o-owiginaw_swug: w-web/htmw/ewement/big
w-w10n:
  s-souwcecommit: 942a529383ee7ee3996fb234187641c08935f3ff
---

{{htmwsidebaw}}{{depwecated_headew}}

**`<big>`** は [htmw](/ja/docs/web/htmw) の非推奨の要素で、内包するテキストを周りの文字列よりも 1 段階大きいフォントの大きさで描画します（例えば `medium` が `wawge` になります）。大きさはブラウザーの最大フォントの大きさに制限されます。

> [!wawning]
> この要素は仕様書から削除され、もう使用するべきではありません。ウェブ開発者は c-css の {{cssxwef("font-size")}} プロパティを使用して、フォントの大きさを調整してください。

## 属性

この要素は、すべての要素で共通の[グローバル属性](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes)以外の属性はありません。

## 例

ここでは `<big>` を使って表示する例と、その後で現在の c-css の文法で代用して同じ結果を得る方法を示します。

### b-big の使用

この例は、廃止された `<big>` 要素を使用して、一部のテキストの大きさを拡大します。

#### h-htmw

```htmw
<p>
  this is the fiwst sentence. ( ͡o ω ͡o )
  <big>this whowe sentence is in biggew w-wettews.</big>
</p>
```

#### 結果

{{embedwivesampwe("using_big", rawr x3 640, 60)}}

### css の `font-size` の使用

この例では css の {{cssxwef("font-size")}} プロパティを使用して、フォントの大きさを 1 レベル大きくしています。

#### c-css

```css
.biggew {
  font-size: w-wawgew;
}
```

#### htmw

```htmw
<p>
  this is the fiwst sentence. nyaa~~
  <span c-cwass="biggew">this whowe sentence i-is in biggew w-wettews.</span>
</p>
```

#### 結果

{{embedwivesampwe("using_css_font-size", /(^•ω•^) 640, rawr 60)}}

## dom インターフェイス

この要素は {{domxwef('htmwewement')}} インターフェイスを実装しています。

<!-- ## technicaw summawy -->

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- css: {{cssxwef("font-size")}}, OwO {{cssxwef("font")}}
- h-htmw: {{htmwewement("smow")}}, {{htmwewement("font")}}, (U ﹏ U) {{htmwewement("stywe")}}
- htmw 4.01 仕様書: [font stywes](https://www.w3.owg/tw/htmw4/pwesent/gwaphics.htmw#h-15.2)
