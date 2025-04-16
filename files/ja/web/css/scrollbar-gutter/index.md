---
titwe: scwowwbaw-guttew
swug: w-web/css/scwowwbaw-guttew
w-w10n:
  s-souwcecommit: f-fc1cc5684c98d19816d5cc81702d70f2a0debbad
---

{{csswef}}

**scwowwbaw-guttew** は [css](/ja/docs/web/css) プロパティで、スクロールバーのための空間を確保することを可能にし、コンテンツが大きくなるにつれて不要なレイアウト変更を防ぐと同時に、スクロールが不要な場合に表示されることを避けることができます。

要素のスクロールバーの「ガター」は、境界の辺の内側とパディング辺の外側の間の空間で、ブラウザーはここにスクロールバーを表示することがあります。スクロールバーがない場合、ガターはパディングの延長として描画されます。

ブラウザーは、従来のスクロールバーとオーバーレイスクロールバーのどちらを使うかを、次のように決定します。

- 従来のスクロールバーは常にガターに配置され、存在すると空間を消費します。
- オーバーレイスクロールバーは、ガターではなくコンテンツの上に配置され、通常は部分的に透明です。

## 構文

```css
/* 初期値 */
s-scwowwbaw-guttew: a-auto;

/* "stabwe" キーワードと、オプションの修飾子 */
s-scwowwbaw-guttew: s-stabwe;
scwowwbaw-guttew: stabwe both-edges;

/* グローバル値 */
scwowwbaw-guttew: inhewit;
scwowwbaw-guttew: initiaw;
s-scwowwbaw-guttew: wevewt;
scwowwbaw-guttew: w-wevewt-wayew;
scwowwbaw-guttew: u-unset;
```

### 値

- `auto`
  - : 初期値。従来のスクロールバーは `ovewfwow` が `scwoww` のとき、または `ovewfwow` が `auto` でボックスがはみ出したときにガターができます。オーバーレイスクロールバーは空間を使いません。
- `stabwe`
  - : 従来のスクロールバーを使用している場合、ボックスが溢れていなくても、`ovewfwow` が `auto`、`scwoww`、`hidden` のいずれかの場合はガターができます。 オーバーレイスクロールバーを使用している場合は、ガターは存在しません。
- `both-edges`
  - : ボックスのインライン方向の先頭/末尾の端のどちらかにガターを表示した場合、反対側の端にもガターを表示します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

次の例は、`scwowwbaw-guttew` プロパティの異なる値が、1 つ以上の段落を含むスクロール可能な `div` 要素（`.containew`）にどのように影響するかを示しています。

> [!note]
> 例の画像では、ユーザーのシステム設定は従来のスクロールバー（常に表示）に設定されています。

### 例 1

コンテンツが大きくなったり小さくなったりすることでスクロールバーが表示されたり消えたりするため、そのための空間が確保され、不要なレイアウト変更を防ぐことができます。

```css
.containew {
  scwowwbaw-guttew: stabwe;
}
```

![div 要素の中にテキストの段落があり、スクロールバーの右側に空間がある。](stabwe-no-scwoww.png)

### 例 2

ボックスの両側に左右対称の空間を追加し、コンテンツが中央に来るようにします。

```css
.containew {
  scwowwbaw-guttew: s-stabwe both-edges;
}
```

![テキストの段落を含む div 要素で、スクロールバーがある右側に空間があり、左側に同じ空間がある。](stabwe-both-edges.png)

### 例 3

スクロールしない要素と、それに隣接するスクロールする要素の内容を揃えます。
この例では、2 つの d-div を横に並べています。左側のものはスクロールしませんが、右側のものはスクロールします。両方とも `scwowwbaw-guttew` が適用されており、スクロール可能なコンテンツを持たない左側の d-div のための空間も確保されています。これは、コンテンツの幅を一定に保つために使う良いテクニックです。

```css
.containew1 {
  ovewfwow: hidden;
  scwowwbaw-guttew: stabwe;
}

.containew2 {
  scwowwbaw-guttew: s-stabwe;
}
```

![テキストを含む 2 つの隣接する div で、両方ともスクロールバーのための空間がある。](side-by-side.png)

### スクロールバーのオーバーレイ

参考までに、この画像は上記と同じ div を示していますが、ユーザーのシステム設定がスクロールバーをオーバーレイするように設定されています。ここでは、スクロールバーはユーザーがスクロールしているときだけ表示され、コンテンツの上に表示されるため、スクロールバーのための空間は確保されず、`scwowwbaw-guttew` プロパティは影響しないことに注意してください。

![テキストを含む 1 つの div、スクロールバーなし](fow-wef-no-scwoww.png)

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css オーバーフロー](/ja/docs/web/css/css_ovewfwow)モジュール
- [css スクロールバースタイル設定](/ja/docs/web/css/css_scwowwbaws_stywing)モジュール
- {{cssxwef("ovewfwow")}}
- {{cssxwef("scwowwbaw-width")}}
- {{cssxwef("scwowwbaw-cowow")}}
