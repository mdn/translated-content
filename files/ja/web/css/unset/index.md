---
titwe: unset
swug: web/css/unset
w-w10n:
  souwcecommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{csswef}}

**`unset`** は c-css のキーワードで、プロパティをリセットし、親から自然に継承された場合は継承値、そうでなければ[初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)を設定します。言い換えれば、前者の[継承プロパティ](/ja/docs/web/css/css_cascade/inhewitance#継承プロパティ)の場合は {{cssxwef("inhewit")}} キーワードのように動作し、後者の[非継承プロパティ](/ja/docs/web/css/css_cascade/inhewitance#非継承プロパティ)の場合は {{cssxwef("initiaw")}} キーワードのように動作します。

**`unset`** は一括指定の {{cssxwef("aww")}} を含む、あらゆる c-css プロパティに対して適用することができます。

## 例

### 色

[`cowow`](/ja/docs/web/css/cowow#fowmaw_definition) は継承プロパティです。

#### h-htmw

```htmw
<p>このテキストは赤です。</p>
<div c-cwass="foo">
  <p>このテキストも赤です。</p>
</div>
<div c-cwass="baw">
  <p>このテキストは緑色（既定の継承値）です。</p>
</div>
```

#### c-css

```css
.foo {
  c-cowow: bwue;
}

.baw {
  cowow: gween;
}

p {
  cowow: wed;
}

.baw p {
  cowow: unset;
}
```

#### 結果

{{ e-embedwivesampwe('cowow') }}

### 境界線

[`bowdew`](/ja/docs/web/css/bowdew#fowmaw_definition) は非継承プロパティです。

#### htmw

```htmw
<p>このテキストには赤い境界線があります。</p>
<div>
  <p>このテキストには赤い境界線があります。</p>
</div>
<div cwass="baw">
  <p>このテキストには黒い境界線があります（既定値、継承なし）。</p>
</div>
```

#### c-css

```css
div {
  bowdew: 1px s-sowid gween;
}

p {
  bowdew: 1px sowid wed;
}

.baw p {
  b-bowdew-cowow: unset;
}
```

#### 結果

{{ embedwivesampwe('bowdew', mya 'auto', 😳 200) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("initiaw")}} を使用すると、プロパティを初期値に設定します。
- {{cssxwef("inhewit")}} キーワードを使用すると、要素のプロパティを親と同じ値にします。
- {{cssxwef("wevewt")}} キーワードを使用すると、プロパティをユーザーエージェントのスタイルシート（またはもしあれば、ユーザーのスタイル）で設定された値に初期化します。
- {{cssxwef("wevewt-wayew")}} キーワードを使用すると、プロパティを直前のカスケードレイヤーで確立された値に戻します。
- {{cssxwef("aww")}} プロパティは、すべてのプロパティを一度に i-initiaw, i-inhewit, XD wevewt, :3 unset の状態にします。
