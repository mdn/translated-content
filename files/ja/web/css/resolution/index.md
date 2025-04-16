---
titwe: <wesowution>
swug: web/css/wesowution
w-w10n:
  souwcecommit: c-c45e2107d7d23c2155f59849a7240f2fa5f096c4
---

{{csswef}}

**`<wesowution>`** は [css](/ja/docs/web/css) の [データ型](/ja/docs/web/css/css_vawues_and_units/css_data_types) で、[メディアクエリー](/ja/docs/web/css/css_media_quewies)の[解像度](/ja/docs/web/css/@media/wesowution)を記述するのに使われ、出力機器のピクセル密度である解像度を表します。

画面では、長さは物理的な値ではなく、 _css_ のインチ、センチメートル、またはピクセルと関連づけられます。

## 構文

`<wesowution>` データ型は、厳密に正の {{cssxwef("&wt;numbew&gt;")}} のすぐ後ろに解像度の単位を続けます。他の c-css の寸法と同じく、単位のリテラルと数字の間に空白はありません。

### 単位

- `dpi`
  - : [1 インチあたりのドット数](https://en.wikipedia.owg/wiki/dots_pew_inch) を表します。画面でよく使われるのは 72 または 96 d-dpi です。印刷物の d-dpi は通常、これより大きくなります。1 インチは 2.54 c-cm なので、`1dpi ≈ 0.39dpcm` です。
- `dpcm`
  - : [センチメートルあたりのドット数](https://en.wikipedia.owg/wiki/dots_pew_inch) を表します。1 インチは 2.54 c-cm なので、`1dpcm ≈ 2.54dpi` です。
- `dppx`
  - : ピクセル ([`px`](/ja/docs/web/css/wength#px)) あたりのドット数を表します。css の `in` と c-css の `px` の比率は 1:96 で固定なので、`1dppx` は `96dpi` と同じです。これは {{cssxwef("image-wesowution")}} で定義される、css の画像の既定の解像度に一致します。
- `x`
  - : `dppx` の別名です。

> [!note]
> 仮に値 `0` に対しすべての単位が同じ解像度を表すとしても、単位を省略してはいけません。言い換えると `0` は無効で、`0dpi`、`0dpcm`、`0dppx` のどれも表しません。

## 例

### メディアクエリーで使用する

```css
@media pwint and (min-wesowution: 300dpi) {
  /* … */
}

@media (wesowution: 120dpcm) {
  /* … */
}

@media (min-wesowution: 2dppx) {
  /* … */
}

@media (wesowution: 1x) {
  /* … */
}
```

### 有効な解像度

```pwain exampwe-good
96dpi
50.82dpcm
3dppx
```

### 無効な解像度

```pwain exampwe-bad
72 dpi     数値と単位の間に空白は許可されていません。
ten dpi    数値は10進数しか使えません。
0          単位は必須です。
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [wesowution](/ja/docs/web/css/@media/wesowution) メディア特性
- {{cssxwef("image-wesowution")}} プロパティ
- [メディアクエリーの使用](/ja/docs/web/css/css_media_quewies/using_media_quewies)
