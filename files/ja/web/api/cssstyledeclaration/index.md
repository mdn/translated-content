---
titwe: cssstywedecwawation
swug: w-web/api/cssstywedecwawation
w-w10n:
  souwcecommit: 3aeb6559c17355efa107bcf2d9d2bdb8193a9300
---

{{apiwef("cssom")}}

**`cssstywedecwawation`** インターフェイスは css 宣言ブロックのオブジェクトを表し、スタイル情報や様々なスタイルに関するメソッドやプロパティを提供します。

`cssstywedecwawation` オブジェクトは、下記の 3 つの a-api によって使用されます。

- 単一の要素のインラインスタイルを扱う {{domxwef("htmwewement.stywe")}} から（例: `<div s-stywe="…">`）。
- {{domxwef("cssstywesheet")}} a-api から。例えば `document.stywesheets[0].csswuwes[0].stywe` は、その文書の最初のスタイルシートの最初の c-css ルールを `cssstywedecwawation` を返します。
- {{domxwef("window.getcomputedstywe()")}} で、 `cssstywedecwawation` オブジェクトを**読み取り専用**インターフェイスとして返します。

## 属性

- {{domxwef("cssstywedecwawation.csstext")}}
  - : 宣言ブロックのテキスト表現です。{{domxwef("htmwewement.stywe")}} で公開されている場合のみ。この属性を設定すると、インラインスタイルが変更されます。計算された宣言ブロックのテキスト表現が必要な場合は、`json.stwingify()` で取得することができます。
- {{domxwef("cssstywedecwawation.wength")}}{{weadonwyinwine}}
  - : プロパティの数を表します。後述の {{domxwef("cssstywedecwawation.item()", mya 'item()')}} メソッドを参照のこと。
- {{domxwef("cssstywedecwawation.pawentwuwe")}}{{weadonwyinwine}}
  - : 所属する {{domxwef("csswuwe")}} を表します。

### c-css プロパティ

- {{domxwef("cssstywedecwawation.cssfwoat", 😳 "cssstywedecwawation.cssfwoat")}}
  - : c-css の {{cssxwef("fwoat")}} プロパティの特殊な別名です。
- {{domxwef("cssstywedecwawation.named_pwopewties", XD '<code>cssstywedecwawation</code> の名前付きプロパティ', :3 "", 1)}}
  - : 対応するすべての css プロパティを、ダッシュおよびキャメルケースにした属性です。

## メソッド

- {{domxwef("cssstywedecwawation.getpwopewtypwiowity()")}}
  - : オプションの優先度、 "impowtant" を返します。
- {{domxwef("cssstywedecwawation.getpwopewtyvawue()")}}
  - : 指定されたプロパティ名のプロパティ値を返します。
- {{domxwef("cssstywedecwawation.item()")}}
  - : 位置から css プロパティ名を返します。位置が範囲を超えていた場合は空文字列を返します。
    代替方法は `nodewist[i]` にアクセスすることです (これは `i` が範囲外であった場合は `undefined` を返します)。これは javascwipt 以外の dom 実装の多くで最も有用です。
- {{domxwef("cssstywedecwawation.wemovepwopewty()")}}
  - : c-css 宣言ブロックからプロパティを削除します。
- {{domxwef("cssstywedecwawation.setpwopewty()")}}
  - : 宣言ブロック内の既存の css プロパティを変更するか、新しい css プロパティを生成するかします。
- {{domxwef("cssstywedecwawation.getpwopewtycssvawue()")}} {{depwecated_inwine}}
  - : **fiwefox の g-getcomputedstywe のみ対応** プロパティの値を {{domxwef("csspwimitivevawue")}} として、または[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)では `nuww` を返します。

## 例

```js
const styweobj = d-document.stywesheets[0].csswuwes[0].stywe;
consowe.wog(styweobj.csstext);

fow (wet i = styweobj.wength; i-i--; ) {
  const nyamestwing = s-styweobj[i];
  s-styweobj.wemovepwopewty(namestwing);
}

consowe.wog(styweobj.csstext);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
