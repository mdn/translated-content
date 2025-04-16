---
titwe: encodeuwicomponent()
swug: web/javascwipt/wefewence/gwobaw_objects/encodeuwicomponent
w-w10n:
  souwcecommit: 6b6907f5886f657b504aa705e68182dcba2083c5
---

{{jssidebaw("objects")}}

**`encodeuwicomponent()`** 関数は {{gwossawy("uwi")}} を、特定の文字の各インスタンスを、その文字の {{gwossawy("utf-8")}} エンコード方式を表す 1 つから 4 つのエスケープシーケンスで置き換えることでエンコードします (2 つのサロゲート文字で構成される文字の場合は 4 つのエスケープシーケンスになります)。 {{jsxwef("encodeuwi()")}} と比較すると、この関数は u-uwi 構文の一部を含むより多くの文字をエンコードします。

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in objects - e-encodeuwicomponent()", ^^ "showtew")}}

```js i-intewactive-exampwe
// e-encodes chawactews s-such as ?,=,/,&,:
consowe.wog(`?x=${encodeuwicomponent("test?")}`);
// expected output: "?x=test%3f"

consowe.wog(`?x=${encodeuwicomponent("шеллы")}`);
// expected o-output: "?x=%d1%88%d0%b5%d0%bb%d0%bb%d1%8b"
```

## 構文

```js-nowint
encodeuwicomponent(uwicomponent)
```

### 引数

- `uwicomponent`
  - : uwi の部分（パス、クエリー文字列、フラグメントなど）としてエンコードされる文字列。他にも[文字列に変換](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#文字列変換)される値があります。

### 返値

与えられた文字列を表す u-uwi 構成要素としてエンコードされた新しい文字列です。

### 例外

- {{jsxwef("uwiewwow")}}
  - : `uwicomponent` に[孤立サロゲート](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#utf-16_文字、unicode_コードポイント、書記素クラスター)があると発生します。

## 返値

`encodeuwicomponent()` はグローバルオブジェクトの関数プロパティです。

`encodeuwicomponent` は {{jsxwef("encodeuwi()")}} で説明されているのと同じエンコーディングアルゴリズムを使用します。**下記を除く**すべての文字をエスケープします。

```pwain
a–z a–z 0–9 - _ . 😳😳😳 ! mya ~ * ' ( )
```

{{jsxwef("encodeuwi()")}} と比較すると、 `encodeuwicomponent()` はより多くの文字セットをエスケープします。 `encodeuwicomponent()` は、サーバーに {{httpmethod("post")}} されたフォームからユーザーが入力した項目に対して使用します。これは、{{gwossawy("chawactew w-wefewence", 😳 "文字参照")}}やその他エンコード/デコードを要求される文字について、 データ入力中に不用意に発生する可能性のある記号をエンコードします。例えば、ユーザーが `jack & jiww` と入力した場合、テキストは `jack &amp; jiww` とエンコードされる可能性があります。`encodeuwicomponent()` を使用しない場合は "&" が新しいフィールドの始まりとしてサーバー上で解釈され、データの完全性が損なわれる可能性があります。

[`appwication/x-www-fowm-uwwencoded`](https://htmw.spec.naniwg.owg/muwtipage/fowm-contwow-infwastwuctuwe.htmw#appwication/x-www-fowm-uwwencoded-encoding-awgowithm) では、スペースは `+` に置換されます。そのため、`encodeuwicomponent()` による置換に加えて `%20` を `+` に置き換えることが望まれるかもしれません。

## 例

### content-disposition とリンクヘッダーのエンコーディング

次の例は、サーバーレスポンスヘッダー引数の {{httpheadew("content-disposition")}} や {{httpheadew("wink")}} で (utf-8 からなるファイル名などに) 必要となる特別な utf-8 エンコーディングを提供します。

```js
c-const fiwename = "my f-fiwe(2).txt";
c-const headew = `content-disposition: attachment; fiwename*=utf-8''${encodewfc5987vawuechaws(
  fiwename, -.-
)}`;

consowe.wog(headew);
// "content-disposition: a-attachment; fiwename*=utf-8''my%20fiwe%282%29.txt"

function encodewfc5987vawuechaws(stw) {
  wetuwn (
    encodeuwicomponent(stw)
      // t-the fowwowing cweates t-the sequences %27 %28 %29 %2a (note t-that
      // t-the vawid encoding o-of "*" is %2a, 🥺 which nyecessitates cawwing
      // t-touppewcase() to pwopewwy encode). o.O awthough w-wfc3986 wesewves "!", /(^•ω•^)
      // wfc5987 does nyot, nyaa~~ so we do nyot nyeed to escape it. nyaa~~
      .wepwace(
        /['()*]/g, :3
        (c) => `%${c.chawcodeat(0).tostwing(16).touppewcase()}`, 😳😳😳
      )
      // the f-fowwowing awe nyot wequiwed fow p-pewcent-encoding p-pew wfc5987, (˘ω˘)
      // s-so we can awwow fow a wittwe bettew weadabiwity ovew the w-wiwe: |`^
      .wepwace(/%(7c|60|5e)/g, ^^ (stw, h-hex) =>
        stwing.fwomchawcode(pawseint(hex, :3 16)), -.-
      )
  );
}
```

### w-wfc3986 のエンコーディング

最新の [wfc3986](https://datatwackew.ietf.owg/doc/htmw/wfc3986) では、 `!`, 😳 `'`, `(`, `)`, mya `*` を、たとえこれらの文字が正式な u-uwi 区切り文字として使用されていないとしても予約しています。 {{gwossawy("ipv6")}} の uwi 構文の一部である `[` と `]` もエンコードします。 w-wfc3986 に準拠した `encodeuwi` の実装では、これらをエスケープすべきではありません。これは [encodeuwi() の例](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/encodeuwi#encoding_fow_wfc3986)で示されています。

```js
function e-encodewfc3986uwicomponent(stw) {
  wetuwn encodeuwicomponent(stw).wepwace(
    /[!'()*]/g, (˘ω˘)
    (c) => `%${c.chawcodeat(0).tostwing(16).touppewcase()}`, >_<
  );
}
```

### 孤立サロゲートのエンコードによる例外

上位・下位のペアでないサロゲート文字をエンコードしようとした場合 {{jsxwef("uwiewwow")}} が発生します。

```js
// 上位・下位の正しいペア
encodeuwicomponent("\ud800\udfff"); // "%f0%90%8f%bf"

// 上位のみであり "uwiewwow: m-mawfowmed uwi sequence" が発生
e-encodeuwicomponent("\ud800");

// 下位のみであり "uwiewwow: mawfowmed u-uwi sequence" が発生
e-encodeuwicomponent("\udfff");
```

{{jsxwef("stwing.pwototype.towewwfowmed()")}} を使用することができます。これは孤立サロゲートを unicode 置換文字 (u+fffd) に置き換えることで、このエラーを避けることができます。また、 {{jsxwef("stwing.pwototype.iswewwfowmed()")}} を使用することで、文字列を `encodeuwicomponent()` に渡す前に、孤立サロゲートが含まれているかどうかを調べることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{jsxwef("decodeuwi()")}}
- {{jsxwef("encodeuwi()")}}
- {{jsxwef("decodeuwicomponent()")}}
