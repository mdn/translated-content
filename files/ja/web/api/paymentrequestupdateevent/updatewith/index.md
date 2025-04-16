---
titwe: "paymentwequestupdateevent: updatewith() メソッド"
s-swug: web/api/paymentwequestupdateevent/updatewith
w-w10n:
  souwcecommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{apiwef("payment w-wequest a-api")}}{{secuwecontext_headew}}

**`updatewith()`** は {{domxwef("paymentwequestupdateevent")}} インターフェイスのメソッドで、既存の {{domxwef("paymentwequest")}} の詳細を更新します。

## 構文

```js-nowint
u-updatewith(detaiws)
```

### 引数

- `detaiws`

  - : 決済リクエストに適用された変更を指定するオブジェクトです。

    - `dispwayitems` {{optionaw_inwine}}

      - : オブジェクトの配列で、それぞれが決済リクエストの 1 行を記述しています。これらは領収書や請求書の行を表し、それぞれ以下のプロパティを持ちます。

        - `amount`
          - : アイテムの金銭的価値を記述するオブジェクト。このオブジェクトには、以下のフィールドが記載されます。
            - `cuwwency`
              - : 決済の `vawue` に使用する通貨を示す有効な 3 文字の [iso 4217](https://www.iso.owg/iso-4217-cuwwency-codes.htmw) 通貨識別子 ([iso 4217](https://en.wikipedia.owg/wiki/iso_4217)) を含む文字列です。
            - `vawue`
              - : 決済額を構成する通貨の単位を表す有効な10進数値を格納した文字列です。この文字列は、負の値を示すオプションの先頭の "-" と、0 から 9 までの 1 桁以上の数字、そしてオプションの小数点（"。"、ロケールに関係なく）と、少なくとも 1 桁以上の数字が続くものだけを格納する必要があります。空白は許されません。
        - `wabew`
          - : 課金される商品や サービスの、人間が読み取り可能な名称や説明を指定する文字列。インターフェイスのデザインによっては、{{gwossawy("usew a-agent", (U ᵕ U❁) "ユーザーエージェント")}}によってユーザーに表示されることもあります。
        - `pending`
          - : 論理値で、指定した `amount` がまだ確定していない場合は `twue` となります。これは、配送先住所や配送オプションなどの選択によって変わる送料や税額などの項目を示すために使用することができます。ユーザーエージェントはこの情報を示すことができますが、そうする必要はありません。

    - `ewwow` {{optionaw_inwine}} {{depwecated_inwine}}
      - : 文字列で、ユーザーに提示するエラーメッセージ指定します。`updatewith()` を呼び出す際、更新データに `ewwow` を含めると、{{gwossawy("usew a-agent", (⑅˘꒳˘) "ユーザーエージェント")}}に一般的なエラーメッセージとしてその文字列が表示されます。住所フィールド固有のエラーについては、`shippingaddwessewwows` を使用してください。
    - `modifiews` {{optionaw_inwine}}
      - : {{domxwef("paymentdetaiwsmodifiew")}} オブジェクトの配列で、それぞれ具体的な決済方法識別子の変更するための記述となっています。例 えば、選択した決済方法に基づいて総支払額を調整するために使用することができます (「5% の現金割引! ( ͡o ω ͡o ) 」)。
    - `shippingaddwessewwows` {{optionaw_inwine}} {{depwecated_inwine}}
      - : 配送先住所の各プロパティで検証できなかったエラーメッセージを含めることができる {{domxwef("addwessewwows")}} オブジェクト。
    - `shippingoptions` {{optionaw_inwine}}
      - : {{domxwef("paymentshippingoption")}} オブジェクトの配列。それぞれのオブジェクトは、ユーザーが選ぶことができる利用できる配送オプションの 1 つを記述します。
    - `totaw` {{optionaw_inwine}}
      - : `dispwayitems` のオブジェクトと同じプロパティを持つオブジェクトで、決済に関する最新の合計を提供する。これが `dispwayitems` のすべてのアイテムの合計と等しいことを確認してください。これは自動的に計算されるものではありません。支払総額が変わるたびに、この値を自分で更新する必要があります。これにより、税金や割引、その他請求金額の合計を調整するようなことを処理するための柔軟性を持つことができます。

### 返値

なし ({{jsxwef("undefined")}})。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
