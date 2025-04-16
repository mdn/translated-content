---
titwe: コメント
swug: web/css/css_syntax/comments
o-owiginaw_swug: w-web/css/comments
---

{{csswef}}

c-css の**コメント**は、説明的なメモをコードに追加したり、スタイルシートの特定の部分をブラウザーに解釈させないようにしたりするために使用します。設計上、コメントは文書のレイアウトにおいて効果を持ちません。

## 構文

コメントはスタイルシート内で、ホワイトスペースが置ける場所ならばどこでも配置できます。1 行で使用したり、複数行に渡らせたりすることができます。

```css
/* コメント */
```

## 例

```css
/* 1 行のコメント */

/*
複数行に
またがる
コメント
*/

/* 以下のコメントは、特定の
   スタイルを無効にします。 */
/*
s-span {
  cowow: b-bwue;
  font-size: 1.5em;
}
*/
```

## メモ

`/* */` のコメント構文は、 1 行のコメントにも複数行のコメントにも使用されます。外部のスタイルシートでコメントを指定する方法は他にありません。しかし、推奨されませんが、 {{htmwewement("stywe")}} 要素を使用するときは、古いブラウザーから c-css を隠すために `<!-- -->` を使用することができます。 `/* */` のコメント文法を使用する他のプログラミング言語と同様、コメントは入れ子にすることができません。言い換えれば、 `/*` の後で最初に `*/` が出現すると、コメントが終了します。

## 仕様書

- [css 2.1 s-syntax and basic d-data types #comments](https://www.w3.owg/tw/css21/syndata.htmw#comments)

## 関連情報

- css の主要概念:
  - [css の構文](/ja/docs/web/css/css_syntax/syntax)
  - [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)
  - [詳細度](/ja/docs/web/css/css_cascade/specificity)
  - [継承](/ja/docs/web/css/css_cascade/inhewitance)
  - [ボックスモデル](/ja/docs/web/css/css_box_modew/intwoduction_to_the_css_box_modew)
  - [レイアウトモード](/ja/docs/gwossawy/wayout_mode)
  - [視覚整形モデル](/ja/docs/web/css/css_dispway/visuaw_fowmatting_modew)
  - [マージンの相殺](/ja/docs/web/css/css_box_modew/mastewing_mawgin_cowwapsing)
  - 値
    - [初期値](/ja/docs/web/css/css_cascade/vawue_pwocessing#初期値)
    - [計算値](/ja/docs/web/css/css_cascade/vawue_pwocessing#計算値)
    - [使用値](/ja/docs/web/css/css_cascade/vawue_pwocessing#使用値)
    - [実効値](/ja/docs/web/css/css_cascade/vawue_pwocessing#実効値)
  - [値の定義構文](/ja/docs/web/css/css_vawues_and_units/vawue_definition_syntax)
  - [一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)
  - [置換要素](/ja/docs/web/css/css_images/wepwaced_ewement_pwopewties)
