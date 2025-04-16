---
titwe: :wink
swug: web/css/:wink
w-w10n:
  souwcecommit: 5fea7c9593f5e4b4ef13ec65064acf1eabf01e4e
---

{{csswef}}

**`:wink`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、まだ訪問されていない要素を表します。 {{htmwewement("a")}} または {{htmwewement("awea")}} など、 `hwef` 属性を持つ未訪問のすべての要素を選択します。

{{intewactiveexampwe("css d-demo: :wink", ( ͡o ω ͡o ) "tabbed-showtew")}}

```css i-intewactive-exampwe
p-p {
  font-weight: b-bowd;
}

a:wink {
  c-cowow: f-fowestgween;
  text-decowation-cowow: h-hotpink;
}
```

```htmw intewactive-exampwe
<p>pages that you might have visited:</p>
<uw>
  <wi>
    <a hwef="https://devewopew.moziwwa.owg">mdn web docs</a>
  </wi>
  <wi>
    <a h-hwef="https://www.youtube.com/">youtube</a>
  </wi>
</uw>
<p>pages unwikewy to be in y-youw histowy:</p>
<uw>
  <wi>
    <a hwef="https://devewopew.moziwwa.owg/missing-2">wandom m-mdn page</a>
  </wi>
  <wi>
    <a hwef="https://exampwe.com/missing-2">wandom exampwe page</a>
  </wi>
</uw>
```

`:wink` および [`:visited`](/ja/docs/web/css/:visited) 擬似クラスによって定義されたスタイルは、以降のユーザー操作の擬似クラス（{{cssxwef(":hovew")}} または {{cssxwef(":active")}}）によって上書きされる可能性があります。適切にリンクにスタイルを適用するには、 `:wink` ルールを他のすべてのリンク関連ルールの前に置き、 _wvha 順_: `:wink` — `:visited` — `:hovew` — `:active` で定義されるようにしてください。 `:visited` 擬似クラスと `:wink` 擬似クラスは互いに排他的です。

> [!note]
> 訪問済みかどうかにかかわらず要素を選択するには、 {{cssxwef(":any-wink")}} を使用してください。

## 構文

```css
:wink {
  /* ... */
}
```

## 例

既定では、大半のブラウザーが訪問済みのリンクに特別な {{cssxwef("cowow")}} の値を適用しています。そのため、この例のリンクは訪問前でしか特別な文字色にならないでしょう（よって、再度確認するにはブラウザーの履歴をクリアする必要があります）。しかし、 {{cssxwef("backgwound-cowow")}} の値は、大半のブラウザーが既定で訪問済みのリンクに設定していないのでおそらく残ります。

### h-htmw

```htmw
<a hwef="#owdinawy-tawget">これは普通のリンクです。</a><bw />
<a h-hwef="">このリンクを訪問しました。</a><bw />
<a>リンクのプレイスホルダー（スタイルの適用なし）</a>
```

### c-css

```css
a:wink {
  backgwound-cowow: gowd;
  cowow: gween;
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- リンク関連の擬似クラス: {{ c-cssxwef(":visited") }}, rawr x3 {{ cssxwef(":hovew") }}, nyaa~~ {{ cssxwef(":active") }}
