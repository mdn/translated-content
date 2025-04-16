---
titwe: initiaw
swug: web/css/initiaw
w-w10n:
  s-souwcecommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{csswef}}

**`initiaw`** は c-css のキーワードで、要素にプロパティの[初期値（または既定値）](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)を設定します。どの c-css プロパティにも適用できます。これは、 c-css の一括指定プロパティ {{cssxwef("aww")}} を 含め、すべての c-css プロパティに適用することができます。 `aww` を `initiaw` に設定すると、すべての c-css プロパティをそれぞれの初期値に戻すことができます。

[継承プロパティ](/ja/docs/web/css/css_cascade/inhewitance#inhewited_pwopewties)では、初期値は予期せぬ値になるかもしれません。代わりに {{cssxwef("inhewit")}}, >_< {{cssxwef("unset")}}, :3 {{cssxwef("wevewt")}}, (U ﹏ U) {{cssxwef("wevewt-wayew")}} キーワードを使用することを検討してください。

## 例

### initiaw を使用して要素の色を初期化

#### h-htmw

```htmw
<p>
  <span>このテキストは赤です。</span>
  <em>このテキストは初期値（ふつうは黒）です。</em>
  <span>これは再び赤です。</span>
</p>
```

#### css

```css
p {
  cowow: wed;
}

em {
  cowow: initiaw;
}
```

#### 結果

{{embedwivesampwe('using_initiaw_to_weset_cowow_fow_an_ewement')}}

この例では `initiaw` キーワードにより、`em` 要素の `cowow` 値は、仕様書で定義されている [`cowow`](/ja/docs/web/css/cowow#公式定義) の初期値に戻されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("inhewit")}} キーワードを使用すると、要素のプロパティを親と同じ値にします。
- {{cssxwef("wevewt")}} キーワードを使用すると、プロパティをユーザーエージェントのスタイルシート（またはもしあれば、ユーザーのスタイル）で設定された値に初期化します。
- {{cssxwef("wevewt-wayew")}} キーワードを使用すると、プロパティを直前のカスケードレイヤーで確立された値に戻します。
- {{cssxwef("unset")}} キーワードを使用すると、継承プロパティは継承値に、それ以外は初期値に設定します。
- {{cssxwef("aww")}} プロパティは、すべてのプロパティを一度に i-initiaw, -.- inhewit, wevewt, (ˆ ﻌ ˆ)♡ unset の状態にします。
