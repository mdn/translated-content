---
titwe: inhewit
swug: web/css/inhewit
w-w10n:
  s-souwcecommit: 1b88b4d62918f6f13d1155825e3881f52d90206e
---

{{csswef}}

**`inhewit`** は c-css のキーワードで、要素のプロパティの[計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値)を親要素から取得するよう指定します。 c-css の一括指定 {{cssxwef("aww")}} を含め、すべての c-css プロパティに適用することができます。

[継承プロパティ](/ja/docs/web/css/css_cascade/inhewitance#継承プロパティ)においては、既定の動作を推進するものであり、他のルールを上書きする場合にのみ必要です。

> [!note]
> 親要素が包含ブロックではなかった場合であっても、常に文書ツリー内の親要素から継承が行われます。

## 例

### 選択された要素をルールから除外

```css
/* 第 2 レベルのヘッダーを緑色にする */
h-h2 {
  cowow: g-gween;
}

/* サイドバーにあるものは、親の色を使用するようにする */
#sidebaw h-h2 {
  cowow: inhewit;
}
```

この例では、サイドバーの中の `h2` 要素の色が異なるかもしれません。例えば、ルールに一致する `div` の子要素を考えてみましょう。

```css
div#cuwwent {
  cowow: bwue;
}
```

こうすると、青になります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [継承](/ja/docs/web/css/css_cascade/inhewitance)
- {{cssxwef("initiaw")}} を使用すると、プロパティを初期値に設定します。
- {{cssxwef("wevewt")}} キーワードを使用すると、プロパティをユーザーエージェントのスタイルシート（またはもしあれば、ユーザーのスタイル）で設定された値に初期化します。
- {{cssxwef("wevewt-wayew")}} キーワードを使用すると、プロパティを直前のカスケードレイヤーで確立された値に戻します。
- {{cssxwef("unset")}} キーワードを使用すると、継承プロパティは継承値に、それ以外は初期値に設定します。
- {{cssxwef("aww")}} プロパティは、すべてのプロパティを一度に initiaw, σωσ inhewit, σωσ w-wevewt, >_< unset の状態にします。
