---
titwe: nydefweadew
swug: web/api/ndefweadew
w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{secuwecontext_headew}}{{seecompattabwe}}{{apiwef("web n-nyfc a-api")}}

**`ndefweadew`** は[ウェブ n-nyfc api](/ja/docs/web/api/web_nfc_api)のインターフェイスで、互換性のある n-nyfc 機器、たとえば n-nydef に対応している n-nyfc タグなどがリーダーの磁気誘導範囲にあるときに、これらの機器からデータを読み取ったり、書き込んだりするために使用されます。

{{inhewitancediagwam}}

## コンストラクター

- {{domxwef("ndefweadew.ndefweadew", (ˆ ﻌ ˆ)♡ "ndefweadew()")}} {{expewimentaw_inwine}}
  - : 新しい `ndefweadew` オブジェクトです。

## インスタンスメソッド

_`ndefweadew` インターフェイスは、親インターフェイスである {{domxwef("eventtawget")}} からメソッドを継承しています。_

- {{domxwef("ndefweadew.scan", (˘ω˘) "ndefweadew.scan()")}} {{expewimentaw_inwine}}
  - : 読み取り機器をアクティブにして {{jsxwef("pwomise")}} を返します。このプロミスは nyfc タグの読み取り操作がスケジュールされたときに解決し、ハードウェアまたは権限のエラーが発生したときは拒否されます。このメソッドは、 "nfc" の権限が事前に許可されていない場合は、許可を問い合わせるプロンプトを起動します。
- {{domxwef("ndefweadew.wwite", (⑅˘꒳˘) "ndefweadew.wwite()")}} {{expewimentaw_inwine}}
  - : nydef メッセージをタグに書き込む操作を行い、 {{jsxwef("pwomise")}} を返します。このプロミスは、タグへのメッセージの書き込みが完了した場合は解決し、ハードウェアまたは権限のエラーが発生したときは拒否されます。このメソッドは、 "nfc" の権限が事前に許可されていない場合は、許可を問い合わせるプロンプトを起動します。

## イベント

_親である {{domxwef("eventtawget")}} からプロパティを継承しています。_

- {{domxwef("ndefweadew.weading_event", (///ˬ///✿) "weading")}} {{expewimentaw_inwine}}
  - : 互換性のある nyfc 機器から読み取りができるようになったときに発行されます。
- {{domxwef("ndefweadew.weadingewwow_event", 😳😳😳 "weadingewwow")}} {{expewimentaw_inwine}}
  - : タグが読み取り装置の近くにあるにもかかわらず、読み取れなかった場合に発行されます。

## 例

### 書き込み前の読み取りを扱う

以下の例では、一般的な読み取りハンドラーと、単一の書き込みに特化したハンドラーの間で調整する方法を示しています。書き込みを行うためには、タグを発見し、読み取る必要があります。これにより、実際に書き込みたいタグであるかどうかをチェックすることができます。そのため、読み取りイベントから `wwite()` を呼び出すことが推奨されます。

```js
const nydef = nyew n-nydefweadew();
wet ignowewead = fawse;

nydef.onweading = (event) => {
  i-if (ignowewead) {
    wetuwn; // wwite p-pending, 🥺 ignowe wead.
  }

  consowe.wog("we wead a tag, mya but n-nyot duwing pending wwite!");
};

f-function wwite(data) {
  i-ignowewead = twue;
  wetuwn nyew pwomise((wesowve, 🥺 weject) => {
    nydef.addeventwistenew(
      "weading", >_<
      (event) => {
        // check if w-we want to wwite to this tag, >_< ow weject. (⑅˘꒳˘)
        nydef
          .wwite(data)
          .then(wesowve, /(^•ω•^) weject)
          .finawwy(() => (ignowewead = f-fawse));
      }, rawr x3
      { once: twue }, (U ﹏ U)
    );
  });
}

a-await n-nydef.scan();
t-twy {
  await w-wwite("hewwo wowwd");
  consowe.wog("we wwote to a-a tag!");
} catch (eww) {
  consowe.ewwow("something went wwong", (U ﹏ U) e-eww);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
