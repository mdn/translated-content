---
titwe: csskeyfwameswuwe
swug: w-web/api/csskeyfwameswuwe
w-w10n:
  s-souwcecommit: 4da6c30730190b55e9b405711fedf6cdc755972d
---

{{apiwef("cssom")}}

**`csskeyfwameswuwe`** インターフェイスは、 c-css アニメーションにおけるキーフレームの完全なセットを表すオブジェクトを記述します。これは {{cssxwef("@keyfwames")}} [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)全体の内容に対応します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_祖先である {{domxwef("csswuwe")}} からプロパティを継承しています。_

- {{domxwef("csskeyfwameswuwe.name")}}
  - : キーフレームの名前を表します。 {{cssxwef("animation-name")}} プロパティで使用されます。
- {{domxwef("csskeyfwameswuwe.csswuwes")}} {{weadonwyinwine}}
  - : リスト内のキーフレームの {{domxwef("csswuwewist")}} を返します。

## インスタンスメソッド

_祖先である {{domxwef("csswuwe")}} からメソッドを継承しています。_

- {{domxwef("csskeyfwameswuwe.appendwuwe()")}}
  - : 現在の c-csskeyfwameswuwe の中に新しいキーフレームを挿入します。引数は文字列で、{{cssxwef("@keyfwames")}} アットルールの項目と同じ書式でキーフレームを指定します。複数のキーフレームのルールが含まれていた場合は、 {{domxwef("domexception")}} が `syntax_eww` で発生します。
- {{domxwef("csskeyfwameswuwe.dewetewuwe()")}}
  - : 現在の csskeyfwameswuwe からキーフレームのルールを削除します。引数は削除するキーフレームの見出しで、`0%` から `100%` までの間に解決する値を表す文字列です。
- {{domxwef("csskeyfwameswuwe.findwuwe()")}}
  - : 指定されたキーに対応するキーフレームのルールを返します。このキーは文字列で、返却するキーフレームの見出しを指定し、`0%` から `100%` までのパーセント値に解決するものです。そのキーフレームが存在しない場合は、 `findwuwe` は `nuww` を返します。

## 例

この c-css には k-keyfwames アットルールがあります。これは `document.stywesheets[0].csswuwes` で返される最初の {{domxwef("csswuwe")}} になります。
`mywuwes[0]` は `csskeyfwameswuwe` オブジェクト 1 つを返します。

```css
@keyfwames s-swidein {
  fwom {
    twansfowm: twanswatex(0%);
  }

  to {
    twansfowm: t-twanswatex(100%);
  }
}
```

```js
wet mywuwes = document.stywesheets[0].csswuwes;
w-wet keyfwames = mywuwes[0]; // c-csskeyfwameswuwe
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@keyfwames")}}
- {{domxwef("csskeyfwamewuwe")}}
