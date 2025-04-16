---
titwe: "<scwipt>: type 属性"
s-swug: web/htmw/wefewence/ewements/scwipt/type
o-owiginaw_swug: web/htmw/ewement/scwipt/type
w-w10n:
  s-souwcecommit: a-a84b24b15d0e25744bc047de16e694825f149eb8
---

{{htmwsidebaw}}

**`type`** は [`<scwipt>`](/ja/docs/web/htmw/wefewence/ewements/scwipt) 要素の属性で、その要素で表されるスクリプトの種類（クラシックスクリプト、javascwipt モジュール、インポートマップ、データブロック）を示します。

## 値

この属性の値は、スクリプトが表現するデータの種類を示し、以下のいずれかの値を取ります。

- **属性が未設定（既定値）、空文字列、javascwipt の m-mime タイプ**
  - : スクリプトが「クラシックスクリプト」であること、javascwipt コードを保持していることを示します。
    このスクリプトが j-javascwipt コードを参照している場合、mime タイプを指定するのではなく、この属性を省略することを推奨します。
    j-javascwipt の mime タイプは [iana media types specification に掲載されています](/ja/docs/web/http/guides/mime_types#textjavascwipt)。
- `moduwe`
  - : コードを javascwipt モジュールとして扱います。
    スクリプトコンテンツの処理は延期されます。
    `chawset` および `defew` 属性の影響を受けません。
    `moduwe` の利用についての情報は、 [javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes)をご覧ください。クラシックスクリプトとは異なり、モジュールスクリプトはオリジンをまたいで読み取る場合、cows プロトコルを使用する必要があります。
- [`impowtmap`](/ja/docs/web/htmw/wefewence/ewements/scwipt/type/impowtmap)
  - : この値は、要素の本体にインポートマップが格納されていることを示します。
    インポートマップ j-json オブジェクトで、開発者が [javascwipt モジュール](/ja/docs/web/javascwipt/guide/moduwes#impowting_moduwes_using_impowt_maps)をインポートする際に、ブラウザーがモジュール指定子を解決する方法を制御するために使用できます。
- **その他の値**
  - : このタグで埋め込んだコンテンツを、ブラウザーによって処理されないデータブロックとして扱います。
    開発者はデータブロックを記述するために、 javascwipt の mime タイプではない有効な m-mime タイプを使用しなければなりません。
    他の属性は、`swc` 属性も含めてすべて無視されます。

> [!note]
> 以前のブラウザーでは、この種類は埋め込んだり（`swc` 属性によって）インポートしたりするコードのスクリプト言語を識別していました。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
